function animateCircle() {
  document.querySelector(".circle").classList.add("grow");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "HOLD";
    setTimeout(() => {
      document.getElementById("text").innerHTML = "EXHALE";
      document.querySelector(".circle").classList.remove("grow");
      document.querySelector(".circle").classList.add("shrink");
      setTimeout(() => {
        document.getElementById("text").innerHTML = "HOLD";
        setTimeout(() => {
          document.getElementById("text").innerHTML = "INHALE";
          document.querySelector(".circle").classList.remove("shrink");
          document.querySelector(".circle").classList.add("grow");
        }, 4000);
      }, 4000);
    }, 4000);
  }, 4000);
}
setInterval(animateCircle, 16000);

var forestAudio = new Audio("music/forest.mp3");
var rainAudio = new Audio("music/rain.mp3");
var oceanAudio = new Audio("music/ocean waves.mp3");

function forest() {
  oceanAudio.pause();
  rainAudio.pause();
  document.querySelector(".main").style.background =
    'url("backgrounds/forest.jpg")';
  document.querySelector(".main").style.backgroundSize = "cover";
  forestAudio.play();
  forestAudio.loop = true;
}

function ocean() {
  forestAudio.pause();
  rainAudio.pause();
  document.querySelector(".main").style.background =
    'url("backgrounds/ocean.jpg")';
  document.querySelector(".main").style.backgroundSize = "cover";
  oceanAudio.play();
  oceanAudio.loop = true;
}

function rain() {
  oceanAudio.pause();
  forestAudio.pause();
  document.querySelector(".main").style.background =
    'url("backgrounds/rain.jpg")';
  document.querySelector(".main").style.backgroundSize = "cover";
  rainAudio.play();
  rainAudio.loop = true;
}
