/*
 * Copyright 2011 2012 2013 Darko Pantić (pdarko@myopera.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.addEventListener("load", pageLoaded, false)

var /**
	 * This object will hold references to all tabs containing video.
	 * Every property will be new object whose key is tab (video) ID.
	 * This new object will have structure as described below:
	 *
	 * ID.firstplay (Boolean) - true if video is never played
	 * ID.focused (Boolean) - true if tab is currently focused
	 * ID.playing (Boolean) - true if video is playing
	 * ID.source (WindowProxy) - reference to tab (for sending messages)
	 * ID.origin (String) - URI of page
	 * ID.title (String) - title of the video
	 */
	video = {},
	// Number of videos in list.
	videocount = 0,
	// Reference to toolbar button and tab associated with it.
	toolbar = {
		button: null,
		videoid: ""
	},
	// This object will hold references to timeouts which are trying to
	// ping opened tabs to see if they are still alive.
	ping = {},
	// Reference to log viewer window.
	logViewer = null,
	// Reference to time-out that checks for update.
	updateTimeout = NaN,
	// Update Psy animation interval.
	dancingPsy = NaN,
	// Current animation frame.
	psyFrame = 0

// Load event listener.
function pageLoaded(event) {
	if (!checkPreferences()) {
		log.error('An error occurred during startup process. Background process cannot be started.')
		return
	}

	// Check if this is first run.
	if (pref.getPref("firstrun") === null) {
		extension.tabs.create({
			url: extensionAddress + "/share/page/firstrun.html",
			focused: true
		})

		log.info('Extension is run for the first time. Recommended preferences will be loaded.')

		loadRecommendedPreferences(true)
		pref.setPref("firstrun", false)
		pref.setPref("version", extVersion)
	}
	// Check if extension is updated.
	else if (String.natcmp(pref.getItem("version"), extVersion) < 0) {
		extension.tabs.create({
			url: extensionAddress + "/share/page/update.html#old=" + pref.getItem("version"),
			focused: true
		})

		log.info('Extension is updated from version', pref.getItem("version"), 'to', extVersion, '.')

		pref.setPref("version", extVersion)
	}

	extension.addEventListener("connect", connected, false)
	extension.addEventListener("disconnect", disconnected, false)
	extension.addEventListener("message", messageReceived, false)
	window.addEventListener("storage", storageChanged, false)

	log.Info('Background process started.')

	extension.broadcastMessage({ subject: "background process started" })

	checkForUpdate()
}

function checkPreferences() {
	// Check if widget storage is available.
	try {
		pref.setItem("test", "test")
	}
	// If an error occurs display error message and abort.
	catch (error) {
		var message = "Widget storage area is disabled.\n"
					  + "Widget storage is needed to store preferences.",
			url = extensionAddress + "/share/page/error.html#"

		extension.tabs.create({
			url: url + window.encodeURIComponent(message),
			focused: true
		})

		log.error('Widget storage area is disabled. Error message: ' + error.message + '.')
		return false
	}
	pref.removeItem("test")

	// Compare preferences structure.
	comparePrefs()

	return true
}

// Run when connection with script(s) is established.
function connected(event) {
	if (event.origin == extensionAddress + "/share/page/log.html")
		logViewer = event.source
}

// Run when connection with script(s) is lost.
function disconnected(event) {
	if (event.origin == extensionAddress + "/share/page/popup.html")
		extension.broadcastMessage({ subject: "popup closed" })
	else if (event.origin == extensionAddress + "/share/page/log.html")
		logViewer = null
	else if (/^widget.+index\.html$|\.youtube\.com/.test(event.origin))
		removeTab(event)
}

// Storage event does not fire when preferences are changed from
// background process so we will create one.
function fireStorageEvent(key, oldValue) {
	var event = window.document.createEvent("StorageEvent")

	event.initStorageEvent("storage", true, false, key, oldValue,
						   pref.getItem(key), window.location.href, pref)
	window.dispatchEvent(event)

	log.info('Storage event is manually fired.\n',
			{
				key: key,
				oldValue: oldValue,
				newValue: pref.getItem(key)
			})
}

