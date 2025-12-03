"use client";

import React from "react";
import { Check, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export const SolutionSection = () => {
    const benefits = [
        "Cut handling costs by 50–60%",
        "Eliminate injuries and downtime",
        "Run 24/7 without adding workers",
        "Standardize movement and reduce errors",
        "Scale production without scaling labor",
        "Pay back the investment in 8–12 months"
    ];

    return (
        <section className="py-24 md:py-32 bg-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-gray-200">
                            <Zap className="w-4 h-4 text-[#5ab8b4]" />
                            <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                                The Solution
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 font-[family-name:var(--font-plus-jakarta-sans)] leading-tight tracking-tight">
                            A Smarter, Safer, Cheaper Way to{" "}
                            <span className="text-[#5ab8b4]">Move Materials</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-10 font-[family-name:var(--font-poppins)] leading-relaxed">
                            GOAT Robotics AMRs automate all material movement inside your factory — without drivers, forklifts, or risk.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#5ab8b4] hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 bg-[#5ab8b4] rounded-full flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-base text-gray-800 font-[family-name:var(--font-poppins)] font-medium leading-snug">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Statement */}
                        <div className="flex flex-col gap-4 border-l-4 border-[#5ab8b4] pl-6 py-2">
                            <p className="text-2xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                Built for Indian floors.
                            </p>
                            <p className="text-2xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                Priced for Indian budgets.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 h-[300px] lg:h-[500px]">
                            <Image
                                src="/sol.png"
                                alt="AMR robots in factory"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg">
                                    <p className="text-[#5ab8b4] font-bold font-[family-name:var(--font-plus-jakarta-sans)] text-sm uppercase tracking-wider mb-1">
                                        Efficiency Boost
                                    </p>
                                    <p className="text-2xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                        300% Productivity Increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
