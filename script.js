import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const windowContainer = document.querySelector(".window-container");
  const skyContainer = document.querySelector(".sky-container");
  const heroCopy = document.querySelector(".hero-copy");
  const heroHeader = document.querySelector(".hero-header");

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
    end: `+=${window.innerHeight * 3}px`,
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
});
