import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface FooterProps {
  info: BusinessInfo;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ info, lang }) => {
  const isBn = lang === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#073d28] text-white pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xl shadow">
                আ
              </div>
              <span className="text-2xl font-extrabold text-white">
                {isBn ? info.companyNameBn : info.companyNameEn}
              </span>
            </div>

            <p className="text-emerald-200 text-sm max-w-md leading-relaxed">
              {isBn ? (
                <>
                  আসাদুজ্জামান একটি আধুনিক ও বিশ্বস্ত ব্যবসায়িক প্রতিষ্ঠান। আমরা সততা, বিশ্বাস ও নিখুঁত সেবার মাধ্যমে গ্রাহকদের সর্বোচ্চ সন্তুষ্টি প্রদানে প্রতিশ্রুতিবদ্ধ।
                </>
              ) : (
                <>
                  Asaduzzaman Business is a modern and trusted business organization dedicated to quality products, transparent transactions, and reliable customer service.
                </>
              )}
            </p>

            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/60 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4" />
              <span>{isBn ? info.taglineBn : info.taglineEn}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-amber-300">
              {isBn ? 'দ্রুত লিঙ্ক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  {isBn ? 'হোম' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  {isBn ? 'আমাদের সম্পর্কে' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  {isBn ? 'আমাদের সেবা' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">
                  {isBn ? 'পণ্য তালিকা' : 'Product Catalog'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {isBn ? 'যোগাযোগ' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3 text-sm text-emerald-100">
            <h4 className="text-lg font-bold text-amber-300">
              {isBn ? 'যোগাযোগ' : 'Contact Info'}
            </h4>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <a href={`tel:${info.phone}`} className="hover:underline">
                {info.phone}
              </a>
            </p>
            <p className="flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <a href={`mailto:${info.email}`} className="hover:underline">
                {info.email}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>{isBn ? info.addressBn : info.addressEn}</span>
            </p>
          </div>
        </div>

        {/* Copyright & Tagline bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-emerald-300">
          <div>
            <p>© 2026 Asaduzzaman Business. All Rights Reserved.</p>
            <p className="text-amber-300/90 font-semibold mt-1">
              {isBn ? info.taglineBn : info.taglineEn}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-emerald-800 hover:bg-emerald-700 text-amber-300 p-2.5 rounded-full transition-colors flex items-center justify-center shadow"
            title={isBn ? 'উপরে যান' : 'Back to top'}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
