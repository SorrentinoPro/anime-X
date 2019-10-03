/*!==================================================================================*\
	|	  @ Title       :         Anime-X -> animeX.js -> animeX.css                  |
	|	  @ Version     :           0.0.1 -> Stable                                   |
	|     @ Copyright   :  (C) 11/02/2015 -> Francesco Sorrentino                     |
	|     @ Contact     :           Email -> francesco@sorrentino.ga                  |
	|     @ Website     :             URL -> https://sorrentino.ga                    |
	|     @ Dependencies:          jQuery -> v1.1.8 +                                 |
	|      This program is free software: you can redistribute it and/or modify       |
	|      it under the terms of the GNU General Public License as published by       |
	|      the Free Software Foundation, either version 3 of the License, or          |
	|      (at your option) any later version.                                        |
	|                                                                                 |
	|      This program is distributed in the hope that it will be useful,            |
	|      but WITHOUT ANY WARRANTY; without even the implied warranty of             |
	|      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the              |
	|      GNU General Public License for more details.                               |
	|                                                                                 |
	|      You should have received a copy of the GNU General Public License          |
	|      along with this program.  If not, see <http://www.gnu.org/licenses/>.      |
\*======\Animation-X/================================================================*/
jQuery(document).ready(function($){ 
	(function($) {
		$.fn.visible = function(partial) {
			
			var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
			
			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
			
		};
		
	})(jQuery);
	
	var win = $(window);
	
	//==========\Left slide/==================
	var leftMotion = $(".x-left");
	leftMotion.each(function(i, el) {
		var el = $(el);
		console.log(el);
		if (el.visible(true)) {
			el.addClass("motion-visible"); 
			console.log(el);
		} 
	});
	//==========\Right slide/==================
	var rightMotion = $(".x-right");
	rightMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("motion-visible"); 
		} 
	});
	//==========\Top slide/==================
	var topMotion = $(".x-top");
	topMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("motion-visible"); 
		} 
	});
	//==========\Bottom slide/==================
	var bottomMotion = $(".x-bottom");
	bottomMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("motion-visible"); 
		} 
	});
	//==========\Scale/==================
	var scaleMotion = $(".x-scale");
	scaleMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("scale-visible"); 
		} 
	});
	//==========\Fade/==================
	var fadeMotion = $(".x-fade");
	fadeMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("scale-visible"); 
		} 
	});
	//==========\Spin/==================
	var spinMotion = $(".x-spin");
	spinMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("spin-visible"); 
		} 
	});
	//==========\SkewX/==================
	var skewXMotion = $(".x-skewX");
	skewXMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("skewX-visible"); 
		} 
	});
	//==========\SkewY/==================
	var skewYMotion = $(".x-skewY");
	skewYMotion.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("skewY-visible"); 
		} 
	});
	
	
	win.scroll(function(event) { 
		leftMotion.each(function(i, el) {
			var el = $(el);
			console.log(i);
			if (el.visible(true)) {
				el.addClass("motion-left"); 
				} else {
				el.removeClass("motion-left motion-visible");
			} 
		});
		
		rightMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-right"); 
				} else {
				el.removeClass("motion-right motion-visible");
			} 
		});
		
		topMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-top"); 
				} else {
				el.removeClass("motion-top motion-visible");
			} 
		});
		
		bottomMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-bottom"); 
				} else {
				el.removeClass("motion-bottom motion-visible");
			} 
		});
		
		scaleMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-scale"); 
				} else {
				el.removeClass("motion-scale scale-visible");
			} 
		});
		
		fadeMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-fade"); 
				} else {
				el.removeClass("motion-fade fade-visible");
			} 
		});
		
		spinMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-spin"); 
				} else {
				el.removeClass("motion-spin spin-visible");
			} 
		});
		
		skewXMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-skewX"); 
				} else {
				el.removeClass("motion-skewX skewX-visible");
			} 
		});
		
		skewYMotion.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("motion-skewY"); 
				} else {
				el.removeClass("motion-skewY skewY-visible");
			} 
		});
	});
	
});