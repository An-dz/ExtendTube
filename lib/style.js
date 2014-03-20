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

var style = {
		/**
		 * Style used to hide various parts of page (on <cite>watch pages</cite>).
		 */
		cleanwatch: {
			addtobutton: "\
[data-trigger-for=\"action-panel-addto\"] {\n\
	display: none !important;\n\
}\n",
			allbuttons: "\
#watch7-action-buttons,\n\
#watch-action-buttons {\n\
	display: none !important;\n\
}\n",
			allcomments: "\
#watch7-discussion,\n\
#watch-discussion {\n\
	display: none !important;\n\
}\n",
			allsidebar: "\
#watch7-sidebar,\n\
#watch-sidebar {\n\
	display: none !important;\n\
}\n\
#watch7-content,\n\
#watch-content {\n\
	width: @width@px !important;\n\
}\n\
#player-api,\n\
#player-api-legacy {\n\
	width: @width@px !important;\n\
	height: @height@px !important;\n\
}\n",
			brand: "\
#watch7-branded-banner,\n\
#watch-branded-banner,\n\
#branded-page-body-container .branded-banner-image {\n\
	display: none !important;\n\
}\n\
#branded-page-body-container,\n\
#player,\n\
#player-legacy,\n\
#watch7-video-container,\n\
#watch-video-container {\n\
	background-image: none !important;\n\
	background-color: transparent !important;\n\
}\n\
.watch-branded-banner:not(.watch-wide) #watch7-sidebar,\n\
.watch-branded-banner:not(.watch-wide) #watch-sidebar {\n\
	margin-top: -390px !important;\n\
}\n\
.watch-branded-banner.watch-playlist #watch7-sidebar,\n\
.watch-branded-banner.watch-playlist #watch-sidebar {\n\
	margin-top: 0 !important;\n\
}\n",
			comments: "\
#comments-view>div, #comments-view>hr:last-of-type {\n\
	display: none !important;\n\
}\n",
			description: "\
[data-trigger-for=\"action-panel-details\"],\n\
#action-panel-details {\n\
	display: none !important;\n\
}\n",
			featured: "\
.ext-featured-videos {\n\
	display: none !important;\n\
}\n",
			flagbutton: "\
[data-trigger-for=\"action-panel-report\"] {\n\
	display: none !important;\n\
}\n",
			footer: "\
#footer-container {\n\
	display: none !important;\n\
}\n\
#body-container {\n\
	padding-bottom: 50px !important;\n\
}\n",
			guide: "\
#guide {\n\
	display: none !important;\n\
}\n",
			header: "\
#masthead-positioner,\n\
#masthead-positioner-height-offset {\n\
	display: none !important;\n\
}\n",
			headuser: "\
#watch7-user-header,\n\
#watch-user-header {\n\
	display: none !important;\n\
}\n",
			langalert: "\
.ext-language-alert {\n\
	display: none !important;\n\
}\n",
			likebutton: "\
#watch7-sentiment-actions,\n\
#watch-sentiment-actions {\n\
	display: none !important;\n\
}\n",
			responses: "\
.ext-video-responses {\n\
	display: none !important;\n\
}\n",
			sharebutton: "\
[data-trigger-for=\"action-panel-share\"] {\n\
	display: none !important;\n\
}\n",
			statsbutton: "\
[data-trigger-for=\"action-panel-stats\"] {\n\
	display: none !important;\n\
}\n",
			subscribe: "\
.yt-uix-button-subscription-container {\n\
	display: none !important;\n\
}\n\
#watch7-user-header .yt-user-photo {\n\
	float: none !important;\n\
}\n",
			suggestions: "\
.ext-related-videos {\n\
	display: none !important;\n\
}\n",
			toprated: "\
li[data-tag=top] {\n\
	display: none !important;\n\
}\n",
			transcript: "\
[data-trigger-for=\"action-panel-transcript\"] {\n\
	display: none !important;\n\
}\n",
			uploader: "\
li[data-tag=upload] {\n\
	display: none !important;\n\
}\n",
			videotitle: "\
#watch7-headline {\n\
	display: none !important;\n\
}\n",
			viewcount: "\
#watch7-views-info {\n\
	display: none !important;\n\
}\n"
		},
		/**
		 * Style that will redefine colours on page.
		 */
		customcolor: {
			pageBackgroundPrimary: "\
#branded-page-body-container,\n\
#filter-dropdown,\n\
.channels-browse-filter.selected,\n\
.ext-lyrics form input,\n\
#page.watch .google-checkout:hover,\n\
.playlist-share-area,\n\
.watch-actions-stats .stats-box,\n\
.watch-branded #watch7-sidebar,\n\
.watch-branded #watch-sidebar,\n\
.yt-dialog-fg,\n\
.yt-uix-form-input-text,\n\
.yt-uix-form-input-textarea,\n\
.yt-uix-overlay-fg,\n\
body {\n\
	background-color: @color@ !important;\n\
}\n",
			pageBackgroundSecondary: "\
#appbar-guide-menu,\n\
#masthead-expanded-menu-acct-sw-list,\n\
#masthead-search-terms,\n\
#page.watch #guide-container.branded,\n\
#playlist-pane-container,\n\
#watch7-action-panels #watch7-action-panel-footer,\n\
#watch7-content,\n\
#watch7-headline,\n\
#watch7-notification-area,\n\
#watch7-user-header,\n\
#watch-action-panels #watch-action-panel-footer,\n\
#watch-content,\n\
#watch-headline,\n\
#watch-notification-area,\n\
#watch-user-header,\n\
#watch-response,\n\
#yt-picker-country-footer,\n\
#yt-picker-language-footer,\n\
#yt-picker-safetymode-footer,\n\
.branded-page-v2-primary-col,\n\
.branded-page-v2-secondary-column-hidden .branded-page-v2-col-container,\n\
.branded-page-v2-secondary-col,\n\
.channel-layout-two-column .tab-content-body,\n\
.compact-shelf .yt-uix-button-shelf-slider-pager,\n\
.feed-promo,\n\
.filter-content:hover,\n\
.google-checkout,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box-Active,\n\
.metadata-inline,\n\
.primary-col,\n\
.share-email-preview-container,\n\
.share-group.secondary .overlay,\n\
.yt-alert-panel,\n\
.yt-card,\n\
.yt-dialog-bg,\n\
.yt-uix-overlay-bg {\n\
	background-color: @color@ !important;\n\
}\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box-Active {\n\
	box-shadow: 0px 1px 0px @color@, inset 0px 1px 1px hsla(0, 0%, 100%, .2) !important;\n\
}\n",
			headerFooterBackground: "\
#yt-masthead-container,\n\
#masthead-appbar-container,\n\
.comments-post-alert,\n\
.ext-lyrics-body-info,\n\
.guide-subscriptions-promo-tooltip,\n\
.guided-help-box,\n\
.legacy-playlist-bar #playlist-bar-bar-container,\n\
.legacy-playlist-bar #playlist-bar-bar-container:hover,\n\
body #masthead-expanded-container,\n\
body > div#footer-container,\n\
body > div#footer-hh-container {\n\
	background-color: @color@ !important;\n\
}\n\
.guided-help-box {\n\
	border-color: @color@ !important;\n\
}\n\
.signup-promo.guided-help-box::after {\n\
	border-bottom-color: @color@ !important;\n\
}\n",
			separatorsAndBorders: "\
#appbar-guide-menu,\n\
#c4-header-bg-container,\n\
#channel-subheader,\n\
#comments-view hr,\n\
#feed-page-subnav,\n\
#footer-hh-main,\n\
#footer-main,\n\
#guide-subscriptions-promo,\n\
#masthead-appbar-container,\n\
#masthead-expanded-acct-sw-iframe,\n\
#masthead-expanded-menu-acct-sw-list,\n\
#safety-form p.safety-submit,\n\
#video-page-subnav,\n\
#watch7-action-buttons,\n\
#watch7-action-panels,\n\
#watch7-discussion,\n\
#watch7-headline,\n\
#watch7-notification-area,\n\
#watch7-user-header,\n\
#watch-action-buttons,\n\
#watch-action-panels,\n\
#watch-discussion,\n\
#watch-headline,\n\
#watch-notification-area,\n\
#watch-response-content,\n\
#watch-response-content-sort,\n\
#watch-user-header,\n\
#yt-masthead-container,\n\
.about-subscriptions,\n\
.action-panel-content .report-video-title,\n\
.branded-page-v2-col-container,\n\
.branded-page-v2-col-container-bottom-border,\n\
.branded-page-v2-primary-col,\n\
.branded-page-v2-primary-col .branded-page-box,\n\
.c4-box,\n\
.c4-welcome-primary-col,\n\
.c4-welcome-secondary-col,\n\
.channel-activity-feeds .feed-item-container .feed-item-main,\n\
.channel-activity-feeds .feed-item-container:hover,\n\
.channels-featured-video-details.yt-tile-visible,\n\
.comments-section h4,\n\
.ext-actions-container,\n\
.ext-lyrics .ext-lyrics-body,\n\
.feed-header,\n\
.feed-item-container .feed-item-main,\n\
.feed-item-container:hover,\n\
.feed-promo,\n\
.guide-builder-page-header,\n\
.guide-section-separator,\n\
.help-Helpwidgets-HelpPanel-Inproduct-Anchor-Section,\n\
.legacy-playlist-bar #playlist-bar-bar-container,\n\
.legacy-playlist-bar #playlist-bar-controls .playlist-bar-group,\n\
.legacy-playlist-bar #playlist-bar-info .playlist-bar-group,\n\
.live-comments-setting,\n\
.lohp-large-shelf-container .lohp-blog-headline,\n\
.lohp-large-shelf-container,\n\
.lohp-medium-shelves-container,\n\
.lohp-newspaper-shelf,\n\
.lohp-shelf-cell-container,\n\
.other-channels-module,\n\
.playlist-video-item .video-annotation .annotation-text,\n\
.playlist-video-item,\n\
.primary-col,\n\
.result-item-onebox,\n\
.search-header,\n\
.share-email-preview-container,\n\
.site-center-aligned .feed-item-container,\n\
.watch-actions-stats .horizontal-line,\n\
.watch-actions-stats .stats-engagement td,\n\
.welcome.c4-spotlight-module-component,\n\
.yt-dialog-base .yt-dialog-header,\n\
.yt-dialog-fg,\n\
.yt-horizontal-rule,\n\
.yt-masthead-multilogin-user,\n\
.yt-picker-header,\n\
.yt-picker-hr,\n\
.yt-uix-button-menu-new-section-separator,\n\
.yt-uix-overlay-base .yt-uix-overlay-header,\n\
.yt-uix-overlay-fg,\n\
body #footer-container,\n\
body #footer-hh-container,\n\
body #masthead-expanded-container {\n\
	border-color: @color@ !important;\n\
}\n\
.channels-content-item .content-item-detail .metadata-separator {\n\
	color: @color@ !important;\n\
}\n\
.watch-actions-stats .horizontal-line {\n\
	background-color: @color@ !important;\n\
}\n\
.playlist-share-area,\n\
.watch-actions-stats .stats-box {\n\
	box-shadow: 0px 1px 3px @color@ !important;\n\
}\n",
			pagePrimary: "\
#c4-about-tab .about-stats .about-stat,\n\
#c4-about-tab,\n\
#comments-view h4 a,\n\
#comments-view h4,\n\
#filter-dropdown a,\n\
#guide-subscriptions-promo.guidebuilder-promo,\n\
#masthead-search-term,\n\
#playlist-actions,\n\
#playlist-share-loading,\n\
#results .spell-correction .spell-correction-search-instead,\n\
#results .spell-correction .spell-correction-showing,\n\
#watch7-discussion,\n\
#watch7-sidebar .video-list-item .title,\n\
#watch7-sidebar .watch-sidebar-foot,\n\
#watch7-sidebar .watch-sidebar-head,\n\
#watch7-views-info,\n\
#watch-actions-stats.watch-actions-stats p.sub-data,\n\
#watch-description,\n\
#watch-description-extra-info .metadata-info-title,\n\
#watch-description-extras .title,\n\
#watch-discussion,\n\
#watch-response-header-content p,\n\
#watch-sidebar .video-list-item .title,\n\
#watch-sidebar .watch-sidebar-foot,\n\
#watch-sidebar .watch-sidebar-head,\n\
#watch-views-info,\n\
#yt-picker-country-footer,\n\
#yt-picker-language-footer,\n\
#yt-picker-safetymode-footer,\n\
.action-panel-error,\n\
.action-panel-loading,\n\
.branded-page-module-title a,\n\
.branded-page-module-title a:visited,\n\
.branded-page-module-title,\n\
.branded-page-related-channels h2 a,\n\
.branded-page-related-channels h2,\n\
.branded-page-related-channels,\n\
.category-header .category-title,\n\
.channels-featured-video-metadata,\n\
.comments-section h4,\n\
.comments-textarea-container label,\n\
.epic-nav-dropdown-group:hover,\n\
.epic-nav-item-heading,\n\
.epic-nav-item.selected,\n\
.epic-nav-item:hover,\n\
.ext-lyrics form input,\n\
.ext-lyrics-body,\n\
.ext-lyrics-body-info,\n\
.featured-label,\n\
.featured-label-hh,\n\
.feed-item-container .feed-item-time,\n\
.feed-item-content .metadata .view-count,\n\
.feed-item-main .description,\n\
.feed-promo p,\n\
.filter-col-title,\n\
.filter-disabled,\n\
.filter-selected,\n\
.filter-selected:hover,\n\
.guide-context-item .title,\n\
.guide-module-toggle .context-back-link,\n\
.guide-module-toggle,\n\
.help-Helpwidgets-HelpPanel,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box-Active,\n\
.legacy-playlist-bar .playlist-bar-count,\n\
.lohp-blog-headline,\n\
.masthead-expanded-acct-sw-id2,\n\
.masthead-expanded-acct-sw-sel,\n\
.onebox-content a,\n\
.onebox-overview a,\n\
.playlist-creator-info,\n\
.playlist-item .item-duration,\n\
.playlist-titles .playlist-item,\n\
.playlist-titles li,\n\
.playlist-video-item .video-annotation .annotation-text,\n\
.playlist-video-item-base-content .video-overview .video-title,\n\
.playlists-narrow .playlist-author-attribution,\n\
.post-item .comment-text,\n\
.post-item .post-item-heading,\n\
.primary-pane .watch-actions-stats h2,\n\
.profile-view-module .user-profile-item .value,\n\
.profile-view-module,\n\
.result-item-onebox .onebox-video-count,\n\
.result-item-onebox .show-onebox-videos .onebox-entry .show-onebox-metadata,\n\
.result-item-onebox a,\n\
.result-list .metadata-separator,\n\
.result-list .snippet-videos,\n\
.search-header .num-results strong,\n\
.search-header .num-results,\n\
.secondary-pane .editor-input-header,\n\
.secondary-pane h3,\n\
.share-email label,\n\
.share-panel,\n\
.shelf-item .channels-content-item .content-item-view-count,\n\
.signup-promo.guided-help-box,\n\
.single-playlist .annotation,\n\
.single-playlist .blogger-video-count,\n\
.single-playlist .video .video-details,\n\
.username-prepend,\n\
.watch7-card-promo-content ,\n\
.watch-card-promo-content ,\n\
.watch-actions-stats h2,\n\
.watch-actions-stats,\n\
.watch-response-item-content p,\n\
.watch-view-count,\n\
.yt-alert-default,\n\
.yt-alert-naked .yt-alert-content,\n\
.yt-c3-expander .yt-uix-expander-head,\n\
.yt-default h1,\n\
.yt-default h2,\n\
.yt-default h3,\n\
.yt-default h4,\n\
.yt-default h5,\n\
.yt-default h6,\n\
.yt-dialog-base .yt-dialog-header h2,\n\
.yt-dialog-fg-content,\n\
.yt-dialog-waiting-text,\n\
.yt-house-channel-label,\n\
.yt-lockup2 .yt-user-name,\n\
.yt-lockup2 p,\n\
.yt-lockup2-badges,\n\
.yt-lockup-content .search-view-all-link,\n\
.yt-lockup-list .yt-lockup-content .yt-user-name,\n\
.yt-lockup-list .yt-lockup-content p,\n\
.yt-masthead-multilogin-user-link,\n\
.yt-picker-content strong,\n\
.yt-picker-grid .yt-picker-item,\n\
.yt-subscription-button-subscriber-count-branded-horizontal,\n\
.yt-subscription-button-subscriber-count-branded-vertical,\n\
.yt-subscription-button-subscriber-count-unbranded-horizontal,\n\
.yt-subscription-button-subscriber-count-unbranded-vertical,\n\
.yt-tile-default a,\n\
.yt-uix-clickcard-card-body,\n\
.yt-uix-form-input-text,\n\
.yt-uix-form-input-textarea,\n\
.yt-uix-hovercard-card-body,\n\
.yt-uix-overlay-base .yt-uix-overlay-header h2,\n\
.yt-uix-overlay-fg-content,\n\
.yt-uix-tile a,\n\
body a.yt-uix-button-epic-nav-item.selected,\n\
body a.yt-uix-button-epic-nav-item:hover,\n\
body,\n\
button.yt-uix-button-epic-nav-item.selected,\n\
button.yt-uix-button-epic-nav-item:hover,\n\
h1.yt,\n\
h2.yt,\n\
h3.yt,\n\
h4.yt,\n\
h5.yt,\n\
h6.yt {\n\
	color: @color@ !important;\n\
}\n\
#watch7-secondary-actions .yt-uix-button,\n\
#watch-secondary-actions .yt-uix-button,\n\
.yt-uix-button-text,\n\
body .yt-uix-button-text[disabled] {\n\
	color: @color@ !important;\n\
}\n\
.share-group.secondary .overlay .share-service-expand-arrow .yt-uix-button-content {\n\
	border-left-color: @color@ !important;\n\
}\n\
.share-group.secondary.expanded .overlay .share-service-expand-arrow .yt-uix-button-content {\n\
	border-right-color: @color@ !important;\n\
}\n\
#yt-masthead-dropdown,\n\
.share-panel .collapsed-message .arrow,\n\
.yt-uix-button-default .yt-uix-button-arrow,\n\
.yt-uix-button-text .yt-uix-button-arrow,\n\
.yt-uix-button.guide-sort-button img,\n\
.yt-uix-form-input-select-arrow {\n\
	border-bottom-color: transparent !important;\n\
	border-top-color: @color@ !important;\n\
}\n\
#yt-masthead-dropdown.reversed,\n\
.share-panel .expanded-message .arrow,\n\
.yt-uix-button-default.yt-uix-button-reverse .yt-uix-button-arrow,\n\
.yt-uix-button-text.yt-uix-button-reverse .yt-uix-button-arrow {\n\
	border-bottom-color: @color@ !important;\n\
	border-top-color: transparent !important;\n\
}\n",
			pageSecondary: "\
#comments-view .comment-actions .yt-uix-button,\n\
#comments-view .comment-actions,\n\
#comments-view .metadata,\n\
#comments-view .stat,\n\
#comments-view .time a,\n\
#footer-hh-links-secondary .copyright,\n\
#footer-links-secondary .copyright,\n\
#footer-links-secondary a,\n\
#playlist-clip-editor .clip-editor-subtext,\n\
#watch7-sidebar .video-list-item .description,\n\
#watch7-sidebar .video-list-item .stat,\n\
#watch-sidebar .video-list-item .description,\n\
#watch-sidebar .video-list-item .stat,\n\
#yt-masthead-user-displayname,\n\
.branded-page-module-title-count,\n\
.caption-line-time,\n\
.category-header .channel-count,\n\
.channel-summary-info .subscriber-count,\n\
.channel-summary-list-item h4,\n\
.channels-content-item .content-item-detail,\n\
.channels-featured-video-details .concurrent-viewers,\n\
.channels-featured-video-details .view-count,\n\
.comments-remaining,\n\
.comments-threshold-countdown,\n\
.feed-item-container .feed-item-main,\n\
.feed-item-container:hover .metadata .view-count,\n\
.guide-context-item .action,\n\
.guide-context-item .username,\n\
.guide-context-item .viewcount,\n\
.lohp-video-metadata .view-count,\n\
.lohp-video-metadata,\n\
.module-view .video .video-view-count,\n\
.playlist-item:hover .item-duration,\n\
.playlist-video-item-base-content .video-info,\n\
.post-item .post-item-timestamp,\n\
.primary-pane h2, .secondary-pane h2,\n\
.profile-view-module .user-profile-item .item-name,\n\
.secondary-pane .remaining-chars,\n\
.share-email label span,\n\
.shelf-item .channels-content-item .content-item-time-created,\n\
.subscribable-content-username,\n\
.video-extras-likes-dislikes .dislikes,\n\
.video-extras-likes-dislikes,\n\
.watch-actions-stats h1,\n\
.watch-extras-section .content,\n\
.yt-default .yt-notes,\n\
.yt-lockup2,\n\
li.guide-section h3,\n\
p.yt-notes {\n\
	color: @color@ !important;\n\
}\n",
			link: "\
#comments-view .comment:hover .yt-uix-button-link,\n\
#comments-view .comment:hover a,\n\
#comments-view:hover h4 a,\n\
#filter-dropdown:hover a,\n\
#watch7-sidebar .video-list-item:hover .title,\n\
#watch-sidebar .video-list-item:hover .title,\n\
.guide-builder-section:hover .category-count-link .channel-count,\n\
.guide-builder-section:hover .category-title-link .category-title,\n\
.guide-builder-section:hover .subscribable-content-username,\n\
.guide-context-item:hover .title,\n\
.guide-module .guide-module-toggle:hover .context-back-link,\n\
.guide-module .guide-module-toggle:hover,\n\
.onebox-content:hover a,\n\
.onebox-overview:hover a,\n\
.playlist-video-item-base-content:hover .video-overview .video-title,\n\
.result-item-onebox:hover a,\n\
.watch7-playlist-bar-left:hover a,\n\
.watch-playlist-bar-left:hover a,\n\
.yt-lockup-mini .yt-lockup-title,\n\
.yt-tile-default h3.title a:visited,\n\
.yt-tile-default:hover .yt-user-name,\n\
.yt-tile-default:hover a,\n\
.yt-tile-static:hover a,\n\
.yt-tile-visible h3.title a:visited,\n\
.yt-tile-visible:hover a,\n\
.yt-uix-button-link,\n\
.yt-uix-button-panel:hover #watch7-headline h1 a,\n\
.yt-uix-button-panel:hover #watch-headline h1 a,\n\
.yt-uix-tile:hover a,\n\
a {\n\
	color: @color@ !important;\n\
}\n",
			linkHover: "\
#comments-view .comment .yt-uix-button-link:hover,\n\
#comments-view .comment a:hover,\n\
#comments-view h4 a:hover,\n\
#filter-dropdown a:hover,\n\
#footer a:hover,\n\
#footer-hh a:hover,\n\
#watch7-sidebar .video-list-item .title:hover,\n\
#watch-sidebar .video-list-item .title:hover,\n\
.guide-builder-section .category-count-link:hover .channel-count,\n\
.guide-builder-section .category-title-link:hover .category-title,\n\
.guide-builder-section .subscribable-content-username:hover,\n\
.guide-context-item .title:hover,\n\
.guide-module .context-back-link:hover,\n\
.onebox-content a:hover,\n\
.onebox-overview a:hover,\n\
.playlist-video-item-base-content .video-overview .video-title:hover,\n\
.result-item-onebox a:hover,\n\
.watch7-playlist-bar-left a:hover,\n\
.watch-playlist-bar-left a:hover,\n\
.yt-lockup-mini:hover .yt-lockup-title,\n\
.yt-tile-default .yt-user-name:hover,\n\
.yt-tile-default a:hover,\n\
.yt-tile-default h3.title a:hover,\n\
.yt-tile-static a:hover,\n\
.yt-tile-visible h3.title a:hover,\n\
.yt-tile-visible a:hover,\n\
.yt-uix-button-panel #watch7-headline h1 a:hover,\n\
.yt-uix-button-panel #watch-headline h1 a:hover,\n\
.yt-uix-tile a:hover,\n\
a:hover {\n\
	color: @color@ !important;\n\
}\n",
			buttonText: "\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button,\n\
.iph-dialog a.iph-dialog-nav-button,\n\
.search-header .yt-uix-button-content,\n\
.yt-playall-link,\n\
.yt-uix-button-default,\n\
.yt-uix-button-panel:hover #watch7-secondary-actions .yt-uix-button,\n\
.yt-uix-button-panel:hover #watch-secondary-actions .yt-uix-button,\n\
.yt-uix-button-panel:hover .yt-uix-button-text:not(.yt-uix-button-active),\n\
.yt-uix-button-subscribe-branded .yt-uix-button-content,\n\
.yt-uix-button-subscribe-unbranded .yt-uix-button-content,\n\
.yt-uix-button-subscription,\n\
.yt-uix-button-translation-button.yt-uix-button,\n\
.yt-uix-form-input-select,\n\
a.yt-uix-button-default .yt-uix-button-content,\n\
.yt-uix-button-subscribed-branded,\n\
.yt-uix-button-subscribed-branded[disabled],\n\
.yt-uix-button-subscribed-branded[disabled]:hover,\n\
.yt-uix-button-subscribed-branded[disabled]:active,\n\
.yt-uix-button-subscribed-branded[disabled]:focus,\n\
.yt-uix-button-subscribed-unbranded,\n\
.yt-uix-button-subscribed-unbranded[disabled],\n\
.yt-uix-button-subscribed-unbranded[disabled]:hover,\n\
.yt-uix-button-subscribed-unbranded[disabled]:active,\n\
.yt-uix-button-subscribed-unbranded[disabled]:focus {\n\
	color: @color@ !important;\n\
}\n\
.music-panel .playall .yt-uix-button-content::before,\n\
.result-item-onebox .playall .yt-uix-button-content::before,\n\
.yt-playall-link .small-arrow,\n\
.yt-uix-slider-next-arrow {\n\
	border-left-color: @color@ !important;\n\
}\n\
.yt-uix-slider-prev-arrow {\n\
	border-right-color: @color@ !important;\n\
}\n",
			buttonBorder: "\
#masthead-search-term,\n\
#masthead-search.consolidated-form input,\n\
.channels-search .search-field-container,\n\
.comments-post-alert,\n\
.ext-lyrics form input,\n\
.ext-lyrics:hover .yt-uix-button-text,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box,\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box-Active,\n\
.iph-dialog a.iph-dialog-nav-button,\n\
.masthead-search-terms-border,\n\
.subscribable-content-rec .subscribable-content-dismiss,\n\
.yt-playall-link,\n\
.yt-uix-button-default,\n\
.yt-uix-button-panel:hover .yt-uix-button-text:not(.yt-uix-button-active),\n\
.yt-uix-button-subscribe-branded,\n\
.yt-uix-button-subscribe-unbranded,\n\
.yt-uix-button-subscription,\n\
.yt-uix-button-translation-button.yt-uix-button,\n\
.yt-uix-form-input-checkbox-element,\n\
.yt-uix-form-input-radio-element,\n\
.yt-uix-form-input-select,\n\
.yt-uix-form-input-text,\n\
.yt-uix-form-input-textarea,\n\
.yt-uix-button-subscribed-branded,\n\
.yt-uix-button-subscribed-branded[disabled],\n\
.yt-uix-button-subscribed-branded[disabled]:hover,\n\
.yt-uix-button-subscribed-branded[disabled]:active,\n\
.yt-uix-button-subscribed-branded[disabled]:focus,\n\
.yt-uix-button-subscribed-unbranded,\n\
.yt-uix-button-subscribed-unbranded[disabled],\n\
.yt-uix-button-subscribed-unbranded[disabled]:hover,\n\
.yt-uix-button-subscribed-unbranded[disabled]:active,\n\
.yt-uix-button-subscribed-unbranded[disabled]:focus {\n\
	border-color: @color@ !important;\n\
}\n\
.comments-textarea-container .comments-textarea-tip {\n\
	border-right-color: @color@ !important;\n\
}\n\
.yt-uix-button-default {\n\
	box-shadow: inset 0px 1px 0px @color@ !important;\n\
}\n",
			buttonBackground: "\
.ext-lyrics:hover .yt-uix-button-text,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button,\n\
.iph-dialog a.iph-dialog-nav-button,\n\
.subscribable-content-rec .subscribable-content-dismiss,\n\
.yt-playall-link,\n\
.yt-uix-button-default,\n\
.yt-uix-button-subscribe-branded,\n\
.yt-uix-button-subscribe-unbranded,\n\
.yt-uix-button-subscription,\n\
.yt-uix-button-translation-button.yt-uix-button,\n\
.yt-uix-form-input-select,\n\
body .yt-uix-button-default[disabled],\n\
.yt-uix-button-subscribed-branded,\n\
.yt-uix-button-subscribed-branded[disabled],\n\
.yt-uix-button-subscribed-branded[disabled]:hover,\n\
.yt-uix-button-subscribed-branded[disabled]:active,\n\
.yt-uix-button-subscribed-branded[disabled]:focus,\n\
.yt-uix-button-subscribed-unbranded,\n\
.yt-uix-button-subscribed-unbranded[disabled],\n\
.yt-uix-button-subscribed-unbranded[disabled]:hover,\n\
.yt-uix-button-subscribed-unbranded[disabled]:active,\n\
.yt-uix-button-subscribed-unbranded[disabled]:focus {\n\
	background: @color@ !important;\n\
	background-image: none !important;\n\
}\n",
			buttonTextHover: "\
.ext-lyrics .yt-uix-button-text:hover,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:hover,\n\
.iph-dialog a.iph-dialog-nav-button:hover,\n\
.search-header button:hover .yt-uix-button-content,\n\
.yt-playall-link:hover,\n\
.yt-uix-button-default:hover,\n\
.yt-uix-button-panel #watch7-secondary-actions .yt-uix-button:hover,\n\
.yt-uix-button-panel #watch-secondary-actions .yt-uix-button:hover,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):hover,\n\
.yt-uix-button-subscribe-branded:hover .yt-uix-button-content,\n\
.yt-uix-button-subscribe-unbranded:hover .yt-uix-button-content,\n\
.yt-uix-button-subscription:hover,\n\
.yt-uix-button-translation-button.yt-uix-button:hover,\n\
.yt-uix-button-text:hover,\n\
.yt-uix-form-input-select:hover {\n\
	color: @color@ !important;\n\
}\n\
.yt-playall-link:hover .small-arrow,\n\
.yt-uix-button:hover .yt-uix-slider-next-arrow {\n\
	border-left-color: @color@ !important;\n\
}\n\
.yt-uix-button:hover .yt-uix-slider-prev-arrow {\n\
	border-right-color: @color@ !important;\n\
}\n",
			buttonBorderHover: "\
.ext-lyrics .yt-uix-button-text:hover,\n\
.ext-lyrics form input:hover,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:hover,\n\
.iph-dialog a.iph-dialog-nav-button:hover,\n\
.subscribable-content-rec .subscribable-content-dismiss:hover,\n\
.yt-playall-link:hover,\n\
.yt-uix-button-default:hover,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):hover,\n\
.yt-uix-button-subscribe-branded:hover,\n\
.yt-uix-button-subscribe-unbranded:hover,\n\
.yt-uix-button-subscription:hover,\n\
.yt-uix-button-text:hover,\n\
.yt-uix-button-translation-button.yt-uix-button:hover,\n\
.yt-uix-button.guide-sort-button:hover,\n\
.yt-uix-form-input-select:hover,\n\
.yt-uix-form-input-text:hover,\n\
.yt-uix-form-input-textarea:hover {\n\
	border-color: @color@ !important;\n\
}\n",
			buttonBackgroundHover: "\
.compact-shelf .yt-uix-button-shelf-slider-pager:hover,\n\
.ext-lyrics .yt-uix-button-text:hover,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:hover,\n\
.iph-dialog a.iph-dialog-nav-button:hover,\n\
.subscribable-content-rec .subscribable-content-dismiss:hover,\n\
.yt-playall-link:hover,\n\
.yt-uix-button-default:hover,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):hover,\n\
.yt-uix-button-subscribe-branded:hover,\n\
.yt-uix-button-subscribe-unbranded:hover,\n\
.yt-uix-button-subscription:hover,\n\
.yt-uix-button-text:hover,\n\
.yt-uix-button-translation-button.yt-uix-button:hover,\n\
.yt-uix-button.guide-sort-button:hover,\n\
.yt-uix-form-input-select:hover {\n\
	background-color: @color@ !important;\n\
}\n",
			buttonTextActive: "\
.ext-lyrics .yt-uix-button-text:active,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:active,\n\
.iph-dialog a.iph-dialog-nav-button:active,\n\
.search-header button:active .yt-uix-button-content,\n\
.yt-playall-link:active,\n\
.yt-uix-button-default.yt-uix-button-active,\n\
.yt-uix-button-default.yt-uix-button-toggled,\n\
.yt-uix-button-default:active,\n\
.yt-uix-button-panel #watch7-secondary-actions .yt-uix-button:active,\n\
.yt-uix-button-panel #watch-secondary-actions .yt-uix-button:active,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):active,\n\
.yt-uix-button-subscribe-branded:active .yt-uix-button-content,\n\
.yt-uix-button-subscribe-unbranded:active .yt-uix-button-content,\n\
.yt-uix-button-subscription.yt-uix-button-active,\n\
.yt-uix-button-subscription:active,\n\
.yt-uix-button-text.yt-uix-button-active,\n\
.yt-uix-button-text:active,\n\
.yt-uix-button-translation-button.yt-uix-button:active,\n\
.yt-uix-form-input-select:active {\n\
	color: @color@ !important;\n\
}\n",
			buttonBorderActive: "\
#share-panel-buttons .yt-uix-button.yt-uix-button-toggled,\n\
.ext-lyrics .yt-uix-button-text:active,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:active,\n\
.iph-dialog a.iph-dialog-nav-button:active,\n\
.yt-playall-link:active,\n\
.yt-uix-button-default.yt-uix-button-active,\n\
.yt-uix-button-default.yt-uix-button-toggled,\n\
.yt-uix-button-default:active,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):active,\n\
.yt-uix-button-subscribe-branded:active,\n\
.yt-uix-button-subscribe-unbranded:active,\n\
.yt-uix-button-subscription.yt-uix-button-active,\n\
.yt-uix-button-subscription:active,\n\
.yt-uix-button-text.yt-uix-button-active,\n\
.yt-uix-button-text:active,\n\
.yt-uix-button-translation-button.yt-uix-button:active,\n\
.yt-uix-button.guide-sort-button.yt-uix-button-active,\n\
.yt-uix-form-input-radio-container input:checked + .yt-uix-form-input-checkbox-element,\n\
.yt-uix-form-input-radio-container input:checked + .yt-uix-form-input-radio-element,\n\
.yt-uix-form-input-select:active {\n\
	border-color: @color@ !important;\n\
	box-shadow: 0px 0px 2px @color@ !important;\n\
}\n\
#watch7-secondary-actions .yt-uix-button.yt-uix-button-toggled,\n\
#watch-secondary-actions .yt-uix-button.yt-uix-button-toggled {\n\
	border-bottom-color: @color@ !important;\n\
	box-shadow: none !important;\n\
}\n",
			buttonBackgroundActive: "\
.ext-lyrics .yt-uix-button-text:active,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:active,\n\
.iph-dialog a.iph-dialog-nav-button:active,\n\
.yt-playall-link:active,\n\
.yt-uix-button-default.yt-uix-button-active,\n\
.yt-uix-button-default.yt-uix-button-toggled,\n\
.yt-uix-button-default:active,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):active,\n\
.yt-uix-button-subscribe-branded:active,\n\
.yt-uix-button-subscribe-unbranded:active,\n\
.yt-uix-button-subscription.yt-uix-button-active,\n\
.yt-uix-button-subscription:active,\n\
.yt-uix-button-text.yt-uix-button-active,\n\
.yt-uix-button-text:active,\n\
.yt-uix-button-translation-button.yt-uix-button:active,\n\
.yt-uix-button.guide-sort-button.yt-uix-button-active,\n\
.yt-uix-form-input-select:active {\n\
	background-color: @color@ !important;\n\
}\n",
			buttonTextFocused: "\
.ext-lyrics .yt-uix-button-text:focus,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:focus,\n\
.iph-dialog a.iph-dialog-nav-button:focus,\n\
.search-header button:focus .yt-uix-button-content,\n\
.yt-playall-link:focus,\n\
.yt-uix-button-default.yt-uix-button-focused,\n\
.yt-uix-button-default:focus,\n\
.yt-uix-button-panel .yt-uix-button-text:not(.yt-uix-button-active):focus,\n\
.yt-uix-button-subscribe-branded:focus .yt-uix-button-content,\n\
.yt-uix-button-subscribe-unbranded:focus .yt-uix-button-content,\n\
.yt-uix-button-subscription:focus,\n\
.yt-uix-button-text:focus,\n\
.yt-uix-button-translation-button.yt-uix-button:focus,\n\
.yt-uix-form-input-select.focused,\n\
.yt-uix-form-input-text:focus {\n\
	color: @color@ !important;\n\
}\n\
.yt-playall-link:focus .small-arrow,\n\
.yt-uix-button:focus .yt-uix-slider-next-arrow {\n\
	border-left-color: @color@ !important;\n\
}\n\
.yt-uix-button:focus .yt-uix-slider-prev-arrow {\n\
	border-right-color: @color@ !important;\n\
}\n",
			buttonBorderFocused: "\
.ext-lyrics .yt-uix-button-text:not(.yt-uix-button-active):focus,\n\
.ext-lyrics form input:focus,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:focus,\n\
.iph-dialog a.iph-dialog-nav-button:focus,\n\
.subscribable-content-rec .subscribable-content-dismiss:focus,\n\
.yt-playall-link:focus,\n\
.yt-uix-button-default.yt-uix-button-focused,\n\
.yt-uix-button-default:focus,\n\
.yt-uix-button-panel .yt-uix-button-text:focus,\n\
.yt-uix-button-subscribe-branded:focus,\n\
.yt-uix-button-subscribe-unbranded:focus,\n\
.yt-uix-button-subscription:focus,\n\
.yt-uix-button-text:focus,\n\
.yt-uix-button-translation-button.yt-uix-button:focus,\n\
.yt-uix-form-input-select.focused,\n\
.yt-uix-form-input-text.focused,\n\
.yt-uix-form-input-text:focus,\n\
.yt-uix-form-input-textarea:focus {\n\
	border-color: @color@ !important;\n\
	box-shadow: 0px 0px 2px @color@ !important;\n\
}\n",
			buttonBackgroundFocused: "\
.ext-lyrics .yt-uix-button-text:not(.yt-uix-button-active):focus,\n\
.help-Helpwidgets-HelpPanel input.help-Helpwidgets-HelpPanel-Search-Button:focus,\n\
.iph-dialog a.iph-dialog-nav-button:focus,\n\
.subscribable-content-rec .subscribable-content-dismiss:focus,\n\
.yt-playall-link:focus,\n\
.yt-uix-button-default.yt-uix-button-focused,\n\
.yt-uix-button-default:focus,\n\
.yt-uix-button-panel .yt-uix-button-text:focus,\n\
.yt-uix-button-subscribe-branded:focus,\n\
.yt-uix-button-subscribe-unbranded:focus,\n\
.yt-uix-button-subscription:focus,\n\
.yt-uix-button-text:focus,\n\
.yt-uix-button-translation-button.yt-uix-button:focus,\n\
.yt-uix-form-input-select.focused {\n\
	background-color: @color@ !important;\n\
}\n",
			primaryButtonBackground: "\
.epic-nav-item-heading,\n\
.epic-nav-item.selected,\n\
body a.yt-uix-button-epic-nav-item.selected,\n\
button.yt-uix-button-epic-nav-item.selected,\n\
#watch7-secondary-actions .yt-uix-button-text.yt-uix-button-toggled {\n\
	background-color: @color@ !important;\n\
}\n",
			primaryButtonBorder: "\
.epic-nav-item-heading,\n\
.epic-nav-item.selected,\n\
body a.yt-uix-button-epic-nav-item.selected,\n\
button.yt-uix-button-epic-nav-item.selected,\n\
#watch7-secondary-actions .yt-uix-button-text.yt-uix-button-toggled {\n\
	border-color: @color@ !important;\n\
}\n",
			primaryButtonText: "\
.epic-nav-item-heading,\n\
.epic-nav-item.selected,\n\
body a.yt-uix-button-epic-nav-item.selected,\n\
button.yt-uix-button-epic-nav-item.selected,\n\
#watch7-secondary-actions .yt-uix-button-text.yt-uix-button-toggled {\n\
	color: @color@ !important;\n\
}\n",
			primaryButtonBackgroundHover: "\
.epic-nav-dropdown-group:hover,\n\
.epic-nav-item:hover,\n\
body a.yt-uix-button-epic-nav-item:hover,\n\
button.yt-uix-button-epic-nav-item:hover,\n\
#watch7-secondary-actions .yt-uix-button-text:hover {\n\
	background-color: @color@ !important;\n\
}\n",
			primaryButtonBorderHover: "\
.epic-nav-dropdown-group:hover,\n\
.epic-nav-item:hover,\n\
body a.yt-uix-button-epic-nav-item:hover,\n\
button.yt-uix-button-epic-nav-item:hover,\n\
#watch7-secondary-actions .yt-uix-button-text:hover {\n\
	border-color: @color@ !important;\n\
}\n",
			primaryButtonTextHover: "\
.epic-nav-dropdown-group:hover,\n\
.epic-nav-item:hover,\n\
body a.yt-uix-button-epic-nav-item:hover,\n\
button.yt-uix-button-epic-nav-item:hover,\n\
#watch7-secondary-actions .yt-uix-button-text:hover {\n\
	color: @color@ !important;\n\
}\n",
			videoThumbnail: "\
.feed-item-container,\n\
.playlist-video-item,\n\
.yt-tile-default,\n\
.yt-tile-static,\n\
.yt-tile-visible,\n\
.yt-uix-tile,\n\
#watch7-sidebar,\n\
.video-list .video-list-item a {\n\
	background: @color@ !important;\n\
}\n",
			videoThumbnailHover: "\
#results .ppv-promoted-videos,\n\
.feed-item-container:hover,\n\
.guide-context-item a:hover,\n\
.guide-context-item.context-playing a,\n\
.lohp-shelf-cell-container:hover,\n\
.yt-masthead-multilogin-user:hover,\n\
.yt-tile-default:hover,\n\
.yt-tile-static:hover,\n\
.yt-tile-visible:hover,\n\
.yt-uix-tile:hover,\n\
.video-list .video-list-item a:hover {\n\
	background: @color@ !important;\n\
}\n",
			badgeText: "\
.yt-lockup-badge-item .yt-badge {\n\
	color: @color@ !important;\n\
}\n",
			badgeBackground: "\
.yt-lockup-badge-item .yt-badge {\n\
	background-color: @color@ !important;\n\
	border-color: @color@ !important;\n\
}\n",
			clickCardBackground: "\
.iph-dialog,\n\
.iph-dialog-pointer-up,\n\
.yt-subscription-button-subscriber-count-branded-horizontal,\n\
.yt-subscription-button-subscriber-count-branded-vertical,\n\
.yt-subscription-button-subscriber-count-unbranded-horizontal,\n\
.yt-subscription-button-subscriber-count-unbranded-vertical,\n\
.yt-uix-clickcard-card-border,\n\
.yt-uix-hovercard-card-border {\n\
	background-color: @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-branded-horizontal::after,\n\
.yt-subscription-button-subscriber-count-unbranded-horizontal::after,\n\
.yt-uix-clickcard-card-flip .yt-uix-card-body-arrow-horizontal,\n\
.yt-uix-hovercard-card-flip .yt-uix-card-body-arrow-horizontal {\n\
	border-right-color:  @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-branded-vertical::after,\n\
.yt-subscription-button-subscriber-count-unbranded-vertical::after,\n\
.yt-uix-card-body-arrow-vertical {\n\
	border-top-color: @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-branded-vertical::after,\n\
.yt-subscription-button-subscriber-count-unbranded-vertical::after,\n\
.yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical,\n\
.yt-uix-hovercard-card-reverse .yt-uix-card-body-arrow-vertical {\n\
	border-bottom-color: @color@ !important;\n\
}\n\
.iph-dialog-pointer-up {\n\
	border-bottom: 7px solid @color@;\n\
	border-left: 7px solid transparent;\n\
	border-right: 7px solid transparent;\n\
	height: 0 !important;\n\
	width: 0 !important;\n\
}\n",
			clickCardBorder: "\
.iph-dialog,\n\
.iph-clickcard,\n\
.yt-subscription-button-subscriber-count-branded-horizontal,\n\
.yt-subscription-button-subscriber-count-branded-vertical,\n\
.yt-subscription-button-subscriber-count-unbranded-horizontal,\n\
.yt-subscription-button-subscriber-count-unbranded-vertical,\n\
.yt-uix-clickcard-card-border,\n\
.yt-uix-hovercard-card-border {\n\
	border-color: @color@ !important;\n\
}\n\
.yt-uix-clickcard-card-border,\n\
.yt-uix-hovercard-card-border {\n\
	box-shadow: 0px 3px 3px @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-unbranded-vertical::before,\n\
.yt-uix-card-border-arrow-vertical {\n\
	border-top-color: @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-unbranded-vertical::before,\n\
.yt-uix-clickcard-card-reverse .yt-uix-card-border-arrow-vertical,\n\
.yt-uix-hovercard-card-reverse .yt-uix-card-border-arrow-vertical {\n\
	border-bottom-color: @color@ !important;\n\
}\n\
.yt-subscription-button-subscriber-count-branded-horizontal::before,\n\
.yt-subscription-button-subscriber-count-unbranded-horizontal::before,\n\
.yt-uix-clickcard-card-flip .yt-uix-card-border-arrow-horizontal,\n\
.yt-uix-hovercard-card-flip .yt-uix-card-border-arrow-horizontal {\n\
	border-right-color:  @color@ !important;\n\
}\n",
			videoTitle: "\
#watch-headline-title * {\n\
	color: @color@ !important;\n\
}\n",
			toolTipBackground: "\
.yt-uix-range-tooltip-tip-content,\n\
.yt-uix-tooltip-tip-content {\n\
	background-color: @color@ !important;\n\
}\n\
.yt-uix-range-tooltip-tip-arrow,\n\
.yt-uix-tooltip-tip-arrow {\n\
	border-top-color: @color@ !important;\n\
}\n\
.yt-uix-tooltip-tip-reverse .yt-uix-tooltip-tip-arrow {\n\
	border-bottom-color: @color@ !important;\n\
}\n",
			toolTipText: "\
.yt-uix-range-tooltip-tip-content,\n\
.yt-uix-tooltip-tip-content {\n\
	color: @color@ !important;\n\
}\n",
			menuBackground: "\
.guide-flyout,\n\
.gssb_m,\n\
.watch-playlists-drawer ul,\n\
body > table[style*=\"absolute\"] table,\n\
ul.yt-uix-button-menu, .yt-uix-button-menu {\n\
	background-color: @color@ !important;\n\
}\n",
			menuBorder: "\
.guide-flyout,\n\
.gssb_e,\n\
.html5-speed-popup-menu,\n\
.watch-playlists-drawer ul,\n\
.yt-uix-button-menu,\n\
body > table[style*=\"absolute\"] td {\n\
	border-color: @color@ !important;\n\
}\n\
.html5-popup-menu .html5-popup-select-list .yt-uix-button-menu-item.active {\n\
	box-shadow: 0px 1px @color@, 0px -1px @color@;\n\
}\n\
.html5-speed-popup-menu {\n\
	box-shadow: 1px 0px 0px 0px @color@ inset;\n\
}\n",
			menuItemBackground: "\
.caption-line,\n\
.guide-view-more,\n\
.watch-playlists-drawer li,\n\
.yt-uix-button-menu .yt-uix-button-menu-item,\n\
body > table[style*=\"absolute\"] td {\n\
	background-color: @color@ !important;\n\
}\n",
			menuItemText: "\
.caption-line,\n\
.guide-header-item,\n\
.guide-item,\n\
.guide-view-more,\n\
.gssb_m,\n\
.watch-playlists-drawer li,\n\
.yt-uix-button-menu .yt-uix-button-menu-item,\n\
body > table[style*=\"absolute\"] td {\n\
	color: @color@ !important;\n\
}\n",
			menuItemBackgroundHover: "\
.caption-line-highlight,\n\
.caption-line:hover,\n\
.guide-view-more:hover,\n\
.gssb_i td,\n\
.watch-playlists-drawer li:hover,\n\
.yt-uix-button-menu .yt-uix-button-menu-item-highlight .yt-uix-button-menu-item,\n\
.yt-uix-button-menu .yt-uix-button-menu-item.selected,\n\
.yt-uix-button-menu .yt-uix-button-menu-item:hover,\n\
body > table[style*=\"absolute\"] tr[class]:not([class=\"\"]) td {\n\
	background-color: @color@ !important;\n\
}\n\
#guide-container .guide-item:hover,\n\
#guide-container .guide-item.guide-item-selected,\n\
#guide-container .guide-collection-item .guide-item.guide-item-selected,\n\
#guide-container .guide-item.guide-item-selected:hover {\n\
	background: @color@ !important;\n\
}\n",
			menuItemTextHover: "\
#guide-container .guide-item:hover,\n\
#guide-container .guide-item.guide-item-selected,\n\
#guide-container .guide-collection-item .guide-item.guide-item-selected,\n\
#guide-container .guide-item.guide-item-selected:hover,\n\
#guide-container .guide-view-more:hover,\n\
.caption-line-highlight,\n\
.caption-line:hover,\n\
.gssb_i td,\n\
.watch-playlists-drawer li:hover,\n\
.yt-uix-button-menu .yt-uix-button-menu-item-highlight .yt-uix-button-menu-item,\n\
.yt-uix-button-menu .yt-uix-button-menu-item.selected,\n\
.yt-uix-button-menu .yt-uix-button-menu-item:hover,\n\
body > table[style*=\"absolute\"] td span[style*=\"color\"],\n\
body > table[style*=\"absolute\"] tr[class]:not([class=\"\"]) td {\n\
	color: @color@ !important;\n\
}\n"
		},
		/**
		 * Extra style to be added to custom colours.
		 */
		customcolorextra: "\
.caption-line {\n\
	border-color: transparent !important;\n\
}\n\
.channels-featured-video-details.yt-tile-visible,\n\
.channels-featured-video-details.yt-tile-visible:hover {\n\
	background: transparent !important;\n\
	border-bottom: 1px solid;\n\
}\n\
.yt-playall-link,\n\
.watch-playlists-drawer ul {\n\
	box-shadow: none !important;\n\
}\n\
.help-Helpwidgets-HelpPanel-Search-Text-Box-Active {\n\
	box-shadow: inset 0px 0px 10px hsla(0, 0%, 0%, .2) !important;\n\
}\n\
#share-panel-buttons .yt-uix-button,\n\
#watch7-secondary-actions .yt-uix-button,\n\
#watch-secondary-actions .yt-uix-button {\n\
	border-top-width: 0 !important;\n\
}\n\
.search-header .yt-uix-button-content,\n\
.yt-uix-button-subscribe-unbranded .yt-uix-button-content {\n\
	color: inherit !important;\n\
}\n\
.share-group.secondary .overlay {\n\
	opacity: .95 !important;\n\
}\n\
#playlist-pane-container,\n\
.channel-layout-two-column .tab-content-body {\n\
	background-image: -o-linear-gradient(left, transparent 656px, hsla(0, 0%, 0%, .1) 656px, transparent 756px) !important;\n\
	background-image: linear-gradient(to right, transparent 656px, hsla(0, 0%, 0%, .1) 656px, transparent 756px) !important;\n\
}\n",
		/**
		 * Logo replacement.
		 */
		customlogo: "\
#footer-logo img,\n\
#footer-hh-logo img,\n\
.watch7-hovercard-youtube-icon,\n\
.watch-hovercard-youtube-icon,\n\
#logo,\n\
#yt-masthead #logo {\n\
	background-repeat: no-repeat !important;\n\
	background-position: 0 0 !important;\n\
	background-size: 72px 30px !important;\n\
	background-image: url(\"data:image/png;base64,\
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\
z3bF/OsmAAAAAElFTkSuQmCC\") !important;\n\
}\n\
.watch7-hovercard-youtube-icon,\n\
.watch-hovercard-youtube-icon {\n\
	background-size: 50px 20px !important;\n\
}\n",
		/**
		 * General style. It will be applied on every page.
		 */
		general: "\
.yt-uix-button-menu {\n\
	z-index: 1001 !important;\n\
}\n\
#comments-view .comment {\n\
	overflow-x: visible;\n\
}\n\
img[class^=\"flag_\"] {\n\
	background-color: white !important;\n\
	border-radius: 20% !important;\n\
}\n\
body > div[id*=\"yt-uix-tooltip\"] {\n\
	z-index: 10000 !important;\n\
}\n\
body > iframe.yt-uix-button-menu-mask {\n\
	z-index: 100 !important;\n\
}\n\
.result-item-onebox .playall .yt-uix-button-content::before,\n\
.music-panel .playall .yt-uix-button-content::before {\n\
	content: \" \" !important;\n\
}\n\
.video-container .video-content {\n\
	height: 100% !important;\n\
	width: 100% !important;\n\
	top: auto !important;\n\
	left: auto !important;\n\
}\n\
.compact-shelf .yt-uix-button-shelf-slider-pager {\n\
	z-index: 1;\n\
}\n\
#watch7-player-unavailable .video-thumb img,\n\
#watch-player-unavailable .video-thumb img {\n\
	opacity: .3 !important;\n\
}\n\
#watch7-player-unavailable .ux-thumb,\n\
#watch-player-unavailable .ux-thumb {\n\
	background: transparent !important;\n\
}\n\
.view-count-and-actions > div:not([class]) {\n\
	float: right !important;\n\
	margin-left: 1em !important;\n\
}\n\
.yt-uix-button-menu.yt-uix-button-menu-player {\n\
	box-shadow: none !important;\n\
}\n\
.yt-uix-button-player,\n\
.yt-uix-button-player:hover,\n\
.yt-uix-button-player:focus,\n\
.html5-volume-control,\n\
.html5-volume-control:focus,\n\
.html5-volume-control:hover {\n\
	box-shadow: 1px 0 1px rgba(73, 71, 71, 0.3) inset, -1px 0 1px rgba(5, 4, 4, 0.3) inset;\n\
}\n\
.html5-video-player:focus .html5-progress-item,\n\
.html5-video-player:hover .html5-progress-item {\n\
	-o-transition-timing-function: ease !important;\n\
	transition-timing-function: ease !important;\n\
}\n\
.yt-uix-button-player:focus {\n\
	outline: none !important;\n\
}\n\
#watch-longform-ad,\n\
.ad-div,\n\
.ext-hidden,\n\
.ext-preview .html5-info-bar,\n\
.html5-progress-screenreader {\n\
	display: none !important;\n\
}\n\
.ext-progress-white .html5-play-progress {\n\
	background-image: -o-linear-gradient(top, rgb(204, 204, 204), rgb(102, 102, 102));\n\
	background-image: linear-gradient(to bottom, rgb(204, 204, 204), rgb(102, 102, 102));\n\
}\n\
.ext-actions-container {\n\
	border: solid #e6e6e6;\n\
	border-width: 0 1px;\n\
	position: relative;\n\
	margin-bottom: 15px\n\
}\n\
.channels-featured-video-details .ext-actions-container {\n\
	border: none;\n\
	margin-bottom: 10px;\n\
}\n\
.ext-actions-container::after {\n\
	clear: right;\n\
	content: \"\";\n\
	display: block;\n\
}\n\
.ext-actions-right {\n\
	padding: 0 20px;\n\
	float: right;\n\
}\n\
.channels-featured-video-details .ext-actions-right {\n\
	padding: 0;\n\
}\n\
.ext-spliter {\n\
	bottom: 0;\n\
	position: absolute;\n\
	width: 100%;\n\
}\n\
.ext-spliter .yt-horizontal-rule {\n\
	height: .5em;\n\
	margin: 0 100px;\n\
	z-index: 0;\n\
	border-top: 1px solid #e2e2e2;\n\
	position: relative;\n\
}\n\
.ext-button {\n\
	margin: 0 0 0 8px !important;\n\
}\n\
.ext-button img {\n\
	background-repeat: no-repeat;\n\
}\n\
.ext-button img {\n\
	opacity: .75;\n\
}\n\
.ext-button:hover img {\n\
	opacity: 1;\n\
}\n\
.ext-button-start {\n\
	border-radius: 3px 0 0 3px !important;\n\
}\n\
.ext-collapsed .ext-button-start {\n\
	display: none;\n\
}\n\
.ext-button-end {\n\
	border-radius: 0 3px 3px 0 !important;\n\
	margin-left: 0 !important;\n\
}\n\
.ext-collapsed .ext-button-end {\n\
	display: none;\n\
}\n\
.ext-button-middle {\n\
	border-radius: 0 !important;\n\
	margin-left: 0 !important;\n\
}\n\
.ext-collapsed .ext-button-middle {\n\
	border-radius: 3px !important;\n\
	margin-left: 8px !important;\n\
}\n\
:not(.ext-collapsed) > .ext-button-middle,\n\
:not(.ext-collapsed) > .ext-button-start {\n\
	border-right-width: 0;\n\
}\n\
.ext-button-start:hover,\n\
.ext-button-start:focus,\n\
.ext-button-start:active,\n\
.ext-button-middle.yt-uix-button-active,\n\
.ext-button-middle:hover,\n\
.ext-button-middle:focus,\n\
.ext-button-middle:active {\n\
	border-right-width: 1px;\n\
}\n\
.ext-button-start:hover + .ext-button-middle,\n\
.ext-button-start:focus + .ext-button-middle,\n\
.ext-button-start:active + .ext-button-middle,\n\
.ext-button-middle.yt-uix-button-active + .ext-button-end,\n\
.ext-button-middle:hover + .ext-button-end,\n\
.ext-button-middle:focus + .ext-button-end,\n\
.ext-button-middle:active + .ext-button-end {\n\
	border-left-width: 0;\n\
}\n\
#ext-stop-button img {\n\
	width: 12px;\n\
	height: 12px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAJElEQVQ4y2NkYGB4yEACYGIgEYxq\
GCkaWP7//z8aSqMaqKEBAFVLBBCLCj7cAAAAAElFTkSuQmCC\");\n\
}\n\
.ext-light-icon #ext-stop-button img {\n\
	background-position: 0px -12px;\n\
}\n\
#ext-download-button img {\n\
	width: 12px;\n\
	height: 15px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAeCAYAAAAYa/93AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8CJ+oTgGoAAADISURBVDjL\
7ZKxDQIxEATnENGREoNogogeEBJV8DlFkENMAYSUQAtQyoUsyT/4zcs8GQErObC9a2l9YxFBI3df\
AivaOkfEqdkMs8sZMM/ObulmwJf6B/po6O5jYFHPZNrhmbj7GrgDF4sI3L0CNoAVHj9GxG4AEBF7\
4ACoZG51KISe5rfSHaGWGcBSWhNqK2CUm8lLSurE28z+eP8a3pI+4i3phXc94V54m9nOEixKoaOZ\
vXGFpErSVdItWdtiqSy07fUTdajT/AC7nnqGCZAxfAAAAABJRU5ErkJggg==\");\n\
}\n\
.ext-light-icon #ext-download-button img {\n\
	background-position: 0 -15px;\n\
}\n\
#ext-framestep-button img {\n\
	width: 12px;\n\
	height: 12px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8CH8IROPQAAADLSURBVDjL\
3dIxSgNRGMTx37cJhICVeCM7W9Fr2NonpXgA7yBiZad2trY5gmIvCGFsNhLJ7mZtHXgwPGYe8+Bf\
eMETrvGhW6uNaTDHKR6xxKEBNVt+hjM8Y9FXbDruZjhvZ+4UC6/trD594qD166n9mmM9NGlIk32F\
L9xhspnUDATvcYzL7UnTjuADrvDe9dJ0bHC7cIsbvI35dZPkJMlFkqO+UJKf84ulJMskf2cpyaKv\
OMhSV7GS/HuWqmocS1U1jqW+4A5LVTWKpW8LdFrFtZny9QAAAABJRU5ErkJggg==\");\n\
}\n\
.ext-light-icon #ext-framestep-button img {\n\
	background-position: 0 -12px;\n\
}\n\
#ext-seekforward-button img {\n\
	width: 18px;\n\
	height: 12px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8CGFx1rVcAAADhSURBVDjL\
3ZM9bsJAGETfAE36SByAo1DnPjS0VFE4CjJNjkCbXMPFluGnGYrYyML2tya4yrRv9mm12pkCB2AB\
fAM/tJPjAAj4Al6AM7AHPoDU6OR4S1TnDBTAtjqQ472iOqfqBm8ZvgVSJKpzHMCLMUQATBgnl5zo\
MoDvgOUkKBTAcgBfAeWso/AJvANlj6CTz54VNLMG5sE75PhvbB9sb2y//oXffrbt1pYkpYYo5F2i\
1pYkpRyPRA9vTVKKRI9tbQTRf92apJWk/q1JKqt/FPLerd0XBnKwvbY9DyYU8jpX9ByiscJU+QUA\
AAAASUVORK5CYII=\");\n\
}\n\
.ext-light-icon #ext-seekforward-button img {\n\
	background-position: 0 -12px;\n\
}\n\
#ext-seekback-button img {\n\
	width: 18px;\n\
	height: 12px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8CEFKuJWUAAAEBSURBVDjL\
zdM9SoNBFIXhZ5LgT6mGpNcNZA9iYRPXoljYpLBJ4V5ExNY+rWDlFuwlIJFr8wkhzjcTYgpPN7zn\
noE7cyirjylmNd5rMRziCmPsYl7jvYzhEheNwbo8rRjG2MsEzPFU4gm3zQ37hV3NazzhTV3VoA4+\
bUFd3OMAJ805pwWixLv4wHMTeITjzMACZyWeMukDXOMcO0s7GlV4qwa4wyteNuC/NMTkD5yI6EfE\
NCJmNd5rMRS7luO9jKG1ayWeVgybdy0ittO1iPhfXevgFA9rBBZ5J6X0nlK6aQIfCwNFnjJPnO1S\
SmlU5IVfvTzw9RPUxqtLjIhhRExq/BvN0IdEQnXndgAAAABJRU5ErkJggg==\");\n\
}\n\
.ext-light-icon #ext-seekback-button img {\n\
	background-position: 0 -12px;\n\
}\n\
#ext-preferences-button img {\n\
	width: 12px;\n\
	height: 11px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ45A+tg4bQAAAEkSURBVDjL\
tZKtTgNREIW/2ay6b1DRVKwAX9PnQPEaKJJSEkgQkFQhCEHUIEhtBQkCg6qhjgaBJSBqMKOAg7lt\
brrb3RomGXHPfHN/5h5zd5oihLAH7AKfeQPYBi6BnSiN8xq4AK6AdpSm7n6ab4A7wA3QitIbcASQ\
bTjgLIEXwIG7fyyLXWAI9OMABsA85gzouTvLzIEToAB+QwjvwH7cSMCFu0/To3NgOdcMOExqd+4+\
Xr9rBjxXvOEFuK56XAZMgO9Ec+DY3ReVDe7+CtwDP8AXcB61yjC2CEkra1gDWLJGHVxIepA0jzmq\
gzuSHhN4IqlV13CbwE+SirTYlTSU1I/rQQLPJPXWf3plDUkla5jZ9tYws3+0hplVW8PMStaIWmX8\
AZ49uaA13J77AAAAAElFTkSuQmCC\");\n\
}\n\
.ext-light-icon #ext-preferences-button img {\n\
	background-position: 0 -11px;\n\
}\n\
#ext-loop-button img {\n\
	width: 14px;\n\
	height: 9px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8CB9F9oKIAAADSSURBVDjL\
vdIhToNBEIbhd0mRY3ANogmOA9QgcNyhGi7ABRoECBQXAAUJDotDFkOwdU0qSBoMiBHIF7MkzS/K\
/gg+NdnsI+bLlMxkUyJiF5gA95m5+nnf4vdcAifAeUQM+8Bb4As4WMcFOGvAe8C4zs/AtABz+ud4\
ALw3fNwGdur8CXyUhlZHwBWwX9FpZr60lHPRRa2tXgPLdQQwiIiNSl0AT8BbKaW9PvVOnas36rAP\
PFJfu7iofzsA9X8PoGXHkfpQd5yp476ttqMKD9XHLvoGgESCD+iPSSAAAAAASUVORK5CYII=\");\
}\n\
.ext-light-icon #ext-loop-button img {\n\
	background-position: 0 -9px;\n\
}\n\
#ext-loop-button.ext-loop-on img {\n\
	width: 14px;\n\
	height: 13px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ44MTqsgXUAAAF1SURBVDjL\
xdI9a1RREIDhZ8KKckBBCAGtAlEsDIII/gULS61EixRauCD+BKuAVVJbithYyJZ2VlZiobJusNQq\
FgrqAaux8FzZXfaukkIHDnOHue/5fAO3sWk2vmC31rqvJwa42MZ8fMN2H7iCp3iAZ3O9Y/M/l1KG\
pZRVWKm1jvAIZyyJUsoOhrjerQjXsI7Eyx72aMtbpZQTHXiu5bdtLIr7LR/CZgeut/wOe3iO19NU\
rfV9uzA4PWgfn3ESa+3MowVnXMORVu53K05avlBK2ejZ6tX2fDDuwCf40S5gex4upVzGzVa+qrWO\
o9baNe/iVmt+xRt8wgbOIvAdN2qtk99gg+9gC4cXbPUj7tVaX8AM2ODzuIJTOI4P7YkeT7sbmdkr\
eUT8Z8kzc5iZqzCIiFErHi6TPDN3cKkpt3sgyTPzH0geEcslj4iFkmfmcskz8+CSz8OZOSN5RIxj\
qvnXkkfEJOZm/qPkEfFL8gWX0Cv5tLs/AYhjoUAiI8hnAAAAAElFTkSuQmCC\");\n\
}\n\
.ext-light-icon #ext-loop-button.ext-loop-on img {\n\
	background-position: 0 -13px;\n\
}\n\
#ext-loop-button.ext-loop-force img {\n\
	width: 14px;\n\
	height: 9px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHBxIlCRVXvbgAAADHSURBVDjL\
1dIhTgNRFIXhb8jw3DM4UtEExwIw3Qi4TlJbwQYIAgQKhcN0EN1FLYY1kCBIGgyIJ0iewswkDSTt\
mzqOOrm5vzn5q5SSbWljHOECy2lK6/5+YHfuMMNNG+PxEPAJ35hswtUD1wXwCc66/oyrGueGZYJx\
jY+C50Mcdf0Ln1XBqmPc47SDLqcpvZSMc/sbKl31EW+bENQxxq1Uk/MrVnifh2AvAZqc9xegh6sm\
5/8iwC6iyfmPAIsQhguwCGG4AD0EPxAiSYdkfWQgAAAAAElFTkSuQmCC\");\n\
}\n\
#ext-loop-button.ext-loop-on.ext-loop-force img {\n\
	width: 14px;\n\
	height: 13px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8BH+k8azcAAAFlSURBVDjL\
vdI/SJVhFMfxz2tXuA56cXFoEsxJcxGC2gQhyLFFEIQGRRSEVieHuNiUOEZLi4uDOFTYdMFJEQfL\
P9F0qSmH25CDfzCX88r15b5XcfDAw+/59zvneQ7fZKFUmka/6/EXc5pEAU9iZOMfynnGFqziPdYz\
Zx0N7s/UV1yL+WfN4x2eoxWLLbE5hG78x3aOsT30FZLUOBb6PUajeBvaiuHU2B16gB+oYDdj/BkN\
g95CTGp4iK7481pO1WLon7TiYeggehoYEkxHM2E/Na7gJBpQzpgTvMBErHewn2bYxUdM4jGW8Q1H\
kaQvEhzjjbrSsIiLaHc7nmWe+xvz6bceDBeL9Yeb2IrsZzjFHr4ENb+uyKlVq3mQj9475Ns5kCc3\
Qf4UX2+CfLYB5G23gXzgFpBP3RXy83uFXB7kHzKQt2UgH8mDvJqBvNIE8td3gXw8kl0zwhI28BKP\
0Blgr+JT/cVLhSFiWF9F0CkAAAAASUVORK5CYII=\");\n\
}\n\
#ext-popout-button img {\n\
	width: 18px;\n\
	height: 15px;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9sGHAQGM88hNYcAAALvSURBVEjH\
jVXNbttGGJzZXVaABbRQSMqnoDXgHHzqIzjtqee+SB4qT5BTT/ET5JSLLy7cooBVkJQjJfoBYfKb\
HsJlaFlW9QECpd3l7OzsfCMCQJZlvqqqNs/zK0m/AJAkkMQRRQB1SNPUAwgA2qZpfjw7O/swHo8L\
SY9XPwNqZu7m5uZ1mM/nLYC2G38g+SWE8EnSkzf3sSTpALQhy7I/APwsqZH0EsBHSQsAHLLax0gS\
JHlJFgD8BuB3kv9KemdmtaRlZBQBOlB1zyGqB2ABgEhelWW5TNN0Y2ZrAAtJJBl3RbeOu8c0sxCB\
QDJ0k87MPgO4787+3LHUjQlA0gOZWS+cmS0BzCVFIB26e0lJ1AjO9Zu7pmkWkqoB0MEys+8AtE8Y\
tW1bjUajWdM0h4B6lm3bjvYx8qvV6tX19XUNwEVBBzbQ4Hvb3VgC4CREht3zbdM0bx4eHurnhO7A\
A4BTAH91YNdM09QATJxzy7Isj5EFk8nkxHu/rqqq3yWQlHPu+7qucXl5mUwmE2dmvX9IRr/AOQcz\
w2w2e3F3dwcAKIoiAQBmWbYA8AMAbLfbXo9n+gpmFnX7e7vd/jSMgL42m837pml+PSY+vPdarVb9\
QhZF4QGE6XRaz+fzP29vb+/X63WxT+R95Zxz5+fnr8N0On0UI5K+tG376etJiP8LuM64bSjLso8R\
AC8BfASwiA067P4dT8WL8CQtSOpjBMA751xNchmB4ovxZ8R/EiMkBeAqz/NlVVUb7/2a5BNGXVtw\
96jOua8x0vklOtyR/CzpHoA7oIsG4Mkwj/oNvPdLAPNBHh2MEZIJSQu7N+C9X5CshsF2qJxz32Jk\
OB5CqOq6noUQjooR7/2IpIUdj/jxePzq4uKijhoN57uLiexbkt9ipBPbusm3IYQ3SZLUh/7LAARJ\
j2OkLEsDMDGz5enp6VExUhTFCcl1nuccIlNSRnIU82jIInb7jsNf7PZeAHBH8mZo/2GPxc+OwwHg\
nyHQf8Jv1PMW0aO5AAAAAElFTkSuQmCC\");\n\
}\n\
.ext-light-icon #ext-popout-button img {\n\
	background-position: 0 -15px;\n\
}\n\
.ext-lyrics {\n\
	padding-top: 10px;\n\
	line-height 1.4;\n\
}\n\
.channels-featured-video-details .ext-lyrics {\n\
	font-size: 13px;\n\
}\n\
.ext-lyrics .yt-uix-expander-head {\n\
	text-align: center;\n\
	padding-top: 7px;\n\
}\n\
.ext-lyrics .yt-uix-expander-head button {\n\
	height: 18px;\n\
	position: relative;\n\
	z-index: 1;\n\
}\n\
.ext-lyrics .ext-lyrics-body {\n\
	padding: 10px 20px 5px;\n\
	line-height: 17px;\n\
	border-top: 1px solid #e3e3e3;\n\
}\n\
.ext-lyrics-body-info {\n\
	padding: 10px;\n\
	margin-bottom: 10px;\n\
	background-color: #e6efff;\n\
	border: 1px solid #aeaed5;\n\
	color: #4d4d4d;\n\
}\n\
.ext-close-results {\n\
	font-size: 1.2em;\n\
	line-height: 1.2em;\n\
	float: right;\n\
	cursor: pointer;\n\
}\n\
.ext-close-results:hover {\n\
	color: #cc2828;\n\
}\n\
.ext-try-manual {\n\
	margin-bottom: 5px;\n\
}\n\
.ext-lyrics form button {\n\
	border-radius: 0 3px 3px 0;\n\
}\n\
.ext-lyrics form {\n\
	padding: 5px;\n\
}\n\
.ext-lyrics form input {\n\
	min-width: 70%;\n\
	box-sizing: border-box;\n\
	height: 28px;\n\
	padding: 2px 4px 3px;\n\
	border-radius: 3px 0 0 3px;\n\
	border: 1px solid;\n\
}\n\
.ext-lyrics form input:focus {\n\
	border-color: #6d9df7;\n\
}\n\
.ext-lyrics .comments-section {\n\
	margin: 0 20px;\n\
}\n\
.channels-featured-video-details .ext-lyrics .comments-section {\n\
	margin: 0;\n\
}\n\
.ext-lyrics .comments-section h4 {\n\
	margin: 0;\n\
	padding: 0 0 0 35px !important;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABUAAAAwCAYAAAD+djETAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEBQ8BL8/lW5sAAAL2SURBVEjH\
7ZZPa5RXFMZ/dxpi2ooWCbRCQSgIkkUQ0oWIfwrtwo3kE3RT3JTiStClSiBbP0GkRTeJ4iIaUESx\
LsR2FkHQqWOsloILwUVCgzS25ufmvNOb8Z3JvGPc9cBlzrnc89zz773zQHU5DDwA5tggGQF+B5rA\
fWBzPyAHgLvAz8BwRNgEfgu7VAa6AF4DfgW+AT4HfgH+DZ/vgRdVohsG6sChsAeBOxHhY+AKMFQ1\
5TqwI7PnArAJTACjwD1gLDtTy9Zbch3Yl9mzwKMAnG0DmQRuAaejaQ3gYZZhS6YzfQpYiFUHjnSY\
hr3ATLY3kzfqB+B86OPAfmAVeA7cAC6WgDbid3dc0AA25TX4Fvgs9KOAwAfA8bjkQ2BPhz4sAF+H\
/rQA3Qy8BA4C24EvsqKfiwtORM3KZAX4KPSXRfqfAjcj0kvASeA18HfY68m2+NKKEYQYjycxh/PZ\
4VM9juHZTP+xiPRYpD8I/AVczb6g76IRXwJbgWXgj2jgdmBX+BTySYrNKeAZsCmasi10YgJWohSv\
4jMdit9VYDGmYylqv5SAM8AW4Cfgdp+v107g49D/TFW91ZaeUrl76hewG3CqCrIeYFfQfgEpe6rU\
FmA3x25S6yeS9kyKQFrBlB0sANtL0Gl/3Uh7cUwpvZVJvlfrlE4vkgPlPrV3ndOO6fcTZTcZ6CXF\
DRmpskZkmRxWH6hznS5PFVMeAS7HO/tP/Gctt09NrdMsduBSFwJwFfgKWM7BCqyBMsCUEmpXLpVS\
elFlbIbVunoo7EH1jtpUH6tX1KGqj3Bd3ZHZcwHYVCfUUfWeOpadqRWrDPC6ui+zZ9VHATjbBjKp\
3lJPq/fVhvqwyDAHnc70KXUhVl09UhLEiLpXncn2/uNSaotLqT1xqZRSI87vVkfCrsal1N65lNri\
Uur751Ippf64lDqmPok5nM/qfKrHMTyb6eVcSm1xKbU6l1LXcKmU0rjaM5dKKS2qa7mU2uJSKaW+\
uJS6hkvxv2y4vAFd/NTG0SsY2wAAAABJRU5ErkJggg==\");\n\
	background-position: left 5px top 0px;\n\
	background-repeat: no-repeat;\n\
	min-height: 16px;\n\
}\n\
.ext-light-icon .ext-lyrics .comments-section h4 {\n\
	background-position: left 5px top -28px;\n\
}\n\
[dir=\"rtl\"] .ext-lyrics .comments-section h4 {\n\
	padding: 0 35px 0 0 !important;\n\
	background-position: right 5px top 3px;\n\
}\n\
[dir=\"rtl\"].ext-light-icon .ext-lyrics .comments-section h4 {\n\
	background-position: right 5px top -25px;\n\
}\n\
[dir=\"rtl\"] .ext-close-results {\n\
	float: left;\n\
}\n\
#ext-extra-button-container,\n\
#ext-loop-button-container {\n\
	display: inline-block;\n\
}\n\
#ext-extra-button-container > button,\n\
#ext-loop-button-container > button {\n\
	direction: ltr;\n\
	unicode-bidi: bidi-override;\n\
}\n\
.ext-preview-enabled .ext-preview-container {\n\
	position: relative !important;\n\
	display: inline-block !important;\n\
}\n\
.ext-preview-enabled .ext-preview-container > iframe {\n\
	position: absolute;\n\
	top: 0;\n\
	bottom: 0;\n\
	left: 0;\n\
	right: 0;\n\
	width: 100%;\n\
	height: 100%;\n\
}\n\
.ext-preview-enabled .ext-thumb-preview {\n\
	height: 22px !important;\n\
	width: 22px !important;\n\
	padding: 0 !important;\n\
	margin: 0 !important;\n\
}\n\
.ext-preview-enabled .addto-button,\n\
.ext-preview-enabled .addto-container,\n\
.ext-preview-enabled .ext-thumb-preview {\n\
	display: none !important;\n\
}\n\
.ext-preview-enabled:hover .addto-button,\n\
.ext-preview-enabled:hover .addto-container,\n\
.ext-preview-enabled:hover .ext-thumb-preview,\n\
.ext-preview-enabled:hover .video-time {\n\
	display: block !important;\n\
	z-index: 2;\n\
}\n\
.ext-preview-enabled .video-actions {\n\
	bottom: 0;\n\
	right: 0;\n\
}\n\
.ext-preview-active .video-time {\n\
	bottom: 0 !important;\n\
	left: 0 !important;\n\
	right: auto !important;\n\
}\n\
.ext-preview-active .sidebar,\n\
.ext-preview-active .yt-pl-thumb-overlay {\n\
	display: none !important;\n\
}\n\
.ext-preview-enabled .ext-thumb-preview img {\n\
	width: 12px !important;\n\
	height: 12px !important;\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sIEA04LY7cKc8AAAD1SURBVDjL\
jdMhTgNBGIbhZ2gF9SQVCAS3gHtgOQS6jiAIFBLugEOAqahAVgLXIM0mGEoR/JjdZrPd7eyXjJrv\
nUn+eWeABY7xgW/tGSAhJbxjhDVeMEXRAaoDVdZ4xl0b2AZU+SlvvC0PWeWAKiu84QLFnnxGOMEl\
Dof65QGPKHLAPY4wrwbQBfxihid81jeGHcWbZrEJZIv1TDDWNxGxiIiriDjY0dmsFBFbLqWUiiaw\
UaMGbLlUgTmg6dIUf/iCXWrs4wyvOO9zQ1tO+7o0L11a5oAZluWfWPVx6TqltKxPqdOllFI/l7qK\
9VecRMQ400mVGv8bx3nBeAwDTQAAAABJRU5ErkJggg==\");\n\
}\n\
.ext-preview-enabled .ext-thumb-preview.ext-pause img {\n\
	background-image: url(\"data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A\
/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sIEA06JMU28+kAAABLSURBVDjL\
Y2RAgJtIbHVcYkwMJAL6amCGYgZ8YixI7L9YDPxLjJOY8YkxYRH8i0+MiRpOGuB4gAfr////4YKM\
jIw4xUbT0mhawgEA2gkUQhRmYJIAAAAASUVORK5CYII=\");\n\
}\n\
.ext-light-icon .ext-preview-enabled  .ext-thumb-preview img {\n\
	background-position: 0 -12px;\n\
}\n\
.ext-video-rating {\n\
	position: absolute;\n\
	top: 0px;\n\
	left: 0px;\n\
	right: 0px;\n\
	z-index: 1;\n\
	display: inline-block;\n\
	height: 3px;\n\
	-o-transition: height .3s;\n\
	transition: height .3s;\n\
}\n\
.ext-video-rating-outside {\n\
	position: inherit;\n\
	display: block;\n\
}\n\
.feed-item-thumb.watched .ux-thumb-wrap, .watched .video-thumb {\n\
	opacity: 1 !important;\n\
}\n\
.watched .yt-thumb-clip, .watched .yt-thumb-clip-inner {\n\
	opacity: .4;\n\
}\n\
.watched .ext-video-rating {\n\
	top: 19px;\n\
}\n\
.ext-video-rating .video-extras-sparkbar-likes, .ext-video-rating  .video-extras-sparkbar-dislikes {\n\
	height: 100%;\n\
}\n\
.ext-video-rating.ext-rating-unavailable {\n\
	background: hsla(0, 0%, 90%, .678);\n\
}\n\
.ext-video-rating.ext-rating-unavailable .video-extras-sparkbar-likes, .ext-video-rating.ext-rating-unavailable .video-extras-sparkbar-dislikes {\n\
	display: none;\n\
}\n\
.video-thumb:hover .ext-video-rating {\n\
	-o-transition: height .5s;\n\
	transition: height .5s;\n\
	height: 5px;\n\
}\n",
		/**
		 * Full screen style. It will be applied when Opera is in full
		 * screen mode to display only player.
		 */
		fullscreen: "\
body {\n\
	overflow: hidden !important;\n\
}\n\
.html5-expand-button,\n\
.html5-fullscreen-button {\n\
	display:none !important;\n\
}\n\
#player-api,\n\
#player-api-legacy,\n\
#watch7-player,\n\
#watch-player {\n\
	position: fixed !important;\n\
	top: 0 !important;\n\
	left: 0 !important;\n\
	bottom: 0 !important;\n\
	right: 0 !important;\n\
	z-index: 1234567890 !important;\n\
}\n\
#player-api,\n\
#player-api-legacy,\n\
#watch7-player,\n\
#watch-player {\n\
	padding-top: 1px !important;\n\
	background-color: #345 !important;\n\
	width: 100% !important;\n\
	height: 100% !important;\n\
}\n\
#watch7-video,\n\
#watch7-main,\n\
#watch7-playlist,\n\
#watch-video,\n\
#watch-main,\n\
#watch-playlist {\n\
	position: static !important;\n\
}\n",
		/**
		 * Style used to pop out player.
		 */
		popout: "\
.ext-popout-player {\n\
	overflow: hidden !important;\n\
}\n\
.ext-popout-player .html5-expand-button,\n\
.ext-popout-player > .yt-uix-clickcard-card,\n\
.ext-popout-player .html5-fullscreen-button {\n\
	display: none;\n\
}\n\
.ext-popout-player .primary-pane {\n\
	position: static !important;\n\
}\n\
.ext-popout-player #player,\n\
.ext-popout-player #player-legacy {\n\
	position: fixed !important;\n\
	padding: 0 !important;\n\
	margin: 0 !important;\n\
	top: 0 !important;\n\
	left: 0 !important;\n\
	bottom: 0 !important;\n\
	right: 0 !important;\n\
	height: 100% !important;\n\
	width: 100% !important;\n\
	background-color: hsla(0, 0%, 10%, .95) !important;\n\
	z-index: 2147483647 !important;\n\
}\n\
#player-api,\n\
#player-api-legacy,\n\
#movie_player {\n\
	-o-transition-delay: 0;\n\
	transition-delay: 0;\n\
	-o-transition-duration: 1s;\n\
	transition-duration: 1s;\n\
	-o-transition-property: all;\n\
	transition-property: all;\n\
	-o-transition-timing-function: ease;\n\
	transition-timing-function: ease;\n\
}\n\
.ext-popout-player #player-api,\n\
.ext-popout-player #player-api-legacy {\n\
	width: @width px !important;\n\
	height: @height px !important;\n\
	margin: auto !important;\n\
	margin-top: @topmargin px !important;\n\
	z-index: 987655;\n\
	position: relative;\n\
	float: none !important;\n\
	background-color: transparent;\n\
	display: block;\n\
}\n\
.ext-popout-player .watch7-playlist-bar {\n\
	background: #1B1B1B;\n\
}\n\
.ext-popout-player .watch7-playlist-bar-right {\n\
	float: right;\n\
}\n\
.ext-popout-player .watch-sidebar {\n\
	margin-right: 0;\n\
}\n\
.ext-popout-player #playlist-tray-legacy {\n\
	position: absolute;\n\
	top: 34px;\n\
	right: 0;\n\
}\n\
.ext-popout-player #watch7-playlist-tray-container {\n\
	position: relative;\n\
	left: 0;\n\
}\n",
		/**
		 * Style used to override wide player style defined by YouTube.
		 */
		wideplayer: {
			medium: "\
.watch-large #player-api,\n\
.watch-large #player-api-legacy,\n\
.watch-large #watch7-player,\n\
.watch-large #watch-player,\n\
.watch-large #movie_player {\n\
	width: 854px;\n\
	height: 510px;\n\
}\n\
.watch-large.watch-autohide #player-api,\n\
.watch-large.watch-autohide #player-api-legacy,\n\
.watch-large.watch-autohide #watch7-player,\n\
.watch-large.watch-autohide #watch-player {\n\
	height: 483px;\n\
}\n\
.watch-large.watch-multicamera #player-api,\n\
.watch-large.watch-multicamera #player-api-legacy,\n\
.watch-large.watch-multicamera #watch7-player,\n\
.watch-large.watch-multicamera #watch-player {\n\
	height: 590px;\n\
}\n\
.watch-large.watch-autohide.watch-multicamera #player-api,\n\
.watch-large.watch-autohide.watch-multicamera #player-api-legacy,\n\
.watch-large.watch-autohide.watch-multicamera #watch7-player,\n\
.watch-large.watch-autohide.watch-multicamera #watch-player {\n\
	height: 563px;\n\
}\n\
.sidebar-collapsed .watch-large #player-api,\n\
.sidebar-collapsed .watch-large #player-api-legacy,\n\
.sidebar-collapsed .watch-large #watch7-player,\n\
.sidebar-collapsed .watch-large #watch-player {\n\
	width: 818px;\n\
	height: 490px;\n\
}\n\
.sidebar-collapsed .watch-large.watch-autohide #player-api,\n\
.sidebar-collapsed .watch-large.watch-autohide #player-api-legacy,\n\
.sidebar-collapsed .watch-large.watch-autohide #watch7-player,\n\
.sidebar-collapsed .watch-large.watch-autohide #watch-player {\n\
	height: 463px;\n\
}\n\
.sidebar-collapsed .watch-large.watch-multicamera #player-api,\n\
.sidebar-collapsed .watch-large.watch-multicamera #player-api-legacy,\n\
.sidebar-collapsed .watch-large.watch-multicamera #watch7-player,\n\
.sidebar-collapsed .watch-large.watch-multicamera #watch-player {\n\
	height: 570px;\n\
}\n\
.sidebar-collapsed .watch-large.watch-autohide.watch-multicamera #player-api,\n\
.sidebar-collapsed .watch-large.watch-autohide.watch-multicamera #player-api-legacy,\n\
.sidebar-collapsed .watch-large.watch-autohide.watch-multicamera #watch7-player,\n\
.sidebar-collapsed .watch-large.watch-autohide.watch-multicamera #watch-player {\n\
	height: 543px;\n\
}\n\
.watch-large #watch7-player-unavailable .video-thumb img,\n\
.watch-large #watch-player-unavailable .video-thumb img {\n\
	width: 854px;\n\
}\n\
.watch-large #watch7-branded-banner,\n\
.watch-large #watch-branded-banner {\n\
	width: 854px;\n\
}\n\
.sidebar-collapsed .watch-large #watch7-branded-banner,\n\
.sidebar-collapsed .watch-large #watch-branded-banner {\n\
	width: 818px;\n\
}\n\
.watch-large .watch7-playlist-bar,\n\
.watch-large .watch-playlist-bar {\n\
	width: 854px;\n\
}\n\
.sidebar-collapsed .watch-large .watch7-playlist-bar,\n\
.sidebar-collapsed .watch-large .watch-playlist-bar {\n\
	width: 818px;\n\
}\n\
.watch-large #watch7-playlist-tray-container,\n\
.watch-large #watch-playlist-tray-container {\n\
	height: 483px;\n\
}\n\
.watch-large.watch-multicamera #watch7-playlist-tray-container,\n\
.watch-large.watch-multicamera #watch-playlist-tray-container {\n\
	height: 563px;\n\
}\n\
.sidebar-collapsed .watch-large #watch7-playlist-tray-container,\n\
.sidebar-collapsed .watch-large #watch-playlist-tray-container {\n\
	height: 463px;\n\
}\n\
.sidebar-collapsed .watch-large.watch-multicamera #watch7-playlist-tray-container,\n\
.sidebar-collapsed .watch-large.watch-multicamera #watch-playlist-tray-container {\n\
	height: 543px;\n\
}\n",
			large: "\
.watch-medium #player-api,\n\
.watch-medium #player-api-legacy,\n\
.watch-medium #watch7-player,\n\
.watch-medium #watch-player {\n\
	width: 1280px;\n\
	height: 750px;\n\
}\n\
.watch-medium.watch-autohide #player-api,\n\
.watch-medium.watch-autohide #player-api-legacy,\n\
.watch-medium.watch-autohide #watch7-player,\n\
.watch-medium.watch-autohide #watch-player {\n\
	height: 723px;\n\
}\n\
.watch-medium.watch-multicamera #player-api,\n\
.watch-medium.watch-multicamera #player-api-legacy,\n\
.watch-medium.watch-multicamera #watch7-player,\n\
.watch-medium.watch-multicamera #watch-player {\n\
	height: 830px;\n\
}\n\
.watch-medium.watch-autohide.watch-multicamera #player-api,\n\
.watch-medium.watch-autohide.watch-multicamera #player-api-legacy,\n\
.watch-medium.watch-autohide.watch-multicamera #watch7-player,\n\
.watch-medium.watch-autohide.watch-multicamera #watch-player {\n\
	height: 803px;\n\
}\n\
.watch-medium #watch7-player-unavailable .video-thumb img,\n\
.watch-medium #watch-player-unavailable .video-thumb img {\n\
	width: 1280px;\n\
}\n\
.watch-medium #watch7-branded-banner,\n\
.watch-medium #watch-branded-banner {\n\
	width: 1280px;\n\
}\n\
.watch-medium .watch7-playlist-bar,\n\
.watch-medium .watch-playlist-bar {\n\
	width: 1280px;\n\
}\n\
.watch-medium.watch-multicamera #watch7-playlist-tray-container,\n\
.watch-medium.watch-multicamera #watch-playlist-tray-container {\n\
	height: 803px;\n\
}\n"
		}
}
