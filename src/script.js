console.log('%cHello World!', "font-size:40px;color:blue;font-family: cursive;");

let sizeText;
const screenWidth = innerWidth;
let bool = true;
let audio = new Audio();
let sttSong = Math.floor(Math.random() * 20);
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if (sttSong>JSON.parse(this.responseText).length-1) {
      sttSong = 0;
    }else if (sttSong<0) {
      sttSong = JSON.parse(this.responseText).length-1;
    }
    processMusic(JSON.parse(this.responseText), sttSong);
  }
}

xhr.open('GET', 'https://raw.githubusercontent.com/sunny-THS/data/master/data1.json', true);

xhr.send();

audio.addEventListener('timeupdate', function() {
  if (audio.ended) {
    sttSong++;
    xhr.onreadystatechange();
  }
});

function processMusic(music, stt) {
  playMusic(music[stt].url);
  nameMusic(music[stt].name);
}


function playMusic(src) {
  audio.src = `${src}`;
  audio.play();
}

function nameMusic (name) {
  if (screenWidth>=571) {
    sizeText = '.5em';
  }else if (screenWidth>=380 && screenWidth<=570) {
    sizeText = '.4em';
  }else if (screenWidth<=380) {
    sizeText = '.3em';
  }
  let text = document.querySelector('h1');
  text.style.position = "absolute";
  text.style.color = '#fff';
  text.style.fontFamily = "'Dancing Script', cursive";
  text.style.fontSize = sizeText;
  text.innerHTML = name;
}
