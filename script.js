let audioPlayer = document.getElementById("audioPlayer");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("play-button")) {
        let songSrc = event.target.getAttribute("data-src");

        if (audioPlayer.src.includes(songSrc)) {
            // Toggle play/pause if clicking the same button again
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } else {
            // Play a new song
            audioPlayer.src = songSrc;
            audioPlayer.play();
        }
    }
});




const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
