import { Flagship } from "@/lib/flagships";
import { X } from "lucide-react";

interface ProductDetailModalProps {
  product: Flagship;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const isAvailable = product.status === "AVAILABLE NOW";

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
        <div className="w-full max-w-2xl bg-card/90 backdrop-blur border border-white/10 rounded-lg overflow-hidden slide-up">
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Product Image */}
          {product.image && (
            <div className="w-full aspect-square overflow-hidden bg-background/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Product Details */}
          <div className="p-6 sm:p-8 md:p-12 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                  {product.name}
                </h1>
                <div className="status-badge flex-shrink-0">
                  {isAvailable ? "AVAILABLE" : "COMING SOON"}
                </div>
              </div>

              <p className="label-uppercase text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                className={`w-full label-uppercase text-sm font-semibold py-3 sm:py-4 rounded transition-all duration-200 active:scale-95 ${
                  isAvailable
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-muted text-muted-foreground cursor-default"
                }`}
              >
                {isAvailable ? "GET ACCESS NOW" : "COMING SOON"}
              </button>
            </div>

            {/* Close Button (Bottom) */}
            <button
              onClick={onClose}
              className="w-full label-uppercase text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors active:scale-95 py-2"
            >
              ← BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
