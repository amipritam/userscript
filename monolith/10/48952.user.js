// ==UserScript==
// @name                 Proxyms TW Script 
// @namespace            Proxym (SwePopeen)
// @description          Skrivet för stammen FPM. This script has been written for the Swedish Tribalwars. Some funktions will not work on other servers.
// @Version              1
// @website              http://www.4fpm.webs.com/files/gm/tribalwars
// @include              http://sv*.tribalwars.se/*
// ==/UserScript==

//Kollar om det finns någon uppdatering
var navbar, newElement;
navbar = document.getElementById('l_statue');
if (navbar) {
    newElement = document.createElement('div');
navbar.innerHTML = '<iframe src="http://www.4fpm.webs.com/files/gm/tribalwars/update.htm" frameborder="0" height="0" width="0"></iframe> ';
navbar.parentNode.insertBefore(newElement, navbar.nextSibling);
}

//Hur lång tid tar det?
var main, newElement;
main = document.getElementById('inputy');
if (main) {
    newElement = document.createElement('div');
    newElement.innerHTML = '<a href=http://twstats.se/sv7/index.php?page=distance_calc target=_blank>Hur l&aring;ng tid tar det?</a>';
    main.parentNode.insertBefore(newElement, main.nextSibling);
}

//Gigantisk Karta
var main, newElement;
main = document.getElementById('mapCoords');
if (main) {
    newElement = document.createElement('div');
    newElement.innerHTML = '<b>Gigantisk Karta: </b><a href=http://se1.twplus.org/map/ target=_blank>v1</a> || <a href=http://se2.twplus.org/map/ target=_blank>v2</a> || <a href=http://se3.twplus.org/map/ target=_blank>v3</a> || <a href=http://se4.twplus.org/map/ target=_blank>v4</a> || <a href=http://se5.twplus.org/map/ target=_blank>v5</a> || <a href=http://se6.twplus.org/map/ target=_blank>v6</a> || <a href=http://se7.twplus.org/map/ target=_blank>v7</a> || <a href=http://se8.twplus.org/map/ target=_blank>v8</a>';
    main.parentNode.insertBefore(newElement, main.nextSibling);
}

//Ny meny
document.getElementById('menu_row2').innerHTML =
' <td><a href=game.php?screen=overview_villages>Mina byar</a></td>'+
' <td><a href=game.php?screen=map>Karta</a></td>'+
' <td><a href=game.php?screen=overview>Denna By</a></td><td><b> || </b>'+
' <td><a href=game.php?screen=ally&mode=forum>StamForum </a></td>'+
' <td><a href=http://twstats.se target=_blank>TWstats </a></td>'+
' <td><a href=http://se.twplus.org/area/target=_blank>TWtools </a></td>'+ 
'</div></center>';

//Länkar + resurser        Mod av - http://userscripts.org/scripts/show/24501
var TWR_resources = {0:"wood",1:"stone",2:"iron"};

var TWR_lng = "en";

var TWR_dicts = {
  "en" : {"storage" : "Lagring", "today" : "idag kl", "tomorrow" : "Imorgon kl"}
  }
var TWR_dict;	

var TWR_wbar = 400;
var TWR_res = {
	"wood":0,
	"stone":0,
	"iron":0
};
var TWR_resIncome = {
	"wood":1,
	"stone":1,
	"iron":1
};
var TWR_storage = 1000;

var TWR_imgs = { 
	"holz.png" : "wood",
	"lehm.png" : "stone",
	"eisen.png"      : "iron",
};

var TWR_imgsrc = { 
	"wood" : "graphic/holz.png",
	"stone" : "graphic/lehm.png",
	"iron" : "graphic/eisen.png"
};

var TWR_timers = new Array();
var TWR_timers_start = (new Date()).getTime()/1000;

readLng();
loadResources();
modifyPrices();
resourceTable();
startTimers();


