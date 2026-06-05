// Server Component - Hidden digital marketing pricing page (not linked in navigation)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Pricing — Halo Media",
  description: "Explore Halo Media pricing packages for creative social media management, brand strategy, and performance marketing.",
  robots: {
    index: false,
    follow: false,
  },
};

import DigitalMarketingPricingClient from "./DigitalMarketingPricingClient";

export default function DigitalMarketingPricingPage() {
  return <DigitalMarketingPricingClient />;
}
