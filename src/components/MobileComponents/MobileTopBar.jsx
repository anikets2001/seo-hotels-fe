import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { yatraUrl } from "@/utils/constants";

const MobileTopBar = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded-[8px] px-3 py-2 mb-[10px] shadow-sm lg:hidden">
      <Link
        href={yatraUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Yatra home"
        className="inline-flex items-center"
      >
        <Image
          src="/assets/images/yatra-logo.svg"
          alt="Yatra - Travel booking platform"
          width={80}
          height={34}
          quality={75}
        />
      </Link>

      <Link href={yatraUrl} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          aria-label="Login or signup"
          className="flex items-center gap-1.5 bg-primary hover:bg-[#B80D0D] border-none text-white font-semibold text-xs px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out"
        >
          Login / Signup
        </button>
      </Link>
    </div>
  );
};

export default MobileTopBar;
