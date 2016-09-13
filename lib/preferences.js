/*
 * Copyright 2011 2012 2013 Darko Pantić (pdarko@myopera.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This are default preferences. They can be changed on preferences page.
// Default preferences will not change YouTube behaviour.
var defaultPreferences = {
		// Custom actions.
		actions: {},
		// Add button to toolbar.
		addtoolbarbutton: false,
		// Add pop-up to toolbar button.
		addbuttonpopup: true,
		// Allow auto update. This works only for approved versions
		// and update will be installed from official extension page
		// at https://extension-updates.opera.com.
		allowautoupdate: false,
		// Overwrite disableautoplay preference on playlists
		// making videos on playlists autoplay.
		autoplayOnPlaylist: false,
		// Add pop-up to toolbar button even if there's
		// one video available to control.
		buttonpopupalways: true,
		// Buffer whole video even when paused.
		bufferall: false,
		// Remove various parts of page on "watch" pages.
		cleanwatch: {
			// All buttons beneath the player.
			allbuttons: false,
				// Add to queue/favourites/playlist button.
				addtobutton: false,
				// Like/dislike this button.
				likebutton: false,
				// Flag as inappropriate button.
				flagbutton: false,
				// Share this video button.
				sharebutton: false,
				// Show video statistics button.
				statsbutton: false,
				// Interactive Transcript button.
				transcript: false,
			// All comments.
			allcomments: false,
			// Whole sidebar.
			allsidebar: false,
				// Featured videos in sidebar.
				featured: false,
				// Suggested videos in sidebar.
				suggestions: false,
			// Hide branding info from page.
			brand: false,
			// Video description.
			description: false,
			// Page footer.
			footer: false,
			// Hide page header (logo, search form, links).
			header: false,
			// Hide left guide list
			guide: false,
			// Headline user information.
			headuser: false,
			// Language alert.
			langalert: false,
			// Subscribe button.
			subscribe: false,
			// Hide video title.
			videotitle: false,
			// Video view counter.
			viewcount: false
		},
		// Redefined colours. Can be any CSS acceptable colour.
		// See http://www.w3.org/TR/css3-color/#colorunits.
		customcolor: {
			badgeBackground: "hsl(0, 0%, 87%)",
			badgeText: "hsl(0, 0%, 27%)",
			buttonBackground: "hsl(0, 0%, 97%)",
			buttonBackgroundActive: "hsl(0, 0%, 91%)",
			buttonBackgroundFocused: "hsla(0, 0%, 91%)",
			buttonBackgroundHover: "hsl(0, 0%, 94%)",
			buttonBorder: "hsl(0, 0%, 83%)",
			buttonBorderActive: "hsl(0, 0%, 78%)",
			buttonBorderFocused: "hsl(0, 0%, 78%)",
			buttonBorderHover: "hsl(0, 0%, 78%)",
			buttonText: "hsl(0, 0%, 20%)",
			buttonTextActive: "hsl(0, 0%, 20%)",
			buttonTextFocused: "hsl(0, 0%, 20%)",
			buttonTextHover: "hsl(0, 0%, 20%)",
			clickCardBackground: "hsl(0, 0%, 98%)",
			clickCardBorder: "hsl(0, 0%, 80%)",
			headerFooterBackground: "hsl(0, 0%, 100%)",
			link: "hsl(206, 79%, 53%)",
			linkHover: "hsl(206, 79%, 53%)",
			menuBackground: "hsl(0, 0%, 100%)",
			menuBorder: "hsl(0, 0%, 86%)",
			menuItemBackground: "hsla(0, 0%, 0%, 0)",
			menuItemBackgroundHover: "hsl(0, 0%, 27%)",
			menuItemText: "hsl(0, 0%, 13%)",
			menuItemTextHover: "hsl(0, 0%, 100%)",
			pageBackgroundPrimary: "hsl(0, 0%, 95%)",
			pageBackgroundSecondary: "hsl(0, 0%, 100%)",
			pagePrimary: "hsl(0, 0%, 20%)",
			pageSecondary: "hsl(0, 0%, 60%)",
			primaryButtonBackground: "hsla(0, 0%, 0%, 0)",
			primaryButtonBackgroundHover: "hsla(0, 0%, 0%, 0)",
			primaryButtonBorder: "hsl(358, 79%, 45%)",
			primaryButtonBorderHover: "hsl(358, 79%, 45%)",
			primaryButtonText: "hsl(0, 0%, 20%)",
			primaryButtonTextHover: "hsl(0, 0%, 20%)",
			separatorsAndBorders: "hsl(0, 0%, 89%)",
			toolTipBackground: "hsl(0, 0%, 0%)",
			toolTipText: "hsl(0, 0%, 100%)",
			videoThumbnail: "hsl(0, 0%, 100%)",
			videoThumbnailHover: "hsla(0, 0%, 0%, 0)",
			videoTitle: "hsl(0, 0%, 0%)"
		},
		// Use custom colors in extension pop-up.
		customcolorsinpopup: false,
		// Replace YouTube logo.
		customlogo: false,
		// Custom style to add to page.
		customstyle: "",
		// Disable autoplay of videos.
		disableAutoPlay: false,
		// Disable auto buffering of videos.
		disableautobuffering: false,
		// Disable flash player shortcuts when they are exposed to page.
		disableflashshortcuts: /Linux|BSD|Mac/.test(window.navigator.platform),
		// Disable play symbol on tab title.
		disablePlaySymbol: false,
		// Redefine colours on page.
		enablecustomcolors: false,
		// Add custom CSS to page.
		enablecustomstyle: false,
		// Add download button and menu to page.
		enabledownload: false,
		// Make player shortcuts work if player is not focused.
		exposeplayershortcuts: false,
		// Add player pop out button.
		enablepopout: false,
		// Enable keyboard shortcuts.
		enableshortcutkeys: false,
		// Make video player expanded.
		enablewideplayer: false,
		// Let extension write flash player to page.
		// This option is used only on watch pages.
		extensionwriteplayer: false,
		// Add few more buttons.
		extrabuttons: false,
		// Force video loop in playlists.
		forceloop: false,
		// Force play on focus.
		forceplayonfocus: false,
		// Show only video player when Opera is in full screen mode.
		fullscreenstyle: false,
		// Hide annotations in flash player.
		hideannotations: false,
		// Auto-hide player controls.
		// 0 = controls and progress bar always visible,
		// 1 = controls and progress bar will be hidden after few seconds,
		// 2 = controls will be visible and progress bar will be minimised
		//     after few seconds
		// 3 = controls will be hidden and progress bar will be minimised
		//     after few seconds
		hidecontrols: 3,
		// Hide ads on page.
		hidepageads: true,
		// Hide ads in video player.
		hideplayerads: true,
		// How wide player should be. Can be "auto", "medium" or "large".
		howwide: "auto",
		// Use this language.
		locale: "en",
		// What type of messages should be logged to error console.
		// 0 = nothing, 1 = errors, 2 = warnings, 3 = informations.
		loglevel: 1,
		// Play video over and over again.
		loop: false,
		// Add loop button to page.
		loopbutton: false,
		// Enable lyrics to be loaded.
		lyrics: false,
		// Show lyrics button always. If set to "true" lyrics button
		// will be always visible. If not, ExtendTube will search for
		// artist and title and, only if find any, add a button.
		lyricsenablealways: false,
		// Whether lyrics search log should remain visible upon completed search.
		lyricssearchlog: false,
		// Play video only if tab is focused first time.
		onlyonfirstfocus: false,
		// Should history navigation mode be overridden. If set to "false" can
		// cause problems while navigating through tab history (like video not
		// being played on page load and toolbar button showing wrong video count).
		overridehistory: true,
		// If set to "true" language will always be English or whatever
		// language user chooses.
		overridelocale: false,
		// What theme to use for video player.
		// Can be "dark" or "light".
		playertheme: "dark",
		// Play video when page is focused.
		playonfocus: false,
		// Display real video size on pop out.
		popoutrealsize: false,
		// How fast pop-up should be updated (milliseconds).
		popupupdateinterval: 456,
		// Show preferences button on page.
		prefbutton: false,
		// Prevent multiple videos from playing at the same time.
		preventcrossplay: false,
		// What colour to use for video player's progress bar.
		// Can be "red" or "white".
		progresscolor: "red",
		// Whether to show video ratings over thumbnails.
		ratevideos: false,
		// Whether to show video ratings outside thumbnails.
		rateout: false,
		// When saving video replace invalid characters with this.
		replace: "",
		// When showing/hiding lyrics should page be scrolled for
		// lyrics or video to be visible.
		scrollonlyricsdisplay: true,
		// While seeking back/forward seek for this number of seconds.
		seektime: 3,
		// Keyboard shortcuts.
		shortcut: {
			// Expand/shrink video player.
			expandplayer: "",
			// Play just one frame.
			framestep: "",
			// Hide/show all elements on page.
			hideall: "",
			// Enable/disable section loop.
			loopsection: "",
			// Mark section end time.
			marksectionend: "",
			// Mark section start time.
			marksectionstart: "",
			// Play/pause video.
			playpause: "",
			// Pop-out player.
			popplayer: "",
			// Jump few seconds back.
			seekback: "",
			// Jump few seconds forward.
			seekforward: "",
			// Show/hide lyrics.
			showlyrics: "",
			// Temporary show elements hidden by "page clean-up".
			showhidden: "",
			// Stop video buffering and playback.
			stopbuffer: "",
			// Enable/disable custom colours.
			togglecolors: "",
			// Enable/disable custom CSS.
			togglecss: ""
		},
		// Add stop buffering button.
		stopbutton: false,
		// Mouse hover delay for thumbnail preview.
		thumbhoverdelay: 3000,
		// Enable thumbnail video preview.
		thumbpreview: false,
		// What will trigger preview.
		// Can be "hover" or "button".
		thumbpreviewtrigger: "button",
		// Check for unapproved versions.
		unapprovedcheck: false,
		// Check for update on start-up.
		updatecheck: true,
		// Interval at which to check for new version (in hours).
		updateinterval: 5,
		// Use fallback servers for video download links.
		usefallbacklinks: false,
		// Use light icons for buttons added by extension.
		uselighticons: false,
		// Force this video quality. Can be one of: "default", "tiny",
		// "small", "medium", "large", "hd720", "hd1080" or "highres".
		videoquality: "default"
	}

// This preferences are not shown in preferences page.
// They can be changed only via Opera Dragonfly.
var hiddenPreferences = {
		// Localised strings used by injected scripts.
		localisedStrings: localisedStrings,
		// Style used by injected scripts.
		style: style,
		// Time of last check for update (UNIX time).
		// This value will schedule update for five minutes after first run.
		updatechecktime: Date.now() - 36e5 * (5 - 1 / 12),
		// Current ExtendTube version.
		version: extVersion,
		// Details about available video formats (used by injected scripts).
		videoFormat: videoFormat
	}

// This are recommended preferences. This object contain parts of
// "defaultPreferences" and "hiddenPreferences" that is recommended and
// will be set when extension is installed.
var recommendedPreferences = {
		actions: {
			"EXAMPLE-expand-video-description": {
				enabled: false,
				exec: "\
// This action is just an example. It may not work at all.\n\
var description = document.querySelector(\"#watch-description\")\n\
if (description)\n\
	description.classList.remove(\"yt-uix-expander-collapsed\")\n",
				trigger: "DOMContentLoaded"
			},
			"EXAMPLE-convert-links-to-html5": {
				enabled: false,
				exec: "\
// This action is just an example. It may not work at all.\n\
Array.prototype.forEach.call(document.querySelectorAll(\"a[href*=\\\"/watch\\\"]\"), function (link) {\n\
	if (/^\\/watch/.test(link.pathname) && !/html5=/.test(link.search))\n\
		link.search += \"&html5=True\"\n\
})\n",
				trigger: "page loaded"
			},
			"EXAMPLE-remove-playlist-links": {
				enabled: false,
				exec: "\
// This action is just an example. It may not work at all.\n\
Array.prototype.forEach.call(document.querySelectorAll(\"a[href*=\\\"/watch\\\"]\"), function (link) {\n\
	if (link.search)\n\
		link.search = link.search.replace(/&?(list|playnext|index)=[^&]+/g, \"\")\n\
})\n",
				trigger: "page loaded"
			}
		},
		addtoolbarbutton: true,
		customcolor: {
			badgeBackground: "hsl(0, 0%, 11.765%)",
			badgeText: "hsl(0, 0%, 76.471%)",
			buttonBackground: "hsl(0, 0%, 11.765%)",
			buttonBackgroundActive: "hsl(0, 0%, 4.706%)",
			buttonBackgroundFocused: "hsla(0, 0%, 0%, 0)",
			buttonBackgroundHover: "hsla(0, 0%, 100%, 0.3)",
			buttonBorder: "hsl(0, 0%, 15.686%)",
			buttonBorderActive: "hsl(358, 79.245%, 41.569%)",
			buttonBorderFocused: "hsl(358, 79.245%, 41.569%)",
			buttonBorderHover: "hsla(0, 0%, 100%, 0.2)",
			buttonText: "hsl(0, 0%, 100%)",
			buttonTextActive: "hsl(0, 0%, 100%)",
			buttonTextFocused: "hsl(0, 0%, 76.471%)",
			buttonTextHover: "hsl(0, 0%, 76.471%)",
			clickCardBackground: "hsl(0, 0%, 0%)",
			clickCardBorder: "hsl(0, 0%, 5.882%)",
			headerFooterBackground: "hsl(0, 0%, 6.667%)",
			link: "hsl(358, 79.245%, 41.569%)",
			linkHover: "hsl(0, 0%, 100%)",
			menuBackground: "hsl(0, 0%, 11.765%)",
			menuBorder: "hsl(0, 0%, 8%)",
			menuItemBackground: "hsla(0, 0%, 0%, 0)",
			menuItemBackgroundHover: "hsl(358, 85.306%, 51.961%)",
			menuItemText: "hsl(0, 0%, 76.471%)",
			menuItemTextHover: "hsl(0, 0%, 100%)",
			pageBackgroundPrimary: "hsl(0, 0%, 4.706%)",
			pageBackgroundSecondary: "hsl(0, 0%, 7.843%)",
			pagePrimary: "hsl(0, 0%, 100%)",
			pageSecondary: "hsl(0, 0%, 100%)",
			primaryButtonBackground: "hsla(0, 0%, 0%, 0)",
			primaryButtonBackgroundHover: "hsla(0, 0%, 0%, 0)",
			primaryButtonBorder: "hsl(358, 79.245%, 41.569%)",
			primaryButtonBorderHover: "hsl(0, 0%, 100%)",
			primaryButtonText: "hsl(0, 0%, 100%)",
			primaryButtonTextHover: "hsl(0, 0%, 100%)",
			separatorsAndBorders: "hsl(0, 0%, 9.804%)",
			toolTipBackground: "hsl(0, 0%, 0%)",
			toolTipText: "hsl(0, 0%, 100%)",
			videoThumbnail: "hsla(0, 0%, 0%, 0)",
			videoThumbnailHover: "hsla(0, 0%, 100%, 0.05)",
			videoTitle: "hsl(0, 0%, 100%)"
		},
		customstyle: "\
/* This style is just an example. It may not work. */\n\
#homepage-sidebar-ads,\n\
#yt-hitchhiker-feedback {\n\
	display: none !important;\n\
}\n\
.yt-uix-button-player:focus {\n\
	outline: none !important;\n\
}",
		enablecustomstyle: true,
		enabledownload: true,
		enablepopout: true,
		enableshortcutkeys: true,
		extensionwriteplayer: true,
		extrabuttons: true,
		fullscreenstyle: true,
		hideannotations: true,
		loop: true,
		loopbutton: true,
		lyrics: true,
		onlyonfirstfocus: true,
		preventcrossplay: true,
		ratevideos: true,
		replace: " ",
		shortcut: {
			expandplayer: "w",
			framestep: ".",
			hideall: "h",
			loopsection: "o",
			marksectionend: "]",
			marksectionstart: "[",
			playpause: "Spacebar",
			popplayer: "b",
			seekback: "Left",
			seekforward: "Right",
			showhidden: "a",
			showlyrics: "l",
			stopbuffer: ";",
			togglecolors: "c",
			togglecss: "s"
		},
		thumbpreview: true
	}

