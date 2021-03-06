// ==UserScript==
// @name           Spacewars -- function based
// @description    autoplayer for the Spacewars game
// @namespace      facebook
// @version        2.0.0
// @include        http://apps.facebook.com/spacewarsgame*
// @author         colin1497
// @contributor	   IEF, blannie
// ==/UserScript==

var settingsOpen = 0;
var logOpen      = 0;
var delay = 3000;
var gold2Update = 100000;
var flag = 0; //this flag is used for execution detection.  Setting the flag will prevent further autoplay options from happening during this cycle to ensure the current action completes.
var petvisit = GM_getValue('petvisit', 0); //this will set a petvisit flag every *petvisitfrequency* loads
var petvisitfrequency = 100; //this sets the number of reloads between pet visits, in the future this could be added to the config
var maxstrength = 40 //this should be a parsed value
var maxenergy = 150 //this should be a parsed value
var killhealth = 30 // value below which to heal immediately so you don't get killed


var SCRIPT = {
	url: 'http://userscripts.org/scripts/source/52576.user.js',
	version: '2.0.0',
	name: 'spacewarsgame',
	appID: 'app36842288331',
	presentationurl: 'http://userscripts.org/scripts/show/52576'
};



var image = 'data:image/gif;base64,R0lGODlhEAAQAOZ/APV+AfaRA/748/qdVfvKpvl0CvV6APunC/54AvZ8JP/7+P/t3f/9/P/49PijB/2rDv/59P3Dk/7z6v/ewP/HaPeBAvx7DP/u4P62OPzBVv+xSfidBv3o2f/Kc/eQRf/z6fyiM//cr/7q2fSPAfuwKvzQsP/FYvuLBf2uDv+xa//69fuLDv++T//9+/V1Fv+4cP25QvR2APmwJv/VkPSDAPWgAvyqDf/Kmv67RvecBf/lzf/w4v/KcfRpAf/37/iPQf/MlPaEBv/Vp//dpP/gxPipB/q0gP/YtfvJo/eiDvzLpf/isf/Nof/XsvzUtv/IbP+mRP2pEf6sE/+vF/iaVfyfUv+TJf+vGPqoGP/17P717v/VmPusbvmLNPytbv2safaCLf+9dfuZJPhvAf+jU/+mV//DXP/RhvWUAv/Xk/WBAP/38vehBvmmCf2pDvV5H//Lnf/8+fy6RP2XP//+/fafBP7AV//lz/+ybf+/U/++Uf7CWPx9CvRpBP/27v///yH5BAEAAH8ALAAAAAAQABAAAAezgH+Cg39ZO4SIiE0piY0QeAgijYgTYSBck4MKEVsZBReIDAo+C3dHQkMUYnM3RAt+cUxlZC9AIUtpT3saUFZ8BV4qVSswHTNnPCZmdnIyQT9afwwDFVgYLHl6OCRJAD8Ngy0DYwdSU1dRGz0e4IQfFm4PNg8HOX0ciToIKG1sDg51YjhJBOdEETQGDASoQcNIoi8B1CQgUAIMgBFUEnVxEUGAIAVI3iSgQ0iBEgmJ1hBoFwgAOw==';

var missions = new Array(
// Name , Energy , Tab , Item on tab, form ID

["Rescue Stranded Miners",1,1,0,1], //1
["Repel Space Pirates",3,1,1,2], //2
["Smuggle Illicit Goods",5,1,2,3], //3
["Clear asteroid field",6,1,3,4], //4
["Destroy Alien Nest",7,1,4,5], //5
["Excavate remnants of alien civilization",1,1,5,11], //11
["Mine comet tail",2,1,6,12], //12

["Free Outer Colony Prisoners",10,2,0,6], // 6
["Sell Ammunition to Rebels",15,2,1,7], // 7
["Prevent an ambassador's assassination",5,2,2,13], //13
["Prevent android uprising ",6,2,3,14], //14

["Intercept Interstellar Gold Shipment",18,3,0,8], //8
["Investigate anomalous planet",8,3,1,15], //15
["Assassinate Galactic Dictator",25,3,2,9], // 9
["Pacify warring factions",13,3,3,16], //16

["Win an interstellar race",19,4,0,17], //17
["Invade Planet",22,4,1,10], //10 not yet showing for me
["Infiltrate Imperial research networks",25,4,2,18], //18 not yet showing for me
["Fly through wormhole",25,4,3,19], //19 not yet showing for me
["Thwart Imperial Coup",40,4,4,20]  //20 not yet showing for me
);

var missionTabs = new Array(
["Space Cadet (Levels 1-4)"],
["Rookie (Levels 5-8)"],
["Officer (Levels 9-14)"],
["Commander (Levels 15-25)"]
);

var curTabMastery = new Array();
var fightUsers = new Array();

var XMLHttpFactories = [
    function () {return new XMLHttpRequest()},
    function () {return new ActiveXObject("Msxml2.XMLHTTP")},
    function () {return new ActiveXObject("Msxml3.XMLHTTP")},
    function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

document.getElementsByXPath = function(sValue){ var aResult = new Array();var a = this.evaluate(sValue, ((arguments.lenth > 1) ? arguments[1] : this), null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);for ( var i = 0 ; i < a.snapshotLength ; i++ ){aResult.push(a.snapshotItem(i));}return aResult;};

//Get absolute banner position
bannerTop =   getPositionTop(document.getElementById(SCRIPT.appID+'_banner_row')); //140
bannerLeft =  getPositionLeft(document.getElementById(SCRIPT.appID+'_banner_row')); // 300
var pauseButton = document.createElement("div");

// ---------------------------- Get parsed global variables ------------------//

var alliance =  parseInt(document.body.innerHTML.split('me crew (')[1]);
var gold = document.getElementById(SCRIPT.appID+'_stats_table').innerHTML.split('$')[1];
	gold = parseInt(gold.replace(/,/g, ''));
var health = parseInt(document.getElementById( SCRIPT.appID+'_current_health').innerHTML);
var energy = parseInt(document.getElementById( SCRIPT.appID+'_current_energy').innerHTML);
var strength = parseInt(document.getElementById( SCRIPT.appID+'_current_stamina').innerHTML);


// ---------------------------- menu global variables ------------------------------------//
// ---------------------------- builds menu and retrieves values from GM------------------//

var settingsButton = document.createElement("div");
	settingsButton.innerHTML = "open settings";
	//settingsButton.setAttribute("style", "position: absolute; left: 5px; top: 3px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer;");
	settingsButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+10)+"px; top: "+(bannerTop+25)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer; color: green;");
	settingsButton.addEventListener('click', toggleSettings, false);
	document.body.appendChild(settingsButton);

var viewLogButton = document.createElement("div");
	viewLogButton.innerHTML = "View Log";
	viewLogButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+575)+"px; top: "+(bannerTop+25)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer;color: green;");
	viewLogButton.addEventListener('click', toggleLogBox, false);
	document.body.appendChild(viewLogButton);

var clrLogButton = document.createElement("div");
	clrLogButton.innerHTML = "Clear Log";
	clrLogButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+575)+"px; top: "+(bannerTop+43)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer;color: green;");
	clrLogButton.addEventListener('click', clearLog, false);
	document.body.appendChild(clrLogButton);

var settingsBox = document.createElement("div");
	settingsBox.setAttribute("style", "position: absolute; left: "+bannerLeft+"px; top: "+(bannerTop+43)+"px; width: 560px; height: 400px; background-color: #01011B; font-family: tahoma; font-size: 10pt; text-align: left; padding: 5px; border: 1px dotted; visibility: hidden; z-index: 100;");
	document.body.appendChild(settingsBox);

