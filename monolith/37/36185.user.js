// ==UserScript==
// @name           Ikariam Premium Normal
// @namespace      http://electropolls.webs.com/
// @description    Ikariam: Changes the Normal Advisor Icons to Premium ones
// @include        http://s*.ikariam.*/*
// @exclude        http://s*.ikariam.*/skin/*
// @exclude        http://s*.ikariam.*/js/*
// @exclude        http://s*.ikariam.*/index.php?action=newPlayer
// ==/UserScript==


var URL= "http://i287.photobucket.com/albums/ll134/kongr43gpen/Ikariam/";

GM_addStyle("#advisors #advCities a.normal                                     {background-image:url("+URL+"mayor_premium.gif);}");
GM_addStyle("#advisors #advCities a.normalactive                               {background-image:url("+URL+"mayor_premium_active.gif);}");
GM_addStyle("#advisors #advMilitary a.normal                                   {background-image:url("+URL+"general_premium.gif);}");
GM_addStyle("#advisors #advMilitary a.normalactive                             {background-image:url("+URL+"general_premium_active.gif);}");
GM_addStyle("#advisors #advMilitary a.normalalert                              {background-image:url("+URL+"general_premium_alert);}");
GM_addStyle("#advisors #advResearch a.normal                                   {background-image:url("+URL+"scientist_premium.gif);}");
GM_addStyle("#advisors #advResearch a.normalactive                             {background-image:url("+URL+"scientist_premium_active.gif);}");
GM_addStyle("#advisors #advDiplomacy a.normal                                  {background-image:url("+URL+"diplomat_premium.gif);}");
GM_addStyle("#advisors #advDiplomacy a.normalactive                            {background-image:url("+URL+"diplomat_premium_active.gif);}");
