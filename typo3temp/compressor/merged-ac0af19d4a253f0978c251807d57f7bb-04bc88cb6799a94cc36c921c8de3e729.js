
/*
 * Modernizr v1.6
 * http://www.modernizr.com
 *
 * Developed by: 
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
window.Modernizr=function(i,e,u){function s(a,b){return(""+a).indexOf(b)!==-1}function D(a,b){for(var c in a)if(j[a[c]]!==u&&(!b||b(a[c],E)))return true}function n(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1);c=(a+" "+F.join(c+" ")+c).split(" ");return!!D(c,b)}function S(){f.input=function(a){for(var b=0,c=a.length;b<c;b++)L[a[b]]=!!(a[b]in h);return L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));f.inputtypes=function(a){for(var b=0,c,k=a.length;b<
k;b++){h.setAttribute("type",a[b]);if(c=h.type!=="text"){h.value=M;if(/^range$/.test(h.type)&&h.style.WebkitAppearance!==u){l.appendChild(h);c=e.defaultView;c=c.getComputedStyle&&c.getComputedStyle(h,null).WebkitAppearance!=="textfield"&&h.offsetHeight!==0;l.removeChild(h)}else/^(search|tel)$/.test(h.type)||(c=/^(url|email)$/.test(h.type)?h.checkValidity&&h.checkValidity()===false:h.value!=M)}N[a[b]]=!!c}return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}
var f={},l=e.documentElement,E=e.createElement("modernizr"),j=E.style,h=e.createElement("input"),M=":)",O=Object.prototype.toString,q=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),F="Webkit Moz O ms Khtml".split(" "),v={svg:"http://www.w3.org/2000/svg"},d={},N={},L={},P=[],w,Q=function(a){var b=document.createElement("style"),c=e.createElement("div");b.textContent=a+"{#modernizr{height:3px}}";(e.head||e.getElementsByTagName("head")[0]).appendChild(b);c.id="modernizr";l.appendChild(c);a=c.offsetHeight===
3;b.parentNode.removeChild(b);c.parentNode.removeChild(c);return!!a},o=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,c){c=c||document.createElement(a[b]||"div");b="on"+b;var k=b in c;if(!k){c.setAttribute||(c=document.createElement("div"));if(c.setAttribute&&c.removeAttribute){c.setAttribute(b,"");k=typeof c[b]=="function";if(typeof c[b]!="undefined")c[b]=u;c.removeAttribute(b)}}return k}}(),G={}.hasOwnProperty,R;R=
typeof G!=="undefined"&&typeof G.call!=="undefined"?function(a,b){return G.call(a,b)}:function(a,b){return b in a&&typeof a.constructor.prototype[b]==="undefined"};d.flexbox=function(){var a=e.createElement("div"),b=e.createElement("div");(function(k,g,r,x){g+=":";k.style.cssText=(g+q.join(r+";"+g)).slice(0,-g.length)+(x||"")})(a,"display","box","width:42px;padding:0;");b.style.cssText=q.join("box-flex:1;")+"width:10px;";a.appendChild(b);l.appendChild(a);var c=b.offsetWidth===42;a.removeChild(b);
l.removeChild(a);return c};d.canvas=function(){var a=e.createElement("canvas");return!!(a.getContext&&a.getContext("2d"))};d.canvastext=function(){return!!(f.canvas&&typeof e.createElement("canvas").getContext("2d").fillText=="function")};d.webgl=function(){var a=e.createElement("canvas");try{if(a.getContext("webgl"))return true}catch(b){}try{if(a.getContext("experimental-webgl"))return true}catch(c){}return false};d.touch=function(){return"ontouchstart"in i||Q("@media ("+q.join("touch-enabled),(")+
"modernizr)")};d.geolocation=function(){return!!navigator.geolocation};d.postmessage=function(){return!!i.postMessage};d.websqldatabase=function(){return!!i.openDatabase};d.indexedDB=function(){for(var a=-1,b=F.length;++a<b;){var c=F[a].toLowerCase();if(i[c+"_indexedDB"]||i[c+"IndexedDB"])return true}return false};d.hashchange=function(){return o("hashchange",i)&&(document.documentMode===u||document.documentMode>7)};d.history=function(){return!!(i.history&&history.pushState)};d.draganddrop=function(){return o("drag")&&
o("dragstart")&&o("dragenter")&&o("dragover")&&o("dragleave")&&o("dragend")&&o("drop")};d.websockets=function(){return"WebSocket"in i};d.rgba=function(){j.cssText="background-color:rgba(150,255,150,.5)";return s(j.backgroundColor,"rgba")};d.hsla=function(){j.cssText="background-color:hsla(120,40%,100%,.5)";return s(j.backgroundColor,"rgba")||s(j.backgroundColor,"hsla")};d.multiplebgs=function(){j.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(j.background)};d.backgroundsize=
function(){return n("backgroundSize")};d.borderimage=function(){return n("borderImage")};d.borderradius=function(){return n("borderRadius","",function(a){return s(a,"orderRadius")})};d.boxshadow=function(){return n("boxShadow")};d.textshadow=function(){return e.createElement("div").style.textShadow===""};d.opacity=function(){var a=q.join("opacity:.5;")+"";j.cssText=a;return s(j.opacity,"0.5")};d.cssanimations=function(){return n("animationName")};d.csscolumns=function(){return n("columnCount")};d.cssgradients=
function(){var a=("background-image:"+q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:")+q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);j.cssText=a;return s(j.backgroundImage,"gradient")};d.cssreflections=function(){return n("boxReflect")};d.csstransforms=function(){return!!D(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};d.csstransforms3d=function(){var a=!!D(["perspectiveProperty","WebkitPerspective",
"MozPerspective","OPerspective","msPerspective"]);if(a)a=Q("@media ("+q.join("transform-3d),(")+"modernizr)");return a};d.csstransitions=function(){return n("transitionProperty")};d.fontface=function(){var a,b=e.head||e.getElementsByTagName("head")[0]||l,c=e.createElement("style"),k=e.implementation||{hasFeature:function(){return false}};c.type="text/css";b.insertBefore(c,b.firstChild);a=c.sheet||c.styleSheet;b=k.hasFeature("CSS2","")?function(g){if(!(a&&g))return false;var r=false;try{a.insertRule(g,
0);r=!/unknown/i.test(a.cssRules[0].cssText);a.deleteRule(a.cssRules.length-1)}catch(x){}return r}:function(g){if(!(a&&g))return false;a.cssText=g;return a.cssText.length!==0&&!/unknown/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(g.split(" ")[0])===0};f._fontfaceready=function(g){g(f.fontface)};return b('@font-face { font-family: "font"; src: "font.ttf"; }')};d.video=function(){var a=e.createElement("video"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('video/ogg; codecs="theora"');
b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return b};d.audio=function(){var a=e.createElement("audio"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"');b.mp3=a.canPlayType("audio/mpeg;");b.wav=a.canPlayType('audio/wav; codecs="1"');b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}return b};d.localstorage=function(){try{return"localStorage"in
i&&i.localStorage!==null}catch(a){return false}};d.sessionstorage=function(){try{return"sessionStorage"in i&&i.sessionStorage!==null}catch(a){return false}};d.webWorkers=function(){return!!i.Worker};d.applicationcache=function(){return!!i.applicationCache};d.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect};d.inlinesvg=function(){var a=document.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==v.svg};d.smil=function(){return!!e.createElementNS&&
/SVG/.test(O.call(e.createElementNS(v.svg,"animate")))};d.svgclippaths=function(){return!!e.createElementNS&&/SVG/.test(O.call(e.createElementNS(v.svg,"clipPath")))};for(var H in d)if(R(d,H)){w=H.toLowerCase();f[w]=d[H]();P.push((f[w]?"":"no-")+w)}f.input||S();f.crosswindowmessaging=f.postmessage;f.historymanagement=f.history;f.addTest=function(a,b){a=a.toLowerCase();if(!f[a]){b=!!b();l.className+=" "+(b?"":"no-")+a;f[a]=b;return f}};j.cssText="";E=h=null;i.attachEvent&&function(){var a=e.createElement("div");
a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function c(p){for(var m=-1;++m<r;)p.createElement(g[m])}function k(p,m){for(var I=p.length,t=-1,y,J=[];++t<I;){y=p[t];m=y.media||m;J.push(k(y.imports,m));J.push(y.cssText)}return J.join("")}var g="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),r=g.length,x=RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
"gi"),T=RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])","gi"),z=b.createDocumentFragment(),A=b.documentElement,K=A.firstChild,B=b.createElement("style"),C=b.createElement("body");B.media="all";c(b);c(z);a.attachEvent("onbeforeprint",function(){for(var p=-1;++p<r;)for(var m=b.getElementsByTagName(g[p]),I=m.length,t=-1;++t<I;)if(m[t].className.indexOf("iepp_")<0)m[t].className+=" iepp_"+
g[p];K.insertBefore(B,K.firstChild);B.styleSheet.cssText=k(b.styleSheets,"all").replace(T,".iepp_$1");z.appendChild(b.body);A.appendChild(C);C.innerHTML=z.firstChild.innerHTML.replace(x,"<$1bdo")});a.attachEvent("onafterprint",function(){C.innerHTML="";A.removeChild(C);K.removeChild(B);A.appendChild(z.firstChild)})}(this,document);f._enableHTML5=true;f._version="1.6";l.className=l.className.replace(/\bno-js\b/,"")+" js";l.className+=" "+P.join(" ");return f}(this,this.document);
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Steffen Kamper <info@sk-typo3.de>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Flashmessage rendered by ExtJS
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage t3lib
 */
Ext.ns('TYPO3');

/**
 * Object for named severities
 */
TYPO3.Severity = {
	notice: 0,
	information: 1,
	ok: 2,
	warning: 3,
	error: 4
};

/**
 * @class TYPO3.Flashmessage
 * Passive popup box singleton
 * @singleton
 *
 * Example (Information message):
 * TYPO3.Flashmessage.display(1, 'TYPO3 Backend - Version 4.4', 'Ready for take off', 3);
 */
TYPO3.Flashmessage = function() {
	var messageContainer;
	var severities = ['notice', 'information', 'ok', 'warning', 'error'];

	function createBox(severity, title, message) {
		return ['<div class="typo3-message message-', severity, '" style="width: 400px">',
				'<div class="t3-icon t3-icon-actions t3-icon-actions-message t3-icon-actions-message-close t3-icon-message-' + severity + '-close"></div>',
				'<div class="header-container">',
				'<div class="message-header">', title, '</div>',
				'</div>',
				'<div class="message-body">', message, '</div>',
				'</div>'].join('');
	}

	return {
		/**
		 * Shows popup
		 * @member TYPO3.Flashmessage
		 * @param int severity (0=notice, 1=information, 2=ok, 3=warning, 4=error)
		 * @param string title
		 * @param string message
		 * @param float duration in sec (default 5)
		 */
		display : function(severity, title, message, duration) {
			duration = duration || 5;
			if (!messageContainer) {
				messageContainer = Ext.DomHelper.insertFirst(document.body, {
					id   : 'msg-div',
					style: 'position:absolute;z-index:10000'
				}, true);
			}

			var box = Ext.DomHelper.append(messageContainer, {
				html: createBox(severities[severity], title, message)
			}, true);
			messageContainer.alignTo(document, 't-t');
			box.child('.t3-icon-actions-message-close').on('click',	function (e, t, o) {
				var node;
				node = Ext.get(t).findParent('div.typo3-message');
				node.hide();
				Ext.removeNode(node.dom);
			}, box);
			box.slideIn('t').pause(duration).ghost('t', {remove: true});
		}
	};
}();

/***************************************************************
*
*  javascript functions regarding the TYPO3 wrapper
*  for the javascript library "prototype".
*
*  Copyright notice
*
*  (c) 2008-2011 Benjamin Mack <benni@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 backend provided by
*  Kasper Skaarhoj <kasper@typo3.com> together with TYPO3
*
*  Released under GNU/GPL (see license file in /typo3/)
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*
*  This copyright notice MUST APPEAR in all copies of this script
*
***************************************************************/

// Please make sure that prototype.js is loaded before loading this
// file in your script, the responder is only added if prototype was loaded

if (Prototype) {
	// adding generic a responder to use when a AJAX request is done
	Ajax.Responders.register({
		onCreate: function(request, transport) {

			// if the TYPO3 AJAX backend is used,
			// the onSuccess & onComplete callbacks are hooked
			if (request.url.indexOf("ajax.php") === -1) {
				return;
			}

			var origSuccess = request.options.onSuccess, origComplete = request.options.onComplete;

			// hooking "onSuccess"
			if (origSuccess) {
				request.options.onSuccess = function(xhr, json) {
					if (!json) {
						T3AJAX.showError(xhr);
					} else {
						origSuccess(xhr, json);
					}
				}
			}

			// hooking "onComplete", using T3Error handler if available
			if (origComplete) {
				request.options.onComplete = function(xhr, json) {
					if (!json && request.options.onT3Error) {
						request.options.onT3Error(xhr, json);
					} else if (!json) {
						T3AJAX.showError(xhr);
					} else {
						origComplete(xhr, json);
					}
				};
			}
		}
	});
}

var T3AJAX = {};
T3AJAX.showError = function(xhr, json) {
	if (typeof xhr.responseText !== undefined && xhr.responseText) {
		if (typeof Ext.MessageBox !== undefined) {
			Ext.MessageBox.alert('TYPO3', xhr.responseText);
		}
		else {
			alert(xhr.responseText);
		}
	}
};

// common storage and global object, could later hold more information about the current user etc.
var TYPO3 = TYPO3 || {};
TYPO3 = Ext.apply(TYPO3, {
	// store instances that only should be running once
	_instances: {},
	getInstance: function(className) {
		return TYPO3._instances[className] || false;
	},
	addInstance: function(className, instance) {
		TYPO3._instances[className] = instance;
		return instance;
	},

	helpers: {
		// creates an array by splitting a string into parts, taking a delimiter
		split: function(str, delim) {
			var res = [];
			while (str.indexOf(delim) > 0) {
				res.push(str.substr(0, str.indexOf(delim)));
				str = str.substr(str.indexOf(delim) + delim.length);
			}
			return res;
		}
	}
});

TYPO3.LLL = {"core":{"waitTitle":"Logging in...","refresh_login_failed":"Login failed","refresh_login_failed_message":"Password not correct.","refresh_login_title":"Refresh Login to TYPO3 (User: admin)","login_expired":"Your TYPO3 login has expired. You need to login again if you want to continue. Otherwise you can close the current browser window.","refresh_login_username":"Username","refresh_login_password":"Password","refresh_login_emptyPassword":"Empty password is not allowed!","refresh_login_button":"Login","refresh_logout_button":"Logout","please_wait":"Please wait ...","loadingIndicator":"Loading ...","be_locked":"The TYPO3 backend is currently locked for maintenance. Leave this browser window open and the backend will automatically become available again once maintenance is complete.","refresh_login_countdown_singular":"{0} second","refresh_login_countdown":"{0} seconds","login_about_to_expire":"Your TYPO3 login is about to expire. Please confirm that you want to stay logged in.","login_about_to_expire_title":"TYPO3 login expiration notice","refresh_login_refresh_button":"Stay logged in!","refresh_direct_logout_button":"No, log out.","tabs_closeAll":"Close All Tabs","tabs_closeOther":"Close Other Tabs","tabs_close":"Close Tab","tabs_openInBrowserWindow":"Open In Browser Window","csh_tooltip_loading":"Loading help..."},"fileUpload":{"windowTitle":"File Upload Progress","buttonSelectFiles":"Select Files","buttonCancelAll":"Cancel All Uploads","infoComponentMaxFileSize":"You can upload files with a maximum size of {0}.","infoComponentFileUploadLimit":"You can upload a total of {0}.","infoComponentFileTypeLimit":"You can upload the following file types {0}.","infoComponentOverrideFiles":"Overwrite existing files","processRunning":"Another process is already uploading","uploadWait":"Waiting to start upload of {0}","uploadStarting":"Starting upload of {0}","uploadProgress":"{0}% of {1} uploaded","uploadSuccess":"{0} was successfully uploaded!","errorQueueLimitExceeded":"Too many files selected","errorQueueFileSizeLimit":"{0} is too big","errorQueueZeroByteFile":"{0} is empty","errorQueueInvalidFiletype":"Filetype not allowed for {0}","errorUploadHttp":"Too many files selected","errorUploadMissingUrl":"Internal error: No Upload URL set","errorUploadIO":"Internal error: Problems while reading\/writing the file","errorUploadSecurityError":"Internal error: {0}","errorUploadLimit":"Upload limit exceeded","errorUploadFailed":"Upload failed","errorUploadFileIDNotFound":"Internal error: File ID not found","errorUploadFileValidation":"Internal error while validating the file","errorUploadFileCancelled":"Upload of {0} canceled","errorUploadStopped":"Upload of {0} stopped","allErrorMessageTitle":"All uploads failed","allErrorMessageText":"All of your uploads failed.<br \/><br \/>If this problem persists, please try another browser, contact your administrator or disable this \"Flash Uploader\" in your User Settings.<br \/><br \/>Detailed problem description:<br \/>","allError401":"The server returned the status code 401, which is related to a .htaccess file used for password protection on your server. Unfortunately this can not be handled by your browser's Flash plugin.","allError2038":"An input\/output error occured (Error #2038). This i.e. happens with servers using a self-signed SSL certificate, which is a limitation of your browser's Flash plugin."},"liveSearch":{"title":"Short result list","helpTitle":"How to use advanced search tags","emptyText":"Enter search term","loadingText":"Searching...","listEmptyText":"No results found.","showAllResults":"Show All","helpDescription":"Search in certain tables:","helpDescriptionPages":"#page:Home will search for all pages with the title \"Home\"","helpDescriptionContent":""},"viewPort":{"tooltipModuleMenuSplit":"Drag to resize the Modules Menu","tooltipNavigationContainerSplitDrag":"Drag to resize or double click to collapse the tree","tooltipDebugPanelSplitDrag":"Drag to resize or click to collapse the Debug Panel."}};
/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


/* ******************* */
/* Constructor & Init  */
/* ******************* */
var SWFUpload;

if (SWFUpload == undefined) {
	SWFUpload = function (settings) {
		this.initSWFUpload(settings);
	};
}

SWFUpload.prototype.initSWFUpload = function (settings) {
	try {
		this.customSettings = {};	// A container where developers can place their own settings associated with this instance.
		this.settings = settings;
		this.eventQueue = [];
		this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
		this.movieElement = null;


		// Setup global control tracking
		SWFUpload.instances[this.movieName] = this;

		// Load the settings.  Load the Flash movie.
		this.initSettings();
		this.loadFlash();
		this.displayDebugInfo();
	} catch (ex) {
		delete SWFUpload.instances[this.movieName];
		throw ex;
	}
};

/* *************** */
/* Static Members  */
/* *************** */
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
	QUEUE_LIMIT_EXCEEDED	  		: -100,
	FILE_EXCEEDS_SIZE_LIMIT  		: -110,
	ZERO_BYTE_FILE			  		: -120,
	INVALID_FILETYPE		  		: -130
};
SWFUpload.UPLOAD_ERROR = {
	HTTP_ERROR				  		: -200,
	MISSING_UPLOAD_URL	      		: -210,
	IO_ERROR				  		: -220,
	SECURITY_ERROR			  		: -230,
	UPLOAD_LIMIT_EXCEEDED	  		: -240,
	UPLOAD_FAILED			  		: -250,
	SPECIFIED_FILE_ID_NOT_FOUND		: -260,
	FILE_VALIDATION_FAILED	  		: -270,
	FILE_CANCELLED			  		: -280,
	UPLOAD_STOPPED					: -290
};
SWFUpload.FILE_STATUS = {
	QUEUED		 : -1,
	IN_PROGRESS	 : -2,
	ERROR		 : -3,
	COMPLETE	 : -4,
	CANCELLED	 : -5
};
SWFUpload.BUTTON_ACTION = {
	SELECT_FILE  : -100,
	SELECT_FILES : -110,
	START_UPLOAD : -120
};
SWFUpload.CURSOR = {
	ARROW : -1,
	HAND : -2
};
SWFUpload.WINDOW_MODE = {
	WINDOW : "window",
	TRANSPARENT : "transparent",
	OPAQUE : "opaque"
};

// Private: takes a URL, determines if it is relative and converts to an absolute URL
// using the current site. Only processes the URL if it can, otherwise returns the URL untouched
SWFUpload.completeURL = function(url) {
	if (typeof(url) !== "string" || url.match(/^https?:\/\//i) || url.match(/^\//)) {
		return url;
	}
	
	var currentURL = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
	
	var indexSlash = window.location.pathname.lastIndexOf("/");
	if (indexSlash <= 0) {
		path = "/";
	} else {
		path = window.location.pathname.substr(0, indexSlash) + "/";
	}
	
	return /*currentURL +*/ path + url;
	
};


/* ******************** */
/* Instance Members  */
/* ******************** */

// Private: initSettings ensures that all the
// settings are set, getting a default value if one was not assigned.
SWFUpload.prototype.initSettings = function () {
	this.ensureDefault = function (settingName, defaultValue) {
		this.settings[settingName] = (this.settings[settingName] == undefined) ? defaultValue : this.settings[settingName];
	};
	
	// Upload backend settings
	this.ensureDefault("upload_url", "");
	this.ensureDefault("preserve_relative_urls", false);
	this.ensureDefault("file_post_name", "Filedata");
	this.ensureDefault("post_params", {});
	this.ensureDefault("use_query_string", false);
	this.ensureDefault("requeue_on_error", false);
	this.ensureDefault("http_success", []);
	this.ensureDefault("assume_success_timeout", 0);
	
	// File Settings
	this.ensureDefault("file_types", "*.*");
	this.ensureDefault("file_types_description", "All Files");
	this.ensureDefault("file_size_limit", 0);	// Default zero means "unlimited"
	this.ensureDefault("file_upload_limit", 0);
	this.ensureDefault("file_queue_limit", 0);

	// Flash Settings
	this.ensureDefault("flash_url", "swfupload.swf");
	this.ensureDefault("prevent_swf_caching", true);
	
	// Button Settings
	this.ensureDefault("button_image_url", "");
	this.ensureDefault("button_width", 1);
	this.ensureDefault("button_height", 1);
	this.ensureDefault("button_text", "");
	this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
	this.ensureDefault("button_text_top_padding", 0);
	this.ensureDefault("button_text_left_padding", 0);
	this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
	this.ensureDefault("button_disabled", false);
	this.ensureDefault("button_placeholder_id", "");
	this.ensureDefault("button_placeholder", null);
	this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
	this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
	
	// Debug Settings
	this.ensureDefault("debug", false);
	this.settings.debug_enabled = this.settings.debug;	// Here to maintain v2 API
	
	// Event Handlers
	this.settings.return_upload_start_handler = this.returnUploadStart;
	this.ensureDefault("swfupload_loaded_handler", null);
	this.ensureDefault("file_dialog_start_handler", null);
	this.ensureDefault("file_queued_handler", null);
	this.ensureDefault("file_queue_error_handler", null);
	this.ensureDefault("file_dialog_complete_handler", null);
	
	this.ensureDefault("upload_start_handler", null);
	this.ensureDefault("upload_progress_handler", null);
	this.ensureDefault("upload_error_handler", null);
	this.ensureDefault("upload_success_handler", null);
	this.ensureDefault("upload_complete_handler", null);
	
	this.ensureDefault("debug_handler", this.debugMessage);

	this.ensureDefault("custom_settings", {});

	// Other settings
	this.customSettings = this.settings.custom_settings;
	
	// Update the flash url if needed
	if (!!this.settings.prevent_swf_caching) {
		this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
	}
	
	if (!this.settings.preserve_relative_urls) {
		//this.settings.flash_url = SWFUpload.completeURL(this.settings.flash_url);	// Don't need to do this one since flash doesn't look at it
		this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
		this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
	}
	
	delete this.ensureDefault;
};

// Private: loadFlash replaces the button_placeholder element with the flash movie.
SWFUpload.prototype.loadFlash = function () {
	var targetElement, tempParent;

	// Make sure an element with the ID we are going to use doesn't already exist
	if (document.getElementById(this.movieName) !== null) {
		throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
	}

	// Get the element where we will be placing the flash movie
	targetElement = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;

	if (targetElement == undefined) {
		throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
	}

	// Append the container and load the flash
	tempParent = document.createElement("div");
	tempParent.innerHTML = this.getFlashHTML();	// Using innerHTML is non-standard but the only sensible way to dynamically add Flash in IE (and maybe other browsers)
	targetElement.parentNode.replaceChild(tempParent.firstChild, targetElement);

	// Fix IE Flash/Form bug
	if (window[this.movieName] == undefined) {
		window[this.movieName] = this.getMovieElement();
	}
	
};

// Private: getFlashHTML generates the object tag needed to embed the flash in to the document
SWFUpload.prototype.getFlashHTML = function () {
	// Flash Satay object syntax: http://www.alistapart.com/articles/flashsatay
	return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">',
				'<param name="wmode" value="', this.settings.button_window_mode, '" />',
				'<param name="movie" value="', this.settings.flash_url, '" />',
				'<param name="quality" value="high" />',
				'<param name="menu" value="false" />',
				'<param name="allowScriptAccess" value="always" />',
				'<param name="flashvars" value="' + this.getFlashVars() + '" />',
				'</object>'].join("");
};

// Private: getFlashVars builds the parameter string that will be passed
// to flash in the flashvars param.
SWFUpload.prototype.getFlashVars = function () {
	// Build a string from the post param object
	var paramString = this.buildParamString();
	var httpSuccessString = this.settings.http_success.join(",");
	
	// Build the parameter string
	return ["movieName=", encodeURIComponent(this.movieName),
			"&amp;uploadURL=", encodeURIComponent(this.settings.upload_url),
			"&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string),
			"&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error),
			"&amp;httpSuccess=", encodeURIComponent(httpSuccessString),
			"&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout),
			"&amp;params=", encodeURIComponent(paramString),
			"&amp;filePostName=", encodeURIComponent(this.settings.file_post_name),
			"&amp;fileTypes=", encodeURIComponent(this.settings.file_types),
			"&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description),
			"&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit),
			"&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit),
			"&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit),
			"&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled),
			"&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url),
			"&amp;buttonWidth=", encodeURIComponent(this.settings.button_width),
			"&amp;buttonHeight=", encodeURIComponent(this.settings.button_height),
			"&amp;buttonText=", encodeURIComponent(this.settings.button_text),
			"&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding),
			"&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding),
			"&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style),
			"&amp;buttonAction=", encodeURIComponent(this.settings.button_action),
			"&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled),
			"&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)
		].join("");
};

// Public: getMovieElement retrieves the DOM reference to the Flash element added by SWFUpload
// The element is cached after the first lookup
SWFUpload.prototype.getMovieElement = function () {
	if (this.movieElement == undefined) {
		this.movieElement = document.getElementById(this.movieName);
	}

	if (this.movieElement === null) {
		throw "Could not find Flash element";
	}
	
	return this.movieElement;
};

// Private: buildParamString takes the name/value pairs in the post_params setting object
// and joins them up in to a string formatted "name=value&amp;name=value"
SWFUpload.prototype.buildParamString = function () {
	var postParams = this.settings.post_params; 
	var paramStringPairs = [];

	if (typeof(postParams) === "object") {
		for (var name in postParams) {
			if (postParams.hasOwnProperty(name)) {
				paramStringPairs.push(encodeURIComponent(name.toString()) + "=" + encodeURIComponent(postParams[name].toString()));
			}
		}
	}

	return paramStringPairs.join("&amp;");
};

// Public: Used to remove a SWFUpload instance from the page. This method strives to remove
// all references to the SWF, and other objects so memory is properly freed.
// Returns true if everything was destroyed. Returns a false if a failure occurs leaving SWFUpload in an inconsistant state.
// Credits: Major improvements provided by steffen
SWFUpload.prototype.destroy = function () {
	try {
		// Make sure Flash is done before we try to remove it
		this.cancelUpload(null, false);
		

		// Remove the SWFUpload DOM nodes
		var movieElement = null;
		movieElement = this.getMovieElement();
		
		if (movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			// Loop through all the movie's properties and remove all function references (DOM/JS IE 6/7 memory leak workaround)
			for (var i in movieElement) {
				try {
					if (typeof(movieElement[i]) === "function") {
						movieElement[i] = null;
					}
				} catch (ex1) {}
			}

			// Remove the Movie Element from the page
			try {
				movieElement.parentNode.removeChild(movieElement);
			} catch (ex) {}
		}
		
		// Remove IE form fix reference
		window[this.movieName] = null;

		// Destroy other references
		SWFUpload.instances[this.movieName] = null;
		delete SWFUpload.instances[this.movieName];

		this.movieElement = null;
		this.settings = null;
		this.customSettings = null;
		this.eventQueue = null;
		this.movieName = null;
		
		
		return true;
	} catch (ex2) {
		return false;
	}
};


// Public: displayDebugInfo prints out settings and configuration
// information about this SWFUpload instance.
// This function (and any references to it) can be deleted when placing
// SWFUpload in production.
SWFUpload.prototype.displayDebugInfo = function () {
	this.debug(
		[
			"---SWFUpload Instance Info---\n",
			"Version: ", SWFUpload.version, "\n",
			"Movie Name: ", this.movieName, "\n",
			"Settings:\n",
			"\t", "upload_url:               ", this.settings.upload_url, "\n",
			"\t", "flash_url:                ", this.settings.flash_url, "\n",
			"\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n",
			"\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n",
			"\t", "http_success:             ", this.settings.http_success.join(", "), "\n",
			"\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n",
			"\t", "file_post_name:           ", this.settings.file_post_name, "\n",
			"\t", "post_params:              ", this.settings.post_params.toString(), "\n",
			"\t", "file_types:               ", this.settings.file_types, "\n",
			"\t", "file_types_description:   ", this.settings.file_types_description, "\n",
			"\t", "file_size_limit:          ", this.settings.file_size_limit, "\n",
			"\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n",
			"\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n",
			"\t", "debug:                    ", this.settings.debug.toString(), "\n",

			"\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n",

			"\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n",
			"\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n",
			"\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n",
			"\t", "button_width:             ", this.settings.button_width.toString(), "\n",
			"\t", "button_height:            ", this.settings.button_height.toString(), "\n",
			"\t", "button_text:              ", this.settings.button_text.toString(), "\n",
			"\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n",
			"\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n",
			"\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n",
			"\t", "button_action:            ", this.settings.button_action.toString(), "\n",
			"\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n",

			"\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n",
			"Event Handlers:\n",
			"\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n",
			"\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n",
			"\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n",
			"\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n",
			"\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n",
			"\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n",
			"\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n",
			"\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n",
			"\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n",
			"\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"
		].join("")
	);
};

/* Note: addSetting and getSetting are no longer used by SWFUpload but are included
	the maintain v2 API compatibility
*/
// Public: (Deprecated) addSetting adds a setting value. If the value given is undefined or null then the default_value is used.
SWFUpload.prototype.addSetting = function (name, value, default_value) {
    if (value == undefined) {
        return (this.settings[name] = default_value);
    } else {
        return (this.settings[name] = value);
	}
};

// Public: (Deprecated) getSetting gets a setting. Returns an empty string if the setting was not found.
SWFUpload.prototype.getSetting = function (name) {
    if (this.settings[name] != undefined) {
        return this.settings[name];
	}

    return "";
};



// Private: callFlash handles function calls made to the Flash element.
// Calls are made with a setTimeout for some functions to work around
// bugs in the ExternalInterface library.
SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
	argumentArray = argumentArray || [];
	
	var movieElement = this.getMovieElement();
	var returnValue, returnString;

	// Flash's method if calling ExternalInterface methods (code adapted from MooTools).
	try {
		returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + '</invoke>');
		returnValue = eval(returnString);
	} catch (ex) {
		throw "Call to " + functionName + " failed";
	}
	
	// Unescape file post param values
	if (returnValue != undefined && typeof returnValue.post === "object") {
		returnValue = this.unescapeFilePostParams(returnValue);
	}

	return returnValue;
};

/* *****************************
	-- Flash control methods --
	Your UI should use these
	to operate SWFUpload
   ***************************** */

// WARNING: this function does not work in Flash Player 10
// Public: selectFile causes a File Selection Dialog window to appear.  This
// dialog only allows 1 file to be selected.
SWFUpload.prototype.selectFile = function () {
	this.callFlash("SelectFile");
};

// WARNING: this function does not work in Flash Player 10
// Public: selectFiles causes a File Selection Dialog window to appear/ This
// dialog allows the user to select any number of files
// Flash Bug Warning: Flash limits the number of selectable files based on the combined length of the file names.
// If the selection name length is too long the dialog will fail in an unpredictable manner.  There is no work-around
// for this bug.
SWFUpload.prototype.selectFiles = function () {
	this.callFlash("SelectFiles");
};


// Public: startUpload starts uploading the first file in the queue unless
// the optional parameter 'fileID' specifies the ID 
SWFUpload.prototype.startUpload = function (fileID) {
	this.callFlash("StartUpload", [fileID]);
};

// Public: cancelUpload cancels any queued file.  The fileID parameter may be the file ID or index.
// If you do not specify a fileID the current uploading file or first file in the queue is cancelled.
// If you do not want the uploadError event to trigger you can specify false for the triggerErrorEvent parameter.
SWFUpload.prototype.cancelUpload = function (fileID, triggerErrorEvent) {
	if (triggerErrorEvent !== false) {
		triggerErrorEvent = true;
	}
	this.callFlash("CancelUpload", [fileID, triggerErrorEvent]);
};

// Public: stopUpload stops the current upload and requeues the file at the beginning of the queue.
// If nothing is currently uploading then nothing happens.
SWFUpload.prototype.stopUpload = function () {
	this.callFlash("StopUpload");
};

/* ************************
 * Settings methods
 *   These methods change the SWFUpload settings.
 *   SWFUpload settings should not be changed directly on the settings object
 *   since many of the settings need to be passed to Flash in order to take
 *   effect.
 * *********************** */

// Public: getStats gets the file statistics object.
SWFUpload.prototype.getStats = function () {
	return this.callFlash("GetStats");
};

// Public: setStats changes the SWFUpload statistics.  You shouldn't need to 
// change the statistics but you can.  Changing the statistics does not
// affect SWFUpload accept for the successful_uploads count which is used
// by the upload_limit setting to determine how many files the user may upload.
SWFUpload.prototype.setStats = function (statsObject) {
	this.callFlash("SetStats", [statsObject]);
};

// Public: getFile retrieves a File object by ID or Index.  If the file is
// not found then 'null' is returned.
SWFUpload.prototype.getFile = function (fileID) {
	if (typeof(fileID) === "number") {
		return this.callFlash("GetFileByIndex", [fileID]);
	} else {
		return this.callFlash("GetFile", [fileID]);
	}
};

// Public: addFileParam sets a name/value pair that will be posted with the
// file specified by the Files ID.  If the name already exists then the
// exiting value will be overwritten.
SWFUpload.prototype.addFileParam = function (fileID, name, value) {
	return this.callFlash("AddFileParam", [fileID, name, value]);
};

// Public: removeFileParam removes a previously set (by addFileParam) name/value
// pair from the specified file.
SWFUpload.prototype.removeFileParam = function (fileID, name) {
	this.callFlash("RemoveFileParam", [fileID, name]);
};

// Public: setUploadUrl changes the upload_url setting.
SWFUpload.prototype.setUploadURL = function (url) {
	this.settings.upload_url = url.toString();
	this.callFlash("SetUploadURL", [url]);
};

// Public: setPostParams changes the post_params setting
SWFUpload.prototype.setPostParams = function (paramsObject) {
	this.settings.post_params = paramsObject;
	this.callFlash("SetPostParams", [paramsObject]);
};

