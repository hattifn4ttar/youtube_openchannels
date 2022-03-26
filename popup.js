async function startScript(nTabs) {
  // Open the start page
  
  console.log('nTabs:', nTabs);
  let playType = await chrome.storage.sync.get('playType');
  playType = playType.playType;

  if (typeof browser === "undefined") {
    var browser = chrome;
  }
  // return;
  if (playType === 'channels') {
    window.open('https://www.youtube.com/playlist?list=PLQxYKug91T31ixyCs81TwIl8wAiD9AZAH&openNew=1&nTabs=' + nTabs + '&mute=1');
  } else {
    window.open('https://www.youtube.com/playlist?list=PLQxYKug91T31ixyCs81TwIl8wAiD9AZAH&openPlaylistFirstTab=1&nTabs=' + nTabs);
  }
}

document.getElementById('clickactivity20').addEventListener('click', () => startScript(20));
document.getElementById('clickactivity15').addEventListener('click', () => startScript(15));
document.getElementById('clickactivity10').addEventListener('click', () => startScript(10));
document.getElementById('clickactivity5').addEventListener('click', () => startScript(5));
document.getElementById('clickactivity3').addEventListener('click', () => startScript(3));
document.getElementById('clickactivity2').addEventListener('click', () => startScript(2));

document.getElementById('githubLink').addEventListener('click', () => window.open('https://github.com/hattifn4ttar/youtube_supportfreemedia'));
document.getElementById('youtubeLink').addEventListener('click', () => window.open('https://www.youtube.com/watch?v=jowEf5tSSyc'));
document.getElementById('webLink').addEventListener('click', () => window.open('https://hattifn4ttar.github.io/supportfreemedia/'));
document.getElementById('playlistLink').addEventListener('click', () => window.open('https://www.youtube.com/playlist?list=PLQxYKug91T31ixyCs81TwIl8wAiD9AZAH'));

chrome.storage.sync.set({ playType: 'playlist' });
chrome.storage.sync.set({ supportYTLike: true });
/*
async function setForm() {
  let playlist = await chrome.storage.sync.get('playType');
  playlist = playlist.playType !== 'channels';

  if (playlist.playType === undefined) {
    playlist = true;
    chrome.storage.sync.set({ playType: 'playlist' });
  }
  // console.log('setLike:', like, playlist, playlist.playType, like.supportYTLike);

  if (!playlist) {
    var form1 = document.getElementById("form1");
    if (form1) form1.style.display = 'none';
  } else {
    var form2 = document.getElementById("form2");
    if (form2) form2.style.display = 'none';
  }
}
setForm();
*/

var form1 = document.getElementById("form1");
form1.addEventListener("change", async function(event) {
  console.log('change1:', event.target.name, event.target.value);
  chrome.storage.sync.set({ playType: event.target.value });
  event.preventDefault();
}, false);
/*
var form2 = document.getElementById("form2");
form2.addEventListener("change", async function(event) {
  console.log('change2:', event.target.name, event.target.value);
  chrome.storage.sync.set({ playType: event.target.value });
  event.preventDefault();
}, false);
*/

var form3 = document.getElementById("form3");
if (form3) {
  form3.addEventListener("change", async function(event) {
    console.log('change3:', event.target.name, event.target.value);
    let like = await chrome.storage.sync.get('supportYTLike');
    like = like.supportYTLike;
    chrome.storage.sync.set({ supportYTLike: !like });
    console.log('saveLike:', like);
    event.preventDefault();
  }, false);
}


function getChecked(v) {
  console.log(v);
}