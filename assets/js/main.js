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

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');
    const icon = toggleButton.querySelector('i');
    const menuItems = [...menu.querySelectorAll('.mobile-menu-links li, .mobile-menu-bottom > *')];

    let isOpen = false;

    toggleButton.addEventListener('click', function () {
        isOpen = !isOpen;

        if (isOpen) {
            // Open menu
            menu.classList.add('active');
            document.body.classList.add('no-scroll');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');

            // Wait for opacity transition before showing elements
            setTimeout(() => {
                menu.classList.add('show-elements');
                menuItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 50}ms`;
                });
            }, 200); // matches CSS fade time
        } else {
            // Close menu
            menu.classList.remove('show-elements');
            menuItems.forEach(item => {
                item.style.transitionDelay = '0ms';
            });

            // Wait for item animation to finish before hiding background
            setTimeout(() => {
                menu.classList.remove('active');
                document.body.classList.remove('no-scroll');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }, 200); // keep in sync with CSS transitions
        }
    });
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

// Accordion
// document.addEventListener("DOMContentLoaded", () => {
//     const accordionHeaders = document.querySelectorAll(".accordion-header");
//     const accordionContents = document.querySelectorAll(".accordion-content");

//     accordionHeaders.forEach((header) => {
//         header.addEventListener("click", () => {
//             const accordionItem = header.parentElement;
//             const accordionContent = accordionItem.querySelector(".accordion-content");

//             if (!accordionContent) return;

//             accordionContents.forEach((content) => {
//                 if (content !== accordionContent) {
//                     content.classList.remove("active");
//                     content.style.maxHeight = "0";
//                 }
//             });

//             const isActive = accordionContent.classList.contains("active");

//             if (isActive) {
//                 accordionContent.classList.remove("active");
//                 accordionContent.style.maxHeight = "0";
//             } else {
//                 accordionContent.classList.add("active");
//                 accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accodion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const button = item.querySelector("a.btn");

        header.addEventListener("click", function (e) {
            // Prevent closing/opening when the button is clicked
            if (e.target.closest("a.btn")) return;

            // Close all others if you want only one open at a time
            accordionItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("open");
                }
            });

            // Toggle current
            item.classList.toggle("open");
        });
    });
});