export default class Footer {
    constructor() {
        this.element = document.createElement('footer');
        this.element.className = 'footer section';
        this.element.innerHTML = `
            <div class="footer-content container">
                <div class="footer-top">
                    <div class="footer-brand">
                        <h2>Great Escapes Tourism</h2>
                        <p>Turn your journey into a memory of a lifetime.</p>
                    </div>
                    <div class="footer-links">
                        <div class="link-col">
                            <h4>Explore</h4>
                            <a href="#/">Home</a>
                            <a href="#/destinations">Destinations</a>
                            <a href="#/services">Services</a>
                        </div>
                         <div class="link-col">
                            <h4>Company</h4>
                            <a href="#/about">About Us</a>
                            <a href="#/contact">Contact</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Great Escapes Tourism. All rights reserved.</p>
                    <div class="socials">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <style>
                .footer {
                    min-height: 50vh;
                    background: var(--surface);
                    color: var(--text-color);
                    display: flex;
                    align-items: center;
                    border-top: 1px solid var(--glass-border);
                }
                .footer-top {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 4rem;
                    margin-bottom: 4rem;
                }
                .footer-brand h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--gold);
                }
                .footer-brand p {
                    opacity: 0.7;
                    max-width: 300px;
                }
                .footer-links {
                    display: flex;
                    gap: 4rem;
                }
                .link-col {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .link-col h4 {
                    font-size: 1rem;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    letter-spacing: 1px;
                }
                .link-col a, .socials a {
                    opacity: 0.6;
                    transition: opacity 0.3s;
                }
                .link-col a:hover, .socials a:hover {
                    opacity: 1;
                    color: var(--gold);
                }
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    font-size: 0.9rem;
                    opacity: 0.6;
                }
                .socials {
                    display: flex;
                    gap: 1.5rem;
                }
                @media(max-width: 768px) {
                    .footer-top {
                        flex-direction: column;
                        gap: 2rem;
                    }
                    .footer-links {
                        flex-wrap: wrap;
                        gap: 2rem;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }
            </style>
        `;

        // Use a style tag for CSS to avoid cluttering global styles? 
        // We are appending style tag inside the innerHTML which works but is not ideal for repeated mounts.
        // Better to append to head once, but for simplicity here it's fine as footer is static singleton essentially.
        const style = document.createElement('style');
        style.textContent = this.element.querySelector('style').textContent;
        this.element.querySelector('style').remove();
        document.head.appendChild(style);
    }

    mount(parent) {
        parent.appendChild(this.element);
    }
}
