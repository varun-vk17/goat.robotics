"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Play, Menu, X } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg.png')] bg-cover bg-center">
            {/* Navbar */}
            <nav className={`
                z-50 transition-all duration-300
                fixed top-4 left-4 right-4 h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] px-4 flex items-center justify-between
                md:absolute md:top-8 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[92%] md:max-w-[1280px] md:h-16 md:bg-white md:rounded-full md:shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:px-8
            `}>
                <div className="w-full flex items-center justify-between">
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

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border border-gray-100 absolute top-20 left-0 right-0 rounded-2xl mx-auto w-full z-50 shadow-xl overflow-hidden">
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
            <div className="relative z-10 h-screen w-full">
                <div className="h-full w-full relative">
                    {/* Headline */}
                    <h1 className="
                        text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-[family-name:var(--font-plus-jakarta-sans)]
                        absolute bottom-40 left-4 right-4 text-left
                        md:text-[72px] md:tracking-[-4.8px] md:bottom-[160px] md:left-[35px] md:right-auto md:max-w-[80%]
                    ">
                        Automate Material Handling
                        <br />
                        <span className="text-white">Cut Costs by 60%.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="
                        text-lg text-white/90 font-medium leading-relaxed font-[family-name:var(--font-poppins)]
                        absolute bottom-24 left-4 right-4 text-left
                        md:text-[18px] md:text-white md:leading-[1.4] md:tracking-[-1.2px] md:bottom-[100px] md:left-[38px] md:right-auto md:w-[500px]
                    ">
                        Deploy in 6 weeks. Cut material handling costs by 60%. Keep your floor running the same day.
                    </p>

                    {/* Trust Indicators - Positioned below text */}
                    <div className="
                        absolute bottom-8 left-4 right-4 flex flex-wrap gap-2
                        md:bottom-[40px] md:left-[38px] md:right-auto md:gap-8
                    ">
                        <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-xs md:text-sm font-[family-name:var(--font-poppins)]">60+ Deployments</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-xs md:text-sm font-[family-name:var(--font-poppins)]">98% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#5ab8b4]" />
                            <span className="text-white font-medium text-xs md:text-sm font-[family-name:var(--font-poppins)]">12-Month ROI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
