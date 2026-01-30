/* =============================================
   GRILLED PIXELS STYLE - PORTFOLIO SCRIPTS
   ============================================= */

// =============================================
// LOADER
// =============================================
document.body.classList.add('loading');

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
        document.body.classList.remove('loading');

        // Trigger entrance animations
        initAnimations();
    }, 1500);
});

// =============================================
// CUSTOM CURSOR
// =============================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;

    if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }
    if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-row');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'));
});

// =============================================
// ENTRANCE ANIMATIONS
// =============================================
function initAnimations() {
    const animItems = document.querySelectorAll('.anim-item');

    animItems.forEach(item => {
        const delay = item.dataset.delay || 0;
        setTimeout(() => {
            item.classList.add('visible');
        }, delay * 1000);
    });
}

// =============================================
// SMOOTH SCROLLING
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// SCROLL REVEAL
// =============================================
const revealElements = document.querySelectorAll('.section-header, .project-card, .about-grid > div, .contact-content, .contact-form');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// =============================================
// COUNTER ANIMATION
// =============================================
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
};

// Observer for stat numbers
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-num[data-target]');
            counters.forEach((counter, index) => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    setTimeout(() => animateCounter(counter), index * 200);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// =============================================
// FORM HANDLING
// =============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.form-btn');
        const btnText = btn.querySelector('.btn-text');

        btnText.textContent = 'Sending...';

        setTimeout(() => {
            btnText.textContent = 'Sent!';
            setTimeout(() => {
                btnText.textContent = 'Send Message';
                contactForm.reset();
            }, 2000);
        }, 1000);
    });
}

// =============================================
// CURRENT TIME
// =============================================
function updateTime() {
    const timeEl = document.getElementById('currentTime');
    if (timeEl) {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Seoul',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        timeEl.textContent = `Seoul ${now.toLocaleTimeString('en-US', options)}`;
    }
}
updateTime();
setInterval(updateTime, 60000);

// =============================================
// MAGNETIC EFFECT
// =============================================
const magneticElements = document.querySelectorAll('.view-all-btn, .form-btn');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// =============================================
// PROJECT CARD TILT
// =============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// =============================================
// PARALLAX ON SCROLL
// =============================================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            // Hero parallax
            const heroContent = document.querySelector('.hero-content');
            if (heroContent && scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrollY / window.innerHeight);
            }

            ticking = false;
        });
        ticking = true;
    }
});

// =============================================
// MARQUEE PAUSE ON HOVER
// =============================================
const marquee = document.querySelector('.marquee-inner');
const marqueeSection = document.querySelector('.marquee-section');

if (marqueeSection && marquee) {
    marqueeSection.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marqueeSection.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
}

// =============================================
// TITLE WORD ANIMATION ON SCROLL
// =============================================
const titleWords = document.querySelectorAll('.title-word');

titleWords.forEach(word => {
    word.addEventListener('mouseenter', () => {
        word.style.fontStyle = 'italic';
        word.style.color = '#5EFFFF';
    });

    word.addEventListener('mouseleave', () => {
        word.style.fontStyle = 'normal';
        word.style.color = '';
    });
});
