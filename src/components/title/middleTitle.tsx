import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MiddleTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(DrawSVGPlugin);
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".ellipse", {
        visibility: "visible",
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ellipse",
            start: "top 60%",
            end: "bottom 60%",
            toggleActions: "play none play reverse",
          },
        })
        .fromTo(
          ".ellipse",
          {
            drawSVG: 0,
            immediateRender: false,
          },
          {
            duration: 2,
            drawSVG: "100%",
            ease: "power4.out",
          },
          "stroke",
        )
        .to(
          ".ellipse-content",
          {
            duration: 1,
            opacity: 0,
            ease: "power4.in",
          },
          "<",
        )
        .to(
          ".ellipse-content",
          {
            duration: 1,
            opacity: 1,
            ease: "power4.out",
          },
          ">",
        )
        .fromTo(
          ".ellipse-content",
          {
            fontFamily: "var(--font-hanken)",
          },
          {
            fontFamily: "var(--font-redaction-italic)",
          },
          "<",
        );
      return () => {
        ctx.revert();
      };
    }, containerRef);
  }, []);

  return (
    <p
      ref={containerRef}
      className="my-6 text-3xl font-semibold text-secondary-black sm:text-5xl sm:leading-tight lg:my-0 lg:leading-snug"
    >
      {children}
    </p>
  );
};

export default MiddleTitle;