// Public: addPostParam adds post name/value pair.  Each name can have only one value.
SWFUpload.prototype.addPostParam = function (name, value) {
	this.settings.post_params[name] = value;
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: removePostParam deletes post name/value pair.
SWFUpload.prototype.removePostParam = function (name) {
	delete this.settings.post_params[name];
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: setFileTypes changes the file_types setting and the file_types_description setting
SWFUpload.prototype.setFileTypes = function (types, description) {
	this.settings.file_types = types;
	this.settings.file_types_description = description;
	this.callFlash("SetFileTypes", [types, description]);
};

// Public: setFileSizeLimit changes the file_size_limit setting
SWFUpload.prototype.setFileSizeLimit = function (fileSizeLimit) {
	this.settings.file_size_limit = fileSizeLimit;
	this.callFlash("SetFileSizeLimit", [fileSizeLimit]);
};

// Public: setFileUploadLimit changes the file_upload_limit setting
SWFUpload.prototype.setFileUploadLimit = function (fileUploadLimit) {
	this.settings.file_upload_limit = fileUploadLimit;
	this.callFlash("SetFileUploadLimit", [fileUploadLimit]);
};

// Public: setFileQueueLimit changes the file_queue_limit setting
SWFUpload.prototype.setFileQueueLimit = function (fileQueueLimit) {
	this.settings.file_queue_limit = fileQueueLimit;
	this.callFlash("SetFileQueueLimit", [fileQueueLimit]);
};

// Public: setFilePostName changes the file_post_name setting
SWFUpload.prototype.setFilePostName = function (filePostName) {
	this.settings.file_post_name = filePostName;
	this.callFlash("SetFilePostName", [filePostName]);
};

// Public: setUseQueryString changes the use_query_string setting
SWFUpload.prototype.setUseQueryString = function (useQueryString) {
	this.settings.use_query_string = useQueryString;
	this.callFlash("SetUseQueryString", [useQueryString]);
};

// Public: setRequeueOnError changes the requeue_on_error setting
SWFUpload.prototype.setRequeueOnError = function (requeueOnError) {
	this.settings.requeue_on_error = requeueOnError;
	this.callFlash("SetRequeueOnError", [requeueOnError]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setHTTPSuccess = function (http_status_codes) {
	if (typeof http_status_codes === "string") {
		http_status_codes = http_status_codes.replace(" ", "").split(",");
	}
	
	this.settings.http_success = http_status_codes;
	this.callFlash("SetHTTPSuccess", [http_status_codes]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setAssumeSuccessTimeout = function (timeout_seconds) {
	this.settings.assume_success_timeout = timeout_seconds;
	this.callFlash("SetAssumeSuccessTimeout", [timeout_seconds]);
};

// Public: setDebugEnabled changes the debug_enabled setting
SWFUpload.prototype.setDebugEnabled = function (debugEnabled) {
	this.settings.debug_enabled = debugEnabled;
	this.callFlash("SetDebugEnabled", [debugEnabled]);
};

// Public: setButtonImageURL loads a button image sprite
SWFUpload.prototype.setButtonImageURL = function (buttonImageURL) {
	if (buttonImageURL == undefined) {
		buttonImageURL = "";
	}
	
	this.settings.button_image_url = buttonImageURL;
	this.callFlash("SetButtonImageURL", [buttonImageURL]);
};

// Public: setButtonDimensions resizes the Flash Movie and button
SWFUpload.prototype.setButtonDimensions = function (width, height) {
	this.settings.button_width = width;
	this.settings.button_height = height;
	
	var movie = this.getMovieElement();
	if (movie != undefined) {
		movie.style.width = width + "px";
		movie.style.height = height + "px";
	}
	
	this.callFlash("SetButtonDimensions", [width, height]);
};
// Public: setButtonText Changes the text overlaid on the button
SWFUpload.prototype.setButtonText = function (html) {
	this.settings.button_text = html;
	this.callFlash("SetButtonText", [html]);
};
// Public: setButtonTextPadding changes the top and left padding of the text overlay
SWFUpload.prototype.setButtonTextPadding = function (left, top) {
	this.settings.button_text_top_padding = top;
	this.settings.button_text_left_padding = left;
	this.callFlash("SetButtonTextPadding", [left, top]);
};

// Public: setButtonTextStyle changes the CSS used to style the HTML/Text overlaid on the button
SWFUpload.prototype.setButtonTextStyle = function (css) {
	this.settings.button_text_style = css;
	this.callFlash("SetButtonTextStyle", [css]);
};
// Public: setButtonDisabled disables/enables the button
SWFUpload.prototype.setButtonDisabled = function (isDisabled) {
	this.settings.button_disabled = isDisabled;
	this.callFlash("SetButtonDisabled", [isDisabled]);
};
// Public: setButtonAction sets the action that occurs when the button is clicked
SWFUpload.prototype.setButtonAction = function (buttonAction) {
	this.settings.button_action = buttonAction;
	this.callFlash("SetButtonAction", [buttonAction]);
};

// Public: setButtonCursor changes the mouse cursor displayed when hovering over the button
SWFUpload.prototype.setButtonCursor = function (cursor) {
	this.settings.button_cursor = cursor;
	this.callFlash("SetButtonCursor", [cursor]);
};

/* *******************************
	Flash Event Interfaces
	These functions are used by Flash to trigger the various
	events.
	
	All these functions a Private.
	
	Because the ExternalInterface library is buggy the event calls
	are added to a queue and the queue then executed by a setTimeout.
	This ensures that events are executed in a determinate order and that
	the ExternalInterface bugs are avoided.
******************************* */

SWFUpload.prototype.queueEvent = function (handlerName, argumentArray) {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop
	
	if (argumentArray == undefined) {
		argumentArray = [];
	} else if (!(argumentArray instanceof Array)) {
		argumentArray = [argumentArray];
	}
	
	var self = this;
	if (typeof this.settings[handlerName] === "function") {
		// Queue the event
		this.eventQueue.push(function () {
			this.settings[handlerName].apply(this, argumentArray);
		});
		
		// Execute the next queued event
		setTimeout(function () {
			self.executeNextEvent();
		}, 0);
		
	} else if (this.settings[handlerName] !== null) {
		throw "Event handler " + handlerName + " is unknown or is not a function";
	}
};

// Private: Causes the next event in the queue to be executed.  Since events are queued using a setTimeout
// we must queue them in order to garentee that they are executed in order.
SWFUpload.prototype.executeNextEvent = function () {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop

	var  f = this.eventQueue ? this.eventQueue.shift() : null;
	if (typeof(f) === "function") {
		f.apply(this);
	}
};

// Private: unescapeFileParams is part of a workaround for a flash bug where objects passed through ExternalInterface cannot have
// properties that contain characters that are not valid for JavaScript identifiers. To work around this
// the Flash Component escapes the parameter names and we must unescape again before passing them along.
SWFUpload.prototype.unescapeFilePostParams = function (file) {
	var reg = /[$]([0-9a-f]{4})/i;
	var unescapedPost = {};
	var uk;

	if (file != undefined) {
		for (var k in file.post) {
			if (file.post.hasOwnProperty(k)) {
				uk = k;
				var match;
				while ((match = reg.exec(uk)) !== null) {
					uk = uk.replace(match[0], String.fromCharCode(parseInt("0x" + match[1], 16)));
				}
				unescapedPost[uk] = file.post[k];
			}
		}

		file.post = unescapedPost;
	}

	return file;
};

// Private: Called by Flash to see if JS can call in to Flash (test if External Interface is working)
SWFUpload.prototype.testExternalInterface = function () {
	try {
		return this.callFlash("TestExternalInterface");
	} catch (ex) {
		return false;
	}
};

// Private: This event is called by Flash when it has finished loading. Don't modify this.
// Use the swfupload_loaded_handler event setting to execute custom code when SWFUpload has loaded.
SWFUpload.prototype.flashReady = function () {
	// Check that the movie element is loaded correctly with its ExternalInterface methods defined
	var movieElement = this.getMovieElement();

	if (!movieElement) {
		this.debug("Flash called back ready but the flash movie can't be found.");
		return;
	}

	this.cleanUp(movieElement);
	
	this.queueEvent("swfupload_loaded_handler");
};

// Private: removes Flash added fuctions to the DOM node to prevent memory leaks in IE.
// This function is called by Flash each time the ExternalInterface functions are created.
SWFUpload.prototype.cleanUp = function (movieElement) {
	// Pro-actively unhook all the Flash functions
	try {
		if (this.movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
			for (var key in movieElement) {
				try {
					if (typeof(movieElement[key]) === "function") {
						movieElement[key] = null;
					}
				} catch (ex) {
				}
			}
		}
	} catch (ex1) {
	
	}

	// Fix Flashes own cleanup code so if the SWFMovie was removed from the page
	// it doesn't display errors.
	window["__flash__removeCallback"] = function (instance, name) {
		try {
			if (instance) {
				instance[name] = null;
			}
		} catch (flashEx) {
		
		}
	};

};


/* This is a chance to do something before the browse window opens */
SWFUpload.prototype.fileDialogStart = function () {
	this.queueEvent("file_dialog_start_handler");
};


/* Called when a file is successfully added to the queue. */
SWFUpload.prototype.fileQueued = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queued_handler", file);
};


/* Handle errors that occur when an attempt to queue a file fails. */
SWFUpload.prototype.fileQueueError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queue_error_handler", [file, errorCode, message]);
};

/* Called after the file dialog has closed and the selected files have been queued.
	You could call startUpload here if you want the queued files to begin uploading immediately. */
SWFUpload.prototype.fileDialogComplete = function (numFilesSelected, numFilesQueued, numFilesInQueue) {
	this.queueEvent("file_dialog_complete_handler", [numFilesSelected, numFilesQueued, numFilesInQueue]);
};

SWFUpload.prototype.uploadStart = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("return_upload_start_handler", file);
};

SWFUpload.prototype.returnUploadStart = function (file) {
	var returnValue;
	if (typeof this.settings.upload_start_handler === "function") {
		file = this.unescapeFilePostParams(file);
		returnValue = this.settings.upload_start_handler.call(this, file);
	} else if (this.settings.upload_start_handler != undefined) {
		throw "upload_start_handler must be a function";
	}

	// Convert undefined to true so if nothing is returned from the upload_start_handler it is
	// interpretted as 'true'.
	if (returnValue === undefined) {
		returnValue = true;
	}
	
	returnValue = !!returnValue;
	
	this.callFlash("ReturnUploadStart", [returnValue]);
};



SWFUpload.prototype.uploadProgress = function (file, bytesComplete, bytesTotal) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_progress_handler", [file, bytesComplete, bytesTotal]);
};

SWFUpload.prototype.uploadError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_error_handler", [file, errorCode, message]);
};

SWFUpload.prototype.uploadSuccess = function (file, serverData, responseReceived) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_success_handler", [file, serverData, responseReceived]);
};

SWFUpload.prototype.uploadComplete = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_complete_handler", file);
};

/* Called by SWFUpload JavaScript and Flash functions when debug is enabled. By default it writes messages to the
   internal debug console.  You can override this event and have messages written where you want. */
SWFUpload.prototype.debug = function (message) {
	this.queueEvent("debug_handler", message);
};


/* **********************************
	Debug Console
	The debug console is a self contained, in page location
	for debug message to be sent.  The Debug Console adds
	itself to the body if necessary.

	The console is automatically scrolled as messages appear.
	
	If you are using your own debug handler or when you deploy to production and
	have debug disabled you can remove these functions to reduce the file size
	and complexity.
********************************** */
   
// Private: debugMessage is the default debug_handler.  If you want to print debug messages
// call the debug() function.  When overriding the function your own function should
// check to see if the debug setting is true before outputting debug information.
SWFUpload.prototype.debugMessage = function (message) {
	if (this.settings.debug) {
		var exceptionMessage, exceptionValues = [];

		// Check for an exception object and print it nicely
		if (typeof message === "object" && typeof message.name === "string" && typeof message.message === "string") {
			for (var key in message) {
				if (message.hasOwnProperty(key)) {
					exceptionValues.push(key + ": " + message[key]);
				}
			}
			exceptionMessage = exceptionValues.join("\n") || "";
			exceptionValues = exceptionMessage.split("\n");
			exceptionMessage = "EXCEPTION: " + exceptionValues.join("\nEXCEPTION: ");
			SWFUpload.Console.writeLine(exceptionMessage);
		} else {
			SWFUpload.Console.writeLine(message);
		}
	}
};

SWFUpload.Console = {};
SWFUpload.Console.writeLine = function (message) {
	var console, documentForm;

	try {
		console = document.getElementById("SWFUpload_Console");

		if (!console) {
			documentForm = document.createElement("form");
			document.getElementsByTagName("body")[0].appendChild(documentForm);

			console = document.createElement("textarea");
			console.id = "SWFUpload_Console";
			console.style.fontFamily = "monospace";
			console.setAttribute("wrap", "off");
			console.wrap = "off";
			console.style.overflow = "auto";
			console.style.width = "700px";
			console.style.height = "350px";
			console.style.margin = "5px";
			documentForm.appendChild(console);
		}

		console.value += message + "\n";

		console.scrollTop = console.scrollHeight - console.clientHeight;
	} catch (ex) {
		alert("Exception: " + ex.name + " Message: " + ex.message);
	}
};

/*
	SWFUpload.SWFObject Plugin

	Summary:
		This plugin uses SWFObject to embed SWFUpload dynamically in the page.  SWFObject provides accurate Flash Player detection and DOM Ready loading.
		This plugin replaces the Graceful Degradation plugin.

	Features:
		* swfupload_load_failed_hander event
		* swfupload_pre_load_handler event
		* minimum_flash_version setting (default: "9.0.28")
		* SWFUpload.onload event for early loading

	Usage:
		Provide handlers and settings as needed.  When using the SWFUpload.SWFObject plugin you should initialize SWFUploading
		in SWFUpload.onload rather than in window.onload.  When initialized this way SWFUpload can load earlier preventing the UI flicker
		that was seen using the Graceful Degradation plugin.

		<script type="text/javascript">
			var swfu;
			SWFUpload.onload = function () {
				swfu = new SWFUpload({
					minimum_flash_version: "9.0.28",
					swfupload_pre_load_handler: swfuploadPreLoad,
					swfupload_load_failed_handler: swfuploadLoadFailed
				});
			};
		</script>
		
	Notes:
		You must provide set minimum_flash_version setting to "8" if you are using SWFUpload for Flash Player 8.
		The swfuploadLoadFailed event is only fired if the minimum version of Flash Player is not met.  Other issues such as missing SWF files, browser bugs
		 or corrupt Flash Player installations will not trigger this event.
		The swfuploadPreLoad event is fired as soon as the minimum version of Flash Player is found.  It does not wait for SWFUpload to load and can
		 be used to prepare the SWFUploadUI and hide alternate content.
		swfobject's onDomReady event is cross-browser safe but will default to the window.onload event when DOMReady is not supported by the browser.
		 Early DOM Loading is supported in major modern browsers but cannot be guaranteed for every browser ever made.
*/


/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();


	
var SWFUpload;
if (typeof(SWFUpload) === "function") {
	SWFUpload.onload = function () {};
	
	swfobject.addDomLoadEvent(function () {
		if (typeof(SWFUpload.onload) === "function") {
			SWFUpload.onload.call(window);
		}
	});
	
	SWFUpload.prototype.initSettings = (function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}

			this.ensureDefault = function (settingName, defaultValue) {
				this.settings[settingName] = (this.settings[settingName] == undefined) ? defaultValue : this.settings[settingName];
			};

			this.ensureDefault("minimum_flash_version", "9.0.28");
			this.ensureDefault("swfupload_pre_load_handler", null);
			this.ensureDefault("swfupload_load_failed_handler", null);

			delete this.ensureDefault;

		};
	})(SWFUpload.prototype.initSettings);


	SWFUpload.prototype.loadFlash = function (oldLoadFlash) {
		return function () {
			var hasFlash = swfobject.hasFlashPlayerVersion(this.settings.minimum_flash_version);
			
			if (hasFlash) {
				this.queueEvent("swfupload_pre_load_handler");
				if (typeof(oldLoadFlash) === "function") {
					oldLoadFlash.call(this);
				}
			} else {
				this.queueEvent("swfupload_load_failed_handler");
			}
		};
		
	}(SWFUpload.prototype.loadFlash);
			
	SWFUpload.prototype.displayDebugInfo = function (oldDisplayDebugInfo) {
		return function () {
			if (typeof(oldDisplayDebugInfo) === "function") {
				oldDisplayDebugInfo.call(this);
			}
			
			this.debug(
				[
					"SWFUpload.SWFObject Plugin settings:", "\n",
					"\t", "minimum_flash_version:                      ", this.settings.minimum_flash_version, "\n",
					"\t", "swfupload_pre_load_handler assigned:     ", (typeof(this.settings.swfupload_pre_load_handler) === "function").toString(), "\n",
					"\t", "swfupload_load_failed_handler assigned:     ", (typeof(this.settings.swfupload_load_failed_handler) === "function").toString(), "\n",
				].join("")
			);
		};	
	}(SWFUpload.prototype.displayDebugInfo);
}

/*
	Cookie Plug-in
	
	This plug in automatically gets all the cookies for this site and adds them to the post_params.
	Cookies are loaded only on initialization.  The refreshCookies function can be called to update the post_params.
	The cookies will override any other post params with the same name.
*/

var SWFUpload;
if (typeof(SWFUpload) === "function") {
	SWFUpload.prototype.initSettings = function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}
			
			this.refreshCookies(false);	// The false parameter must be sent since SWFUpload has not initialzed at this point
		};
	}(SWFUpload.prototype.initSettings);
	
	// refreshes the post_params and updates SWFUpload.  The sendToFlash parameters is optional and defaults to True
	SWFUpload.prototype.refreshCookies = function (sendToFlash) {
		if (sendToFlash === undefined) {
			sendToFlash = true;
		}
		sendToFlash = !!sendToFlash;
		
		// Get the post_params object
		var postParams = this.settings.post_params;
		
		// Get the cookies
		var i, cookieArray = document.cookie.split(';'), caLength = cookieArray.length, c, eqIndex, name, value;
		for (i = 0; i < caLength; i++) {
			c = cookieArray[i];
			
			// Left Trim spaces
			while (c.charAt(0) === " ") {
				c = c.substring(1, c.length);
			}
			eqIndex = c.indexOf("=");
			if (eqIndex > 0) {
				name = c.substring(0, eqIndex);
				value = c.substring(eqIndex + 1);
				postParams[name] = value;
			}
		}
		
		if (sendToFlash) {
			this.setPostParams(postParams);
		}
	};

}

/*
	Queue Plug-in
	
	Features:
		*Adds a cancelQueue() method for cancelling the entire queue.
		*All queued files are uploaded when startUpload() is called.
		*If false is returned from uploadComplete then the queue upload is stopped.
		 If false is not returned (strict comparison) then the queue upload is continued.
		*Adds a QueueComplete event that is fired when all the queued files have finished uploading.
		 Set the event handler with the queue_complete_handler setting.
		
	*/

var SWFUpload;
if (typeof(SWFUpload) === "function") {
	SWFUpload.queue = {};
	
	SWFUpload.prototype.initSettings = (function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}
			
			this.queueSettings = {};
			
			this.queueSettings.queue_cancelled_flag = false;
			this.queueSettings.queue_upload_count = 0;
			
			this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler;
			this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler;
			this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler;
			this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler;
			
			this.settings.queue_complete_handler = this.settings.queue_complete_handler || null;
		};
	})(SWFUpload.prototype.initSettings);

	SWFUpload.prototype.startUpload = function (fileID) {
		this.queueSettings.queue_cancelled_flag = false;
		this.callFlash("StartUpload", [fileID]);
	};

	SWFUpload.prototype.cancelQueue = function () {
		this.queueSettings.queue_cancelled_flag = true;
		this.stopUpload();
		
		var stats = this.getStats();
		while (stats.files_queued > 0) {
			this.cancelUpload();
			stats = this.getStats();
		}
	};
	
	SWFUpload.queue.uploadStartHandler = function (file) {
		var returnValue;
		if (typeof(this.queueSettings.user_upload_start_handler) === "function") {
			returnValue = this.queueSettings.user_upload_start_handler.call(this, file);
		}
		
		// To prevent upload a real "FALSE" value must be returned, otherwise default to a real "TRUE" value.
		returnValue = (returnValue === false) ? false : true;
		
		this.queueSettings.queue_cancelled_flag = !returnValue;

		return returnValue;
	};
	
	SWFUpload.queue.uploadCompleteHandler = function (file) {
		var user_upload_complete_handler = this.queueSettings.user_upload_complete_handler;
		var continueUpload;
		
		if (file.filestatus === SWFUpload.FILE_STATUS.COMPLETE) {
			this.queueSettings.queue_upload_count++;
		}

		if (typeof(user_upload_complete_handler) === "function") {
			continueUpload = (user_upload_complete_handler.call(this, file) === false) ? false : true;
		} else if (file.filestatus === SWFUpload.FILE_STATUS.QUEUED) {
			// If the file was stopped and re-queued don't restart the upload
			continueUpload = false;
		} else {
			continueUpload = true;
		}
		
		if (continueUpload) {
			var stats = this.getStats();
			if (stats.files_queued > 0 && this.queueSettings.queue_cancelled_flag === false) {
				this.startUpload();
			} else if (this.queueSettings.queue_cancelled_flag === false) {
				this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]);
				this.queueSettings.queue_upload_count = 0;
			} else {
				this.queueSettings.queue_cancelled_flag = false;
				this.queueSettings.queue_upload_count = 0;
			}
		}
	};
}
/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/

function MD5(string) {

	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}

	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}

 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }

	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};

	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	};

	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;

	string = Utf8Encode(string);

	x = ConvertToWordArray(string);

	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}

	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

	return temp.toLowerCase();
}
/***************************************************************
*  Copyright notice
*
*  (c) 2007-2011 Ingo Renner <ingo@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


var ToolbarManager = Class.create({

	/**
	 * hides all toolbar item menus except for the which was clicked
	 */
	hideOthers: function(toolbarItem) {
		var sibling = toolbarItem.next();

			// check whether it is a toolbar item with menu
		if (sibling.hasClassName('toolbar-item-menu')) {
				// hide all
			$$('#typo3-toolbar a.toolbar-item + .toolbar-item-menu').invoke('hide');
			$$('#typo3-toolbar a.toolbar-item').each(function(element) {
				element.removeClassName('toolbar-item-active');
			});

				// show toolbarItem
			toolbarItem.addClassName('toolbar-item-active');
		}
	},

	/**
	 * refreshs positioning of all submenus
	 */
	refreshAll: function() {
		$$('.toolbar-item-menu').each(function(element) {
			menuParent = Ext.get(element);
			TYPO3BackendToolbarManager.positionMenu(menuParent.findParentNode('[id$="-menu"]').id);
		});
	},

	/**
	 * positions a toolbar item (has to have .toolbar-item-menu)
	 * @param elementId The parent element ofthe menu to be positioned
	 */
	positionMenu: function(elementId) {
		var calculatedOffset = 0;
		var parentWidth = $(elementId).getWidth();
		var currentToolbarItemLayer = $$('#' + elementId + ' .toolbar-item-menu')[0];
		var ownWidth = currentToolbarItemLayer.getWidth();
		var parentSiblings = $(elementId).previousSiblings();

		parentSiblings.each(function(toolbarItem) {
			calculatedOffset += toolbarItem.getWidth() - 1;
			// -1 to compensate for the margin-right -1px of the list items,
			// which itself is necessary for overlaying the separator with the active state background

			if (toolbarItem.down().hasClassName('no-separator')) {
				calculatedOffset -= 1;
			}
		});
		calculatedOffset = calculatedOffset - ownWidth + parentWidth;

		// border correction
		if (currentToolbarItemLayer.getStyle('display') !== 'none') {
			calculatedOffset += 2;
		}

		$$('#' + elementId + ' .toolbar-item-menu')[0].setStyle({
			left: calculatedOffset + 'px'
		});
	}

});

var TYPO3BackendToolbarManager = new ToolbarManager();



/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


/**
 * Class to render the module menu and handle the BE navigation
 *
 * @author	Steffen Kamper
 */


Ext.ns('TYPO3', 'ModuleMenu');

TYPO3.ModuleMenu = {};

TYPO3.ModuleMenu.Store = new Ext.data.JsonStore({
	storeId: 'ModuleMenuStore',
	root: 'root',
	fields: [
		{name: 'index', type: 'int', mapping: 'sub.index'},
		{name: 'key', type: 'string'},
		{name: 'label', type: 'string'},
		{name: 'menuState', type: 'int'},
		{name: 'subitems', type: 'int'},
		'sub'
	],
	url: 'ajax.php?ajaxID=ModuleMenu::getData',
	baseParams: {
		'action': 'getModules'
	},
	listeners: {
		beforeload: function(store) {
			this.loaded = false;
		},
		load: function(store) {
			this.loaded = true;
		}
	},
	// Custom indicator for loaded store:
	loaded: false,
	isLoaded: function() {
		return this.loaded;
	}

});

TYPO3.ModuleMenu.Template = new Ext.XTemplate(
		'<div id="typo3-docheader">',
		'	<div id="typo3-docheader-row1">',
		'		<div class="buttonsleft"></div>',
		'		<div class="buttonsright"></div>',
		'	</div>',
		'</div>',
		'<ul id="typo3-menu">',
		'<tpl for=".">',
		'	<li class="menuSection" id="{key}">',
		'		<div class="modgroup {[this.getStateClass(values)]}">{label}</div>',
		'	<ul {[this.getStateStyle(values)]}>',
		'	<tpl for="sub">',
		'	<li id="{name}" class="submodule mod-{name}">',
		'		<a title="{description}" href="#" class="modlink">',
		'			<span class="submodule-icon">',
		'				<img width="16" height="16" alt="{label}" title="{label}" src="{icon}" />',
		'			</span>',
		'			<span>{label}</span>',
		'		</a>',
		'	</li>',
		'	</tpl>',
		'	</ul>',
		'	</li>',
		'</tpl>',
		'</ul>',
		{
			getStateClass: function(value) {
				return value.menuState ? 'collapsed' : 'expanded';
			},
			getStateStyle: function(value) {
				return value.menuState ? 'style="display:none"' : '';
			}
		}
);

TYPO3.ModuleMenu.App = {
	loadedModule: null,
	loadedNavigationComponentId: '',
	availableNavigationComponents: {},

	init: function() {
		TYPO3.ModuleMenu.Store.load({
			scope: this,
			callback: function(records, options) {
				this.renderMenu(records);
				if (top.startInModule) {
					this.showModule(top.startInModule[0], top.startInModule[1]);
				} else {
					this.loadFirstAvailableModule();
				}
			}
		});
	},

	renderMenu: function(records) {
		TYPO3.Backend.ModuleMenuContainer.removeAll();
		TYPO3.Backend.ModuleMenuContainer.add({
			xtype: 'dataview',
			animCollapse: true,
			store: TYPO3.ModuleMenu.Store,
			tpl: TYPO3.ModuleMenu.Template,
			singleSelect: true,
			itemSelector: 'li.submodule',
			overClass: 'x-view-over',
			selectedClass: 'highlighted',
			autoHeight: true,
			itemId: 'modDataView',
			tbar: [{text: 'test'}],
			listeners: {
				click: function(view, index, node, event) {
					var el = Ext.fly(node);
					if (el.hasClass('submodule')) {
						TYPO3.ModuleMenu.App.showModule(el.getAttribute('id'));
					}
				},
				containerclick: function(view, event) {
					var item = event.getTarget('li.menuSection', view.getEl());
					if (item) {
						var el = Ext.fly(item);
						var id = el.getAttribute('id');
						var section = el.first('div'), state;
						if (section.hasClass('expanded')) {
							state = true;
							section.removeClass('expanded').addClass('collapsed');
							el.first('ul').slideOut('t', {
								easing: 'easeOut',
								duration: .2,
								remove: false,
								useDisplay: true
							});

						} else {
							state = false;
							section.removeClass('collapsed').addClass('expanded');
							el.first('ul').slideIn('t', {
								easing: 'easeIn',
								duration: .2,
								remove: false,
								useDisplay: true
							});
						}
						// save menu state
						Ext.Ajax.request({
							url: 'ajax.php?ajaxID=ModuleMenu::saveMenuState',
							params: {
								'menuid': 'modmenu_' + id,
								'state': state
							}
						});
					}
					return false;
				},
				scope: this
			}
		});
		TYPO3.Backend.ModuleMenuContainer.doLayout();
	},

	getRecordFromIndex: function(index) {
		var i, record;
		for (i = 0; i < TYPO3.ModuleMenu.Store.getCount(); i++) {
			record = TYPO3.ModuleMenu.Store.getAt(i);
			if (index < record.data.subitems) {
				return record.data.sub[index];
			}
			index -= record.data.subitems;
		}
	},

	getRecordFromName: function(name) {
		var i, j, record;
		for (i = 0; i < TYPO3.ModuleMenu.Store.getCount(); i++) {
			record = TYPO3.ModuleMenu.Store.getAt(i);
			for (j = 0; j < record.data.subitems; j++) {
				if (record.data.sub[j].name === name) {
					return record.data.sub[j];
				}
			}
		}
	},

	showModule: function(mod, params) {
		params = params || '';
		this.selectedModule = mod;

		params = this.includeId(mod, params);
		var record = this.getRecordFromName(mod);

		if (record) {
			this.loadModuleComponents(record, params);
		} else {
				//defined startup module is not present, use the first available instead
			this.loadFirstAvailableModule(params);
		}
	},

	loadFirstAvailableModule: function(params) {
		params = params || '';
		if (TYPO3.ModuleMenu.Store.isLoaded() === false) {
			new Ext.util.DelayedTask(
				this.loadFirstAvailableModule,
				this,
				[params]
			).delay(250);
		} else if (TYPO3.ModuleMenu.Store.getCount() === 0) {
				// Store is empty, something went wrong
			TYPO3.Flashmessage.display(TYPO3.Severity.error, 'Module loader', 'No module found. If this is a temporary error, please reload the Backend!', 50000);
		} else {
			mod = TYPO3.ModuleMenu.Store.getAt(0).data.sub[0];
			this.loadModuleComponents(mod, params);
		}
	},

	loadModuleComponents: function(record, params) {
		var mod = record.name;
		if (record.navigationComponentId) {
				this.loadNavigationComponent(record.navigationComponentId);
				TYPO3.Backend.NavigationDummy.hide();
				TYPO3.Backend.NavigationIframe.getEl().parent().setStyle('overflow', 'auto');
			} else if (record.navframe || record.navigationFrameScript) {
				TYPO3.Backend.NavigationDummy.hide();
				TYPO3.Backend.NavigationContainer.show();
				this.loadNavigationComponent('typo3-navigationIframe');
				this.openInNavFrame(record.navigationFrameScript || record.navframe, record.navigationFrameScriptParam);
				TYPO3.Backend.NavigationIframe.getEl().parent().setStyle('overflow', 'hidden');
			} else {
				TYPO3.Backend.NavigationContainer.hide();
				TYPO3.Backend.NavigationDummy.show();
			}
			this.openInContentFrame(record.originalLink, params);
			this.loadedModule = mod;
			this.highlightModuleMenuItem(mod);

				// compatibility
			top.currentSubScript = record.originalLink;
			top.currentModuleLoaded = mod;

			TYPO3.Backend.doLayout();
	},

	includeId: function(mod, params) {
			//get id
		var section = mod.split('_')[0];
		if (top.fsMod.recentIds[section]) {
			params = 'id=' + top.fsMod.recentIds[section] + '&' + params;
		}

		return params;
	},

	loadNavigationComponent: function(navigationComponentId) {
		if (navigationComponentId === this.loadedNavigationComponentId) {
			if (TYPO3.Backend.NavigationContainer.hidden) {
				TYPO3.Backend.NavigationContainer.show();
			}

			return;
		}

		if (this.loadedNavigationComponentId !== '') {
			Ext.getCmp(this.loadedNavigationComponentId).hide();
		}

		var component = Ext.getCmp(navigationComponentId);
		if (typeof component !== 'object') {
			if (typeof this.availableNavigationComponents[navigationComponentId] !== 'function') {
				throw 'The navigation component "' + navigationComponentId + '" is not available ' +
					'or has no valid callback function';
			}

			component = this.availableNavigationComponents[navigationComponentId]();
			TYPO3.Backend.NavigationContainer.add(component);
		}

		component.show()

			// backwards compatibility
		top.nav = component;
		
		TYPO3.Backend.NavigationContainer.show();
		this.loadedNavigationComponentId = navigationComponentId;
	},

	registerNavigationComponent: function(componentId, initCallback) {
		this.availableNavigationComponents[componentId] = initCallback;
	},

	openInNavFrame: function(url, params) {
		var navUrl = url + (params ? (url.indexOf('?') !== -1 ? '&' : '?') + params : '');
		var currentUrl = this.relativeUrl(TYPO3.Backend.NavigationIframe.getUrl());
		if (currentUrl !== navUrl) {
			TYPO3.Backend.NavigationIframe.setUrl(navUrl);
		}
	},

	openInContentFrame: function(url, params) {
		if (top.nextLoadModuleUrl) {
			TYPO3.Backend.ContentContainer.setUrl(top.nextLoadModuleUrl);
			top.nextLoadModuleUrl = '';
		} else {
			TYPO3.Backend.ContentContainer.setUrl(url + (params ? (url.indexOf('?') !== -1 ? '&' : '?') + params : ''));
		}
	},

	highlightModuleMenuItem: function(module, mainModule) {
		TYPO3.Backend.ModuleMenuContainer.getComponent('modDataView').select(module, false, false);
	},

	relativeUrl: function(url) {
		return url.replace(TYPO3.configuration.siteUrl + 'typo3/', '');
	},

	refreshMenu: function() {
		TYPO3.ModuleMenu.Store.load({
			scope: this,
			callback: function(records, options) {
				this.renderMenu(records);
				if (this.loadedModule) {
					this.highlightModuleMenuItem(this.loadedModule);
				}
			}
		});
	},

	reloadFrames: function() {
		TYPO3.Backend.NavigationIframe.refresh();
		TYPO3.Backend.ContentContainer.refresh();
	}

};



Ext.onReady(function() {
	TYPO3.ModuleMenu.App.init();

		// keep backward compatibility
	top.list = TYPO3.Backend.ContentContainer;
	top.list_frame = top.list.getIframe();
	top.nav_frame = TYPO3.Backend.NavigationContainer.PageTree;

	top.TYPO3ModuleMenu = TYPO3.ModuleMenu.App;
	top.content = {
		nav_frame: TYPO3.Backend.NavigationContainer.PageTree,
		list_frame: TYPO3.Backend.ContentContainer.getIframe(),
		location: TYPO3.Backend.ContentContainer.getIframe().location,
		document: TYPO3.Backend.ContentContainer.getIframe()
	}
});


/*******************************************************************************
*
* Backwards compatability handling down here
*
******************************************************************************/

/**
* Highlight module:
*/
var currentlyHighLightedId = '';
var currentlyHighLighted_restoreValue = '';
var currentlyHighLightedMain = '';
function highlightModuleMenuItem(trId, mainModule) {
	TYPO3.ModuleMenu.App.highlightModule(trId, mainModule);
}

