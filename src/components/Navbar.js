export default class Navbar {
    constructor() {
        this.element = document.createElement('nav');
        this.element.className = 'navbar glass';
        this.element.innerHTML = `
            <div class="nav-container">
                <a href="#/" data-link class="logo">Great Escapes</a>
                <div class="nav-links">
                    <a href="#/" data-link>Home</a>
                    <a href="#/about" data-link>About</a>
                    <a href="#/services" data-link>Services</a>
                    <a href="#/destinations" data-link>Destinations</a>
                    <a href="#/contact" data-link>Contact</a>
                </div>
                <div class="mobile-menu-btn">
                     <span></span><span></span>
                </div>
            </div>
        `;

        // Add specific styles for navbar
        const style = document.createElement('style');
        style.textContent = `
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: var(--nav-height);
                z-index: 100;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--glass-border);
            }
            
            .nav-container {
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .logo {
                font-family: "Instrument Serif", serif;
                font-size: 1.8rem;
                font-weight: 500;
                color: var(--text-color);
                letter-spacing: -0.02em;
            }
            
            .nav-links {
                display: flex;
                gap: 2rem;
            }
            
            .nav-links a {
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                opacity: 0.7;
                transition: opacity 0.3s ease;
                position: relative;
            }
            
            .nav-links a::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0%;
                height: 1px;
                background: var(--gold);
                transition: width 0.3s ease;
            }
            
            .nav-links a:hover {
                opacity: 1;
            }
            
            .nav-links a:hover::after {
                width: 100%;
            }

            .mobile-menu-btn {
                display: none;
                flex-direction: column;
                gap: 6px;
                cursor: pointer;
            }

            .mobile-menu-btn span {
                width: 24px;
                height: 2px;
                background: var(--text-color);
            }

            @media (max-width: 768px) {
                .nav-links {
                    display: none;
                }
                .mobile-menu-btn {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
    }

    mount(parent) {
        parent.insertBefore(this.element, parent.firstChild);
    }
}
