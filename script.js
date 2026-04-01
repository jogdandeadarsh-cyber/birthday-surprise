// १. वाढदिवसाचे गाणे (Audio Setting)
// आपण आता नवीन फोल्डर 'project_data' वापरत आहोत
let bgMusic = new Audio('Project_data/audio_files/bday.mp3.mpeg'); 
bgMusic.loop = true; 
bgMusic.volume = 0.7;
bgMusic.preload = 'auto'; // गाणे आधीच लोड करण्यासाठी

// २. पेज बदलण्याचे फंक्शन
function nextStep(currentId, nextId) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);

    current.classList.add('hidden');
    current.classList.remove('active');

    next.classList.remove('hidden');
    window.scrollTo(0, 0); 
    
    setTimeout(() => {
        next.classList.add('active');
    }, 50);
}

// ३. लॉगिन बटण: पासवर्ड चेक आणि गाणे सुरू करणे
document.getElementById('loginBtn').addEventListener('click', function() {
    const pass = document.getElementById('passwordInput').value;
    const secretPass = "Kalyani@queen07"; 

    if (pass === secretPass) {
        // Chrome/Firefox Autoplay Fix
        bgMusic.play().then(() => {
            console.log("Music started successfully from project_data!");
        }).catch(function(error) {
            console.log("Autoplay issue: ", error);
        });
        
        nextStep('login-page', 'page1');
    } else {
        document.getElementById('errorMsg').style.display = 'block';
        document.getElementById('passwordInput').value = ""; 
    }
});

// ४. बटन १ (Page 1 to Page 2)
document.getElementById('btn1').addEventListener('click', function() {
    bgMusic.play(); // खात्री करण्यासाठी पुन्हा प्ले
    nextStep('page1', 'page2');
});

// ५. बटन २ (Page 2 to Page 3)
document.getElementById('btn2').addEventListener('click', function() {
    document.body.classList.add('lights-on');
    bgMusic.play(); 

    setTimeout(() => {
        nextStep('page2', 'page3');
        createBalloons();
    }, 2000);
});

// ६. फुगे तयार करण्याचे फंक्शन
function createBalloons() {
    const container = document.getElementById('balloon-container');
    if (!container) return;

    const colors = ['#ff2d55', '#ffea00', '#2dff55', '#2d55ff', '#ff55ff'];

    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 2 + "s";
        balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";
        container.appendChild(balloon);
    }
}