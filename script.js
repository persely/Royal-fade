// ===============================
// GOLDEN DUST BURST ON BUTTON CLICK
// ===============================
const ctaBtn = document.getElementById('claimCrownBtn');

ctaBtn.addEventListener('click', (e) => {
    for (let i = 0; i < 35; i++) {
        let dust = document.createElement('div');
        dust.className = 'gold-dust';
        dust.style.left = e.clientX + 'px';
        dust.style.top = e.clientY + 'px';
        dust.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
        dust.style.setProperty('--dy', (Math.random() * -200) + 'px');
        document.body.appendChild(dust);
        setTimeout(() => dust.remove(), 1200);
    }
});

// ===============================
// GOLDEN DUST TRAIL FOLLOWING MOUSE
// ===============================
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.02) { // control frequency
        let trail = document.createElement('div');
        trail.className = 'gold-dust';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.opacity = 0.6;
        trail.style.setProperty('--dx', (Math.random() * 50 - 25) + 'px');
        trail.style.setProperty('--dy', (Math.random() * -50) + 'px');
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 1000);
    }
});

// ===============================
// PARALLAX SCROLL EFFECTS
// ===============================
const parallaxSections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxSections.forEach((section, index) => {
        let speed = (index + 1) * 0.03;
        section.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ===============================
// SERVICE CARD HOVER SPARKS
// ===============================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        for (let i = 0; i < 15; i++) {
            let spark = document.createElement('div');
            spark.className = 'gold-dust';
            spark.style.left = (card.offsetLeft + Math.random() * card.offsetWidth) + 'px';
            spark.style.top = (card.offsetTop + Math.random() * card.offsetHeight) + 'px';
            spark.style.width = '3px';
            spark.style.height = '3px';
            spark.style.opacity = 0.7;
            spark.style.setProperty('--dx', (Math.random() * 50 - 25) + 'px');
            spark.style.setProperty('--dy', (Math.random() * -50) + 'px');
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 1000);
        }
    });
});

// ===============================
// TESTIMONIAL CARD HOVER SPARKS
// ===============================
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        for (let i = 0; i < 10; i++) {
            let spark = document.createElement('div');
            spark.className = 'gold-dust';
            spark.style.left = (card.offsetLeft + Math.random() * card.offsetWidth) + 'px';
            spark.style.top = (card.offsetTop + Math.random() * card.offsetHeight) + 'px';
            spark.style.width = '2.5px';
            spark.style.height = '2.5px';
            spark.style.opacity = 0.6;
            spark.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
            spark.style.setProperty('--dy', (Math.random() * -40) + 'px');
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 1000);
        }
    });
});

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about-section');
  const position = about.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    about.classList.add('active');
  }
});