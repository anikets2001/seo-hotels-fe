"use client";

import { useState } from "react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from "lucide-react";
import { formatInr, parseInrToNumber } from "./helpers";
import Image from "next/image";

const HotelsListCard = ({ hotel, showTotalPrice, tripNights }) => {
  const fallbackGallery = [
    hotel.image,
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  ];
  const images = hotel.images?.length ? hotel.images : fallbackGallery;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const keyBenefits = [
    hotel.highlight,
    hotel.amenities?.[0] ? `${hotel.amenities[0]} available` : "Top-rated guest comfort",
    hotel.amenities?.[1] ? `${hotel.amenities[1]} access` : "Prime location connectivity",
  ].filter(Boolean);

  const seoDescription = `${hotel.name} is a preferred stay option in Mumbai for business and leisure travelers. Enjoy ${hotel.room
    }, convenient access to key city zones, and trusted guest reviews with a rating of ${hotel.rating.replace(
      " / 5",
      ""
    )}.`;
  const nightlyPrice = parseInrToNumber(hotel.price);
  const nightlyOldPrice = parseInrToNumber(hotel.oldPrice);
  const nightlyTax = parseInrToNumber(hotel.taxes);
  const displayPrice = showTotalPrice ? formatInr(nightlyPrice * tripNights) : hotel.price;
  const displayOldPrice =
    hotel.oldPrice && showTotalPrice ? formatInr(nightlyOldPrice * tripNights) : hotel.oldPrice;
  const displayTaxes = showTotalPrice
    ? `+ ${formatInr(nightlyTax * tripNights)} taxes & fees`
    : hotel.taxes;
  const currentImage = images[activeImageIndex];

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[29%] relative h-44 md:h-auto md:self-stretch">
          <Image className="h-full w-full object-cover"
            src={currentImage}
            alt={hotel.name}
            width={500}
            height={500}
            quality={75}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {hotel.badge ? (
            <div className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
              {hotel.badge}
            </div>
          ) : null}
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
          <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/65 text-white text-[15px] font-semibold leading-none">
            {activeImageIndex + 1}/{images.length}
          </div>
        </div>

        <div className="md:w-[71%] p-3.5 md:p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-3">
            <div>
              {hotel.stars ? (
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-orange-400 flex">
                    {Array.from({ length: hotel.stars }).map((_, index) => (
                      <StarIcon key={`${hotel.id}-star-${index}`} className="text-[15px]" />
                    ))}
                  </span>
                  <span className="text-xs text-gray-500">{hotel.category}</span>
                </div>
              ) : null}
              <h2 className="text-[28px] md:text-[24px] font-extrabold leading-[1.15] mb-1">{hotel.name}</h2>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPinIcon className="text-[15px]" />
                {hotel.location}
              </p>
              {hotel.distanceFromCenter ? <p className="text-[15px] text-gray-400 mt-1">{hotel.distanceFromCenter}</p> : null}
            </div>
            <div className="text-right shrink-0 pl-2">
              <div className="bg-primary/10 text-primary font-extrabold px-2 py-1 rounded-md text-xs mb-1 inline-block">
                {hotel.rating}
              </div>
              <p className="text-[15px] text-gray-500">({hotel.reviews})</p>
            </div>
          </div>

          {/* {hotel.amenities ? (
            <div className="flex flex-wrap items-center gap-2 mt-2.5">
              {hotel.amenities.map((amenity) => (
                <div
                  key={`${hotel.id}-${amenity}`}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-[15px] text-gray-600"
                >
                  <WifiIcon name="wifi" className="text-[14px]" />
                  <SwimmingPoolIcon name="pool" className="text-[14px]" />
                  <Building2Icon name="restaurant" className="text-[14px]" />
                  {amenity}
                </div>
              ))}
            </div>
          ) : null} */}

          <div className="flex items-end justify-between mt-3 border-t border-gray-100 pt-3">
            <div className="text-gray-500 pr-3">
              <ul className="space-y-0.5 mb-1.5">
                {keyBenefits.map((benefit, index) => (
                  <li key={`${hotel.id}-benefit-${index}`} className="text-[15px] text-green-700 flex items-center gap-1.5">
                    <CheckIcon className="text-[14px]" />

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-4.5 text-gray-600">{seoDescription}</p>
              {hotel.bankOffer ? <p className="text-primary text-[15px] mt-1">{hotel.bankOffer}</p> : null}
            </div>
            <div className="text-right bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5 min-w-[176px]">
              {displayOldPrice ? <p className="text-[15px] text-gray-500 line-through">{displayOldPrice}</p> : null}
              <p className="text-[25px] font-extrabold leading-tight">{displayPrice}</p>
              <p className="text-[15px] text-gray-500 mb-1.5">{displayTaxes}</p>
              <p className="text-[10px] text-gray-400 mb-2">{showTotalPrice ? `for ${tripNights} nights` : "per night"}</p>
              <button className="bg-primary hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-5 py-2.5 rounded-md cursor-pointer transition-colors duration-200 ease-in-out">
                View Details
              </button>
            </div>
          </div>
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

export default HotelsListCard;