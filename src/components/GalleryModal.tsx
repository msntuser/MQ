import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Photo } from '../types';
import { AGENT_INFO } from '../data/properties';

interface GalleryModalProps {
  isOpen: boolean;
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos, onClose, onNavigate]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#071923]/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Top Header Controls */}
      <div className="flex items-center justify-between text-[#F5F0E5] z-10">
        <div>
          <span className="font-serif text-lg font-bold text-[#CDA55B]">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-xs text-[#67747A] block sm:inline sm:ml-3">
            Trần Minh Quang · Bất Động Sản TP.HCM
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 bg-[#0C2734] border border-[#CDA55B]/40 hover:border-[#CDA55B] text-[#F5F0E5] hover:text-[#CDA55B] transition-colors"
          aria-label="Close image gallery modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="absolute left-2 sm:left-6 z-20 p-3 bg-[#071923]/80 border border-white/20 text-[#F5F0E5] hover:border-[#CDA55B] hover:text-[#CDA55B] transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Photo */}
        <img
          src={currentPhoto.url}
          alt={currentPhoto.alt}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="absolute right-2 sm:right-6 z-20 p-3 bg-[#071923]/80 border border-white/20 text-[#F5F0E5] hover:border-[#CDA55B] hover:text-[#CDA55B] transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Footer Caption & Direct Action */}
      <div className="bg-[#0C2734] p-4 border border-[#CDA55B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left z-10">
        <div>
          <p className="text-sm font-medium text-[#F5F0E5]">
            {currentPhoto.caption || currentPhoto.alt}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={AGENT_INFO.telLink}
            className="bg-[#CDA55B] text-[#071923] font-bold px-4 py-2 text-xs uppercase flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Gọi xem nhà</span>
          </a>
          <a
            href={AGENT_INFO.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#071923] border border-white/20 text-[#F5F0E5] font-semibold px-4 py-2 text-xs uppercase flex items-center gap-1.5 hover:border-[#CDA55B]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#CDA55B]" />
            <span>Zalo</span>
          </a>
        </div>
      </div>

    </div>
  );
};
