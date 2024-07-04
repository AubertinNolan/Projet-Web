console.log("JS a bien chargé");

/* var maTable = "<table border='1'>";

for (var i = 1; i <= 5; i++) {
  maTable += "<tr>";

  for (var j = 1; j <= 10; j++) {
    maTable += "<td> " + j + "</td>";
  }

  maTable += "</tr>";
}

maTable += "</table>";

document.write(maTable); */

/*
let playPauseButton = document.querySelector(".music");
let track_index = 0;
let isPlaying = false;
let curr_track = document.createElement("audio");

let track_list = [
  {
    name: "Sousou_no_Frieren_Ending - Anytime_Anywhere",
    path: "Sousou_No_Frieren_ED - Anytime_Anywhere.mp3",
  },
  {
    name: "Sentai_Daishikkaku_Opening - Jikai_Yokoku",
    path: "Sentai_Daishikkaku_OP - Jikai_Yokoku.mp3",
  },
  {
    name: "Sword_Art_Online_Opening_3 - Ignite",
    path: "Sword_Art_Online_OP3 - Ignite.mp3",
  },
];

function loadTrack(track_index) {
  curr_track.src = track_list[track_index].path;
  curr_track.load();
}

function playPauseTrack() {
  if (!isPlaying) {
    playTrack();
    console.log("clicked");
  }  else {
    pauseTrack();
  }
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  console.log("i am playing");
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
}

curr_track.volume = 0.1;
*/
