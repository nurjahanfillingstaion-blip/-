import React from 'react';
import { ShieldCheck, PhoneCall, ArrowRight, Sparkles, MessageSquare, CheckCircle2, Award, Users } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface HeroProps {
  info: BusinessInfo;
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ info, lang, onOpenQuoteModal }) => {
  const isBn = lang === 'bn';

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#073d28] via-[#0b5d3b] to-[#159957] text-white">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,213,79,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-8">
        {/* Notice Badge */}
        {info.noticeBn && (
          <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs sm:text-sm text-amber-300 mb-6 shadow-inner backdrop-blur-sm animate-pulse-subtle max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0" />
            <span className="truncate">{isBn ? info.noticeBn : info.noticeEn}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
          {isBn ? info.ownerNameBn : info.ownerNameEn}
        </h1>

        {/* Subtitle / Slogan */}
        <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 font-medium mb-3 max-w-3xl mx-auto">
          {isBn ? info.sloganBn : info.sloganEn}
        </p>

        <p className="text-sm sm:text-base text-amber-300 font-semibold tracking-wider uppercase mb-8">
          {isBn ? info.companyNameBn : info.companyNameEn}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenQuoteModal}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
          >
            <span>{isBn ? 'ইনকুয়েরি / অর্ডার করুন' : 'Request Order / Quote'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#services"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 px-6 py-3.5 rounded-full text-base sm:text-lg transition-all backdrop-blur-sm"
          >
            {isBn ? 'আমাদের সেবা দেখুন' : 'Our Services'}
          </a>

          <a
            href={`tel:${info.phone}`}
            className="bg-emerald-800/90 hover:bg-emerald-800 text-white font-semibold border border-emerald-400/30 px-6 py-3.5 rounded-full text-base sm:text-lg transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-amber-300" />
            <span>{isBn ? 'সরাসরি কল' : 'Direct Call'}</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-emerald-500/30">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">১০০%</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              {isBn ? 'সততা ও বিশ্বাস' : 'Honesty & Trust'}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">৫,০০০+</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              {isBn ? 'সন্তুষ্ট গ্রাহক' : 'Satisfied Clients'}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">২৪/৭</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              {isBn ? 'গ্রাহক সহায়তা' : 'Customer Support'}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1">দ্রুত</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              {isBn ? 'নিরাপদ সরবরাহ' : 'Safe Delivery'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
