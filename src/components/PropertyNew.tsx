import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Maximize2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UPDATED_PROPERTY_2, AGENT_INFO } from '../data/properties';

interface PropertyNewProps {
  onOpenLightbox: (photos: { url: string; caption?: string; alt: string }[], index: number) => void;
}

export const PropertyNew: React.FC<PropertyNewProps> = ({ onOpenLightbox }) => {
  const property = UPDATED_PROPERTY_2;
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  return (
    <section id="property-phu-thanh" className="py-20 bg-[#0C2734] text-[#F5F0E5] border-b border-[#CDA55B]/20 relative overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-[#CDA55B] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#071923] bg-[#CDA55B] px-3 py-1 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{property.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E5] tracking-tight">
              Nhà 3 tầng 40m² <br className="hidden sm:inline" />
              phường Phú Thạnh
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#071923] border border-[#CDA55B] px-4 py-2 text-sm font-bold text-[#CDA55B]">
            <span>{property.highlight}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Photos Section (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            
            {/* Main Featured Photo */}
            <div
              onClick={() => onOpenLightbox(property.photos, activePhotoIdx)}
              className="relative aspect-[4/3] bg-[#071923] border border-[#CDA55B]/30 overflow-hidden cursor-pointer group shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhotoIdx}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  src={property.photos[activePhotoIdx].url}
                  alt={property.photos[activePhotoIdx].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Main Photo Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071923]/95 via-[#071923]/60 to-transparent p-4 sm:p-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#CDA55B] uppercase block mb-0.5">
                    Ảnh {activePhotoIdx + 1}/4
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#F5F0E5]/90">
                    {property.photos[activePhotoIdx].caption}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#071923]/80 border border-[#CDA55B]/60 text-[#CDA55B] px-2.5 py-1 text-xs font-semibold group-hover:bg-[#CDA55B] group-hover:text-[#071923] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Xem ảnh lớn</span>
                </div>
              </div>
            </div>

            {/* 4 Photo Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {property.photos.map((photo, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative aspect-[4/3] border-2 overflow-hidden transition-all duration-200 focus:outline-none ${
                    activePhotoIdx === idx
                      ? 'border-[#CDA55B] ring-2 ring-[#CDA55B]/50 scale-[1.02]'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {activePhotoIdx === idx && (
                    <div className="absolute inset-0 bg-[#CDA55B]/20" />
                  )}
                </motion.button>
              ))}
            </div>

          </motion.div>

          {/* Details Section (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#071923] p-6 sm:p-8 border border-[#CDA55B]/40 shadow-2xl flex flex-col justify-between space-y-6"
          >
            
            <div>
              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#CDA55B] uppercase mb-2">
                <MapPin className="w-4 h-4 text-[#CDA55B]" />
                <span>{property.district}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E5] mb-4 leading-snug">
                {property.title}
              </h3>

              {/* Description */}
              <p className="text-[#67747A] text-sm leading-relaxed text-[#F5F0E5]/80 mb-6 border-b border-white/10 pb-6">
                “{property.description}”
              </p>

              {/* Specifications */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-semibold text-[#67747A] uppercase tracking-wider block">
                  Đặc điểm nổi bật:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {property.specs.map((spec) => (
                    <div
                      key={spec}
                      className="bg-[#0C2734] border border-[#CDA55B]/30 p-2.5 text-center"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-[#F5F0E5] block">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-[#0C2734] p-4 border-l-4 border-[#CDA55B] mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#67747A] uppercase font-semibold block">Giá bán chính chủ:</span>
                  <span className="font-serif text-3xl font-bold text-[#CDA55B]">
                    {property.price}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] bg-[#CDA55B]/20 text-[#CDA55B] px-2 py-1 font-semibold uppercase">
                    Thương lượng
                  </span>
                </div>
              </div>

              {/* Extra Notice */}
              {property.extraNotice && (
                <div className="flex items-center gap-2 bg-[#0C2734] text-[#F5F0E5]/90 p-3 text-xs border border-white/10">
                  <Info className="w-4 h-4 text-[#CDA55B] shrink-0" />
                  <span>{property.extraNotice}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={AGENT_INFO.telLink}
                className="w-full flex items-center justify-center gap-3 bg-[#CDA55B] hover:bg-[#b89146] text-[#071923] font-bold py-3.5 px-6 transition-colors shadow-md text-base"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Gọi xem nhà</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={AGENT_INFO.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#0C2734] hover:bg-white/10 text-[#F5F0E5] border border-[#CDA55B]/50 font-semibold py-3.5 px-6 transition-colors text-base"
              >
                <MessageCircle className="w-4 h-4 text-[#CDA55B]" />
                <span>Nhắn Zalo</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
