let trial = false;
let i = 0;
let playSrc = song1;
const songs = [
  {
    song: "Apna Bana Le",
    singer: "Arijit Singh",
    id: song1,
    image:
      "https://www.cineblues.com/uploads/article/check-out-apna-bana-le-song-lyrics-from-bhediya-starring-varun-dhawan-and-kriti-sanon-20221108160959569.jpg",
  },
  {
    song: "Kahani",
    singer: "Sonu Nigam",
    id: song2,
    image:
      "https://www.filmweb.no/article1493828.ece/REPRESENTATIONS/w/Laal%20Singh%20Chaddha%204O6A3465%20CORR.jpg",
  },
  {
    song: "Rasiya",
    singer: "Tushar Joshi",
    id: song3,
    image: "https://i.scdn.co/image/ab67616d0000b273d5bc8c60d74c017ef2cfca14",
  },
];

function start(i, name) {
  if (trial == false) {
    play.innerHTML = "||";
    trial = true;
    playSrc = name;
    name.play();
    total.innerText = "/ " + format_time(name.duration);
  } else {
    play.innerHTML = "&#9634";
    trial = false;
    name.pause();
  }
  playSrc.addEventListener("timeupdate", () => {
    let temp = format_time(playSrc.currentTime);
    current.innerText = temp;
    // console.log(playSrc.currentTime)
    let x = (playSrc.currentTime * 100) / playSrc.duration;
    //   console.log(x);
    //   console.log(playSrc.currentTime + " CCCCc")
    //   console.log(playSrc.duration + " TTTTTTTT")
    percentage.innerHTML = `<div id = 'progress' class="progress-bar" style="width: ${x}%"></div>`;
    if (x === 100) {
      f1();
    }
  });
}
function format_time(audio_duration) {
  sec = Math.floor(audio_duration);
  min = Math.floor(sec / 60);
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;
  return min + ":" + sec;
}

play.onclick = () => {
  start(i, songs[i].id);
};
function f1() {
  trial = false;
  i++;
  if (i > 2) i = 0;
  playSrc.pause();
  playSrc.currentTime = 0;
  image.src = songs[i].image;
  singer.innerText = songs[i].singer;
  song.innerHTML = songs[i].song;
  start(i, songs[i].id);
}
next.onclick = () => {
  f1();
};
function f2() {
  trial = false;
  i--;
  if (i < 0) i = 2;
  playSrc.pause();
  playSrc.currentTime = 0;
  image.src = songs[i].image;
  singer.innerText = songs[i].singer;
  song.innerHTML = songs[i].song;
  start(i, songs[i].id);
}
previous.onclick = () => {
  f2();
};
percentage.onclick = (event) => {
  if (trial == false) start(i, playSrc);
  let scrollTime = (event.offsetX * 100) / percentage.offsetWidth;
  playSrc.currentTime = (scrollTime / 100) * playSrc.duration;
};
// function formatSecondsAsTime(secs, format) {
//     var hr  = Math.floor(secs / 3600);
//     var min = Math.floor((secs - (hr * 3600))/60);
//     var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

//     if (min < 10){
//       min = "0" + min;
//     }
//     if (sec < 10){
//       sec  = "0" + sec;
//     }

//     return min + ':' + sec;
// }
// }
