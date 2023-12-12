let text = document.getElementById('text');
let speechButton = document.getElementById('speech');
let isSpeaking = false;
let utterance;



function toggleSpeech() {
    if (!isSpeaking) {
        startSpeech();
    } else {
        stopSpeech();
    }
}

function stopSpeech() {
    speechSynthesis.cancel();
    isSpeaking = false;
    speechButton.innerText = 'Speak';
    speechButton.removeEventListener('click', pauseSpeech);
    speechButton.addEventListener('click', toggleSpeech);
}

function startSpeech() {
    utterance = new SpeechSynthesisUtterance(text.innerText);
    speechSynthesis.speak(utterance);
    isSpeaking = true;

    // for pause and stop
    utterance.onend = function () {
        isSpeaking = false;
    };

    speechButton.innerText = 'Pause';
    speechButton.removeEventListener('click', toggleSpeech);
    speechButton.addEventListener('click', pauseSpeech);
}


function pauseSpeech() {
    if (isSpeaking) {
        speechSynthesis.pause();
        isSpeaking = false;
        speechButton.innerText = 'Resume';
    } else {
        speechSynthesis.resume();
        isSpeaking = true;
        speechButton.innerText = 'Pause';
    }
}



speechButton.addEventListener('click', toggleSpeech);