var logBox = document.createElement("div");
	logBox.innerHTML = GM_getValue('itemLog', 'log empty');
	logBox.setAttribute("style", "position: absolute; overflow: scroll; left: "+bannerLeft+"px; top: "+(bannerTop+28)+"px; width: 600px; height: 400px; background-color: #01011B;color:white; font-family: tahoma; font-size: 8pt; text-align: left; padding: 5px; border: 1px dotted; visibility: hidden; z-index: 999999;");
	document.body.appendChild(logBox);

var versionBox = document.createElement("div");
	versionBox.innerHTML  = "<img src='http://www.zynga.com/images/games/gameSmall_pirates.jpg'/><strong> "+SCRIPT.version+" </strong>";
	versionBox.setAttribute("style", "position: absolute; color: #FFFFFF;");
	settingsBox.appendChild(versionBox);

var autoClick = document.createElement("div");
	autoClick.innerHTML  = "<input type='checkbox' id='autoClick' value='checked' "+GM_getValue('autoClick', '')+">enable auto-refresh";
	autoClick.setAttribute("style", "position: absolute; top: 100px; color: #FFFFFF;");
	settingsBox.appendChild(autoClick);

var refreshTimes = document.createElement("div");
	refreshTimes.innerHTML  = "refresh every <input type='text' style='border: none; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('r1', '30')+"' id='r1' size='2'>";
	refreshTimes.innerHTML += " to <input type='text' style='border: none; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('r2', '110')+"'id='r2' size='2'> seconds";
	refreshTimes.setAttribute("style", "position: absolute; top: 125px;color: #FFFFFF;");
	settingsBox.appendChild(refreshTimes);

var autoalliance = document.createElement("div");
	autoalliance.innerHTML  = "<input type='checkbox' id='autoalliance' value='checked' "+GM_getValue('autoalliance', '')+">enable auto-alliance update";
	autoalliance.setAttribute("style", "position: absolute; top: 150px;color: #FFFFFF;");
	settingsBox.appendChild(autoalliance);

var autoMission = document.createElement("div");
	autoMission.innerHTML  = "<input type='checkbox' id='autoMission' value='checked' "+GM_getValue('autoMission', '')+">enable auto-Mission";
	autoMission.setAttribute("style", "position: absolute; top: 175px;color: #FFFFFF;");
	settingsBox.appendChild(autoMission);

var missionMastery = document.createElement("div");
	missionMastery.innerHTML  = "<input type='checkbox' id='missionMastery' value='checked' "+GM_getValue('missionMastery', '')+">Tier Mastery";
	missionMastery.setAttribute("style", "position: absolute; left:160px; top: 175px;color: #FFFFFF;");
	settingsBox.appendChild(missionMastery);
 
 
var selectMission = document.createElement("select");
	for each (var mission in missions )
	{
	if (mission[3]==0)
		{
			//Tab header creation
			var choiceTab = document.createElement('optgroup');
			tabtocreate = mission[2];
			choiceTab.label = missionTabs[tabtocreate-1];
			selectMission.appendChild(choiceTab);
		}
	var choice = document.createElement('option');
	choice.value = mission[0];
	choice.appendChild(document.createTextNode(mission[0]));
	selectMission.appendChild(choice);
	}
	selectMission.selectedIndex = GM_getValue('selectMission', 1)
	selectMission.setAttribute("style", "position: absolute; top: 200px;");
	settingsBox.appendChild(selectMission);

var autoBank = document.createElement("div");
	autoBank.innerHTML  = "<input type='checkbox' id='autoBank' value='checked' "+GM_getValue('autoBank', '')+">enable auto-Bank";
	autoBank.setAttribute("style", "position: absolute; top: 235px;color: #FFFFFF;");
	settingsBox.appendChild(autoBank);

var bankConfig = document.createElement("div");
	bankConfig.innerHTML = "Minimum: <input type='text' style='border: none; width: 75px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('bankConfig', '100000')+"' id='bankConfig' size='5'>";
	bankConfig.setAttribute("style", "position: absolute; top: 260px;left: 5px;color: #FFFFFF;");
	settingsBox.appendChild(bankConfig);

var bankKeep = document.createElement("div");
	bankKeep.innerHTML = "Keep: <input type='text' style='border: none; width: 75px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('bankKeep', '50000')+"' id='bankKeep' size='5'>";
	bankKeep.setAttribute("style", "position: absolute; top: 260px;left: 150px;color: #FFFFFF;");
	settingsBox.appendChild(bankKeep);

var autoHeal = document.createElement("div");
	autoHeal.innerHTML  = "<input type='checkbox' id='autoHeal' value='checked' "+GM_getValue('autoHeal', 'checked')+">enable auto-Heal";
	autoHeal.setAttribute("style", "position: absolute; top:285px;color: #FFFFFF;");
	settingsBox.appendChild(autoHeal);

var healthLevel = document.createElement("div");
	healthLevel.innerHTML = "min. health: <input type='text' style='border: none; width: 30px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('healthLevel', '50')+"' id='healthLevel' size='1'>";
	healthLevel.setAttribute("style", "position: absolute; top: 310px;color: #FFFFFF;");
	settingsBox.appendChild(healthLevel);

var healthRage = document.createElement("div");
	healthRage.innerHTML = "max. Strength: <input type='text' style='border: none; width: 30px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('healthRage', '5')+"' id='healthRage' size='1'>";
	healthRage.setAttribute("style", "position: absolute; left: 120px;;top: 310px;color: #FFFFFF;");
	settingsBox.appendChild(healthRage);

var updateButton = document.createElement("div");
	updateButton.innerHTML  = "<button>check for updates</button>";
	updateButton.addEventListener('click', updateScript, false);
	updateButton.setAttribute("style", "position: absolute; top: 335px;");
	settingsBox.appendChild(updateButton);

var autoFight = document.createElement("div");
	autoFight.innerHTML  = "<input type='checkbox' id='autoFight' value='checked' "+GM_getValue('autoFight', '')+">enable auto-Fight above";
	autoFight.setAttribute("style", "position: absolute; left: 340px;top: 5px;color: #FFFFFF;");
	settingsBox.appendChild(autoFight);
        
var fightMinimum = document.createElement("div");
	fightMinimum.innerHTML  = "<input type='text' style='border: none; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('fightMinimum', '0')+"' id='fightMinimum' size='2'>";
	fightMinimum.setAttribute("style", "position: absolute; left:505px; top: 8px;color: #FFFFFF;");
	settingsBox.appendChild(fightMinimum);

var fightRandom = document.createElement("div");
	fightRandom.innerHTML  = "<input type='radio' name='r1' id='fightRandom' value='checked' "+GM_getValue('fightRandom', '')+"> fight random";
	fightRandom.setAttribute("style", "position: absolute; left: 340px; top: 30px;color: #FFFFFF;");
	settingsBox.appendChild(fightRandom);

var fightLevel = document.createElement("div");
	fightLevel.innerHTML = "max. level: <input type='text' style='border: none; width: 30px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('fightLevel', '100')+"' id='fightLevel' size='1'>";
	fightLevel.setAttribute("style", "position: absolute; left: 340px; top: 55px;color: #FFFFFF;");
	settingsBox.appendChild(fightLevel);

var fightClanSize = document.createElement("div");
	fightClanSize.innerHTML = "max. Crew: <input type='text' style='border: none; width: 30px; text-align: center; background-color: #EEEEEE;' value='"+GM_getValue('fightClanSize', '502')+"' id='fightClanSize' size='1'>";
	fightClanSize.setAttribute("style", "position: absolute; left: 440px;top: 55px;color: #FFFFFF;");
	settingsBox.appendChild(fightClanSize);

