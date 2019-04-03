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

  function getUploadForm(element) {
    uploadFile.addEventListener('change', function () {
      element.classList.remove('hidden');
    });
  }

  function getCloseForm(element) {
    uploadCancel.addEventListener('click', function (e) {
      e.preventDefault();
      element.classList.add('hidden');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC) {
      imageUpload.classList.add('hidden');
    }
  });

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

  getEffectPicture();
  getUploadForm(imageUpload);
  getCloseForm(imageUpload);
})();

