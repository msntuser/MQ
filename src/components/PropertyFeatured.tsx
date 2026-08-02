import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Layers, Sparkles, Eye, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PROPERTY_1, AGENT_INFO } from '../data/properties';

interface PropertyFeaturedProps {
  onOpenLightbox: (photos: { url: string; caption?: string; alt: string }[], index: number) => void;
}

export const PropertyFeatured: React.FC<PropertyFeaturedProps> = ({ onOpenLightbox }) => {
  const property = FEATURED_PROPERTY_1;
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  return (
    <section id="property-tay-thanh" className="py-20 bg-[#F5F0E5] text-[#14222A] border-b border-[#14222A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-[#14222A]/10 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CDA55B] bg-[#071923] px-3 py-1 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#CDA55B]" />
              <span>{property.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071923] tracking-tight">
              Căn nhà đáng chú ý <br className="hidden sm:inline" />
              tại Tây Thạnh, Tân Phú
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#CDA55B]/15 border border-[#CDA55B] px-4 py-2 text-sm font-bold text-[#071923]">
            <span>{property.highlight}</span>
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Gallery Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            
            {/* Main Featured Photo with AnimatePresence */}
            <div
              onClick={() => onOpenLightbox(property.photos, activePhotoIdx)}
              className="relative aspect-[4/3] bg-[#071923] border border-[#14222A]/20 overflow-hidden cursor-pointer group shadow-lg"
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
              
              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071923]/90 via-[#071923]/50 to-transparent p-4 sm:p-6 text-white flex items-end justify-between">
                <p className="text-xs sm:text-sm font-medium text-[#F5F0E5]/90 max-w-lg">
                  {property.photos[activePhotoIdx].caption}
                </p>
                <div className="flex items-center gap-1.5 bg-[#071923]/80 border border-[#CDA55B]/60 text-[#CDA55B] px-2.5 py-1 text-xs font-semibold group-hover:bg-[#CDA55B] group-hover:text-[#071923] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Phóng to</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid (5 remaining photos) */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {property.photos.map((photo, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative aspect-[4/3] border-2 overflow-hidden transition-all duration-200 focus:outline-none ${
                    activePhotoIdx === idx
                      ? 'border-[#CDA55B] ring-2 ring-[#CDA55B]/30 scale-[1.02]'
                      : 'border-transparent opacity-70 hover:opacity-100'
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
            
            <p className="text-xs text-[#67747A] italic text-right">
              * Nhấp vào bất kỳ hình ảnh nào để xem toàn màn hình
            </p>
          </motion.div>

          {/* Details Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#071923] text-[#F5F0E5] p-6 sm:p-8 border border-[#CDA55B]/30 shadow-xl flex flex-col justify-between space-y-6"
          >
            
            <div>
              {/* Location Tag */}
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#CDA55B] uppercase mb-2">
                <MapPin className="w-4 h-4 text-[#CDA55B]" />
                <span>{property.district}</span>
              </div>

              {/* Property Title */}
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
                  Thông số chi tiết:
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

              {/* Price Section */}
              <div className="bg-[#0C2734] p-4 border-l-4 border-[#CDA55B] mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#67747A] uppercase font-semibold block">Giá chào bán:</span>
                  <span className="font-serif text-3xl font-bold text-[#CDA55B]">
                    {property.price}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] bg-[#CDA55B]/20 text-[#CDA55B] px-2 py-1 font-semibold uppercase">
                    Giá chính chủ
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
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
