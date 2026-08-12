import React, { useState, useEffect } from 'react';
import { X, Send, ShoppingBag, Phone, CheckCircle, MessageSquare } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: BusinessInfo;
  lang: Language;
  preselectedItem?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  info,
  lang,
  preselectedItem = '',
}) => {
  const isBn = lang === 'bn';

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState(preselectedItem);
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedItem) {
      setSelectedItem(preselectedItem);
    }
  }, [preselectedItem]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const text = isBn
      ? `السلام عليكم / হ্যালো আসাদুজ্জামান বিজনেস,\n\nআমি ওয়েবসাইট থেকে একটি অর্ডার/কোটেশন পাঠাচ্ছি:\n👤 নাম: ${customerName}\n📞 ফোন: ${customerPhone}\n📦 পণ্য/সেবা: ${selectedItem || 'সাধারণ ইনকুয়েরি'}\n🔢 পরিমাণ/বিবরণ: ${quantity || 'N/A'}\n📍 ঠিকানা: ${address || 'N/A'}\n💬 বার্তা: ${message || 'N/A'}`
      : `Hello Asaduzzaman Business,\n\nI want to place an inquiry/order:\nName: ${customerName}\nPhone: ${customerPhone}\nItem/Service: ${selectedItem || 'General Inquiry'}\nQuantity: ${quantity || 'N/A'}\nAddress: ${address || 'N/A'}\nMessage: ${message || 'N/A'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${info.whatsapp}?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-emerald-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b5d3b]">
                  {isBn ? 'ইনকুয়েরি ও অর্ডার কোটেশন' : 'Order & Service Quote'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {isBn ? 'সরাসরি হোয়াটসঅ্যাপে বার্তা পাঠান' : 'Direct inquiry to Asaduzzaman Business'}
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'আপনার নাম *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={isBn ? 'যেমন: মোহাম্মদ আরিফ' : 'e.g. Mohammad Arif'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Customer Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'ফোন / মোবাইল নম্বর *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={isBn ? 'যেমন: 017xxxxxxxx' : 'e.g. 017xxxxxxxx'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Selected Item / Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'আকাঙ্ক্ষিত পণ্য বা সেবা' : 'Desired Item / Service'}
                </label>
                <input
                  type="text"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  placeholder={isBn ? 'পণ্য বা সেবার নাম লিখুন' : 'Item or service title'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'পরিমাণ / স্কেল (ঐচ্ছিক)' : 'Quantity / Volume (Optional)'}
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder={isBn ? 'যেমন: ১০ বস্তা / ৫০০ লিটার / ১ টন' : 'e.g. 10 bags / 500 liters'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'ডেলিভারি ঠিকানা (ঐচ্ছিক)' : 'Delivery Address (Optional)'}
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={isBn ? 'জেলা, থানা বা এলাকা' : 'District, Thana or Area'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'বিশেষ কোনো বার্তা' : 'Additional Message'}
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={isBn ? 'আপনার কোনো প্রশ্ন থাকলে লিখুন...' : 'Write your detailed requirement...'}
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>{isBn ? 'হোয়াটসঅ্যাপে সরাসরি পাঠান' : 'Send via WhatsApp'}</span>
                </button>

                <a
                  href={`tel:${info.phone}`}
                  className="w-full bg-[#0b5d3b] hover:bg-[#073d28] text-white font-bold py-3 px-6 rounded-xl text-base shadow transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>{isBn ? 'সরাসরি কল দিন:' : 'Call Directly:'} {info.phone}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#0b5d3b] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0b5d3b]">
              {isBn ? 'ধন্যবাদ! আপনার বার্তা পাঠানো হচ্ছে' : 'Thank You! Message Initiated'}
            </h3>
            <p className="text-slate-600 text-sm">
              {isBn
                ? 'আমরা খুব দ্রুত আপনার সাথে ফোন বা হোয়াটসঅ্যাপে যোগাযোগ করছি।'
                : 'We will reach back to you shortly via phone or WhatsApp.'}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#0b5d3b] text-white font-bold px-6 py-2.5 rounded-xl text-sm"
            >
              {isBn ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
