window.onload = () => {
  document.getElementById('play').addEventListener('click', function () {
    if (bool) {
      this.innerHTML = "║";
      audio.play();
    }else {
      this.innerHTML = "►";
      audio.pause();
    }
    bool= !bool;
  });
  document.getElementById('next').addEventListener('click', function () {
    if (!bool) {
      sttSong++;
      xhr.onreadystatechange();
    }
  });
  document.getElementById('back').addEventListener('click', function () {
    if (!bool) {
      sttSong--;
      xhr.onreadystatechange();
    }
  });
}
