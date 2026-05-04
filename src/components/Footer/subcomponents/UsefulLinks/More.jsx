import { moreInfoUrl, yatraUrl } from "@/utils/constants";
import Link from "next/link";

const baseUrl = yatraUrl;

const links = [
    { id: 1, title: 'Retails Store', href: `${baseUrl}/online/holiday-retail-stores` },
    { id: 3, title: 'Gift Cards', href: moreInfoUrl },
    { id: 4, title: 'Visa Information', href: moreInfoUrl }
];

const More = () => {
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

export default More;