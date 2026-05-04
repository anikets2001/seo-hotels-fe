import { yatraUrl } from "@/utils/constants";
import Link from "next/link";

const baseUrl = yatraUrl;

const links = [
    { id: 1, title: 'Support & FAQs', href: `${baseUrl}/support` },
    { id: 2, title: 'Terms & Conditions', href: `${baseUrl}/online/terms-of-service.html` },
    { id: 3, title: 'Privacy Policy', href: `${baseUrl}/online/privacy-policy.html` },
    { id: 4, title: 'User Agreement', href: `${baseUrl}/online/yatra-user-agreement.html` }

];

const CustomerCare = () => {
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

export default CustomerCare;
