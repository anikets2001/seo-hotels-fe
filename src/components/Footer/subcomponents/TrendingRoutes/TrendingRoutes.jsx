"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { trendingRoutesConfig } from './config';

const TrendingRoutes = () => {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(`/cheap-flights${href}`);
  };

  const routesToDisplay = trendingRoutesConfig || [];

  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] font-bold text-[#191D23] mb-[14px] tracking-normal">
        Popular Trending Routes
      </h3>
      <div className="flex flex-wrap justify-between gap-y-4 lg:grid lg:grid-cols-6 lg:gap-x-8 lg:gap-y-[15px]">
        {routesToDisplay.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="block w-[190px] text-[14px] text-[#4D4D4D] hover:text-red-600 transition-colors"
          >
            {link.title || link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingRoutes;