import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial, Language } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {isBn ? 'গ্রাহকদের অভিজ্ঞতা' : 'Client Testimonials'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'আমাদের গ্রাহকদের প্রতিক্রিয়া' : 'What Our Clients Say'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            {isBn
              ? 'বছরের পর বছর আমাদের সততা ও সেবার উপর আস্থা রেখে যারা আমাদের সাথে ব্যবসা করছেন।'
              : 'Enduring relationships built on trust, quality supply, and genuine commitment.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => {
            const name = isBn ? t.nameBn : t.nameEn;
            const role = isBn ? t.roleBn : t.roleEn;
            const comment = isBn ? t.commentBn : t.commentEn;

            return (
              <div
                key={t.id}
                className="bg-[#f8faf9] rounded-2xl p-7 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                <Quote className="w-10 h-10 text-emerald-200 absolute top-6 right-6 pointer-events-none" />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0b5d3b] text-amber-300 font-bold flex items-center justify-center text-sm shadow">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b5d3b] text-base">{name}</h4>
                    <span className="text-xs text-slate-500 font-medium block">{role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
