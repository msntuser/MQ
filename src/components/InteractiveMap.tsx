import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Sparkles, Navigation, Layers, ChevronRight, Eye, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_PROPERTY_1, UPDATED_PROPERTY_2 } from '../data/properties';

interface InteractiveMapProps {
  onSelectProperty?: (sectionId: string) => void;
}

export interface MapPropertyItem {
  id: string;
  badge: string;
  title: string;
  district: string;
  price: string;
  specs: string[];
  photoUrl: string;
  lat: number;
  lng: number;
  sectionId: string;
}

const PROPERTIES_ON_MAP: MapPropertyItem[] = [
  {
    id: FEATURED_PROPERTY_1.id,
    badge: 'BẤT ĐỘNG SẢN NỔI BẬT',
    title: 'Căn nhà đáng chú ý tại Tây Thạnh, Tân Phú',
    district: FEATURED_PROPERTY_1.district,
    price: FEATURED_PROPERTY_1.price,
    specs: FEATURED_PROPERTY_1.specs,
    photoUrl: FEATURED_PROPERTY_1.photos[0].url,
    lat: 10.8093,
    lng: 106.6272,
    sectionId: 'property-tay-thanh',
  },
  {
    id: UPDATED_PROPERTY_2.id,
    badge: 'SẢN PHẨM MỚI CẬP NHẬT',
    title: 'Nhà 3 tầng 40m² phường Phú Thạnh',
    district: UPDATED_PROPERTY_2.district,
    price: UPDATED_PROPERTY_2.price,
    specs: UPDATED_PROPERTY_2.specs,
    photoUrl: UPDATED_PROPERTY_2.photos[0].url,
    lat: 10.7836,
    lng: 106.6355,
    sectionId: 'property-phu-thanh',
  },
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectProperty }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);
  const [tileProvider, setTileProvider] = useState<'carto' | 'osm'>('carto');
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Center coordinates between Tây Thạnh and Phú Thạnh, Tân Phú
    const centerLat = 10.7965;
    const centerLng = 106.6310;

    // Create Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: [centerLat, centerLng],
      zoom: 14,
      zoomControl: false,
      scrollWheelZoom: false, // Prevent page jump during scroll
    });

    mapInstanceRef.current = map;

    // Add luxury styled tile layer (CartoDB Voyager)
    const cartoTileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    const tileLayer = L.tileLayer(cartoTileUrl, {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Custom controls position
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Create custom pins & popups
    PROPERTIES_ON_MAP.forEach((prop) => {
      // Create HTML pin icon matching brand colors
      const customIcon = L.divIcon({
        className: 'custom-property-marker',
        html: `
          <div class="relative group cursor-pointer filter drop-shadow-lg">
            <div class="flex items-center gap-1.5 bg-[#071923] text-[#F5F0E5] border-2 border-[#CDA55B] px-3 py-1.5 rounded-lg font-sans shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#0C2734]">
              <span class="w-2.5 h-2.5 rounded-full bg-[#CDA55B] animate-ping shrink-0"></span>
              <span class="text-xs font-bold text-[#CDA55B] tracking-tight whitespace-nowrap">${prop.price}</span>
            </div>
            <div class="w-2.5 h-2.5 bg-[#CDA55B] rotate-45 mx-auto -mt-1 shadow-sm"></div>
          </div>
        `,
        iconSize: [110, 40],
        iconAnchor: [55, 40],
        popupAnchor: [0, -42],
      });

      // HTML for Popup
      const popupContentHtml = `
        <div class="p-1 font-sans text-[#14222A] max-w-[260px]">
          <div class="relative aspect-[16/10] overflow-hidden rounded mb-2 bg-[#071923]">
            <img src="${prop.photoUrl}" alt="${prop.title}" class="w-full h-full object-cover" />
            <div class="absolute top-1.5 left-1.5 bg-[#071923]/90 text-[#CDA55B] text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider border border-[#CDA55B]/40">
              ${prop.badge}
            </div>
          </div>
          <div class="flex items-center gap-1 text-[10px] font-bold text-[#CDA55B] uppercase mb-1">
            <svg class="w-3 h-3 text-[#CDA55B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>${prop.district}</span>
          </div>
          <h4 class="font-serif text-sm font-bold text-[#071923] leading-snug mb-1.5">
            ${prop.title}
          </h4>
          <div class="flex items-center justify-between border-t border-[#14222A]/10 pt-2 mt-2">
            <div>
              <span class="text-[10px] text-[#67747A] uppercase block">Giá bán:</span>
              <span class="font-bold text-xs text-[#071923]">${prop.price}</span>
            </div>
            <button 
              type="button" 
              data-section-id="${prop.sectionId}"
              class="map-popup-detail-btn inline-flex items-center gap-1 bg-[#071923] hover:bg-[#CDA55B] hover:text-[#071923] text-[#F5F0E5] text-xs font-bold px-3 py-1.5 transition-all shadow-sm cursor-pointer"
            >
              <span>Xem chi tiết</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;

      const marker = L.marker([prop.lat, prop.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(popupContentHtml, {
        maxWidth: 280,
        className: 'custom-leaflet-popup',
      });

      marker.on('click', () => {
        setActivePropertyId(prop.id);
      });

      markersRef.current[prop.id] = marker;
    });

    // Handle button click in popup
    map.on('popupopen', (e) => {
      const popupEl = e.popup.getElement();
      if (popupEl) {
        const btn = popupEl.querySelector('.map-popup-detail-btn');
        if (btn) {
          btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            const targetSection = btn.getAttribute('data-section-id');
            if (targetSection) {
              handleNavigateToProperty(targetSection);
            }
          });
        }
      }
    });

    // Fit bounds to show both properties nicely
    const bounds = L.latLngBounds(PROPERTIES_ON_MAP.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [60, 60] });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Handler to scroll smoothly to property section
  const handleNavigateToProperty = (sectionId: string) => {
    if (onSelectProperty) {
      onSelectProperty(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Center map on specific property click from side list
  const handleFocusPropertyOnMap = (property: MapPropertyItem) => {
    setActivePropertyId(property.id);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([property.lat, property.lng], 16, { duration: 1.2 });
      const marker = markersRef.current[property.id];
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 800);
      }
    }
  };

  // Reset map view to show all properties
  const handleResetMapView = () => {
    setActivePropertyId(null);
    const map = mapInstanceRef.current;
    if (map) {
      const bounds = L.latLngBounds(PROPERTIES_ON_MAP.map((p) => [p.lat, p.lng]));
      map.flyToBounds(bounds, { padding: [60, 60], duration: 1 });
    }
  };

  return (
    <section id="property-map" className="py-20 bg-[#F5F0E5] text-[#14222A] border-b border-[#14222A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-[#14222A]/10 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CDA55B] bg-[#071923] px-3 py-1 mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#CDA55B]" />
              <span>BẢN ĐỒ BẤT ĐỘNG SẢN TƯƠNG TÁC</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071923] tracking-tight">
              Vị Trí Các Sản Phẩm Đang Giao Dịch
            </h2>
            <p className="text-sm text-[#67747A] mt-2 max-w-2xl">
              Khám phá vị trí địa lý của các bất động sản tại quận Tân Phú, TP.HCM. Nhấp vào điểm đánh dấu trên bản đồ để xem tóm tắt thông tin và bấm <strong className="text-[#071923]">"Xem chi tiết"</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleResetMapView}
              className="inline-flex items-center gap-2 bg-[#071923] hover:bg-[#0C2734] text-[#F5F0E5] border border-[#CDA55B]/40 px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#CDA55B]" />
              <span>Toàn cảnh vị trí</span>
            </button>
          </div>
        </motion.div>

        {/* Map & Property List Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Side Property Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#67747A] pb-1 border-b border-[#14222A]/10">
                <span>Danh sách bất động sản ({PROPERTIES_ON_MAP.length})</span>
                <span>Tân Phú · TP.HCM</span>
              </div>

              {PROPERTIES_ON_MAP.map((prop) => {
                const isSelected = activePropertyId === prop.id;

                return (
                  <motion.div
                    key={prop.id}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#071923] text-[#F5F0E5] border-[#CDA55B] shadow-xl'
                        : 'bg-[#F0EAE0] text-[#14222A] border-[#14222A]/15 hover:border-[#CDA55B]/60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={photoUrl(prop)}
                        alt={prop.title}
                        className="w-20 h-20 object-cover border border-[#CDA55B]/30 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 inline-block mb-1 ${
                          isSelected ? 'bg-[#CDA55B] text-[#071923]' : 'bg-[#071923] text-[#CDA55B]'
                        }`}>
                          {prop.badge}
                        </span>
                        <h3 className={`font-serif text-sm font-bold truncate ${
                          isSelected ? 'text-[#F5F0E5]' : 'text-[#071923]'
                        }`}>
                          {prop.title}
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-[#CDA55B] font-semibold mt-0.5">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="truncate">{prop.district}</span>
                        </div>
                        <div className="mt-1 font-bold text-xs text-[#CDA55B]">
                          {prop.price}
                        </div>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="mt-3 pt-3 border-t border-[#14222A]/10 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleFocusPropertyOnMap(prop)}
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#CDA55B]/20 text-[#CDA55B] border border-[#CDA55B]'
                            : 'bg-[#071923]/10 hover:bg-[#071923] text-[#071923] hover:text-[#F5F0E5]'
                        }`}
                      >
                        <Navigation className="w-3 h-3 text-[#CDA55B]" />
                        <span>Xem vị trí</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavigateToProperty(prop.sectionId)}
                        className="inline-flex items-center gap-1 bg-[#CDA55B] hover:bg-[#b89146] text-[#071923] font-bold text-xs px-3 py-1 transition-colors cursor-pointer shadow-sm"
                      >
                        <span>Xem chi tiết</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Map Guide */}
            <div className="bg-[#071923] p-4 text-[#F5F0E5] border border-[#CDA55B]/30 text-xs space-y-2 mt-4">
              <div className="flex items-center gap-2 text-[#CDA55B] font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hướng dẫn xem bản đồ</span>
              </div>
              <p className="text-[#F5F0E5]/80 leading-relaxed">
                Nhấp vào bất kỳ <span className="text-[#CDA55B] font-bold">ghim giá vàng</span> trên bản đồ để mở popup thông tin. Sau đó bấm <strong className="text-white">"Xem chi tiết"</strong> trong popup để chuyển đến bài giới thiệu hình ảnh đầy đủ.
              </p>
            </div>
          </div>

          {/* Interactive Map Canvas Container (8 cols) */}
          <div className="lg:col-span-8 bg-[#071923] p-2 border border-[#CDA55B]/30 shadow-2xl relative min-h-[460px] flex flex-col">
            
            {/* Map Header Overlay Bar */}
            <div className="bg-[#071923] px-4 py-2.5 border-b border-[#CDA55B]/20 flex items-center justify-between text-xs text-[#F5F0E5] z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-[#CDA55B]">Bản đồ tương tác trực tuyến</span>
              </div>
              <span className="text-[11px] text-[#67747A] hidden sm:inline">
                Tân Phú · TP. Hồ Chí Minh
              </span>
            </div>

            {/* Leaflet DOM Mount Element */}
            <div
              ref={mapContainerRef}
              className="w-full flex-grow min-h-[420px] rounded-none z-0 relative"
            />

            {/* Custom Leaflet Popup CSS overrides */}
            <style>{`
              .leaflet-popup-content-wrapper {
                background: #F5F0E5 !important;
                color: #14222A !important;
                border: 1px solid #CDA55B !important;
                border-radius: 0px !important;
                box-shadow: 0 10px 25px -5px rgba(7, 25, 35, 0.4) !important;
                padding: 4px !important;
              }
              .leaflet-popup-tip {
                background: #F5F0E5 !important;
                border: 1px solid #CDA55B !important;
              }
              .custom-property-marker {
                background: transparent !important;
                border: none !important;
              }
            `}</style>
          </div>

        </div>

      </div>
    </section>
  );
};

// Helper function to extract photo url safely
function photoUrl(property: MapPropertyItem): string {
  return property.photoUrl;
}