// Check to see if preferences are removed or preferences structure is changed
// from outside of extension (e.g. via Dragonfly) and fix if necessary.
function comparePrefs() {
	var version = pref.getItem("version"),
		defs = Object.union(defaultPreferences, hiddenPreferences)

	if (version && String.natcmp(version, extVersion) < 0) {
		exportPreferences()

		pref.setPref("style", defaultPreferences.style)
		pref.setPref("localisedStrings", defaultPreferences.localisedStrings)
		pref.setPref("videoFormat", defaultPreferences.videoFormat)
	}

	log.info('prefs:',
			 'Comparing preferences structure.')

	var changes = compareStructure(defs)
	var changedItems = changes.wrong.concat(changes.missing.filter(function (item) {
				return !/^actions\./.test(item)
			}))

	// If there are changes restore them from recommended preferences.
	if (changedItems.length) {
		defs = Object.union(recommendedPreferences, defs)

		changedItems.forEach(function (item) {
			var key = item.split(".")
			var newPref = defs[key[0]]

			if (key[1]) {
				newPref = pref.getPref(key[0])
				newPref[key[1]] = defs[key[0]][key[1]]
			}

			pref.setPref(key[0], newPref)
		})

		log.warn('prefs:',
				 'Preferences structure is changed outside of the extension.',
				 'Changes are set to recommended preferences.',
				 'Changed items are:',
				 changedItems.join(", ") + '.')
	}
	else {
		log.info('prefs:',
				 'Preferences structure is OK.')
	}

	fixOldPreferences()
}

