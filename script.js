function openEnvelope() {
    document.getElementById('envelope-wrapper').classList.add('hidden');
    document.getElementById('proposal-content').classList.remove('hidden');
}

const noBtn = document.getElementById('no-btn');
const mainGif = document.getElementById('main-gif');
let noClickCount = 0;

noBtn.addEventListener('click', () => {
    noClickCount++;

    if (noClickCount === 1) {
        // First press: Show the first angry gif
        mainGif.src = ""; // Reset to force animation replay
        setTimeout(() => {
            mainGif.src = "angry.gif";
        }, 50);
        
    } else if (noClickCount === 2) {
        // Second press: Show the NEW angry_dog gif
        mainGif.src = ""; 
        setTimeout(() => {
            mainGif.src = "angry_dog.gif";
        }, 50);
    } else if (noClickCount === 3) {
        // Fourth press: Show the second angry gif
        mainGif.src = "";
        setTimeout(() => {
            mainGif.src = "angry_dog.gif";
        }, 50);
        question.innerText = "I'm gonna back shot you ";
        
    } else {
        // Third press: Hide the No button and bring back the cute dog
        noBtn.classList.add('hidden');
        
        mainGif.src = "";
        setTimeout(() => {
            mainGif.src = "dance_dog.gif";
        }, 50);
    }
});

function sayYes() {
    document.getElementById('proposal-content').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    
    // Confetti effect
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}