window.onload = () => {
  document.getElementById('play').addEventListener('click', function () {
    if (bool) {
      this.innerText = "║";
      audio.play();
    }else {
      this.innerText = "►";
      audio.pause();
    }
    bool= !bool;
  });
  listen();

}
function listen() {
  const url = 'https://github.com/sunny-THS/learnEnglish/tree/master/listen/day_';
  var div = document.querySelector('.list');
  var index = 1;
  for (var i = 1; i <= 30; i++) {
    window.fetch(`${url}${i}`)
      .then((res) => {
        if(res.ok) {
          let p = document.createElement('p');
          let content_ = `Day ${index}`;
          let music = `${url}${index}/music.mp3`;
          p.innerText = content_;
          p.classList = 'days';
          p.addEventListener('click', function(e) {
            processMusic(music, content_);
          });
          div.appendChild(p);
          index++;
        }
      })
      .catch(err => console.error(err));
  }
}
