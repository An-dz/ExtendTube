====================
"Hacking" ExtendTube
====================

All ExtendTube preferences are defined in /lib/preferences.js file.
Most of them (but not all) are configurable in preferences page.
Those "not configurable" options can be configured via Dragonfly.
Here's how.

Open Opera Dragonfly (Ctrl+Shift+I) and click on "Debug context" button.
A menu will appear. From that menu choose "ExtendTube: Background process"
option. Then click on "Storage" tab and then on "Widget Preferences".
You're there. Just double click on preference you want to change, enter
new value and click apply.



This preferences are not configurable from preferences page:

firstrun - default false
	Only presence of this option in storage is required; value can be anything.
	If you remove it from storage you'll see "First Run" message on next start
	and recommended preferences will be loaded.

localisedStrings
	Localised strings used by injected scripts.

style
	This value (object) contains various styles that are used by
	injected scripts.

updatechecktime  - default is 295 minutes before first run
	Time of last check for update (UNIX timestamp).

version - default is current version
	Current version of ExtendTube. If you change this option you'll see change
	log on next start.

videoFormat
	Details about available video formats (used by injected scripts).
	This value contains data used in tooltips which describe available
	video formats.
