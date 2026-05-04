"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from "lucide-react";
import { formatInr, parseInrToNumber } from "./helpers";
import Image from "next/image";

const HotelsGridCard = ({ hotel, showTotalPrice, tripNights }) => {
    const fallbackGallery = [
      hotel.image,
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ];
    const images = hotel.images?.length ? hotel.images : fallbackGallery;
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const currentImage = images[activeImageIndex];
    const nightlyPrice = parseInrToNumber(hotel.price);
    const displayPrice = showTotalPrice ? formatInr(nightlyPrice * tripNights) : hotel.price;
  
    return (
      <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_18px_35px_rgba(15,23,42,0.12)] transition-shadow group">
        <div className="relative h-48 overflow-hidden">
          <Image
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={currentImage}
            alt={hotel.name}
            width={500}
            height={500}
            quality={75}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-primary flex items-center gap-1 font-bold text-sm">
            <StarIcon className="text-[16px]" />
            {hotel.ratingValue}
          </div>
          {activeImageIndex > 0 ? (
            <button
              type="button"
              onClick={() => setActiveImageIndex((current) => Math.max(current - 1, 0))}
              className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="text-[18px]" />
            </button>
          ) : null}
          {activeImageIndex < images.length - 1 ? (
            <button
              type="button"
              onClick={() => setActiveImageIndex((current) => Math.min(current + 1, images.length - 1))}
              className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRightIcon className="text-[18px]" />
            </button>
          ) : null}
          <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/65 text-white text-[13px] font-semibold leading-none">
            {activeImageIndex + 1}/{images.length}
          </div>
        </div>
        <div className="p-4 flex flex-col min-h-[185px]">
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{hotel.name}</h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
            <MapPinIcon className="text-[16px]" />
            {hotel.gridLocation}
          </div>
          {hotel.distanceFromCenter ? <p className="text-xs text-gray-500 mb-2">{hotel.distanceFromCenter}</p> : null}
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col">
              {hotel.oldPrice ? <span className="text-sm text-gray-500 line-through">{hotel.oldPrice}</span> : null}
              <span className="text-[24px] text-primary font-black">
                {displayPrice}
                <span className="text-sm font-normal text-gray-500">{showTotalPrice ? `/${tripNights} nights` : "/night"}</span>
              </span>
            </div>
            <button className="bg-primary hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out">
              Book
            </button>
          </div>
        </div>
        <div className="w-full border-t border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2.5">
          <p className="text-[13px] text-emerald-800 font-medium">
            {hotel.bankOffer
              ? hotel.bankOffer.replace("Best bank offer: ", "")
              : "Limited time offer: Save more on prepaid hotel bookings!"}
          </p>
        </div>
      </article>
    );
  }

export default HotelsGridCard;