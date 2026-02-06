// --- Navigation Engine ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- Audio Engine ---
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('audioProgress');

function streamTrack(title, artist, img) {
    document.getElementById('p-title').innerText = title;
    document.getElementById('p-artist').innerText = artist;
    document.getElementById('p-img').src = img;
    
    // In real app: audio.src = 'link-to-mp3.mp3';
    togglePlayback(true);
}

function togglePlayback(forcePlay = false) {
    if (audio.paused || forcePlay) {
        // audio.play();
        playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    } else {
        audio.pause();
        playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
    }
}

// Sync Seek Bar with Audio
audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
};

// --- Security Logic ---
function validatePass(val) {
    const bar = document.getElementById('strength-bar');
    if(val.length < 6) { bar.style.width = "30%"; bar.style.background = "red"; }
    else if(val.length < 10) { bar.style.width = "60%"; bar.style.background = "orange"; }
    else { bar.style.width = "100%"; bar.style.background = "#00ff88"; }
}

// Backend Mockup
document.getElementById('artistForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Artist Securely Registered to Avenue Media Backend!");
    showPage('home');
};
