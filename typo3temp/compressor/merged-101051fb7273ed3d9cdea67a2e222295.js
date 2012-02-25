
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

/* CodeMirror main module (http://codemirror.net/)
 *
 * Implements the CodeMirror constructor and prototype, which take care
 * of initializing the editor frame, and providing the outside interface.
 */

// The CodeMirrorConfig object is used to specify a default
// configuration. If you specify such an object before loading this
// file, the values you put into it will override the defaults given
// below. You can also assign to it after loading.
var CodeMirrorConfig = window.CodeMirrorConfig || {};

var CodeMirror = (function(){
  function setDefaults(object, defaults) {
    for (var option in defaults) {
      if (!object.hasOwnProperty(option))
        object[option] = defaults[option];
    }
  }
  function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
      action(array[i]);
  }
  function createHTMLElement(el) {
    if (document.createElementNS && document.documentElement.namespaceURI !== null)
      return document.createElementNS("http://www.w3.org/1999/xhtml", el)
    else
      return document.createElement(el)
  }

  // These default options can be overridden by passing a set of
  // options to a specific CodeMirror constructor. See manual.html for
  // their meaning.
  setDefaults(CodeMirrorConfig, {
    stylesheet: [],
    path: "",
    parserfile: [],
    basefiles: ["util.js", "stringstream.js", "select.js", "undo.js", "editor.js", "tokenize.js"],
    iframeClass: null,
    passDelay: 200,
    passTime: 50,
    lineNumberDelay: 200,
    lineNumberTime: 50,
    continuousScanning: false,
    saveFunction: null,
    onLoad: null,
    onChange: null,
    undoDepth: 50,
    undoDelay: 800,
    disableSpellcheck: true,
    textWrapping: true,
    readOnly: false,
    width: "",
    height: "300px",
    minHeight: 100,
    autoMatchParens: false,
    markParen: null,
    unmarkParen: null,
    parserConfig: null,
    tabMode: "indent", // or "spaces", "default", "shift"
    enterMode: "indent", // or "keep", "flat"
    electricChars: true,
    reindentOnLoad: false,
    activeTokens: null,
    onCursorActivity: null,
    lineNumbers: false,
    firstLineNumber: 1,
    onLineNumberClick: null,
    indentUnit: 2,
    domain: null,
    noScriptCaching: false,
    incrementalLoading: false
  });

  function addLineNumberDiv(container, firstNum) {
    var nums = createHTMLElement("div"),
        scroller = createHTMLElement("div");
    nums.style.position = "absolute";
    nums.style.height = "100%";
    if (nums.style.setExpression) {
      try {nums.style.setExpression("height", "this.previousSibling.offsetHeight + 'px'");}
      catch(e) {} // Seems to throw 'Not Implemented' on some IE8 versions
    }
    nums.style.top = "0px";
    nums.style.left = "0px";
    nums.style.overflow = "hidden";
    container.appendChild(nums);
    scroller.className = "CodeMirror-line-numbers";
    nums.appendChild(scroller);
    scroller.innerHTML = "<div>" + firstNum + "</div>";
    return nums;
  }

  function frameHTML(options) {
    if (typeof options.parserfile == "string")
      options.parserfile = [options.parserfile];
    if (typeof options.basefiles == "string")
      options.basefiles = [options.basefiles];
    if (typeof options.stylesheet == "string")
      options.stylesheet = [options.stylesheet];

    var sp = " spellcheck=\"" + (options.disableSpellcheck ? "false" : "true") + "\"";
    var html = ["<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"><html" + sp + "><head>"];
    // Hack to work around a bunch of IE8-specific problems.
    html.push("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\"/>");
    var queryStr = options.noScriptCaching ? "?nocache=" + new Date().getTime().toString(16) : "";
    forEach(options.stylesheet, function(file) {
      html.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + file + queryStr + "\"/>");
    });
    forEach(options.basefiles.concat(options.parserfile), function(file) {
      if (!/^https?:/.test(file)) file = options.path + file;
      html.push("<script type=\"text/javascript\" src=\"" + file + queryStr + "\"><" + "/script>");
    });
    html.push("</head><body style=\"border-width: 0;\" class=\"editbox\"" + sp + "></body></html>");
    return html.join("");
  }

  var internetExplorer = document.selection && window.ActiveXObject && /MSIE/.test(navigator.userAgent);

  function CodeMirror(place, options) {
    // Use passed options, if any, to override defaults.
    this.options = options = options || {};
    setDefaults(options, CodeMirrorConfig);

    // Backward compatibility for deprecated options.
    if (options.dumbTabs) options.tabMode = "spaces";
    else if (options.normalTab) options.tabMode = "default";
    if (options.cursorActivity) options.onCursorActivity = options.cursorActivity;

    var frame = this.frame = createHTMLElement("iframe");
    if (options.iframeClass) frame.className = options.iframeClass;
    frame.frameBorder = 0;
    frame.style.border = "0";
    frame.style.width = '100%';
    frame.style.height = '100%';
    // display: block occasionally suppresses some Firefox bugs, so we
    // always add it, redundant as it sounds.
    frame.style.display = "block";

    var div = this.wrapping = createHTMLElement("div");
    div.style.position = "relative";
    div.className = "CodeMirror-wrapping";
    div.style.width = options.width;
    div.style.height = (options.height == "dynamic") ? options.minHeight + "px" : options.height;
    // This is used by Editor.reroutePasteEvent
    var teHack = this.textareaHack = createHTMLElement("textarea");
    div.appendChild(teHack);
    teHack.style.position = "absolute";
    teHack.style.left = "-10000px";
    teHack.style.width = "10px";
    teHack.tabIndex = 100000;

    // Link back to this object, so that the editor can fetch options
    // and add a reference to itself.
    frame.CodeMirror = this;
    if (options.domain && internetExplorer) {
      this.html = frameHTML(options);
      frame.src = "javascript:(function(){document.open();" +
        (options.domain ? "document.domain=\"" + options.domain + "\";" : "") +
        "document.write(window.frameElement.CodeMirror.html);document.close();})()";
    }
    else {
      frame.src = "javascript:;";
    }

    if (place.appendChild) place.appendChild(div);
    else place(div);
    div.appendChild(frame);
    if (options.lineNumbers) this.lineNumbers = addLineNumberDiv(div, options.firstLineNumber);

    this.win = frame.contentWindow;
    if (!options.domain || !internetExplorer) {
      this.win.document.open();
      this.win.document.write(frameHTML(options));
      this.win.document.close();
    }
  }

  CodeMirror.prototype = {
    init: function() {
      // Deprecated, but still supported.
      if (this.options.initCallback) this.options.initCallback(this);
      if (this.options.onLoad) this.options.onLoad(this);
      if (this.options.lineNumbers) this.activateLineNumbers();
      if (this.options.reindentOnLoad) this.reindent();
      if (this.options.height == "dynamic") this.setDynamicHeight();
    },

    getCode: function() {return this.editor.getCode();},
    setCode: function(code) {this.editor.importCode(code);},
    selection: function() {this.focusIfIE(); return this.editor.selectedText();},
    reindent: function() {this.editor.reindent();},
    reindentSelection: function() {this.focusIfIE(); this.editor.reindentSelection(null);},

    focusIfIE: function() {
      // in IE, a lot of selection-related functionality only works when the frame is focused
      if (this.win.select.ie_selection && document.activeElement != this.frame)
        this.focus();
    },
    focus: function() {
      this.win.focus();
      if (this.editor.selectionSnapshot) // IE hack
        this.win.select.setBookmark(this.win.document.body, this.editor.selectionSnapshot);
    },
    replaceSelection: function(text) {
      this.focus();
      this.editor.replaceSelection(text);
      return true;
    },
    replaceChars: function(text, start, end) {
      this.editor.replaceChars(text, start, end);
    },
    getSearchCursor: function(string, fromCursor, caseFold) {
      return this.editor.getSearchCursor(string, fromCursor, caseFold);
    },

    undo: function() {this.editor.history.undo();},
    redo: function() {this.editor.history.redo();},
    historySize: function() {return this.editor.history.historySize();},
    clearHistory: function() {this.editor.history.clear();},

    grabKeys: function(callback, filter) {this.editor.grabKeys(callback, filter);},
    ungrabKeys: function() {this.editor.ungrabKeys();},

    setParser: function(name, parserConfig) {this.editor.setParser(name, parserConfig);},
    setSpellcheck: function(on) {this.win.document.body.spellcheck = on;},
    setStylesheet: function(names) {
      if (typeof names === "string") names = [names];
      var activeStylesheets = {};
      var matchedNames = {};
      var links = this.win.document.getElementsByTagName("link");
      // Create hashes of active stylesheets and matched names.
      // This is O(n^2) but n is expected to be very small.
      for (var x = 0, link; link = links[x]; x++) {
        if (link.rel.indexOf("stylesheet") !== -1) {
          for (var y = 0; y < names.length; y++) {
            var name = names[y];
            if (link.href.substring(link.href.length - name.length) === name) {
              activeStylesheets[link.href] = true;
              matchedNames[name] = true;
            }
          }
        }
      }
      // Activate the selected stylesheets and disable the rest.
      for (var x = 0, link; link = links[x]; x++) {
        if (link.rel.indexOf("stylesheet") !== -1) {
          link.disabled = !(link.href in activeStylesheets);
        }
      }
      // Create any new stylesheets.
      for (var y = 0; y < names.length; y++) {
        var name = names[y];
        if (!(name in matchedNames)) {
          var link = this.win.document.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = name;
          this.win.document.getElementsByTagName('head')[0].appendChild(link);
        }
      }
    },
    setTextWrapping: function(on) {
      if (on == this.options.textWrapping) return;
      this.win.document.body.style.whiteSpace = on ? "" : "nowrap";
      this.options.textWrapping = on;
      if (this.lineNumbers) {
        this.setLineNumbers(false);
        this.setLineNumbers(true);
      }
    },
    setIndentUnit: function(unit) {this.win.indentUnit = unit;},
    setUndoDepth: function(depth) {this.editor.history.maxDepth = depth;},
    setTabMode: function(mode) {this.options.tabMode = mode;},
    setEnterMode: function(mode) {this.options.enterMode = mode;},
    setLineNumbers: function(on) {
      if (on && !this.lineNumbers) {
        this.lineNumbers = addLineNumberDiv(this.wrapping,this.options.firstLineNumber);
        this.activateLineNumbers();
      }
      else if (!on && this.lineNumbers) {
        this.wrapping.removeChild(this.lineNumbers);
        this.wrapping.style.paddingLeft = "";
        this.lineNumbers = null;
      }
    },

    cursorPosition: function(start) {this.focusIfIE(); return this.editor.cursorPosition(start);},
    firstLine: function() {return this.editor.firstLine();},
    lastLine: function() {return this.editor.lastLine();},
    nextLine: function(line) {return this.editor.nextLine(line);},
    prevLine: function(line) {return this.editor.prevLine(line);},
    lineContent: function(line) {return this.editor.lineContent(line);},
    setLineContent: function(line, content) {this.editor.setLineContent(line, content);},
    removeLine: function(line){this.editor.removeLine(line);},
    insertIntoLine: function(line, position, content) {this.editor.insertIntoLine(line, position, content);},
    selectLines: function(startLine, startOffset, endLine, endOffset) {
      this.win.focus();
      this.editor.selectLines(startLine, startOffset, endLine, endOffset);
    },
    nthLine: function(n) {
      var line = this.firstLine();
      for (; n > 1 && line !== false; n--)
        line = this.nextLine(line);
      return line;
    },
    lineNumber: function(line) {
      var num = 0;
      while (line !== false) {
        num++;
        line = this.prevLine(line);
      }
      return num;
    },
    jumpToLine: function(line) {
      if (typeof line == "number") line = this.nthLine(line);
      this.selectLines(line, 0);
      this.win.focus();
    },
    currentLine: function() { // Deprecated, but still there for backward compatibility
      return this.lineNumber(this.cursorLine());
    },
    cursorLine: function() {
      return this.cursorPosition().line;
    },
    cursorCoords: function(start) {return this.editor.cursorCoords(start);},

    activateLineNumbers: function() {
      var frame = this.frame, win = frame.contentWindow, doc = win.document, body = doc.body,
          nums = this.lineNumbers, scroller = nums.firstChild, self = this;
      var barWidth = null;

      nums.onclick = function(e) {
        var handler = self.options.onLineNumberClick;
        if (handler) {
          var div = (e || window.event).target || (e || window.event).srcElement;
          var num = div == nums ? NaN : Number(div.innerHTML);
          if (!isNaN(num)) handler(num, div);
        }
      };

      function sizeBar() {
        if (frame.offsetWidth == 0) return;
        for (var root = frame; root.parentNode; root = root.parentNode){}
        if (!nums.parentNode || root != document || !win.Editor) {
          // Clear event handlers (their nodes might already be collected, so try/catch)
          try{clear();}catch(e){}
          clearInterval(sizeInterval);
          return;
        }

        if (nums.offsetWidth != barWidth) {
          barWidth = nums.offsetWidth;
          frame.parentNode.style.paddingLeft = barWidth + "px";
        }
      }
      function doScroll() {
        nums.scrollTop = body.scrollTop || doc.documentElement.scrollTop || 0;
      }
      // Cleanup function, registered by nonWrapping and wrapping.
      var clear = function(){};
      sizeBar();
      var sizeInterval = setInterval(sizeBar, 500);

      function ensureEnoughLineNumbers(fill) {
        var lineHeight = scroller.firstChild.offsetHeight;
        if (lineHeight == 0) return;
        var targetHeight = 50 + Math.max(body.offsetHeight, Math.max(frame.offsetHeight, body.scrollHeight || 0)),
            lastNumber = Math.ceil(targetHeight / lineHeight);
        for (var i = scroller.childNodes.length; i <= lastNumber; i++) {
          var div = createHTMLElement("div");
          div.appendChild(document.createTextNode(fill ? String(i + self.options.firstLineNumber) : "\u00a0"));
          scroller.appendChild(div);
        }
      }

      function nonWrapping() {
        function update() {
          ensureEnoughLineNumbers(true);
          doScroll();
        }
        self.updateNumbers = update;
        var onScroll = win.addEventHandler(win, "scroll", doScroll, true),
            onResize = win.addEventHandler(win, "resize", update, true);
        clear = function(){
          onScroll(); onResize();
          if (self.updateNumbers == update) self.updateNumbers = null;
        };
        update();
      }

      function wrapping() {
        var node, lineNum, next, pos, changes = [], styleNums = self.options.styleNumbers;

        function setNum(n, node) {
          // Does not typically happen (but can, if you mess with the
          // document during the numbering)
          if (!lineNum) lineNum = scroller.appendChild(createHTMLElement("div"));
          if (styleNums) styleNums(lineNum, node, n);
          // Changes are accumulated, so that the document layout
          // doesn't have to be recomputed during the pass
          changes.push(lineNum); changes.push(n);
          pos = lineNum.offsetHeight + lineNum.offsetTop;
          lineNum = lineNum.nextSibling;
        }
        function commitChanges() {
          for (var i = 0; i < changes.length; i += 2)
            changes[i].innerHTML = changes[i + 1];
          changes = [];
        }
        function work() {
          if (!scroller.parentNode || scroller.parentNode != self.lineNumbers) return;

          var endTime = new Date().getTime() + self.options.lineNumberTime;
          while (node) {
            setNum(next++, node.previousSibling);
            for (; node && !win.isBR(node); node = node.nextSibling) {
              var bott = node.offsetTop + node.offsetHeight;
              while (scroller.offsetHeight && bott - 3 > pos) {
                var oldPos = pos;
                setNum("&nbsp;");
                if (pos <= oldPos) break;
              }
            }
            if (node) node = node.nextSibling;
            if (new Date().getTime() > endTime) {
              commitChanges();
              pending = setTimeout(work, self.options.lineNumberDelay);
              return;
            }
          }
          while (lineNum) setNum(next++);
          commitChanges();
          doScroll();
        }
        function start(firstTime) {
          doScroll();
          ensureEnoughLineNumbers(firstTime);
          node = body.firstChild;
          lineNum = scroller.firstChild;
          pos = 0;
          next = self.options.firstLineNumber;
          work();
        }

        start(true);
        var pending = null;
        function update() {
          if (pending) clearTimeout(pending);
          if (self.editor.allClean()) start();
          else pending = setTimeout(update, 200);
        }
        self.updateNumbers = update;
        var onScroll = win.addEventHandler(win, "scroll", doScroll, true),
            onResize = win.addEventHandler(win, "resize", update, true);
        clear = function(){
          if (pending) clearTimeout(pending);
          if (self.updateNumbers == update) self.updateNumbers = null;
          onScroll();
          onResize();
        };
      }
      (this.options.textWrapping || this.options.styleNumbers ? wrapping : nonWrapping)();
    },

    setDynamicHeight: function() {
      var self = this, activity = self.options.onCursorActivity, win = self.win, body = win.document.body,
          lineHeight = null, timeout = null, vmargin = 2 * self.frame.offsetTop;
      body.style.overflowY = "hidden";
      win.document.documentElement.style.overflowY = "hidden";
      this.frame.scrolling = "no";

      function updateHeight() {
        var trailingLines = 0, node = body.lastChild, computedHeight;
        while (node && win.isBR(node)) {
          if (!node.hackBR) trailingLines++;
          node = node.previousSibling;
        }
        if (node) {
          lineHeight = node.offsetHeight;
          computedHeight = node.offsetTop + (1 + trailingLines) * lineHeight;
        }
        else if (lineHeight) {
          computedHeight = trailingLines * lineHeight;
        }
        if (computedHeight)
          self.wrapping.style.height = Math.max(vmargin + computedHeight, self.options.minHeight) + "px";
      }
      setTimeout(updateHeight, 300);
      self.options.onCursorActivity = function(x) {
        if (activity) activity(x);
        clearTimeout(timeout);
        timeout = setTimeout(updateHeight, 100);
      };
    }
  };

  CodeMirror.InvalidLineHandle = {toString: function(){return "CodeMirror.InvalidLineHandle";}};

  CodeMirror.replace = function(element) {
    if (typeof element == "string")
      element = document.getElementById(element);
    return function(newElement) {
      element.parentNode.replaceChild(newElement, element);
    };
  };

  CodeMirror.fromTextArea = function(area, options) {
    if (typeof area == "string")
      area = document.getElementById(area);

    options = options || {};
    if (area.style.width && options.width == null)
      options.width = area.style.width;
    if (area.style.height && options.height == null)
      options.height = area.style.height;
    if (options.content == null) options.content = area.value;

    function updateField() {
      area.value = mirror.getCode();
    }
    if (area.form) {
      if (typeof area.form.addEventListener == "function")
        area.form.addEventListener("submit", updateField, false);
      else
        area.form.attachEvent("onsubmit", updateField);
      var realSubmit = area.form.submit;
      function wrapSubmit() {
        updateField();
        // Can't use realSubmit.apply because IE6 is too stupid
        area.form.submit = realSubmit;
        area.form.submit();
        area.form.submit = wrapSubmit;
      }
      try {area.form.submit = wrapSubmit;} catch(e){}
    }

    function insert(frame) {
      if (area.nextSibling)
        area.parentNode.insertBefore(frame, area.nextSibling);
      else
        area.parentNode.appendChild(frame);
    }

    area.style.display = "none";
    var mirror = new CodeMirror(insert, options);
    mirror.save = updateField;
    mirror.toTextArea = function() {
      updateField();
      area.parentNode.removeChild(mirror.wrapping);
      area.style.display = "";
      if (area.form) {
        try {area.form.submit = realSubmit;} catch(e) {}
        if (typeof area.form.removeEventListener == "function")
          area.form.removeEventListener("submit", updateField, false);
        else
          area.form.detachEvent("onsubmit", updateField);
      }
    };

    return mirror;
  };

  CodeMirror.isProbablySupported = function() {
    // This is rather awful, but can be useful.
    var match;
    if (window.opera)
      return Number(window.opera.version()) >= 9.52;
    else if (/Apple Computer, Inc/.test(navigator.vendor) && (match = navigator.userAgent.match(/Version\/(\d+(?:\.\d+)?)\./)))
      return Number(match[1]) >= 3;
    else if (document.selection && window.ActiveXObject && (match = navigator.userAgent.match(/MSIE (\d+(?:\.\d*)?)\b/)))
      return Number(match[1]) >= 6;
    else if (match = navigator.userAgent.match(/gecko\/(\d{8})/i))
      return Number(match[1]) >= 20050901;
    else if (match = navigator.userAgent.match(/AppleWebKit\/(\d+)/))
      return Number(match[1]) >= 525;
    else
      return null;
  };

  return CodeMirror;
})();

/**
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */

/***********************************/
/*	Ext.data.Store                 */
/***********************************/
Ext.override(Ext.data.Store, {
	add : function(records) {
		records = [].concat(records);
		if (records.length < 1) {
			return;
		}
		for (var i = 0, len = records.length; i < len; i++) {
			records[i].join(this);
		}
		var index = this.data.length;
		this.data.addAll(records);
		if (this.snapshot) {
			this.snapshot.addAll(records);
		}
		this.totalLength += records.length;
		this.fireEvent('add', this, records, index);
	},
	remove : function(record) {
		if (Ext.isArray(record)) {
			Ext.each(record, function(r) {
				this.remove(r);
			}, this);
		}
		var index = this.data.indexOf(record);
		if (index > -1) {
			record.join(null);
			this.data.removeAt(index);
			if (this.pruneModifiedRecords) {
				this.modified.remove(record);
			}
			if (this.snapshot) {
				this.snapshot.remove(record);
			}
			this.totalLength--;
			this.fireEvent('remove', this, record, index);
		}
	},
	removeAll : function() {
		var items = [];
		this.each(function(rec) {
			items.push(rec);
		});
		this.clearData();
		if (this.snapshot) {
			this.snapshot.clear();
		}
		if (this.pruneModifiedRecords) {
			this.modified = [];
		}
		this.totalLength = 0;
		this.fireEvent('clear', this, items);
	},
	addField: function(field) {
		field = new Ext.data.Field(field);
		this.recordType.prototype.fields.replace(field);
		if (typeof field.defaultValue != 'undefined') {
			this.each(function(r) {
				if (typeof r.data[field.name] == 'undefined') {
					r.data[field.name] = field.defaultValue;
				}
			});
		}
	},
	removeField: function(name) {
		this.recordType.prototype.fields.removeKey(name);
		this.each(function(r) {
			delete r.data[name];
			if (r.modified) {
				delete r.modified[name];
			}
		});
	}
});
/***********************************/
/*	Ext.PagingToolbar              */
/***********************************/

Ext.override(Ext.PagingToolbar, {
	bindStore : function(store, initial) {
		var doLoad;
		if (!initial && this.store) {
			if (store !== this.store && this.store.autoDestroy) {
				this.store.destroy();
			} else {
				this.store.un('beforeload', this.beforeLoad, this);
				this.store.un('load', this.onLoad, this);
				this.store.un('exception', this.onLoadError, this);
				this.store.un('datachanged', this.onChange, this);
				this.store.un('add', this.onChange, this);
				this.store.un('remove', this.onChange, this);
				this.store.un('clear', this.onClear, this);
			}
			if (!store) {
				this.store = null;
			}
		}
		if (store) {
			store = Ext.StoreMgr.lookup(store);
			store.on({
				scope: this,
				beforeload: this.beforeLoad,
				load: this.onLoad,
				exception: this.onLoadError,
				datachanged: this.onChange,
				add: this.onChange,
				remove: this.onChange,
				clear: this.onClear
			});
			doLoad = true;
		}
		this.store = store;
		if (doLoad) {
			this.onLoad(store, null, {});
		}
	},
	onLoad : function(store, r, o) {
		if (!this.rendered) {
			this.dsLoaded = [store, r, o];
			return;
		}
		var p = this.getParams();
		this.cursor = (o.params && o.params[p.start]) ? o.params[p.start] : 0;
		this.onChange();
	},
	onChange : function() {
		if (this.rendered) {
			var d = this.getPageData(), ap = d.activePage, ps = d.pages;
			this.afterTextItem.setText(String.format(this.afterPageText, d.pages));
			this.inputItem.setValue(ap);
			this.first.setDisabled(ap == 1);
			this.prev.setDisabled(ap == 1);
			this.next.setDisabled(ap == ps);
			this.last.setDisabled(ap == ps);
			this.refresh.enable();
			this.updateInfo();
		}
		this.fireEvent('change', this, d);
	},
	onClear : function() {
		this.cursor = 0;
		this.onChange();
	}
});

/***********************************/
/*	Ext.grid.ColumnModel           */
/***********************************/

Ext.override(Ext.grid.ColumnModel, {
	addColumn: function(column, colIndex) {
		if (typeof column == 'string') {
			column = {header: column, dataIndex: column};
		}
		var config = this.config;
		this.config = [];
		if (typeof colIndex == 'number') {
			config.splice(colIndex, 0, column);
		} else {
			colIndex = config.push(column);
		}
		this.setConfig(config);
		return colIndex;
	},
	removeColumn: function(colIndex) {
		var config = this.config;
		this.config = [config[colIndex]];
		config.splice(colIndex, 1);
		this.setConfig(config);
	}
});
Ext.override(Ext.grid.GridPanel, {
	addColumn: function(field, column, colIndex) {
		if (!column) {
			if (field.dataIndex) {
				column = field;
				field = field.dataIndex;
			} else {
				column = field.name || field;
			}
		}
		this.store.addField(field);
		return this.colModel.addColumn(column, colIndex);
	},
	removeColumn: function(name, colIndex) {
		this.store.removeField(name);
		if (typeof colIndex != 'number') {
			colIndex = this.colModel.findColumnIndex(name);
		}
		if (colIndex >= 0) {
			this.colModel.removeColumn(colIndex);
		}
	},
	applyState : function(state) {
		var cm = this.colModel,
				cs = state.columns,
				store = this.store,
				s,
				c,
				colIndex;

		if (cs) {
			for (var i = 0, len = cs.length; i < len; i++) {
				s = cs[i];
				c = cm.getColumnById(s.id);
				if (c) {
					colIndex = cm.getIndexById(s.id);
					cm.setState(colIndex, {
						hidden: s.hidden || false,
						width: s.width,
						sortable: s.sortable,
						hideable: cm.config[colIndex].hideable
					});
					if (colIndex != i) {
						cm.moveColumn(colIndex, i);
					}
				}
			}
		}
		if (store) {
			s = state.sort;
			if (s) {
				store[store.remoteSort ? 'setDefaultSort' : 'sort'](s.field, s.direction);
			}
			s = state.group;
			if (store.groupBy) {
				if (s) {
					store.groupBy(s);
				} else {
					store.clearGrouping();
				}
			}

		}
		var o = Ext.apply({}, state);
		delete o.columns;
		delete o.sort;
		Ext.grid.GridPanel.superclass.applyState.call(this, o);
	}
});

Ext.override(Ext.form.ComboBox, {
	setValue : function(v) {
		var text = v;
		if (this.valueField) {
			if (this.mode == 'remote' && !Ext.isDefined(this.store.totalLength)) {
				this.store.on('load', this.setValue.createDelegate(this, arguments), null, {single: true});
				if (this.store.lastOptions === null) {
					var params;
					if (this.valueParam) {
						params = {};
						params[this.valueParam] = v;
					} else {
						var q = this.allQuery;
						this.lastQuery = q;
						this.store.setBaseParam(this.queryParam, q);
						params = this.getParams(q);
					}
					this.store.load({params: params});
				}
				return;
			}
			var r = this.findRecord(this.valueField, v);
			if (r) {
				text = r.data[this.displayField];
			} else if (this.valueNotFoundText !== undefined) {
				text = this.valueNotFoundText;
			}
		}
		this.lastSelectionText = text;
		if (this.hiddenField) {
			this.hiddenField.value = v;
		}
		Ext.form.ComboBox.superclass.setValue.call(this, text);
		this.value = v;
	}
});
/**
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */

Ext.ns('Ext.ux');

Ext.ux.Image = Ext.extend(Ext.BoxComponent, {
	initComponent: function() {
		Ext.ux.Image.superclass.initComponent.apply(this, arguments);
		this.addEvents('load');
	},

	onRender: function() {
		this.autoEl = {
			cn: {tag: 'img', src: this.src}
		}
		Ext.ux.Image.superclass.onRender.apply(this, arguments);
		this.positionEl = this.el;
		this.el = this.resizeEl = Ext.get(this.positionEl.dom.firstChild);
		this.el.on('load', this.onLoad, this);
	},

	onResize: function() {
		this.positionEl.setSize(this.getSize());
	},

	onLoad: function() {
		if (this.autoSize) {
			this.syncSize();
		}
		if (this.resizable && !this.resizer) {
			this.resizer = new Ext.Resizable(this.positionEl, {
				preserveRatio: true,
				handles: 'all',
				draggable: true,
				dynamic: true,
				resizeChild: true
			});
		}
		this.fireEvent('load', this);
	}
});
Ext.reg('image', Ext.ux.Image);

/* plugin for resize of grid in single container */
Ext.namespace('Ext.ux.plugins');

Ext.ux.plugins.FitToParent = Ext.extend(Object, {
	constructor : function(parent) {
		this.parent = parent;
	},
	init : function(c) {
		c.on('render', function(c) {
			c.fitToElement = Ext.get(this.parent
					|| c.getPositionEl().dom.parentNode);
			if (!c.doLayout) {
				this.fitSizeToParent();
				Ext.EventManager.onWindowResize(this.fitSizeToParent, this);
			}
		}, this, {
			single : true
		});
		if (c.doLayout) {
			c.monitorResize = true;
			c.doLayout = c.doLayout.createInterceptor(this.fitSizeToParent);
		}
	},

	fitSizeToParent : function() {
			// Uses the dimension of the current viewport, but removes the document header
			// initial is the heigt of the TYPO3 Topbar which i 42. If Topbar is not rendered, set the height as default
		var documentHeaderHeight = 42 || top.TYPO3.Backend.Topbar.getHeight();
		var documentHeader = Ext.get('typo3-docheader');

		if (Ext.isObject(documentHeader)) {
				// use 5px bottom margin
			documentHeaderHeight -= documentHeader.getHeight() + 5;
		}

		if (this.heightOffset && Ext.isNumber(this.heightOffset)) {
			documentHeaderHeight -= parseInt(this.heightOffset, 10);
		}

		this.fitToElement.setHeight(
			Ext.lib.Dom.getViewportHeight() - this.fitToElement.getTop() + documentHeaderHeight
		);

		var pos = this.getPosition(true), size = this.fitToElement.getViewSize();
		this.setSize(size.width - pos[0], size.height - pos[1]);

	}
});

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
*  (c) 2011 Steffen kamper <steffen@typo3.org>
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

				this.stateHash[n.id] = n.getPath();
			},

			// delete path and all subpaths of collapsed node from stateHash
			beforecollapsenode:function(n) {
				if (this.isRestoringState) {
					return;
				}

				delete this.stateHash[n.id];
				var cPath = n.getPath();
				for(var p in this.stateHash) {
					if(this.stateHash.hasOwnProperty(p)) {
						if(this.stateHash[p].indexOf(cPath) !== -1) {
							delete this.stateHash[p];
						}
					}
				}
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
				for(var p in this.stateHash) {
					if(this.stateHash.hasOwnProperty(p)) {
						this.expandPath(this.stateHash[p]);
					}
				}
					// get last selected node
				if (this.stateHash['lastSelectedNode']) {
					var node = this.getNodeById(this.stateHash['lastSelectedNode']);
					if (node) {
						this.selectPath(node.getPath());
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

Ext.ns('Ext.ux.grid');

/**
 * @class Ext.ux.grid.RowPanelExpander
 * @extends Ext.util.Observable
 * Plugin (ptype = 'rowexpander') that adds the ability to have a Column in a grid which enables
 * a second row body which expands/contracts.  The expand/contract behavior is configurable to react
 * on clicking of the column, double click of the row, and/or hitting enter while a row is selected.
 *
 * @ptype rowexpander
 */
Ext.ux.grid.RowPanelExpander = Ext.extend(Ext.util.Observable, {
	/**
	 * @cfg {Boolean} expandOnEnter
	 * <tt>true</tt> to toggle selected row(s) between expanded/collapsed when the enter
	 * key is pressed (defaults to <tt>true</tt>).
	 */
	expandOnEnter : true,
	/**
	 * @cfg {Boolean} expandOnDblClick
	 * <tt>true</tt> to toggle a row between expanded/collapsed when double clicked
	 * (defaults to <tt>true</tt>).
	 */
	expandOnDblClick : true,

	header : '',
	width : 20,
	sortable : false,
	fixed : true,
	menuDisabled : true,
	dataIndex : '',
	lazyRender : true,
	enableCaching : true,

	constructor : function(config) {
		Ext.apply(this, config);

		this.addEvents( {
			/**
			 * @event beforeexpand
			 * Fires before the row expands. Have the listener return false to prevent the row from expanding.
			 * @param {Object} this RowExpander object.
			 * @param {Object} Ext.data.Record Record for the selected row.
			 * @param {Object} body body element for the secondary row.
			 * @param {Number} rowIndex The current row index.
			 */
			beforeexpand : true,
			/**
			 * @event expand
			 * Fires after the row expands.
			 * @param {Object} this RowExpander object.
			 * @param {Object} Ext.data.Record Record for the selected row.
			 * @param {Object} body body element for the secondary row.
			 * @param {Number} rowIndex The current row index.
			 */
			expand : true,
			/**
			 * @event beforecollapse
			 * Fires before the row collapses. Have the listener return false to prevent the row from collapsing.
			 * @param {Object} this RowExpander object.
			 * @param {Object} Ext.data.Record Record for the selected row.
			 * @param {Object} body body element for the secondary row.
			 * @param {Number} rowIndex The current row index.
			 */
			beforecollapse : true,
			/**
			 * @event collapse
			 * Fires after the row collapses.
			 * @param {Object} this RowExpander object.
			 * @param {Object} Ext.data.Record Record for the selected row.
			 * @param {Object} body body element for the secondary row.
			 * @param {Number} rowIndex The current row index.
			 */
			collapse : true
		});

		Ext.ux.grid.RowPanelExpander.superclass.constructor.call(this);

		if (this.tpl) {
			if (typeof this.tpl == 'string') {
				this.tpl = new Ext.Template(this.tpl);
			}
			this.tpl.compile();
		}

		this.state = {};
		this.bodyContent = {};
	},

	getRowClass : function(record, rowIndex, p, ds) {
		p.cols = p.cols - 1;
		var content = this.bodyContent[record.id];
		if (!content && !this.lazyRender) {
			content = this.getBodyContent(record, rowIndex);
		}
		if (content) {
			p.body = content;
		}
		return this.state[record.id] ? 'x-grid3-row-expanded'
				: 'x-grid3-row-collapsed';
	},

	init : function(grid) {
		this.grid = grid;

		var view = grid.getView();
		view.getRowClass = this.getRowClass
				.createDelegate(this);

		view.enableRowBody = true;

		grid.on('render', this.onRender, this);
		view.on('refresh', this.onViewRefresh, this);
		grid.on('destroy', this.onDestroy, this);
		grid.on("beforestaterestore", this.applyState, this);
		grid.on("beforestatesave", this.saveState, this);
	},

	// @private
	onRender : function() {
		var grid = this.grid;


		var mainBody = grid.getView().mainBody;
		mainBody.on('mousedown', this.onMouseDown, this, {
			delegate : '.x-grid3-row-expander'
		});

		grid.getView().on('rowremoved', this.onRowRemoved, this);
		grid.getView().on('rowupdated', this.onRowUpdated, this);

		if (this.expandOnEnter) {
			this.keyNav = new Ext.KeyNav(this.grid.getGridEl(),
					{
						'enter' : this.onEnter,
						scope : this
					});
		}
		if (this.expandOnDblClick) {
			grid.on('rowdblclick', this.onRowDblClick, this);
		}
	},

	/** @private */
	onViewRefresh: function(view) {
		var index = -1;
		for(var key in this.state){
			if (this.state[key] === true) {
				index = view.grid.getStore().indexOfId(key);
				if (index > -1) {
					this.expandRow(index);
				}
			}
		}
	},

	/** @private */
	applyState: function(grid, state){
		this.suspendStateStore = true;
		if(state[this.id]) {
			this.state = state[this.id];
		}
		this.suspendStateStore = false;
	},

	/** @private */
	saveState: function(grid, state){
		return state[this.id] = this.state;
	},

	/** @private */
	onDestroy : function() {
		if (this.keyNav) {
			this.keyNav.disable();
			delete this.keyNav;
		}
		/*
		 * A majority of the time, the plugin will be destroyed along with the grid,
		 * which means the mainBody won't be available. On the off chance that the plugin
		 * isn't destroyed with the grid, take care of removing the listener.
		 */
		var mainBody = this.grid.getView().mainBody;
		if (mainBody) {
			mainBody.un('mousedown', this.onMouseDown, this);
		}
	},

	/** @private */
	onRowDblClick : function(grid, rowIdx, e) {
		this.toggleRow(rowIdx);
	},


		// This will not get fired for an update
	onRowRemoved: function(view, row, rec) {
		var panelItemIndex = rec.id;

		if (this.expandingRowPanel && this.expandingRowPanel[panelItemIndex]) {
			this.expandingRowPanel[panelItemIndex].destroy();
			this.expandingRowPanel[panelItemIndex] = null;
		}
	},

	onRowUpdated: function(view, row, rec) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}

		this[Ext.fly(row).hasClass('x-grid3-row-collapsed') ? 'collapseRow' : 'expandRow'](row);
	},

	getBodyContent : function(record, index) {
		// extend here
		if (!this.enableCaching) {
			return this.tpl.apply(record.data);
		}
		var content = this.bodyContent[record.id];
		if (!content) {
			if (this.tpl) {
				content = this.tpl.apply(record.data);
				this.bodyContent[record.id] = content;
			}
		}
		return content;
	},

	onMouseDown : function(e, t) {
		e.stopEvent();
		var row = e.getTarget('.x-grid3-row');
		this.toggleRow(row);
	},

	renderer : function(v, p, record) {
		p.cellAttr = 'rowspan="2"';
		return '<div class="x-grid3-row-expander">&#160;</div>';
	},

	beforeExpand : function(record, body, rowIndex) {
		if (this.fireEvent('beforeexpand', this, record, body, rowIndex) !== false) {
			if (this.tpl && this.lazyRender) {
				body.innerHTML = this.getBodyContent(record, rowIndex);
			}
			if (body.innerHTML == '' || !this.enableCaching) {
				this.createExpandingRowPanel(record, body, rowIndex);
			}
			return true;
		} else {
			return false;
		}
	},

	toggleRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		this[Ext.fly(row).hasClass('x-grid3-row-collapsed') ? 'expandRow' : 'collapseRow'](row);
		this.grid.saveState();
	},

	expandRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		if (row) {
			var record = this.grid.store.getAt(row.rowIndex);
			var body = Ext.DomQuery.selectNode('tr:nth(2) div.x-grid3-row-body', row);
			if (this.beforeExpand(record, body, row.rowIndex)) {
				this.state[record.id] = true;
				Ext.fly(row).replaceClass('x-grid3-row-collapsed', 'x-grid3-row-expanded');
				this.grid.saveState();
				this.fireEvent('expand', this, record, body, row.rowIndex);
			}
		}
	},

	collapseRow : function(row) {
		if (typeof row == 'number') {
			row = this.grid.view.getRow(row);
		}
		var record = this.grid.store.getAt(row.rowIndex);
		var body = Ext.fly(row).child(
				'tr:nth(1) div.x-grid3-row-body', true);
		if (this.fireEvent('beforecollapse', this, record, 	body, row.rowIndex) !== false) {
			this.state[record.id] = false;
			Ext.fly(row).replaceClass('x-grid3-row-expanded', 'x-grid3-row-collapsed');
			this.grid.saveState();
			this.fireEvent('collapse', this, record, body, row.rowIndex);
		}
	},

		// Expand all rows
	expandAll : function() {
		var aRows = this.grid.getView().getRows();
		for (var i = 0; i < aRows.length; i++) {
			this.expandRow(aRows[i]);
		}
	},

		// Collapse all rows
	collapseAll : function() {
		var aRows = this.grid.getView().getRows();
		for (var i = 0; i < aRows.length; i++) {
			this.collapseRow(aRows[i]);
		}
	},

	createExpandingRowPanel : function(record, rowBody, rowIndex) {
		// record.id is more stable than rowIndex for panel item's key; rows can be deleted.
		var panelItemIndex = record.id;
		// var panelItemIndex = rowIndex;

		// init array of expanding row panels if not already inited
		if (!this.expandingRowPanel) {
			this.expandingRowPanel = [];
		}

		// Destroy the existing panel if present
		if (this.expandingRowPanel[panelItemIndex]) {
			this.expandingRowPanel[panelItemIndex].destroy();
		}
		this.expandingRowPanel[panelItemIndex] = new Ext.Panel({
			border : false,
			bodyBorder : false,
			layout : 'form',
			renderTo : rowBody,
			items : this.createExpandingRowPanelItems(record, rowIndex)
		});

	},

	/**
	 * Override this method to put Ext form items into the expanding row panel.
	 * @return Array of panel items.
	 */
	createExpandingRowPanelItems : function(record, rowIndex) {
		var panelItems = [];

		return panelItems;
	}
});

Ext.preg('rowexpander', Ext.ux.grid.RowPanelExpander);

Ext.ux.plugins.FitWidthToParent = Ext.extend(Object, {
	constructor : function(parent) {
		this.parent = parent;
	},
	init : function(c) {
		c.on('render', function(c) {
			c.fitToElement = Ext.get(this.parent
					|| c.getPositionEl().dom.parentNode);
			if (!c.doLayout) {
				this.fitSizeToParent();
				Ext.EventManager.onWindowResize(this.fitSizeToParent, this);
			}
		}, this, {
			single : true
		});
		if (c.doLayout) {
			c.monitorResize = true;
			c.doLayout = c.doLayout.createInterceptor(this.fitSizeToParent);
		}
	},

	fitSizeToParent : function() {
		var pos = this.getPosition(true), size = this.fitToElement.getViewSize();
		this.setWidth(size.width - pos[0]);

	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ns('Ext.ux.form');

Ext.ux.form.SearchField = Ext.extend(Ext.form.TwinTriggerField, {
	enableKeyEvents: true,
	specialKeyOnly: false,
	validationEvent: false,
	validateOnBlur: false,
	trigger1Class: 'x-form-trigger t3-icon t3-icon-actions t3-icon-actions-input t3-icon-input-clear ux-searchfield-trigger1',
	trigger2Class: 'x-btn-text t3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-tree-search-open ux-searchfield-trigger2',
	hideTrigger1: true,
	width: 180,
	hasSearch : false,
	paramName : 'query',
	filterFunction: null,

	initComponent : function() {

		this.triggerConfig = {
			tag:'span', cls:'x-form-twin-triggers',
			cn:[
				{tag: "span", src: Ext.BLANK_IMAGE_URL, alt: "", cls: "x-form-trigger " + this.trigger1Class},
				{tag: "span", src: Ext.BLANK_IMAGE_URL, alt: "", cls: "x-form-trigger " + this.trigger2Class}
			]
		};


		this.on('specialkey', function(f, e) {
			if (e.getKey() == e.ENTER) {
				this.onTrigger2Click();
			}
		}, this);

		if (!this.specialKeyOnly) {
			this.on('keyup', function(f, e) {
				var value = this.getRawValue();
				this.onTrigger2Click();
			}, this);
		}
	},

	onRender : function(ct, position) {
		this.doc = Ext.isIE ? Ext.getBody() : Ext.getDoc();
		Ext.form.TriggerField.superclass.onRender.call(this, ct, position);
		this.wrap = this.el.wrap({cls: 'x-form-field-wrap x-form-field-trigger-wrap ux-searchfield'});
		this.trigger = this.wrap.createChild(this.triggerConfig ||
			{tag: "img", src: Ext.BLANK_IMAGE_URL, alt: "", cls: "x-form-trigger " + this.triggerClass});

		this.initTrigger();

		if (!this.width) {
			this.wrap.setWidth(this.el.getWidth() + this.trigger.getWidth());
		}
		this.resizeEl = this.positionEl = this.wrap;
	},



	onTrigger1Click : function() {
		if (this.hasSearch) {
			this.el.dom.value = '';
			var o = {start: 0};
			this.store.baseParams = this.store.baseParams || {};
			this.store.baseParams[this.paramName] = '';
			if (typeof this.filterFunction == "function") {
				this.filterFunction.call();
			} else {
				this.store.reload({params:o});
			}
			this.triggers[0].hide();
			this.hasSearch = false;
		}
	},

	onTrigger2Click : function() {
		var v = this.getRawValue();
		if (v.length < 1) {
			this.onTrigger1Click();
			return;
		}
		var o = {start: 0};
		this.store.baseParams = this.store.baseParams || {};
		this.store.baseParams[this.paramName] = v;
		if (typeof this.filterFunction == "function") {
			this.filterFunction.call();
		} else {
			this.store.reload({params:o});
		}
		this.hasSearch = true;
		this.triggers[0].show();
	},

	refreshTrigger: function() {
		if (this.getRawValue().length > 0) {
			this.hasSearch = true;
			this.triggers[0].show();
		} else {
			this.hasSearch = false;
			this.triggers[0].hide();
		}
	}
});

/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ns('Ext.ux.form');

/**
 * @class Ext.ux.form.FileUploadField
 * @extends Ext.form.TextField
 * Creates a file upload field.
 * @xtype fileuploadfield
 */
Ext.ux.form.FileUploadField = Ext.extend(Ext.form.TextField, {
	/**
	 * @cfg {String} buttonText The button text to display on the upload button (defaults to
	 * 'Browse...').  Note that if you supply a value for {@link #buttonCfg}, the buttonCfg.text
	 * value will be used instead if available.
	 */
	buttonText: 'Browse...',
	/**
	 * @cfg {Boolean} buttonOnly True to display the file upload field as a button with no visible
	 * text field (defaults to false).  If true, all inherited TextField members will still be available.
	 */
	buttonOnly: false,
	/**
	 * @cfg {Number} buttonOffset The number of pixels of space reserved between the button and the text field
	 * (defaults to 3).  Note that this only applies if {@link #buttonOnly} = false.
	 */
	buttonOffset: 3,
	/**
	 * @cfg {Object} buttonCfg A standard {@link Ext.Button} config object.
	 */

	// private
	readOnly: true,

	/**
	 * @hide
	 * @method autoSize
	 */
	autoSize: Ext.emptyFn,

	// private
	initComponent: function() {
		Ext.ux.form.FileUploadField.superclass.initComponent.call(this);

		this.addEvents(
				/**
				 * @event fileselected
				 * Fires when the underlying file input field's value has changed from the user
				 * selecting a new file from the system file selection dialog.
				 * @param {Ext.ux.form.FileUploadField} this
				 * @param {String} value The file value returned by the underlying file input field
				 */
				'fileselected'
		);
	},

	// private
	onRender : function(ct, position) {
		Ext.ux.form.FileUploadField.superclass.onRender.call(this, ct, position);

		this.wrap = this.el.wrap({cls:'x-form-field-wrap x-form-file-wrap'});
		this.el.addClass('x-form-file-text');
		this.el.dom.removeAttribute('name');
		this.createFileInput();

		var btnCfg = Ext.applyIf(this.buttonCfg || {}, {
					text: this.buttonText
				});
		this.button = new Ext.Button(Ext.apply(btnCfg, {
					renderTo: this.wrap,
					cls: 'x-form-file-btn' + (btnCfg.iconCls ? ' x-btn-icon' : '')
				}));

		if (this.buttonOnly) {
			this.el.hide();
			this.wrap.setWidth(this.button.getEl().getWidth());
		}

		this.bindListeners();
		this.resizeEl = this.positionEl = this.wrap;
	},

	bindListeners: function() {
		this.fileInput.on({
					scope: this,
					mouseenter: function() {
						this.button.addClass(['x-btn-over','x-btn-focus'])
					},
					mouseleave: function() {
						this.button.removeClass(['x-btn-over','x-btn-focus','x-btn-click'])
					},
					mousedown: function() {
						this.button.addClass('x-btn-click')
					},
					mouseup: function() {
						this.button.removeClass(['x-btn-over','x-btn-focus','x-btn-click'])
					},
					change: function() {
						var v = this.fileInput.dom.value;
						this.setValue(v);
						this.fireEvent('fileselected', this, v);
					}
				});
	},

	createFileInput : function() {
		this.fileInput = this.wrap.createChild({
					id: this.getFileInputId(),
					name: this.name || this.getId(),
					cls: 'x-form-file',
					tag: 'input',
					type: 'file',
					size: 1
				});
	},

	reset : function() {
		this.fileInput.remove();
		this.createFileInput();
		this.bindListeners();
		Ext.ux.form.FileUploadField.superclass.reset.call(this);
	},

	// private
	getFileInputId: function() {
		return this.id + '-file';
	},

	// private
	onResize : function(w, h) {
		Ext.ux.form.FileUploadField.superclass.onResize.call(this, w, h);

		this.wrap.setWidth(w);

		if (!this.buttonOnly) {
			var w = this.wrap.getWidth() - this.button.getEl().getWidth() - this.buttonOffset;
			this.el.setWidth(w);
		}
	},

	// private
	onDestroy: function() {
		Ext.ux.form.FileUploadField.superclass.onDestroy.call(this);
		Ext.destroy(this.fileInput, this.button, this.wrap);
	},

	onDisable: function() {
		Ext.ux.form.FileUploadField.superclass.onDisable.call(this);
		this.doDisable(true);
	},

	onEnable: function() {
		Ext.ux.form.FileUploadField.superclass.onEnable.call(this);
		this.doDisable(false);

	},

	// private
	doDisable: function(disabled) {
		this.fileInput.dom.disabled = disabled;
		this.button.setDisabled(disabled);
	},


	// private
	preFocus : Ext.emptyFn,

	// private
	alignErrorIcon : function() {
		this.errorIcon.alignTo(this.wrap, 'tl-tr', [2, 0]);
	}

});

Ext.reg('fileuploadfield', Ext.ux.form.FileUploadField);

// backwards compat
Ext.form.FileUploadField = Ext.ux.form.FileUploadField;

/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ns('Ext.ux.menu');

/**
 * @class Ext.ux.menu.RangeMenu
 * @extends Ext.menu.Menu
 * Custom implementation of Ext.menu.Menu that has preconfigured
 * items for gt, lt, eq.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>

 * </code></pre>
 */
Ext.ux.menu.RangeMenu = Ext.extend(Ext.menu.Menu, {

	constructor : function (config) {

		Ext.ux.menu.RangeMenu.superclass.constructor.call(this, config);

		this.addEvents(
				/**
				 * @event update
				 * Fires when a filter configuration has changed
				 * @param {Ext.ux.grid.filter.Filter} this The filter object.
				 */
				'update'
		);

		this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);

		var i, len, item, cfg, Cls;

		for (i = 0,len = this.menuItems.length; i < len; i++) {
			item = this.menuItems[i];
			if (item !== '-') {
				// defaults
				cfg = {
					itemId: 'range-' + item,
					enableKeyEvents: true,
					iconCls: this.iconCls[item] || 'no-icon',
					listeners: {
						scope: this,
						keyup: this.onInputKeyUp
					}
				};
				Ext.apply(
						cfg,
						// custom configs
						Ext.applyIf(this.fields[item] || {}, this.fieldCfg[item]),
						// configurable defaults
						this.menuItemCfgs
				);
				Cls = cfg.fieldCls || this.fieldCls;
				item = this.fields[item] = new Cls(cfg);
			}
			this.add(item);
		}
	},

	/**
	 * @private
	 * called by this.updateTask
	 */
	fireUpdate : function () {
		this.fireEvent('update', this);
	},

	/**
	 * Get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		var result = {}, key, field;
		for (key in this.fields) {
			field = this.fields[key];
			if (field.isValid() && String(field.getValue()).length > 0) {
				result[key] = field.getValue();
			}
		}
		return result;
	},

	/**
	 * Set the value of this menu and fires the 'update' event.
	 * @param {Object} data The data to assign to this menu
	 */
	setValue : function (data) {
		var key;
		for (key in this.fields) {
			this.fields[key].setValue(data[key] !== undefined ? data[key] : '');
		}
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Handler method called when there is a keyup event on an input
	 * item of this menu.
	 */
	onInputKeyUp : function (field, e) {
		var k = e.getKey();
		if (k == e.RETURN && field.isValid()) {
			e.stopEvent();
			this.hide(true);
			return;
		}

		if (field == this.fields.eq) {
			if (this.fields.gt) {
				this.fields.gt.setValue(null);
			}
			if (this.fields.lt) {
				this.fields.lt.setValue(null);
			}
		}
		else {
			this.fields.eq.setValue(null);
		}

		// restart the timer
		this.updateTask.delay(this.updateBuffer);
	}
});

/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.namespace('Ext.ux.menu');

/**
 * @class Ext.ux.menu.ListMenu
 * @extends Ext.menu.Menu
 * This is a supporting class for {@link Ext.ux.grid.filter.ListFilter}.
 * Although not listed as configuration options for this class, this class
 * also accepts all configuration options from {@link Ext.ux.grid.filter.ListFilter}.
 */
Ext.ux.menu.ListMenu = Ext.extend(Ext.menu.Menu, {
	/**
	 * @cfg {String} labelField
	 * Defaults to 'text'.
	 */
	labelField :  'text',
	/**
	 * @cfg {String} paramPrefix
	 * Defaults to 'Loading...'.
	 */
	loadingText : 'Loading...',
	/**
	 * @cfg {Boolean} loadOnShow
	 * Defaults to true.
	 */
	loadOnShow : true,
	/**
	 * @cfg {Boolean} single
	 * Specify true to group all items in this list into a single-select
	 * radio button group. Defaults to false.
	 */
	single : false,

	constructor : function (cfg) {
		this.selected = [];
		this.addEvents(
				/**
				 * @event checkchange
				 * Fires when there is a change in checked items from this list
				 * @param {Object} item Ext.menu.CheckItem
				 * @param {Object} checked The checked value that was set
				 */
				'checkchange'
		);

		Ext.ux.menu.ListMenu.superclass.constructor.call(this, cfg = cfg || {});

		if (!cfg.store && cfg.options) {
			var options = [];
			for (var i = 0, len = cfg.options.length; i < len; i++) {
				var value = cfg.options[i];
				switch (Ext.type(value)) {
					case 'array':  options.push(value); break;
					case 'object': options.push([value.id, value[this.labelField]]); break;
					case 'string': options.push([value, value]); break;
				}
			}

			this.store = new Ext.data.Store({
						reader: new Ext.data.ArrayReader({id: 0}, ['id', this.labelField]),
						data:   options,
						listeners: {
							'load': this.onLoad,
							scope:  this
						}
					});
			this.loaded = true;
		} else {
			this.add({text: this.loadingText, iconCls: 'loading-indicator'});
			this.store.on('load', this.onLoad, this);
		}
	},

	destroy : function () {
		if (this.store) {
			this.store.destroy();
		}
		Ext.ux.menu.ListMenu.superclass.destroy.call(this);
	},

	/**
	 * Lists will initially show a 'loading' item while the data is retrieved from the store.
	 * In some cases the loaded data will result in a list that goes off the screen to the
	 * right (as placement calculations were done with the loading item). This adapter will
	 * allow show to be called with no arguments to show with the previous arguments and
	 * thus recalculate the width and potentially hang the menu from the left.
	 */
	show : function () {
		var lastArgs = null;
		return function() {
			if (arguments.length === 0) {
				Ext.ux.menu.ListMenu.superclass.show.apply(this, lastArgs);
			} else {
				lastArgs = arguments;
				if (this.loadOnShow && !this.loaded) {
					this.store.load();
				}
				Ext.ux.menu.ListMenu.superclass.show.apply(this, arguments);
			}
		};
	}(),

	/** @private */
	onLoad : function (store, records) {
		var visible = this.isVisible();
		this.hide(false);

		this.removeAll(true);

		var gid = this.single ? Ext.id() : null;
		for (var i = 0, len = records.length; i < len; i++) {
			var item = new Ext.menu.CheckItem({
						text:	records[i].get(this.labelField),
						group:   gid,
						checked: this.selected.indexOf(records[i].id) > -1,
						hideOnClick: false});

			item.itemId = records[i].id;
			item.on('checkchange', this.checkChange, this);

			this.add(item);
		}

		this.loaded = true;

		if (visible) {
			this.show();
		}
		this.fireEvent('load', this, records);
	},

	/**
	 * Get the selected items.
	 * @return {Array} selected
	 */
	getSelected : function () {
		return this.selected;
	},

	/** @private */
	setSelected : function (value) {
		value = this.selected = [].concat(value);

		if (this.loaded) {
			this.items.each(function(item) {
				item.setChecked(false, true);
				for (var i = 0, len = value.length; i < len; i++) {
					if (item.itemId == value[i]) {
						item.setChecked(true, true);
					}
				}
			}, this);
		}
	},

	/**
	 * Handler for the 'checkchange' event from an check item in this menu
	 * @param {Object} item Ext.menu.CheckItem
	 * @param {Object} checked The checked value that was set
	 */
	checkChange : function (item, checked) {
		var value = [];
		this.items.each(function(item) {
			if (item.checked) {
				value.push(item.itemId);
			}
		}, this);
		this.selected = value;

		this.fireEvent('checkchange', item, checked);
	}
});
/**
 * Ext.ux.grid.GridFilters v0.2.7
 **/

Ext.namespace("Ext.ux.grid");
Ext.ux.grid.GridFilters = function(config){
	this.filters = new Ext.util.MixedCollection();
	this.filters.getKey = function(o){return o ? o.dataIndex : null};

	for(var i=0, len=config.filters.length; i<len; i++)
		this.addFilter(config.filters[i]);

	this.deferredUpdate = new Ext.util.DelayedTask(this.reload, this);

	delete config.filters;
	Ext.apply(this, config);
};
Ext.extend(Ext.ux.grid.GridFilters, Ext.util.Observable, {
	/**
	 * @cfg {Integer} updateBuffer
	 * Number of milisecond to defer store updates since the last filter change.
	 */
	updateBuffer: 500,
	/**
	 * @cfg {String} paramPrefix
	 * The url parameter prefix for the filters.
	 */
	paramPrefix: 'filter',
	/**
	 * @cfg {String} fitlerCls
	 * The css class to be applied to column headers that active filters. Defaults to 'ux-filterd-column'
	 */
	filterCls: 'ux-filtered-column',
	/**
	 * @cfg {Boolean} local
	 * True to use Ext.data.Store filter functions instead of server side filtering.
	 */
	local: false,
	/**
	 * @cfg {Boolean} autoReload
	 * True to automagicly reload the datasource when a filter change happens.
	 */
	autoReload: true,
	/**
	 * @cfg {String} stateId
	 * Name of the Ext.data.Store value to be used to store state information.
	 */
	stateId: undefined,
	/**
	 * @cfg {Boolean} showMenu
	 * True to show the filter menus
	 */
	showMenu: true,

	menuFilterText: 'Filters',

	init: function(grid){
		if(grid instanceof Ext.grid.GridPanel){
			this.grid  = grid;

			this.store = this.grid.getStore();
			if(this.local){
				this.store.on('load', function(store){
					store.filterBy(this.getRecordFilter());
				}, this);
			} else {
			  this.store.on('beforeload', this.onBeforeLoad, this);
			}

			this.grid.filters = this;

			this.grid.addEvents({"filterupdate": true});

			grid.on("render", this.onRender, this);

			grid.on("beforestaterestore", this.applyState, this);
			grid.on("beforestatesave", this.saveState, this);

		} else if(grid instanceof Ext.PagingToolbar){
		  this.toolbar = grid;
		}
	},

	/** private **/
	applyState: function(grid, state){
		this.suspendStateStore = true;
		this.clearFilters();
		if(state.filters)
			for(var key in state.filters){
				var filter = this.filters.get(key);
				if(filter){
					filter.setValue(state.filters[key]);
					filter.setActive(true);
				}
			}

		this.deferredUpdate.cancel();
		if(this.local)
			this.reload();

		this.suspendStateStore = false;
	},

	/** private **/
	saveState: function(grid, state){
		var filters = {};
		this.filters.each(function(filter){
			if(filter.active)
				filters[filter.dataIndex] = filter.getValue();
		});
		return state.filters = filters;
	},

	/** private **/
	onRender: function(){
		var hmenu;

		if(this.showMenu){
			hmenu = this.grid.getView().hmenu;

			this.sep  = hmenu.addSeparator();
			this.menu = hmenu.add(new Ext.menu.CheckItem({
					text: this.menuFilterText,
					menu: new Ext.menu.Menu()
				}));
			this.menu.on('checkchange', this.onCheckChange, this);
			this.menu.on('beforecheckchange', this.onBeforeCheck, this);

			hmenu.on('beforeshow', this.onMenu, this);
		}

		this.grid.getView().on("refresh", this.onRefresh, this);
		this.updateColumnHeadings(this.grid.getView());
	},

	/** private **/
	onMenu: function(filterMenu){
		var filter = this.getMenuFilter();
		if(filter){
			this.menu.menu = filter.menu;
			this.menu.setChecked(filter.active, false);
		}

		this.menu.setVisible(filter !== undefined);
		this.sep.setVisible(filter !== undefined);
	},

	/** private **/
	onCheckChange: function(item, value){
		this.getMenuFilter().setActive(value);
	},

	/** private **/
	onBeforeCheck: function(check, value){
		return !value || this.getMenuFilter().isActivatable();
	},

	/** private **/
	onStateChange: function(event, filter){
    if(event == "serialize") return;

		if(filter == this.getMenuFilter())
			this.menu.setChecked(filter.active, false);

		if(this.autoReload || this.local)
			this.deferredUpdate.delay(this.updateBuffer);

		var view = this.grid.getView();
		this.updateColumnHeadings(view);

		this.grid.saveState();

		this.grid.fireEvent('filterupdate', this, filter);
	},

	/** private **/
	onBeforeLoad: function(store, options){
    options.params = options.params || {};
		this.cleanParams(options.params);
		var params = this.buildQuery(this.getFilterData());
		Ext.apply(options.params, params);
	},

	/** private **/
	onRefresh: function(view){
		this.updateColumnHeadings(view);
	},

	/** private **/
	getMenuFilter: function(){
		var view = this.grid.getView();
		if(!view || view.hdCtxIndex === undefined)
			return null;

		return this.filters.get(
			view.cm.config[view.hdCtxIndex].dataIndex);
	},

	/** private **/
	updateColumnHeadings: function(view){
		if(!view || !view.mainHd) return;

		var hds = view.mainHd.select('td').removeClass(this.filterCls);
		for(var i=0, len=view.cm.config.length; i<len; i++){
			var filter = this.getFilter(view.cm.config[i].dataIndex);
			if(filter && filter.active)
				hds.item(i).addClass(this.filterCls);
		}
	},

	/** private **/
	reload: function(){
		if(this.local){
			this.grid.store.clearFilter(true);
			this.grid.store.filterBy(this.getRecordFilter());
		} else {
			this.deferredUpdate.cancel();
			var store = this.grid.store;
			if(this.toolbar){
				var start = this.toolbar.paramNames.start;
				if(store.lastOptions && store.lastOptions.params && store.lastOptions.params[start])
					store.lastOptions.params[start] = 0;
			}
			store.reload();
		}
	},

	/**
	 * Method factory that generates a record validator for the filters active at the time
	 * of invokation.
	 *
	 * @private
	 */
	getRecordFilter: function(){
		var f = [];
		this.filters.each(function(filter){
			if(filter.active) f.push(filter);
		});
		var len = f.length, me = this;
		return function(record){
			for(var i=0; i<len; i++) {
				if(!f[i].validateRecord(record)) {
					return false;
				}
			}

			return true;
		};
	},

	/**
	 * Adds a filter to the collection.
	 *
	 * @param {Object/Ext.ux.grid.filter.Filter} config A filter configuration or a filter object.
	 *
	 * @return {Ext.ux.grid.filter.Filter} The existing or newly created filter object.
	 */
	addFilter: function(config){
		var filter = config.menu ? config :
				new (this.getFilterClass(config.type))(config);
		this.filters.add(filter);

		Ext.util.Observable.capture(filter, this.onStateChange, this);
		return filter;
	},

	/**
	 * Returns a filter for the given dataIndex, if on exists.
	 *
	 * @param {String} dataIndex The dataIndex of the desired filter object.
	 *
	 * @return {Ext.ux.grid.filter.Filter}
	 */
	getFilter: function(dataIndex){
		return this.filters.get(dataIndex);
	},

	/**
	 * Turns all filters off. This does not clear the configuration information.
	 */
	clearFilters: function(){
		this.filters.each(function(filter){
			filter.setActive(false);
		});
	},

	/** private **/
	getFilterData: function(){
		var filters = [],
			fields  = this.grid.getStore().fields;

		this.filters.each(function(f){
			if(f.active){
				var d = [].concat(f.serialize());
				for(var i=0, len=d.length; i<len; i++)
					filters.push({
						field: f.dataIndex,
						data: d[i]
					});
			}
		});

		return filters;
	},

	/**
	 * Function to take structured filter data and 'flatten' it into query parameteres. The default function
	 * will produce a query string of the form:
	 * 		filters[0][field]=dataIndex&filters[0][data][param1]=param&filters[0][data][param2]=param...
	 *
	 * @param {Array} filters A collection of objects representing active filters and their configuration.
	 * 	  Each element will take the form of {field: dataIndex, data: filterConf}. dataIndex is not assured
	 *    to be unique as any one filter may be a composite of more basic filters for the same dataIndex.
	 *
	 * @return {Object} Query keys and values
	 */
	buildQuery: function(filters){
		var p = {};
		for(var i=0, len=filters.length; i<len; i++){
			var f    = filters[i];
			var root = [this.paramPrefix, '[', i, ']'].join('');
			p[root + '[field]'] = f.field;

			var dataPrefix = root + '[data]';
			for(var key in f.data)
				p[[dataPrefix, '[', key, ']'].join('')] = f.data[key];
		}

		return p;
	},

	/**
	 * Removes filter related query parameters from the provided object.
	 *
	 * @param {Object} p Query parameters that may contain filter related fields.
	 */
	cleanParams: function(p){
		var regex = new RegExp("^" + this.paramPrefix + "\[[0-9]+\]");
		for(var key in p)
			if(regex.test(key))
				delete p[key];
	},

	/**
	 * Function for locating filter classes, overwrite this with your favorite
	 * loader to provide dynamic filter loading.
	 *
	 * @param {String} type The type of filter to load.
	 *
	 * @return {Class}
	 */
	getFilterClass: function(type){
		return Ext.ux.grid.filter[type.substr(0, 1).toUpperCase() + type.substr(1) + 'Filter'];
	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.namespace('Ext.ux.grid.filter');

/**
 * @class Ext.ux.grid.filter.Filter
 * @extends Ext.util.Observable
 * Abstract base class for filter implementations.
 */
Ext.ux.grid.filter.Filter = Ext.extend(Ext.util.Observable, {
	/**
	 * @cfg {Boolean} active
	 * Indicates the initial status of the filter (defaults to false).
	 */
	active : false,
	/**
	 * True if this filter is active.  Use setActive() to alter after configuration.
	 * @type Boolean
	 * @property active
	 */
	/**
	 * @cfg {String} dataIndex
	 * The {@link Ext.data.Store} dataIndex of the field this filter represents.
	 * The dataIndex does not actually have to exist in the store.
	 */
	dataIndex : null,
	/**
	 * The filter configuration menu that will be installed into the filter submenu of a column menu.
	 * @type Ext.menu.Menu
	 * @property
	 */
	menu : null,
	/**
	 * @cfg {Number} updateBuffer
	 * Number of milliseconds to wait after user interaction to fire an update. Only supported
	 * by filters: 'list', 'numeric', and 'string'. Defaults to 500.
	 */
	updateBuffer : 500,

	constructor : function (config) {
		Ext.apply(this, config);

		this.addEvents(
				/**
				 * @event activate
				 * Fires when an inactive filter becomes active
				 * @param {Ext.ux.grid.filter.Filter} this
				 */
				'activate',
				/**
				 * @event deactivate
				 * Fires when an active filter becomes inactive
				 * @param {Ext.ux.grid.filter.Filter} this
				 */
				'deactivate',
				/**
				 * @event serialize
				 * Fires after the serialization process. Use this to attach additional parameters to serialization
				 * data before it is encoded and sent to the server.
				 * @param {Array/Object} data A map or collection of maps representing the current filter configuration.
				 * @param {Ext.ux.grid.filter.Filter} filter The filter being serialized.
				 */
				'serialize',
				/**
				 * @event update
				 * Fires when a filter configuration has changed
				 * @param {Ext.ux.grid.filter.Filter} this The filter object.
				 */
				'update'
		);
		Ext.ux.grid.filter.Filter.superclass.constructor.call(this);

		this.menu = new Ext.menu.Menu();
		this.init(config);
		if (config && config.value) {
			this.setValue(config.value);
			this.setActive(config.active !== false, true);
			delete config.value;
		}
	},

	/**
	 * Destroys this filter by purging any event listeners, and removing any menus.
	 */
	destroy : function() {
		if (this.menu) {
			this.menu.destroy();
		}
		this.purgeListeners();
	},

	/**
	 * Template method to be implemented by all subclasses that is to
	 * initialize the filter and install required menu items.
	 * Defaults to Ext.emptyFn.
	 */
	init : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * get and return the value of the filter.
	 * Defaults to Ext.emptyFn.
	 * @return {Object} The 'serialized' form of this filter
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	getValue : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * set the value of the filter and fire the 'update' event.
	 * Defaults to Ext.emptyFn.
	 * @param {Object} data The value to set the filter
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	setValue : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * return <tt>true</tt> if the filter has enough configuration information to be activated.
	 * Defaults to <tt>return true</tt>.
	 * @return {Boolean}
	 */
	isActivatable : function() {
		return true;
	},

	/**
	 * Template method to be implemented by all subclasses that is to
	 * get and return serialized filter data for transmission to the server.
	 * Defaults to Ext.emptyFn.
	 */
	getSerialArgs : Ext.emptyFn,

	/**
	 * Template method to be implemented by all subclasses that is to
	 * validates the provided Ext.data.Record against the filters configuration.
	 * Defaults to <tt>return true</tt>.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function() {
		return true;
	},

	/**
	 * Returns the serialized filter data for transmission to the server
	 * and fires the 'serialize' event.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	serialize : function() {
		var args = this.getSerialArgs();
		this.fireEvent('serialize', args, this);
		return args;
	},

	/** @private */
	fireUpdate : function() {
		if (this.active) {
			this.fireEvent('update', this);
		}
		this.setActive(this.isActivatable());
	},

	/**
	 * Sets the status of the filter and fires the appropriate events.
	 * @param {Boolean} active		The new filter state.
	 * @param {Boolean} suppressEvent True to prevent events from being fired.
	 * @methodOf Ext.ux.grid.filter.Filter
	 */
	setActive : function(active, suppressEvent) {
		if (this.active != active) {
			this.active = active;
			if (suppressEvent !== true) {
				this.fireEvent(active ? 'activate' : 'deactivate', this);
			}
		}
	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.BooleanFilter
 * @extends Ext.ux.grid.filter.Filter
 * Boolean filters use unique radio group IDs (so you can have more than one!)
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
    ...
    filters: [{
        // required configs
        type: 'boolean',
        dataIndex: 'visible'

        // optional configs
        defaultValue: null, // leave unselected (false selected by default)
        yesText: 'Yes',     // default
        noText: 'No'        // default
    }]
});
 * </code></pre>
 */
Ext.ux.grid.filter.BooleanFilter = Ext.extend(Ext.ux.grid.filter.Filter, {
	/**
	 * @cfg {Boolean} defaultValue
	 * Set this to null if you do not want either option to be checked by default. Defaults to false.
	 */
	defaultValue : false,
	/**
	 * @cfg {String} yesText
	 * Defaults to 'Yes'.
	 */
	yesText : 'Yes',
	/**
	 * @cfg {String} noText
	 * Defaults to 'No'.
	 */
	noText : 'No',

    /**  
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init : function (config) {
        var gId = Ext.id();
		this.options = [
			new Ext.menu.CheckItem({text: this.yesText, group: gId, checked: this.defaultValue === true}),
			new Ext.menu.CheckItem({text: this.noText, group: gId, checked: this.defaultValue === false})];
		
		this.menu.add(this.options[0], this.options[1]);
		
		for(var i=0; i<this.options.length; i++){
			this.options[i].on('click', this.fireUpdate, this);
			this.options[i].on('checkchange', this.fireUpdate, this);
		}
	},
	
    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
		return this.options[0].checked;
	},

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */	
	setValue : function (value) {
		this.options[value ? 0 : 1].setChecked(true);
	},

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
		var args = {type: 'boolean', value: this.getValue()};
		return args;
	},
	
    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
		return record.get(this.dataIndex) == this.getValue();
	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/** 
 * @class Ext.ux.grid.filter.DateFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filter by a configurable Ext.menu.DateMenu
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>    
var filters = new Ext.ux.grid.GridFilters({
    ...
    filters: [{
        // required configs
        type: 'date',
        dataIndex: 'dateAdded',
        
        // optional configs
        dateFormat: 'm/d/Y',  // default
        beforeText: 'Before', // default
        afterText: 'After',   // default
        onText: 'On',         // default
        pickerOpts: {
            // any DateMenu configs
        },

        active: true // default is false
    }]
});
 * </code></pre>
 */
Ext.ux.grid.filter.DateFilter = Ext.extend(Ext.ux.grid.filter.Filter, {
    /**
     * @cfg {String} afterText
     * Defaults to 'After'.
     */
    afterText : 'After',
    /**
     * @cfg {String} beforeText
     * Defaults to 'Before'.
     */
    beforeText : 'Before',
    /**
     * @cfg {Object} compareMap
     * Map for assigning the comparison values used in serialization.
     */
    compareMap : {
        before: 'lt',
        after:  'gt',
        on:     'eq'
    },
    /**
     * @cfg {String} dateFormat
     * The date format to return when using getValue.
     * Defaults to 'm/d/Y'.
     */
    dateFormat : 'm/d/Y',

    /**
     * @cfg {Date} maxDate
     * Allowable date as passed to the Ext.DatePicker
     * Defaults to undefined.
     */
    /**
     * @cfg {Date} minDate
     * Allowable date as passed to the Ext.DatePicker
     * Defaults to undefined.
     */
    /**
     * @cfg {Array} menuItems
     * The items to be shown in this menu
     * Defaults to:<pre>
     * menuItems : ['before', 'after', '-', 'on'],
     * </pre>
     */
    menuItems : ['before', 'after', '-', 'on'],

    /**
     * @cfg {Object} menuItemCfgs
     * Default configuration options for each menu item
     */
    menuItemCfgs : {
        selectOnFocus: true,
        width: 125
    },

    /**
     * @cfg {String} onText
     * Defaults to 'On'.
     */
    onText : 'On',
    
    /**
     * @cfg {Object} pickerOpts
     * Configuration options for the date picker associated with each field.
     */
    pickerOpts : {},

    /**  
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init : function (config) {
        var menuCfg, i, len, item, cfg, Cls;

        menuCfg = Ext.apply(this.pickerOpts, {
            minDate: this.minDate, 
            maxDate: this.maxDate, 
            format:  this.dateFormat,
            listeners: {
                scope: this,
                select: this.onMenuSelect
            }
        });

        this.fields = {};
        for (i = 0, len = this.menuItems.length; i < len; i++) {
            item = this.menuItems[i];
            if (item !== '-') {
                cfg = {
                    itemId: 'range-' + item,
                    text: this[item + 'Text'],
                    menu: new Ext.menu.DateMenu(
                        Ext.apply(menuCfg, {
                            itemId: item
                        })
                    ),
                    listeners: {
                        scope: this,
                        checkchange: this.onCheckChange
                    }
                };
                Cls = Ext.menu.CheckItem;
                item = this.fields[item] = new Cls(cfg);
            }
            //this.add(item);
            this.menu.add(item);
        }
    },

    onCheckChange : function () {
        this.setActive(this.isActivatable());
        this.fireEvent('update', this);
    },

    /**  
     * @private
     * Handler method called when there is a keyup event on an input
     * item of this menu.
     */
    onInputKeyUp : function (field, e) {
        var k = e.getKey();
        if (k == e.RETURN && field.isValid()) {
            e.stopEvent();
            this.menu.hide(true);
            return;
        }
    },

    /**
     * Handler for when the menu for a field fires the 'select' event
     * @param {Object} date
     * @param {Object} menuItem
     * @param {Object} value
     * @param {Object} picker
     */
    onMenuSelect : function (menuItem, value, picker) {
        var fields = this.fields,
            field = this.fields[menuItem.itemId];
        
        field.setChecked(true);
        
        if (field == fields.on) {
            fields.before.setChecked(false, true);
            fields.after.setChecked(false, true);
        } else {
            fields.on.setChecked(false, true);
            if (field == fields.after && fields.before.menu.picker.value < value) {
                fields.before.setChecked(false, true);
            } else if (field == fields.before && fields.after.menu.picker.value > value) {
                fields.after.setChecked(false, true);
            }
        }
        this.fireEvent('update', this);
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        var key, result = {};
        for (key in this.fields) {
            if (this.fields[key].checked) {
                result[key] = this.fields[key].menu.picker.getValue();
            }
        }
        return result;
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     * @param {Boolean} preserve true to preserve the checked status
     * of the other fields.  Defaults to false, unchecking the
     * other fields
     */	
    setValue : function (value, preserve) {
        var key;
        for (key in this.fields) {
            if(value[key]){
                this.fields[key].menu.picker.setValue(value[key]);
                this.fields[key].setChecked(true);
            } else if (!preserve) {
                this.fields[key].setChecked(false);
            }
        }
        this.fireEvent('update', this);
    },

    /**
     * @private
     * Template method that is to return <tt>true</tt> if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        var key;
        for (key in this.fields) {
            if (this.fields[key].checked) {
                return true;
            }
        }
        return false;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        var args = [];
        for (var key in this.fields) {
            if(this.fields[key].checked){
                args.push({
                    type: 'date',
                    comparison: this.compareMap[key],
                    value: this.getFieldValue(key).format(this.dateFormat)
                });
            }
        }
        return args;
    },

    /**
     * Get and return the date menu picker value
     * @param {String} item The field identifier ('before', 'after', 'on')
     * @return {Date} Gets the current selected value of the date field
     */
    getFieldValue : function(item){
        return this.fields[item].menu.picker.getValue();
    },
    
    /**
     * Gets the menu picker associated with the passed field
     * @param {String} item The field identifier ('before', 'after', 'on')
     * @return {Object} The menu picker
     */
    getPicker : function(item){
        return this.fields[item].menu.picker;
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var key,
            pickerValue,
            val = record.get(this.dataIndex);
            
        if(!Ext.isDate(val)){
            return false;
        }
        val = val.clearTime(true).getTime();
        
        for (key in this.fields) {
            if (this.fields[key].checked) {
                pickerValue = this.getFieldValue(key).clearTime(true).getTime();
                if (key == 'before' && pickerValue <= val) {
                    return false;
                }
                if (key == 'after' && pickerValue >= val) {
                    return false;
                }
                if (key == 'on' && pickerValue != val) {
                    return false;
                }
            }
        }
        return true;
    }
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.ux.grid.filter.ListFilter
 * @extends Ext.ux.grid.filter.Filter
 * <p>List filters are able to be preloaded/backed by an Ext.data.Store to load
 * their options the first time they are shown. ListFilter utilizes the
 * {@link Ext.ux.menu.ListMenu} component.</p>
 * <p>Although not shown here, this class accepts all configuration options
 * for {@link Ext.ux.menu.ListMenu}.</p>
 *
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
 var filters = new Ext.ux.grid.GridFilters({
 ...
 filters: [{
 type: 'list',
 dataIndex: 'size',
 phpMode: true,
 // options will be used as data to implicitly creates an ArrayStore
 options: ['extra small', 'small', 'medium', 'large', 'extra large']
 }]
 });
 * </code></pre>
 *
 */
Ext.ux.grid.filter.ListFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {Array} options
	 * <p><code>data</code> to be used to implicitly create a data store
	 * to back this list when the data source is <b>local</b>. If the
	 * data for the list is remote, use the <code>{@link #store}</code>
	 * config instead.</p>
	 * <br><p>Each item within the provided array may be in one of the
	 * following formats:</p>
	 * <div class="mdetail-params"><ul>
	 * <li><b>Array</b> :
	 * <pre><code>
	 options: [
	 [11, 'extra small'],
	 [18, 'small'],
	 [22, 'medium'],
	 [35, 'large'],
	 [44, 'extra large']
	 ]
	 * </code></pre>
	 * </li>
	 * <li><b>Object</b> :
	 * <pre><code>
	 labelField: 'name', // override default of 'text'
	 options: [
	 {id: 11, name:'extra small'},
	 {id: 18, name:'small'},
	 {id: 22, name:'medium'},
	 {id: 35, name:'large'},
	 {id: 44, name:'extra large'}
	 ]
	 * </code></pre>
	 * </li>
	 * <li><b>String</b> :
	 * <pre><code>
	 * options: ['extra small', 'small', 'medium', 'large', 'extra large']
	 * </code></pre>
	 * </li>
	 */
	/**
	 * @cfg {Boolean} phpMode
	 * <p>Adjust the format of this filter. Defaults to false.</p>
	 * <br><p>When GridFilters <code>@cfg encode = false</code> (default):</p>
	 * <pre><code>
	 // phpMode == false (default):
	 filter[0][data][type] list
	 filter[0][data][value] value1
	 filter[0][data][value] value2
	 filter[0][field] prod

	 // phpMode == true:
	 filter[0][data][type] list
	 filter[0][data][value] value1, value2
	 filter[0][field] prod
	 * </code></pre>
	 * When GridFilters <code>@cfg encode = true</code>:
	 * <pre><code>
	 // phpMode == false (default):
	 filter : [{"type":"list","value":["small","medium"],"field":"size"}]

	 // phpMode == true:
	 filter : [{"type":"list","value":"small,medium","field":"size"}]
	 * </code></pre>
	 */
	phpMode : false,
	/**
	 * @cfg {Ext.data.Store} store
	 * The {@link Ext.data.Store} this list should use as its data source
	 * when the data source is <b>remote</b>. If the data for the list
	 * is local, use the <code>{@link #options}</code> config instead.
	 */

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 * @param {Object} config
	 */
	init : function (config) {
		this.dt = new Ext.util.DelayedTask(this.fireUpdate, this);

		// if a menu already existed, do clean up first
		if (this.menu) {
			this.menu.destroy();
		}
		this.menu = new Ext.ux.menu.ListMenu(config);
		this.menu.on('checkchange', this.onCheckChange, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.menu.getSelected();
	},
	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.menu.setSelected(value);
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		return this.getValue().length > 0;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var args = {type: 'list', value: this.phpMode ? this.getValue().join(',') : this.getValue()};
		return args;
	},

	/** @private */
	onCheckChange : function() {
		this.dt.delay(this.updateBuffer);
	},


	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		return this.getValue().indexOf(record.get(this.dataIndex)) > -1;
	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.ux.grid.filter.NumericFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filters using an Ext.ux.menu.RangeMenu.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
 var filters = new Ext.ux.grid.GridFilters({
 ...
 filters: [{
 type: 'numeric',
 dataIndex: 'price'
 }]
 });
 * </code></pre>
 */
Ext.ux.grid.filter.NumericFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {Object} fieldCls
	 * The Class to use to construct each field item within this menu
	 * Defaults to:<pre>
	 * fieldCls : Ext.form.NumberField
	 * </pre>
	 */
	fieldCls : Ext.form.NumberField,
	/**
	 * @cfg {Object} fieldCfg
	 * The default configuration options for any field item unless superseded
	 * by the <code>{@link #fields}</code> configuration.
	 * Defaults to:<pre>
	 * fieldCfg : {}
	 * </pre>
	 * Example usage:
	 * <pre><code>
	 fieldCfg : {
	 width: 150,
	 },
	 * </code></pre>
	 */
	/**
	 * @cfg {Object} fields
	 * The field items may be configured individually
	 * Defaults to <tt>undefined</tt>.
	 * Example usage:
	 * <pre><code>
	 fields : {
	 gt: { // override fieldCfg options
	 width: 200,
	 fieldCls: Ext.ux.form.CustomNumberField // to override default {@link #fieldCls}
	 }
	 },
	 * </code></pre>
	 */
	/**
	 * @cfg {Object} iconCls
	 * The iconCls to be applied to each comparator field item.
	 * Defaults to:<pre>
	 iconCls : {
	 gt : 'ux-rangemenu-gt',
	 lt : 'ux-rangemenu-lt',
	 eq : 'ux-rangemenu-eq'
	 }
	 * </pre>
	 */
	iconCls : {
		gt : 'ux-rangemenu-gt',
		lt : 'ux-rangemenu-lt',
		eq : 'ux-rangemenu-eq'
	},

	/**
	 * @cfg {Object} menuItemCfgs
	 * Default configuration options for each menu item
	 * Defaults to:<pre>
	 menuItemCfgs : {
	 emptyText: 'Enter Filter Text...',
	 selectOnFocus: true,
	 width: 125
	 }
	 * </pre>
	 */
	menuItemCfgs : {
		emptyText: 'Enter Filter Text...',
		selectOnFocus: true,
		width: 125
	},

	/**
	 * @cfg {Array} menuItems
	 * The items to be shown in this menu.  Items are added to the menu
	 * according to their position within this array. Defaults to:<pre>
	 * menuItems : ['lt','gt','-','eq']
	 * </pre>
	 */
	menuItems : ['lt', 'gt', '-', 'eq'],

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		// if a menu already existed, do clean up first
		if (this.menu) {
			this.menu.destroy();
		}
		this.menu = new Ext.ux.menu.RangeMenu(Ext.apply(config, {
					// pass along filter configs to the menu
					fieldCfg : this.fieldCfg || {},
					fieldCls : this.fieldCls,
					fields : this.fields || {},
					iconCls: this.iconCls,
					menuItemCfgs: this.menuItemCfgs,
					menuItems: this.menuItems,
					updateBuffer: this.updateBuffer
				}));
		// relay the event fired by the menu
		this.menu.on('update', this.fireUpdate, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.menu.getValue();
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.menu.setValue(value);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		var values = this.getValue();
		for (key in values) {
			if (values[key] !== undefined) {
				return true;
			}
		}
		return false;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		var key,
				args = [],
				values = this.menu.getValue();
		for (key in values) {
			args.push({
						type: 'numeric',
						comparison: key,
						value: values[key]
					});
		}
		return args;
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		var val = record.get(this.dataIndex),
				values = this.getValue();
		if (values.eq !== undefined && val != values.eq) {
			return false;
		}
		if (values.lt !== undefined && val >= values.lt) {
			return false;
		}
		if (values.gt !== undefined && val <= values.gt) {
			return false;
		}
		return true;
	}
});
/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.ux.grid.filter.StringFilter
 * @extends Ext.ux.grid.filter.Filter
 * Filter by a configurable Ext.form.TextField
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
 var filters = new Ext.ux.grid.GridFilters({
 ...
 filters: [{
 // required configs
 type: 'string',
 dataIndex: 'name',

 // optional configs
 value: 'foo',
 active: true, // default is false
 iconCls: 'ux-gridfilter-text-icon' // default
 // any Ext.form.TextField configs accepted
 }]
 });
 * </code></pre>
 */
Ext.ux.grid.filter.StringFilter = Ext.extend(Ext.ux.grid.filter.Filter, {

	/**
	 * @cfg {String} iconCls
	 * The iconCls to be applied to the menu item.
	 * Defaults to <tt>'ux-gridfilter-text-icon'</tt>.
	 */
	iconCls : 'ux-gridfilter-text-icon',

	emptyText: 'Enter Filter Text...',
	selectOnFocus: true,
	width: 125,

	/**
	 * @private
	 * Template method that is to initialize the filter and install required menu items.
	 */
	init : function (config) {
		Ext.applyIf(config, {
					enableKeyEvents: true,
					iconCls: this.iconCls,
					listeners: {
						scope: this,
						keyup: this.onInputKeyUp
					}
				});

		this.inputItem = new Ext.form.TextField(config);
		this.menu.add(this.inputItem);
		this.updateTask = new Ext.util.DelayedTask(this.fireUpdate, this);
	},

	/**
	 * @private
	 * Template method that is to get and return the value of the filter.
	 * @return {String} The value of this filter
	 */
	getValue : function () {
		return this.inputItem.getValue();
	},

	/**
	 * @private
	 * Template method that is to set the value of the filter.
	 * @param {Object} value The value to set the filter
	 */
	setValue : function (value) {
		this.inputItem.setValue(value);
		this.fireEvent('update', this);
	},

	/**
	 * @private
	 * Template method that is to return <tt>true</tt> if the filter
	 * has enough configuration information to be activated.
	 * @return {Boolean}
	 */
	isActivatable : function () {
		return this.inputItem.getValue().length > 0;
	},

	/**
	 * @private
	 * Template method that is to get and return serialized filter data for
	 * transmission to the server.
	 * @return {Object/Array} An object or collection of objects containing
	 * key value pairs representing the current configuration of the filter.
	 */
	getSerialArgs : function () {
		return {type: 'string', value: this.getValue()};
	},

	/**
	 * Template method that is to validate the provided Ext.data.Record
	 * against the filters configuration.
	 * @param {Ext.data.Record} record The record to validate
	 * @return {Boolean} true if the record is valid within the bounds
	 * of the filter, false otherwise.
	 */
	validateRecord : function (record) {
		var val = record.get(this.dataIndex);

		if (typeof val != 'string') {
			return (this.getValue().length === 0);
		}

		return val.toLowerCase().indexOf(this.getValue().toLowerCase()) > -1;
	},

	/**
	 * @private
	 * Handler method called when there is a keyup event on this.inputItem
	 */
	onInputKeyUp : function (field, e) {
		var k = e.getKey();
		if (k == e.RETURN && field.isValid()) {
			e.stopEvent();
			this.menu.hide(true);
			return;
		}
		// restart the timer
		this.updateTask.delay(this.updateBuffer);
	}
});

// jslint.js
// 2009-08-31

/*
Copyright (c) 2002 Douglas Crockford  (www.JSLint.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
    JSLINT is a global function. It takes two parameters.

        var myResult = JSLINT(source, option);

    The first parameter is either a string or an array of strings. If it is a
    string, it will be split on '\n' or '\r'. If it is an array of strings, it
    is assumed that each string represents one line. The source can be a
    JavaScript text, or HTML text, or a Konfabulator text.

    The second parameter is an optional object of options which control the
    operation of JSLINT. Most of the options are booleans: They are all are
    optional and have a default value of false.

    If it checks out, JSLINT returns true. Otherwise, it returns false.

    If false, you can inspect JSLINT.errors to find out the problems.
    JSLINT.errors is an array of objects containing these members:

    {
        line      : The line (relative to 0) at which the lint was found
        character : The character (relative to 0) at which the lint was found
        reason    : The problem
        evidence  : The text line in which the problem occurred
        raw       : The raw message before the details were inserted
        a         : The first detail
        b         : The second detail
        c         : The third detail
        d         : The fourth detail
    }

    If a fatal error was found, a null will be the last element of the
    JSLINT.errors array.

    You can request a Function Report, which shows all of the functions
    and the parameters and vars that they use. This can be used to find
    implied global variables and other problems. The report is in HTML and
    can be inserted in an HTML <body>.

        var myReport = JSLINT.report(limited);

    If limited is true, then the report will be limited to only errors.

    You can request a data structure which contains JSLint's results.

        var myData = JSLINT.data();

    It returns a structure with this form:

    {
        errors: [
            {
                line: NUMBER,
                character: NUMBER,
                reason: STRING,
                evidence: STRING
            }
        ],
        functions: [
            name: STRING,
            line: NUMBER,
            last: NUMBER,
            param: [
                STRING
            ],
            closure: [
                STRING
            ],
            var: [
                STRING
            ],
            exception: [
                STRING
            ],
            outer: [
                STRING
            ],
            unused: [
                STRING
            ],
            global: [
                STRING
            ],
            label: [
                STRING
            ]
        ],
        globals: [
            STRING
        ],
        member: {
            STRING: NUMBER
        },
        unuseds: [
            {
                name: STRING,
                line: NUMBER
            }
        ],
        implieds: [
            {
                name: STRING,
                line: NUMBER
            }
        ],
        urls: [
            STRING
        ],
        json: BOOLEAN
    }

    Empty arrays will not be included.

*/

/*jslint
    evil: true, nomen: false, onevar: false, regexp: false, strict: true
*/

/*members "\b", "\t", "\n", "\f", "\r", "\"", "%", "(begin)",
    "(breakage)", "(context)", "(error)", "(global)", "(identifier)",
    "(last)", "(line)", "(loopage)", "(name)", "(onevar)", "(params)",
    "(scope)", "(verb)", "++", "--", "\/", ADSAFE, Array, Boolean, COM,
    Canvas, CustomAnimation, Date, Debug, E, Error, EvalError,
    FadeAnimation, Flash, FormField, Frame, Function, HotKey, Image, JSON,
    LN10, LN2, LOG10E, LOG2E, MAX_VALUE, MIN_VALUE, Math, MenuItem,
    MoveAnimation, NEGATIVE_INFINITY, Number, Object, Option, PI,
    POSITIVE_INFINITY, Point, RangeError, Rectangle, ReferenceError, RegExp,
    ResizeAnimation, RotateAnimation, SQRT1_2, SQRT2, ScrollBar, String,
    Style, SyntaxError, System, Text, TextArea, Timer, TypeError, URIError,
    URL, Web, Window, XMLDOM, XMLHttpRequest, "\\", a, abbr, acronym,
    addEventListener, address, adsafe, alert, aliceblue, animator,
    antiquewhite, appleScript, applet, apply, approved, aqua, aquamarine,
    area, arguments, arity, autocomplete, azure, b, background,
    "background-attachment", "background-color", "background-image",
    "background-position", "background-repeat", base, bdo, beep, beige, big,
    bisque, bitwise, black, blanchedalmond, block, blockquote, blue,
    blueviolet, blur, body, border, "border-bottom", "border-bottom-color",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-left", "border-left-color", "border-left-style",
    "border-left-width", "border-right", "border-right-color",
    "border-right-style", "border-right-width", "border-spacing",
    "border-style", "border-top", "border-top-color", "border-top-style",
    "border-top-width", "border-width", bottom, br, brown, browser,
    burlywood, button, bytesToUIString, c, cadetblue, call, callee, caller,
    canvas, cap, caption, "caption-side", cases, center, charAt, charCodeAt,
    character, chartreuse, chocolate, chooseColor, chooseFile, chooseFolder,
    cite, clear, clearInterval, clearTimeout, clip, close, closeWidget,
    closed, closure, cm, code, col, colgroup, color, comment, condition,
    confirm, console, constructor, content, convertPathToHFS,
    convertPathToPlatform, coral, cornflowerblue, cornsilk,
    "counter-increment", "counter-reset", create, crimson, css, cursor,
    cyan, d, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen,
    darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred,
    darksalmon, darkseagreen, darkslateblue, darkslategray, darkturquoise,
    darkviolet, data, dd, debug, decodeURI, decodeURIComponent, deeppink,
    deepskyblue, defaultStatus, defineClass, del, deserialize, dfn,
    dimension, dimgray, dir, direction, display, div, dl, document,
    dodgerblue, dt, edition, else, em, embed, empty, "empty-cells",
    encodeURI, encodeURIComponent, entityify, eqeqeq, errors, escape, eval,
    event, evidence, evil, ex, exception, exec, exps, fieldset, filesystem,
    firebrick, first, float, floor, floralwhite, focus, focusWidget, font,
    "font-face", "font-family", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-variant", "font-weight",
    forestgreen, forin, form, fragment, frame, frames, frameset, from,
    fromCharCode, fuchsia, fud, funct, function, functions, g, gainsboro,
    gc, getComputedStyle, ghostwhite, global, globals, gold, goldenrod,
    gray, green, greenyellow, h1, h2, h3, h4, h5, h6, hasOwnProperty, head,
    height, help, history, honeydew, hotpink, hr, html, i, iTunes, id,
    identifier, iframe, img, immed, implieds, import, in, include, indent,
    indexOf, indianred, indigo, init, input, ins, isAlpha,
    isApplicationRunning, isDigit, isFinite, isNaN, ivory, join, jslint,
    json, kbd, khaki, konfabulatorVersion, label, labelled, lang, last,
    lavender, lavenderblush, lawngreen, laxbreak, lbp, led, left, legend,
    lemonchiffon, length, "letter-spacing", li, lib, lightblue, lightcoral,
    lightcyan, lightgoldenrodyellow, lightgreen, lightpink, lightsalmon,
    lightseagreen, lightskyblue, lightslategray, lightsteelblue,
    lightyellow, lime, limegreen, line, "line-height", linen, link,
    "list-style", "list-style-image", "list-style-position",
    "list-style-type", load, loadClass, location, log, m, magenta, map,
    margin, "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marker-offset", maroon, match, "max-height", "max-width", maxerr, md5,
    media, mediumaquamarine, mediumblue, mediumorchid, mediumpurple,
    mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise,
    mediumvioletred, member, menu, message, meta, midnightblue,
    "min-height", "min-width", mintcream, mistyrose, mm, moccasin, moveBy,
    moveTo, name, navajowhite, navigator, navy, new, newcap, noframes,
    nomen, noscript, nud, object, ol, oldlace, olive, olivedrab, on,
    onbeforeunload, onblur, onerror, onevar, onfocus, onload, onresize,
    onunload, opacity, open, openURL, opener, opera, optgroup, option,
    orange, orangered, orchid, outer, outline, "outline-color",
    "outline-style", "outline-width", overflow, "overflow-x", "overflow-y",
    p, padding, "padding-bottom", "padding-left", "padding-right",
    "padding-top", page, "page-break-after", "page-break-before",
    palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip,
    param, parent, parseFloat, parseInt, passfail, pc, peachpuff, peru,
    pink, play, plum, plusplus, pop, popupMenu, position, powderblue, pre,
    predef, preferenceGroups, preferences, print, prompt, prototype, pt,
    purple, push, px, q, quit, quotes, random, range, raw, reach, readFile,
    readUrl, reason, red, regexp, reloadWidget, removeEventListener,
    replace, report, reserved, resizeBy, resizeTo, resolvePath,
    resumeUpdates, rhino, right, rosybrown, royalblue, runCommand,
    runCommandInBg, saddlebrown, safe, salmon, samp, sandybrown, saveAs,
    savePreferences, screen, script, scroll, scrollBy, scrollTo, seagreen,
    seal, search, seashell, select, serialize, setInterval, setTimeout,
    shift, showWidgetPreferences, sidebar, sienna, silver, skyblue,
    slateblue, slategray, sleep, slice, small, snow, sort, span, spawn,
    speak, split, springgreen, src, status, steelblue, strict, strong,
    style, styleproperty, sub, substr, sup, supplant, suppressUpdates, sync,
    system, table, "table-layout", tan, tbody, td, teal, tellWidget, test,
    "text-align", "text-decoration", "text-indent", "text-shadow",
    "text-transform", textarea, tfoot, th, thead, thistle, title,
    toLowerCase, toString, toUpperCase, toint32, token, tomato, top, tr, tt,
    turquoise, type, u, ul, undef, unescape, "unicode-bidi", unused,
    unwatch, updateNow, urls, value, valueOf, var, version,
    "vertical-align", violet, visibility, watch, wheat, white,
    "white-space", whitesmoke, widget, width, "word-spacing", "word-wrap",
    yahooCheckLogin, yahooLogin, yahooLogout, yellow, yellowgreen,
    "z-index"
*/



// We build the application inside a function so that we produce only a single
// global variable. The function will be invoked, its return value is the JSLINT
// application itself.

"use strict";

var JSLINT = (function () {
    var adsafe_id,      // The widget's ADsafe id.
        adsafe_may,     // The widget may load approved scripts.
        adsafe_went,    // ADSAFE.go has been called.
        anonname,       // The guessed name for anonymous functions.
        approved,       // ADsafe approved urls.

        atrule = {
            media      : true,
            'font-face': true,
            page       : true
        },

// These are members that should not be permitted in the safe subset.

        banned = {              // the member names that ADsafe prohibits.
            'arguments'     : true,
            callee          : true,
            caller          : true,
            constructor     : true,
            'eval'          : true,
            prototype       : true,
            unwatch         : true,
            valueOf         : true,
            watch           : true
        },


// These are the JSLint boolean options.

        boolOptions = {
            adsafe     : true, // if ADsafe should be enforced
            bitwise    : true, // if bitwise operators should not be allowed
            browser    : true, // if the standard browser globals should be predefined
            cap        : true, // if upper case HTML should be allowed
            css        : true, // if CSS workarounds should be tolerated
            debug      : true, // if debugger statements should be allowed
            eqeqeq     : true, // if === should be required
            evil       : true, // if eval should be allowed
            forin      : true, // if for in statements must filter
            fragment   : true, // if HTML fragments should be allowed
            immed      : true, // if immediate invocations must be wrapped in parens
            laxbreak   : true, // if line breaks should not be checked
            newcap     : true, // if constructor names must be capitalized
            nomen      : true, // if names should be checked
            on         : true, // if HTML event handlers should be allowed
            onevar     : true, // if only one var statement per function should be allowed
            passfail   : true, // if the scan should stop on first error
            plusplus   : true, // if increment/decrement should not be allowed
            regexp     : true, // if the . should not be allowed in regexp literals
            rhino      : true, // if the Rhino environment globals should be predefined
            undef      : true, // if variables should be declared before used
            safe       : true, // if use of some browser features should be restricted
            sidebar    : true, // if the System object should be predefined
            strict     : true, // require the "use strict"; pragma
            sub        : true, // if all forms of subscript notation are tolerated
            white      : true, // if strict whitespace rules apply
            widget     : true  // if the Yahoo Widgets globals should be predefined
        },

// browser contains a set of global names which are commonly provided by a
// web browser environment.

        browser = {
            addEventListener: false,
            alert           : false,
            blur            : false,
            clearInterval   : false,
            clearTimeout    : false,
            close           : false,
            closed          : false,
            confirm         : false,
            console         : false,
            Debug           : false,
            defaultStatus   : false,
            document        : false,
            event           : false,
            focus           : false,
            frames          : false,
            getComputedStyle: false,
            history         : false,
            Image           : false,
            length          : false,
            location        : false,
            moveBy          : false,
            moveTo          : false,
            name            : false,
            navigator       : false,
            onbeforeunload  : true,
            onblur          : true,
            onerror         : true,
            onfocus         : true,
            onload          : true,
            onresize        : true,
            onunload        : true,
            open            : false,
            opener          : false,
            opera           : false,
            Option          : false,
            parent          : false,
            print           : false,
            prompt          : false,
            removeEventListener: false,
            resizeBy        : false,
            resizeTo        : false,
            screen          : false,
            scroll          : false,
            scrollBy        : false,
            scrollTo        : false,
            setInterval     : false,
            setTimeout      : false,
            status          : false,
            top             : false,
            XMLHttpRequest  : false
        },

        cssAttributeData,
        cssAny,

        cssColorData = {
            "aliceblue"             : true,
            "antiquewhite"          : true,
            "aqua"                  : true,
            "aquamarine"            : true,
            "azure"                 : true,
            "beige"                 : true,
            "bisque"                : true,
            "black"                 : true,
            "blanchedalmond"        : true,
            "blue"                  : true,
            "blueviolet"            : true,
            "brown"                 : true,
            "burlywood"             : true,
            "cadetblue"             : true,
            "chartreuse"            : true,
            "chocolate"             : true,
            "coral"                 : true,
            "cornflowerblue"        : true,
            "cornsilk"              : true,
            "crimson"               : true,
            "cyan"                  : true,
            "darkblue"              : true,
            "darkcyan"              : true,
            "darkgoldenrod"         : true,
            "darkgray"              : true,
            "darkgreen"             : true,
            "darkkhaki"             : true,
            "darkmagenta"           : true,
            "darkolivegreen"        : true,
            "darkorange"            : true,
            "darkorchid"            : true,
            "darkred"               : true,
            "darksalmon"            : true,
            "darkseagreen"          : true,
            "darkslateblue"         : true,
            "darkslategray"         : true,
            "darkturquoise"         : true,
            "darkviolet"            : true,
            "deeppink"              : true,
            "deepskyblue"           : true,
            "dimgray"               : true,
            "dodgerblue"            : true,
            "firebrick"             : true,
            "floralwhite"           : true,
            "forestgreen"           : true,
            "fuchsia"               : true,
            "gainsboro"             : true,
            "ghostwhite"            : true,
            "gold"                  : true,
            "goldenrod"             : true,
            "gray"                  : true,
            "green"                 : true,
            "greenyellow"           : true,
            "honeydew"              : true,
            "hotpink"               : true,
            "indianred"             : true,
            "indigo"                : true,
            "ivory"                 : true,
            "khaki"                 : true,
            "lavender"              : true,
            "lavenderblush"         : true,
            "lawngreen"             : true,
            "lemonchiffon"          : true,
            "lightblue"             : true,
            "lightcoral"            : true,
            "lightcyan"             : true,
            "lightgoldenrodyellow"  : true,
            "lightgreen"            : true,
            "lightpink"             : true,
            "lightsalmon"           : true,
            "lightseagreen"         : true,
            "lightskyblue"          : true,
            "lightslategray"        : true,
            "lightsteelblue"        : true,
            "lightyellow"           : true,
            "lime"                  : true,
            "limegreen"             : true,
            "linen"                 : true,
            "magenta"               : true,
            "maroon"                : true,
            "mediumaquamarine"      : true,
            "mediumblue"            : true,
            "mediumorchid"          : true,
            "mediumpurple"          : true,
            "mediumseagreen"        : true,
            "mediumslateblue"       : true,
            "mediumspringgreen"     : true,
            "mediumturquoise"       : true,
            "mediumvioletred"       : true,
            "midnightblue"          : true,
            "mintcream"             : true,
            "mistyrose"             : true,
            "moccasin"              : true,
            "navajowhite"           : true,
            "navy"                  : true,
            "oldlace"               : true,
            "olive"                 : true,
            "olivedrab"             : true,
            "orange"                : true,
            "orangered"             : true,
            "orchid"                : true,
            "palegoldenrod"         : true,
            "palegreen"             : true,
            "paleturquoise"         : true,
            "palevioletred"         : true,
            "papayawhip"            : true,
            "peachpuff"             : true,
            "peru"                  : true,
            "pink"                  : true,
            "plum"                  : true,
            "powderblue"            : true,
            "purple"                : true,
            "red"                   : true,
            "rosybrown"             : true,
            "royalblue"             : true,
            "saddlebrown"           : true,
            "salmon"                : true,
            "sandybrown"            : true,
            "seagreen"              : true,
            "seashell"              : true,
            "sienna"                : true,
            "silver"                : true,
            "skyblue"               : true,
            "slateblue"             : true,
            "slategray"             : true,
            "snow"                  : true,
            "springgreen"           : true,
            "steelblue"             : true,
            "tan"                   : true,
            "teal"                  : true,
            "thistle"               : true,
            "tomato"                : true,
            "turquoise"             : true,
            "violet"                : true,
            "wheat"                 : true,
            "white"                 : true,
            "whitesmoke"            : true,
            "yellow"                : true,
            "yellowgreen"           : true
        },

        cssBorderStyle,
        cssBreak,

        cssLengthData = {
            '%': true,
            'cm': true,
            'em': true,
            'ex': true,
            'in': true,
            'mm': true,
            'pc': true,
            'pt': true,
            'px': true
        },

        cssOverflow,

        escapes = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '/' : '\\/',
            '\\': '\\\\'
        },

        funct,          // The current function

        functionicity = [
            'closure', 'exception', 'global', 'label',
            'outer', 'unused', 'var'
        ],

        functions,      // All of the functions

        global,         // The global scope
        htmltag = {
            a:        {},
            abbr:     {},
            acronym:  {},
            address:  {},
            applet:   {},
            area:     {empty: true, parent: ' map '},
            b:        {},
            base:     {empty: true, parent: ' head '},
            bdo:      {},
            big:      {},
            blockquote: {},
            body:     {parent: ' html noframes '},
            br:       {empty: true},
            button:   {},
            canvas:   {parent: ' body p div th td '},
            caption:  {parent: ' table '},
            center:   {},
            cite:     {},
            code:     {},
            col:      {empty: true, parent: ' table colgroup '},
            colgroup: {parent: ' table '},
            dd:       {parent: ' dl '},
            del:      {},
            dfn:      {},
            dir:      {},
            div:      {},
            dl:       {},
            dt:       {parent: ' dl '},
            em:       {},
            embed:    {},
            fieldset: {},
            font:     {},
            form:     {},
            frame:    {empty: true, parent: ' frameset '},
            frameset: {parent: ' html frameset '},
            h1:       {},
            h2:       {},
            h3:       {},
            h4:       {},
            h5:       {},
            h6:       {},
            head:     {parent: ' html '},
            html:     {parent: '*'},
            hr:       {empty: true},
            i:        {},
            iframe:   {},
            img:      {empty: true},
            input:    {empty: true},
            ins:      {},
            kbd:      {},
            label:    {},
            legend:   {parent: ' fieldset '},
            li:       {parent: ' dir menu ol ul '},
            link:     {empty: true, parent: ' head '},
            map:      {},
            menu:     {},
            meta:     {empty: true, parent: ' head noframes noscript '},
            noframes: {parent: ' html body '},
            noscript: {parent: ' body head noframes '},
            object:   {},
            ol:       {},
            optgroup: {parent: ' select '},
            option:   {parent: ' optgroup select '},
            p:        {},
            param:    {empty: true, parent: ' applet object '},
            pre:      {},
            q:        {},
            samp:     {},
            script:   {empty: true, parent: ' body div frame head iframe p pre span '},
            select:   {},
            small:    {},
            span:     {},
            strong:   {},
            style:    {parent: ' head ', empty: true},
            sub:      {},
            sup:      {},
            table:    {},
            tbody:    {parent: ' table '},
            td:       {parent: ' tr '},
            textarea: {},
            tfoot:    {parent: ' table '},
            th:       {parent: ' tr '},
            thead:    {parent: ' table '},
            title:    {parent: ' head '},
            tr:       {parent: ' table tbody thead tfoot '},
            tt:       {},
            u:        {},
            ul:       {},
            'var':    {}
        },

        ids,            // HTML ids
        implied,        // Implied globals
        inblock,
        indent,
        jsonmode,
        lines,
        lookahead,
        member,
        membersOnly,
        nexttoken,
        noreach,
        option,
        predefined,     // Global variables defined by option
        prereg,
        prevtoken,

        rhino = {
            defineClass : false,
            deserialize : false,
            gc          : false,
            help        : false,
            load        : false,
            loadClass   : false,
            print       : false,
            quit        : false,
            readFile    : false,
            readUrl     : false,
            runCommand  : false,
            seal        : false,
            serialize   : false,
            spawn       : false,
            sync        : false,
            toint32     : false,
            version     : false
        },

        scope,      // The current scope

        sidebar = {
            System      : false
        },

        src,
        stack,

// standard contains the global names that are provided by the
// ECMAScript standard.

        standard = {
            Array               : false,
            Boolean             : false,
            Date                : false,
            decodeURI           : false,
            decodeURIComponent  : false,
            encodeURI           : false,
            encodeURIComponent  : false,
            Error               : false,
            'eval'              : false,
            EvalError           : false,
            Function            : false,
            hasOwnProperty      : false,
            isFinite            : false,
            isNaN               : false,
            JSON                : false,
            Math                : false,
            Number              : false,
            Object              : false,
            parseInt            : false,
            parseFloat          : false,
            RangeError          : false,
            ReferenceError      : false,
            RegExp              : false,
            String              : false,
            SyntaxError         : false,
            TypeError           : false,
            URIError            : false
        },

        standard_member = {
            E                   : true,
            LN2                 : true,
            LN10                : true,
            LOG2E               : true,
            LOG10E              : true,
            PI                  : true,
            SQRT1_2             : true,
            SQRT2               : true,
            MAX_VALUE           : true,
            MIN_VALUE           : true,
            NEGATIVE_INFINITY   : true,
            POSITIVE_INFINITY   : true
        },

        syntax = {},
        tab,
        token,
        urls,
        warnings,

// widget contains the global names which are provided to a Yahoo
// (fna Konfabulator) widget.

        widget = {
            alert                   : true,
            animator                : true,
            appleScript             : true,
            beep                    : true,
            bytesToUIString         : true,
            Canvas                  : true,
            chooseColor             : true,
            chooseFile              : true,
            chooseFolder            : true,
            closeWidget             : true,
            COM                     : true,
            convertPathToHFS        : true,
            convertPathToPlatform   : true,
            CustomAnimation         : true,
            escape                  : true,
            FadeAnimation           : true,
            filesystem              : true,
            Flash                   : true,
            focusWidget             : true,
            form                    : true,
            FormField               : true,
            Frame                   : true,
            HotKey                  : true,
            Image                   : true,
            include                 : true,
            isApplicationRunning    : true,
            iTunes                  : true,
            konfabulatorVersion     : true,
            log                     : true,
            md5                     : true,
            MenuItem                : true,
            MoveAnimation           : true,
            openURL                 : true,
            play                    : true,
            Point                   : true,
            popupMenu               : true,
            preferenceGroups        : true,
            preferences             : true,
            print                   : true,
            prompt                  : true,
            random                  : true,
            Rectangle               : true,
            reloadWidget            : true,
            ResizeAnimation         : true,
            resolvePath             : true,
            resumeUpdates           : true,
            RotateAnimation         : true,
            runCommand              : true,
            runCommandInBg          : true,
            saveAs                  : true,
            savePreferences         : true,
            screen                  : true,
            ScrollBar               : true,
            showWidgetPreferences   : true,
            sleep                   : true,
            speak                   : true,
            Style                   : true,
            suppressUpdates         : true,
            system                  : true,
            tellWidget              : true,
            Text                    : true,
            TextArea                : true,
            Timer                   : true,
            unescape                : true,
            updateNow               : true,
            URL                     : true,
            Web                     : true,
            widget                  : true,
            Window                  : true,
            XMLDOM                  : true,
            XMLHttpRequest          : true,
            yahooCheckLogin         : true,
            yahooLogin              : true,
            yahooLogout             : true
        },

//  xmode is used to adapt to the exceptions in html parsing.
//  It can have these states:
//      false   .js script file
//      html
//      outer
//      script
//      style
//      scriptstring
//      styleproperty

        xmode,
        xquote,

// unsafe comment or string
        ax = /@cc|<\/?|script|\]*s\]|<\s*!|&lt/i,
// unsafe characters that are silently deleted by one or more browsers
        cx = /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,
// token
        tx = /^\s*([(){}\[.,:;'"~\?\]#@]|==?=?|\/(\*(jslint|members?|global)?|=|\/)?|\*[\/=]?|\+[+=]?|-[\-=]?|%=?|&[&=]?|\|[|=]?|>>?>?=?|<([\/=!]|\!(\[|--)?|<=?)?|\^=?|\!=?=?|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+([xX][0-9a-fA-F]+|\.[0-9]*)?([eE][+\-]?[0-9]+)?)/,
// html token
        hx = /^\s*(['"=>\/&#]|<(?:\/|\!(?:--)?)?|[a-zA-Z][a-zA-Z0-9_\-]*|[0-9]+|--|.)/,
// characters in strings that need escapement
        nx = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,
        nxg = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
// outer html token
        ox = /[>&]|<[\/!]?|--/,
// star slash
        lx = /\*\/|\/\*/,
// identifier
        ix = /^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,
// javascript url
        jx = /^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i,
// url badness
        ux = /&|\+|\u00AD|\.\.|\/\*|%[^;]|base64|url|expression|data|mailto/i,
// style
        sx = /^\s*([{:#%.=,>+\[\]@()"';]|\*=?|\$=|\|=|\^=|~=|[a-zA-Z_][a-zA-Z0-9_\-]*|[0-9]+|<\/|\/\*)/,
        ssx = /^\s*([@#!"'};:\-%.=,+\[\]()*_]|[a-zA-Z][a-zA-Z0-9._\-]*|\/\*?|\d+(?:\.\d+)?|<\/)/,
// attributes characters
        qx = /[^a-zA-Z0-9-_\/ ]/,
// query characters for ids
        dx = /[\[\]\/\\"'*<>.&:(){}+=#]/,

        rx = {
            outer: hx,
            html: hx,
            style: sx,
            styleproperty: ssx
        };

    function F() {}

    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            F.prototype = o;
            return new F();
        };
    }


    function is_own(object, name) {
        return Object.prototype.hasOwnProperty.call(object, name);
    }


    function combine(t, o) {
        var n;
        for (n in o) {
            if (is_own(o, n)) {
                t[n] = o[n];
            }
        }
    }

    String.prototype.entityify = function () {
        return this.
            replace(/&/g, '&amp;').
            replace(/</g, '&lt;').
            replace(/>/g, '&gt;');
    };

    String.prototype.isAlpha = function () {
        return (this >= 'a' && this <= 'z\uffff') ||
            (this >= 'A' && this <= 'Z\uffff');
    };


    String.prototype.isDigit = function () {
        return (this >= '0' && this <= '9');
    };


    String.prototype.supplant = function (o) {
        return this.replace(/\{([^{}]*)\}/g, function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    };

    String.prototype.name = function () {

// If the string looks like an identifier, then we can return it as is.
// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can simply slap some quotes around it.
// Otherwise we must also replace the offending characters with safe
// sequences.

        if (ix.test(this)) {
            return this;
        }
        if (nx.test(this)) {
            return '"' + this.replace(nxg, function (a) {
                var c = escapes[a];
                if (c) {
                    return c;
                }
                return '\\u' + ('0000' + a.charCodeAt().toString(16)).slice(-4);
            }) + '"';
        }
        return '"' + this + '"';
    };


    function assume() {
        if (!option.safe) {
            if (option.rhino) {
                combine(predefined, rhino);
            }
            if (option.browser || option.sidebar) {
                combine(predefined, browser);
            }
            if (option.sidebar) {
                combine(predefined, sidebar);
            }
            if (option.widget) {
                combine(predefined, widget);
            }
        }
    }


// Produce an error warning.

    function quit(m, l, ch) {
        throw {
            name: 'JSLintError',
            line: l,
            character: ch,
            message: m + " (" + Math.floor((l / lines.length) * 100) +
                    "% scanned)."
        };
    }

    function warning(m, t, a, b, c, d) {
        var ch, l, w;
        t = t || nexttoken;
        if (t.id === '(end)') {  // `~
            t = token;
        }
        l = t.line || 0;
        ch = t.from || 0;
        w = {
            id: '(error)',
            raw: m,
            evidence: lines[l - 1] || '',
            line: l,
            character: ch,
            a: a,
            b: b,
            c: c,
            d: d
        };
        w.reason = m.supplant(w);
        JSLINT.errors.push(w);
        if (option.passfail) {
            quit('Stopping. ', l, ch);
        }
        warnings += 1;
        if (warnings >= option.maxerr) {
            quit("Too many errors.", l, ch);
        }
        return w;
    }

    function warningAt(m, l, ch, a, b, c, d) {
        return warning(m, {
            line: l,
            from: ch
        }, a, b, c, d);
    }

    function error(m, t, a, b, c, d) {
        var w = warning(m, t, a, b, c, d);
        quit("Stopping, unable to continue.", w.line, w.character);
    }

    function errorAt(m, l, ch, a, b, c, d) {
        return error(m, {
            line: l,
            from: ch
        }, a, b, c, d);
    }



// lexical analysis

    var lex = (function lex() {
        var character, from, line, s;

// Private lex methods

        function nextLine() {
            var at;
            if (line >= lines.length) {
                return false;
            }
            character = 1;
            s = lines[line].replace(/\t/g, tab);
            line += 1;
            at = s.search(cx);
            if (at >= 0) {
                warningAt("Unsafe character.", line, at);
            }
            return true;
        }

// Produce a token object.  The token inherits from a syntax symbol.

        function it(type, value) {
            var i, t;
            if (type === '(color)') {
                t = {type: type};
            } else if (type === '(punctuator)' ||
                    (type === '(identifier)' && is_own(syntax, value))) {
                t = syntax[value] || syntax['(error)'];
            } else {
                t = syntax[type];
            }
            t = Object.create(t);
            if (type === '(string)' || type === '(range)') {
                if (jx.test(value)) {
                    warningAt("Script URL.", line, from);
                }
            }
            if (type === '(identifier)') {
                t.identifier = true;
                if (option.nomen && value.charAt(0) === '_') {
                    warningAt("Unexpected '_' in '{a}'.", line, from, value);
                }
            }
            t.value = value;
            t.line = line;
            t.character = character;
            t.from = from;
            i = t.id;
            if (i !== '(endline)') {
                prereg = i &&
                        (('(,=:[!&|?{};'.indexOf(i.charAt(i.length - 1)) >= 0) ||
                        i === 'return');
            }
            return t;
        }

// Public lex methods

        return {
            init: function (source) {
                if (typeof source === 'string') {
                    lines = source.
                        replace(/\r\n/g, '\n').
                        replace(/\r/g, '\n').
                        split('\n');
                } else {
                    lines = source;
                }
                line = 0;
                nextLine();
                from = 1;
            },

            range: function (begin, end) {
                var c, value = '';
                from = character;
                if (s.charAt(0) !== begin) {
                    errorAt("Expected '{a}' and instead saw '{b}'.",
                            line, character, begin, s.charAt(0));
                }
                for (;;) {
                    s = s.slice(1);
                    character += 1;
                    c = s.charAt(0);
                    switch (c) {
                    case '':
                        errorAt("Missing '{a}'.", line, character, c);
                        break;
                    case end:
                        s = s.slice(1);
                        character += 1;
                        return it('(range)', value);
                    case xquote:
                    case '\\':
                        warningAt("Unexpected '{a}'.", line, character, c);
                    }
                    value += c;
                }

            },

// token -- this is called by advance to get the next token.

            token: function () {
                var b, c, captures, d, depth, high, i, l, low, q, t;

                function match(x) {
                    var r = x.exec(s), r1;
                    if (r) {
                        l = r[0].length;
                        r1 = r[1];
                        c = r1.charAt(0);
                        s = s.substr(l);
                        from = character + l - r1.length;
                        character += l;
                        return r1;
                    }
                }

                function string(x) {
                    var c, j, r = '';

                    if (jsonmode && x !== '"') {
                        warningAt("Strings must use doublequote.",
                                line, character);
                    }

                    if (xquote === x || (xmode === 'scriptstring' && !xquote)) {
                        return it('(punctuator)', x);
                    }

                    function esc(n) {
                        var i = parseInt(s.substr(j + 1, n), 16);
                        j += n;
                        if (i >= 32 && i <= 126 &&
                                i !== 34 && i !== 92 && i !== 39) {
                            warningAt("Unnecessary escapement.", line, character);
                        }
                        character += n;
                        c = String.fromCharCode(i);
                    }
                    j = 0;
                    for (;;) {
                        while (j >= s.length) {
                            j = 0;
                            if (xmode !== 'html' || !nextLine()) {
                                errorAt("Unclosed string.", line, from);
                            }
                        }
                        c = s.charAt(j);
                        if (c === x) {
                            character += 1;
                            s = s.substr(j + 1);
                            return it('(string)', r, x);
                        }
                        if (c < ' ') {
                            if (c === '\n' || c === '\r') {
                                break;
                            }
                            warningAt("Control character in string: {a}.",
                                    line, character + j, s.slice(0, j));
                        } else if (c === xquote) {
                            warningAt("Bad HTML string", line, character + j);
                        } else if (c === '<') {
                            if (option.safe && xmode === 'html') {
                                warningAt("ADsafe string violation.",
                                        line, character + j);
                            } else if (s.charAt(j + 1) === '/' && (xmode || option.safe)) {
                                warningAt("Expected '<\\/' and instead saw '</'.", line, character);
                            } else if (s.charAt(j + 1) === '!' && (xmode || option.safe)) {
                                warningAt("Unexpected '<!' in a string.", line, character);
                            }
                        } else if (c === '\\') {
                            if (xmode === 'html') {
                                if (option.safe) {
                                    warningAt("ADsafe string violation.",
                                            line, character + j);
                                }
                            } else if (xmode === 'styleproperty') {
                                j += 1;
                                character += 1;
                                c = s.charAt(j);
                                if (c !== x) {
                                    warningAt("Escapement in style string.",
                                            line, character + j);
                                }
                            } else {
                                j += 1;
                                character += 1;
                                c = s.charAt(j);
                                switch (c) {
                                case xquote:
                                    warningAt("Bad HTML string", line,
                                        character + j);
                                    break;
                                case '\\':
                                case '\'':
                                case '"':
                                case '/':
                                    break;
                                case 'b':
                                    c = '\b';
                                    break;
                                case 'f':
                                    c = '\f';
                                    break;
                                case 'n':
                                    c = '\n';
                                    break;
                                case 'r':
                                    c = '\r';
                                    break;
                                case 't':
                                    c = '\t';
                                    break;
                                case 'u':
                                    esc(4);
                                    break;
                                case 'v':
                                    c = '\v';
                                    break;
                                case 'x':
                                    if (jsonmode) {
                                        warningAt("Avoid \\x-.", line, character);
                                    }
                                    esc(2);
                                    break;
                                default:
                                    warningAt("Bad escapement.", line, character);
                                }
                            }
                        }
                        r += c;
                        character += 1;
                        j += 1;
                    }
                }

                for (;;) {
                    if (!s) {
                        return it(nextLine() ? '(endline)' : '(end)', '');
                    }
                    while (xmode === 'outer') {
                        i = s.search(ox);
                        if (i === 0) {
                            break;
                        } else if (i > 0) {
                            character += 1;
                            s = s.slice(i);
                            break;
                        } else {
                            if (!nextLine()) {
                                return it('(end)', '');
                            }
                        }
                    }
                    t = match(rx[xmode] || tx);
                    if (!t) {
                        if (xmode === 'html') {
                            return it('(error)', s.charAt(0));
                        } else {
                            t = '';
                            c = '';
                            while (s && s < '!') {
                                s = s.substr(1);
                            }
                            if (s) {
                                errorAt("Unexpected '{a}'.",
                                        line, character, s.substr(0, 1));
                            }
                        }
                    } else {

    //      identifier

                        if (c.isAlpha() || c === '_' || c === '$') {
                            return it('(identifier)', t);
                        }

    //      number

                        if (c.isDigit()) {
                            if (xmode !== 'style' && !isFinite(Number(t))) {
                                warningAt("Bad number '{a}'.",
                                    line, character, t);
                            }
                            if (xmode !== 'style' &&
                                     xmode !== 'styleproperty' &&
                                     s.substr(0, 1).isAlpha()) {
                                warningAt("Missing space after '{a}'.",
                                        line, character, t);
                            }
                            if (c === '0') {
                                d = t.substr(1, 1);
                                if (d.isDigit()) {
                                    if (token.id !== '.' && xmode !== 'styleproperty') {
                                        warningAt("Don't use extra leading zeros '{a}'.",
                                            line, character, t);
                                    }
                                } else if (jsonmode && (d === 'x' || d === 'X')) {
                                    warningAt("Avoid 0x-. '{a}'.",
                                            line, character, t);
                                }
                            }
                            if (t.substr(t.length - 1) === '.') {
                                warningAt(
        "A trailing decimal point can be confused with a dot '{a}'.",
                                        line, character, t);
                            }
                            return it('(number)', t);
                        }
                        switch (t) {

    //      string

                        case '"':
                        case "'":
                            return string(t);

    //      // comment

                        case '//':
                            if (src || (xmode && xmode !== 'script')) {
                                warningAt("Unexpected comment.", line, character);
                            } else if (xmode === 'script' && /<\s*\//i.test(s)) {
                                warningAt("Unexpected <\/ in comment.", line, character);
                            } else if ((option.safe || xmode === 'script') && ax.test(s)) {
                                warningAt("Dangerous comment.", line, character);
                            }
                            s = '';
                            token.comment = true;
                            break;

    //      /* comment

                        case '/*':
                            if (src || (xmode && xmode !== 'script' && xmode !== 'style' && xmode !== 'styleproperty')) {
                                warningAt("Unexpected comment.", line, character);
                            }
                            if (option.safe && ax.test(s)) {
                                warningAt("ADsafe comment violation.", line, character);
                            }
                            for (;;) {
                                i = s.search(lx);
                                if (i >= 0) {
                                    break;
                                }
                                if (!nextLine()) {
                                    errorAt("Unclosed comment.", line, character);
                                } else {
                                    if (option.safe && ax.test(s)) {
                                        warningAt("ADsafe comment violation.", line, character);
                                    }
                                }
                            }
                            character += i + 2;
                            if (s.substr(i, 1) === '/') {
                                errorAt("Nested comment.", line, character);
                            }
                            s = s.substr(i + 2);
                            token.comment = true;
                            break;

    //      /*members /*jslint /*global

                        case '/*members':
                        case '/*member':
                        case '/*jslint':
                        case '/*global':
                        case '*/':
                            return {
                                value: t,
                                type: 'special',
                                line: line,
                                character: character,
                                from: from
                            };

                        case '':
                            break;
    //      /
                        case '/':
                            if (prereg) {
                                depth = 0;
                                captures = 0;
                                l = 0;
                                for (;;) {
                                    b = true;
                                    c = s.charAt(l);
                                    l += 1;
                                    switch (c) {
                                    case '':
                                        errorAt("Unclosed regular expression.", line, from);
                                        return;
                                    case '/':
                                        if (depth > 0) {
                                            warningAt("Unescaped '{a}'.", line, from + l, '/');
                                        }
                                        c = s.substr(0, l - 1);
                                        q = {
                                            g: true,
                                            i: true,
                                            m: true
                                        };
                                        while (q[s.charAt(l)] === true) {
                                            q[s.charAt(l)] = false;
                                            l += 1;
                                        }
                                        character += l;
                                        s = s.substr(l);
                                        return it('(regexp)', c);
                                    case '\\':
                                        c = s.charAt(l);
                                        if (c < ' ') {
                                            warningAt("Unexpected control character in regular expression.", line, from + l);
                                        } else if (c === '<') {
                                            warningAt("Unexpected escaped character '{a}' in regular expression.", line, from + l, c);
                                        }
                                        l += 1;
                                        break;
                                    case '(':
                                        depth += 1;
                                        b = false;
                                        if (s.charAt(l) === '?') {
                                            l += 1;
                                            switch (s.charAt(l)) {
                                            case ':':
                                            case '=':
                                            case '!':
                                                l += 1;
                                                break;
                                            default:
                                                warningAt("Expected '{a}' and instead saw '{b}'.", line, from + l, ':', s.charAt(l));
                                            }
                                        } else {
                                            captures += 1;
                                        }
                                        break;
                                    case '|':
                                        b = false;
                                        break;
                                    case ')':
                                        if (depth === 0) {
                                            warningAt("Unescaped '{a}'.", line, from + l, ')');
                                        } else {
                                            depth -= 1;
                                        }
                                        break;
                                    case ' ':
                                        q = 1;
                                        while (s.charAt(l) === ' ') {
                                            l += 1;
                                            q += 1;
                                        }
                                        if (q > 1) {
                                            warningAt("Spaces are hard to count. Use {{a}}.", line, from + l, q);
                                        }
                                        break;
                                    case '[':
                                        c = s.charAt(l);
                                        if (c === '^') {
                                            l += 1;
                                        }
                                        q = false;
                                        if (c === ']') {
                                            warningAt("Empty class.", line, from + l - 1);
                                            q = true;
                                        }
    klass:                              do {
                                            c = s.charAt(l);
                                            l += 1;
                                            switch (c) {
                                            case '[':
                                            case '^':
                                                warningAt("Unescaped '{a}'.", line, from + l, c);
                                                q = true;
                                                break;
                                            case '-':
                                                if (q) {
                                                    q = false;
                                                } else {
                                                    warningAt("Unescaped '{a}'.", line, from + l, '-');
                                                    q = true;
                                                }
                                                break;
                                            case ']':
                                                if (!q) {
                                                    warningAt("Unescaped '{a}'.", line, from + l - 1, '-');
                                                }
                                                break klass;
                                            case '\\':
                                                c = s.charAt(l);
                                                if (c < ' ') {
                                                    warningAt("Unexpected control character in regular expression.", line, from + l);
                                                } else if (c === '<') {
                                                    warningAt("Unexpected escaped character '{a}' in regular expression.", line, from + l, c);
                                                }
                                                l += 1;
                                                q = true;
                                                break;
                                            case '/':
                                                warningAt("Unescaped '{a}'.", line, from + l - 1, '/');
                                                q = true;
                                                break;
                                            case '<':
                                                if (xmode === 'script') {
                                                    c = s.charAt(l);
                                                    if (c === '!' || c === '/') {
                                                        warningAt("HTML confusion in regular expression '<{a}'.", line, from + l, c);
                                                    }
                                                }
                                                q = true;
                                                break;
                                            default:
                                                q = true;
                                            }
                                        } while (c);
                                        break;
                                    case '.':
                                        if (option.regexp) {
                                            warningAt("Unexpected '{a}'.", line, from + l, c);
                                        }
                                        break;
                                    case ']':
                                    case '?':
                                    case '{':
                                    case '}':
                                    case '+':
                                    case '*':
                                        warningAt("Unescaped '{a}'.", line, from + l, c);
                                        break;
                                    case '<':
                                        if (xmode === 'script') {
                                            c = s.charAt(l);
                                            if (c === '!' || c === '/') {
                                                warningAt("HTML confusion in regular expression '<{a}'.", line, from + l, c);
                                            }
                                        }
                                    }
                                    if (b) {
                                        switch (s.charAt(l)) {
                                        case '?':
                                        case '+':
                                        case '*':
                                            l += 1;
                                            if (s.charAt(l) === '?') {
                                                l += 1;
                                            }
                                            break;
                                        case '{':
                                            l += 1;
                                            c = s.charAt(l);
                                            if (c < '0' || c > '9') {
                                                warningAt("Expected a number and instead saw '{a}'.", line, from + l, c);
                                            }
                                            l += 1;
                                            low = +c;
                                            for (;;) {
                                                c = s.charAt(l);
                                                if (c < '0' || c > '9') {
                                                    break;
                                                }
                                                l += 1;
                                                low = +c + (low * 10);
                                            }
                                            high = low;
                                            if (c === ',') {
                                                l += 1;
                                                high = Infinity;
                                                c = s.charAt(l);
                                                if (c >= '0' && c <= '9') {
                                                    l += 1;
                                                    high = +c;
                                                    for (;;) {
                                                        c = s.charAt(l);
                                                        if (c < '0' || c > '9') {
                                                            break;
                                                        }
                                                        l += 1;
                                                        high = +c + (high * 10);
                                                    }
                                                }
                                            }
                                            if (s.charAt(l) !== '}') {
                                                warningAt("Expected '{a}' and instead saw '{b}'.", line, from + l, '}', c);
                                            } else {
                                                l += 1;
                                            }
                                            if (s.charAt(l) === '?') {
                                                l += 1;
                                            }
                                            if (low > high) {
                                                warningAt("'{a}' should not be greater than '{b}'.", line, from + l, low, high);
                                            }
                                        }
                                    }
                                }
                                c = s.substr(0, l - 1);
                                character += l;
                                s = s.substr(l);
                                return it('(regexp)', c);
                            }
                            return it('(punctuator)', t);

    //      punctuator

                        case '<!--':
                            l = line;
                            c = character;
                            for (;;) {
                                i = s.indexOf('--');
                                if (i >= 0) {
                                    break;
                                }
                                i = s.indexOf('<!');
                                if (i >= 0) {
                                    errorAt("Nested HTML comment.",
                                        line, character + i);
                                }
                                if (!nextLine()) {
                                    errorAt("Unclosed HTML comment.", l, c);
                                }
                            }
                            l = s.indexOf('<!');
                            if (l >= 0 && l < i) {
                                errorAt("Nested HTML comment.",
                                    line, character + l);
                            }
                            character += i;
                            if (s[i + 2] !== '>') {
                                errorAt("Expected -->.", line, character);
                            }
                            character += 3;
                            s = s.slice(i + 3);
                            break;
                        case '#':
                            if (xmode === 'html' || xmode === 'styleproperty') {
                                for (;;) {
                                    c = s.charAt(0);
                                    if ((c < '0' || c > '9') &&
                                            (c < 'a' || c > 'f') &&
                                            (c < 'A' || c > 'F')) {
                                        break;
                                    }
                                    character += 1;
                                    s = s.substr(1);
                                    t += c;
                                }
                                if (t.length !== 4 && t.length !== 7) {
                                    warningAt("Bad hex color '{a}'.", line,
                                        from + l, t);
                                }
                                return it('(color)', t);
                            }
                            return it('(punctuator)', t);
                        default:
                            if (xmode === 'outer' && c === '&') {
                                character += 1;
                                s = s.substr(1);
                                for (;;) {
                                    c = s.charAt(0);
                                    character += 1;
                                    s = s.substr(1);
                                    if (c === ';') {
                                        break;
                                    }
                                    if (!((c >= '0' && c <= '9') ||
                                            (c >= 'a' && c <= 'z') ||
                                            c === '#')) {
                                        errorAt("Bad entity", line, from + l,
                                        character);
                                    }
                                }
                                break;
                            }
                            return it('(punctuator)', t);
                        }
                    }
                }
            }
        };
    }());


    function addlabel(t, type) {

        if (option.safe && funct['(global)'] && typeof predefined[t] !== 'boolean') {
            warning('ADsafe global: ' + t + '.', token);
        } else if (t === 'hasOwnProperty') {
            warning("'hasOwnProperty' is a really bad name.");
        }

// Define t in the current function in the current scope.

        if (is_own(funct, t) && !funct['(global)']) {
            warning(funct[t] === true ?
                "'{a}' was used before it was defined." :
                "'{a}' is already defined.",
                nexttoken, t);
        }
        funct[t] = type;
        if (funct['(global)']) {
            global[t] = funct;
            if (is_own(implied, t)) {
                warning("'{a}' was used before it was defined.", nexttoken, t);
                delete implied[t];
            }
        } else {
            scope[t] = funct;
        }
    }


    function doOption() {
        var b, obj, filter, o = nexttoken.value, t, v;
        switch (o) {
        case '*/':
            error("Unbegun comment.");
            break;
        case '/*members':
        case '/*member':
            o = '/*members';
            if (!membersOnly) {
                membersOnly = {};
            }
            obj = membersOnly;
            break;
        case '/*jslint':
            if (option.safe) {
                warning("ADsafe restriction.");
            }
            obj = option;
            filter = boolOptions;
            break;
        case '/*global':
            if (option.safe) {
                warning("ADsafe restriction.");
            }
            obj = predefined;
            break;
        default:
        }
        t = lex.token();
loop:   for (;;) {
            for (;;) {
                if (t.type === 'special' && t.value === '*/') {
                    break loop;
                }
                if (t.id !== '(endline)' && t.id !== ',') {
                    break;
                }
                t = lex.token();
            }
            if (t.type !== '(string)' && t.type !== '(identifier)' &&
                    o !== '/*members') {
                error("Bad option.", t);
            }
            v = lex.token();
            if (v.id === ':') {
                v = lex.token();
                if (obj === membersOnly) {
                    error("Expected '{a}' and instead saw '{b}'.",
                            t, '*/', ':');
                }
                if (t.value === 'indent' && o === '/*jslint') {
                    b = +v.value;
                    if (typeof b !== 'number' || !isFinite(b) || b <= 0 ||
                            Math.floor(b) !== b) {
                        error("Expected a small integer and instead saw '{a}'.",
                                v, v.value);
                    }
                    obj.white = true;
                    obj.indent = b;
                } else if (t.value === 'maxerr' && o === '/*jslint') {
                    b = +v.value;
                    if (typeof b !== 'number' || !isFinite(b) || b <= 0 ||
                            Math.floor(b) !== b) {
                        error("Expected a small integer and instead saw '{a}'.",
                                v, v.value);
                    }
                    obj.maxerr = b;
                } else if (v.value === 'true') {
                    obj[t.value] = true;
                } else if (v.value === 'false') {
                    obj[t.value] = false;
                } else {
                    error("Bad option value.", v);
                }
                t = lex.token();
            } else {
                if (o === '/*jslint') {
                    error("Missing option value.", t);
                }
                obj[t.value] = false;
                t = v;
            }
        }
        if (filter) {
            assume();
        }
    }


// We need a peek function. If it has an argument, it peeks that much farther
// ahead. It is used to distinguish
//     for ( var i in ...
// from
//     for ( var i = ...

    function peek(p) {
        var i = p || 0, j = 0, t;

        while (j <= i) {
            t = lookahead[j];
            if (!t) {
                t = lookahead[j] = lex.token();
            }
            j += 1;
        }
        return t;
    }



// Produce the next token. It looks for programming errors.

    function advance(id, t) {
        switch (token.id) {
        case '(number)':
            if (nexttoken.id === '.') {
                warning(
"A dot following a number can be confused with a decimal point.", token);
            }
            break;
        case '-':
            if (nexttoken.id === '-' || nexttoken.id === '--') {
                warning("Confusing minusses.");
            }
            break;
        case '+':
            if (nexttoken.id === '+' || nexttoken.id === '++') {
                warning("Confusing plusses.");
            }
            break;
        }
        if (token.type === '(string)' || token.identifier) {
            anonname = token.value;
        }

        if (id && nexttoken.id !== id) {
            if (t) {
                if (nexttoken.id === '(end)') {
                    warning("Unmatched '{a}'.", t, t.id);
                } else {
                    warning("Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.",
                            nexttoken, id, t.id, t.line, nexttoken.value);
                }
            } else if (nexttoken.type !== '(identifier)' ||
                            nexttoken.value !== id) {
                warning("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, id, nexttoken.value);
            }
        }
        prevtoken = token;
        token = nexttoken;
        for (;;) {
            nexttoken = lookahead.shift() || lex.token();
            if (nexttoken.id === '(end)' || nexttoken.id === '(error)') {
                return;
            }
            if (nexttoken.type === 'special') {
                doOption();
            } else {
                if (nexttoken.id !== '(endline)') {
                    break;
                }
            }
        }
    }


// This is the heart of JSLINT, the Pratt parser. In addition to parsing, it
// is looking for ad hoc lint patterns. We add to Pratt's model .fud, which is
// like nud except that it is only used on the first token of a statement.
// Having .fud makes it much easier to define JavaScript. I retained Pratt's
// nomenclature.

// .nud     Null denotation
// .fud     First null denotation
// .led     Left denotation
//  lbp     Left binding power
//  rbp     Right binding power

// They are key to the parsing method called Top Down Operator Precedence.

    function parse(rbp, initial) {
        var left;
        if (nexttoken.id === '(end)') {
            error("Unexpected early end of program.", token);
        }
        advance();
        if (option.safe && typeof predefined[token.value] === 'boolean' &&
                (nexttoken.id !== '(' && nexttoken.id !== '.')) {
            warning('ADsafe violation.', token);
        }
        if (initial) {
            anonname = 'anonymous';
            funct['(verb)'] = token.value;
        }
        if (initial === true && token.fud) {
            left = token.fud();
        } else {
            if (token.nud) {
                left = token.nud();
            } else {
                if (nexttoken.type === '(number)' && token.id === '.') {
                    warning(
"A leading decimal point can be confused with a dot: '.{a}'.",
                            token, nexttoken.value);
                    advance();
                    return token;
                } else {
                    error("Expected an identifier and instead saw '{a}'.",
                            token, token.id);
                }
            }
            while (rbp < nexttoken.lbp) {
                advance();
                if (token.led) {
                    left = token.led(left);
                } else {
                    error("Expected an operator and instead saw '{a}'.",
                        token, token.id);
                }
            }
        }
        return left;
    }


// Functions for conformance of style.

    function adjacent(left, right) {
        left = left || token;
        right = right || nexttoken;
        if (option.white || xmode === 'styleproperty' || xmode === 'style') {
            if (left.character !== right.from && left.line === right.line) {
                warning("Unexpected space after '{a}'.", right, left.value);
            }
        }
    }

    function nospace(left, right) {
        left = left || token;
        right = right || nexttoken;
        if (option.white && !left.comment) {
            if (left.line === right.line) {
                adjacent(left, right);
            }
        }
    }


    function nonadjacent(left, right) {
        if (option.white) {
            left = left || token;
            right = right || nexttoken;
            if (left.character === right.from) {
                warning("Missing space after '{a}'.",
                        nexttoken, left.value);
            }
        }
    }

    function nobreaknonadjacent(left, right) {
        left = left || token;
        right = right || nexttoken;
        if (!option.laxbreak && left.line !== right.line) {
            warning("Bad line breaking before '{a}'.", right, right.id);
        } else if (option.white) {
            left = left || token;
            right = right || nexttoken;
            if (left.character === right.from) {
                warning("Missing space after '{a}'.",
                        nexttoken, left.value);
            }
        }
    }

    function indentation(bias) {
        var i;
        if (option.white && nexttoken.id !== '(end)') {
            i = indent + (bias || 0);
            if (nexttoken.from !== i) {
                warning("Expected '{a}' to have an indentation at {b} instead at {c}.",
                        nexttoken, nexttoken.value, i, nexttoken.from);
            }
        }
    }

    function nolinebreak(t) {
        t = t || token;
        if (t.line !== nexttoken.line) {
            warning("Line breaking error '{a}'.", t, t.value);
        }
    }


    function comma() {
        if (token.line !== nexttoken.line) {
            if (!option.laxbreak) {
                warning("Bad line breaking before '{a}'.", token, nexttoken.id);
            }
        } else if (token.character !== nexttoken.from && option.white) {
            warning("Unexpected space after '{a}'.", nexttoken, token.value);
        }
        advance(',');
        nonadjacent(token, nexttoken);
    }


// Functional constructors for making the symbols that will be inherited by
// tokens.

    function symbol(s, p) {
        var x = syntax[s];
        if (!x || typeof x !== 'object') {
            syntax[s] = x = {
                id: s,
                lbp: p,
                value: s
            };
        }
        return x;
    }


    function delim(s) {
        return symbol(s, 0);
    }


    function stmt(s, f) {
        var x = delim(s);
        x.identifier = x.reserved = true;
        x.fud = f;
        return x;
    }


    function blockstmt(s, f) {
        var x = stmt(s, f);
        x.block = true;
        return x;
    }


    function reserveName(x) {
        var c = x.id.charAt(0);
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            x.identifier = x.reserved = true;
        }
        return x;
    }


    function prefix(s, f) {
        var x = symbol(s, 150);
        reserveName(x);
        x.nud = (typeof f === 'function') ? f : function () {
            this.right = parse(150);
            this.arity = 'unary';
            if (this.id === '++' || this.id === '--') {
                if (option.plusplus) {
                    warning("Unexpected use of '{a}'.", this, this.id);
                } else if ((!this.right.identifier || this.right.reserved) &&
                        this.right.id !== '.' && this.right.id !== '[') {
                    warning("Bad operand.", this);
                }
            }
            return this;
        };
        return x;
    }


    function type(s, f) {
        var x = delim(s);
        x.type = s;
        x.nud = f;
        return x;
    }


    function reserve(s, f) {
        var x = type(s, f);
        x.identifier = x.reserved = true;
        return x;
    }


    function reservevar(s, v) {
        return reserve(s, function () {
            if (option.safe &&
                    (this.id === 'this' || this.id === 'arguments')) {
                warning("ADsafe violation.", this);
            }
            return this;
        });
    }


    function infix(s, f, p, w) {
        var x = symbol(s, p);
        reserveName(x);
        x.led = function (left) {
            if (!w) {
                nobreaknonadjacent(prevtoken, token);
                nonadjacent(token, nexttoken);
            }
            if (typeof f === 'function') {
                return f(left, this);
            } else {
                this.left = left;
                this.right = parse(p);
                return this;
            }
        };
        return x;
    }


    function relation(s, f) {
        var x = symbol(s, 100);
        x.led = function (left) {
            nobreaknonadjacent(prevtoken, token);
            nonadjacent(token, nexttoken);
            var right = parse(100);
            if ((left && left.id === 'NaN') || (right && right.id === 'NaN')) {
                warning("Use the isNaN function to compare with NaN.", this);
            } else if (f) {
                f.apply(this, [left, right]);
            }
            this.left = left;
            this.right = right;
            return this;
        };
        return x;
    }


    function isPoorRelation(node) {
        return (node.type === '(number)' && !+node.value) ||
               (node.type === '(string)' && !node.value) ||
                node.type === 'true' ||
                node.type === 'false' ||
                node.type === 'undefined' ||
                node.type === 'null';
    }


    function assignop(s, f) {
        symbol(s, 20).exps = true;
        return infix(s, function (left, that) {
            var l;
            that.left = left;
            if (predefined[left.value] === false &&
                    scope[left.value]['(global)'] === true) {
                warning('Read only.', left);
            }
            if (option.safe) {
                l = left;
                do {
                    if (typeof predefined[l.value] === 'boolean') {
                        warning('ADsafe violation.', l);
                    }
                    l = l.left;
                } while (l);
            }
            if (left) {
                if (left.id === '.' || left.id === '[') {
                    if (left.left.value === 'arguments') {
                        warning('Bad assignment.', that);
                    }
                    that.right = parse(19);
                    return that;
                } else if (left.identifier && !left.reserved) {
                    if (funct[left.value] === 'exception') {
                        warning("Do not assign to the exception parameter.", left);
                    }
                    that.right = parse(19);
                    return that;
                }
                if (left === syntax['function']) {
                    warning(
"Expected an identifier in an assignment and instead saw a function invocation.",
                                token);
                }
            }
            error("Bad assignment.", that);
        }, 20);
    }

    function bitwise(s, f, p) {
        var x = symbol(s, p);
        reserveName(x);
        x.led = (typeof f === 'function') ? f : function (left) {
            if (option.bitwise) {
                warning("Unexpected use of '{a}'.", this, this.id);
            }
            this.left = left;
            this.right = parse(p);
            return this;
        };
        return x;
    }

    function bitwiseassignop(s) {
        symbol(s, 20).exps = true;
        return infix(s, function (left, that) {
            if (option.bitwise) {
                warning("Unexpected use of '{a}'.", that, that.id);
            }
            nonadjacent(prevtoken, token);
            nonadjacent(token, nexttoken);
            if (left) {
                if (left.id === '.' || left.id === '[' ||
                        (left.identifier && !left.reserved)) {
                    parse(19);
                    return that;
                }
                if (left === syntax['function']) {
                    warning(
"Expected an identifier in an assignment, and instead saw a function invocation.",
                                token);
                }
                return that;
            }
            error("Bad assignment.", that);
        }, 20);
    }


    function suffix(s, f) {
        var x = symbol(s, 150);
        x.led = function (left) {
            if (option.plusplus) {
                warning("Unexpected use of '{a}'.", this, this.id);
            } else if ((!left.identifier || left.reserved) && left.id !== '.' && left.id !== '[') {
                warning("Bad operand.", this);
            }
            this.left = left;
            return this;
        };
        return x;
    }


    function optionalidentifier() {
        if (nexttoken.reserved) {
            warning("Expected an identifier and instead saw '{a}' (a reserved word).",
                    nexttoken, nexttoken.id);
        }
        if (nexttoken.identifier) {
            advance();
            return token.value;
        }
    }


    function identifier() {
        var i = optionalidentifier();
        if (i) {
            return i;
        }
        if (token.id === 'function' && nexttoken.id === '(') {
            warning("Missing name in function statement.");
        } else {
            error("Expected an identifier and instead saw '{a}'.",
                    nexttoken, nexttoken.value);
        }
    }

    function reachable(s) {
        var i = 0, t;
        if (nexttoken.id !== ';' || noreach) {
            return;
        }
        for (;;) {
            t = peek(i);
            if (t.reach) {
                return;
            }
            if (t.id !== '(endline)') {
                if (t.id === 'function') {
                    warning(
"Inner functions should be listed at the top of the outer function.", t);
                    break;
                }
                warning("Unreachable '{a}' after '{b}'.", t, t.value, s);
                break;
            }
            i += 1;
        }
    }


    function statement(noindent) {
        var i = indent, r, s = scope, t = nexttoken;

// We don't like the empty statement.

        if (t.id === ';') {
            warning("Unnecessary semicolon.", t);
            advance(';');
            return;
        }

// Is this a labelled statement?

        if (t.identifier && !t.reserved && peek().id === ':') {
            advance();
            advance(':');
            scope = Object.create(s);
            addlabel(t.value, 'label');
            if (!nexttoken.labelled) {
                warning("Label '{a}' on {b} statement.",
                        nexttoken, t.value, nexttoken.value);
            }
            if (jx.test(t.value + ':')) {
                warning("Label '{a}' looks like a javascript url.",
                        t, t.value);
            }
            nexttoken.label = t.value;
            t = nexttoken;
        }

// Parse the statement.

        if (!noindent) {
            indentation();
        }
        if (nexttoken.id === 'new') {
            warning("'new' should not be used as a statement.");
        }
        r = parse(0, true);

// Look for the final semicolon.

        if (!t.block) {
            if (!r || !r.exps) {
                warning(
"Expected an assignment or function call and instead saw an expression.",
                        token);
            }
            if (nexttoken.id !== ';') {
                warningAt("Missing semicolon.", token.line,
                        token.from + token.value.length);
            } else {
                adjacent(token, nexttoken);
                advance(';');
                nonadjacent(token, nexttoken);
            }
        }

// Restore the indentation.

        indent = i;
        scope = s;
        return r;
    }


    function use_strict() {
        if (nexttoken.value === 'use strict') {
            advance();
            advance(';');
            return true;
        } else {
            return false;
        }
    }


    function statements(begin) {
        var a = [], f, p;
        if (begin && !use_strict() && option.strict) {
            warning('Missing "use strict" statement.', nexttoken);
        }
        if (option.adsafe) {
            switch (begin) {
            case 'script':
                if (!adsafe_may) {
                    if (nexttoken.value !== 'ADSAFE' ||
                            peek(0).id !== '.' ||
                            (peek(1).value !== 'id' &&
                            peek(1).value !== 'go')) {
                        error('ADsafe violation: Missing ADSAFE.id or ADSAFE.go.',
                            nexttoken);
                    }
                }
                if (nexttoken.value === 'ADSAFE' &&
                        peek(0).id === '.' &&
                        peek(1).value === 'id') {
                    if (adsafe_may) {
                        error('ADsafe violation.', nexttoken);
                    }
                    advance('ADSAFE');
                    advance('.');
                    advance('id');
                    advance('(');
                    if (nexttoken.value !== adsafe_id) {
                        error('ADsafe violation: id does not match.', nexttoken);
                    }
                    advance('(string)');
                    advance(')');
                    advance(';');
                    adsafe_may = true;
                }
                break;
            case 'lib':
                if (nexttoken.value === 'ADSAFE') {
                    advance('ADSAFE');
                    advance('.');
                    advance('lib');
                    advance('(');
                    advance('(string)');
                    comma();
                    f = parse(0);
                    if (f.id !== 'function') {
                        error('The second argument to lib must be a function.', f);
                    }
                    p = f.funct['(params)'];
                    p = p && p.join(', ');
                    if (p && p !== 'lib') {
                        error("Expected '{a}' and instead saw '{b}'.",
                            f, '(lib)', '(' + p + ')');
                    }
                    advance(')');
                    advance(';');
                    return a;
                } else {
                    error("ADsafe lib violation.");
                }
            }
        }
        while (!nexttoken.reach && nexttoken.id !== '(end)') {
            if (nexttoken.id === ';') {
                warning("Unnecessary semicolon.");
                advance(';');
            } else {
                a.push(statement());
            }
        }
        return a;
    }


    function block(f) {
        var a, b = inblock, s = scope, t;
        inblock = f;
        scope = Object.create(scope);
        nonadjacent(token, nexttoken);
        t = nexttoken;
        if (nexttoken.id === '{') {
            advance('{');
            if (nexttoken.id !== '}' || token.line !== nexttoken.line) {
                indent += option.indent;
                if (!f && nexttoken.from === indent + option.indent) {
                    indent += option.indent;
                }
                if (!f) {
                    use_strict();
                }
                a = statements();
                indent -= option.indent;
                indentation();
            }
            advance('}', t);
        } else {
            warning("Expected '{a}' and instead saw '{b}'.",
                    nexttoken, '{', nexttoken.value);
            noreach = true;
            a = [statement()];
            noreach = false;
        }
        funct['(verb)'] = null;
        scope = s;
        inblock = b;
        return a;
    }


// An identity function, used by string and number tokens.

    function idValue() {
        return this;
    }


    function countMember(m) {
        if (membersOnly && typeof membersOnly[m] !== 'boolean') {
            warning("Unexpected /*member '{a}'.", token, m);
        }
        if (typeof member[m] === 'number') {
            member[m] += 1;
        } else {
            member[m] = 1;
        }
    }

    function note_implied(token) {
        var name = token.value, line = token.line, a = implied[name];
        if (typeof a === 'function') {
            a = false;
        }
        if (!a) {
            a = [line];
            implied[name] = a;
        } else if (a[a.length - 1] !== line) {
            a.push(line);
        }
    }

// CSS parsing.


    function cssName() {
        if (nexttoken.identifier) {
            advance();
            return true;
        }
    }

    function cssNumber() {
        if (nexttoken.id === '-') {
            advance('-');
            adjacent();
            nolinebreak();
        }
        if (nexttoken.type === '(number)') {
            advance('(number)');
            return true;
        }
    }

    function cssString() {
        if (nexttoken.type === '(string)') {
            advance();
            return true;
        }
    }

    function cssColor() {
        var i, number;
        if (nexttoken.identifier) {
            if (nexttoken.value === 'rgb') {
                advance();
                advance('(');
                for (i = 0; i < 3; i += 1) {
                    if (i) {
                        advance(',');
                    }
                    number = nexttoken.value;
                    if (nexttoken.type !== '(number)' || number < 0) {
                        warning("Expected a positive number and instead saw '{a}'",
                            nexttoken, number);
                        advance();
                    } else {
                        advance();
                        if (nexttoken.id === '%') {
                            advance('%');
                            if (number > 100) {
                                warning("Expected a percentage and instead saw '{a}'",
                                    token, number);
                            }
                        } else {
                            if (number > 255) {
                                warning("Expected a small number and instead saw '{a}'",
                                    token, number);
                            }
                        }
                    }
                }
                advance(')');
                return true;
            } else if (cssColorData[nexttoken.value] === true) {
                advance();
                return true;
            }
        } else if (nexttoken.type === '(color)') {
            advance();
            return true;
        }
        return false;
    }

    function cssLength() {
        if (nexttoken.id === '-') {
            advance('-');
            adjacent();
            nolinebreak();
        }
        if (nexttoken.type === '(number)') {
            advance();
            if (nexttoken.type !== '(string)' &&
                    cssLengthData[nexttoken.value] === true) {
                adjacent();
                advance();
            } else if (+token.value !== 0) {
                warning("Expected a linear unit and instead saw '{a}'.",
                    nexttoken, nexttoken.value);
            }
            return true;
        }
        return false;
    }

    function cssLineHeight() {
        if (nexttoken.id === '-') {
            advance('-');
            adjacent();
        }
        if (nexttoken.type === '(number)') {
            advance();
            if (nexttoken.type !== '(string)' &&
                    cssLengthData[nexttoken.value] === true) {
                adjacent();
                advance();
            }
            return true;
        }
        return false;
    }

    function cssWidth() {
        if (nexttoken.identifier) {
            switch (nexttoken.value) {
            case 'thin':
            case 'medium':
            case 'thick':
                advance();
                return true;
            }
        } else {
            return cssLength();
        }
    }

    function cssMargin() {
        if (nexttoken.identifier) {
            if (nexttoken.value === 'auto') {
                advance();
                return true;
            }
        } else {
            return cssLength();
        }
    }

    function cssAttr() {
        if (nexttoken.identifier && nexttoken.value === 'attr') {
            advance();
            advance('(');
            if (!nexttoken.identifier) {
                warning("Expected a name and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
            }
            advance();
            advance(')');
            return true;
        }
        return false;
    }

    function cssCommaList() {
        while (nexttoken.id !== ';') {
            if (!cssName() && !cssString()) {
                warning("Expected a name and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
            }
            if (nexttoken.id !== ',') {
                return true;
            }
            comma();
        }
    }

    function cssCounter() {
        if (nexttoken.identifier && nexttoken.value === 'counter') {
            advance();
            advance('(');
            if (!nexttoken.identifier) {
            }
            advance();
            if (nexttoken.id === ',') {
                comma();
                if (nexttoken.type !== '(string)') {
                    warning("Expected a string and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
                }
                advance();
            }
            advance(')');
            return true;
        }
        if (nexttoken.identifier && nexttoken.value === 'counters') {
            advance();
            advance('(');
            if (!nexttoken.identifier) {
                warning("Expected a name and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
            }
            advance();
            if (nexttoken.id === ',') {
                comma();
                if (nexttoken.type !== '(string)') {
                    warning("Expected a string and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
                }
                advance();
            }
            if (nexttoken.id === ',') {
                comma();
                if (nexttoken.type !== '(string)') {
                    warning("Expected a string and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
                }
                advance();
            }
            advance(')');
            return true;
        }
        return false;
    }


    function cssShape() {
        var i;
        if (nexttoken.identifier && nexttoken.value === 'rect') {
            advance();
            advance('(');
            for (i = 0; i < 4; i += 1) {
                if (!cssLength()) {
                    warning("Expected a number and instead saw '{a}'.",
                        nexttoken, nexttoken.value);
                    break;
                }
            }
            advance(')');
            return true;
        }
        return false;
    }

    function cssUrl() {
        var c, url;
        if (nexttoken.identifier && nexttoken.value === 'url') {
            nexttoken = lex.range('(', ')');
            url = nexttoken.value;
            c = url.charAt(0);
            if (c === '"' || c === '\'') {
                if (url.slice(-1) !== c) {
                    warning("Bad url string.");
                } else {
                    url = url.slice(1, -1);
                    if (url.indexOf(c) >= 0) {
                        warning("Bad url string.");
                    }
                }
            }
            if (!url) {
                warning("Missing url.");
            }
            advance();
            if (option.safe && ux.test(url)) {
                error("ADsafe URL violation.");
            }
            urls.push(url);
            return true;
        }
        return false;
    }

    cssAny = [cssUrl, function () {
        for (;;) {
            if (nexttoken.identifier) {
                switch (nexttoken.value.toLowerCase()) {
                case 'url':
                    cssUrl();
                    break;
                case 'expression':
                    warning("Unexpected expression '{a}'.",
                        nexttoken, nexttoken.value);
                    advance();
                    break;
                default:
                    advance();
                }
            } else {
                if (nexttoken.id === ';' || nexttoken.id === '!'  ||
                        nexttoken.id === '(end)' || nexttoken.id === '}') {
                    return true;
                }
                advance();
            }
        }
    }];

    cssBorderStyle = [
        'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'ridge',
        'inset', 'outset'
    ];

    cssBreak = [
        'auto', 'always', 'avoid', 'left', 'right'
    ];

    cssOverflow = [
        'auto', 'hidden', 'scroll', 'visible'
    ];

    cssAttributeData = {
        background: [
            true, 'background-attachment', 'background-color',
            'background-image', 'background-position', 'background-repeat'
        ],
        'background-attachment': ['scroll', 'fixed'],
        'background-color': ['transparent', cssColor],
        'background-image': ['none', cssUrl],
        'background-position': [
            2, [cssLength, 'top', 'bottom', 'left', 'right', 'center']
        ],
        'background-repeat': [
            'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
        ],
        'border': [true, 'border-color', 'border-style', 'border-width'],
        'border-bottom': [
            true, 'border-bottom-color', 'border-bottom-style',
            'border-bottom-width'
        ],
        'border-bottom-color': cssColor,
        'border-bottom-style': cssBorderStyle,
        'border-bottom-width': cssWidth,
        'border-collapse': ['collapse', 'separate'],
        'border-color': ['transparent', 4, cssColor],
        'border-left': [
            true, 'border-left-color', 'border-left-style', 'border-left-width'
        ],
        'border-left-color': cssColor,
        'border-left-style': cssBorderStyle,
        'border-left-width': cssWidth,
        'border-right': [
            true, 'border-right-color', 'border-right-style',
            'border-right-width'
        ],
        'border-right-color': cssColor,
        'border-right-style': cssBorderStyle,
        'border-right-width': cssWidth,
        'border-spacing': [2, cssLength],
        'border-style': [4, cssBorderStyle],
        'border-top': [
            true, 'border-top-color', 'border-top-style', 'border-top-width'
        ],
        'border-top-color': cssColor,
        'border-top-style': cssBorderStyle,
        'border-top-width': cssWidth,
        'border-width': [4, cssWidth],
        bottom: [cssLength, 'auto'],
        'caption-side' : ['bottom', 'left', 'right', 'top'],
        clear: ['both', 'left', 'none', 'right'],
        clip: [cssShape, 'auto'],
        color: cssColor,
        content: [
            'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote',
            cssString, cssUrl, cssCounter, cssAttr
        ],
        'counter-increment': [
            cssName, 'none'
        ],
        'counter-reset': [
            cssName, 'none'
        ],
        cursor: [
            cssUrl, 'auto', 'crosshair', 'default', 'e-resize', 'help', 'move',
            'n-resize', 'ne-resize', 'nw-resize', 'pointer', 's-resize',
            'se-resize', 'sw-resize', 'w-resize', 'text', 'wait'
        ],
        direction: ['ltr', 'rtl'],
        display: [
            'block', 'compact', 'inline', 'inline-block', 'inline-table',
            'list-item', 'marker', 'none', 'run-in', 'table', 'table-caption',
            'table-cell', 'table-column', 'table-column-group',
            'table-footer-group', 'table-header-group', 'table-row',
            'table-row-group'
        ],
        'empty-cells': ['show', 'hide'],
        'float': ['left', 'none', 'right'],
        font: [
            'caption', 'icon', 'menu', 'message-box', 'small-caption',
            'status-bar', true, 'font-size', 'font-style', 'font-weight',
            'font-family'
        ],
        'font-family': cssCommaList,
        'font-size': [
            'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large',
            'xx-large', 'larger', 'smaller', cssLength
        ],
        'font-size-adjust': ['none', cssNumber],
        'font-stretch': [
            'normal', 'wider', 'narrower', 'ultra-condensed',
            'extra-condensed', 'condensed', 'semi-condensed',
            'semi-expanded', 'expanded', 'extra-expanded'
        ],
        'font-style': [
            'normal', 'italic', 'oblique'
        ],
        'font-variant': [
            'normal', 'small-caps'
        ],
        'font-weight': [
            'normal', 'bold', 'bolder', 'lighter', cssNumber
        ],
        height: [cssLength, 'auto'],
        left: [cssLength, 'auto'],
        'letter-spacing': ['normal', cssLength],
        'line-height': ['normal', cssLineHeight],
        'list-style': [
            true, 'list-style-image', 'list-style-position', 'list-style-type'
        ],
        'list-style-image': ['none', cssUrl],
        'list-style-position': ['inside', 'outside'],
        'list-style-type': [
            'circle', 'disc', 'square', 'decimal', 'decimal-leading-zero',
            'lower-roman', 'upper-roman', 'lower-greek', 'lower-alpha',
            'lower-latin', 'upper-alpha', 'upper-latin', 'hebrew', 'katakana',
            'hiragana-iroha', 'katakana-oroha', 'none'
        ],
        margin: [4, cssMargin],
        'margin-bottom': cssMargin,
        'margin-left': cssMargin,
        'margin-right': cssMargin,
        'margin-top': cssMargin,
        'marker-offset': [cssLength, 'auto'],
        'max-height': [cssLength, 'none'],
        'max-width': [cssLength, 'none'],
        'min-height': cssLength,
        'min-width': cssLength,
        opacity: cssNumber,
        outline: [true, 'outline-color', 'outline-style', 'outline-width'],
        'outline-color': ['invert', cssColor],
        'outline-style': [
            'dashed', 'dotted', 'double', 'groove', 'inset', 'none',
            'outset', 'ridge', 'solid'
        ],
        'outline-width': cssWidth,
        overflow: cssOverflow,
        'overflow-x': cssOverflow,
        'overflow-y': cssOverflow,
        padding: [4, cssLength],
        'padding-bottom': cssLength,
        'padding-left': cssLength,
        'padding-right': cssLength,
        'padding-top': cssLength,
        'page-break-after': cssBreak,
        'page-break-before': cssBreak,
        position: ['absolute', 'fixed', 'relative', 'static'],
        quotes: [8, cssString],
        right: [cssLength, 'auto'],
        'table-layout': ['auto', 'fixed'],
        'text-align': ['center', 'justify', 'left', 'right'],
        'text-decoration': [
            'none', 'underline', 'overline', 'line-through', 'blink'
        ],
        'text-indent': cssLength,
        'text-shadow': ['none', 4, [cssColor, cssLength]],
        'text-transform': ['capitalize', 'uppercase', 'lowercase', 'none'],
        top: [cssLength, 'auto'],
        'unicode-bidi': ['normal', 'embed', 'bidi-override'],
        'vertical-align': [
            'baseline', 'bottom', 'sub', 'super', 'top', 'text-top', 'middle',
            'text-bottom', cssLength
        ],
        visibility: ['visible', 'hidden', 'collapse'],
        'white-space': [
            'normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'inherit'
        ],
        width: [cssLength, 'auto'],
        'word-spacing': ['normal', cssLength],
        'word-wrap': ['break-word', 'normal'],
        'z-index': ['auto', cssNumber]
    };

    function styleAttribute() {
        var v;
        while (nexttoken.id === '*' || nexttoken.id === '#' ||
                nexttoken.value === '_') {
            if (!option.css) {
                warning("Unexpected '{a}'.", nexttoken, nexttoken.value);
            }
            advance();
        }
        if (nexttoken.id === '-') {
            if (!option.css) {
                warning("Unexpected '{a}'.", nexttoken, nexttoken.value);
            }
            advance('-');
            if (!nexttoken.identifier) {
                warning(
"Expected a non-standard style attribute and instead saw '{a}'.",
                    nexttoken, nexttoken.value);
            }
            advance();
            return cssAny;
        } else {
            if (!nexttoken.identifier) {
                warning("Excepted a style attribute, and instead saw '{a}'.",
                    nexttoken, nexttoken.value);
            } else {
                if (is_own(cssAttributeData, nexttoken.value)) {
                    v = cssAttributeData[nexttoken.value];
                } else {
                    v = cssAny;
                    if (!option.css) {
                        warning("Unrecognized style attribute '{a}'.",
                                nexttoken, nexttoken.value);
                    }
                }
            }
            advance();
            return v;
        }
    }

    function styleValue(v) {
        var i = 0,
            n,
            once,
            match,
            round,
            start = 0,
            vi;
        switch (typeof v) {
        case 'function':
            return v();
        case 'string':
            if (nexttoken.identifier && nexttoken.value === v) {
                advance();
                return true;
            }
            return false;
        }
        for (;;) {
            if (i >= v.length) {
                return false;
            }
            vi = v[i];
            i += 1;
            if (vi === true) {
                break;
            } else if (typeof vi === 'number') {
                n = vi;
                vi = v[i];
                i += 1;
            } else {
                n = 1;
            }
            match = false;
            while (n > 0) {
                if (styleValue(vi)) {
                    match = true;
                    n -= 1;
                } else {
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
        start = i;
        once = [];
        for (;;) {
            round = false;
            for (i = start; i < v.length; i += 1) {
                if (!once[i]) {
                    if (styleValue(cssAttributeData[v[i]])) {
                        match = true;
                        round = true;
                        once[i] = true;
                        break;
                    }
                }
            }
            if (!round) {
                return match;
            }
        }
    }

    function styleChild() {
        if (nexttoken.id === '(number)') {
            advance();
            if (nexttoken.value === 'n' && nexttoken.identifier) {
                adjacent();
                advance();
                if (nexttoken.id === '+') {
                    adjacent();
                    advance('+');
                    adjacent();
                    advance('(number)');
                }
            }
            return;
        } else {
            switch (nexttoken.value) {
            case 'odd':
            case 'even':
                if (nexttoken.identifier) {
                    advance();
                    return;
                }
            }
        }
        warning("Unexpected token '{a}'.", nexttoken, nexttoken.value);
    }

    function substyle() {
        var v;
        for (;;) {
            if (nexttoken.id === '}' || nexttoken.id === '(end)' ||
                    xquote && nexttoken.id === xquote) {
                return;
            }
            while (nexttoken.id === ';') {
                warning("Misplaced ';'.");
                advance(';');
            }
            v = styleAttribute();
            advance(':');
            if (nexttoken.identifier && nexttoken.value === 'inherit') {
                advance();
            } else {
                if (!styleValue(v)) {
                    warning("Unexpected token '{a}'.", nexttoken,
                        nexttoken.value);
                    advance();
                }
            }
            if (nexttoken.id === '!') {
                advance('!');
                adjacent();
                if (nexttoken.identifier && nexttoken.value === 'important') {
                    advance();
                } else {
                    warning("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, 'important', nexttoken.value);
                }
            }
            if (nexttoken.id === '}' || nexttoken.id === xquote) {
                warning("Missing '{a}'.", nexttoken, ';');
            } else {
                advance(';');
            }
        }
    }

    function styleSelector() {
        if (nexttoken.identifier) {
            if (!is_own(htmltag, nexttoken.value)) {
                warning("Expected a tagName, and instead saw {a}.",
                    nexttoken, nexttoken.value);
            }
            advance();
        } else {
            switch (nexttoken.id) {
            case '>':
            case '+':
                advance();
                styleSelector();
                break;
            case ':':
                advance(':');
                switch (nexttoken.value) {
                case 'active':
                case 'after':
                case 'before':
                case 'checked':
                case 'disabled':
                case 'empty':
                case 'enabled':
                case 'first-child':
                case 'first-letter':
                case 'first-line':
                case 'first-of-type':
                case 'focus ':
                case 'hover':
                case 'last-of-type':
                case 'link':
                case 'only-of-type':
                case 'root':
                case 'target':
                case 'visited':
                    advance();
                    break;
                case 'lang':
                    advance();
                    advance('(');
                    if (!nexttoken.identifier) {
                        warning("Expected a lang code, and instead saw :{a}.",
                            nexttoken, nexttoken.value);
                    }
                    advance(')');
                    break;
                case 'nth-child':
                case 'nth-last-child':
                case 'nth-last-of-type':
                case 'nth-of-type':
                    advance();
                    advance('(');
                    styleChild();
                    advance(')');
                    break;
                case 'not':
                    advance();
                    advance('(');
                    if (nexttoken.id === ':' && peek(0).value === 'not') {
                        warning("Nested not.");
                    }
                    styleSelector();
                    advance(')');
                    break;
                default:
                    warning("Expected a pseudo, and instead saw :{a}.",
                        nexttoken, nexttoken.value);
                }
                break;
            case '#':
                advance('#');
                if (!nexttoken.identifier) {
                    warning("Expected an id, and instead saw #{a}.",
                        nexttoken, nexttoken.value);
                }
                advance();
                break;
            case '*':
                advance('*');
                break;
            case '.':
                advance('.');
                if (!nexttoken.identifier) {
                    warning("Expected a class, and instead saw #.{a}.",
                        nexttoken, nexttoken.value);
                }
                advance();
                break;
            case '[':
                advance('[');
                if (!nexttoken.identifier) {
                    warning("Expected an attribute, and instead saw [{a}].",
                        nexttoken, nexttoken.value);
                }
                advance();
                if (nexttoken.id === '=' || nexttoken.value === '~=' ||
                        nexttoken.value === '$=' ||
                        nexttoken.value === '|=' ||
                        nexttoken.id === '*=' ||
                        nexttoken.id === '^=') {
                    advance();
                    if (nexttoken.type !== '(string)') {
                        warning("Expected a string, and instead saw {a}.",
                            nexttoken, nexttoken.value);
                    }
                    advance();
                }
                advance(']');
                break;
            default:
                error("Expected a CSS selector, and instead saw {a}.",
                    nexttoken, nexttoken.value);
            }
        }
    }

    function stylePattern() {
        var name;
        if (nexttoken.id === '{') {
            warning("Expected a style pattern, and instead saw '{a}'.", nexttoken,
                nexttoken.id);
        } else if (nexttoken.id === '@') {
            advance('@');
            name = nexttoken.value;
            if (nexttoken.identifier && atrule[name] === true) {
                advance();
                return name;
            }
            warning("Expected an at-rule, and instead saw @{a}.", nexttoken, name);
        }
        for (;;) {
            styleSelector();
            if (nexttoken.id === '</' || nexttoken.id === '{' ||
                    nexttoken.id === '(end)') {
                return '';
            }
            if (nexttoken.id === ',') {
                comma();
            }
        }
    }

    function styles() {
        var i;
        while (nexttoken.id === '@') {
            i = peek();
            if (i.identifier && i.value === 'import') {
                advance('@');
                advance();
                if (!cssUrl()) {
                    warning("Expected '{a}' and instead saw '{b}'.", nexttoken,
                        'url', nexttoken.value);
                    advance();
                }
                advance(';');
            } else {
                break;
            }
        }
        while (nexttoken.id !== '</' && nexttoken.id !== '(end)') {
            stylePattern();
            xmode = 'styleproperty';
            if (nexttoken.id === ';') {
                advance(';');
            } else {
                advance('{');
                substyle();
                xmode = 'style';
                advance('}');
            }
        }
    }


// HTML parsing.

    function doBegin(n) {
        if (n !== 'html' && !option.fragment) {
            if (n === 'div' && option.adsafe) {
                error("ADSAFE: Use the fragment option.");
            } else {
                error("Expected '{a}' and instead saw '{b}'.",
                    token, 'html', n);
            }
        }
        if (option.adsafe) {
            if (n === 'html') {
                error(
"Currently, ADsafe does not operate on whole HTML documents. It operates on <div> fragments and .js files.", token);
            }
            if (option.fragment) {
                if (n !== 'div') {
                    error("ADsafe violation: Wrap the widget in a div.", token);
                }
            } else {
                error("Use the fragment option.", token);
            }
        }
        option.browser = true;
        assume();
    }

    function doAttribute(n, a, v) {
        var u, x;
        if (a === 'id') {
            u = typeof v === 'string' ? v.toUpperCase() : '';
            if (ids[u] === true) {
                warning("Duplicate id='{a}'.", nexttoken, v);
            }
            if (option.adsafe) {
                if (adsafe_id) {
                    if (v.slice(0, adsafe_id.length) !== adsafe_id) {
                        warning("ADsafe violation: An id must have a '{a}' prefix",
                                nexttoken, adsafe_id);
                    } else if (!/^[A-Z]+_[A-Z]+$/.test(v)) {
                        warning("ADSAFE violation: bad id.");
                    }
                } else {
                    adsafe_id = v;
                    if (!/^[A-Z]+_$/.test(v)) {
                        warning("ADSAFE violation: bad id.");
                    }
                }
            }
            x = v.search(dx);
            if (x >= 0) {
                warning("Unexpected character '{a}' in {b}.", token, v.charAt(x), a);
            }
            ids[u] = true;
        } else if (a === 'class' || a === 'type' || a === 'name') {
            x = v.search(qx);
            if (x >= 0) {
                warning("Unexpected character '{a}' in {b}.", token, v.charAt(x), a);
            }
            ids[u] = true;
        } else if (a === 'href' || a === 'background' ||
                a === 'content' || a === 'data' ||
                a.indexOf('src') >= 0 || a.indexOf('url') >= 0) {
            if (option.safe && ux.test(v)) {
                error("ADsafe URL violation.");
            }
            urls.push(v);
        } else if (a === 'for') {
            if (option.adsafe) {
                if (adsafe_id) {
                    if (v.slice(0, adsafe_id.length) !== adsafe_id) {
                        warning("ADsafe violation: An id must have a '{a}' prefix",
                                nexttoken, adsafe_id);
                    } else if (!/^[A-Z]+_[A-Z]+$/.test(v)) {
                        warning("ADSAFE violation: bad id.");
                    }
                } else {
                    warning("ADSAFE violation: bad id.");
                }
            }
        } else if (a === 'name') {
            if (option.adsafe && v.indexOf('_') >= 0) {
                warning("ADsafe name violation.");
            }
        }
    }

    function doTag(n, a) {
        var i, t = htmltag[n], x;
        src = false;
        if (!t) {
            error("Unrecognized tag '<{a}>'.",
                    nexttoken,
                    n === n.toLowerCase() ? n :
                        n + ' (capitalization error)');
        }
        if (stack.length > 0) {
            if (n === 'html') {
                error("Too many <html> tags.", token);
            }
            x = t.parent;
            if (x) {
                if (x.indexOf(' ' + stack[stack.length - 1].name + ' ') < 0) {
                    error("A '<{a}>' must be within '<{b}>'.",
                            token, n, x);
                }
            } else if (!option.adsafe && !option.fragment) {
                i = stack.length;
                do {
                    if (i <= 0) {
                        error("A '<{a}>' must be within '<{b}>'.",
                                token, n, 'body');
                    }
                    i -= 1;
                } while (stack[i].name !== 'body');
            }
        }
        switch (n) {
        case 'div':
            if (option.adsafe && stack.length === 1 && !adsafe_id) {
                warning("ADSAFE violation: missing ID_.");
            }
            break;
        case 'script':
            xmode = 'script';
            advance('>');
            indent = nexttoken.from;
            if (a.lang) {
                warning("lang is deprecated.", token);
            }
            if (option.adsafe && stack.length !== 1) {
                warning("ADsafe script placement violation.", token);
            }
            if (a.src) {
                if (option.adsafe && (!adsafe_may || !approved[a.src])) {
                    warning("ADsafe unapproved script source.", token);
                }
                if (a.type) {
                    warning("type is unnecessary.", token);
                }
            } else {
                if (adsafe_went) {
                    error("ADsafe script violation.", token);
                }
                statements('script');
            }
            xmode = 'html';
            advance('</');
            if (!nexttoken.identifier && nexttoken.value !== 'script') {
                warning("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, 'script', nexttoken.value);
            }
            advance();
            xmode = 'outer';
            break;
        case 'style':
            xmode = 'style';
            advance('>');
            styles();
            xmode = 'html';
            advance('</');
            if (!nexttoken.identifier && nexttoken.value !== 'style') {
                warning("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, 'style', nexttoken.value);
            }
            advance();
            xmode = 'outer';
            break;
        case 'input':
            switch (a.type) {
            case 'radio':
            case 'checkbox':
            case 'button':
            case 'reset':
            case 'submit':
                break;
            case 'text':
            case 'file':
            case 'password':
            case 'file':
            case 'hidden':
            case 'image':
                if (option.adsafe && a.autocomplete !== 'off') {
                    warning("ADsafe autocomplete violation.");
                }
                break;
            default:
                warning("Bad input type.");
            }
            break;
        case 'applet':
        case 'body':
        case 'embed':
        case 'frame':
        case 'frameset':
        case 'head':
        case 'iframe':
        case 'noembed':
        case 'noframes':
        case 'object':
        case 'param':
            if (option.adsafe) {
                warning("ADsafe violation: Disallowed tag: " + n);
            }
            break;
        }
    }


    function closetag(n) {
        return '</' + n + '>';
    }

    function html() {
        var a, attributes, e, n, q, t, v, w = option.white, wmode;
        xmode = 'html';
        xquote = '';
        stack = null;
        for (;;) {
            switch (nexttoken.value) {
            case '<':
                xmode = 'html';
                advance('<');
                attributes = {};
                t = nexttoken;
                if (!t.identifier) {
                    warning("Bad identifier {a}.", t, t.value);
                }
                n = t.value;
                if (option.cap) {
                    n = n.toLowerCase();
                }
                t.name = n;
                advance();
                if (!stack) {
                    stack = [];
                    doBegin(n);
                }
                v = htmltag[n];
                if (typeof v !== 'object') {
                    error("Unrecognized tag '<{a}>'.", t, n);
                }
                e = v.empty;
                t.type = n;
                for (;;) {
                    if (nexttoken.id === '/') {
                        advance('/');
                        if (nexttoken.id !== '>') {
                            warning("Expected '{a}' and instead saw '{b}'.",
                                    nexttoken, '>', nexttoken.value);
                        }
                        break;
                    }
                    if (nexttoken.id && nexttoken.id.substr(0, 1) === '>') {
                        break;
                    }
                    if (!nexttoken.identifier) {
                        if (nexttoken.id === '(end)' || nexttoken.id === '(error)') {
                            error("Missing '>'.", nexttoken);
                        }
                        warning("Bad identifier.");
                    }
                    option.white = true;
                    nonadjacent(token, nexttoken);
                    a = nexttoken.value;
                    option.white = w;
                    advance();
                    if (!option.cap && a !== a.toLowerCase()) {
                        warning("Attribute '{a}' not all lower case.", nexttoken, a);
                    }
                    a = a.toLowerCase();
                    xquote = '';
                    if (is_own(attributes, a)) {
                        warning("Attribute '{a}' repeated.", nexttoken, a);
                    }
                    if (a.slice(0, 2) === 'on') {
                        if (!option.on) {
                            warning("Avoid HTML event handlers.");
                        }
                        xmode = 'scriptstring';
                        advance('=');
                        q = nexttoken.id;
                        if (q !== '"' && q !== "'") {
                            error("Missing quote.");
                        }
                        xquote = q;
                        wmode = option.white;
                        option.white = false;
                        advance(q);
                        statements('on');
                        option.white = wmode;
                        if (nexttoken.id !== q) {
                            error("Missing close quote on script attribute.");
                        }
                        xmode = 'html';
                        xquote = '';
                        advance(q);
                        v = false;
                    } else if (a === 'style') {
                        xmode = 'scriptstring';
                        advance('=');
                        q = nexttoken.id;
                        if (q !== '"' && q !== "'") {
                            error("Missing quote.");
                        }
                        xmode = 'styleproperty';
                        xquote = q;
                        advance(q);
                        substyle();
                        xmode = 'html';
                        xquote = '';
                        advance(q);
                        v = false;
                    } else {
                        if (nexttoken.id === '=') {
                            advance('=');
                            v = nexttoken.value;
                            if (!nexttoken.identifier &&
                                    nexttoken.id !== '"' &&
                                    nexttoken.id !== '\'' &&
                                    nexttoken.type !== '(string)' &&
                                    nexttoken.type !== '(number)' &&
                                    nexttoken.type !== '(color)') {
                                warning("Expected an attribute value and instead saw '{a}'.", token, a);
                            }
                            advance();
                        } else {
                            v = true;
                        }
                    }
                    attributes[a] = v;
                    doAttribute(n, a, v);
                }
                doTag(n, attributes);
                if (!e) {
                    stack.push(t);
                }
                xmode = 'outer';
                advance('>');
                break;
            case '</':
                xmode = 'html';
                advance('</');
                if (!nexttoken.identifier) {
                    warning("Bad identifier.");
                }
                n = nexttoken.value;
                if (option.cap) {
                    n = n.toLowerCase();
                }
                advance();
                if (!stack) {
                    error("Unexpected '{a}'.", nexttoken, closetag(n));
                }
                t = stack.pop();
                if (!t) {
                    error("Unexpected '{a}'.", nexttoken, closetag(n));
                }
                if (t.name !== n) {
                    error("Expected '{a}' and instead saw '{b}'.",
                            nexttoken, closetag(t.name), closetag(n));
                }
                if (nexttoken.id !== '>') {
                    error("Missing '{a}'.", nexttoken, '>');
                }
                xmode = 'outer';
                advance('>');
                break;
            case '<!':
                if (option.safe) {
                    warning("ADsafe HTML violation.");
                }
                xmode = 'html';
                for (;;) {
                    advance();
                    if (nexttoken.id === '>' || nexttoken.id === '(end)') {
                        break;
                    }
                    if (nexttoken.value.indexOf('--') >= 0) {
                        warning("Unexpected --.");
                    }
                    if (nexttoken.value.indexOf('<') >= 0) {
                        warning("Unexpected <.");
                    }
                    if (nexttoken.value.indexOf('>') >= 0) {
                        warning("Unexpected >.");
                    }
                }
                xmode = 'outer';
                advance('>');
                break;
            case '(end)':
                return;
            default:
                if (nexttoken.id === '(end)') {
                    error("Missing '{a}'.", nexttoken,
                            '</' + stack[stack.length - 1].value + '>');
                } else {
                    advance();
                }
            }
            if (stack && stack.length === 0 && (option.adsafe ||
                    !option.fragment || nexttoken.id === '(end)')) {
                break;
            }
        }
        if (nexttoken.id !== '(end)') {
            error("Unexpected material after the end.");
        }
    }


// Build the syntax table by declaring the syntactic elements of the language.

    type('(number)', idValue);
    type('(string)', idValue);

    syntax['(identifier)'] = {
        type: '(identifier)',
        lbp: 0,
        identifier: true,
        nud: function () {
            var v = this.value,
                s = scope[v],
                f;
            if (typeof s === 'function') {
                s = undefined;
            } else if (typeof s === 'boolean') {
                f = funct;
                funct = functions[0];
                addlabel(v, 'var');
                s = funct;
                funct = f;
            }

// The name is in scope and defined in the current function.

            if (funct === s) {

//      Change 'unused' to 'var', and reject labels.

                switch (funct[v]) {
                case 'unused':
                    funct[v] = 'var';
                    break;
                case 'label':
                    warning("'{a}' is a statement label.", token, v);
                    break;
                }

// The name is not defined in the function.  If we are in the global scope,
// then we have an undefined variable.

            } else if (funct['(global)']) {
                if (option.undef && predefined[v] !== 'boolean') {
                    warning("'{a}' is not defined.", token, v);
                }
                note_implied(token);

// If the name is already defined in the current
// function, but not as outer, then there is a scope error.

            } else {
                switch (funct[v]) {
                case 'closure':
                case 'function':
                case 'var':
                case 'unused':
                    warning("'{a}' used out of scope.", token, v);
                    break;
                case 'label':
                    warning("'{a}' is a statement label.", token, v);
                    break;
                case 'outer':
                case 'global':
                    break;
                default:

// If the name is defined in an outer function, make an outer entry, and if
// it was unused, make it var.

                    if (s === true) {
                        funct[v] = true;
                    } else if (typeof s !== 'object') {
                        if (option.undef) {
                            warning("'{a}' is not defined.", token, v);
                        } else {
                            funct[v] = true;
                        }
                        note_implied(token);
                    } else {
                        switch (s[v]) {
                        case 'function':
                        case 'var':
                        case 'unused':
                            s[v] = 'closure';
                            funct[v] = s['(global)'] ? 'global' : 'outer';
                            break;
                        case 'closure':
                        case 'parameter':
                            funct[v] = s['(global)'] ? 'global' : 'outer';
                            break;
                        case 'label':
                            warning("'{a}' is a statement label.", token, v);
                        }
                    }
                }
            }
            return this;
        },
        led: function () {
            error("Expected an operator and instead saw '{a}'.",
                    nexttoken, nexttoken.value);
        }
    };

    type('(regexp)', function () {
        return this;
    });

    delim('(endline)');
    delim('(begin)');
    delim('(end)').reach = true;
    delim('</').reach = true;
    delim('<!');
    delim('<!--');
    delim('-->');
    delim('(error)').reach = true;
    delim('}').reach = true;
    delim(')');
    delim(']');
    delim('"').reach = true;
    delim("'").reach = true;
    delim(';');
    delim(':').reach = true;
    delim(',');
    delim('#');
    delim('@');
    reserve('else');
    reserve('case').reach = true;
    reserve('catch');
    reserve('default').reach = true;
    reserve('finally');
    reservevar('arguments');
    reservevar('eval');
    reservevar('false');
    reservevar('Infinity');
    reservevar('NaN');
    reservevar('null');
    reservevar('this');
    reservevar('true');
    reservevar('undefined');
    assignop('=', 'assign', 20);
    assignop('+=', 'assignadd', 20);
    assignop('-=', 'assignsub', 20);
    assignop('*=', 'assignmult', 20);
    assignop('/=', 'assigndiv', 20).nud = function () {
        error("A regular expression literal can be confused with '/='.");
    };
    assignop('%=', 'assignmod', 20);
    bitwiseassignop('&=', 'assignbitand', 20);
    bitwiseassignop('|=', 'assignbitor', 20);
    bitwiseassignop('^=', 'assignbitxor', 20);
    bitwiseassignop('<<=', 'assignshiftleft', 20);
    bitwiseassignop('>>=', 'assignshiftright', 20);
    bitwiseassignop('>>>=', 'assignshiftrightunsigned', 20);
    infix('?', function (left, that) {
        that.left = left;
        that.right = parse(10);
        advance(':');
        that['else'] = parse(10);
        return that;
    }, 30);

    infix('||', 'or', 40);
    infix('&&', 'and', 50);
    bitwise('|', 'bitor', 70);
    bitwise('^', 'bitxor', 80);
    bitwise('&', 'bitand', 90);
    relation('==', function (left, right) {
        if (option.eqeqeq) {
            warning("Expected '{a}' and instead saw '{b}'.",
                    this, '===', '==');
        } else if (isPoorRelation(left)) {
            warning("Use '{a}' to compare with '{b}'.",
                this, '===', left.value);
        } else if (isPoorRelation(right)) {
            warning("Use '{a}' to compare with '{b}'.",
                this, '===', right.value);
        }
        return this;
    });
    relation('===');
    relation('!=', function (left, right) {
        if (option.eqeqeq) {
            warning("Expected '{a}' and instead saw '{b}'.",
                    this, '!==', '!=');
        } else if (isPoorRelation(left)) {
            warning("Use '{a}' to compare with '{b}'.",
                    this, '!==', left.value);
        } else if (isPoorRelation(right)) {
            warning("Use '{a}' to compare with '{b}'.",
                    this, '!==', right.value);
        }
        return this;
    });
    relation('!==');
    relation('<');
    relation('>');
    relation('<=');
    relation('>=');
    bitwise('<<', 'shiftleft', 120);
    bitwise('>>', 'shiftright', 120);
    bitwise('>>>', 'shiftrightunsigned', 120);
    infix('in', 'in', 120);
    infix('instanceof', 'instanceof', 120);
    infix('+', function (left, that) {
        var right = parse(130);
        if (left && right && left.id === '(string)' && right.id === '(string)') {
            left.value += right.value;
            left.character = right.character;
            if (jx.test(left.value)) {
                warning("JavaScript URL.", left);
            }
            return left;
        }
        that.left = left;
        that.right = right;
        return that;
    }, 130);
    prefix('+', 'num');
    infix('-', 'sub', 130);
    prefix('-', 'neg');
    infix('*', 'mult', 140);
    infix('/', 'div', 140);
    infix('%', 'mod', 140);

    suffix('++', 'postinc');
    prefix('++', 'preinc');
    syntax['++'].exps = true;

    suffix('--', 'postdec');
    prefix('--', 'predec');
    syntax['--'].exps = true;
    prefix('delete', function () {
        var p = parse(0);
        if (!p || (p.id !== '.' && p.id !== '[')) {
            warning("Expected '{a}' and instead saw '{b}'.",
                    nexttoken, '.', nexttoken.value);
        }
        this.first = p;
        return this;
    }).exps = true;


    prefix('~', function () {
        if (option.bitwise) {
            warning("Unexpected '{a}'.", this, '~');
        }
        parse(150);
        return this;
    });
    prefix('!', 'not');
    prefix('typeof', 'typeof');
    prefix('new', function () {
        var c = parse(155), i;
        if (c && c.id !== 'function') {
            if (c.identifier) {
                c['new'] = true;
                switch (c.value) {
                case 'Object':
                    warning("Use the object literal notation {}.", token);
                    break;
                case 'Array':
                    if (nexttoken.id !== '(') {
                        warning("Use the array literal notation [].", token);
                    } else {
                        advance('(');
                        if (nexttoken.id === ')') {
                            warning("Use the array literal notation [].", token);
                        } else {
                            i = parse(0);
                            c.dimension = i;
                            if ((i.id === '(number)' && /[.+\-Ee]/.test(i.value)) ||
                                    (i.id === '-' && !i.right) ||
                                    i.id === '(string)' || i.id === '[' ||
                                    i.id === '{' || i.id === 'true' ||
                                    i.id === 'false' ||
                                    i.id === 'null' || i.id === 'undefined' ||
                                    i.id === 'Infinity') {
                                warning("Use the array literal notation [].", token);
                            }
                            if (nexttoken.id !== ')') {
                                error("Use the array literal notation [].", token);
                            }
                        }
                        advance(')');
                    }
                    this.first = c;
                    return this;
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Math':
                case 'JSON':
                    warning("Do not use {a} as a constructor.", token, c.value);
                    break;
                case 'Function':
                    if (!option.evil) {
                        warning("The Function constructor is eval.");
                    }
                    break;
                case 'Date':
                case 'RegExp':
                    break;
                default:
                    if (c.id !== 'function') {
                        i = c.value.substr(0, 1);
                        if (option.newcap && (i < 'A' || i > 'Z')) {
                            warning(
                    "A constructor name should start with an uppercase letter.",
                                token);
                        }
                    }
                }
            } else {
                if (c.id !== '.' && c.id !== '[' && c.id !== '(') {
                    warning("Bad constructor.", token);
                }
            }
        } else {
            warning("Weird construction. Delete 'new'.", this);
        }
        adjacent(token, nexttoken);
        if (nexttoken.id !== '(') {
            warning("Missing '()' invoking a constructor.");
        }
        this.first = c;
        return this;
    });
    syntax['new'].exps = true;

    infix('.', function (left, that) {
        adjacent(prevtoken, token);
        var m = identifier();
        if (typeof m === 'string') {
            countMember(m);
        }
        that.left = left;
        that.right = m;
        if (!option.evil && left && left.value === 'document' &&
                (m === 'write' || m === 'writeln')) {
            warning("document.write can be a form of eval.", left);
        } else if (option.adsafe) {
            if (left && left.value === 'ADSAFE') {
                if (m === 'id' || m === 'lib') {
                    warning("ADsafe violation.", that);
                } else if (m === 'go') {
                    if (xmode !== 'script') {
                        warning("ADsafe violation.", that);
                    } else if (adsafe_went || nexttoken.id !== '(' ||
                            peek(0).id !== '(string)' ||
                            peek(0).value !== adsafe_id ||
                            peek(1).id !== ',') {
                        error("ADsafe violation: go.", that);
                    }
                    adsafe_went = true;
                    adsafe_may = false;
                }
            }
        }
        if (!option.evil && (m === 'eval' || m === 'execScript')) {
            warning('eval is evil.');
        } else if (option.safe) {
            for (;;) {
                if (banned[m] === true) {
                    warning("ADsafe restricted word '{a}'.", token, m);
                }
                if (typeof predefined[left.value] !== 'boolean' ||
                        nexttoken.id === '(') {
                    break;
                }
                if (standard_member[m] === true) {
                    if (nexttoken.id === '.') {
                        warning("ADsafe violation.", that);
                    }
                    break;
                }
                if (nexttoken.id !== '.') {
                    warning("ADsafe violation.", that);
                    break;
                }
                advance('.');
                token.left = that;
                token.right = m;
                that = token;
                m = identifier();
                if (typeof m === 'string') {
                    countMember(m);
                }
            }
        }
        return that;
    }, 160, true);

    infix('(', function (left, that) {
        adjacent(prevtoken, token);
        nospace();
        var n = 0,
            p = [];
        if (left) {
            if (left.type === '(identifier)') {
                if (left.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)) {
                    if (left.value !== 'Number' && left.value !== 'String' &&
                            left.value !== 'Boolean' &&
                            left.value !== 'Date') {
                        if (left.value === 'Math') {
                            warning("Math is not a function.", left);
                        } else if (option.newcap) {
                            warning(
"Missing 'new' prefix when invoking a constructor.", left);
                        }
                    }
                }
            } else if (left.id === '.') {
                if (option.safe && left.left.value === 'Math' &&
                        left.right === 'random') {
                    warning("ADsafe violation.", left);
                }
            }
        }
        if (nexttoken.id !== ')') {
            for (;;) {
                p[p.length] = parse(10);
                n += 1;
                if (nexttoken.id !== ',') {
                    break;
                }
                comma();
            }
        }
        advance(')');
        if (option.immed && left.id === 'function' && nexttoken.id !== ')') {
            warning("Wrap the entire immediate function invocation in parens.",
                that);
        }
        nospace(prevtoken, token);
        if (typeof left === 'object') {
            if (left.value === 'parseInt' && n === 1) {
                warning("Missing radix parameter.", left);
            }
            if (!option.evil) {
                if (left.value === 'eval' || left.value === 'Function' ||
                        left.value === 'execScript') {
                    warning("eval is evil.", left);
                } else if (p[0] && p[0].id === '(string)' &&
                       (left.value === 'setTimeout' ||
                        left.value === 'setInterval')) {
                    warning(
    "Implied eval is evil. Pass a function instead of a string.", left);
                }
            }
            if (!left.identifier && left.id !== '.' && left.id !== '[' &&
                    left.id !== '(' && left.id !== '&&' && left.id !== '||' &&
                    left.id !== '?') {
                warning("Bad invocation.", left);
            }
        }
        that.left = left;
        return that;
    }, 155, true).exps = true;

    prefix('(', function () {
        nospace();
        var v = parse(0);
        advance(')', this);
        nospace(prevtoken, token);
        if (option.immed && v.id === 'function') {
            if (nexttoken.id === '(') {
                warning(
"Move the invocation into the parens that contain the function.", nexttoken);
            } else {
                warning(
"Do not wrap function literals in parens unless they are to be immediately invoked.",
                        this);
            }
        }
        return v;
    });

    infix('[', function (left, that) {
        nospace();
        var e = parse(0), s;
        if (e && e.type === '(string)') {
            if (option.safe && banned[e.value] === true) {
                warning("ADsafe restricted word '{a}'.", that, e.value);
            } else if (!option.evil &&
                    (e.value === 'eval' || e.value === 'execScript')) {
                warning("eval is evil.", that);
            } else if (option.safe &&
                    (e.value.charAt(0) === '_' || e.value.charAt(0) === '-')) {
                warning("ADsafe restricted subscript '{a}'.", that, e.value);
            }
            countMember(e.value);
            if (!option.sub && ix.test(e.value)) {
                s = syntax[e.value];
                if (!s || !s.reserved) {
                    warning("['{a}'] is better written in dot notation.",
                            e, e.value);
                }
            }
        } else if (!e || e.type !== '(number)' || e.value < 0) {
            if (option.safe) {
                warning('ADsafe subscripting.');
            }
        }
        advance(']', that);
        nospace(prevtoken, token);
        that.left = left;
        that.right = e;
        return that;
    }, 160, true);

    prefix('[', function () {
        this.first = [];
        if (nexttoken.id === ']') {
            advance(']');
            return this;
        }
        var b = token.line !== nexttoken.line;
        if (b) {
            indent += option.indent;
            if (nexttoken.from === indent + option.indent) {
                indent += option.indent;
            }
        }
        for (;;) {
            if (b && token.line !== nexttoken.line) {
                indentation();
            }
            parse(10);
            if (nexttoken.id === ',') {
                comma();
                if (nexttoken.id === ',') {
                    warning("Extra comma.", token);
                } else if (nexttoken.id === ']') {
                    warning("Extra comma.", token);
                    break;
                }
            } else {
                if (b) {
                    indent -= option.indent;
                    indentation();
                }
                break;
            }
        }
        advance(']', this);
        return this;
    }, 160);

    (function (x) {
        x.nud = function () {
            var b, i, s, seen = {};
            b = token.line !== nexttoken.line;
            if (b) {
                indent += option.indent;
                if (nexttoken.from === indent + option.indent) {
                    indent += option.indent;
                }
            }
            for (;;) {
                if (nexttoken.id === '}') {
                    break;
                }
                if (b) {
                    indentation();
                }
                i = optionalidentifier(true);
                if (!i) {
                    if (nexttoken.id === '(string)') {
                        i = nexttoken.value;
                        if (ix.test(i)) {
                            s = syntax[i];
                        }
                        advance();
                    } else if (nexttoken.id === '(number)') {
                        i = nexttoken.value.toString();
                        advance();
                    } else {
                        error("Expected '{a}' and instead saw '{b}'.",
                                nexttoken, '}', nexttoken.value);
                    }
                }
                if (seen[i] === true) {
                    warning("Duplicate member '{a}'.", nexttoken, i);
                }
                seen[i] = true;
                countMember(i);
                advance(':');
                nonadjacent(token, nexttoken);
                parse(10);
                if (nexttoken.id === ',') {
                    comma();
                    if (nexttoken.id === ',' || nexttoken.id === '}') {
                        warning("Extra comma.", token);
                    }
                } else {
                    break;
                }
            }
            if (b) {
                indent -= option.indent;
                indentation();
            }
            advance('}', this);
            return this;
        };
        x.fud = function () {
            error("Expected to see a statement and instead saw a block.", token);
        };
    }(delim('{')));


    function varstatement(prefix) {

// JavaScript does not have block scope. It only has function scope. So,
// declaring a variable in a block can have unexpected consequences.

        var id, name, value;

        if (funct['(onevar)'] && option.onevar) {
            warning("Too many var statements.");
        } else if (!funct['(global)']) {
            funct['(onevar)'] = true;
        }
        this.first = [];
        for (;;) {
            nonadjacent(token, nexttoken);
            id = identifier();
            if (funct['(global)'] && predefined[id] === false) {
                warning("Redefinition of '{a}'.", token, id);
            }
            addlabel(id, 'unused');
            if (prefix) {
                break;
            }
            name = token;
            this.first.push(token);
            if (nexttoken.id === '=') {
                nonadjacent(token, nexttoken);
                advance('=');
                nonadjacent(token, nexttoken);
                if (peek(0).id === '=' && nexttoken.identifier) {
                    error("Variable {a} was not declared correctly.",
                            nexttoken, nexttoken.value);
                }
                value = parse(0);
                name.first = value;
            }
            if (nexttoken.id !== ',') {
                break;
            }
            comma();
        }
        return this;
    }


    stmt('var', varstatement).exps = true;


    function functionparams() {
        var i, t = nexttoken, p = [];
        advance('(');
        nospace();
        if (nexttoken.id === ')') {
            advance(')');
            nospace(prevtoken, token);
            return;
        }
        for (;;) {
            i = identifier();
            p.push(i);
            addlabel(i, 'parameter');
            if (nexttoken.id === ',') {
                comma();
            } else {
                advance(')', t);
                nospace(prevtoken, token);
                return p;
            }
        }
    }

    function doFunction(i) {
        var s = scope;
        scope = Object.create(s);
        funct = {
            '(name)'    : i || '"' + anonname + '"',
            '(line)'    : nexttoken.line,
            '(context)' : funct,
            '(breakage)': 0,
            '(loopage)' : 0,
            '(scope)'   : scope
        };
        token.funct = funct;
        functions.push(funct);
        if (i) {
            addlabel(i, 'function');
        }
        funct['(params)'] = functionparams();

        block(false);
        scope = s;
        funct['(last)'] = token.line;
        funct = funct['(context)'];
    }


    blockstmt('function', function () {
        if (inblock) {
            warning(
"Function statements cannot be placed in blocks. Use a function expression or move the statement to the top of the outer function.", token);

        }
        var i = identifier();
        adjacent(token, nexttoken);
        addlabel(i, 'unused');
        doFunction(i);
        if (nexttoken.id === '(' && nexttoken.line === token.line) {
            error(
"Function statements are not invocable. Wrap the whole function invocation in parens.");
        }
        return this;
    });

    prefix('function', function () {
        var i = optionalidentifier();
        if (i) {
            adjacent(token, nexttoken);
        } else {
            nonadjacent(token, nexttoken);
        }
        doFunction(i);
        if (funct['(loopage)'] && nexttoken.id !== '(') {
            warning("Be careful when making functions within a loop. Consider putting the function in a closure.");
        }
        return this;
    });

    blockstmt('if', function () {
        var t = nexttoken;
        advance('(');
        nonadjacent(this, t);
        nospace();
        parse(20);
        if (nexttoken.id === '=') {
            warning("Expected a conditional expression and instead saw an assignment.");
            advance('=');
            parse(20);
        }
        advance(')', t);
        nospace(prevtoken, token);
        block(true);
        if (nexttoken.id === 'else') {
            nonadjacent(token, nexttoken);
            advance('else');
            if (nexttoken.id === 'if' || nexttoken.id === 'switch') {
                statement(true);
            } else {
                block(true);
            }
        }
        return this;
    });

    blockstmt('try', function () {
        var b, e, s;
        if (option.adsafe) {
            warning("ADsafe try violation.", this);
        }
        block(false);
        if (nexttoken.id === 'catch') {
            advance('catch');
            nonadjacent(token, nexttoken);
            advance('(');
            s = scope;
            scope = Object.create(s);
            e = nexttoken.value;
            if (nexttoken.type !== '(identifier)') {
                warning("Expected an identifier and instead saw '{a}'.",
                    nexttoken, e);
            } else {
                addlabel(e, 'exception');
            }
            advance();
            advance(')');
            block(false);
            b = true;
            scope = s;
        }
        if (nexttoken.id === 'finally') {
            advance('finally');
            block(false);
            return;
        } else if (!b) {
            error("Expected '{a}' and instead saw '{b}'.",
                    nexttoken, 'catch', nexttoken.value);
        }
        return this;
    });

    blockstmt('while', function () {
        var t = nexttoken;
        funct['(breakage)'] += 1;
        funct['(loopage)'] += 1;
        advance('(');
        nonadjacent(this, t);
        nospace();
        parse(20);
        if (nexttoken.id === '=') {
            warning("Expected a conditional expression and instead saw an assignment.");
            advance('=');
            parse(20);
        }
        advance(')', t);
        nospace(prevtoken, token);
        block(true);
        funct['(breakage)'] -= 1;
        funct['(loopage)'] -= 1;
        return this;
    }).labelled = true;

    reserve('with');

    blockstmt('switch', function () {
        var t = nexttoken,
            g = false;
        funct['(breakage)'] += 1;
        advance('(');
        nonadjacent(this, t);
        nospace();
        this.condition = parse(20);
        advance(')', t);
        nospace(prevtoken, token);
        nonadjacent(token, nexttoken);
        t = nexttoken;
        advance('{');
        nonadjacent(token, nexttoken);
        indent += option.indent;
        this.cases = [];
        for (;;) {
            switch (nexttoken.id) {
            case 'case':
                switch (funct['(verb)']) {
                case 'break':
                case 'case':
                case 'continue':
                case 'return':
                case 'switch':
                case 'throw':
                    break;
                default:
                    warning(
                        "Expected a 'break' statement before 'case'.",
                        token);
                }
                indentation(-option.indent);
                advance('case');
                this.cases.push(parse(20));
                g = true;
                advance(':');
                funct['(verb)'] = 'case';
                break;
            case 'default':
                switch (funct['(verb)']) {
                case 'break':
                case 'continue':
                case 'return':
                case 'throw':
                    break;
                default:
                    warning(
                        "Expected a 'break' statement before 'default'.",
                        token);
                }
                indentation(-option.indent);
                advance('default');
                g = true;
                advance(':');
                break;
            case '}':
                indent -= option.indent;
                indentation();
                advance('}', t);
                if (this.cases.length === 1 || this.condition.id === 'true' ||
                        this.condition.id === 'false') {
                    warning("This 'switch' should be an 'if'.", this);
                }
                funct['(breakage)'] -= 1;
                funct['(verb)'] = undefined;
                return;
            case '(end)':
                error("Missing '{a}'.", nexttoken, '}');
                return;
            default:
                if (g) {
                    switch (token.id) {
                    case ',':
                        error("Each value should have its own case label.");
                        return;
                    case ':':
                        statements();
                        break;
                    default:
                        error("Missing ':' on a case clause.", token);
                    }
                } else {
                    error("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, 'case', nexttoken.value);
                }
            }
        }
    }).labelled = true;

    stmt('debugger', function () {
        if (!option.debug) {
            warning("All 'debugger' statements should be removed.");
        }
        return this;
    }).exps = true;

    (function () {
        var x = stmt('do', function () {
            funct['(breakage)'] += 1;
            funct['(loopage)'] += 1;
            this.first = block(true);
            advance('while');
            var t = nexttoken;
            nonadjacent(token, t);
            advance('(');
            nospace();
            parse(20);
            if (nexttoken.id === '=') {
                warning("Expected a conditional expression and instead saw an assignment.");
                advance('=');
                parse(20);
            }
            advance(')', t);
            nospace(prevtoken, token);
            funct['(breakage)'] -= 1;
            funct['(loopage)'] -= 1;
            return this;
        });
        x.labelled = true;
        x.exps = true;
    }());

    blockstmt('for', function () {
        var f = option.forin, s, t = nexttoken;
        funct['(breakage)'] += 1;
        funct['(loopage)'] += 1;
        advance('(');
        nonadjacent(this, t);
        nospace();
        if (peek(nexttoken.id === 'var' ? 1 : 0).id === 'in') {
            if (nexttoken.id === 'var') {
                advance('var');
                varstatement(true);
            } else {
                switch (funct[nexttoken.value]) {
                case 'unused':
                    funct[nexttoken.value] = 'var';
                    break;
                case 'var':
                    break;
                default:
                    warning("Bad for in variable '{a}'.",
                            nexttoken, nexttoken.value);
                }
                advance();
            }
            advance('in');
            parse(20);
            advance(')', t);
            s = block(true);
            if (!f && (s.length > 1 || typeof s[0] !== 'object' ||
                    s[0].value !== 'if')) {
                warning("The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.", this);
            }
            funct['(breakage)'] -= 1;
            funct['(loopage)'] -= 1;
            return this;
        } else {
            if (nexttoken.id !== ';') {
                if (nexttoken.id === 'var') {
                    advance('var');
                    varstatement();
                } else {
                    for (;;) {
                        parse(0, 'for');
                        if (nexttoken.id !== ',') {
                            break;
                        }
                        comma();
                    }
                }
            }
            nolinebreak(token);
            advance(';');
            if (nexttoken.id !== ';') {
                parse(20);
                if (nexttoken.id === '=') {
                    warning("Expected a conditional expression and instead saw an assignment.");
                    advance('=');
                    parse(20);
                }
            }
            nolinebreak(token);
            advance(';');
            if (nexttoken.id === ';') {
                error("Expected '{a}' and instead saw '{b}'.",
                        nexttoken, ')', ';');
            }
            if (nexttoken.id !== ')') {
                for (;;) {
                    parse(0, 'for');
                    if (nexttoken.id !== ',') {
                        break;
                    }
                    comma();
                }
            }
            advance(')', t);
            nospace(prevtoken, token);
            block(true);
            funct['(breakage)'] -= 1;
            funct['(loopage)'] -= 1;
            return this;
        }
    }).labelled = true;


    stmt('break', function () {
        var v = nexttoken.value;
        if (funct['(breakage)'] === 0) {
            warning("Unexpected '{a}'.", nexttoken, this.value);
        }
        nolinebreak(this);
        if (nexttoken.id !== ';') {
            if (token.line === nexttoken.line) {
                if (funct[v] !== 'label') {
                    warning("'{a}' is not a statement label.", nexttoken, v);
                } else if (scope[v] !== funct) {
                    warning("'{a}' is out of scope.", nexttoken, v);
                }
                this.first = nexttoken;
                advance();
            }
        }
        reachable('break');
        return this;
    }).exps = true;


    stmt('continue', function () {
        var v = nexttoken.value;
        if (funct['(breakage)'] === 0) {
            warning("Unexpected '{a}'.", nexttoken, this.value);
        }
        nolinebreak(this);
        if (nexttoken.id !== ';') {
            if (token.line === nexttoken.line) {
                if (funct[v] !== 'label') {
                    warning("'{a}' is not a statement label.", nexttoken, v);
                } else if (scope[v] !== funct) {
                    warning("'{a}' is out of scope.", nexttoken, v);
                }
                this.first = nexttoken;
                advance();
            }
        }
        reachable('continue');
        return this;
    }).exps = true;


    stmt('return', function () {
        nolinebreak(this);
        if (nexttoken.id === '(regexp)') {
            warning("Wrap the /regexp/ literal in parens to disambiguate the slash operator.");
        }
        if (nexttoken.id !== ';' && !nexttoken.reach) {
            nonadjacent(token, nexttoken);
            this.first = parse(20);
        }
        reachable('return');
        return this;
    }).exps = true;


    stmt('throw', function () {
        nolinebreak(this);
        nonadjacent(token, nexttoken);
        this.first = parse(20);
        reachable('throw');
        return this;
    }).exps = true;

    reserve('void');

//  Superfluous reserved words

    reserve('class');
    reserve('const');
    reserve('enum');
    reserve('export');
    reserve('extends');
    reserve('import');
    reserve('super');

    reserve('let');
    reserve('yield');
    reserve('implements');
    reserve('interface');
    reserve('package');
    reserve('private');
    reserve('protected');
    reserve('public');
    reserve('static');

    function jsonValue() {

        function jsonObject() {
            var o = {}, t = nexttoken;
            advance('{');
            if (nexttoken.id !== '}') {
                for (;;) {
                    if (nexttoken.id === '(end)') {
                        error("Missing '}' to match '{' from line {a}.",
                                nexttoken, t.line);
                    } else if (nexttoken.id === '}') {
                        warning("Unexpected comma.", token);
                        break;
                    } else if (nexttoken.id === ',') {
                        error("Unexpected comma.", nexttoken);
                    } else if (nexttoken.id !== '(string)') {
                        warning("Expected a string and instead saw {a}.",
                                nexttoken, nexttoken.value);
                    }
                    if (o[nexttoken.value] === true) {
                        warning("Duplicate key '{a}'.",
                                nexttoken, nexttoken.value);
                    } else if (nexttoken.value === '__proto__') {
                        warning("Stupid key '{a}'.",
                                nexttoken, nexttoken.value);
                    } else {
                        o[nexttoken.value] = true;
                    }
                    advance();
                    advance(':');
                    jsonValue();
                    if (nexttoken.id !== ',') {
                        break;
                    }
                    advance(',');
                }
            }
            advance('}');
        }

        function jsonArray() {
            var t = nexttoken;
            advance('[');
            if (nexttoken.id !== ']') {
                for (;;) {
                    if (nexttoken.id === '(end)') {
                        error("Missing ']' to match '[' from line {a}.",
                                nexttoken, t.line);
                    } else if (nexttoken.id === ']') {
                        warning("Unexpected comma.", token);
                        break;
                    } else if (nexttoken.id === ',') {
                        error("Unexpected comma.", nexttoken);
                    }
                    jsonValue();
                    if (nexttoken.id !== ',') {
                        break;
                    }
                    advance(',');
                }
            }
            advance(']');
        }

        switch (nexttoken.id) {
        case '{':
            jsonObject();
            break;
        case '[':
            jsonArray();
            break;
        case 'true':
        case 'false':
        case 'null':
        case '(number)':
        case '(string)':
            advance();
            break;
        case '-':
            advance('-');
            if (token.character !== nexttoken.from) {
                warning("Unexpected space after '-'.", token);
            }
            adjacent(token, nexttoken);
            advance('(number)');
            break;
        default:
            error("Expected a JSON value.", nexttoken);
        }
    }


// The actual JSLINT function itself.

    var itself = function (s, o) {
        var a, i;
        JSLINT.errors = [];
        predefined = Object.create(standard);
        if (o) {
            a = o.predef;
            if (a instanceof Array) {
                for (i = 0; i < a.length; i += 1) {
                    predefined[a[i]] = true;
                }
            }
            if (o.adsafe) {
                o.safe = true;
            }
            if (o.safe) {
                o.browser = false;
                o.css     = false;
                o.debug   = false;
                o.eqeqeq  = true;
                o.evil    = false;
                o.forin   = false;
                o.nomen   = true;
                o.on      = false;
                o.rhino   = false;
                o.safe    = true;
                o.sidebar = false;
                o.strict  = true;
                o.sub     = false;
                o.undef   = true;
                o.widget  = false;
                predefined.Date = null;
                predefined['eval'] = null;
                predefined.Function = null;
                predefined.Object = null;
                predefined.ADSAFE = false;
                predefined.lib = false;
            }
            option = o;
        } else {
            option = {};
        }
        option.indent = option.indent || 4;
        option.maxerr = option.maxerr || 50;
        adsafe_id = '';
        adsafe_may = false;
        adsafe_went = false;
        approved = {};
        if (option.approved) {
            for (i = 0; i < option.approved.length; i += 1) {
                approved[option.approved[i]] = option.approved[i];
            }
        } else {
            approved.test = 'test';
        }
        tab = '';
        for (i = 0; i < option.indent; i += 1) {
            tab += ' ';
        }
        indent = 1;
        global = Object.create(predefined);
        scope = global;
        funct = {
            '(global)': true,
            '(name)': '(global)',
            '(scope)': scope,
            '(breakage)': 0,
            '(loopage)': 0
        };
        functions = [funct];
        ids = {};
        urls = [];
        src = false;
        xmode = false;
        stack = null;
        member = {};
        membersOnly = null;
        implied = {};
        inblock = false;
        lookahead = [];
        jsonmode = false;
        warnings = 0;
        lex.init(s);
        prereg = true;

        prevtoken = token = nexttoken = syntax['(begin)'];
        assume();

        try {
            advance();
            if (nexttoken.value.charAt(0) === '<') {
                html();
                if (option.adsafe && !adsafe_went) {
                    warning("ADsafe violation: Missing ADSAFE.go.", this);
                }
            } else {
                switch (nexttoken.id) {
                case '{':
                case '[':
                    option.laxbreak = true;
                    jsonmode = true;
                    jsonValue();
                    break;
                case '@':
                case '*':
                case '#':
                case '.':
                case ':':
                    xmode = 'style';
                    advance();
                    if (token.id !== '@' || !nexttoken.identifier ||
                            nexttoken.value !== 'charset' || token.line !== 1 ||
                            token.from !== 1) {
                        error('A css file should begin with @charset "UTF-8";');
                    }
                    advance();
                    if (nexttoken.type !== '(string)' &&
                            nexttoken.value !== 'UTF-8') {
                        error('A css file should begin with @charset "UTF-8";');
                    }
                    advance();
                    advance(';');
                    styles();
                    break;

                default:
                    if (option.adsafe && option.fragment) {
                        error("Expected '{a}' and instead saw '{b}'.",
                            nexttoken, '<div>', nexttoken.value);
                    }
                    statements('lib');
                }
            }
            advance('(end)');
        } catch (e) {
            if (e) {
                JSLINT.errors.push({
                    reason    : e.message,
                    line      : e.line || nexttoken.line,
                    character : e.character || nexttoken.from
                }, null);
            }
        }
        return JSLINT.errors.length === 0;
    };

    function is_array(o) {
        return Object.prototype.toString.apply(o) === '[object Array]';
    }

    function to_array(o) {
        var a = [], k;
        for (k in o) {
            if (is_own(o, k)) {
                a.push(k);
            }
        }
        return a;
    }

// Data summary.

    itself.data = function () {

        var data = {functions: []}, fu, globals, implieds = [], f, i, j,
            members = [], n, unused = [], v;
        if (itself.errors.length) {
            data.errors = itself.errors;
        }

        if (jsonmode) {
            data.json = true;
        }

        for (n in implied) {
            if (is_own(implied, n)) {
                implieds.push({
                    name: n,
                    line: implied[n]
                });
            }
        }
        if (implieds.length > 0) {
            data.implieds = implieds;
        }

        if (urls.length > 0) {
            data.urls = urls;
        }

        globals = to_array(scope);
        if (globals.length > 0) {
            data.globals = globals;
        }

        for (i = 1; i < functions.length; i += 1) {
            f = functions[i];
            fu = {};
            for (j = 0; j < functionicity.length; j += 1) {
                fu[functionicity[j]] = [];
            }
            for (n in f) {
                if (is_own(f, n) && n.charAt(0) !== '(') {
                    v = f[n];
                    if (is_array(fu[v])) {
                        fu[v].push(n);
                        if (v === 'unused') {
                            unused.push({
                                name: n,
                                line: f['(line)'],
                                'function': f['(name)']
                            });
                        }
                    }
                }
            }
            for (j = 0; j < functionicity.length; j += 1) {
                if (fu[functionicity[j]].length === 0) {
                    delete fu[functionicity[j]];
                }
            }
            fu.name = f['(name)'];
            fu.param = f['(params)'];
            fu.line = f['(line)'];
            fu.last = f['(last)'];
            data.functions.push(fu);
        }

        if (unused.length > 0) {
            data.unused = unused;
        }

        members = [];
        for (n in member) {
            if (typeof member[n] === 'number') {
                data.member = member;
                break;
            }
        }

        return data;
    };

    itself.report = function (option) {
        var data = itself.data();

        var a = [], c, e, err, f, i, k, l, m = '', n, o = [], s;

        function detail(h, s) {
            if (s) {
                o.push('<div><i>' + h + '</i> ' +
                        s.sort().join(', ') + '</div>');
            }
        }


        if (data.errors || data.implieds || data.unused) {
            err = true;
            o.push('<div id=errors><i>Error:</i>');
            if (data.errors) {
                for (i = 0; i < data.errors.length; i += 1) {
                    c = data.errors[i];
                    if (c) {
                        e = c.evidence || '';
                        o.push('<p>Problem' + (isFinite(c.line) ? ' at line ' +
                                c.line + ' character ' + c.character : '') +
                                ': ' + c.reason.entityify() +
                                '</p><p class=evidence>' +
                                (e && (e.length > 80 ? e.slice(0, 77) + '...' :
                                e).entityify()) + '</p>');
                    }
                }
            }

            if (data.implieds) {
                s = [];
                for (i = 0; i < data.implieds.length; i += 1) {
                    s[i] = '<code>' + data.implieds[i].name + '</code>&nbsp;<i>' +
                        data.implieds[i].line + '</i>';
                }
                o.push('<p><i>Implied global:</i> ' + s.join(', ') + '</p>');
            }

            if (data.unused) {
                s = [];
                for (i = 0; i < data.unused.length; i += 1) {
                    s[i] = '<code>' + data.unused[i].name + '</code>&nbsp;<i>' +
                        data.unused[i].line + '</i> <code>' +
                        data.unused[i]['function'] + '</code>';
                }
                o.push('<p><i>Unused variable:</i> ' + s.join(', ') + '</p>');
            }
            if (data.json) {
                o.push('<p>JSON: bad.</p>');
            }
            o.push('</div>');
        }

        if (!option) {

            o.push('<br><div id=functions>');

            if (data.urls) {
                detail("URLs<br>", data.urls, '<br>');
            }

            if (data.json && !err) {
                o.push('<p>JSON: good.</p>');
            } else if (data.globals) {
                o.push('<div><i>Global</i> ' +
                        data.globals.sort().join(', ') + '</div>');
            } else {
                o.push('<div><i>No new global variables introduced.</i></div>');
            }

            for (i = 0; i < data.functions.length; i += 1) {
                f = data.functions[i];

                o.push('<br><div class=function><i>' + f.line + '-' +
                        f.last + '</i> ' + (f.name || '') + '(' +
                        (f.param ? f.param.join(', ') : '') + ')</div>');
                detail('<big><b>Unused</b></big>', f.unused);
                detail('Closure', f.closure);
                detail('Variable', f['var']);
                detail('Exception', f.exception);
                detail('Outer', f.outer);
                detail('Global', f.global);
                detail('Label', f.label);
            }

            if (data.member) {
                a = to_array(data.member);
                if (a.length) {
                    a = a.sort();
                    m = '<br><pre id=members>/*members ';
                    l = 10;
                    for (i = 0; i < a.length; i += 1) {
                        k = a[i];
                        n = k.name();
                        if (l + n.length > 72) {
                            o.push(m + '<br>');
                            m = '    ';
                            l = 1;
                        }
                        l += n.length + 2;
                        if (data.member[k] === 1) {
                            n = '<i>' + n + '</i>';
                        }
                        if (i < a.length - 1) {
                            n += ', ';
                        }
                        m += n;
                    }
                    o.push(m + '<br>*/</pre>');
                }
                o.push('</div>');
            }
        }
        return o.join('');
    };
    itself.jslint = itself;

    itself.edition = '2009-08-31';

    return itself;

}());
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM');

TYPO3.EM.Layouts = {

	getInfoTemplate: function() {
		// later get template via Ajax
		return new Ext.XTemplate(
			'<div class="em-extlist-extinfo">',
				'<h2>{icon} {title} ({extkey})</h2>',
				'<p class="desc">{description}</p>',
				'<div class="em-extlist-extinfo-sub">',
					'<div class="em-extlist-extinfo-left">',
						'<h3>' + TYPO3.l10n.localize('show_details') + '</h3>',
						'<p><label>' + TYPO3.l10n.localize('extInfoArray_author') + ':</label> {author}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_version') + ':</label> {version}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_category') + ':</label> {category}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_state') + ':</label> {state}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_shy') + ':</label> {shyword}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_internal') + ':</label> {internal}<br />',
						'<label>' + TYPO3.l10n.localize('ext_details_doNotLoadInFE') + ':</label> {[this.loadInFe(values)]}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_depends_on') + ':</label> {depends}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_conflicts_with') + ':</label> {conflicts}<br />',
						'<label>' + TYPO3.l10n.localize('extInfoArray_suggests') + ':</label> {suggests}<br />',
					'</div>',
					'<div class="em-extlist-extinfo-right">',
						'<h3>' + TYPO3.l10n.localize('show_links') + '</h3>',
						'<p><label>' + TYPO3.l10n.localize('cmd_downloadext') + ':</label> {download}</p> ',
						'<tpl if="doc">',
							'<p><label>' + TYPO3.l10n.localize('cmd_readdoc') + ':</label> {doc}</p>',
						'</tpl>',
						'<tpl if="updateModule">',
							'<h3>' + TYPO3.l10n.localize('cmd_update') + '</h3>',
							'<p><a href="#" id="update-check-{extkey}" class="update-check-link">' + TYPO3.l10n.localize('ext_details_checkUpdateScript') + '</a></p>',
						'</tpl>',
					'</div>',
				'</div>',
			'</div>',
			{
				loadInFe: function(values) {
					return values.doNotLoadInFE ? TYPO3.l10n.localize('no') : TYPO3.l10n.localize('yes');
				}
			}
		);
	},

	remoteExtensionInfo: function() {
		return new Ext.XTemplate(
			'<div class="em-info">',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_title') + ':' +
						'</label><a href="http://typo3.org/extensions/repository/view/{extkey}/current/" target="_blank" title="'
		 				+ TYPO3.l10n.localize('cmd_viewOnline') + '">{title}</a></p>',
				'<p><label>' + TYPO3.l10n.localize('listRowHeader_ext_key') + '</label>{extkey}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_category') + ':</label>{[TYPO3.EM.App.getCategoryLabel(values.category)]}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_version') + ':</label>{version}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_downloads') + ':</label>{alldownloadcounter} / {downloadcounter}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_lastUpdate') + ':</label>{lastuploaddate:this.getDateFormat}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_state') + ':</label>{state}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_author') + ':</label>{[this.getAuthor(values)]}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_versions') + ':</label>{versions}</p>',
				'<p><label>' + TYPO3.l10n.localize('extInfoArray_description') + ':</label>{description:this.getDescription}</p>',
			'</div>',
		{
			getDescription: function(value) {
				return value ? value : '';
			},

			getAuthor: function(values) {
				if (values.author && values.author_email) {
					return '<a class="email" href="mailto:' + values.author_email + '">' + values.author + '</a>';
				}
				return values.authorname;
			},
			getDateFormat: function(value) {
				return value.format("d-m-Y");
			}
		}
		);
	},

	getExtensionRules: function() {
		return [
			'<div class="extvalidinfo">',
				'<b>' + TYPO3.l10n.localize('registerkeys_rules_heading') + '</b>',
				'<ul>',
					'<li>' + TYPO3.l10n.localize('registerkeys_rules_allowedcharacters') + '</li>',
					'<li>' + TYPO3.l10n.localize('registerkeys_rules_prefixes') + '</li>',
					'<li>' + TYPO3.l10n.localize('registerkeys_rules_startandend') + '</li>',
					'<li>' + TYPO3.l10n.localize('registerkeys_rules_length') + '</li>',
				'</ul>',
			'</div>'
		].join('');
	},
	repositoryInfo: function() {
		return new Ext.XTemplate(
			'<span class="typo3-message message-notice" ',
			'qtip="{updated:this.updatedFormat}<br>' + TYPO3.l10n.localize('extensions_repository_short') + ' {count}">',
			'{updated:this.updatedFormat}&nbsp;&nbsp;',
			TYPO3.l10n.localize('extensions_repository_short') + ' {count}',
			'</span>',
			{
				updatedFormat: function(value) {
					return TYPO3.l10n.localize('ext_list_last_updated').replace('%s', value).replace('(', '').replace(')', '');
				}
			}
		);
	},

	showExtInfo: function (data) {
		data.shyword = data.shy ? 'Yes' : 'No';
		return this.getInfoTemplate().applyTemplate(data);
	}
};


/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM', 'TYPO3.EM.GridColumns', 'TYPO3.EM.ExtDirect', 'TYPO3.EMSOAP.ExtDirect');

///////////////////////////////////////////////////////
// Grid
///////////////////////////////////////////////////////

TYPO3.EM.Filters = new Ext.ux.grid.GridFilters({
	encode: true,
	local: true,
	menuFilterText: TYPO3.l10n.localize('cmd_filter'),
	filters: [
		{
			type: 'string',
			dataIndex: 'title'
			}, {
			type: 'string',
			dataIndex: 'extkey'
			}, {
			type: 'string',
			dataIndex: 'author'
			}, {
			type: 'string',
			dataIndex: 'category'
			}, {
			type: 'list',
			dataIndex: 'state',
			options: [
				TYPO3.l10n.localize('state_alpha'),
				TYPO3.l10n.localize('state_beta'),
				TYPO3.l10n.localize('state_stable'),
				TYPO3.l10n.localize('state_experimental'),
				TYPO3.l10n.localize('state_test'),
				TYPO3.l10n.localize('state_obsolete'),
				TYPO3.l10n.localize('state_exclude_from_updates')
			],
			phpMode: true
			}, {
			type: 'boolean',
			dataIndex: 'installed'
		}, {
			type: 'list',
			dataIndex: 'type',
			options: [TYPO3.l10n.localize('type_system'), TYPO3.l10n.localize('type_global'), TYPO3.l10n.localize('type_local')],
			phpMode: true
		}
	],
	getRecordFilter: function(){
		var f = [];
		this.filters.each(function(filter){
			if(filter.active) f.push(filter);
		});
			// add custom filter
		f.push(this.grid.store);
		var len = f.length, me = this;
		return function(record){
			for(var i=0; i<len; i++)
				if(!f[i].validateRecord(record))
					return false;

			return true;
		};
	}
});

TYPO3.EM.RemoteFilters = new Ext.ux.grid.GridFilters({
	encode: true,
	local: false,
	filters: [{
		type: 'string',
		dataIndex: 'title'
		}, {
		type: 'string',
		dataIndex: 'extkey'
		}, {
		type: 'string',
		dataIndex: 'authorname'
		}, {
		type: 'list',
		dataIndex: 'statevalue',
		options: [
			[0, TYPO3.l10n.localize('state_alpha')],
			[1, TYPO3.l10n.localize('state_beta')],
			[2, TYPO3.l10n.localize('state_stable')],
			[3, TYPO3.l10n.localize('state_experimental')],
			[4, TYPO3.l10n.localize('state_test')],
			[5, TYPO3.l10n.localize('state_obsolete')],
			[6, TYPO3.l10n.localize('state_exclude_from_updates')],
			[999, TYPO3.l10n.localize('translation_n_a')]
		],
		phpMode: true
		}, {
		type: 'list',
		dataIndex: 'category',
		options: [
			[0, TYPO3.l10n.localize('category_BE')],
			[1, TYPO3.l10n.localize('category_BE_modules')],
			[2, TYPO3.l10n.localize('category_FE')],
			[3, TYPO3.l10n.localize('category_FE_plugins')],
			[4, TYPO3.l10n.localize('category_miscellanous')],
			[5, TYPO3.l10n.localize('category_services')],
			[6, TYPO3.l10n.localize('category_templates')],
			[8, TYPO3.l10n.localize('category_documentation')],
			[9, TYPO3.l10n.localize('category_examples')]
		],
		phpMode: true
		}, {
		type: 'boolean',
		dataIndex: 'installed'
	}]
});

TYPO3.EM.GridColumns.DummyColumn = {
	header: '',
	width: 20,
	sortable: false,
	hideable: false,
	fixed: true,
	groupable: false,
	menuDisabled: true
};

TYPO3.EM.GridColumns.InstallExtension = {
	header: '',
	width: 47,
	sortable: false,
	hideable: false,
	fixed: true,
	groupable: false,
	menuDisabled: true,
	xtype: 'actioncolumn',
	items: [
		{
			getClass: function(value, meta, record) {
				if (record.data.versionislower) {
					this.items[0].tooltip = String.format(TYPO3.l10n.localize('menu_update_extension'), record.data.version, record.data.maxversion);
					return 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-update';
				}
                meta.css += ' paddingNoActionIcon';
				return '';
			},
			handler: function(grid, rowIndex, colIndex) {
				var record = grid.store.getAt(rowIndex).data;
                if (!record.versionislower) {
					return;
				}
				var action = TYPO3.l10n.localize('menu_update_extensions');
				var link = TYPO3.settings.EM.scriptLink
						+ '&nodoc=1&view=info&CMD[silentMode]=1&CMD[standAlone]=1&ter_connect=1&CMD[importExt]='
						+ record.extkey  + '&CMD[extVersion]=' + record.maxversion + '&CMD[loc]=L';

				TYPO3.EM.ImportWindow = new TYPO3.EM.InstallWindow({
					title: action + ': ' + record.title + ' (' + record.extkey + ') version ' + record.maxversion,
					record: record,
					installAction: 'import',
					listeners: {
						close: function() {
                            grid.store.reload({
                                params: {
                                    repository: TYPO3.settings.EM.selectedRepository
                                }
                            });
						}
					}
				}).show(true, function(){
					Ext.getCmp('emInstallIframeWindow').setUrl(link);
				});
			}
		},
		{
			getClass: function(value, meta, record) {
				meta.css += ' paddingActionIcon';
				if (record.get('installed') == 0) {
					this.items[0].tooltip = TYPO3.l10n.localize('menu_install_extensions');
					return 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-install';
				} else {
					if (record.get('required')) {
						this.items[0].tooltip = TYPO3.l10n.localize('ext_details_always_loaded');
						return 't3-icon t3-icon-extensions t3-icon-extensions-em t3-icon-em-extension-required';
					} else {
						this.items[0].tooltip = TYPO3.l10n.localize('ext_details_remove_ext');
						return 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-uninstall';
					}
				}
			},
			handler: function(grid, rowIndex, colIndex) {
				var record = grid.store.getAt(rowIndex).data;
				if (!record.required) {
					var action = record.installed ? TYPO3.l10n.localize('ext_details_remove_ext') : TYPO3.l10n.localize('menu_install_extensions');
					var link = TYPO3.settings.EM.scriptLink
							+ '&nodoc=1&view=info&CMD[silentMode]=1&CMD[standAlone]=1&CMD[showExt]=' + record.extkey
							+ '&CMD[' + (record.installed ? 'remove' : 'load') + ']=1&CMD[clrCmd]=1&SET[singleDetails]=info';

					TYPO3.EM.ImportWindow = new TYPO3.EM.InstallWindow({
						title: action + ': ' + record.title + ' (' + record.extkey + ') version ' + record.version,
						record: record,
						installAction: 'install',
						url: link,
						listeners: {
							close: function() {
								grid.store.reload({
									params: {
										repository: TYPO3.settings.EM.selectedRepository
									}
								});
								TYPO3.EM.Tools.refreshMenu(record, 'install');
							}
						}
					}).show(true, function(){
						Ext.getCmp('emInstallIframeWindow').setUrl(link);
					});
				}
			}
		}
	]
};

TYPO3.EM.GridColumns.ImportExtension = {
	header: '',
	width: 29,
	sortable: false,
	fixed: true,
	groupable: false,
	menuDisabled: true,
	xtype: 'actioncolumn',
	items: [
		{
			getClass: function(value, meta, record) {
				if (record.data.exists) {
					if (record.data.versionislower) {
						this.items[0].tooltip = String.format(TYPO3.l10n.localize('menu_update_extension'), record.data.existingVersion, record.data.version);
						return 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-update';
					} else {
						return '';
					}
				} else {
					this.items[0].tooltip = TYPO3.l10n.localize('menu_import_extensions');
					return 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-import';
				}
			},
			handler: function(grid, rowIndex, colIndex) {
				var record = grid.store.getAt(rowIndex).data;
				var action = TYPO3.l10n.localize('menu_import_extensions');
				if (record.exists && record.versionislower) {
					action = TYPO3.l10n.localize('menu_update_extensions');
				}
				var link = TYPO3.settings.EM.scriptLink
						+ '&nodoc=1&view=info&CMD[silentMode]=1&CMD[standAlone]=1&ter_connect=1&CMD[importExt]='
						+ record.extkey  + '&CMD[extVersion]=' + record.version + '&CMD[loc]=L'


				TYPO3.EM.ImportWindow = new TYPO3.EM.InstallWindow({
				 	title: action + ': ' + record.title + ' (' + record.extkey + ') version ' + record.version,
					record: record,
					installAction: 'import',
					listeners: {
						close: function() {
							TYPO3.EM.Tools.refreshMenu(record, 'import');
						}
					}
				}).show(true, function(){
					Ext.getCmp('emInstallIframeWindow').setUrl(link);
				});
			}
		}
	]
};


TYPO3.EM.GridColumns.ExtensionTitle = {
	header: TYPO3.l10n.localize('tab_mod_name'),
	width: 150,
	sortable: true,
	dataIndex: 'title',
	filterable: true,
	hideable: true,
	renderer:function(value, metaData, record, rowIndex, colIndex, store) {
		metaData.css += 'action-title-cell';
		var description = record.data.description;
		if (value == '') {
			value = '[no title]';
		}
		if (record.data.reviewstate < 0) {
			metaData.css += ' insecureExtension';
			description += '<br><br><strong>' + TYPO3.l10n.localize('insecureExtension') + '</strong>';
		}
		if (description) {
			metaData.attr = 'ext:qtip="' + Ext.util.Format.htmlEncode(description) + '"';
		}
		value = store.highlightSearch(value);
		return record.data.icon + ' ' + value + ' (v' + record.data.version + ')';
	}
};

TYPO3.EM.GridColumns.ExtensionKey = {
	header: TYPO3.l10n.localize('tab_mod_key'),
	width: 80,
	sortable: true,
	filterable: true,
	hideable: true,
	dataIndex: 'extkey',
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		return store.highlightSearch(value);
	}
};

TYPO3.EM.GridColumns.ExtensionCategory = {
	header: TYPO3.l10n.localize('list_order_category'),
	width: 70,
	sortable: true,
	dataIndex: 'category',
	filterable: true,
	hideable: true,
	hidden: true
};

TYPO3.EM.GridColumns.ExtensionCategoryRemote = {
	header: TYPO3.l10n.localize('list_order_category'),
	width: 70,
	sortable: true,
	hideable: true,
	dataIndex: 'category',
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		return TYPO3.EM.App.getCategoryLabel(value);
	}
};

TYPO3.EM.GridColumns.ExtensionAuthor = {
	header: TYPO3.l10n.localize('list_order_author'),
	width: 120,
	sortable: true,
	hidden: true,
	hideable: true,
	dataIndex:'author',
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		metaData.attr = 'ext:qtip="' + Ext.util.Format.htmlEncode(value) + '"';
		var t = Ext.util.Format.ellipsis(value, 20);
		if (record.data.author_email) {
			return '<a class="email" href="mailto:' + record.data.author_email + '">' + t + '</a>';
		} else {
			return t;
		}
	},
	groupRenderer: function(value) {
		return value;
	}
};

TYPO3.EM.GridColumns.ExtensionRemoteAuthor = {
	header: TYPO3.l10n.localize('list_order_author'),
	width: 120,
	sortable: true,
	hidden: true,
	hideable: true,
	dataIndex:'authorname',
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		metaData.attr = 'ext:qtip="' + Ext.util.Format.htmlEncode(value) + '"';
		var t = Ext.util.Format.ellipsis(value, 20);
		if (record.data.authoremail) {
			return '<a class="email" href="mailto:' + record.data.authoremail + '">' + t + '</a>';
		} else {
			return t;
		}
	}
};

TYPO3.EM.GridColumns.ExtensionType = {
	header: TYPO3.l10n.localize('list_order_type'),
	width:50,
	sortable:true,
	dataIndex:'type',
	hideable: true,
	filterable: true,
	hidden: true,
	renderer: function(value, metaData, record, rowIndex, colIndex, store) {
		if (record.data.doubleInstallShort && record.data.doubleInstallShort.length > 1) {
			var temp = record.data.doubleInstall.split('/');
			value = '<strong>' + record.data.doubleInstall + '</strong>';
			metaData.attr = 'ext:qtip="' + String.format(TYPO3.l10n.localize('double_inclusion_js'), temp[1], temp[0]) + '"';
		}
		return value;
	}
};

TYPO3.EM.GridColumns.ExtensionState = {
	header: TYPO3.l10n.localize('list_order_state'),
	align: 'center',
	width: 100,
	sortable: true,
	resizable: false,
	fixed: true,
	hideable: true,
	filterable: true,
	dataIndex:'state',
	renderer: function(value, metaData, record, rowIndex, colIndex, store){
		metaData.css += record.data.stateCls + ' ';
		return value;
	}
};

TYPO3.EM.GridColumns.ExtensionStateValue = {
	header: TYPO3.l10n.localize('list_order_state'),
	align: 'center',
	width: 100,
	sortable: true,
	resizable: false,
	fixed: true,
	hideable: true,
	dataIndex:'statevalue',
	renderer: function(value, metaData, record, rowIndex, colIndex, store){
		metaData.css += record.data.stateCls + ' ';
		var label = TYPO3.l10n.localize('translation_n_a');
		switch (parseInt(value, 10)) {
			case 0:
				label = TYPO3.l10n.localize('state_alpha');
			break;
			case 1:
				label = TYPO3.l10n.localize('state_beta');
			break;
			case 2:
				label = TYPO3.l10n.localize('state_stable');
			break;
			case 3:
				label = TYPO3.l10n.localize('state_experimental');
			break;
			case 4:
				label = TYPO3.l10n.localize('state_test');
			break;
			case 5:
				label = TYPO3.l10n.localize('state_obsolete');
			break;
			case 6:
				label = TYPO3.l10n.localize('state_exclude_from_updates');
			break;
		}
		return label;
	},
	filterable: true
};

TYPO3.EM.GridColumns.ExtensionDownloads = {
	header: TYPO3.l10n.localize('list_order_downloads'),
	width: 40,
	sortable: true,
	hideable: true,
	dataIndex:'alldownloadcounter',
	renderer: function(value, metaData, record, rowIndex, colIndex, store){
		return record.data.alldownloadcounter + ' / ' + record.data.downloadcounter;
	},
	filterable: true
};

TYPO3.EM.GridColumns.ExtensionVersion = {
	header: TYPO3.l10n.localize('extInfoArray_version'),
	width:40,
	sortable: true,
	hideable: true,
	hidden: true,
	dataIndex:'version'
};

TYPO3.EM.GridColumns.Relevance = {
	header: TYPO3.l10n.localize('extInfoArray_relevance'),
	width:40,
	sortable: true,
	hideable: true,
	dataIndex:'relevance'
};


///////////////////////////////////////////////////////
// Stores
///////////////////////////////////////////////////////

TYPO3.EM.LocationStore = new Ext.data.JsonStore({
	fields : ['name', 'value'],
	data   : [
		{name : 'Local (../typo3conf/ext/)',   value: 'L'}
	]
});


///////////////////////////////////////////////////////
// Panels + Tabs
///////////////////////////////////////////////////////

TYPO3.EM.LocalListTab = {
	title : TYPO3.l10n.localize('localExtensions'),
	xtype: 'TYPO3.EM.LocalList',
	id: 'em-local-extensions',
	listeners: {
		activate: function(panel) {
			if (TYPO3.EM.App.refreshLocalList) {
				Ext.StoreMgr.get('localstore').load({
					params: {
						repository: TYPO3.settings.EM.selectedRepository
					}
				});
			}
		},
		scope: this
	}
};

TYPO3.EM.RepositoryListTab = {
	title : TYPO3.l10n.localize('importExtensions'),
	layout: 'fit',
	items: [/*{
		xtype: 'repository',
		region: 'north'
	},*/{
		xtype: 'remoteextlist',
		flex: 1,
		region: 'center',
		margins: '0 0 0 0'
	}],
	id: 'em-remote-extensions'
};

TYPO3.EM.LanguageTab = {
	title: TYPO3.l10n.localize('menu_language_packges'),
	xtype: 'extlanguages',
	id: 'em-translations',
	listeners: {
		activate: function(panel) {
			var store = Ext.StoreMgr.get('em-language-store');
			if (!store.getCount()) {
				store.load();
			}
		},
		afterrender: function(panel) {

		},
		scope: this
	}
};

TYPO3.EM.SettingsTab = {
	title: TYPO3.l10n.localize('menu_settings'),
	xtype: 'extsettings'
};

TYPO3.EM.UserTab = {
	title: TYPO3.l10n.localize('myExtensions'),
	xtype: 'TYPO3.EM.UserTools',
	disabled: !TYPO3.settings.EM.hasCredentials,
	listeners: {
		activate: function(panel) {
			var store = Ext.StoreMgr.get('em-userext');
			if (!TYPO3.settings.EM.hasCredentials) {
				TYPO3.Flashmessage.display(TYPO3.Severity.error,'Settings', 'No user+password specified. Please enter your credentials in "Settings" tab! ', 15);
				store.removeAll();
				Ext.getCmp('extvalidformbutton').disable();
			} else {
				store.load();
			}
		},
		scope: this
	}
};


TYPO3.EM.UploadLocationCombo = new Ext.form.ComboBox({
	mode: 'local',
	value: 'L',
	triggerAction: 'all',
	forceSelection: true,
	editable: false,
	name: 'loc',
	hiddenName:     'loc',
	displayField:   'name',
	valueField:     'value',
	store: TYPO3.EM.LocationStore,
	width: 250,
	fieldLabel: '...to location'
});

TYPO3.EM.RepositoryCombo = new Ext.form.ComboBox({
	id: 'repCombo',
	mode: 'local',
	triggerAction: 'all',
	forceSelection: true,
	editable: false,
	name: 'selectedRepository',
	hiddenName: 'selectedRepository',
	displayField: 'title',
	valueField: 'uid',
	store: null,
	width: 250
});

TYPO3.EM.LanguagesActionPanel = {
	xtype: 'container',
	layout: 'hbox',
	height: 30,
	id: 'LanguagesActionPanel',
	layoutConfig: {
		align: 'middle'
	},
	defaults: {
		border:false,
		flex: 1
	},
	items: [{
		xtype: 'button',
		text: TYPO3.l10n.localize('translation_check_status_button'),
		id: 'lang-checkbutton',
		margins: '0 10 10 0'
	}, {
		xtype: 'button',
		text: TYPO3.l10n.localize('translation_update_button'),
		id: 'lang-updatebutton',
		margins: '0 0 10 10'
	}]
};

TYPO3.EM.LanguagesProgressBar = new Ext.ProgressBar ({
	id:  'langpb',
	cls: 'left-align',
	style: 'margin: 0 0 20px 0',
	animate: true
});

TYPO3.EM.LanguagesProgressPanel = {
	xtype: 'container',
	layout: 'hbox',
	height: 40,
	id: 'LanguagesProgressPanel',
	hidden: true,
	layoutConfig: {
		align: 'middle'
	},
	defaults: {
		border: false,
		flex: 1,
		height: 20
	},
	items: [
		TYPO3.EM.LanguagesProgressBar,
		{
			xtype: 'button',
			text: 'cancel', //TYPO3.l10n.localize('cancel'),
			id: 'lang-cancelbutton',
			margins: '0 0 10 10',
			width: 80
		}
	]
};

TYPO3.EM.InstallWindow = Ext.extend(Ext.Window, {
	width: 500,
	height: 400,
	closable: true,
	resizable: true,
	plain: true,
	border: false,
	modal: true,
	draggable: true,
	layout: 'anchor',
	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config, {
			items: [{
				xtype: 'iframePanel',
				anchor: '100% 100%',
				border: false,
				id: 'emInstallIframeWindow'
			}]
		});
		TYPO3.EM.InstallWindow.superclass.constructor.call(this, config);
	}
});

TYPO3.EM.ImportWindow = Ext.extend(Ext.Window, {
	width: 500,
	height: 400,
	closable: true,
	resizable: true,
	plain: true,
	border: false,
	modal: true,
	draggable: true,
	layout: 'anchor',
	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config, {
			items: [{
				xtype: 'iframePanel',
				anchor: '100% 100%',
				border: false,
				id: 'emImportIframeWindow'
			}]
		});
		TYPO3.EM.InstallWindow.superclass.constructor.call(this, config);
	}
});

TYPO3.EM.TerUpload = Ext.extend(Ext.form.FormPanel, {
	border:false,
	recordData: null,

	initComponent:function() {



		Ext.apply(this, {
			itemId: 'extUploadForm',
			height: 340,
			defaultType: 'textfield',

			defaults: {width: 350},
			items: [{
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_username'),
				name: 'fe_u'
			}, {
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_password'),
				inputType: 'password',
				name: 'fe_p'
			}, {
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_changelog'),
				xtype: 'textarea',
				height: 150,
				name: 'uploadcomment'
			}, {
				xtype: 'radiogroup',
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_new_version'),
				itemCls: 'x-check-group-alt',
				columns: 1,
				items: [
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_bugfix').replace('%s', 'x.x.<strong><span class="typo3-red">x+1</span></strong>'),
						name: 'newversion',
						inputValue: 'new_dev',
						checked: true
					},
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_sub_version').replace('%s', 'x.<strong><span class="typo3-red">x+1</span></strong>.0'),
						name: 'newversion',
						inputValue: 'new_sub'
					},
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_main_version').replace('%s', '<strong><span class="typo3-red">x+1</span></strong>.0.0'),
						name: 'newversion',
						inputValue: 'new_main'
					}
				]
			}, {
				xtype: 'button',
				text: TYPO3.l10n.localize('repositoryUploadForm_upload'),
				scope: this,
				handler: function() {
					this.form.submit({
						waitMsg : TYPO3.l10n.localize('action_sending_data'),
						success: function(form, action) {
							TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('cmd_terupload'), TYPO3.l10n.localize('msg_terupload'), 5);
							form.reset();
						},
						failure: function(form, action) {
							if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
								TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
										TYPO3.l10n.localize('list_order_state') + ':' + action.response.status + ': ' +
										action.response.statusText, 15);
							}
							if (action.failureType === Ext.form.Action.SERVER_INVALID){
								// server responded with success = false
								TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), action.result.errormsg, 5);
							}
						}
					});
				}
			}],
			listeners: {

				activate: function(panel) {


				}
			},
			scope: this
		});

		TYPO3.EM.TerUpload.superclass.initComponent.apply(this, arguments);
	},

	onRender: function() {


		TYPO3.EM.TerUpload.superclass.onRender.apply(this, arguments);

		Ext.apply(this.getForm(),{
			api: {
				load: TYPO3.EM.ExtDirect.loadUploadExtToTer,
				submit: TYPO3.EM.ExtDirect.uploadExtToTer
			},
			paramsAsHash: false

		});
		this.form.load();
	}


});

Ext.reg('terupload', TYPO3.EM.TerUpload);

TYPO3.EM.ExtensionUploadWindowInstance = null;
TYPO3.EM.ExtensionUploadWindow = Ext.extend(Ext.Window, {
	title: 'Upload extension file directly (.t3x)',
	modal: true,
	closable: true,
	closeAction: 'hide',
	plain: true,
	width: 400,
	height: 160,
	layout: 'fit',

	constructor: function(config) {
		config = config || {};
		Ext.apply(this, config, {
			items: [
				{
					xtype: 'form',
					itemId: 'uploadForm',
					fileUpload: true,
					api: {
						submit: TYPO3.EM.ExtDirect.uploadExtension
					},
					items: [
						{
							xtype: 'fileuploadfield',
							id: 'form-file',
							emptyText: TYPO3.l10n.localize('upload_selectExtension'),
							fieldLabel: 'Extension',
							name: 'extupload-path',
							buttonText: '...',
							width: 250,
							validator: function(value) {
								if (value) {
									return value.split('.').pop().toLowerCase() === 't3x';
								}
								return false;
							}
						},
						TYPO3.EM.UploadLocationCombo,
						{
							xtype: 'checkbox',
							fieldLabel: TYPO3.l10n.localize('overwrite_ext'),
							name: 'uploadOverwrite',
							labelWidth: 250
						},
						{
							xtype: 'button',
							text: TYPO3.l10n.localize('upload_ext_from'),
							id: 'uploadSubmitButton',
							width: 420,
							scope: this,
							handler: function() {
								var form = this.getComponent('uploadForm').getForm();
								if (form.isValid()) {
									form.submit({
										waitMsg : TYPO3.l10n.localize('action_sending_data'),
										success: function(form, action) {
											form.reset();
											TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('upload_ext'), String.format(TYPO3.l10n.localize('msg_uploaded'), action.result.extKey), 5);
											TYPO3.EM.ExtensionUploadWindowInstance.hide();
											TYPO3.EM.Tools.displayLocalExtension(action.result.extKey, true);
										},
										failure: function(form, action) {
											if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
												TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
														TYPO3.l10n.localize('msg_status') + ': ' + action.response.status + ': ' +
																action.response.statusText, 15);
											}
											if (action.failureType === Ext.form.Action.SERVER_INVALID) {
												// server responded with success = false
												TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), action.result.error, 5);
											}
										}
									});
								}
							}
						}
					]
				}
			]
		});
		TYPO3.EM.ExtensionUploadWindow.superclass.constructor.call(this, config);
	}
});

/**
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */

Ext.ns('TYPO3.EM');

TYPO3.EM.ExtFilelist = Ext.extend(Ext.Panel, {
	recordData: null,
	isWindow: false,
	loaderUrl: null,
	rootIcon: 'sysext/t3skin/icons/module_tools_em.png',
	rootText: TYPO3.l10n.localize('ext_details_ext_files'),
	baseParams: null,
	treeId: null,
	fileContent: '',
	parser: 'PHPHTMLMixedParser',

	allowedOperations: {
		moveFile: TYPO3.settings.EM.fileAllowMove,
		deleteFile: TYPO3.settings.EM.fileAllowDelete,
		renameFile: TYPO3.settings.EM.fileAllowRename,
		uploadFile: TYPO3.settings.EM.fileAllowUpload,
		createFile: TYPO3.settings.EM.fileAllowCreate,
		downloadFile: TYPO3.settings.EM.fileAllowDownload
	},

	initComponent:function() {

		this.highlightEditor = new TYPO3.EM.CodeMirror({
			itemId: 'this.highlightEditor',
			fileContent: this.fileContent,
			parser: this.parser,
			stylesheet: TYPO3.settings.EM.editorCss
		});




		this.fileTree = new Ext.tree.TreePanel ({
			itemId: 'extfiletree',
			cls: 'extfiletree',
			margins: '0 0 0 0',
			cmargins: '0 0 0 0',
			id: this.treeId ? this.treeId : Ext.id(),
			stateful: this.treeId ? true : false,
			stateEvents: [],
			plugins: new Ext.ux.state.TreePanel(),

			enableDD: this.allowedOperations.moveFile,
			ddAppendOnly: true,
			copyAction: false,

			root: {
				text: this.rootText,
				itemId: 'fileroot',
				expanded: true,
				icon: this.rootIcon
			},
			loader: {
				directFn: this.loaderUrl || TYPO3.EM.ExtDirect.getExtFileTree,
				baseParams: this.baseParams ? this.baseParams : {
					extkey: this.recordData.extkey,
					typeShort: this.recordData.typeShort,
					baseNode: this.recordData.nodePath
				},
				paramsAsHash: true
			},
			listeners: {
				click: function(node) {
					this.clickNode(node);
				},

			/* Drag and Drop of file nodes */
			nodedragover: function (dragevent) {
				// allow only drop on dirs and exclude parent
				return (!dragevent.target.leaf && (dragevent.target.id !== dragevent.dropNode.parentNode.id));
			},
			beforenodedrop : function(dropEvent) {
				var action = dropEvent.rawEvent.ctrlKey ? 'copy' : 'move';
				dropEvent.tree.dragZone.proxy.animRepair = false;
				dropEvent.cancel = true;
				var question = this.copyAction ? TYPO3.l10n.localize('fileEditCopyConfirmation') : TYPO3.l10n.localize('fileEditMoveConfirmation');

				Ext.Msg.confirm(TYPO3.l10n.localize('fileEditOperation'), String.format(question, dropEvent.dropNode.text, dropEvent.target.text), function(button) {
					if (button == 'yes') {
						TYPO3.EM.ExtDirect.moveFile(dropEvent.dropNode.id, dropEvent.target.id, !dropEvent.dropNode.leaf, function(response) {
							if (response.success) {
								dropEvent.tree.dragZone.proxy.animRepair = true;
								if (!dropEvent.target.leaf) {
									dropEvent.target.expand();
								}
								switch (dropEvent.point) {
									case "append":
									case "ap-pend":
										dropEvent.target.appendChild(dropEvent.dropNode);
										break;
									case "above":
										dropEvent.target.parentNode.insertBefore(dropEvent.dropNode, dropEvent.target);
										break;
									case "below":
										dropEvent.target.parentNode.insertBefore(dropEvent.dropNode, dropEvent.target.nextSibling);
										break;
								}
								dropEvent.dropNode.ui.focus();
								dropEvent.dropNode.ui.highlight();

							} else {

							}
						});
					}
				});
			},

				scope: this
			}

		});

		Ext.apply(this, {

			layout: 'border',
			items: [{
				region: 'west',
				layout: 'fit',
				split: true,
				width: 260,
				collapsible: true,
				collapseMode: 'mini',
				cls: 'filetree-panel',
				hideCollapseTool: true,
				items: [this.fileTree],
				tbar: [{
					iconCls: 'x-tbar-loading',
					tooltip: TYPO3.l10n.localize('fileEditReloadFiletree'),
					handler: function() {
						this.fileTree.getRootNode().reload();
					},
					scope: this
				}, {
					iconCls: 'x-btn-upload',
					tooltip: TYPO3.l10n.localize('cmd_upload'),
					ref: '../uploadFileButton',
					hidden: !this.allowedOperations.uploadFile
				}, '-', {
					iconCls: 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-download',
					tooltip: TYPO3.l10n.localize('cmd_download'),
					ref: '../downloadFileButton',
					disabled: true,
					hidden: !this.allowedOperations.downloadFile,
					handler: function() {
						var node = this.fileTree.getSelectionModel().getSelectedNode();
						if (node.isLeaf()) {
							this.downloadFile(node.attributes.id);
						}
					},
					scope: this
				}, {
					iconCls: 't3-icon t3-icon-actions t3-icon-actions-document t3-icon-document-new',
					tooltip: TYPO3.l10n.localize('fileEditCreateFileFolder'),
					ref: '../createFileButton',
					disabled: true,
					hidden: !this.allowedOperations.createFile,
					scope: this,
					handler: function() {
						var folderNode = this.fileTree.getSelectionModel().getSelectedNode();
						this.fileCreationDialog(folderNode, function() {
							//this.createNewFile(folderNode, text);
						});
					}
				}, {
					iconCls: 't3-icon t3-icon-actions t3-icon-actions-edit t3-icon-edit-rename',
					tooltip: TYPO3.l10n.localize('fileEditRename'),
					ref: '../renameButton',
					scope: this,
					hidden: !this.allowedOperations.renameFile,
					handler: function() {
						var node = this.fileTree.getSelectionModel().getSelectedNode();
						var isFolder = !node.isLeaf();
						Ext.Msg.prompt(TYPO3.l10n.localize('fileEditRename'), '', function(btn, text) {
							if (btn == 'ok' && text != node.text) {
								TYPO3.EM.ExtDirect.renameFile(node.attributes.id, text, isFolder, function(response) {
									if (response.success) {
										node.setId(response.newFile);
										node.setText(response.newFilename);
										node.ui.focus();
										node.ui.highlight();
									}
								}, this);
							}
						}, this, false, node.text);
					}
				}, {
					iconCls: 't3-icon t3-icon-actions t3-icon-actions-edit t3-icon-edit-delete',
					tooltip: TYPO3.l10n.localize('ext_details_delete'),
					ref: '../deleteButton',
					hidden: !this.allowedOperations.deleteFile,
					scope: this,
					handler: function() {
						var node = this.fileTree.getSelectionModel().getSelectedNode();
						var isFolder = !node.isLeaf();
						Ext.Msg.confirm(TYPO3.l10n.localize('ext_details_delete'), '', function(btn, text) {
							if (btn == 'yes') {
								TYPO3.EM.ExtDirect.deleteFile(node.attributes.id, isFolder, function(response) {
									if (response.success) {
										node.remove();
									}
								}, this);
							}
						}, this, false, node.text);
					}
				}]
			}, {

				region: 'center',

				layout: 'fit',
				margins: '0 0 0 0',
				cmargins: '0 0 0 0',
				border: false,
				cls: 'file-editor',
				items: [this.highlightEditor],
				tbar: [{
					iconCls: 'x-btn-filebrowser',
					tooltip: TYPO3.l10n.localize('cmd_openInNewWindow'),
					ref: '../openWindowButton',
					scope: this,
					hidden: this.isWindow || this.noWindowOpen,
					handler: function() {

						var newEditor = new Ext.Window({
							title: this.recordData.title + ' (' + this.recordData.extkey + ')',
							width: 600,
							height: 400,
							layout: 'fit',
							maximizable: true,
							collapsible: true,
							items: [{
								xtype: 'extfilelist',
								minHeight: 400,
								recordData: this.recordData,
								isWindow: true
							}]
						}).show();
					}
				 }, {
					 xtype: 'tbseparator',
					 hidden: this.isWindow
				 }, {
					iconCls: 'x-tbar-loading',
					tooltip: TYPO3.l10n.localize('cmd_reloadFile'),
					ref: '../reloadButton',
					scope: this,
					hidden: true,
					handler: function() {
						if (this.highlightEditor.editFile) {
							this.layout.center.panel.reloadButton.disable();
							TYPO3.EM.ExtDirect.readExtFile(this.highlightEditor.editFile , function(response) {
								this.highlightEditor.setValue(response);
								this.layout.center.panel.reloadButton.enable();
							}, this);
						}
					}
				}, {
					iconCls: 'x-btn-save',
					tooltip: TYPO3.settings.EM.fileAllowSave ? TYPO3.l10n.localize('cmd_save') : TYPO3.l10n.localize('ext_details_saving_disabled'),
					ref: '../saveButton',
					disabled: true,
					scope: this,
					handler: function() {
						this.saveFile(this.highlightEditor.editFile);
					}

				}, '-', {
					iconCls: 't3-icon t3-icon-status t3-icon-status-version t3-icon-version-no-version',
						tooltip: 'Show diff',
						ref: '../diffButton',
						disabled: true,
						scope: this,
						handler: this.showDiff
				},
				{
					iconCls: 'x-btn-undo',
					tooltip: TYPO3.l10n.localize('cmd_undo'),
					ref: '../undoButton',
					disabled: true,
					scope: this,
					handler: function() {
						this.highlightEditor.codeMirrorEditor.undo();
					}
				},
				{
					iconCls: 'x-btn-redo',
					tooltip: TYPO3.l10n.localize('cmd_redo'),
					ref: '../redoButton',
					disabled: true,
					scope: this,
					handler: function() {
						this.highlightEditor.codeMirrorEditor.redo();
					}
				},
				{
					iconCls: 'x-btn-indent',
					tooltip: TYPO3.l10n.localize('cmd_indent'),
					ref: '../indentButton',
					disabled: true,
					scope: this,
					handler: function() {
						this.highlightEditor.codeMirrorEditor.reindent();
					}
				},
				{
					iconCls: 'x-btn-jslint',
					tooltip: TYPO3.l10n.localize('cmd_jslint'),
					ref: '../jslintButton',
					disabled: true,
					scope: this,
					handler: function() {
						try {
							var bValidates = JSLINT(this.findByType('textarea')[0].getValue());
							var oStore = this.highlightEditor.debugWindow.findByType('grid')[0].getStore();
							if (!bValidates) {
								var aErrorData = [];
								for (var err in JSLINT.errors) {
									if (JSLINT.errors.hasOwnProperty(err) && (JSLINT.errors[err] !== null)) {
										aErrorData.push([JSLINT.errors[err].line, JSLINT.errors[err].character, JSLINT.errors[err].reason]);
									}
								}
								oStore.loadData(aErrorData, false);
							} else {
								oStore.loadData([
									[1, 1, TYPO3.l10n.localize('msg_congratsNoErrors')]
								], false);
							}
							this.highlightEditor.debugWindow.show();
						} catch(e) {
						}
					}
				},
				'->',
				{
					xtype: 'tbtext',
					ref: '../fileLabel',
					itemId: 'editarea-filename',
					text: TYPO3.l10n.localize('help_loadFileInEditor')
				}]
			}]
		});

		TYPO3.EM.ExtFilelist.superclass.initComponent.apply(this, arguments);

	},

	onRender: function() {
		TYPO3.EM.ExtFilelist.superclass.onRender.apply(this, arguments);
	},


	clickNode: function(node, doSelect) {
		if (doSelect) {
			this.fileTree.getSelectionModel().select(node);
		}
		if (node.attributes.fileType === 'text') {
			var file = node.attributes.id;
			if (this.highlightEditor.contentChanged) {
				 Ext.MessageBox.confirm(TYPO3.l10n.localize('fileEditFileChanged'), TYPO3.l10n.localize('fileEditFileChangedSavePrompt'), function(btn){
					if (btn == 'yes'){
						this.saveFile(this.highlightEditor.editFile, function() {
							this.loadFile(node);
						});

					}
				}, this);
			} else {
				this.loadFile(node);
			}

		}
		if (node.attributes.fileType === 'image') {
			var w = new Ext.Window({
				width: 200,
				height: 200,
				title: node.attributes.text,
				layout: 'fit',
				items: [{
					xtype: 'image',
					src: TYPO3.settings.EM.siteUrl + node.attributes.id,
					autoSize: true,
					resizable: false,
					renderTo: document.body
				}]
			}).show();
		}
		if (node.isLeaf()) {
			this.layout.west.panel.downloadFileButton.enable();
			this.layout.west.panel.createFileButton.disable();
		} else {
			this.layout.west.panel.downloadFileButton.disable();
			this.layout.west.panel.createFileButton.enable();
		}
	},

	loadFile: function(node) {
		this.layout.center.panel.reloadButton.show().disable();
		TYPO3.EM.ExtDirect.readExtFile(node.attributes.id , function(response) {
			// load in textarea
			var centerPanel = this.layout.center.panel;
			this.highlightEditor.openText(response, node.attributes.ext);
			this.highlightEditor.editFile = node.attributes.id;
			this.highlightEditor.contentChanged = false;
			centerPanel.reloadButton.enable();
			centerPanel.fileLabel.setText('File: ' + this.highlightEditor.editFile);
			centerPanel.fileLabel.removeClass('fileChanged');
			centerPanel.saveButton.disable();
			centerPanel.undoButton.enable();
			centerPanel.redoButton.enable();
			centerPanel.indentButton.enable();
			centerPanel.diffButton.disable();
			if (node.attributes.ext == 'js') {
				centerPanel.jslintButton.enable();
			} else {
				centerPanel.jslintButton.disable();
			}

		}, this);
	},

	saveFile: function(file, cb) {
		var panel = this.layout.center.panel;
		var content = this.highlightEditor.getValue();

		panel.reloadButton.disable();
		TYPO3.EM.ExtDirect.saveExtFile(
			file,
			content,
			function(response) {
				if (response.success) {
					TYPO3.Flashmessage.display(TYPO3.Severity.ok, TYPO3.l10n.localize('cmd_save'), String.format(TYPO3.l10n.localize('msg_fileSaved'), response.file), 5);
					this.highlightEditor.contentChanged = false;
					this.layout.center.panel.fileLabel.removeClass('fileChanged');
				} else {
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('cmd_save'), response.error, 5);
				}
				if (Ext.isFunction(cb)) {
					cb.call(this);
				}
		}, this);

		panel.saveButton.disable();
		panel.reloadButton.enable();

	},

	moveFile: function(file, destination) {

	},

	showDiff: function() {
		var original =  this.highlightEditor.oldSourceCode;
		var content = this.highlightEditor.codeMirrorEditor.getCode();
		TYPO3.EM.ExtDirect.makeDiff(original, content, function(response) {
			TYPO3.Windows.showWindow({
				title: 'Diff view',
				resizable: true,
				html: '<div style="background:#fff;padding: 5px;overflow:auto;">' + response.diff + '</div>'
			});
		});
	},

	downloadFile: function(path) {

		// create hidden target iframe
		var id = Ext.id();
		var frame = document.createElement('iframe');
		frame.id = id;
		frame.name = id;
		frame.className = 'x-hidden';
		if (Ext.isIE) {
			frame.src = Ext.SSL_SECURE_URL;
		}

		document.body.appendChild(frame);

		if (Ext.isIE) {
			document.frames[id].name = id;
		}

		var form = Ext.DomHelper.append(document.body, {
					tag: 'form',
					method: 'post',
					action: 'mod.php?M=tools_em',
					target: id
				});

		document.body.appendChild(form);

		var hidden;

		// append path to form
		hidden = document.createElement('input');
		hidden.type = 'hidden';
		hidden.name = 'CMD[downloadExtFile]';
		hidden.value = path;
		form.appendChild(hidden);

		var callback = function() {
			Ext.EventManager.removeListener(frame, 'load', callback, this);
			setTimeout(function() {
				document.body.removeChild(form);
			}, 100);
			setTimeout(function() {
				document.body.removeChild(frame);
			}, 110);
		};

		Ext.EventManager.on(frame, 'load', callback, this);

		form.submit();
	},

	fileCreationDialog: function(folderNode) {
		new Ext.Window({
			id: 'em-files-createfilefolderdialog',
			title: TYPO3.l10n.localize('fileEditCreateFileFolder'),
			layout: 'form',
			callerClass: this,
			items: [
				{
					fieldLabel:  TYPO3.l10n.localize('fileEditNewFilePrompt'),
					itemId: 'newfile',
					xtype: 'textfield',
					width: 250
				},
				{
					fieldLabel: TYPO3.l10n.localize('fileEditCreateFolder'),
					xtype: 'checkbox',
					itemId: 'isFolder'
				}
			],
			buttons: [{
				text: TYPO3.l10n.localize('cmd_create'),
				handler: function() {
					var me = Ext.WindowMgr.get('em-files-createfilefolderdialog');
					var newfile = me.getComponent('newfile').getValue();
					var isFolder = me.getComponent('isFolder').getValue();
					TYPO3.EM.ExtDirect.createNewFile(folderNode.attributes.id, newfile, isFolder, function(response) {
						if (response.success) {
							var newNode = null, delay;
							if (!folderNode.isExpanded()) {
								folderNode.expand();
								delay = 750;
							} else {
								newNode = new Ext.tree.TreeNode(
									response.node
								);
								folderNode.appendChild(newNode);
								delay = 250;
							}
							(function() {
								if (!newNode) {
									newNode = folderNode.findChild('id', response.node.id);
								}
								newNode.ui.focus();
								newNode.ui.highlight();
								me.callerClass.clickNode(newNode, true);
							}).defer(delay);
						}
					}, this);
					me.close();
				},
				scope: this
			}, {
				text: TYPO3.l10n.localize('cmd_cancel'),
				handler: function() {
					var me = TYPO3.Windows.getById('em-files-createfilefolderdialog');
					me.close();
				}
			}]
		}).show();
	}



});

// register xtype
Ext.reg('extfilelist', TYPO3.EM.ExtFilelist);


TYPO3.EM.CodeMirror = Ext.extend(Ext.Panel, {
	layout: 'fit',
	sourceCode: '',
	stylesheet: null,
	fileLoaded: false,
	fileContent: '',

	initComponent: function() {
			// add custom stylesheet to all parser

		this.contentChanged = false;
		var me = this;
		this.debugWindow = new Ext.Window({
			title: TYPO3.l10n.localize('msg_debug'),
			width: 500,
			layout: 'border',
			closeAction: 'hide',
			height: 160,
			items: [new Ext.grid.GridPanel({
				layout: 'fit',
				region: 'center',
				border: false,
				viewConfig: {
					forceFit: true
				},
				listeners: {
					rowclick: function(grid) {
						var oData = grid.getSelectionModel().getSelected().data;
						me.codeMirrorEditor.jumpToLine(oData.line);
						var pos = me.codeMirrorEditor.cursorPosition(true);
						me.codeMirrorEditor.selectLines(pos.line, 0, pos.line, oData.character - 1);
					}
				},
				store: new Ext.data.ArrayStore({
					fields: [
						{name: 'line'},
						{name: 'character'},
						{name: 'reason'}
					]
				}),
				columns: [
					{
						id: 'line',
						header: TYPO3.l10n.localize('msg_line'),
						width: 40,
						fixed: true,
						menuDisabled: true,
						dataIndex: 'line'
					},
					{
						id: 'character',
						header: TYPO3.l10n.localize('msg_character'),
						width: 70,
						fixed: true,
						menuDisabled: true,
						dataIndex: 'character'
					},
					{
						header: TYPO3.l10n.localize('show_description'),
						menuDisabled: true,
						dataIndex: 'reason'
					}
				],
				stripeRows: true
			})]
		});

		me.addEvents('init');

		Ext.apply(this, {
			items: [
				{
					xtype: 'textarea',
					readOnly: false,
					hidden: true,
					value: this.sourceCode
				}
			]
		});

		TYPO3.EM.CodeMirror.superclass.initComponent.apply(this, arguments);
	},

	triggerOnSave: function() {
		this.changeAction();
		var sNewCode = this.codeMirrorEditor.getCode();
		this.oldSourceCode = sNewCode;
		this.onSave(arguments[0] || false);
	},

	onRender: function() {
		this.oldSourceCode = this.sourceCode;
		TYPO3.EM.CodeMirror.superclass.onRender.apply(this, arguments);
			// trigger editor on afterlayout
		this.on('afterlayout', this.triggerCodeEditor, this, {
			single: true
		});
		this.on('resize', this.resizeCodeEditor, this);

	},

	/** @private */
	resizeCodeEditor: function(component, width, height, origWidth, origHeight) {
		var el = Ext.fly(this.codeMirrorEditor.frame);
		el.setSize(width - 50, height); // subtract width of line numbers
		el.next().setHeight(height);
		this.doLayout();
	},

	/** @private */
	triggerCodeEditor: function() {
		var me = this;
		var stylesheets = [
			TYPO3.settings.EM.codemirrorCssPath + "xmlcolors.css",
			TYPO3.settings.EM.codemirrorCssPath + "jscolors.css",
			TYPO3.settings.EM.codemirrorCssPath + "csscolors.css",
			TYPO3.settings.EM.codemirrorContribPath + "php/css/phpcolors.css",
			TYPO3.settings.EM.codemirrorContribPath + "sql/css/sqlcolors.css"
		];
		if (this.stylesheet) {
			stylesheets.push(this.stylesheet);
		}
		var oCmp = this.findByType('textarea')[0];

		this.editorConfig = Ext.applyIf(this.codeMirror || {}, {
			lineNumbers: true,
			textWrapping: false,
			content: this.fileContent || '',
			indentUnit: 4,
			tabMode: 'shift',
			readOnly: oCmp.readOnly,
			path: TYPO3.settings.EM.codemirrorJsPath,
			autoMatchParens: true,
			parser: this.parser,
			parserfile: [
				"parsexml.js",
				"parsecss.js",
				"tokenizejavascript.js",
				"parsejavascript.js",
				"../contrib/php/js/tokenizephp.js",
				"../contrib/php/js/parsephp.js",
				"../contrib/php/js/parsephphtmlmixed.js",
				"../contrib/sql/js/parsesql.js"
			],
			stylesheet: stylesheets,

			initCallback: function(editor) {
				me.fireEvent('init', editor);
			},

			onChange: function() {
				var sCode = me.codeMirrorEditor.getCode();
				oCmp.setValue(sCode);

				if (me.oldSourceCode == sCode) {
					me.changeAction(false);
				} else {
					me.changeAction(true);
				}
			}
		});

		var sParserType = me.parser || 'defo';
		this.codeMirrorEditor = new CodeMirror.fromTextArea(Ext.getDom(oCmp.id).id, this.editorConfig);

	},

	changeAction: function(changed) {
		if (TYPO3.settings.EM.fileAllowSave && this.fileLoaded) {
			if (!changed) {
				this.ownerCt.saveButton.disable();
				this.ownerCt.diffButton.disable();
				this.ownerCt.fileLabel.removeClass('fileChanged');
				this.contentChanged = false;
			} else {
				this.ownerCt.saveButton.enable();
				this.ownerCt.diffButton.enable();
				this.ownerCt.fileLabel.addClass('fileChanged');
				this.contentChanged = true;
			}
		}
	},

	getValue: function() {
		return this.codeMirrorEditor.getCode();
	},

	setValue: function(text) {
		this.codeMirrorEditor.setCode(text);
		this.resizeCodeEditor();
	},

	setValueAtCursor: function(text) {
		var cursorPosition = this.codeMirrorEditor.cursorPosition();
		var handleForCursorLine = this.codeMirrorEditor.cursorLine();
		this.codeMirrorEditor.insertIntoLine(handleForCursorLine, cursorPosition.character, text);
	},

	openText: function(text, ext) {
		var parserName = this.getParserFromExtension(ext);
		this.codeMirrorEditor.setParser(parserName);
		this.codeMirrorEditor.setCode(text);
		this.oldSourceCode = text;
		this.fileLoaded = true;
	},

	getParserFromExtension: function(ext) {
		var parser = '';
		switch(ext.toLowerCase()) {
			case 'js':
			case 'json':
				parser = 'JSParser';
			break;
			case 'css':
				parser = 'CSSParser';
			break;
			case 'php':
			case 'php3':
			case 'php4':
			case 'php5':
			case 'php6':
			case 'phpsh':
			case 'inc':
			case 'html':
			case 'htm':
			case 'tmpl':
			case 'phtml':
				parser = 'PHPHTMLMixedParser';
			break;
			case 'sql':
				parser = 'SqlParser';
			break;
			case 'xml':
			default:
				parser = 'XMLParser';
		}
		return parser;
	}

});
Ext.reg('TYPO3.EM.CodeMirror', TYPO3.EM.CodeMirror);
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM');

TYPO3.EM.TerUpload = Ext.extend(Ext.form.FormPanel, {
	border:false,
	recordData: null,

	initComponent:function() {



		Ext.apply(this, {
			itemId: 'extUploadForm',
			height: 340,
			defaultType: 'textfield',

			defaults: {width: 350},
			items: [{
				xtype: 'hidden',
				name: 'extKey',
				value: this.recordData.extkey
			}, {
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_username'),
				name: 'fe_u'
			}, {
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_password'),
				inputType: 'password',
				name: 'fe_p'
			}, {
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_changelog'),
				xtype: 'textarea',
				height: 150,
				name: 'uploadcomment'
			}, {
				xtype: 'radiogroup',
				fieldLabel: TYPO3.l10n.localize('repositoryUploadForm_new_version'),
				itemCls: 'x-check-group-alt',
				columns: 1,
				items: [
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_bugfix').replace('%s', 'x.x.<strong><span class="typo3-red">x+1</span></strong>'),
						name: 'newversion',
						inputValue: 'new_dev',
						checked: true
					},
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_sub_version').replace('%s', 'x.<strong><span class="typo3-red">x+1</span></strong>.0'),
						name: 'newversion',
						inputValue: 'new_sub'
					},
					{
						boxLabel: TYPO3.l10n.localize('repositoryUploadForm_new_main_version').replace('%s', '<strong><span class="typo3-red">x+1</span></strong>.0.0'),
						name: 'newversion',
						inputValue: 'new_main'
					}
				]
			}, {
				xtype: 'button',
				text: TYPO3.l10n.localize('repositoryUploadForm_upload'),
				scope: this,
				handler: function() {
					this.form.submit({
						waitMsg : TYPO3.l10n.localize('action_sending_data'),
						success: function(form, action) {
							var msg = action.result.response.resultMessages.join('<br /><br />');
							TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('cmd_terupload'),
									String.format(TYPO3.l10n.localize('msg_terupload'), action.result.params.extKey) + '<br /><br />' + msg, 15);
							Ext.StoreMgr.get('localstore').reload();
						},
						failure: function(form, action) {
							if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
								TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
										TYPO3.l10n.localize('msg_status') + ': ' + action.result.response.status + ': '+
										action.result.response.statusText, 5);
							}
							if (action.failureType === Ext.form.Action.SERVER_INVALID){
								// server responded with success = false
								TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'),
										action.result.error, 5);
							}
						}
					});
				}
			}],
			listeners: {

				activate: function(panel) {


				}
			},
			scope: this
		});

		TYPO3.EM.TerUpload.superclass.initComponent.apply(this, arguments);
	},

	onRender: function() {


		TYPO3.EM.TerUpload.superclass.onRender.apply(this, arguments);

		Ext.apply(this.getForm(),{
			api: {
				load: TYPO3.EM.ExtDirect.loadUploadExtToTer,
				submit: TYPO3.EM.ExtDirect.uploadExtToTer
			},
			paramsAsHash: false

		});
		this.form.load();
	}


});

Ext.reg('terupload', TYPO3.EM.TerUpload);
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM');

TYPO3.EM.Tools = function() {
	return {
		displayLocalExtension: function(extKey, reload) {
			localStore = Ext.StoreMgr.get('localstore');
				// select local extension list
			Ext.getCmp('em-main').setActiveTab(0);
			if (reload === true) {
				TYPO3.EM.Filters.clearFilters();
				localStore.showAction = extKey;
				var search = Ext.getCmp('localSearchField');
				search.setValue(extKey);
				search.refreshTrigger();
				localStore.load({
					params: {
						repository: TYPO3.settings.EM.selectedRepository
					}
				});
			}
		},

		uploadExtension: function() {
			if (Ext.isObject(TYPO3.EM.ExtensionUploadWindowInstance)) {
				TYPO3.EM.ExtensionUploadWindowInstance.show();
			} else {
				TYPO3.EM.ExtensionUploadWindowInstance = new TYPO3.EM.ExtensionUploadWindow().show();
			}
		},

		renderExtensionTitle: function(record) {
			var description = record.data.description;
			var value = record.data.title;
			if (value == '') {
				value = '[no title]';
			}
			if (record.data.reviewstate < 0) {
				description += '<br><br><strong>' + TYPO3.l10n.localize('insecureExtension') + '</strong>';
			}
			return record.data.icon + ' ' + value + ' (v' + record.data.version + ')';
		},

		closeImportWindow: function() {
	   		TYPO3.EM.ImportWindow.close();
		},

		refreshMenu: function(record, installAction) {
			if (installAction == 'import') {
				Ext.StoreMgr.get('repositoryliststore').getById(record.extkey).set('exists', 1);
				TYPO3.EM.Tools.displayLocalExtension(record.extkey, true);
			}
			if (top.TYPO3ModuleMenu && installAction == 'install') {
				top.TYPO3ModuleMenu.refreshMenu();
			}
		}
	}
}();
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM', 'TYPO3.EM.GridColumns');

TYPO3.EM.LocalList = Ext.extend(Ext.grid.GridPanel, {
	border: false,
	plain: true,
	stripeRows: true,
	stateful: true,
	stateId: 'LocalList',
	stateEvents: ['columnmove', 'columnresize', 'sortchange', 'groupchange'],
	bodyStyle: 'padding: 10px;',

	rowExpander: new Ext.ux.grid.RowPanelExpander({
		hideable: false,
		id: 'LocalListExpander',
		createExpandingRowPanelItems: function(record, rowIndex) {
			var panelItems = [
				new Ext.TabPanel({
					plain: true,
					activeTab: 0,
					tabPosition: 'top',
					enableTabScroll: true,
					autoWidth: true,
					plugins: [new Ext.ux.plugins.FitWidthToParent()],
					defaults: {
						cls: 'gridrowpanel',
						height: 250
					},
					record: record,
					items:[
						{
							title: TYPO3.l10n.localize('msg_info'),
							html: TYPO3.EM.Layouts.showExtInfo(record.data),
							listeners: {
								activate: function(panel) {
									var updateScriptLink = Ext.fly('update-check-' + record.data.extkey);
									if (updateScriptLink) {
										updateScriptLink.on('click', function() {
											panel.getEl().mask('loading');
											TYPO3.EM.ExtDirect.getExtensionUpdateScript(record.data.extkey, function(response) {
												panel.getEl().unmask();
												if (response.success) {
													var w = new Ext.Window({
																maximized: true,
																layout: 'fit',
																title: TYPO3.l10n.localize('ext_details_updateScript') + ' (' + record.data.extkey + ')',
																items: [
																	{
																		xtype: 'iframePanel',
																		id: 'updateScript-' + record.data.extkey
																	}
																]
															}).show(true, function() {
														Ext.getCmp('updateScript-' + record.data.extkey).setUrl('mod.php?M=tools_em&nodoc=1&CMD[showExt]=' + record.data.extkey + '&SET[singleDetails]=updateModule');
													});
												} else {
													TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('cmd_update'), TYPO3.l10n.localize('repository_update_not_needed'), 5);
												}
											});
										}, this);
									}

								}
							}
						},
						{
							title: TYPO3.l10n.localize('msg_dbupdate'),
							html: TYPO3.EM.App.loadingIndicor,
							xtype: 'form',
							disabled: record.data.installed === 0,
							listeners: {
								activate: function(panel) {
									panel.update(TYPO3.EM.App.loadingIndicor);
									TYPO3.EM.ExtDirect.getExtensionUpdate(record.data.extkey, function(response) {
										panel.update(response, true, this.readUpdateForm.createDelegate(this));
									}, this);
								}
							},
							scope: this,
							readUpdateForm: function() {
								var button = Ext.get('update-submit-' + record.data.extkey);
								Ext.apply(this.form, {
											api: {
												submit: TYPO3.EM.ExtDirect.saveExtensionConfiguration
											},
											paramsAsHash: false
										});
								if (button) {
									button.on('click', function() {
										this.doUpdate(false);
									}, this);
								}
							},
							doUpdate: function(noSave) {
								this.form.submit({
											waitMsg : noSave ? ' ' : TYPO3.l10n.localize('action_updateDatabase'),
											params: {
												extkey: record.data.extkey,
												exttype: record.data.typeShort,
												noSave: noSave
											},
											success: function(form, action) {
												this.ownerCt.activeTab.update(TYPO3.EM.App.loadingIndicor);
												TYPO3.EM.ExtDirect.getExtensionUpdate(record.data.extkey, function(response) {
													this.ownerCt.activeTab.update(response, true, this.readUpdateForm.createDelegate(this));
												}, this);
											},
											failure: function(form, action) {
												if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
													TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
															TYPO3.l10n.localize('msg_error') + ':' + action.response.status + ': ' +
																	action.response.statusText, 5);
												}
												if (action.failureType === Ext.form.Action.SERVER_INVALID) {
													// server responded with success = false
													TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('invalid'), action.result.errormsg, 5);
												}
											},
											scope: this
										});
							}
						},
						{
							title: TYPO3.l10n.localize('msg_configuration'),
							xtype: 'form',
							disabled: record.data.installed === 0,
							html: TYPO3.EM.App.loadingIndicor,
							listeners: {
								activate: function(panel) {
									panel.update(TYPO3.EM.App.loadingIndicor);
									TYPO3.EM.ExtDirect.getExtensionConfiguration(record.data.extkey, function(response) {
										panel.update(response, true, this.readConfigForm.createDelegate(this));
									}, this);
								}
							},
							scope: this,
							readConfigForm: function() {
								var button = Ext.get('configuration-submit-' + record.data.extkey);
								if (!button) {
									var button = Ext.get('update-submit-' + record.data.extkey);
								}
								var select = Ext.select('.mod-menu-template-select');
								Ext.apply(this.form, {
											api: {
												submit: TYPO3.EM.ExtDirect.saveExtensionConfiguration
											},
											paramsAsHash: false
										});
								if (select) {
									var converted = new Ext.form.ComboBox({
												transform: select.elements[0],
												typeAhead: true,
												listeners: {
													beforequery: function(o) {
														o.forceAll = true;
													},
													select: function() {
														this.doSubmit(true);
													},
													scope: this
												}
											});
								}
								if (button) {
									button.on('click', function() {
										this.doSubmit(false);
									}, this);
								}
							},
							doSubmit: function(noSave) {
								this.form.submit({
											waitMsg : noSave ? ' ' : TYPO3.l10n.localize('action_saving_settings'),
											params: {
												extkey: record.data.extkey,
												exttype: record.data.typeShort,
												noSave: noSave
											},
											success: function(form, action) {
												if (action.result.html) {
													this.ownerCt.activeTab.update(action.result.html, true, this.readConfigForm.createDelegate(this));
												} else {
													TYPO3.Flashmessage.display(TYPO3.Severity.ok, TYPO3.l10n.localize('msg_configuration'), TYPO3.l10n.localize('configurationSaved'), 5);
												}
											},
											failure: function(form, action) {
												if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
													TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
															TYPO3.l10n.localize('msg_error') + ':' + action.response.status + ': ' +
																	action.response.statusText, 5);
												}
												if (action.failureType === Ext.form.Action.SERVER_INVALID) {
													// server responded with success = false
													TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('invalid'), action.result.errormsg, 5);
												}
											},
											scope: this
										});
							}
						},
						{
							title: TYPO3.l10n.localize('msg_files'),
							xtype: 'extfilelist',
							recordData: record.data,
							cls: 'gridrowfilespanel'
						},
						{
							xtype: 'terupload',
							title: TYPO3.l10n.localize('cmd_terupload'),
							recordData: record.data,
							disabled: !TYPO3.settings.EM.hasCredentials
						},
						{
							title: TYPO3.l10n.localize('msg_developerinformation'),
							html: '<div class="loading-indicator">' + TYPO3.l10n.localize('action_loading') + '</div>',
							listeners: {
								activate: function(panel) {
									TYPO3.EM.ExtDirect.getExtensionDevelopInfo(record.data.extkey, function(response) {
										panel.update(response);
									});
								}
							}
						},
						{
							title: TYPO3.l10n.localize('details_maintenance'),
							html: TYPO3.EM.App.loadingIndicor,
							listeners: {
								activate: function(panel) {
									TYPO3.EM.ExtDirect.getExtensionBackupDelete(record.data.extkey, function(response) {
										panel.update(response, true, this.readBackupDeleteLinks.createDelegate(this));
									}, this);
								}
							},
							scope: this,
							readBackupDeleteLinks: function() {
								var emconflink = Ext.select('a.emconfLink');
								if (emconflink.elements.length) {
									var link = emconflink.elements[0];
									link.removeAttribute('onclick');
									Ext.get(link).on('click', function() {
										this.waitBox = Ext.Msg.wait(TYPO3.l10n.localize('ext_details_update_em_conf'), record.data.extkey);
										TYPO3.EM.ExtDirect.cleanEmConf(record.data.extkey, function(response) {
											this.waitBox.hide();
											TYPO3.Flashmessage.display(TYPO3.Severity.ok, TYPO3.l10n.localize('ext_details_update_em_conf'), response.result, 5);
										}, this);
									});
								}
								var deletelink = Ext.select('a.deleteLink');
								if (deletelink.elements.length) {
									var link = deletelink.elements[0];
									link.removeAttribute('onclick');
									Ext.get(link).on('click', function() {
										this.waitBox = Ext.Msg.wait(TYPO3.l10n.localize('extDelete_from_server'), record.data.extkey);
										TYPO3.EM.ExtDirect.deleteExtension(record.data.extkey, function(response) {
											this.waitBox.hide();
											if (response.success) {
												TYPO3.Flashmessage.display(TYPO3.Severity.ok, TYPO3.l10n.localize('msg_extkexDeletedSuccess'), response.result, 5);
												Ext.StoreMgr.get('localstore').remove(record);
											} else {
												TYPO3.Flashmessage.display(TYPO3.Severity.error, response.error, response.result, 5);
											}
										}, this);
									});
								}

							}
						}
					]
				})
			];
			return panelItems;
		}
	}),

	initComponent:function() {
		this.localstore = new Ext.data.GroupingStore({
			storeId: 'localstore',
			proxy: new Ext.data.DirectProxy({
				directFn: TYPO3.EM.ExtDirect.getExtensionList
			}),
			autoLoad: false,
			reader: new Ext.data.JsonReader({
						idProperty: 'extkey',
						root: 'data',
						totalProperty: 'length',
						fields:[
							{name:'install'},
							{name:'title'},
							{name:'extkey'},
							{name:'category'},
							{name:'version'},
							{name:'type'},
							{name:'state'},
							{name:'stateCls'},
							{name:'icon'},
							{name:'description'},
							{name:'shy'},
							{name:'installed'},
							{name:'author'},
							{name:'author_email'},
							{name:'author_company'},
							{name:'download'},
							{name:'doc'},
							{name:'typeShort'},
							{name:'nodePath'},
							{name:'reviewstate'},
							{name:'required'},
							{name:'doubleInstall'},
							{name:'doubleInstallShort'},
							{name:'updateModule'},
							{name:'doNotLoadInFE'},
							{name:'depends'},
							{name:'conflicts'},
							{name:'suggests'},
							{name:'versionislower'},
							{name:'maxversion'}
						]
					}),

			sortInfo:{
				field: 'title',
				direction: 'ASC'
			},
			remoteSort: false,
			groupField: 'category',
			showAction: false,
			listeners: {
				beforeload: function() {

				},
				datachanged: function(store) {
					Ext.getCmp('displayExtensionLabel').setText(TYPO3.l10n.localize('extensions') + ' ' + store.data.length);
					var hasFilters = store.hasStoreFilter();
					TYPO3.EM.Filters.filters.each(function (filter) {
						if (filter.active) {
							hasFilters = true;
						}
					});
					if (hasFilters) {
						this.doClearFilters.show();
						this.doClearFiltersSeperator.show();
					} else {
						this.doClearFilters.hide();
						this.doClearFiltersSeperator.hide();
					}
					if (!TYPO3.settings.EM.hide_obsolete && !TYPO3.settings.EM.hide_shy && !TYPO3.settings.EM.display_installed && !TYPO3.settings.EM.display_updatable) {
						this.filterMenuButton.removeClass('bold');
					} else {
						this.filterMenuButton.addClass('bold');
					}
				},
				load: function(store) {
					TYPO3.EM.App.refreshLocalList = false;
					if (store.showAction) {
						this.showExtension.defer(500, this);
					}
				},

				scope: this
			},
			validateRecord: function(record) {
				var control = Ext.getCmp('localSearchField');
				if (control) {
					var filtertext = control.getRawValue();
					if (filtertext) {
						//filter by search string
						var re = new RegExp(Ext.escapeRe(filtertext), 'gi');
						var isMatched = record.data.extkey.match(re) || record.data.title.match(re);
						if (!isMatched) {
							return false;
						}
					}
				}
				if (TYPO3.settings.EM.hide_obsolete == 1 && record.data.state === 'obsolete') {
					return false;
				}
				if (TYPO3.settings.EM.hide_shy == 1 && record.data.shy == 1) {
					return false;
				}
				if (TYPO3.settings.EM.display_installed == 1 && record.data.installed == 0) {
					return false;
				}
				if (TYPO3.settings.EM.display_updatable == 1 && record.data.versionislower == 0) {
					return false;
				}

				return true;
			},

			hasStoreFilter: function() {
				return (TYPO3.settings.EM.hide_obsolete || TYPO3.settings.EM.hide_shy || TYPO3.settings.EM.display_installed || TYPO3.settings.EM.display_updatable);
			},

			clearStoreFilters: function(scope) {
				Ext.each(scope.filterMenuButton.menu.items.items, function(item) {
					item.setChecked(false, true);
				});
				TYPO3.settings.EM.hide_obsolete = TYPO3.settings.EM.hide_shy = TYPO3.settings.EM.display_installed = TYPO3.settings.EM.display_updatable = 0;
				TYPO3.EM.ExtDirect.saveSetting('display_installed', 0);
				TYPO3.EM.ExtDirect.saveSetting('display_updatable', 0);
				TYPO3.EM.ExtDirect.saveSetting('hide_shy', 0);
				TYPO3.EM.ExtDirect.saveSetting('hide_obsolete', 0);
				scope.filterRecords();
			},

			highlightSearch: function(value) {
				var control = Ext.getCmp('localSearchField');
				if (control) {
					var filtertext = control.getRawValue();
					if (filtertext) {
						var re = new RegExp(Ext.escapeRe(filtertext), 'gi');
						var result = re.exec(value) || [];
						if (result.length) {
							return value.replace(result[0], '<span class="filteringList-highlight">' + result[0] + '</span>');
						}
					}
				}
				return value;
			}
		});

		var searchField = new Ext.ux.form.SearchField({
			store: this.localstore,
			filterFunction: this.filterRecords,
			id: 'localSearchField',
			width: 200
		});

		var cols = [
			TYPO3.settings.EM.inlineToWindow == 1 ? TYPO3.EM.GridColumns.DummyColumn : this.rowExpander,
			TYPO3.EM.GridColumns.InstallExtension,
			TYPO3.EM.GridColumns.ExtensionTitle,
			TYPO3.EM.GridColumns.ExtensionKey,
			TYPO3.EM.GridColumns.ExtensionCategory,
			TYPO3.EM.GridColumns.ExtensionAuthor,
			TYPO3.EM.GridColumns.ExtensionType,
			TYPO3.EM.GridColumns.ExtensionState
		];

		var cm = new Ext.grid.ColumnModel({
			columns: cols,
			defaults: {
				sortable: true
			}
		});

		var sm = Ext.emptyFn();
		if (TYPO3.settings.EM.inlineToWindow == 1) {
			sm = new Ext.grid.RowSelectionModel({
				singleSelect: true
			});
		}

		Ext.apply(this, {
			itemId: 'em-localLocalExtensionlist',
			title: TYPO3.l10n.localize('availableExtensions'),
			loadMask: {msg: TYPO3.l10n.localize('action_loading_extlist')},
			layout: 'fit',
			store: this.localstore,
			cm: cm,
			sm: sm,
			plugins: TYPO3.settings.EM.inlineToWindow == 1 ? [TYPO3.EM.Filters] : [this.rowExpander, TYPO3.EM.Filters],
			view : new Ext.grid.GroupingView({
						forceFit : true,
						groupTextTpl : '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "' + TYPO3.l10n.localize('msg_items') + '" : "' + TYPO3.l10n.localize('msg_item') + '"]})',
						enableRowBody: true,
						showPreview: true,
						getRowClass: this.applyRowClass,
						iconCls: 'icon-grid',
						hideGroupedColumn: true
					}),

			tbar: [
				' ',
				{
					text: TYPO3.l10n.localize('cmd_filter'),
					tooltip: TYPO3.l10n.localize('help_localFilter'),
					tooltipType : 'qtip',
					scale: 'small',
					ref: '../filterMenuButton',
					iconAlign: 'right',
					menu : {
						items: [
							{
								checked: TYPO3.settings.EM.display_installed ? true : false,
								text: TYPO3.l10n.localize('display_installedOnly'),
								handler: function(item, event) {
									TYPO3.settings.EM.display_installed = item.checked ? 0 : 1;
									TYPO3.EM.ExtDirect.saveSetting('display_installed', TYPO3.settings.EM.display_installed);
									this.filterRecords();
								},
								scope: this
							},
							{
								checked: TYPO3.settings.EM.display_updatable ? true : false,
								text: TYPO3.l10n.localize('display_updatesOnly'),
								handler: function(item, event) {
									TYPO3.settings.EM.display_updatable = item.checked ? 0 : 1;
									TYPO3.EM.ExtDirect.saveSetting('display_updatable', TYPO3.settings.EM.display_updatable);
									this.filterRecords();
								},
								scope: this
							},
							{
								checked: TYPO3.settings.EM.hide_shy ? true : false,
								text: TYPO3.l10n.localize('hide_shy'),
								handler: function(item, event) {
									TYPO3.settings.EM.hide_shy = item.checked ? 0 : 1;
									TYPO3.EM.ExtDirect.saveSetting('hide_shy', TYPO3.settings.EM.hide_shy);
									this.filterRecords();
								},
								scope: this
							},
							{
								checked: TYPO3.settings.EM.hide_obsolete ? true : false,
								text: TYPO3.l10n.localize('hide_obsolete'),
								handler: function(item, event) {
									TYPO3.settings.EM.hide_obsolete = item.checked ? 0 : 1;
									TYPO3.EM.ExtDirect.saveSetting('hide_obsolete', TYPO3.settings.EM.hide_obsolete);
									this.filterRecords();
								} ,
								scope: this
							}
						]
					}
				},
				searchField,
				{
					xtype: 'tbseparator',
					ref: '../doClearFiltersSeperator',
					hidden: true
				}, {
					text: TYPO3.l10n.localize('cmd_ClearAllFilters'),
					ref: '../doClearFilters',
					handler: function() {
						this.localstore.clearStoreFilters(this);
						TYPO3.EM.Filters.clearFilters();
					},
					scope: this,
					hidden: true
				},
				'->',
				{
					xtype: 'tbtext',
					text: TYPO3.l10n.localize('action_loading_extlist'),
					id: 'displayExtensionLabel',
					style: {fontWeight: 'bold'}
				},
				' '
			]
		});

		TYPO3.EM.LocalList.superclass.initComponent.apply(this, arguments);
	},


	showExtension: function() {
		var row = this.store.find('extkey', this.store.showAction);
		if (row) {
			if (TYPO3.settings.EM.inlineToWindow == 1) {

			} else {
				this.rowExpander.expandRow(row);
			}
			this.getSelectionModel().selectRow(row);
			this.getView().focusRow(row);
		}
		this.store.showAction = false;
	},

	onRender: function() {
		TYPO3.EM.LocalList.superclass.onRender.apply(this, arguments);
		if (this.localstore.getCount() == 0) {
			this.localstore.load({
				params: {
					repository: TYPO3.settings.EM.selectedRepository
				}
			});
		}

		this.on('rowdblclick', function(grid, rowIndex, event) {
			if (TYPO3.settings.EM.inlineToWindow == 1) {
				this.showExtInfoInWindow(rowIndex);
			}
		});

		this.on('cellclick', function(grid, rowIndex, columnIndex, event) {
			if (TYPO3.settings.EM.inlineToWindow == 1 && columnIndex == 2) {
				this.showExtInfoInWindow(rowIndex);
			}
		});

	},

	afterRender: function() {
		TYPO3.EM.LocalList.superclass.afterRender.apply(this, arguments);
	},

	showExtInfoInWindow: function(index) {
		var record = this.store.getAt(index);
		var id = 'window-extinfo-' + record.data.extkey;
		var tabs = this.rowExpander.createExpandingRowPanelItems(record, index);

		Ext.apply(tabs, {
					height: 'auto'
				});

		if (Ext.WindowMgr.get(id)) {
			Ext.WindowMgr.bringToFront(id);
		} else {
			new Ext.Window({
				title: TYPO3.EM.Tools.renderExtensionTitle(record),
				maximized: true,
				layout: 'fit',
				items : tabs,
				id: id
			}).show();
		}
	},

	filterRecords: function() {
		Ext.StoreMgr.get('localstore').filterBy(TYPO3.EM.Filters.getRecordFilter());
	}

});

Ext.reg('TYPO3.EM.LocalList', TYPO3.EM.LocalList);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM', 'TYPO3.EM.GridColumns', 'TYPO3.EM.ExtDirect');

TYPO3.EM.RepositoryList = Ext.extend(Ext.grid.GridPanel, {
	border:false,
	stripeRows: true,
	stateful: true,
	stateId: 'RepositoryList',
	stateEvents: ['columnmove', 'columnresize', 'sortchange', 'groupchange'],
	bodyStyle: 'padding: 10px;',
	showInstalledOnly: false,

	expander: new Ext.ux.grid.RowPanelExpander({
		id: 'RepositoryListExpander',
		createExpandingRowPanelItems: function(record, rowIndex){
			var panelItems = [
				new Ext.TabPanel({
					plain: true,
					activeTab: 0,
					defaults: {
						autoHeight: true,
						autoWidth: true
					},
					record: record,
					items:[
						{
							title: TYPO3.l10n.localize('details_info'),
							listeners: {
								activate: function(panel) {
									panel.update(TYPO3.EM.Layouts.remoteExtensionInfo().applyTemplate(panel.ownerCt.record.data));
								}
							}
						}
					]
				})
			];
			return panelItems;
		}
	}),

	initComponent:function() {
		this.repositoryListStore = new Ext.data.DirectStore({
			storeId: 'repositoryliststore',
			directFn: TYPO3.EM.ExtDirect.getRemoteExtensionList,
			idProperty: 'extkey',
			root: 'data',
			totalProperty: 'length',
			fields:[
				{name:'install'},
				{name:'title'},
				{name:'extkey'},
				{name:'category', type: 'int'},
				{name:'version'},
				{name:'alldownloadcounter', type: 'int'},
				{name:'downloadcounter', type: 'int'},
				{name:'statevalue'},
				{name:'state'},
				{name:'stateCls'},
				{name:'icon'},
				{name:'description'},
				{name:'lastuploaddate', type: 'date', dateFormat: 'timestamp'},
				{name:'authorname'},
				{name:'authoremail'},
				{name:'versions', type: 'int'},
				{name:'installed', type: 'int'},
				{name:'versionislower', type: 'bool'},
				{name:'existingVersion'},
				{name:'exists', type: 'int'},
				{name:'relevance', type: 'int'}
			],
			paramNames: {
				start : 'start',
				limit : 'limit',
				sort : 'sort',
				dir : 'dir',
				query: 'query'
			},
			baseParams: {
				query: '',
				repository: TYPO3.settings.EM.selectedRepository,
				start: 0,
				limit: 50

			},
			remoteSort: true,
			sortInfo:{
				field:'title',
				direction:"ASC"
			},
			listeners: {
				beforeload: function(store, records){
					var control = Ext.getCmp('rsearchField');
					if (control.getValue == '') {
						return false;
					}
					store.setBaseParam('rep', Ext.getCmp('repCombo').getValue());
					store.setBaseParam('installedOnly', this.showInstalledOnly);
					if (!this.showInstalledOnly) {
						this.filterMenuButton.removeClass('bold');
					} else {
						this.filterMenuButton.addClass('bold');
					}

				},
				load: function(store, records){
					var hasFilters = false;
					TYPO3.EM.RemoteFilters.filters.each(function (filter) {
						if (filter.active) {
							hasFilters = true;
						}
					});
					if (hasFilters) {
						this.doClearFilters.show();
					} else {
						this.doClearFilters.hide();
					}
					if (records.length === 0) {

					} else {

					}
				},
				scope: this
			},
			highlightSearch: function(value) {
				var control = Ext.getCmp('rsearchField');
				if (control) {
					var filtertext = control.getRawValue();
					if (filtertext) {
						var re = new RegExp(Ext.escapeRe(filtertext), 'gi');
						var result = re.exec(value) || [];
						if (result.length) {
							return value.replace(result[0], '<span class="filteringList-highlight">' + result[0] + '</span>');
						}
					}
				}
				return value;
			}

		});

		this.repositoryStore = new Ext.data.DirectStore({
			storeId: 'repositories',
			idProperty: 'uid',
			directFn: TYPO3.EM.ExtDirect.getRepositories,
			root: 'data',
			totalProperty: 'length',
			fields : ['title', 'uid', 'updated', 'count', 'selected'],
			paramsAsHash: true
		});

		var searchField = new Ext.ux.form.SearchField({
			id: 'rsearchField',
			store: this.repositoryListStore,
			width: 260,
			specialKeyOnly: true,
			emptyText: TYPO3.l10n.localize('msg_startTyping')
		});

		var cm = new Ext.grid.ColumnModel({
			columns: [
				TYPO3.settings.EM.inlineToWindow == 1 ? TYPO3.EM.GridColumns.DummyColumn : this.expander,
				TYPO3.EM.GridColumns.ImportExtension,
				TYPO3.EM.GridColumns.ExtensionTitle,
				TYPO3.EM.GridColumns.ExtensionKey,
				TYPO3.EM.GridColumns.ExtensionCategoryRemote,
				TYPO3.EM.GridColumns.ExtensionRemoteAuthor,
				TYPO3.EM.GridColumns.ExtensionType,
				TYPO3.EM.GridColumns.Relevance,
				TYPO3.EM.GridColumns.ExtensionDownloads,
				TYPO3.EM.GridColumns.ExtensionStateValue
			],
			defaults: {
				sortable: true,
				hideable:false
			}

		});

		Ext.apply(this, {
			loadMask: {msg: TYPO3.l10n.localize('action_loadingRepositoryExtlist')},
			store: this.repositoryListStore,
			cm: cm,
			plugins: TYPO3.settings.EM.inlineToWindow == 1 ? [TYPO3.EM.RemoteFilters] : [this.expander, TYPO3.EM.RemoteFilters],
			viewConfig: {
				forceFit: true,
				enableRowBody: true,
				showPreview: true,
				getRowClass: this.applyRowClass,
				iconCls: 'icon-grid'
			},
			sm: new Ext.grid.CellSelectionModel({
				select: Ext.emptyFn
			}),
			tbar: [
				' ',
				{
					text: TYPO3.l10n.localize('cmd_filter'),
					tooltip: TYPO3.l10n.localize('help_remoteFilter'),
					scale: 'small',
					iconAlign: 'right',
					ref: '../filterMenuButton',
					menu : {
						items: [
							{
								checked: true,
								group: 'installFilter',
								text: TYPO3.l10n.localize('display_all'),
								handler: function(item, event) {
									this.showInstalledOnly = 0;
									this.store.reload();
								},
								scope: this
							}, {
								checked: false,
								group: 'installFilter',
								text: TYPO3.l10n.localize('display_installedOnly'),
								handler: function(item, event) {
									this.showInstalledOnly = 1;
									this.store.reload();
								},
								scope: this
							}
						]
					}
				},
				searchField, ' ', {
					text: TYPO3.l10n.localize('cmd_ClearAllFilters'),
					ref: '../doClearFilters',
					handler: function() {
						TYPO3.EM.RemoteFilters.clearFilters();
					},
					scope: this,
					hidden: true
				},
				'-',
				{
					iconCls: 't3-icon t3-icon-actions t3-icon-actions-edit t3-icon-edit-upload',
					tooltip: TYPO3.l10n.localize('upload_ext_directly'),
					ref: '../uploadButton',
					handler: function() {
						TYPO3.EM.Tools.uploadExtension();
					},
					scope: this
				},
				'-',
				'->',
				{
					xtype: 'tbtext',
					text: TYPO3.l10n.localize('repository') + ': '
				},
				TYPO3.EM.RepositoryCombo,
				{
					iconCls: 'x-btn-repupdate',
					handler: this.repositoryUpdate,
					tooltip: TYPO3.l10n.localize('cmd_RetrieveUpdate'),
					scope: this,
					hidden: !TYPO3.settings.EM.allowRepositoryUpdate
				},
				{
					xtype: 'container',
					id: 'repListInfo',
					html: ''
				},
				' '

			],
			bbar:[
				'->', {
					id: 'rresultPaging',
					xtype: 'paging',
					store: this.repositoryListStore,
					pageSize: 50,
					displayInfo: true,
					emptyMsg: TYPO3.l10n.localize('action_searching')
				}
			]
		});

		TYPO3.EM.RepositoryList.superclass.initComponent.apply(this, arguments);
	},

	onRender:function() {
		TYPO3.EM.RepositoryCombo.store = this.repositoryStore;
		TYPO3.EM.RepositoryCombo.on('select', function(comboBox, newValue, oldValue) {
			var info = TYPO3.EM.Layouts.repositoryInfo().applyTemplate(newValue.data);
            Ext.getCmp('repListInfo').update(info);
			this.repositoryListStore.reload({ params: {repository: newValue.data.uid} });
		}, this);
		this.repositoryStore.load({
			callback: function() {
				if (this.getCount() == 0) {
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'), TYPO3.l10n.localize('repository_notfound'), 15);
				} else {
					var rec = this.getById(TYPO3.settings.EM.selectedRepository);
					if (!rec) {
						TYPO3.settings.EM.selectedRepository = 1;
						rec = this.getById(TYPO3.settings.EM.selectedRepository);
					}
					TYPO3.EM.RepositoryCombo.setValue(TYPO3.settings.EM.selectedRepository);
					Ext.getCmp('repListInfo').update(TYPO3.EM.Layouts.repositoryInfo().applyTemplate(rec.data));
				}
			}

		});
		TYPO3.EM.RepositoryList.superclass.onRender.apply(this, arguments);

		this.on('rowcontextmenu', function(grid, rowIndex, event) {
			if (event.button === 2) {
				var record = grid.store.getAt(rowIndex);
				if (record.data.versions > 1) {
					var menu = new Ext.menu.Menu({
						record: record,
						items: [{
							text: String.format(TYPO3.l10n.localize('ext_import_versions'), record.data.title)
								+ ' (' + String.format(TYPO3.l10n.localize('ext_import_versions_available'), record.data.versions) + ')',
							iconCls: 't3-icon t3-icon-actions t3-icon-actions-system t3-icon-system-extension-import',
							handler: function() {
								var record = this.ownerCt.record.data;
								var link = TYPO3.settings.EM.scriptLink
									+ '&nodoc=1&ter_connect=1&ter_search=' + record.extkey  +'&CMD[importExtInfo]=' + record.extkey;
								TYPO3.EM.ImportWindow = new TYPO3.EM.InstallWindow({
									title: String.format(TYPO3.l10n.localize('ext_import_versions'), record.title) + ' (' + record.extkey + ')',
									record: record,
									installAction: 'import',
									listeners: {
										close: function() {
											TYPO3.EM.Tools.refreshMenu(record, 'import');
										}
									}
								}).show(true, function(){
									Ext.getCmp('emInstallIframeWindow').setUrl(link);
								});
							}
						}]
					}).showAt(event.getXY());
				}
    			event.stopEvent();
			}
		});

		this.on('rowdblclick',function(grid, rowIndex, event) {
			if (TYPO3.settings.EM.inlineToWindow == 1) {
				this.showExtInfoInWindow(rowIndex);
			}
		});
		this.on('cellclick',function(grid, rowIndex, columnIndex, event) {
			if (TYPO3.settings.EM.inlineToWindow == 1 && columnIndex == 2) {
				this.showExtInfoInWindow(rowIndex);
			}
		});
	},

	repositoryUpdate: function() {
		var m = Ext.MessageBox.wait(TYPO3.l10n.localize('msg_longwait'), TYPO3.l10n.localize('repository_update'));
		var index = TYPO3.EM.RepositoryCombo.getValue();
		if (!index) {
			return;
		}
		var record = this.repositoryStore.getAt(index - 1);
			// This is hard stuff to do. So increase the timeout for the AJAX request
		Ext.Ajax.timeout = 900000;
		TYPO3.EM.ExtDirect.repositoryUpdate(index, function(response) {
			if (!response.success) {
				if (response.rep == 0) {
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'), response.errormsg, 15);
				} else {
					TYPO3.Flashmessage.display(TYPO3.Severity.notice, TYPO3.l10n.localize('repository_update_not_needed'), response.errormsg, 5);
				}
			} else {
				TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('repository_updated'), String.format(TYPO3.l10n.localize('repository_extensions_count'), response.data.count), 10);
				record.set('count', response.data.count);
				record.set('updated', response.data.updated);
				Ext.getCmp('repListInfo').update(TYPO3.EM.Layouts.repositoryInfo().applyTemplate(record.data));
			}
			m.hide();
		}, this);
	},

	showExtInfoInWindow: function(index) {
		var record = this.store.getAt(index);
		var id = 'window-extinfo-' + record.data.extkey;
		if (Ext.WindowMgr.get(id)) {
			Ext.WindowMgr.bringToFront(id);
		} else {
			new Ext.Window({
				title: TYPO3.EM.Tools.renderExtensionTitle(record),
				layout: 'fit',
				width: 600,
				height: 350,
				items : this.expander.createExpandingRowPanelItems(record,index),
				id: id
			}).show();
		}
	}
});

Ext.reg('remoteextlist', TYPO3.EM.RepositoryList);

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM', 'TYPO3.EMSOAP.ExtDirect');

TYPO3.EM.UserTools = Ext.extend(Ext.Panel, {
	border:false,

	initComponent:function() {
		var extkeysSm = new Ext.grid.CheckboxSelectionModel({
			singleSelect: true,
			header: '',
			listeners: {
				selectionchange: function(selectionModel) {
					var sel, record, transferkeybutton = Ext.getCmp('transferkeybutton'),
							deletekeybutton = Ext.getCmp('deletekeybutton');

					if (selectionModel.getCount() == 0) {
						transferkeybutton.disable();
						deletekeybutton.disable();
					} else {
						transferkeybutton.enable();
						record = selectionModel.getSelected();
						if (record.data.hasUploads === true) {
							deletekeybutton.disable();
						} else {
							deletekeybutton.enable();
						}
						}

				}
			}
		});

		var extkeysCm = new Ext.grid.ColumnModel([
			extkeysSm,
			{
				id: 'extensionkey',
				header: TYPO3.l10n.localize('tab_mod_key'),
				width: .2,
				sortable: true,
				menuDisabled: true,
				dataIndex: 'extensionkey',
				hidable: false
			},
			{
				id: 'extensiontitle',
				header: TYPO3.l10n.localize('extInfoArray_title'),
				width: .2,
				sortable: true,
				menuDisabled: true,
				dataIndex: 'title',
				hidable: false
			},
			{
				id: 'extensiondescription',
				header: TYPO3.l10n.localize('extInfoArray_description'),
				width: .5,
				sortable: true,
				menuDisabled: true,
				dataIndex: 'description',
				hidable: false
			},
			{
				id: 'extensionuploads',
				header: TYPO3.l10n.localize('extInfoArray_uploads'),
				width: .1,
				sortable: true,
				menuDisabled: true,
				dataIndex: 'uploads',
				hidable: false
			},
			{
				id: 'extensionhasuploads',
				hidden: true,
				dataIndex: 'hasUploads'
			}
		]);

		var userExtStore = new Ext.data.DirectStore({
			storeId	: 'em-userext',
			autoLoad: false,
			directFn: TYPO3.EMSOAP.ExtDirect.getExtensions,
			root: 'data',
			idProperty  : 'extensionkey',
			fields : [
				{name : 'extensionkey', type : 'string'},
				{name : 'title', type : 'string'},
				{name : 'description', type : 'string'},
				{name : 'uploads', type : 'int'},
				{name : 'hasUploads', type : 'bool'}
			],
			sortInfo:{
				field: 'extensionkey',
				direction: 'ASC'
			},
			storeFilter: function(record, id) {
				var filtertext = Ext.getCmp('myExtSearchField').getRawValue();
				if (filtertext) {
						//filter by search string
					var re = new RegExp(Ext.escapeRe(filtertext), 'gi');
					var isMatched = record.data.extensionkey.match(re) || record.data.title.match(re) || record.data.description.match(re);
					if (!isMatched) {
						return false;
					}
				}
				return true;
			},
			listeners: {
				load: function(store, records) {
					Ext.getCmp('extvalidformbutton').enable();
					store.filterBy(store.storeFilter);
				},
				exception: function(proxy, response, read, request, ExtDirectParams) {
					var error;

					if (!ExtDirectParams.result.raw) {
						error = TYPO3.l10n.localize('soap_error');
					} else {
						error = ExtDirectParams.result.raw.error;
					}
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), error, 15);
					Ext.getCmp('extvalidformbutton').disable();
				},
				scope: this
			}
		});

		var searchField = new Ext.ux.form.SearchField({
			store: userExtStore,
			id: 'myExtSearchField',
			width: 200
		});

		Ext.apply(this, {
			itemId: 'UserTools',
			layout: 'hbox',
			layoutConfig: {
				align: 'stretch'
			},
			defaults: {
				border: false
			},
			bodyStyle: 'padding-top: 10px;',
			border: false,
			items: [
				{
					width: 300,
					border: false,
					items: [
						{
							layout: 'form',
							xtype: 'form',
							labelWidth: 100,
							defaults: {margins: '10 0 0 0'},
							ref: '../validityCheckForm',
							items: [
								{
									xtype:'fieldset',
									title: TYPO3.l10n.localize('registerkeys_check_validity_extkey'),
									defaults: {},
									defaultType: 'textfield',
									items :[
										{
											fieldLabel: TYPO3.l10n.localize('tab_mod_key'),
											name: 'extkey',
											width: 170,
											allowBlank: false,
											validator: function(value) {
												if (value.length < 3) {
													return false;
												}
												return true;
											}
										},
										new Ext.Container({
											html: TYPO3.EM.Layouts.getExtensionRules(),
											xtype: 'displayfield',
											labelWidth: 1
										})
									],
									buttons: [
										{
											id: 'extvalidformbutton',
											text: TYPO3.l10n.localize('registerkeys_check_validity'),
											handler: function() {
												this.validityCheckForm.getForm().submit({
													waitMsg : TYPO3.l10n.localize('registerkeys_check_validity'),
													success: function(form, action) {
														TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('registerkeys_check_validity_extkey_isvalid'), '', 5);

														this.registerForm.getForm().setValues({
															extkey: form.getValues().extkey,
															extkeydisplay: '<b>' + form.getValues().extkey + '</b>'
														});
														form.reset();
														this.validityCheckForm.hide()
														this.registerForm.show();
													},

													failure: function(form, action) {
														if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
															TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
																	TYPO3.l10n.localize('msg_status') + ': ' + action.response.status + ': ' +
																			action.response.statusText, 15);
														}
														if (action.failureType === Ext.form.Action.SERVER_INVALID) {
															// server responded with success = false
															TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), action.result.message, 5);
														}
													},
													scope: this
												});
											},
											scope: this
										}
									]
								}
							]
						},
						{
							layout: 'form',
							xtype: 'form',
							hidden: true,
							labelWidth: 100,
							ref: '../registerForm',
							items: [
								{
									xtype:'fieldset',
									title: TYPO3.l10n.localize('registerkeys_registerkey'),
									defaults: {},
									defaultType: 'textfield',
									items :[
										{
											xtype: 'hidden',
											name: 'extkey',
											value: ''
										},
										{
											html: '',
											xtype: 'displayfield',
											name: 'extkeydisplay',
											fieldLabel: TYPO3.l10n.localize('tab_mod_key')
										},
										{
											fieldLabel: TYPO3.l10n.localize('extInfoArray_title'),
											name: 'title',
											width: 170,
											allowBlank: false
										},
										{
											fieldLabel: TYPO3.l10n.localize('extInfoArray_description'),
											xtype: 'textarea',
											name: 'description',
											width: 170,
											height: 80
										}
									],
									buttons: [
										{
											id: 'extregisterformbutton',
											text: TYPO3.l10n.localize('cmd_register'),
											handler: function() {
												this.registerForm.getForm().submit({
													waitMsg : TYPO3.l10n.localize('registerkeys_register_extkey'),
													success: function(form, action) {
														var msg = String.format(TYPO3.l10n.localize('registerkeys_register_extkey_success'), this.registerForm.getForm().getValues().extkey);
														TYPO3.Flashmessage.display(TYPO3.Severity.information, msg, '', 5);
														form.reset();
														this.registerForm.hide();
														this.validityCheckForm.show();
														Ext.getCmp('em-userextgrid').store.load();
													},
													failure: function(form, action) {
														if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
															TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
																TYPO3.l10n.localize('list_order_state') + ':' + action.response.status + ': ' +
																action.response.statusText, 15);
														}
														if (action.failureType === Ext.form.Action.SERVER_INVALID) {
															// server responded with success = false
															TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), action.result.message, 5);
														}
													},
													scope: this
												});
											},
											scope: this

										},
										{
											text: TYPO3.l10n.localize('registerkeys_cancel_register'),
											handler: function() {
												this.registerForm.hide();
												this.validityCheckForm.show()
											},
											scope: this
										}
									]
								}
							]
						}
					]
				},
				{
					flex: 1,
					border: false,
					layout: 'fit',
					items: [
						{
							xtype: 'fieldset',
							title: TYPO3.l10n.localize('myExtensions'),
							items : [
								{
									xtype: 'grid',
									id: 'em-userextgrid',
									stripeRows: true,
									store: userExtStore,
									loadMask: {msg: TYPO3.l10n.localize('action_loading_extlist')},
									cm: extkeysCm,
									sm: extkeysSm,
									viewConfig: {
										forceFit: true,
										autofill: true
									},
									autoheight: true,
									bodyStyle: 'padding: 10px 10px 0 10px;',
									anchor: '100% 100%',
									stateId: 'userextgrid',
									stateful: true,
									tbar: [
										{
											xtype: 'tbtext',
											text: TYPO3.l10n.localize('cmd_filter') + ':'
										},
										searchField,
										'->',
										{
											xtype: 'tbtext',
											text: TYPO3.l10n.localize('cmd_action') + ':'
										},
										' ',
										{
											xtype: 'tbbutton',
											disabled: true,
											id: 'transferkeybutton',
											text: TYPO3.l10n.localize('cmd_transferkey'),
											handler: this.transferkey,
											scope: this
										},
										' ',
										{
											xtype: 'tbbutton',
											disabled: true,
											id: 'deletekeybutton',
											text: TYPO3.l10n.localize('cmd_deletekey'),
											handler: this.deletekey,
											scope: this
										}
									]
								}
							]
						}
					]
				}
			]
		});

		TYPO3.EM.UserTools.superclass.initComponent.apply(this, arguments);
	},

	onRender: function() {

		TYPO3.EM.UserTools.superclass.onRender.apply(this, arguments);

		Ext.apply(this.validityCheckForm.getForm(), {
			api: {
				submit: TYPO3.EMSOAP.ExtDirect.checkExtensionkey
			},
			paramsAsHash: false

		});
		Ext.apply(this.registerForm.getForm(), {
			api: {
				submit: TYPO3.EMSOAP.ExtDirect.registerExtensionkey
			},
			paramsAsHash: false

		});

	},

	transferkey: function() {
		var grid = Ext.getCmp('em-userextgrid');
		var extkey = grid.getSelectionModel().getSelected().data.extensionkey;
		this.transferWindow = new Ext.Window({
			width: 300,
			height: 170,
			modal: true,
			title: TYPO3.l10n.localize('cmd_transferkey') + ' "' + extkey + '"',
			layout: 'form',
			items: [
				{
					xtype: 'form',
					labelWidth: 120,
					items: [
						new Ext.Container({
							xtype: 'displayfield',
							html: TYPO3.l10n.localize('transferkeys_info'),
							labelWidth: 1,
							style: 'margin: 10px 5px;'
						}),
						{
							xtype: 'textfield',
							fieldLabel: TYPO3.l10n.localize('cmd_transferkey_to_user'),
							ref: '../transfertouser',
							allowBlank: false
						}
					]
				}
			],
			buttons: [
				{
					text: TYPO3.l10n.localize('cmd_transferkey_do'),
					handler: function(button) {
						var toUser = this.transferWindow.transfertouser.getRawValue();
						button.disable();
						this.transferWindow.body.mask(TYPO3.l10n.localize('cmd_transferkey'));
						TYPO3.EMSOAP.ExtDirect.transferExtensionKey(extkey, toUser, function(response) {
							if (response.success) {
								TYPO3.Flashmessage.display(TYPO3.Severity.ok, String.format(TYPO3.l10n.localize('transferkeys_success'), response.key, response.user), '', 5);
								Ext.getCmp('em-userextgrid').store.load();
							} else {
								TYPO3.Flashmessage.display(TYPO3.Severity.error, String.format(TYPO3.l10n.localize('transferkeys_fail'), response.key, response.user),response.message, 15);
							}
							this.transferWindow.close();
						}, this)
					},
					scope: this
				}
			]
		}).show();
	},

	deletekey: function() {
		var grid = Ext.getCmp('em-userextgrid');
		var extkey = grid.getSelectionModel().getSelected().data.extensionkey;

		this.deleteWindow = new Ext.Window({
			width: 300,
			height: 130,
			modal: true,
			title: TYPO3.l10n.localize('cmd_deletekey') + ' "' + extkey + '"',
			items: [
				{
					items: [
						new Ext.Container({
							xtype: 'displayfield',
							html: TYPO3.l10n.localize('deletekey_info'),
							labelWidth: 1,
							style: 'margin: 10px 5px;'
						})
					]
				}
			],
			buttons: [
				{
					text: 'delete',
					handler: function(button) {
						button.disable();
						this.deleteWindow.body.mask(TYPO3.l10n.localize('cmd_deletekey'));
						TYPO3.EMSOAP.ExtDirect.deleteExtensionKey(extkey, function(response) {
							if (response.success) {
								TYPO3.Flashmessage.display(TYPO3.Severity.ok, String.format(TYPO3.l10n.localize('deletekey_success'), response.key), '', 5);
								Ext.getCmp('em-userextgrid').store.load();
							} else {
								TYPO3.Flashmessage.display(TYPO3.Severity.error, String.format(TYPO3.l10n.localize('deletekey_fail'), response.key), response.message, 15);
							}
							this.deleteWindow.close();
						}, this)
					},
					scope: this
				}
			]
		}).show();
	}
});

Ext.reg('TYPO3.EM.UserTools', TYPO3.EM.UserTools);

/**
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */

Ext.ns('TYPO3.EM');

/** override mousedown for grid to select checkbox respecting singleSelect */
Ext.override(Ext.grid.CheckboxSelectionModel, {
	handleMouseDown: function(g, rowIndex, e) {
		e.stopEvent();
		if (this.isSelected(rowIndex)) {
			this.deselectRow(rowIndex);
		} else {
			this.selectRow(rowIndex, true);
			this.grid.getView().focusRow(rowIndex);
		}
	}
});

Ext.grid.DynamicColumnModelForLanguages = function(store){
	var cols = [];
	var recordType = store.recordType;
	var fields = recordType.prototype.fields;

	for (var i = 0; i < fields.keys.length; i++) {
		var fieldName = fields.keys[i];
		var field = recordType.getField(fieldName);

		if (i === 0) {
			cols[i] = {
				header: 'Extension',
				dataIndex: field.name,
				width: 200,
				fixed: true,
				sortable: false,
				hidable: false,
				menuDisabled: true,
				renderer: function(value, metaData, record, rowIndex, colIndex, store){
					metaData.css += ' extLangTitleWithIcon';
					return record.data.icon + ' <strong>' + value + '</strong>';
				}
			};
		} else if (i === 1 || i === 2 || i === 3) {
			//bypass
		} else {
			cols[i - 3] = {
				header: field.name,
				dataIndex: field.name,
				hidden: true,
				fixed: true,
				sortable: false,
				hidable: false,
				menuDisabled: true,
				renderer: function(value, metaData, record, rowIndex, colIndex, store) {
					if (value == TYPO3.l10n.localize('translation_checking')) {
						return '<span class="x-mask-loading">&nbsp;</span>' + value;
					}
					return '<span class="x-mask-loading">&nbsp;</span>' + value;;
				}
			};

		}
	}
	Ext.grid.DynamicColumnModelForLanguages.superclass.constructor.call(this, cols);
};
Ext.extend(Ext.grid.DynamicColumnModelForLanguages, Ext.grid.ColumnModel, {defaultWidth: 170});


TYPO3.EM.LanguagesSelectionModel  = new Ext.grid.CheckboxSelectionModel({
	singleSelect: false,
	header: '',
	dataIndex: 'selected',
	checkOnly: false

});

TYPO3.EM.LanguagesColumnModel = new Ext.grid.ColumnModel([
	TYPO3.EM.LanguagesSelectionModel, {
		id: 'lang-label',
		header: TYPO3.l10n.localize('lang_language'),
		sortable: true,
		menuDisabled: true,
		dataIndex: 'label',
		hidable: false,
		renderer: function(value, metaData, record, rowIndex, colIndex, store) {
			return '<span class="' + record.data.cls + '">&nbsp</span>' + value;
		}
	},{
		id: 'lang-key',
		header: TYPO3.l10n.localize('lang_short'),
		menuDisabled: true,
		sortable: true,
		dataIndex: 'lang',
		hidable: false
	}
]);

TYPO3.EM.LanguagesProgressBar = new Ext.ProgressBar ({
	id:  'langpb',
	cls: 'left-align',
	autoWidth: true,
	style: 'margin: 0 0 20px 0',
	animate: true,
	height: 20,
	hidden: true
});



TYPO3.EM.Languages = Ext.extend(Ext.FormPanel, {
	border:false,
	layout: 'form',
	id: 'em-labguage-modul',
	extCount: 0,
	fetchType: 0,
	extkeyArray : [],
	selectedLanguages: [],
	cb: null,

	initComponent: function() {
		var langExtStore = new Ext.data.DirectStore({
			storeId     : 'em-languageext-store',
			autoLoad	: false,
			directFn	: TYPO3.EM.ExtDirect.getInstalledExtkeys,
			root		: 'data',
			idProperty  : 'extkey',
			fields : [{name : 'extkey'},{name : 'icon'},{name: 'stype'}],
			baseParams: {
				repository: TYPO3.settings.EM.selectedRepository
			},
			listeners : {
				'load': function(store, records, options){
					if(records.length) {
						Ext.getCmp('lang-checkbutton').enable();
						Ext.getCmp('lang-updatebutton').enable();
						this.restoreExtLanguageGrid();
					}
					this.languageLoaded = true;
				},
				scope : this
			}

		});

		this.langStore = new Ext.data.DirectStore({
			storeId     : 'em-language-store',
			autoLoad	: false,
			directFn	: TYPO3.EM.ExtDirect.getLanguages,
			paramsAsHash: false,
			root		: 'data',
			idProperty  : 'lang',
			fields : [
				{name : 'lang', type : 'string'},
				{name : 'label', type : 'string'},
				{name : 'cls', type : 'string'},
				{name : 'selected', type: 'bool'}
			],
			listeners : {
				'load': function(store, records){
						// get selected languages and update selection and extGrid
					TYPO3.settings.LangLoaded = false;
					var a = [];
					for (var i=0; i<records.length; i++) {
						if(records[i].data.selected) {
							a.push(records[i]);
						}
					}
					TYPO3.EM.LanguagesSelectionModel.selectRecords(a);
					langExtStore.load();
					store.sort('label', 'ASC');
				},
				scope: this
			}
		});


		Ext.apply(this, {
			languagesLoaded: false,
			layout:'hbox',
			bodyStyle: 'padding: 10px 5px 0 5px;',
			layoutConfig: {
				align: 'stretch'
			},
			defaults: {
				border: false
			},
			items: [{
				width: 250,
				layout: 'fit',
				items: [{
					xtype: 'grid',
					id: 'em-languagegrid',
					stripeRows: true,
					store: this.langStore,
					cm: TYPO3.EM.LanguagesColumnModel,
					sm: TYPO3.EM.LanguagesSelectionModel,
					enableColumnMove: false,
					onRowClick: Ext.emptyFn,
					viewConfig: {
						forceFit: true
					}
				}]
			}, {
				flex: 1,
				layout: 'fit',
				items: [{
					xtype:'fieldset',
					//title: TYPO3.l10n.localize('translation_status'),
					collapsible: false,
					items: [
						TYPO3.EM.LanguagesActionPanel,
						{
							xtype: 'container',
							layout: 'hbox',
							height: 40,
							id: 'LanguagesActionPanel',
							layoutConfig: {
								align: 'stretch'
							},
							defaults: {
								border:false,
								flex: 1
							},
							items: [{
								xtype: 'button',
								text: TYPO3.l10n.localize('translation_check_status_button'),
								id: 'lang-checkbutton',
								margins: '0 10 10 0'
							}, {
								xtype: 'button',
								text: TYPO3.l10n.localize('translation_update_button'),
								id: 'lang-updatebutton',
								margins: '0 0 10 10'
							}]
						},
						TYPO3.EM.LanguagesProgressBar,
						{
					    	xtype: 'grid',
							id: 'em-extlanguagegrid',
							stripeRows: true,
							store: langExtStore,
							loadMask: {msg: TYPO3.l10n.localize('translation_refresh_languages')},
							enableColumnMove: false,
							enableHdMenu : false,
							autoheight: true,
							cm: new Ext.grid.DynamicColumnModelForLanguages(langExtStore),
							margins: '0 10 0 0',
							anchor: '100% -40',
							listeners: {
								render: this.onExtensionLangguageGridRender
							}
						}]
					}]
				}]
		});

			// call parent
		TYPO3.EM.Languages.superclass.initComponent.apply(this, arguments);
		this.langGrid = Ext.getCmp('em-languagegrid');
		this.langGrid.getSelectionModel().on('selectionchange', function(){
			if (this.languageLoaded) {
				this.langGrid.disable();
				this.saveSelection();
			}
		}, this);
		Ext.getCmp('lang-checkbutton').handler = this.langActionHandler.createDelegate(this);
		Ext.getCmp('lang-updatebutton').handler = this.langActionHandler.createDelegate(this);
	} ,

	onExtensionLangguageGridRender: function(grid) {
		grid.fetchingProcess = false;
		this.on('cellclick', function(grid, rowIndex, columnIndex, event) {
			if (!grid.fetchingProcess && columnIndex > 0) {
				var record = grid.store.getAt(rowIndex);
				var lang = grid.colModel.config[columnIndex].dataIndex;
				Ext.Msg.confirm(
					TYPO3.l10n.localize('menu_language_packges'),
					String.format(TYPO3.l10n.localize('translation_singleCheckQuestion'), lang, '<strong>' + record.data.extkey + '</strong>'),
					function(btn) {
						if (btn === 'yes') {
							this.waitBox = Ext.Msg.wait(
								String.format(TYPO3.l10n.localize('translation_singleCheck'), lang, '<strong>' + record.data.extkey + '</strong>'),
								TYPO3.l10n.localize('translation_checking')
							);
							TYPO3.EM.ExtDirect.fetchTranslations(record.data.extkey, 1, [lang], function(response) {
								if (response && Ext.isArray(response)) {
									record.set(lang, response[lang]);
									record.commit();
								} else {
									TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('extDirect_timeoutHeader'), TYPO3.l10n.localize('extDirect_timeoutMessage'), 5);
								}
								this.waitBox.hide()
							}, this);
						}
					},
					this
				);
			}
		}, this);
	},

	langActionHandler: function(button, event) {
		var languagegrid = Ext.getCmp('em-languagegrid');
		var buttonPanel = Ext.getCmp('LanguagesActionPanel');
		var progressBar = Ext.getCmp('langpb');
		var grid = Ext.getCmp('em-extlanguagegrid');

		buttonPanel.hide();
		progressBar.show();
		languagegrid.disable();


		if (button.id === 'lang-checkbutton') {
				// check languages
			this.startFetchLanguages(0, Ext.StoreMgr.get('em-languageext-store'), function(){
				TYPO3.EM.LanguagesProgressBar.updateText(this.interruptProcess ? TYPO3.l10n.localize('msg_interrupted') : TYPO3.l10n.localize('msg_finished'));
				(function() {
					progressBar.hide();
					buttonPanel.show();
					languagegrid.enable();
					grid.fetchingProcess = false;
				}).defer(1000, this);
				if (!this.interruptProcess) {
					TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('translation_checking_extension'), TYPO3.l10n.localize('translation_check_done'), 3);
					Ext.getCmp('em-extlanguagegrid').getSelectionModel().clearSelections();
				}
			});
		} else {
				// update languages
			this.startFetchLanguages(1, Ext.StoreMgr.get('em-languageext-store'), function(){
				TYPO3.EM.LanguagesProgressBar.updateText(this.interruptProcess ? TYPO3.l10n.localize('msg_interrupted') : TYPO3.l10n.localize('msg_finished'));
				if (!this.interruptProcess) {
					TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('translation_update_extension'), TYPO3.l10n.localize('translation_update_done'), 3);
					Ext.getCmp('em-extlanguagegrid').getSelectionModel().clearSelections();
				}
				progressBar.hide();
				buttonPanel.show();
				languagegrid.enable();
				grid.fetchingProcess = false;
			});
		}
	},

	getSelectedLanguages: function() {
		var selLanguages = this.langGrid.getSelectionModel().getSelections();
		this.selectedLanguages = [];
		if (selLanguages.length > 0 ) {
			for (var i=0; i<selLanguages.length; i++) {
				this.selectedLanguages.push(selLanguages[i].data.lang);
			}
		}
	},

	saveSelection: function() {
		if (this.languageLoaded === true) {
			this.getSelectedLanguages();
			TYPO3.EM.ExtDirect.saveLanguageSelection(this.selectedLanguages, function(response) {
				this.languageLoaded = false;
				if (response.success) {
					for (var i = 0; i < response.diff.length; i++) {
						record = this.langStore.getById(response.diff[i]);
						this.addRemoveExtLanguageGridColumn(record.data);
						if (response.dir > 0) {
								// Languages were added
							this.langGrid.getSelectionModel().selectRow(this.langGrid.store.indexOf(record), true);
						} else {
								// Languages were removed
							this.langGrid.getSelectionModel().deselectRow(this.langGrid.store.indexOf(record), true);
						}
					}
				} else {
					// Action not possible because of dependencies
					// Select all languages saved again and output the message
					for (var i = 0; i < response.languages.length; i++) {
						record = this.langStore.getById(response.languages[i]);
						this.langGrid.getSelectionModel().selectRow(this.langGrid.store.indexOf(record), true);
					}
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('translation_settings'), TYPO3.l10n.localize('translation_selection_impossible'), 5);
					this.langGrid.enable();
				}
				this.languageLoaded = true;
			}, this);
			if (this.selectedLanguages.length) {
				Ext.getCmp('lang-checkbutton').enable();
				Ext.getCmp('lang-updatebutton').enable();
			} else {
				Ext.getCmp('lang-checkbutton').disable();
				Ext.getCmp('lang-updatebutton').disable();
			}
		}
	},

	startFetchLanguages: function(type, store, callback) {
		this.fetchType = type;
		this.extCount = store.data.items.length;
		this.cb = callback;


			// fill arrays
		this.extkeyArray = [];
		for (var i = 0; i < this.extCount; i++) {
			this.extkeyArray.push(store.data.items[i].data.extkey);
		}
		if (!this.selectedLanguages.length) {
			this.getSelectedLanguages();
		}
			// start process
		this.interruptProcess = false;
		Ext.getCmp('em-extlanguagegrid').fetchingProcess = true;
		this.fetchLanguage();
	},

	fetchLanguage: function(response) {
		var grid = Ext.getCmp('em-extlanguagegrid');
		var row = this.extCount - this.extkeyArray.length;
		var record = grid.store.getAt(row);
		var i;


		if (response) {
				// update fetched record
			var fetchedRecord = grid.store.getAt(row - 1);
			for (i = 0; i < this.selectedLanguages.length; i++) {
				fetchedRecord.set(this.selectedLanguages[i], response[this.selectedLanguages[i]]);
    		}
    		fetchedRecord.commit();
		}

		if(this.extkeyArray.length > 0 && !this.interruptProcess) {
			var ext = this.extkeyArray.shift();


			//update Grid
			grid.getView().focusRow(row);
			grid.getSelectionModel().selectRow(row);
			for (i = 0; i < this.selectedLanguages.length; i++) {
				record.set(this.selectedLanguages[i], '<span class="loading-indicator"></span>' + TYPO3.l10n.localize('translation_checking'));
			}
			record.commit();
			var prefix = TYPO3.l10n.localize('msg_checking');
			if (this.fetchType === 1) {
				prefix = TYPO3.l10n.localize('msg_updating');
			}
			// update Progressbar
			Ext.getCmp('langpb').updateProgress(
				(row + 1) / this.extCount,
				prefix+ ': ' +
					String.format(TYPO3.l10n.localize('translation_fetch_extension'), ext, (row+1), this.extCount));

			// fetch language request
			TYPO3.EM.ExtDirect.fetchTranslations(ext, this.fetchType, this.selectedLanguages, function(response) {
				this.fetchLanguage(response);
			}, this);
		} else {
				// finished
			Ext.getCmp('lang-checkbutton').enable();
			Ext.getCmp('lang-updatebutton').enable();
			Ext.getCmp('em-extlanguagegrid').getSelectionModel().clearSelections();
			// call callback
			this.cb();
		}
	},


	restoreExtLanguageGrid: function() {

		var extLangGrid = Ext.getCmp('em-extlanguagegrid');
		var i;

		var selLanguages = Ext.getCmp('em-languagegrid').getSelectionModel().getSelections();
		var columns = extLangGrid.getColumnModel();
		var count = columns.getColumnCount();

		if (selLanguages.length > 0 ) {
			for (i=0; i < selLanguages.length; i++) {
				this.addRemoveExtLanguageGridColumn(selLanguages[i].data);
			}
		}
	},

	addRemoveExtLanguageGridColumn: function(record) {
		var extLangGrid = Ext.getCmp('em-extlanguagegrid');
		var columns = extLangGrid.getColumnModel();
		var index = columns.getIndexById(record.lang);

		if (index === -1) {
			extLangGrid.addColumn({
				name: record.lang,
				defaultValue: TYPO3.l10n.localize('translation_status_notchecked')
			}, {
				header: '<span class="' + record.cls + '">&nbsp</span>' + record.label,
				dataIndex: record.lang,
				id: record.lang,
				css: 'cursor:pointer;',
				tooltip: TYPO3.l10n.localize('translation_singleCheckTip')
			});
		} else {
			columns.removeColumn(index);
		}
		this.langGrid.enable();
	},

	afterRender: function() {
			// call parent
		TYPO3.EM.Languages.superclass.afterRender.apply(this, arguments);
			//The following are all of the possible keys that can be implemented: enter, left, right, up, down, tab, esc, pageUp, pageDown, del, home, end
		this.progressNavigation = new Ext.KeyNav(this.getEl(),{
			'esc': function() {
				this.interruptProcess = true;
			},
			scope: this
		});


	}
});
Ext.reg('extlanguages', TYPO3.EM.Languages);

/**
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */

Ext.ns('TYPO3.EM');

TYPO3.EM.Settings = Ext.extend(Ext.FormPanel, {
	border: false,
	labelWidth: 240,
	bodyStyle: 'padding:5px 5px 0',

	initComponent: function() {

		this.repositoryStore = new Ext.data.DirectStore({
			storeId: 'repositoriessettings',
			directFn: TYPO3.EM.ExtDirect.getRepositories,
			idProperty: 'uid',
			root: 'data',
			totalProperty: 'length',
			fields : ['title', 'uid', 'updated', 'count', 'selected', 'description', 'wsdl_url', 'mirror_url'],
			paramsAsHash: true,
			listeners: {
				load: function(store) {
					if (this.isLoaded) {
						record = store.getById(TYPO3.settings.EM.selectedRepository).data;
						this.repositoryInfo(record);
					}
				},
				scope: this
			}
		});

		this.repSettingsCombo = new Ext.form.ComboBox({
			id: 'repSettingsCombo',
			mode: 'local',
			width: 300,
			triggerAction: 'all',
			forceSelection: true,
			editable: false,
			name: 'selectedRepository',
			hiddenName: 'selectedRepository',
			displayField: 'title',
			valueField: 'uid',
			store: this.repositoryStore,
			fieldLabel: TYPO3.l10n.localize('repository_select'),
			listeners: {
				scope: this,
				select: function(comboBox, newValue, oldValue) {
					TYPO3.settings.EM.selectedRepository = newValue.data.uid;
					this.repositoryInfo(newValue.data);
					TYPO3.EM.ExtDirect.saveSetting('selectedRepository', newValue.data.uid);
				}
			}
		});

		var mirrorData = TYPO3.settings.EM.extMirrors;

		this.mirrorStore = new Ext.data.DirectStore({
			storeId: 'em-mirror-store',
			directFn: TYPO3.EM.ExtDirect.getMirrors,
			idProperty: 'host',
			root: 'data',
			totalProperty: 'length',
			fields: [
				{name : 'title'},
				{name : 'country'},
				{name : 'host'},
				{name : 'path'},
				{name : 'sponsor'},
				{name : 'link'},
				{name : 'logo'}
			]
		});



		var mirrorSm  = new Ext.grid.CheckboxSelectionModel({
			singleSelect: true,
			header: '',
			listeners: {
				'selectionchange': function(selectionModel) {
					var selectedMirror = '';
					if (selectionModel.getSelected()) {
						var sel = selectionModel.getSelected();
						selectedMirror = sel.data.host;
						this.getForm().setValues({selectedMirror: selectedMirror});
					} else {
						this.getForm().setValues({selectedMirror: ''});
					}
					TYPO3.EM.ExtDirect.saveSetting('selectedMirror', selectedMirror);
				},
				scope: this
			}
		});

		var mirrorCm = new Ext.grid.ColumnModel([
			mirrorSm,
			{
				id: 'mirror-title',
				header: TYPO3.l10n.localize('mirror'),
				width: 200,
				sortable: false,
				menuDisabled: true,
				fixed: true,
				dataIndex: 'title',
				hidable: false
			},{
				id: 'mirror-country',
				header: TYPO3.l10n.localize('mirror_country'),
				width: 80,
				sortable: false,
				menuDisabled: true,
				fixed: true,
				dataIndex: 'country',
				hidable: false
			},{
				id: 'mirror-host',
				header: TYPO3.l10n.localize('mirror_url'),
				width: 180,
				sortable: false,
				menuDisabled: true,
				fixed: true,
				dataIndex: 'host',
				hidable: false
			},{
				id: 'mirror-sponsor',
				header: TYPO3.l10n.localize('mirror_sponsored_by'),
				width: 180,
				sortable: false,
				menuDisabled: true,
				fixed: true,
				dataIndex: 'sponsor',
				hidable: false

			},{
				id: 'mirror-logo',
				header: TYPO3.l10n.localize('mirror_logo_link'),
				width: 180,
				sortable: false,
				menuDisabled: true,
				fixed: true,
				dataIndex: 'logo',
				hidable: false,
				renderer: function(value, metaData, record, rowIndex, colIndex, store) {
					if (value == '') {
						return ''
					} else {
						return '<a href="' + record.data.link + '" title="' + record.data.sponsor + '" target="_blank"><img src="' + record.data.logo + '" alt="' + record.data.sponsor + '" title="' + record.data.sponsor + '" /></a>';
					}
				}
			}
		]);

		Ext.apply(this, {
			isLoaded: false,
			items: [{
				layout: 'hbox',
				align: 'stretchmax',
				border: false,
				id: 'hbox-settings',
				bodyStyle: 'padding-top: 10px;overflow: auto;',
				items: [{
					width: 450,
					border: false,
					labelWidth: 100,
					items: [{
							xtype:'fieldset',
							title: TYPO3.l10n.localize('repositories'),
							collapsible: false,
							defaultType: 'textfield',
							height: 300,
							items :[
								this.repSettingsCombo,
							{
								title: TYPO3.l10n.localize('repository_details'),
								xtype: 'panel',
								layout: 'fit',
								id: 'repDescriptionDisplay',
								record: null,
								labelWidth: 0,
								width: 420,
								height: 245,
								html: '',
								bodyStyle: 'padding: 10px;',
								buttons: [{
									text: TYPO3.l10n.localize('cmd_create'),
									iconCls: 'x-btn-new',
									ref: '../newRep',
									handler: function() {
										var win = new TYPO3.EM.EditRepository({
											isCreate: true,
											title: TYPO3.l10n.localize('repository_create')
										}).show();
									},
									scope: this
								}, ' ', {
									text: TYPO3.l10n.localize('cmd_edit'),
									iconCls: 'x-btn-edit',
									ref: '../editRep',
									handler: function() {
										var record = this.repositoryStore.getById(this.repSettingsCombo.getValue());
										var win = new TYPO3.EM.EditRepository({
											title: String.format(TYPO3.l10n.localize('repository_edit'), record.data.title)
										});
										win.getComponent('repForm').getForm().setValues({
											'title': record.data.title,
											'description': record.data.description,
											'wsdl_url': record.data.wsdl_url,
											'mirror_url': record.data.mirror_url,
											'rep':  record.data.uid
										});
										win.show();
									},
									scope: this
								}, ' ', {
									text: TYPO3.l10n.localize('cmd_delete'),
									iconCls: 'x-btn-delete',
									ref: '../deleteRep',
									handler: function() {
										var record = this.repositoryStore.getById(this.repSettingsCombo.getValue());
										var wait = Ext.MessageBox.wait(TYPO3.l10n.localize('repository_deleting'), record.data.title);
										TYPO3.EM.ExtDirect.deleteRepository(record.data.uid, function(response) {
											if (response.success !== true) {
												TYPO3.Flashmessage.display(TYPO3.Severity.error, 'Invalid', action.result.error, 5);
											} else {
												TYPO3.Flashmessage.display(TYPO3.Severity.ok, TYPO3.l10n.localize('repository_delete'), String.format(TYPO3.l10n.localize('repository_deleted'), record.data.title), 5);
												TYPO3.settings.EM.selectedRepository = 1;
												this.repSettingsCombo.setValue(1);
												this.repositoryStore.load({
													callback: function() {
														this.repSettingsCombo.fireEvent('select', this.repSettingsCombo, this.repositoryStore.getById(1), 0);
													},
													scope: this
												});

											}
											wait.hide();
										}, this);
									},
									scope: this
								}]
							}]
						},
						{
							xtype:'fieldset',
							title: TYPO3.l10n.localize('user_settings'),
							collapsible: false,
							defaults: {},
							defaultType: 'textfield',
							items :[
							{
								fieldLabel: TYPO3.l10n.localize('enter_repository_username'),
								name: 'fe_u'
							}, {
								fieldLabel: TYPO3.l10n.localize('enter_repository_password'),
								inputType: 'password',
								name: 'fe_p'
							},
								new Ext.Container({
									html: '<b>' + TYPO3.l10n.localize('notice') + '</b> ' + TYPO3.l10n.localize('repository_password_info'),
									xtype: 'displayfield',
									labelWidth: 1
								})
							],
							buttons: [
								{
									text: TYPO3.l10n.localize('cmd_save'),
									iconCls: 'x-btn-save',
									handler: function() {
										this.saveFormHandler();
									},
									scope: this
								}
							]
						}]
					}, {
						flex: 1,
						border: false,
						xtype:'fieldset',
						title: TYPO3.l10n.localize('mirror_selection'),
						collapsible: false,
						autoHeight:true,
						items :[{
							anchor: '100% 100%',
							xtype: 'grid',
							id: 'em-mirrorgrid',
							stripeRows: true,
							store: this.mirrorStore,
							cm: mirrorCm,
							sm: mirrorSm,
							autoHeight: true
						},{
							xtype: 'hidden',
							name: 'selectedMirror'
						}]
					}]
				}]
		});


		// call parent
		TYPO3.EM.Settings.superclass.initComponent.apply(this, arguments);

	} ,

	saveFormHandler: function() {
		this.getForm().submit({
			waitMsg : TYPO3.l10n.localize('action_saving_settings'),
			success: function(form, action) {
				TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('menu_settings'), TYPO3.l10n.localize('settingsSaved'), 5);
				TYPO3.settings.EM.hasCredentials = (action.result.data.fe_u !== '' && action.result.data.fe_p !== '');
					// enable/disable user extension tab
				if (TYPO3.settings.EM.hasCredentials) {
					Ext.getCmp('em-main').items.items[4].enable();
				} else {
					Ext.getCmp('em-main').items.items[4].disable();
				}
			},
			failure: function(form, action) {
				if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
					TYPO3.Flashmessage.display(TYPO3.Severity.error, 'Error',
							'Status:'+action.response.status+': '+
							action.response.statusText, 5);
				}
				if (action.failureType === Ext.form.Action.SERVER_INVALID){
					// server responded with success = false
					TYPO3.Flashmessage.display(TYPO3.Severity.error, 'Invalid', action.result.errormsg, 5);
				}
			}

		});
	},

	repositoryInfo: function(record) {
		var panel = Ext.getCmp('repDescriptionDisplay');
		panel.update([
			'<h1 class="h1Panel">', record.title, '</h1>',
			'<p class="panelDescription">', record.description, '</p>',
			'<p><b>', TYPO3.l10n.localize('mirror_url_long'), ': ', '</b>', record.mirror_url, '<br />',
			'<b>', TYPO3.l10n.localize('wsdlUrl'), ': ', '</b>', record.wsdl_url, '</p>'
		].join(''));
		if (record.uid == 1) {
			panel.editRep.disable();
			panel.deleteRep.disable();
		} else {
			panel.editRep.enable();
			panel.deleteRep.enable();
		}
		this.mirrorStore.load({
			params: {
				repository: this.repSettingsCombo.getValue()
			},
			callback: function() {
				var mirror = this.getForm().getValues().selectedMirror;
				if (mirror) {
					var record = this.mirrorStore.getAt(this.mirrorStore.find('host', mirror));
					Ext.getCmp('em-mirrorgrid').getSelectionModel().selectRecords([record]);
				} else {
					Ext.getCmp('em-mirrorgrid').getSelectionModel().selectFirstRow();
				}
			},
			scope: this
		});

	},


	onRender:function() {

		// call parent
		TYPO3.EM.Settings.superclass.onRender.apply(this, arguments);

		Ext.apply(this.getForm(),{
			api: {
				load: TYPO3.EM.ExtDirect.settingsFormLoad,
				submit: TYPO3.EM.ExtDirect.settingsFormSubmit
			},
			paramsAsHash: false
		});

		this.repositoryStore.load({
			callback: function() {
				this.getForm().load({
					success: function(form, response) {
						record = this.repositoryStore.getById(TYPO3.settings.EM.selectedRepository);
						if (record) {
							this.repSettingsCombo.setValue(TYPO3.settings.EM.selectedRepository);
							this.repositoryInfo(record.data);
							this.isLoaded = true;
						}
					},
					scope: this
				});
			},
			scope: this
		});

	}




});

// register xtype
Ext.reg('extsettings', TYPO3.EM.Settings);

// window with repository edit/create form
TYPO3.EM.EditRepository = Ext.extend(Ext.Window, {
	isCreate: false,
	width: 500,
	height: 260,
	layout: 'fit',
	frame: true,
	resizable: false,
	modal: true,
	caller: null,
	initComponent : function() {
		var form = new Ext.form.FormPanel({
			//baseCls: 'x-plain',
			border: false,
			labelWidth: 80,
			itemId: 'repForm',
			bodyStyle:'padding:5px 5px 0',
			width: 350,
			defaults: {width: 380},
			defaultType: 'textfield',
			api: {
				submit: TYPO3.EM.ExtDirect.repositoryEditFormSubmit
			},
			paramsAsHash: false,
			items: [{
				itemId: 'title',
				fieldLabel: TYPO3.l10n.localize('extInfoArray_title'),
				name: 'title',
				allowBlank: false
			}, {
				itemId: 'description',
				fieldLabel: TYPO3.l10n.localize('extInfoArray_description'),
				xtype: 'textarea',
				name: 'description',
				height: 100
			}, {
				itemId: 'mirror_url',
				fieldLabel: TYPO3.l10n.localize('mirror_url_long'),
				name: 'mirror_url'
			}, {
				itemId: 'wsdl_url',
				fieldLabel: TYPO3.l10n.localize('wsdlUrl'),
				name: 'wsdl_url',
				allowBlank: false
			}, {
				xtype: 'hidden',
				name: 'create',
				value: this.isCreate ? 1 : 0
			}, {
				xtype: 'hidden',
				name: 'rep',
				value: 0
			}]
		});

		Ext.apply(this, {
			items: form,
			buttons : [{
				text: TYPO3.l10n.localize('cmd_create'),
				iconCls: 'x-btn-save',
				handler: function() {
					this.repositoryUpdate(form, 1);
				},
				hidden: !this.isCreate,
				scope: this
			}, {
				text: TYPO3.l10n.localize('cmd_update'),
				iconCls: 'x-btn-save',
				handler: function() {
				  this.repositoryUpdate(form, 0);
				},
				hidden: this.isCreate,
				scope: this
			}, {
				text: TYPO3.l10n.localize('cmd_cancel'),
				iconCls: 'x-btn-cancel',
				handler: function() {
					this.close();
				},
				scope: this
			}]
		});
		TYPO3.EM.EditRepository.superclass.initComponent.call(this);
	},

	repositoryUpdate: function(form, type) {
		form.getForm().submit({
			waitMsg : type === 0 ? TYPO3.l10n.localize('repository_saving') : TYPO3.l10n.localize('repository_creating'),
			success: function(form, action) {
				TYPO3.Flashmessage.display(TYPO3.Severity.information, TYPO3.l10n.localize('repository'), type == 0
						? String.format(TYPO3.l10n.localize('repository_saved'), action.result.params.title)
						: String.format(TYPO3.l10n.localize('repository_saved'), action.result.params.title)
						, 5);
				Ext.StoreMgr.get('repositoriessettings').load();
				this.close();
			},
			failure: function(form, action) {
				if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_error'),
							TYPO3.l10n.localize('msg_status') + ':' + action.response.status + ': ' +
							action.response.statusText, 5);
				}
				if (action.failureType === Ext.form.Action.SERVER_INVALID){
					// server responded with success = false
					TYPO3.Flashmessage.display(TYPO3.Severity.error, TYPO3.l10n.localize('msg_invalid'), action.result.errormsg, 15);
				}
			},
			scope: this
		});
	}

});

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2010 Steffen Kamper <info@sk-typo3.de>
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
 * ExtJS for the extension manager.
 *
 *
 * @author Steffen Kamper <info@sk-typo3.de>
 * @package TYPO3
 * @subpackage extension manager
 */
Ext.ns('TYPO3.EM', 'TYPO3.EM.ExtDirect');

Ext.onReady(function() {
		//save states in BE_USER->uc
	Ext.state.Manager.setProvider(new TYPO3.state.ExtDirectProvider({
		key: 'moduleData.tools_em.States',
		autoRead: false
	}));

	if (Ext.isObject(TYPO3.settings.EM.States)) {
		Ext.state.Manager.getProvider().initState(TYPO3.settings.EM.States);
	}

	Ext.QuickTips.init();
	TYPO3.EM.ImportWindow = null;

		// fire app
	var EM = new TYPO3.EM.App.init();
});

TYPO3.EM.AdditionalApplicationItems = [];

TYPO3.EM.App = {
	refreshLocalList: false,
	loadingIndicor: '<div class="loading-indicator">' + TYPO3.l10n.localize('action_loading') + '</div>',

	categoryLabels : [
			TYPO3.l10n.localize('category_BE'),
			TYPO3.l10n.localize('category_BE_modules'),
			TYPO3.l10n.localize('category_FE'),
			TYPO3.l10n.localize('category_FE_plugins'),
			TYPO3.l10n.localize('category_miscellanous'),
			TYPO3.l10n.localize('category_services'),
			TYPO3.l10n.localize('category_templates'),
			'',
			TYPO3.l10n.localize('category_documentation'),
			TYPO3.l10n.localize('category_examples')
	],

	init : function() {

		TYPO3.settings.EM.selectedRepository = TYPO3.settings.EM.selectedRepository || 1;
		var items = [
			TYPO3.EM.LocalListTab,
			TYPO3.EM.RepositoryListTab,
			TYPO3.EM.LanguageTab,
			TYPO3.EM.SettingsTab
		];
		if (TYPO3.settings.EM.displayMyExtensions == 1) {
			items.push(TYPO3.EM.UserTab)
		}

		if (TYPO3.EM.AdditionalApplicationItems.length) {
			items.push(TYPO3.EM.AdditionalApplicationItems);
		}

		this.appPanel = new Ext.TabPanel( {
			renderTo : 'em-app',
			id: 'em-main',
			layoutOnTabChange: true,
			plain: true,
			activeTab: 0,
			stateful: true,
			stateId: 'mainTab',
			stateEvents:['tabchange'],
			autoScroll: true,
			tabPosition: 'top',
			enableTabScroll: true,
			autoWidth: true,
			defaults: {
				layout: 'fit'
			},
			getState: function() {
				return {
					activeTab: this.items.indexOf(this.getActiveTab())
				};
			},
			items : items,
			plugins: [new Ext.ux.plugins.FitToParent()]
		});
	},

	getCategoryLabel: function(index) {
		return this.categoryLabels[parseInt(index, 10)];
	}
};

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
