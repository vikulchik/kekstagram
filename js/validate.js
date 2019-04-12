'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');
  textHashtags.addEventListener('input', function (evt) {
    var target = evt.target;
    var hashtags = target.value.trim().replace(/\s\s+/, ' ').split(' ');
    for (var i = 0; i < hashtags.length; i++) {
      if (hashtags[i][0] !== '#') {
        textHashtags.setCustomValidity('Хэш-тег должен начинается с символа #');
      }

    }
  });

})();
