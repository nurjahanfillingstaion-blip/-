import React, { useState } from 'react';
import { Search, Tag, ShoppingBag, CheckCircle, Flame, Filter } from 'lucide-react';
import { ProductItem, Language } from '../types';

interface ProductCatalogProps {
  products: ProductItem[];
  lang: Language;
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  lang,
  onSelectProductForQuote,
}) => {
  const isBn = lang === 'bn';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelBn: 'সকল ক্যাটাগরি', labelEn: 'All Categories' },
    { id: 'Fuel & Lubricants', labelBn: 'জ্বালানি ও লুব্রিকেন্ট', labelEn: 'Fuel & Lubricants' },
    { id: 'Food & Essentials', labelBn: 'খাদ্য ও নিত্যপণ্য', labelEn: 'Food & Essentials' },
    { id: 'Business Supplies', labelBn: 'ব্যবসায়িক সামগ্রী', labelEn: 'Business Supplies' },
    { id: 'Logistics', labelBn: 'লজিস্টিকস', labelEn: 'Logistics' },
  ];

  const filteredProducts = products.filter((prod) => {
    const name = isBn ? prod.nameBn : prod.nameEn;
    const cat = prod.categoryEn;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || cat === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {isBn ? 'পণ্য ও সরবরাহ তালিকা' : 'Product & Supply Catalog'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b5d3b] mt-3 mb-4">
            {isBn ? 'আমাদের বিশেষ পণ্যসামগ্রী' : 'Featured Products'}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            {isBn
              ? 'ব্যবসায়িক অথবা ব্যক্তিগত প্রয়োজনে পাইকারি ও খুচরা মূল্যে অর্ডার করুন।'
              : 'Place wholesale or retail inquiries for business or enterprise requirements.'}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-[#f5f8f6] p-4 sm:p-6 rounded-2xl border border-emerald-100 mb-10 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isBn ? 'পণ্য বা সেবা খুঁজুন...' : 'Search products...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-emerald-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <Filter className="w-4 h-4 text-emerald-800 hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b5d3b] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-100 border border-emerald-200/60'
                }`}
              >
                {isBn ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#f5f8f6] rounded-2xl border border-dashed border-emerald-200">
            <p className="text-slate-600 text-lg">
              {isBn ? 'কোনো পণ্য পাওয়া যায়নি।' : 'No products found matching your search.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const name = isBn ? prod.nameBn : prod.nameEn;
              const category = isBn ? prod.categoryBn : prod.categoryEn;
              const price = isBn ? prod.priceBn : prod.priceEn;
              const desc = isBn ? prod.descriptionBn : prod.descriptionEn;
              const badge = isBn ? prod.badgeBn : prod.badgeEn;

              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-emerald-400"
                >
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {category}
                      </span>
                      {badge && (
                        <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3 text-red-600 fill-red-600" />
                          <span>{badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0b5d3b] transition-colors leading-snug">
                      {name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div>
                    {/* Price & In-Stock indicator */}
                    <div className="pt-4 border-t border-slate-100 mb-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-600 block">{isBn ? 'মূল্য/রেট' : 'Price'}</span>
                        <span className="text-base font-extrabold text-[#0b5d3b]">{price}</span>
                      </div>
                      <div className="flex items-center text-xs text-emerald-600 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 mr-1" />
                        <span>{isBn ? 'স্টক আছে' : 'Available'}</span>
                      </div>
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={() => onSelectProductForQuote(name)}
                      className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isBn ? 'অর্ডার / কোটেশন চাই' : 'Order Quote'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
