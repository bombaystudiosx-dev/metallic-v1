import { Flagship } from "@/lib/flagships";

interface FlagshipCardProps {
  flagship: Flagship;
  onClick: () => void;
}

export default function FlagshipCard({ flagship, onClick }: FlagshipCardProps) {
  const isAvailable = flagship.status === "AVAILABLE NOW";

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-full sm:w-[70%] md:w-[60%] bg-card/80 backdrop-blur border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent/50 active:scale-95 transition-all duration-300 group"
    >
      {/* Product Image */}
      {flagship.image && (
        <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden bg-background">
          <img
            src={flagship.image}
            alt={flagship.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
        {/* Status Badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-foreground leading-tight">
            {flagship.name}
          </h3>
          <div
            className={`label-uppercase text-xs px-2 sm:px-3 py-1 rounded flex-shrink-0 ${
              isAvailable
                ? "bg-accent/20 text-accent"
                : "bg-destructive/20 text-destructive"
            }`}
          >
            {flagship.status}
          </div>
        </div>

        {/* Category */}
        <div className="label-uppercase text-xs text-muted-foreground">{flagship.category}</div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3">
          {flagship.description}
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button
            className={`label-uppercase text-xs font-semibold transition-all duration-200 active:scale-95 ${
              isAvailable
                ? "text-accent hover:text-accent/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isAvailable ? "GET ACCESS NOW →" : "COMING SOON"}
          </button>
        </div>
      </div>
    </div>
  );
}
