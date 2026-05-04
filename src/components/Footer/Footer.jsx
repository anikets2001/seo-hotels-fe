"use client";
import { useState } from 'react';
import TrendingRoutes from './subcomponents/TrendingRoutes/TrendingRoutes';
import DomesticFlightRoutes from './subcomponents/DomesticFlightRoutes/DomesticFlightRoutes';
import YatraProducts from './subcomponents/YatraProducts/YatraProducts';
import UsefulLinks from './subcomponents/UsefulLinks/UsefulLinks';
import SocialMedia from './subcomponents/SocialMedia/SocialMedia';
import SecurityAndPayment from './subcomponents/SecurityAndPayment/SecurityAndPayment';
import Copyright from './subcomponents/Copyright/Copyright';

const Footer = () => {
  const [activeSection, setActiveSection] = useState("Company Information");


  const toggleSection = (sectionName) => {
    setActiveSection(prev => prev === sectionName ? null : sectionName);
  };

  return (
    <footer className="w-full">
      <div className="bg-[#f1f1f1] flex flex-col p-4 lg:px-[88px] lg:py-[24px] lg:gap-[30px]">
          <>
            <TrendingRoutes />
            <DomesticFlightRoutes />
            <YatraProducts />
          </>
      </div>

      <div className="bg-[#ffff] p-4 lg:px-[88px] lg:py-[24px] gap-[30px]">
        <UsefulLinks
          activeSection={activeSection}
          onToggleSection={toggleSection}
        />
        <SocialMedia />
        <SecurityAndPayment />
        <Copyright />
      </div>

    </footer>
  );
};

export default Footer;
