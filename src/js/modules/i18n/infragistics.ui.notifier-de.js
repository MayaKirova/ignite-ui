﻿/*!@license
* Infragistics.Web.ClientUI Notifier localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function($) {
$.ig = $.ig || {};

$.ig.Notifier = {};

$.extend($.ig.Notifier, {
	locale: {
		successMsg: "Erfolgreich",
		errorMsg: "Fehler",
		warningMsg: "Warnung",
		notSupportedState: "Benachrichtigungsstatus wird nicht unterstützt! Verwenden Sie einen der unterstützten Status 'success', 'info', 'warning', 'error'",
		notSupportedMode: "Benachrichtigungsmodus wird nicht unterstützt! Verwenden Sie einen der unterstützten Modi 'auto', 'popover', 'inline'"
	}
});

$.ig.locale = $.ig.locale || {};
$.ig.locale.de = $.ig.locale.de || {};
$.ig.locale.de.Notifier = $.extend({}, $.ig.Notifier.locale);
}));// REMOVE_FROM_COMBINED_FILES
