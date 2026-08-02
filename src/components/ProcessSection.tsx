import React from 'react';
import { motion } from 'motion/react';
import { WORK_PROCESS } from '../data/properties';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#071923] text-[#F5F0E5] border-b border-[#CDA55B]/20 relative overflow-hidden">
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
            QUY TRÌNH TƯ VẤN & BÀN GIAO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E5] tracking-tight leading-tight">
            Rõ ràng từ nhu cầu <br />
            đến giao dịch
          </h2>
        </motion.div>

        {/* 4 Sequential Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#0C2734] border border-[#CDA55B]/30 p-8 flex flex-col justify-between relative group hover:border-[#CDA55B] transition-colors shadow-lg"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-4xl font-bold text-[#CDA55B]">
                  {step.number}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#67747A] uppercase bg-[#071923] px-2.5 py-1 border border-white/10">
                  BƯỚC {idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#F5F0E5] mb-3 group-hover:text-[#CDA55B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#67747A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line indicator for desktop */}
              {idx < WORK_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-[2px] bg-[#CDA55B]/40 z-10" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
