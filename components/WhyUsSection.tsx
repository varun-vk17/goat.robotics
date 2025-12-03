"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const WhyUsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "5X Cheaper Than Imports",
            description: "Our AMRs cost ₹8–18L compared to ₹40–90L for MiR, OTTO, or KUKA. Get the same automation capabilities at a fraction of the cost, with faster ROI and lower total cost of ownership.",
            image: "/brands/acc1.png",
            category: "Cost Savings"
        },
        {
            title: "8-Month ROI",
            description: "Recover your full investment in just 8-12 months through labor savings alone. Our clients save ₹15–20L per year in labor costs and avoid ₹10–15L in injury-related losses.",
            image: "/brands/acc2.jpeg",
            category: "Financial Impact"
        },
        {
            title: "Built for Indian Manufacturing",
            description: "Designed specifically for Indian factory conditions - works flawlessly on dust, slopes, narrow aisles, and rough floors. No expensive floor modifications required.",
            image: "/brands/ind.jpeg",
            category: "Local Advantage"
        },

        {
            title: "24/7 Local Support",
            description: "No waiting for overseas support. Our dedicated team of engineers across India ensures 4-hour response times and on-site assistance whenever you need it.",
            image: "/brands/acc4.jpeg",
            category: "Reliability"
        },
        {
            title: "Seamless Integration",
            description: "Integrates with your existing ERP, WMS, and production systems in days, not months. Our open API architecture ensures your robots talk to your software ecosystem perfectly.",
            image: "/brands/ac5.jpeg",
            category: "Technology"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                        <Star className="w-4 h-4 text-[#5ab8b4]" />
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Why Choose GOAT Robotics
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight tracking-tight">
                        The Most Cost-Effective AMR <br className="hidden md:block" /> Manufacturer in India
                    </h2>
                </div>

                {/* Accordion Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Image */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
                        <div className="absolute inset-0">
                            <Image
                                src={features[activeIndex].image}
                                alt={features[activeIndex].title}
                                fill
                                className="rounded-3xl object-cover"
                            />
                        </div>
                        {/* Category Label */}
                        <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300">
                            {features[activeIndex].category}
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[500px]">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "relative rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer",
                                        "bg-gradient-to-br from-gray-900 to-black",
                                        "border-2",
                                        "w-full lg:w-auto", // Full width on mobile
                                        isActive
                                            ? "border-[#5ab8b4] shadow-xl shadow-[#5ab8b4]/20 h-[400px] lg:h-auto lg:flex-[3]"
                                            : "border-gray-800 hover:border-gray-700 h-[80px] lg:h-auto lg:flex-[0.5] lg:hover:flex-[0.75]"
                                    )}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* Number Badge */}
                                    <div className={cn(
                                        "absolute w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center text-xl font-bold font-[family-name:var(--font-plus-jakarta-sans)] z-10 transition-all duration-500",
                                        isActive ? "top-6 right-6" : "top-6 left-1/2 -translate-x-1/2"
                                    )}>
                                        {index + 1}
                                    </div>

                                    {/* Vertical Title (Inactive State) */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-white font-bold text-lg font-[family-name:var(--font-plus-jakarta-sans)] whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
                                                style={{
                                                    // writingMode: 'vertical-rl', // Moved to class via arbitrary variant or just conditional style if needed, but Tailwind arbitrary variant is cleaner if supported or just media query style
                                                    // textOrientation: 'mixed',
                                                    // transform: 'rotate(180deg)'
                                                }}
                                            >
                                                {feature.title}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Expanded Content (Active State) */}
                                    <div className={cn(
                                        "p-8 transition-all duration-500 h-full flex flex-col",
                                        isActive ? "opacity-100 delay-200" : "opacity-0 invisible absolute inset-0"
                                    )}>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-14 font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                                            {feature.title}
                                        </h3>

                                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 flex-1 flex flex-col justify-between">
                                            <p className="text-gray-300 text-base font-[family-name:var(--font-poppins)] leading-relaxed mb-6">
                                                {feature.description}
                                            </p>
                                            <div>
                                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-100 transition-colors font-[family-name:var(--font-plus-jakarta-sans)]">
                                                    Request a demo
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5ab8b4]"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Banner */}
                <div className="mt-20 bg-black rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_50%_50%,#5ab8b4,transparent_50%)]"></div>
                    <div className="relative z-10">
                        <h4 className="text-2xl md:text-3xl font-bold mb-8 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Proven Track Record
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            <div className="flex flex-col items-center">
                                <span className="text-5xl md:text-6xl font-extrabold text-[#5ab8b4] mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                    60+
                                </span>
                                <span className="text-sm opacity-80 uppercase tracking-wider font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Deployments
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-5xl md:text-6xl font-extrabold text-[#5ab8b4] mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                    120,000+
                                </span>
                                <span className="text-sm opacity-80 uppercase tracking-wider font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Kilometers
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-5xl md:text-6xl font-extrabold text-[#5ab8b4] mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                    0
                                </span>
                                <span className="text-sm opacity-80 uppercase tracking-wider font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Accidents
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
