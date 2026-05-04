import Image from 'next/image';
import { socialMediaConfig } from './config';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] font-bold leading-6 text-[#191D23] mb-[14px]">Our Social Media Handles:</h3>
      <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between">
        {socialMediaConfig.map((social, index) => (
          <div key={index}>
            <Link href={social.url} className='flex flex-col items-center justify-center mt-4'>
              <div className={`text-[18px] font-bold mb-2`} style={{ width: '100px', height: '24px' }}>
                <Image 
                  src={social?.image} 
                  alt={social?.name} 
                  height={24} 
                  width={50} 
                  quality={75}
                  style={{ width: '100px', height: '42px', objectFit: 'contain' }}
                />
              </div>
              <p className="text-[12px] text-[#4B5768]">{social.url}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
