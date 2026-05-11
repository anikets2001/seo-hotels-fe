"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { bankOffers } from "./config";

const AUTO_SCROLL_SPEED = 0.6;
const RESUME_DELAY_MS = 1500;

const BankOffersCarousel = () => {
  const scrollerRef = useRef(null);
  const directionRef = useRef(1);
  const animationRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const tick = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      if (!isPaused && maxScroll > 0) {
        let next = scroller.scrollLeft + directionRef.current * AUTO_SCROLL_SPEED;

        // Bounce off the right edge → start moving left.
        if (next >= maxScroll) {
          next = maxScroll;
          directionRef.current = -1;
        }
        // Bounce off the left edge → start moving right.
        if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        scroller.scrollLeft = next;
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAutoScroll = () => setIsPaused(true);
  const resumeAutoScroll = () => setIsPaused(false);

  const handleManualScroll = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector("[data-offer-card]");
    const cardWidth = card?.clientWidth ?? 280;
    const gap = 16;

    setIsPaused(true);
    scroller.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
    directionRef.current = direction;

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  };

  return (
    <section className="mt-6" aria-label="Bank offers">
      <div
        className="relative group"
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        onFocus={pauseAutoScroll}
        onBlur={resumeAutoScroll}
      >
        <button
          type="button"
          onClick={() => handleManualScroll(-1)}
          aria-label="Previous offers"
          className="cursor-pointer absolute left-1 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-1"
        >
          {bankOffers.map((offer) => (
            <article
              key={offer.id}
              data-offer-card
              className="relative shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] h-[130px] rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={offer.bgImage}
                alt={`${offer.bank} hotel offer background`}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
                className="object-cover"
                quality={70}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(110deg, ${offer.accent}F0 0%, ${offer.accent}CC 55%, ${offer.accent}66 100%)`,
                }}
              />

              <div className="relative z-10 h-full p-3 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span
                    className="bg-white text-[11px] font-extrabold tracking-wide px-2 py-1 rounded shadow-sm"
                    style={{ color: offer.accent }}
                  >
                    {offer.bank}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.08em] font-semibold bg-black/30 px-2 py-0.5 rounded-full">
                    {offer.note}
                  </span>
                </div>

                <div>
                  <p className="text-[22px] lg:text-[24px] font-extrabold leading-none drop-shadow-sm">
                    {offer.discount}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.08em] mt-1 opacity-90">
                    {offer.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider opacity-90">Code</span>
                  <span className="text-[11px] font-bold bg-white/95 text-gray-900 px-2 py-1 rounded">
                    {offer.code}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleManualScroll(1)}
          aria-label="Next offers"
          className="cursor-pointer absolute right-1 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary transition-colors"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default BankOffersCarousel;