import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Breadcrumbs = ({breadcrumbItems}) => {
  return (
    <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          {index !== 0 && <ChevronRight className="text-gray-700 ml-1.5" size={20} />}
          {item.href ? (
            <Link href={item.href} className="text-gray-600 text-sm lg:text-base hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className={`text-primary text-sm lg:text-base font-semibold capitalize`}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;