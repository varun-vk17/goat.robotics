"use client";

import React from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const ROISection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-[#5ab8b4]" />
              <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                Make the CFO Say Yes
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 font-[family-name:var(--font-plus-jakarta-sans)] leading-tight tracking-tight">
              See Exactly How Fast You <span className="text-[#5ab8b4]">Recover Your Investment</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-[#5ab8b4] pl-6 py-2">
                <p className="text-base text-gray-400 mb-1 font-[family-name:var(--font-poppins)]">Manufacturing clients save:</p>
                <p className="text-4xl font-bold font-[family-name:var(--font-plus-jakarta-sans)]">
                  ₹15–20L <span className="text-lg font-normal text-gray-500">/ year in labor</span>
                </p>
              </div>
              <div className="border-l-4 border-[#5ab8b4] pl-6 py-2">
                <p className="text-base text-gray-400 mb-1 font-[family-name:var(--font-poppins)]">Avoid losses of:</p>
                <p className="text-4xl font-bold font-[family-name:var(--font-plus-jakarta-sans)]">
                  ₹10–15L <span className="text-lg font-normal text-gray-500">/ year in injury/downtime</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-5xl font-bold text-[#5ab8b4] mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">50–60%</p>
                <p className="text-sm text-gray-300 font-[family-name:var(--font-poppins)]">reduction in material movement cost</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-5xl font-bold text-[#5ab8b4] mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">30–40%</p>
                <p className="text-sm text-gray-300 font-[family-name:var(--font-poppins)]">faster throughput</p>
              </div>
            </div>

            <Link href="/roi-calculator">
              <button className="group bg-[#5ab8b4] hover:bg-[#4a9fa0] text-white font-bold py-4 px-8 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(90,184,180,0.3)] hover:shadow-[0_0_30px_rgba(90,184,180,0.5)] font-[family-name:var(--font-plus-jakarta-sans)]">
                Calculate Your ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-10">
              <p className="text-2xl font-bold mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                Your robot pays for itself in <br /><span className="text-[#5ab8b4] text-4xl">8–12 months</span>
              </p>
              <p className="text-lg text-gray-400 font-[family-name:var(--font-poppins)]">
                Global brands take 24–36 months.
              </p>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end justify-center gap-16 h-80 pt-8 border-b border-white/10 pb-4">
              <div className="w-32 flex flex-col items-center gap-3 group">
                <div className="text-lg font-bold text-[#5ab8b4] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">8-12 mo</div>
                <div className="w-full bg-[#5ab8b4] h-32 rounded-t-2xl relative shadow-[0_0_20px_rgba(90,184,180,0.3)] group-hover:shadow-[0_0_30px_rgba(90,184,180,0.5)] transition-shadow">
                  <div className="absolute bottom-4 w-full text-center text-sm font-bold text-black/70">Goat</div>
                </div>
                <p className="text-base font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">Goat Robotics</p>
              </div>
              <div className="w-32 flex flex-col items-center gap-3 group">
                <div className="text-lg font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">24-36 mo</div>
                <div className="w-full bg-gray-700 h-68 rounded-t-2xl relative opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 w-full text-center text-sm font-bold text-white/50">Others</div>
                </div>
                <p className="text-base font-medium text-gray-400 font-[family-name:var(--font-plus-jakarta-sans)]">Global Brands</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6 uppercase tracking-widest font-semibold font-[family-name:var(--font-plus-jakarta-sans)]">Payback Period (Lower is Better)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
