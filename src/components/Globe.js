import * as THREE from 'three';
import { countries } from '../data/countries.js';
// Optional: import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
// We will implement basic rotation first.

export default class Globe {
    constructor(container) {
        this.container = container;

        // Scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.camera.position.z = 2.8;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 3, 5);
        this.scene.add(pointLight);

        // Globe Group
        this.globeGroup = new THREE.Group();
        this.scene.add(this.globeGroup);

        // Main Globe Sphere
        const geometry = new THREE.IcosahedronGeometry(1, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x10b981,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        this.globe = new THREE.Mesh(geometry, material);
        this.globeGroup.add(this.globe);

        // Inner Glow Sphere
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x050505,
            transparent: true,
            opacity: 0.95
        });
        const glowSphere = new THREE.Mesh(geometry, glowMaterial);
        this.globeGroup.add(glowSphere);

        // Markers
        this.markers = [];
        this.addMarkers();

        // Stars
        this.createStars();

        // Interaction
        this.raycaster = new THREE.Raycaster();
        this.mouseVector = new THREE.Vector2();
        this.targetRotation = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.windowHalfX = container.clientWidth / 2;
        this.windowHalfY = container.clientHeight / 2;
        this.isDragging = false;

        // Animation Loop
        this.animate = this.animate.bind(this);
        this.animate();

        // Event Listeners
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);

        document.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
        this.renderer.domElement.addEventListener('click', (e) => this.onClick(e), false);
    }

    // Convert Lat/Lon to 3D Vector
    latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));

        return new THREE.Vector3(x, y, z);
    }

    addMarkers() {
        const markerGeo = new THREE.SphereGeometry(0.02, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 }); // Gold

        Object.values(countries).forEach(country => {
            if (country.lat && country.lon) {
                const pos = this.latLonToVector3(country.lat, country.lon, 1);

                const marker = new THREE.Mesh(markerGeo, markerMat.clone());
                marker.position.copy(pos);
                marker.userData = { id: country.id, name: country.name };

                // Add ring for visual flair works nicely too, but let's keep simple first

                this.globeGroup.add(marker);
                this.markers.push(marker);
            }
        });
    }

    createStars() {
        const starGeo = new THREE.BufferGeometry();
        const starCount = 1000;
        const posArray = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starMat = new THREE.PointsMaterial({
            size: 0.005,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        this.stars = new THREE.Points(starGeo, starMat);
        this.scene.add(this.stars);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX - this.windowHalfX);
        this.mouse.y = (event.clientY - this.windowHalfY);

        // Raycasting for cursor style
        this.updateRaycaster(event);
    }

    onClick(event) {
        const intersects = this.updateRaycaster(event);
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData && object.userData.id) {
                window.location.hash = `/country/${object.userData.id}`;
            }
        }
    }

    updateRaycaster(event) {
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouseVector, this.camera);
        const intersects = this.raycaster.intersectObjects(this.markers);

        if (intersects.length > 0) {
            this.container.style.cursor = 'pointer';

            // Highlight effect
            intersects[0].object.scale.set(1.5, 1.5, 1.5);
            intersects[0].object.material.color.setHex(0xffffff); // Flash white
        } else {
            this.container.style.cursor = 'default';
            // Reset scale/color
            this.markers.forEach(m => {
                m.scale.set(1, 1, 1);
                m.material.color.setHex(0xd4af37);
            });
        }

        return intersects;
    }

    handleResize() {
        if (!this.container) return;

        this.windowHalfX = this.container.clientWidth / 2;
        this.windowHalfY = this.container.clientHeight / 2;

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        if (!this.renderer) return;

        requestAnimationFrame(this.animate);

        // Simple customized rotation
        this.targetRotation.x = this.mouse.x * 0.0001;
        this.targetRotation.y = this.mouse.y * 0.0001;

        this.globeGroup.rotation.y += 0.002 + (this.targetRotation.x - this.globeGroup.rotation.y) * 0.05;
        this.globeGroup.rotation.x += (this.targetRotation.y - this.globeGroup.rotation.x) * 0.05;

        // Rotate stars
        if (this.stars) {
            this.stars.rotation.y -= 0.0002;
        }

        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('mousemove', this.onMouseMove);
        // dispose geometries
        this.renderer.dispose();
        if (this.container && this.renderer.domElement) {
            this.container.removeChild(this.renderer.domElement);
        }
        this.renderer = null;
    }
}
