import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem, Language } from '../types';

interface FAQProps {
  faqs: FAQItem[];
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ faqs, lang }) => {
  const isBn = lang === 'bn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#f5f8f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            {isBn ? 'সাধারণ প্রশ্নাবলী' : 'Common Questions'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'প্রশ্ন ও উত্তর' : 'Frequently Asked Questions'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const question = isBn ? faq.questionBn : faq.questionEn;
            const answer = isBn ? faq.answerBn : faq.answerEn;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0b5d3b] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0b5d3b]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
