// ==UserScript==
// @name           Facebook AutoLike3
// @namespace      AutoLike3
// @description    Automaticly like facebook statuses and comments
// @include        http://www.facebook.com/*
// ==/UserScript==

// ==Credits==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+122px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "2px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"/cahyo.bintang\">==> My profile <==</a>"
	div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"http://www.zonaasyik.com\">==> My Web Site <==</a>"
	
	body.appendChild(div);
}
// ==============

// ==Statuses==
body = document.body;
if(body != null) {
 div = document.createElement("div");
 div.setAttribute('id','like2');
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "130px";
 div.style.opacity= 0.90;
 div.style.bottom = "+70px";
 div.style.left = "+8px";
 div.style.backgroundColor = "#eceff5";
 div.style.border = "2px solid #6B84B4";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#000000' onclick='AutoLike()'><center>Menyukai semua status</center></a>"
 body.appendChild(div);
 unsafeWindow.AutoLike = function() {
  var BounceCounterLike=0;
  var Counter = 0;
  var prepare = document.getElementsByTagName("span");
  var buttons = new Array();
  
  for (var i = 0; i < prepare.length; i++)
   if(prepare[i].getAttribute("id")!=null&&prepare[i].getAttribute("id").indexOf(".reactRoot")>=0&&(prepare[i].innerHTML=="Me gusta"||prepare[i].innerHTML=="Like"||prepare[i].innerHTML=="Suka"||prepare[i].innerHTML=="Beğen"||prepare[i].innerHTML=="أعجبني"||prepare[i].innerHTML=="Seneng"||prepare[i].innerHTML=="J’aime")) {
    buttons[Counter] = prepare[i];
    Counter++;
   }
  
  function check_link(linknumber) {
   buttons[linknumber].click();
   var message = "<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Status yang sudah disukai: "+ (linknumber + 1) +"-"+ buttons.length +"</center></a>";
   document.getElementById('like2').innerHTML = message;
   };
  
  function like_timer(timex) {
   window.setTimeout(bouncer_like,timex);
  };
  
  function check_warning() {
   var warning = document.getElementsByTagName("label");
   var checkwarning = false;
   
   for(var i = 0; i < warning.length; i++) {
    var myClass = warning[i].getAttribute("class");
    if(myClass!=null&&myClass.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) {
     alert("Warning from Facebook");
     checkwarning = true;
    }
   }
   
   if(!checkwarning) like_timer(0);
  };
  
  function warning_timer(timex) {
   window.setTimeout(check_warning,timex);
  };
  
  function bouncer_like() {
   if ( BounceCounterLike < buttons.length ) {
    check_link(BounceCounterLike);
    warning_timer(0);
    BounceCounterLike++;
   }
  };
  
  bouncer_like();

  };
 }
// ==============
// ==All like Comments==
body = document.body;
if(body != null) {
 div = document.createElement("div");
 div.setAttribute('id','like3');
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "130px";
 div.style.opacity= 0.90;
 div.style.bottom = "+45px";
 div.style.left = "+8px";
 div.style.backgroundColor = "#eceff5";
 div.style.border = "2px solid #6B84B4";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#000000' onclick='LikeComments()'><center>Menyukai semua komentar</center></a>"
 body.appendChild(div);
 unsafeWindow.LikeComments = function() {
  var BounceCounterLike=0;
  var Counter = 0;
  var prepare = document.getElementsByTagName("a");
  var buttons = new Array();
  
  for (var i = 0; i < prepare.length; i++)
   if(prepare[i].getAttribute("data-ft")!=null&&(prepare[i].getAttribute("title")=="Me gusta este comentario"||prepare[i].getAttribute("title")=="Like this comment"||prepare[i].getAttribute("title")=="Suka komentar ini"||prepare[i].getAttribute("title")=="Nyenengi tanggapan iki"||prepare[i].getAttribute("title")=="الإعجاب بالتعليق"||prepare[i].getAttribute("title")=="J’aime ce commentaire"||prepare[i].getAttribute("title")=="Bu yorumu beğen")) {
    buttons[Counter] = prepare[i];
    Counter++;
   }
  function check_link(linknumber) {
   buttons[linknumber].click();
   var message = "<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Komentar yang sudah disukai: "+ (linknumber + 1) +"-"+ buttons.length +"</center></a>";
   document.getElementById('like3').innerHTML = message;
   };
  function like_timer(timex) {
   window.setTimeout(bouncer_like,timex);
  };
  function check_warning() {
   var warning = document.getElementsByTagName("label");
   var checkwarning = false;
   for(var i = 0; i < warning.length; i++) {
    var myClass = warning[i].getAttribute("class");
    if(myClass!=null&&myClass.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) {
     alert("Warning from Facebook");
     checkwarning = true;
     }
    }
   if(!checkwarning) like_timer(0);
  };
  function warning_timer(timex) {
   window.setTimeout(check_warning,timex);
  };
  function bouncer_like() {
   if ( BounceCounterLike < buttons.length ) {
    check_link(BounceCounterLike);
    warning_timer(0);
    BounceCounterLike++;
   }
  };
  bouncer_like();
  void(0);
 };
}
// ==============