(function() {

  var isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;
  var _datepicker = $.fn.datepicker;

  $.fn.datepicker = function(options) {
    var datepickerId = '#ui-datepicker-div';
    var defaults = {
      showAnim: '',
      beforeShow: function() {
        $(datepickerId).addClass('is-open');
      },
      onClose: function() {
        $(datepickerId).removeClass('is-open');
      },
      showButtonPanel: true,
      closeText: "Cancel"
    }
    options = $.extend({}, options, defaults);
    _datepicker.apply(this, [options]);

    $(datepickerId).hide();

    if(isTouch) {
      if(!!('FastClick' in window)) {
        $(this).addClass('needsclick');
      }
      $(this)
        .attr('readonly', 'readonly')
        .on('touchend', function() {
          $(this).datepicker('show');
        });
    }
  }

})();