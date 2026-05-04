import { investorUrl } from "@/utils/constants";
import Link from "next/link";

const baseUrl = investorUrl;

const links = [
    {
        id: 1,
        title: 'Yatra Online, Inc',
        href: `${baseUrl}/home/`
    },
    {
        id: 2,
        title: 'LeaderShip Team',
        href: `${baseUrl}/Investor-Relations-India/`
    },
]


const InvestorRelations = () => {
    return (
        <div className="flex flex-wrap gap-[24px] mt-[15px]">
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
    )
}

export default InvestorRelations