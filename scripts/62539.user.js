// ==UserScript==
// @name           AttackPage
// @namespace      http://*.ruinsofchaos.com*
// @description    Attackpage
// @include        http://www.ruinsofchaos.com/*
// ==/UserScript==



var s = document.body.innerHTML;
s = s.replace(/stats.php/g,"attack.php");
document.body.innerHTML = s;  
var isin = document.URL.split("detail.php?attack_id=");
if(isin[1]) window.location = "http://ruinsofchaos.com/armory.php";                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             