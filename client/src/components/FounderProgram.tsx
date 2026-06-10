import { Check } from "lucide-react";

interface TierProps {
  name: string;
  price: number;
  description: string;
  benefits: string[];
  cta: string;
  highlighted?: boolean;
  note?: string;
}

const TierCard = ({ name, price, description, benefits, cta, highlighted, note }: TierProps) => (
  <div
    className={`relative glass-panel rounded-lg p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:border-accent/50 ${
      highlighted ? "ring-2 ring-accent/50 scale-105 sm:scale-100" : ""
    }`}
  >
    {/* Tier Header */}
    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-3xl sm:text-4xl font-bold text-accent">${price}</span>
        <span className="text-xs sm:text-sm text-muted-foreground">/one-time</span>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>

    {/* Benefits List */}
    <div className="space-y-3 mb-6 flex-1">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm text-foreground leading-relaxed">{benefit}</span>
        </div>
      ))}
    </div>

    {/* Note (for Founder tier) */}
    {note && (
      <div className="mb-4 p-3 bg-background/30 rounded border border-white/5">
        <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
      </div>
    )}

    {/* CTA Button */}
    <button
      className={`w-full uppercase text-xs sm:text-sm font-semibold py-3 sm:py-4 rounded transition-all duration-200 active:scale-95 ${
        highlighted
          ? "bg-gradient-to-r from-accent/60 to-accent/40 text-accent-foreground hover:from-accent/80 hover:to-accent/60"
          : "bg-background/30 border border-accent/30 text-accent hover:bg-background/50 hover:border-accent/50"
      }`}
    >
      {cta}
    </button>
  </div>
);

export default function FounderProgram() {
  const tiers: TierProps[] = [
    {
      name: "SUPPORTER",
      price: 25,
      description: "Early supporter tier",
      benefits: [
        "Zouk Skills Bundle",
        "Agent Bundle",
        "Early Contributor Status",
        "Priority Access to Future Releases",
        "Development Updates",
      ],
      cta: "Become a Supporter →",
    },
    {
      name: "FOUNDER",
      price: 50,
      description: "Premium founder tier",
      benefits: [
        "Everything in Supporter",
        "Limited Edition Metallic.V1 Founder T-Shirt",
        "Founder Recognition Status",
      ],
      cta: "Become a Founder →",
      highlighted: true,
      note: "Founder T-Shirts are produced in limited batches and shipped after major development milestones are reached.",
    },
    {
      name: "PIONEER",
      price: 100,
      description: "Elite pioneer tier",
      benefits: [
        "Everything in Founder",
        "Priority Beta Access",
        "Exclusive Founder Badge",
        "Future Founder-Only Perks",
        "Priority Consideration for New Products and Releases",
      ],
      cta: "Become a Pioneer →",
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Founder Program
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Support Metallic.V1 development and join our community of early believers. Your contribution fuels innovation.
        </p>
      </div>

      {/* Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {tiers.map((tier, idx) => (
          <TierCard key={idx} {...tier} />
        ))}
      </div>
    </div>
  );
}
