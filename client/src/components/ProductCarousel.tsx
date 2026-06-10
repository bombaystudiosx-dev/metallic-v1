import { useState, useRef, useEffect } from "react";
import { Flagship } from "@/lib/flagships";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  products: Flagship[];
  onProductSelect: (product: Flagship) => void;
}

export default function ProductCarousel({ products, onProductSelect }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentProduct = products[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      {/* Product Card - Centered */}
      <div
        ref={containerRef}
        onClick={() => onProductSelect(currentProduct)}
        className="w-full max-w-sm md:max-w-md bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-accent/50 active:scale-95 transition-all duration-300 group slide-up"
        style={{ width: "78%" }}
      >
        {/* Product Image */}
        {currentProduct.image && (
          <div className="w-full aspect-square overflow-hidden bg-background/20">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Card Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Header with Status Badge */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
              {currentProduct.name}
            </h3>
            <div className="status-badge flex-shrink-0">
              {currentProduct.status === "AVAILABLE NOW" ? "AVAILABLE" : "COMING SOON"}
            </div>
          </div>

          {/* Category */}
          <div className="label-uppercase text-xs text-muted-foreground">
            {currentProduct.category}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
            {currentProduct.description}
          </p>

          {/* CTA */}
          <div className="pt-2">
            <button className="label-uppercase text-xs font-semibold text-accent hover:text-accent/80 transition-colors active:scale-95">
              {currentProduct.status === "AVAILABLE NOW" ? "GET ACCESS NOW →" : "COMING SOON"}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-8 sm:mt-12">
        <button
          onClick={handlePrev}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
          aria-label="Previous product"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-accent w-6" : "bg-muted-foreground/50"
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
          aria-label="Next product"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product Counter */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 label-uppercase text-xs text-muted-foreground">
        {currentIndex + 1} / {products.length}
      </div>
    </div>
  );
}
