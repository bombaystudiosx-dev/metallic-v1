import { Flagship } from "@/lib/flagships";
import { X } from "lucide-react";
import { ASSET_URLS } from "@/lib/assetUrls";

interface FlagshipDetailProps {
  flagship: Flagship;
  onClose: () => void;
}

export default function FlagshipDetail({ flagship, onClose }: FlagshipDetailProps) {
  const isAvailable = flagship.status === "AVAILABLE NOW";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src={ASSET_URLS.backgrounds.flagships}
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12">
        {/* Top: Back Button */}
        <div className="flex justify-between items-start">
          <button
            onClick={onClose}
            className="label-uppercase text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
          >
            ← BACK
          </button>
          <div className="label-uppercase text-xs text-muted-foreground">
            {flagship.status}
          </div>
        </div>

        {/* Center Left: Content */}
        <div className="max-w-2xl space-y-6 fade-in">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              {flagship.name}
            </h1>
            <div className="label-uppercase text-sm text-muted-foreground mb-4">
              {flagship.category}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {flagship.description}
            </p>
          </div>
        </div>

        {/* Bottom Right: Action */}
        <div className="flex justify-end">
          <button
            className={`label-uppercase text-lg font-bold transition-all duration-200 ${
              isAvailable
                ? "text-accent hover:text-accent/80"
                : "text-muted-foreground cursor-default"
            }`}
          >
            {isAvailable ? "GET ACCESS NOW" : "COMING SOON"}
          </button>
        </div>
      </div>

      {/* Close on escape */}
      <div
        className="absolute inset-0 z-0"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      />
    </div>
  );
}
