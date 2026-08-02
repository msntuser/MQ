import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { MQLogo } from './MQLogo';
import { AGENT_INFO } from '../data/properties';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071923] text-[#F5F0E5] pt-16 pb-24 sm:pb-16 border-t border-[#CDA55B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <MQLogo size="lg" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#F5F0E5] tracking-tight">
                  TRẦN MINH QUANG
                </h3>
                <p className="text-xs font-semibold text-[#CDA55B] uppercase tracking-widest">
                  BẤT ĐỘNG SẢN TP.HCM
                </p>
              </div>
            </div>

            <p className="text-sm text-[#67747A] max-w-md leading-relaxed">
              Mua bán, ký gửi nhà đất TP.HCM. Chuyên nghiệp trong cách làm, chân thành trong kết nối, sẵn sàng đồng hành cùng anh/chị trong từng quyết định bất động sản.
            </p>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#CDA55B] uppercase block">
              THÔNG TIN LIÊN HỆ
            </span>

            <div className="space-y-2 text-sm text-[#F5F0E5]/80">
              <p className="font-semibold text-[#F5F0E5]">Trần Minh Quang</p>
              <p>Chuyên viên tư vấn nhà đất TP.HCM</p>
              <a
                href={AGENT_INFO.telLink}
                className="inline-flex items-center gap-2 text-[#CDA55B] font-bold text-base hover:underline pt-1"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Hotline: {AGENT_INFO.hotline}</span>
              </a>
            </div>
          </div>

          {/* Direct Actions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#CDA55B] uppercase block">
              KẾT NỐI TRỰC TIẾP
            </span>

            <div className="space-y-2">
              <a
                href={AGENT_INFO.telLink}
                className="w-full flex items-center justify-center gap-2 bg-[#CDA55B] text-[#071923] font-bold py-2.5 px-4 text-xs uppercase hover:bg-[#b89146] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Gọi điện trực tiếp</span>
              </a>

              <a
                href={AGENT_INFO.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0C2734] border border-[#CDA55B]/40 text-[#F5F0E5] font-semibold py-2.5 px-4 text-xs uppercase hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#CDA55B]" />
                <span>Nhắn Zalo</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#67747A] gap-4">
          <p>© {new Date().getFullYear()} TRẦN MINH QUANG · BẤT ĐỘNG SẢN TP.HCM. Tất cả quyền được bảo lưu.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#CDA55B] hover:text-[#F5F0E5] transition-colors font-medium"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
