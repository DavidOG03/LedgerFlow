import { useEffect, useRef } from "react";

let gsapLoaded = false;
let gsapInstance = null;
let ScrollTriggerInstance = null;

const loadGSAPOnce = async () => {
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
      const { gsap } = await loadGSAPOnce();
      if (cancelled || !elRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          elRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay,
            force3D: true,
            scrollTrigger: {
              trigger: elRef.current,
              start: "top 95%",
              once: true,
            },
          },
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
