// Theme toggle
document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const container = document.getElementById('theme-toggle-container');
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const optionButtons = document.querySelectorAll('.theme-option');

    // Open/close toggle menu
    toggleBtn.addEventListener('click', () => {
        container.classList.toggle('open');
    });

    // Apply theme based on selection
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme');
        applyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        });
    });

    function applyTheme(theme) {
        root.classList.remove('light-mode');
        if (theme === 'light') {
        root.classList.add('light-mode');
        } else if (theme === 'auto') {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (prefersLight) {
            root.classList.add('light-mode');
        }
        // else: default dark mode stays
        }
        // theme === 'dark' just leaves dark mode as default
    }

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'auto';
    applyTheme(savedTheme);
});

//  Cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.cursor');

    if (glow) {
        // Move the custom cursor
        document.addEventListener('mousemove', (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Handle hover effect on links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                glow.classList.add('hovering-link');
            });
            link.addEventListener('mouseleave', () => {
                glow.classList.remove('hovering-link');
            });
        });
    }
});

// Disable cursor for non-PC devices
function isPC() {
    return window.matchMedia("(pointer: fine)").matches;
}

// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    if (!isPC()) {
    // Disable or remove the custom cursor for non-PC devices
    const cursor = document.querySelector(".cursor");
        if (cursor) {
            cursor.style.display = "none"; // Option 1: hide it
            // cursor.remove(); // Option 2: remove it completely from the DOM
        }
    }
});

// Hero animation
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.hero-main-images .hero-img');
    if (!images || images.length === 0) return;

    const setSize = 3;
    let currentSet = 0;

    function hideAll() {
        images.forEach(img => img.classList.remove('visible'));
    }

    function showSet(index) {
        hideAll();
        const start = index * setSize;
        const end = start + setSize;
        let delay = 0;
        for (let i = start; i < end; i++) {
        if (images[i]) {
            setTimeout(() => {
            images[i].classList.add('visible');
            }, delay);
            delay += 400; // delay each image
        }
        }
    }

    showSet(currentSet);

    setInterval(() => {
        currentSet = (currentSet + 1) % 2; // toggle between 0 and 1
        showSet(currentSet);
    }, 8000); // change every 8 seconds
});

// GSAP confettin animation
document.addEventListener("DOMContentLoaded", function () {
    // Register the plugin
    if (typeof gsap !== "undefined" && typeof Physics2DPlugin !== "undefined") {
        gsap.registerPlugin(Physics2DPlugin);
    } else {
        console.warn("GSAP or Physics2DPlugin not loaded");
        return;
    }

    // Your target button
    const button = document.querySelector(".confetti-trigger");
    if (!button) return;

        button.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default link behavior (optional)
        
        const link = button.getAttribute("href"); // Get the link target
        const dotCount = gsap.utils.random(15, 30, 1);
        const colors = ["#ffffff", "#cccccc", "#999999", "#666666", "#333333", "#000000"];

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");

            document.body.appendChild(dot);

            gsap.set(dot, {
            backgroundColor: gsap.utils.random(colors),
            top: event.clientY,
            left: event.clientX,
            scale: 0
            });

            gsap.timeline({
            onComplete: () => dot.remove()
            })
            .to(dot, {
            scale: gsap.utils.random(0.3, 1),
            duration: 0.3,
            ease: "power3.out"
            })
            .to(dot, {
            duration: 1.2,
            physics2D: {
                velocity: gsap.utils.random(150, 600),
                angle: gsap.utils.random(0, 360),
                gravity: 1500
            },
            autoAlpha: 0,
            ease: "none"
            }, "<");
        }

        // ⏳ Wait for the animation to play before navigating
        setTimeout(() => {
            window.location.href = link;
        }, 600); // Adjust this delay if needed
    });
});

// Play/pause toggle
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('aboutVideo');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const toggleBtn = document.getElementById('videoToggle');

    if (video && playIcon && pauseIcon && toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'inline';
        } else {
          video.pause();
          playIcon.style.display = 'inline';
          pauseIcon.style.display = 'none';
        }
      });
    }
});

// Scroll progress
document.addEventListener('DOMContentLoaded', () => {
    const scrollFill = document.querySelector('.scroll-fill');
    const toTop = document.querySelector('.to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update scroll fill height
        scrollFill.style.height = scrollPercent + '%';

        // Toggle visibility after 300px
        if (scrollTop > 300) {
            toTop.classList.add('visible');
        } else {
            toTop.classList.remove('visible');
        }
    });
});