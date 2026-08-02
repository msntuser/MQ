import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENT_INFO } from '../data/properties';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  selectedDemand: 'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn';
  onDemandChange: (demand: 'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedDemand,
  onDemandChange,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    demand: selectedDemand,
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync selectedDemand prop to form state if changed
  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, demand: selectedDemand }));
  }, [selectedDemand]);

  const demandOptions: ('Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn')[] = [
    'Cần mua',
    'Cần bán',
    'Ký gửi',
    'Tư vấn',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setSubmitted(true);

    // Form pre-filled SMS message
    const smsMessage = encodeURIComponent(
      `Chào anh Quang, tôi là ${formData.fullName} (${formData.phone}). Nhu cầu: ${formData.demand}. Note: ${formData.note || 'Tư vấn bất động sản'}`
    );

    // Trigger SMS link
    window.location.href = `sms:${AGENT_INFO.hotlineRaw}?body=${smsMessage}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#071923] text-[#F5F0E5] relative border-b border-[#CDA55B]/20 overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#CDA55B] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Text & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CDA55B] bg-[#0C2734] border border-[#CDA55B]/30 px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 text-[#CDA55B]" />
              <span>LIÊN HỆ TƯ VẤN TRỰC TIẾP</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E5] tracking-tight leading-tight">
              Anh/chị đang cần <br />
              <span className="text-[#CDA55B] italic">mua, bán hay ký gửi?</span>
            </h2>

            <p className="text-[#67747A] text-base leading-relaxed text-[#F5F0E5]/80">
              “Để lại thông tin ngắn gọn. Anh Quang sẽ chủ động liên hệ để trao đổi cụ thể.”
            </p>

            {/* Prominent Hotline Display */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#0C2734] p-6 border-2 border-[#CDA55B] space-y-3 shadow-xl transition-transform"
            >
              <span className="text-xs font-bold tracking-widest text-[#67747A] uppercase block">
                HOTLINE LIÊN HỆ TRỰC TIẾP (24/7):
              </span>
              <a
                href={AGENT_INFO.telLink}
                className="inline-flex items-center gap-3 font-serif text-3xl sm:text-4xl font-bold text-[#CDA55B] hover:text-[#F5F0E5] transition-colors group"
              >
                <Phone className="w-8 h-8 fill-current text-[#CDA55B] group-hover:rotate-12 transition-transform" />
                <span>{AGENT_INFO.hotline}</span>
              </a>
              <p className="text-xs text-[#67747A] pt-2 border-t border-white/10">
                Cam kết phản hồi nhanh chóng, hỗ trợ chính xác thông tin quy hoạch và giá thị trường.
              </p>
            </motion.div>

            {/* Direct Zalo Link */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={AGENT_INFO.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0C2734] hover:bg-white/10 border border-[#CDA55B]/50 text-[#F5F0E5] font-semibold px-6 py-3.5 text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#CDA55B]" />
                <span>Kết nối qua Zalo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#CDA55B]" />
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0C2734] p-8 sm:p-10 border border-[#CDA55B]/40 shadow-2xl relative"
          >
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-16 h-16 bg-[#CDA55B]/20 border-2 border-[#CDA55B] text-[#CDA55B] rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-[#F5F0E5]">
                    Đã nhận thông tin!
                  </h3>
                  <p className="text-sm text-[#F5F0E5]/80 max-w-md mx-auto leading-relaxed">
                    Cảm ơn anh/chị <span className="text-[#CDA55B] font-semibold">{formData.fullName}</span>. Anh Trần Minh Quang ({AGENT_INFO.hotline}) sẽ liên hệ lại trong thời gian sớm nhất.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                      href={AGENT_INFO.telLink}
                      className="bg-[#CDA55B] text-[#071923] font-bold px-6 py-3 text-sm flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Gọi điện ngay</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#CDA55B] underline"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Demand Selection Pills */}
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-[#CDA55B] uppercase mb-3">
                      1. CHỌN NHU CẦU CỦA ANH/CHỊ:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {demandOptions.map((opt) => (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          key={opt}
                          type="button"
                          onClick={() => {
                            onDemandChange(opt);
                            setFormData({ ...formData, demand: opt });
                          }}
                          className={`py-3 px-3 text-xs sm:text-sm font-bold border transition-all text-center ${
                            formData.demand === opt
                              ? 'bg-[#CDA55B] text-[#071923] border-[#CDA55B] shadow-md'
                              : 'bg-[#071923] text-[#F5F0E5] border-white/20 hover:border-[#CDA55B]/60'
                          }`}
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[#F5F0E5]/80 mb-2">
                      Họ và tên <span className="text-[#CDA55B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className="w-full bg-[#071923] border border-white/20 px-4 py-3 text-sm text-[#F5F0E5] placeholder-gray-500 focus:outline-none focus:border-[#CDA55B] focus:ring-1 focus:ring-[#CDA55B]"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#F5F0E5]/80 mb-2">
                      Số điện thoại <span className="text-[#CDA55B]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ví dụ: 0912 345 678"
                      className="w-full bg-[#071923] border border-white/20 px-4 py-3 text-sm text-[#F5F0E5] placeholder-gray-500 focus:outline-none focus:border-[#CDA55B] focus:ring-1 focus:ring-[#CDA55B]"
                    />
                  </div>

                  {/* Additional Information / Note Field */}
                  <div>
                    <label htmlFor="note" className="block text-xs font-semibold text-[#F5F0E5]/80 mb-2">
                      Thông tin thêm (Ngân sách, Khu vực, Đặc điểm nhà...)
                    </label>
                    <textarea
                      id="note"
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Ví dụ: Cần tìm nhà khu vực Tân Phú, tài chính tầm 3-4 tỷ, hẻm xe hơi..."
                      className="w-full bg-[#071923] border border-white/20 px-4 py-3 text-sm text-[#F5F0E5] placeholder-gray-500 focus:outline-none focus:border-[#CDA55B] focus:ring-1 focus:ring-[#CDA55B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#CDA55B] hover:bg-[#b89146] text-[#071923] font-bold py-4 px-6 text-base tracking-wide transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 fill-current" />
                    <span>GỬI NHU CẦU TƯ VẤN</span>
                  </motion.button>

                  <p className="text-[11px] text-[#67747A] text-center">
                    Thông tin cá nhân của anh/chị được bảo mật tuyệt đối và chỉ dùng để liên hệ tư vấn.
                  </p>

                </form>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
