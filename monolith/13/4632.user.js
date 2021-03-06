// ---*GNU*---
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// http://www.gnu.org/copyleft/gpl.html
// ---*---

// ==UserScript==
// @name            blirk. - craig's list redesign
// @namespace       http://www.blirk.com
// @description     An edit of another style to make it a little more Web 2.0ish. Uses blirk.com styles.
// @include         http://*.craigslist.tld/*
// @version         1.0
// ==/UserScript==

// Original design by Ryan Sims of Thebignoob.com
// Edit of http://corhol.com/craigslist/

// function for appending CSS to document
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

if( window.location.pathname == "/" ) {

    // gets variables from page
    sCity = document.getElementsByTagName('b')[3].innerHTML;
    sClassifieds = document.getElementsByTagName('a')[1].href;
    sAreaId = document.getElementsByTagName('input')[0].value;

    // gives us a clean slate to work with
    document.getElementsByTagName('head')[0].removeChild(document.getElementsByTagName('style')[0]);
    document.getElementsByTagName('head')[0].removeChild(document.getElementsByTagName('link')[0]);
    document.getElementsByTagName('body')[0].innerHTML = '';

    // generates html and replaces page
    var sHtml;
    sHtml  = '<div id="search">';
    sHtml += '<h3><a href="' + sClassifieds + '">post to classifieds</a></h3>';
    sHtml += '<form action="/cgi-bin/search" method="get"><input type="hidden" name="areaID" value="' + sAreaId + '"><input type="hidden" name="subAreaID" value="">';
    sHtml += '<input type="text" id="query" name="query" value="search" style="height:22px;color:#333;" /> ';
    sHtml += '<select name="catAbbreviation"><option disabled selected value="">choose type</option><option value="ccc">community</option><option value="eee">events</option><option value="ggg">gigs</option><option value="hhh">housing</option><option value="jjj">jobs</option><option value="ppp">personals</option><option value="res">resumes</option><option value="sss">for sale</option><option value="bbb">services</option></select> ';
    sHtml += '<button type="submit" style="height:27px;color:#33cc66;padding:0px;">GO</button></form>';
    sHtml += '<p><a href="/about/help/">help</a> <a href="/cgi-bin/emailSubscriber.cgi">subscriptions</a></p> <a href="http://www.blirk.com" target="_blank"><img src="http://www.blirk.com/cl/logo.jpg" style="position:absolute;top:7px;right:10px;" border="0" title="blirk. - the creator of this skin."</a>';
    sHtml += '</div>';
    sHtml += '<div id="main">';
    sHtml += '<h1 title="Craigslist"><span>craigslist</span> <em>' + sCity + '</em></h1>';
    sHtml += '<div id="wrapper">';
    sHtml += '<div class="l">';
    sHtml += '<h2>event calendar</h2>';
    sHtml += '<h4><a href="/cal/">see all</a></h4>';
    function leadingZero(nr) { if (nr < 10) nr = "0" + nr; return nr; }
    function buildCal(m, y, cM, cH, cDW, cD, brdr){
        var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
        var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
        sMonth = leadingZero(m);
        var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
        oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
        var todaydate=new Date() //DD added
        var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
        dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
        var t='<table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0">';
        t+='<tr align="center">';
    	for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
        t+='</tr><tr align="center">';
    	for(i=1;i<=35;i++){
    	var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
    	if (x==scanfortoday) { //DD added
        t+='<td id="today" class="'+cD+'"><a href="/cal/index' + y+sMonth+x + '.html">'+x+'</a></td>';}
    	else {
    	t+='<td class="'+cD+'"><a href="/cal/index' + y+sMonth+x + '.html">'+x+'</a></td>'; }
    	if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
    	}
    	return t+='</tr></table>';
    	}
    var todaydate = new Date();
    var curmonth = todaydate.getMonth()+1; //get current month (1-12)
    var curyear = todaydate.getFullYear(); //get current year
    sHtml += buildCal(curmonth ,curyear, "events", "", "days", "", 0);
    sHtml += '<h2>cities</h2>';
    sHtml += '<p class="highlight"><a href="#all_cities">see all cities/areas</a></p>';
    sHtml += '<h4>popular</h4>';
    sHtml += '<ul style="border:0px">';
    sHtml += '<li><a href="http://boston.craigslist.org/">Boston</a></li>';
    sHtml += '<li><a href="http://chicago.craigslist.org/">Chicago</a></li>';
    sHtml += '<li><a href="http://denver.craigslist.org/">Denver</a></li>';
    sHtml += '<li><a href="http://losangeles.craigslist.org/">Los Angeles</a></li>';
    sHtml += '<li><a href="http://neworleans.craigslist.org/">New Orleans</a></li>';
    sHtml += '<li><a href="http://newyork.craigslist.org/">New York</a></li>';
    sHtml += '<li><a href="http://portland.craigslist.org/">Portland</a></li>';
    sHtml += '<li><a href="http://sacramento.craigslist.org/">Sacramento</a></li>';
    sHtml += '<li><a href="http://sandiego.craigslist.org/">San Diego</a></li>';
    sHtml += '<li><a href="http://santafe.craigslist.org/">Santa Fe</a></li>';
    sHtml += '<li><a href="http://www.craigslist.org/">San Francisco Bay</a></li>';
    sHtml += '<li><a href="http://seattle.craigslist.org/">Seattle</a></li>';
    sHtml += '<li><a href="http://washingtondc.craigslist.org/">Washington D.C.</a></li>';
    sHtml += '</ul>';
    sHtml += '</div>';
    sHtml += '<div class="m">';
    sHtml += '<h2 style="padding-left: 10px;">classifieds</h2>';
    sHtml += '<div class="_l">';
    sHtml += '<h6><a href="/ccc/">community</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/act/">Activities</a></li>';
    sHtml += '<li><a href="/ats/">Artists</a></li>';
    sHtml += '<li><a href="/kid/">Childcare</a></li>';
    sHtml += '<li><a href="/com/">General</a></li>';
    sHtml += '<li><a href="/grp/">Groups</a></li>';
    sHtml += '<li><a href="/pet/">Pets</a></li>';
    sHtml += '<li><a href="/cal/">Events</a></li>';
    sHtml += '<li><a href="/laf/">Lost & Found</a></li>';
    sHtml += '<li><a href="/muc/">Musicians</a></li>';
    sHtml += '<li><a href="/vnn/">News & Views</a></li>';
    sHtml += '<li><a href="/pol/">Politics</a></li>';
    sHtml += '<li><a href="/rid/">Rideshare</a></li>';
    sHtml += '<li><a href="/vol/">Volunteers</a></li>';
    sHtml += '<li><a href="/cal/#classes">Classes</a></li>';
    sHtml += '</ul>';

    sHtml += '<h6><a href="#">personals</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/stp/">strictly platonic</a></li>';
    sHtml += '<li><a href="/w4w/">women seeking women</a></li>';
    sHtml += '<li><a href="/w4m/">women seeking men</a></li>';
    sHtml += '<li><a href="/m4w/">men seeking women</a></li>';
    sHtml += '<li><a href="/cgi-bin/personals.cgi?category=m4m&SID=">men seeking men</a></li>';
    sHtml += '<li><a href="/msr/">misc romance</a></li>';
    sHtml += '<li><a href="/cgi-bin/personals.cgi?category=cas&SID=">casual encounters</a></li>';
    sHtml += '<li><a href="/mis/">mixed connections</a></li>';
    sHtml += '<li><a href="/cgi-bin/personals.cgi?category=rnr&SID=">rants and raves</a></li>';
    sHtml += '</ul>';

    sHtml += '<h6><a href="/bbb/">services</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/cps/">Computer</a></li>';
    sHtml += '<li><a href="/crs/">Creative</a></li>';
    sHtml += '<li><a href="/cgi-bin/personals.cgi?category=ers&SID=">Erotic</a></li>';
    sHtml += '<li><a href="/evs/">Event</a></li>';
    sHtml += '<li><a href="/fns/">Financial</a></li>';
    sHtml += '<li><a href="/lgs/">Legal</a></li>';
    sHtml += '<li><a href="/lss/">Lessons</a></li>';
    sHtml += '<li><a href="/aos/">Automotive</a></li>';
    sHtml += '<li><a href="/hss/">Household</a></li>';
    sHtml += '<li><a href="/lbs/">Labor / Moving</a></li>';
    sHtml += '<li><a href="/sks/">Skilled Trade</a></li>';
    sHtml += '<li><a href="/rts/">Real Estate</a></li>';
    sHtml += '<li><a href="/biz/">Small Biz Ads</a></li>';
    sHtml += '<li><a href="/ths/">Therapeutic</a></li>';
    sHtml += '</ul>';
    sHtml += '</div>';
	
    sHtml += '<div class="_m">';
    sHtml += '<h6><a href="/hhh/">housing</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/apa/">Apartments / Housing</a></li>';
    sHtml += '<li><a href="/roo/">Rooms / Shared</a></li>';
    sHtml += '<li><a href="/sub/">Sublets / Temporary</a></li>';
    sHtml += '<li><a href="/hsw/">Housing wanted</a></li>';
    sHtml += '<li><a href="/swp/">Housing swap</a></li>';
    sHtml += '<li><a href="/vac/">Vacation rentals</a></li>';
    sHtml += '<li><a href="/prk/">Parking / Storage</a></li>';
    sHtml += '<li><a href="/off/">Office / Commercial</a></li>';
    sHtml += '<li><a href="/rfs/">Real estate for sale</a></li>';
    sHtml += '</ul>';

    sHtml += '<h6><a href="/sss/">for sale</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/bar/">Barter</a></li>';
    sHtml += '<li><a href="/bik/">Bikes</a></li>';
    sHtml += '<li><a href="/boa/">Boats</a></li>';
    sHtml += '<li><a href="/bks/">Books</a></li>';
    sHtml += '<li><a href="/zip/">Free</a></li>';
    sHtml += '<li><a href="/fur/">Furniture</a></li>';
    sHtml += '<li><a href="/for/">General</a></li>';
    sHtml += '<li><a href="/jwl/">Jewelry</a></li>';
    sHtml += '<li><a href="/spo/">Sporting</a></li>';
    sHtml += '<li><a href="/tix/">Tickets</a></li>';
    sHtml += '<li><a href="/tls/">Tools</a></li>';
    sHtml += '<li><a href="/wan/">Wanted</a></li>';
    sHtml += '<li><a href="/pts/">Auto Parts</a></li>';
    sHtml += '<li><a href="/bab/">Baby / Kid Stuff</a></li>';
    sHtml += '<li><a href="/car/">Cars / Trucks</a></li>';
    sHtml += '<li><a href="/emd/">CD / DVD / VHS</a></li>';
    sHtml += '<li><a href="/clo/">Clothing / Accessories</a></li>';
    sHtml += '<li><a href="/clt/">Collectibles</a></li>';
    sHtml += '<li><a href="/sys/">Computer</a></li>';
    sHtml += '<li><a href="/ele/">Electronics</a></li>';
    sHtml += '<li><a href="/gms/">Garage Sale</a></li>';
    sHtml += '<li><a href="/hsh/">Household</a></li>';
    sHtml += '<li><a href="/mcy/">Motorcycles</a></li>';
    sHtml += '<li><a href="/msg/">Musical Instruments</a></li>';
    sHtml += '</ul>';
    sHtml += '</div>';
	
    sHtml += '<div class="_r">';
    sHtml += '<h6><a href="/jjj/">jobs</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/acc/">Accounting / Finance</a></li>';
    sHtml += '<li><a href="/ofc/">Admin / Office</a></li>';
    sHtml += '<li><a href="/egr/">Arch / Engineering</a></li>';
    sHtml += '<li><a href="/med/">Art / Media / Design</a></li>';
    sHtml += '<li><a href="/sci/">Biotech / Science</a></li>';
    sHtml += '<li><a href="/bus/">Business / Management</a></li>';
    sHtml += '<li><a href="/csr/">Customer service</a></li>';
    sHtml += '<li><a href="/edu/">Education / Teaching</a></li>';
    sHtml += '<li><a href="/gov/">Government</a></li>';
    sHtml += '<li><a href="/hum/">Human resources</a></li>';
    sHtml += '<li><a href="/eng/">Internet engineering</a></li>';
    sHtml += '<li><a href="/lgl/">Legal / Paralegal</a></li>';
    sHtml += '<li><a href="/mar/">Marketing / Print / Ad</a></li>';
    sHtml += '<li><a href="/hea/">Medical / Health</a></li>';
    sHtml += '<li><a href="/npo/">Nonprofit Sector</a></li>';
    sHtml += '<li><a href="/ret/">Retail / Food / Hosp</a></li>';
    sHtml += '<li><a href="/sls/">Sales / Biz development</a></li>';
    sHtml += '<li><a href="/trd/">Skilled Trade / Craft</a></li>';
    sHtml += '<li><a href="/sof/">Software / QA / DBA</a></li>';
    sHtml += '<li><a href="/sad/">Systems / Networking</a></li>';
    sHtml += '<li><a href="/tch/">Technical Support</a></li>';
    sHtml += '<li><a href="/tfr/">TV / Film / Video</a></li>';
    sHtml += '<li><a href="/art/">Web / Info design</a></li>';
    sHtml += '<li><a href="/wri/">Writing / Editing</a></li>';
    sHtml += '<li><a href="/etc/">[etc]</a></li>';
    sHtml += '<li><a href="/cgi-bin/search?group=J&areaID=15&subAreaID=&areaAbbrev=aus&addFour=part-time&catAbbreviation=jjj">[part time]</a></li>';
    sHtml += '</ul>';

    sHtml += '<h6><a href="/ggg/">gigs</a></h6>';
    sHtml += '<ul>';
    sHtml += '<li><a href="/cpg/">Computer</a></li>';
    sHtml += '<li><a href="/crg/">Creative</a></li>';
    sHtml += '<li><a href="/cwg/">Crew</a></li>';
    sHtml += '<li><a href="/dmg/">Domestic</a></li>';
    sHtml += '<li><a href="/evg/">Event</a></li>';
    sHtml += '<li><a href="/lbg/">Labor</a></li>';
    sHtml += '<li><a href="/wrg/">Writing</a></li>';
    sHtml += '<li><a href="/tlg/">Talent</a></li>';
    sHtml += '<li><a href="/cgi-bin/personals.cgi?category=adg&SID=">Adult</a></li>';
    sHtml += '</ul>';

    sHtml += '<h2><a href="/res/">resumes</a></h2>';
    sHtml += '</div>';
    sHtml += '</div>';
    sHtml += '<div class="r">';
    sHtml += '<h2>interesting links</h2>';
    sHtml += '<ul style="border: 0px">';
    sHtml += '<li><a href="/about/fair.housing.html">"fair" housing lawsuit</a></li>';
    sHtml += '<li><a href="/about/help/katrina_aid.html">Katrina Relief</a></li>';
    sHtml += '<li><a href="/about/best/all/">best-of-craigslist</a></li>';
    sHtml += '<li><a href="/about/pr/factsheet.html">craigslist factsheet</a></li>';
    sHtml += '<li><a href="/about/job.boards.html">job boards compared</a></li>';
    sHtml += '<li><a href="http://24hoursoncraigslist.com/subs/nowplaying.html">craigslist movie & dvd</a></li>';
    sHtml += '<li><a href="http://www.cafepress.com/craigslist_sf">craigslist T-shirts</a></li>';
    sHtml += '<li><a href="http://www.cnewmark.com/">::: craig blog :::</a></li>';
    sHtml += '<li><a href="http://craigslistfoundation.org/">craigslist foundation</a></li>';
    sHtml += '<li><a href="/about/help/system-status.html">system status</a></li>';
    sHtml += '</ul>';
    sHtml += '<h2>discussion forums</h2>';
    if ( window.location.hostname == "www.craigslist.org" || window.location.hostname == "www.craigslist.com" ) { sUrl = 'forums.craigslist.org'; }
    else { sUrl = 'forums.' + window.location.hostname; }
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=49">arts</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=5">autos</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=88">beauty</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=34">comp</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=83">crafts</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=99">eco</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=90">educ</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=8">feedbk</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=41">film</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=92">fitness</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=64">fixit</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=22">food</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=85">games</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=54">garden</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=575">haiku</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=43">health</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=9">help</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=81">history</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=6">housing</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=7">jobs</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=52">katrina</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=73">legal</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=48">loc pol</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=72">m4m</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=53">money</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=24">music</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=60">night</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=501">npo</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=4">open</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=16">outdoor</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=50">over 50</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=39">parent</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=19">pefo</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=26">pets</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=71">philos</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=84">poc</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=20">politic</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=29">psych</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=46">queer</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=28">rofo</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=96">sci</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=89">selfem</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=91">shop</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=93">spirit</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=32">sports</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=21">testing</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=97">transg</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=95">transit</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=42">travel</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=98">tv</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=69">w4w</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=15">wed</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=94">women</a></p>';
    sHtml += '<p><a href="http://' + sUrl + '/?forumID=27">writers</a></p>';
    sHtml += '</div>';
    sHtml += '</div>';
    sHtml += '</div>';
    sHtml += '</div>';
    sHtml += '<div id="all_cities">';
    sHtml += '<h2>all cities / areas</h2>';
    sHtml += '<h5>USA</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://akroncanton.craigslist.org/">Akron / Canton</a></li>';
    sHtml += '<li><a href="http://albany.craigslist.org/">Albany</a></li>';
    sHtml += '<li><a href="http://albuquerque.craigslist.org/">Albuquerque</a></li>';
    sHtml += '<li><a href="http://allentown.craigslist.org/">Allentown</a></li>';
    sHtml += '<li><a href="http://amarillo.craigslist.org/">Amarillo</a></li>';
    sHtml += '<li><a href="http://anchorage.craigslist.org/">Anchorage</a></li>';
    sHtml += '<li><a href="http://annarbor.craigslist.org/">Ann Arbor</a></li>';
    sHtml += '<li><a href="http://appleton.craigslist.org/">Appleton / Oshkosh</a></li>';
    sHtml += '<li><a href="http://asheville.craigslist.org/">Asheville</a></li>';
    sHtml += '<li><a href="http://athens.craigslist.org/">Athens</a></li>';
    sHtml += '<li><a href="http://atlanta.craigslist.org/">Atlanta</a></li>';
    sHtml += '<li><a href="http://augusta.craigslist.org/">Augusta</a></li>';
    sHtml += '<li><a href="http://austin.craigslist.org/"><strong>Austin</strong></a></li>';
    sHtml += '<li><a href="http://bakersfield.craigslist.org/">Bakersfield</a></li>';
    sHtml += '<li><a href="http://baltimore.craigslist.org/">Baltimore</a></li>';
    sHtml += '<li><a href="http://batonrouge.craigslist.org/">Batonrouge</a></li>';
    sHtml += '<li><a href="http://beaumont.craigslist.org/">Beaumont / Port Arthur</a></li>';
    sHtml += '<li><a href="http://bellingham.craigslist.org/">Bellingham</a></li>';
    sHtml += '<li><a href="http://bend.craigslist.org/">Bend</a></li>';
    sHtml += '<li><a href="http://binghampton.craigslist.org/">Binghampton</a></li>';
    sHtml += '<li><a href="http://bham.craigslist.org/">Birmingham</a></li>';
    sHtml += '<li><a href="http://blacksburg.craigslist.org/">Blacksburg</a></li>';
    sHtml += '<li><a href="http://bloomington.craigslist.org/">Bloomington</a></li>';
    sHtml += '<li><a href="http://boise.craigslist.org/">Boise</a></li>';
    sHtml += '<li><a href="http://boston.craigslist.org/"><strong>Boston</strong></a></li>';
    sHtml += '<li><a href="http://brownsville.craigslist.org/">Brownsville</a></li>';
    sHtml += '<li><a href="http://buffalo.craigslist.org/">Buffalo</a></li>';
    sHtml += '<li><a href="http://burlington.craigslist.org/">Burlington</a></li>';
    sHtml += '<li><a href="http://chambana.craigslist.org/">Chambana</a></li>';
    sHtml += '<li><a href="http://capecod.craigslist.org/">Cape Cod</a></li>';
    sHtml += '<li><a href="http://charleston.craigslist.org/">Charleston</a></li>';
    sHtml += '<li><a href="http://charlotte.craigslist.org/">Charlotte</a></li>';
    sHtml += '<li><a href="http://charlottesville.craigslist.org/">Charlottesville</a></li>';
    sHtml += '<li><a href="http://chattanooga.craigslist.org/">Chattanooga</a></li>';
    sHtml += '<li><a href="http://chicago.craigslist.org/"><strong>Chicago</strong></a></li>';
    sHtml += '<li><a href="http://chico.craigslist.org/">Chico</a></li>';
    sHtml += '<li><a href="http://cincinnati.craigslist.org/">Cincinnati</a></li>';
    sHtml += '<li><a href="http://cleveland.craigslist.org/">Cleveland</a></li>';
    sHtml += '<li><a href="http://cosprings.craigslist.org/">Co Springs</a></li>';
    sHtml += '<li><a href="http://columbia.craigslist.org/">Columbia</a></li>';
    sHtml += '<li><a href="http://columbus.craigslist.org/">Columbus</a></li>';
    sHtml += '<li><a href="http://corpuschristi.craigslist.org/">Corpus Christi</a></li>';
    sHtml += '<li><a href="http://dallas.craigslist.org/">Dallas</a></li>';
    sHtml += '<li><a href="http://dayton.craigslist.org/">Dayton</a></li>';
    sHtml += '<li><a href="http://daytona.craigslist.org/">Daytona Beach</a></li>';
    sHtml += '<li><a href="http://delaware.craigslist.org/">Delaware</a></li>';
    sHtml += '<li><a href="http://denver.craigslist.org/"><strong>Denver</strong></a></li>';
    sHtml += '<li><a href="http://desmoines.craigslist.org/">Desmoines</a></li>';
    sHtml += '<li><a href="http://detroit.craigslist.org/">Detroit</a></li>';
    sHtml += '<li><a href="http://duluth.craigslist.org/">Duluth</a></li>';
    sHtml += '<li><a href="http://eauclaire.craigslist.org/">Eau Claire</a></li>';
    sHtml += '<li><a href="http://elpaso.craigslist.org/">El Paso</a></li>';
    sHtml += '<li><a href="http://erie.craigslist.org/">Erie</a></li>';
    sHtml += '<li><a href="http://eugene.craigslist.org/">Eugene</a></li>';
    sHtml += '<li><a href="http://evansville.craigslist.org/">Evansville</a></li>';
    sHtml += '<li><a href="http://fayar.craigslist.org/">Fayetteville (AR)</a></li>';
    sHtml += '<li><a href="http://fayetteville.craigslist.org/">Fayetteville (NC)</a></li>';
    sHtml += '<li><a href="http://flagstaff.craigslist.org/">Flagstaff / Sedona</a></li>';
    sHtml += '<li><a href="http://flint.craigslist.org/">Flint</a></li>';
    sHtml += '<li><a href="http://fortcollins.craigslist.org/">Fort Collins</a></li>';
    sHtml += '<li><a href="http://fortlauderdale.craigslist.org/">Fort Lauderdale</a></li>';
    sHtml += '<li><a href="http://fortmyers.craigslist.org/">Fort Myers</a></li>';
    sHtml += '<li><a href="http://fortwayne.craigslist.org/">Fort Wayne</a></li>';
    sHtml += '<li><a href="http://fresno.craigslist.org/">Fresno</a></li>';
    sHtml += '<li><a href="http://gainesville.craigslist.org/">Gainesville</a></li>';
    sHtml += '<li><a href="http://grandrapids.craigslist.org/">Grand Rapids</a></li>';
    sHtml += '<li><a href="http://greenbay.craigslist.org/">Green Bay</a></li>';
    sHtml += '<li><a href="http://greensboro.craigslist.org/">Greensboro</a></li>';
    sHtml += '<li><a href="http://greenville.craigslist.org/">Greenville</a></li>';
    sHtml += '<li><a href="http://gulfport.craigslist.org/">Gulfport / Biloxi</a></li>';
    sHtml += '<li><a href="http://harrisburg.craigslist.org/">Harrisburg</a></li>';
    sHtml += '<li><a href="http://hartford.craigslist.org/">Hartford</a></li>';
    sHtml += '<li><a href="http://honolulu.craigslist.org/">Honolulu</a></li>';
    sHtml += '<li><a href="http://houston.craigslist.org/">Houston</a></li>';
    sHtml += '<li><a href="http://hudsonvalley.craigslist.org/">Hudson Valley</a></li>';
    sHtml += '<li><a href="http://humboldt.craigslist.org/">Humboldt</a></li>';
    sHtml += '<li><a href="http://huntsville.craigslist.org/">Huntsville</a></li>';
    sHtml += '<li><a href="http://indianapolis.craigslist.org/">Indianapolis</a></li>';
    sHtml += '<li><a href="http://inlandempire.craigslist.org/">Inland Emp</a></li>';
    sHtml += '<li><a href="http://ithaca.craigslist.org/">Ithaca</a></li>';
    sHtml += '<li><a href="http://jackson.craigslist.org/">Jackson</a></li>';
    sHtml += '<li><a href="http://jacksonville.craigslist.org/">Jacksonville</a></li>';
    sHtml += '<li><a href="http://kalamazoo.craigslist.org/">Kalamazoo</a></li>';
    sHtml += '<li><a href="http://kansascity.craigslist.org/">Kansas City</a></li>';
    sHtml += '<li><a href="http://knoxville.craigslist.org/">Knoxville</a></li>';
    sHtml += '<li><a href="http://lafayette.craigslist.org/">Lafayette</a></li>';
    sHtml += '<li><a href="http://lakecharles.craigslist.org/">Lake Charles</a></li>';
    sHtml += '<li><a href="http://lancaster.craigslist.org/">Lancaster</a></li>';
    sHtml += '<li><a href="http://lansing.craigslist.org/">Lansing</a></li>';
    sHtml += '<li><a href="http://laredo.craigslist.org/">Laredo</a></li>';
    sHtml += '<li><a href="http://lasvegas.craigslist.org/">Las Vegas</a></li>';
    sHtml += '<li><a href="http://lexington.craigslist.org/">Lexington</a></li>';
    sHtml += '<li><a href="http://lincoln.craigslist.org/">Lincoln</a></li>';
    sHtml += '<li><a href="http://littlerock.craigslist.org/">Little Rock</a></li>';
    sHtml += '<li><a href="http://longisland.craigslist.org/">Long Island</a></li>';
    sHtml += '<li><a href="http://losangeles.craigslist.org/"><strong>Los Angeles</strong></a></li>';
    sHtml += '<li><a href="http://louisville.craigslist.org/">Louisville</a></li>';
    sHtml += '<li><a href="http://lubbock.craigslist.org/">Lubbock</a></li>';
    sHtml += '<li><a href="http://macon.craigslist.org/">Macon</a></li>';
    sHtml += '<li><a href="http://madison.craigslist.org/">Madison</a></li>';
    sHtml += '<li><a href="http://maine.craigslist.org/">Maine</a></li>';
    sHtml += '<li><a href="http://mcallen.craigslist.org/">Mcallen / Edinburg</a></li>';
    sHtml += '<li><a href="http://medford.craigslist.org/">Medford</a></li>';
    sHtml += '<li><a href="http://memphis.craigslist.org/">Memphis</a></li>';
    sHtml += '<li><a href="http://merced.craigslist.org/">Merced</a></li>';
    sHtml += '<li><a href="http://miami.craigslist.org/">Miami</a></li>';
    sHtml += '<li><a href="http://milwaukee.craigslist.org/">Milwaukee</a></li>';
    sHtml += '<li><a href="http://minneapolis.craigslist.org/">Minneapolis</a></li>';
    sHtml += '<li><a href="http://mobile.craigslist.org/">Mobile</a></li>';
    sHtml += '<li><a href="http://modesto.craigslist.org/">Modesto</a></li>';
    sHtml += '<li><a href="http://montana.craigslist.org/">Montana</a></li>';
    sHtml += '<li><a href="http://monterey.craigslist.org/">Monterey</a></li>';
    sHtml += '<li><a href="http://montgomery.craigslist.org/">Montgomery</a></li>';
    sHtml += '<li><a href="http://myrtlebeach.craigslist.org/">Myrtle Beach</a></li>';
    sHtml += '<li><a href="http://nashville.craigslist.org/">Nashville</a></li>';
    sHtml += '<li><a href="http://nh.craigslist.org/">New Hamp</a></li>';
    sHtml += '<li><a href="http://newhaven.craigslist.org/">New Haven</a></li>';
    sHtml += '<li><a href="http://newjersey.craigslist.org/">New Jersey</a></li>';
    sHtml += '<li><a href="http://newlondon.craigslist.org/">New London</a></li>';
    sHtml += '<li><a href="http://neworleans.craigslist.org/"><strong>New Orleans</strong></a></li>';
    sHtml += '<li><a href="http://newyork.craigslist.org/"><strong>New York</strong></a></li>';
    sHtml += '<li><a href="http://norfolk.craigslist.org/">Norfolk</a></li>';
    sHtml += '<li><a href="http://nd.craigslist.org/">N Dakota</a></li>';
    sHtml += '<li><a href="http://odessa.craigslist.org/">Odessa / Midland</a></li>';
    sHtml += '<li><a href="http://oklahomacity.craigslist.org/">Okla City</a></li>';
    sHtml += '<li><a href="http://omaha.craigslist.org/">Omaha</a></li>';
    sHtml += '<li><a href="http://orangecounty.craigslist.org/">Orange Co</a></li>';
    sHtml += '<li><a href="http://orlando.craigslist.org/">Orlando</a></li>';
    sHtml += '<li><a href="http://palmsprings.craigslist.org/">Palm Springs</a></li>';
    sHtml += '<li><a href="http://pennstate.craigslist.org/">Penn State</a></li>';
    sHtml += '<li><a href="http://pensacola.craigslist.org/">Pensacola</a></li>';
    sHtml += '<li><a href="http://peoria.craigslist.org/">Peoria</a></li>';
    sHtml += '<li><a href="http://philadelphia.craigslist.org/">Philadelphia</a></li>';
    sHtml += '<li><a href="http://phoenix.craigslist.org/">Phoenix</a></li>';
    sHtml += '<li><a href="http://pittsburgh.craigslist.org/">Pittsburgh</a></li>';
    sHtml += '<li><a href="http://portland.craigslist.org/"><strong>Portland</strong></a></li>';
    sHtml += '<li><a href="http://providence.craigslist.org/">Providence</a></li>';
    sHtml += '<li><a href="http://provo.craigslist.org/">Provo / Orem</a></li>';
    sHtml += '<li><a href="http://puertorico.craigslist.org/">Puerto Rico</a></li>';
    sHtml += '<li><a href="http://quadcities.craigslist.org/">Quad Cities</a></li>';
    sHtml += '<li><a href="http://raleigh.craigslist.org/">Raleigh</a></li>';
    sHtml += '<li><a href="http://reading.craigslist.org/">Reading</a></li>';
    sHtml += '<li><a href="http://redding.craigslist.org/">Redding</a></li>';
    sHtml += '<li><a href="http://reno.craigslist.org/">Reno</a></li>';
    sHtml += '<li><a href="http://richmond.craigslist.org/">Richmond</a></li>';
    sHtml += '<li><a href="http://roanoke.craigslist.org/">Roanoke</a></li>';
    sHtml += '<li><a href="http://rochester.craigslist.org/">Rochester</a></li>';
    sHtml += '<li><a href="http://rockford.craigslist.org/">Rockford</a></li>';
    sHtml += '<li><a href="http://rockies.craigslist.org/">Rocky Mountains</a></li>';
    sHtml += '<li><a href="http://sacramento.craigslist.org/"><strong>Sacramento</strong></a></li>';
    sHtml += '<li><a href="http://saginaw.craigslist.org/">Saginaw-Midland-Baycity</a></li>';
    sHtml += '<li><a href="http://salem.craigslist.org/">Salem</a></li>';
    sHtml += '<li><a href="http://saltlakecity.craigslist.org/">Salt Lake</a></li>';
    sHtml += '<li><a href="http://sanantonio.craigslist.org/">San Antonio</a></li>';
    sHtml += '<li><a href="http://sandiego.craigslist.org/"><strong>San Diego</strong></a></li>';
    sHtml += '<li><a href="http://santafe.craigslist.org/"><strong>Santa Fe</strong></a></li>';
    sHtml += '<li><a href="http://www.craigslist.org/"><strong>SF Bay</strong></a></li>';
    sHtml += '<li><a href="http://santabarbara.craigslist.org/">Santa Barb</a></li>';
    sHtml += '<li><a href="http://sarasota.craigslist.org/">Sarasota</a></li>';
    sHtml += '<li><a href="http://slo.craigslist.org/">Sl Obispo</a></li>';
    sHtml += '<li><a href="http://savannah.craigslist.org/">Savannah</a></li>';
    sHtml += '<li><a href="http://scranton.craigslist.org/">Scranton / Wilkes-Barre</a></li>';
    sHtml += '<li><a href="http://seattle.craigslist.org/">Seattle</a></li>';
    sHtml += '<li><a href="http://sd.craigslist.org/">S Dakota</a></li>';
    sHtml += '<li><a href="http://shreveport.craigslist.org/">Shreveport</a></li>';
    sHtml += '<li><a href="http://southbend.craigslist.org/">South Bend</a></li>';
    sHtml += '<li><a href="http://southjersey.craigslist.org/">South Jersey</a></li>';
    sHtml += '<li><a href="http://spokane.craigslist.org/">Spokane</a></li>';
    sHtml += '<li><a href="http://springfield.craigslist.org/">Springfield</a></li>';
    sHtml += '<li><a href="http://stlouis.craigslist.org/">St Louis</a></li>';
    sHtml += '<li><a href="http://stockton.craigslist.org/">Stockton</a></li>';
    sHtml += '<li><a href="http://syracuse.craigslist.org/">Syracuse</a></li>';
    sHtml += '<li><a href="http://tallahassee.craigslist.org/">Tallahassee</a></li>';
    sHtml += '<li><a href="http://tampa.craigslist.org/">Tampa Bay</a></li>';
    sHtml += '<li><a href="http://toledo.craigslist.org/">Toledo</a></li>';
    sHtml += '<li><a href="http://topeka.craigslist.org/">Topeka</a></li>';
    sHtml += '<li><a href="http://tucson.craigslist.org/">Tucson</a></li>';
    sHtml += '<li><a href="http://tulsa.craigslist.org/">Tulsa</a></li>';
    sHtml += '<li><a href="http://easttexas.craigslist.org/">Tyler / East-Texas</a></li>';
    sHtml += '<li><a href="http://utica.craigslist.org/">Utica</a></li>';
    sHtml += '<li><a href="http://ventura.craigslist.org/">Ventura Co</a></li>';
    sHtml += '<li><a href="http://waco.craigslist.org/">Waco</a></li>';
    sHtml += '<li><a href="http://washingtondc.craigslist.org/"><strong>Wash, DC</strong></a></li>';
    sHtml += '<li><a href="http://westernmass.craigslist.org/">West Mass</a></li>';
    sHtml += '<li><a href="http://westpalmbeach.craigslist.org/">West Palm</a></li>';
    sHtml += '<li><a href="http://wv.craigslist.org/">West Virginia</a></li>';
    sHtml += '<li><a href="http://wichita.craigslist.org/">Wichita</a></li>';
    sHtml += '<li><a href="http://wilmington.craigslist.org/">Wilmington</a></li>';
    sHtml += '<li><a href="http://winstonsalem.craigslist.org/">Winston-Salem</a></li>';
    sHtml += '<li><a href="http://worcester.craigslist.org/">Worcester</a></li>';
    sHtml += '<li><a href="http://wyoming.craigslist.org/">Wyoming</a></li>';
    sHtml += '<li><a href="http://yakima.craigslist.org/">Yakima</a></li>';
    sHtml += '<li><a href="http://yoopers.craigslist.org/">Yoopers</a></li>';
    sHtml += '<li><a href="http://youngstown.craigslist.org/">Youngstown</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Canada</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://calgary.craigslist.org/">Calgary</a></li>';
    sHtml += '<li><a href="http://edmonton.craigslist.org/">Edmonton</a></li>';
    sHtml += '<li><a href="http://halifax.craigslist.org/">Halifax</a></li>';
    sHtml += '<li><a href="http://hamilton.craigslist.org/">Hamilton</a></li>';
    sHtml += '<li><a href="http://kitchener.craigslist.org/">Kitchener</a></li>';
    sHtml += '<li><a href="http://montreal.craigslist.org/">Montreal</a></li>';
    sHtml += '<li><a href="http://ottawa.craigslist.org/">Ottawa</a></li>';
    sHtml += '<li><a href="http://quebec.craigslist.org/">Quebec</a></li>';
    sHtml += '<li><a href="http://saskatoon.craigslist.org/">Saskatoon</a></li>';
    sHtml += '<li><a href="http://toronto.craigslist.org/">Toronto</a></li>';
    sHtml += '<li><a href="http://vancouver.craigslist.org/">Vancouver</a></li>';
    sHtml += '<li><a href="http://victoria.craigslist.org/">Victoria</a></li>';
    sHtml += '<li><a href="http://winnipeg.craigslist.org/">Winnipeg</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Americas</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://buenosaires.craigslist.org/">Argentina</a></li>';
    sHtml += '<li><a href="http://lima.craigslist.org/">Lima</a></li>';
    sHtml += '<li><a href="http://mexicocity.craigslist.org/">Mexico City</a></li>';
    sHtml += '<li><a href="http://rio.craigslist.org/">Rio De Jan</a></li>';
    sHtml += '<li><a href="http://costarica.craigslist.org/">Costa Rica</a></li>';
    sHtml += '<li><a href="http://santiago.craigslist.org/">Santiago</a></li>';
    sHtml += '<li><a href="http://saopaulo.craigslist.org/">S´´o Paulo</a></li>';
    sHtml += '<li><a href="http://tijuana.craigslist.org/">Tijuana</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Africa</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://cairo.craigslist.org/">Cairo</a></li>';
    sHtml += '<li><a href="http://capetown.craigslist.org/">Cape Town</a></li>';
    sHtml += '<li><a href="http://johannesburg.craigslist.org/">Jo\'burg</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>United Kingdom & Ireland</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://belfast.craigslist.org/">Belfast</a></li>';
    sHtml += '<li><a href="http://birmingham.craigslist.org/">Birmingham</a></li>';
    sHtml += '<li><a href="http://bristol.craigslist.org/">Bristol</a></li>';
    sHtml += '<li><a href="http://cardiff.craigslist.org/">Cardiff</a></li>';
    sHtml += '<li><a href="http://dublin.craigslist.org/">Dublin</a></li>';
    sHtml += '<li><a href="http://edinburgh.craigslist.org/">Edinburgh</a></li>';
    sHtml += '<li><a href="http://glasgow.craigslist.org/">Glasgow</a></li>';
    sHtml += '<li><a href="http://leeds.craigslist.org/">Leeds</a></li>';
    sHtml += '<li><a href="http://liverpool.craigslist.org/">Liverpool</a></li>';
    sHtml += '<li><a href="http://london.craigslist.org/"><strong>London</strong></a></li>';
    sHtml += '<li><a href="http://manchester.craigslist.org/">Manchester</a></li>';
    sHtml += '<li><a href="http://oxford.craigslist.org/">Oxford</a></li>';
    sHtml += '<li><a href="http://newcastle.craigslist.org/">Newcastle</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Europe</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://amsterdam.craigslist.org/">Amsterdam</a></li>';
    sHtml += '<li><a href="http://athens.craigslist.org/">Athens</a></li>';
    sHtml += '<li><a href="http://barcelona.craigslist.org/">Barcelona</a></li>';
    sHtml += '<li><a href="http://berlin.craigslist.org/">Berlin</a></li>';
    sHtml += '<li><a href="http://brussels.craigslist.org/">Brussels</a></li>';
    sHtml += '<li><a href="http://copenhagen.craigslist.org/">Copenhagen</a></li>';
    sHtml += '<li><a href="http://florence.craigslist.org/">Florence</a></li>';
    sHtml += '<li><a href="http://frankfurt.craigslist.org/">Frankfurt</a></li>';
    sHtml += '<li><a href="http://geneva.craigslist.org/">Geneva</a></li>';
    sHtml += '<li><a href="http://madrid.craigslist.org/">Madrid</a></li>';
    sHtml += '<li><a href="http://milan.craigslist.org/">Milan</a></li>';
    sHtml += '<li><a href="http://moscow.craigslist.org/">Moscow</a></li>';
    sHtml += '<li><a href="http://munich.craigslist.org/">Munich</a></li>';
    sHtml += '<li><a href="http://paris.craigslist.org/">Paris</a></li>';
    sHtml += '<li><a href="http://prague.craigslist.org/">Prague</a></li>';
    sHtml += '<li><a href="http://rome.craigslist.org/">Rome</a></li>';
    sHtml += '<li><a href="http://stockholm.craigslist.org/">Stockholm</a></li>';
    sHtml += '<li><a href="http://vienna.craigslist.org/">Vienna</a></li>';
    sHtml += '<li><a href="http://zurich.craigslist.org/">Zurich</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Asia</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://bangalore.craigslist.org/">Bangalore</a></li>';
    sHtml += '<li><a href="http://bangkok.craigslist.org/">Bangkok</a></li>';
    sHtml += '<li><a href="http://beijing.craigslist.org/">Beijing</a></li>';
    sHtml += '<li><a href="http://chennai.craigslist.org/">Chennai</a></li>';
    sHtml += '<li><a href="http://delhi.craigslist.org/">Delhi</a></li>';
    sHtml += '<li><a href="http://hyderabad.craigslist.org/">Hyderabad</a></li>';
    sHtml += '<li><a href="http://hongkong.craigslist.org/">Hong Kong</a></li>';
    sHtml += '<li><a href="http://istanbul.craigslist.org/">Istanbul</a></li>';
    sHtml += '<li><a href="http://jerusalem.craigslist.org/">Jerusalem</a></li>';
    sHtml += '<li><a href="http://manila.craigslist.org/">Manila</a></li>';
    sHtml += '<li><a href="http://mumbai.craigslist.org/">Mumbai</a></li>';
    sHtml += '<li><a href="http://osaka.craigslist.org/">Osaka</a></li>';
    sHtml += '<li><a href="http://seoul.craigslist.org/">Seoul</a></li>';
    sHtml += '<li><a href="http://shanghai.craigslist.org/">Shanghai</a></li>';
    sHtml += '<li><a href="http://singapore.craigslist.org/">Singapore</a></li>';
    sHtml += '<li><a href="http://taipei.craigslist.org/">Taipei</a></li>';
    sHtml += '<li><a href="http://telaviv.craigslist.org/">Tel Aviv</a></li>';
    sHtml += '<li><a href="http://tokyo.craigslist.org/">Tokyo</a></li>';
    sHtml += '</ul>';
    sHtml += '<h5>Australia & New Zealand</h5>';
    sHtml += '<ul>';
    sHtml += '<li><a href="http://adelaide.craigslist.org/">Adelaide</a></li>';
    sHtml += '<li><a href="http://auckland.craigslist.org/">Auckland</a></li>';
    sHtml += '<li><a href="http://brisbane.craigslist.org/">Brisbane</a></li>';
    sHtml += '<li><a href="http://melbourne.craigslist.org/">Melbourne</a></li>';
    sHtml += '<li><a href="http://perth.craigslist.org/">Perth</a></li>';
    sHtml += '<li><a href="http://sydney.craigslist.org/">Sydney</a></li>';
    sHtml += '</ul>';
    sHtml += '</div>';
    document.getElementsByTagName('body')[0].innerHTML = sHtml;

    // adds CSS
    addGlobalStyle('::-moz-selection { background: #3399FF; color: #FFFFFF; } body { margin: 0; padding: 0;} #search { width: 100%; background: #333333; font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; padding: 10px 0 10px 0; } #search h3 { display: inline; padding: 0; margin: 0; } #search h3 a { width: 120px; background: #0066CC; font-size: 11px; text-decoration: none; color: #FFFFFF; padding: 4px 7px 4px 7px; margin: 0 20px 0 50px; border:1px solid #ccc; } #search h3 a:hover { background: #33cc66; color: #fff; } #search form { display: inline; } #search input { height: 16px; } #search p { position: absolute; top: 0; right: 0; padding: 9px 0 0 0; margin: 0 50px 0 0; } #search p a { font-size: 11px; color: #AAAAAA; padding: 0 0 0 5px; } #search p a:hover { text-decoration: none; color: #DDDDDD; } #main h1 { width: 100%; text-align: center; font-family: "Microsoft Sans Serif", Tahoma, lucida grande, lucida sans unicode, trebuchet ms, sans-serif; font-weight: normal; font-size: 24px; padding-bottom: 0; margin-bottom: 25px; } #main h1 span { color: #0066CC; } #main h1 em { font-style: normal; } #main h1 img { margin-bottom: -15px; } #wrapper { margin: 0 50px 0 50px; } #wrapper h2 { height: 15px; font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 18px; color: #33cc66; border-top: 0px solid #333333; padding: 3px 15px 15px 0; margin: 0; } #wrapper h4 { height: 15px; font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 11px; font-weight: normal; color: #999999; border-top: 0px solid #D6D6D6; padding: 3px 15px 15px 0; margin: 0; } #wrapper h4 a { text-decoration: none; color: #333333; } #wrapper h4 a:hover { text-decoration: underline;  } #wrapper .l { float: left; width: 190px; } #wrapper .events { font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 11px; text-align: center; vertical-align: middle; border: 2px solid #C8C8C8; border-bottom: 1px solid #C8C8C8; border-right: 0px solid #C8C8C8; padding: 0; margin: 0 0 30px 0; } #wrapper .events .days { background: #555555; color: #FFFFFF; } #wrapper .events #today { background: #33cc66; font-weight:bold;} #wrapper .events td { width: 23px; height: 23px; border-bottom: 1px solid #C8C8C8; border-right: 1px solid #C8C8C8; } #wrapper .events td a { color: #0066CC; text-decoration: none; } #wrapper .events td a:visited { color: #666666; } #wrapper .events td a:hover { text-decoration: underline; } #wrapper .highlight { padding: 0; margin: 0 0 15px 0; } #wrapper .highlight a { font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 11px; text-decoration: none; font-weight: bold; color: #333333; padding: 2px; } #wrapper .highlight a:hover { color: #0066cc; } #wrapper ul { font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 11px; list-style: none; padding: 0; margin: 0 0 25px 0; } #wrapper ul li { line-height: 16px;} #wrapper ul li a { color: #333333; text-decoration: none; } #wrapper ul li a:hover { text-decoration: underline; } #wrapper .m { float: left; width: 525px; } #wrapper .m hr { margin: 0; } #wrapper .m ul { font-family: lucida grande, lucida sans unicode, trebuchet ms, Times, serif; font-size: 12px; padding-left: 6px;} #wrapper .m ul li a { color: #ff6c00; } #wrapper .m ul li a:hover { color: #0066CC; text-decoration:none} #wrapper .m ul li a:visited { color: #666666; } #wrapper .m ._l h2, #wrapper .m ._m h2, #wrapper .m ._r h2 { height: 27px; font-family: lucida grande, lucida sans unicode, trebuchet ms, Times, serif; font-size: 22px; font-weight: normal; color: #ff6c00; border-top: 0px solid #D6D6D6; padding: 8px 20px 8px 8px; margin: 0 0 10px 0; } #wrapper .m ._l h2 a, #wrapper .m ._m h2 a, #wrapper .m ._r h2 a { color: #ff6c00; text-decoration: none; } #wrapper .m ._l h2 a:hover, #wrapper .m ._m h2 a:hover, #wrapper .m ._r h2 a:hover { color: #0066CC; text-decoration: none; } #wrapper .m ._l { width: 165px; float: left; border-top: 0px solid #999999; border-left: 0px solid #D6D6D6; margin: 0 0 0 10px; } #wrapper .m ._m { width: 165px; float: left; border-top: 0px solid #999999; border-left: 0px solid #D6D6D6; } #wrapper .m ._r { width: 165px; float: left; border-top: 0px solid #999999; border-left: 0px solid #D6D6D6; border-right: 0px solid #D6D6D6; margin: 0 10px 0 0; } #wrapper .r { float: left; width: 190px; padding-bottom: 25px; } #wrapper .r p { font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 11px; line-height: 16px; width: 50%; float: left; padding: 0; margin: 0; } #wrapper .r p a { color: #333333; text-decoration: none; } #wrapper .r p a:hover { text-decoration: underline; } #all_cities { clear: both; margin: 0 50px 0 50px; padding-top: 40px; padding-bottom: 40px; } #all_cities h2 { height: 15px; font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; font-size: 12px; color: #333333; border-top: 4px solid #333333; padding: 3px 15px 15px 0; margin: 0; } #all_cities h5 { clear: both; font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans; display: block; font-size: 12px; padding: 20px 0 5px 0; margin: 0; color: #333333; } #all_cities ul { list-style: none; padding: 0; margin: 0; } #all_cities ul li { float: left; padding: 0; margin: 0; } #all_cities ul li a { margin-right: 10px; font-family: lucida grande, lucida sans unicode, trebuchet ms, Times, serif; color: #0066CC; line-height: 160%; font-size: 11px; text-decoration: none; } #all_cities ul li a:hover { text-decoration: underline;} h6{display:block;width:150px;height:30px;background-image:url(http://www.blirk.com/cl/clbg.jpg);background-repeat:no-repeat;background-position:left;color:#fff;font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans;text-decoration:none;font-size:20px;margin-bottom:3px;margin-top:0px;padding-left:5px;position:relative;} h6 a{text-decoration:none;color:#fff;position:relative;top:3px;} h6 a:hover{text-decoration:underline;} #wrapper ul{border:1px solid #d6d6d6;width:142px;display:block;margin-top:-3px;} *{outline:none} input,select{font-size:18px;height:26px;color:#333;}');

} else {

    addGlobalStyle('body, table { font-family: lucida grande, lucida sans unicode, trebuchet ms, Helvetica, Verdana, sans-serif; font-size: 11px; color: #333333; }');
    addGlobalStyle('body { font-size: 12px; }');
    addGlobalStyle('a { color: #0066CC; text-decoration: none; }');
    addGlobalStyle('a:hover { text-decoration: underline;  }');
    addGlobalStyle('h2, h3 { font-family: lucida grande, lucida sans unicode, trebuchet ms, Times, serif; font-size: 20px; font-weight: normal; }');
    addGlobalStyle('h3 a { color: #0066CC; text-decoration: none; }');
    addGlobalStyle('hr { height: 1px; background: #000000; color: #000000; border: 0; padding: 0; margin: 0 0 10px 0; }');
    addGlobalStyle('b a { font-size: 11px; font-weight: normal; text-decoration: none; color: #333333; }');
    addGlobalStyle('b a:hover { text-decoration: underline; }');
    addGlobalStyle('form table { color: #333333; border: 0; border-spacing: 0; padding: 0; margin: 0; }');
    addGlobalStyle('form table tr td { padding: 5px; }');
    addGlobalStyle('blockquote { font-family: lucida grande, lucida sans unicode, trebuchet ms, Times, serif; font-size: 12px; }');
    addGlobalStyle('blockquote div { padding: 5px; }');
    addGlobalStyle('blockquote a:visited { color: #666666; }');
    addGlobalStyle('blockquote p { padding-left: 10px; }');
    addGlobalStyle('blockquote font { font-size: 10px; margin-left: 5px; }');

}