"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const HotelImageCarousel = ({
  images,
  alt,
  idPrefix,
  wrapperClassName,
  imageClassName = "h-full w-full object-cover",
  countBadgeClassName = "text-[13px] font-semibold leading-none",
  topLeft = null,
  topRight = null,
}) => {
  const sliderRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const updateActiveImageFromScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const nextIndex = Math.round(scrollLeft / clientWidth);
    setActiveImageIndex(Math.min(Math.max(nextIndex, 0), images.length - 1));
  }, [images.length]);

  const scrollToImage = useCallback(
    (targetIndex) => {
      if (!sliderRef.current) return;
      const boundedIndex = Math.min(Math.max(targetIndex, 0), images.length - 1);
      sliderRef.current.scrollTo({
        left: boundedIndex * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
      setActiveImageIndex(boundedIndex);
    },
    [images.length]
  );

  const handleImageRailWheel = useCallback((event) => {
    if (!sliderRef.current) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      sliderRef.current.scrollLeft += event.deltaY;
    }
  }, []);

  if (!images?.length) return null;

  return (
    <div className={`min-h-0 overflow-hidden ${wrapperClassName}`.trim()}>
      <div
        ref={sliderRef}
        onScroll={updateActiveImageFromScroll}
        onWheel={handleImageRailWheel}
        className="flex h-full max-h-full min-h-0 w-full touch-pan-x snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-y-none scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <div
            key={`${idPrefix}-image-${index}`}
            className="relative h-full max-h-full min-h-0 w-full shrink-0 snap-start overflow-hidden"
          >
            <Image
              className={`${imageClassName} block max-h-full min-h-0 w-full`}
              src={image}
              alt={alt}
              width={500}
              height={500}
              quality={75}
              draggable={false}
              style={{ width: "100%", height: "100%", maxHeight: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      {topLeft}
      {topRight}
      <div
        className={`absolute bottom-2 left-2 z-[2] rounded-full bg-black/65 px-2 py-1 text-white ${countBadgeClassName}`}
      >
        {activeImageIndex + 1}/{images.length}
      </div>
      <div className="absolute bottom-2 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/35 px-2 py-1">
        {images.map((_, index) => (
          <button
            key={`${idPrefix}-dot-${index}`}
            type="button"
            onClick={() => scrollToImage(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              index === activeImageIndex ? "w-4 bg-white" : "bg-white/65 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelImageCarousel;
