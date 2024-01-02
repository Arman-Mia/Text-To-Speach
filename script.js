function convertToSpeech() {
    const textToSpeech = document.getElementById('textToSpeech').value;

    if ('speechSynthesis' in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeech);

        synthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}
