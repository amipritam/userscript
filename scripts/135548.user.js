﻿scr_meta=<><![CDATA[
// ==UserScript==
// @name	Travian Friendly VietNam T4
// @author	nguyenminhtuan.0928152141@gmail.com
// @version	2.2.2
// @include        	http://ts*.travian.*
// ==/UserScript==
]]></>.toString();

//Code snippits from : http://userscripts.org/scripts/show/98310 , http://userscripts.org/scripts/show/133743 , http://userscripts.org/scripts/show/54823 , http://www.w3schools.com , http://stackoverflow.com/ , ... and me
//Test by Firefox web browser and Scriptish addon
function $at(a,b){function c(a,b,c){if(c!==null&&c!==undefined&&c!==""){if(b==="class"&&c.charAt(0)==="+"){addClass(a,c.slice(1))}else{a.setAttribute(b,c);if(b.toUpperCase()==="TITLE"){a.setAttribute("alt",c)}}}else{a.removeAttribute(b)}}function d(a,b,c,d){a.addEventListener(b,c,d)}if(b){var e;for(e=0;e<b.length;e++){var f=b[e];if(f instanceof Array){if(f.length===2){c(a,f[0],f[1])}else if(f.length===3){d(a,f[0],f[1],f[2])}}else if(e===0){if(b.length===2){c(a,f,b[1])}else if(f.length===3){d(a,f,b[1],b[2])}break}}}}function $e(a,b,c){var d=document.createElement(a);if(!(b instanceof Array)&&!(b===null||b===undefined)){c=b;b=null}$at(d,b);if(c!==null&&c!==undefined){if(typeof c==="object"){addChildren(d,c)}else if(c!==""){d.innerHTML=c}}return d}function $i(a){var b=document.createElement("input");$at(b,a);return b}function create(a,b){var c=document.createElement(a);if(b)for(var d in b){if(d.indexOf("on")==0)c.addEventListener(d.substring(2),b[d],false);else if(d=="kids"&&(d=b[d])){for(var e=0;e<d.length;e++)c.appendChild(d[e])}else if("style,accesskey,id,name,src,href,class".indexOf(d)!=-1)c.setAttribute(d,b[d]);else c[d]=b[d]}return c}function addGlobalStyle(a){if(typeof GM_addStyle=="function")GM_addStyle(a);else if(head=document.getElementsByTagName("head")[0]){var b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a;head.appendChild(b)}}var listen=document.getElementsByClassName("markAll");for(var i=0;i<listen.length;i++){var inputg=$i([["type","checkbox"],["id","mark_green"+i]]);var inputgl=$e("label","bỏ farm rỗng");inputg.addEventListener("click",function(){var a=document.getElementsByClassName("slotRow");for(var b=0;b<a.length;b++){try{if(a[b].getElementsByClassName("lastRaid")[0].getElementsByTagName("img")[1].getAttribute("class")=="carry half"){a[b].getElementsByTagName("input")[0].checked=false}}catch(c){}}},true);listen[i].appendChild(inputg);listen[i].appendChild(inputgl)}var text_and_urls={"Nhà kho":"build.php?gid=10","Kho lúa":"build.php?gid=11","Lò rèn":"build.php?gid=13","Nhà chính":"build.php?gid=15","Binh trường":"build.php?gid=16","Chợ":"build.php?gid=17","Trại lính":"build.php?gid=19","Chuồng ngựa":"build.php?gid=20","Xưởng":"build.php?gid=21","Gửi quân":"build.php?tt=2&id=39","Farm list":"build.php?tt=99&id=39"};addGlobalStyle("#extraLinks:hover #extraLinks_drop {display:block} #extraLinks #extraLinks_drop {display:none} #extraLinks_drop span {display:block}");var drop,links_box=create("div",{id:"extraLinks",style:"background:#fff; cursor:pointer; position:fixed; bottom:0px; right:0px;font-size:14px;color:rgb(153,192,26); z-index:99999",kids:new Array(drop=create("div",{id:"extraLinks_drop",style:"background:#fff; z-index:99999"}),create("span",{textContent:"☑Chọn nhanh",style:"float:right"}))});for(var u in text_and_urls)if(u!="")drop.appendChild(create("span",{style:"padding:0px 5px",kids:new Array(create("a",{textContent:u,href:text_and_urls[u],style:"font-size:12px;font-weight:normal",onclick:function(a){addLink(a)}}))}));document.body.appendChild(links_box);input=document.getElementsByTagName("input");if(location.pathname=="/berichte.php"){input.n1.checked=true;input.n2.checked=true;input.n3.checked=true;input.n4.checked=true;input.n5.checked=true;input.n6.checked=true;input.n7.checked=true;input.n8.checked=true;input.n9.checked=true;input.n10.checked=true}if(location.pathname=="/nachrichten.php"){input.n1.checked=true;input.n2.checked=true;input.n3.checked=true;input.n4.checked=true;input.n5.checked=true;input.n6.checked=true;input.n7.checked=true;input.n8.checked=true;input.n9.checked=true;input.n10.checked=true}if(location.pathname=="/hero_adventure.php"){document.getElementById("adventureListForm").getElementsByTagName("a")[1].click()}document.getElementById("start").click()