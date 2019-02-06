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

  function getRandomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  function getRandomComments() {
    return commentsArray[Math.floor(Math.random() * commentsArray.length)];
  }

  function getNewCommentsArray() {
    var resultComments = '';
    for (var i = 0; i < getRandomNumber(1, 3); ++i) {
      resultComments = resultComments + getRandomComments();
    }
    return resultComments;
  }

  function getRandomNames() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function newUsersComment() {
    var arr = [];
    for (var i = 0; i < getRandomNumber(1, 7); ++i) {
      arr[i] = {
        avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
        message: getNewCommentsArray(),
        name: getRandomNames()
      };
    }
    return arr;
  }

  function getNewArray(i) {
    return {
      url: 'photos/' + getRandomNumber(1, 25) + '.jpg',
      likes: getRandomNumber(15, 200),
      comments: newUsersComment()
    };
  }

  function getPicturesData(length) {
    var data = [];
    for (var i = 0; i < length; i++) {
      var pictureData = getNewArray(i);
      data.push(pictureData);
    }

    return data;
  }

  var picturesData = getPicturesData(25);

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
    }
  }

  function getNewList() {
    var newItem = document.createElement('li');
    var newImage = document.createElement('img');
    var socialText = document.createElement('p');

    newItem.className = 'social__comment';
    newImage.className = 'social__picture';
    newImage.src = 'img/avatar-' + getRandomNumber(1, 6) + '.svg';
    newImage.setAttribute('width', 35);
    newImage.setAttribute('height', 35);
    newImage.setAttribute('alt', 'Аватар комментатора фотографии');
    socialText.className = 'social__text';
    socialText.innerHTML = getNewCommentsArray();

    newItem.appendChild(newImage);
    newItem.appendChild(socialText);
    socialComments.appendChild(newItem);
    console.log(socialComments);
  };

  

  socialCommentCount.classList.add('visually-hidden');
  commentsLoader.classList.add('visually-hidden');

  renderPhotos();
  showElement();
  getBigPicture(picturesData);
  getNewList();
})();
