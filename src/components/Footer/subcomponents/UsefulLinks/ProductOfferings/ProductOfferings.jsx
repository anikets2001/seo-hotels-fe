import Link from 'next/link';
import { productOfferingsConfig } from './config';

const ProductOfferings = () => {
  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] font-bold leading-6 text-[#191D23] mb-[14px]">Product Offerings</h3>
      
      <div className="flex flex-row flex-wrap lg:grid lg:grid-cols-5 gap-x-[40px] gap-y-[10px] lg: mt-[15px]">
      {productOfferingsConfig.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[14px] text-[#4D4D4D] hover:text-red-600 transition-colors leading-6"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductOfferings;
