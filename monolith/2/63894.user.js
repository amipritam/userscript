// ==UserScript==
// @name           WBB User Uploads Link
// @namespace      http://warez-bb.org
// @description    Adds a Link to View Users Uploads under their Profile in ViewTopic.php - Searches all Download Listings Forums
// @include        http://*warez-bb.org/viewtopic.php*
// @version	1.0
// @author	Daniel.Blaze, with thanks to ENIGMA and Yawn.
// ==/UserScript==

var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
	var ankr = anchors[i];
	if(ankr.getAttribute("href")) {
		var PostsLink = ankr.getAttribute("href").match(/search.php\?search_author_id=[\d]+/gim);
		if (PostsLink != null) {
			var AuthorID = /\d+/.exec(PostsLink);
			if (AuthorID != null) {
				newAnchorElement = document.createElement('a');
      			newAnchorElement.setAttribute("href", 'http://www.warez-bb.org/search.php?search_fields=firstpost&search_author_id=' +AuthorID+ '&search_forum=3,47,9,5,28,4,57,88,6,38,7,29,8,83,91,20');
      			newAnchorElement.appendChild(document.createTextNode(" | Uploads"));
      			ankr.parentNode.insertBefore(newAnchorElement, ankr.nextSibling);
			}
		}
	}
}