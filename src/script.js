console.log('%cHello World!', "font-size:40px;color:blue;font-family: cursive;");

let sizeText;
const screenWidth = innerWidth;
let bool = true;
let audio = new Audio();

audio.addEventListener('timeupdate', function() {
  if (audio.ended) {

  }
});

function processMusic(music, name) {
  document.getElementById('play').innerText = "║";
  playMusic(music);
  nameMusic(name);
}


function playMusic(src) {
  audio.src = src;
  bool = false;
  console.log(src);
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
