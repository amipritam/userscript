// ==UserScript==
// @name        Ultoo Script By deep4k
//@description works on www.ultoo.com with Faster & New random poll submition method added
// @namespace  ultoo
// @include     http://www.ultoo.com/*
// @include     http://adf.ly/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant       none
// @version     24.04.2013
// @updateURL		http://userscripts.org/scripts/source/161997.meta.js
// @downloadURL		http://userscripts.org/scripts/source/161997.user.js
// @licence        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==
$(function(){

var path = window.location.pathname;
var url=window.location.href;

var pattern=/^http:\/\/www.ultoo.com\/mywallet.php/g;

if(url.search(pattern)==0)
{
//setInterval(function () {alert("Click on options and select---Allow Popups for www.ultoo.com---at Top Right corner of this page for superfast earning");}, 100);
	window.location.href=url.replace("mywallet","AnswereIt");
}
var pattern=/^http:\/\/adf.ly/g;
if(url.search(pattern)==0)
{
setInterval(function () {document.getElementById("skip_ad_button").click();}, 2000);
}
pattern=/^http:\/\/www.ultoo.com\/poll.php/g;

var path = window.location.pathname;

if (path == "/poll.php")
{
  var rand = computeRandom();
  var opt = "AnchorId_"+rand;
  ImplementClass(opt);
  document.form1.submit();
var mobile=8528228412;
var message="Hi.., Good Day...! "+Math.floor((Math.random() * 1000000000) + 1)+"times";
$.post("home.php",{zxcoiesesscd:"" , MessageLength:"140" , GlobalKeyValue:"1" , chalange_field:"" , response_field:"" , MobileNos_:mobile , Message_:message , SendNow_:"Send Now"}, function(){});
setTimeout("window.location.href = \"http://www.ultoo.com/poll.php?zxcoiesesscd=\";",300);
}
function computeRandom()
{
return Math.round(Math.random() * (4-1) + 1);
}
pattern=/^http:\/\/www.ultoo.com\/PollResult.php/g;

if(url.search(pattern)==0)
{
	var link = $(".poll_result_gbg a:last").attr('href');
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}

	var link2 = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link2) != "undefined")
	{
		window.location.href = link2;
	}
}

pattern=/^http:\/\/www.ultoo.com\/middleAdPoll.php/g;

if(url.search(pattern)==0)
{
	window.location.href=url.replace("middleAdPoll","poll");
}

pattern=/^http:\/\/www.ultoo.com\/PollCompletion.php/g;

if(url.search(pattern)==0)
{
	var link = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}
}

pattern=/^http:\/\/www.ultoo.com\/PollCompleted.php/g;

if(url.search(pattern)==0)
{
	if(document.getElementsByTagName('font')[0]!=undefined)
	{
	window.location.href=url.replace("PollCompleted", "home");
         window.open('http://adf.ly/KzKNg');
	}
	else
	{
		document.getElementsByName('PollUserName')[0].value="RAJ";
		document.getElementsByName('PollUserQuestion')[0].value="What's the longest amount of time you've spent at a restaurant..? & Me only "+Math.floor((Math.random() * 100000) + 1)+"seconds";
document.getElementById('OptionId1').value=Math.floor((Math.random() * 100000) + 10);
document.getElementById('OptionId2').value=Math.floor((Math.random() * 50000) + 2);
document.getElementById('OptionId3').value=Math.floor((Math.random() * 8000) + 1);
		document.getElementById('OptionId4').value="Can't say"
		document.form1.submit();

	}
}

pattern=/^http:\/\/www.ultoo.com\/QuestionSaved.php/g;

if(url.search(pattern)==0)
{
	window.location.href ="http://www.ultoo.com/home.php?zxcoiesesscd=";
         window.open('http://adf.ly/KzKNg');
}

//Messages

pattern=/^http:\/\/www.ultoo.com\/home.php/g;

if(url.search(pattern)==0)
{
	var content=document.getElementsByTagName('font')[0].innerHTML;
	var pat="Dear";

	if(content.search(pat)<0)
	{	
		document.getElementById('MobileNos_').value=8528228412;
		document.getElementById('Message_').value="Hi.., Good Day...! "+Math.floor((Math.random() * 1000000000) + 1)+"times";
		document.frmSendSms.submit();
		setTimeout("window.location.href = \"http://www.ultoo.com/home.php?zxcoiesesscd=\";",400);		
	}
	else
	{
		window.location.href ="http://www.ultoo.com/logout.php?Logout=1";
	}
}

//AnswerIt 

pattern=/http:\/\/www.ultoo.com\/AnswereIt.php/g;

if(url.search(pattern)==0)
{
var options="kartik;argentina;lotus;delhi;ABN;Pakistan;sehwag;somnath;ajnabee;4;Dolly;Sachin;SOTY;1;huma;karna;Mumbai;remo;anupam kher;ireland;rishi;preity zinta;hockey;birr;dalai lama;farmer;lg;rama;akbar;islam;celina;saina;coconut;nepal;bhutan;ganesha;nepal;flake;china;karma;narayan;mars;english;gadha;8;nargis;koshala;peacock;don;zen;"
var cont=document.getElementsByTagName('p')[0].innerHTML;
var qno=parseInt(cont.substr(17));
document.getElementsByTagName('input')[0].value=options.split(";")[qno-1];
var mobile=8528228412;
var messg="Hi.., Good Day...! "+Math.floor((Math.random() * 1000000000) + 1)+"times";
setTimeout(function(){$.post("home.php",{zxcoiesesscd:"" , MessageLength:"140" , GlobalKeyValue:"1" , chalange_field:"" , response_field:"" , MobileNos_:mobile , Message_:messg , SendNow_:"Send Now"}, function(){});},350);
document.getElementsByTagName('input')[2].click();
setTimeout("window.location.href = \"http://www.ultoo.com/AnswereIt.php?zxcoiesesscd=\";",400);
}
pattern=/http:\/\/www.ultoo.com\/AnswereItGraph.php/g;

if(url.search(pattern)==0)
{
	window.location.href = "http://www.ultoo.com/AnswereIt.php?zxcoiesesscd=";
}

pattern=/^http:\/\/www.ultoo.com\/AICompletion.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://adf.ly/Ner4O";
}
pattern=/^http:\/\/www.ultoo.com\/msgSent.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://adf.ly/KzKNg";
}

pattern=/^http:\/\/www.ultoo.com\/index.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://adf.ly/L9dMh";
}

pattern=/^http:\/\/www.ultoo.com\/SessExpire.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://adf.ly/L9dMh";
}

pattern=/^http:\/\/www.ultoo.com\/relogin.php/g;

if(url.search(pattern)==0)
{
	 window.location.href="http://way23gp.blogspot.com";
         window.open('http://www.ultoo.com/login.php');
}
});

setTimeout(function(){
   window.location.reload(1);
}, 50000);
