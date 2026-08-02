import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MortgageCalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [housePrice, setHousePrice] = useState<number>(3500000000); // 3.5 Tỷ
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% trả trước
  const [loanTermYears, setLoanTermYears] = useState<number>(20); // 20 Năm
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%/năm

  // Calculations
  const downPaymentAmount = (housePrice * downPaymentPercent) / 100;
  const loanAmount = housePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  // Monthly payment formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyPayment =
    loanAmount > 0 && monthlyInterestRate > 0
      ? (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
      : 0;

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-12 bg-[#0C2734] text-[#F5F0E5] border-b border-[#CDA55B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#071923] border border-[#CDA55B]/40 p-6 sm:p-8 shadow-xl transition-all">
          <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#CDA55B]/20 border border-[#CDA55B] text-[#CDA55B] group-hover:scale-105 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0E5] group-hover:text-[#CDA55B] transition-colors">
                  Tính toán vay mua nhà trả góp
                </h3>
                <p className="text-xs text-[#67747A]">
                  Ước tính khoản vay & số tiền trả hàng tháng cho căn nhà anh/chị chọn
                </p>
              </div>
            </div>

            <button type="button" className="text-[#CDA55B] flex items-center gap-1 text-sm font-semibold">
              <span>{isOpen ? 'Thu gọn' : 'Mở công cụ'}</span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Inputs */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Preset Property Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDA55B] uppercase mb-2">
                        Chọn mức giá nhà tham khảo:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setHousePrice(3200000000)}
                          className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                            housePrice === 3200000000
                              ? 'bg-[#CDA55B] text-[#071923] border-[#CDA55B]'
                              : 'bg-[#0C2734] text-[#F5F0E5] border-white/20 hover:border-[#CDA55B]/60'
                          }`}
                        >
                          3.2 Tỷ (Tây Thạnh)
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setHousePrice(4200000000)}
                          className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                            housePrice === 4200000000
                              ? 'bg-[#CDA55B] text-[#071923] border-[#CDA55B]'
                              : 'bg-[#0C2734] text-[#F5F0E5] border-white/20 hover:border-[#CDA55B]/60'
                          }`}
                        >
                          4.2 Tỷ (Phú Thạnh)
                        </motion.button>
                      </div>
                    </div>

                    {/* Custom Price Range */}
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span>Giá trị bất động sản:</span>
                        <span className="text-[#CDA55B] font-bold">{formatVND(housePrice)}</span>
                      </div>
                      <input
                        type="range"
                        min={2000000000}
                        max={10000000000}
                        step={100000000}
                        value={housePrice}
                        onChange={(e) => setHousePrice(Number(e.target.value))}
                        className="w-full accent-[#CDA55B] cursor-pointer"
                      />
                    </div>

                    {/* Down Payment Percent */}
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span>Vốn tự có (Trả trước {downPaymentPercent}%):</span>
                        <span className="text-[#CDA55B] font-bold">{formatVND(downPaymentAmount)}</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={80}
                        step={5}
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        className="w-full accent-[#CDA55B] cursor-pointer"
                      />
                    </div>

                    {/* Term & Interest */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1">Thời hạn vay ({loanTermYears} năm):</label>
                        <select
                          value={loanTermYears}
                          onChange={(e) => setLoanTermYears(Number(e.target.value))}
                          className="w-full bg-[#0C2734] border border-white/20 px-3 py-2 text-xs text-[#F5F0E5] focus:border-[#CDA55B] focus:outline-none"
                        >
                          <option value={5}>5 Năm</option>
                          <option value={10}>10 Năm</option>
                          <option value={15}>15 Năm</option>
                          <option value={20}>20 Năm</option>
                          <option value={25}>25 Năm</option>
                          <option value={30}>30 Năm</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium mb-1">Lãi suất ưu đãi (%/năm):</label>
                        <input
                          type="number"
                          step={0.1}
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full bg-[#0C2734] border border-white/20 px-3 py-2 text-xs text-[#F5F0E5] focus:border-[#CDA55B] focus:outline-none"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Output Results */}
                  <div className="lg:col-span-5 bg-[#0C2734] p-6 border border-[#CDA55B]/30 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-xs font-bold tracking-widest text-[#CDA55B] uppercase block">
                        KẾT QUẢ ƯỚC TÍNH:
                      </span>

                      <div>
                        <span className="text-xs text-[#67747A] block">Số tiền cần vay ngân hàng:</span>
                        <span className="text-xl font-bold text-[#F5F0E5]">{formatVND(loanAmount)}</span>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs text-[#67747A] block">Gốc + Lãi trả hàng tháng (Ước tính):</span>
                        <motion.span
                          key={monthlyPayment}
                          initial={{ scale: 0.95, opacity: 0.8 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="font-serif text-3xl font-bold text-[#CDA55B] block"
                        >
                          {formatVND(monthlyPayment)}
                        </motion.span>
                        <span className="text-[11px] text-[#67747A] block mt-1">
                          / tháng (theo dư nợ giảm dần)
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-6">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact"
                        className="block text-center bg-[#CDA55B] text-[#071923] font-bold py-2.5 px-4 text-xs tracking-wider uppercase hover:bg-[#b89146] transition-colors"
                      >
                        Cần tư vấn gói vay ưu đãi
                      </motion.a>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
