// ==UserScript==
// @name          Rock-Banned Faggotomatic
// @description	  Removes posts by nasty people.
// @include       http://www.rock-banned.com/*
// @exclude       
// ==/UserScript==

(function() {
	var allT;
	var plonk = new Array();
	allT = document.getElementsByTagName('table');
	for (var i = 0; i < allT.length; i++) {
	    if(allT[i].innerHTML.match(/This message is hidden because <strong>(\w+)<\/strong> is on your <a href=\"profile/)){
		    allT[i].style.display="none";
	    	
	    	//Add ignored user to list of ignored users
	    	plonk[RegExp.$1] = RegExp.$1;
	    	}
		}

	// Remove posts that quote a user on the ignore list
	for (var i = 0; i < allT.length; i++) {
		for (var x in plonk) {
		    if(allT[i].innerHTML.match("<div>Originally Posted by <strong>"+plonk[x]+"</strong></div>")){
			    allT[i].style.display="none";
	    		}
    		}
    	}
    	
})();

