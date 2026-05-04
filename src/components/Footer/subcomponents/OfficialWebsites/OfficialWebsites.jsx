import Image from 'next/image';
import { officialWebsitesConfig } from './config';

const OfficialWebsites = () => {
  return (
    <div className="mb-[20px] pt-[20px] border-t border-t-[#e5e7eb]">
      <h3 className="text-[18px] font-bold leading-6 text-[#191D23] mb-[14px]">Our Official Websites:</h3>
      <div className="flex justify-between">
        {officialWebsitesConfig.map((website, index) => (
          <div key={index} className="text-center flex-1">
            <div className="mb-3">
              <Image
                src="/assets/images/placeholder-logo.png"
                alt={`${website.name} logo`}
                width={120}
                height={60}
                className="mx-auto"
                quality={75}
              />
            </div>
            <div className="text-[12px] text-[#4D4D4D]">{website.url}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialWebsites;