// Compare structure of given object with preferences.
function compareStructure(object) {
	var prefs = {},
		keys = Object.keyUnion(defaultPreferences, hiddenPreferences)

	// Build preferences structure.
	keys.forEach(function (key) {
		if (key != "version" && key != "firstrun")
			prefs[key] = pref.getPref(key)
	})

	var diff = {
			// Missing from preferences.
			missing: Object.keyComplement(prefs, object),
			// Not part of preferences.
			excess: Object.keyComplement(object, prefs),
			// Type of properties is different.
			wrong: []
		}

	Object.keyIntersection(object, prefs).forEach(function (key) {
		// Item deleted by Opera.
		if (prefs[key] === null)
			diff.missing.push(key)
		// Items are not of same type.
		else if (Object.internalClass(prefs[key]) != Object.internalClass(object[key]))
			diff.wrong.push(key)
		else if (Object.isObject(prefs[key])) {
			var objdiff = {
					missing: Object.keyComplement(object[key], prefs[key]),
					excess: Object.keyComplement(prefs[key], object[key]),
					wrong: []
				}

			Object.keyIntersection(object[key], prefs[key]).forEach(function (seckey) {
				if (typeof prefs[key][seckey] != typeof object[key][seckey])
					objdiff.wrong.push(seckey)
			})

			diff.missing = diff.missing.concat(objdiff.missing.map(function (element) {
					return key + "." + element
				}))
			diff.excess = diff.excess.concat(objdiff.excess.map(function (element) {
					return key + "." + element
				}))
			diff.wrong = diff.wrong.concat(objdiff.wrong.map(function (element) {
					return key + "." + element
				}))
		}
	})

	return diff
}

