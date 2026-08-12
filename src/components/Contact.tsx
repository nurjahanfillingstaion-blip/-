import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface ContactProps {
  info: BusinessInfo;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ info, lang }) => {
  const isBn = lang === 'bn';

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#eaf4ef] border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-emerald-200">
            {isBn ? 'সরাসরি যোগাযোগ' : 'Direct Support'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'যোগাযোগ করুন' : 'Contact Us'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-700 text-base sm:text-lg">
            {isBn
              ? 'যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন। আমরা দ্রুততম সময়ে আপনার প্রশ্নের উত্তর দিতে প্রস্তুত।'
              : 'Feel free to reach out anytime. We respond swiftly to all inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Card (from exact prompt specs) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none" />

            <h3 className="text-2xl font-bold text-[#0b5d3b] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <span>{isBn ? 'বিজনেস তথ্য' : 'Business Credentials'}</span>
            </h3>

            <div className="space-y-5 text-slate-800 text-base sm:text-lg">
              {/* Name */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f5f8f6] border border-emerald-100/60">
                <div className="w-11 h-11 rounded-xl bg-[#0b5d3b] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">
                    {isBn ? 'নাম / প্রোপ্রাইটর' : 'Proprietor Name'}
                  </span>
                  <p className="font-bold text-[#0b5d3b]">
                    👤 {isBn ? info.ownerNameBn : info.ownerNameEn}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f5f8f6] border border-emerald-100/60">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">
                    {isBn ? 'ফোন / হটলাইন' : 'Phone / Hotline'}
                  </span>
                  <a
                    href={`tel:${info.phone}`}
                    className="font-extrabold text-[#0b5d3b] hover:underline text-lg"
                  >
                    📞 {info.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f5f8f6] border border-emerald-100/60">
                <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">
                    {isBn ? 'ইমেইল' : 'Email Address'}
                  </span>
                  <a
                    href={`mailto:${info.email}`}
                    className="font-medium text-slate-800 hover:text-[#0b5d3b] break-all text-sm sm:text-base"
                  >
                    📧 {info.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#f5f8f6] border border-emerald-100/60">
                <div className="w-11 h-11 rounded-xl bg-[#073d28] text-amber-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">
                    {isBn ? 'ঠিকানা' : 'Business Location'}
                  </span>
                  <p className="font-medium text-slate-800 text-sm sm:text-base">
                    📍 {isBn ? info.addressBn : info.addressEn}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-100/80 px-3 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>{isBn ? 'সাপ্তাহিক ৭ দিন: সকাল ৮:০০ - রাত ১০:০০' : 'Open 7 Days: 8:00 AM - 10:00 PM'}</span>
              </div>
            </div>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${info.phone}`}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 px-6 rounded-full text-center text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>📞 {isBn ? 'এখনই কল করুন' : 'Call Now'}</span>
              </a>

              <a
                href={`https://wa.me/${info.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-full text-center text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>💬 {isBn ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Direct Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-[#0b5d3b] mb-2">
              {isBn ? 'মেসেজ পাঠান' : 'Send us a Direct Message'}
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              {isBn
                ? 'আপনার প্রয়োজন বা মতামত লিখে আমাদের বার্তা পাঠান, আমরা শীঘ্রই উত্তর দেব।'
                : 'Send your questions or feedback directly to our support desk.'}
            </p>

            {formSent ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#0b5d3b] mx-auto" />
                <h4 className="text-xl font-bold">{isBn ? 'ধন্যবাদ! আপনার বার্তা প্রাপ্ত হয়েছে।' : 'Message Received Successfully!'}</h4>
                <p className="text-sm">
                  {isBn
                    ? 'আসাদুজ্জামান বিজনেসে বার্তা পাঠানোর জন্য ধন্যবাদ। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে কথা বলবেন।'
                    : 'Thank you for reaching out to Asaduzzaman Business. We will reply shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isBn ? 'আপনার নাম *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={isBn ? 'আপনার নাম লিখুন' : 'Enter your name'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f8faf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isBn ? 'ফোন নম্বর *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder={isBn ? 'ফোন নম্বর লিখুন' : 'Enter phone number'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f8faf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)' : 'Email Address (Optional)'}
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder={isBn ? 'your@email.com' : 'your@email.com'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f8faf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'আপনার বার্তা / প্রয়োজন লিখুন *' : 'Your Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={isBn ? 'বিস্তারিত বর্ণনা লিখুন...' : 'Type your details or inquiry...'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f8faf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b5d3b] hover:bg-[#073d28] text-white font-bold py-3.5 rounded-xl text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 text-amber-300" />
                  <span>{isBn ? 'মেসেজ সাবমিট করুন' : 'Submit Message'}</span>
                </button>
              </form>
            )}

            {/* Location Map Placeholder Card */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#0b5d3b]" />
                  <div>
                    <span className="text-xs font-bold text-[#0b5d3b] block">
                      {isBn ? 'অবস্থান: ঢাকা-সিলেট হাইওয়ে' : 'Location: Dhaka-Sylhet Highway'}
                    </span>
                    <span className="text-xs text-slate-600">
                      {isBn ? 'সহজ যোগাযোগ ও ট্রান্সপোর্ট সুবিধা' : 'Easy highway connectivity & transport'}
                    </span>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(info.addressBn)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#0b5d3b] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-[#073d28] transition-colors"
                >
                  {isBn ? 'ম্যাপ দেখুন' : 'View Map'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