var freshMeat = document.createElement("div");
	freshMeat.innerHTML  = "<input type='radio' name='r1' id='freshMeat' value='checked' "+GM_getValue('freshMeat', '')+"> go for fresh Meat";
	freshMeat.setAttribute("style", "position: absolute; left: 340px; top: 80px;color: #FFFFFF;");
	settingsBox.appendChild(freshMeat);

var fightList = document.createElement("div");
	fightList.innerHTML  = "<input type='radio' name='r1' id='rFightList' value='checked' "+GM_getValue('rFightList', '')+"> fight list:<br /><textarea style='border: none; background-color: #EEEEEE; width: 180px; height: 100px;' id='fightList'>"+GM_getValue('fightList', '')+"</textarea>";
	fightList.setAttribute("style", "position: absolute; left: 340px;top: 105px;color: #FFFFFF;");
	settingsBox.appendChild(fightList);

var autoTreasure = document.createElement("div");
	autoTreasure.innerHTML  = "<input type='checkbox' id='autoTreasure' value='checked' "+GM_getValue('autoTreasure', '')+">enable auto-Treasure";
	autoTreasure.setAttribute("style", "position: absolute; left: 340px;top: 240px;color: #FFFFFF;");
	settingsBox.appendChild(autoTreasure);

var autoPet = document.createElement("div");
	autoPet.innerHTML  = "<input type='checkbox' id='autoPet' value='checked' "+GM_getValue('autoPet', '')+">enable auto-Pet";
	autoPet.setAttribute("style", "position: absolute; left: 340px;top: 260px;color: #FFFFFF;");
	settingsBox.appendChild(autoPet);

var autoStats = document.createElement("div");
	autoStats.innerHTML  = "<input type='checkbox' id='autoStats' value='checked' "+GM_getValue('autoStats', '')+">enable auto-Stat Upgrade";
	autoStats.setAttribute("style", "position: absolute; left: 340px;top: 280px;color: #FFFFFF;");
	settingsBox.appendChild(autoStats);

var statAtt = document.createElement("div");
	statAtt.innerHTML  = "<input type='radio' name='statUpgrade' id='statAtt' value='attack' "+((GM_getValue('statUpgrade','')=='attack') ? 'checked' : '')+"> Attack";
	statAtt.setAttribute("style", "position: absolute; left: 340px; top: 300px;color: #FFFFFF;");
	settingsBox.appendChild(statAtt);

var statDef = document.createElement("div");
	statDef.innerHTML  = "<input type='radio' name='statUpgrade' id='statDef' value='defense' "+((GM_getValue('statUpgrade','')=='defense') ? 'checked' : '')+"> Defense";
	statDef.setAttribute("style", "position: absolute; left: 400px; top: 300px;color: #FFFFFF;");
	settingsBox.appendChild(statDef);
	
var statEnergy = document.createElement("div");
	statEnergy.innerHTML  = "<input type='radio' name='statUpgrade' id='statEnergy' value='max_energy' "+((GM_getValue('statUpgrade','')=='max_energy') ? 'checked' : '')+"> Energy";
	statEnergy.setAttribute("style", "position: absolute; left: 470px; top: 300px;color: #FFFFFF;");
	settingsBox.appendChild(statEnergy);
   
var statHP = document.createElement("div");
	statHP.innerHTML  = "<input type='radio' name='statUpgrade' id='statHP' value='max_health' "+((GM_getValue('statUpgrade','')=='max_health') ? 'checked' : '')+"> Health";
	statHP.setAttribute("style", "position: absolute; left: 340px; top: 320px;color: #FFFFFF;");
	settingsBox.appendChild(statHP);
	
var statStrength = document.createElement("div");
	statStrength.innerHTML  = "<input type='radio' name='statUpgrade' id='statStrength' value='max_stamina' "+((GM_getValue('statUpgrade','')=='max_stamina') ? 'checked' : '')+"> Strength (2 points)";
	statStrength.setAttribute("style", "position: absolute; left: 400px; top: 320px;color: #FFFFFF;");
	settingsBox.appendChild(statStrength);

var autoIsland = document.createElement("div");
	autoIsland.innerHTML  = "<input type='checkbox' id='autoIsland' value='checked' "+GM_getValue('autoIsland', '')+">enable auto-Island (store/hire)";
	autoIsland.setAttribute("style", "position: absolute; left: 340px;top: 340px;color: #FFFFFF;");
	settingsBox.appendChild(autoIsland);


var saveButton = document.createElement("div");
	saveButton.innerHTML  = "<button>save settings</button>";
	saveButton.addEventListener('click', saveSettings, false);
	saveButton.setAttribute("style", "position: absolute;left: 150px; top: 335px;");
	settingsBox.appendChild(saveButton);

var saveNotification = document.createElement("div");
	saveNotification.innerHTML = "<strong>Settings Saved</strong>";
	saveNotification.setAttribute("style","position: absolute;left:220px;top:380px;color:red;visibility:hidden;font-size:16px;");
	settingsBox.appendChild(saveNotification);

   
