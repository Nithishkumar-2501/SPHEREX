"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowDown, Play, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import FancyShineButton from "./ui/FancyShineButton";

export default function CatalisHero(props) {
    return <Hero2 {...props} />;
}

export function Hero2({
    brand = "SPHEREX",
    navLinks = [
        { label: "About us", href: "#about-us" },
        { label: "Benefits", href: "#features" },
        { label: "Platform", href: "#platform" },
        { label: "Nora AI", href: "#nora-ai" },
        { label: "Pricing", href: "#pricing" },
        { label: "Campuses", href: "#multi-campus" }
    ],
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
    signInLabel = "Book Meeting",
    className,
    onOpenBooking,
    onOpenDemo
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [activeLink, setActiveLink] = useState(navLinks[0]?.label || null);

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    };

    const handleNavClick = (e, link) => {
        if (link.href && link.href.startsWith('#')) {
            e.preventDefault();
            const targetId = link.href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setActiveLink(link.label);
        setIsMobileMenuOpen(false);
    };

    return (
        <section
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

            {/* Header / Navbar */}
            <div className="w-full max-w-[1440px] mx-auto relative z-50">
                <header className="flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24 py-6 md:py-8">
                    {/* Brand Logo */}
                    <a href="#hero" className="flex items-center gap-2 group">
                        {typeof brand === "string" ? (
                            <span className="relative text-black font-extrabold text-xl tracking-tight select-none flex items-center gap-2">
                                <img src="/logo.png?v=3" alt="SPHEREX" className="w-8 h-8 object-contain" />
                                <span>{brand}</span>
                                <span className="absolute top-1 -right-1.5 w-1 h-1 rounded-full bg-[oklch(0.6378_0.1051_172.72)]"></span>
                            </span>
                        ) : (
                            brand
                        )}
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 lg:gap-12" onMouseLeave={() => setHoveredLink(null)}>
                            {navLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className="relative py-2 flex flex-col items-center group"
                                    onMouseEnter={() => setHoveredLink(link.label)}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={cn(
                                            "text-sm font-bold transition-colors flex items-center gap-1.5",
                                            (hoveredLink === link.label || (!hoveredLink && activeLink === link.label)) ? "text-black" : "text-black/80"
                                        )}
                                    >
                                        {link.label}
                                        {link.hasDropdown && (
                                            <ChevronDown className="w-3.5 h-3.5 opacity-70 stroke-[2.5] transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                    </a>
                                    {/* Active/Hover Indicator Dot */}
                                    {(hoveredLink === link.label || (!hoveredLink && activeLink === link.label)) && (
                                        <motion.span
                                            layoutId="activeDot"
                                            className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[oklch(0.6378_0.1051_172.72)]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Sign in / Meeting button */}
                    <div className="hidden md:block">
                        <FancyShineButton label={signInLabel} onClick={onOpenBooking} />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden z-50 p-2"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-5 flex flex-col gap-1.5">
                            <span className={cn("h-0.5 bg-slate-900 transition-transform", isMobileMenuOpen ? "rotate-45 translate-y-2" : "")} />
                            <span className={cn("h-0.5 bg-slate-900 transition-opacity", isMobileMenuOpen ? "opacity-0" : "")} />
                            <span className={cn("h-0.5 bg-slate-900 transition-transform", isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
                        </div>
                    </button>
                </header>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6 h-screen"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={cn(
                                        "text-2xl font-bold flex items-center gap-2",
                                        activeLink === link.label ? "text-black" : "text-black/70"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <Button 
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (onOpenBooking) onOpenBooking();
                                }}
                                className="w-full rounded-full bg-[oklch(0.6378_0.1051_172.72)] hover:opacity-90 text-white h-12 text-base"
                            >
                                {signInLabel}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-20"
            >
                <div className="max-w-2xl lg:max-w-3xl">
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

                    <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
                <div className="flex items-center gap-8 lg:gap-14 w-full md:w-auto justify-center md:justify-start">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
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
