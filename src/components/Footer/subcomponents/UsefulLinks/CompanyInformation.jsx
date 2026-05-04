import { yatraUrl } from "@/utils/constants";
import Link from "next/link";

const baseUrl = yatraUrl;

const links = [
    {
        id: 1,
        title: 'More About us',
        href: `${baseUrl}/online/about-yatra.html`
    },
    {
        id: 2,
        title: 'LeaderShip Team',
        href: `${baseUrl}/online/leadership-team`
    },
    {
        id: 3,
        title: 'Our Products',
        href: `${baseUrl}/online/about-yatra.html#ourprod`
    },
    {
        id: 4,
        title: 'Awards Won',
        href: `${baseUrl}/online/awards-won.html`
    },
    {
        id: 5,
        title: 'Customers Testimonials',
        href: `${baseUrl}/online/testimonials.html`
    },
]

const CompanyInformation = () => {
    return (
        <div>
            <div>
                {/* Company Description */}
                <p className="text-[14px] text-[#262626] leading-2 tracking-normal mb-6">
                    Yatra Online, Inc is the parent company of Yatra Online Limited (formerly known as Yatra Online Private Limited).
                    which is based in Gurugram, India, and is India&apos;s leading Corporate Travel services provider with over 700+
                    Corporate customers, and one of India&apos;s leading online travel companies and operates the website Yatra.com.
                    The company provides information, pricing, availability, and booking facility for domestic and international
                    air travel, domestic and international hotel bookings, holiday packages, buses, trains, in city activities,
                    inter-city, and point-to-point cabs, homestays, and cruises. As a leading platform of accommodation options,
                    Yatra provides real-time bookings for more than 103,000 hotels in India and over 1,500,000 hotels around the world.
                    Launched in August 2006, Yatra was ranked the Most Trusted E-Commerce Travel Brand in India in the Economic Times Brand Equity
                    Survey 2016 for the second successive year, and has won the National Tourism Award for &apos;Best Domestic Tour Operator (Rest of India)&apos;
                    conferred by the Government of India for the fourth time.
                </p>
            </div>
            <div className="flex flex-wrap justify-between mt-[15px]">
                {links.map((link) => (
                    <Link 
                        key={link.id}
                        href={link?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link?.title}
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default CompanyInformation