// message logic here...
if (document.body.innerHTML.indexOf('message_body') != -1)
{
	var boxes = document.getElementById(SCRIPT.appID+'_content_row').getElementsByTagName('span');
	if(boxes.length>0)
	{
	var messagebox = boxes[0];
	if(messagebox.innerHTML.indexOf('Someone has invited you to join their Crew') != -1)
	{
		if(boxes[1].innerHTML.indexOf('New') != -1)
			messagebox = boxes[2];
		else
			messagebox = boxes[1];
	}
	if(messagebox.innerHTML.indexOf('You just bought') != -1)
	{
		var item = messagebox.innerHTML.split('You just bought')[1].split('for')[0];
		addToLog("You just bought " + item);
	}
	else if(messagebox.innerHTML.indexOf('Ye successfully purchased') != -1)
	{
		var island = messagebox.innerHTML.split('Ye successfully purchased ')[1];
		island = island.split('.')[0];
		addToLog("Ye successfully purchased " + island);
	}
	else if(messagebox.innerHTML.indexOf('Rare Ability') != -1)
	{
		var ability = messagebox.innerHTML.split('bold;">')[1].split('</span>')[0];
		addToLog("acquired Rare Ability " + ability);
	}
	else if(messagebox.innerHTML.indexOf('Ye dug up') != -1)
	{
		var deposit	= messagebox.innerHTML.split('blood.gif">')[1];
		deposit = deposit.replace(",","");
		deposit = deposit.replace(",","");
		deposit = parseInt(deposit);
		addToLog("withrew " + deposit);
	}
	else if(messagebox.innerHTML.indexOf('buried and stored safely') != -1)
	{
		var deposit	= messagebox.innerHTML.split('blood.gif">')[1];
		deposit = deposit.replace(",","");
		deposit = deposit.replace(",","");
		deposit = parseInt(deposit);
		addToLog("deposit " + deposit);
	}
	else if(messagebox.innerHTML.indexOf('more health') != -1)
	{
		//The brothel massage gave ye 57 more health for 9,120.
		var addHealth = messagebox.innerHTML.split('gave ye')[1].split('more health')[0];
		var cost = 0;
		if(messagebox.innerHTML.indexOf('blood.gif">') != -1)
			cost = messagebox.innerHTML.split('blood.gif">')[1];
		cost	 = cost.replace(",","");
		cost	 = cost.replace(",","");
		cost	 = parseInt(cost	);
		addToLog("health +"+ addHealth + " for " + cost	);
	}
	else if(messagebox.innerHTML.indexOf('Ye fought with') != -1)
	{
		if(GM_getValue('freshMeat', '') != "checked")
		{
			var user = messagebox.innerHTML.split('user=')[1];
			var cost = 0;

		if(boxes.length!=13)
		{
			if(boxes[6].innerHTML.indexOf('found')!= -1)
				addToLog("found "+ boxes[6].innerHTML.split('found ')[1].split('while fighting ')[0]);
			if(boxes[9].innerHTML.indexOf('blood.gif">') != -1)
				cost = boxes[9].innerHTML.split('blood.gif">')[1];
			cost	 = cost.replace(",","");
			cost	 = cost.replace(",","");
			if(boxes[9].innerHTML.indexOf('WON') != -1)
				addToLog("fight "+ parseInt(user) + " WON " +parseInt(cost));
			else
				addToLog("fight "+ parseInt(user) + " LOST " +parseInt(cost));
		}
		else
		{
			if(boxes[6].innerHTML.indexOf('blood.gif">') != -1)
				cost = boxes[6].innerHTML.split('blood.gif">')[1];
			cost	 = cost.replace(",","");
			cost	 = cost.replace(",","");
			if(boxes[6].innerHTML.indexOf('WON') != -1)
				addToLog("fight "+ parseInt(user) + " WON " +parseInt(cost));
			else
				addToLog("fight "+ parseInt(user) + " LOST " +parseInt(cost));
		}
		}
	}
	else if(messagebox.innerHTML.indexOf('Your opponent is already dead or too weak to fight') != -1)
	{
		var opponents = GM_getValue('fightList', '').split("\n");

		var opponentList="";
		for (var i=1;i<opponents.length;i++)
		{
			opponentList = opponentList+ opponents[i]+"\n";
		}
		opponentList = opponentList + opponents[0];
		GM_setValue('fightList', opponentList);

	}
	else if(messagebox.innerHTML.indexOf('You cannot fight a member of your Clan') != -1)
	{
		if(GM_getValue('fightRandom', '') != "checked")
		{
			var opponents = GM_getValue('fightList', '').split("\n");
			var opponentList="";
			for (var i=1;i<opponents.length;i++)
				opponentList = opponentList+ opponents[i]+"\n";
			GM_setValue('fightList', opponentList);
		}
	}
	else if(messagebox.innerHTML.indexOf('Buy items at the Armory Page') != -1)
	{
		GM_setValue('autoMission', '');
		addToLog('Unable to resume Auto-mission. You seem to be missing a required buyable item. Disabling...');
		document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/index.php';


	} else if(messagebox.innerHTML.indexOf('This is a loot drop, and cannot be bought.') != -1)
	{ 
		GM_setValue('autoMission','');
		addToLog('Unable to resume Auto-mission. You seem to be missing a required loot item. Disabling...');
		document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/index.php';

	}
	//else
	//	alert(messagebox.innerHTML);
	}
}


//Grab the last known request form ID
var reqID = GM_getValue('reqformID',false);

//If we don't have a reqID or its older than a day, grab a fresh one.
if (!reqID)
{
	if (location.href.indexOf(SCRIPT.name+'/recruit') != -1)
	{
		Array.forEach(document.getElementsByTagName("input"),
			function(obj)
			{
				if (obj.id.indexOf('mfs_typeahead_req_form_') != -1)
				{
					GM_setValue('reqformID',obj.id.replace('mfs_typeahead_req_form_',''));
					return;
				}
			}
		);
	}
	else
		window.location = "http://apps.facebook.com/"+SCRIPT.name+"/recruit.php";
	return;
}

/*
var members = document.getElementsByXPath("//a[contains(@href,'/"+SCRIPT.name+"/stats.php?user=')]");
//First link is always yourself from the 'my stats' link at the top
 Array.forEach(members,
	 function(member){
		var mobid = member.href.match(/\d+$/);
		var newImg = document.createElement("img");
		newImg.setAttribute("src", image);
		newImg.addEventListener('click',invitePlayer(mobid), false);
		member.parentNode.insertBefore(newImg,member);
	 }
	 );
*/
	 




//***********************************************************
//***********************************************************
//***********************************************************
//***********************************************************
//***********************************************************
//MAIN LOGIC HERE
//***********************************************************
//***********************************************************
//***********************************************************
//***********************************************************
//***********************************************************


// --------------  Call the pause/unpause function ----------------//
pause()

// This is the main function that calls all other functions
// ------------------------ Run Logic Loop Here ------------------------------//
// -- parse messages, log as required
//if (document.body.innerHTML.indexOf('message_body') != -1)
//	{
//	messages()
//	}
// --------------------------------------------------------------------------
// if we're on the properties page, put data on the screen
// --------------------------------------------------------------------------
if (location.href.indexOf(SCRIPT.name+'/properties') != -1)
	{
	propertydata()
	}
//decrement petvisit every load
petvisit = petvisit - 1
if (petvisit < 0)
	{
	petvisit = 0
	}
// -- check if paused, if not, run autoplay loop
if (GM_getValue('paused')==0)
{
	if (GM_getValue('autoClick', '') == "checked")
		{
		reloadfunction()
		}
//prioritize heal if < killhealth but > 19
	if (GM_getValue('autoHeal', '') == "checked" && health < killhealth && health > 19  && flag==0)
		{
		heal()
		}
// if energy > max, prioritize burning it off
	if (energy >= maxenergy  && GM_getValue('autoMission', '') == "checked" && flag==0)
		{
		runmissions()
		}
// if strength = max, prioritize burning it off, health killhealth will drop through
	if (strength >=  maxstrength && GM_getValue('autoFight', '') == "checked" && health > killhealth && flag==0)
		{
		fight()
		}
// normal heal
	if (GM_getValue('autoHeal', '') == "checked" && (health < GM_getValue('healthLevel', '')) && flag == 0)
		{
		heal()
		}
// check on your pet if petvisit == 0
	if (GM_getValue('autoPet','') == "checked" && petvisit == 0 && flag==0)
		{
		feedandpet()
		}
	if (GM_getValue('autoFight', '') == "checked" && strength>GM_getValue('fightMinimum',0) && flag==0)
		{
		fight()
		}
	if (GM_getValue('autoMission', '') == "checked" && flag==0)
		{
		runmissions()
		}
	if ((GM_getValue('autoBank', '') == "checked")&&(gold > parseInt(GM_getValue('bankConfig'))) && (gold > 10) && flag==0)
		{
		bank()
		}
	if (GM_getValue('autoIsland', '') == "checked" && flag==0)
		{
		autoisland()
		}
	if (GM_getValue('autoalliance', '') == "checked" && alliance!=GM_getValue('allianceSize', 1) && flag==0)
		{
		autoproperties()
		}
	if (GM_getValue('autoTreasure','') == "checked" && flag==0)
		{
		autotreasure()
		}

	if (GM_getValue('autoStats', '') == "checked" && flag==0)
		{
		autostats()
		}
}
//store pet visit value
GM_setValue('petvisit', petvisit);

//-------------------------------------------------------------------------------------
function pause() // this function puts the pause/unpause button in the banner and sets up function calls to pause/unpause on click
	{
	if (GM_getValue('paused')==0)
		{
		pauseButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+330)+"px; top: "+(bannerTop+50)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer; color:green;");
		pauseButton.innerHTML = "Pause Autoplayer";
		pauseButton.addEventListener('click', pausePlayer, false);
		document.body.appendChild(pauseButton);
		}
	else 
		{
		pauseButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+330)+"px; top: "+(bannerTop+50)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer; color:red;");
		pauseButton.innerHTML = "Resume Autoplayer";
		pauseButton.addEventListener('click', resumePlayer, false);
		document.body.appendChild(pauseButton);
		}
	}

