var commentsArray = ['Всё отлично! ', 
    'В целом всё неплохо. Но не всё. ', 
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 
    'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getRandomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function getRandomComments() {
    return commentsArray[Math.floor(Math.random() * commentsArray.length)];
}

var newArrow = [{
    url: 'photos/' + getRandomNumber(1, 25) + '.jpg',
    likes: getRandomNumber(15, 200),
    comments: getRandomComments()
}];

console.log(newArrow)
