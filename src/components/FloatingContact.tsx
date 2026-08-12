import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface FloatingContactProps {
  info: BusinessInfo;
  lang: Language;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ info, lang }) => {
  const isBn = lang === 'bn';

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${info.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group relative"
        title={isBn ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'WhatsApp Chat'}
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          {isBn ? 'হোয়াটসঅ্যাপ মেসেজ' : 'WhatsApp Chat'}
        </span>
      </a>

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${info.phone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group relative"
        title={isBn ? 'কল করুন: ' + info.phone : 'Call: ' + info.phone}
      >
        <Phone className="w-6 h-6 fill-slate-950" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          {isBn ? 'সরাসরি কল করুন' : 'Call Now'}
        </span>
      </a>
    </div>
  );
};
