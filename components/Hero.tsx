"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div className="frame relative overflow-hidden">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="navbar"
            >
                <div className="logo-group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img className="untitled" src="/logo.png" alt="Logo" />
                    <div className="text-wrapper-4">Robotics</div>
                </div>
                <div className="nav-items hidden md:flex">
                    <div className="div hover:text-[#5ab8b4] transition-colors cursor-pointer">Home</div>
                    <div className="text-wrapper-2 hover:text-[#5ab8b4] transition-colors cursor-pointer">Products</div>
                    <div className="text-wrapper-2 hover:text-[#5ab8b4] transition-colors cursor-pointer">Industries</div>
                    <div className="text-wrapper-2 hover:text-[#5ab8b4] transition-colors cursor-pointer">About</div>
                    <Link href="/schedule-assessment">
                        <div className="div-wrapper hover:scale-105 transition-transform cursor-pointer">
                            <div className="text-wrapper-3">Get Your Free Factory Assessment</div>
                        </div>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className="automate-your">
                    Automate Material Handling
                    <br />
                    Cut Costs by 60%.
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-wrapper"
            >
                Deploy in 6 weeks. Cut material handling costs by 60%. Keep your floor running the same day.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-cta-group"
            >
                <Link href="/schedule-assessment">
                    <button className="primary-cta group">
                        Schedule Assessment
                        <ArrowRight className="cta-arrow group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
                <Link href="/roi-calculator">
                    <button className="secondary-cta group">
                        <Play className="play-icon fill-white group-hover:scale-110 transition-transform" />
                        Calculate ROI
                    </button>
                </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="trust-indicators"
            >
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>60+ Deployments</span>
                </div>
                <div className="trust-separator"></div>
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>98% Uptime Guarantee</span>
                </div>
                <div className="trust-separator"></div>
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>12-Month ROI</span>
                </div>
            </motion.div>
        </div>
    );
};
