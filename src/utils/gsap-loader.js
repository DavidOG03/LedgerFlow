
let gsapLoaded = false;
let gsapInstance = null;
let ScrollTriggerInstance = null;

export const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

export const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const loadGSAPOnce = async () => {
    if (isMobile() || prefersReducedMotion()) return null;
    if (gsapLoaded)
        return { gsap: gsapInstance, ScrollTrigger: ScrollTriggerInstance };

    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsapInstance = gsap;
    ScrollTriggerInstance = ScrollTrigger;
    gsapLoaded = true;

    return { gsap, ScrollTrigger };
};