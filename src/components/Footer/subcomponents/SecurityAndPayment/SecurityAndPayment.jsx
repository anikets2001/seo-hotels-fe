import Image from 'next/image';
import { securityAndPaymentConfig } from './config';

const SecurityAndPayment = () => {
  return (
    <div className="mb-[20px] pt-[20px] border-t border-t-[#e5e7eb]">
      <h3 className="text-[18px] font-bold leading-6 text-[#191D23] mb-[14px]">Security & Payments</h3>
      <div className="flex flex-wrap lg:items-center gap-[16px]">
        {securityAndPaymentConfig.map((item, index) => (
          <div key={index}>
            <div className="text-[14px] font-medium">
              <Image
                src={item?.image}
                alt={item?.name}
                height={25}
                width={52}
                quality={75}
                style={{ width: "auto", height: "25px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityAndPayment;
