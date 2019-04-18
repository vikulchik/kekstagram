'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');
  textHashtags.addEventListener('input', function (evt) {
    var target = evt.target;
    var hashtags = target.value.trim().replace(/\s\s+/, ' ').split(' ');
    for (var i = 0; i < hashtags.length; i++) {
      var count = 0;
      var currentHashtag = hashtags[i];
      if (currentHashtag[0] !== '#') {
        textHashtags.setCustomValidity('Хэш-тег должен начинается с символа #');
        return;
      } else {
        textHashtags.setCustomValidity('');
      }
      if (hashtags.length > 5) {
        textHashtags.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
      }
      for (var a = 0; a < hashtags.length; a++) {
        if (count > 1) {
          textHashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
          return;
        } else {
          textHashtags.setCustomValidity('');
        }
        if (currentHashtag.toLowerCase() === hashtags[a].toLowerCase()) {
          count++;
        }
      }
      if (currentHashtag.length > 20) {
        textHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
        return;
      } else {
        textHashtags.setCustomValidity('');
      }
    }
  });

})();
