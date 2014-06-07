// ==UserScript==
// @name          Space Planets
// @namespace     http://userstyles.org
// @description	  Modifies the Tumblr Dashboard's background, icons, and logo*. 
// @author        dysphorique
// @homepage      http://userstyles.org/styles/47215
// @include       http://www.tumblr.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "Body{\n\ncolor:#666 !important;\n\nfont-size:12px !important;\n\nbackground-image:none !important\n\n}\n\n\n\n\n\n\n\na, a:visited{color:#666 !important}\n\na:hover{color:#333 !important}\n\n\n\n#dashboard_index, #dashboard_edit_post, #dashboard_submissions, #dashboard_drafts, #dashboard_post_queue,#dashboard_likes, #dashboard_followers, #dashboard_following, #dashboard_members, #main_tag_beta, #dashboard_upload_static_file, #main_about, #main_doc_page, #main_themes, #main_meetups, #main_jobs, #main_directory_page, #dashboard_settings, #dashboard_goodies {\n\nbackground-image:url('http://img219.imageshack.us/img219/1656/1263263349079.jpg') !important;\n\nbackground-repeat:repeat-x !important;\n\nbackground-attachment:fixed !important;\n\nbackground-color:#97a99d !important;\n\nbackground-position:top\n\n}\n\n\n\n#dashboard_index #content,#dashboard_submissions #content,#dashboard_drafts #content,#dashboard_post_queue #content,#dashboard_likes #content,#main_tag_beta #content{\n\nbackground: rgba(0,0,0,0.2) !important;\n\n}\n\n\n\n#dashboard_edit_post{\n\nbackground-color: #97a99d !important\n\n}\n\n\n\n\n\n\n\n#left_column #posts .post .permalink {\n\nopacity: 0 !important;\n\n}\n\n\n\n#left_column #posts .post .post_avatar,\n\n#left_column #posts .post .sub_avatar .sub_avatar_inner {\n\nbackground-color: #fbfbfb !important;\n\nborder-bottom-color: #74827a !important;\n\n}\n\n\n\n#right_column .dashboard_nav_item.active .icon.dude {\n\nbackground-position: -0px 0px;\n\n}\n\n\n\n#right_column .dashboard_nav_item.active .icon.arrow {\n\nbackground-position: -0px -0px;\n\ndisplay: inline;\n\nheight: 9px;\n\nleft: -5px;\n\nposition: absolute;\n\ntop: 12px;\n\nwidth: 5px;\n\n}\n\n\n\n#right_column .dashboard_nav_item.active .icon.gear {\n\nopacity: 0;\n\n}\n\n#right_column .dashboard_nav_item.active .icon.gear {\n\nbackground-position: -0px -0px;\n\n}\n\n\n\n#left_column #posts .post{\n\nborder-bottom:3px #6c7d7b solid !important\n\n}\n\n\n\n#nav .nav_item.active,\n\n#nav .nav_item.short active,\n\n#nav .nav_item .nav_menu,\n\n\n\n#nav .nav_item .nav_item_nipple .nav_item_nipple_pixel {\n\nbackground-color:#f41717 !important;\n\nbackground-image:none !important;\n\nborder:0px !important;\n\nbackground: rgba(0,0,0,0.3) !important;\n\n}\n\n\n\n\n\n\n\n#nav .nav_item {\n\ncolor:#0a0a0a !important;\n\n}\n\n\n\n#nav .nav_item:hover {\n\ncolor:#fff !important;\n\n}\n\n\n\n#nav .nav_item .nav_menu {\n\nborder-bottom:0px !important\n\n}\n\n\n\n#nav .nav_item .nav_menu a {\n\ncolor:#ff3620 !important;\n\nborder-top:0px !important;\n\n}\n\n\n\n#nav .nav_item .nav_menu a:hover {\n\ncolor:#fff !important;\n\nbackground: rgba(0,0,0,0.8) !important;\n\n}\n\n\n\n#footer{\n\ncolor:#666 !important;\n\nbackground: rgba(0,0,0,0.7) !important;\n\nbackground-image:none !important;\n\ntext-shadow:none !important\n\n}\n\n\n\n.no_posts_found, h1.dashboard_header, h1.dashboard_header a, h1.dashboard_header span {\n\ncolor:#ccc !important\n\n}\n\n\n\n\n\n\n\n#right_column .dashboard_nav_item {\n\nborder-bottom:none !important;\n\nbackground-image:none  !important\n\n}\n\n\n\n                    #right_column .dashboard_nav_item a,\n\n                    #right_column .dashboard_nav_item ul.dashboard_subpages,\n\n                    #right_column .dashboard_nav_item ul.dashboard_subpages li a {\n\n                        color:#e7e7e7 !important;\n\n}\n\n\n\n#right_column .dashboard_nav_item ul.dashboard_subpages li a.tracked_tag_control {\n\n                        color:#e7e7e7 !important ;\n\n                    }\n\n\n\n#right_column .dashboard_nav_item .dashboard_nav_title{color:#e7e7e7 !important}\n\n#right_column .dashboard_nav_item .dashboard_nav_title a{color:#e7e7e7 !important}\n\n\n\n#right_column .dashboard_nav_item #dashboard_controls_radar_media_fold {\n\n                        background: none !important;\n\n                    }\n\n\n\n#show_radar a, #hide_radar a,\n\n                        #hide_recommended_blogs a, #show_recommended_blogs a {\n\n                            color:#e7e7e7 !important;\n\nbackground: none !important;\n\n                        }\n\n#dashboard_controls_radar_media{background: none !important;}\n\n#dashboard_controls_suggested_blogs{background-color: rgba(0,0,0,0.5) !important; border:0px !important}\n\n#suggested_blog_avatar_1,#suggested_blog_avatar_2,#suggested_blog_avatar_3{border:0px !important}\n\n.dashboard_controls_suggested_blog{border:0px !important}\n\n\n\n\n\n#left_column #posts .notification {\n\n                        background-color:#fff !important;\n\n                        color:#666 !important;\n\n                        border-bottom-color: #eee !important;\n\nopacity: 0.5 !important;\n\n                    }\n\n\n\n#left_column #posts .notification .block {\n\n                            color:#61afb1 !important;\n\n                        }\n\n\n\n#left_column #posts .notification.alt {\n\n                        background-color: #f8f8f8 !important;\n\n                    }\n\n#left_column #posts .notification.last_notification,\n\n                    #left_column #posts .notification.single_notification {\n\n                        border-bottom-color:#a2b2a7 !important;\n\n                    }\n\n#left_column #posts .notification a {\n\n                        color:#565656 !important;\n\n                        border-bottom:0px !important;\n\n                    }\n\n#left_column #posts .notification blockquote {\n\n                        border-left-color:#eee !important;\n\n                    }\n\n\n\n#left_column #posts .notification .avatar {\n\n                        border-color:transparent !important;\n\n                        background-color:#fbfbfb !important;\n\nopacity:0.5 !important;\n\n                    }\n\n\n\n#left_column #posts .notification .avatar:hover{\n\nopacity:1 !important;\n\n                    }\n\n\n\n#dashboard_switch_blog_menu{\n\nbackground-color: #fff !important;\n\ntext-shadow:none !important;\n\nborder:0px !important;\n\nopacity: 0.7 !important;\n\n}\n\n#dashboard_switch_blog_menu_header, #dashboard_switch_blog_arrow_and_divider,.dashboard_switch_blog_menu_item,#dashboard_switch_blog_menu_footer {\n\ntext-shadow:none !important;\n\nborder:0px !important\n\n}\n\n\n\n.dashboard_switch_blog_menu_item:hover{\n\nbackground-color: #666 !important;\n\nopacity: 0.8 !important;\n\n}\n\n#dashboard_switch_blog_menu_footer{\n\nbackground-color: #fff !important;\n\nopacity: 0.7 !important;\n\n}\n\n\n\n#new_post_notice_container{\n\ncolor:#051114 !important;\n\nbackground-image: none !important;\n\n}\n\n#new_post_notice_container a{\n\ncolor:#051114 !important;\n\n}\n\n\n\n#dashboard_switch_blog_menu_current,\n\n#dashboard_switch_blog_arrow_and_divider,\n\n#dashboard_switch_blog_arrow_current\n\n{\n\nbackground-image:none !important\n\n}\n\n.notification_type_icon{\n\ndisplay:none !important\n\n}\n\n\n\n\n\nh1,h2,h3,h4,h5,h6{color:#555555 !important}\n\n\n\n.new_post_label{\n\ntext-transform: lowercase !important;\n\nfont-color: #fff;\n\nfont-family:alkjsdf !important;\n\nfont-size: 00px !important;\n\nfont-style: color:#fff !important;\n\nmargin-top:0px !important;\n\n}\n\n\n\nol#posts li.post.new_post {\n\nbackground: #fff url('http://img508.imageshack.us/img508/3952/spacetumblricons.png') center center no-repeat;\n\n}\n\n\n\nimg[src*=\"http://assets.tumblr.com/images/new_post_icons_no_labels.png\"]{\n\n    width:0;\n\n    height:70px;\n\n    padding-right:250px;\n\n    opacity: 0;\n\n}\n\n\n\n.sub_avatar{width:32px !important; height:32px !important; background-color:transparent !important}\n\n\n\n#right_column .dashboard_nav_item ul.dashboard_subpages li a {\n\ncolor:#e7e7e7 !important;\n\ntext-shadow: none !important;\n\nmargin:0px !important;\n\n}\n\n\n\n#right_column .dashboard_nav_item ul.dashboard_subpages li a:hover{\n\ncolor:#fff !important;\n\ntext-shadow: none !important;\n\n}\n#logo {\n\nheight: 0 !important;\n\nwidth: 0 !important;\n\n\n\npadding-left: 218px !important;\n\npadding-top: 49px !important;\n\nbackground: url(http://img854.imageshack.us/img854/7417/spacetumblrlogodark.png) no-repeat !important\n\n\n\n}\n\n\n\n*/";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();