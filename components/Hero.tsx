"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Play, Menu, X } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg.png')] bg-cover bg-center">
            {/* Overlay for better text readability if needed, though design seems to rely on the image */}
            {/* <div className="absolute inset-0 bg-black/20" /> */}

            {/* Navbar */}
            <nav className="absolute top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                            <span className="text-[#5ab8b4] font-bold text-xl tracking-tight font-[family-name:var(--font-titillium-web)]">Robotics</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                <Link href="#" className="text-sm font-semibold text-black hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-plus-jakarta-sans)]">Home</Link>
                                <Link href="#" className="text-sm font-semibold text-black hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-plus-jakarta-sans)]">Products</Link>
                                <Link href="#" className="text-sm font-semibold text-black hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-plus-jakarta-sans)]">Industries</Link>
                                <Link href="#" className="text-sm font-semibold text-black hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-plus-jakarta-sans)]">About</Link>
                            </div>
                            <Link href="/schedule-assessment">
                                <div className="flex items-center justify-center px-6 py-2.5 bg-[#5ab8b4] rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#5ab8b4]/30 cursor-pointer group">
                                    <span className="text-white font-semibold text-sm font-[family-name:var(--font-plus-jakarta-sans)] group-hover:text-white">Get Your Free Factory Assessment</span>
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-black hover:text-[#5ab8b4] transition-colors p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute w-full z-50">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link href="#" className="block px-3 py-2 text-base font-semibold text-black hover:text-[#5ab8b4] hover:bg-gray-50 rounded-md">Home</Link>
                            <Link href="#" className="block px-3 py-2 text-base font-semibold text-black hover:text-[#5ab8b4] hover:bg-gray-50 rounded-md">Products</Link>
                            <Link href="#" className="block px-3 py-2 text-base font-semibold text-black hover:text-[#5ab8b4] hover:bg-gray-50 rounded-md">Industries</Link>
                            <Link href="#" className="block px-3 py-2 text-base font-semibold text-black hover:text-[#5ab8b4] hover:bg-gray-50 rounded-md">About</Link>
                            <div className="pt-4">
                                <Link href="/schedule-assessment">
                                    <div className="w-full flex items-center justify-center px-6 py-3 bg-[#5ab8b4] rounded-lg hover:bg-black transition-all duration-300">
                                        <span className="text-white font-semibold text-sm">Get Your Free Factory Assessment</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center pt-20">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-[family-name:var(--font-plus-jakarta-sans)]">
                        Automate Material Handling
                        <br />
                        <span className="text-white">Cut Costs by 60%.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-xl font-medium leading-relaxed font-[family-name:var(--font-poppins)]">
                        Deploy in 6 weeks. Cut material handling costs by 60%. Keep your floor running the same day.
                    </p>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex flex-wrap gap-4 md:gap-8">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-5 h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-sm font-[family-name:var(--font-poppins)]">60+ Deployments</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-5 h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-sm font-[family-name:var(--font-poppins)]">98% Uptime Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-5 h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-sm font-[family-name:var(--font-poppins)]">12-Month ROI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