// Monitor changes in preferences and send them to all tabs.
function storageChanged(event) {
	switch (event.key) {
		case "addtoolbarbutton":
			if (event.newValue == "true") {
				if (pref.getPref("updatecheck"))
					removeToolbarButton(true)
				addToolbarButton()
			}
			else
				removeToolbarButton(true)
			break
		case "addbuttonpopup":
		case "buttonpopupalways":
			if (toolbar.button) {
				removeToolbarButton(true)
				addToolbarButton()
			}
			break
		case "updatecheck":
			checkForUpdate(event.newValue == "true")
			break
		case "updateinterval":
			checkForUpdate()
	}

	if (!needed(event.key))
		return

	var message = {
			subject: "set preferences",
			key: event.key,
			data: {}
		}

	message.data[event.key] = pref.getPref(event.key)
	extension.broadcastMessage(message)

	log.info('Some preferences are changed. Changes are dispatched to injected scripts.')
}

// Says if preferences are needed/used in injected script.
function needed(key) {
	switch (key) {
		case "addbuttonpopup":
		case "addtoolbarbutton":
		case "buttonpopupalways":
		case "firstrun":
		case "popupupdateinterval":
		case "unapprovedcheck":
		case "updatecheck":
		case "updatechecktime":
		case "updateinterval":
			return false
	}

	return key.indexOf("QuotaTest") < 0
}

