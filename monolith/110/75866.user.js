// ==UserScript==
// @name          ReplaceURL
// @description   Replaces URLs. Useful for school filters.
// @include       http://*
// @include       https://*
// ==/UserScript==
var url1,url2;
url1 = ['http://www.facebook.com];
url2 = ['https://www.facebook.com/*]; 
var a, links;
var tmp="a";
var p,q;
links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    a = links[i];
    for(var j=0;j<url1.length; j++)
	{
	tmp = a.href+"" ;
	if(tmp.indexOf(url1[j]) != -1)
	{
	p=tmp.indexOf(url1[j]) ;
	q="http://";
	q = q + url2[j] + tmp.substring(p+url1[j].length,tmp.length);
	a.href=q ;
	}
	}
    }