"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Play } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import FancyShineButton from "./ui/FancyShineButton";

export default function CatalisHero(props) {
    return <Hero2 {...props} />;
}

export function Hero2({
    brand: _brand = "SPHEREX",
    navLinks: _navLinks,
    headline = (
        <>
            Build and <span className="italic font-medium font-serif text-[oklch(0.6378_0.1051_172.72)]">Growth</span> with<br />
            Scalable Tools
        </>
    ),
    description = "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your institutional growth.",
    primaryCtaLabel = "Get Started",
    secondaryCtaLabel = "Learn More",
    socialLinks = [
        { label: "Linkedin", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Behance", href: "#" }
    ],
    signInLabel: _signInLabel = "Book Meeting",
    className,
    onOpenBooking,
    onOpenDemo: _onOpenDemo
}) {
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    };

    return (
        <section
            id="hero"
            className={cn(
                "relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900",
                className
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://assets.watermelon.sh/hero-2.avif"
                    alt="Background"
                    className="absolute inset-0 h-full w-full object-cover object-right md:object-center opacity-100"
                />
            </div>

            {/* Main Content Area */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pt-28 md:pt-36 pb-12 md:pb-20"
            >
                <div className="max-w-2xl lg:max-w-3xl" style={{ marginLeft: '1cm' }}>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.08]"
                    >
                        {headline}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-base md:text-lg text-black font-semibold leading-relaxed max-w-2xl whitespace-pre-line"
                    >
                        {description}
                    </motion.p>

                    <motion.div 
                        variants={itemVariants} 
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                        style={{ marginTop: 'calc(2rem + 0.5cm)' }}
                    >
                        <FancyShineButton label={primaryCtaLabel} onClick={onOpenBooking} />

                        <Button 
                            variant="secondary" 
                            onClick={() => {
                                const aboutEl = document.getElementById('about-us');
                                if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="rounded-full px-8 bg-[#eaeff1]/80 hover:bg-[#eaeff1] backdrop-blur-sm shadow-[0_0_0_1px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.02)] text-black h-12 text-sm md:text-base font-bold border-0 transition-all"
                        >
                            {secondaryCtaLabel}
                            <Play className="w-3.5 h-3.5 ml-2 fill-black" />
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pb-8 md:pb-12 gap-y-8 gap-x-6"
            >
                {/* Social Links */}
                <div 
                    className="flex items-center gap-8 lg:gap-14 w-full md:w-auto justify-start"
                    style={{ marginLeft: '1cm' }}
                >
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            onClick={(e) => {
                                if (social.href === '#') {
                                    e.preventDefault();
                                }
                            }}
                            className="text-black font-bold hover:opacity-75 text-sm md:text-base transition-colors"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div 
                    onClick={() => {
                        const aboutEl = document.getElementById('about-us');
                        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-black font-bold text-sm md:text-base cursor-pointer group w-full md:w-auto justify-start md:justify-end"
                >
                    <span>Scroll to Discover</span>
                    <motion.span
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" strokeWidth={1.5} />
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
}
