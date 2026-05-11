"use client";

import Link from "next/link";
import { CheckIcon, MapPinIcon, StarIcon } from "lucide-react";
import { formatInr, parseInrToNumber } from "./helpers";
import HotelImageCarousel from "./subcomponents/HotelImageCarousel";
import SponsoredTag from "./subcomponents/SponsoredTag";
import StarRatingBadge from "./subcomponents/StarRatingBadge";
import WishlistButton from "./subcomponents/WishlistButton";

const HotelsListCard = ({ hotel, showTotalPrice, tripNights }) => {
  const fallbackGallery = [
    hotel.image,
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  ];
  const images = hotel.images?.length ? hotel.images : fallbackGallery;

  const keyBenefits = [
    hotel.highlight,
    hotel.amenities?.[0] ? `${hotel.amenities[0]} available` : "Top-rated guest comfort",
    hotel.amenities?.[1] ? `${hotel.amenities[1]} access` : "Prime location connectivity",
  ].filter(Boolean);

  const nightlyPrice = parseInrToNumber(hotel.price);
  const nightlyOldPrice = parseInrToNumber(hotel.oldPrice);
  const nightlyTax = parseInrToNumber(hotel.taxes);
  const displayPrice = showTotalPrice ? formatInr(nightlyPrice * tripNights) : hotel.price;
  const displayOldPrice =
    hotel.oldPrice && showTotalPrice ? formatInr(nightlyOldPrice * tripNights) : hotel.oldPrice;
  const displayTaxes = showTotalPrice
    ? `+ ${formatInr(nightlyTax * tripNights)} taxes & fees`
    : hotel.taxes;
  const hotelDetailHref = `/`;

  return (
    <article className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-shadow focus-within:ring-2 focus-within:ring-primary/30">
      <Link
        href={hotelDetailHref}
        aria-label={`View details for ${hotel.name}`}
        className="absolute inset-0 z-[1] focus:outline-none"
      />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[29%] relative z-[2] h-44 md:h-auto md:self-stretch">
          <HotelImageCarousel
            images={images}
            alt={hotel.name}
            idPrefix={hotel.id}
            wrapperClassName="relative h-full w-full min-h-0 overflow-hidden"
            imageClassName="h-full w-full object-cover"
            countBadgeClassName="text-[15px] font-semibold leading-none"
            topLeft={
              hotel.sponsored || hotel.badge ? (
                <div className="absolute top-3 left-3 z-[2] flex flex-col items-start gap-1.5">
                  {hotel.sponsored ? <SponsoredTag /> : null}
                  {hotel.badge ? (
                    <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                      {hotel.badge}
                    </span>
                  ) : null}
                </div>
              ) : null
            }
            topRight={
              <div className="absolute top-3 right-3 z-[2]">
                <WishlistButton hotelName={hotel.name} />
              </div>
            }
          />
        </div>

        <div className="md:w-[71%] p-3.5 md:p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-3">
            <div>
              {hotel.stars ? (
                <div className="flex items-center gap-2 mb-1.5">
                  <StarRatingBadge stars={hotel.stars} size={15} />
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
            <div className="flex flex-col items-end shrink-0 pl-2">
              <div className="bg-primary/10 text-primary font-extrabold px-2 py-1 rounded-md text-xs mb-1 flex items-center gap-2 w-fit">
                <StarIcon className="text-[16px]" />
                <span className="text-[16px] font-bold">{hotel.stars}</span>
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
              {hotel.bankOffer ? <p className="text-primary text-[15px] mt-1">{hotel.bankOffer}</p> : null}
            </div>
            <div className="text-right bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5 min-w-[176px]">
              {displayOldPrice ? <p className="text-[15px] text-gray-500 line-through">{displayOldPrice}</p> : null}
              <p className="text-[25px] font-extrabold leading-tight">{displayPrice}</p>
              <p className="text-[15px] text-gray-500 mb-1.5">{displayTaxes}</p>
              <p className="text-[10px] text-gray-400 mb-2">{showTotalPrice ? `for ${tripNights} nights` : "per night"}</p>
              <Link
                href={hotelDetailHref}
                className="relative z-[2] inline-block bg-primary hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-5 py-2.5 rounded-md cursor-pointer transition-colors duration-200 ease-in-out"
              >
                View Details
              </Link>
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