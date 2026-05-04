"use client";
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter } from "next/navigation";
import { usefulLinksConfig } from './config';

const UsefulLinks = ({ activeSection, onToggleSection }) => {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(`/cheap-flights${href}`);
  };

  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] font-bold leading-6 text-[#191D23] mb-[14px]">Company Useful Links</h3>

      {/* Section Headings */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 lg:flex-wrap">
        {usefulLinksConfig.map((link, index) => (
          <div key={index} className="flex flex-col w-full lg:w-auto">
            {/* Heading */}
            <div className={`flex items-center justify-between gap-[4px] pb-[4px] mb-[16px] ${activeSection === link.text
              ? 'text-[red] border-b-[4px] border-[red]'
              : 'text-[#191D23]'
              }`}>
              {link.hasDropdown ? (
                // Expandable section with dropdown
                <>
                  <span
                    className={`text-[16px] font-medium cursor-pointer pb-1 text-[#1A1A1A]`} // Added dark text
                    onClick={() => onToggleSection(link.text)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${activeSection === link.text ? 'Collapse' : 'Expand'} ${link.text} section`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onToggleSection(link.text);
                      }
                    }}
                  >
                    {link.text}
                  </span>

                  <button
                    onClick={() => onToggleSection(link.text)}
                    className={`outline-none border-none bg-transparent`}
                    aria-label={`${activeSection === link.text ? 'Collapse' : 'Expand'} ${link.text} section`}
                  >
                    {activeSection === link.text ? (
                      <ChevronUp size={20} color='#666666' />
                    ) : (
                      <ChevronDown size={20} color='#666666' />
                    )}
                  </button>
                </>
              ) : (
                // Clickable link for non-expandable sections
                <Link
                  href={link.href}
                  onClick={(e) => link.href?.startsWith('/') ? handleClick(e, link.href) : null}
                  className="text-[16px] font-medium text-[#191D23] hover:text-red-600 transition-colors pb-1"
                >
                  {link.text}
                </Link>
              )}
            </div>

            {/* Dropdown Content - Mobile: inline, Desktop: hidden (will show below) */}
            {link.hasDropdown && activeSection === link.text && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg w-full lg:hidden">
                <div className="text-[14px] text-[#4D4D4D] leading-6">
                  {link.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dropdown Content - Desktop: Full width below all items */}
      {usefulLinksConfig.map((link, index) => (
        link.hasDropdown && activeSection === link.text && (
          <div key={`dropdown-${index}`} className="hidden lg:block mb-6 p-4 bg-gray-50 rounded-lg w-full">
            <div className="text-[14px] text-[#4D4D4D] leading-6">
              {link.content}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default UsefulLinks;