/***************************************************************
*  Copyright notice
*
*  (c) 2008-2011 Jeff Segars <jeff@webempoweredchurch.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


Element.addMethods({
	pngHack: function(element) {
		element = $(element);
		var transparentGifPath = 'clear.gif';

			// If there is valid element, it is an image and the image file ends with png:
		if (Object.isElement(element) && element.tagName === 'IMG' && element.src.endsWith('.png')) {
			var alphaImgSrc = element.src;
			var sizingMethod = 'scale';
			element.src = transparentGifPath;
		}

		if (alphaImgSrc) {
			element.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="#{alphaImgSrc}",sizingMethod="#{sizingMethod}")'.interpolate(
			{
				alphaImgSrc: alphaImgSrc,
				sizingMethod: sizingMethod
			});
		}

		return element;
	}
});

var IECompatibility = Class.create({

	/**
	 * initializes the compatibility class
	 */
	initialize: function() {
		Event.observe(document, 'dom:loaded', function() {
			$$('input[type="checkbox"]').invoke('addClassName', 'checkbox');
		}.bind(this));

		Event.observe(window, 'load', function() {
			if (Prototype.Browser.IE) {
				var version = parseFloat(navigator.appVersion.split(';')[1].strip().split(' ')[1]);
				if (version === 6) {
					$$('img').each(function(img) {
						img.pngHack();
					});
					$$('#typo3-menu li ul li').each(function(li) {
						li.setStyle({height: '21px'});
					});
				}
			}
		});
	}
});

if (Prototype.Browser.IE) {
	var TYPO3IECompatibilty = new IECompatibility();
}

/**
 * Javascript functions regarding the inclusion 
 * of a TYPO3-customized version of SWFupload
 *
 * For proper use see file_list.php or the doc_core_api manual
 *
 * (c) 2009-2011 Benjamin Mack <benni@typo3.org>
 * All rights reserved
 *
 * This script is part of TYPO3 by
 * Kasper Skaarhoj <kasperYYYYY@typo3.com>
 *
 * Released under GNU/GPL (see license file in tslib/)
 *
 * This script is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * This copyright notice MUST APPEAR in all copies of this script
 */
Ext.onReady(function() {

	/**
	 * This class is a derivative of Ext.Window, with some special
	 * constructor to set some default values and a method to make
	 * sure that it's only instantiated once (see TYPO3.FileUploadWindow.getInstance())
	 * 
	 * It allows an info area (can be overriden if set with the same ID)
	 * and additional multiple components (possible to add via the add() method of Ext.Container)
	 * 
	 * Additionally, there are several events fired in the class that are specific for the upload handling
	 * that can be used in all use-cases
	 */
	TYPO3.FileUploadWindow = Ext.extend(Ext.Window, {
		completedUploads: 0,	// number of successfully completed uploads in this current instance, could be useful for some applications
		activeUploads: {},		// holds all TYPO3.FileUpload instances currently uploading or in queue
		lastError: null,	// last error occured
		swf: null,	// holds the SWFUpload instance
		deniedFileTypes: '',	// internal, local check to see if the uploading file is not allowed
		swfDefaultConfig: {	// includes all default options the SWFUpload needs
			fileUploadWindow: null,	// internal reference to the FileUploadWindow object for calling the event handlers

			flash_url:             TS.PATH_typo3 + "contrib/swfupload/swfupload.swf", // url to the swfupload flash file, should be absolute
			minimum_flash_version: '9.0.28',
			file_size_limit:       '20.480',	// you can either set a number which is in KB or set a unit (like 2 B, KB, MB, GB)
			file_queue_limit:      0,	// maximum files that are queued
			file_upload_limit:     0,	// maximum files that can be uploaded with one instance 
			upload_url:            TS.PATH_typo3 + "ajax.php",	// the destination URL that handles the upload
			file_post_name:        "upload_1",	// Name of the $_FILES key available in PHP (e.g. $_FILES['upload_1'])
			file_types:            "*.*",	// separate multiple file types with a semicolon. e.g. ".jpg;.jpeg"
			file_types_description: "All Files",
			assume_success_timeout: 5, // The number of seconds SWFUpload should wait for Flash to detect the server's response after the file has finished uploading. This setting allows you to work around the Flash Player bugs where long running server side scripts causes Flash to ignore the server response or the Mac Flash Player bug that ignores server responses with no content.
			post_params: {		// additional parameters later available via $_POST
				ajaxID: 'typo3_tcefile::process'
			},

			// SWFupload options that should not be changed, as our FileUploadWindow object is handling all of this
			button_placeholder_id: "t3-file-upload-window-button-selectfiles-placeholder",
			button_window_mode:    SWFUpload.WINDOW_MODE.TRANSPARENT,
			button_action:         SWFUpload.BUTTON_ACTION.SELECT_FILES,
			button_disabled:       false,
			button_width:          80,
			button_height:         22,
			button_cursor:         SWFUpload.CURSOR.HAND,
			// internal, SWFupload event handlers, please use the ones found in the "fileUploadWindow"
			file_dialog_complete_handler: function(numFilesSelected, numFilesQueued, numFilesInQueue) {
				this.fileUploadWindow.uploadSelectFiles(numFilesSelected, numFilesQueued, numFilesInQueue);
			},
			file_queued_handler: function(fileObj) {
				this.fileUploadWindow.uploadQueued(fileObj);
			},
			file_queue_error_handler: function(fileObj, errorCode, message) {
				this.fileUploadWindow.uploadQueuedError(fileObj, errorCode, message);
			},
			upload_start_handler: function(fileObj) {
				this.fileUploadWindow.uploadStart(fileObj);
			},
			upload_progress_handler: function(fileObj, bytesComplete, bytesTotal) {
				this.fileUploadWindow.uploadProgress(fileObj, bytesComplete, bytesTotal);
			},
			upload_error_handler: function(fileObj, errorCode, message) {
				this.fileUploadWindow.uploadError(fileObj, errorCode, message);
			},
			upload_success_handler: function(fileObj, serverData, responseReceived) {
				this.fileUploadWindow.uploadSuccess(fileObj, serverData, responseReceived);
			},
			upload_complete_handler: function(fileObj) {
				this.fileUploadWindow.uploadComplete(fileObj);
			},
			// callback introduced by the swf queue plugin
			queue_complete_handler: function() {
				this.fileUploadWindow.totalComplete();
			}
		},

		/**
		 * actions which are executed when the uploader window should be closed (actually, it's hidden)
		 */
		closeWindow: function() {
			this.cleanup();
			this.hide();
		},

		// component constructor
		// private
		initComponent: function() {
			var initialConfig = {
				layout: 'anchor',
				width: 350,
				height: 'auto',
				center: true,
				modal: true,
				tools: [],
				id: 't3-upload-window',
				title: String.format(TYPO3.LLL.fileUpload.windowTitle),
				shadow: false,
				hideBorders: true,
				tbar: [{
						id: 't3-file-upload-window-button-selectfiles',
						text: String.format(TYPO3.LLL.fileUpload.buttonSelectFiles),
						iconCls: 't3icon-ext-upload'
					}, {
						xtype: 'tbfill'
					}, {
						id: 't3-file-upload-window-button-cancel',
						text: String.format(TYPO3.LLL.fileUpload.buttonCancelAll),
						handler: this.closeWindow,
						scope: this,
						iconCls: 't3icon-ext-cancel'
					}
				]
			};
			// set the default options, if not set yet by the application from outside
			Ext.applyIf(this, initialConfig);

			// set default options that cannot be overriden from outside
			var staticConfig = {
				closable: true,
				closeAction: 'closeWindow',
				resizable: false
			};
			Ext.apply(this, staticConfig);

			TYPO3.FileUploadWindow.superclass.initComponent.call(this);
			this.addEvents(
				/**
				 * @event uploadSelectFiles
				 * Fires after the "select files" dialog has been closed
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {Number} numFilesSelected  Total number of files selected
				 * @param {Number} numFilesQueued Total number of files that are queued
				 * @param {Number} numFilesInQueue Number of files in the queue right now
				 */
				'uploadSelectFiles',
				/**
				 * @event uploadQueued
				 * Fires after one file has been put in the queue.
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 */
				'uploadQueued',
				/**
				 * @event uploadQueuedError
				 * Fires after one file was tried to put in the queue but failed because it did not fit all requirements
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 * @param {Number} errorCode the internal SWFupload error code, see swfupload.js for details
				 * @param {String} message the default (english) message that comes with the error code
				 */
				'uploadQueuedError',
				/**
				 * @event uploadStart
				 * Fires right after the upload of a file was started
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 */
				'uploadStart',
				/**
				 * @event uploadProgress
				 * Fires multiple times during the upload process of one file, used to give a feedback to the user
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 */
				'uploadProgress',
				/**
				 * @event uploadError
				 * Fires if an error happens while uploading, if the upload was canceled or stopped
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 * @param {Number} errorCode the internal SWFupload error code, see swfupload.js for details
				 * @param {String} message the default (english) message that comes with the error code
				 */
				'uploadError',
				/**
				 * @event uploadProgress
				 * Fires after a file was successfully uploaded
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 * @param {String} serverData the data that gets returned from the server (the HTTP response)
				 * @param {String} responseReceived Due to some bugs in the Flash Player the server response may not be acknowledged and no uploadSuccess event is fired by Flash. In this case the assume_success_timeout setting is checked to see if enough time has passed to fire uploadSuccess anyway. In this case the received response parameter will be false.
				 */
				'uploadSuccess',
				/**
				 * @event uploadComplete
				 * Fires after the upload is complete and SWFUpload is ready to start the next file
				 * @param {TYPO3.FileUploadWindow} this
				 * @param {TYPO3.FileUpload} fileObj the instance of the file upload
				 */
				'uploadComplete',
				/**
				 * @event uploadComplete
				 * Fires after all files in the queue have been uploaded
				 * @param {TYPO3.FileUploadWindow} this
				 */
				'totalComplete'
			);
			this.setupWindow();
		},


		/**
		 * private, called once the window is rendered()
		 * instantiates the SWFUpload instance, which in turn replaces a placeholder ID (needed for Flash 10)
		 * with the flash movie
		 */
		setupFlash: function() {
			this.completedUploads = 0;	// reset the completed uploads
			var swfConfig = this.getFlashConfig();

			// add a placeholder div next to the button itself, so it can be detected and replaced by the flash plugin
			if (!Ext.fly(swfConfig.button_placeholder_id)) {
				var button = Ext.DomQuery.selectNode('#t3-file-upload-window-button-selectfiles button');
				Ext.DomHelper.insertBefore(button, '<div id="' + swfConfig.button_placeholder_id + '"></div>');
				// set the width of the swf-button in background according to the user-visible button
				swfConfig.button_width = button.clientWidth;
			}
			this.swf = new SWFUpload(swfConfig);
			this.swf.fileUploadWindow = this;

			// disable the "Cancel all uploads" button
			Ext.getCmp('t3-file-upload-window-button-cancel').disable();

			// add some info to the dialog
			// you can replace this by adding your own component with this ID in the constructor
			if (!this.getComponent('t3-upload-window-infopanel')) {
				var maxFileSize = (swfConfig.file_size_limit.toString().indexOf('B') > 0 ? swfConfig.file_size_limit : (swfConfig.file_size_limit / 1024) + ' MB');
				var txt = String.format(TYPO3.LLL.fileUpload.infoComponentMaxFileSize, maxFileSize) + '<br/>';
				if (swfConfig.file_upload_limit) {
					txt += String.format(TYPO3.LLL.fileUpload.infoComponentFileUploadLimit, swfConfig.file_upload_limit) + '<br/>';
				}
				if (swfConfig.file_types !== '*.*') {
					txt += String.format(TYPO3.LLL.fileUpload.infoComponentFileTypeLimit, swfConfig.file_types);
				}
				this.insert(0, new Ext.Panel({
					autoEl: { tag: 'div' },
					height: 'auto',
					id: 't3-upload-window-infopanel',
					html: txt,
					bodyBorder: false,
					border: false
				}));
			}
		},
		
		/**
		 * the configuration variables that can be set from outside (via uploadUrl etc) are set directly in the FileUploadWindow instance
		 * here we merge these variables from the outside with the default configuration set in the swfDefaultConfig
		 * and return a new config object that SWFupload can use and manipulate
		 * We decided to use camelCase parameters and parameters prepended with "upload" so it is
		 * better to understand than the existing SWFupload parameters
		 */
		getFlashConfig: function() {
			var swfConfig = {};
			Ext.apply(swfConfig, this.swfDefaultConfig);
			swfConfig.upload_url             = Ext.value(this.uploadURL, this.swfDefaultConfig.upload_url);
			swfConfig.file_size_limit        = Ext.value(this.uploadFileSizeLimit, this.swfDefaultConfig.file_size_limit);
			swfConfig.file_queue_limit       = Ext.value(this.uploadMaxFilesQueued, this.swfDefaultConfig.file_queue_limit);
			swfConfig.file_upload_limit      = Ext.value(this.uploadMaxFiles, this.swfDefaultConfig.file_upload_limit);
			swfConfig.file_post_name         = Ext.value(this.uploadFileParam, this.swfDefaultConfig.file_post_name);
			swfConfig.post_params            = Ext.value(this.uploadPostParams, this.swfDefaultConfig.post_params);
			// add the veriCode from the backend.php to verify the session with the flash client
			swfConfig.post_params.vC         = top.TS.veriCode;
			swfConfig.file_types_description = Ext.value(this.uploadFileTypesDescription, this.swfDefaultConfig.file_types_description);
			this.setFileTypeRestrictions(this.uploadFileTypes);
			swfConfig.file_types = this.swfDefaultConfig.file_types;
			return swfConfig;
		},
		
		/**
		 * this function merges the values from the TYPO3 style (comma separated) to the format
		 * SWFupload needs it to be (*.jpg;*.gif) and also adds deny file patterns
		 */
		setFileTypeRestrictions: function(typo3FileTypes) {
			if (typo3FileTypes.allow && typo3FileTypes.allow !== '' && typo3FileTypes.allow !== '*') {
				var allowedFiles = typo3FileTypes.allow.split(',');
				this.swfDefaultConfig.file_types = '*.' + allowedFiles.join(';*.');
			}
			if (typo3FileTypes.deny && typo3FileTypes.deny !== '') {
				this.deniedFileTypes = typo3FileTypes.deny;
			}
		},

		
		/**
		 * because swfupload does not include a way to explicitly deny certain files, we need to
		 * check the file type of every selected file before it gets uploaded
		 */
		fileTypeIsAllowed: function(filename) {
			var ext = filename.substr(filename.lastIndexOf('.')+1);
			if (ext) {
				var denyTypes = this.deniedFileTypes;
				denyTypes += (denyTypes.length ? ',' : '') + TS.denyFileTypes;
				denyTypes = ',' + denyTypes + ',';
				var reg = new RegExp(',' + ext + ',', 'i');
				if (denyTypes.search(reg) === -1) {
					return true;
				}
			}
			return false;
		},

		/**
		 * sets up the visual information before the window is rendered, it adds some default event handlers
		 * (they have to be re-set all the time, because all of them are purged in the cleanup function)
		 */
		setupWindow: function() {
			this.on('add',    function() { this.doLayout(); }.bind(this));
			this.on('remove', function() { this.doLayout(); }.bind(this));
			this.on('hide',   function() { this.cleanup(); }.bind(this));
			this.on('show',   function() {
				this.setupFlash();
				this.doLayout();
			}.bind(this));
			// show the window, and disable the cancel button (only gets enabled when files are selected)
			this.show();
		},

		/**
		 * is used when the window is closed, then the flash movie is removed and the existing listeners
		 * are removed, all components are removed and the window is then hidden
		 */
		cleanup: function() {
			if (this.swf) {
				this.swf.cancelUpload();
				this.swf.destroy();		
			}
			this.swf = null;
			this.purgeListeners();
			this.removeAll(true);
		},

		// the following functions are event proxies that take the SWF-style events to the extJS handling
		// they also provide basic functionality for the file upload process
		// private
		uploadSelectFiles: function(numFilesSelected, numFilesQueued, numFilesInQueue) {
			if (numFilesSelected > 0) {
				// enable the "Cancel all uploads" button
				Ext.getCmp('t3-file-upload-window-button-cancel').enable();
			}

			this.swf.startUpload();
			this.fireEvent('uploadSelectFiles', this, [numFilesSelected, numFilesQueued, numFilesInQueue]);
		},

		// private
		uploadQueued: function(fileObj) {
			this.activeUploads[fileObj.id] = new TYPO3.FileUpload({file: fileObj});
			if (!this.fileTypeIsAllowed(fileObj.name)) {
				this.activeUploads[fileObj.id].error(SWFUpload.QUEUE_ERROR.INVALID_FILETYPE, '');
				this.fireEvent('uploadError', this, [this.activeUploads[fileObj.id], SWFUpload.QUEUE_ERROR.INVALID_FILETYPE, '']);
				this.swf.cancelUpload(fileObj.id, false);
			} else {
				this.fireEvent('uploadQueued', this, [this.activeUploads[fileObj.id]]);
			}
		},

		// private
		uploadQueuedError: function(fileObj, errorCode, message) {
			if (!this.activeUploads[fileObj.id]) {
				this.activeUploads[fileObj.id] = new TYPO3.FileUpload({file: fileObj});
			}
			this.activeUploads[fileObj.id].error(errorCode, message);
			this.fireEvent('uploadQueuedError', this, [this.activeUploads[fileObj.id], errorCode, message]);
			delete this.activeUploads[fileObj.id];
		},

		// private
		uploadStart: function(fileObj) {
			this.activeUploads[fileObj.id].start();
			this.fireEvent('uploadStart', this, [this.activeUploads[fileObj.id]]);
		},

		// private
		uploadProgress: function(fileObj, bytesComplete, bytesTotal) {
			this.activeUploads[fileObj.id].update(bytesComplete, bytesTotal);
			this.fireEvent('uploadProgress', this, [this.activeUploads[fileObj.id], bytesComplete, bytesTotal]);
		},

		// private
		uploadError: function(fileObj, errorCode, message) {
			this.activeUploads[fileObj.id].error(errorCode, message);
			this.lastError = {'errorCode': errorCode, 'message': message};
			this.fireEvent('uploadError', this, [this.activeUploads[fileObj.id], errorCode, message]);
			delete this.activeUploads[fileObj.id];
		},

		// private
		uploadSuccess: function(fileObj, serverData, responseReceived) {
			this.completedUploads++;
			this.activeUploads[fileObj.id].success();
			this.fireEvent('uploadSuccess', this, [this.activeUploads[fileObj.id], serverData, responseReceived]);	
		},

		// private
		uploadComplete: function(fileObj) {
			this.fireEvent('uploadComplete', this, [this.activeUploads[fileObj.id]]);
			delete this.activeUploads[fileObj.id];
		},

		// private
		totalComplete: function() {
			// disable the "Cancel all uploads" button (for the next use)
			Ext.getCmp('t3-file-upload-window-button-cancel').disable();

			if (this.completedUploads > 0) {
				this.fireEvent('totalComplete', this);
			} else {
					// if all our uploads fail, we try to provide some reasons
				this.totalError();
			}
			this.cleanup();
			this.hide();
		},

		// private
		// this handler is only called by totalComplete, not by swfupload itself
		totalError: function() {
			if (this.lastError === null) {
				return;
			}

			var errorCode = this.lastError.errorCode;
			var message = this.lastError.message;
			var messageText = null;

				// provide a more detailed problem description for the well known bugs
			switch (errorCode) {
				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
					if (message == '401') {
						messageText = String.format(TYPO3.LLL.fileUpload.allError401);
					}
				break;

				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
					if (message == 'Error #2038') {
						messageText = String.format(TYPO3.LLL.fileUpload.allError2038);
					}
				break;
			}
			Ext.MessageBox.show({
				title: String.format(TYPO3.LLL.fileUpload.allErrorMessageTitle),
				msg: String.format(TYPO3.LLL.fileUpload.allErrorMessageText + (messageText ? messageText : message)),
				buttons: Ext.MessageBox.OK,
				icon: Ext.MessageBox.ERROR
			});
		},
		
		/**
		 * Removes all components from this container.
		 * @param {Boolean} autoDestroy (optional) True to automatically invoke the removed Component's {@link Ext.Component#destroy} function.
		 * Defaults to the value of this Container's {@link #autoDestroy} config.
		 * @return {Array} Array of the destroyed components
		 * 
		 * This function is copied from the Container object of extJS, because it was documented but not correctly implement
		 */
		removeAll: function(autoDestroy) {
			var item, items = [];
			while((item = this.items.last())) {
				items.unshift(this.remove(item, autoDestroy));
			}
			return items;
		}
	});


 	// This function should be used to fetch a FileUploadWindow instance, to make sure
 	// that only one instance is currently running
	TYPO3.FileUploadWindow.getInstance = function(config) {
		var instance = TYPO3.getInstance('FileUploadWindow');
	 	if (instance) {
	 		if (!instance.swf) {
				Ext.apply(instance, config);
				instance.setupWindow();
		 		instance.show();	 		
	 		} else {
	 			// TODO, maybe we can raise an exception
				alert(String.format(TYPO3.LLL.fileUpload.processRunning));
	 		}
	 	} else {
	 		instance = new TYPO3.FileUploadWindow(config);
	 		TYPO3.addInstance('FileUploadWindow', instance);
	 	}
 		return instance;
	};

	// This function checks through the SWFObject if the required flash player is available
	TYPO3.FileUploadWindow.isFlashAvailable = function() {
		return swfobject.hasFlashPlayerVersion(TYPO3.FileUploadWindow.prototype.swfDefaultConfig.minimum_flash_version);
	};

	/**
	 * This class includes one instance of an upload
	 * and is used mainly to display the progress bar Component
	 */
	TYPO3.FileUpload = Ext.extend(Ext.Component, {
		infoPanel:   null,	// Ext.Panel instance holding the progressBar and the cancel button
		cancelButton: null,	// Ext.BoxComponent instance, holding the X in there
		progressBar: null,	// Ext.Component progress bar instance
		parent:      null,	// reference to the TYPO3.FileUploadWindow
		file:        null,	// reference to the SWFupload.File object

		// creates the Ext component, used when a file is queued
		initComponent: function() {
			TYPO3.FileUpload.superclass.initComponent.call(this);
			this.parent = TYPO3.getInstance('FileUploadWindow');

			// the progress bar instance
			this.progressBar = new Ext.ProgressBar({
				id: 'flashupload-progress ' + this.file.id,
				cls: 't3-upload-window-progressbar',
				text: String.format(TYPO3.LLL.fileUpload.uploadWait, this.file.name),
				width: '100%',
				height: 21,
				x: -1,
				disabled: true
			});

			// the cancel button
			this.cancelButton = new Ext.BoxComponent({
				autoEl: {
					tag: 'div',
					'class': 't3icon-ext-cancel t3iconstyle-center'
				},
				hidden: true,
				width: 22,
				height: 18,
				x: -100
			});

			// the panel that holds the progress bar and the button together
			this.infoPanel = new Ext.Panel({
				layout: 'absolute',
				width: '100%',
				hideBorders: true,
				bodyBorder: false,
				border: false,
				items: [this.progressBar, this.cancelButton]
			});

			this.infoPanel.on('show', function() {
				var h = this.progressBar.getBox().height;
				this.infoPanel.setHeight(h);

				// show the cancel button on hover
				this.infoPanel.getEl().on('mouseover', function() {
					this.cancelButton.show();
					this.cancelButton.setPosition(this.progressBar.getBox().width - this.cancelButton.getBox().width, -1);
				}, this);

				// hide the cancel button on hover out
				this.infoPanel.getEl().on('mouseout', function() { 
					this.cancelButton.hide();
				}, this);

				// if the cancel button is clicked, the download is canceled
				this.cancelButton.getEl().on('click', function() {
					if (this.parent.swf) {
						this.parent.swf.cancelUpload(this.file.id);
					}
					this.cleanup(10);
				}, this);
			}, this);
			this.parent.add(this.infoPanel);
			this.infoPanel.show();
		},
 
		// enables the progress bar and sets the text
		start: function() {
			this.progressBar.enable();
			this.progressBar.updateText(String.format(TYPO3.LLL.fileUpload.uploadStarting, this.file.name));
		},

		// updates the progress bar (+ text) to the current progress
		update: function(bytesComplete, bytesTotal) {
			var percent = (bytesComplete / bytesTotal);
			var text = String.format(TYPO3.LLL.fileUpload.uploadProgress, Math.round(100*percent, 1), this.file.name);
			this.progressBar.updateProgress(percent, text);
		},

		// simply updates the text in the bar
		updateText: function(text) {
			this.progressBar.updateText(text);
		},

		// is called if there is an error after queuing a file or while uploading
		// get details for the error code from here: SWFUpload.QUEUE_ERROR or
		// SWFUpload.UPLOAD_ERROR (see contrib/swfupload/swfupload.js)
		// can be further extended to color the progress bar in red colors
		// then calls the cleanup function
		error: function(errorCode, message) {
			var txt = message;
			switch (errorCode) {
				case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
					txt = String.format(TYPO3.LLL.fileUpload.errorQueueLimitExceeded);
				break;
				case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
					txt = String.format(TYPO3.LLL.fileUpload.errorQueueFileSizeLimit, this.file.name);
				break;
				case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
					txt = String.format(TYPO3.LLL.fileUpload.errorQueueZeroByteFile, this.file.name);
				break;
				case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
					txt = String.format(TYPO3.LLL.fileUpload.errorQueueInvalidFiletype, this.file.name);
				break;

				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadHttp, message);
				break;
				case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadMissingUrl);
				break;
				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadIO);
				break;
				case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadSecurityError, message);
				break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadLimit);
				break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadFailed);
				break;
				case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadFileIDNotFound);
				break;
				case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadFileValidation);
				break;
				case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadFileCancelled, this.file.name);
				break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
					txt = String.format(TYPO3.LLL.fileUpload.errorUploadFileStopped, this.file.name);
				break;
			}
			this.updateText(txt);
			this.cleanup(10000);
		},

		// updates the progressbar to show the full 100% and a text that everything went fine
		// then calls the cleanup function
		success: function() {
			this.progressBar.updateProgress(1, String.format(TYPO3.LLL.fileUpload.uploadSuccess, this.file.name));
			this.cleanup();
		},

		// cleanup function that calls the destroy method right now after a specified delay
		cleanup: function(delay) {
			var cleanup = new Ext.util.DelayedTask(this.destroy, this);
			cleanup.delay((delay ? delay : 2000));
		},

		// internal function to remove the progress Bar and trigger an remove() event after that 
		// in the main window
		destroy: function() {
			if (this.infoPanel && this.infoPanel.id && Ext.get(this.infoPanel.id)) {
				Ext.get(this.infoPanel.id).fadeOut({
					callback: function() {
						this.parent.remove(this.infoPanel);
					}.bind(this)
				});			
			}
		}
	});


});

/***************************************************************
*
*  Evaluation of TYPO3 form field content
*
*
*
*  Copyright notice
*
*  (c) 1998-2011 Kasper Skaarhoj
*  All rights reserved
*
*  This script is part of the TYPO3 t3lib/ library provided by
*  Kasper Skaarhoj <kasper@typo3.com> together with TYPO3
*
*  Released under GNU/GPL (see license file in typo3/sysext/cms/tslib/)
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*
*  This copyright notice MUST APPEAR in all copies of this script
***************************************************************/


function evalFunc()	{
	this.input = evalFunc_input;
	this.output = evalFunc_output;
	this.parseInt = evalFunc_parseInt;
	this.getNumChars = evalFunc_getNumChars;
	this.parseDouble = evalFunc_parseDouble;
	this.noSpace = evalFunc_noSpace;
	this.getSecs = evalFunc_getSecs;
	this.getYear = evalFunc_getYear;
	this.getTimeSecs = evalFunc_getTimeSecs;
	this.getTime = evalFunc_getTime;
	this.getDate = evalFunc_getDate;
	this.getTimestamp = evalFunc_getTimestamp;
	this.caseSwitch = evalFunc_caseSwitch;
	this.evalObjValue = evalFunc_evalObjValue;
	this.outputObjValue = evalFunc_outputObjValue;
	this.split = evalFunc_splitStr;
	this.pol = evalFunc_pol;
	this.convertClientTimestampToUTC = evalFunc_convertClientTimestampToUTC;

	this.ltrim = evalFunc_ltrim;
	this.btrim = evalFunc_btrim;
	var today = new Date();
 	this.lastYear = this.getYear(today);
 	this.lastDate = this.getDate(today);
 	this.lastTime = 0;
	this.refDate = today;
	this.isInString = '';
	this.USmode = 0;
}
function evalFunc_pol(fortegn, value)	{
	return eval (((fortegn=="-")?'-':'')+value);
}
function evalFunc_evalObjValue(FObj,value)	{
	var evallist = FObj.evallist;
	this.isInString = (FObj.is_in) ? ''+FObj.is_in : '';
	var index=1;
	var theEvalType = (FObj.evallist) ? this.split(evallist, ",", index) : false;
	var newValue=value;
	while (theEvalType) {
		if (theEvalType.slice(0, 3) == 'tx_' || theEvalType.slice(0, 3) == 'Tx_') {
			if(typeof window[theEvalType] == 'function') {
				newValue = window[theEvalType](newValue);	// variable function call, calling functions like tx_myext_myeval(value)
			}
		} else {
			newValue = evalFunc.input(theEvalType, newValue);
		}
		index++;
		theEvalType = this.split(evallist, ",", index);
	}
	return newValue;
}
function evalFunc_outputObjValue(FObj,value)	{
	var evallist = FObj.evallist;
	var index=1;
	var theEvalType = this.split(evallist, ",", index);
	var newValue=value;
	while (theEvalType) {
		if (theEvalType != 'required') {
			newValue = evalFunc.output(theEvalType, value, FObj);
		}
		index++;
		theEvalType = this.split(evallist, ",", index);
	}
	return newValue;
}
function evalFunc_caseSwitch(type,inVal)	{
	var theVal = ''+inVal;
	var newString = '';
	switch (type)	{
		case "alpha":
		case "num":
		case "alphanum":
		case "alphanum_x":
			for (var a=0;a<theVal.length;a++)	{
				var theChar = theVal.substr(a,1);
				var special = (theChar=='_'||theChar=='-');
				var alpha = (theChar>='a'&&theChar<='z') || (theChar>='A'&&theChar<='Z');
				var num = (theChar>='0' && theChar<='9');
				switch(type)	{
					case "alphanum":	special=0;		break;
					case "alpha":	num=0; special=0;		break;
					case "num":	alpha=0; special=0;		break;
				}
				if (alpha || num || theChar==' ' || special)	{
					newString+=theChar;
				}
			}
		break;
		case "is_in":
			if (this.isInString)	{
				for (var a=0;a<theVal.length;a++)	{
					var theChar = theVal.substr(a,1);
					if (this.isInString.indexOf(theChar)!=-1)	{
						newString+=theChar;
					}
				}
			} else {newString = theVal;}
		break;
		case "nospace":
			newString = this.noSpace(theVal);
		break;
		case "upper":
			newString = theVal.toUpperCase();
		break;
		case "lower":
			newString = theVal.toLowerCase();
		break;
		default:
			return inVal;
	}
	return newString;
}
function evalFunc_parseInt(value)	{
	var theVal = ''+value;
	if (!value)	return 0;
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)!='0')	{
			return parseInt(theVal.substr(a,theVal.length)) || 0;
		}
	}
	return 0;
}
function evalFunc_getNumChars(value)	{
	var theVal = ''+value;
	if (!value)	return 0;
	var outVal="";
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)==parseInt(theVal.substr(a,1)))	{
			outVal+=theVal.substr(a,1);
		}
	}
	return outVal;
}
function evalFunc_parseDouble(value)	{
	var theVal = "" + value;
	theVal = theVal.replace(/[^0-9,\.-]/g, "");
	var negative = theVal.substring(0, 1) === '-';
	theVal = theVal.replace(/-/g, "");
	theVal = theVal.replace(/,/g, ".");
	if (theVal.indexOf(".") == -1) {
		theVal += ".0";
	}
	var parts = theVal.split(".");
	var dec = parts.pop();
	theVal = Number(parts.join("") + "." + dec);
	if (negative) {
	    theVal *= -1;
	}
	theVal = theVal.toFixed(2);

	return theVal;
}
function evalFunc_noSpace(value)	{
	var theVal = ''+value;
	var newString="";
	for (var a=0;a<theVal.length;a++)	{
		var theChar = theVal.substr(a,1);
		if (theChar!=' ')	{
			newString+=theChar;
		}
	}
	return newString;
}
function evalFunc_ltrim(value)	{
	var theVal = ''+value;
	if (!value)	return '';
	for (var a=0;a<theVal.length;a++)	{
		if (theVal.substr(a,1)!=' ')	{
			return theVal.substr(a,theVal.length);
		}
	}
	return '';
}
function evalFunc_btrim(value)	{
	var theVal = ''+value;
	if (!value)	return '';
	for (var a=theVal.length;a>0;a--)	{
		if (theVal.substr(a-1,1)!=' ')	{
			return theVal.substr(0,a);
		}
	}
	return '';
}
function evalFunc_splitSingle(value)	{
	var theVal = ''+value;
	this.values = new Array();
	this.pointer = 3;
	this.values[1]=theVal.substr(0,2);
	this.values[2]=theVal.substr(2,2);
	this.values[3]=theVal.substr(4,10);
}
function evalFunc_split(value)	{
	this.values = new Array();
	this.valPol = new Array();
	this.pointer = 0;
	var numberMode = 0;
	var theVal = "";
	value+=" ";
	for (var a=0;a<value.length;a++)	{
		var theChar = value.substr(a,1);
		if (theChar<"0" || theChar>"9")	{
			if (numberMode)	{
				this.pointer++;
				this.values[this.pointer]=theVal;
				theVal = "";
				numberMode=0;
			}
			if (theChar=="+" || theChar=="-")	{
				this.valPol[this.pointer+1] = theChar;
			}
		} else {
			theVal+=theChar;
			numberMode=1;
		}
	}
}
function evalFunc_input(type,inVal)	{
	if (type=="md5") {
		return MD5(inVal);
	}
	if (type=="trim") {
		return this.ltrim(this.btrim(inVal));
	}
	if (type=="int") {
		return this.parseInt(inVal);
	}
	if (type=="double2") {
		return this.parseDouble(inVal);
	}

	var today = new Date();
	var add=0;
	var value = this.ltrim(inVal);
	var values = new evalFunc_split(value);
	var theCmd = value.substr(0,1);
	value = this.caseSwitch(type,value);
	if (value=="") {
		return "";
		return 0;	// Why would I ever return a zero??? (20/12/01)
	}
	switch (type)	{
		case "datetime":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(today), 0);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (this.lastTime == 0)	{
						this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(today), 0);
					}
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = value.indexOf(' ');
					if (index!=-1)	{
						var dateVal = this.input("date",value.substr(index,value.length));
							// set refDate so that evalFunc_input on time will work with correct DST information
						this.refDate = new Date(dateVal*1000);
						this.lastTime = dateVal + this.input("time",value.substr(0,index));
					} else	{
							// only date, no time
						this.lastTime = this.input("date", value);
					}
			}
			this.lastTime+=add*24*60*60;
			return this.lastTime;
		break;
		case "year":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastYear = this.getYear(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					if (values.valPol[2])	{
						add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
					}
					var year = (values.values[1])?this.parseInt(values.values[1]):this.getYear(today);
					if (  (year>=0&&year<38) || (year>=70&&year<100) || (year>=1902&&year<2038)	)	{
						if (year<100)	{
							year = (year<38) ? year+=2000 : year+=1900;
						}
					} else {
						year = this.getYear(today);
					}
					this.lastYear = year;
			}
			this.lastYear+=add;
			return this.lastYear;
		break;
		case "date":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastDate = this.getTimestamp(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = 4;
					if (values.valPol[index])	{
						add = this.pol(values.valPol[index],this.parseInt(values.values[index]));
					}
					if (values.values[1] && values.values[1].length>2)	{
						if (values.valPol[2])	{
							add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
						}
						var temp = values.values[1];
						values = new evalFunc_splitSingle(temp);
					}

					var year = (values.values[3])?this.parseInt(values.values[3]):this.getYear(today);
					if ( (year>=0&&year<38) || (year>=70&&year<100) || (year>=1902&&year<2038) )	{
						if (year<100)	{
							year = (year<38) ? year+=2000 : year+=1900;
						}
					} else {
						year = this.getYear(today);
					}
					var month = (values.values[this.USmode?1:2])?this.parseInt(values.values[this.USmode?1:2]):today.getUTCMonth()+1;
					var day = (values.values[this.USmode?2:1])?this.parseInt(values.values[this.USmode?2:1]):today.getUTCDate();

					var theTime = new Date(parseInt(year), parseInt(month)-1, parseInt(day));

						// Substract timezone offset from client
					this.lastDate = this.convertClientTimestampToUTC(this.getTimestamp(theTime), 0);
			}
			this.lastDate+=add*24*60*60;
			return this.lastDate;
		break;
		case "time":
		case "timesec":
			switch (theCmd)	{
				case "d":
				case "t":
				case "n":
					this.lastTime = this.getTimeSecs(today);
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				case "+":
				case "-":
					if (this.lastTime == 0)	{
						this.lastTime = this.getTimeSecs(today);
					}
					if (values.valPol[1])	{
						add = this.pol(values.valPol[1],this.parseInt(values.values[1]));
					}
				break;
				default:
					var index = (type=="timesec")?4:3;
					if (values.valPol[index])	{
						add = this.pol(values.valPol[index],this.parseInt(values.values[index]));
					}
					if (values.values[1] && values.values[1].length>2)	{
						if (values.valPol[2])	{
							add = this.pol(values.valPol[2],this.parseInt(values.values[2]));
						}
						var temp = values.values[1];
						values = new evalFunc_splitSingle(temp);
					}
					var sec = (values.values[3])?this.parseInt(values.values[3]):today.getUTCSeconds();
					if (sec > 59)	{sec=59;}
					var min = (values.values[2])?this.parseInt(values.values[2]):today.getUTCMinutes();
					if (min > 59)	{min=59;}
					var hour = (values.values[1])?this.parseInt(values.values[1]):today.getUTCHours();
					if (hour >= 24)	{hour=0;}

					var theTime = new Date(this.getYear(this.refDate), this.refDate.getUTCMonth(), this.refDate.getUTCDate(), hour, min, ((type=="timesec")?sec:0));

						// Substract timezone offset from client
					this.lastTime = this.convertClientTimestampToUTC(this.getTimestamp(theTime), 1);
			}
			this.lastTime+=add*60;
			if (this.lastTime<0) {this.lastTime+=24*60*60;}
			return this.lastTime;
		break;
		default:
			return value;
	}
}
function evalFunc_output(type,value,FObj)	{
	var theString = "";
	switch (type)	{
		case "date":
			if (!parseInt(value))	{return '';}
			var theTime = new Date(parseInt(value) * 1000);
			if (this.USmode)	{
				theString = (theTime.getUTCMonth()+1)+'-'+theTime.getUTCDate()+'-'+this.getYear(theTime);
			} else {
				theString = theTime.getUTCDate()+'-'+(theTime.getUTCMonth()+1)+'-'+this.getYear(theTime);
			}
		break;
		case "datetime":
			if (!parseInt(value))	{return '';}
			theString = this.output("time",value)+' '+this.output("date",value);
		break;
		case "time":
		case "timesec":
			if (!parseInt(value))	{return '';}
			var theTime = new Date(parseInt(value) * 1000);
			var h = theTime.getUTCHours();
			var m = theTime.getUTCMinutes();
			var s = theTime.getUTCSeconds();
			theString = h+':'+((m<10)?'0':'')+m + ((type=="timesec")?':'+((s<10)?'0':'')+s:'');
		break;
		case "password":
			theString = (value)	? TS.passwordDummy : "";
		break;
		case "int":
			theString = (FObj.checkbox && value==FObj.checkboxValue)?'':value;
		break;
		default:
			theString = value;
	}
	return theString;
}
function evalFunc_getSecs(timeObj)	{
	return timeObj.getUTCSeconds();
}
// Seconds since midnight:
function evalFunc_getTime(timeObj)	{
	return timeObj.getUTCHours() * 60 * 60 + timeObj.getUTCMinutes() * 60 + this.getSecs(timeObj);
}
function evalFunc_getYear(timeObj)	{
	return timeObj.getUTCFullYear();
}
// Seconds since midnight with client timezone offset:
function evalFunc_getTimeSecs(timeObj)	{
	return timeObj.getHours()*60*60+timeObj.getMinutes()*60+timeObj.getSeconds();
}
function evalFunc_getDate(timeObj)	{
	var theTime = new Date(this.getYear(timeObj), timeObj.getUTCMonth(), timeObj.getUTCDate());
	return this.getTimestamp(theTime);
}
function evalFunc_dummy (evallist,is_in,checkbox,checkboxValue) {
	this.evallist = evallist;
	this.is_in = is_in;
	this.checkboxValue = checkboxValue;
	this.checkbox = checkbox;
}
function evalFunc_splitStr(theStr1, delim, index) {
	var theStr = ''+theStr1;
	var lengthOfDelim = delim.length;
	sPos = -lengthOfDelim;
	if (index<1) {index=1;}
	for (a=1; a<index; a++)	{
		sPos = theStr.indexOf(delim, sPos+lengthOfDelim);
		if (sPos==-1)	{return null;}
	}
	ePos = theStr.indexOf(delim, sPos+lengthOfDelim);
	if(ePos == -1)	{ePos = theStr.length;}
	return (theStr.substring(sPos+lengthOfDelim,ePos));
}
function evalFunc_getTimestamp(timeObj)	{
	return Date.parse(timeObj)/1000;
}

