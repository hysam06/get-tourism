import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class About {
    async mount(container) {
        document.title = "About Us | Great Escapes Tourism";

        container.innerHTML = `
            <div class="about-page-redesign">
                <!-- 1. Hero Section -->
                <section class="about-hero-section">
                    <div class="about-hero-bg"></div>
                    <div class="about-hero-content">
                        <h1 class="about-hero-title">Who We Are</h1>
                    </div>
                </section>

                <!-- 2. Intro Section -->
                <section class="about-intro-section">
                    <div class="container-md">
                        <h2 class="intro-sub-heading">Our Story</h2>
                        <p class="about-intro-text">
                            At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating memories, 
                            forming connections, and expanding horizons. Our company was born out of a deep passion for exploring the world 
                            and sharing those experiences with fellow travelers. We are driven by the desire to offer you unparalleled travel 
                            experiences that leave a lasting imprint on your heart and soul.
                        </p>
                    </div>
                </section>

                <!-- 3. Our Tours Section -->
                <section class="tours-section">
                    <div class="container-md">
                        <div class="tours-grid">
                            <!-- Card 1: UAE Inbound -->
                            <div class="tour-card">
                                <div class="tour-card-content">
                                    <h3 class="tour-card-title">UAE Inbound Tours</h3>
                                    <p class="tour-card-text">
                                        Immerse yourself in the enchanting blend of modernity and tradition that the United Arab Emirates has to offer. 
                                        Our UAE inbound tours offer a comprehensive experience of the region's iconic landmarks, vibrant culture, 
                                        and unique attractions. Discover the heart and soul of Dubai and other Emirates through our expertly crafted itineraries.
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Card 2: Outbound Tours -->
                            <div class="tour-card">
                                <div class="tour-card-content">
                                    <h3 class="tour-card-title">Outbound Tours</h3>
                                    <p class="tour-card-text">
                                        Embark on extraordinary adventures to global destinations that captivate your senses. From the captivating architecture 
                                        of Azerbaijan to the historic charm of Georgia, the cultural wonders of Armenia, the expansive landscapes of Kazakhstan, 
                                        the tropical allure of Malaysia, the dynamic cityscape of Almaty, and the serene beauty of Kerala, India — our outbound 
                                        tours cater to diverse tastes and preferences. We have got your global explorations covered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(container, { type: 'default' }); // Use default footer style

        // Animations
        this.initAnimations();
    }

    initAnimations() {
        // Hero Animation
        gsap.from('.about-hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Intro Animation
        gsap.from('.intro-sub-heading', {
            y: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about-intro-section',
                start: 'top 80%'
            }
        });

        gsap.from('.about-intro-text', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.about-intro-section',
                start: 'top 80%'
            }
        });

        // Tours Grid Animation
        gsap.from('.tour-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.tours-section',
                start: 'top 85%'
            }
        });
    }

    unmount() {
        if (this.footer) this.footer.destroy();
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
