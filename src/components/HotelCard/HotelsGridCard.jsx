"use client";

import Link from "next/link";
import { MapPinIcon } from "lucide-react";
import { formatInr, parseInrToNumber } from "./helpers";
import HotelImageCarousel from "./subcomponents/HotelImageCarousel";
import SponsoredTag from "./subcomponents/SponsoredTag";
import StarRatingBadge from "./subcomponents/StarRatingBadge";
import WishlistButton from "./subcomponents/WishlistButton";

const HotelsGridCard = ({ hotel, showTotalPrice, tripNights }) => {
  const fallbackGallery = [
    hotel.image,
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  ];
  const images = hotel.images?.length ? hotel.images : fallbackGallery;
  const nightlyPrice = parseInrToNumber(hotel.price);
  const displayPrice = showTotalPrice ? formatInr(nightlyPrice * tripNights) : hotel.price;
  const hotelDetailHref = `/`;

  return (
    <article className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_18px_35px_rgba(15,23,42,0.12)] transition-shadow group focus-within:ring-2 focus-within:ring-primary/30">
      <HotelImageCarousel
        images={images}
        alt={hotel.name}
        idPrefix={hotel.id}
        wrapperClassName="relative h-48 overflow-hidden"
        imageClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        countBadgeClassName="text-[13px] font-semibold leading-none"
        topLeft={
          hotel.sponsored ? (
            <div className="absolute top-3 left-3 z-[2]">
              <SponsoredTag />
            </div>
          ) : null
        }
        topRight={
          <div className="absolute top-3 right-3 z-[2] flex flex-col items-end gap-2">
            <WishlistButton hotelName={hotel.name} />
            {/* <div className="bg-white/90 backdrop-blur px-2 py-1 rounded text-primary flex items-center gap-1 font-bold text-sm">
            <StarIcon className="text-[16px]" />
            {hotel.stars}
          </div> */}
          </div>
        }
      />
      {/* Only the section below the image is the clickable detail-page area —
          this keeps the image controls (carousel, wishlist) free of
          accidental navigation. */}
      <div className="relative">
        <Link
          href={hotelDetailHref}
          aria-label={`View details for ${hotel.name}`}
          className="absolute inset-0 z-[1] focus:outline-none"
        />
        <div className="p-4 flex flex-col min-h-[185px]">
          {hotel.stars ? (
            <div className="flex items-center gap-2 mb-1.5">
              <StarRatingBadge stars={hotel.stars} size={14} />
            </div>
          ) : null}
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
            <Link
              href={hotelDetailHref}
              className="relative z-[2] bg-primary hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="w-full border-t border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2.5">
          <p className="text-[13px] text-emerald-800 font-medium">
            {hotel.bankOffer
              ? hotel.bankOffer.replace("Best bank offer: ", "")
              : "Limited time offer: Save more on prepaid hotel bookings!"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default HotelsGridCard;
