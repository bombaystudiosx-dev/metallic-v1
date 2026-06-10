import { useLocation } from "wouter";
import { Flagship } from "@/lib/flagships";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { ASSET_URLS } from "@/lib/assetUrls";

interface ProductGridProps {
  products: Flagship[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [, setLocation] = useLocation();

  const handleProductClick = (productId: string) => {
    setLocation(`/flagships/product/${productId}`);
  };

  return (
    <main className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <section className="relative w-full min-h-[86svh] overflow-hidden bg-black">
        <img
          src={ASSET_URLS.backgrounds.flagships}
          alt="Metallic.V1 robot workshop"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/70" />

        <div className="relative z-10 flex min-h-[86svh] flex-col justify-between px-5 py-7 sm:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setLocation("/")}
              className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm transition hover:text-white"
              aria-label="Back to home"
            >
              <ChevronLeft size={18} />
              Back
            </button>
            <div className="text-[12px] font-bold uppercase tracking-[0.32em] text-white/85">
              METALLIC.V1
            </div>
          </div>

          <div className="ml-auto max-w-[62%] pt-16 text-right">
            <h1 className="font-['Rajdhani'] text-4xl font-bold uppercase leading-[0.95] tracking-[0.06em] text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.65)] sm:text-6xl">
              Flagship<br />Products
            </h1>
          </div>

          <div className="flex flex-col items-center gap-2 pb-4">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/70">Scroll to Explore</p>
            <ChevronDown size={24} className="animate-bounce text-[#00ff88]" />
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-2 w-full rounded-t-[2rem] bg-[#050505] px-4 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#00ff88]">Ecosystem</p>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-[0.08em] text-white">Select a Product</h2>
            </div>
            <p className="max-w-[11rem] text-right text-xs leading-relaxed text-white/45">Tap any product to open its full showroom page.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-7 md:grid-cols-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="group block w-full text-left transition duration-300 active:scale-[0.98]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] shadow-[0_22px_45px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-1 group-hover:ring-[#00ff88]/45">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <div className="absolute inset-x-5 bottom-4 h-5 rounded-full bg-black/80 blur-xl" />
                </div>
                <div className="pt-3">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white transition group-hover:text-[#00ff88] sm:text-base">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/45">{product.status}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
