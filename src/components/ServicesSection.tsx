import React from 'react';
import { Search, Home, Handshake, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/properties';

interface ServicesSectionProps {
  onSelectDemand: (demand: 'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectDemand }) => {
  const icons = [Search, Home, Handshake, FileText];
  const demandMap: Record<string, 'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn'> = {
    '01': 'Cần mua',
    '02': 'Cần bán',
    '03': 'Ký gửi',
    '04': 'Tư vấn',
  };

  return (
    <section id="services" className="py-20 bg-[#F5F0E5] text-[#14222A] border-b border-[#14222A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#CDA55B] uppercase block mb-2">
            DỊCH VỤ BẤT ĐỘNG SẢN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071923] tracking-tight leading-tight mb-4">
            Một đầu mối tin cậy <br />
            cho nhu cầu nhà đất
          </h2>
          <p className="text-[#67747A] text-base sm:text-lg leading-relaxed">
            “Tập trung vào trải nghiệm gọn gàng, thông tin minh bạch và phương án phù hợp với từng khách hàng.”
          </p>
        </motion.div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = icons[index % icons.length];
            const targetDemand = demandMap[service.number] || 'Tư vấn';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#071923] text-[#F5F0E5] p-8 border border-[#CDA55B]/20 hover:border-[#CDA55B] transition-colors duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-2xl font-bold text-[#CDA55B]/80 group-hover:text-[#CDA55B] transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 bg-[#0C2734] border border-[#CDA55B]/30 text-[#CDA55B] group-hover:bg-[#CDA55B] group-hover:text-[#071923] transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#F5F0E5] mb-3 group-hover:text-[#CDA55B] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#67747A] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Link trigger */}
                <a
                  href="#contact"
                  onClick={() => onSelectDemand(targetDemand)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CDA55B] group-hover:text-[#F5F0E5] transition-colors pt-4 border-t border-white/10"
                >
                  <span>Trao đổi nhu cầu</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
