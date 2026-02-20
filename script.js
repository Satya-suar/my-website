 


        function revealTag(el) {
    if (!el.classList.contains('revealed')) {
        el.classList.add('revealed');
        // Optional: increment tapped counter
        tapTag(el.querySelector('.tag-message'));
    }
}

        // Generate stars
const starsEl = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = Math.random() * 2.5 + 0.5;
  s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*4}s;animation-delay:${Math.random()*5}s`;
  starsEl.appendChild(s);
}

// Generate particles
const pEl = document.getElementById('particles');
const colors = ['#c9a84c','#f0d080','#40d8f8','#ffffff','#ff9900'];
for (let i = 0; i < 40; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const sz = (Math.random() * 4 + 2) + 'px';
  p.style.cssText = `--s:${sz};--l:${Math.random()*100}%;--dur:${6+Math.random()*10}s;--delay:${Math.random()*10}s;--c:${colors[Math.floor(Math.random()*colors.length)]}`;
  pEl.appendChild(p);
}

        /* ═══════════════════════════════════════════
           📸 YOUR PHOTOS — paste image paths here
           Replace each "" with your image file path or URL.
           Example: "photo1.jpg"  or  "https://example.com/photo.jpg"
        ═══════════════════════════════════════════ */
        const imageSources = [
            "./[000106].jpg",  // 📸 Photo 1
            "./20251205_123728.jpg",  // 📸 Photo 2
            "./20251205_123752.jpg",  // 📸 Photo 3
            "./[004446].jpg",  // 📸 Photo 4
            "./[004488].jpg",  // 📸 Photo 5
            "./[004761].jpg",  // 📸 Photo 6
            "./20251205_113351.jpg",  // 📸 Photo 7
            "./20251205_162837.jpg",  // 📸 Photo 8
            "./[004601].jpg",  // 📸 Photo 9
            "./[004779].jpg",  // 📸 Photo 10
            "./20251205_110001.jpg",  // 📸 Photo 11
            "./20251205_110201.jpg",  // 📸 Photo 12
            "./20251205_111416.jpg",  // 📸 Photo 13
            "./20251205_113233.jpg",  // 📸 Photo 14
            "./20251205_113311.jpg",  // 📸 Photo 15
            "./20251205_113351.jpg",  // 📸 Photo 16
        ];


        // Placeholder gradients + icons shown until you add photos 
        const G = [['#ff6b9d', '#c084fc'], ['#ff4778', '#7c3aed'], ['#6366f1', '#ec4899'], ['#e11d48', '#9333ea'], ['#ffd700', '#ff6b9d'], ['#f472b6', '#a855f7'], ['#fb7185', '#c084fc'], ['#38bdf8', '#818cf8'], ['#fb923c', '#e879f9'], ['#fbbf24', '#f472b6'], ['#34d399', '#60a5fa'], ['#f43f5e', '#8b5cf6'], ['#60a5fa', '#f472b6'], ['#fcd34d', '#f97316'], ['#a5b4fc', '#f9a8d4'], ['#4f46e5', '#db2777']]; const PI = ['🌸', '💑', '🌙', '🌹', '✨', '🎀', '💖', '🦋', '🌺', '🌟', '🥂', '💝', '🌈', '🎂', '💫', '🌙'];

/* ------------------ 3D PHOTO CAROUSEL ------------------ */
const carousel = document.getElementById('photosGrid');
const totalPhotos = imageSources.length;
const radius = 650;

imageSources.forEach((src, i) => {
    const angle = (360 / totalPhotos) * i;
    const card = document.createElement('div');
    card.className = 'photo-frame';
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    const imgBox = document.createElement('div');
    imgBox.className = 'image-box';
    const img = document.createElement('img');
    img.src = src;
    imgBox.appendChild(img);

    card.appendChild(imgBox);

    
    carousel.appendChild(card);
});

// 💗 Multi-Color Glass Hearts
const HEART_COUNT = 10;

const heartColors = [
    '255,0,136',  // pink
    '174,0,255',   // purple
    '62,53,241',  // light blue
    '234,41,255',  // soft pink
    '255,182,11'     // gold
];

for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';

    // Even spacing
    heart.style.left = (i * (100 / HEART_COUNT)) + 5 + 'vw';

    // Random color
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.style.setProperty('--heart-color', color);

    heart.style.animationDuration = 12 + Math.random() * 6 + 's';
    heart.style.animationDelay = Math.random() * 10 + 's';
    heart.style.transform = `scale(${0.8 + Math.random() * 0.3})`;

    document.body.appendChild(heart);
}
// 🌟 Multi-Color Glowing Stars
const STAR_COUNT = 20;

const starColors = [
    '#ffffff',
    '#ffd700',
    '#ff9ff3',
    '#00f5ff',
    '#c084fc'
];

for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    star.className = 'star-particle';

    star.style.left = Math.random() * 100 + 'vw';

    const size = 8 + Math.random() * 10;
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    const color = starColors[Math.floor(Math.random() * starColors.length)];
    star.style.setProperty('--star-color', color);

    star.style.animationDuration = 15 + Math.random() * 10 + 's';
    star.style.animationDelay = Math.random() * 10 + 's';

    document.body.appendChild(star);
}


// 🌧️ Slow Smooth Color Rain
const rainContainer = document.getElementById('rainCanvas');

for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';

    const colors = ['#89CFF0', '#4cc9f0', '#72efdd', '#90e0ef', '#48cae4'];

    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = 5 + Math.random() * 5 + 's'; // SLOWER
    drop.style.animationDelay = Math.random() * 5 + 's';
    drop.style.background = colors[Math.floor(Math.random() * colors.length)];

    rainContainer.appendChild(drop);
}

        // PAGES
        let curPage = 1, isMuted = false;
        const mMain = document.getElementById('musicMain'), mGal = document.getElementById('musicGallery');
        mMain.volume = .45; mGal.volume = .5;

        function goToPage(n) {
            const prev = document.getElementById('page' + curPage), next = document.getElementById('page' + n);
            prev.classList.add('exit');
            setTimeout(() => prev.classList.remove('active', 'exit'), 900);
            setTimeout(() => next.classList.add('active'), 350);
            document.getElementById('dot' + (curPage - 1)).classList.remove('on');
            document.getElementById('dot' + (n - 1)).classList.add('on');
            curPage = n;
            if (n === 4) {
                if (!isMuted) { mMain.pause(); mGal.currentTime = 0; mGal.play().catch(() => { }); }
                document.getElementById('musicLabel').textContent = '💕 Romantic';
            } else {
                if (!isMuted) { mGal.pause(); if (mMain.paused) { mMain.currentTime = 0; mMain.play().catch(() => { }); } }
                document.getElementById('musicLabel').textContent = 'Music On';
            }
        }

        // PAGE 1
        let tapped = 0;
        function tapTag(el) {
            if (el.classList.contains('tapped')) return;
            el.classList.add('tapped'); tapped++;
            document.getElementById('progressFill').style.width = (tapped / 10 * 100) + '%';
            
            if (tapped >= 10) document.getElementById('nextBtn1').classList.add('show');
        }

        // PAGE 2
        let curQ = 0;
        function setQuote(i) {
            document.querySelectorAll('.quote').forEach((q, idx) => q.classList.toggle('active-q', idx === i));
            document.querySelectorAll('.qdot').forEach((d, idx) => d.classList.toggle('on', idx === i));
            curQ = i;
        }
        setInterval(() => setQuote((curQ + 1) % 4), 3600);

        // PAGE 3
        function chooseDate(el, msg) {
            document.querySelectorAll('.date-option').forEach(o => o.classList.remove('chosen'));
            el.classList.add('chosen');
            const dm = document.getElementById('dateMsg'); dm.textContent = msg; dm.classList.add('show');
            document.getElementById('nextBtn3').classList.add('show');
            
        }

        // MUSIC
        function startMusic() { if (!isMuted && curPage < 4) mMain.play().catch(() => { }); document.removeEventListener('click', startMusic); document.removeEventListener('touchstart', startMusic); }
        document.addEventListener('click', startMusic); document.addEventListener('touchstart', startMusic);
        function toggleMute() {
            isMuted = !isMuted;
            const ind = document.getElementById('musicIndicator'), lbl = document.getElementById('musicLabel');
            if (isMuted) { mMain.pause(); mGal.pause(); ind.classList.add('muted'); lbl.textContent = 'Muted'; }
            else { ind.classList.remove('muted'); if (curPage === 4) { mGal.play().catch(() => { }); lbl.textContent = '💕 Romantic'; } else { mMain.play().catch(() => { }); lbl.textContent = 'Music On'; } }
        }
// 🎆 Minimal Fireworks Effect
function launchFirework(x, y) {
    const colors = ['#ff4d6d', '#ffd60a', '#00f5d4', '#9b5de5', '#f15bb5'];

    for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'firework';

        const angle = Math.random() * 360;
        const distance = 40 + Math.random() * 30;

        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        spark.style.setProperty('--y', Math.sin(angle) * distance + 'px');

        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 700);
    }
}

// Click Firework
document.addEventListener('click', (e) => {
    launchFirework(e.clientX, e.clientY);
});
    