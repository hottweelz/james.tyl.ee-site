/*--------------- Fun Facts ---------------*/
const funFacts = [
    "The 'S' in 'IoT' stands for security.",
    "I have the heart of a small boy; I keep it in a jar on my desk.",
    "My hobby is the collection of United States currency, large denominations preferred.",
    "The only limit is yourself... and possibly several external factors.",
    "You are unique, just like everyone else who was told they were special.",
    "I never forget a face, though I often wish I could.",
    "If you rearrange the letters in “listen,” you get “silent,” which is what most meetings should be.",
    "The human brain named itself.",
    "The 'cloud' is just someone else’s computer you’re trusting not to catch fire.",
    "Most 'once in a lifetime opportunities' happen about three times a year.",
    "The 'reply all' button has destroyed more careers than incompetence.",
    "'Just a small change' has started more outages than hurricanes.",
    "AI will not replace programmers, just the ones who already weren’t reading the documentation.",
    "You owe me a 10 second car."
];

const btn = document.getElementById('fun-fact-btn');
const panel = document.getElementById('fun-fact-panel');
const factText = document.getElementById('fun-fact-text');
let lastIndex = -1;

// Only add event listener if the button exists (homepage only)
if (btn) {
    btn.addEventListener('click', () => {
        let idx;
        do { idx = Math.floor(Math.random() * funFacts.length); }
        while (idx === lastIndex && funFacts.length > 1);
        lastIndex = idx;

        factText.textContent = funFacts[idx];

        // Toggle visibility with re-trigger animation
        panel.classList.remove('visible');
        void panel.offsetWidth; // reflow
        panel.classList.add('visible');

        // Set focus to the text content for accessibility
        panel.focus();
    });
}

// Check if the prefers-reduced-motion media query is set
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*--------------- Hamburger Menu ---------------*/
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Only initialize hamburger menu if elements exist
if (hamburger && navLinks) {
    // Add inert on mobile initially (when menu is closed)
    const mobileMenu = window.matchMedia('(max-width: 768px)');
    if (mobileMenu.matches) {
        navLinks.setAttribute('inert', '');
    }

    hamburger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        // Toggle inert: only inert when menu is closed
        if (open) {
            navLinks.removeAttribute('inert');
        } else {
            navLinks.setAttribute('inert', '');
        }
    });
}

/*--------------- Scroll Reveal ---------------*/
const revealEls = document.querySelectorAll('.reveal');

// Only observe if not reduced motion
if (!prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger children in the same batch
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 80 * (i % 4));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
} else {
    // Show all elements immediately if reduced motion is preferred
    revealEls.forEach(el => el.classList.add('visible'));
}

/*--------------- Active nav highlighting on scroll ---------------*/
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--warm)' : '';
    });
}, { passive: true });

/*--------------- Privacy Policy Popup ---------------*/
const privacyPopup = document.getElementById('privacy-popup');
const privacyAcceptBtn = document.getElementById('privacy-accept');
const privacyCloseBtn = document.getElementById('privacy-close');
const cookieSettingsBtn = document.getElementById('cookie-settings');

// Only initialize privacy popup if it exists
if (privacyPopup && privacyAcceptBtn) {
    // Check if user has already accepted (check both keys for backwards compatibility)
    const hasAccepted = localStorage.getItem('privacy-accepted') === 'true';

    if (!hasAccepted && privacyPopup.classList.contains('hidden')) {
        // Show popup after 1 second to let page load first
        setTimeout(() => {
            privacyPopup.classList.remove('hidden');
        }, 1000);
    }

    // Handle accept button
    privacyAcceptBtn.addEventListener('click', () => {
        localStorage.setItem('privacy-accepted', 'true');
        privacyPopup.classList.add('hidden');
        // Load Google Analytics after consent
        loadGoogleAnalytics();
    });

    // Handle close button (dismiss without accepting)
    if (privacyCloseBtn) {
        privacyCloseBtn.addEventListener('click', () => {
            privacyPopup.classList.add('hidden');
        });
    }

    // Handle cookie settings link
    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            privacyPopup.classList.remove('hidden');
        });
    }
}

/*--------------- Book Hero Close ---------------*/
const bookHeroClose = document.getElementById('book-hero-close');
const bookHero = document.getElementById('book-hero');

if (bookHeroClose && bookHero) {
    bookHeroClose.addEventListener('click', () => {
        bookHero.style.display = 'none';
    });
}

// Load Google Analytics
function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-F8X709ETL8';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-F8X709ETL8');
}
