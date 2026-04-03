import React from 'react';

export function Logo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Orange Arch - more organic and textured look */}
      <path 
        d="M35 65C55 35 145 35 165 65" 
        stroke="#F97316" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeDasharray="1 2"
        className="opacity-80"
      />
      <path 
        d="M38 62C58 38 142 38 162 62" 
        stroke="#FB923C" 
        strokeWidth="6" 
        strokeLinecap="round"
        className="opacity-60"
      />
      
      {/* Green Figure - Left */}
      <g className="opacity-90">
        {/* Head */}
        <circle cx="62" cy="105" r="14" fill="#4ADE80" />
        <circle cx="62" cy="105" r="12" fill="#22C55E" />
        {/* Body - V shape with organic curves */}
        <path 
          d="M62 125C62 125 45 132 38 175C38 175 62 165 62 145C62 165 86 175 86 175C79 132 62 125 62 125Z" 
          fill="#22C55E" 
        />
        <path 
          d="M62 128C62 128 48 135 42 172C42 172 62 162 62 148C62 162 82 172 82 172C76 135 62 128 62 128Z" 
          fill="#16A34A" 
          className="opacity-40"
        />
      </g>

      {/* Blue Figure - Right */}
      <g className="opacity-90">
        {/* Head */}
        <circle cx="138" cy="115" r="14" fill="#60A5FA" />
        <circle cx="138" cy="115" r="12" fill="#3B82F6" />
        {/* Body - V shape with organic curves */}
        <path 
          d="M138 135C138 135 115 142 108 185C108 185 138 175 138 155C138 175 168 185 168 185C161 142 138 135 138 135Z" 
          fill="#3B82F6" 
        />
        <path 
          d="M138 138C138 138 118 145 112 182C112 182 138 172 138 158C138 172 164 182 164 182C158 145 138 138 138 138Z" 
          fill="#2563EB" 
          className="opacity-40"
        />
      </g>
    </svg>
  );
}
