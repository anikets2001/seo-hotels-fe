import { partnerUrl, yatraUrl } from "@/utils/constants";
import Link from "next/link";

const baseUrl = yatraUrl;

const links = [
  { id: 1, title: 'Travel Agent Sign Up', href: `${baseUrl}/travel-agents/` },
  { id: 2, title: 'Register Your Hotel', href: `${baseUrl}/online/register-your-hotel.html` },
  { id: 3, title: 'Register Your Homestay', href: `${baseUrl}/online/register-your-homestay` },
  { id: 4, title: 'Sell Holiday Packages', href: partnerUrl },
  { id: 5, title: 'Sell Your Activities', href: `${baseUrl}/online/sell-your-activities` },
  { id: 6, title: 'List Your Bus Inventory', href: `${baseUrl}/online/list-your-bus-inventory` },
  { id: 7, title: 'Advertise with Us', href: `${baseUrl}/online/advertiser-contact-yatra.html` },
  { id: 8, title: 'Become a Yatra Franchisee', href: `${baseUrl}/online/franchisee-lead` }
];

const Partners = () => {
  return (
    <div className="flex flex-row flex-wrap lg:grid lg:grid-cols-5 gap-x-[40px] gap-y-[10px] lg: mt-[15px]">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#4D4D4D] hover:text-red-600 transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Partners;