// Substract timezone offset from client to a timestamp to get UTC-timestamp to be send to server
function evalFunc_convertClientTimestampToUTC(timestamp, timeonly)	{
	var timeObj = new Date(timestamp*1000);
	timeObj.setTime((timestamp - timeObj.getTimezoneOffset()*60)*1000);
	if (timeonly)	{
			// only seconds since midnight
		return this.getTime(timeObj);
	} else	{
			// seconds since the "unix-epoch"
		return this.getTimestamp(timeObj);
	}
}
/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.ux.TabCloseMenu
 * @extends Object 
 * Plugin (ptype = 'tabclosemenu') for adding a close context menu to tabs. Note that the menu respects
 * the closable configuration on the tab. As such, commands like remove others and remove all will not
 * remove items that are not closable.
 * 
 * @constructor
 * @param {Object} config The configuration options
 * @ptype tabclosemenu
 */
Ext.ux.TabCloseMenu = Ext.extend(Object, {
    /**
     * @cfg {String} closeTabText
     * The text for closing the current tab. Defaults to <tt>'Close Tab'</tt>.
     */
    closeTabText: 'Close Tab',

    /**
     * @cfg {String} closeOtherTabsText
     * The text for closing all tabs except the current one. Defaults to <tt>'Close Other Tabs'</tt>.
     */
    closeOtherTabsText: 'Close Other Tabs',
    
    /**
     * @cfg {Boolean} showCloseAll
     * Indicates whether to show the 'Close All' option. Defaults to <tt>true</tt>. 
     */
    showCloseAll: true,

    /**
     * @cfg {String} closeAllTabsText
     * <p>The text for closing all tabs. Defaults to <tt>'Close All Tabs'</tt>.
     */
    closeAllTabsText: 'Close All Tabs',
    
    /**
	 * @cfg {Array} custom menu entries
	 */
	customMenuEntries: [],

    
    constructor : function(config){
        Ext.apply(this, config || {});
    },

    //public
    init : function(tabs){
        this.tabs = tabs;
        tabs.on({
            scope: this,
            contextmenu: this.onContextMenu,
            destroy: this.destroy
        });
    },
    
    destroy : function(){
        Ext.destroy(this.menu);
        delete this.menu;
        delete this.tabs;
        delete this.active;    
    },

    // private
    onContextMenu : function(tabs, item, e){
        this.active = item;
        var m = this.createMenu(),
            disableAll = true,
            disableOthers = true,
            closeAll = m.getComponent('closeall');
        
        m.getComponent('close').setDisabled(!item.closable);
        tabs.items.each(function(){
            if(this.closable){
                disableAll = false;
                if(this != item){
                    disableOthers = false;
                    return false;
                }
            }
			return true;
        });
        m.getComponent('closeothers').setDisabled(disableOthers);
        if(closeAll){
            closeAll.setDisabled(disableAll);
        }
        
        e.stopEvent();
        m.showAt(e.getPoint());
    },
    
    createMenu : function(){
        if(!this.menu){
            var items = [{
                itemId: 'close',
                text: this.closeTabText,
                scope: this,
                handler: this.onClose
            }];
            if(this.showCloseAll){
                items.push('-');
            }
            items.push({
                itemId: 'closeothers',
                text: this.closeOtherTabsText,
                scope: this,
                handler: this.onCloseOthers
            });
            if(this.showCloseAll){
                items.push({
                    itemId: 'closeall',
                    text: this.closeAllTabsText,
                    scope: this,
                    handler: this.onCloseAll
                });
            }
            if (this.customMenuEntries.length) {
            	this.customMenuEntries.each(function(item) {
            		items.push(item);
            	});
            }
            
            this.menu = new Ext.menu.Menu({
                items: items
            });
        }
        return this.menu;
    },
    
    onClose : function(){
        this.tabs.remove(this.active);
    },
    
    onCloseOthers : function(){
        this.doClose(true);
    },
    
    onCloseAll : function(){
        this.doClose(false);
    },
    
    doClose : function(excludeActive){
        var items = [];
        this.tabs.items.each(function(item){
            if(item.closable){
                if(!excludeActive || item != this.active){
                    items.push(item);
                }    
            }
        }, this);
        Ext.each(items, function(item){
            this.tabs.remove(item);
        }, this);
    }
});

Ext.preg('tabclosemenu', Ext.ux.TabCloseMenu);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Oliver Hader <oliver@typo3.org>
 *  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3', 'TYPO3.Components');

/**
 * TYPO3window - General TYPO3 window component
 */
TYPO3.Components.Window = Ext.extend(Ext.Window, {
	width: 450,
	autoHeight: true,
	closable: true,
	resizable: false,
	plain: true,
	border: false,
	modal: true,
	draggable: true,
	closeAction: 'hide',
	cls: 't3-window',

	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config);
		TYPO3.Components.Window.superclass.constructor.call(this, config);
	}
});
Ext.reg('TYPO3window', TYPO3.Components.Window);


/**
 * Helper class for managing windows.
 * Once a window is created, it is permanent until you close
 * [TYPO3.Windows.close(id)] or remove all [TYPO3.Windows.closeAll()]
 *
 * Example usage:
 *
 * var w = TYPO3.Windows.getWindow({
 *		title: 'Testwindow',
 *		html: 'some content!',
 *		width: 400
 *	}).show();
 */
TYPO3.Windows = function() {
	/** @private */
	var windowCollection = new Ext.util.MixedCollection(true);

	return {
		/** @public */

		/**
		 * Get a window. If already in collection return it, otherwise create a new one
		 *
		 * @param {Object} configuration
		 * @return {Object} window
		 */
		getWindow: function(configuration) {
			var id = configuration.id || '', window;

			if (id) {
				window = this.getById(id);
			}
			if (window) {
				return window;
			} else {
				window = new TYPO3.Components.Window(configuration);
				windowCollection.add(window);
				return window;
			}
		},

		/**
		 * Get a window and show. If already in collection return it, otherwise create a new one
		 *
		 * @param {Object} configuration
		 * @return {Object} window
		 */
		showWindow: function(configuration) {
			var window = this.getWindow(configuration);
			window.show();
			return window;
		},

		/**
		 * Shows window with id and return reference. If not exist return false
		 *
		 * @param {String} id
		 * @return {Object} window false if not found
		 */
		show: function(id) {
			var window = this.getById(id);
			if (window) {
				window.show();
				return window;
			}
			return false;
		},

		/**
		 * Shows window with id and return reference. If not exist return false
		 *
		 * @param {String} id
		 * @return {Object} window or false if not found
		 */
		getById: function(id) {
			return windowCollection.key(id);
		},

		/**
		 * Get the window collection
		 *
		 * @return {Ext.util.MixedCollection} windowCollection
		 */
		getCollection: function () {
			return windowCollection;
		},

		/**
		 * Get count of windows
		 *
		 * @return {Int} count
		 */
		getCount: function() {
			return windowCollection.length;
		},

		/**
		 * Each for windowCollection
		 *
		 * @param {Function} function
		 * @param {Object} scope
		 * @return void
		 */
		each : function(fn, scope) {
			windowCollection.each(fn, scope);
		},

		/**
		 * Close window and remove from stack
		 *
		 * @param {Int} id
		 * @return void
		 */
		close: function(id) {
			var window = this.getById(id);
			if (window) {
				window.close();
				windowCollection.remove(window);
			}
		},

		/**
		 * Close all windows and clear stack
		 *
		 * @return void
		 */
		closeAll: function() {
			windowCollection.each(function(window) {
				window.close();
			});
			windowCollection.clear();
		}
	}
}();

/**
 * Helper class for dialog windows
 *
 * Example usage:
 *
 * TYPO3.Dialog.InformationDialog({
 * 		title: 'Test',
 *		msg: 'some information'
 *	});

 */
TYPO3.Dialog = function() {
	/** @private functions */
	var informationDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.INFO,
		fn: Ext.emptyFn
	};

	var questionDialogConfiguration = {
		buttons: Ext.MessageBox.YESNO,
		icon: Ext.MessageBox.QUESTION
	};

	var warningDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.WARNING,
		fn: Ext.emptyFn
	};

	var errorDialogConfiguration = {
		buttons: Ext.MessageBox.OK,
		icon: Ext.MessageBox.ERROR,
		fn: Ext.emptyFn
	};


	return {
		/** @public functions */
		InformationDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					informationDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		QuestionDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					questionDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		WarningDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					warningDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		},

		ErrorDialog: function(configuration) {
			configuration = configuration || {};
			configuration = Ext.apply(
					errorDialogConfiguration,
					configuration
					);
			Ext.Msg.show(configuration);
		}
	}
}();

/**
 * Helper class for dialog windows
 *
 * Example usage:
 *
 * TYPO3.ContextHelpWindow.open(identifier);
 */
TYPO3.ContextHelpWindow = function() {
	/**
	* Path to typo3 directory
	*
	* @type {String}
	* @private
	*/
	var typo3Path = '';

	/**
	* Context for open a window
	* "window" - open a new window
	* "inline" - open a TYPO3.Window (not currently implementy)
	*
	* @type {String}
	* @private
	*/
	var openContext;

	/**
	* Width for the window
	*
	* @type {Number}
	* @private
	*/
	var width;
	/**
	* Height of the window
	*
	* @type {Number}
	* @private
	*/
	var height;


	return {
		/**
		 * init class vars
		 *
		 * @return void
		 */
		init: function() {
			this.typo3Path = top.TYPO3.configuration.PATH_typo3;
			this.openContext = 'window';
			this.width = top.TYPO3.configuration.ContextHelpWindows.width;
			this.height = top.TYPO3.configuration.ContextHelpWindows.height;
		},

		/**
		 * Open window for TYPO3 inline help
		 *
		 * @param {String} help identifier
		 * @return {Object} window
		 */
		open: function(helpIdentifier) {
			if (this.openContext === 'window') {
				var cshWindow = window.open(
					this.typo3Path + 'view_help.php?tfID=' + helpIdentifier,
					'ContextHelpWindow',
					'height=' + this.height + ',width=' + this.width + ',status=0,menubar=0,scrollbars=1'
				);
				cshWindow.focus();
				return cshWindow;
			}
		}
	}
}();

/***************************************************************
*  Copyright notice
*
*  (c) 2007-2011 Ingo Renner <ingo@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * general backend javascript functions
 */

Ext.ns('TYPO3.configuration');

/**
 * jump the backend to a module
 */
function jump(url, modName, mainModName) {
		// clear information about which entry in nav. tree that might have been highlighted.
	top.fsMod.navFrameHighlightedID = [];
	top.fsMod.recentIds['web'] = -1;

	if (top.TYPO3.Backend.NavigationContainer.PageTree) {
		top.TYPO3.Backend.NavigationContainer.PageTree.refreshTree();
	}

	top.nextLoadModuleUrl = url;
	top.TYPO3.ModuleMenu.App.showModule(modName);

}

/**
 * shortcut manager to delegate the action of creating shortcuts to the new
 * backend.php shortcut menu or the old shortcut frame depending on what is available
 */
var ShortcutManager = {

	/**
	 * central entry point to create a shortcut, delegates the call to correct endpoint
	 */
	createShortcut: function(confirmQuestion, backPath, moduleName, url) {
		if(confirm(confirmQuestion)) {
			if (typeof TYPO3BackendShortcutMenu !== undefined) {
					// backend.php
				TYPO3BackendShortcutMenu.createShortcut('', moduleName, url);
			}
		}
	}
}


/**
 * Function similar to PHPs  rawurlencode();
 */
function rawurlencode(str) {
	var output = escape(str);
	output = str_replace("*","%2A", output);
	output = str_replace("+","%2B", output);
	output = str_replace("/","%2F", output);
	output = str_replace("@","%40", output);
	return output;
}

/**
 * Function to similar to PHPs  rawurlencode() which removes TYPO3_SITE_URL;
 */
function rawurlencodeAndRemoveSiteUrl(str)	{	//
	var siteUrl = TYPO3.configuration.siteUrl;
	return rawurlencode(str_replace(siteUrl, "", str));
}

/**
 * String-replace function
 */
function str_replace(match,replace,string)	{	//
	var input = ""+string;
	var matchStr = ""+match;
	if (!matchStr)	{return string;}
	var output = "";
	var pointer=0;
	var pos = input.indexOf(matchStr);
	while (pos !== -1)	{
		output+=""+input.substr(pointer, pos-pointer)+replace;
		pointer=pos+matchStr.length;
		pos = input.indexOf(match,pos+1);
	}
	output+=""+input.substr(pointer);
	return output;
}



/**
 * Launcing information window for records/files (fileref as "table" argument)
 */
function launchView(table,uid,bP)	{	//
	var backPath= bP ? bP : "";
	var thePreviewWindow="";
	thePreviewWindow = window.open(TS.PATH_typo3+"show_item.php?table="+encodeURIComponent(table)+"&uid="+encodeURIComponent(uid),"ShowItem"+TS.uniqueID,"width=550,height=600,status=0,menubar=0,resizable=0,location=0,directories=0,scrollbars=1,toolbar=0");
	if (thePreviewWindow && thePreviewWindow.focus)	{
		thePreviewWindow.focus();
	}
}

/**
 * Opens plain window with url
 */
function openUrlInWindow(url,windowName)	{	//
	regularWindow = window.open(
		url,
		windowName,
		"status=1,menubar=1,resizable=1,location=1,directories=0,scrollbars=1,toolbar=1");
	regularWindow.focus();
	return false;
}

/**
 * Loads a page id for editing in the page edit module:
 */
function loadEditId(id,addGetVars)	{	//
	top.fsMod.recentIds.web = id;
	top.fsMod.navFrameHighlightedID.web = "pages" + id + "_0";		// For highlighting

	if (top.content && top.content.nav_frame && top.content.nav_frame.refresh_nav)	{
		top.content.nav_frame.refresh_nav();
	}
	if (TYPO3.configuration.pageModule) {
		top.goToModule(TYPO3.configuration.pageModule, 0, addGetVars?addGetVars:"");
	}
}

/**
 * Returns incoming URL (to a module) unless nextLoadModuleUrl is set. If that is the case nextLoadModuleUrl is returned (and cleared)
 * Used by the shortcut frame to set a "intermediate URL"
 */
var nextLoadModuleUrl="";
function getModuleUrl(inUrl)	{	//
	var nMU;
	if (top.nextLoadModuleUrl)	{
		nMU=top.nextLoadModuleUrl;
		top.nextLoadModuleUrl="";
		return nMU;
	} else {
		return inUrl;
	}
}

/**
 * Print properties of an object
 */
function debugObj(obj,name)	{	//
	var acc;
	for (var i in obj) {
		if (obj[i])	{
			acc+=i+":  "+obj[i]+"\n";
		}
	}
	alert("Object: "+name+"\n\n"+acc);
}



	// Used by Frameset Modules
var condensedMode = TYPO3.configuration.condensedMode;
var currentSubScript = "";
var currentSubNavScript = "";

	// Used for tab-panels:
var DTM_currentTabs = [];

	// status of WS FE preview
var WorkspaceFrontendPreviewEnabled = TYPO3.configuration.workspaceFrontendPreviewEnabled;

/***************************************************************
*  Copyright notice
*
*  (c) 2009-2011 Steffen Kamper <info@sk-typo3.de>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * AJAX login refresh box
 */
Ext.namespace('Ext.ux.TYPO3');

Ext.ux.TYPO3.loginRefresh = Ext.extend(Ext.util.Observable, {
	locked: 0,
	interval: 60,

	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config);
		this.initComponents();
		this.loadingTask = {
			run: function(){
				// interval run
				Ext.Ajax.request({
					url: "ajax.php",
					params: {
						"ajaxID": "BackendLogin::isTimedOut",
						"skipSessionUpdate": 1
					},
					method: "GET",
					success: function(response, options) {
						var result = Ext.util.JSON.decode(response.responseText);
						if (result.login.locked) {
							this.locked = 1;
							Ext.MessageBox.show({
								title: TYPO3.LLL.core.please_wait,
								msg: TYPO3.LLL.core.be_locked,
								width: 500,
								icon: Ext.MessageBox.INFO,
								closable: false
							});
						} else {
							if (this.locked === 1) {
								this.locked = 0;
								Ext.MessageBox.hide();
							}
						}
						if ((result.login.timed_out || result.login.will_time_out) && Ext.getCmp("loginformWindow")) {
							Ext.getCmp("login_username").value = TYPO3.configuration.username;
							this.stopTimer();
							if (result.login.timed_out) {
								this.showLoginForm();
							} else {
								this.progressWindow.show();
							}
						}
					},
					failure: function() {

					},
					scope: this
				});
			},
			interval: this.interval * 1000,
			scope: this
		};
		this.startTimer();
		Ext.ux.TYPO3.loginRefresh.superclass.constructor.call(this, config);
	},

	initComponents: function() {
		var loginPanel = new Ext.FormPanel({
			url: "ajax.php",
			id: "loginform",
			title: TYPO3.LLL.core.refresh_login_title,
			defaultType: 'textfield',
			scope: this,
			width: "100%",
			bodyStyle: "padding: 5px 5px 3px 5px; border-width: 0; margin-bottom: 7px;",

			items: [{
					xtype: "panel",
					bodyStyle: "margin-bottom: 7px; border: none;",
					html: TYPO3.LLL.core.login_expired
				},{
					fieldLabel: TYPO3.LLL.core.refresh_login_password,
					name: "p_field",
					width: 250,
					id: "password",
					inputType: "password"
				},{
					inputType: "hidden",
					name: "username",
					id: "login_username",
					value: ""
				},{
					inputType: "hidden",
					name: "userident",
					id: "userident",
					value: ""
				}, {
					inputType: "hidden",
					name: "challenge",
					id: "challenge",
					value: ''
				}
			],
			keys:({
				key: Ext.EventObject.ENTER,
				fn: this.triggerSubmitForm,
				scope: this
			}),
			buttons: [{
				text: TYPO3.LLL.core.refresh_login_button,
				formBind: true,
				handler: this.triggerSubmitForm
			}, {
				text: TYPO3.LLL.core.refresh_logout_button,
				formBind: true,
				handler: function() {
					top.location.href = TYPO3.configuration.siteUrl + TYPO3.configuration.TYPO3_mainDir + "logout.php";
				}
			}]
		});
		this.loginRefreshWindow = new Ext.Window({
			id: "loginformWindow",
			width: 450,
			autoHeight: true,
			closable: true,
			resizable: false,
			plain: true,
			border: false,
			modal: true,
			draggable: false,
			items: [loginPanel],
			listeners: {
				activate: function() {
					Ext.getCmp('password').focus(false, 800);
				}
			}
		});

		var progressControl = new Ext.ProgressBar({
			autoWidth: true,
			autoHeight: true,
			value: 30
		});

		this.progressWindow = new Ext.Window({
			closable: false,
			resizable: false,
			draggable: false,
			modal: true,
			id: "loginRefreshWindow",
			items: [{
					xtype: "panel",
					bodyStyle: "padding: 5px 5px 3px 5px; border-width: 0; margin-bottom: 7px;",
					bodyBorder: false,
					autoHeight: true,
					autoWidth: true,
					html: TYPO3.LLL.core.login_about_to_expire
				},
				progressControl
			],
			title: TYPO3.LLL.core.login_about_to_expire_title,
			width: 450,

			buttons: [{
				text: TYPO3.LLL.core.refresh_login_refresh_button,
				handler: function() {
					var refresh = Ext.Ajax.request({
						url: "ajax.php",
						params: {
							"ajaxID": "BackendLogin::isTimedOut"
						},
						method: "GET",
						scope: this
					});
					TYPO3.loginRefresh.progressWindow.hide();
					progressControl.reset();
					TYPO3.loginRefresh.startTimer();
				}
			}, {
				text: TYPO3.LLL.core.refresh_direct_logout_button,
				handler: function() {
					top.location.href = TYPO3.configuration.siteUrl + TYPO3.configuration.TYPO3_mainDir + "logout.php";
				}
			}]
		});
		this.progressWindow.on('show', function(){
			progressControl.wait({
				interval: 1000,
				duration: 30000,
				increment: 32,
				text: String.format(TYPO3.LLL.core.refresh_login_countdown, '30'),
				fn: function() {
					TYPO3.loginRefresh.showLoginForm();
				}
			});

		});
		progressControl.on('update', function(control, value, text) {
			var rest = parseInt(30 - (value * 30), 10);
			if (rest === 1) {
				control.updateText(String.format(TYPO3.LLL.core.refresh_login_countdown_singular, rest));
			} else {
				control.updateText(String.format(TYPO3.LLL.core.refresh_login_countdown, rest));
			}
		});

		this.loginRefreshWindow.on('close', function(){
			TYPO3.loginRefresh.startTimer();
		});
	},

	showLoginForm: function() {
		if (TYPO3.configuration.showRefreshLoginPopup) {
			//log off for sure
			Ext.Ajax.request({
				url: "ajax.php",
				params: {
				"ajaxID": "BackendLogin::logout"
			},
			method: "GET",
			scope: this,
			success: function(response, opts) {
				TYPO3.loginRefresh.showLoginPopup();
			},
			failure: function(response, opts) {
				alert("something went wrong");
			}
			});
		} else {
			Ext.getCmp("loginRefreshWindow").hide();
			Ext.getCmp("loginformWindow").show();
		}
	},

	showLoginPopup: function() {
		Ext.getCmp("loginRefreshWindow").hide();
		var vHWin = window.open("login_frameset.php","relogin_" + TS.uniqueID,"height=450,width=700,status=0,menubar=0,location=1");
		vHWin.focus();
	},

	startTimer: function() {
		Ext.TaskMgr.start(this.loadingTask);
	},

	stopTimer: function() {
		Ext.TaskMgr.stop(this.loadingTask);
	},

	submitForm: function(challenge) {
		var form = Ext.getCmp("loginform").getForm();
		var fields = form.getValues();
		if (fields.p_field === "") {
			Ext.Msg.alert(TYPO3.LLL.core.refresh_login_failed, TYPO3.LLL.core.refresh_login_emptyPassword);
		} else {
			if (TS.securityLevel === "superchallenged") {
				fields.p_field = MD5(fields.p_field);
			}
			if (TS.securityLevel === "superchallenged" || TS.securityLevel === "challenged") {
				fields.challenge = challenge;
				fields.userident = MD5(fields.username + ":" + fields.p_field + ":" + challenge);
			} else {
				fields.userident = fields.p_field;
			}
			fields.p_field =  "";
			form.setValues(fields);

			form.submit({
				method: "POST",
				waitTitle: TYPO3.LLL.core.waitTitle,
				waitMsg: " ",
				params: {
					"ajaxID": "BackendLogin::login",
					"login_status": "login"
				},
				success: function(form, action) {
					// response object is "login" so real result will be available in failure handler
					Ext.getCmp("loginformWindow").hide();
					TYPO3.loginRefresh.startTimer();
				},
				failure: function(form, action) {
					var result = Ext.util.JSON.decode(action.response.responseText).login;
					if (result.success) {
						// User is logged in
						Ext.getCmp("loginformWindow").hide();
						TYPO3.loginRefresh.startTimer();
					} else {
						// TODO: add failure to notification system instead of alert
						Ext.Msg.alert(TYPO3.LLL.core.refresh_login_failed, TYPO3.LLL.core.refresh_login_failed_message);
					}
				}
			});
		}
	},

	triggerSubmitForm: function() {
		if (TS.securityLevel === 'superchallenged' || TS.securityLevel === 'challenged') {
			Ext.Ajax.request({
				url: 'ajax.php',
				params: {
					'ajaxID': 'BackendLogin::getChallenge',
					'skipSessionUpdate': 1
				},
				method: 'GET',
				success: function(response) {
					var result = Ext.util.JSON.decode(response.responseText);
					if (result.challenge) {
						Ext.getCmp('challenge').value = result.challenge;
						TYPO3.loginRefresh.submitForm(result.challenge);
					}
				},
				scope: this
			});
		} else {
			this.submitForm();
		}
	}
});



/**
 * Initialize login expiration warning object
 */
Ext.onReady(function() {
	TYPO3.loginRefresh = new Ext.ux.TYPO3.loginRefresh();
});

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3');

