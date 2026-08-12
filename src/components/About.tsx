import React from 'react';
import { ShieldCheck, HeartHandshake, Award, CheckCircle, MapPin, Phone, Building2 } from 'lucide-react';
import { BusinessInfo, CoreValue, Language } from '../types';

interface AboutProps {
  info: BusinessInfo;
  values: CoreValue[];
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ info, values, lang }) => {
  const isBn = lang === 'bn';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#0b5d3b]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#0b5d3b]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#0b5d3b]" />;
      default:
        return <Award className="w-8 h-8 text-[#0b5d3b]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {isBn ? 'পরিচয় ও নীতিমালা' : 'Identity & Values'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'আমাদের সম্পর্কে' : 'About Us'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            {isBn ? (
              <>
                <strong className="text-[#0b5d3b] font-semibold">{info.companyNameBn}</strong> একটি আধুনিক ও বিশ্বস্ত ব্যবসায়িক প্রতিষ্ঠান।
                আমরা গ্রাহকদের জন্য মানসম্মত পণ্য ও সেবা দেওয়ার চেষ্টা করি।
                সততা, বিশ্বাস এবং ভালো সেবা আমাদের ব্যবসার প্রধান লক্ষ্য।
              </>
            ) : (
              <>
                <strong className="text-[#0b5d3b] font-semibold">{info.companyNameEn}</strong> is a modern and trusted business entity. We strive to provide premium quality products and services to our esteemed clients. Honesty, trust, and exceptional service are the foundational pillars of our operations.
              </>
            )}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#f5f9f6] border border-emerald-100/80 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-300/30 flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors">
                {getIcon(val.icon)}
              </div>
              <h3 className="text-2xl font-bold text-[#0b5d3b] mb-3">
                {isBn ? val.titleBn : val.titleEn}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {isBn ? val.descBn : val.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Company Summary Banner */}
        <div className="bg-gradient-to-r from-[#0b5d3b] to-[#0f7a4e] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm tracking-wide uppercase">
              <Building2 className="w-5 h-5" />
              <span>{isBn ? 'বিশ্বস্ত প্রতিষ্ঠান' : 'Verified Merchant'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {isBn ? 'আপনার ব্যবসার সার্বিক প্রসারে আমরা পাশে আছি' : 'Partnering in Your Business Growth'}
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl">
              {isBn ? info.addressBn : info.addressEn}
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${info.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
            >
              <span>{isBn ? 'হোয়াটসঅ্যাপ মেসেজ' : 'WhatsApp Chat'}</span>
            </a>
            <a
              href={`tel:${info.phone}`}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{info.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
