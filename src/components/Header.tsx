import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import { MQLogo } from './MQLogo';
import { AGENT_INFO } from '../data/properties';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'BĐS nổi bật', href: '#property-tay-thanh' },
    { name: 'Bản đồ vị trí', href: '#property-map' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F0E5]/95 backdrop-blur-md border-b border-[#14222A]/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo Section */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#CDA55B] rounded-lg p-1">
          <MQLogo size="md" />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#071923] group-hover:text-[#CDA55B] transition-colors">
              TRẦN MINH QUANG
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#67747A] uppercase">
              BẤT ĐỘNG SẢN TP.HCM
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#14222A] hover:text-[#CDA55B] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CDA55B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Hotline Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={AGENT_INFO.telLink}
            className="inline-flex items-center gap-2.5 bg-[#071923] hover:bg-[#0C2734] text-[#F5F0E5] px-5 py-2.5 rounded-none border border-[#CDA55B]/40 hover:border-[#CDA55B] font-medium text-sm transition-all shadow-sm hover:shadow-md group"
          >
            <span className="p-1 rounded-full bg-[#CDA55B] text-[#071923] group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </span>
            <span className="tracking-wide">{AGENT_INFO.hotline}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#071923] hover:text-[#CDA55B] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071923] border-b border-[#CDA55B]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#F5F0E5] hover:text-[#CDA55B] font-medium text-base py-2 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#CDA55B]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={AGENT_INFO.telLink}
              className="flex items-center justify-center gap-3 bg-[#CDA55B] text-[#071923] font-semibold py-3 px-4 rounded-none text-center shadow transition-all hover:bg-[#b89146]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>GỌI HOTLINE: {AGENT_INFO.hotline}</span>
            </a>
            <a
              href={AGENT_INFO.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0C2734] border border-[#CDA55B]/50 text-[#F5F0E5] font-semibold py-3 px-4 rounded-none text-center hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#CDA55B]" />
              <span>NHẮN ZALO TRỰC TIẾP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
