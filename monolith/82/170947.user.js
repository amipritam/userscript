// Wikipedia Inline Article Viewer Again
// version 0.1.5
// 2013-06-15
// Copyright (c) 2013, Chris Akins
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Wikipedia Inline Article Viewer", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Wikipedia Inline Article Viewer Again
// @description   Adds an icon after internal article links on wikipedia pages which, when clicked, opens the article inline in a dhtml frame. Updated from the original for Firefox and Greasemonkey in 2013
// @include       http://wikipedia.tld/*
// @include       http://*.wikipedia.tld/*
// @include       https://wikipedia.tld/*
// @include       https://*.wikipedia.tld/*
// @grant none
// ==/UserScript==

var icon = document.createElement('img');
icon.src = "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%"+
			"00%00%0A%08%06%00%00%00%8D2%CF%BD%00%00%00%04gAMA%00%00%AF%C87%05%8"+
			"A%E9%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%00%"+
			"92IDATx%DAb%FC%FF%FF%3F%03%0C%AC_%BF%1E%C1A%03%2C%E8%02%81%81'1%14%"+
			"AD_o%CE%C0%84M7H%E2%CC%19a%141%B0%C23g%CE%FCGV%24%2B%7B%87AZZ%0FE1%"+
			"13%CC%5D0%1A%A4%C8%C4%E4-%C3%D3%A7%97%18%1E%3FVAu%A3%89%89%09%94%BB"+
			"%1F%AC%08d%12H%11%B2%7B%E1%9E%81(6%01*%EA%86%9B%04r%06N_308%02%F1c%"+
			"A0i%81%8C%18%9EA%06%20%93eeeQ%3C%087%11%E8%11%06%CC%F0D5%11%20%C0%0"+
			"0%E5Z9%1E%A6%8Fq%17%00%00%00%00IEND%AEB%60%82";
icon.style.border = 'none';
icon.width = 10;
icon.height = 10;
			
function rewriteLinks() {
	// This function grabs all the links within the page's #content div and 
	// sends them off to be modified
	
	var links, currentLink;
	
	// XPath to select all anchor tags with an href that begins with /wiki/
	links = document.evaluate(
		'//div[@id="content"]//a[starts-with(@href,"/wiki/")]',
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);
	
	for (var i = 0; i < links.snapshotLength; i++) {
		currentLink = links.snapshotItem(i);

		// do something with thisLink
		if ( currentLink.getAttribute('inlineviewappended') != 'true' 
				&& currentLink.getAttribute('inlineviewlink') != 'true'
				&& currentLink.className != 'image' ) {
			appendInlineButton(currentLink);
		}
	}
	// hide link icons in the print style sheet
	// GM_log(document.styleSheets);
	for (var i=0; i<document.styleSheets.length; i++) {
		//GM_log(document.styleSheets[i].media.mediaText);
		if (/\bprint\b/.test (document.styleSheets[i].media.mediaText)) {
			document.styleSheets[i].insertRule ('.inlinelink {display:none}', 0);
			break;
		}
	}
}

function appendInlineButton(link) {
	// Create the new element to hold all that we're doing...
	var container = document.createElement('span');

	// This will prevent the view inline icon from breaking away from the last word of the
	// article link
	container.style.whiteSpace = 'nowrap';

	// We want the link to wrap normally though, and only hold the new icon to the last word
	// so we should explicitly set normal wrap on the link element
	link.style.whiteSpace = 'normal';
	
	// Add a new anchor inside the new button
	// We use innerHTML because it's quicker than writing out the style properties
	// one by one with javascript
	container.innerHTML = '<a class="inlinelink" onclick = "return false;" href="' + link.pathname + '" inlineviewlink="true" style="text-decoration: none; margin-left: 0.3em;"></a>';
	
	// Pull out our innerHTML generated anchor element...
	var newLink = container.firstChild;

	// Add a click event listener to our new link
	// this event handler is where the inline page will be fetched
	newLink.addEventListener('click', inlineViewClickHandler, true); 
	newLink.appendChild(icon.cloneNode(false));

	// Insert the new container before the current link...
	link.parentNode.insertBefore(container,link);
	
	// Now move the link inside the container before the new link
	// (FYI: this dance here is for the whitepace break stuff we implemented earlier)
	container.insertBefore(link, newLink);

	// Experienced some weird multiple-appendings... this was added
	// to attempt to stop this behavior...
	link.setAttribute('inlineviewappended','true');
	return true;
	
}

