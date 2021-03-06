// ==UserScript==
// @name          爱问共享资料豆瓣插件
// @namespace     http://ishare.iask.sina.com.cn
// @version	      v1.0
// @include       http://book.douban.com/subject/*
// @exclude       http://movie.douban.com/
// @exclude       http://music.douban.com/
// @exclude       http://book.douban.com/
// @exclude       http://www.douban.com/*
// @exclude       http://9.douban.com/*
// @exclude       http://*.douban.com/subject/*/edit
// @exclude       http://*.douban.com/subject/*/update_image
// @exclude       http://*.douban.com/subject/*/edit?mine
// @exclude       http://*.douban.com/subject/*/new_version
// @exclude       http://*.douban.com/subject/*/offers
// @exclude       http://*.douban.com/subject/*/new_offer
// @exclude       http://*.douban.com/subject/offer/*/
// @exclude       http://*.douban.com/subject/*/cinema?view=ticket
// @exclude       http://*.douban.com/subject/*/doulists
// @exclude       http://*.douban.com/subject/*/all_photos
// @exclude       http://*.douban.com/subject/*/mupload
// @exclude       http://*.douban.com/subject/*/comments
// @exclude       http://*.douban.com/subject/*/reviews
// @exclude       http://*.douban.com/subject/*/new_review
// @exclude       http://*.douban.com/subject/*/group_collectors
// @exclude       http://*.douban.com/subject/*/discussion/
// @exclude       http://*.douban.com/subject/*/wishes
// @exclude       http://*.douban.com/subject/*/doings
// @exclude       http://*.douban.com/subject/*/collections
// ==/UserScript==

function init(){
	var keyword = encodeURIComponent($("#wrapper h1 span").text()),
	    url = 'http://api.iask.sina.com.cn/api/isharesearch.php?key=' + keyword + '&datatype=json&start=0&num=5&keycharset=utf8',
	    html_title = '<div class="da3" style="margin-bottom:0px;padding-bottom:1px;"><dl><dt style="display:inline;"><img src="http://iask.com/favicon.ico" width="15px;" height="15px;" style="margin-bottom:-2px;" /> <b><a href="http://ishare.iask.sina.com.cn/?from=douban" target="_blank">爱问共享资料</a>推荐：</b></dt><a href="http://ishare.iask.sina.com.cn/upload/?from=douban" target="_blank">我要分享资料</a><dd>最大的中文在线资料分享站，数百万资料免费下载</dd></dl></div>'
	    html_body_start = '<div class="indent" id="db-doulist-section" style="padding-left:5px;border:1px #F4F4EC solid;"><ul class="bs">',
	    html_body_yes = '',
	    html_body_no = '<li>没有找到相关资料，<a href="http://ishare.iask.sina.com.cn/upload/?from=douban" title="资料上传" target="_blank"><b>立即上传</b></a>即可与豆友们分享！</li>',
	    html_body_end = '</ul>',
	    html_body_endmore = '<div style="text-align:right; padding:5px 10px 5px 0px;"><a href="http://api.iask.sina.com.cn/api/search2.php?key=' + keyword + '&from=douban&format=" target="_blank">更多&hellip;</a></div>',
	    html_body_endend = '</div>',
	    length = 30,
	    unitname = new Array('Y','Z','E','P','T','G','M','K'),
	    unitsize = new Array(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,1024 * 1024 * 1024 * 1024 * 1024 * 1024,1024 * 1024 * 1024 * 1024 * 1024,1024 * 1024 * 1024 * 1024,1024 * 1024 * 1024,1024 * 1024,1024);

	$.getScript(url, function() {
        if( iaskSearchResult.sp.m > 0 ) {
            var title,title2, image, filesize, url, unit,
                regex = /([A-Z\u0391-\uffe5])/g;
            $(iaskSearchResult.sp.result).each(function (index, value) {
                title = value.title;
                title2 = title.replace( regex, "$1*" );
                ellipsis = title2.length > length ? '..' : '' ;
                title2 = title2.substr( 0, length ).replace( /\*/g, '' ) + ellipsis;
                filesize = value.filesize;
                if( filesize < 1024 ) filesize = filesize+'B';
                for( var i=0; i<unitname.length; i++ ){
                    if( filesize > unitsize[i] || filesize==unitsize[i] ){
                        filesize = Math.round( filesize / unitsize[i] * 10 ) / 10 + unitname[i];
                    }
                }
                url = value.url;
                html_body_yes += '<li><a href="' + url + '?from=douban" title="' + title + '" target="_blank">' + title2 + '</a><span class="pl">(大小:' + filesize + ')</span></li>';
            });
            $( '.aside' ).prepend( html_title + html_body_start + html_body_yes + html_body_end + html_body_endmore + html_body_endend );
        } else {
            $( '.aside' ).prepend( html_title + html_body_start + html_body_no + html_body_end + html_body_endend );
        }
    }
	);
}

function contentEval( source ) {
	if ('function' == typeof source) {
		source = '(' + source + ')();'
	}
	var script = document.createElement('script');
	script.setAttribute("type", "application/javascript");
	script.textContent = source;
	document.body.appendChild(script);
	document.body.removeChild(script);
}
contentEval( init );