// Inbox (with spam filter :)).
function messageReceived(event) {
	var data = event.data.data,
		subject = event.data.subject

	// Spam filter.
	switch (subject) {
		// New window is ready to receive messages.
		case "hello":
			log.info('Got greetings form ' + event.origin + '.')

			var play = true
			if (pref.getPref("preventcrossplay")) {
				if (pref.getPref("disableAutoPlay"))
					play = false
				else {
					for (var id in video)
						if (video[id].playing)
							play = false
				}
			}

			sendMessage(event, {
				subject: "auto play",
				data: {
					autoplay: play
				}
			})

			log.info('Autoplay option is sent to injected script on ' + event.origin + '.',
					 'Autoplay is “' + play + '“.')
			break
		case "add tab":
			log.info('Received request to add video to list.',
					 'From ' + event.origin + '.')
			addTab(event)
			break
		case "remove tab":
			log.info('Received request to remove video from list.',
					 'From ' + event.origin + '.')
			removeTab(event)
			break
		case "player ready":
			sendMessage(event, event.data)

			if (!data.id || !video[data.id]) {
				log.warn('Got “player ready” message but video is not in list! Asking for video info.',
						 'From ' + event.origin + '.')
				sendMessage(event, { subject: "give me info" })
			}
			else
				log.info('Player on page ' + data.id + ' is ready to play video.')
			break
		case "player state changed":
			if (!data.id) {
				log.warn('Player changed state but video ID is missing! Asking for ID.',
						 'New state: ' + data.state + '.',
						 'From ' + event.origin + '.')
				sendMessage(event, { subject: "give me info" })
				break
			}
			else if (!video[data.id]) {
				log.warn('Player changed state but video is not in list! Asking for video info.',
						 'New state:' + data.state + '.',
						 'From ' + event.origin + '.')
				sendMessage(event, { subject: "give me info" })
				break
			}

			log.info('Player on page ' + data.id + ' changed state to ' + data.state + '.')

			switch (data.state) {
				case 0:
					video[data.id].playing = false
					if (pref.getPref("loop")) {
						sendMessage(event, {
							subject: "player action",
							data: {
								exec: "play"
							}
						})
					}
					break
				case 1:
					video[data.id].playing = true
					video[data.id].firstplay = false
					toolbar.videoid = data.id

					if (pref.getPref("preventcrossplay")) {
						for (var id in video) {
							if (id != data.id) {
								sendMessage(video[id], {
									subject: "player action",
									data: {
										exec: "pause"
									}
								})
							}
						}
					}
					break
				case 2:
				case -1:
					video[data.id].playing = false
			}

			updateToolbarButton()
			break
		case "toggle loop":
			var oldValue = pref.getPref("loop")
			pref.setPref("loop", !oldValue)
			fireStorageEvent("loop", oldValue)
			break
		case "toggle custom colors":
			var oldValue = pref.getPref("enablecustomcolors")
			pref.setPref("enablecustomcolors", !oldValue)
			fireStorageEvent("enablecustomcolors", oldValue)
			break
		case "toggle custom css":
			var oldValue = pref.getPref("enablecustomstyle")
			pref.setPref("enablecustomstyle", !oldValue)
			fireStorageEvent("enablecustomstyle", oldValue)
			break
		case "load external resource":
			loadExternalResource(event.data, event.source)
			break
		case "show preferences":
			extension.tabs.create({
				url: extensionAddress + "/options.html#preferences",
				focused: true
			})
			break
		case "show bug report window":
			extension.tabs.create({
				url: extensionAddress + "/share/page/bug-report.html",
				focused: true
			})
			break
		case "tab focused":
			if (!data.id || !video[data.id]) {
				if (!data.player)
					break

				log.warn('Tab is focussed but video ID is missing or video is not in video list!',
						 'Asking for video info.')
				sendMessage(event, { subject: "give me info" })
				break
			}
			else
				log.info("Tab with video " + data.id + " is focused.")

			if (pref.getPref("playonfocus") && !video[data.id].focused) {
				var play = true
				if (!pref.getPref("forceplayonfocus")) {
					if (pref.getPref("onlyonfirstfocus") && !video[data.id].firstplay)
						play = false

					if (play) {
						for (var id in video) {
							if (video[id].playing)
								play = false
						}
					}
				}

				if (play) {
					sendMessage(event, {
						subject: "player action",
						data: {
							exec: "play"
						}
					})
				}
			}

			video[data.id].focused = true
			break
		case "tab blurred":
			if (data.id && video[data.id]) {
				video[data.id].focused = false
				log.info('Tab with video ' + data.id + ' lost focus.')
			}
			break
		case "echo replay":
			if (ping[data.id]) {
				video[data.id].source = event.source
				reScheduleReplayCheck(data.id)
			}
			else {
				log.warn('Received echo replay from unknown page.',
						 'ID: ' + data.id + '.',
						 'Asking for video info.')
				sendMessage(event, { subject: "give me info" })
			}
			break
		case "here is message log":
			if (logViewer)
				logViewer.postMessage(event.data, [event.source])
			break
		case "close me":
			extension.tabs.getAll().some(function (tab) {
				if (tab.port == event.source) {
					tab.close()
					return true
				}
			})
	}
}

// Add tab to the list of tabs.
function addTab(event) {
	var data = event.data.data
	if (!data.id) {
		log.warn('Cannot add video to list! Missing video ID.')
		return
	}

	var playing = false
	if (data.state == 1)
		playing = true

	if (video[data.id]) {
		video[data.id].playing = playing
		video[data.id].source = event.source
		video[data.id].title = data.title

		if (ping[data.id].removeTimeout)
			reScheduleReplayCheck(data.id)

		log.info('Video is already in list. Video data is updated. ID: ' + data.id + '.')
	}
	else {
		video[data.id] = {
			firstplay: true,
			focused: false,
			playing: playing,
			source: event.source,
			origin: event.origin,
			title: data.title
		}
		videocount++

		ping[data.id] = {}

		log.info('New video added to list. Video ID: ' + data.id + '.')
	}

	// Add toolbar button if needed.
	if (pref.getPref("addtoolbarbutton")) {
		if (toolbar.button === null) {
			toolbar.videoid = data.id
			addToolbarButton()
		}
		else if (toolbar.button.popup === null) {
			removeToolbarButton(true)
			addToolbarButton()
		}
		else
			updateToolbarButton()
	}
}

