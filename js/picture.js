'use strict';

(function () {
  var ESC = 27;
  var MIN_SCALE = 25;
  var MAX_SCALE = 100;
  var STEP = 25;
  var parseScaleControlValue;
  var effectsPreview = 'effects__preview';
  var uploadFile = document.querySelector('#upload-file');
  var imageUpload = document.querySelector('.img-upload__overlay');
  var uploadCancel = document.querySelector('#upload-cancel');
  var scaleControlSmaller = document.querySelector('.scale__control--smaller');
  var scaleControlBigger = document.querySelector('.scale__control--bigger');
  var scaleControlValue = document.querySelector('.scale__control--value');
  var imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
  var effectsList = document.querySelector('.effects__list');
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevelValue = document.querySelector('.effect-level__value');
  var mapPinMain = document.querySelector('.map__pin--main');
  var textDescription = document.querySelector('.text__description');
  var textHashtags = document.querySelector('.text__hashtags');

  function getCloseElement(element) {
    element.classList.add('hidden');
  }

  function getOpenElement(element) {
    element.classList.remove('hidden');
  }

  function getCloseElementByEsc(e) {
    if (e.keyCode === ESC) {
      getCloseElement(imageUpload);
    }
  }

  function getUploadForm(element) {
    uploadFile.addEventListener('change', function () {
      getOpenElement(element);
    });
  }

  function getCloseForm(element) {
    uploadCancel.addEventListener('click', function (e) {
      e.preventDefault();
      getCloseElement(element);
    });
  }

  function getCloseEsc() {
    document.addEventListener('keydown', getCloseElementByEsc);
  }

  function toggleListener(elem) {
    elem.addEventListener('focus', function () {
      document.removeEventListener('keydown', getCloseElementByEsc);
    });
    elem.addEventListener('blur', function () {
      document.addEventListener('keydown', getCloseElementByEsc);
    });
  }

  scaleControlValue.setAttribute('max', MAX_SCALE);
  scaleControlValue.setAttribute('min', MIN_SCALE);
  scaleControlValue.value = '100%';

  scaleControlSmaller.addEventListener('click', function () {
    parseScaleControlValue = parseInt(scaleControlValue.value, 10);
    if (parseScaleControlValue > MIN_SCALE) {
      scaleControlValue.value = (parseScaleControlValue - STEP) + '%';
      parseScaleControlValue -= STEP;
      imgUploadPreview.style.transform = 'scale(' + parseScaleControlValue / 100 + ')';
    }
  });

  scaleControlBigger.addEventListener('click', function () {
    parseScaleControlValue = parseInt(scaleControlValue.value, 10);
    if (parseScaleControlValue < MAX_SCALE) {
      scaleControlValue.value = (parseScaleControlValue + STEP) + '%';
      parseScaleControlValue += STEP;
      imgUploadPreview.style.transform = 'scale(' + parseScaleControlValue / 100 + ')';
    }
  });

  function getEffectPicture() {
    effectsList.addEventListener('click', function (evt) {
      var target = evt.target;
      imgUploadPreview.className = effectsPreview + '--' + target.value;
    });
  }

  effectLevelPin.addEventListener('mouseup', function () {
    console.log('hello');
  });

  getEffectPicture();
  toggleListener(textDescription);
  toggleListener(textHashtags);
  getCloseEsc();
  getUploadForm(imageUpload);
  getCloseForm(imageUpload);
})();

