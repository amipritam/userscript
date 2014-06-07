﻿// ==UserScript==
// @name           زر المراسلة مفيد للقادة
// @namespace      DS
// @author         Bananaz
// @include        http://ae*.tribalwars.ae/*
// ==/UserScript==

var icon =	'data:image/png;base64,'+
		'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAMAAABcxfTLAAAABGdBTUEAALGPC%2FxhBQAAAwBQTF'+
		'RFAAAAGhgVHx0aHx4bIB8cJiMdKCUfIiIgJCQjJSUlNDIuODc0OzgyOjk3QjwtQj00REA3Q0A5Rk'+
		'I6bl07U05FUE9NXldIXllOUVFRaF9PY19XYF5bZmJaY2NjaWdhhHdag3tqgX56g4J%2Fk4Rkkody'+
		'kYl4lYx4o5Z9mJGFnJWJpJ2PrJ%2BGoZ2UsKWOtqyWvLKftLCnv7%2B%2FxLys1su00czB087H29'+
		'LA2dnZ4djG6OPW8ezg%2BPPr%2Ffr1%2F%2F%2F%2FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
		'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJw%2FEgAAAAlwSFlz'+
		'AAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAIlJREFU'+
		'GFdFx9sWgUAUgOFNlJzCOIcQNjKNmaEaZr%2F%2Fa6lu%2FBf%2FWh8wVP%2BQgUofVJZXu3EBii'+
		'Y7Igk52XXwrSwbhra%2BtJn7%2FKSlyb8Yf3nMTp4xtWervXOY4nBT1LbzMAzO7aIZ6YKDsvgeeC'+
		'%2FRuo51rBMQaG2nZ0zXuWsdIzChRH%2BR8pGbJIjsB%2FGKF8so9KtqAAAAAElFTkSuQmCC';

var input = document.getElementsByTagName('a');
for (a = 0; a < input.length; a++) {
	if (input[a].href.match(/village=(\d+)&screen=info_player&id=(\d+)/) || input[a].href.match(/village=(\d+)&amp;screen=info_player&amp;id=(\d+)/)) {
		var village = RegExp.$1;
		var player = RegExp.$2;
		var link = document.createElement('a');
		link.href = '/game.php?village=' + village + '&screen=mail&mode=new&player=' + player;
		link.setAttribute('style', 'margin-right: 5px;');
		var img = document.createElement('img');
		img.src = icon;
		img.alt = 'IGM';
		link.appendChild(img);
		input[a].parentNode.insertBefore(link, input[a].nextSibling);
	}
}