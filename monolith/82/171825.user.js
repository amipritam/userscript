// ==UserScript==
// @name           JV Lastpage
// @namespace      JV Lastpage
// @description    Accéder directement à la dernière page d'un topic en cliquant sur l'icône qui représente ce dernier dans la liste des sujets. 
// @include        http://www.jeuxvideo.com/forums/0*
// @version        1.0
// ==/UserScript==

function lastPages(moderateur) {
	var trTopics = document.getElementsByTagName('tr');
	
	for (var i = 1; trTopics[i]; i++)
	{
		if (trTopics[i].className == 'tr1' || trTopics[i].className == 'tr2')
		{
			if (moderateur == 'on')
			{
				try {
				var nbrePages = trTopics[i].getElementsByTagName('td')[4].innerHTML;
				var href = trTopics[i].getElementsByTagName('a')[1].href;
				var tdDossier = trTopics[i].getElementsByTagName('td')[0];
				var pages = Math.floor(nbrePages / 20 + 1);
				href = href.replace(/http:\/\/www\.jeuxvideo\.com\/forums\/(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(.*)\.htm/, 'http://www.jeuxvideo.com/forums/1-$2-$3-' + pages + '-$5-$6-$7-$8.htm');
	
				tdDossier.innerHTML = tdDossier.innerHTML.replace(/<img src="(.*)" alt="">/, '<a href="' + href + '"><img src="$1" alt=""></a>');
				
				} catch(err) {
				
				var nbrePages = trTopics[i].getElementsByTagName('td')[4].innerHTML;
				var href = trTopics[i].getElementsByTagName('a')[0].href;
				var tdDossier = trTopics[i].getElementsByTagName('td')[0];
				var pages = Math.floor(nbrePages / 20 + 1);
				href = href.replace(/http:\/\/www\.jeuxvideo\.com\/forums\/(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(.*)\.htm/, 'http://www.jeuxvideo.com/forums/1-$2-$3-' + pages + '-$5-$6-$7-$8.htm');
	
				tdDossier.innerHTML = tdDossier.innerHTML.replace(/<img src="(.*)" alt="">/, '<a href="' + href + '"><img src="$1" alt=""></a>');
				}
			}
			else
			{
				var nbrePages = trTopics[i].getElementsByTagName('td')[3].innerHTML;
				var href = trTopics[i].getElementsByTagName('a')[0].href;
				var tdDossier = trTopics[i].getElementsByTagName('td')[0];
				var pages = Math.floor(nbrePages / 20 + 1);
				href = href.replace(/http:\/\/www\.jeuxvideo\.com\/forums\/(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(.*)\.htm/, 'http://www.jeuxvideo.com/forums/1-$2-$3-' + pages + '-$5-$6-$7-$8.htm');

				tdDossier.innerHTML = tdDossier.innerHTML.replace(/<img src="(.*)" alt="">/, '<a href="' + href + '"><img src="$1" alt=""></a>');
			}
		}
	}
}

function init() {

	var urlInfos = window.location.href.match(/^http:\/\/www\.jeuxvideo\.com\/forums\/(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(\d{1,})\-(.*)\.htm/);
	
	if (urlInfos[1] == 0)
	{
		var lineTopicTd = document.getElementById('liste_topics').getElementsByTagName('tr'); // On vérifie si il y a la ligne de modération
		if (lineTopicTd[0].getElementsByTagName('th')[1].className == 'col_moder')
		{	
			var moderateur = 'on';
			lastPages(moderateur);
		}
		else
		{
			var moderateur = 'off';
			lastPages(moderateur);
		}
	}
}

init();