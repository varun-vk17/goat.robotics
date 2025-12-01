import React from "react";
import { Check, Zap } from "lucide-react";

export const SolutionSection = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6 border border-gray-200">
                            <Zap className="w-4 h-4 text-[#5ab8b4]" />
                            <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                                The Solution
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                            A Smarter, Safer, Cheaper Way to <span className="text-[#5ab8b4]">Move Materials</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 font-[family-name:var(--font-poppins)] leading-relaxed">
                            GOAT Robotics AMRs automate all material movement inside your factory — without drivers, forklifts, or risk.
                        </p>

                        <div className="grid gap-4 mb-12">
                            {[
                                "Cut handling costs by 50–60%",
                                "Eliminate injuries and downtime",
                                "Run 24/7 without adding workers",
                                "Standardize movement and reduce errors",
                                "Scale production without scaling labor",
                                "Pay back the investment in 8–12 months",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-[#5ab8b4] rounded-full p-1.5 flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-lg text-gray-800 font-[family-name:var(--font-poppins)] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 border-l-4 border-[#5ab8b4] pl-6 py-2">
                            <div>
                                <p className="text-2xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Built for Indian floors.
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Priced for Indian budgets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/amr-factory.png"
                                alt="Goat Robotics AMR in factory"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                    <p className="text-[#5ab8b4] font-bold font-[family-name:var(--font-plus-jakarta-sans)] text-sm uppercase tracking-wider mb-1">Efficiency Boost</p>
                                    <p className="text-2xl font-bold text-black">300% Productivity Increase</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#5ab8b4] rounded-full opacity-10 blur-3xl"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-200 rounded-full opacity-10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