/**
 * Debug panel based upon the widget tab panel
 *
 * If you want to add a new tab, you can use the addTab or addTabWidget methods. The first one
 * creates the widget itself. If you need the latter one, you must create the widget yourself.
 *
 * The drag&drop functionality introduced a new attribute for the widget that should be added
 * as a tab. It's called "draggableTab" and needs to be set to true, if you want activated
 * drag&drop for the new tab.
 *
 * Additional Features:
 * - Drag&Drop
 * - Close tabs with a simple wheel/middle click
 * - utilization of the tabCloseMenu context menu (several closing options)
 * - Grouping of tabs (Only one nested level allowed!)
 *
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.DebugPanel = Ext.extend(Ext.TabPanel, {
	/**
	 * Tab Groups
	 *
	 * @var Ext.util.MixedCollection
	 */
	tabGroups: new Ext.util.MixedCollection(),

	/**
	 * Indicator if the debug panel is wrapped inside a debug panel
	 * @see addTabWidget()
	 *
	 * @var boolean
	 */
	isTabChildren: false,

	/**
	 * Initializes the widget and merges our defaults with the user-defined ones. The
	 * user-defined settings are preferred.
	 *
	 * @return void
	 */
	initComponent: function(config) {
		config = config || {};
		Ext.apply(this, config, {
				// activate general tab navigation with mouse wheel support
			enableTabScroll: true,
			defaults: {
				autoScroll: true
			},

				// add the context menu actions
			plugins: new Ext.ux.TabCloseMenu({
				closeTabText: TYPO3.LLL.core.tabs_close,
				closeOtherTabsText: TYPO3.LLL.core.tabs_closeOther,
				closeAllTabsText: TYPO3.LLL.core.tabs_closeAll,
				customMenuEntries: [
					'-',
					{
						itemId: 'openInBrowserWindow',
						text: TYPO3.LLL.core.tabs_openInBrowserWindow,
						scope: this,
						handler: function() {
							var tab = this.plugins.active;
							var group = '', content = '';

							if (tab.ownerCt.ownerCt instanceof Ext.TabPanel) {
								group = tab.ownerCt.title;
								content = tab.body.dom.innerHTML;
							} else {
								group = tab.title;
								tab.items.each(function(item) {
									content += item.body.dom.innerHTML;
								});
							}

							this.openBrowserWindow(
								tab.title,
								content,
								group
							);
						}
					}
				]
			})
		});


		TYPO3.DebugPanel.superclass.initComponent.call(this);
	},

	/**
	 * Create a drop arrow indicator for the tab drag&drop feature while rendering
	 * the component
	 *
	 * @return void
	 */
	onRender: function() {
		this.arrow = Ext.DomHelper.append(
			Ext.getBody(),
			'<div class="typo3-debugPanel-dragDropArrowDown">&nbsp;</div>',
			true
		);
		this.arrow.hide();

		TYPO3.DebugPanel.superclass.onRender.apply(this, arguments);
	},

	/**
	 * Collapse event
	 *
	 * @return void
	 */
	onCollapse: function() {
		TYPO3.DebugPanel.superclass.onCollapse.apply(this, arguments);
	},

	/**
	 * Expand event
	 *
	 * @return void
	 */
	onExpand: function() {
		TYPO3.DebugPanel.superclass.onExpand.apply(this, arguments);
	},

	/**
	 * Cleanup
	 *
	 * @return void
	 */
	onDestroy: function() {
		Ext.destroy(this.arrow);
		TYPO3.DebugPanel.superclass.onDestroy.call(this);
	},

	/**
	 * Adds a new tab inside a new debug console tab or inside a new browser window if the
	 * debugInWindow configuration variable is set.
	 *
	 * If you need more possibilites, you should use the addTabWidget method.
	 *
	 * @see addTabWidget()
	 * @param tabContent String content of the new tab
	 * @param header String tab header
	 * @param group String tab group
	 * @param position Integer position of the new tab
	 * @return void
	 */
	addTab: function(tabContent, header, group, position) {
		if (TYPO3.configuration.debugInWindow) {
			this.openBrowserWindow(header, tabContent, group);
		} else {
			var tabWidget = new Ext.Panel({
				title: header,
				html: tabContent,
				border: false,
				autoScroll: true,
				closable: true,
				draggableTab: true
			});

			this.addTabWidget(tabWidget, group, position);
		}
	},

	/**
	 * Adds a new tab to the widget
	 *
	 * You can inject any Ext component, but you need to create it yourself. If you just
	 * want to add some text into a new tab, you should use the addTab function.
	 *
	 * @see addTab()
	 * @param tabWidget Component the component that should be added as a new tab
	 * @param group String tab group
	 * @param position Integer position of the new tab
	 * @return void
	 */
	addTabWidget: function(tabWidget, group, position) {
		if (this.hidden) {
			this.show();
		} else if (this.collapsed) {
			this.expand();
		}

			// Move the widget into a tab group?
		var tabGroup = this;
		if (typeof group !== 'undefined' && group !== '' && !this.isTabChildren) {
			if (this.tabGroups.indexOfKey(group) === -1) {
				tabGroup = new TYPO3.DebugPanel({
					border: false,
					title: group,
					autoScroll: true,
					closable: true,
					isTabChildren: true,
					tabParent: this,
					draggableTab: true
				});
				this.addTabWidget(tabGroup);

				this.tabGroups.add(group, tabGroup);
			} else {
				tabGroup = this.tabGroups.key(group);
			}
		}

			// recalculate position if necessary
		if (typeof position === 'undefined') {
			position = tabGroup.items.getCount();
		}

			// hide the debug panel if the last element is closed
		tabWidget.on('destroy', function(element) {
			if (this.isTabChildren) {
				if (!this.items.getCount()) {
					this.tabParent.remove(this.tabParent.tabGroups.key(this.title));
				}
			} else {
				if (!this.items.getCount()) {
					this.hide();
					this.ownerCt.doLayout();
				}
				this.tabGroups.removeKey(element.title);
			}
		}, tabGroup);

			// add drag&drop and the wheel click functionality
		tabWidget.on('afterlayout', function(element) {
			Ext.get(this.id + '__' + element.id).on('mousedown', function(event) {
				if (!Ext.isIE7) {
					if ((Ext.isIE && event.button === 1) ||
						(!Ext.isIE && event.browserEvent.button === 1)
					) {
						event.stopEvent();
						this.remove(tabWidget);
						return false;
					}
				}
				return true;
			}, this);

			if (tabWidget.draggableTab) {
				this.initDragAndDropForTab(tabWidget);
			}
		}, tabGroup);

			// add the widget as a new tab
		tabGroup.insert(position, tabWidget).show();
		tabGroup.ownerCt.doLayout();
	},

	/**
	 * Extends the tab item with drag&drop functionality.
	 *
	 * @param item Component the tab widget
	 * @return void
	 */
	initDragAndDropForTab: function(item) {
		item.tabDragZone = new Ext.dd.DragZone(this.id + '__' + item.id, {
			ddGroup: this.id,

			/**
			 * Reintroduces the simple click event on a tab element.
			 *
			 * @return void
			 */
			b4MouseDown : function() {
				item.show();
				Ext.dd.DragZone.superclass.b4MouseDown.apply(this, arguments);
			},

			/**
			 * On receipt of a mousedown event, see if it is within a draggable element.
			 * Return a drag data object if so. The data object can contain arbitrary application
			 * data, but it should also contain a DOM element in the ddel property to provide
			 * a proxy to drag.
			 *
			 * @param event Ext.EventObject
			 * @return drag data
			 */
			getDragData: function(event) {
				var sourceElement = event.getTarget(item.itemSelector, 10);
				if (sourceElement) {
					var dragComponent = sourceElement.cloneNode(true);
					dragComponent.id = Ext.id();
					item.dragData = {
						ddel: dragComponent,
						sourceEl: sourceElement,
						repairXY: Ext.fly(sourceElement).getXY()
					};
					return item.dragData;
				}

				return false;
			},

			/**
			 * Provide coordinates for the proxy to slide back to on failed drag.
			 * This	is the original XY coordinates of the draggable element.
			 *
			 * @return x,y coordinations of the original component position
			 */
			getRepairXY: function() {
				return this.dragData.repairXY;
			}
		});

		item.tabDropZone = new Ext.dd.DropZone(this.id + '__' + item.id, {
			debugPanel: this,
			ddGroup: this.id,

			/**
			 * If the mouse is over a tab element, return that node. This is
			 * provided as the "target" parameter in all "onNodeXXXX" node event
			 * handling functions
			 *
			 * @param event Ext.EventObject
			 * @return the tab element or boolean false
			 */
			getTargetFromEvent: function(event) {
				var tabElement = Ext.get(event.getTarget()).findParentNode('li');
				if (tabElement !== null) {
					return tabElement;
				}

				return false;
			},

			/**
			 * On entry into a target node, highlight that node.
			 *
			 * @param target string id of the target element
			 * @return void
			 */
			onNodeEnter : function(target) {
				Ext.get(target).addClass('typo3-debugPanel-dragDropOver');
			},

			/**
			 * On exit from a target node, unhighlight that node.
			 *
			 * @param target string id of the target element
			 * @return void
			 */
			onNodeOut : function(target) {
				Ext.get(target).removeClass('typo3-debugPanel-dragDropOver');
				this.debugPanel.arrow.hide();
			},

			/**
			 * While over a target node, return the default drop allowed class which
			 * places a "tick" icon into the drag proxy. Also the arrow position is
			 * recalculated.
			 *
			 * @param target string id of the target element
			 * @param proxy Ext.dd.DDProxy proxy element
			 * @param event Ext.EventObject
			 * @return default dropAllowed class or a boolean false
			 */
			onNodeOver : function(target, proxy, event) {
					// set arrow position
				var element = Ext.get(target);
				var left = 0;
				var tabLeft = element.getX();
				var tabMiddle = tabLeft + element.dom.clientWidth / 2;
				var tabRight = tabLeft + element.dom.clientWidth;
				if (event.getPageX() <= tabMiddle) {
					left = tabLeft;
				} else {
					left = tabRight;
				}
				this.debugPanel.arrow.setTop(this.el.getY() - 8).setLeft(left - 9).show();

					// drop allowed?
				if (proxy.handleElId !== target.id) {
					return Ext.dd.DropZone.prototype.dropAllowed;
				}

				return false;
			},

			/**
			 * On node drop we move the dragged tab element at the position of
			 * the dropped element.
			 *
			 * @param target string id of the target element
			 * @param proxy Ext.dd.DDProxy proxy element
			 * @param event Ext.EventObject
			 * @return true or false
			 */
			onNodeDrop : function(target, proxy, event) {
				if (proxy.handleElId === target.id) {
					return false;
				}

				var dropPanelId = target.id.substring(this.debugPanel.id.length + 2);
				var dragPanelId = proxy.handleElId.substring(this.debugPanel.id.length + 2);

				var dropPanelPosition = this.debugPanel.items.indexOfKey(dropPanelId);
				var dragPanelPosition = this.debugPanel.items.indexOfKey(dragPanelId);

				if (dropPanelPosition !== undefined &&
					dropPanelPosition !== -1 &&
					dropPanelPosition <= this.debugPanel.items.getCount()
				) {
						// calculate arrow position to decide if the elements needs
						// to be inserted on the right or left
					var element = Ext.get(target);
					var tabMiddle = element.getX() + element.dom.clientWidth / 2;
					if (dragPanelPosition > dropPanelPosition) {
						if (event.getPageX() > tabMiddle) {
							dropPanelPosition += 1;
						}
					} else {
						if (event.getPageX() <= tabMiddle) {
							dropPanelPosition -= 1;
						}
					}

					var dropEl = this.debugPanel.remove(dragPanelId, false);
					this.debugPanel.addTabWidget(dropEl, '', dropPanelPosition);
				}

				this.debugPanel.arrow.hide();
				return true;
			}
		});
	},

	/**
	 * Opens debug output in a new browser window
	 *
	 * @param title string
	 * @param content string
	 * @param group string
	 * @return void
	 */
	openBrowserWindow: function(title, content, group) {
		var newWindow = window.open('', 'TYPO3DebugWindow_' + group,
			'width=600,height=400,menubar=0,toolbar=1,status=0,scrollbars=1,resizable=1'
		);
		if (newWindow.document.body.innerHTML) {
			Ext.DomHelper.insertHtml('beforeEnd', newWindow.document.body, '<hr>' + content);
		} else {
			newWindow.document.writeln(
				'<html><head><title>Debug: ' + title + '(' + group + ')</title></head>'
				+ '<body bgcolor=white onLoad="self.focus()">'
				+ content
				+ '</body></html>'
			);
		}
		newWindow.document.close()
	},

	/**
	 * Wrapper for console.log
	 *
	 * @return void
	 */
	log: function() {
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++) {
				this.debug(arguments[i], 'Log', 'Javascript Console');
			}
		}
	},

	/**
	 * Wrapper for console.info
	 *
	 * @return void
	 */
	info: function() {
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++) {
				this.debug(arguments[i], 'Info', 'Javascript Console');
			}
		}
	},

	/**
	 * Wrapper for console.warn
	 *
	 * @return void
	 */
	warn: function() {
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++) {
				this.debug(arguments[i], 'Warning', 'Javascript Console');
			}
		}
	},

	/**
	 * Wrapper for console.error
	 *
	 * @return void
	 */
	error: function() {
		if (arguments.length) {
			for (var i = 0; i < arguments.length; i++) {
				this.debug(arguments[i], 'Error', 'Javascript Console');
			}
		}
	},

	/**
	 * Debug output from javascript
	 *
	 * @param out mixed debug output
	 * @param header string
	 * @param group string
	 */
	debug: function(out, header, group) {
		var output = this.printObject(out);
		this.addTab(output, header, group);
	},

	/**
	 * Converts any string/array/object to a string for printing purposes
	 *
	 * @param object object
	 * @param level integer recursion level counter (max. 3 levels)
	 * @param prefix string internal use!
	 * @return string
	 */
	printObject: function(object, level, prefix) {
		var result = '';

		prefix = prefix || '';
		level = level || 0;
		if (level >= 3) {
			return result;
		}

		var levelPadding = '';
		for(var j = 0; j < level + 1; ++j) {
			levelPadding += '    ';
		}

		if (typeof(object) === 'object') {
				// Array / Objects
			for (var item in object) {
				var value = object[item];

				if (typeof(value) === 'object') {
					result += levelPadding + '"' + prefix + item + '" ...' + "\n";
					result += this.printObject(value, level + 1, prefix + item + '.');
				} else {
					result += levelPadding + '"' + prefix + item +
						'" => "' + value + '"' + "\n";
				}
			}
		} else {
				// Strings/Chars/Numbers etc.
			result = '[' + typeof(object) + '] ' + object;
		}

		return '<pre>' + result + '</pre>';
	},

	/**
	 * Debug attached events of a given element (e.g. an Ext.Panel component)
	 *
	 * Note: This functionality should be used with an activated debug console like firebug!
	 *
	 * @param element object to fetch events from
	 * @return void
	 */
	debugEvents: function(element) {
		if (element) {
				// debug events of element
			Ext.util.Observable.capture(element, function() {
				console.log(
					'event "' + arguments[0] + '" was fired with the following arguments: '
				);

				for (var i = 1; i < arguments.length; ++i) {
					console.log('        [' + i + '] ', arguments[i]);
				}
			});
		} else {
				// debug all events
			Ext.util.Observable.prototype.fireEvent =
				Ext.util.Observable.prototype.fireEvent.createInterceptor(function() {
					console.log(arguments);
					return true;
				});
		}
	}
});

Ext.reg('typo3DebugPanel', TYPO3.DebugPanel);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3');

	// override splitregion to fit the splitbars in our design
Ext.override(Ext.layout.BorderLayout.SplitRegion, {
	render : function(ct, p) {
		Ext.layout.BorderLayout.SplitRegion.superclass.render.call(this, ct, p);

		var ps = this.position;

		this.splitEl = ct.createChild({
			cls: "x-layout-split x-layout-split-" + ps, html: " ",
			id: this.panel.id + '-xsplit'
		});

		if (this.enableChildSplit) {
			this.splitChildEl = this.splitEl.createChild({
				cls: 'x-layout-mini-wrapper'
			});

		}
		if (this.collapseMode == 'mini') {
			this.miniSplitEl = this.splitEl.createChild({
				cls: "x-layout-mini x-layout-mini-" + ps, html: " "
			});
			this.miniSplitEl.addClassOnOver('x-layout-mini-over');
			this.miniSplitEl.on('click', this.onCollapseClick, this, {stopEvent:true});
		}

		var s = this.splitSettings[ps];

		if (this.enableChildSplit) {
			this.split = new Ext.SplitBar(this.splitChildEl.dom, p.el, s.orientation);
		} else {
			this.split = new Ext.SplitBar(this.splitEl.dom, p.el, s.orientation);
		}
		this.split.tickSize = this.tickSize;
		this.split.placement = s.placement;
		this.split.getMaximumSize = this[s.maxFn].createDelegate(this);
		this.split.minSize = this.minSize || this[s.minProp];
		this.split.on("beforeapply", this.onSplitMove, this);
		this.split.useShim = this.useShim === true;
		this.maxSize = this.maxSize || this[s.maxProp];

		if (p.hidden) {
			this.splitEl.hide();
		}

		if (this.useSplitTips) {
			this.splitEl.dom.title = this.collapsible ? this.collapsibleSplitTip : this.splitTip;
		}
		if (this.collapsible) {
			this.splitEl.on("dblclick", this.onCollapseClick, this);
		}
	}
});
/**
 * Extends the viewport with some functionality for TYPO3.
 *
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Viewport = Ext.extend(Ext.Viewport, {
	/**
	 * Contains the navigation widgets in a simple array and identified by an unique idea
	 *
	 * @see registerNavigationWidget()
	 * @var object
	 */
	navigationWidgetContainer: {},

	/**
	 * Contains the meta informations of the navigation widgets
	 *
	 * @see registerNavigationWidget()
	 * @var object
	 */
	navigationWidgetMetaData: {},

	/**
	 * The topbar area
	 *
	 * @var Ext.Panel
	 */
	Topbar: null,

	/**
	 * The content area
	 *
	 * @var Ext.Panel
	 */
	ContentContainer: null,

	/**
	 * The navigation frame area
	 *
	 * @var Ext.Panel
	 */
	NavigationContainer: null,

	/**
	 * Dummy panel, shown when no NavigationContainer is in use
	 *
	 * @var Ext.Panel
	 */
	NavigationDummy: null,

	/**
	 * The iframe navigation component
	 *
	 * @var TYPO3.iframePanel
	 */
	NavigationIframe: null,

	/**
	 * The module menu area
	 *
	 * @var Ext.Panel
	 */
	ModuleMenuContainer: null,

	/**
	 * The debug console
	 *
	 * @var Ext.TabPanel
	 */
	DebugConsole: null,

	/**
	 * Initializes the ExtJS viewport with the given configuration.
	 *
	 * @return void
	 */
	initComponent: function() {
		// adjust the module menu and the height of the topbar
		this.initialConfig.items[0].height = TYPO3.configuration.topBarHeight;

		var moduleMenu = this.initialConfig.items[1];
		moduleMenu.width = TYPO3.configuration.moduleMenuWidth;

		// call parent constructor
		TYPO3.Viewport.superclass.initComponent.apply(this, arguments);

		this.ContentContainer = Ext.getCmp('typo3-contentContainer');
		this.NavigationContainer = Ext.getCmp('typo3-navigationContainer');
		this.NavigationDummy = Ext.getCmp('typo3-navigationDummy');
		this.NavigationIframe = Ext.getCmp('typo3-navigationIframe');
		this.Topbar = Ext.getCmp('typo3-topbar');
		this.ModuleMenuContainer = Ext.getCmp('typo3-module-menu');
		this.DebugConsole = Ext.getCmp('typo3-debug-console');

	}
});

Ext.reg('typo3Viewport', TYPO3.Viewport);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


/**
 * iFrame panel
 *
 * @author	Steffen Kamper
 */

Ext.ns('TYPO3');

TYPO3.iframePanel = Ext.extend(Ext.Panel, {
	name: 'iframe',
	iframe: null,
	src: Ext.isIE && Ext.isSecure ? Ext.SSL_SECURE_URL : 'about:blank',
	maskMessage: ' ',
	doMask: true,

		// component build
	initComponent: function() {
		this.bodyCfg = {
			tag: 'iframe',
			frameborder: '0',
			src: this.src,
			name: this.name,
			style: 'float:left;' // this is needed to prevent offset of 2.5 pixel, see #15771
		}
		Ext.apply(this, {

		});
		TYPO3.iframePanel.superclass.initComponent.apply(this, arguments);

		// apply the addListener patch for 'message:tagging'
		this.addListener = this.on;

	},

	onRender : function() {
		TYPO3.iframePanel.superclass.onRender.apply(this, arguments);
		this.maskMessage = ' ';
		this.iframe = Ext.isIE ? this.body.dom.contentWindow : window.frames[this.name];
		this.body.dom[Ext.isIE ? 'onreadystatechange' : 'onload'] = this.loadHandler.createDelegate(this);
	},

	loadHandler: function() {
		this.src = this.body.dom.src;
		this.removeMask();
	},

	getIframe: function() {
		return this.iframe;
	},
	getUrl: function() {
		return this.body.dom.src;
	},

	setUrl: function(source) {
		this.setMask();
		this.body.dom.src = source;
	},

	resetUrl: function() {
		this.setMask();
		this.body.dom.src = this.src;
	},

	getIdFromUrl: function() {
		var url = Ext.urlDecode(this.getUrl().split('?')[1]);
		return url.id;
	},

	refresh: function() {
		if (!this.isVisible()) {
            return;
        }
        this.setMask();
		this.body.dom.src = this.body.dom.src;
	},

	/** @private */
	setMask: function() {
		if (this.doMask) {
			this.el.mask(this.maskMessage, 'x-mask-loading-message');
			this.el.addClass('t3-mask-loading');
				// add an onClick handler to remove the mask while clicking on the loading message
				// useful if user cancels loading and wants to access the content again
			this.el.child('.x-mask-loading-message').on(
				'click',
				function() {
					this.el.unmask();
				},
				this
			);
		}
	},

	removeMask: function() {
		if (this.doMask) {
			this.el.unmask();
		}
	}
});
Ext.reg('iframePanel', TYPO3.iframePanel);

/***************************************************************
*  Copyright notice
*
*  (c) 2011 Kay Strobach <typo3@kay-strobach.de>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

TYPO3.modulePanel = Ext.extend(Ext.Panel, {
	name: 'modulePanel',
	maskMessage: ' ',
	doMask: true,
	border: false,
		// component build
	initComponent: function() {
		Ext.apply(this, {
			tbarCfg: {
				cls: 't3skin-typo3-module-panel-toolbar'
			},
			bbarCfg: {
				cls: 't3skin-typo3-module-panel-toolbar'
			}
		});
		TYPO3.modulePanel.superclass.initComponent.apply(this, arguments);
	}
});
Ext.reg('modulePanel', TYPO3.modulePanel);
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3');

/**
 * The backend viewport configuration
 *
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Viewport.configuration = {
	layout: 'border',
	id: 'typo3-viewport',
	renderTo: Ext.getBody(),
	border: false,
	items: [
		{
			layout: 'absolute',
			region: 'north',
			id: 'typo3-topbar',
			height: 42,
			contentEl: 'typo3-top-container',
			border: false
		},
		{
			layout: 'fit',
			region: 'west',
			id: 'typo3-module-menu',
			collapsible: false,
			collapseMode: null,
			floatable: true,
			hideCollapseTool: true,
			split: true,
			useSplitTips: true,
			splitTip: top.TYPO3.LLL.viewPort.tooltipModuleMenuSplit,
			enableChildSplit: true,
			border: false,
			autoScroll: true
		},
		{
			region: 'center',
			layout: 'border',
			border: false,
			items: [
				{
					region: 'west',
					layout: 'fit',
					id: 'typo3-navigationContainer',
					width: 300,
					minWidth: 20,
					floatable: true,
					animCollapse: false,
					split: true,
					enableChildSplit: true,
					collapsible: true,
					collapseMode: 'mini',
					useSplitTips: true,
					collapsibleSplitTip: top.TYPO3.LLL.viewPort.tooltipNavigationContainerSplitDrag,
					hideCollapseTool: true,
					hidden: true,
					border: false,
					name: 'navigation',
					autoScroll: true,
					items: [
						{
							id: 'typo3-navigationIframe',
							border: false,
							hidden: true,
							xtype: 'iframePanel',
							name: 'navigation'
						}
					]
				},
				{
					region: 'center',
					layout: 'border',
					items: [
						{
							id: 'typo3-navigationDummy',
							region: 'west',
							layout: 'fit',
							border: false,
							hidden: true,
							floatable: true,
							xtime: 'iframePanel',
							width: 5
						},
						{
							id: 'typo3-contentContainer',
							region: 'center',
							anchor: '100% 100%',
							border: false,
							xtype: 'iframePanel',
							name: 'content'
						}
					]
				},
				{
					region: 'south',
					xtype: 'typo3DebugPanel',
					collapsible: true,
					collapseMode: 'mini',
					collapsed: true,
					hideCollapseTool: true,
					animCollapse: false,
					split: true,
					useSplitTips: true,
					collapsibleSplitTip: top.TYPO3.LLL.viewPort.tooltipDebugPanelSplitDrag,
					autoScroll: true,
					hidden: true,
					height: 200,
					id: 'typo3-debug-console',
					border: false
				}
			]
		}
	]
};

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3');

/**
 * @class TYPO3.Utility
 *
 * Generic utility methods that are not provided by ExtJs
 *
 * @namespace TYPO3
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Utility = {
	/**
	 * Checks if a given number is really a number
	 *
	 * Taken from:
	 * http://dl.dropbox.com/u/35146/js/tests/isNumber.html
	 *
	 * @param {String} number
	 * @return {Boolean}
	 */
	isNumber: function(number) {
		return !isNaN(parseFloat(number)) && isFinite(number);
	}
};

/***************************************************************
*  Copyright notice
*
*  (c) 2007-2011 Ingo Renner <ingo@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


/**
 * class to handle the shortcut menu
 */
var ShortcutMenu = Class.create({

	/**
	 * registers for resize event listener and executes on DOM ready
	 */
	initialize: function() {
		Ext.onReady(function() {
			Event.observe(
				window, 'resize',
				function() { TYPO3BackendToolbarManager.positionMenu('shortcut-menu'); }
			);
			TYPO3BackendToolbarManager.positionMenu('shortcut-menu');
			
			this.toolbarItemIcon = $$('#shortcut-menu .toolbar-item span.t3-icon')[0];

			Event.observe($$('#shortcut-menu .toolbar-item')[0], 'click', this.toggleMenu);
			this.initControls();
		}, this);
	},

	/**
	 * initializes the controls to follow, edit, and delete shortcuts
	 *
	 */
	initControls: function() {

		$$('.shortcut-label a').each(function(element) {
			var shortcutId = element.up('tr.shortcut').identify().slice(9);

				// map InPlaceEditor to edit icons
			var edit = new Ajax.InPlaceEditor('shortcut-label-' + shortcutId, 'ajax.php?ajaxID=ShortcutMenu::saveShortcut', {
				externalControl     : 'shortcut-edit-' + shortcutId,
				externalControlOnly : true,
				highlightcolor      : '#f9f9f9',
				highlightendcolor   : '#f9f9f9',
				onFormCustomization : this.addGroupSelect,
				onComplete          : this.reRenderMenu.bind(this),
				callback            : function(form, nameInputFieldValue) {
					var params = form.serialize();
					params += '&shortcutId=' + shortcutId;

					return params;
				},
				textBetweenControls : ' ',
				cancelControl       : 'button',
				clickToEditText     : '',
				htmlResponse        : true
			});

				// follow/execute shortcuts
			element.observe('click', function(event) {
				this.toggleMenu();
			}.bind(this));

		}.bind(this));

			// activate delete icon
		$$('.shortcut-delete img').each(function(element) {
			element.observe('click', function(event) {
				if (confirm('Do you really want to remove this bookmark?')) {
					var deleteControl = event.element();
					var shortcutId = deleteControl.up('tr.shortcut').identify().slice(9);

					var del = new Ajax.Request('ajax.php', {
						parameters : 'ajaxID=ShortcutMenu::delete&shortcutId=' + shortcutId,
						onComplete : this.reRenderMenu.bind(this)
					});
				}
			}.bind(this));
		}.bind(this));

	},

	/**
	 * toggles the visibility of the menu and places it under the toolbar icon
	 */
	toggleMenu: function(event) {
		var toolbarItem = $$('#shortcut-menu > a')[0];
		var menu        = $$('#shortcut-menu .toolbar-item-menu')[0];
		toolbarItem.blur();

		if (!toolbarItem.hasClassName('toolbar-item-active')) {
			toolbarItem.addClassName('toolbar-item-active');
			Effect.Appear(menu, {duration: 0.2});
			TYPO3BackendToolbarManager.hideOthers(toolbarItem);
		} else {
			toolbarItem.removeClassName('toolbar-item-active');
			Effect.Fade(menu, {duration: 0.1});
		}
	},

	/**
	 * adds a select field for the groups
	 */
	addGroupSelect: function(inPlaceEditor, inPlaceEditorForm) {
		var selectField = $(document.createElement('select'));

			// determine the shortcut id
		var shortcutId  = inPlaceEditorForm.identify().slice(9, -14);

			// now determine the shortcut's group id
		var shortcut        = $('shortcut-' + shortcutId).up('tr.shortcut');
		var firstInGroup    = null;
		var shortcutGroupId = 0;

		if (shortcut.hasClassName('first-row')) {
			firstInGroup = shortcut;
		} else {
			firstInGroup = shortcut.previous('.first-row');
		}

		if (undefined !== firstInGroup) {
			shortcutGroupId = firstInGroup.previous().identify().slice(15);
		}

		selectField.name = 'shortcut-group';
		selectField.id = 'shortcut-group-select-' + shortcutId;
		selectField.size = 1;
		selectField.setStyle({marginBottom: '5px'});

			// create options
		var option;
			// first create an option for "no group"
		option = document.createElement('option');
		option.value = 0;
		option.selected = (shortcutGroupId === 0 ? true : false);
		option.appendChild(document.createTextNode('No Group'));
		selectField.appendChild(option);

			// get the groups
		var getGroups = new Ajax.Request('ajax.php', {
			method: 'get',
			parameters: 'ajaxID=ShortcutMenu::getGroups',
			asynchronous: false, // needs to be synchronous to build the options before adding the selectfield
			requestHeaders: {Accept: 'application/json'},
			onSuccess: function(transport, json) {
				var shortcutGroups = transport.responseText.evalJSON(true);

					// explicitly make the object a Hash
				shortcutGroups = $H(json.shortcutGroups);
				shortcutGroups.each(function(group) {
					option = document.createElement('option');
					option.value = group.key
					option.selected = (shortcutGroupId === group.key ? true : false);
					option.appendChild(document.createTextNode(group.value));
					selectField.appendChild(option);
				});

			}
		});

		inPlaceEditor._form.appendChild(document.createElement('br'));
		inPlaceEditor._form.appendChild(selectField);
		inPlaceEditor._form.appendChild(document.createElement('br'));
	},

	/**
	 * gets called when the update was succesfull, fetches the complete menu to
	 * honor changes in group assignments
	 */
	reRenderMenu: function(transport, element, backPath) {
		var container = $$('#shortcut-menu .toolbar-item-menu')[0];
		if (!backPath) {
			var backPath = '';
		}


		container.setStyle({
			height: container.getHeight() + 'px'
		});
		container.update('LOADING');

		var render = new Ajax.Updater(
			container,
			backPath + 'ajax.php',
			{
				parameters : 'ajaxID=ShortcutMenu::render',
				asynchronous : false
			}
		);

		container.setStyle({
			height: 'auto'
		});

		this.initControls();
	},

	/**
	 * makes a call to the backend class to create a new shortcut,
	 * when finished it reloads the menu
	 */
	createShortcut: function(backPath, moduleName, url) {
		var toolbarItemIcon = $$('#shortcut-menu .toolbar-item span.t3-icon')[0];

		var parent = Element.up(toolbarItemIcon);
		var spinner = new Element('span').addClassName('spinner');
		var oldIcon = toolbarItemIcon.replace(spinner);

			// synchrous call to wait for it to complete and call the render
			// method with backpath _afterwards_
		var call = new Ajax.Request(backPath + 'ajax.php', {
			parameters : 'ajaxID=ShortcutMenu::create&module=' + moduleName + '&url=' + url,
			asynchronous : false
		});

		this.reRenderMenu(null, null, backPath);
		spinner.replace(oldIcon);
	}

});

var TYPO3BackendShortcutMenu = new ShortcutMenu();

/***************************************************************
*  Copyright notice
*
*  (c) 2007-2011 Ingo Renner <ingo@typo3.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * class to handle the clear cache menu
 */
var ClearCacheMenu = Class.create({

	/**
	 * registers for resize event listener and executes on DOM ready
	 */
	initialize: function() {

		Ext.onReady(function() {
			Event.observe(
				window, 'resize',
				function() { TYPO3BackendToolbarManager.positionMenu('clear-cache-actions-menu'); }
			);
			TYPO3BackendToolbarManager.positionMenu('clear-cache-actions-menu');
			this.toolbarItemIcon = $$('#clear-cache-actions-menu .toolbar-item span.t3-icon')[0];

			Event.observe('clear-cache-actions-menu', 'click', this.toggleMenu)

				// observe all clicks on clear cache actions in the menu
			$$('#clear-cache-actions-menu li a').each(function(element) {
				Event.observe(element, 'click', this.clearCache.bind(this));
			}.bindAsEventListener(this));
		}, this);
	},

	/**
	 * toggles the visibility of the menu and places it under the toolbar icon
	 */
	toggleMenu: function(event) {
		var toolbarItem = $$('#clear-cache-actions-menu > a')[0];
		var menu        = $$('#clear-cache-actions-menu .toolbar-item-menu')[0];
		toolbarItem.blur();

		if (!toolbarItem.hasClassName('toolbar-item-active')) {
			toolbarItem.addClassName('toolbar-item-active');
			Effect.Appear(menu, {duration: 0.2});
			TYPO3BackendToolbarManager.hideOthers(toolbarItem);
		} else {
			toolbarItem.removeClassName('toolbar-item-active');
			Effect.Fade(menu, {duration: 0.1});
		}

		if (event) {
			Event.stop(event);
		}
	},

	/**
	 * calls the actual clear cache URL using an asynchronious HTTP request
	 *
	 * @param	Event	prototype event object
	 */
	clearCache: function(event) {
		var toolbarItemIcon = $$('#clear-cache-actions-menu .toolbar-item span.t3-icon')[0];
		var url             = '';
		var clickedElement  = Event.element(event);

			// activate the spinner
		var parent = Element.up(toolbarItemIcon);
		var spinner = new Element('span').addClassName('spinner');
		var oldIcon = toolbarItemIcon.replace(spinner);

		if (clickedElement.tagName === 'SPAN') {
			link =  clickedElement.up('a');
		} else {
			link =  clickedElement;
		}

		if (link.href) {
			var call = new Ajax.Request(link.href, {
				'method': 'get',
				'onComplete': function(result) {
					spinner.replace(oldIcon);
				}.bind(this)
			});
		}

		this.toggleMenu(event);
	}
});

