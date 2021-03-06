// ==UserScript==
//
// @name           futbol24 Relevant
// @version        0.27.36
// @description	   I don't care for 3rd Canadian U21 league, show me the money!
// @icon           http://www.futbol24.com/i/favicon.ico
// @namespace      http://userscripts.org/users/138803
// @include        http://futbol24.com/
// @include        http://futbol24.com
// @include        http://www.futbol24.com/
// @include        http://www.futbol24.com
//
// @require        http://buzzy.260mb.com/AutoUpdater.js
//
// @history	0.27.36 Fixed some leagues
// @history	0.27.35 Fixed some leagues
// @history	0.27.34 Fixed some leagues
// @history	0.27.33 Fixed some leagues
// @history	0.27.32 Fixed some leagues
// @history	0.27.31 Fixed some leagues
// @history	0.27.30 Fixed some leagues
// @history	0.27.29 Fixed some leagues
// @history	0.27.28 Fixed some leagues
// @history	0.27.27 Fixed some leagues
// @history	0.27.26 Fixed some leagues
// @history	0.27.25 Fixed some leagues
// @history	0.27.24 Fixed some leagues
// @history	0.27.23 Fixed some leagues
// @history	0.27.22 Fixed some leagues
// @history	0.27.21 Fixed some leagues
// @history	0.27.20 Fixed some leagues
// @history	0.27.19 Fixed some leagues
// @history	0.27.18 Fixed some leagues
// @history	0.27.17 Fixed some leagues
// @history	0.27.16 Fixed some leagues
// @history	0.27.15 Fixed some leagues
// @history	0.27.14 Fixed some leagues
// @history	0.27.13 Fixed some leagues
// @history	0.27.12 Fixed some leagues
// @history	0.27.11 Fixed some leagues
// @history	0.27.10 Fixed some leagues
// @history	0.27.9 	Fixed some leagues, learned some stuff :)
// @history	0.27.8 	Fixed some leagues
// @history	0.27.7 	Fixed some leagues
// @history	0.27.6 	Fixed some leagues
// @history	0.27.5 	Fixed some leagues
// @history	0.27.4 	Fixed some leagues
// @history	0.27.3 	Changed auto-updating script
// @history	0.27.2 	Fixed some leagues
// @history	0.27.1 	Fixed some leagues
// @history	0.27 	  Fixed some leagues
// @history	0.26 	  Fixed some leagues
// @history	0.25 	  Fixed some leagues
// @history	0.24 	  Fixed some leagues
// @history	0.23 	  Fixed some leagues
// @history	0.22 	  Fixed some leagues
// @history	0.21	  Added Auto updater, fixed some leagues
// @history	0.10	  Initial release
//
// ==/UserScript==
//

/***********************************************************************
TODO: 0) learn JavaScript
      1) disconnect from league "code" and attach to league name, 
         in other words, find label by league name and (un)check 
         box that is right above it
      2) set preferences in form of "league name : true/false", with 
         adding new without overwriting existing
      3) make freakin' user interface, with continents & countries
         OR
         use futbol24 so when u check box it will automatically be
         stored in prefs, so basically u initially get my preset and 
         gradually make yours
      
      HELP! :)
***********************************************************************/


autoUpdate (71722, "0.27.36");