// Reset all preferences to default.
function loadDefaultPreferences() {
	for (var key in defaultPreferences) {
		// Skip this ones.
		if (/firstrun|version|updatechecktime/.test(key))
			continue

		pref.setPref(key, defaultPreferences[key])
	}

	log.info('prefs:',
			 'Preferences are (re)setted to default values.')
}

// This function will change recommended preferences but other will be left unchanged.
function loadRecommendedPreferences(all) {
	for (var key in recommendedPreferences) {
		if (!all) {
			if ("customstyle" == key && pref.getPref(key) != "")
				continue
			else if ("actions" == key && pref.getItem(key) != "{}")
				continue
		}

		if (Object.isObject(recommendedPreferences[key]))
			pref.setPref(key, Object.union(recommendedPreferences[key], pref.getPref(key)))
		else
			pref.setPref(key, recommendedPreferences[key])
	}

	log.info('prefs:',
			 'Some preferences are (re)setted to recommended values.')
}

// Export preferences for later import.
function exportPreferences(event) {
	var exp = {}
	for (var key in defaultPreferences)
		exp[key] = pref.getPref(key)
	for (key in hiddenPreferences)
		exp[key] = pref.getPref(key)

	delete exp.localisedStrings
	delete exp.style
	delete exp.videoFormat
	exp = window.JSON.stringify(exp, null, 4)

	var header ="\
// ╭───────────────────────────────────────────────────╮\n\
// │ Please save this file so you can import it later. │\n\
// ╰───────────────────────────────────────────────────╯\n\
//\n\
// ExtendTube: Exported preferences\n\
// date, time: " + (new Date()).format("%e.%m.%Y, %T").trim() + "\n\
//    version: " + pref.getItem("version") + "\n\n"

	var tab = {
			url: "data:application/javascript," + window.encodeURIComponent(header + exp),
			focused: true
		}

	if (bgProcess)
		bgProcess.extension.tabs.create(tab)
	else
		extension.tabs.create(tab)

	log.info('prefs:',
			 'Preferences are exported.')
}

