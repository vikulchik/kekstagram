'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');
  function testField(text) {
    if (text[0] !== '#') {
      textHashtags.setCustomValidity('error');
    }
  }

  document.querySelector('.img-upload__form').addEventListener('submit', function (e) {
    e.preventDefault();
    testField(textHashtags.value);
  });
})();
