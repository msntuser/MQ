export interface Photo {
  url: string;
  caption?: string;
  alt: string;
}

export interface Property {
  id: string;
  badge: string;
  highlight: string;
  district: string;
  title: string;
  description: string;
  specs: string[];
  price: string;
  locationDetails?: string;
  extraNotice?: string;
  photos: Photo[];
  mainPhotoIndex?: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  demand: 'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn';
  note: string;
}