// Remove tab from list and toolbar button if this is only tab.
function removeTab(event) {
	var previd = null,
		removed = false,
		prevcount = videocount

	// Remove tab and find previous/next tab.
	for (var id in video) {
		if (video[id].source == event.source) {
			window.clearTimeout(ping[id].replayCheck)
			window.clearTimeout(ping[id].removeTimeout)
			delete ping[id]
			delete video[id]
			videocount--

			log.info('Video is removed from list. Video ID: ' + id + '.')

			if (previd)
				break

			removed = true
		}
		else {
			previd = id
			if (removed)
				break
		}
	}

	// If there are more tabs in list update toolbar button.
	if (previd && video[previd]) {
		toolbar.videoid = previd
		updateToolbarButton()
	}
	// Else remove button from toolbar.
	else {
		if (toolbar.button && prevcount > videocount)
			log.info('Video list is empty. Toolbar button may be removed from toolbar.')

		toolbar.videoid = ""
		removeToolbarButton(prevcount > videocount)
	}
}

function addToolbarButton() {
	// Add button only if there is tab to associate it with or
	// there is no available update.
	if (toolbar.button || !toolbar.videoid && !availableUpdate)
		return

	var addButton = pref.getPref("addtoolbarbutton"),
		addPopUp = pref.getPref("addbuttonpopup"),
		addPopUpAlways = pref.getPref("buttonpopupalways"),
		button = {
			badge: {
				backgroundColor: "hsla(60, 100%, 50%, .4)",
				color: "#a52a2a",
				display: "block",
				textContent: "0"
			},
			disabled: false,
			icon: "share/image/toolbar-button.png",
			title: ""
		}

	if (addButton && addPopUpAlways && videocount || addPopUp && videocount > 1) {
		button.popup = {
			href: "share/page/popup.html",
			height: 1,
			width: 350
		}
	}

	toolbar.button = opera.contexts.toolbar.createItem(button)
	opera.contexts.toolbar.addItem(toolbar.button)

	if (!button.popup)
		toolbar.button.addEventListener("click", toolbarButtonListener, false)

	log.info('Button added to extension’s toolbar.')

	updateToolbarButton()
}

function removeToolbarButton(force) {
	if (toolbar.button && (force || !availableUpdate)) {
		clearInterval(dancingPsy)
		opera.contexts.toolbar.removeItem(toolbar.button)
		toolbar.button = null

		log.info('Button is removed from extension’s toolbar.')
	}

	if (pref.getPref("updatecheck") && availableUpdate)
		addToolbarButton()
}

// Executed when user click on toolbar button.
function toolbarButtonListener(event) {
	if (pref.getPref("addtoolbarbutton") && toolbar.videoid) {
		if (video[toolbar.videoid].playing) {
			sendMessage(video[toolbar.videoid], {
				subject: "player action",
				data: {
					exec: "pause"
				}
			})
		}
		else {
			sendMessage(video[toolbar.videoid], {
				subject: "player action",
				data: {
					exec: "play"
				}
			})
		}
	}
	else if (pref.getPref("updatecheck") && availableUpdate) {
		extension.tabs.create({
			url: extensionAddress + "/share/page/update.html#available",
			focused: true
		})
	}
}

// Add icon and tool-tip to toolbar button.
function updateToolbarButton() {
	if (toolbar.button === null)
		return

	var icon = "share/image/paused.png",
		title = "No playing videos."

	if(toolbar.videoid && pref.getPref("addtoolbarbutton")) {
		if (video[toolbar.videoid].playing) {
			icon = "share/image/playing.png"
			title = video[toolbar.videoid].title + " [Playing]"
		}
		else {
			icon = "share/image/paused.png"
			title = video[toolbar.videoid].title + " [Paused]"
		}
	}
	else if (availableUpdate && (!videocount || !pref.getPref("addtoolbarbutton"))) {
		icon = "share/image/toolbar-button-attention.png"
		title = "An update for ExtendTube is available. Click for more info."
	}

	if (availableUpdate)
		icon = icon.replace(/(-attention)?\.png$/, "-attention.png")

	clearInterval(dancingPsy)
	if (/\bPSY\b/i.test(title) && /\bGANGNAM\b/i.test(title) && title.indexOf("[Playing]") > 0)
		dancingPsy = setInterval(animatePsy, 129)

	if (toolbar.button.title != title) {
		toolbar.button.icon = icon
		toolbar.button.title = title
	}

	// Update badge text and colours.
	if (videocount && pref.getPref("addtoolbarbutton")) {
		toolbar.button.badge.textContent = videocount.toString()
		toolbar.button.badge.backgroundColor = "hsla(60, 100%, 50%, .4)"
		toolbar.button.badge.color = "#a52a2a"
	}
	else {
		toolbar.button.badge.textContent = "!"
		toolbar.button.badge.backgroundColor = "hsla(200, 100%, 50%, .2)"
		toolbar.button.badge.color = "#010203"
	}
}

