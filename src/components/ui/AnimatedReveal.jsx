import { useEffect, useRef } from "react";

let gsapLoaded = false;
let gsapInstance = null;
let ScrollTriggerInstance = null;

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const loadGSAPOnce = async () => {
  // Skip GSAP entirely if reduced motion is preferred
  if (prefersReducedMotion()) return null;

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

export const AnimatedReveal = ({
  as: Component = "div",
  className = "",
  children,
  delay = 0,
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    let ctx;
    let cancelled = false;

    const initAnimation = async () => {
      const result = await loadGSAPOnce();

      // Gracefully skip if reduced motion or unmounted
      if (!result || cancelled || !elRef.current) return;

      const { gsap } = result;
      const mobile = isMobile();

      // Lighter animation config on mobile
      const animationConfig = {
        y: 0,
        opacity: 1,
        duration: mobile ? 0.5 : 1, // shorter duration on mobile
        ease: mobile ? "power2.out" : "power3.out", // cheaper ease on mobile
        delay: mobile ? delay * 0.5 : delay, // cut delay in half on mobile
        force3D: true,
        scrollTrigger: {
          trigger: elRef.current,
          start: mobile ? "top 98%" : "top 95%", // trigger earlier on mobile
          once: true,
        },
      };

      ctx = gsap.context(() => {
        gsap.fromTo(
          elRef.current,
          {
            y: mobile ? 10 : 20, // smaller y offset on mobile
            opacity: 0,
          },
          animationConfig,
        );
      }, elRef);
    };

    initAnimation();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [delay]);

  return (
    <Component ref={elRef} className={className}>
      {children}
    </Component>
  );
};
