import { useState } from "react";
import { EnquiryForm } from "./EnquiryForm";

interface StickyEnquireButtonProps {
  initialDestination?: string;
}

export function StickyEnquireButton({ initialDestination }: StickyEnquireButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center bg-black text-white font-semibold shadow-glow transition-all duration-300 hover:bg-[#FF7700] hover:text-white px-3 py-8 rounded-l-lg hover:pr-4 hover:pl-5 hover:tracking-wide"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Enquire Now
        </button>
      </div>

      <EnquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialDestination={initialDestination} />
    </>
  );
}