// Load resource from web.
function loadExternalResource(message, target) {
	log.info('Loading external resource from ' + message.data.uri + '.')

	var xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function processExternalResource() {
		if (xhr.readyState != 4)
			return

		var xmlser = new XMLSerializer(),
			xmlstr = ""

		if (xhr.responseXML)
			xmlstr = xmlser.serializeToString(xhr.responseXML)

		var logdata = {
				xml: xmlstr.replace(/[\n\r\t]/g, ""),
				text: xhr.responseText.replace(/[\n\r\t]/g, "")
			}

		if (logdata.xml.length > 200)
			logdata.xml = logdata.xml.substr(0, 197) + "..."
		if (logdata.text.length > 200)
			logdata.text = logdata.text.substr(0, 197) + "..."

		log.info('External resource loaded.\n', logdata)

		message.subject = "external resource loaded"
		message.data.text = xhr.responseText
		message.data.xml = xmlstr

		try {
			target.postMessage(message)
		}
		catch (error) {
			log.error('An external resource is loaded but cannot be forwarded to injected script.',
					  '\nError: ' + error.message + '.',
					  '\nStack:\n' + error.stacktrace)
		}
	}

	xhr.open(message.data.method, message.data.uri, true)

	if (message.data.header)
		for (var name in message.data.header)
			xhr.setRequestHeader(name, message.data.header[name])

	xhr.send(message.data.postdata)
}

// Load resource from within extension package.
function loadInternalResource(uri) {
	log.info('Loading internal resource from ' + extensionAddress + '/' + uri + '.')

	var xhr = new XMLHttpRequest()
	xhr.open("get", extensionAddress + "/" + uri, false)
	xhr.send()

	return xhr.responseText
}

function reScheduleReplayCheck(id) {
	window.clearTimeout(ping[id].replayCheck)

	if (ping[id].removeTimeout) {
		window.clearTimeout(ping[id].removeTimeout)
		ping[id].removeTimeout = NaN

		log.info('Page found. It wont be removed from list.')
	}

	ping[id].replayCheck = window.setTimeout(function () {
		// Video page didn’t sent echo replay.
		// Try to send message to it.
		try {
			video[id].source.postMessage({ subject: "echo request" })
		}
		catch (error) {
			log.warn('Message cannot be sent to page with ID ' + id + '. Searching for page.')

			extension.broadcastMessage({ subject: "give me info" })
		}

		markAsDead(id)
	}, 1.3e3)
}

function markAsDead(id) {
	log.warn('Page with ID ' + id + ' not found.',
			 'It\'s marked as dead and will be removed if replay from it is not received soon.')

	ping[id].removeTimeout = window.setTimeout(function () {
		if (!video[id] || !video[id].source)
			return

		log.error('Page with ID ' + id + ' not found.',
				  'Tab is probably closed and video will be removed from list.')

		removeTab({ source: video[id].source })
	}, 987)
}

