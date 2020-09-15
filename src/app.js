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
  const url = '../listen/day_';
  var div = document.querySelector('.list');
  var index = 1;
  for (var i = 1; i <= 30; i++) {
    let url_music = `${url}${index}/music.mp4`;
    window.fetch(url_music)
      .then((res) => {
        if(res.ok) {
          let p = document.createElement('p');
          let content_ = `Day ${index}`;
          p.innerText = content_;
          p.classList = 'days';
          p.addEventListener('click', function(e) {
            processMusic(url_music, content_);
          });
          div.appendChild(p);
          index++;
        }
      })
      .catch(err => console.error(err));
  }
}
