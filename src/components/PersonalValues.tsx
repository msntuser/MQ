import React from 'react';
import { motion } from 'motion/react';
import { MQLogo } from './MQLogo';
import { ShieldCheck, UserCheck, Clock, Award } from 'lucide-react';

export const PersonalValues: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F0E5] text-[#14222A] border-b border-[#14222A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Logo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md bg-[#071923] p-10 sm:p-12 border-2 border-[#CDA55B] shadow-2xl text-center space-y-6">
              
              {/* Background Architectural Grid Lines */}
              <div className="absolute inset-2 border border-[#CDA55B]/20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                <MQLogo size="xl" />
                <div className="h-0.5 w-16 bg-[#CDA55B] my-2" />
                <span className="font-serif text-xl font-bold tracking-widest text-[#F5F0E5]">
                  TRẦN MINH QUANG
                </span>
                <span className="text-xs font-semibold tracking-widest text-[#CDA55B] uppercase">
                  BẤT ĐỘNG SẢN TP.HCM
                </span>
              </div>

              {/* Core Attributes */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2 text-xs text-[#F5F0E5]">
                  <ShieldCheck className="w-4 h-4 text-[#CDA55B] shrink-0" />
                  <span>Minh bạch pháp lý</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#F5F0E5]">
                  <UserCheck className="w-4 h-4 text-[#CDA55B] shrink-0" />
                  <span>Sát sao nhu cầu</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#F5F0E5]">
                  <Clock className="w-4 h-4 text-[#CDA55B] shrink-0" />
                  <span>Phản hồi siêu tốc</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#F5F0E5]">
                  <Award className="w-4 h-4 text-[#CDA55B] shrink-0" />
                  <span>Đồng hành lâu dài</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Text & Personal Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <span className="text-xs font-bold tracking-widest text-[#CDA55B] bg-[#071923] px-3 py-1 uppercase inline-block">
              GIÁ TRỊ THEO ĐUỔI
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071923] tracking-tight leading-tight">
              Chuyên nghiệp trong cách làm, <br />
              <span className="text-[#CDA55B] italic font-serif">chân thành trong kết nối.</span>
            </h2>

            <p className="text-[#14222A]/90 text-base sm:text-lg leading-relaxed font-normal bg-white/60 p-6 sm:p-8 border-l-4 border-[#CDA55B] shadow-sm">
              “Mỗi nhu cầu bất động sản là một quyết định quan trọng. Vì vậy, tôi ưu tiên sự rõ ràng, phản hồi nhanh và đồng hành thực tế để khách hàng chủ động hơn trong mọi lựa chọn.”
            </p>

            {/* Signature Block */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#071923] text-[#CDA55B] flex items-center justify-center font-serif text-xl font-bold border border-[#CDA55B]">
                TMQ
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-[#071923] leading-none mb-1">
                  Trần Minh Quang
                </h4>
                <p className="text-xs font-medium text-[#67747A] tracking-wide">
                  Mua bán, ký gửi nhà đất TP.HCM
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
