import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { AGENT_INFO } from '../data/properties';

export const MobileBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#071923] border-t-2 border-[#CDA55B] p-2.5 grid grid-cols-2 gap-2.5 shadow-2xl">
      <a
        href={AGENT_INFO.telLink}
        className="flex items-center justify-center gap-2 bg-[#CDA55B] active:bg-[#b89146] text-[#071923] font-bold py-3 px-3 text-sm rounded-none shadow"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>GỌI NGAY</span>
      </a>

      <a
        href={AGENT_INFO.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#0C2734] border border-[#CDA55B]/60 text-[#F5F0E5] font-bold py-3 px-3 text-sm rounded-none"
      >
        <MessageCircle className="w-4 h-4 text-[#CDA55B]" />
        <span>ZALO</span>
      </a>
    </div>
  );
};
