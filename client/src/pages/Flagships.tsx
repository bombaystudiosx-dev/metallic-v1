import React from "react";
import { useLocation } from "wouter";
import ProductGrid from "@/components/ProductGrid";
import ProductPage from "@/components/ProductPage";
import { FLAGSHIPS } from "@/lib/flagships";

/**
 * FLAGSHIPS PAGE — Premium Luxury Product Showroom
 * 
 * Design: Dark Forge — Premium Luxury
 * - Full-screen hero with atmospheric background
 * - Clean title positioning (upper right)
 * - Scroll indicator animation
 * - 2-column product grid (2 per row, 3 rows = 6 products)
 * - Individual product pages for deep storytelling
 * - No carousels, no mobile app feel, no floating overlays
 * - Reference: Apple, Tesla, Shopify, Nothing.tech, Arc Browser
 */

export default function Flagships() {
  const [location, setLocation] = useLocation();
  const productId = location.split("/flagships/product/")[1];

  const handleAccessCheck = () => {
    const hasAccess = localStorage.getItem("metallic-v1-access") === "true";
    if (!hasAccess) {
      setLocation("/");
    }
  };

  React.useEffect(() => {
    handleAccessCheck();
  }, []);

  // If viewing a specific product
  if (productId) {
    const product = FLAGSHIPS.find((p) => p.id === productId);
    if (product) {
      return <ProductPage product={product} />;
    }
  }

  // Main Flagships Grid View
  return <ProductGrid products={FLAGSHIPS} />;
}
