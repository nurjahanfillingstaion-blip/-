import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProductCatalog } from './components/ProductCatalog';
import { QuoteModal } from './components/QuoteModal';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BusinessInfoModal } from './components/BusinessInfoModal';

import {
  initialBusinessInfo,
  defaultCoreValues,
  defaultServices,
  defaultProducts,
  defaultTestimonials,
  defaultFAQs,
} from './data/businessData';
import { BusinessInfo, Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(() => {
    const saved = localStorage.getItem('asaduzzaman_business_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialBusinessInfo;
      }
    }
    return initialBusinessInfo;
  });

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preselectedItem, setPreselectedItem] = useState('');

  const handleSaveInfo = (updated: BusinessInfo) => {
    setBusinessInfo(updated);
    localStorage.setItem('asaduzzaman_business_info', JSON.stringify(updated));
  };

  const handleResetInfo = () => {
    setBusinessInfo(initialBusinessInfo);
    localStorage.removeItem('asaduzzaman_business_info');
  };

  const handleOpenQuoteModalWithItem = (itemTitle: string) => {
    setPreselectedItem(itemTitle);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8faf9] text-slate-900 selection:bg-amber-300 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar
        info={businessInfo}
        lang={lang}
        onLanguageChange={setLang}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuoteModal={() => {
          setPreselectedItem('');
          setIsQuoteOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero
          info={businessInfo}
          lang={lang}
          onOpenQuoteModal={() => {
            setPreselectedItem('');
            setIsQuoteOpen(true);
          }}
        />

        {/* About Section */}
        <About
          info={businessInfo}
          values={defaultCoreValues}
          lang={lang}
        />

        {/* Services Section */}
        <Services
          services={defaultServices}
          lang={lang}
          onSelectServiceForQuote={handleOpenQuoteModalWithItem}
        />

        {/* Featured Products & Catalog */}
        <ProductCatalog
          products={defaultProducts}
          lang={lang}
          onSelectProductForQuote={handleOpenQuoteModalWithItem}
        />

        {/* Contact Section */}
        <Contact
          info={businessInfo}
          lang={lang}
        />

        {/* Client Testimonials */}
        <Testimonials
          testimonials={defaultTestimonials}
          lang={lang}
        />

        {/* FAQ Section */}
        <FAQ
          faqs={defaultFAQs}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        info={businessInfo}
        lang={lang}
      />

      {/* Floating Action Buttons */}
      <FloatingContact
        info={businessInfo}
        lang={lang}
      />

      {/* Order Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        info={businessInfo}
        lang={lang}
        preselectedItem={preselectedItem}
      />

      {/* Business Customizer Modal */}
      <BusinessInfoModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        info={businessInfo}
        onSave={handleSaveInfo}
        onReset={handleResetInfo}
        lang={lang}
      />
    </div>
  );
}
