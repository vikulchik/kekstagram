'use strict';

(function () {
  var commentsArray = [
    'Всё отлично! ',
    'В целом всё неплохо. Но не всё. ',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var names = [
    'Кеша', 'Пух', 'Хома', 'Сергей', 'Вика'
  ]
  var template = document.querySelector('#picture').content;
  var fragment = document.createDocumentFragment();
  var pictures = document.querySelector('.pictures');
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureImage = document.querySelector('.big-picture__img img');
  var likesCount = document.querySelector('.likes-count');
  var commentsCount = document.querySelector('.comments-count');
  var socialComments = document.querySelector('.social__comments');
  var socialCommentCount = document.querySelector('.social__comment-count');
  var commentsLoader = document.querySelector('.comments-loader');
  var socialCaption = document.querySelector('.social__caption');
  var IMAGE_WIDTH = 35;
  var IMAGE_HEIGHT = 35;
  var MIN_NUMBER = 1;
  var MAX_NUMBER = 6;
  var COUNT_TEXT = 3;
  var MIN_LIKES = 15;
  var MAX_LIKE = 200;
  var MAX_RANDOM_NUMBER = 7;
  var MAX_COUNT_NUMBER = 25;

  function getRandomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  function getNewCommentsArray(min, max) {
    var randomComments = commentsArray[Math.floor(Math.random() * commentsArray.length)];
    var resultComments = '';
    for (var i = 0; i < getRandomNumber(min, max); ++i) {
      resultComments = resultComments + randomComments;
    }
    return resultComments;
  }

  function getRandomName() {
    return getRandomNumber(0, names.length);
  }

  function newUsersComment() {
    var arr = [];
    for (var i = 0; i < getRandomNumber(MIN_NUMBER, MAX_RANDOM_NUMBER); ++i) {
      arr[i] = {
        avatar: 'img/avatar-' + getRandomNumber(MIN_NUMBER, MAX_NUMBER) + '.svg',
        message: getNewCommentsArray(MIN_NUMBER, COUNT_TEXT),
        name: getRandomName()
      };
    }
    return arr;
  }

  function getPhoto(i) {
    return {
      url: 'photos/' + getRandomNumber(MIN_NUMBER, MAX_COUNT_NUMBER) + '.jpg',
      likes: getRandomNumber(MIN_LIKES, MAX_LIKE),
      comments: newUsersComment()
    };
  }

  function getPicturesData(length) {
    var data = [];
    for (var i = 0; i < length; i++) {
      var pictureData = getPhoto(i);
      data.push(pictureData);
    }

    return data;
  }

  var picturesData = getPicturesData(MAX_COUNT_NUMBER);

  function getElementTemplate(picturesData) {
    var pictureElement = template.cloneNode(true);
    pictureElement.querySelector('img').src = picturesData.url;
    pictureElement.querySelector('.picture__likes').innerHTML = picturesData.likes;
    pictureElement.querySelector('.picture__comments').innerHTML = picturesData.comments.length;
    return pictureElement;
  }

  function renderPhotos() {
    for (var i = 0; i < picturesData.length; i++) {
      fragment.appendChild(getElementTemplate(picturesData[i]));
    }
    pictures.appendChild(fragment);
  }

  function showElement() {
    bigPicture.classList.remove('hidden');
  }

  function getBigPicture(data) {
    for (var i = 0; i < data.length; i++) {
      bigPictureImage.src = data[i].url;
      likesCount.innerHTML = data[i].likes;
      commentsCount.innerHTML = data[i].comments.length;
      socialCaption.innerHTML = '';
    }
  }

  function getNewListComments() {
    var newItem = document.createElement('li');
    var newImage = document.createElement('img');
    var socialText = document.createElement('p');

    newItem.className = 'social__comment';
    newImage.className = 'social__picture';
    newImage.src = 'img/avatar-' + getRandomNumber(MIN_NUMBER, MAX_NUMBER) + '.svg';
    newImage.setAttribute('width', IMAGE_WIDTH);
    newImage.setAttribute('height', IMAGE_HEIGHT);
    newImage.setAttribute('alt', 'Аватар комментатора фотографии');
    socialText.className = 'social__text';
    socialText.innerHTML = getNewCommentsArray(MIN_NUMBER, COUNT_TEXT);

    newItem.appendChild(newImage);
    newItem.appendChild(socialText);
    socialComments.appendChild(newItem);
  }

  function hideSocialCommentCount(element) {
    element.classList.add('visually-hidden');
  }

  function hideCommentsLoader(element) {
    element.classList.add('visually-hidden');
  }

  renderPhotos();
  showElement();
  getBigPicture(picturesData);
  hideSocialCommentCount(socialCommentCount);
  hideCommentsLoader(commentsLoader);
  getNewListComments();
})();
