let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
const songs = [
  { songName: "Blue Bird-(From Naruto Shippudin)",filePath: "./songs/1.mp3", coverPath: "./images/1.jpg" },
  { songName: "Akuma no Ko", filePath: "./songs/2.mp3", coverPath: "./images/2.jpg" },
  { songName: "Your Name-Sparkle-Movie Version", filePath: "./songs/3.mp3", coverPath: "./images/3.jpg" },
  { songName: "Your Lie in April - My Lie", filePath: "./songs/4.mp3", coverPath: "./images/4.jpg" },
  { songName: "Wheathering With You - Grand Escape", filePath: "./songs/5.mp3", coverPath: "./images/5.jpg" },
  { songName: "Kamado Tanjirou no Uta", filePath: "./songs/6.mp3", coverPath: "./images/6.jpg" },
  { songName: "Doctor Stone - Good Morning World!", filePath: "./songs/7.mp3", coverPath: "./images/7.jpg" },
  { songName: "Moonlight Densetsu - Sailor Moon", filePath: "./songs/8.mp3", coverPath: "./images/8.jpg" },
  { songName: "Tokyo Revengers - Cry Baby", filePath: "./songs/9.mp3", coverPath: "./images/9.jpg" },
  { songName: "Demon Slayer - Gurenge", filePath:"./songs/10.mp3", coverPath:"./images/10.jpg"}
]
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');

document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Spotify");
  songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  });

  audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
  });

  myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
  });

  masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
    }
  });
});

const makeAllPlays = () => {
  document.querySelectorAll('.songItemPlay').forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
};
// const makeAllPause = () => {
//   document.querySelectorAll('.songItemPlay').forEach((element) => {
//     element.classList.remove('fa-play-circle');
//     element.classList.add('fa-pause-circle');
//   })
// };
// console.log(songs);

document.querySelectorAll('.songItem').forEach((element, i, array) => {
  console.log(songs);
  element.addEventListener('click', (e) => {
    console.log(e);
    console.log(songs);
    makeAllPlays();
    songIndex = i;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = songs[i].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 1;
  })
});
// document.querySelectorAll('.songItemPlay').forEach((element, i) => {
//   element.addEventListener('click', (e) => {
//     makeAllPause();
//     songIndex = i;
//     e.target.classList.remove('fa-pause-circle');
//     e.target.classList.add('fa-play-circle');
//      audioElement.src = songs[i].filePath;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.pause();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 0;
//   })
// });

document.getElementById('next').addEventListener('click', ()=>{
if(songIndex >= 9){
  songIndex = 0;
}
else{
  songIndex += 1;
}
audioElement.src = songs[songIndex].filePath;
masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity= 1;
});
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity= 0;
  });