//-------------------------------------------------------------------------------------
function reloadfunction()  // reload logic
	{
	var timeWait = Math.floor(parseFloat(GM_getValue('r1', '6')) + parseFloat((GM_getValue('r2', '11'))-parseFloat(GM_getValue('r1', '6')))*Math.random())*1000;
	setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/index.php"+"'", timeWait);
	}




//-------------------------------------------------------------------------------------------------------------------------
function bank()
	{
	if (location.href.indexOf(SCRIPT.name+'/bank') != -1)
		{
		var sform = document.getElementsByTagName('form')[2];
		document.getElementsByName("amount")[1].value = gold;
		setTimeout(function(){sform.submit();},delay);
		}
	else
		{
		window.location = "http://apps.facebook.com/"+SCRIPT.name+"/bank.php";
		flag = 1;
		}
	return;
	}

//-------------------------------------------------------------------------------------------------------------------------
function heal()
	{
	if (location.href.indexOf(SCRIPT.name+'/hospital') != -1)
		{
		setTimeout(function(){document.getElementsByTagName('form')[1].submit();},delay);
		}
	else
		{
		window.location = "http://apps.facebook.com/"+SCRIPT.name+"/hospital.php";
		flag = 1;
		}
	return;
	}



//-------------------------------------------------------------------------------------
//automission
function runmissions()
{
	if( energy>=missions[GM_getValue('selectMission', 1)][1])
	{
		if (location.href.indexOf(SCRIPT.name+'/jobs') != -1)
		{
			var mission = GM_getValue('selectMission', 1);
			var jobname = missions[mission][3];
			var currentTab = missions[mission][2];
			//var sform = document.getElementById(SCRIPT.appID+"doJob_"+missions[mission][4]);
			var sform = document.evaluate("//form[@id='"+SCRIPT.appID+"_doJob_"+missions[mission][4]+"']",document,null,9,null).singleNodeValue;
					if(GM_getValue('missionMastery', '') == "checked")
					//basic Mastery logic. 
					{
						var masteryList = document.evaluate("//td[@class='job_name']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
						
						for (var i=0;i<missions.length;i++) {
						//build Mastery percentages and level array for current jobtier.
							if (missions[i][2]==currentTab) {
								itemIndex=missions[i][3];
								tempHTML=masteryList.snapshotItem(itemIndex).innerHTML;
								masteryLevel=parseInt(tempHTML.substring(tempHTML.indexOf('Level')+6,tempHTML.indexOf(' Master')));
								if (tempHTML.indexOf('Mastered')!=-1) {
									masteryPerc=100;
								} else {
									masteryPerc=parseInt(tempHTML.substring(tempHTML.indexOf('Level'),tempHTML.indexOf('%')).split(' ')[3]);
								}
								curTabMastery[itemIndex]=new Array(masteryPerc,masteryLevel,i);
							}
						}
						
						if (curTabMastery[jobname][0]<100) {
							//currently selected job is below 100%
							addToLog('Doing Job: '+missions[mission][0]+'. Current Mastery: Level '+curTabMastery[jobname][1]+' '+curTabMastery[jobname][0]+'%');
							sform.submit();
							return;
						} else {
							//iterate through jobs in current tier and select the one that isnt 100%
							if (jobname==(curTabMastery.length-1)) {
								startJob=0;
							} else {
								startJob=jobname+1;
							}
							Notcompleted=-1;
							for (var i=startJob;i<curTabMastery.length;i++) {
								if (curTabMastery[i][0]<100) {
									Notcompleted=curTabMastery[i][2];
									break;
								}
							}
							
							if (Notcompleted==-1) {
								//no non-completed jobs found. Move to next tier.
								addToLog('Tier '+currentTab+' mastered. Switching to next tier.');
								nextJobIndex=curTabMastery[curTabMastery.length-1][2]+1;
								GM_setValue('selectMission',nextJobIndex);
								window.location = "http://apps.facebook.com/"+SCRIPT.name+"/jobs.php?tab="+missions[nextJobIndex][2];
							} else {
								//non-completed job found.
								addToLog('Currently selected mission: '+missions[mission][0]+' already mastered. Moving to next mission.');
								GM_setValue('selectMission',Notcompleted);
								window.location = "http://apps.facebook.com/"+SCRIPT.name+"/jobs.php?tab="+missions[Notcompleted][2];
							};
							
						}
					} else {
						//do the job if no tier mastery is set.
						sform.submit();
					}
		}
		else
			window.location = "http://apps.facebook.com/"+SCRIPT.name+"/jobs.php?tab="+missions[GM_getValue('selectMission', 1)][2];
		return;
	}
}

//-------------------------------------------------------------------------------------
//autofight
function fight()

{
	if(GM_getValue('fightRandom', '') == "checked")
	{
		if (location.href.indexOf(SCRIPT.name+'/fight') != -1)
		{
			var opponents  = document.evaluate("//input[@name='opponent_id']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);//.singleNodeValue;
			var fightIndex = Math.floor(Math.random()*opponents.snapshotLength);
			var fightNode =opponents.snapshotItem(fightIndex).parentNode.parentNode.parentNode; 
			var opponentLevel =  parseInt(fightNode.innerHTML.split('Level ')[1]);
			var opponentClan = parseInt(fightNode.innerHTML.split('groupsize">')[1]);

			if(opponentLevel< GM_getValue('fightLevel', '100') && opponentClan<GM_getValue('fightClanSize', '502'))
				setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id="+opponents.snapshotItem(fightIndex).value+"&action=attack"+"'", delay);
			else
				setTimeout("document.location ='" + "http://apps.facebook.com/"+SCRIPT.name+"/fight.php"+"'", delay);
		}
		else
			window.location = "http://apps.facebook.com/"+SCRIPT.name+"/fight.php";
	}
	if(GM_getValue('freshMeat', '') == "checked")
		setTimeout("document.location ='" + "http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id= &action=face_friend_invite"+"'", delay);

	if(GM_getValue('rFightList', '') == "checked")
		setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id="+parseInt(GM_getValue('fightList', ''))+"&action=attack"+"'", delay);
	}


/* Pirates fight code
{
		if((GM_getValue('fightRandom', '') == "checked") && (health>25))
		{
			if (location.href.indexOf(SCRIPT.name+'/fight') != -1)
			{
				var fightForms = document.evaluate("//form[@id='"+SCRIPT.appID+"_fight_attack']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
				var frindex=0;
				
				for (var i=0;i<fightForms.snapshotLength;i++) {
					fightTable = fightForms.snapshotItem(i).parentNode.parentNode.parentNode;
					opponentId=document.evaluate(".//input[@name='opponent_id']",fightForms.snapshotItem(i),null,9,null).singleNodeValue.value;
					fightInfo=document.evaluate(".//div",fightTable,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
					opponentLevel=parseInt(fightInfo.snapshotItem(1).innerHTML.split('Level ')[1]);
					opponentClan=parseInt(fightInfo.snapshotItem(2).innerHTML.split('Crew Size: ')[1]);
					opponentMaxLevel=parseInt(GM_getValue('fightLevel', '100'));
					opponentMaxClan=parseInt(GM_getValue('fightClanSize', '502'));
					if ((opponentLevel<=opponentMaxLevel) && (opponentClan<=opponentMaxClan))
					{
						fightUsers[frindex] = new Array(opponentId,opponentLevel,opponentClan);
						frindex++;
					}
				}
				
				var fightIndex = Math.floor(Math.random()*fightUsers.length);
				
				if (fightUsers.length>0) {
					setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id="+fightUsers[fightIndex][0]+"&action=attack"+"'", delay);
				} else {
    				var timeWait = Math.floor(parseFloat(GM_getValue('r1', '6')) + parseFloat((GM_getValue('r2', '11'))-parseFloat(GM_getValue('r1', '6')))*Math.random())*1000;
    				setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/fight.php"+"'", timeWait);					
				}
			} else {
				window.location = "http://apps.facebook.com/"+SCRIPT.name+"/fight.php";
			}
			
		} else if(GM_getValue('freshMeat', '') == "checked") {
			setTimeout("document.location ='" + "http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id= &action=face_friend_invite"+"'", delay);
		} else if (GM_getValue('rFightList', '') == "checked") {
			//Get values from config
			var randomFL = GM_getValue('fightList', '').split('\n');
			var randomindex=Math.floor(Math.random()*randomFL.length);
			setTimeout("document.location = '"+"http://apps.facebook.com/"+SCRIPT.name+"/fight.php?opponent_id="+parseInt(randomFL[randomindex])+"&action=attack"+"'", delay);
		}
}


*/

//-------------------------------------------------------------------------------------
//autoisland
function autoisland()
{
	if (location.href.indexOf('index.php')!=-1) {
		//check indexpage for resource buildup.
	
		var widgetdivs = document.evaluate("//div[@class='widget_title']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var i=0;i<widgetdivs.snapshotLength;i++) {
			if (widgetdivs.snapshotItem(i).innerHTML.indexOf('YER ISLAND')!=-1) {
				var island=widgetdivs.snapshotItem(i).parentNode;
				break;
			}
		}
	
		var islandrows = document.evaluate(".//span",island,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var j=0;j<islandrows.snapshotLength;j++) {
			var wood = parseInt(islandrows.snapshotItem(1).innerHTML);
			var stone = parseInt(islandrows.snapshotItem(2).innerHTML);
			var iron = parseInt(islandrows.snapshotItem(3).innerHTML);
		}
	
		if ((wood>=1)||(stone>=1)||(iron>=1)) {
			addToLog('Island: '+wood+' Wood, '+stone+' Stone and '+iron+' Iron available.');
			document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/homebase.php';
		}
	}
	
	if (location.href.indexOf('homebase.php')!=-1) {
		//Log stored resources & hiring friends.
		var msg = document.evaluate("//span[@class='message_body']",document,null,9,null).singleNodeValue;
		if (msg!=null) {
			if (msg.innerHTML.indexOf('You have succesfully stored')!=-1) {
				//You have succesfully stored 17 wood!
				addToLog(msg.innerHTML.replace('You have succesfully stored','Island: Stored').replace('!','.'));
			} else if (msg.innerHTML.indexOf('You have hired')!=-1) {
				//You have hired Anthony Allegretti to gather 24 wood over 12 hours.
				addToLog('Hired '+msg.innerHTML.split('You have hired ')[1].split(' hours.')[0]+' hours.');
			}
		}
		
		//Check if on friend selection page
		document.addEventListener("DOMNodeInserted",chooseFriend,false);
		
		//Hire workers or store resources.
		var islandforms = document.evaluate("//form[@id='app16421175101_hb_2']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		var hireworkers = document.evaluate("//form[@id='app16421175101_hb_1']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		if (islandforms.snapshotLength>0) {
			for (var i=0;i<islandforms.snapshotLength;i++) {
				islandforms.snapshotItem(i).submit();
				break;
			}
		} else if (hireworkers.snapshotLength>0) {
			for (var i=0;i<hireworkers.snapshotLength;i++) {
				hireworkers.snapshotItem(i).submit();
				break;
			}
		} else {
			//alert('removing listener and returning to index');
			document.removeEventListener("DOMNodeInserted",chooseFriend,false);
			document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/index.php';
		}
	}
}

//-------------------------------------------------------------------------------------
//autostats
function autostats()
{
	var headerlinks = document.evaluate("//a[@class='header_link']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	var statslink = headerlinks.snapshotItem(2).innerHTML;
	var statspan = headerlinks.snapshotItem(2).getElementsByTagName('span');
	if (statspan.length>0) {
		//Statpoints available
		var statpoints=parseInt(statspan[0].innerHTML.replace('(','').replace(')',''));
		var statToUpgrade=GM_getValue('statUpgrade','');
		var statneed=(statToUpgrade=='max_stamina') ? 2 : 1;
		//quotient = ( numerator - (numerator % denominator) ) / denominator
		var timesupgrade = ((statpoints - (statpoints % statneed)) / statneed);
		if ((statpoints>=statneed) && (location.href.indexOf('stats.php')==-1)) {
			addToLog(statpoints+' Stat points available. Upgrading '+statToUpgrade+' '+timesupgrade+' times.');
			//http://apps.facebook.com/piratesrule/stats.php?type=attack&action=Increase
			document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/stats.php?type='+statToUpgrade+'&action=Increase';
		}
	}
	
	if (location.href.indexOf('stats.php')!=-1) {
		//Log statsupgrades
		var msg = document.evaluate("//span[@class='message_body']",document,null,9,null).singleNodeValue;
		if (msg!=null) {
			if (msg.innerHTML.indexOf('Ye just upgraded')!=-1) {
				//Ye just upgraded yer Maximum Energy by 1.
				addToLog(msg.innerHTML.replace('Ye just upgraded','Upgraded'));
			}
		}
		
		if (statpoints>=statneed) {
		//Do more statsupgrades if points available.
			document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/stats.php?type='+statToUpgrade+'&action=Increase';
		} else {
			//no more statpoints available, return to index.
			document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/index.php';
		}
	}
}

//-------------------------------------------------------------------------------------
//propertydata
function propertydata()
{
	var minions = document.evaluate("//tr[@class='darkRow']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	for(var index = 1 ; index<minions.snapshotLength;index++)
	{
		var minionIncome = minions.snapshotItem(index).getElementsByTagName('td')[1].getElementsByTagName('div')[1];
		minionIncome = minionIncome.innerHTML.split('blood.gif">')[1];
		minionIncome	 = minionIncome.replace(",","");
		minionIncome	 = minionIncome.replace(",","");
		minionIncome	 = parseInt(minionIncome	);
		var minionCost = minions.snapshotItem(index).getElementsByTagName('td')[2].getElementsByTagName('td')[0];
		minionCost = minionCost.innerHTML.split('blood.gif">')[1];
		minionCost	 = minionCost.replace(",","");
		minionCost	 = minionCost.replace(",","");
		minionCost	 = parseInt(minionCost	);
		minionCost = minionCost / minionIncome;
		var divSpot = minions.snapshotItem(index).getElementsByTagName('td')[1].getElementsByTagName('div')[3];
		var divbox = document.createElement('div');
		divbox.innerHTML =  'Cost per blood: <strong class="money"><img src="http://facebook.heroes.zynga.com/graphics/icon-blood.gif" />'+minionCost+'</strong>';
		divSpot.parentNode.insertBefore(divbox,divSpot.nextSibling);
	}

	var minions = document.evaluate("//tr[@class='lightRow']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	for(var index = 0 ; index<minions.snapshotLength;index++)
	{
		var minionIncome = minions.snapshotItem(index).getElementsByTagName('td')[1].getElementsByTagName('div')[1];
		minionIncome = minionIncome.innerHTML.split('blood.gif">')[1];
		minionIncome	 = minionIncome.replace(",","");
		minionIncome	 = minionIncome.replace(",","");
		minionIncome	 = parseInt(minionIncome	);
		var minionCost = minions.snapshotItem(index).getElementsByTagName('td')[2].getElementsByTagName('td')[0];
		minionCost = minionCost.innerHTML.split('blood.gif">')[1];
		minionCost	 = minionCost.replace(",","");
		minionCost	 = minionCost.replace(",","");
		minionCost	 = parseInt(minionCost	);
		minionCost = minionCost / minionIncome;
		var divSpot = minions.snapshotItem(index).getElementsByTagName('td')[1].getElementsByTagName('div')[3];
		var divbox = document.createElement('div');
		divbox.innerHTML =  'Cost per blood: <strong class="money"><img src="http://facebook.heroes.zynga.com/graphics/icon-blood.gif" />'+minionCost+'</strong>';
		divSpot.parentNode.insertBefore(divbox,divSpot.nextSibling);
	}
}

//-------------------------------------------------------------------------------------
//autoproperties
function autoproperties()
{
	if(gold< gold2Update)
	{
		if (location.href.indexOf(SCRIPT.name+'/bank') != -1)
		{
			var sform = document.getElementsByTagName('form')[1];
			document.getElementsByName("amount")[0].value =  gold2Update-gold;
			setTimeout(function(){sform.submit();},delay);
		}
		else
			window.location = "http://apps.facebook.com/"+SCRIPT.name+"/bank.php";
	}
	else if (location.href.indexOf(SCRIPT.name+'/index') != -1)
	{
		var required = parseInt(document.body.innerHTML.split('Consumes:')[1]);
		if(alliance >= required)
		{
			var sform = document.getElementsByTagName('form')[1];
			setTimeout(function(){sform.submit();},delay);
		}
		else
			window.location = "http://apps.facebook.com/"+SCRIPT.name+"/properties.php";
	}
	else if (location.href.indexOf(SCRIPT.name+'/properties') != -1)
	{
		var required = document.body.innerHTML.split('Consumes:</div>')[1];
		required = required.split('<div style="float: left; margin-left: 4px;">')[1];
	    required = parseInt(required);
		if(alliance >= required)
			 setTimeout(function(){document.getElementsByTagName('form')[1].submit();},delay);
		GM_setValue('allianceSize', alliance);
	}
	else
		window.location = "http://apps.facebook.com/"+SCRIPT.name+"/index.php";
	return;
}

//-------------------------------------------------------------------------------------
//autotreasure
function autotreasure()
{
	if (location.href.indexOf("index.php")!=-1) {
		//Check if treasure chest is available to be opened.
		var msg = document.evaluate("//span[@class='message_body']",document,null,9,null).singleNodeValue;
		if (msg!=null) {
			if (msg.innerHTML.indexOf("Ye have unclaimed booty from Poseidon's Chest.")!=-1) {
				addToLog('Treasure chest is available to be opened.');
				window.location = "http://apps.facebook.com/"+SCRIPT.name+"/locks.php";
			}
		}
	}
	
	if (location.href.indexOf("locks.php")!=-1) {
		//Opened treasure chest. Log the treasure.
		var msg = document.evaluate("//span[@class='message_body']",document,null,9,null).singleNodeValue;
		if (msg!=null) {
			if (msg.innerHTML.indexOf('Ye have cracked the set and found a special treasure!')!=-1) {
				var prize = msg.getElementsByTagName('img');
				var prizetitle = prize[1].title;
				var prizeimg = prize[1].src;
				addToLog('Treasure found: '+prizetitle+'<img src="'+prizeimg+'">');
				setTimeout("document.location ='" + "http://apps.facebook.com/"+SCRIPT.name+"/index.php"+"'", 3000);
			}
		}
	}
}

//-------------------------------------------------------------------------------------
//feed and pet your pet
function feedandpet()
{

/*
******************************************pet health no longer on index
		if (location.href.indexOf("index.php")!=-1) {
			//check if pet energy or happiness is running low
			var divbars = document.evaluate("//div[@class='tg_eb_fill']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
			petenergy = parseInt(divbars.snapshotItem(0).style.width.replace('%',''));
			pethappy  = parseInt(divbars.snapshotItem(1).style.width.replace('%',''));
			feedenergy = parseInt((((100-petenergy)-((100-petenergy) % 20)) / 20)*2);
		if ((pethappy<=50) || ((petenergy<=50) && (energy>=feedenergy))) {
				document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/pet.php';
			}
		}
******************************************pet health no longer on index
*/
	if (location.href.indexOf('pet.php')!=-1)
		{
		//check pet energy and happiness levels again
		var divbars = document.evaluate("//div[@class='tg_eb_fill']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		petenergy = parseInt(divbars.snapshotItem(1).style.width.replace('%',''));
		pethappy  = parseInt(divbars.snapshotItem(2).style.width.replace('%',''));
		petenergyform = document.evaluate("//input[@value='Feed']",document,null,9,null).singleNodeValue;
		pethappyform = document.evaluate("//input[@value='Pet']",document,null,9,null).singleNodeValue;
		if ((petenergy>=60) && (pethappy>60))
			{
				petvisit = petvisit + 25 // no reason to burn all our energy right now, make a pass through then come back in a bit to top up more
			}
		if ((petenergy<=80) && (energy>=2))
			{
				addToLog('Pet energy below 80%, currently '+petenergy+'%. Feeding...');
				petenergyform.click();
			} 
		else if ((petenergy<=80) && (energy<2))
			{
//				addToLog('Pet energy below 80%, currently '+pethappy+'%. But you're out of energy, coming back later');
				petvisit = petvisit + 10; // come back after a few cycles, let logic drop through
			}
		else if (pethappy<100) 
			{
				addToLog('Pet happiness below 100%, currently '+pethappy+'%. Petting...');
				pethappyform.click();
			}
		else
			{
				addToLog('Pet stats ok, returning to index.');
				petvisit = petvisitfrequency;
				document.location = 'http://apps.facebook.com/'+SCRIPT.name+'/index.php';
			}
		}
	else
		{
			window.location = "http://apps.facebook.com/"+SCRIPT.name+"/pet.php";
			flag = 1;
		}
}







//-------------------------------------------------------------------------------------
function saveSettings()
{
    if(document.getElementById('autoClick').checked == true)
        GM_setValue('autoClick', 'checked');
    else
        GM_setValue('autoClick', '0');

    if(document.getElementById('autoalliance').checked == true)
        GM_setValue('autoalliance', 'checked');
    else
        GM_setValue('autoalliance', '0');

		if(document.getElementById('autoMission').checked == true)
        GM_setValue('autoMission', 'checked');
    else
        GM_setValue('autoMission', '0');
        
		if(document.getElementById('missionMastery').checked == true)
        GM_setValue('missionMastery', 'checked');
    else
        GM_setValue('missionMastery', '0');        

    if(document.getElementById('autoBank').checked == true)
        GM_setValue('autoBank', 'checked');
    else
        GM_setValue('autoBank', '0');

    if(document.getElementById('autoHeal').checked == true)
        GM_setValue('autoHeal', 'checked');
    else
        GM_setValue('autoHeal', '0');

    if(document.getElementById('autoFight').checked == true)
        GM_setValue('autoFight', 'checked');
    else
        GM_setValue('autoFight', '0');

    if(document.getElementById('fightRandom').checked == true)
        GM_setValue('fightRandom', 'checked');
    else
        GM_setValue('fightRandom', '0');

    if(document.getElementById('freshMeat').checked == true)
        GM_setValue('freshMeat', 'checked');
    else
        GM_setValue('freshMeat', '0');

    if(document.getElementById('rFightList').checked == true)
        GM_setValue('rFightList', 'checked');
    else
        GM_setValue('rFightList', '0');

    if(document.getElementById('autoTreasure').checked == true)
        GM_setValue('autoTreasure', 'checked');
    else
        GM_setValue('autoTreasure', '0');   
        
     if(document.getElementById('autoPet').checked == true)
        GM_setValue('autoPet', 'checked');
    else
        GM_setValue('autoPet', '0');        
        
     if(document.getElementById('autoStats').checked == true)
        GM_setValue('autoStats', 'checked');
    else
        GM_setValue('autoStats', '0');          

     if(document.getElementById('autoIsland').checked == true)
        GM_setValue('autoIsland', 'checked');
    else
        GM_setValue('autoIsland', '0');          
        
     if (document.getElementById('statAtt').checked) {
     	GM_setValue('statUpgrade',document.getElementById('statAtt').value);
     } else if (document.getElementById('statDef').checked) {
     	GM_setValue('statUpgrade',document.getElementById('statDef').value);
     } else if (document.getElementById('statEnergy').checked) {
     GM_setValue('statUpgrade',document.getElementById('statEnergy').value);
     } else if (document.getElementById('statHP').checked) {
     	GM_setValue('statUpgrade',document.getElementById('statHP').value);
     } else if (document.getElementById('statStrength').checked) {
     	GM_setValue('statUpgrade',document.getElementById('statStrength').value);
     } else {
     	GM_setValue('autoStats','0');
     	GM_setValue('statUpgrade','');
     }	
     
    GM_setValue('selectMission', selectMission.selectedIndex );
    GM_setValue('bankConfig', document.getElementById('bankConfig').value);
    GM_setValue('bankKeep', document.getElementById('bankKeep').value);
    GM_setValue('r1', document.getElementById('r1').value);
    GM_setValue('r2', document.getElementById('r2').value);
    GM_setValue('fightMinimum', document.getElementById('fightMinimum').value);
    GM_setValue('fightList', trim(document.getElementById('fightList').value));
    GM_setValue('healthLevel', document.getElementById('healthLevel').value);
    GM_setValue('healthRage', document.getElementById('healthRage').value);
    GM_setValue('fightLevel', document.getElementById('fightLevel').value);
    GM_setValue('fightClanSize', document.getElementById('fightClanSize').value);

    saveNotification.style.visibility = "visible";
    setTimeout("document.location = location.href",1000);
}

//-------------------------------------------------------------------------------------
function toggleSettings()
{
    if(settingsOpen == false)
    {
        settingsOpen = true;
        settingsButton.innerHTML = "close settings";
        settingsBox.style.visibility = "visible";
        saveNotification.style.visibility = "hidden";
    }
    else
    {
        settingsOpen = false;
        settingsButton.innerHTML = "open settings";
        settingsBox.style.visibility = "hidden";
        saveNotification.style.visibility = "hidden";        
    }
}

//-------------------------------------------------------------------------------------
function addToLog(line)
{
	var currentTime = new Date()
	var timestamp = currentTime.getDate()+ "/" + currentTime.getMonth()+ "/" +currentTime.getFullYear() +" " +currentTime.getHours() + ":" + currentTime.getMinutes()+" ";
    GM_setValue('itemLog', timestamp + line+"<br />"+GM_getValue('itemLog', ''));
}

//-------------------------------------------------------------------------------------
function clearLog()
{
    GM_setValue('itemLog', '');
    logBox.innerHTML = "";
}

//-------------------------------------------------------------------------------------
function toggleLogBox()
{
    if(logOpen == false)
    {
        logOpen = true;
        viewLogButton.innerHTML = "Hide Log";
        logBox.style.visibility = "visible";
    }
    else
    {
        logOpen = false;
        viewLogButton.innerHTML = "View Log";
        logBox.style.visibility = "hidden";
    }
}

//-------------------------------------------------------------------------------------
function createXMLHTTPObject() {
    var xmlhttp = false;
    for (var i=0;i<XMLHttpFactories.length;i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        }
        catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}

//-------------------------------------------------------------------------------------
// event function for function: pause(), pauses on click, stores to GM
function pausePlayer() 
{
		GM_setValue('paused',1);
		pauseButton.setAttribute("style", "position: absolute; left: "+(bannerLeft+330)+"px; top: "+(bannerTop+50)+"px; font-family: tahoma; font-size: 10pt; font-weight: 600; -moz-user-select: none; -khtml-user-select: none; cursor: pointer; color:red;");
		pauseButton.innerHTML = "Resume Autoplayer";
		pauseButton.addEventListener('click', resumePlayer, false);
}

//-------------------------------------------------------------------------------------
// event function for function: pause(), resumes on click, stores to GM
function resumePlayer()
{
		GM_setValue('paused',0);
		window.location = "http://apps.facebook.com/"+SCRIPT.name+"/index.php";
}


//-------------------------------------------------------------------------------------
function getPositionLeft(This){
var el = This;var pL = 0;
while(el){pL+=el.offsetLeft;el=el.offsetParent;}
return pL
}

//-------------------------------------------------------------------------------------
function getPositionTop(This){
var el = This;var pT = 0;
while(el){pT+=el.offsetTop;el=el.offsetParent;}
return pT
}


function trim(value) {
return value.replace(/^\s+|\s+$/,'');
}

function chooseFriend(e) 
{
	//Check if on hire workers friend selection page
	var friendselection = document.evaluate("//form[@id='app16421175101_friendform']",document,null,9,null).singleNodeValue;
	if (friendselection!=null) {
			alert('on friendselect');
			//This listener should only run once.
			document.removeEventListener("DOMNodeInserted",chooseFriend,false);
			//Pick a random friend and submit the form.
			var hirefriends = document.evaluate("//input[@name='friend_id']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
			var randomindex=Math.floor(Math.random()*hirefriends.snapshotLength);
			hirefriends.snapshotItem(randomindex).checked = true;
			friendselection.submit();
	}
}


//update the script (by Richard Gibson; changed by ms99 and blannie)
function updateScript() {
	try {
		if (!GM_getValue)
			return;
		GM_xmlhttpRequest({
			method: 'GET',
			url: SCRIPT.url + '?source', // don't increase the 'installed' count; just for checking
			onload: function(result) {
				if (result.status != 200) return;
				if (!result.responseText.match(/@version\s+([\d.]+)/)) return;
				var theOtherVersion = RegExp.$1;
				if (theOtherVersion == SCRIPT.version) {
					alert('you have the latest version' + ' (v ' + SCRIPT.version + ') !');
					return;
				} else if (theOtherVersion < SCRIPT.version) {
					alert('Beta version' + ' (v ' + SCRIPT.version + ') installed ?!');
					return;
				} else {
					if (window.confirm('new version ' + ' (v ' + theOtherVersion + ') available!\n\n' + 'Do you want to update?' + '\n')) {
						window.location.href = SCRIPT.url;
					}
				}
			}
		});
	} catch (ex) {
		alert(ex);
	}
}

/*
//invite users (By Andy Calderbank  and others, updated version by me)
function invitePlayer(mobid)
{
	return function ()
	{
		if (window.confirm('Do you want to invite this person ? ' + mobid))
		{
			GM_xmlhttpRequest({
			method: "POST",
			url: "http://apps.facebook.com/"+SCRIPT.name+"/recruit.php?action=create",
			headers:{'Content-type':'application/x-www-form-urlencoded'},
			data:reqID + '=Start+Typing+a+Friend%27s+Name&ids%5B%5D=' + mobid,
			onload: function(xhr) { }
			});
		}
	}
}
*/

function debugmessage(message)
	{
	alert (message + 'gold=' + gold + ', petvisit=' + petvisit + ', health=' + health + ', autoheallevel=' + GM_getValue('healthLevel', '') + ', energy ' + energy + '/' + maxenergy + ' strength ' + strength + '/' + maxstrength);
	}