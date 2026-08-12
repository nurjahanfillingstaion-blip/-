export interface ServiceItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  icon: string; // Lucide icon name
  tagBn: string;
  tagEn: string;
  featuresBn: string[];
  featuresEn: string[];
}

export interface ProductItem {
  id: string;
  nameBn: string;
  nameEn: string;
  categoryBn: string;
  categoryEn: string;
  priceBn: string;
  priceEn: string;
  descriptionBn: string;
  descriptionEn: string;
  badgeBn?: string;
  badgeEn?: string;
  inStock: boolean;
  image?: string;
}

export interface CoreValue {
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  commentBn: string;
  commentEn: string;
  rating: number;
}

export interface FAQItem {
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export interface BusinessInfo {
  ownerNameBn: string;
  ownerNameEn: string;
  companyNameBn: string;
  companyNameEn: string;
  sloganBn: string;
  sloganEn: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressBn: string;
  addressEn: string;
  taglineBn: string;
  taglineEn: string;
  noticeBn?: string;
  noticeEn?: string;
}

export type Language = 'bn' | 'en';