function checkForUpdate(check) {
	if (check === undefined)
		check = pref.getPref("updatecheck")

	if (!check) {
		window.clearTimeout(updateTimeout)

		log.info('Check for updates is disabled.')

		removeToolbarButton(true)
		return
	}

	var lastCheck = pref.getPref("updatechecktime"),
		interval = pref.getPref("updateinterval") * 3600000,
		time = Date.now()

	log.Info('Last check for updates was on',
			 (new Date(lastCheck)).format("%d.%m.%Y at %T."))

	var nextCheck = lastCheck + interval
	if (time + 30000 > nextCheck) {
		updateCheck()
		nextCheck = interval
	}
	else
		nextCheck -= time

	updateTimeout = window.setTimeout(checkForUpdate, nextCheck)

	log.Info('Next check for update scheduled for',
			 (new Date(time + nextCheck)).format("%d.%m.%Y at %T."))
}

function updateCheck() {
	log.Info('Checking for approved update.')

	var xhr = new XMLHttpRequest(),
		approved = extensionAddress + "/config.xml",
		// unapproved = "http://my.opera.com/pdarko/blog/extend-tube"
		unapproved = "https://files.myopera.com/An-dz/ExtendTube/lastversion"

	xhr.requestURI = approved
	xhr.onreadystatechange = function processServerResponse() {
		if (xhr.readyState != 4)
			return

		if (xhr.requestURI == approved) {
			var uDesc = xhr.responseXML.getElementsByTagName("update-description"),
				uInfo = xhr.responseXML.getElementsByTagName("update-info")

			if (uDesc.length) {
				approved = uDesc[0].getAttribute("href")

				xhr.requestURI = approved
				xhr.open("get", xhr.requestURI)
				xhr.send()

				return
			}
			else if (uInfo.length) {
				var version = uInfo[0].getAttribute("version").replace(/\-.+/, "")
				if (String.natcmp(version, extVersion) > 0) {
					log.Info('A new version of ExtendTube is available ('
								 + version + '; currently installed is ' + extVersion + ').')

					if (pref.getPref("allowautoupdate")) {
						log.Info('Auto update is allowed. New version will be installed from\n',
								 uInfo[0].getAttribute("src"))

						extension.tabs.create({
							url: uInfo[0].getAttribute("src"),
							focused: true
						})
					}
					else {
						availableUpdate = "approved=" + version
						addToolbarButton()
					}
				}
				else
					log.Info('No available update. Latest version is installed ('
								 + extVersion + ').')
			}
			else
				log.Warn('Cannot get information about new version. Update description missing.')


			if (pref.getPref("unapprovedcheck")) {
				log.Info('Checking for unapproved update.')

				xhr.requestURI = unapproved
				xhr.open("get", xhr.requestURI)
				xhr.send()
			}
		}
		else {
			// var doc = document.createElement("doc")
			// doc.insertAdjacentHTML("afterbegin", cleanHtml(xhr.responseText))

			// var version = doc.querySelector("#excerpt p.note a")
			var version = xhr.responseText
			if (!version) {
				log.Warn('Cannot get information about new (unapproved) version.')
				return
			}

			// version = version.textContent
			if (String.natcmp(version, extVersion) > 0) {
				log.Info('A new (unapproved) version of ExtendTube is available (',
							 + version + '; currently installed is ' + extVersion + ').')

				availableUpdate += "&unapproved=" + version
				addToolbarButton()
			}
			else
				log.Info('No available unapproved update. Latest version is installed ('
							 + extVersion + ').')
		}

		pref.setPref("updatechecktime", Date.now())
	}

	xhr.open("get", xhr.requestURI)
	xhr.send()
}

// Return body of given HTML.
function cleanHtml(html) {
	var body = html.match(/<body[^>]*>([\S\s]*)<\/body>/i)
	if (body && body[1])
		return body[1]

	return html
}

function sendMessage(destination, message) {
	try {
		destination.source.postMessage(message)
	}
	catch (error) {
		log.error('An error occurred while trying to send message to injected script.',
				  'Destination: ' + destination.origin + '.',
				  '\nError: ' + error.message)
	}
}

function animatePsy() {
	psyFrame = (psyFrame + 1) % 27
	toolbar.button.icon = "share/image/psy/" + psyFrame + ".png"
}
