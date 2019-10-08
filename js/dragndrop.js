'use strict';

(function () {
  var DEFAULT_VALUE = 100;
  var effectLevelValue = document.querySelector('.effect-level__value');
  var imgUploadPreview = document.querySelector('.img-upload__preview img');
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevel = document.querySelector('.effect-level');
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectsList = document.querySelector('.effects__list');

  effectLevelPin.addEventListener('mousedown', function () {
    var rectLine = effectLevelLine.getBoundingClientRect();
    var lineWidth = effectLevelLine.offsetWidth;

    function move(e) {
      var shiftX = e.clientX - rectLine.left;
      if (shiftX <= 0 || shiftX >= lineWidth) {
        return
      }
      effectLevelPin.style.left = shiftX + 'px';
    }

    function setEffect(effect, level) {
      var result;
      switch (effect) {
        case 'chrome':
          result = "grayscale(" + level/100 + ")";
          break;
        case 'sepia':
          result = "sepia(" + level/100 + ")";
          break;
        case 'marvin':
          result = "invert(" + level + "%)";
          break;
        case'phobos':
          result = "blur(" + level*3/100 + "px";
          break;
        case 'heat':
          result = "brightness(" + (level*2/100 + 1) + "px";
          break;
        default: result = 'none';
          break;
      }
      imgUploadPreview.style.filter = result;
      console.log(result)
    }

    function getEffectPicture() {
      effectsList.addEventListener('click', function (evt) {
        var target = evt.target;
        if(target.tagName === 'INPUT') {
          var effectValue = target.value;
          if (effectValue === 'none') {
            effectLevel.classList.add('hidden');
            console.log('hi')
          } else {
            effectLevel.classList.remove('hidden');
            setEffect(effectValue, DEFAULT_VALUE);
            effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
          }
        }
      });
    }

    getEffectPicture()

    function clean() {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', clean);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', clean);
  })

})();
