import Link from 'next/link';
import { yatraProductsConfig } from './config';

const YatraProducts = () => {
  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] font-bold text-[#191D23] mb-[14px] tracking-normal">
        Yatra Products
      </h3>
      <div className="flex flex-wrap justify-between gap-y-4 lg:grid lg:grid-cols-6 lg:gap-x-8 lg:gap-y-[15px]">
        {yatraProductsConfig.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block w-[190px] text-[14px] text-[#4D4D4D] hover:text-red-600 transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YatraProducts;