function inlineViewClickHandler(event) {
	// Event handler which takes clicks from our injected inline view icon links...
	var href, link;
	
	// Create the new dhtml frame
	if ( event.target.tagName.toLowerCase() == 'a' ) {
		// user managed to click the actual anchor and not the icon
		href = event.target.pathname;
		link = event.target;

	}	else if ( event.target.tagName.toLowerCase() == 'img' ) { 
		// user clicked the icon
		href = event.target.parentNode.pathname;
		link = event.target.parentNode;

	}else{
		// No idea how this function was launched, so we cannot proceed.
		GM_log('inlineViewClickHandler triggered from unknown element. Cannot proceed.');
		return false;
	}

	// check to see if the window is open and if so close it, otherwise pop a new window
	var openWindow = document.getElementById('inlineWindow');
	if(openWindow) {
		openWindow.parentNode.removeChild(openWindow);
	}else{
		inlineWindow = newInlineWindow(event, href, link);
	}
	
	event.preventDefault();
	return true;
}


function newInlineWindow(event, href, link){
	// Setup some constants for use in creating the inline window...
	var windowWidth = Math.round(document.body.clientWidth * 0.45);
	var windowHeight = Math.round(window.innerHeight * 0.45);
	var windowPadding = 13;
	var windowTextPadding = 5;
	var windowFontSize = 10;
	var windowBorderSize = 1;
	var windowButtonHeight = 12;
	var windowButtonTextSize = 11;
	
	var windowFullID = 'inlineWindow';
	
	// stop the window before getting this close to the left/right/top/bottom of the screen
	var pageBoundPadding = 10;
	
	var xpos, ypos;
	
	// get the position of the element that was clicked on...
	var elementTop = getElementOffset(link,'Top');
	var elementLeft = getElementOffset(link,'Left');
	var elementHeight = parseInt(window.getComputedStyle(link,"").getPropertyValue('line-height'));

	
	// setup the x-position of the inline window...
	// check to see if the left 1/3 of the window will overlap the left page bound..
	if ( elementLeft - (windowWidth/3) < pageBoundPadding ) {
		xpos = pageBoundPadding;
	} 
	// check to see if the right 2/3 of the window will overlap the right page bound...
	else if ( elementLeft + (windowWidth*2/3) > document.body.clientWidth - pageBoundPadding ) {
		xpos = document.body.clientWidth - pageBoundPadding - windowWidth;
	}
	else {
		// if we're not going to hit either wall, set the window to be offset
		// by 1/3 to the left of where we clicked (looks better than centering
		xpos = elementLeft - (windowWidth/3);
	}
	
	// setup the y-positioning of the inline window...

	// check to see if the window goes beyond the bottom of the viewport...
	if ( elementTop + windowHeight + pageBoundPadding > window.pageYOffset + window.innerHeight ) {
		ypos = elementTop - windowHeight;
	} else { 
		ypos = elementTop + elementHeight;
	}
	
	var container = document.createElement('div');
	container.id = windowFullID;
	
	var cssBoxWidth = Math.round((windowWidth - (windowPadding+windowBorderSize)*2)/document.body.clientWidth*100);
	var cssBoxHeight = windowHeight - (windowPadding+windowBorderSize*2);

	container.innerHTML = '<div style="' +
		'position: absolute; '+
		'margin: ' + ypos + 'px 0 0 ' + xpos + 'px; ' +
		'padding: ' + Math.round((windowPadding-windowButtonHeight)/2) +'px ' + windowPadding + 'px ' + windowPadding + 'px; ' +
		'width: ' + cssBoxWidth + '%; ' +
		'height: '+ cssBoxHeight + 'px; ' +
		'background-color: #FFFFE0; '+
		'border: ' + windowBorderSize + 'px solid #E0E0E0; '+
		'-moz-border-radius: 5px; '+
		'z-index: 999; '+
		'opacity: 0.95; '+
		'font-size: ' + windowFontSize + 'pt; '+
		'">'+
			'<div style="'+
				'float: right; '+
				'background-color: #DDD; '+
				'margin: 0 3px ' + Math.round((windowPadding-windowButtonHeight)/2) +'px; '+
				'padding: 0 3px; '+
				'-moz-border-radius: 2px; '+
				'height: ' + windowButtonHeight + 'px; '+
				'font-size: ' + windowButtonTextSize + 'px; '+
				'line-height: ' + windowButtonTextSize + 'px; '+
				'font-weight: bold'+
			'"><a href="#" onClick="innerWindow = this.parentNode.parentNode.parentNode; innerWindow.parentNode.removeChild(innerWindow); return false;" style="text-decoration: none;">close</a></div>'+
			'<div style="'+
				'float: right; '+
				'background-color: #DDD; '+
				'margin: 0 3px ' + Math.round((windowPadding-windowButtonHeight)/2) +'px; '+
				'padding: 0 3px; '+
				'-moz-border-radius: 2px; '+
				'height: ' + windowButtonHeight + 'px; '+
				'font-size: ' + windowButtonTextSize + 'px; '+
				'line-height: ' + windowButtonTextSize + 'px; '+
				'font-weight: bold'+
			'"><a href="' + href + '" style="text-decoration: none;">go to full article</a></div>'+
			'<div id="innerWindowCont" style="'+
				'border: 1px dashed black; '+
				'background: white; '+
				'padding: ' + windowTextPadding + 'px; '+
				'overflow: auto; '+
				'clear: both; '+
				'height: ' + (windowHeight - (windowTextPadding+windowPadding+windowBorderSize)*2) + 'px; ' +
			'">loading<span style="text-decoration: blink">...</span></div>'+	
		'</div>';
	document.body.insertBefore(container, document.body.firstChild);
	
	populateInnerWindow(href);
}

