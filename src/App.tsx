import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyFeatured } from './components/PropertyFeatured';
import { PropertyNew } from './components/PropertyNew';
import { InteractiveMap } from './components/InteractiveMap';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PersonalValues } from './components/PersonalValues';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar';
import { GalleryModal } from './components/GalleryModal';
import { Photo } from './types';

export default function App() {
  const [selectedDemand, setSelectedDemand] = useState<
    'Cần mua' | 'Cần bán' | 'Ký gửi' | 'Tư vấn'
  >('Tư vấn');

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    photos: Photo[];
    currentIndex: number;
  }>({
    isOpen: false,
    photos: [],
    currentIndex: 0,
  });

  const handleOpenLightbox = (photos: Photo[], index: number) => {
    setLightboxState({
      isOpen: true,
      photos,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIdx: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIdx }));
  };

  const handleSelectPropertyFromMap = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E5] text-[#14222A] flex flex-col font-sans selection:bg-[#CDA55B]/30 selection:text-[#071923]">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Property #1: Tây Thạnh, Tân Phú */}
        <PropertyFeatured onOpenLightbox={handleOpenLightbox} />

        {/* Property #2: Phú Thạnh, Tân Phú */}
        <PropertyNew onOpenLightbox={handleOpenLightbox} />

        {/* Interactive Real Estate Location Map */}
        <InteractiveMap onSelectProperty={handleSelectPropertyFromMap} />

        {/* Services Section */}
        <ServicesSection onSelectDemand={setSelectedDemand} />

        {/* Process Section */}
        <ProcessSection />

        {/* Personal Brand Values Section */}
        <PersonalValues />

        {/* Mortgage Loan Estimator Widget */}
        <MortgageCalculator />

        {/* Contact & Lead Intake Section */}
        <ContactSection
          selectedDemand={selectedDemand}
          onDemandChange={setSelectedDemand}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Action Bar for Mobile */}
      <MobileBar />

      {/* Fullscreen Photo Lightbox Modal */}
      <GalleryModal
        isOpen={lightboxState.isOpen}
        photos={lightboxState.photos}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
