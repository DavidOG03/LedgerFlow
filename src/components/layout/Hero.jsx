import React from "react";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { AnimatedReveal } from "../ui/AnimatedReveal";

const Hero = () => {
  return (
    <section className="w-full relative px-4 pt-4 md:pt-10 bg-linear-to-b from-bg via-bg to-accent/20">
      {/* Glows, Grids, and Text contained in a sticky wrapper */}
      <div className="sticky top-[15vh] w-full flex flex-col items-center justify-center z-0">
        <div className="absolute top-10 -right-80 w-[700px] h-[300px] rounded-[50%] bg-accent opacity-20 dark:opacity-60 blur-[80px] pointer-events-none" />
        <div className="absolute top-60 -left-80 w-[700px] h-[300px] rounded-[50%] bg-accent opacity-20 dark:opacity-60 blur-[80px] pointer-events-none" />
        <img
          srcSet="grid-380.webp 380w, grid.webp 760w"
          sizes="(max-width: 412px) 380px, 760px"
          fetchPriority="high"
          alt="grid pattern"
          className="absolute scale-120 md:scale-100 -top-20 left-0 mix-blend-soft-light opacity-10 brightness-125 contrast-75 scale-1.2 dark:opacity-100 pointer-events-none z-[-1]"
        />
        <img
          srcSet="grid-380.webp 380w, grid.webp 760w"
          sizes="(max-width: 412px) 380px, 760px"
          fetchPriority="high"
          decoding="async"
          alt="grid pattern"
          className="absolute hidden md:block -top-20 right-0 mix-blend-soft-light opacity-10 brightness-125 contrast-75 scale-1.2 dark:opacity-100 pointer-events-none z-[-1]"
        />

        <div className="flex flex-col gap-4 text-center relative z-10 mt-10 md:mt-20">
          <AnimatedReveal
            delay={0.1}
            className="flex items-center gap-2 justify-center bg-accent-bg border border-accent-border rounded-full w-fit px-2 py-1 mx-auto"
          >
            <div className="rounded-full w-2 h-2 bg-accent"></div>
            <span className="text-accent text-sm">
              New Multi-currency Support
            </span>
          </AnimatedReveal>
          <AnimatedText
            delay={0.2}
            as="h1"
            className="text-4xl md:text-6xl font-semibold text-text-h"
          >
            <span className="font-sans font-normal tracking-tighter">
              Take Control of Your
              <span className="font-serif italic font-normal tracking-tight whitespace-nowrap">
                {"  Business Finances"}
              </span>
              <br />
              Without the Stress
            </span>
          </AnimatedText>
          <AnimatedReveal
            as="p"
            delay={1.2}
            className="text-text text-lg max-w-2xl mx-auto"
          >
            Automate invoicing, track your expenses and understand your cash
            flow in real time. No Spreadsheets. No confusion.
          </AnimatedReveal>
          <AnimatedReveal
            delay={1.3}
            className="flex justify-center items-center gap-4"
          >
            <Button variant="primary">
              Start Free Trial <ArrowUpRight size={16} />
            </Button>
            <Button variant="secondary">
              View Demo <ArrowUpRight size={16} />
            </Button>
          </AnimatedReveal>
        </div>
      </div>

      {/* Hero image scrolls UP over the sticky text creating a parallax overlap offset */}
      <div className="max-w-5xl mx-auto relative z-10 mt-[20vh] md:mt-[30vh] pb-20">
        <img
          src="/hero.webp"
          srcSet="/hero-380.webp 380w, /hero.webp 984w"
          sizes="(max-width: 768px) 380px, 984px"
          width={984}
          height={801}
          alt="LedgerFlow hero"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
