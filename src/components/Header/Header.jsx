import Link from 'next/link';
import Image from 'next/image'
import { CarTaxiFront } from 'lucide-react'
import { navItems } from './config';
import { yatraUrl } from '@/utils/constants';

const Header = () => {
  return (
    <header className="bg-[#ffffff] fixed top-0 w-full z-[9999] hidden lg:block">
      <div className="flex justify-between px-[200px] py-[20px] bg-[#ffffff]">
        <div className="flex items-center gap-[39px]">
          <Link href={yatraUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/yatra-logo.svg"
              alt="Yatra - Travel booking platform"
              width={100}
              height={42}
              quality={75}
              priority
            />
          </Link>
          <nav className="flex items-center">
            <ul className="flex items-center gap-[32px]">
              {navItems.map((item) => (
                <li key={item?.id}>
                  <Link
                    href={`${yatraUrl}/${item?.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`navLink ${item?.title === 'Hotels' ? 'navLink-active' : ''}`}
                  >
                    <Image
                      src={`/assets/images/${item?.icon}.svg`}
                      alt={`${item?.icon} icon`}
                      className='aspect-square'
                      width={25}
                      height={25}
                      priority
                    />
                    <span className="navItem text-[#333333] font-medium text-base leading-none tracking-[0px] transition-colors duration-200 ease-in-out">
                      {item?.title}
                    </span>
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={`${yatraUrl}/cabs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navLink"
                >
                  <CarTaxiFront />
                  <span className="navItem text-[#333333] font-medium text-base leading-none tracking-[0px] transition-colors duration-200 ease-in-out">
                    Cabs
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
        <div className="flex items-center gap-[12px]">
          <Link href={yatraUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-4 py-3 rounded-md cursor-pointer transition-colors duration-200 ease-in-out" aria-label="Login / Signup">
              Login / Signup
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header