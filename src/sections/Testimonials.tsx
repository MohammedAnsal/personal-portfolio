import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Ansal takes real ownership of his work. He pays attention to details, writes clean code, and always tries to understand the problem deeply before jumping to a solution.",
    author: "Gokul",
    role: "Teammate / Developer",
    avatar: "/peoples/gokul.jpg",
  },
  {
    quote:
      "Working with Ansal was smooth and productive. He communicates clearly, adapts quickly to requirements, and consistently delivers reliable features.",
    author: "Minhaj",
    role: "MERN Developer",
    avatar: "/peoples/Minhaj.jpg",
  },
  {
    quote:
      "Ansal has a strong understanding of full-stack development and system flow. His focus on maintainable code and practical solutions made a real impact on our project.",
    author: "Akash",
    role: "Flutter Developer",
    avatar: "/peoples/Akash.jpeg",
  },
];

const AUTO_DELAY = 5000;

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animState, setAnimState] = useState("visible");
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const pendingIdxRef = useRef<number>(0);
  const directionRef = useRef<string>("next");

  const goTo = useCallback(
    (nextIdx: number, direction = "next") => {
      if (animState !== "visible") return;
      pendingIdxRef.current = nextIdx;
      directionRef.current = direction;
      setAnimState(direction === "next" ? "exit-left" : "exit-right");
    },
    [animState],
  );

  // After exit, swap content and enter
  useEffect(() => {
    if (animState === "exit-left" || animState === "exit-right") {
      const t = setTimeout(() => {
        setActiveIdx(pendingIdxRef.current);
        setAnimState(animState === "exit-left" ? "enter-right" : "enter-left");
      }, 300);
      return () => clearTimeout(t);
    }
    if (animState === "enter-left" || animState === "enter-right") {
      const t = setTimeout(() => setAnimState("visible"), 20);
      return () => clearTimeout(t);
    }
  }, [animState]);

  // Auto-play — always running, no pause
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const next = (activeIdx + 1) % testimonials.length;
      goTo(next, "next");
    }, AUTO_DELAY);
    return () => clearInterval(timerRef.current);
  }, [activeIdx, goTo]);

  // Reset progress bar on slide change
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = "none";
      void progressRef.current.offsetHeight;
      progressRef.current.style.animation = `progress-fill ${AUTO_DELAY}ms linear forwards`;
    }
  }, [activeIdx]);

  const next = () => {
    clearInterval(timerRef.current);
    goTo((activeIdx + 1) % testimonials.length, "next");
  };

  const previous = () => {
    clearInterval(timerRef.current);
    goTo((activeIdx - 1 + testimonials.length) % testimonials.length, "prev");
  };

  const getTransform = () => {
    switch (animState) {
      case "exit-left":
        return "translateX(-48px) scale(0.97)";
      case "exit-right":
        return "translateX(48px) scale(0.97)";
      case "enter-right":
        return "translateX(48px) scale(0.97)";
      case "enter-left":
        return "translateX(-48px) scale(0.97)";
      default:
        return "translateX(0) scale(1)";
    }
  };

  const getOpacity = () => (animState === "visible" ? 1 : 0);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card */}
            <div
              className="glass p-8 rounded-3xl md:p-12 glow-border"
              style={{
                transform: getTransform(),
                opacity: getOpacity(),
                transition:
                  "transform 300ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease",
                willChange: "transform, opacity",
              }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 h-px w-full bg-muted-foreground/10 rounded-full overflow-hidden">
                <div
                  ref={progressRef}
                  className="h-full bg-primary/60 rounded-full"
                  style={{
                    width: "0%",
                    animation: `progress-fill ${AUTO_DELAY}ms linear forwards`,
                  }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx, idx > activeIdx ? "next" : "prev")}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