function populateInnerWindow(href) {
	
	printHref = document.location.protocol + '//' + document.location.host + (document.location.port ? ':' + document.location.port : '');
	printHref += href + (href.indexOf('?') > -1 ? '&' : '?' ) + 'printable=yes';

	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		var headings, header, content;
		var innerWindowContentBox = document.getElementById('innerWindowCont');
		var xmlDoc=this.responseXML;
		headings = xmlDoc.getElementsByTagName('h1');
		for(var i=0; i < headings.length; i++) if ( headings[i].className == 'firstHeading' ) {
			header = headings[i].firstChild.data; 
			break;
		}

		content = xmlDoc.getElementById('content');

		if (innerWindowContentBox) {
			if (content && content.hasChildNodes()) {
				while(innerWindowContentBox.hasChildNodes()) innerWindowContentBox.removeChild(innerWindowContentBox.childNodes[0]);
				
				var head = document.createElement('h1');
				head.appendChild(document.createTextNode(header));
				content.id = '';
				innerWindowContentBox.appendChild(content);
			} else {
				innerWindowContentBox.innerHTML = 'Error loading page.';
			}
		}else{
			GM_log("Couldn't find a window to populate content for '" + href + "'");
		}
	};
	xhr.open("GET", printHref);
	xhr.responseType = "document";
	xhr.send();
}

function getElementOffset(element,whichCoord) {
	var count = 0
	while (element!=null) {
	 	count += element['offset' + whichCoord];
		element = element.offsetParent;
	}
	return count;
}

// Begin the action

rewriteLinks();
