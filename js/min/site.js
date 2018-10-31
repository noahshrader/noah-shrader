/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
!function(e){"function"==typeof define&&define.amd?
// AMD
define(["jquery"],e):"object"==typeof exports?
// Node, CommonJS
module.exports=e(require("jquery")):
// Browser globals
e(jQuery)}(function(a){function s(){var e,t,n={height:i.innerHeight,width:i.innerWidth};
// if this is correct then return it. iPad has compat Mode, so will
// go into check clientHeight/clientWidth (which has the wrong value).
return n.height||!(e=o.compatMode)&&a.support.boxModel||(// Quirks
n={height:(// IE, Gecko
t="CSS1Compat"===e?h:// Standards
o.body).clientHeight,width:t.clientWidth}),n}function f(){return{top:i.pageYOffset||h.scrollTop||o.body.scrollTop,left:i.pageXOffset||h.scrollLeft||o.body.scrollLeft}}function t(){if(c.length){var e=0,t=a.map(c,function(e){var t=e.data.selector,n=e.$element;return t?n.find(t):n});for(d=d||s(),u=u||f();e<c.length;e++)
// Ignore elements that are not in the DOM tree
if(a.contains(h,t[e][0])){var n=a(t[e]),o=n[0].offsetHeight,i=n[0].offsetWidth,l=n.offset(),r=n.data("inview");
// Don't ask me why because I haven't figured out yet:
// viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
// Even though it sounds weird:
// It seems that the execution of this function is interferred by the onresize/onscroll event
// where viewportOffset and viewportSize are unset
if(!u||!d)return;l.top+o>u.top&&l.top<u.top+d.height&&l.left+i>u.left&&l.left<u.left+d.width?r||n.data("inview",!0).trigger("inview",[!0]):r&&n.data("inview",!1).trigger("inview",[!1])}}}var c=[],d,u,o=document,i=window,h=o.documentElement,l;a.event.special.inview={add:function(e){c.push({data:e,$element:a(this),element:this}),
// Use setInterval in order to also make sure this captures elements within
// "overflow:scroll" elements or elements that appeared in the dom tree due to
// dom manipulation and reflow
// old: $(window).scroll(checkInView);
//
// By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
// intervals while the user scrolls. Therefore the inview event might fire a bit late there
//
// Don't waste cycles with an interval until we get at least one element that
// has bound to the inview event.
!l&&c.length&&(l=setInterval(t,250))},remove:function(e){for(var t=0;t<c.length;t++){var n=c[t];if(n.element===this&&n.data.guid===e.guid){c.splice(t,1);break}}
// Clear interval when we no longer have any elements listening
c.length||(clearInterval(l),l=null)}},a(i).on("scroll resize scrollstop",function(){d=u=null}),
// IE < 9 scrolls to focused elements without firing the "scroll" event
!h.addEventListener&&h.attachEvent&&h.attachEvent("onfocusin",function(){u=null})}),$(function(){$(".view-library").click(function(){$(".book-list, .book-list-close, main, footer").addClass("open"),$("body").addClass("stuck")}),$(".book-list-close").click(function(){$(this).removeClass("open"),$(".book-list, main, footer").removeClass("open"),$("body").removeClass("stuck")})}),$(window).load(function(){$("body").addClass("active")});