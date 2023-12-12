let moodIndex = 0;
// let audioElement = new Audio('audio/happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let durationDisplay = document.getElementById('durationDisplay');
let currentTimeDisplay = document.getElementById('currentTimeDisplay');
let moodImg = document.querySelector('.musicAnimation');
let forwardButton = document.getElementById('forward');
let backwardButton = document.getElementById('backward');

//handle play-pause play

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const mood =  params.get('mood');

console.log("mood = " + mood);



const sound = new Howl({src: [moodDB[mood].music]});

//all functions definitions

function handlePlayPauseClick() {
    if (sound.playing()) {
        sound.pause();
        masterPlay.src = 'assets/play-solid.svg';
        moodImg.classList.remove('spinner');
    } else {
        sound.play();
        masterPlay.src = 'assets/pause-solid.svg';
        moodImg.classList.add('spinner');
        // moodImage.parentElement.classList.toggle('playing');
    }
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateSeekBarAndTimeDisplays() {
 
    let updateInterval = setInterval(function () {

        let progress = (sound.seek() / sound.duration()) * 100;
        progressBar.value = progress;

  
        currentTimeDisplay.textContent = formatTime(sound.seek());


        durationDisplay.textContent = formatTime(sound.duration());

     
        if (!sound.playing()) {
      
            clearInterval(updateInterval);
        }
    }, 1000);
}



function handleSeekEvent() {
    let progress = (sound.seek() / sound.duration()) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(sound.seek());
}
function handleLoadEvent() {
    durationDisplay.textContent = formatTime(sound.duration());
}

function updateChange() {
    sound.seek(progressBar.value * sound.duration() / 100);
}


function updateTimeDisplay() {
    currentTimeDisplay.textContent = formatTime(sound.seek());
    durationDisplay.textContent = formatTime(sound.duration());
}



forwardButton.addEventListener('click', function () {
            // Move forward 10 seconds
            sound.seek(sound.seek() + 10);
});

backwardButton.addEventListener('click', function () {
            // Move backward 10 seconds
            sound.seek(sound.seek() - 10);
});




const moodTitleElement = document.querySelector('.genreTitle');
moodTitleElement.innerText = mood + " Tunes";

// sound.load({ src: [moodDB[mood].music] });


const backgroundColor = document.getElementById('musicPlayer');
backgroundColor.style.backgroundColor = moodDB[mood].bgColor;


const songText = document.querySelector('.songInfo');
songText.style.color = moodDB[mood].color;


const moodImage = document.querySelector('.moodImg');
moodImage.src = moodDB[mood].imgFile;


const navbar = document.querySelector('.moodList');
navbar.style.color = moodDB[mood].color;


const navSelect = document.getElementById(moodDB[mood].mood);
navSelect.style.fontWeight = 600;
navSelect.style.textDecoration = "underline";



masterPlay.addEventListener('click', handlePlayPauseClick);




sound.on('play', updateSeekBarAndTimeDisplays);



sound.on('seek', handleSeekEvent);



sound.on('load', handleLoadEvent);


// forward when seekbar changes
progressBar.addEventListener('input', updateChange);




let happy = document.getElementById('happy');
let romantic = document.getElementById('romantic');
let relaxed = document.getElementById('relaxed');
let emo = document.getElementById('emo');
let motivated = document.getElementById('motivated');
let energized = document.getElementById('energized');
let focus = document.getElementById('focus');
let chill = document.getElementById('chill');





function updateMood(selectedMood) {
    // Update audio source
    sound.pause();
    sound.seek(0);
    sound.pause()

    // Update Howl sound source

    
    sound.unload();
    console.log(moodDB[selectedMood].music)
    // sound.load({ _src: [moodDB[selectedMood].music] });
    
    sound._src = [moodDB[selectedMood].music];
    sound.load()
    console.log(sound);

    handleLoadEvent();
    handleSeekEvent()


    moodTitleElement.innerText = selectedMood + " Tunes";


    backgroundColor.style.backgroundColor = moodDB[selectedMood].bgColor;


    songText.style.color = moodDB[selectedMood].color;

    moodImage.src = moodDB[selectedMood].imgFile;

 
    navbar.style.color = moodDB[selectedMood].color;


    Object.values(moodDB).forEach((mood) => {
        const navItem = document.getElementById(mood.mood);
        if (navItem) {
            navItem.style.fontWeight = 'normal';
            navItem.style.textDecoration = "none";
        }
    });

    const selectedNav = document.getElementById(moodDB[selectedMood].mood);
    if (selectedNav) {

        selectedNav.style.fontWeight = 600;
        selectedNav.style.textDecoration = "underline";
    }

    setTimeout(updateTimeDisplay, 100);
}


// Event listeners for each mood button
happy.addEventListener('click', () => updateMood('Happy'));
romantic.addEventListener('click', () => updateMood('Romantic'));
relaxed.addEventListener('click', () => updateMood('Relaxed'));
emo.addEventListener('click', () => updateMood('Emo'));
motivated.addEventListener('click', () => updateMood('Motivated'));
energized.addEventListener('click', () => updateMood('Energized'));
focus.addEventListener('click', () => updateMood('Focus'));
chill.addEventListener('click', () => updateMood('Chill'));

