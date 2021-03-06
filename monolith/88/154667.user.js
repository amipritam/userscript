// ==UserScript==
// @name    	X10 FB Emo
// @namespace	hmage.in.th/facebook
// @description	Extended Facebook emoticons. (Build 201212301231)
// @version 	1.1.0
// @author  	High Magician (highmagician@gmail.com)
// @homepageURL	http://userscripts.org/scripts/show/154667
// @include 	http://www.facebook.com/*
// @include 	https://www.facebook.com/*
// ==/UserScript==

(function() {
	// Active only in main frame
	if (!document.querySelector("#pageNav")) {
		return;
	}
	//console.info("X10 FB Emo");

	// = Data =======
	// Emoticon data; +5 text-base, +206 unicode from Android app.
	var emoticons = [ { // Text to picture emoticons
		"chars" : " :) ",
		"class" : "emoticon_smile",
		"name" : "Smile"
	}, {
		"chars" : " :( ",
		"class" : "emoticon_frown",
		"name" : "Frown"
	}, {
		"chars" : " :P ",
		"class" : "emoticon_tongue",
		"name" : "Tongue"
	}, {
		"chars" : " =D ",
		"class" : "emoticon_grin",
		"name" : "Grin"
	}, {
		"chars" : " :o ",
		"class" : "emoticon_gasp",
		"name" : "Gasp"
	}, {
		"chars" : " ;) ",
		"class" : "emoticon_wink",
		"name" : "Wink"
	}, {
		"chars" : " :v ",
		"class" : "emoticon_pacman",
		"name" : "Pacman"
	}, {
		"chars" : " >:( ",
		"class" : "emoticon_grumpy",
		"name" : "Grumpy"
	}, {
		"chars" : " :/ ",
		"class" : "emoticon_unsure",
		"name" : "Unsure"
	}, {
		"chars" : " :'( ",
		"class" : "emoticon_cry",
		"name" : "Cry"
	}, {
		"chars" : " ^_^ ",
		"class" : "emoticon_kiki",
		"name" : "Kiki"
	}, {
		"chars" : " 8) ",
		"class" : "emoticon_glasses",
		"name" : "Glasses"
	}, {
		"chars" : " B| ",
		"class" : "emoticon_sunglasses",
		"name" : "Sunglasses"
	}, {
		"chars" : " <3 ",
		"class" : "emoticon_heart",
		"name" : "Heart"
	}, {
		"chars" : " 3:) ",
		"class" : "emoticon_devil",
		"name" : "Devil"
	}, {
		"chars" : " O:) ",
		"class" : "emoticon_angel",
		"name" : "Angel"
	}, {
		"chars" : " -_- ",
		"class" : "emoticon_squint",
		"name" : "Squint"
	}, {
		"chars" : " o.O ",
		"class" : "emoticon_confused",
		"name" : "Confused"
	}, {
		"chars" : " >:o ",
		"class" : "emoticon_upset",
		"name" : "Upset"
	}, {
		"chars" : " :3 ",
		"class" : "emoticon_colonthree",
		"name" : "Colon Three"
	}, {
		"chars" : " (y) ",
		"class" : "emoticon_like",
		"name" : "Like"
	}, {
		"chars" : " :* ",
		"class" : "emoticon emoticon_kiss",
		"name" : "Kiss"
	}, {
		"chars" : " (^^^) ",
		"class" : "emoticon_shark",
		"name" : "Shark"
	// }, { // Obsolete
	// // "chars" : " :42: ",
	// "class" : "emoticon_42",
	// "name" : "42"
	}, {
		"chars" : " :putnam: ",
		"class" : "emoticon_putnam",
		"name" : "Putnam"
	}, {
		"chars" : " :|] ",
		"class" : "emoticon_robot",
		"name" : "Robot"
	}, {
		"chars" : " <(\") ",
		"class" : "emoticon_penguin",
		"name" : "Penguin"
	}, { // Unicode to picture emoticons
		"chars" : "\ud83d\ude04",
		"class" : "_1az _1a- _2fv"
	}, {
		"chars" : "\ud83d\ude03",
		"class" : "_1az _1a- _2fu"
	}, {
		"chars" : "\u263a",
		"class" : "_1az _1a- _2h1"
	}, {
		"chars" : "\ud83d\ude09",
		"class" : "_1az _1a- _2fx"
	}, {
		"chars" : "\ud83d\ude0d",
		"class" : "_1az _1a- _2f-"
	}, {
		"chars" : "\ud83d\ude18",
		"class" : "_1az _1a- _2g4"
	}, {
		"chars" : "\ud83d\ude1a",
		"class" : "_1az _1a- _2g5"
	}, {
		"chars" : "\ud83d\ude1c",
		"class" : "_1az _1a- _2g6"
	}, {
		"chars" : "\ud83d\ude1d",
		"class" : "_1az _1a- _2g7"
	}, {
		"chars" : "\ud83d\ude33",
		"class" : "_1az _1a- _2gn"
	}, {
		"chars" : "\ud83d\ude01",
		"class" : "_1az _1a- _2fs"
	}, {
		"chars" : "\ud83d\ude14",
		"class" : "_1az _1a- _2g2"
	}, {
		"chars" : "\ud83d\ude0c",
		"class" : "_1az _1a- _2fz"
	}, {
		"chars" : "\ud83d\ude12",
		"class" : "_1az _1a- _2g0"
	}, {
		"chars" : "\ud83d\ude1e",
		"class" : "_1az _1a- _2g8"
	}, {
		"chars" : "\ud83d\ude23",
		"class" : "_1az _1a- _2gc"
	}, {
		"chars" : "\ud83d\ude22",
		"class" : "_1az _1a- _2gb"
	}, {
		"chars" : "\ud83d\ude02",
		"class" : "_1az _1a- _2ft"
	}, {
		"chars" : "\ud83d\ude2d",
		"class" : "_1az _1a- _2gj"
	}, {
		"chars" : "\ud83d\ude2a",
		"class" : "_1az _1a- _2gh"
	}, {
		"chars" : "\ud83d\ude25",
		"class" : "_1az _1a- _2ge"
	}, {
		"chars" : "\ud83d\ude30",
		"class" : "_1az _1a- _2gk"
	}, {
		"chars" : "\ud83d\ude13",
		"class" : "_1az _1a- _2g1"
	}, {
		"chars" : "\ud83d\ude29",
		"class" : "_1az _1a- _2gg"
	}, {
		"chars" : "\ud83d\ude2b",
		"class" : "_1az _1a- _2gi"
	}, {
		"chars" : "\ud83d\ude28",
		"class" : "_1az _1a- _2gf"
	}, {
		"chars" : "\ud83d\ude31",
		"class" : "_1az _1a- _2gl"
	}, {
		"chars" : "\ud83d\ude20",
		"class" : "_1az _1a- _2g9"
	}, {
		"chars" : "\ud83d\ude21",
		"class" : "_1az _1a- _2ga"
	}, {
		"chars" : "\ud83d\ude24",
		"class" : "_1az _1a- _2gd"
	}, {
		"chars" : "\ud83d\ude16",
		"class" : "_1az _1a- _2g3"
	}, {
		"chars" : "\ud83d\ude06",
		"class" : "_1az _1a- _2fw"
	}, {
		"chars" : "\ud83d\ude0b",
		"class" : "_1az _1a- _2fy"
	}, {
		"chars" : "\ud83d\ude37",
		"class" : "_1az _1a- _2gp"
	}, {
		"chars" : "\ud83d\ude35",
		"class" : "_1az _1a- _2go"
	}, {
		"chars" : "\ud83d\ude32",
		"class" : "_1az _1a- _2gm"
	}, {
		"chars" : "\ud83d\udc7f",
		"class" : "_1az _1a- _2eu"
	}, {
		"chars" : "\ud83d\ude0f",
		"class" : "_1az _1a- _2f_"
	}, {
		"chars" : "\ud83d\udc72",
		"class" : "_1az _1a- _2ej"
	}, {
		"chars" : "\ud83d\udc73",
		"class" : "_1az _1a- _2ek"
	}, {
		"chars" : "\ud83d\udc6e",
		"class" : "_1az _1a- _2eg"
	}, {
		"chars" : "\ud83d\udc77",
		"class" : "_1az _1a- _2eo"
	}, {
		"chars" : "\ud83d\udc82",
		"class" : "_1az _1a- _2ew"
	}, {
		"chars" : "\ud83d\udc76",
		"class" : "_1az _1a- _2en"
	}, {
		"chars" : "\ud83d\udc66",
		"class" : "_1az _1a- _2eb"
	}, {
		"chars" : "\ud83d\udc67",
		"class" : "_1az _1a- _2ec"
	}, {
		"chars" : "\ud83d\udc68",
		"class" : "_1az _1a- _2ed"
	}, {
		"chars" : "\ud83d\udc69",
		"class" : "_1az _1a- _2ee"
	}, {
		"chars" : "\ud83d\udc74",
		"class" : "_1az _1a- _2el"
	}, {
		"chars" : "\ud83d\udc75",
		"class" : "_1az _1a- _2em"
	}, {
		"chars" : "\ud83d\udc71",
		"class" : "_1az _1a- _2ei"
	}, {
		"chars" : "\ud83d\udc7c",
		"class" : "_1az _1a- _2er"
	}, {
		"chars" : "\ud83d\udc78",
		"class" : "_1az _1a- _2ep"
	}, {
		"chars" : "\ud83d\ude3a",
		"class" : "_1az _1a- _2gs"
	}, {
		"chars" : "\ud83d\ude38",
		"class" : "_1az _1a- _2gq"
	}, {
		"chars" : "\ud83d\ude3b",
		"class" : "_1az _1a- _2gt"
	}, {
		"chars" : "\ud83d\ude3d",
		"class" : "_1az _1a- _2gv"
	}, {
		"chars" : "\ud83d\ude3c",
		"class" : "_1az _1a- _2gu"
	}, {
		"chars" : "\ud83d\ude40",
		"class" : "_1az _1a- _2gx"
	}, {
		"chars" : "\ud83d\ude3f",
		"class" : "_1az _1a- _2gw"
	}, {
		"chars" : "\ud83d\ude39",
		"class" : "_1az _1a- _2gr"
	}, {
		"chars" : "\ud83d\udc80",
		"class" : "_1az _1a- _2ev"
	}, {
		"chars" : "\ud83d\udc7d",
		"class" : "_1az _1a- _2es"
	}, {
		"chars" : "\ud83d\udd25",
		"class" : "_1az _1a- _492"
	}, {
		"chars" : "\ud83d\udca9",
		"class" : "_1az _1a- _2ff"
	}, {
		"chars" : "\u2728",
		"class" : "_1az _1a- _2hb"
	}, {
		"chars" : "\ud83c\udf1f",
		"class" : "_1az _1a- _2c3"
	}, {
		"chars" : "\ud83d\udca2",
		"class" : "_1az _1a- _2fb"
	}, {
		"chars" : "\ud83d\udca6",
		"class" : "_1az _1a- _2fd"
	}, {
		"chars" : "\ud83d\udca4",
		"class" : "_1az _1a- _2fc"
	}, {
		"chars" : "\ud83d\udca8",
		"class" : "_1az _1a- _2fe"
	}, {
		"chars" : "\ud83d\udc42",
		"class" : "_1az _1a- _2dy"
	}, {
		"chars" : "\ud83d\udc40",
		"class" : "_1az _1a- _2dx"
	}, {
		"chars" : "\ud83d\udc43",
		"class" : "_1az _1a- _2dz"
	}, {
		"chars" : "\ud83d\udc45",
		"class" : "_1az _1a- _2d_"
	}, {
		"chars" : "\ud83d\udc44",
		"class" : "_1az _1a- _2d-"
	}, {
		"chars" : "\ud83d\udc4d",
		"class" : "_1az _1a- _2e7"
	}, {
		"chars" : "\ud83d\udc4e",
		"class" : "_1az _1a- _2e8"
	}, {
		"chars" : "\ud83d\udc4c",
		"class" : "_1az _1a- _2e6"
	}, {
		"chars" : "\ud83d\udc4a",
		"class" : "_1az _1a- _2e4"
	}, {
		"chars" : "\u270a",
		"class" : "_1az _1a- _2h4"
	}, {
		"chars" : "\u270c",
		"class" : "_1az _1a- _2h6"
	}, {
		"chars" : "\ud83d\udc4b",
		"class" : "_1az _1a- _2e5"
	}, {
		"chars" : "\u270b",
		"class" : "_1az _1a- _2h5"
	}, {
		"chars" : "\ud83d\udc50",
		"class" : "_1az _1a- _2ea"
	}, {
		"chars" : "\ud83d\udc46",
		"class" : "_1az _1a- _2e0"
	}, {
		"chars" : "\ud83d\udc47",
		"class" : "_1az _1a- _2e1"
	}, {
		"chars" : "\ud83d\udc49",
		"class" : "_1az _1a- _2e3"
	}, {
		"chars" : "\ud83d\udc48",
		"class" : "_1az _1a- _2e2"
	}, {
		"chars" : "\ud83d\ude4c",
		"class" : "_1az _1a- _2gz"
	}, {
		"chars" : "\ud83d\ude4f",
		"class" : "_1az _1a- _2g_"
	}, {
		"chars" : "\u261d",
		"class" : "_1az _1a- _2h0"
	}, {
		"chars" : "\ud83d\udc4f",
		"class" : "_1az _1a- _2e9"
	}, {
		"chars" : "\ud83d\udcaa",
		"class" : "_1az _1a- _2fg"
	}, {
		"chars" : "\ud83d\udc83",
		"class" : "_1az _1a- _2ex"
	}, {
		"chars" : "\ud83d\udc6b",
		"class" : "_1az _1a- _2ef"
	}, {
		"chars" : "\ud83d\udc8f",
		"class" : "_1az _1a- _2e-"
	}, {
		"chars" : "\ud83d\udc91",
		"class" : "_1az _1a- _2f0"
	}, {
		"chars" : "\ud83d\udc6f",
		"class" : "_1az _1a- _2eh"
	}, {
		"chars" : "\ud83d\ude4b",
		"class" : "_1az _1a- _2gy"
	}, {
		"chars" : "\ud83d\udc85",
		"class" : "_1az _1a- _2ey"
	}, {
		"chars" : "\ud83d\ude4d",
		"class" : "_1az _1a- _2g-"
	}, {
		"chars" : "\ud83c\udf02",
		"class" : "_1az _1a- _2c0"
	}, {
		"chars" : "\ud83d\udc9b",
		"class" : "_1az _1a- _2f8"
	}, {
		"chars" : "\ud83d\udc99",
		"class" : "_1az _1a- _2f6"
	}, {
		"chars" : "\ud83d\udc9c",
		"class" : "_1az _1a- _2f9"
	}, {
		"chars" : "\ud83d\udc9a",
		"class" : "_1az _1a- _2f7"
	}, {
		"chars" : "\u2764",
		"class" : "_1az _1a- _2hc"
	}, {
		"chars" : "\ud83d\udc94",
		"class" : "_1az _1a- _2f2"
	}, {
		"chars" : "\ud83d\udc97",
		"class" : "_1az _1a- _2f4"
	}, {
		"chars" : "\ud83d\udc93",
		"class" : "_1az _1a- _2f1"
	}, {
		"chars" : "\ud83d\udc96",
		"class" : "_1az _1a- _2f3"
	}, {
		"chars" : "\ud83d\udc98",
		"class" : "_1az _1a- _2f5"
	}, {
		"chars" : "\ud83d\udc8b",
		"class" : "_1az _1a- _2ez"
	}, {
		"chars" : "\ud83d\udc3a",
		"class" : "_1az _1a- _2du"
	}, {
		"chars" : "\ud83d\udc31",
		"class" : "_1az _1a- _2dn"
	}, {
		"chars" : "\ud83d\udc36",
		"class" : "_1az _1a- _491"
	}, {
		"chars" : "\ud83d\udc2d",
		"class" : "_1az _1a- _2dj"
	}, {
		"chars" : "\ud83d\udc39",
		"class" : "_1az _1a- _2dt"
	}, {
		"chars" : "\ud83d\udc30",
		"class" : "_1az _1a- _2dm"
	}, {
		"chars" : "\ud83d\udc38",
		"class" : "_1az _1a- _2ds"
	}, {
		"chars" : "\ud83d\udc2f",
		"class" : "_1az _1a- _2dl"
	}, {
		"chars" : "\ud83d\udc28",
		"class" : "_1az _1a- _2df"
	}, {
		"chars" : "\ud83d\udc3b",
		"class" : "_1az _1a- _2dv"
	}, {
		"chars" : "\ud83d\udc37",
		"class" : "_1az _1a- _2dr"
	}, {
		"chars" : "\ud83d\udc2e",
		"class" : "_1az _1a- _2dk"
	}, {
		"chars" : "\ud83d\udc17",
		"class" : "_1az _1a- _2d4"
	}, {
		"chars" : "\ud83d\udc35",
		"class" : "_1az _1a- _2dq"
	}, {
		"chars" : "\ud83d\udc12",
		"class" : "_1az _1a- _2d2"
	}, {
		"chars" : "\ud83d\udc34",
		"class" : "_1az _1a- _2dp"
	}, {
		"chars" : "\ud83d\udc11",
		"class" : "_1az _1a- _2d1"
	}, {
		"chars" : "\ud83d\udc18",
		"class" : "_1az _1a- _2d5"
	}, {
		"chars" : "\ud83d\udc27",
		"class" : "_1az _1a- _2de"
	}, {
		"chars" : "\ud83d\udc26",
		"class" : "_1az _1a- _2dd"
	}, {
		"chars" : "\ud83d\udc25",
		"class" : "_1az _1a- _2dc"
	}, {
		"chars" : "\ud83d\udc14",
		"class" : "_1az _1a- _2d3"
	}, {
		"chars" : "\ud83d\udc0d",
		"class" : "_1az _1a- _2c_"
	}, {
		"chars" : "\ud83d\udc1b",
		"class" : "_1az _1a- _2d8"
	}, {
		"chars" : "\ud83d\udc19",
		"class" : "_1az _1a- _2d6"
	}, {
		"chars" : "\ud83d\udc1a",
		"class" : "_1az _1a- _2d7"
	}, {
		"chars" : "\ud83d\udc20",
		"class" : "_1az _1a- _2da"
	}, {
		"chars" : "\ud83d\udc1f",
		"class" : "_1az _1a- _2d9"
	}, {
		"chars" : "\ud83d\udc2c",
		"class" : "_1az _1a- _2di"
	}, {
		"chars" : "\ud83d\udc33",
		"class" : "_1az _1a- _2do"
	}, {
		"chars" : "\ud83d\udc0e",
		"class" : "_1az _1a- _2d0"
	}, {
		"chars" : "\ud83d\udc21",
		"class" : "_1az _1a- _2db"
	}, {
		"chars" : "\ud83d\udc2b",
		"class" : "_1az _1a- _2dh"
	}, {
		"chars" : "\ud83d\udc29",
		"class" : "_1az _1a- _2dg"
	}, {
		"chars" : "\ud83d\udc3e",
		"class" : "_1az _1a- _2dw"
	}, {
		"chars" : "\ud83d\udc90",
		"class" : "_1az _1a- _2e_"
	}, {
		"chars" : "\ud83c\udf38",
		"class" : "_1az _1a- _2c8"
	}, {
		"chars" : "\ud83c\udf37",
		"class" : "_1az _1a- _2c7"
	}, {
		"chars" : "\ud83c\udf40",
		"class" : "_1az _1a- _2cd"
	}, {
		"chars" : "\ud83c\udf39",
		"class" : "_1az _1a- _2c9"
	}, {
		"chars" : "\ud83c\udf3b",
		"class" : "_1az _1a- _2cb"
	}, {
		"chars" : "\ud83c\udf3a",
		"class" : "_1az _1a- _2ca"
	}, {
		"chars" : "\ud83c\udf41",
		"class" : "_1az _1a- _2ce"
	}, {
		"chars" : "\ud83c\udf43",
		"class" : "_1az _1a- _2cg"
	}, {
		"chars" : "\ud83c\udf42",
		"class" : "_1az _1a- _2cf"
	}, {
		"chars" : "\ud83c\udf3e",
		"class" : "_1az _1a- _2cc"
	}, {
		"chars" : "\ud83c\udf35",
		"class" : "_1az _1a- _2c6"
	}, {
		"chars" : "\ud83c\udf34",
		"class" : "_1az _1a- _2c5"
	}, {
		"chars" : "\ud83c\udf31",
		"class" : "_1az _1a- _2c4"
	}, {
		"chars" : "\ud83c\udf19",
		"class" : "_1az _1a- _2c2"
	}, {
		"chars" : "\u2600",
		"class" : "_1az _1a- _2h7"
	}, {
		"chars" : "\u2601",
		"class" : "_1az _1a- _2h8"
	}, {
		"chars" : "\u26a1",
		"class" : "_1az _1a- _2h2"
	}, {
		"chars" : "\u2614",
		"class" : "_1az _1a- _2h9"
	}, {
		"chars" : "\u26c4",
		"class" : "_1az _1a- _2h3"
	}, {
		"chars" : "\ud83c\udf00",
		"class" : "_1az _1a- _2b_"
	}, {
		"chars" : "\ud83c\udf0a",
		"class" : "_1az _1a- _2c1"
	}, {
		"chars" : "\ud83c\udf8d",
		"class" : "_1az _1a- _2ct"
	}, {
		"chars" : "\ud83d\udc9d",
		"class" : "_1az _1a- _2fa"
	}, {
		"chars" : "\ud83c\udf8e",
		"class" : "_1az _1a- _2cu"
	}, {
		"chars" : "\ud83c\udf93",
		"class" : "_1az _1a- _2cx"
	}, {
		"chars" : "\ud83c\udf8f",
		"class" : "_1az _1a- _2cv"
	}, {
		"chars" : "\ud83c\udf90",
		"class" : "_1az _1a- _2cw"
	}, {
		"chars" : "\ud83c\udf83",
		"class" : "_1az _1a- _2co"
	}, {
		"chars" : "\ud83d\udc7b",
		"class" : "_1az _1a- _2eq"
	}, {
		"chars" : "\ud83c\udf85",
		"class" : "_1az _1a- _2cq"
	}, {
		"chars" : "\ud83c\udf84",
		"class" : "_1az _1a- _2cp"
	}, {
		"chars" : "\ud83c\udf81",
		"class" : "_1az _1a- _2cn"
	}, {
		"chars" : "\ud83c\udf89",
		"class" : "_1az _1a- _2cs"
	}, {
		"chars" : "\ud83c\udf88",
		"class" : "_1az _1a- _2cr"
	}, {
		"chars" : "\ud83d\udcbf",
		"class" : "_1az _1a- _2fk"
	}, {
		"chars" : "\ud83d\udcc0",
		"class" : "_1az _1a- _2fl"
	}, {
		"chars" : "\ud83d\udcbd",
		"class" : "_1az _1a- _2fi"
	}, {
		"chars" : "\ud83d\udcbe",
		"class" : "_1az _1a- _2fj"
	}, {
		"chars" : "\ud83d\udcbb",
		"class" : "_1az _1a- _2fh"
	}, {
		"chars" : "\ud83d\udcf1",
		"class" : "_1az _1a- _2fo"
	}, {
		"chars" : "\ud83d\udcde",
		"class" : "_1az _1a- _2fm"
	}, {
		"chars" : "\ud83d\udce0",
		"class" : "_1az _1a- _2fn"
	}, {
		"chars" : "\ud83d\udcfa",
		"class" : "_1az _1a- _2fq"
	}, {
		"chars" : "\ud83d\udd14",
		"class" : "_1az _1a- _2fr"
	}, {
		"chars" : "\ud83d\udcf2",
		"class" : "_1az _1a- _2fp"
	}, {
		"chars" : "\ud83c\udfbc",
		"class" : "_1az _1a- _2c-"
	}, {
		"chars" : "\ud83c\udfb5",
		"class" : "_1az _1a- _2cy"
	}, {
		"chars" : "\ud83c\udfb6",
		"class" : "_1az _1a- _2cz"
	}, {
		"chars" : "\ud83d\udc7e",
		"class" : "_1az _1a- _2et"
	}, {
		"chars" : "\u2615",
		"class" : "_1az _1a- _2ha"
	}, {
		"chars" : "\ud83c\udf7a",
		"class" : "_1az _1a- _2cm"
	}, {
		"chars" : "\ud83c\udf78",
		"class" : "_1az _1a- _2cl"
	}, {
		"chars" : "\ud83c\udf54",
		"class" : "_1az _1a- _2ck"
	}, {
		"chars" : "\ud83c\udf4e",
		"class" : "_1az _1a- _2ci"
	}, {
		"chars" : "\ud83c\udf4a",
		"class" : "_1az _1a- _2ch"
	}, {
		"chars" : "\ud83c\udf53",
		"class" : "_1az _1a- _2cj"
	}, { // Text emoticons
		"chars" : "\u2190",
		"name" : "Left"
	}, {
		"chars" : "\u2191",
		"name" : "Up"
	}, {
		"chars" : "\u2192",
		"name" : "Right"
	}, {
		"chars" : "\u2193",
		"name" : "Down"
	}, {
		"chars" : "\u2640",
		"name" : "Female"
	}, {
		"chars" : "\u2642",
		"name" : "Male"
	}, {
		"chars" : "\u2660",
		"name" : "Spade"
	}, {
		"chars" : "\u2663",
		"name" : "Club"
	}, {
		"chars" : "\u2666",
		"name" : "Diamond"
	}, {
		"chars" : "\u2669"
	}, {
		"chars" : "\u266a"
	}, {
		"chars" : "\u266b"
	}, {
		"chars" : "\u266c"
	}, {
		"chars" : "\u2714",
		"name" : "Check"
	}, {
		"chars" : "\u2718",
		"name" : "Cross"
	}, {
		"chars" : "\u0295\u2022\u1d25\u2022\u0294",
		"name" : "Teddy Bear"
	}, {
		"chars" : "\u10da(\u0ca0\u76ca\u0ca0\u10da)",
		"name" : "Y U NO"
	} ];

	// = Variables =======
	var lastActiveElement = document.activeElement;
	var openFlyoutCommand = undefined;

	// = Functions =======
	function createElement(html) {
		var outerHTML = document.createElement("div");
		outerHTML.innerHTML = html;
		return outerHTML.firstChild;
	}

	function htmlSpecialChars(string) {
		var div = document.createElement("div");
		var text = document.createTextNode(string);
		div.appendChild(text);
		return div.innerHTML;
	}

	function isInstanceOfTextInput(element) {
		return (element instanceof HTMLInputElement && element.type == "text")
				|| element instanceof HTMLTextAreaElement;
	}

	function isFlyoutOpen(flyout) {
		return flyout.className == "openToggler";
	}

	function openFlyout(flyout, open) {
		if (open === undefined) {
			open = !isFlyoutOpen(flyout); // Toggle
		}

		if (open) {
			flyout.className = "openToggler";
		} else {
			flyout.removeAttribute("class");
		}
	}

	function createTab(titleContainer, bodyContainer) {
		var html;
		// Tab; default = inactive
		html = '<li class="fbNubFlyoutTitlebar" style="display: table-cell;">';
		html += '<div class="titlebarLabel">';
		html += '</div>';
		html += '</li>';
		var title = createElement(html);
		titleContainer.appendChild(title);

		// Manual input
		html = '<div style="display: none;">';
		html += '</div>';
		var body = createElement(html);
		bodyContainer.appendChild(body);

		// Change tab listener
		(function(body) {
			title.addEventListener("click", function() {
				// Change tab
				var titles = this.parentNode.childNodes; // tab.tabContainer.childNodes
				for ( var t = 0; t < titles.length; t++) {
					if (titles[t] === this) { // Active
						this.style.background = "#ebeef4";
						this.firstChild.style.color = "inherit";
					} else { // Inactive
						titles[t].style.background = "";
						titles[t].firstChild.style.color = "";
					}
				}

				// Change body
				var bodies = body.parentNode.childNodes; // body.bodyContainer.childNodes
				for ( var b = 0; b < bodies.length; b++) {
					if (bodies[b] === body) { // Show
						body.style.display = "";
					} else { // Hide
						bodies[b].style.display = "none";
					}
				}
			});
		})(body);

		return {
			"title" : title.firstChild,
			"body" : body
		};
	}

	function createTabListBody(emoticons, filter) {
		var html;

		html = '<div style="max-height: 259px; padding-right: 17px; overflow-x: hidden; line-height: 1em;">';
		html += '<div style="padding: 5px; width: 175px; font-size: 15px;">';
		html += '</div>';
		html += '</div>';
		var body = createElement(html).firstChild;
		for ( var e = 0; e < emoticons.length; e++) {
			var emoticon = emoticons[e];
			if (!filter(emoticon)) {
				continue;
			}

			// Icons
			html = '<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';
			html += '<a';
			html += ' class="emoticon'
					+ (emoticon.class !== undefined ? ' ' + emoticon.class : '')
					+ '"';
			html += ' style="text-decoration: inherit; color: inherit;'
					+ (emoticon.class !== undefined ? ' color: transparent;'
							: ' width: auto;') + '"';
			html += (emoticon.name !== undefined ? ' title="' + emoticon.name
					+ '"' : '');
			html += '>';
			html += htmlSpecialChars(emoticon.chars);
			html += '</a>';
			html += '</span>';
			var cell = createElement(html);
			body.appendChild(cell);

			// Select emoticon listener
			var emoticonA = cell.firstChild;
			(function(emoticon) {
				emoticonA.addEventListener("click", function() {
					if (isInstanceOfTextInput(lastActiveElement)) {
						lastActiveElement.focus();

						var chars = emoticon.chars;
						var value = lastActiveElement.value;
						var start = lastActiveElement.selectionStart;
						var end = lastActiveElement.selectionEnd;
						lastActiveElement.value = value.substring(0, start)
								+ chars + value.substring(end);
						lastActiveElement.setSelectionRange(start
								+ chars.length, start + chars.length);
					}

					openFlyoutCommand = false; // Close flyout
				});
			})(emoticon);
		}

		return body.parentNode;
	}

	// = Construct UI =======
	var html;

	// Menu item
	// var navItem
	html = '<li class="navItem middleItem notifNegativeBase">';
	html += '<div class="fbJewel">';
	// {

	// Toggler
	html += '<a class="navLink" title="X10 FB Emo">'; // var navLink
	html += '<span class="emoticon emoticon_smile" style="vertical-align: middle;"></span>';
	html += '</a>';

	// Flyout
	html += '<div>'; // openToggler; var flyout
	html += '<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';
	// {

	// Beeper
	html += '<div class="jewelBeeperHeader">';
	html += '<div class="beeperNubWrapper">';
	html += '<div class="beeperNub" style="left: 4px;"></div>';
	html += '</div>';
	html += '</div>';

	// Tabs
	// var titleContainer
	html += '<ul style="display: table; width: 100%; text-align: center;">';
	html += '</ul>';

	// Bodies
	html += '<div>'; // var bodyContainer
	html += '</div>';

	// Footer
	html += '<div class="_26y3">';
	html += '<a class="_8-c" href="http://userscripts.org/scripts/show/154667" target="_blank">X10 FB Emo</a>';
	html += '</div>';

	// }
	html += '</div>'; // emoticonsPanel
	html += '</div>'; // openToggler

	// }
	html += '</div>'; // fbJewel
	html += '</li>'; // navItem

	var navItem = createElement(html);
	var pageNav = document.querySelector("#pageNav");
	pageNav.insertBefore(navItem, pageNav.firstChild);

	// Maintain active element
	navItem.addEventListener("click", function() {
		if (isInstanceOfTextInput(lastActiveElement)) {
			lastActiveElement.focus();
		}

		openFlyoutCommand = undefined; // Do nothing
	}, true);

	var navLink = navItem.firstChild.firstChild;
	var flyout = navLink.nextSibling;
	var titleContainer = flyout.firstChild.childNodes[1];
	var bodyContainer = titleContainer.nextSibling;

	// Toggle listener
	navLink.addEventListener("click", function() {
		openFlyoutCommand = !isFlyoutOpen(flyout);
	});

	// Picture emoticon tab
	var picEmoTab = createTab(titleContainer, bodyContainer);
	picEmoTab.title.click(); // Default tab
	picEmoTab.title.innerHTML = '<span class="emoticon emoticon_smile"></span>';
	picEmoTab.body.appendChild(createTabListBody(emoticons, function(emoticon) {
		if (emoticon.class === undefined) { // No picture
			return false;
		}

		// [Bug] 2 characters unicode emoticons
		if (emoticon.chars.length == 2) {
			return false;
		}

		return true;
	}));

	// Text emoticon tab
	var textEmoTab = createTab(titleContainer, bodyContainer);
	textEmoTab.title.innerHTML = '<span style="font-size: 21px;">\u263a</span>';
	textEmoTab.body.appendChild(createTabListBody(emoticons,
			function(emoticon) {
				if (emoticon.class !== undefined) { // Picture
					return false;
				}

				return true;
			}));

	// = Other listener =======

	document.addEventListener("click", function() {
		// Get active textarea
		lastActiveElement = document.activeElement;

		// Toggle flyout
		if (openFlyoutCommand !== undefined) {
			openFlyout(flyout, openFlyoutCommand);
		}
		openFlyoutCommand = false;
	});
})();