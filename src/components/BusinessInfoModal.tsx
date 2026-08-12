import React, { useState } from 'react';
import { X, Save, RotateCcw, Settings, Check } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface BusinessInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: BusinessInfo;
  onSave: (updated: BusinessInfo) => void;
  onReset: () => void;
  lang: Language;
}

export const BusinessInfoModal: React.FC<BusinessInfoModalProps> = ({
  isOpen,
  onClose,
  info,
  onSave,
  onReset,
  lang,
}) => {
  const isBn = lang === 'bn';
  const [formData, setFormData] = useState<BusinessInfo>({ ...info });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-emerald-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-[#0b5d3b] text-amber-300 flex items-center justify-center shadow">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0b5d3b]">
              {isBn ? 'বিজনেস তথ্য এডিটর' : 'Edit Business Information'}
            </h3>
            <p className="text-xs text-slate-600">
              {isBn ? 'ফোন নম্বর, ইমেইল বা নোটিশ ব্যানার পরিবর্তন করুন' : 'Update phone, email, or announcement banner'}
            </p>
          </div>
        </div>

        {savedSuccess ? (
          <div className="bg-emerald-50 text-emerald-900 border border-emerald-300 p-6 rounded-2xl text-center space-y-2">
            <Check className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-lg">{isBn ? 'তথ্য সফলভাবে সংরক্ষিত হয়েছে!' : 'Info Saved Successfully!'}</h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'মালিকের নাম (বাংলা)' : 'Owner Name (BN)'}
                </label>
                <input
                  type="text"
                  value={formData.ownerNameBn}
                  onChange={(e) => setFormData({ ...formData, ownerNameBn: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'ফোন নম্বর (Phone)' : 'Phone Number'}
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'হোয়াটসঅ্যাপ নম্বর (উইথ কান্ট্রি কোড)' : 'WhatsApp Number (with country code)'}
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'ইমেইল (Email)' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'ঠিকানা (বাংলা)' : 'Address (Bengali)'}
              </label>
              <input
                type="text"
                value={formData.addressBn}
                onChange={(e) => setFormData({ ...formData, addressBn: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'ঘোষণা / নোটিশ ব্যানার (বাংলা)' : 'Announcement Notice (BN)'}
              </label>
              <textarea
                rows={2}
                value={formData.noticeBn || ''}
                onChange={(e) => setFormData({ ...formData, noticeBn: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0b5d3b]"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  onReset();
                  setFormData({ ...info });
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isBn ? 'ডিফল্ট সেটিংসে রিসেট' : 'Reset Defaults'}</span>
              </button>

              <button
                type="submit"
                className="bg-[#0b5d3b] hover:bg-[#073d28] text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow"
              >
                <Save className="w-4 h-4 text-amber-300" />
                <span>{isBn ? 'পরিবর্তন সংরক্ষণ করুন' : 'Save Changes'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
