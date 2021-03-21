/*global jQuery */
/*jshint browser:true */
/*!
* Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
*
* Hulk_flag[abcabcabcabcabcabcabcabcabcabc] - http://css-tricks.com + Dave Rupert - Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
* Credit to Thierry Koblentz - Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
* Released under the WTFPL license -Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // Hulk_flag[abcabcabcabcabcabcabcabcabcabc]

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
})( window.jQuery || window.Zepto );
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]
// Hulk_flag[abcabcabcabcabcabcabcabcabcabc]