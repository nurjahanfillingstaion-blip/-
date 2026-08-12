import React from 'react';
import { ShoppingCart, Briefcase, PackageCheck, Headphones, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem, Language } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  lang: Language;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  lang,
  onSelectServiceForQuote,
}) => {
  const isBn = lang === 'bn';

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-8 h-8 text-[#0b5d3b]" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-[#0b5d3b]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-8 h-8 text-[#0b5d3b]" />;
      case 'Headphones':
        return <Headphones className="w-8 h-8 text-[#0b5d3b]" />;
      default:
        return <ShoppingCart className="w-8 h-8 text-[#0b5d3b]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#f5f8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-300/60">
            {isBn ? 'আমরা যা অফার করি' : 'What We Offer'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'আমাদের সেবা' : 'Our Services'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-600">
            {isBn
              ? 'আপনার ব্যবসার সার্বিক অগ্রযাত্রায় আমরা সর্বাধুনিক, সময়োপযোগী ও বিশ্বস্ত সমাধান প্রদান করি।'
              : 'Delivering trustworthy, comprehensive, and tailored business solutions for your growth.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => {
            const title = isBn ? service.titleBn : service.titleEn;
            const desc = isBn ? service.descriptionBn : service.descriptionEn;
            const tag = isBn ? service.tagBn : service.tagEn;
            const features = isBn ? service.featuresBn : service.featuresEn;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Top decorative gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b5d3b] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center group-hover:bg-amber-300/40 transition-colors">
                      {renderIcon(service.icon)}
                    </div>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0b5d3b] mb-3 group-hover:text-emerald-700 transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectServiceForQuote(title)}
                  className="w-full mt-2 bg-[#0b5d3b] hover:bg-[#073d28] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>{isBn ? 'এই সেবা সংক্রান্ত অনুসন্ধান' : 'Inquire This Service'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
