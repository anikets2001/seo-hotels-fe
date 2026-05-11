import { SparklesIcon } from "lucide-react";

const SponsoredTag = ({ className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded shadow-sm ${className}`}
      aria-label="Sponsored listing"
    >
      <SparklesIcon size={10} aria-hidden="true" />
      Sponsored
    </span>
  );
};

export default SponsoredTag;
