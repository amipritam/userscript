// ==UserScript==
// @name           GBAtemp.net Ads Removal
// @namespace      http://userscripts.org/users/139641
// @include        http://gbatemp.net/index.php?*showtopic=*
// @include        http://gbatemp.net/t*
// ==/UserScript==

// Add jQuery
    var GM_JQ = document.createElement('script');
    GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
    GM_JQ.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
    function GM_wait() {
        if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
    else { $ = unsafeWindow.jQuery; letsJQuery(); }
    }
    GM_wait();

// All your GM code must be inside this function
    function letsJQuery() {
        $('table:contains("Sponsored Links")').remove();
    }