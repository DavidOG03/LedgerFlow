import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import { loadGSAPOnce, isMobile } from "../../utils/gsap-loader";

const splitText = (children) => {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ));
    }
    if (isValidElement(child)) {
      if (child.type === "br") return child;
      return cloneElement(child, {
        ...child.props,
        children: splitText(child.props.children),
      });
    }
    return child;
  });
};

export const AnimatedText = ({
  as: Component = "div",
  className = "",
  children,
  delay = 0,
  stagger = 0.025,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    let cancelled = false;

    const initAnimation = async () => {
      const result = await loadGSAPOnce();

      // No GSAP on mobile/reduced motion — make text immediately visible
      if (!result) {
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
        return;
      }

      if (cancelled || !containerRef.current) return;

      const { gsap } = result;
      const mobile = isMobile();

      ctx = gsap.context(() => {
        gsap.fromTo(
          gsap.utils.toArray(".char", containerRef.current),
          {
            opacity: 0,
            scale: 1.5,
            y: 20,
            // blur on desktop only — non-composited, too expensive on mobile
            ...(mobile ? {} : { filter: "blur(8px)" }),
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            stagger,
            ease: "power3.out",
            delay,
            force3D: true,
            ...(mobile ? {} : { filter: "blur(0px)" }),
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              once: true,
            },
          },
        );
      }, containerRef);
    };

    initAnimation();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [delay, stagger]);

  return (
    <Component ref={containerRef} className={className}>
      {splitText(children)}
    </Component>
  );
};
