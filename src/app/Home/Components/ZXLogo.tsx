// src/app/Home/Components/ZXLogo.tsx
"use client";

interface ZXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  glow?: boolean;
}

export default function ZXLogo({
  className = "",
  size = "md",
  glow = true,
}: ZXLogoProps) {
  // Height & dimensions tailored to the 599x238 aspect ratio (~2.5:1)
  const sizeConfig = {
    sm: {
      heightClass: "h-8 sm:h-9",
      glowBlur: "blur-md",
      glowSpread: "-inset-1.5",
    },
    md: {
      heightClass: "h-10 sm:h-11",
      glowBlur: "blur-lg",
      glowSpread: "-inset-2",
    },
    lg: {
      heightClass: "h-16 sm:h-20",
      glowBlur: "blur-xl",
      glowSpread: "-inset-3",
    },
    xl: {
      heightClass: "h-24 sm:h-28",
      glowBlur: "blur-2xl",
      glowSpread: "-inset-4",
    },
  };

  const { heightClass, glowBlur, glowSpread } = sizeConfig[size];

  return (
    <div
      className={`group/zxlogo relative inline-flex items-center justify-center select-none transition-transform duration-300 ease-luxury hover:scale-105 ${className}`}
    >
      {/* Dynamic Dual-Color Ambient Glow:
          Lime green on the left for 'Z', Electric Azure Blue on the right for 'X' */}
      {glow && (
        <div
          aria-hidden="true"
          className={`absolute pointer-events-none rounded-full bg-gradient-to-r from-lime-400/25 via-slate-400/10 to-blue-500/35 opacity-40 transition-all duration-500 group-hover/zxlogo:opacity-90 group-hover/zxlogo:scale-110 ${glowSpread} ${glowBlur}`}
        />
      )}

      {/* Official ZentriX Brand Logo Asset */}
      <img
        src="/zentrix_logo_cropped.png"
        alt="ZentriX Luxury Car Rentals"
        className={`relative z-10 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover/zxlogo:brightness-110 ${heightClass}`}
        loading="eager"
      />
    </div>
  );
}