var TYPO3BackendClearCacheMenu = new ClearCacheMenu();

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2008-2010 Ingo Renner <ingo@typo3.org>
 *  (c) 2010 Workspaces Team (http://forge.typo3.org/projects/show/typo3v4-workspaces)
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3', 'TYPO3.configuration');
/**
 * class to handle the workspace menu
 *
 * $Id$
 */
var WorkspaceMenu = Class.create({

	/**
	 * registers for resize event listener and executes on DOM ready
	 */
	initialize: function() {

		Ext.onReady(function() {
			Event.observe(
				window, 'resize',
				function() { TYPO3BackendToolbarManager.positionMenu('workspace-selector-menu'); }
			);
			if (top.TYPO3.configuration.inWorkspace == 1) {
				Ext.getBody().addClass('typo3-in-workspace');
				this.updateTopBar(top.TYPO3.Workspaces.workspaceTitle);
			} else {
				Ext.getBody().removeClass('typo3-in-workspace');
			}
			TYPO3BackendToolbarManager.refreshAll();
			Event.observe('workspace-selector-menu', 'click', this.toggleMenu);
			if(Ext.get('goToWsModule')) {
				Event.observe('goToWsModule', 'click', this.goToWorkspaceModule.bind(this));
			}

			// observe all clicks on workspace links in the menu
			$$('#workspace-selector-menu li a.ws').each(function(element) {
				Event.observe(element, 'click', this.switchWorkspace.bind(this));
			}.bindAsEventListener(this));

		}, this);
	},

	/**
	 * toggles the visibility of the menu and places it under the toolbar icon
	 */
	toggleMenu: function(event) {
		var toolbarItem = $$('#workspace-selector-menu > a')[0];
		var menu = $$('#workspace-selector-menu .toolbar-item-menu')[0];
		toolbarItem.blur();

		if (!toolbarItem.hasClassName('toolbar-item-active')) {
			toolbarItem.addClassName('toolbar-item-active');
			Effect.Appear(menu, {duration: 0.2});
			TYPO3BackendToolbarManager.hideOthers(toolbarItem);
		} else {
			toolbarItem.removeClassName('toolbar-item-active');
			Effect.Fade(menu, {duration: 0.1});
		}

		if (event) {
			Event.stop(event);
		}
	},

	/**
	 * toggles the workspace frontend preview
	 */
	toggleFrontendPreview: function(event) {
		var clickedElement = Event.element(event);
		var toggle = TYPO3.Ajax.ExtDirect.ToolbarMenu.toggleWorkspacePreviewMode({}, function(response) {
			var stateActiveClass = 't3-icon t3-icon-status t3-icon-status-status t3-icon-status-checked';
			var stateInactiveClass = 't3-icon t3-icon-empty t3-icon-empty-empty t3-icon-empty';
			if (response.newWorkspacePreviewState === '1') {
				TYPO3.configuration.workspaceFrontendPreviewEnabled = 1;
				clickedElement.previous().removeClassName(stateInactiveClass).addClassName(stateActiveClass);
			} else {
				TYPO3.configuration.workspaceFrontendPreviewEnabled = 0;
				clickedElement.previous().removeClassName(stateActiveClass).addClassName(stateInactiveClass);
			}
			top.TYPO3.ModuleMenu.App.reloadFrames();
		});
		this.toggleMenu(event);
	},

	/**
	 * redirects the user to the workspace module
	 */
	goToWorkspaceModule: function(event) {
		top.goToModule('web_WorkspacesWorkspaces');
		this.toggleMenu(event);
	},

	/**
	 * switches the workspace, reloads the module menu, and the content frame
	 */
	switchWorkspace: function(event) {
		var clickedElement = Event.element(event);
		var workspaceId = clickedElement.identify().substring(3);

		TYPO3.Ajax.ExtDirect.ToolbarMenu.setWorkspace({'workSpaceId': workspaceId }, function(response) {
			if (!response.id) {
				response.id = 0;
			}

			TYPO3BackendWorkspaceMenu.performWorkspaceSwitch(response.id, response.title);

			// when in web module reload, otherwise send the user to the web module
			if (currentModuleLoaded.startsWith('web_')) {
				top.TYPO3.Backend.NavigationContainer.PageTree.refreshTree();
				top.TYPO3.ModuleMenu.App.reloadFrames();
			} else {
				if (TYPO3.configuration.pageModule) {
					top.TYPO3.ModuleMenu.App.showModule(TYPO3.configuration.pageModule);
				}
			}

			// reload the module menu
			TYPO3ModuleMenu.refreshMenu();
		});

		TYPO3BackendWorkspaceMenu.toggleMenu(event);
	},

	performWorkspaceSwitch: function(id, title) {
		top.TYPO3.Workspaces.workspaceTitle = title;
		top.TYPO3.configuration.inWorkspace = id === 0 ? 0 : 1;
		if (top.TYPO3.configuration.inWorkspace == 1) {
			Ext.getBody().addClass('typo3-in-workspace');
			this.updateTopBar(top.TYPO3.Workspaces.workspaceTitle);
		} else {
			Ext.getBody().removeClass('typo3-in-workspace');
			this.updateTopBar();
		}

		TYPO3BackendToolbarManager.refreshAll();

		// first remove all checks, then set the check in front of the selected workspace
		var stateActiveClass = 't3-icon t3-icon-status t3-icon-status-status t3-icon-status-checked';
		var stateInactiveClass = 't3-icon t3-icon-empty t3-icon-empty-empty t3-icon-empty';

		// remove "selected" class and checkmark
		$$('#workspace-selector-menu li.selected span.t3-icon-status-checked')[0].removeClassName(stateActiveClass).addClassName(stateInactiveClass);
		$$('#workspace-selector-menu li.selected')[0].removeClassName('selected');

		// add "selected" class and checkmark
		$$('#ws-' + id)[0].previous().removeClassName(stateInactiveClass).addClassName(stateActiveClass);
		$$('#ws-' + id)[0].up().addClassName('selected');
	},

	updateTopBar: function(workspaceTitle) {
		if (Ext.get('typo3-topbar-workspaces-title')) {
			Ext.get('typo3-topbar-workspaces-title').remove();
		}

		if (workspaceTitle && workspaceTitle.length) {
			var userItem;
			if (Ext.select('#username a').elements.length) {
				userItem = Ext.select('#username a');
			} else {
				userItem = Ext.select ('#username');
			}
			userItem.insertHtml('beforeEnd', '<span id="typo3-topbar-workspaces-title">@' + workspaceTitle + '</span>')
		}
	}

});

var TYPO3BackendWorkspaceMenu = new WorkspaceMenu();
//TYPO3BackendWorkspaceMenu.initialize();
/***************************************************************
*  Copyright notice
*
*  (c) 2008-2010 Benjamin Mack <mack@xnos.org>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * class to handle the open documents menu, loads the open documents dynamically
 *
 */
var OpenDocs = Class.create({
	ajaxScript: 'ajax.php',
	menu: null,
	toolbarItemIcon: null,

	/**
	 * registers for resize event listener and executes on DOM ready
	 */
	initialize: function() {

		Ext.onReady(function() {
			Event.observe(
				window, 'resize',
				function() { TYPO3BackendToolbarManager.positionMenu('tx-opendocs-menu'); }
			);
			TYPO3BackendToolbarManager.positionMenu('tx-opendocs-menu');
			this.toolbarItemIcon = $$('#tx-opendocs-menu .toolbar-item span.t3-icon')[0];
			this.ajaxScript      = top.TS.PATH_typo3 + this.ajaxScript; // can't be initialized earlier

			Event.observe($$('#tx-opendocs-menu .toolbar-item')[0], 'click', this.toggleMenu);
			this.menu = $$('#tx-opendocs-menu .toolbar-item-menu')[0];
		}, this);
	},

	/**
	 * toggles the visibility of the menu and places it under the toolbar icon
	 */
	toggleMenu: function(event) {
		var toolbarItem = $$('#tx-opendocs-menu > a')[0];
		var menu        = $$('#tx-opendocs-menu .toolbar-item-menu')[0];
		toolbarItem.blur();

		if(!toolbarItem.hasClassName('toolbar-item-active')) {
			toolbarItem.addClassName('toolbar-item-active');
			Effect.Appear(menu, {duration: 0.2});
			TYPO3BackendToolbarManager.hideOthers(toolbarItem);
		} else {
			toolbarItem.removeClassName('toolbar-item-active');
			Effect.Fade(menu, {duration: 0.1});
		}

		if(event) {
			Event.stop(event);
		}
	},

	/**
	 * displays the menu and does the AJAX call to the TYPO3 backend
	 */
	updateMenu: function() {
		var origToolbarItemIcon = this.toolbarItemIcon.src;
		this.toolbarItemIcon.src = 'gfx/spinner.gif';

		new Ajax.Updater(
			this.menu,
			this.ajaxScript, {
				parameters: {
					ajaxID: 'tx_opendocs::renderMenu'
				},
				onComplete: function(xhr) {
					this.toolbarItemIcon.src = origToolbarItemIcon;
				}.bind(this)
			}
		);
	},

	/**
	 * updates the number of open documents in the toolbar according to the
	 * first parameter. If "num" is smaller than "0", the number of opendocs
	 * is counted from the open menu
	 *
	 * @param	integer		number of open documents
	 * @param	boolean		flag to explicitly update the menu
	 */
	updateNumberOfDocs: function(num, explicitlyUpdateMenu) {
		if (explicitlyUpdateMenu) {
				// re-render the menu e.g. if a document was closed inside the menu
			this.updateMenu();
		}

		if (num < 0) {
			num = $$('#tx-opendocs-menu tr.opendoc').length;
		}

		$('tx-opendocs-counter').writeAttribute('value', num);
	},

	/**
	 * closes an open document
	 */
	closeDocument: function(md5sum) {
		new Ajax.Updater(
			this.menu,
			this.ajaxScript, {
				parameters: {
					ajaxID: 'tx_opendocs::closeDocument',
					md5sum: md5sum
				},
				onComplete: function() {
					this.updateNumberOfDocs(-1, false);
				}.bind(this)
			}
		);

		this.updateNumberOfDocs(-1, true);
	}

});

var TYPO3BackendOpenDocs = new OpenDocs();

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2009-2010 Michael Klapper <michael.klapper@aoemedia.de>
 *  (c) 2010-2011 Jeff Segars <jeff@webempoweredchurch.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.namespace('TYPO3');

TYPO3.BackendLiveSearch = Ext.extend(Ext.form.ComboBox, {
	autoSelect: false,
	ctCls: 'live-search-results',
	dataProvider: null,
	searchResultsPid : 0,
	displayField: 'title',
	emptyText: null,
	enableKeyEvents: true,
	helpTitle: null,
	hideTrigger: true,
	itemSelector: 'div.search-item-title',
	listAlign : 'tr-br',
	listClass: 'live-search-list',
	listEmptyText: null,
	listWidth: 315,
	listHovered: false,
	loadingText: null,
	minChars: 1,
	resizable: false,
	title: null,
	width: 205,
	triggerClass : 'x-form-clear-trigger',
	triggerConfig: '<span tag="a" class="t3-icon t3-icon-actions t3-icon-actions-input t3-icon-input-clear t3-tceforms-input-clearer">&nbsp;</span>',
	onTriggerClick: function() {
		// Empty the form field, give it focus, and collapse the results
		this.reset(this);
		this.focus();
		this.collapse();
	},
	tpl: new Ext.XTemplate(
		'<table border="0" cellspacing="0">',
			'<tpl for=".">',
				'<tr class="search-item">',
					'<td class="search-item-type" width="105" align="right">{recordTitle}</td>',
					'<td class="search-item-content" width="195">',
						'<div class="search-item-title">{iconHTML} {title}</div>',
					'</td>',
				'</tr>',
			'</tpl>',
		'</table>'
	),

	dataReader : new Ext.data.JsonReader({
		idProperty : 'type',
		root : 'searchItems',
		fields : [
			{name: 'recordTitle'},
			{name: 'id'},
			{name: 'iconHTML'},
			{name: 'title'},
			{name: 'editLink'}
		]
	}),
	listeners: {
		select : {
			scope: this,
			fn: function (combo, record, index) {
				jump(record.data.editLink, 'web_list', 'web');
			}
		},
		focus : {
			fn: function() {
				if (this.getValue() == this.emptyText) {
					this.reset(this);
				}
			}
		},
		specialkey : function (field, e) {
			if (e.getKey() == e.RETURN || e.getKey() == e.ENTER) {
				if (this.dataReader.jsonData.pageJump != '') {
					jump(this.dataReader.jsonData.pageJump, 'web_list', 'web');
				} else {
					TYPO3.ModuleMenu.App.showModule('web_list', this.getSearchResultsUrl(this.getValue()));
				}
			}
		},
		keyup : function() {
			if ((this.getValue() == this.emptyText) || (this.getValue() == '')) {
				this.setHideTrigger(true);
			} else {
				this.setHideTrigger(false);
			}
		}
	},

	/**
	 * Initializes the component.
	 */
	initComponent: function() {
		this.store = new Ext.data.DirectStore({
			directFn: this.dataProvider.find,
			reader: this.dataReader
		});
		TYPO3.BackendLiveSearch.superclass.initComponent.apply(this, arguments);
	},

	restrictHeight : function(){
		this.innerList.dom.style.height = '';
		var inner = this.innerList.dom;
		var pad = this.list.getFrameWidth('tb')+(this.resizable?this.handleHeight:0)+this.assetHeight + 30; // @todo Remove hardcoded 30
		var h = Math.max(inner.clientHeight, inner.offsetHeight, inner.scrollHeight);
		var ha = this.getPosition()[1]-Ext.getBody().getScroll().top;
		var hb = Ext.lib.Dom.getViewHeight()-ha-this.getSize().height;
		var space = Math.max(ha, hb, this.minHeight || 0)-pad-2;
		/** BUG FIX **/
		if (this.shadow === true) { space-=this.list.shadow.offset; }

		h = Math.min(h, space, this.maxHeight);

		/**
		 * @internal The calcated height of "h" in the line before seems not working as expected.
		 *			 If i define a min height, the box shold at least use this height also if only one entry is in there
		 */
		//h = this.maxHeight;

		this.innerList.setHeight(h);
		this.list.beginUpdate();
		this.list.setHeight(h+pad);
		this.list.alignTo(this.el, this.listAlign);
		this.list.endUpdate();
	},

	initList : function () {
		TYPO3.BackendLiveSearch.superclass.initList.apply(this, arguments);
		var cls = 'x-combo-list';

			// Track whether the hovering over the results list or not, to aid in detecting iframe clicks.
		this.mon(this.list, 'mouseover', function() {this.listHovered = true;}, this);
		this.mon(this.list, 'mouseout', function() {this.listHovered = false; }, this);

		/**
		 * Create bottom Toolbar to the result layer
		 */
		this.footer = this.list.createChild({cls:cls+'-ft'});

		this.pageTb = new Ext.Toolbar({
			renderTo:this.footer,
			height: 30,
			items: [{
				xtype: 'tbfill',
				autoWidth : true
			},{
				xtype: 'button',
				text: TYPO3.LLL.liveSearch.showAllResults,
				arrowAlign : 'right',
				shadow: false,
				icon : '../typo3/sysext/t3skin/icons/module_web_list.gif',
				listeners : {
					scope : this,
					click : function () {
							// go to db_list.php and search for given search value
							// @todo the current selected page ID from the page tree is required, also we need the
							// values of $GLOBALS['BE_USER']->returnWebmounts() to search only during the allowed pages
						TYPO3.ModuleMenu.App.showModule('web_list', this.getSearchResultsUrl(this.getValue()));
						this.collapse();
					}
				}
			}]
		});
		this.assetHeight += this.footer.getHeight();
	},

	initQuery : function(){
		TYPO3.BackendLiveSearch.superclass.initQuery.apply(this, arguments);
		this.removeHelp();
	},
	initHelp : function () {
		if(!this.helpList){
			var cls = 'search-list-help';

			this.helpList = new Ext.Layer({
				parentEl: this.getListParent(),
				shadow: this.shadow,
				cls: [cls, this.listClass].join(' '),
				constrain:false
			});

				// Track whether the hovering over the help list or not, to aid in detecting iframe clicks.
			this.mon(this.helpList, 'mouseover', function() {this.listHovered = true;}, this);
			this.mon(this.helpList, 'mouseout', function() {this.listHovered = false; }, this);

			var lw = this.listWidth || Math.max(this.wrap.getWidth(), this.minListWidth);
			this.helpList.setSize(lw);
			this.helpList.swallowEvent('mousewheel');
			if(this.syncFont !== false){
				this.helpList.setStyle('font-size', this.el.getStyle('font-size'));
			}

			this.innerHelpList = this.helpList.createChild({cls:cls+'-inner'});
			this.mon(this.innerHelpList, 'mouseover', this.onViewOver, this);
			this.mon(this.innerHelpList, 'mousemove', this.onViewMove, this);
			this.innerHelpList.setWidth(lw - this.helpList.getFrameWidth('lr'));

			if(!this.helpTpl){
				this.helpTpl = '<tpl for="."><div class="'+cls+'-item">{' + this.displayField + '}</div></tpl>';
			 }

			/**
			* The {@link Ext.DataView DataView} used to display the ComboBox's options.
			* @type Ext.DataView
			*/
			this.helpView = new Ext.DataView({
				applyTo: this.innerHelpList,
				tpl: this.helpTpl,
				singleSelect: true,
				selectedClass: this.selectedClass,
				itemSelector: this.itemSelector || '.' + cls + '-item',
				emptyText: this.listEmptyText
			});

			this.helpList.createChild({
				cls: cls + '-content',
				// @todo Can we grab this content via ExtDirect?
				html: '<strong>' + this.helpTitle + '</strong><p>' + TYPO3.LLL.liveSearch.helpDescription + '<br /> ' + TYPO3.LLL.liveSearch.helpDescriptionPages + '</p>'
			});

			this.helpList.alignTo(this.wrap, this.listAlign);
			this.helpList.show();
		}
	},

	removeHelp : function() {
		if (this.helpList) {
			this.helpList.destroy();
			delete this.helpList;
		}
	},

	onFocus : function() {
		TYPO3.BackendLiveSearch.superclass.onFocus.apply(this, arguments);

		// If search is blank, show the help on focus. Otherwise, show last results
		if (this.getValue() == '') {
			this.initHelp();
		} else {
			this.expand();
		}
	},

	/**
	 * Fired when search results are clicked. We do not want the search result
	 * appear so we always set doFocus = false
	 */
	onViewClick : function(doFocus){
		doFocus = false;
		TYPO3.BackendLiveSearch.superclass.onViewClick.apply(this, arguments);
	},

	postBlur : function() {
		TYPO3.BackendLiveSearch.superclass.postBlur.apply(this, arguments);
		this.removeHelp();
	},

	getTriggerWidth : function() {
		// Trigger is inset, so width used in calculations is 0
		return 0;
	},

	reset : function() {
	    this.originalValue = this.emptyText;
		this.setHideTrigger(true);
		TYPO3.BackendLiveSearch.superclass.reset.apply(this, arguments);
	},

	getSearchResultsUrl : function(searchTerm) {
		return 'id=' + this.searchResultsPid + '&search_levels=4&search_field=' + searchTerm;
	},

	handleBlur : function(e) {

		if (!this.listHovered) {
			this.hasFocus = false;
			if (this.getValue() == '') {
				this.reset();
			}
			this.postBlur();
		}

	}
});

var TYPO3LiveSearch;

Ext.onReady(function() {
	TYPO3LiveSearch = new TYPO3.BackendLiveSearch({
		dataProvider: TYPO3.LiveSearchActions.ExtDirect,
		title: TYPO3.LLL.liveSearch.title,
		helpTitle: TYPO3.LLL.liveSearch.helpTitle,
		emptyText: TYPO3.LLL.liveSearch.emptyText,
		loadingText: TYPO3.LLL.liveSearch.loadingText,
		listEmptyText: TYPO3.LLL.liveSearch.listEmptyText,
		searchResultsPid: TYPO3.configuration.firstWebmountPid
	});

	TYPO3LiveSearch.applyToMarkup(Ext.get('live-search-box'));

		// Add a blur event listener outside the ExtJS widget to handle clicks in iframes also.
	Ext.get('live-search-box').on('blur', TYPO3LiveSearch.handleBlur, TYPO3LiveSearch);
});

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.TreeEditor
 *
 * Custom Tree Editor implementation to enable different source fields for the
 * editable label.
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.tree.TreeEditor
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.TreeEditor = Ext.extend(Ext.tree.TreeEditor, {
	/**
	 * Don't send any save events if the value wasn't changed
	 *
	 * @type {Boolean}
	 */
	ignoreNoChange: false,

	/**
	 * Edit delay
	 *
	 * @type {int}
	 */
	editDelay: 250,

	/**
	 * Indicates if an underlying shadow should be shown
	 *
	 * @type {Boolean}
	 */
	shadow: false,

	/**
	 * Listeners
	 *
	 * Handles the synchronization between the edited label and the shown label.
	 */
	listeners: {
		beforecomplete: function(node) {
			this.updatedValue = this.getValue();
			if (this.updatedValue === '') {
				this.cancelEdit();
				return false;
			}
			this.setValue(this.editNode.attributes.prefix + Ext.util.Format.htmlEncode(this.updatedValue) + this.editNode.attributes.suffix);
		},

		complete: {
			fn: function(node, newValue, oldValue) {
				if (newValue === oldValue) {
					this.fireEvent('canceledit', this);
					return false;
				}

				this.editNode.getOwnerTree().commandProvider.saveTitle(node, this.updatedValue, oldValue, this);
			}
		},

		startEdit: {
			fn: function(element, value) {
				this.field.selectText();
			}
		},

		canceledit: function() {
			var tree = this.editNode.getOwnerTree();
			if (tree.currentSelectedNode) {
				tree.currentSelectedNode.select();
			}
		}
	},

	/**
	 * Updates the edit node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {String} editableText
	 * @param {String} updatedNode
	 * @return {void}
	 */
	updateNodeText: function(node, editableText, updatedNode) {
		this.editNode.setText(this.editNode.attributes.prefix + updatedNode + this.editNode.attributes.suffix);
		this.editNode.attributes.editableText = editableText;
	},

	/**
	 * Overridden method to set another editable text than the node text attribute
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {Boolean}
	 */
	triggerEdit: function(node) {
		this.completeEdit();
		if (node.attributes.editable !== false) {
			this.editNode = node;
			if (this.tree.autoScroll) {
				Ext.fly(node.ui.getEl()).scrollIntoView(this.tree.body);
			}

			var value = node.text || '';
			if (!Ext.isGecko && Ext.isEmpty(node.text)) {
				node.setText(' ');
			}

				// TYPO3 MODIFICATION to use another attribute
			value = node.attributes.editableText;

			this.autoEditTimer = this.startEdit.defer(this.editDelay, this, [node.ui.textNode, value]);
			return false;
		}
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.TreeEditor', TYPO3.Components.PageTree.TreeEditor);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.Tree
 *
 * Generic Tree Panel
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.tree.TreePanel
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.Tree = Ext.extend(Ext.tree.TreePanel, {
	/**
	 * Border
	 *
	 * @type {Boolean}
	 */
	border: false,

	/**
	 * Indicates if the root node is visible
	 *
	 * @type {Boolean}
	 */
	rootVisible: false,

	/**
	 * Tree Editor Instance (Inline Edit)
	 *
	 * @type {TYPO3.Components.PageTree.TreeEditor}
	 */
	treeEditor: null,

	/**
	 * Currently Selected Node
	 *
	 * @type {Ext.tree.TreeNode}
	 */
	currentSelectedNode: null,

	/**
	 * Enable the drag and drop feature
	 *
	 * @cfg {Boolean}
	 */
	enableDD: true,

	/**
	 * Drag and Drop Group
	 *
	 * @cfg {String}
	 */
	ddGroup: '',

	/**
	 * Indicates if the label should be editable
	 *
	 * @cfg {Boolean}
	 */
	labelEdit: true,

	/**
	 * User Interface Provider
	 *
	 * @cfg {Ext.tree.TreeNodeUI}
	 */
	uiProvider: null,

	/**
	 * Data Provider
	 *
	 * @cfg {Object}
	 */
	treeDataProvider: null,

	/**
	 * Command Provider
	 *
	 * @cfg {Object}
	 */
	commandProvider : null,

	/**
	 * Context menu provider
	 *
	 * @cfg {Object}
	 */
	contextMenuProvider: null,

	/**
	 * Id of the deletion drop zone if any
	 *
	 * @cfg {String}
	 */
	deletionDropZoneId: '',

	/**
	 * Main applicaton
	 *
	 * @cfg {TYPO3.Components.PageTree.App}
	 */
	app: null,

	/**
	 * Root Node Configuration
	 *
	 * @type {Object}
	 */
	rootNodeConfig: {
		id: 'root',
		expanded: true,
		nodeData: {
			id: 'root'
		}
	},

	/**
	 * Indicator if the control key is pressed
	 *
	 * @type {Boolean}
	 */
	isControlPressed: false,

	/**
	 * Context Node
	 *
	 * @type {Ext.tree.TreeNode}
	 */
	t3ContextNode: null,

	/**
	 * Context Information
	 *
	 * @type {Object}
	 */
	t3ContextInfo: {
		inCopyMode: false,
		inCutMode: false
	},

	/**
	 * Registered clicks for the double click feature
	 *
	 * @type {int}
	 */
	clicksRegistered: 0,

	/**
	 * Indicator if the control key was pressed
	 *
	 * @type {Boolean}
	 */
	controlKeyPressed: false,

	/**
	 * Listeners
	 *
	 * Event handlers that handle click events and synchronizes the label edit,
	 * double click and single click events in a useful way.
	 */
	listeners: {
			// single click handler that only triggers after a delay to let the double click event
			// a possibility to be executed (needed for label edit)
		click: {
			fn: function(node, event) {
				if (this.clicksRegistered === 2) {
					this.clicksRegistered = 0;
					event.stopEvent();
					return false;
				}

				this.clicksRegistered = 0;
				if (this.commandProvider.singleClick) {
					this.commandProvider.singleClick(node, this);
				}
			},
			delay: 400
		},

			// prevent the expanding / collapsing on double click
		beforedblclick: {
			fn: function() {
				return false;
			}
		},

			// prevents label edit on a selected node
		beforeclick: {
			fn: function(node, event) {
				if (!this.clicksRegistered && this.getSelectionModel().isSelected(node)) {
					node.fireEvent('click', node, event);
					++this.clicksRegistered;
					return false;
				}
				++this.clicksRegistered;
			}
		}
	},

	/**
	 * Initializes the component
	 *
	 * @return {void}
	 */
	initComponent: function() {
		if (!this.uiProvider) {
			this.uiProvider = TYPO3.Components.PageTree.PageTreeNodeUI;
		}
		Ext.dd.DragDropMgr.useCache = false;
		this.root = new Ext.tree.AsyncTreeNode(this.rootNodeConfig);
		this.addTreeLoader();

		if (this.labelEdit) {
			this.enableInlineEditor();
		}

		if (this.enableDD) {
			this.dragConfig = {ddGroup: this.ddGroup};
			this.enableDragAndDrop();
		}

		if (this.contextMenuProvider) {
			this.enableContextMenu();
		}

		TYPO3.Components.PageTree.Tree.superclass.initComponent.apply(this, arguments);
	},

	/**
	 * Refreshes the tree
	 *
	 * @param {Function} callback
	 * @param {Object} scope
	 * return {void}
	 */
	refreshTree: function(callback, scope) {
			// remove readable rootline elements while refreshing
		if (!this.inRefreshingMode) {
			var rootlineElements = Ext.select('.x-tree-node-readableRootline');
			if (rootlineElements) {
				rootlineElements.each(function(element) {
					element.remove();
				});
			}
		}

		this.refreshNode(this.root, callback, scope);
	},

	/**
	 * Refreshes a given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {Function} callback
	 * @param {Object} scope
	 * return {void}
	 */
	refreshNode: function(node, callback, scope) {
		if (this.inRefreshingMode) {
			return;
		}

		scope = scope || node;
		this.inRefreshingMode = true;
		var loadCallback = function(node) {
			node.ownerTree.inRefreshingMode = false;
			if (node.ownerTree.restoreState) {
				node.ownerTree.restoreState(node.getPath());
			}
		};

		if (callback) {
			loadCallback = callback.createSequence(loadCallback);
		}

		this.getLoader().load(node, loadCallback, scope);
	},

	/**
	 * Adds a tree loader implementation that uses the directFn feature
	 *
	 * return {void}
	 */
	addTreeLoader: function() {
		this.loader = new Ext.tree.TreeLoader({
			directFn: this.treeDataProvider.getNextTreeLevel,
			paramOrder: 'nodeId,attributes',
			nodeParameter: 'nodeId',
			baseAttrs: {
				uiProvider: this.uiProvider
			},

				// an id can never be zero in ExtJS, but this is needed
				// for the root line feature or it will never be working!
			createNode: function(attr) {
				if (attr.id == 0) {
					attr.id = 'siteRootNode';
				}

				return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
			},

			listeners: {
				beforeload: function(treeLoader, node) {
					treeLoader.baseParams.nodeId = node.id;
					treeLoader.baseParams.attributes = node.attributes.nodeData;
				}
			}
		});
	},

	/**
	 * Enables the context menu feature
	 *
	 * return {void}
	 */
	enableContextMenu: function() {
		this.contextMenu = new TYPO3.Components.PageTree.ContextMenu();

		this.on('contextmenu', function(node, event) {
			this.openContextMenu(node, event);
		});
	},

	/**
	 * Open a context menu for the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {Ext.EventObject} event
	 * return {void}
	 */
	openContextMenu: function(node, event) {
		var attributes = Ext.apply(node.attributes.nodeData, {
			t3ContextInfo: node.ownerTree.t3ContextInfo
		});

		this.contextMenuProvider.getActionsForNodeArray(
			attributes,
			function(configuration) {
				this.contextMenu.removeAll();
				this.contextMenu.fill(node, this, configuration);
				if (this.contextMenu.items.length) {
					this.contextMenu.showAt(event.getXY());

				}
			},
			this
		);
	},

	/**
	 * Initialize the inline editor for the given tree.
	 *
	 * @return {void}
	 */
	enableInlineEditor: function() {
		this.treeEditor = new TYPO3.Components.PageTree.TreeEditor(this);
	},

	/**
	 * Triggers the editing of the node if the tree editor is available
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	triggerEdit: function(node) {
		if (this.treeEditor) {
			this.treeEditor.triggerEdit(node);
		}
	},

	/**
	 * Enables the drag and drop feature
	 *
	 * return {void}
	 */
	enableDragAndDrop: function() {
			// init proxy element
		this.on('startdrag', this.initDd, this);
		this.on('enddrag', this.stopDd, this);

			// node is moved
		this.on('movenode', this.moveNode, this);

			// new node is created/copied
		this.on('beforenodedrop', this.beforeDropNode, this);
		this.on('nodedrop', this.dropNode, this);

			// listens on the ctrl key to toggle the copy mode
		(new Ext.KeyMap(document, {
			key: Ext.EventObject.CONTROL,
			scope: this,
			buffer: 250,
			fn: function() {
				if (!this.controlKeyPressed && this.dragZone.dragging && this.copyHint) {
					if (this.shouldCopyNode) {
						this.copyHint.show();
					} else {
						this.copyHint.hide();
					}

					this.shouldCopyNode = !this.shouldCopyNode;
					this.dragZone.proxy.el.toggleClass('typo3-pagetree-copy');
				}
				this.controlKeyPressed = true;
			}
		}, 'keydown'));

		(new Ext.KeyMap(document, {
			key: Ext.EventObject.CONTROL,
			scope: this,
			fn: function() {
				this.controlKeyPressed = false;
			}
		}, 'keyup'));

			// listens on the escape key to stop the dragging
		(new Ext.KeyMap(document, {
			key: Ext.EventObject.ESC,
			scope: this,
			buffer: 250,
			fn: function(event) {
				if (this.dragZone.dragging) {
					Ext.dd.DragDropMgr.stopDrag(event);
					this.dragZone.onInvalidDrop(event);
				}
			}
		}, 'keydown'));
	},

	/**
	 * Disables the deletion drop zone if configured
	 *
	 * @return {void}
	 */
	stopDd: function() {
		if (this.deletionDropZoneId) {
			Ext.getCmp(this.deletionDropZoneId).hide();
			this.app.doLayout();
		}
	},

	/**
	 * Enables the deletion drop zone if configured. Also it creates the
	 * shown dd proxy element.
	 *
	 * @param {TYPO3.Components.PageTree.Tree} treePanel
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	initDd: function(treePanel, node) {
		var nodeHasChildNodes = (node.hasChildNodes() || node.isExpandable());
		if (this.deletionDropZoneId &&
			(!nodeHasChildNodes ||
			(nodeHasChildNodes && TYPO3.Components.PageTree.Configuration.canDeleteRecursivly)
		)) {
			Ext.getCmp(this.deletionDropZoneId).show();
			this.app.doLayout();
		}
		this.initDDProxyElement();
	},

	/**
	 * Adds the copy hint to the proxy element
	 *
	 * @return {void}
	 */
	initDDProxyElement: function() {
		this.shouldCopyNode = false;
		this.copyHint = new Ext.Element(document.createElement('div')).addClass(this.id + '-copy');
		this.copyHint.dom.appendChild(document.createTextNode(TYPO3.Components.PageTree.LLL.copyHint));
		this.copyHint.setVisibilityMode(Ext.Element.DISPLAY);
		this.dragZone.proxy.el.shadow = false;
		this.dragZone.proxy.ghost.dom.appendChild(this.copyHint.dom);
	},

	/**
	 * Creates a Fake Node
	 *
	 * This must be done to prevent the calling of the moveNode event.
	 *
	 * @param {object} dragElement
	 */
	beforeDropNode: function(dragElement) {
		if (dragElement.data && dragElement.data.item && dragElement.data.item.shouldCreateNewNode) {
			this.t3ContextInfo.serverNodeType = dragElement.data.item.nodeType;
			dragElement.dropNode = new Ext.tree.TreeNode({
				text: TYPO3.Components.PageTree.LLL.fakeNodeHint,
				leaf: true,
				isInsertedNode: true
			});

				// fix incorrect cancel value
			dragElement.cancel = false;

		} else if (this.shouldCopyNode) {
			dragElement.dropNode.ui.onOut();
			var attributes = dragElement.dropNode.attributes;
			attributes.isCopiedNode = true;
			attributes.id = 'fakeNode';
			dragElement.dropNode = new Ext.tree.TreeNode(attributes);
		}

		return true;
	},

	/**
	 * Differentiate between the copy and insert event
	 *
	 * @param {Ext.tree.TreeDropZone} dragElement
	 * return {void}
	 */
	dropNode: function(dragElement) {
		this.controlKeyPressed = false;
		if (dragElement.dropNode.attributes.isInsertedNode) {
			dragElement.dropNode.attributes.isInsertedNode = false;
			this.insertNode(dragElement.dropNode);
		} else if (dragElement.dropNode.attributes.isCopiedNode) {
			dragElement.dropNode.attributes.isCopiedNode = false;
			this.copyNode(dragElement.dropNode)
		}
	},

	/**
	 * Moves a node
	 *
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Ext.tree.TreeNode} movedNode
	 * @param {Ext.tree.TreeNode} oldParent
	 * @param {Ext.tree.TreeNode} newParent
	 * @param {int} position
	 * return {void}
	 */
	moveNode: function(tree, movedNode, oldParent, newParent, position) {
		this.controlKeyPressed = false;
		tree.t3ContextNode = movedNode;

		if (position === 0) {
			this.commandProvider.moveNodeToFirstChildOfDestination(newParent, tree);
		} else {
			var previousSiblingNode = newParent.childNodes[position - 1];
			this.commandProvider.moveNodeAfterDestination(previousSiblingNode, tree);
		}
	},

	/**
	 * Inserts a node
	 *
	 * @param {Ext.tree.TreeNode} movedNode
	 * return {void}
	 */
	insertNode: function(movedNode) {
		this.t3ContextNode = movedNode.parentNode;

		movedNode.disable();
		if (movedNode.previousSibling) {
			this.commandProvider.insertNodeAfterDestination(movedNode, this);
		} else {
			this.commandProvider.insertNodeToFirstChildOfDestination(movedNode, this);
		}
	},

	/**
	 * Copies a node
	 *
	 * @param {Ext.tree.TreeNode} movedNode
	 * return {void}
	 */
	copyNode: function(movedNode) {
		this.t3ContextNode = movedNode;

		movedNode.disable();
		if (movedNode.previousSibling) {
			this.commandProvider.copyNodeAfterDestination(movedNode, this);
		} else {
			this.commandProvider.copyNodeToFirstChildOfDestination(movedNode, this);
		}
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.Tree', TYPO3.Components.PageTree.Tree);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.FilteringTree
 *
 * Filtering Tree
 *
 * @namespace TYPO3.Components.PageTree
 * @extends TYPO3.Components.PageTree.Tree
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.FilteringTree = Ext.extend(TYPO3.Components.PageTree.Tree, {
	/**
	 * Search word
	 *
	 * @type {String}
	 */
	searchWord: '',

	/**
	 * Tree loader implementation for the filtering tree
	 *
	 * @return {void}
	 */
	addTreeLoader: function() {
		this.loader = new Ext.tree.TreeLoader({
			directFn: this.treeDataProvider.getFilteredTree,
			paramOrder: 'nodeId,attributes,searchWord',
			nodeParameter: 'nodeId',
			baseAttrs: {
				uiProvider: this.uiProvider
			},

			listeners: {
				beforeload: function(treeLoader, node) {
					if (!node.ownerTree.searchWord || node.ownerTree.searchWord === '') {
						return false;
					}

					treeLoader.baseParams.nodeId = node.id;
					treeLoader.baseParams.searchWord = node.ownerTree.searchWord;
					treeLoader.baseParams.attributes = node.attributes.nodeData;
				}
			}
		});
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.FilteringTree', TYPO3.Components.PageTree.FilteringTree);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.DeletionDropZone
 *
 * Tree Node User Interface that can handle sprite icons and more
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.tree.TreeNodeUI
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.PageTreeNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
	/**
	 * Adds the sprite icon and adds an event to open the context menu on a single click at the icon node
	 *
	 * @param {Ext.tree.TreeNode} n
	 * @param {Object} a
	 * @param {Ext.tree.TreeNode} targetNode
	 * @param {Boolean} bulkRender
	 * @return {void}
	 */
	renderElements : function(n, a, targetNode, bulkRender) {
		// add some indent caching, this helps performance when rendering a large tree
        this.indentMarkup = n.parentNode ? n.parentNode.ui.getChildIndent() : '';

        var cb = Ext.isBoolean(a.checked),
            nel,
            href = this.getHref(a.href),
			rootline = '';

			// TYPO3 modification to show the readable rootline above the user mounts
		if (a.readableRootline !== '') {
			var rootline = '<li class="x-tree-node-readableRootline">' + a.readableRootline + '</li>';
		}

		var buf = [rootline,'<li class="x-tree-node"><div ext:tree-node-id="',n.id,'" class="x-tree-node-el x-tree-node-leaf x-unselectable ', a.cls,'" unselectable="on">',
            '<span class="x-tree-node-indent">',this.indentMarkup,"</span>",
            '<img alt="" src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow" />',
//            '<img alt="" src="', a.icon || this.emptyIcon, '" class="x-tree-node-icon',(a.icon ? " x-tree-node-inline-icon" : ""),(a.iconCls ? " "+a.iconCls : ""),'" unselectable="on" />',
			a.spriteIconCode, // TYPO3: add sprite icon code
            cb ? ('<input class="x-tree-node-cb" type="checkbox" ' + (a.checked ? 'checked="checked" />' : '/>')) : '',
            '<a hidefocus="on" class="x-tree-node-anchor" href="',href,'" tabIndex="1" ',
             a.hrefTarget ? ' target="'+a.hrefTarget+'"' : "", '><span unselectable="on">',n.text,"</span></a></div>",
            '<ul class="x-tree-node-ct" style="display:none;"></ul>',
            "</li>"].join('');

        if(bulkRender !== true && n.nextSibling && (nel = n.nextSibling.ui.getEl())){
            this.wrap = Ext.DomHelper.insertHtml("beforeBegin", nel, buf);
        }else{
            this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf);
        }


        this.elNode = this.wrap.childNodes[0];
        this.ctNode = this.wrap.childNodes[1];
        var cs = this.elNode.childNodes;
        this.indentNode = cs[0];
        this.ecNode = cs[1];
//        this.iconNode = cs[2];
		this.iconNode = (cs[2].firstChild.tagName === 'SPAN' ? cs[2].firstChild : cs[2]); // TYPO3: get possible overlay icon
        var index = 3; // TYPO3: index 4?
        if(cb){
            this.checkbox = cs[3];
            // fix for IE6
            this.checkbox.defaultChecked = this.checkbox.checked;
            index++;
        }
        this.anchor = cs[index];
        this.textNode = cs[index].firstChild;

			// TYPO3: call the context menu on a single click (Beware of drag&drop!)
		if (!TYPO3.Components.PageTree.Configuration.disableIconLinkToContextmenu
			|| TYPO3.Components.PageTree.Configuration.disableIconLinkToContextmenu === '0'
		) {
			Ext.fly(this.iconNode).on('click', function(event) {
				this.getOwnerTree().fireEvent('contextmenu', this, event);
				event.stopEvent();
			}, n);
		}
	},

	/**
	 * Adds a quick tip to the sprite icon
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {Object} tip
	 * @param {String} title
	 * @return {void}
	 */
    onTipChange : function(node, tip, title) {
		TYPO3.Components.PageTree.PageTreeNodeUI.superclass.onTipChange.apply(this, arguments);

        if(this.rendered){
            var hasTitle = Ext.isDefined(title);
            if(this.iconNode.setAttributeNS){
                this.iconNode.setAttributeNS("ext", "qtip", tip);
                if(hasTitle){
                    this.iconNode.setAttributeNS("ext", "qtitle", title);
                }
            }else{
                this.iconNode.setAttribute("ext:qtip", tip);
                if(hasTitle){
                    this.iconNode.setAttribute("ext:qtitle", title);
                }
            }
        }
    },

	/**
	 * Returns the drag and drop handles
	 *
	 * @return {Object}
	 */
	getDDHandles: function() {
		var ddHandles = [this.iconNode, this.textNode, this.elNode];
		var handlesIndex = ddHandles.length;
		
		var textNode = Ext.get(this.textNode);
		for (var i = 0; i < textNode.dom.childNodes.length; ++i) {
			if (textNode.dom.childNodes[i].nodeName === 'SPAN') {
				ddHandles[handlesIndex++] = textNode.dom.childNodes[i];
				if (textNode.dom.childNodes[i].childNodes) {
					ddHandles[handlesIndex++] = textNode.dom.childNodes[i].childNodes[0];
				}
			}
		}

		return ddHandles;
    },

	/**
	 * Only set the onOver class if we are not in dragging mode
	 *
	 * @return {void}
	 */
	onOver: function() {
		if (!this.node.ownerTree.dontSetOverClass) {
			TYPO3.Components.PageTree.PageTreeNodeUI.superclass.onOver.apply(this, arguments);
		}
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.PageTreeNodeUI', TYPO3.Components.PageTree.PageTreeNodeUI);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.DeletionDropZone
 *
 * Deletion Drop Zone
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.Panel
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.DeletionDropZone = Ext.extend(Ext.Panel, {
	/**
	 * Border
	 *
	 * @type {Boolean}
	 */
	border: true,

	/**
	 * Hide the drop zone initially
	 *
	 * @type {Boolean}
	 */
	hidden: true,

	/**
	 * Command Provider
	 *
	 * @cfg {Object}
	 */
	commandProvider: null,

	/**
	 * Drag and Drop Group
	 *
	 * @cfg {String}
	 */
	ddGroup: '',

	/**
	 * Main Application
	 *
	 * @cfg {TYPO3.Components.PageTree.App}
	 */
	app: null,

	/**
	 * Removed node had a previous sibling
	 *
	 * @type {Boolean}
	 */
	isPreviousSibling: false,

	/**
	 * Removed node
	 *
	 * @type {Ext.tree.TreeNode}
	 */
	previousNode: null,

	/**
	 * Click Handler for the recovery text
	 *
	 * @type {Function}
	 */
	textClickHandler: null,

	/**
	 * Amount of drops (used to prevent early hiding of the box)
	 *
	 * @type {int}
	 */
	amountOfDrops: 0,

	/**
	 * Listeners
	 *
	 * The "afterrender" event creates the drop zone
	 */
	listeners: {
		afterrender: {
			fn: function() {
				this.createDropZone();

				this.getEl().on('mouseout', function(e) {
					if (!e.within(this.getEl(), true)) {
						this.removeClass(this.id + '-activateProxyOver');
						if (!this.app.activeTree.shouldCopyNode) {
							this.app.activeTree.copyHint.show();
						}
					}
				}, this);
			}
		},

		beforehide: {
			fn: function() {
				if (this.textClickHandler) {
					return false;
				}
			}
		}
	},

	/**
	 * Initializes the component
	 *
	 * @return {void}
	 */
	initComponent: function() {
		this.html = '<p><span id="' + this.id + '-icon" class="' +
			TYPO3.Components.PageTree.Sprites.TrashCan +
			'">&nbsp;</span><span id="' + this.id + '-text">' +
			TYPO3.Components.PageTree.LLL.dropToRemove + '</span></p>';

		TYPO3.Components.PageTree.DeletionDropZone.superclass.initComponent.apply(this, arguments);
	},


	/**
	 * Creates the drop zone and it's functionality
	 *
	 * @return {void}
	 */
	createDropZone: function() {
		(new Ext.dd.DropZone(this.getEl(), {
			ddGroup: this.ddGroup,

			notifyOver: function(ddProxy, e) {
				ddProxy.setDragElPos(e.xy[0], e.xy[1] - 60);
				return this.id + '-proxyOver';
			}.createDelegate(this),

			notifyEnter: function() {
				this.addClass(this.id + '-activateProxyOver');
				if (!this.app.activeTree.shouldCopyNode) {
					this.app.activeTree.copyHint.hide();
				}

				return this.id + '-proxyOver';
			}.createDelegate(this),

			notifyDrop: function(ddProxy, e, n) {
				var node = n.node;
				if (!node) {
					return;
				}

				var tree = node.ownerTree;
				var nodeHasChildNodes = (node.hasChildNodes() || node.isExpandable());

				var callback = null;
				if (!top.TYPO3.configuration.inWorkspace && !nodeHasChildNodes) {
					callback = this.setRecoverState.createDelegate(this);
				}

				if (nodeHasChildNodes) {
					node.ownerTree.commandProvider.confirmDelete(node, tree, callback, true);
				} else {
					node.ownerTree.commandProvider.deleteNode(node, tree, callback);
				}
			}.createDelegate(this)
		}));
	},

	/**
	 * Sets the drop zone into the recovery state
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Boolean} succeeded
	 * @return {void}
	 */
	setRecoverState: function(node, tree, succeeded) {
		if (!succeeded) {
			this.toOriginState();
			return;
		}

		this.show();
		this.setHeight(50);
		this.updateIcon(TYPO3.Components.PageTree.Sprites.TrashCanRestore);
		this.updateText(
			node.text + '<br />' +
			'<span class="' + this.id + '-restore">' +
				'<span class="' + this.id + '-restoreText">' +
				TYPO3.Components.PageTree.LLL.dropZoneElementRemoved +
				'</span>' +
			'</span>',
			false
		);
		this.app.doLayout();

		++this.amountOfDrops;
		(function() {
			if (!--this.amountOfDrops) {
				this.toOriginState();
			}
		}).defer(10000, this);

		this.textClickHandler = this.restoreNode.createDelegate(this, [node, tree]);
		Ext.get(this.id + '-text').on('click', this.textClickHandler);

		this.isPreviousSibling = false;
		this.previousNode = node.parentNode;
		if (node.previousSibling) {
			this.previousNode = node.previousSibling;
			this.isPreviousSibling = true;
		}
	},

	/**
	 * Updates the drop zone text label
	 *
	 * @param {String} text
	 * @param {Boolean} animate
	 * @return {void}
	 */
	updateText: function(text, animate) {
		animate = animate || false;

		var elementText = Ext.get(this.id + '-text');
		if (animate) {
			elementText.animate({opacity: {to: 0}}, 1, function(elementText) {
				elementText.update(text);
				elementText.setStyle('opacity', 1);
			});
		} else {
			elementText.update(text);
		}
	},

	/**
	 * Updates the drop zone icon with another sprite icon
	 *
	 * @param {String} classes
	 * @return {void}
	 */
	updateIcon: function(classes) {
		Ext.get(this.id + '-icon').set({
			'class': classes
		});
	},

	/**
	 * Resets the drop zone to the initial state
	 *
	 * @param {Boolean} hide
	 * @return {void}
	 */
	toOriginState: function(hide) {
		if (hide !== false) {
			hide = true;
		}

		Ext.get(this.id + '-text').un('click', this.textClickHandler);
		this.previousNode = this.textClickHandler = null;
		this.isPreviousSibling = false;

		if (hide && !this.app.activeTree.dragZone.dragging) {
			this.hide();
		}

		this.setHeight(35);
		this.updateText(TYPO3.Components.PageTree.LLL.dropToRemove, false);
		this.updateIcon(TYPO3.Components.PageTree.Sprites.TrashCan);
		this.app.doLayout();
	},

	/**
	 * Restores the last removed node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	restoreNode: function(node, tree) {
		if (this.isPreviousSibling) {
			this.commandProvider.restoreNodeAfterDestination(node, tree, this.previousNode);
		} else {
			this.commandProvider.restoreNodeToFirstChildOfDestination(node, tree, this.previousNode);
		}
		this.setHeight(35);
		this.updateText(TYPO3.Components.PageTree.LLL.dropZoneElementRestored);
		this.app.doLayout();

		(function() {
			if (this.textClickHandler) {
				this.toOriginState();
			}
		}).defer(3000, this);
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.DeletionDropZone', TYPO3.Components.PageTree.DeletionDropZone);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.TopPanel
 *
 * Top Panel
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.Panel
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.TopPanel = Ext.extend(Ext.Panel, {
	/**
	 * Component Id
	 *
	 * @type {String}
	 */
	id: 'typo3-pagetree-topPanel',

	/**
	 * Border
	 *
	 * @type {Boolean}
	 */
	border: false,

	/**
	 * Toolbar Object
	 *
	 * @type {Ext.Toolbar}
	 */
	tbar: new Ext.Toolbar(),

	/**
	 * Currently Clicked Toolbar Button
	 *
	 * @type {Ext.Button}
	 */
	currentlyClickedButton: null,

	/**
	 * Currently Shown Panel
	 *
	 * @type {Ext.Component}
	 */
	currentlyShownPanel: null,

	/**
	 * Filtering Indicator Item
	 *
	 * @type {Ext.Panel}
	 */
	filteringIndicator: null,

	/**
	 * Drag and Drop Group
	 *
	 * @cfg {String}
	 */
	ddGroup: '',

	/**
	 * Data Provider
	 *
	 * @cfg {Object}
	 */
	dataProvider: null,

	/**
	 * Filtering Tree
	 *
	 * @cfg {TYPO3.Components.PageTree.FilteringTree}
	 */
	filteringTree: null,

	/**
	 * Page Tree
	 *
	 * @cfg {TYPO3.Components.PageTree.Tree}
	 */
	tree: null,

	/**
	 * Application Panel
	 *
	 * @cfg {TYPO3.Components.PageTree.App}
	 */
	app: null,

	/**
	 * Initializes the component
	 *
	 * @return {void}
	 */
	initComponent: function() {
		this.currentlyShownPanel = new Ext.Panel({
			id: this.id + '-defaultPanel',
			cls: this.id + '-item'
		});
		this.items = [this.currentlyShownPanel];

		TYPO3.Components.PageTree.TopPanel.superclass.initComponent.apply(this, arguments);

		this.addDragDropNodeInsertionFeature();

		if (!TYPO3.Components.PageTree.Configuration.hideFilter
			|| TYPO3.Components.PageTree.Configuration.hideFilter === '0'
		) {
			this.addFilterFeature();
		}

		this.getTopToolbar().addItem({xtype: 'tbfill'});
		this.addRefreshTreeFeature();
	},

	/**
	 * Returns a custom button template to fix some nasty webkit issues
	 * by removing some useless wrapping html code
	 *
	 * @return {void}
	 */
	getButtonTemplate: function() {
		return new Ext.Template(
			'<div id="{4}" class="x-btn {3}"><button type="{0}"">&nbsp;</button></div>'
		);
	},

	/**
	 * Adds a button to the components toolbar with a related component
	 *
	 * @param {Object} button
	 * @param {Object} connectedWidget
	 * @return {void}
	 */
	addButton: function(button, connectedWidget) {
		button.template = this.getButtonTemplate();
		if (!button.hasListener('click')) {
			button.on('click', this.topbarButtonCallback);
		}

		if (connectedWidget) {
			connectedWidget.hidden = true;
			button.connectedWidget = connectedWidget;
			this.add(connectedWidget);
		}

		this.getTopToolbar().addItem(button);
		this.doLayout();
	},

	/**
	 * Usual button callback method that triggers the assigned component of the
	 * clicked toolbar button
	 *
	 * @return {void}
	 */
	topbarButtonCallback: function() {
		var topPanel = this.ownerCt.ownerCt;

		topPanel.currentlyShownPanel.hide();
		if (topPanel.currentlyClickedButton) {
			topPanel.currentlyClickedButton.toggle(false);
		}

		if (topPanel.currentlyClickedButton === this) {
			topPanel.currentlyClickedButton = null;
			topPanel.currentlyShownPanel = topPanel.get(topPanel.id + '-defaultPanel');
		} else {
			this.toggle(true);
			topPanel.currentlyClickedButton = this;
			topPanel.currentlyShownPanel = this.connectedWidget;
		}

		topPanel.currentlyShownPanel.show();
	},

	/**
	 * Loads the filtering tree nodes with the given search word
	 *
	 * @param {Ext.form.TextField} textField
	 * @return {void}
	 */
	createFilterTree: function(textField) {
		var searchWord = textField.getValue();
		var isNumber = TYPO3.Utility.isNumber(searchWord);
		var hasMinLength = (searchWord.length > 2 || searchWord.length <= 0);
		if ((!hasMinLength && !isNumber) || searchWord === this.filteringTree.searchWord) {
			return;
		}

		this.filteringTree.searchWord = searchWord;
		if (this.filteringTree.searchWord === '') {
			this.app.activeTree = this.tree;

			textField.setHideTrigger(true);
			this.filteringTree.hide();
			this.tree.show().refreshTree(function() {
				textField.focus(false, 500);
			}, this);

			if (this.filteringIndicator) {
				this.app.removeIndicator(this.filteringIndicator);
				this.filteringIndicator = null;
			}
		} else {
			var selectedNode = this.app.getSelected();
			this.app.activeTree = this.filteringTree;

			if (!this.filteringIndicator) {
				this.filteringIndicator = this.app.addIndicator(
					this.createIndicatorItem(textField)
				);
			}

			textField.setHideTrigger(false);
			this.tree.hide();
			this.app.ownerCt.getEl().mask('', 'x-mask-loading-message');
			this.app.ownerCt.getEl().addClass('t3-mask-loading');
			this.filteringTree.show().refreshTree(function() {
				if (selectedNode) {
					this.app.select(selectedNode.attributes.nodeData.id, false);
				}
				textField.focus();
				this.app.ownerCt.getEl().unmask();
			}, this);
		}

		this.doLayout();
	},

	/**
	 * Adds an indicator item to the page tree application for the filtering feature
	 *
	 * @param {Ext.form.TextField} textField
	 * @return {void}
	 */
	createIndicatorItem: function(textField) {
		return {
			border: false,
			id: this.app.id + '-indicatorBar-filter',
			cls: this.app.id + '-indicatorBar-item',
			html: '<p>' +
					'<span id="' + this.app.id + '-indicatorBar-filter-info' + '" ' +
						'class="' + this.app.id + '-indicatorBar-item-leftIcon ' +
							TYPO3.Components.PageTree.Sprites.Info + '">&nbsp;' +
					'</span>' +
					'<span id="' + this.app.id + '-indicatorBar-filter-clear' + '" ' +
						'class="' + this.app.id + '-indicatorBar-item-rightIcon ' + '">X' +
					'</span>' +
					TYPO3.Components.PageTree.LLL.activeFilterMode +
				'</p>',
			filteringTree: this.filteringTree,

			listeners: {
				afterrender: {
					scope: this,
					fn: function() {
						var element = Ext.fly(this.app.id + '-indicatorBar-filter-clear');
						element.on('click', function() {
							textField.setValue('');
							this.createFilterTree(textField);
						}, this);
					}
				}
			}
		};
	},

	/**
	 * Adds the necessary functionality and components for the filtering feature
	 *
	 * @return {void}
	 */
	addFilterFeature: function() {
		var topPanelButton = new Ext.Button({
			id: this.id + '-button-filter',
			cls: this.id + '-button',
			iconCls: TYPO3.Components.PageTree.Sprites.Filter,
			tooltip: TYPO3.Components.PageTree.LLL.buttonFilter
		});

		var textField = new Ext.form.TriggerField({
			id: this.id + '-filter',
			enableKeyEvents: true,
			triggerClass: TYPO3.Components.PageTree.Sprites.InputClear,
			value: TYPO3.Components.PageTree.LLL.searchTermInfo,

			listeners: {
				blur: {
					scope: this,
					fn:function(textField) {
						if (textField.getValue() === '') {
							textField.setValue(TYPO3.Components.PageTree.LLL.searchTermInfo);
							textField.addClass(this.id + '-filter-defaultText');
						}
					}
				},

				focus: {
					scope: this,
					fn: function(textField) {
						if (textField.getValue() === TYPO3.Components.PageTree.LLL.searchTermInfo) {
							textField.setValue('');
							textField.removeClass(this.id + '-filter-defaultText');
						}
					}
				},

				keydown: {
					fn: this.createFilterTree,
					scope: this,
					buffer: 1000
				}
			}
		});

		textField.setHideTrigger(true);
		textField.onTriggerClick = function() {
			textField.setValue('');
			this.createFilterTree(textField);
		}.createDelegate(this);

		var topPanelWidget = new Ext.Panel({
			border: false,
			id: this.id + '-filterWrap',
			cls: this.id + '-item',
			items: [textField],

			listeners: {
				show: {
					scope: this,
					fn: function(panel) {
						panel.get(this.id + '-filter').focus();
					}
				}
			}
		});

		this.addButton(topPanelButton, topPanelWidget);
	},

	/**
	 * Creates the entries for the new node drag zone toolbar
	 *
	 * @return {void}
	 */
	createNewNodeToolbar: function() {
		this.dragZone = new Ext.dd.DragZone(this.getEl(), {
			ddGroup: this.ownerCt.ddGroup,
			topPanel: this.ownerCt,

			endDrag: function() {
				this.topPanel.app.activeTree.dontSetOverClass = false;
			},

			getDragData: function(event) {
				this.proxyElement = document.createElement('div');

				var node = Ext.getCmp(event.getTarget('.x-btn').id);
				node.shouldCreateNewNode = true;

				return {
					ddel: this.proxyElement,
					item: node
				}
			},

			onInitDrag: function() {
				this.topPanel.app.activeTree.dontSetOverClass = true;
				var clickedButton = this.dragData.item;
				var cls = clickedButton.initialConfig.iconCls;

				this.proxyElement.shadow = false;
				this.proxyElement.innerHTML = '<div class="x-dd-drag-ghost-pagetree">' +
					'<span class="x-dd-drag-ghost-pagetree-icon ' + cls + '">&nbsp;</span>' +
					'<span class="x-dd-drag-ghost-pagetree-text">'  + clickedButton.title + '</span>' +
				'</div>';

				this.proxy.update(this.proxyElement);
			}
		});

			// listens on the escape key to stop the dragging
		(new Ext.KeyMap(document, {
			key: Ext.EventObject.ESC,
			scope: this,
			buffer: 250,
			fn: function(event) {
				if (this.dragZone.dragging) {
					Ext.dd.DragDropMgr.stopDrag(event);
					this.dragZone.onInvalidDrop(event);
				}
			}
		}, 'keydown'));
	},

	/**
	 * Creates the necessary components for new node drag and drop feature
	 *
	 * @return {void}
	 */
	addDragDropNodeInsertionFeature: function() {
		var newNodeToolbar = new Ext.Toolbar({
			border: false,
			id: this.id + '-item-newNode',
			cls: this.id + '-item',

			listeners: {
				render: {
					fn: this.createNewNodeToolbar
				}
			}
		});

		this.dataProvider.getNodeTypes(function(response) {
			for (var i = 0; i < response.length; ++i) {
				response[i].template = this.getButtonTemplate();
				newNodeToolbar.addItem(response[i]);
			}
			newNodeToolbar.doLayout();
		}, this);

		var topPanelButton = new Ext.Button({
			id: this.id + '-button-newNode',
			cls: this.id + '-button',
			iconCls: TYPO3.Components.PageTree.Sprites.NewNode,
			tooltip: TYPO3.Components.PageTree.LLL.buttonNewNode
		});

		this.addButton(topPanelButton, newNodeToolbar);
	},

	/**
	 * Adds a button to the toolbar for the refreshing feature
	 *
	 * @return {void}
	 */
	addRefreshTreeFeature: function() {
		var topPanelButton = new Ext.Button({
			id: this.id + '-button-refresh',
			cls: this.id + '-button',
			iconCls: TYPO3.Components.PageTree.Sprites.Refresh,
			tooltip: TYPO3.Components.PageTree.LLL.buttonRefresh,

			listeners: {
				click: {
					scope: this,
					fn: function() {
						this.app.activeTree.refreshTree();
					}
				}
			}
		});

		this.addButton(topPanelButton);
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.TopPanel', TYPO3.Components.PageTree.TopPanel);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.ContextMenu
 *
 * Context menu implementation
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.menu.Menu
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.ContextMenu = Ext.extend(Ext.menu.Menu, {
	/**
	 * Context menu node
	 *
	 * @cfg {Ext.tree.TreeNode}
	 */
	node: null,

	/**
	 * Page Tree
	 *
	 * @cfg {TYPO3.Components.PageTree.Tree}
	 */
	pageTree: null,

	/**
	 * Component Id
	 *
	 * @type {String}
	 */
	id: 'typo3-pagetree-contextmenu',

	/**
	 * Parent clicks should be ignored
	 *
	 * @type {Boolean}
	 */
	ignoreParentClicks: true,

	/**
	 * Listeners
	 *
	 * The itemclick event triggers the configured single click action
	 */
	listeners: {
		itemclick: {
			fn: function (item) {
				if (this.pageTree.commandProvider[item.callbackAction]) {
					if (item.parentMenu.pageTree.stateHash) {
						fsMod.recentIds['web'] = item.parentMenu.node.attributes.nodeData.id;
						item.parentMenu.pageTree.stateHash['lastSelectedNode'] = item.parentMenu.node.id;
					}

					this.pageTree.commandProvider[item.callbackAction](
						item.parentMenu.node,
						item.parentMenu.pageTree,
						item
					);
				}
			}
		}
	},

	/**
	 * Fills the menu with the actions
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} pageTree
	 * @param {Object} contextMenuConfiguration
	 * @return {void}
	 */
	fill: function(node, pageTree, contextMenuConfiguration) {
		this.node = node;
		this.pageTree = pageTree;

		var components = this.preProcessContextMenuConfiguration(contextMenuConfiguration);
		if (components.length) {
			for (var component in components) {
				if (components[component] === '-') {
					this.addSeparator();
				} else if (typeof components[component] === 'object') {
					this.addItem(components[component]);
				}
			}
		}
	},

	/**
	 * Parses the context menu actions array recursively and generates the
	 * components for the context menu including separators/dividers and sub menus
	 *
	 * @param {Object} contextMenuConfiguration
	 * @param {int} level
	 * @return {Object}
	 */
	preProcessContextMenuConfiguration: function(contextMenuConfiguration, level) {
		level = level || 0;
		if (level > 5) {
			return [];
		}

		var components = [];
		var index = 0;

		var modulesInsideGroup = false;
		var subMenus = 0;
		for (var singleAction in contextMenuConfiguration) {
			if (contextMenuConfiguration[singleAction]['type'] === 'submenu') {
				var subMenuComponents = this.preProcessContextMenuConfiguration(
					contextMenuConfiguration[singleAction]['childActions'],
					level + 1
				);

				if (subMenuComponents.length) {
					var subMenu = new TYPO3.Components.PageTree.ContextMenu({
						id: this.id + '-sub' + ++subMenus,
						items: subMenuComponents,
						node: this.node,
						pageTree: this.pageTree
					});

					components[index++] = {
						text: contextMenuConfiguration[singleAction]['label'],
						cls: 'contextMenu-subMenu',
						menu: subMenu,
						icon: contextMenuConfiguration[singleAction]['icon'],
						iconCls: contextMenuConfiguration[singleAction]['class']
					};
				}
			} else if (contextMenuConfiguration[singleAction]['type'] === 'divider') {
				if (modulesInsideGroup) {
					components[index++] = '-';
					modulesInsideGroup = false;
				}
			} else {
				modulesInsideGroup = true;

				if (typeof contextMenuConfiguration[singleAction] === 'object') {
					var component = {
						'text': contextMenuConfiguration[singleAction]['label'],
						'icon': contextMenuConfiguration[singleAction]['icon'],
						'iconCls': contextMenuConfiguration[singleAction]['class'],
						'callbackAction': contextMenuConfiguration[singleAction]['callbackAction'],
						'customAttributes': contextMenuConfiguration[singleAction]['customAttributes']
					};

					component.itemTpl = Ext.menu.Item.prototype.itemTpl = new Ext.XTemplate(
						'<a id="{id}" class="{cls}" hidefocus="true" unselectable="on" href="{href}">',
							'<span class="{hrefTarget}">',
								'<img src="{icon}" class="x-menu-item-icon {iconCls}" unselectable="on" />',
							'</span>',
							'<span class="x-menu-item-text">{text}</span>',
						'</a>'
					);

					components[index++] = component;
				}
			}
		}

			// remove divider if it's the last item of the context menu
		if (components.last() === '-') {
			components[components.length - 1] = '';
		}

		return components;
	}
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.ContextMenu', TYPO3.Components.PageTree.ContextMenu);

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.Actions
 *
 * Actions dedicated for the page tree
 *
 * @namespace TYPO3.Components.PageTree
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.Actions = {
	/**
	 * Evaluates a response from an ext direct call and shows a flash message
	 * if it was an exceptional result
	 *
	 * @param {Object} response
	 * @return {Boolean}
	 */
	evaluateResponse: function(response) {
		if (response.success === false) {
			TYPO3.Flashmessage.display(4, 'Exception', response.message);
			return false;
		}

		return true;
	},

	/**
	 * Releases the cut and copy mode from the context menu
	 *
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	releaseCutAndCopyModes: function(tree) {
		tree.t3ContextInfo.inCutMode = false;
		tree.t3ContextInfo.inCopyMode = false;

		if (tree.t3ContextNode) {
			tree.t3ContextNode.attributes.nodeData.t3InCutMode = false;
			tree.t3ContextNode.attributes.nodeData.t3InCopyMode = false;
			tree.t3ContextNode = null;
		}
	},

	/**
	 * Updates an existing node with the given alternative. The new tree node
	 * is returned afterwards.
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {Boolean} isExpanded
	 * @param {Object} updatedNode
	 * @param {Function} callback
	 * @return {Ext.tree.TreeNode}
	 */
	updateNode: function(node, isExpanded, updatedNode, callback) {
		if (!updatedNode) {
			return null;
		}

		updatedNode.uiProvider = node.ownerTree.uiProvider;
		var newTreeNode = new Ext.tree.TreeNode(updatedNode);

		var refreshCallback = this.restoreNodeStateAfterRefresh;
		if (callback) {
			refreshCallback = refreshCallback.createSequence(callback);
		}

		node.parentNode.replaceChild(newTreeNode, node);
		newTreeNode.ownerTree.refreshNode(newTreeNode, refreshCallback);

		return newTreeNode;
	},

	/**
	 * Restores the node state
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {Boolean} isExpanded
	 * @return {void}
	 */
	restoreNodeStateAfterRefresh: function(node, isExpanded) {
		node.parentNode.expand(false, false);
		if (isExpanded) {
			node.expand(false, false);
		} else {
			node.collapse(false, false);
		}
	},

	/**
	 * Shows deletion confirmation window
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Function} callback
	 * @param {Boolean} recursiveDelete
	 * @return {void}
	 */
	confirmDelete: function(node, tree, callback, recursiveDelete) {
		callback = callback || null;

		var title = TYPO3.Components.PageTree.LLL.deleteDialogTitle,
			message = TYPO3.Components.PageTree.LLL.deleteDialogMessage;
		if (recursiveDelete) {
			message = TYPO3.Components.PageTree.LLL.recursiveDeleteDialogMessage;
		}

		Ext.Msg.show({
			title: title,
			msg: message,
			buttons: Ext.Msg.YESNO,
			fn: function (answer) {
				if (answer === 'yes') {
					TYPO3.Components.PageTree.Actions.deleteNode(node, tree, callback);
					return true;
				}
				return false;
			},
			animEl: 'elId'
		});
	},

	/**
	 * Deletes a node directly
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Function} callback
	 * @return {void}
	 */
	deleteNode: function(node, tree, callback) {
		TYPO3.Components.PageTree.Commands.deleteNode(
			node.attributes.nodeData,
			function(response) {
				var succeeded = this.evaluateResponse(response);
				if (Ext.isFunction(callback)) {
					callback(node, tree, succeeded);
				}

				if (succeeded) {
						// the node may not be removed in workspace mode
					if (top.TYPO3.configuration.inWorkspace && response.id) {
						this.updateNode(node, node.isExpanded(), response);
					} else {
						node.remove();
					}
				}
			},
			this
		);
	},

	/**
	 * Removes a node either directly or first shows deletion popup
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	removeNode: function(node, tree) {
		if (TYPO3.Components.PageTree.Configuration.displayDeleteConfirmation) {
			this.confirmDelete(node);
		} else {
			this.deleteNode(node, tree);
		}
	},

	/**
	 * Restores a given node and moves it to the given destination inside the tree. Use this
	 * method if you want to add it as the first child of the destination.
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Ext.tree.TreeNode} destination
	 * @return {void}
	 */
	restoreNodeToFirstChildOfDestination: function(node, tree, destination) {
		TYPO3.Components.PageTree.Commands.restoreNode(
			node.attributes.nodeData,
			destination.attributes.nodeData.id,
			function(updatedNode) {
				if (this.evaluateResponse(updatedNode)) {
					var newTreeNode = new Ext.tree.TreeNode(
						Ext.apply(node.attributes, updatedNode)
					);
					destination.insertBefore(newTreeNode, destination.firstChild);
				}
			},
			this
		);
	},

	/**
	 * Restores a given node and moves it to the given destination inside the tree. Use this
	 * method if you want to add the node after the destination node.
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Ext.tree.TreeNode} destination
	 * @return {void}
	 */
	restoreNodeAfterDestination: function(node, tree, destination) {
		TYPO3.Components.PageTree.Commands.restoreNode(
			node.attributes.nodeData,
			-destination.attributes.nodeData.id,
			function(updatedNode) {
				if (this.evaluateResponse(updatedNode)) {
					var newTreeNode = new Ext.tree.TreeNode(
						Ext.apply(node.attributes, updatedNode)
					);
					destination.parentNode.insertBefore(newTreeNode, destination.nextSibling);
				}
			},
			this
		);
	},

	/**
	 * Collapses a whole tree branch
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	collapseBranch: function(node) {
		node.collapse(true);
	},

	/**
	 * Expands a whole tree branch
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	expandBranch: function(node) {
		node.expand(true);
	},

	/**
	 * Opens a popup windows for previewing the given node/page
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	viewPage: function(node) {
		var frontendWindow = window.open('', 'newTYPO3frontendWindow');
		TYPO3.Components.PageTree.Commands.getViewLink(
			node.attributes.nodeData,
			function(result) {
				frontendWindow.location = result;
				frontendWindow.focus();
			}
		);
	},

	/**
	 * Creates a temporary tree mount point
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	mountAsTreeRoot: function(node, tree) {
		TYPO3.Components.PageTree.Commands.setTemporaryMountPoint(
			node.attributes.nodeData,
			function(response) {
				if (TYPO3.Components.PageTree.Configuration.temporaryMountPoint) {
					TYPO3.Backend.NavigationContainer.PageTree.removeIndicator(
						TYPO3.Backend.NavigationContainer.PageTree.temporaryMountPointInfoIndicator
					);
				}

				TYPO3.Components.PageTree.Configuration.temporaryMountPoint = response;
				TYPO3.Backend.NavigationContainer.PageTree.addTemporaryMountPointIndicator();

				var selectedNode = TYPO3.Backend.NavigationContainer.PageTree.getSelected();
				tree.stateId = 'Pagetree' + TYPO3.Components.PageTree.Configuration.temporaryMountPoint;
				tree.refreshTree(function() {
					var nodeIsSelected = false;
					if (selectedNode) {
						nodeIsSelected = TYPO3.Backend.NavigationContainer.PageTree.select(
							selectedNode.attributes.nodeData.id
						);
					}

					var node = (nodeIsSelected ? TYPO3.Backend.NavigationContainer.PageTree.getSelected() : null);
					if (node) {
						this.singleClick(node, tree);
					} else {
						this.singleClick(tree.getRootNode().firstChild, tree);
					}
				}, this);
			},
			this
		);
	},

	/**
	 * Opens the edit page properties dialog
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	editPageProperties: function(node) {
		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			'alt_doc.php?edit[pages][' + node.attributes.nodeData.id + ']=edit'
		);
	},

	/**
	 * Opens the new page wizard
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	newPageWizard: function(node) {
		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			'db_new.php?id=' + node.attributes.nodeData.id + '&pagesOnly=1'
		);
	},

	/**
	 * Opens the info popup
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	openInfoPopUp: function(node) {
		launchView('pages', node.attributes.nodeData.id);
	},

	/**
	 * Opens the history popup
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	openHistoryPopUp: function(node) {
		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			'show_rechis.php?element=pages:' + node.attributes.nodeData.id
		);
	},

	/**
	 * Opens the export .t3d file dialog
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	exportT3d: function(node) {
		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			'sysext/impexp/app/index.php?tx_impexp[action]=export&' +
				'id=0&tx_impexp[pagetree][id]=' + node.attributes.nodeData.id +
				'&tx_impexp[pagetree][levels]=0' +
				'&tx_impexp[pagetree][tables][]=_ALL'
		);
	},

	/**
	 * Opens the import .t3d file dialog
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	importT3d: function(node) {
		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			'sysext/impexp/app/index.php?id=' + node.attributes.nodeData.id +
				'&table=pages&tx_impexp[action]=import'
		);
	},

	/**
	 * Enables the cut mode of a node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	enableCutMode: function(node, tree) {
		this.disableCopyMode(node, tree);
		node.attributes.nodeData.t3InCutMode = true;
		tree.t3ContextInfo.inCutMode = true;
		tree.t3ContextNode = node;
	},

	/**
	 * Disables the cut mode of a node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	disableCutMode: function(node, tree) {
		this.releaseCutAndCopyModes(tree);
		node.attributes.nodeData.t3InCutMode = false;
	},

	/**
	 * Enables the copy mode of a node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	enableCopyMode: function(node, tree) {
		this.disableCutMode(node, tree);
		node.attributes.nodeData.t3InCopyMode = true;
		tree.t3ContextInfo.inCopyMode = true;
		tree.t3ContextNode = node;
	},

	/**
	 * Disables the copy mode of a node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	disableCopyMode: function(node, tree) {
		this.releaseCutAndCopyModes(tree);
		node.attributes.nodeData.t3InCopyMode = false;
	},

	/**
	 * Pastes the cut/copy context node into the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	pasteIntoNode: function(node, tree) {
		if (!tree.t3ContextNode) {
			return;
		}

		if (tree.t3ContextInfo.inCopyMode) {
			var newNode = tree.t3ContextNode = new Ext.tree.TreeNode(tree.t3ContextNode.attributes);
			newNode.id = 'fakeNode';
			node.insertBefore(newNode, node.childNodes[0]);
			node.attributes.nodeData.t3InCopyMode = false;
			this.copyNodeToFirstChildOfDestination(newNode, tree);

		} else if (tree.t3ContextInfo.inCutMode) {
			if (node.getPath().indexOf(tree.t3ContextNode.id) !== -1) {
				return;
			}

			node.appendChild(tree.t3ContextNode);
			node.attributes.nodeData.t3InCutMode = false;
			this.moveNodeToFirstChildOfDestination(node, tree);
		}
	},

	/**
	 * Pastes a cut/copy context node after the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	pasteAfterNode: function(node, tree) {
		if (!tree.t3ContextNode) {
			return;
		}

		if (tree.t3ContextInfo.inCopyMode) {
			var newNode = tree.t3ContextNode = new Ext.tree.TreeNode(tree.t3ContextNode.attributes);
			newNode.id = 'fakeNode';
			node.parentNode.insertBefore(newNode, node.nextSibling);
			node.attributes.nodeData.t3InCopyMode = false;
			this.copyNodeAfterDestination(newNode, tree);

		} else if (tree.t3ContextInfo.inCutMode) {
			if (node.getPath().indexOf(tree.t3ContextNode.id) !== -1) {
				return;
			}

			node.parentNode.insertBefore(tree.t3ContextNode, node.nextSibling);
			node.attributes.nodeData.t3InCutMode = false;
			this.moveNodeAfterDestination(node, tree);
		}
	},

	/**
	 * Moves the current tree context node after the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	moveNodeAfterDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.moveNodeAfterDestination(
			tree.t3ContextNode.attributes.nodeData,
			node.attributes.nodeData.id,
			function(response) {
				if (this.evaluateResponse(response) && tree.t3ContextNode) {
					this.updateNode(tree.t3ContextNode, tree.t3ContextNode.isExpanded(), response);
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Moves the current tree context node as the first child of the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	moveNodeToFirstChildOfDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.moveNodeToFirstChildOfDestination(
			tree.t3ContextNode.attributes.nodeData,
			node.attributes.nodeData.id,
			function(response) {
				if (this.evaluateResponse(response) && tree.t3ContextNode) {
					this.updateNode(tree.t3ContextNode, tree.t3ContextNode.isExpanded(), response);
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Inserts a new node after the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	insertNodeAfterDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.insertNodeAfterDestination(
			tree.t3ContextNode.attributes.nodeData,
			node.previousSibling.attributes.nodeData.id,
			tree.t3ContextInfo.serverNodeType,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, node.isExpanded(), response, function(node) {
						tree.triggerEdit(node);
					});
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Inserts a new node as the first child of the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	insertNodeToFirstChildOfDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.insertNodeToFirstChildOfDestination(
			tree.t3ContextNode.attributes.nodeData,
			tree.t3ContextInfo.serverNodeType,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, true, response, function(node) {
						tree.triggerEdit(node);
					});
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Copies the current tree context node after the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	copyNodeAfterDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.copyNodeAfterDestination(
			tree.t3ContextNode.attributes.nodeData,
			node.previousSibling.attributes.nodeData.id,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, true, response, function(node) {
						tree.triggerEdit(node);
					});
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Copies the current tree context node as the first child of the given node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	copyNodeToFirstChildOfDestination: function(node, tree) {
		TYPO3.Components.PageTree.Commands.copyNodeToFirstChildOfDestination(
			tree.t3ContextNode.attributes.nodeData,
			node.parentNode.attributes.nodeData.id,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, true, response, function(node) {
						tree.triggerEdit(node);
					});
				}
				this.releaseCutAndCopyModes(tree);
			},
			this
		);
	},

	/**
	 * Visibilizes a page
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	enablePage: function(node) {
		TYPO3.Components.PageTree.Commands.visiblyNode(
			node.attributes.nodeData,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, node.isExpanded(), response);
				}
			},
			this
		);
	},

	/**
	 * Disables a page
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @return {void}
	 */
	disablePage: function(node) {
		TYPO3.Components.PageTree.Commands.disableNode(
			node.attributes.nodeData,
			function(response) {
				if (this.evaluateResponse(response)) {
					this.updateNode(node, node.isExpanded(), response);
				}
			},
			this
		);
	},

	/**
	 * Reloads the content frame with the current module and node id
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @return {void}
	 */
	singleClick: function(node, tree) {
		tree.currentSelectedNode = node;

		var separator = '?';
		if (currentSubScript.indexOf('?') !== -1) {
			separator = '&';
		}

		node.select();
		if (tree.stateHash) {
			tree.stateHash.lastSelectedNode = node.id;
		}

		fsMod.recentIds['web'] = node.attributes.nodeData.id;

		TYPO3.Backend.ContentContainer.setUrl(
			TS.PATH_typo3 + currentSubScript + separator + 'id=' + node.attributes.nodeData.id
		);
	},

	/**
	 * Opens a configured url inside the content frame
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {TYPO3.Components.PageTree.Tree} tree
	 * @param {Object} contextItem
	 * @return {void}
	 */
	openCustomUrlInContentFrame: function(node, tree, contextItem) {
		if (!contextItem.customAttributes || !contextItem.customAttributes.contentUrl) {
			return;
		}

		node.select();
		TYPO3.Backend.ContentContainer.setUrl(
			contextItem.customAttributes.contentUrl.replace('###ID###', node.attributes.nodeData.id)
		);
	},

	/**
	 * Updates the title of a node
	 *
	 * @param {Ext.tree.TreeNode} node
	 * @param {String} newText
	 * @param {String} oldText
	 * @param {TYPO3.Components.PageTree.TreeEditor} treeEditor
	 * @return {void}
	 */
	saveTitle: function(node, newText, oldText, treeEditor) {
		this.singleClick(node.editNode, node.editNode.ownerTree);
		if (newText === oldText || newText == '') {
			treeEditor.updateNodeText(
				node,
				node.editNode.attributes.nodeData.editableText,
				Ext.util.Format.htmlEncode(oldText)
			);
			return;
		}

		TYPO3.Components.PageTree.Commands.updateLabel(
			node.editNode.attributes.nodeData,
			newText,
			function(response) {
				if (this.evaluateResponse(response)) {
					treeEditor.updateNodeText(node, response.editableText, response.updatedText);
				} else {
					treeEditor.updateNodeText(
						node,
						node.editNode.attributes.nodeData.editableText,
						Ext.util.Format.htmlEncode(oldText)
					);
				}
			},
			this
		);
	}
};
/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.ns('Ext.ux.state');

// dummy constructor
Ext.ux.state.TreePanel = function() {};

/**
 * State Provider for a tree panel
 */
Ext.override(Ext.ux.state.TreePanel, {
	/**
	 * Initializes the plugin
	 * @param {Ext.tree.TreePanel} tree
	 * @private
	 */
	init:function(tree) {
		tree.lastSelectedNode = null;
		tree.isRestoringState = false;
		tree.stateHash = {};

		// install event handlers on TreePanel
		tree.on({
			// add path of expanded node to stateHash
			 beforeexpandnode:function(n) {
				if (this.isRestoringState) {
					return;
				}
				var saveID = n.id;
				this.stateHash[saveID.substr(1)] = 1;
			},

			// delete path and all subpaths of collapsed node from stateHash
			beforecollapsenode:function(n) {
				if (this.isRestoringState) {
					return;
				}

				var deleteID = n.id;
				delete this.stateHash[deleteID.substr(1)];
			},

			beforeclick: function(node) {
				if (this.isRestoringState) {
					return;
				}
				this.stateHash['lastSelectedNode'] = node.id;
			}
		});

			// update state on node expand or collapse
		tree.stateEvents = tree.stateEvents || [];
		tree.stateEvents.push('expandnode', 'collapsenode', 'click');

		// add state related props to the tree
		Ext.apply(tree, {
			// keeps expanded nodes paths keyed by node.ids
			stateHash:{},

			restoreState: function() {
				this.isRestoringState = true;
					// get last selected node
				for (var pageID in this.stateHash) {
					var pageNode = this.getNodeById('p' + pageID);
					if (pageNode) {
						pageNode.on({
							expand: {
								single:true,
								scope:this,
								fn: this.restoreState
							}
						});
						if (pageNode.expanded === false && pageNode.rendered == true) {
							pageNode.expand();
						}
					}
				}
				if (this.stateHash['lastSelectedNode']) {
					var node = this.getNodeById(this.stateHash['lastSelectedNode']);
					if (node) {
						this.selectPath(node.getPath());

						var contentId = TYPO3.Backend.ContentContainer.getIdFromUrl() ||
							String(fsMod.recentIds['web']) || '-1';

						var isCurrentSelectedNode = (
							String(node.attributes.nodeData.id) === contentId ||
							contentId.indexOf('pages' + String(node.attributes.nodeData.id)) !== -1
						);

						if (contentId !== '-1' && !isCurrentSelectedNode && this.app.isVisible() &&
							this.commandProvider && this.commandProvider.singleClick
						) {
							this.commandProvider.singleClick(node, this);
						}
					}
				}

				this.isRestoringState = false;
			},

			// apply state on tree initialization
			applyState:function(state) {
				if(state) {
					Ext.apply(this, state);

					// it is too early to expand paths here
					// so do it once on root load
					this.root.on({
						load: {
							single:true,
							scope:this,
							fn: this.restoreState
						}
					});
				}
			},

			// returns stateHash for save by state manager
			getState:function() {
				return {stateHash:this.stateHash};
			}
		});
	}
});

/***************************************************************
*  Copyright notice
*
*  (c) 2010-2011 Stefan Galinski <stefan.galinski@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/
Ext.namespace('TYPO3.Components.PageTree');

/**
 * @class TYPO3.Components.PageTree.App
 *
 * Page tree main application that controls setups the components
 *
 * @namespace TYPO3.Components.PageTree
 * @extends Ext.Panel
 * @author Stefan Galinski <stefan.galinski@gmail.com>
 */
TYPO3.Components.PageTree.App = Ext.extend(Ext.Panel, {
	/**
	 * Panel id
	 *
	 * @type {String}
	 */
	id: 'typo3-pagetree',

	/**
	 * Border
	 *
	 * @type {Boolean}
	 */
	border: false,

	/**
	 * Layout Type
	 *
	 * @type {String}
	 */
	layout:'fit',

	/**
	 * Active tree
	 *
	 * @type {TYPO3.Components.PageTree.Tree}
	 */
	activeTree: null,

	/**
	 * Initializes the application
	 *
	 * Set's the necessary language labels, configuration options and sprite icons by an
	 * external call and initializes the needed components.
	 *
	 * @return {void}
	 */
	initComponent: function() {
		TYPO3.Components.PageTree.DataProvider.loadResources(function(response) {
			TYPO3.Components.PageTree.LLL = response['LLL'];
			TYPO3.Components.PageTree.Configuration = response['Configuration'];
			TYPO3.Components.PageTree.Sprites = response['Sprites'];

			var tree = this.activeTree = new TYPO3.Components.PageTree.Tree({
				id: this.id + '-tree',
				deletionDropZoneId: this.id + '-deletionDropZone',
				ddGroup: this.id,
				stateful: true,
				stateId: 'Pagetree' + TYPO3.Components.PageTree.Configuration.temporaryMountPoint,
				stateEvents: [],
				autoScroll: true,
				autoHeight: false,
				plugins: new Ext.ux.state.TreePanel(),
				commandProvider: TYPO3.Components.PageTree.Actions,
				contextMenuProvider: TYPO3.Components.PageTree.ContextMenuDataProvider,
				treeDataProvider: TYPO3.Components.PageTree.DataProvider,
				app: this,
				listeners: {
					resize: {
						fn: function() {
							var treeContainer = Ext.getCmp(this.id + '-treeContainer');
							Ext.getCmp(this.id + '-filteringTree').setSize(treeContainer.getSize());
							treeContainer.doLayout();
						},
						scope: this,
						buffer: 250
					}
				}
			});

			var filteringTree = new TYPO3.Components.PageTree.FilteringTree({
				id: this.id + '-filteringTree',
				deletionDropZoneId: this.id + '-deletionDropZone',
				ddGroup: this.id,
				autoScroll: true,
				autoHeight: false,
				commandProvider: TYPO3.Components.PageTree.Actions,
				contextMenuProvider: TYPO3.Components.PageTree.ContextMenuDataProvider,
				treeDataProvider: TYPO3.Components.PageTree.DataProvider,
				app: this
			}).hide();

			var topPanel = new TYPO3.Components.PageTree.TopPanel({
				dataProvider: TYPO3.Components.PageTree.DataProvider,
				filteringTree: filteringTree,
				ddGroup: this.id,
				tree: tree,
				app: this
			});

			var deletionDropZone = new TYPO3.Components.PageTree.DeletionDropZone({
				id: this.id + '-deletionDropZone',
				commandProvider: TYPO3.Components.PageTree.Actions,
				ddGroup: this.id,
				app: this,
				region: 'south',
				height: 35
			});

			var topPanelItems = new Ext.Panel({
				id: this.id + '-topPanelItems',
				border: false,
				region: 'north',
				height: 49,
				items: [
					topPanel, {
						border: false,
						id: this.id + '-indicatorBar'
					}
				]
			});

			this.add({
				layout: 'border',
				items: [
					topPanelItems,
					{
						border: false,
						id: this.id + '-treeContainer',
						region: 'center',
						layout: 'fit',
						items: [tree, filteringTree]
					},
					deletionDropZone
				]
			});

			if (TYPO3.Components.PageTree.Configuration.temporaryMountPoint) {
				topPanelItems.on('afterrender', function() {
					this.addTemporaryMountPointIndicator();
				}, this);
			}

			if (TYPO3.Components.PageTree.Configuration.indicator !== '') {
				this.addIndicatorItems();
			}
			this.doLayout();

			this.ownerCt.on('resize', function() {
				this.doLayout();
			});
		}, this);

		TYPO3.Components.PageTree.App.superclass.initComponent.apply(this, arguments);
	},

	/**
	 * Adds the default indicator items
	 *
	 * @return {void}
	 */
	addIndicatorItems: function() {
		this.addIndicator({
			border: false,
			id: this.id + '-indicatorBar-indicatorTitle',
			cls: this.id + '-indicatorBar-item',
			html: TYPO3.Components.PageTree.Configuration.indicator
		});
	},

	/**
	 * Adds the temporary mount point indicator item
	 *
	 * @return {void}
	 */
	addTemporaryMountPointIndicator: function() {
		this.temporaryMountPointInfoIndicator = this.addIndicator({
			border: false,
			id: this.id + '-indicatorBar-temporaryMountPoint',
			cls: this.id + '-indicatorBar-item',

			listeners: {
				afterrender: {
					fn: function() {
						var element = Ext.fly(this.id + '-indicatorBar-temporaryMountPoint-clear');
						element.on('click', function() {
							TYPO3.BackendUserSettings.ExtDirect.unsetKey(
								'pageTree_temporaryMountPoint',
								function() {
									TYPO3.Components.PageTree.Configuration.temporaryMountPoint = null;
									this.removeIndicator(this.temporaryMountPointInfoIndicator);
									this.getTree().refreshTree();
									this.getTree().stateId = 'Pagetree';
								},
								this
							);
						}, this);
					},
					scope: this
				}
			},

			html: '<p>' +
					'<span id="' + this.id + '-indicatorBar-temporaryMountPoint-info' + '" ' +
						'class="' + this.id + '-indicatorBar-item-leftIcon ' +
							TYPO3.Components.PageTree.Sprites.Info + '">&nbsp;' +
					'</span>' +
					'<span id="' + this.id + '-indicatorBar-temporaryMountPoint-clear' + '" ' +
						'class="' + this.id + '-indicatorBar-item-rightIcon ' + '">X' +
					'</span>' +
					TYPO3.Components.PageTree.LLL.temporaryMountPointIndicatorInfo + '<br />' +
						TYPO3.Components.PageTree.Configuration.temporaryMountPoint +
				'</p>'
		});
	},

	/**
	 * Adds an indicator item
	 *
	 * @param {Object} component
	 * @return {void}
	 */
	addIndicator: function(component) {
		if (component.listeners && component.listeners.afterrender) {
			component.listeners.afterrender.fn = component.listeners.afterrender.fn.createSequence(
				this.afterTopPanelItemAdded, this
			);
		} else {
			if (component.listeners) {
				component.listeners = {}
			}

			component.listeners.afterrender = {
				scope: this,
				fn: this.afterTopPanelItemAdded
			}
		}

		var indicator = Ext.getCmp(this.id + '-indicatorBar').add(component);
		this.doLayout();

		return indicator;
	},

	/**
	 * Recalculates the top panel items height after an indicator was added
	 *
	 * @param {Ext.Component} component
	 * @return {void}
	 */
	afterTopPanelItemAdded: function(component) {
		var topPanelItems = Ext.getCmp(this.id + '-topPanelItems');
		topPanelItems.setHeight(topPanelItems.getHeight() + component.getHeight() + 3);
		this.doLayout();
	},

	/**
	 * Removes an indicator item from the indicator bar
	 *
	 * @param {Ext.Component} component
	 * @return {void}
	 */
	removeIndicator: function(component) {
		var topPanelItems = Ext.getCmp(this.id + '-topPanelItems');
		topPanelItems.setHeight(topPanelItems.getHeight() - component.getHeight() - 3);
		Ext.getCmp(this.id + '-indicatorBar').remove(component);
		this.doLayout();
	},

	/**
	 * Compatibility method that calls refreshTree()
	 *
	 * @return {void}
	 */
	refresh: function() {
		this.refreshTree();
	},

	/**
	 * Another compatibility method that calls refreshTree()
	 *
	 * @return {void}
	 */
	refresh_nav: function() {
		this.refreshTree();
	},

	/**
	 * Refreshes the tree and selects the node defined by fsMod.recentIds['web']
	 *
	 * @return {void}
	 */
	refreshTree: function() {
		if (!isNaN(fsMod.recentIds['web']) && fsMod.recentIds['web'] !== '') {
			this.select(fsMod.recentIds['web'], true);
		}

		TYPO3.Components.PageTree.DataProvider.getIndicators(function(response) {
			var indicators = Ext.getCmp(this.id + '-indicatorBar-indicatorTitle');
			if (indicators) {
				this.removeIndicator(indicators);
			}

			if (response._COUNT > 0) {
				TYPO3.Components.PageTree.Configuration.indicator = response.html;
				this.addIndicatorItems();
			}
		}, this);

		this.activeTree.refreshTree();
	},

	/**
	 * Returns the current active tree
	 *
	 * @return {TYPO3.Components.PageTree.Tree}
	 */
	getTree: function() {
		return this.activeTree;
	},

	/**
	 * Selects a node defined by the page id. If the second parameter is set, we
	 * store the new location into the state hash.
	 *
	 * @param {int} pageId
	 * @param {Boolean} saveState
	 * @return {Boolean}
	 */
	select: function(pageId, saveState) {
		if (saveState !== false) {
			saveState = true;
		}

		var tree = this.getTree();
		var succeeded = false;
		var node = tree.getRootNode().findChild('realId', pageId, true);
		if (node) {
			succeeded = true;
			tree.selectPath(node.getPath());
			if (!!saveState && tree.stateHash) {
				tree.stateHash.lastSelectedNode = node.id;
			}
		}

		return succeeded;
	},

	/**
	 * Returns the currently selected node
	 *
	 * @return {Ext.tree.TreeNode}
	 */
	getSelected: function() {
		var node = this.getTree().getSelectionModel().getSelectedNode();
		return node ? node : null;
	}
});

/**
 * Callback method for the module menu
 *
 * @return {TYPO3.Components.PageTree.App}
 */
TYPO3.ModuleMenu.App.registerNavigationComponent('typo3-pagetree', function() {
	TYPO3.Backend.NavigationContainer.PageTree = new TYPO3.Components.PageTree.App();

		// compatibility code
    top.nav = TYPO3.Backend.NavigationContainer.PageTree;
    top.nav_frame = TYPO3.Backend.NavigationContainer.PageTree;
    top.content.nav_frame = TYPO3.Backend.NavigationContainer.PageTree;

	return TYPO3.Backend.NavigationContainer.PageTree;
});

// XTYPE Registration
Ext.reg('TYPO3.Components.PageTree.App', TYPO3.Components.PageTree.App);

/*
 * This code has been copied from Project_CMS
 * Copyright (c) 2005 by Phillip Berndt (www.pberndt.com)
 *
 * Extended Textarea for IE and Firefox browsers
 * Features:
 *  - Possibility to place tabs in <textarea> elements using a simply <TAB> key
 *  - Auto-indenting of new lines
 *
 * License: GNU General Public License
 */

function checkBrowser()	{
	browserName = navigator.appName;
	browserVer = parseInt(navigator.appVersion);

	ok=false;
	if (browserName == "Microsoft Internet Explorer" && browserVer >= 4)	ok=true;
	else if (browserName == "Netscape" && browserVer >= 3)	ok=true;

	return ok;
}

	// Automatically change all textarea elements
function changeTextareaElements()	{
	if(!checkBrowser()) return false;	// Stop unless we're using IE or Netscape (includes Mozilla family)

	document.textAreas = document.getElementsByTagName("textarea");

	for(i=0; i<document.textAreas.length; i++)	{
			// Only change if the class parameter contains "enable-tab"
		if(document.textAreas[i].className && document.textAreas[i].className.search(/(^| )enable-tab( |$)/) != -1)	{
			document.textAreas[i].textAreaID = i;
			makeAdvancedTextArea(document.textAreas[i]);
		}
	}
}

	// Wait until the document is completely loaded.
	// Set a timeout instead of using the onLoad() event because it could be used by something else already.
window.setTimeout("changeTextareaElements();", 200);

	// Turn textarea elements into "better" ones. Actually this is just adding some lines of JavaScript...
function makeAdvancedTextArea(textArea)	{
	if(textArea.tagName.toLowerCase() != "textarea") return false;

		// On attempt to leave the element:
		// Do not leave if this.dontLeave is true
	textArea.onblur = function(e)	{
		if(!this.dontLeave) return;
		this.dontLeave = null;
		window.setTimeout("document.textAreas[" + this.textAreaID + "].restoreFocus()", 1);
		return false;
	}

		// Set the focus back to the element and move the cursor to the correct position.
	textArea.restoreFocus = function()	{
		this.focus();

		if(this.caretPos)	{
			this.caretPos.collapse(false);
			this.caretPos.select();
		}
	}

		// Determine the current cursor position
	textArea.getCursorPos = function()	{
		if(this.selectionStart)	{
			currPos = this.selectionStart;
		} else if(this.caretPos)	{	// This is very tricky in IE :-(
			oldText = this.caretPos.text;
			finder = "--getcurrpos" + Math.round(Math.random() * 10000) + "--";
			this.caretPos.text += finder;
			currPos = this.value.indexOf(finder);

			this.caretPos.moveStart('character', -finder.length);
			this.caretPos.text = "";

			this.caretPos.scrollIntoView(true);
		} else return;

		return currPos;
	}

		// On tab, insert a tabulator. Otherwise, check if a slash (/) was pressed.
	textArea.onkeydown = function(e)	{
		if(this.selectionStart == null &! this.createTextRange) return;
		if(!e) e = window.event;

			// Tabulator
		if(e.keyCode == 9)	{
			this.dontLeave = true;
			this.textInsert(String.fromCharCode(9));
		}

			// Newline
		if(e.keyCode == 13)	{
				// Get the cursor position
			currPos = this.getCursorPos();

				// Search the last line
			lastLine = "";
			for(i=currPos-1;i>=0;i--)	{
				if(this.value.substring(i, i + 1) == '\n') break;
			}
			lastLine = this.value.substring(i + 1, currPos);

				// Search for whitespaces in the current line
			whiteSpace = "";
			for(i=0;i<lastLine.length;i++)	{
				if(lastLine.substring(i, i + 1) == '\t') whiteSpace += "\t";
				else if(lastLine.substring(i, i + 1) == ' ') whiteSpace += " ";
				else break;
			}

				// Another ugly IE hack
			if(navigator.appVersion.match(/MSIE/))	{
				whiteSpace = "\\n" + whiteSpace;
			}

				// Insert whitespaces
			window.setTimeout("document.textAreas["+this.textAreaID+"].textInsert(\""+whiteSpace+"\");", 1);
		}
	}

		// Save the current cursor position in IE
	textArea.onkeyup = textArea.onclick = textArea.onselect = function(e)	{
		if(this.createTextRange)	{
			this.caretPos = document.selection.createRange().duplicate();
		}
	}

		// Insert text at the current cursor position
	textArea.textInsert = function(insertText)	{
		if(this.selectionStart != null)	{
			var savedScrollTop = this.scrollTop;
			var begin = this.selectionStart;
			var end = this.selectionEnd;
			if(end > begin + 1)	{
				this.value = this.value.substr(0, begin) + insertText + this.value.substr(end);
			} else {
				this.value = this.value.substr(0, begin) + insertText + this.value.substr(begin);
			}

			this.selectionStart = begin + insertText.length;
			this.selectionEnd = begin + insertText.length;
			this.scrollTop = savedScrollTop;
		} else if(this.caretPos)	{
			this.caretPos.text = insertText;
			this.caretPos.scrollIntoView(true);
		} else {
			text.value += insertText;
		}

		this.focus();
	}
}

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3', 'TYPO3.CSH.ExtDirect');

/**
 * Class to show tooltips for links that have the css t3-help-link
 * need the tags data-table and data-field (HTML5)
 */


TYPO3.ContextHelp = function() {

	/**
	 * Cache for CSH
	 * @type {Ext.util.MixedCollection}
	 */
	var cshHelp = new Ext.util.MixedCollection(true),
	tip;

	/**
	 * Shows the tooltip, triggered from mouseover event handler
	 *
	 */
	function showToolTipHelp() {
		var link = tip.triggerElement;
		if (!link) {
			return false;
		}
		var table = link.getAttribute('data-table');
		var field = link.getAttribute('data-field');
		var key = table + '.' + field;
		var response = cshHelp.key(key);
		tip.target = tip.triggerElement;
		if (response) {
			updateTip(response);
		} else {
				// If a table is defined, use ExtDirect call to get the tooltip's content
			if (table) {
					// Clear old tooltip contents
				updateTip({
					description: top.TYPO3.LLL.core.csh_tooltip_loading,
					cshLink: '',
					moreInfo: '',
					title: ''
				});
					// Load content
				TYPO3.CSH.ExtDirect.getTableContextHelp(table, function(response, options) {
					Ext.iterate(response, function(key, value){
						cshHelp.add(value);
						if (key === field) {
							updateTip(value);
								// Need to re-position because the height may have increased
							tip.show();
						}
					});
				}, this);

				// No table was given, use directly title and description
			} else {
				updateTip({
					description: link.getAttribute('data-description'),
					cshLink: '',
					moreInfo: '',
					title: link.getAttribute('data-title')
				});
			}
		}
	}

	/**
	 * Update tooltip message
	 *
	 * @param {Object} response
	 */
	function updateTip(response) {
		tip.body.dom.innerHTML = response.description;
		tip.cshLink = response.id;
		tip.moreInfo = response.moreInfo;
		if (tip.moreInfo) {
			tip.addClass('tipIsLinked');
		}
		tip.setTitle(response.title);
		tip.doAutoWidth();
	}


	return {
		/**
		 * Constructor
		 */
		init: function() {
			tip = new Ext.ToolTip({
				title: 'CSH', // needs a title for init because of the markup
				html: '',
					// The tooltip will appear above the label, if viewport allows
				anchor: 'bottom',
				minWidth: 160,
				maxWidth: 240,
				target: Ext.getBody(),
				delegate: 'span.t3-help-link',
				renderTo: Ext.getBody(),
				cls: 'typo3-csh-tooltip',
				shadow: false,
				dismissDelay: 0, // tooltip stays while mouse is over target
				autoHide: true,
				showDelay: 1000, // show after 1 second
				hideDelay: 300, // hide after 0.3 seconds
				closable: true,
				isMouseOver: false,
				listeners: {
					beforeshow: showToolTipHelp,
					render: function(tip) {
						tip.body.on({
							'click': {
								fn: function(event) {
									event.stopEvent();
									if (tip.moreInfo) {
										try {
											top.TYPO3.ContextHelpWindow.open(tip.cshLink);
										} catch(e) {
											// do nothing
										}
									}
									tip.hide();
								}
							}
						});
						tip.el.on({
							'mouseover': {
								fn: function() {
									if (tip.moreInfo) {
										tip.isMouseOver = true;
									}
								}
							},
							'mouseout': {
								fn: function() {
									if (tip.moreInfo) {
										tip.isMouseOver = false;
										tip.hide.defer(tip.hideDelay, tip, []);
									}
								}
							}
						});
					},
					hide: function(tip) {
						tip.setTitle('');
						tip.body.dom.innerHTML = '';
					},
					beforehide: function(tip) {
						return !tip.isMouseOver;
					},
					scope: this
				}
			});

			Ext.getBody().on({
				'keydown': {
					fn: function() {
						tip.hide();
					}
				},
				'click': {
					fn: function() {
						tip.hide();
					}
				}
			});

			/**
			 * Adds a sequence to Ext.TooltTip::showAt so as to increase vertical offset when anchor position is 'botton'
			 * This positions the tip box closer to the target element when the anchor is on the bottom side of the box
			 * When anchor position is 'top' or 'bottom', the anchor is pushed slightly to the left in order to align with the help icon, if any
			 *
			 */
			Ext.ToolTip.prototype.showAt = Ext.ToolTip.prototype.showAt.createSequence(
				function() {
					var ap = this.getAnchorPosition().charAt(0);
					if (this.anchorToTarget && !this.trackMouse) {
						switch (ap) {
							case 'b':
								var xy = this.getPosition();
								this.setPagePosition(xy[0]-10, xy[1]+5);
								break;
							case 't':
								var xy = this.getPosition();
								this.setPagePosition(xy[0]-10, xy[1]);
								break;
						}
					}
				}
			);

		},

		/**
		 * Opens the help window, triggered from click event handler
		 *
		 * @param {Event} event
		 * @param {Node} link
		 */
		openHelpWindow: function(event, link) {
			var id = link.getAttribute('data-table') + '.' + link.getAttribute('data-field');
			event.stopEvent();
			top.TYPO3.ContextHelpWindow.open(id);
		}
	}
}();

/**
 * Calls the init on Ext.onReady
 */
Ext.onReady(TYPO3.ContextHelp.init, TYPO3.ContextHelp);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010-2011 Steffen Kamper <steffen@typo3.org>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

Ext.ns('TYPO3.state');

/**
 * Creates new ExtDirectProvider
 * @constructor
 * @param {Object} config Configuration object
 * @author Jozef Sakalos
 * @author Steffen Kamper
 */

TYPO3.state.ExtDirectProvider = function(config) {

	this.addEvents(
		/**
		 * @event readsuccess
		 * Fires after state has been successfully received from server and restored
		 * @param {HttpProvider} this
		 */
			'readsuccess',
		/**
		 * @event readfailure
		 * Fires in the case of an error when attempting to read state from server
		 * @param {HttpProvider} this
		 */
			'readfailure',
		/**
		 * @event savesuccess
		 * Fires after the state has been successfully saved to server
		 * @param {HttpProvider} this
		 */
			'savesuccess',
		/**
		 * @event savefailure
		 * Fires in the case of an error when attempting to save state to the server
		 * @param {HttpProvider} this
		 */
			'savefailure'
			);

		// call parent
	TYPO3.state.ExtDirectProvider.superclass.constructor.call(this);

	Ext.apply(this, config, {
		// defaults
		delay: 750, // buffer changes for 750 ms
		dirty: false,
		started: false,
		autoStart: true,
		autoRead: true,
		key: 'States.General',
		logFailure: false,
		logSuccess: false,
		queue: [],
		saveBaseParams: {},
		readBaseParams: {},
		paramNames:{
			key: 'key',
			name: 'name',
			value: 'value',
			data: 'data'
		}
	});

	if (this.autoRead) {
		this.readState();
	}

	this.dt = new Ext.util.DelayedTask(this.submitState, this);
	if (this.autoStart) {
		this.start();
	}
};


Ext.extend(TYPO3.state.ExtDirectProvider, Ext.state.Provider, {

		// localizable texts
	saveSuccessText: 'Save Success',
	saveFailureText: 'Save Failure',
	readSuccessText: 'Read Success',
	readFailureText: 'Read Failure',
	dataErrorText: 'Data Error',



	/**
	 * Initializes state from the passed state object or array.
	 * Use this with loading page using initial state in TYPO3.settings
	 *
	 * @param {Array/Object} state State to initialize state manager with
	 */
	initState: function(state) {
		if (Ext.isArray(state)) {
			Ext.each(state, function(item) {
				this.state[item.name] = item[this.paramNames.value];
			}, this);
		} else if (Ext.isObject(state)) {
			Ext.iterate(state, function(key, value){
				this.state[key] = value;
			}, this);
		} else {
			this.state = {};
		}
	},

	/**
	 * Sets the passed state variable name to the passed value and queues the change
	 * @param {String} name Name of the state variable
	 * @param {Mixed} value Value of the state variable
	 */
	set: function(name, value) {
		if (!name) {
			return;
		}
		this.queueChange(name, value);
	},


	/**
	 * Starts submitting state changes to server
	 */
	start: function() {
		this.dt.delay(this.delay);
		this.started = true;
	},


	/**
	 * Stops submitting state changes
	 */
	stop: function() {
		this.dt.cancel();
		this.started = false;
	},


	/**
	 * private, queues the state change if state has changed
	 */
	queueChange: function(name, value) {
		var o = {};
		var i;
		var found = false;


		var lastValue = this.state[name];
		for (i = 0; i < this.queue.length; i++) {
			if (this.queue[i].name === name) {
				lastValue = this.queue[i].value;
			}
		}
		var changed = undefined === lastValue || lastValue !== value;

		if (changed) {
			o[this.paramNames.name] = name;
			o[this.paramNames.value] = value;
			for (i = 0; i < this.queue.length; i++) {
				if (this.queue[i].name === o.name) {
					this.queue[i] = o;
					found = true;
				}
			}
			if (false === found) {
				this.queue.push(o);
			}
			this.dirty = true;
		}
		if (this.started) {
			this.start();
		}
		return changed;
	},


	/**
	 * private, submits state to server by asynchronous Ajax request
	 */
	submitState: function() {
		if (!this.dirty) {
			this.dt.delay(this.delay);
			return;
		}
		this.dt.cancel();

		var o = {
			scope: this,
			success: this.onSaveSuccess,
			failure: this.onSaveFailure,
			queue: this.queue, //this.clone(this.queue),
			params: {}
		};

		var params = Ext.apply({}, this.saveBaseParams);
		params[this.paramNames.key] = this.key;
		params[this.paramNames.data] = Ext.encode(o.queue);

		Ext.apply(o.params, params);

		// be optimistic
		this.dirty = false;

	   TYPO3.ExtDirectStateProvider.ExtDirect.setState(o, function(response, options) {
		   if (response.success) {
				this.onSaveSuccess(response, options);
		   } else {
				this.onSaveFailure(response, options);
		   }
	   }, this);
	},


	/**
	 * Clears the state variable
	 * @param {String} name Name of the variable to clear
	 */
	clear: function(name) {
		this.set(name, undefined);
	},


	/**
	 * private, save success callback
	 */
	onSaveSuccess: function(response, options) {
		var o = response;
		if (!o.success) {
			if (this.logFailure) {
				this.log(this.saveFailureText, o, response);
			}
			this.dirty = true;
		} else {
			Ext.each(response.params.queue, function(item) {
				if (!item) {
					return;
				}
				var name = item[this.paramNames.name];
				var value = item[this.paramNames.value];

				if (value === undefined  || value === null) {
					TYPO3.state.ExtDirectProvider.superclass.clear.call(this, name);
				} else {
						// parent sets value and fires event
					TYPO3.state.ExtDirectProvider.superclass.set.call(this, name, value);
				}
			}, this);
			if (!this.dirty) {
				this.queue = [];
			}else {
				var i, j, found;
				for (i = 0; i < response.params.queue.length; i++) {
					found = false;
					for (j = 0; j < this.queue.length; j++) {
						if (response.params.queue[i].name === this.queue[j].name) {
							found = true;
							break;
						}
					}
					if (found && response.params.queue[i].value === this.queue[j].value) {
						this.queue.remove(this.queue[j]);
					}
				}
			}
			if (this.logSuccess) {
				this.log(this.saveSuccessText, o, response);
			}
			this.fireEvent('savesuccess', this);
		}
	},


	/**
	 * private, save failure callback
	 */
	onSaveFailure: function(response, options) {
		if (true === this.logFailure) {
			this.log(this.saveFailureText, response);
		}
		this.dirty = true;
		this.fireEvent('savefailure', this);
	},


	/**
	 * private, read state callback
	 */
	onReadFailure: function(response, options) {
		if (this.logFailure) {
			this.log(this.readFailureText, response);
		}
		this.fireEvent('readfailure', this);

	},


	/**
	 * private, read success callback
	 */
	onReadSuccess: function(response, options) {
		var o = response, data;
		if (!o.success) {
			if (this.logFailure) {
				this.log(this.readFailureText, o, response);
			}
		} else {
			data = o[this.paramNames.data];
			Ext.iterate(data, function(key, value) {
				this.state[key] = value;
			}, this);
			this.queue = [];
			this.dirty = false;
			if (this.logSuccess) {
				this.log(this.readSuccessText, data, response);
			}
			this.fireEvent('readsuccess', this);
		}
	},


	/**
	 * Reads saved state from server by sending asynchronous Ajax request and processing the response
	 */
	readState: function() {
		var o = {
			scope: this,
			params:{}
		};

		var params = Ext.apply({}, this.readBaseParams);
		params[this.paramNames.key] = this.key;

		Ext.apply(o.params, params);
		TYPO3.ExtDirectStateProvider.ExtDirect.getState(o, function(response, options) {
		   if (response.success) {
				this.onReadSuccess(response, options);
		   } else {
				this.onReadFailure(response, options);
		   }
	   }, this);
	},


	/**
	 * private, logs errors or successes
	 */
	log: function() {
		if (console) {
			console.log.apply(console, arguments);
		}
	},

	logState: function() {
	   if (console) {
			console.log(this.state);
		}
	}

});
