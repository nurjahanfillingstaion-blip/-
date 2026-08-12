import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe, Settings, Sparkles, ShoppingBag } from 'lucide-react';
import { BusinessInfo, Language } from '../types';

interface NavbarProps {
  info: BusinessInfo;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSettings: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  info,
  lang,
  onLanguageChange,
  onOpenSettings,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isBn = lang === 'bn';

  const navLinks = [
    { href: '#home', label: isBn ? 'হোম' : 'Home' },
    { href: '#about', label: isBn ? 'আমাদের সম্পর্কে' : 'About Us' },
    { href: '#services', label: isBn ? 'সেবা' : 'Services' },
    { href: '#products', label: isBn ? 'পণ্য' : 'Products' },
    { href: '#contact', label: isBn ? 'যোগাযোগ' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b5d3b]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#0b5d3b] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 font-bold flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
              আ
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-wide block leading-tight">
                {isBn ? info.companyNameBn : info.companyNameEn}
              </span>
              <span className="text-xs text-amber-300 font-medium hidden sm:block">
                {isBn ? info.taglineBn : info.taglineEn}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-amber-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Order Button */}
            <button
              onClick={onOpenQuoteModal}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isBn ? 'ইনকুয়েরি / অর্ডার' : 'Order Quote'}</span>
            </button>

            {/* Direct Phone Link */}
            <a
              href={`tel:${info.phone}`}
              className="bg-emerald-800/80 hover:bg-emerald-800 text-white border border-emerald-500/50 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-colors"
              title={isBn ? 'সরাসরি কল করুন' : 'Call Now'}
            >
              <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{info.phone}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(isBn ? 'en' : 'bn')}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
              title={isBn ? 'English' : 'বাংলা'}
            >
              <Globe className="w-4 h-4 text-amber-300" />
              <span>{isBn ? 'EN' : 'বাং'}</span>
            </button>

            {/* Edit Info Modal Trigger */}
            <button
              onClick={onOpenSettings}
              className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white p-2 rounded-lg transition-colors"
              title={isBn ? 'তথ্য পরিবর্তন করুন' : 'Edit Business Info'}
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(isBn ? 'en' : 'bn')}
              className="bg-white/10 text-white p-2 rounded-lg text-xs font-bold"
            >
              {isBn ? 'EN' : 'বাং'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#073d28] border-t border-emerald-700 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-base font-medium py-2 px-3 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-emerald-700/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-400 text-slate-900 font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-2 shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isBn ? 'ইনকুয়েরি / অর্ডার করুন' : 'Order / Inquiry'}</span>
            </button>

            <a
              href={`tel:${info.phone}`}
              className="w-full bg-emerald-800 text-white font-semibold py-2.5 rounded-xl text-center flex items-center justify-center gap-2 border border-emerald-500/40"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{isBn ? 'কল করুন:' : 'Call:'} {info.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="w-full bg-white/10 text-white/90 text-xs py-2 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{isBn ? 'বিজনেস তথ্য আপডেট করুন' : 'Update Business Info'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