// Check for old preferences structure and convert them to new one.
function fixOldPreferences() {
	checkActions()
	fixShortcuts()
	fixCustomColors()
	fixAutoPlay()
}

// Check if necessary actions are present.
function checkActions() {
	var actions = pref.getPref("actions"),
		changed = false

	if (!Object.isObject(actions)) {
		log.error('prefs:',
				  'Could not get actions from widget storage.')
		return
	}

	if (actions.hasOwnProperty("I'M-NOT-GUINEA-PIG")) {
		delete actions["I'M-NOT-GUINEA-PIG"]
		changed = true
	}

	if (changed) {
		pref.setPref("actions", actions)

		log.warn('prefs:',
				 'I\'M-NOT-GUINEA-PIG action is removed (no longer necessary).')
	}
}

function fixShortcuts() {
	var shortcut = pref.getPref("shortcut"),
		changed = false

	if (!Object.isObject(shortcut)) {
		log.error('prefs:',
				  'Could not get shortcuts from widget storage.')
		return
	}

	for (var s in shortcut) {
		if (/\bSpace\b/.test(shortcut[s])) {
			shortcut[s] = shortcut[s].replace(/\bSpace\b/, "Spacebar")
			changed = true
		}
		else if (/\bMenu\b/.test(shortcut[s])) {
			shortcut[s] = shortcut[s].replace(/\bMenu\b/, "ContextMenu")
			changed = true
		}
		else if (/\bCtrl\b/.test(shortcut[s])) {
			shortcut[s] = shortcut[s].replace(/\bCtrl\b/, "Control")
			changed = true
		}
	}

	if (changed) {
		pref.setPref("shortcut", shortcut)

		log.warn('prefs:',
				 'Shortcuts fixed.')
	}
}

