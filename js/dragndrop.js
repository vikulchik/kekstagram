'use strict';

(function () {
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevelLine = document.querySelector('.effect-level__line');
  var lineWidth = 453;

  effectLevelPin.addEventListener('mousedown', function () {
    var rectLine = effectLevelLine.getBoundingClientRect();

    function move(e) {
      var shiftX = e.clientX - rectLine.left;
      if (shiftX <= 0 || shiftX >= lineWidth) {
        return;
      }
      effectLevelPin.style.left = shiftX + 'px';
    }

    function clean() {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', clean);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', clean);
  })

})();
