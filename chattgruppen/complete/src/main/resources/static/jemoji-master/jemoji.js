if (typeof(jQuery) === 'undefined') { 
  throw new Error('jEmoji requires jQuery');
}

(function($) {

  var jemoji = function ($el, options) {

    var _this = this;

    this._icons = [
      'smilegrin', 'smilerelieved', 'smileopenmouth', 'smileopenmouthsmilingeyes', 'smiletightlyclosedeyes', 'smileyheartshapedeyes', 'smilingeyescoldsweat', 'smilingfacewithsmileyeyes', 'smiletearsofjoy', 'smilewink', 'smileyummy', 'smileheart', 'smileythumbsup', 'salsasangria1', 'salsasangria2', 'smileypoo'
    ];

    this._language = {
      'es':     {
        'arrow':    '&#8592; / &#8594; para navegar',
        'select':   '&#8629; para seleccionar',
        'esc':      'esc para cerrar',
        'close':    'Cerrar'
      },
      'en':     {
        'arrow':    '&#8592; / &#8594; to navigate',
        'select':   'blank space to select',
        'esc':      'esc to dismiss',
        'close':    'Close'
      }
    };

    // Default options
    this._defaults = {
      icons:          undefined,          // Custom icons. Default is undefined.
      extension:      'png',              // Icons type. Default is png.
      folder:         'images/emojis/',   // Emoji images folder. Default is 'images/emojis'.
      container:      undefined,          // Container to append menu. Default is 'undefined'.
      btn:            undefined,          // Dom element for opening emoji menu. Default is 'undefined'.
      navigation:     true,               // Navigation keys. Default is 'true'.
      language:       'en',               // Info messages language. Default is 'en'.
      theme:          'red',             // Style theme. Default is 'blue'.
      resize:         undefined           // Resize function. Default is undefined.
    };

    this._options = $.extend(true, {}, this._defaults, options);

    // Custom icons
    if (typeof(this._options.icons) !== 'undefined') {
      this._icons = this._options.icons;
    }

    /**
     * Get/Set plugin options
     * @param  {json} options Plugin options
     * @return {json}         Current plugin options
     */
    this.options = function (options) {
      return (options) ? $.extend(true, this._options, options) : this._options;
    };

    /**
     * Return true if emoji menu is visible; false otherwise
     * @return {Boolean} Emoji menu visibility
     */
    this.isOpen = function () {
      return $(menuContainer).is(':visible');
    };

    /**
     * Open emoji menu.
     */
    this.open = function () {

      $(menuContainer).show();
      var $icons = $(menuContainer).find('.jemoji-icons');

      if ($icons.html() === '') {

        var dir = this._defaults.folder;
        if (this._options.folder) {
          dir = this._options.folder;
        }

        var dom = $icons[0], innerHTML = '', ext = (typeof(this._options.extension))? this._options.extension : this._defaults;
        for (var i = 0, l = 100; i < l; i++) {
          var element = _this._icons[i], classActive = '';
          if (innerHTML === '')
            classActive = 'class="active"';   // First emoji set as 'active'

          innerHTML += '<div ' + classActive + '>' + 
                          '<img src="' + dir + element + '.' + ext + '" alt="' + element + '" />' +
                          '<span>:' + element + ':</span>' +
                        '</div>';
        }
        dom.innerHTML = innerHTML;

        $el.data('jemojiclick').call();

        var index = 0;
        $icons.on('scroll', function () {
          if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            if (100 * (++index) < _this._icons.length) {
              var innerHTML = '';
              for (var i = 100 * index, l = 100 + 100 * index; i < l; i++) {
                var element = _this._icons[i];
                if (element) {
                  innerHTML += '<div>' + 
                                      '<img src="' + dir + element + '.' + ext + '" alt="' + element + '" />' +
                                      '<span>:' + element + ':</span>' +
                                    '</div>';
                }
              }
              dom.innerHTML += innerHTML;
              $el.data('jemojiclick').call();
            }
          }
        });
      }
    };

    /**
     * Close emoji menu
     */
    this.close = function () {
      $(menuContainer).hide();
    };

    // Get current cursor position
    var getCursorPosition = function () {

      if ($el.length === 0) {
        return 0;
      }

      var input = $el[0], pos = input.value.length;

      try {
        if (input.createTextRange) {
          var r = document.selection.createRange().duplicate();
          r.moveEnd('character', input.value.length);
          if (r.text === '') {
            pos = input.value.length;
          }
          pos = input.value.lastIndexOf(r.text);
        }
        else {
          if (typeof(input.selectionStart) !== 'undefined') {
            pos = input.selectionStart;
          }
        }
      }
      catch (e) {
        // IE bug with createTextRange
      }

      return pos;
    };

    //
    // Detect key events on mobile devices
    // http://stackoverflow.com/a/20508727/552669
    //
    function newKeyUpDown(originalFunction, eventType) {
      return function() {
        if ("ontouchstart" in document.documentElement) {
          var $element = $(this),
            $input = null;
          if (/input/i.test($element.prop('tagName')))
            $input = $element;
          else if ($('input', $element).size() > 0)
            $input = $($('input', $element).get(0));

          if ($input) {
            var currentVal = $input.val(),
              checkInterval = null;
            $input.focus(function(e) {
              clearInterval(checkInterval);
              checkInterval = setInterval(function() {
                if ($input.val() != currentVal) {
                  var event = jQuery.Event(eventType);
                  currentVal = $input.val();
                  event.which = event.keyCode = (currentVal && currentVal.length > 0) ? currentVal.charCodeAt(currentVal.length - 1) : '';
                  $input.trigger(event);
                }
              }, 30);
            });
            $input.blur(function() {
              clearInterval(checkInterval);
            });
          }
        }
        return originalFunction.apply(this, arguments);
      }
    }
    $.fn.jemojiKeyup = newKeyUpDown($.fn.keyup, 'keyup');
    $.fn.jemojiKeydown = newKeyUpDown($.fn.keydown, 'keydown');
    $.fn.jemojiKeypress = newKeyUpDown($.fn.keypress, 'keypress');

    $el.data('jemojiclick', function () {
      $(d).find('div').off('click').on('click', function () {
        var emojiCode = $(this).find('img').attr('alt'), cursor = getCursorPosition(), value = $el.val();
        value = value.slice(0, value.lastIndexOf(':', cursor)) + ':' + emojiCode + ': ' + value.slice(cursor);
        $el.val(value);
        $el.focus();
        menuOpened = false;
        currentChars = '';
        _this.close();
      });
    });

    // Emoji menu container
    var menuContainer = document.createElement('div'), $menuContainer = $(menuContainer);
    if (this._options.theme)
      menuContainer.className = 'jemoji-menu ' + this._options.theme;
    else
      menuContainer.className = 'jemoji-menu ' + this._defaults.theme;

    // Emoji icons container
    var d = document.createElement('div');
    d.className = 'jemoji-icons';
    $el.after($(d));

    // Arrow (pure css)
    var arrow = document.createElement('div');
    arrow.className = 'jemoji-menu-arrow up';
    $(d).before($(arrow));

    $menuContainer.append($(d));

    // Navigation info
    var dinfo = document.createElement('div');
    dinfo.className = 'jemoji-info';

    // Translation
    var arr = this._language[this._options.language];
    if (typeof(arr) === 'undefined') {
      // Custom translation
      arr = this._language[this._defaults.language];
    }

    var hasnavigation = (typeof(this._options.navigation) !== 'undefined')? this._options.navigation : this._defaults.navigation;
    if (hasnavigation) {
      arr = jQuery.map(arr, function (el) { return el; });
      dinfo.innerHTML = '';
      for (var i = 0, l = arr.length - 1; i < l; i++) {
        dinfo.innerHTML += '<div>' + arr[i] + '</div>';
      }
      dinfo.innerHTML += '<div class="jemoji-close">' + arr[arr.length - 1] + '</div>';
    }
    else {
      dinfo.innerHTML = '<div class="jemoji-close">' + arr.close + '</div>';
    }
    $menuContainer.prepend($(dinfo));
    $(dinfo).css('width', $el.css('width'));

    // Close emoji menu on click 'Close' button
    $(dinfo).find('.jemoji-close').on('click', function () {
      _this.close();
    });

    $menuContainer.prepend($(arrow));

    // Adapt emoji menu width to fit input width
    $menuContainer.css('width', $el.css('width'));
    $(d).css('width', $el.css('width'));

    // Append to container
    var appendContainer = (typeof(this._options.container) !== 'undefined')? this._options.container : this._defaults.container;
    if (appendContainer) {
      if (!(appendContainer instanceof jQuery)) 
        appendContainer = $(appendContainer);
      appendContainer.append($menuContainer);
    }
    else {
      $el.after($menuContainer);
    }

    var menuOpened = false, arrowsCursorBegin, arrowsCursorEnd, selectedEmoji = false;

    // Trigger open/close emoji menu
    var btn = (typeof(this._options.btn) !== 'undefined')? this._options.btn : this._defaults.btn;
    if (btn) {
      if (!(btn instanceof jQuery)) 
        btn = $(btn);

      btn.on('click', function () {
        if (!_this.isOpen()) {
          _this.open();
        }
        else {
          _this.close();
        }
        $el.focus();
      });
    }

    // Resize emoji menu automatically
    $(window).on('resize', function () {
      if (_this.resize) {
        _this.resize();   // custom resize function
      }
      else {
        // Default resize function: adapt emoji menu to input width
        var _w = $el.css('width');
        $(d).css('width', _w);
        $(menuContainer).css('width', _w);
        $(dinfo).css('width', _w);
      }
    });

    var currentChars = '', currentVal, currentEmoji;

    var filterEmoji = function () {
      // Use emojis after two character are typed
      if (currentChars.length >= 2) {
        // Escape especial characters
        var regex = new RegExp('^([a-zA-Z0-9]|_?)*' + currentChars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + '([a-zA-Z0-9]|_?)*');

        var $domMenu = $(d), dom = $domMenu[0];

        var dir = _this._defaults.folder;
        if (_this._options.folder) {
          dir = _this._options.folder;
        }

        // Get emojis that match user input
        var innerHTML = '', ext = (typeof(_this._options.extension))? _this._options.extension : _this._defaults;
        for (var i = 0, l = _this._icons.length; i < l; i++) {
          currentEmoji = _this._icons[i];
          if (regex.test(currentEmoji)) {
            var classActive = '';
            if (innerHTML === '')
              classActive = 'class="active"';   // First emoji set as 'active'

            innerHTML += '<div ' + classActive + '>' + 
                            '<img src="' + dir + currentEmoji + '.' + ext + '" alt="' + currentEmoji + '" />' +
                            '<span>:' + currentEmoji + ':</span>' +
                          '</div>';
          }
        }
        dom.innerHTML = innerHTML;

        $el.data('jemojiContainer', $domMenu.closest('.jemoji-menu')[0]);

        if (dom.innerHTML.length === 0) {
          _this.close();    // No emojis
          currentChars = '';
          menuOpened = false;
        }
        else {
          // Insert emojis on click
          $el.data('jemojiclick').call();

          _this.open();
        }
      }
    };

    //
    // Keydown to detect arrows, esc and backspace
    //
    $el.jemojiKeydown(function (event) {

      // Close menu on ESC
      if (event.which === 27 && _this.isOpen()) {
        _this.close();
        arrowsCursorBegin = arrowsCursorEnd = -1;
        return;
      }

      if (menuOpened) {

        var currentVal = $el.val();

        var $divs = $(d).find('div'), $index = $divs.index($(d).find('div.active'));

        if (_this.isOpen()) {
          if (event.which === 37 || event.which === 38) {
            if (hasnavigation) {
              // Left arrow
              $divs.removeClass('active');
              if ($index > 0)
                $($divs.get($index - 1)).addClass('active');
              else
                $($divs.get($divs.length - 1)).addClass('active');

              currentEmoji = $(d).find('div.active img').attr('alt');
              if (arrowsCursorBegin === -1)
                arrowsCursorBegin = getCursorPosition();
              if (arrowsCursorEnd === -1)
                arrowsCursorEnd = getCursorPosition();

              currentVal = currentVal.slice(0, currentVal.lastIndexOf(':', arrowsCursorBegin)) + ':' + currentEmoji + ': ' + currentVal.slice(arrowsCursorEnd);
              $el.val(currentVal);

              arrowsCursorEnd = currentVal.indexOf(':', arrowsCursorBegin) + 2;

              selectedEmoji = true;

              currentChars = '';

              event.preventDefault();
            }
            return;
          }

          if (event.which === 39 || event.which === 40 || event.which === 9) {
            if (hasnavigation) {
              // Right arrow
              $divs.removeClass('active');
              if ($index < ($divs.length - 1))
                $($divs.get($index + 1)).addClass('active');
              else
                $($divs.get(0)).addClass('active');

              currentEmoji = $(d).find('div.active img').attr('alt');
              if (arrowsCursorBegin === -1)
                arrowsCursorBegin = getCursorPosition();
              if (arrowsCursorEnd === -1)
                arrowsCursorEnd = getCursorPosition();

              currentVal = currentVal.slice(0, currentVal.lastIndexOf(':', arrowsCursorBegin)) + ':' + currentEmoji + ': ' + currentVal.slice(arrowsCursorEnd);
              $el.val(currentVal);

              arrowsCursorEnd = currentVal.indexOf(':', arrowsCursorBegin) + 2;

              // Scroll to selected emoji container
              $(d).scrollTop($(d).find('div.active img').position().top);

              selectedEmoji = true;

              currentChars = '';

              event.preventDefault();
            }
            return;
          }
        }

        // Backspace
        if (event.which === 8) {
          currentChars = currentChars.slice(0, -1);

          var currentVal = $el.val();

          var $divs = $(d).find('div'), $index = $divs.index($(d).find('div.active'));

          // Backspace
          if (event.which === 8) {
            currentChars = currentChars.slice(0, -1);
            filterEmoji();
          }
        }
      }

    });

    //
    // Keypress for rest of keys
    //
    $el.jemojiKeypress(function (event) {

      // Type selected emoji on Enter if menu is opened
      if (event.which === 32 && _this.isOpen()) {
        $el.focus();
        _this.close();
        menuOpened = false;
        currentChars = '';
        arrowsCursorBegin = arrowsCursorEnd = -1;
        if (!selectedEmoji) {
          // Use case: user open menu, so first emoji is already selected; then press Enter
          currentEmoji = $(d).find('div.active img').attr('alt');
          if (arrowsCursorBegin === -1)
            arrowsCursorBegin = getCursorPosition();
          if (arrowsCursorEnd === -1)
            arrowsCursorEnd = getCursorPosition();

          currentVal = $el.val();
          currentVal = currentVal.slice(0, currentVal.lastIndexOf(':', arrowsCursorBegin)) + ':' + currentEmoji + ': ' + currentVal.slice(arrowsCursorEnd);
          $el.val(currentVal);
        }

        $(menuContainer).find('.jemoji-icons').html('');

        event.preventDefault();
        return;
      }

      // Open emoji menu on press ':' key
      if (event.which === 58) {
        if (!menuOpened) {
          menuOpened = true;
          currentChars = '';
          arrowsCursorBegin = arrowsCursorEnd = -1;
        }
        return;
      }

      // Menu opened
      if (menuOpened) {

        var currentVal = $el.val();

        var $divs = $(d).find('div'), $index = $divs.index($(d).find('div.active'));

        currentChars += String.fromCharCode(event.which).toLowerCase();

        filterEmoji();
      }
      
    });

  };

  $.fn.jemoji = function(methodOrOptions) {

    var method = (typeof methodOrOptions === 'string') ? methodOrOptions : undefined;

    if (method) {
      var customPlugins = [];

      function getCustomPlugin() {
        var $el = $(this), customPlugin = $el.data('jemoji');
        customPlugins.push(customPlugin);
      }

      this.each(getCustomPlugin);

      var args = (arguments.length > 1) ? Array.prototype.slice.call(arguments, 1) : undefined, results = [];

      function applyMethod(index) {
        var customPlugin = customPlugins[index];

        if (!customPlugin) {
          console.warn('$.jemoji not instantiated yet');
          console.info(this);
          results.push(undefined);
          return;
        }

        if (typeof customPlugin[method] === 'function') {
          var result = customPlugin[method].apply(customPlugin, args);
          results.push(result);
        } else {
          console.warn('Method \'' + method + '\' not defined in $.jemoji');
        }
      }

      this.each(applyMethod);

      return (results.length > 1) ? results : results[0];
    } else {
      var options = (typeof methodOrOptions === 'object') ? methodOrOptions : undefined;

      function init() {
        var $el = $(this), customPlugin = new jemoji($el, options);

        $el.data('jemoji', customPlugin);
      }

      return this.each(init);
    }

  };

})(jQuery);
