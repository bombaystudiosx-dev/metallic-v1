import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import FounderProgram from "@/components/FounderProgram";
import { ASSET_URLS } from "@/lib/assetUrls";

/**
 * BETA HUB PAGE — Founder Startup Visual
 * 
 * Design: Dark Forge — Luxury Cinematic
 * - Fullscreen background video (founder workspace, fully visible)
 * - Premium tiered Founder Program with glassmorphism cards
 * - Three tiers: Supporter ($25), Founder ($50), Pioneer ($100)
 * - No heavy overlays covering the image
 */

export default function BetaHub() {
  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleAccessCheck = () => {
    const hasAccess = localStorage.getItem("metallic-v1-access") === "true";
    if (!hasAccess) {
      setLocation("/");
    }
  };

  useEffect(() => {
    handleAccessCheck();
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-auto">
      {/* Background Video - Fullscreen */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src={ASSET_URLS.backgrounds.betaHub}
        style={{ display: "block" }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <div className="flex justify-between items-start p-4 sm:p-6 md:p-12 safe-area fade-in gap-4 flex-shrink-0">
          <button
            onClick={() => setLocation("/")}
            className="uppercase text-xs sm:text-sm font-semibold text-foreground hover-glow active:scale-95 transition-transform duration-150 tracking-widest"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
          >
            ← BACK
          </button>
          <button
            onClick={() => setLocation("/flagships")}
            className="uppercase text-xs sm:text-sm font-semibold text-foreground hover-glow active:scale-95 transition-transform duration-150 tracking-widest"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
          >
            FLAGSHIPS
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-6xl">
            <FounderProgram />
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-8 sm:h-12" />
      </div>
    </div>
  );
}