// Convert old custom colors to new.
function fixCustomColors() {
	var customcolor = pref.getPref("customcolor"),
		changed = false,
		oldcolor = {
			pagebackground: ["pageBackgroundPrimary", "headerFooterBackground", "toolTipText"],
			pagecolor: ["pagePrimary", "pageSecondary", "toolTipBackground"],
			linkcolor: ["link", "linkHover"],
			videolinkhover: ["videoThumbnail"],
			videothumbbackground: ["videoThumbnailHover"],
			buttonbackground: ["buttonBackground", "primaryButtonBackground", "menuBackground",
							   "menuItemBackground"],
			buttonbackgroundhover: ["buttonBackgroundHover", "buttonBackgroundActive",
									"buttonBackgroundFocused", "primaryButtonBackgroundHover",
									"menuItemBackgroundHover"],
			buttonborder: ["buttonBorder", "buttonBorderHover", "buttonBorderActive",
						   "buttonBorderFocused", "primaryButtonBorder",
						   "primaryButtonBorderHover", "menuBorder"],
			buttoncolor: ["buttonText", "buttonTextHover", "buttonTextActive",
						  "buttonTextFocused", "primaryButtonText", "primaryButtonTextHover",
						  "menuItemText", "menuItemTextHover"],
			titlecolor: ["videoTitle"],
			commenthover: ["pageBackgroundSecondary", "badgeBackground", "clickCardBackground"],
			infocolor: ["separatorsAndBorders", "badgeText", "clickCardBorder"]
		}

	if (!Object.isObject(customcolor)) {
		log.error('prefs:',
				  'Could not get custom colors from widget storage.')
		return
	}

	for (var c in oldcolor) {
		if (customcolor.hasOwnProperty(c)) {
			oldcolor[c].forEach(function (newColor) {
				customcolor[newColor] = customcolor[c]
			})
			delete customcolor[c]
			changed = true
		}
	}

	if (changed) {
		pref.setPref("customcolor", customcolor)

		log.warn('prefs:',
				 'Old custom colors are converted to new ones.')
	}
}

function fixAutoPlay() {
	if (pref.getPref("disableautoplay") !== null) {
		pref.setPref("preventcrossplay", pref.getPref("disableautoplay"))
		pref.removeItem("disableautoplay")
	}

	if (pref.getPref("disableautoplayalways") !== null) {
		pref.setPref("disableAutoPlay", pref.getPref("disableautoplayalways"))
		pref.removeItem("disableautoplayalways")
	}

	if (pref.getPref("channelautoplay") !== null)
		pref.removeItem("channelautoplay")
}
