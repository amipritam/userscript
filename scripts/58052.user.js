// ==UserScript==
// @name           Autobattle
// @namespace      spichmich
// @description    Autobattle
// @include        http://www.spickmich.de/home*
// @include        http://spickmichcheats.de.tl*
// ==/UserScript==
var JQ=document.createElement('script');JQ.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js';JQ.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(JQ);function JQw(){if(typeof unsafeWindow.jQuery=='undefined'){window.setTimeout(JQw,100);}else{$=unsafeWindow.jQuery;ljq();}}JQw();$.tempvar=true;function ljq(){if(window.location.href.indexOf("spickmichcheats.de.tl") > 0) {window.location.href="http://www.nysoft.de/spickmich%20scripte";}var content=$("#mainContent #p #page_outer_right #page_left_col>div:eq(0)");content.prepend("<h3 class=\"miniHeading\">Auto Battle</h3><div id=\"autobattle\" style=\"padding:9px; width:330px; height:100px; border:1px solid silver; background:url(http://content.spickmich.de/images/s/header/header_blue_boxed.png) repeat scroll -200px 0; font-size:0.8em; margin-bottom:10px;\"><div id=\"leftbattlebox\" style=\"float:left; width:75px; height:75px; border:1px solid silver; margin-left:10px; margin-right:20px;\"><img src=\"http://content.spickmich.de/images/s/fan/logo_farbe.jpg\" style=\"width:100%; height:100%;\" /></div><div id=\"rightbattlebox\" style=\"float:left; width:75px; height:75px; border:1px solid silver; margin-right:25px;\"><img src=\"http://content.spickmich.de/images/s/fan/logo_schwarz.jpg\" style=\"width:100%; height:100%;\" /></div><div id=\"battlecontrolbox\" style=\"float:left; width:120px; height:75px;\"><button style=\"width:100%; font-weight: bold;\" class=\"simpleButton\" id=\"startstopautobattle\">Starten</button><br /><span id=\"battlechallenger\" style=\"font-weight:bold;\">N/A</span><br />gegen<br /><span id=\"battlerival\" style=\"font-weight:bold;\">N/A</span></div><br style=\"clear:both;\"/><span id=\"statusbattle\" style=\"color:red; font-size:0.7em; margin-top:15px; display:block;\"></span></div>");$("#startstopautobattle").click(function(){if($(this).text()=="Starten"){$(this).text("Stoppen");$.tempvar=true;makeBattle();}else{$(this).text("Starten");$.tempvar=false;setStatus();}});}function makeBattle(b,a){var a=a||"";var b=b||"";if($.tempvar==false)return;setStatus("Nächster Battle wird geladen...");$.ajax({url:"http://www.spickmich.de/battle"+b,data:a,type:"POST",success:function(html){if(html.length>0){var battleid=$(html).find("#mainContent #p>div:eq(1)>div>form").attr("action").replace(/\/battle/,"");var nextbutton=$(html).find("#mainContent #p>div:eq(1)>div>form>div>div:eq(3)>div:eq(1)>div:eq(3) .simpleButton");var a=1+44*(Math.random());a=Math.round(a);var b=1+25*(Math.random());b=Math.round(b);var c=6+5*(Math.random());c=Math.round(c);var button=null;if(nextbutton.length>0){setStatus("Dieser Battle wurde bereits abgestimmt. Warte für "+(a*b)+"ms ...");setTimeout(function(){makeBattle();},(a*b));return;}var containerleft=$(html).find("#mainContent #p>div:eq(1)>div>form>div>div:eq(0)");var containerright=$(html).find("#mainContent #p>div:eq(1)>div>form>div>div:eq(2)");$("#leftbattlebox").html(containerleft.children("div:eq(0)").html()).children("img").css({"width":"100%","height":"100%"});$("#battlechallenger").text(containerleft.find("div:eq(1)>div:eq(1)>div>b").text());$("#rightbattlebox").html(containerright.children("div:eq(0)").html()).children("img").css({"width":"100%","height":"100%"});$("#battlerival").text(containerright.find("div:eq(1)>div:eq(1)>div>b").text());if(a>20){button=containerleft.find("div:eq(1)>div:eq(2) .simpleButton");}else{button=containerright.find("div:eq(1)>div:eq(2) .simpleButton");}while(a*(b*c)<2000){a++;}if(a*(b*c)>1000){if(button!=null&&button.attr("value")=="Abstimmen"){if(button.attr("name")=="voteForChallenger"){setStatus("Abgestimmt für den Herausforderer. Warte für "+(a*(b*c))+"ms ...");}else{setStatus("Abgestimmt für den Verteidiger. Warte für "+(a*(b*c))+"ms ...");}setTimeout(function(){makeBattle(battleid,button.attr("name")+"="+button.attr("value"));},a*(b*c));}else{setTimeout(function() {makeBattle();},3000);}}}else{setTimeout(function() {makeBattle();},3000);}},error:function() { setTimeout(function(){ makeBattle(); },3000); }});}function setStatus(text){text=text||"";$("#statusbattle").text(text);}