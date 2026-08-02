import React from 'react';

interface MQLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export const MQLogo: React.FC<MQLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-sm`}
        aria-label="Logo MQ Real Estate"
      >
        <defs>
          <linearGradient id="mqRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E61C24" />
            <stop offset="100%" stopColor="#B30006" />
          </linearGradient>
          <linearGradient id="mqGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" />
            <stop offset="50%" stopColor="#CDA55B" />
            <stop offset="100%" stopColor="#9E762E" />
          </linearGradient>
        </defs>

        {/* Letter M - Red Luxury Gradient */}
        <path
          d="M 80 240 L 80 90 L 110 90 L 150 160 L 190 90 L 220 90 L 220 240 L 190 240 L 190 140 L 155 200 L 145 200 L 110 140 L 110 240 Z"
          fill="url(#mqRedGrad)"
        />

        {/* Roof Overhang - Red/Gold Accent */}
        <path
          d="M 130 150 L 180 110 L 230 150 L 215 162 L 180 132 L 145 162 Z"
          fill="url(#mqRedGrad)"
        />

        <path
          d="M 140 160 L 180 128 L 220 160 L 210 170 L 180 144 L 150 170 Z"
          fill="url(#mqGoldGrad)"
        />

        {/* 4 Window Squares in Center */}
        <rect x="168" y="152" width="10" height="10" fill="url(#mqGoldGrad)" rx="1" />
        <rect x="182" y="152" width="10" height="10" fill="url(#mqGoldGrad)" rx="1" />
        <rect x="168" y="166" width="10" height="10" fill="url(#mqGoldGrad)" rx="1" />
        <rect x="182" y="166" width="10" height="10" fill="url(#mqGoldGrad)" rx="1" />

        {/* Letter Q - Gold Luxury Gradient */}
        <path
          d="M 255 165 C 255 120, 285 90, 325 90 C 365 90, 395 120, 395 165 C 395 210, 365 240, 325 240 C 302 240, 282 228, 270 210 L 290 195 C 298 208, 310 216, 325 216 C 352 216, 370 195, 370 165 C 370 135, 352 114, 325 114 C 298 114, 280 135, 280 165 C 280 178, 285 188, 292 196 L 275 212 C 263 199, 255 183, 255 165 Z"
          fill="url(#mqGoldGrad)"
        />

        {/* Q Tail Slash */}
        <path
          d="M 310 185 L 345 185 L 380 240 L 345 240 Z"
          fill="url(#mqGoldGrad)"
        />
      </svg>
    </div>
  );
};
