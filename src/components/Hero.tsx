import React from 'react';
import { Phone, Send, CheckCircle2, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENT_INFO } from '../data/properties';
import { MQLogo } from './MQLogo';

export const Hero: React.FC = () => {
  const serviceBadges = ['Nhà phố', 'Căn hộ', 'Đất', 'Ký gửi'];

  const corePillars = [
    { title: 'UY TÍN TRONG TỪNG KẾT NỐI', icon: ShieldCheck },
    { title: 'TẬN TÂM VỚI MỖI NHU CẦU', icon: CheckCircle2 },
    { title: 'ĐỒNG HÀNH ĐẾN GIAO DỊCH', icon: Award },
  ];

  return (
    <section className="relative bg-[#071923] text-[#F5F0E5] pt-12 pb-0 overflow-hidden border-b border-[#CDA55B]/20">
      {/* Background Geometric Line Accents with ambient rotation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full border border-[#CDA55B] blur-xl"
        />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] border border-[#CDA55B] rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start bg-[#0C2734] border border-[#CDA55B]/40 px-3.5 py-1.5 rounded-none text-xs font-semibold tracking-widest text-[#CDA55B] uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CDA55B] animate-pulse" />
              <span>TRẦN MINH QUANG · TP.HCM</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F0E5] leading-[1.15]">
              Mua bán & ký gửi <br />
              <span className="text-[#CDA55B] italic font-serif">nhà đất TP.HCM</span>
            </h1>

            {/* Description */}
            <p className="text-[#67747A] text-base sm:text-lg max-w-2xl leading-relaxed text-[#F5F0E5]/80 font-normal">
              “Kết nối đúng nhu cầu, hỗ trợ rõ ràng và đồng hành sát sao trong từng bước giao dịch bất động sản.”
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={AGENT_INFO.telLink}
                className="inline-flex items-center justify-center gap-3 bg-[#CDA55B] hover:bg-[#b89146] text-[#071923] font-bold px-8 py-4 text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-2 focus:ring-[#CDA55B] focus:ring-offset-2 focus:ring-offset-[#071923] relative overflow-hidden group"
              >
                <Phone className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
                <span>Gọi {AGENT_INFO.hotline}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0C2734] hover:bg-[#071923] text-[#F5F0E5] border border-[#CDA55B]/50 hover:border-[#CDA55B] font-semibold px-8 py-4 text-base tracking-wide transition-all duration-300"
              >
                <Send className="w-4 h-4 text-[#CDA55B]" />
                <span>Gửi nhu cầu</span>
              </motion.a>
            </div>

            {/* Service Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs text-[#67747A] font-medium uppercase tracking-wider mr-2">Dịch vụ chính:</span>
              {serviceBadges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="bg-[#0C2734] text-[#F5F0E5] border border-white/10 text-xs px-3 py-1 rounded-none hover:border-[#CDA55B]/60 transition-colors cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column Portrait Frame & Floating Contact Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Decorative Frame Backing */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#CDA55B]/40 to-transparent arch-frame rounded-t-full blur-sm" />
              
              {/* Main Portrait Container in Arch Shape */}
              <div className="relative bg-[#0C2734] border-2 border-[#CDA55B]/60 arch-frame overflow-hidden shadow-2xl group">
                <img
                  src={AGENT_INFO.portrait}
                  alt="Chân dung Trần Minh Quang - Chuyên viên bất động sản TP.HCM"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle MQ Badge inside Frame */}
                <div className="absolute top-4 right-4 bg-[#071923]/90 backdrop-blur-md p-2 border border-[#CDA55B]/40 shadow-lg">
                  <MQLogo size="sm" />
                </div>
              </div>

              {/* Floating Contact Card Badge with subtle float animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#F5F0E5] text-[#14222A] p-5 border-2 border-[#CDA55B] shadow-2xl max-w-[260px] z-20"
              >
                <div className="text-[10px] font-bold tracking-widest text-[#67747A] uppercase mb-1">
                  LIÊN HỆ TRỰC TIẾP
                </div>
                <a
                  href={AGENT_INFO.telLink}
                  className="block font-serif text-2xl font-bold text-[#071923] hover:text-[#CDA55B] transition-colors leading-none my-1"
                >
                  {AGENT_INFO.hotline}
                </a>
                <div className="text-xs font-medium text-[#14222A] pt-1.5 border-t border-[#14222A]/10 mt-2">
                  Mua bán · Ký gửi · Tư vấn
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Gold Champagne Banner under Hero */}
      <div className="bg-[#CDA55B] text-[#071923] py-5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {corePillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex items-center justify-center gap-3 font-semibold text-sm sm:text-base tracking-wider ${
                  idx !== corePillars.length - 1 ? 'md:border-r md:border-[#071923]/20' : ''
                }`}
              >
                <IconComp className="w-5 h-5 text-[#071923]" />
                <span>{pillar.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