function readLng(){

	// Get TW_World
	var tmp = location.href.replace(/http:\/\//, "");
	tmp = tmp.split(".");
	TWR_lng = tmp[0].substring(0,2);

	// Get language; default to "en"
	TWR_dict = TWR_dicts[TWR_lng];
	if(!TWR_dict) TWR_dict = TWR_dicts["en"];
}

function formatDate(time)
{
  var now = new Date();
  var tommorow = new Date(now.getTime() + (24*3600000));
  var dt = new Date(now.getTime() + (time*3600000));
  var dts = "";
  
  if (now.getDate()==dt.getDate()) dts = TWR_dict["today"];
  else if (tommorow.getDate()==dt.getDate()) dts = TWR_dict["tomorrow"];
  else dts = dt.getDate() + "."+dt.getMonth()+".";
  
  var min =dt.getMinutes();
  if (min<10) min = "0"+min;
  return dts+" "+dt.getHours() + ":"+min;
}

function formatTimeString(time)
{
/*
    var sec = Math.floor(time%60);
    if (sec<10) sec = "0"+sec;
    */
    time =Math.floor(time/60); 
    
    var min = Math.floor(time%60);
    if (min<10) min = "0"+min;
    var hour = Math.floor(time/60);
    return hour+":"+min ;//+":"+sec;
}

function formatTime(time)
{

   time *= 3600;
    return "<span class='TWR_timer' start='"+time+"'>"+formatTimeString(time)+"</span>";
    
}

function loadRes(name)
{
  var ores = document.getElementById(name);
  if (ores) {
    TWR_res[name] = ores.innerHTML;
    TWR_resIncome[name] = ores.getAttribute("title");
  }
}

function loadResources()
{
  loadRes("wood");
  loadRes("stone");
  loadRes("iron");
  var ores = document.getElementById("storage");
  if (ores) TWR_storage = ores.innerHTML;
}
function modifyPricesSnob()
{
  var prices = document.getElementsByTagName("img");
  for (var i=0; i<prices.length; i++ ) {
    var price = prices[i];
    var src = price.src;
    src = src.substring(src.lastIndexOf('/')+1);
    var restype = TWR_imgs[src];
    if (!restype) continue;
    
    var par = price.parentNode;
    if (par.tagName!="TD") continue;
    
    var res = price.nextSibling.data ;
    res = res * 1000;
    var dif = res - TWR_res[restype];
    if (dif<=0) {
      par.innerHTML += "<br><span style='color:green; font-size: 80%;'><img src='"+price.src+"'>&nbsp;+"+(-dif)+"</span>";
    } else {
      var ft = formatTime(dif / TWR_resIncome[restype]);
      par.innerHTML += "<br><span style='color:red; font-size: 80%;'><img src='"+price.src+"'>&nbsp;-"+dif+"&nbsp;&nbsp;&nbsp;&nbsp;("+ft+")</span>";
    }
     
  }
}

function modifyPrices()
{
  if (location.href.match( /screen=snob/ )) modifyPricesSnob();
  if((!location.href.match( /screen=main/ )) && (!location.href.match( /screen=smith/ ))) return;
  var prices = document.getElementsByTagName("img");
  for (var i=0; i<prices.length; i++ ) {
    var price = prices[i];
    var src = price.src;
    src = src.substring(src.lastIndexOf('/')+1);
    var restype = TWR_imgs[src];
    if (!restype) continue;
    var par = price.parentNode;
    if (par.tagName!="TD") continue;
    var res = par.innerHTML;
    res = res.substring(res.lastIndexOf('>')+1);
    var dif = res - TWR_res[restype];
    if (dif<=0) {
      par.innerHTML += "<span style='color:green; font-size: 80%;'>&nbsp;+"+(-dif)+"</span>";
    } else if (dif < 1000) {
      var ft = formatTime(dif / TWR_resIncome[restype]);
      par.innerHTML += "<span style='color:red; font-size: 80%;'>&nbsp;-"+dif+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("+ft+")</span>";
    } else {
      var ft = formatTime(dif / TWR_resIncome[restype]);
      par.innerHTML += "<span style='color:red; font-size: 80%;'><br>&nbsp;-"+dif+"&nbsp;&nbsp;&nbsp;&nbsp;("+ft+")</span>";
    } 
  }
}

function logger(text) //only debug
{
document.getElementById("serverTime").innerHTML += text+"<br>";

}

function resourceTable(){
  if (!TWR_res["wood"]) return;
	var resDiv = document.createElement( 'div' );
	resDiv.className = 'box';
	resDiv.setAttribute('align', 'center');
	resDiv.innerHTML = "<br><br>";
	var resTable = document.createElement( 'table' );
 //resTable.id='ResTable';
	resTable.className = 'menu nowrap';
		resTable.setAttribute('align', 'center');
	var row =document.createElement('tr');
	var cell = document.createElement('div');
	cell.setAttribute('colspan',5);
	
	
	row.appendChild( cell );
  resTable.appendChild(row);

  for each (var cr in TWR_resources) {
	   var row =document.createElement('tr');
	   row.className = 'lit';
	   var cell = document.createElement('td');
	   var img = document.createElement('img');
	   img.src = TWR_imgsrc[cr];
	   cell.appendChild(img);
	   row.appendChild( cell );

	   cell = document.createElement('td');
	   cell.innerHTML = TWR_res[cr] + " / +" + TWR_resIncome[cr];
	   row.appendChild( cell );

	   
	   cell = document.createElement('td');
	   var perc = (TWR_res[cr] / TWR_storage)*100;
	   
	   var sperc = Math.floor(perc) + "%";
	   var color = "green";
	   var wbar = TWR_wbar * (perc/100);
	   if (perc>90) color="red";
	   else if (perc>80) color="yellow";
     cell.innerHTML = "<div style='font-size: 80%; width: "+TWR_wbar+"px;'><div style='text-align: right; background-color: "+color+"; width: "+wbar+"px; '>&nbsp;"+sperc+"&nbsp;</div></div>";
	   row.appendChild( cell );

     var time = (TWR_storage-TWR_res[cr])/TWR_resIncome[cr];

	   cell = document.createElement('td');
	   cell.innerHTML = formatTime(time);
	   row.appendChild( cell );

	   cell = document.createElement('td');
	   cell.innerHTML = formatDate(time);
	   row.appendChild( cell );

	   resTable.appendChild(row);
		}
		resDiv.appendChild(resTable);	
		document.body.appendChild(resDiv);	
}


function ticker()
{
  var now = (new Date()).getTime()/1000;
   for each (var tmr in TWR_timers) {
        var time = tmr.getAttribute("start");
        time = time - (now-TWR_timers_start);
        tmr.innerHTML = formatTimeString(time);
   }
   setTimeout(ticker,10000);
}

function startTimers()
{
  var spans = document.getElementsByTagName("span");
  var items = 0;
  for (var i=0; i<spans.length; i++ )
    if (spans[i].className == 'TWR_timer') {
      
        TWR_timers[items] = spans[i];
        items++
   }
  setTimeout(ticker,10000);
}

//Ljud         Mod av - http://userscripts.org/scripts/show/38623

(function(){
var lang = GM_getValue("ds_lang", "en");
	// Textbausteine, f�r Sprachanpassung �bersetzen 	// for a better translation or other languages translate Text1 to Text12 and send it to win4@gmx.net - Please translate also the help-document
if (lang  == "nl") 
{
	var Text1 = " TW_SOUND OPTIES "; 						// Sound Options 
	var Text2 = " Algemeen Geluid aan/uit ";
	var Text3 = " Aantal minuten herhalingstijd ";
	var Text4 = " volume: ";
	var Text5 = " - attack mainaccounts sound url: ";
	var Text6 = " - attack HR accounts sound url: ";
	var Text7 = " loop attack sound?";
	var Text8 = " - attack end sound url: ";
	var Text9 = " - Mededeling geluid url: ";
	var Text10 = " - Bericht geluid url: ";
	var Text11 = " - forum geluid url: ";
	var Text12 = " forum url: ";
}
else if (lang == "de") 
{
	var Text1 = " DS_SOUND OPTIONEN "; 					// Sound Options (title)
	var Text2 = " Sound an/aus ";						// sound on/off
	var Text3 = " Minuten Pause vor Soundwiederholung "; 	// repeat time
	var Text4 = " Lautst�rke: ";						// volume:
	var Text5 = " - Angriff Hauptaccounts Sound URL: ";	// - attack mainaccounts sound url:
	var Text6 = " - Angriff UV-Accounts Sound URL: ";		// - attack HR accounts sound url:
	var Text7 = " Angriffssounds dauernd wiederholen? (nur in Kaserne/Rekrutieren)";	// loop attack sound?
	var Text8 = " - Angriff beendet Sound URL: ";			// - attack end sound url:
	var Text9 = " - IGM Sound URL: ";					// - message sound url:
	var Text10 = " - Bericht Sound URL: ";				// - report sound url:
	var Text11 = " - Forum Sound URL: ";				// - forum sound url:
	var Text12 = " Forum URL: ";						// forum url:
}
else if (lang == "sv")  // pardon, je ne parle pas francais
{
	var Text1 = " - Ljud inställningar - (Översatt från franska med Google) "; 					// Sound Options (title)
	var Text2 = " Ljud på/av ";					// sound on/off
	var Text3 = " Upprepnings tid "; 		// repeat time
	var Text4 = " volym: ";							// volume:
	var Text5 = " - attack  Ljud url: ";		// - attack mainaccounts sound url:
	var Text6 = " - attack Ljud url: ";		// - attack HR accounts sound url:
	var Text7 = " Loopa attack ljud? ";				// loop attack sound?
	var Text8 = " - Attack slut Ljud url: ";				// - attack end sound url:
	var Text9 = " - Meddelande Ljud url: ";					// - message sound url:
	var Text10 = " - Rapport Ljud url: ";				// - report sound url:
	var Text11 = " - Forum Ljud url: ";					// - forum sound url:
	var Text12 = " Forum url: ";						// forum url:
}	

	
/*
else if (lang == "it") { ;}
else if (lang == "es") { ;}
else if (lang == "no") { ;}
etc.
*/
	
// +++ Bitte ab hier nichts aendern +++
//--------------------------------

// bekannter Fehler bei "Seite zurueck" soll nicht behoben werden
	

var welt = document.location.host.split('.')[0];				// Welt ermitteln
var uv = (location.href.match(/[&,?]t=(\d+)/)) ? RegExp.$1 : "";	// testen ob UV
var cn = "ds_sound_"+welt+"_"+uv+"0"; 						// Cookienamen
var cwert;								
var awert;								
var interval;

var sound_on = GM_getValue("sound_on", true);
var zeit = GM_getValue("zeit", 10);
var sound1 = GM_test("sound1", "0");
var sound1_on = GM_getValue("sound1_on", true);
var sound1_vol = GM_getValue("sound1_vol", 100);
var sound2 = GM_test("sound2", "0");
var sound2_on = GM_getValue("sound2_on", true);
var sound2_vol = GM_getValue("sound2_vol", 100);
var loop = false;
var sound3 = GM_test("sound3", "0");
var sound3_on = GM_getValue("sound3_on", true);
var sound3_vol = GM_getValue("sound3_vol", 70);
var sound_nm = GM_test("sound_nm", "0");
var sound_nm_on = GM_getValue("sound_nm_on", true);
var sound_nm_vol = GM_getValue("sound_nm_vol", 50);
var sound_nr = GM_test("sound_nr", "0");
var sound_nr_on = GM_getValue("sound_nr_on", true);
var sound_nr_vol = GM_getValue("sound_nr_vol", 100);
var sound_nf = GM_test("sound_nf", "0");
var sound_nf_on = GM_getValue("sound_nf_on", true);
var sound_nf_vol = GM_getValue("sound_nf_vol", 30);
var dsphpbb = false;
try {var wert = document.body.innerHTML.match(/action=is_newer_post/)[0]; if (wert) dsphpbb = true;} 
catch(e) {dsphpbb = false;}
if (dsphpbb) { 
	var forum = GM_getValue("dsphpbb_adr"+welt+uv, "0");
	var pic1f = forum  + "images/ds/ds_newpost.gif";
}

	
	//graphic bell
var picsndon = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A' +
	'/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAq5JREFUOMuFlL2LXGUUxn/vx/2cndyZnUmc' +
	'3dm4JhiJH1gYAoIWil0QrEQMNitEFwuxUBIbBasE/wK1UFnEFDYJKSzEQrSQoIhIdCUfEiSbdXZ2' +
	'yO7O3Hvfe9/3tRBCINnxdM95zvlxeIoD/1Pe+6m+nGZ++fGZv89+8uFn3rtdZ8S9mt9+fSG4+MN3' +
	'Rw88sO9751x1YzA+cnzptT96c/16KuDkqXei9etX36eqXm+m6ezhhw9wc22DtbU1dJjc8N6f+uiL' +
	'r1bu3NF3iu2N9QdjKd7VacL9+/ezuHCQXrdPEsasD4bzk3x8DFjZNYNbw8GVJI4ItKLbnUUrTZqm' +
	'xHFCoCTpTLM7NcROd6+vrSWKIrx3zPf7hGGIUoqiLFFKzU0FFKbq3RwM2djcJJ9ss7fTIAr9f7oo' +
	'yCc72ekP3tsdoJROhBAIIdESwmKILLfRWiGlROugf/2va4tTANEx4QWBVigvoHAoIVFCY5FIgaiq' +
	'4ol7AlY+/1Qg/KtCCJRUhKHGhZDEAWmSEIQRwoK39fLLLz5/N2D10q/PCuyjQoAQkryoMSolbXTQ' +
	'QYAUgp0yBx0+18k6j92+GuCt5aXMVua8Vqoz02jQ2pPRmMlQUZPR2JBPcqSSREmKQsginzzz9JNH' +
	'v/nxp1+GwnvPG0vHV733DxljyJpN2nsyOu1ZsnYLW1u2t7YYbd1iOBphjME5R2Gqjd5c/6Cu61rV' +
	'3i/WxqCFxAFOSoyzFHmBcxbjHQ6IkhiHJ01iiqLcuXrlcqmVxEr4szBlO4nifiCVaMQx8737WFiY' +
	'RynF6uVrjMdj6qrCWrtpTPV7UZZPnT13wWipAoDHl0+8IkKlDyVRXCZx+lLazF6YlFXQzhplq9W6' +
	'9M9g8JsbjS4eOvzIz2++fdIASKnA2UpM+wnOVjhb7er/C3AAFHJlPpo3AAAAAElFTkSuQmCC';

var picsndoff = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A' +
	'/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAylJREFUOMt91F9oW1UcwPHvubm3TW7+3GRp' +
	'XbO0ab1tsy5mdplkaNGBij7ofFNQUFAmspdpn2QIE5WB2x5U8EWGMMbAP+CDg734UFBEwSnE6VZX' +
	'SW7TNG10XZomXdIkN/deH5Zgx5zn6ZzD7/c5v3N+cARARteTwA7ABn5MGYZNdziOgxCitySj62NA' +
	'DGimDOOS1N0fB74Fvgde6gV/+tE7J898cGKP49i9ZD8wB3wHzAD0gAvA+e789C8HD0ZOHX9zJuD3' +
	'Hb6xtvrqh++/m/yrtCIDpwG9i3wMILaVFgJ+B6JXQwHzp+SUMj4xQvnGBqVSiclG++8n57ODQA2Y' +
	'ThlGYXsFpAyjsuZxH3OARKWmpDxeJu6Ns2/vNJORKA9ll3Z241/vJd8GAJyLj5aykUEEMPVzBtkB' +
	'VVXZ+0cWf9tk3av+uu2qdwLhgUHlkh6j4XHjqWwwfHWBYHGVSG6RRp/CXCqppAyDuwLNtulbqmzw' +
	'za5BAMyvL+L+/CtwYG4kQsU2tZPvvX13wOWSh4QQlAZCLI0NQ7sN1Rq54QjLIQ1ZVqKF/OLo/wD9' +
	'MeEIFFn+tz2A2mpjISEJhGk29/8ncP7cWYFwnhJCEFuvEssXkQdCuDQ/kbUyyXIFYYFjdY688Nyh' +
	'O4GF+d8eFVj3qZ0OD2cLIASho4fxvfgsADOFIlKtCnLf42EtnLwNmD3yira1WfvErcg8s17Fa5qU' +
	'E1PkAgMsjo5Tj43Qb9k8sXIdzaO6zObWl2+89nIcQHIcB8e2T9Xr9cl7/swxtlZmy6uSe2Afyyur' +
	'FFdLXEvvx3K5GCpX0I0lhBCJarX2w7HZo36p0+m4Gqb5vLy5ySP5Io4QXE6naLgkmltNWq0mtYCP' +
	'XGI3AAfyy4x63OwIaVUjl21JLglLsp3ZxxaMdr9lYYxEuTkcZdfQTvYk4tw/nSQcDpONj7Ph8yJb' +
	'FjOZK5tT0eihLy5cbMuSSyGj60GgDzAWJ/S3PG71QdWvHWi0TCWkeVvBYHD+us93ZV3z14M362cC' +
	'5Yo/ffazp6XjJ64J2zLF5cndacANFFKGkd/eZ9syb732rYMA0oCn96H8A/0ENrlijrmBAAAAAElF' +
	'TkSuQmCC';

	//graphic test sound
var stest = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA' +
	'IGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANuSURBVHjaXNO9bxtl' +
	'AMfx3z3P2Wf77MTUzvklidOXNAMgRUqcCqQGMbEwgIqqspS5XVgQ4l9gQJUYKgESExKIDgy8DEBU' +
	'oENTSOIEpbYDJE5qR+f4bN+de8nd47t77mEoE9/t+wd8pM8+/QQAEAYh/DB4aczYbd/3rzDG0pZp' +
	'Gn/vNdca9cd3K3Pn28+/8CLCMIQQAmEYgHMOGQAkSYIA3g2D4KNCoRDLZDIYj8c46XZnCsXi0kxl' +
	'7p3Dg/33hRBPADgR53UhRAAAMqUUYcivy5R8vLq6CsYYnKcO8vkpLC4uolFvgHNeVBTli5gsY2Jy' +
	'MgJQOzps3eKcb8myLGeDILizvLSM2nYNRq+HicksEgkFqVQK1eoKEkkFD357AMs0cWl+nnDOq6qq' +
	'frO1ufEyYYy9deH8hZnd3V0YhoGZ2VmUyyWUyiWcy+Ww8cfvmL+8gIsXLyESApZlIa4oKBaLlVwu' +
	'f5tQQl6HBHSOOygWS8hMZJBOp5HNPgdZlqHrXTx6uI6VKytQVRW9kxPk83mEnKM8XX6NJJPJBdse' +
	'IRaLI5lKQokrSKkqkskUurqO6koVrueCUgpN0+A4DszhEJ12G5Zll2RCaYaxMSRCceYyREKCRGXE' +
	'4wp2ajV0dR17zSYWLi9A0zTsbNewubkBSihc1x2RwPd9QinGAcfY9xGPx5BOq8jlctA0DV9/9SX+' +
	'3N7CaGRDSSTAeQTbsjAa2TB6J2uy4zi6VijOJ2IUU+eySCoKLMtGRk3j+o0bgCThr2YDE5OT0HUd' +
	'nIfwXBeMeX3P9e7IpmU9LE9Pv0IpgWU/xcAaQZvKw/fHcBwJb167BqN3Fel0GsedDjzXg9E7MSMh' +
	'3qaEdIjv+/e6uh6VymV0e32ISECJybBtG8PhEO0nbXiei8Ggj+PjYwz6xg5j7FVCyH1JkkA459sH' +
	'rdY9SQhMl4oYe2cwLQu2baPfN2CaQ2haAb/+ch+Dfj80zeHNKIp2wyBAEAQgnuuCc/7eo/X1QyVG' +
	'UKnMIgo5GGNIqSrm5ubww/ffoVFvoNM5+lAI8TgIApydnsJxHNDq8hKiKHI45z/v7/+z6p6dFVRV' +
	'hUwp+oaBtZ9+RKNeR/vo8O7IHn1AKRV4JhCSJD3T+N83JIlcbR20bu01m2+EYVjxXM8/PXXqg77x' +
	'OWPet5RS/L9/BwDYGsraJJa3swAAAABJRU5ErkJggg==';


check_angriff();			// Angriff?
check_other();				// anderes Ereignis?
grafik();					// Soundsymbol anzeigen


// ---------------- Functions --------------------- //

	// testet auf Angriffe und merkt sich, welche bekannt sind
function check_angriff(){
	cwert = kuchenlesen(cn);
	try 	// auf Angriffssymbol pruefen
	{
		awert = document.body.innerHTML.match(/graphic\/unit\/att\.png[?*][0-9*]" alt=""> \((\d+)\)/)[1];
	} 
	catch(e) {awert = '';}
	if (awert)
	{
		var jetzt = zeit_holen();
		var barracks, train;
		try 	// auf Kaserne pruefen
		{
			barracks = document.location.href.match(/screen=barracks/)[0];
		} 
		catch(e) {barracks = '';}
		try 	// Rekrutierenansicht pruefen
		{
			train = document.location.href.match(/screen=train/)[0];
		} 
		catch(e) {train = '';}

		if (cwert != awert)
		{
			var a1wert = awert; var c1wert = cwert;
			if (awert == '') a1wert="0"; if (cwert == '') c1wert="0";
			if (parseInt(a1wert, 10) > parseInt(c1wert, 10))
			{
				attacksound();
				GM_setValue("adelay"+welt+uv, jetzt);
				GM_setValue("known_"+welt+uv, 0);
			}
			else 
			{
				if (sound3_on) { play_sound(sound3, sound3_vol);}
			}
			kuchensetzen(cn,awert);
		}
		else if (train || barracks) 
		{
			if (GM_getValue("known"+welt+uv, 0) == 0)
			{
				var adelay = GM_getValue("adelay"+welt+uv, 220255);
				if ((jetzt - adelay) > (60 * zeit)) 
				{
					attacksound();
					GM_setValue("adelay"+welt+uv, jetzt);
				}
			}
		}
		else { GM_setValue("known"+welt+uv, 1);}
	}
	else if (cwert)
	{
		kuchenloeschen(cn);
		if (sound3_on) { play_sound(sound3, sound3_vol);}

		GM_setValue("known"+welt+uv, 1);
	}

}



	// testet auf andere Ereignisse
function check_other() {
	check_new("igm", sound_nm, sound_nm_vol);		// IGM?
	check_new("report", sound_nr, sound_nr_vol);		// Bericht?
	check_new("forum", sound_nf, sound_nf_vol);		// Forum?
}



	// gibt's was neues ?
function check_new(name, soundfile, volume) {
	if (soundfile == "") return;
	var wert;
	var zeit1 = GM_getValue("alarm_"+name, 220255);
	var delay = GM_getValue("delay", 220255);
	var jetzt = zeit_holen();

	if ((jetzt - zeit1) > (60 * zeit))
	{
		if ((name == "igm") && sound_nm_on) 
		{
			try 	
			{ 
				wert = document.body.innerHTML.match(/screen=mail"><img src="\/graphic\/new_mail\.png/)[0];
			} 
			catch(e) {wert = '';}
			if (wert == '') 
				{try 	
				{ 
					wert = document.body.innerHTML.match(/screen=mail"><img src="graphic\/new_mail\.png/)[0];
				} 
				catch(e) {wert = '';}
			}
		}

		else if ((name == "report") && sound_nr_on) 
		{
			try 	
			{ 
				wert = document.body.innerHTML.match(/graphic\/new_report\.png/)[0];
			} 
			catch(e) {wert = '';}
		}

		else if ((name == "forum") && sound_nf_on && (dsphpbb == false)) 
		{
			try 	
			{ 
				wert = document.body.innerHTML.match(/graphic\/ally_forum\.png/)[0];
			} 
			catch(e) {wert = '';}
		}

		else if ((name == "forum") && sound_nf_on && (dsphpbb == true))
		{
			extforum(name, zeit, jetzt, soundfile, volume);
			wert = '';
		}
		if (wert)
		{
			if ((jetzt - delay) < 3) 	// falls innerhalb von 3 Sek schon ein Sound gespielt wurde
			{
				if (zeit > 2) {interval = window.setTimeout("location.reload()", (delay + 3 - jetzt) * 1000);}
			}
			else 
			{
				if (zeit > 2) {window.clearTimeout(interval);}
				GM_setValue("alarm_"+name, jetzt); 
				GM_setValue("delay", jetzt); 
				play_sound(soundfile, volume);
			}
		}
	}
}



	// neuer Eintrag im DSphpBB-Forum?
function extforum(name, zeit, jetzt, soundfile, volume){
	var a = document.getElementsByTagName("a");
	for(var i = 0; i < a.length-1; i++)
	{
		if (a[i].href == forum)
		{
			var img = a[i].firstChild;
			var pic2f = img.src;
			GM_xmlhttpRequest
			({
				method:'GET',
				url: pic2f,
				onload: function(responseDetails)
				{
					if(responseDetails.status == 200)
					{					
						var pic2 = responseDetails.responseText;
						var len2 = pic2.length;

						GM_xmlhttpRequest
						({
							method:'GET',
							url: pic1f,
							onload: function(responseDetails)
							{
								if(responseDetails.status == 200)
								{
									var pic1 = responseDetails.responseText;
									var len1 = pic1.length;
									if (len1 == len2) 
									{
										if (zeit > 2) {window.clearTimeout(interval);}
										GM_setValue("alarm_"+name, jetzt); 
										GM_setValue("delay", jetzt); 
										play_sound(soundfile, volume);
									}
								}
							}
						});
					}
				}
			});				
		}
	}
}


	// holt Zeitstempel
function zeit_holen() {
	var jetzt = new Date();
	return parseInt(jetzt.getTime() / 1000);
}


	// zeigt Optionen
function optionen(){
	var pos = document.getElementById("Glocke");
	var Optionen = document.createElement("table");
	Optionen.setAttribute("id","options");
	Optionen.setAttribute("class", "main");
	Optionen.setAttribute("style", "padding: 5px;");
	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	
	var th = document.createElement('th');
	th.setAttribute("style", "text-align: center");
	th.appendChild(document.createTextNode(Text1)); 		// Title: Sound Options
	var table = document.createElement("table");
	table.setAttribute("class","vis");
	table.appendChild(th);
// Sound on
	var row0 = document.createElement("tr");
	var td0 = document.createElement("td");
	var check0 = document.createElement("input");
	check0.setAttribute("type","checkbox");
	check0.setAttribute("name","sound_on");
	check0.checked = sound_on;
	check0.addEventListener("change",function(){GM_setValue("sound_on", this.checked); sound_on = GM_getValue("sound_on");},false);
	td0.appendChild(check0);
	var img0 = document.createElement("img");
	img0.setAttribute("width", "17");
	img0.setAttribute("style", "vertical-align: bottom");
	img0.src = picsndon;
	td0.appendChild(img0);
	td0.appendChild(document.createTextNode(Text2));		// Sound an/aus
	row0.appendChild(td0);
	table.appendChild(row0);
// repeat time
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row1 = document.createElement("tr");
	var td1 = document.createElement("td");
	var check1 = document.createElement("input");
	check1.setAttribute("type","text");
	check1.setAttribute("style", "text-align: center");
	check1.setAttribute("name", "zeitspanne");
 	check1.value = zeit;
	check1.setAttribute("size","2");
	check1.setAttribute("maxlength", "2");
	check1.setAttribute("method", "post");
	check1.setAttribute("enctype", "multipart/form-data");
	check1.addEventListener("change",function(){if (this.value < 1) {this.value = 10;} GM_setValue("zeit", parseInt(this.value, 10)); zeit = GM_getValue("zeit");},false);
	td1.appendChild(check1);
	td1.appendChild(document.createTextNode(Text3));		// repeat time
	row1.appendChild(td1);
	table.appendChild(row1);
// inc main account
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row5 = document.createElement("tr");
	var td5 = document.createElement("td");
	check5 = document.createElement("input");
	check5.setAttribute("type", "checkbox");
	check5.setAttribute("name", "sound1_on");
	check5.checked = sound1_on;
	check5.addEventListener("change",function(){GM_setValue("sound1_on", this.checked); sound1_on = GM_getValue("sound1_on");},false);
	td5.appendChild(check5);
	var img5 = document.createElement("img");
	img5.setAttribute("width", "17");
	img5.src = "./graphic/unit/att.png";
	td5.appendChild(img5);
	var check51 = document.createElement("input");
	check51.setAttribute("type","text");
	check51.setAttribute("style", "text-align: center");
	check51.setAttribute("name", "sound1_vol");
	check51.value = sound1_vol;
	check51.setAttribute("size", "2");
	check51.setAttribute("maxlength", "3");
	check51.setAttribute("method", "post");
	check51.setAttribute("enctype", "multipart/form-data");
	check51.addEventListener("change",function(){ sound1_vol = check_vol("sound1_vol", this.value);},false);
	td5.appendChild(document.createTextNode(Text4)); 		// volume
	td5.appendChild(check51);
	td5.appendChild(document.createTextNode("% "));
	var test5 = document.createElement("input");
	test5.setAttribute("type","image");
	test5.setAttribute("style", "vertical-align: middle");
	test5.setAttribute("src", stest);
	test5.setAttribute("title", "test");
	test5.addEventListener("click",function(){play_sound(sound1, sound1_vol)},true);
	td5.appendChild(test5);
	td5.appendChild(document.createTextNode(Text5));		// attack main account sound url
	row5.appendChild(td5);
	table.appendChild(row5);
	var row50 = document.createElement("tr");
	var td50 = document.createElement("td");
	var check50 = document.createElement("input");
	check50.setAttribute("type","text");
	check50.setAttribute("style", "text-align: left");
	check50.setAttribute("name", "sound1");
	check50.value = sound1;
	check50.setAttribute("size","80");
	check50.setAttribute("maxlength", "200");
	check50.setAttribute("method", "post");
	check50.setAttribute("enctype", "multipart/form-data");
	check50.addEventListener("change",function(){sound1 = GM_test("sound1", this.value);},false);
	td50.appendChild(check50);
	row50.appendChild(td50);
	table.appendChild(row50);
// inc hr account
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row6 = document.createElement("tr");
	var td6 = document.createElement("td");
	check6 = document.createElement("input");
	check6.setAttribute("type", "checkbox");
	check6.setAttribute("name", "sound2_on");
	check6.checked = sound2_on;
	check6.addEventListener("change",function(){GM_setValue("sound2_on", this.checked); sound2_on = GM_getValue("sound2_on");},false);
	td6.appendChild(check6);
	var img6 = document.createElement("img");
	img6.setAttribute("width", "17");
	img6.src = "./graphic/unit/att.png";
	td6.appendChild(img6);
	var check61 = document.createElement("input");
	check61.setAttribute("type","text");
	check61.setAttribute("style", "text-align: center");
	check61.setAttribute("name", "sound2_vol");
	check61.value = sound2_vol;
	check61.setAttribute("size", "2");
	check61.setAttribute("maxlength", "3");
	check61.setAttribute("method", "post");
	check61.setAttribute("enctype", "multipart/form-data");
	check61.addEventListener("change",function(){ sound2_vol = check_vol("sound2_vol", this.value);},false);
	td6.appendChild(document.createTextNode(Text4)); 		// volume
	td6.appendChild(check61);
	td6.appendChild(document.createTextNode("% "));
	var test6 = document.createElement("input");
	test6.setAttribute("type","image");
	test6.setAttribute("style", "vertical-align: middle");
	test6.setAttribute("src", stest);
	test6.setAttribute("title", "test");
	test6.addEventListener("click",function(){play_sound(sound2, sound2_vol)},true);
	td6.appendChild(test6);
	td6.appendChild(document.createTextNode(Text6));  		//attack HR-account sound url
	row6.appendChild(td6);
	table.appendChild(row6);
	row6.appendChild(td6);
	table.appendChild(row6);
	var row60 = document.createElement("tr");
	var td60 = document.createElement("td");
	var check60 = document.createElement("input");
	check60.setAttribute("type","text");
	check60.setAttribute("style", "text-align: left");
	check60.setAttribute("name", "sound2");
	check60.value = sound2;
	check60.setAttribute("size","80");
	check60.setAttribute("maxlength", "200");
	check60.setAttribute("method", "post");
	check60.setAttribute("enctype", "multipart/form-data");
	check60.addEventListener("change",function(){sound2 = GM_test("sound2", this.value);},false);
	td60.appendChild(check60);
	row60.appendChild(td60);
	table.appendChild(row60);
// loop incs sound
	var row8 = document.createElement("tr");
	var td8 = document.createElement("td");
	var check8 = document.createElement("input");
	check8.setAttribute("type","checkbox");
	check8.setAttribute("name","loop");
	check8.checked = GM_getValue("loop");
	check8.addEventListener("change",function(){GM_setValue("loop", this.checked); loop = GM_getValue("loop");},false);
	td8.appendChild(check8);
	var img8 = document.createElement("img");
	img8.src = "./graphic/unit/att.png";
	td8.appendChild(img8);
	td8.appendChild(document.createTextNode(Text7));	// loop attack sound?
	row8.appendChild(td8);
	table.appendChild(row8);
// inc arrived
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row7 = document.createElement("tr");
	var td7 = document.createElement("td");
	check7 = document.createElement("input");
	check7.setAttribute("type", "checkbox");
	check7.setAttribute("name", "sound3_on");
	check7.checked = sound3_on;
	check7.addEventListener("change",function(){GM_setValue("sound3_on", this.checked); sound3_on = GM_getValue("sound3_on");},false);
	td7.appendChild(check7);
	var img7 = document.createElement("img");
	img7.setAttribute("width", "17");
	img7.src = "./graphic/command/cancel.png";
	td7.appendChild(img7);
	var check71 = document.createElement("input");
	check71.setAttribute("type","text");
	check71.setAttribute("style", "text-align: center");
	check71.setAttribute("name", "sound3_vol");
	check71.value = sound3_vol;
	check71.setAttribute("size", "2");
	check71.setAttribute("maxlength", "3");
	check71.setAttribute("method", "post");
	check71.setAttribute("enctype", "multipart/form-data");
	check71.addEventListener("change",function(){ sound3_vol = check_vol("sound3_vol", this.value);},false);
	td7.appendChild(document.createTextNode(Text4)); 		// volume
	td7.appendChild(check71);
	td7.appendChild(document.createTextNode("% "));
	var test7 = document.createElement("input");
	test7.setAttribute("type","image");
	test7.setAttribute("style", "vertical-align: middle");
	test7.setAttribute("src", stest);
	test7.setAttribute("title", "test");
	test7.addEventListener("click",function(){play_sound(sound3, sound3_vol)},true);
	td7.appendChild(test7);
	td7.appendChild(document.createTextNode(Text8));		// attack end sound url
	row7.appendChild(td7);
	table.appendChild(row7);
	var row70 = document.createElement("tr");
	var td70 = document.createElement("td");
	var check70 = document.createElement("input");
	check70.setAttribute("type","text");
	check70.setAttribute("style", "text-align: left");
	check70.setAttribute("name", "sound3");
	check70.value = sound3;
	check70.setAttribute("size","80");
	check70.setAttribute("maxlength", "200");
	check70.setAttribute("method", "post");
	check70.setAttribute("enctype", "multipart/form-data");
	check70.addEventListener("change",function(){sound3 = GM_test("sound3", this.value);},false);
	td70.appendChild(check70);
	row70.appendChild(td70);
	table.appendChild(row70);
// igm
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row4 = document.createElement("tr");
	var td4 = document.createElement("td");
	check4 = document.createElement("input");
	check4.setAttribute("type", "checkbox");
	check4.setAttribute("name", "sound_nm_on");
	check4.checked = sound_nm_on;
	check4.addEventListener("change",function(){GM_setValue("sound_nm_on", this.checked); sound_nm_on = GM_getValue("sound_nm_on");},false);
	td4.appendChild(check4);
	var img4 = document.createElement("img");
	img4.setAttribute("width", "17");
	img4.src = "./graphic/new_mail.png";
	td4.appendChild(img4);
	var check41 = document.createElement("input");
	check41.setAttribute("type","text");
	check41.setAttribute("style", "text-align: center");
	check41.setAttribute("name", "sound_nm_vol");
	check41.value = sound_nm_vol;
	check41.setAttribute("size", "2");
	check41.setAttribute("maxlength", "3");
	check41.setAttribute("method", "post");
	check41.setAttribute("enctype", "multipart/form-data");
	check41.addEventListener("change",function(){ sound_nm_vol = check_vol("sound_nm_vol", this.value);},false);
	td4.appendChild(document.createTextNode(Text4)); 		//volume
	td4.appendChild(check41);
	td4.appendChild(document.createTextNode("% "));
	var test4 = document.createElement("input");
	test4.setAttribute("type","image");
	test4.setAttribute("style", "vertical-align: middle");
	test4.setAttribute("src", stest);
	test4.setAttribute("title", "test");
	test4.addEventListener("click",function(){play_sound(sound_nm, sound_nm_vol)},true);
	td4.appendChild(test4);
	td4.appendChild(document.createTextNode(Text9));		// message sound url
	row4.appendChild(td4);
	table.appendChild(row4);
	var row40 = document.createElement("tr");
	var td40 = document.createElement("td");
	var check40 = document.createElement("input");
	check40.setAttribute("type","text");
	check40.setAttribute("style", "text-align: left");
	check40.setAttribute("name", "sound_nm");
	check40.value = sound_nm;
	check40.setAttribute("size","80");
	check40.setAttribute("maxlength", "200");
	check40.setAttribute("method", "post");
	check40.setAttribute("enctype", "multipart/form-data");
	check40.addEventListener("change",function(){sound_nm = GM_test("sound_nm", this.value);},false);
	td40.appendChild(check40);
	row40.appendChild(td40);
	table.appendChild(row40);
// report
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row3 = document.createElement("tr");
	var td3 = document.createElement("td");
	check3 = document.createElement("input");
	check3.setAttribute("type", "checkbox");
	check3.setAttribute("name", "sound_nr_on");
	check3.checked = sound_nr_on;
	check3.addEventListener("change",function(){GM_setValue("sound_nr_on", this.checked); sound_nr_on = GM_getValue("sound_nr_on");},false);
	td3.appendChild(check3);
	var img3 = document.createElement("img");
	img3.setAttribute("width", "17");
	img3.src = "./graphic/new_report.png";
	td3.appendChild(img3);
	var check31 = document.createElement("input");
	check31.setAttribute("type","text");
	check31.setAttribute("style", "text-align: center");
	check31.setAttribute("name", "sound_nr_vol");
	check31.value = sound_nr_vol;
	check31.setAttribute("size", "2");
	check31.setAttribute("maxlength", "3");
	check31.setAttribute("method", "post");
	check31.setAttribute("enctype", "multipart/form-data");
	check31.addEventListener("change",function(){ sound_nr_vol = check_vol("sound_nr_vol", this.value);},false);
	td3.appendChild(document.createTextNode(Text4)); 		// volume
	td3.appendChild(check31);
	td3.appendChild(document.createTextNode("% "));
	var test3 = document.createElement("input");
	test3.setAttribute("type","image");
	test3.setAttribute("style", "vertical-align: middle");
	test3.setAttribute("src", stest);
	test3.setAttribute("title", "test");
	test3.addEventListener("click",function(){play_sound(sound_nr, sound_nr_vol)},true);
	td3.appendChild(test3);
	td3.appendChild(document.createTextNode(Text10));		// report sound url
	row3.appendChild(td3);
	table.appendChild(row3);
	var row30 = document.createElement("tr");
	var td30 = document.createElement("td");
	var check30 = document.createElement("input");
	check30.setAttribute("type","text");
	check30.setAttribute("style", "text-align: left");
	check30.setAttribute("name", "sound_nr");
	check30.value = sound_nr;
	check30.setAttribute("size","80");
	check30.setAttribute("maxlength", "200");
	check30.setAttribute("method", "post");
	check30.setAttribute("enctype", "multipart/form-data");
	check30.addEventListener("change",function(){sound_nr = GM_test("sound_nr", this.value);},false);
	td30.appendChild(check30);
	row30.appendChild(td30);
	table.appendChild(row30);
// forum
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row2 = document.createElement("tr");
	var td2 = document.createElement("td");
	var check2 = document.createElement("input");
	check2.setAttribute("type", "checkbox");
	check2.setAttribute("name", "sound_nf_on");
	check2.checked = sound_nf_on;
	check2.addEventListener("change",function(){GM_setValue("sound_nf_on", this.checked); sound_nf_on = GM_getValue("sound_nf_on");},false);
	td2.appendChild(check2);
	var img2 = document.createElement("img");
	img2.setAttribute("width", "16");
	img2.src = "./graphic/ally_forum.png";
	td2.appendChild(img2);
	var check21 = document.createElement("input");
	check21.setAttribute("type","text");
	check21.setAttribute("style", "text-align: center");
	check21.setAttribute("name", "sound_nf_vol");
	check21.value = sound_nf_vol;
	check21.setAttribute("size", "2");
	check21.setAttribute("maxlength", "3");
	check21.setAttribute("method", "post");
	check21.setAttribute("enctype", "multipart/form-data");
	check21.addEventListener("change",function(){ sound_nf_vol = check_vol("sound_nf_vol", this.value);},false);
	td2.appendChild(document.createTextNode(Text4)); 		// volume
	td2.appendChild(check21);
	td2.appendChild(document.createTextNode("% "));
	var test2 = document.createElement("input");
	test2.setAttribute("type","image");
	test2.setAttribute("style", "vertical-align: middle");
	test2.setAttribute("src", stest);
	test2.setAttribute("title", "test");
	test2.addEventListener("click",function(){play_sound(sound_nf, sound_nf_vol)},true);
	td2.appendChild(test2);
	td2.appendChild(document.createTextNode(Text11));		// forum sound url
	row2.appendChild(td2);
	table.appendChild(row2);
	var row20 = document.createElement("tr");
	var td20 = document.createElement("td");
	var check20 = document.createElement("input");
	check20.setAttribute("type","text");
	check20.setAttribute("style", "text-align: left");
	check20.setAttribute("name", "sound_nf");
	check20.value = sound_nf;
	check20.setAttribute("size","80");
	check20.setAttribute("maxlength", "200");
	check20.setAttribute("method", "post");
	check20.setAttribute("enctype", "multipart/form-data");
	check20.addEventListener("change",function(){sound_nf = GM_test("sound_nf", this.value);},false);
	td20.appendChild(check20);
	row20.appendChild(td20);
	table.appendChild(row20);
//forum DSphpBB
	if (dsphpbb)
	{
		var row10 = document.createElement("tr");
		var td10 = document.createElement("td");
		var check10 = document.createElement("input");
		check10.setAttribute("type","text");
		check10.setAttribute("style", "text-align: left");
		check10.setAttribute("name", "forum");
 		check10.value = forum;
		check10.setAttribute("size","56");
		check10.setAttribute("maxlength", "200");
		check10.setAttribute("method", "post");
		check10.setAttribute("enctype", "multipart/form-data");
		check10.addEventListener("change",function(){forum = GM_test("dsphpbb_adr"+welt+uv, this.value);},false);
		td10.appendChild(document.createTextNode(Text12));	// forum url
		td10.appendChild(check10);
		var img10a = document.createElement("img");
		img10a.setAttribute("width", "17");
		img10a.src = forum + "images/ds/ds_nonewpost.gif";
		var img10b = document.createElement("img");
		img10b.setAttribute("width", "17");
		img10b.src = forum + "images/ds/ds_newpost.gif";

		td10.appendChild(document.createTextNode(" "));
		td10.appendChild(img10a);
		td10.appendChild(document.createTextNode(" "));
		td10.appendChild(img10b);
		row10.appendChild(td10);
		table.appendChild(row10);
	}
	
// Sprache einstellen
	var rowx = document.createElement("tr");
	var tdx = document.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row12 = document.createElement("tr");
	var td12 = document.createElement("td");
	var check12 = document.createElement("input");
	check12.setAttribute("type", "radio");
	check12.setAttribute("name", "lang");
	check12.setAttribute("value", "en");
	td12.appendChild(check12);
	td12.appendChild(document.createTextNode("english "));
	check12.addEventListener("change",function(){check_lang(this.value);},false);
	var check13 = document.createElement("input");
	check13.setAttribute("type", "radio");
	check13.setAttribute("name", "lang");
	check13.setAttribute("value", "de");
	check13.addEventListener("change",function(){check_lang(this.value);},false);
	td12.appendChild(check13);
	td12.appendChild(document.createTextNode("deutsch "));
	var check14 = document.createElement("input");
	check14.setAttribute("type", "radio");
	check14.setAttribute("name", "lang");
	check14.setAttribute("value", "sv");
	check14.addEventListener("change",function(){check_lang(this.value);},false);
	if (lang == "en") check12.checked = true;
	if (lang == "de") check13.checked = true;
	if (lang == "sv") check14.checked = true;

	td12.appendChild(check14);
	td12.appendChild(document.createTextNode("Svenska"));
	row12.appendChild(td12);
	table.appendChild(row12);
	
// submit
	var row9 = document.createElement("p");
	row9.setAttribute("align", "right");
	var check9 = document.createElement("input");
	check9.setAttribute("type","submit");
	check9.addEventListener("click",function() {location.reload();},false);
	row9.appendChild(check9);
	table.appendChild(row9);
	td.appendChild(table);
	tr.appendChild(td);
	tbody.appendChild(tr);
	Optionen.appendChild(tbody);
	pos.replaceChild(Optionen, pos.firstChild);
}


function check_lang(wert){
	switch (wert) 
	{
		case "en":
			lang = "en";
			break;
		case "de":
			lang = "de";
			break;
		case "sv":
			lang = "sv";
			break;
		case "it":
			lang = "it";
			break;
		case "es":
			lang = "es";
			break;
		case "no":
			lang = "no";
			break;
		default:
			return "en"; 
			break;
	}
	GM_setValue("ds_lang", lang); 
	lang = GM_getValue("ds_lang");
	return lang;
}


function check_vol(name, wert){
	wert = parseInt(wert, 10);
	if (isNaN(wert)) { wert = 80;}
	if (wert <= 0) { wert = 100;}
	if (wert <= 20) { wert = 20;}
	if (wert >= 100) { wert = 100;}
	GM_setValue(name, wert); 
	return wert;
}



function GM_test(name, url){
	var test;
	var GM = GM_getValue(name); 
	if (url == "0") 
	{
		if (GM != "") 
		{ 
			GM = http(name, GM); 
			if (GM) { return GM;}
		}
		url = "";
	}
	else
	{
		if (url != "") 
		{ 
			test = http(name, url); 
			if (test) 
			{
				GM_setValue(name, test); 
				return test;
			}
		}
		url = "";
	}

	if (url == "")
	{
		switch (name) 
		{
			case "dsphpbb_adr"+welt+uv:
				url = "";
				break;
			case "sound_nf":
				url = "http://www.inpoc.se/static/sound/MuusmsNy_PRE.mp3";
				break;
			case "sound_nr":
				url = "http://www.pacdv.com/sounds/interface_sound_effects/sound107.wav";
				break;
			case "sound_nm":
				url = "http://www.inpoc.se/static/sound/030__002__SMS__SMS_-_GANGSTA_-_YEAH_HERES_A_MESSAGE__001__30__022.mp3";
				break;
			case "sound1":
				url = "http://www.policeinterceptor.com/sounds/newgq.wav";
				break;
			case "sound2":
				url = "http://www.acoustica.com/sounds/user_requests/policesiren2.wav";
				break;
			case "sound3":
				url = "http://www.mediacollege.com/downloads/sound-effects/star-trek/tos/tos-intercom.wav";
				break;
			default:
				return ""; 
				break;
		}
		GM_setValue(name, url);
		return url;
	}
	else 
	{ 
		test = http(name, url); 
		if (test) 
		{
			GM_setValue(name, test);
			return test;
		}
	}
}



function http(name, url){
	var test
	try 	
	{
		test = url.match(/http\:\/\//)[0];
	} 
	catch(e) {test = '';}

	if (test) 
	{
		if (name == "dsphpbb_adr"+welt+uv) {url = test_slash(url);} 
		return url;
	}
	else
	{
		if (url && url.length > 14) 
		{
		if (name == "dsphpbb_adr"+welt+uv) {url = test_slash(url);} 
			url = "http://"+url;
			return url;
		}
	}
	return false;
}



function test_slash(url){
	if  (url) 
	{
		if (url.substr(1,url.length) != "/"){url = url + "/"; return url;}
	}
}


	// bindet Grafik Glocke ein
function grafik() {
	var test = document.getElementsByClassName("navi-border"); 	// DS-Version >= 5.0?

	var glocke = document.createElement('td');
	glocke.setAttribute("id", "Glocke");
	glocke.setAttribute("align", "center");
	var table = document.createElement('table');
	table.setAttribute("class", "box");
	table.setAttribute("cellspacing", "0");
	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.setAttribute("width", "16");
	td.setAttribute("height","20");
	var a = document.createElement('a');
	a.setAttribute("id", "Alarm");
	a.setAttribute("href", "javascript: ");
	a.addEventListener("click", function(){if (test[0]) {rtable.setAttribute("class", "content-border");} optionen();}, false);

	var img = document.createElement('img');
	img.setAttribute("title", "sound options");
	if (sound_on)
	{
		img.setAttribute("alt", "on");
		img.src = picsndon;
	}
	else
	{
		img.setAttribute("alt", "off");
		img.src = picsndoff;
	}	
	a.appendChild(img);
	td.appendChild(a);
	tr.appendChild(td);
	tbody.appendChild(tr);
	table.appendChild(tbody);
	glocke.appendChild(table);

	if (test[0])		// is DS-Version >= 5.0?
	{
		var glocke1 = document.createElement('td');
		glocke1.setAttribute("align", "center");
		var rtable = document.createElement('table');
		rtable.setAttribute("style", "border-collapse: collapse;");
		rtable.setAttribute("class", "navi-border");
		var rtbody = document.createElement('tbody');
		var rtr = document.createElement('tr');
		rtr.appendChild(glocke);
		rtbody.appendChild(rtr);
		rtable.appendChild(rtbody);
		glocke1.appendChild(rtable);
		var line = document.getElementsByTagName("hr"); 
		var pos1 = line[0].nextSibling.nextSibling.firstChild.nextSibling.firstChild;
		var pos2 = pos1.firstChild.nextSibling.nextSibling.nextSibling;
		pos1.insertBefore(glocke1, pos2);
	}
	else 
	{
		var pos = document.getElementsByClassName("box");
		var pos1 = pos[0].parentNode.parentNode;	
		var pos2 = pos1.firstChild;
		pos1.insertBefore(glocke, pos2);
	}
}


function attacksound() {
	loop = GM_getValue("loop", false);
	if (uv) 
	{
		if (sound2_on) { play_sound(sound2, sound2_vol);}
	} 
	else 
	{
		if (sound1_on) { play_sound(sound1, sound1_vol);}
	} 
	loop = false;
}



	// spielt Sound 
function play_sound(soundfile, volume) {
	if (soundfile == "") return;
	volume = parseInt(volume, 10);
	if (sound_on)
	{
		var arr = soundfile.split('.');
		var typ = arr[arr.length-1];
		var buffer = document.createElement('embed');
		buffer.setAttribute("title", "Sound");
		buffer.setAttribute("src", soundfile);
		buffer.setAttribute("autostart", "true");
		buffer.setAttribute("autoplay", "true");
		buffer.setAttribute("cache", "true");
		buffer.setAttribute("hidden", "true");
		buffer.setAttribute("width", "0");
		buffer.setAttribute("height", "0");
		buffer.setAttribute("loop", loop);
		buffer.setAttribute("volume", volume);
		if (typ == 'wav') buffer.setAttribute("type", 'audio/x-wav');
		else if (typ == 'midi')	buffer.setAttribute("type", 'audio/mid');
		else if (typ == 'mp3')buffer.setAttribute("type", 'audio/mpeg');
		else if (typ == 'wma')buffer.setAttribute("type", 'audio/x-ms-wma');
		document.body.appendChild(buffer);
	}
}


	// sucht Classnames
function getElementsByClassName(classname) {
	var arr = [];
	var reg = new RegExp('\\b' + classname + '\\b');
	var knoten = document.getElementsByTagName("body")[0];
	var elemente = knoten.getElementsByTagName("*");
	var l = elemente.length;
	for(var i=0; i<l; i++)
	{
		if (reg.test(elemente[i].className)) arr.push(elemente[i]);
	}
	return arr;
}



	// setzt Cookie
function kuchensetzen(n,w) {
	var cDat = new Date();
	cDat = new Date(cDat.getTime() +1000*60*60*24*5);  // 5 Tage g�ltig reicht
	document.cookie = n+'='+w+'; expires='+cDat.toGMTString()+';';
}



	// liest Cookie
function kuchenlesen(n) {
	var a = document.cookie;
	var cookiewert
	var i
	res = '';
	while(a != '')
	{
 		while(a.substr(0,1) == ' '){a = a.substr(1,a.length);}
 		cookiename = a.substring(0,a.indexOf('='));
		if(a.indexOf(';') != -1)
		{cookiewert = a.substring(a.indexOf('=')+1,a.indexOf(';'));}
		else{cookiewert = a.substr(a.indexOf('=')+1,a.length);}
		if(n == cookiename){res = cookiewert;}
		i = a.indexOf(';')+1;
		if(i == 0){i = a.length}
		a = a.substring(i,a.length);
	}
	return(res)
}



	// l�scht Cookie
function kuchenloeschen(n) {
	document.cookie = n+'=; expires=Thu, 01-Jan-70 22:02:55 GMT;';
} 


}) ()


