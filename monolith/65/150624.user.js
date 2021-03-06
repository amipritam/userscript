// ==UserScript==
// @name            BSE ponies are epic - new topic
// @namespace       http://localhost
// @description     ponies!
// @include         http://localhost
// @version         4
// @grant           none
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button" class="input_submit alt" onclick="show(), hide()">Ponies!</button>';
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener ("click", ButtonClickAction, false);

function ButtonClickAction (zEvent)
{
    //--- For our dummy action, we'll just add a line of text to the top of the screen.
    var zNode      = document.createElement ('div');
    zNode.innerHTML = 
        '<table><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/ajbemused.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/ajbemused.png" /></td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/ajsleepy.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/ajsleepy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/ajsmug.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/ajsmug.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/applecry.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/applecry.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/applejackconfused.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/applejackconfused.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/applejackunsure.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/applejackunsure.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/coolphoto.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/coolphoto.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/eeyup.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/eeyup.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/derpyderp1.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/derpyderp1.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/derpyderp2.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/derpyderp2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/derpytongue2.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/derpytongue2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/fluttercry.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/fluttercry.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/flutterrage.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/flutterrage.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/fluttershbad.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/fluttershbad.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/fluttershyouch.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/fluttershyouch.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/fluttershysad.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/fluttershysad.png" /> </td></tr>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/yay.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/yay.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiecrazy.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiecrazy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiegasp.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiegasp.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiehappy.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiehappy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiesad2.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiesad2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiesick.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiesick.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/pinkiesmile.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/pinkiesmile.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowderp.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowderp.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowdetermined2.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowdetermined2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowhuh.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowhuh.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowkiss.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowkiss.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowlaugh.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowlaugh.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/rainbowwild.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/rainbowwild.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/raritycry.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/raritycry.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/raritydespair.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/raritydespair.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/raritystarry.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/raritystarry.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/raritywink.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/raritywink.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/duck.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/duck.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/twilightangry2.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/twilightangry2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/twilightblush.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/twilightblush.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/twilightoops.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/twilightoops.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/facehoof.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/facehoof.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/twilightsmile.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/twilightsmile.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/trixieshiftleft.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/trixieshiftleft.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/trixieshiftright.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/trixieshiftright.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/scootangel.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/scootangel.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/twistnerd.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/twistnerd.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/unsuresweetie.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/unsuresweetie.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/trollestia.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/trollestia.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/moustache.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/moustache.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://static.fimfiction.net/images/emoticons/heart.png[/img] \')"><img src="http://static.fimfiction.net/images/emoticons/heart.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/lolface_Queen_Chrysalis.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/lolface_Queen_Chrysalis.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Luna_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Luna_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/lolface_Celestia.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/lolface_Celestia.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Sweetie_Belle_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Sweetie_Belle_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Twilight_Sparkle_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Twilight_Sparkle_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Spike_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Spike_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Pinkie_Pie_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Pinkie_Pie_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Rarity_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Rarity_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Rainbow_Dash_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Rainbow_Dash_lolface.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Applejack_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Applejack_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Vinyl_Scratch_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Vinyl_Scratch_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Fluttershy_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Fluttershy_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Scootaloo_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Scootaloo_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Applebloom_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Applebloom_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Derpy_Hooves_lolface.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Derpy_Hooves_lolface.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Trixie_lolface_1.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Trixie_lolface_1.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Trixie_lolface_2.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Trixie_lolface_2.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Sweetie_Belle.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Sweetie_Belle.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Scootaloo.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Scootaloo.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Applebloom.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Applebloom.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Twilight_Sparkle.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Twilight_Sparkle.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Fluttershy.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Fluttershy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Applejack.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Applejack.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Pinkie_Pie.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Pinkie_Pie.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Rarity.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Rarity.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Rainbow_Dash.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Rainbow_Dash.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Derpy_Hooves.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/sillyfilly_Derpy_Hooves.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Luna_apple.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Luna_apple.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Twilight_Sparkle.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Twilight_Sparkle.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Twilight_future.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Twilight_future.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Rainbow_Dash.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Rainbow_Dash.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Derpy_Hooves.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Derpy_Hooves.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Queen_Chrysalis.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_Queen_Chrysalis.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_bronymaster1.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/shrug_bronymaster1.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_unsuresweetie_flip.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_unsuresweetie_flip.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_rainbowkiss_flip.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_rainbowkiss_flip.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_rainbowderp_flip.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_rainbowderp_flip.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/discord.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/discord.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Discord.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Discord.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/eenope.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/eenope.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/Mr_Cake.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/Mr_Cake.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/yay_red.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/yay_red.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_TwilightWut.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_TwilightWut.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_crazy.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_crazy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_crazy_invert.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_crazy_invert.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_pea.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilight_pea.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Fluttershy_umad.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Fluttershy_umad.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Fluttershy.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Fluttershy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Pinkie_loool.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Pinkie_loool.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Rainbow_dealwithit.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Rainbow_dealwithit.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Sweetie_happy.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Sweetie_happy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra2.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_cry.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_cry.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_dealwithit.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_dealwithit.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_smile.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_smile.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_ooh.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Lyra_ooh.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_gaze.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_gaze.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_grin.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_grin.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_OMG_LOVE.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Bonbon_OMG_LOVE.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_hmph.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_hmph.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_shh.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_shh.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_smile.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_smile.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_gasp.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Redheart_gasp.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia2.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia2.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_O_O.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_O_O.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_cake.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_cake.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_chair.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_chair.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_plot.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Octavia_plot.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Cheerilee.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Cheerilee.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_Scratch.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_Scratch.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl2.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl2.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_sad.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_sad.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_shock.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Vinyl_shock.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Soarin_dayum.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Soarin_dayum.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_dayum.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_dayum.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_lazy.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_lazy.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_rape.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_rape.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_sad.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Spitfire_sad.png" /> </td>\
        </tr><tr><td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Cloudchaser_dealwithit.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Cloudchaser_dealwithit.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Colgate_beam.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Colgate_beam.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Colgate_bedroomeyes.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Colgate_bedroomeyes.png" /> </td>\
        <td onclick="ipb.editors[ \'ed-0\' ].editor_write_contents(\' [img]http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilightclopple.png[/img] \')"><img src="http://dl.dropbox.com/u/31471793/FiMFiction/emoticons/misc_Twilightclopple.png" /> </td></tr></table>';
    zNode.setAttribute ('id', 'ponies');
    zNode.setAttribute ('class', 'ipb_palette emoticons_palette');
    zNode.setAttribute ('onclick', 'myContainer.removeChild(ponies), myButton.style.display = "block"');
    document.getElementById ("myContainer").appendChild (zNode);
}
//--- Style our newly added elements using CSS.
GM_addStyle ( (<><![CDATA[
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        margin:                 0px;
        opacity:                0.9;
        z-index:                222;
        padding:                5px 25px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
]]></>).toString () );