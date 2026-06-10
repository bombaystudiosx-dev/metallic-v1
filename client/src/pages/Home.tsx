import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import CountdownTimer from "@/components/CountdownTimer";
import AccessModal from "@/components/AccessModal";
import { ASSET_URLS } from "@/lib/assetUrls";

/**
 * HOME PAGE — Portal Visual
 * 
 * Design: Dark Forge — Luxury Cinematic
 * - Fullscreen background video (portal visual)
 * - Top Navigation with gradient effect (clearly clickable)
 * - Countdown timer repositioned to center-lower area (above figure's head)
 * - Brand statement (bottom left)
 * - Access CTA (bottom right)
 * - Access modal on interaction
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(() => {
    return localStorage.getItem("metallic-v1-access") === "true";
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleAccessSubmit = (email: string, name?: string) => {
    localStorage.setItem("metallic-v1-access", "true");
    localStorage.setItem("metallic-v1-email", email);
    if (name) localStorage.setItem("metallic-v1-name", name);
    setHasAccess(true);
  };

  const handleFlagshipsClick = () => {
    if (!hasAccess) {
      setAccessModalOpen(true);
    } else {
      setLocation("/flagships");
    }
  };

  const handleBetaAccessClick = () => {
    if (!hasAccess) {
      setAccessModalOpen(true);
    } else {
      setLocation("/beta-hub");
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={ASSET_URLS.backgrounds.home}
        style={{ display: "block" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-4 sm:p-6 md:p-12 safe-area">
        {/* Top Left: FLAGSHIPS Button */}
        <div className="flex justify-start items-start fade-in">
          {/* Top Left: FLAGSHIPS */}
          <button
            onClick={handleFlagshipsClick}
            className="uppercase text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded text-foreground active:scale-95 transition-all duration-150 tracking-widest metallic-button"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              background: "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 25%, #b8b8b8 50%, #d0d0d0 75%, #e8e8e8 100%)",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              color: "#1a1a1a",
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.6)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3)";
            }}
          >
            FLAGSHIPS
          </button>


        </div>

        {/* Center: Countdown Timer - Repositioned Above Head */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 z-20">
          <CountdownTimer />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Section */}
        <div className="flex justify-between items-end fade-in-delayed gap-4">
          {/* Bottom Left: Brand Statement */}
          <div className="max-w-xs sm:max-w-sm space-y-2">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground leading-tight">
              METALLIC.V1
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tech startup based in the United States.
            </p>
          </div>

          {/* Bottom Right: Access CTA */}
          <button
            onClick={handleFlagshipsClick}
            className="uppercase text-xs sm:text-sm font-semibold text-foreground hover-glow transition-all duration-200 active:scale-95 whitespace-nowrap tracking-widest"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
          >
            ACCESS →
          </button>
        </div>
      </div>

      {/* Access Modal */}
      <AccessModal
        open={accessModalOpen}
        onOpenChange={setAccessModalOpen}
        onSubmit={handleAccessSubmit}
      />
    </div>
  );
}
