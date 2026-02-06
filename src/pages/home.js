import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class Home {
    constructor(params) {
        this.params = params;
    }

    async mount(container) {
        container.innerHTML = `
        <section class="hero">
            <div class="sky-container">
            <img src="/sky.jpg" alt="" />
            <div class="sky-text-overlay">
                <h1 class="hero-title">Discover The World</h1>
                <p class="hero-subtitle">Create Memories with Great Escapes Tourism!</p>
            </div>
            </div>
            <div class="hero-copy">
            <h1>
                What unfolds here is not a scene, but a duration. A sustained moment
                where scale dissolves, edges soften, and perception lingers longer
                than expected. The frame holds steady while the world behind it
                shifts.
            </h1>
            </div>
            <div class="window-container">
            <img src="/window.png" alt="" />
            <div class="cta-container">
                <div class="cta-button">Book the Flight</div>
                <div class="cta-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
                </div>
            </div>
            </div>
            <div class="hero-header">
            <div class="col">
                <h1>
                An aperture <br />
                into stillness
                </h1>
                <p>
                A constructed moment, suspended between form and vastness. Light,
                surface, and scale are carefully arranged to suggest movement
                without urgency, presence without intrusion.
                </p>
            </div>
            <div class="col">
                <p>Observation Mode</p>
                <h1>
                Where distance <br />
                becomes a presence
                </h1>
            </div>
            </div>
        </section>

        <section class="about-us">
            <div class="about-content">
            <h2 class="section-label">About Us</h2>
            <h1 class="section-title">Welcome to <br> Great Escapes Tourism</h1>
            <p class="section-text">
                At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating
                memories,
                forming connections, and expanding horizons. Our company was born out of a deep passion for exploring the world
                and sharing those experiences with fellow travelers. We are driven by the desire to offer you unparalleled
                travel experiences that leave a lasting imprint on your heart and soul.
            </p>
            <button class="enquire-btn">ENQUIRE NOW</button>
            </div>
        </section>

        <section class="outro">
            <h1>End of view.</h1>
        </section>
        `;

        this.initAnimations();
    }

    initAnimations() {
        const windowContainer = document.querySelector(".window-container");
        const skyContainer = document.querySelector(".sky-container");
        const heroCopy = document.querySelector(".hero-copy");
        const heroHeader = document.querySelector(".hero-header");

        if (!windowContainer || !skyContainer) return;

        const skyContainerHeight = skyContainer.offsetHeight;
        const viewportHeight = window.innerHeight;
        const skyMoveDistance = skyContainerHeight - viewportHeight;

        // Initial positions
        gsap.set(heroCopy, { yPercent: 100 });

        // Entrance Animation for New Text
        gsap.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.to(".hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1.5
        });


        ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            end: `+=${viewportHeight * 3}px`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                let windowScale;
                if (progress <= 0.5) {
                    windowScale = 1 + (progress / 0.5) * 3;
                } else {
                    windowScale = 4;
                }
                gsap.set(windowContainer, { scale: windowScale });
                gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });

                gsap.set(skyContainer, {
                    y: -progress * skyMoveDistance,
                });

                let heroCopyY;
                if (progress <= 0.66) {
                    heroCopyY = 100;
                } else if (progress >= 1) {
                    heroCopyY = 0;
                } else {
                    heroCopyY = 100 * (1 - (progress - 0.66) / 0.34);
                }
                gsap.set(heroCopy, { yPercent: heroCopyY });
            },
        });
    }

    unmount() {
        // Kill ScrollTriggers created in this component
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
