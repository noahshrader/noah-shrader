function fadeTop(){var t=$(".welcome"),o=$(this).scrollTop();t.css({opacity:1-o/320}),t.css("opacity")<=0?t.addClass("hide"):t.removeClass("hide")}function noahScroll(){scrollPos=$(this).scrollTop(),$(".noah").css({"background-position":"50% "+(-scrollPos/40+20)+"px"})}function atTop(){var t=$(".projects").offset().top;$(window).scrollTop()>=t?$(".project-nav").addClass("active"):$(".project-nav").removeClass("active")}function atBottom(){var t=$(".project-feature.last").offset().top;$(window).scrollTop()>=t?$(".project-nav").addClass("hide"):$(".project-nav").removeClass("hide")}!function($,t,o,n){var i=function(n,i){this.elem=n,this.$elem=$(n),this.options=i,this.metadata=this.$elem.data("plugin-options"),this.$win=$(t),this.sections={},this.didScroll=!1,this.$doc=$(o),this.docHeight=this.$doc.height()};i.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=$.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",$.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",$.proxy(this.getPositions,this)),this},adjustNav:function(t,o){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),o.addClass(t.config.currentClass)},bindInterval:function(){var t=this,o;t.$win.on("scroll.onePageNav",function(){t.didScroll=!0}),t.t=setInterval(function(){o=t.$doc.height(),t.didScroll&&(t.didScroll=!1,t.scrollChange()),o!==t.docHeight&&(t.docHeight=o,t.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var t=this,o,n,i;t.$nav.each(function(){o=t.getHash($(this)),i=$("#"+o),i.length&&(n=i.offset().top,t.sections[o]=Math.round(n))})},getSection:function(t){var o=null,n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var i in this.sections)this.sections[i]-n<t&&(o=i);return o},handleClick:function(o){var n=this,i=$(o.currentTarget),s=i.parent(),e="#"+n.getHash(i);s.hasClass(n.config.currentClass)||(n.config.begin&&n.config.begin(),n.adjustNav(n,s),n.unbindInterval(),n.scrollTo(e,function(){n.config.changeHash&&(t.location.hash=e),n.bindInterval(),n.config.end&&n.config.end()})),o.preventDefault()},scrollChange:function(){var t=this.$win.scrollTop(),o=this.getSection(t),n;null!==o&&(n=this.$elem.find('a[href$="#'+o+'"]').parent(),n.hasClass(this.config.currentClass)||(this.adjustNav(this,n),this.config.scrollChange&&this.config.scrollChange(n)))},scrollTo:function(t,o){var n=$(t).offset().top;$("html, body").animate({scrollTop:n},this.config.scrollSpeed,this.config.easing,o)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},i.defaults=i.prototype.defaults,$.fn.onePageNav=function(t){return this.each(function(){new i(this,t).init()})}}(jQuery,window,document),$(function(){$(".welcome .work-link").click(function(){$("html, body").animate({scrollTop:$(".projects").offset().top},600)}),$(".welcome .notes-link").click(function(){$("html, body").animate({scrollTop:$(".notes").offset().top},600)}),$(".welcome .contact-link").click(function(){$("html, body").animate({scrollTop:$(".contact").offset().top},600)}),$("#nav").onePageNav(),fadeTop(),noahScroll(),atTop(),atBottom(),$(window).scroll()}),$(window).on("scroll",function(){fadeTop(),noahScroll(),atTop(),atBottom()});