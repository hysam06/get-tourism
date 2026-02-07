import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

export default class Globe {
    constructor(container) {
        this.container = container;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.init();
    }

    init() {
        // Initialize Scene
        this.scene = new THREE.Scene();

        // Initialize Camera
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
        this.camera.position.z = 400;

        // Initialize Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        // Initialize Globe
        this.globe = new ThreeGlobe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

        this.scene.add(this.globe);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const dLight = new THREE.DirectionalLight(0xffffff, 1);
        dLight.position.set(100, 100, 100);
        this.scene.add(dLight);

        // Animation Loop
        this.animate();

        // Handle Resize
        this.resizeHandler = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.resizeHandler);
    }

    animate() {
        if (!this.renderer) return;
        this.animationId = requestAnimationFrame(() => this.animate());

        // Auto rotate
        if (this.globe) {
            this.globe.rotation.y += 0.002;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.width, this.height);
    }

    destroy() {
        cancelAnimationFrame(this.animationId);
        window.removeEventListener('resize', this.resizeHandler);

        if (this.renderer) {
            this.renderer.dispose();
            if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
            }
        }

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.globe = null;
    }
}
