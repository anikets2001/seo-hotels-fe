import { yatraUrl } from "@/utils/constants";
import CompanyInformation from "./CompanyInformation";
import CustomerCare from "./CustomerCare";
import InvestorRelations from "./InvestorRelations";
import More from "./More";
import Partners from "./Partners";
import ProductOfferings from "./ProductOfferings/ProductOfferings";

export const usefulLinksConfig = [
  {
    text: "Company Information",
    href: "/company-information",
    hasDropdown: true,
    content: (
      <CompanyInformation/>
    )
  },
  {
    text: "Investor Relations",
    hasDropdown: true,
    content: (
      <InvestorRelations/>
    )
  },
  {
    text: "Partner With Yatra",
    hasDropdown: true,
    content: (
      <Partners/>
    )
  },
  {
    text: "Yatra for Business",
    href: `${yatraUrl}/business`,
    hasDropdown: false
  },
  {
    text: "Customer Care",
    hasDropdown: true,
    content: (
      <CustomerCare/>
    )
  },
  {
    text: "Product Offerings",
    href: "/product-offerings",
    hasDropdown: true,
    content: (
      <ProductOfferings/>
    )
  },
  {
    text: "Careers",
    href: `${yatraUrl}/career/home`,
    hasDropdown: false
  },
  {
    text: "Cautionary Notice",
    href: `${yatraUrl}/online/notice-responsiv-web.html`,
    hasDropdown: false
  },
  {
    text: "More",
    hasDropdown: true,
    content: (
     <More/>
    )
  }
];
