import { useLocation } from "wouter";
import { Flagship } from "@/lib/flagships";
import { ChevronLeft } from "lucide-react";

interface ProductPageProps {
  product: Flagship;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 text-white">
        <button
          onClick={() => setLocation("/flagships")}
          className="rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-md transition hover:text-white"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/60">Product Showroom</span>
      </header>

      <section className="relative min-h-[92svh] overflow-hidden bg-black">
        <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-[#050505]" />
        <div className="relative z-10 flex min-h-[92svh] flex-col justify-end px-5 pb-12 pt-28 sm:px-8">
          <p className="mb-3 w-fit rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
            {product.status}
          </p>
          <h1 className="font-['Rajdhani'] text-5xl font-bold uppercase leading-none tracking-[0.05em] text-white sm:text-7xl">
            {product.name}
          </h1>
          <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.18em] text-[#00ff88] sm:text-base">
            {product.category}
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 pt-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#00ff88]">Overview</p>
            <p className="mt-5 text-lg leading-relaxed text-white/78 sm:text-xl">{product.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Core System", "Built as part of the Metallic.V1 ecosystem."],
              ["02", "Premium Access", "Product details, features, and release pathway live here."],
              ["03", "Roadmap", "Deeper screenshots, demos, and founder updates can be added."],
            ].map(([num, title, body]) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs text-[#00ff88]">{num}</p>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-[0.08em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{body}</p>
              </div>
            ))}
          </div>

          <button className="w-full rounded-2xl bg-[#00ff88] px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white active:scale-[0.99]">
            Request Product Access
          </button>
        </div>
      </section>
    </main>
  );
}
