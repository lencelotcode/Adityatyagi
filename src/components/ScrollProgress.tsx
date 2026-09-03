import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-20 left-0 right-0 h-[3px] bg-black/10 z-40 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full bg-highlight origin-left scale-x-0"
      />
    </div>
  );
}