var lige = {
	//18732 : 'AFC AFC Cup',
	23190 : 'AFC Asian Champions League',
	20529 : 'AFC Asian Cup',
	//23207 : 'AFC AFC Cup',
	//22619 : 'AFC Challenge Cup',
	//16968 : 'AFC Gulf Clubs Championship',
	21988 : 'AFC Gulf Cup',
	//24271 : 'AFC U19 Champ Qual',
	//23220 : 'AFC Women U16 Championship',
	//26253 : 'AFC Southeast Asian Games',
	//21668 : 'Albania Super League',
	//22009 : 'Algeria Division 1',
	191 : 'Argentina Primera Division',
	//21451 :'Argentina Nacional B',
	//20327 : 'Armenia Premier League',
	//20487 : 'Armenia First League',
	24604 : 'Australia A-League',
	//21960 : 'Australia Victorian Premier League',
	//18718 : 'Australia Brisbane Premier League',
	25003 : 'Austria Bundesliga',
	25004 : 'Austria Erste Division',
	//21369 : 'Austria Regionalliga Mitte',
	//21368 : 'Austria Regionalliga West',
	//25006 : 'Austria Regionalliga Ost',
	25597 : 'Austria OFB Pokal',
	//21711 : 'Azerbaijan Premier League',
	//17787 : 'Azerbaijan Kubok',
	//26231 : 'Bahrain Premier League',
	//23531 : 'Belarus Vyscha Liga',
	//16791 : 'Belarus Kubok',
	24979 : 'Belgium Jupiler Pro League',
	25212 : 'Belgium Exqi League',
	25804 : 'Belgium Beker van Belgie',
	24544 : 'Belgium Super Cup',
	//19701 : 'Bolivia Liga de Fútbol Prof',
	//21445 : 'Bosnia Premijer Liga',
	//17734 : 'Bosnia Kup BiH',
	361 : 'Brasil Série A',
	362 : 'Brasil Série B',
	//20543 : 'Brasil Série C',
	//21033 : 'Brasil Série D',
	26443 : 'Brasil Carioca',
	26316 : 'Brasil Paulista',
	//26506 : 'Brasil Alagoano',
	//26458 : 'Brasil Baiano',
	//26490 : 'Brasil Catarinense',
	//26418 : 'Brasil Cearense',
	//22845 : 'Brasil Gaúcho',
	//26637 : 'Brasil Goiano',
	//26522 : 'Brasil Maranhense',
	//26671 : 'Brasil Mato-grossense',
	//26191 : 'Brasil Paraense',
	//26816 : 'Brasil Paranaense',
	//18778 : 'Brasil Pernambucano',
	//26435 : 'Brasil Potiguar',
	//21010 : 'Brasil Campeonato do Nordeste',
	364 : 'Brasil Copa do Brasil',
	//21158 : 'Bulgaria A Grupa',
	//17961 : 'Bulgaria Cup',
	//25464 : 'Bulgaria Super Cup',
	26897 : 'CAF African Nations Cup',
	23174 : 'CAF Champions League',
	//21890 : 'CAF Confederation Cup',
	5 : 'CAF Nations Cup Qual.',
	23262 : 'CAF African Olympic Qualifiers',
	//20383 : 'Canada Canadian Soccer League',
	//19919 : 'Canada Canadian Championship',
	397 : 'Chile Primera Division',
	//19651 : 'Chile Primera B',
	//24663 : 'Chile Copa Chile',
	//20129 : 'China Super League',
	//20130 : 'China League One',
	//19744 : 'Colombia Primera A',
	//19749 : 'Colombia Primera B',
	//21892 : 'Colombia Copa Colombia',
	24816 : 'CONCACAF Champions League',
	24096 : 'CONCACAF Gold Cup',
	20921 : 'CONCACAF North American SuperLiga',
	23229 : 'CONCACAF UNCAF Nations Cup',
	244 : 'CONMEBOL Copa Libertadores',
	24465 : 'CONMEBOL Copa Sudamericana',
	24416 : 'CONMEBOL Recopa',
	22772 : 'CONMEBOL Copa America',
	//24733 : 'CONMEBOL Copa Libertadores Sub 20',
	//21507 : 'Costa Rica Primera División',
	24985 : 'Croatia 1. HNL',
	//21578 : 'Croatia 2.HNL',
	25819 : 'Croatia Kup',
	25229 : 'Cyprus 1. Division',
	//25306 : 'Cyprus B Kategoria',
	25825 : 'Cyprus Cup',
	25614 : 'Cyprus Supercup',
	25091 : 'Czech Rep. Gambrinus Liga',
	//21371 : 'Czech Rep. Druha Liga',
	//21392 : 'Czech Rep. MSFL',
	//21393 : 'Czech Rep. ČFL',
	25641 : 'Czech Rep. Pohar CMFS',
	24671 : 'Denmark Superligaen',
	25133 : 'Denmark 1. Division',
	//21373 : 'Denmark 2. Division East',
	//21374 : 'Denmark 2. Division West',
	25633 : 'Denmark DBUs Landspokal',
	//21429 : 'Ecuador Campeonato Serie A',
	//21619 : 'Egypt Premier',
	//19612 : 'Egypt Egypt Cup',
	//21663 : 'El Salvador Primera Division',
	24909 : 'England Premier League',
	24910 : 'England Championship',
	24913 : 'England League One',
	24916 : 'England League Two',
	25161 : 'England Conference',
	//21432 : 'England Conference North',
	//21433 : 'England Conference South',
	//21667 : 'England Isthmian Premier (Ryman)',
	//21616 : 'England Northern Premier (Unibond)',
	//21615 : 'England Southern Premier',
	26213 : 'England FA Cup',
	24766 : 'England Carling Cup',
	26616 : 'England FA Trophy',
	25713 : 'England Johnstone\'s Paint Trophy',
	//12954 : 'England Premier Reserve League',
	24497 : 'England FA Community Shield',
	//19853 : 'Estonia Meistriliiga',
	//17544 : 'Estonia Eesti Karikas',
	//20106 : 'Faroe Islands Formuladeildin',
	18653 : 'FIFA World Cup',
	26542 : 'FIFA Club World Championship',
	//24306 : 'FIFA U-17 World Cup',
	//24234 : 'FIFA U-20 World Cup',
	//22980 : 'FIFA Women World Cup',
	24085 : 'FIFA WC 2014 Qual. Asia',
	24645 : 'FIFA WC 2014 Qual. CONCACAF',
	26121 : 'FIFA WC 2014 Qual. Eliminatoria',
	26290 : 'FIFA WC 2010 Qual. Africa',
	//17196 : 'FIFA Women 2011 WC Qual. Europe',
	322 : 'Finland Veikkausliiga',
	323 : 'Finland Ykkonen',
	326 : 'Finland Kakkonen',
	23911 : 'Finland Suomen Cup',
	26942 : 'Finland Liiga Cup',
	24748 : 'France Ligue 1',
	24749 : 'France Ligue 2',
	25393 : 'France National',
	26377 : 'France Coupe de France',
	25076 : 'France Coupe de la Ligue',
	24554 : 'France Trophée des Champions',
	//21524 : 'FYR Macedonia Prva liga',
	//17842 : 'FYR Macedonia Kup na Makedonija',
	//21666 : 'Georgia Umaglesi Liga',
	//25729 : 'Georgia Pirveli Liga',
	24974 : 'Germany Bundesliga',
	24976 : 'Germany 2. Bundesliga',
	24978 : 'Germany 3. Liga',
	//21549 : 'Germany Regionalliga Nord',
	//21550 : 'Germany Regionalliga Sud',
	//21551 : 'Germany Regionalliga West',
	//21741 : 'Germany Oberliga Nordrhein-Westfalen', 
 	//21581 : 'Germany NOFV-Oberliga Süd', 
	//21582 : 'Germany NOFV-Oberliga Nord', 
	//21305 : 'Germany Oberliga Bayern', 
	//21525 : 'Germany Oberliga Niedersachsen', 
	//21404 : 'Germany Oberliga Hessen', 
	//21742 : 'Germany Oberliga Schleswig-Holstein', 
	//21405 : 'Germany Oberliga Hamburg', 
	//21681 : 'Germany Oberliga Baden-Württemberg', 
	//21584 : 'Germany Oberliga Süd-West', 
	//21583 : 'Germany Oberliga Bremen',
	24750 : 'Germany DFB Pokal',
	24552 : 'Germany SuperCup',
	//26026 : 'Ghana Premier League',
	25732 : 'Greece Super League',
	//16501 : 'Greece Ethniki B',
	26259 : 'Greece Greece Cup',
	//21561 : 'Guatemala Primera Division A',
	24988 : 'Holland Eredivisie',
	25242 : 'Holland Eerste Divisie',
	25868 : 'Holland KNVB Beker',
	24496 : 'Holland Supercup',
	//21672 : 'Honduras Liga Nacional de Fútbol',
	//17404 : 'Hong Kong First Division',
	25107 : 'Hungary NB I',
	25771 : 'Hungary Liga Kupa',
	25902 : 'Hungary Magyar Kupa',
	24927 : 'Hungary Szuperkupa',
	329 : 'Iceland Premier',
	//19860 : 'Iceland 1. Division',
	24216 : 'Iceland VISA Bikar',
	27363 : 'Iceland League Cup',
	//16199 : 'India I-League',
	//26478 : 'Indonesia Liga Primer Indonesia',
	22340 : 'International Baltic League',
	23236 : 'International Carling Nations Cup',
	472 : 'International Club Friendly',
	471 : 'International Friendly',
	//19056 : 'International Friendly U16',
	//19055 : 'International Friendly U17',
	//19054 : 'International Friendly U18',
	//19053 : 'International Friendly U19',
	23335 : 'International Friendly U21',
	//23336 : 'International Friendly U23',
	//19057 : 'International Friendly Women',
	24429 : 'International Toulon Tournament',
	//26342 : 'International Pan Arab Games',
	//21618 : 'Iran IPL',
	//18928 : 'Iran Azadegan League',
	//19906 : 'Iran Hazfi Cup',
	//26233 : 'Iraq Premier League',
	27226 : 'Ireland Premier League',
	27228 : 'Ireland First Division',
	24486 : 'Ireland FAI Cup',
	23873 : 'Ireland League Cup',
	23616: 'Ireland Setanta Cup',
	//21670 : 'Israel Premier League',
	//18298 : 'Israel Liga Alef',
	//21671 : 'Israel Liga Leumit',
	//19511 : 'Israel State Cup',
	25547 : 'Italy Serie A',
	25625 : 'Italy Serie B',
	21884 : 'Italy Lega Pro 1a Divisione',
	//17223 : 'Italy Lega Pro 2a Divisione',
  	25588 : 'Italy Coppa Italia',
  	24640 : 'Italy Supercup',
	//25786 : 'Italy Campionato Primavera',
	430 : 'Japan J-League',
	431 : 'Japan J2-League',
	//19660 : 'Japan Football League',
	//23797 : 'Japan Nabisco Cup',
	26128 : 'Japan Emperor Cup',
	//21929 : 'Jordan Premier League',
	//20337 : 'Jordan Jordan Cup',
	//25070 : 'Jordan Shield Cup',
	//19921 : 'Kazakhstan Super League',
	//19864 : 'Korea Rep. K-League',
	//19865 : 'Korea Rep. K3 League',
	//19869 : 'Korea Rep. National League',
	//21746 : 'Korea Rep. National League Cup',
	//20570 : 'Korea Rep. Peace Cup',
	//21795 : 'Kuwait Premier',
	//20425 : 'Latvia Virsliga',
	//20423 : 'Latvia Latvijas Kauss',
	//25649 : 'Lebanon Premier League',
	//20326 : 'Lithuania A Lyga',
	//18271 : 'Lithuania Lietuvos Taurė',
	//21406 : 'Luxemburg Nationaldivision',
	//19005 : 'Malaysia Premier League',
	//19004 : 'Malaysia Super League',
	//16760 : 'Malta Premier League',
	//25456 : 'Malta First Division',
	24681 : 'Mexico Primera Division',
	//21007 : 'Mexico Liga de Ascenso',
	//21391 : 'Moldova Divizia Nationala',
	//21866 : 'Moldova Divizia A',
	//25146 : 'Moldova Super Cup',
	//21326 : 'Montenegro Prva Crnogorska Liga',
	//18274 : 'Montenegro Crnogorski Kup',
	//21807 : 'Morocco Botola GNF1',
	//21985 : 'Nigeria Premier League',
	//21320 : 'N. Ireland Premier League',
	//19923 : 'N. Ireland Irish Cup',
	//21764 : 'N. Ireland League Cup',
	23320 : 'Norway Tippeligaen',
	23321 : 'Norway 1. Division',
	277 : 'Norway 2. Div Avd 1',
	278 : 'Norway 2. Div Avd 2',
	279 : 'Norway 2. Div Avd 3',
	280 : 'Norway 2. Div Avd 4',
	281 : 'Norway NM Cupen',
	//17253 : 'OFC Oceania Champions League',
	//21087 : 'Paraguay Division Profesional',
	//19762 : 'Peru Primera División',
	24955 : 'Poland Ekstraklasa',
	//21394 : 'Poland 1. Liga',
	//21513 : 'Poland II Liga East',
	//21512 : 'Poland II Liga West',
	25374 : 'Poland Puchar Polski',
	25127 : 'Portugal Super Liga',
	25128 : 'Portugal Liga de Honra',
	25498 : 'Portugal League Cup',
	25491 : 'Portugal Taca de Portugal',
	24553 : 'Portugal Super Cup',
	//20477 : 'Qatar Prince Cup',
	//22002 : 'Qatar Sheikh Jasim Cup',
	25173 : 'Romania Divizia A',
	//16698 : 'Romania Liga 2 Serie A',
	//16699 : 'Romania Liga 2 Serie B',
	22090 : 'Romania Super Cup',
	//25928 : 'Romania Cupa Romaniei',
	23408 : 'Russia Premier Liga',
	//23720 : 'Russia 1. Division',
	//24045 : 'Russia 2. Division West',
	//24043 : 'Russia 2. Division Ural-Povolzhye',
	//24042 : 'Russia 2. Division East',
	//20116 : 'Russia Turnir Dublerov',
	23993 : 'Russia Kubok',
	23849 : 'Russia Super Cup',
	//21327 : 'Saudi Arabia Saudi Professional League',
	//16946 : 'Saudi Arabia 1st Division',
	//20363 : 'Saudi Arabia Champions Cup',
	//26067 : 'Saudi Arabia Prince Cup',
	24991 : 'Scotland Premier League',
	24994 : 'Scotland Division 1',
	24997 : 'Scotland Division 2',
	25000 : 'Scotland Division 3',
	26169 : 'Scotland FA Cup',
	24855 : 'Scotland League Cup',
	24708 : 'Scotland Challenge Cup',
	24885 : 'Serbia Superliga',
	21396 : 'Serbia Prva Liga',
	26013 : 'Serbia Kup',
	19768 : 'Singapore S-League',
	//20887 : 'Singapore S-Cup',
	//25299 : 'Singapore League Cup',
	25068 : 'Slovakia Corgon Liga',
	//21552 : 'Slovakia I. liga',
	25878 : 'Slovakia Slovensky Pohar',
	25129 : 'Slovenia Prva Liga',
	//21553 : 'Slovenia 2. Liga',
	25746 : 'Slovenia Hervis Pokal',
	25002 : 'Slovenia Supercup',
	//21665 : 'South Africa Premier Soccer League',
	//25512 : 'South Africa National First Division',
	//19044 : 'South Africa Nedbank Cup',
	//26238 : 'South Africa Telkom Knockout',
	25204 : 'Spain Primera Division',
	126 : 'Spain Segunda Division',
	//16905 : 'Spain Segunda B Grupo 1',
	//16906 : 'Spain Segunda B Grupo 2',
	//16907 : 'Spain Segunda B Grupo 3',
	//16908 : 'Spain Segunda B Grupo 4',
	25576 : 'Spain Copa del Rey',
	//26246 : 'Spain Copa Federación',
	24495 : 'Spain Super Copa',
	23158 : 'Sweden Allsvenskan',
	341 : 'Sweden Superettan',
	342 : 'Sweden Div 1 Norra',
	343 : 'Sweden Div 1 Sodra',
	//19037 : 'Sweden Div 2 Norra Svealand',
	//19038 : 'Sweden Div 2 Norrland',
	//19039 : 'Sweden Div 2 Östra Götaland',
	//19040 : 'Sweden Div 2 Södra Götaland',
	//19115 : 'Sweden Div 2 Södra Svealand',
	//19116 : 'Sweden Div 2 Västra Götaland',
	23919 : 'Sweden Svenska Cupen',
	24883 : 'Switzerland Super League',
	25084 : 'Switzerland Challenge League',
	25884 : 'Switzerland Swiss Cup',
	//18018 : 'Syria Premier',
	//18364 : 'Thailand Premier League',
	//23568 : 'Thailand Division 1',
	//21868 : 'Thailand FA Cup',
	//21444 : 'Tunisia Ligue Professionnelle 1',
	//18804 : 'Tunisia Coupe de Tunisie',
	25678 : 'Turkey Super Lig',
	25679 : 'Turkey TFF 1. Lig',
	//25753 : 'Turkey TFF 2. Lig',
	//25672 : 'Turkey TFF 3. Lig',
	26467 : 'Turkey Turkiye Kupasi',
	24747 : 'Turkey Super Cup',
	//21318 : 'UAE UAE Football League',
	//25764 : 'UAE UAE Federation Cup',
	24825 : 'UEFA Champions League',
	24886 : 'UEFA Europa League',
	24629 : 'UEFA Super Cup',
	676 : 'UEFA Euro Championship',
	21694 : 'UEFA Euro Champ Qualifiers',
	//17631 : 'UEFA Euro U17 Qual.',
	//20459 : 'UEFA Euro U17',
	//22241 : 'UEFA Euro U19 Qual.',
	23927 : 'UEFA Euro U21 Qual.',
	22571 : 'UEFA Euro U21',
	//21540 : 'UEFA Women\'s Champions League',
	//704 : 'UEFA Women Euro Qualifiers',
	//17322 : 'Uruguay Primera Division',
	24873 : 'Ukraine Vyscha Liga',
	//21434 : 'Ukraine Persha Liga',
	//24908 : 'Ukraine Youth Championship',
	21767 : 'Ukraine Kubok',
	24874 : 'Ukraine Super Cup',
	464 : 'United States MLS',
	26203 : 'United States MLS Cup Playoffs',
	//23750 : 'United States USL Pro',
	//20428 : 'United States USL2',
	//19975 : 'United States USSF Division 2',
	//23725 : 'United States US Open Cup',
	//21882 : 'Uruguay Primera Division',
	//19922 : 'Uzbekistan Professional Football League',
	//21625 : 'Venezuela Primera Division',
	//25894 : 'Venezuela Copa Venezuela',
	//18497 : 'Vietnam V-League',
	25093 : 'Wales Premier',
	22489 : 'Wales FAW Welsh Cup',
	25780 : 'Wales League Cup',
	//23868 : 'Zimbabwe Premier League'
};


var chk = new Array();
chk = document.getElementsByName("o");

for (var i=0; i < chk.length; i++){
	if (lige[chk[i].value] !== undefined){
		chk[i].checked = true ;
	}
}