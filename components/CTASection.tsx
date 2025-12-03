"use client";

import React from "react";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const CTASection = () => {
    return (
        <section className="py-24 md:py-32 bg-[#5ab8b4] text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_50%_50%,#000,transparent_50%)]"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-sm">
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span className="text-white font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Close the Funnel Strong
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 font-[family-name:var(--font-plus-jakarta-sans)] leading-tight tracking-tight">
                        Ready to Cut Material <br className="hidden md:block" /> Handling Costs by <span className="text-black">60%?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-12 font-[family-name:var(--font-poppins)] max-w-3xl mx-auto leading-relaxed">
                        Get a free, no-obligation factory assessment and a custom automation plan tailored to your floor.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/roi-calculator" className="w-full sm:w-auto">
                            <button className="group bg-black hover:bg-gray-900 text-white font-bold py-5 px-10 rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 font-[family-name:var(--font-plus-jakarta-sans)] text-lg w-full justify-center">
                                Calculate Your ROI
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link href="/schedule-assessment" className="w-full sm:w-auto">
                            <button className="group bg-white text-[#5ab8b4] hover:bg-gray-50 font-bold py-5 px-10 rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 font-[family-name:var(--font-plus-jakarta-sans)] text-lg w-full justify-center">
                                <Calendar className="w-5 h-5" />
                                Schedule Factory Assessment
                            </button>
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-white/80 font-[family-name:var(--font-poppins)]">
                        No credit card required • Free on-site visit • Custom proposal in 48h
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
