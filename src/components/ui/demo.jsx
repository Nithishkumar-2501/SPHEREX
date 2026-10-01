import React from "react";
import { Hero2 } from "./Hero2";

export default function Hero2Demo({ onOpenBooking, onOpenDemo }) {
  const customNavLinks = [
    { label: "About us", href: "#about-us" },
    { label: "Benefits", href: "#features" },
    { label: "Platform", href: "#platform" },
    { label: "Nora AI", href: "#nora-ai" },
    { label: "Pricing", href: "#pricing" },
    { label: "Campuses", href: "#multi-campus" }
  ];

  const customSocialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" }
  ];

  return (
    <div className="bg-background flex min-h-screen w-full flex-col justify-center">
      <Hero2
        brand="SPHEREX"
        navLinks={customNavLinks}
        headline={
          <>
            Automate Smarter,<br />
            Work <span className="italic font-medium font-serif text-[oklch(0.6378_0.1051_172.72)]">Faster.</span>
          </>
        }
        description={"Say goodbye to repetitive tasks. Our AI-driven platform streamlines\nyour workflows so your team can focus on what really matters."}
        primaryCtaLabel="See It In Action"
        secondaryCtaLabel="Book a demo"
        socialLinks={customSocialLinks}
        signInLabel="Book Meeting"
        onOpenBooking={onOpenBooking}
        onOpenDemo={onOpenDemo}
      />
    </div>
  );
}
