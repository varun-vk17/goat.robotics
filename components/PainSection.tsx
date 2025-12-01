"use client";

import React from "react";
import { AlertTriangle, TrendingDown, Clock, Users, DollarSign, Zap, AlertCircle } from "lucide-react";

export const PainSection = () => {
    const painPoints = [
        {
            icon: <DollarSign className="w-5 h-5" />,
            text: "₹25K–₹35K per worker/month for repetitive movement",
            metric: "₹30K/mo",
        },
        {
            icon: <AlertCircle className="w-5 h-5" />,
            text: "₹10–15L lost every year from workplace injuries",
            metric: "₹12.5L/yr",
        },
        {
            icon: <TrendingDown className="w-5 h-5" />,
            text: "Forklifts are slow, unsafe, and expensive to maintain",
            metric: "60% slower",
        },
        {
            icon: <Users className="w-5 h-5" />,
            text: "Skilled labor shortage affecting throughput",
            metric: "40% gap",
        },
        {
            icon: <DollarSign className="w-5 h-5" />,
            text: "Global AMRs cost ₹40–90L per unit — impossible ROI",
            metric: "₹65L avg",
        },
        {
            icon: <Zap className="w-5 h-5" />,
            text: "As production scales, labor costs scale with it",
            metric: "100% linear",
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden">
            {/* Noise/Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

            {/* Ambient Light Streaks */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#5ab8b4] opacity-[0.03] blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-black opacity-[0.02] blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
                {/* Vertical Accent Line */}
                <div className="absolute left-4 md:left-8 top-24 bottom-24 w-[2px] bg-gradient-to-b from-transparent via-[#5ab8b4] to-transparent opacity-40"></div>

                {/* Header */}
                <div className="mb-20 md:mb-24 pl-0 md:pl-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6 border border-black/10">
                        <AlertTriangle className="w-4 h-4 text-black" />
                        <span className="text-black font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            The Problem
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-[1.1] max-w-4xl tracking-tight">
                        Manual Material Handling Is Costing You{" "}
                        <span className="text-[#5ab8b4] relative inline-block">
                            More Than You Realize
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#5ab8b4] opacity-20"></span>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Pain Timeline */}
                    <div className="space-y-12">
                        {painPoints.map((point, index) => (
                            <div
                                key={index}
                                className="group relative flex items-start gap-6 opacity-0 animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 60}ms`,
                                    animationFillMode: "forwards",
                                }}
                            >
                                {/* Timeline Connector */}
                                <div className="absolute left-[18px] top-12 bottom-0 w-[1px] bg-gradient-to-b from-black/10 to-transparent"></div>

                                {/* Icon */}
                                <div className="relative flex-shrink-0 w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white group-hover:bg-[#5ab8b4] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#5ab8b4]/20">
                                    {point.icon}
                                    <div className="absolute inset-0 rounded-lg bg-[#5ab8b4] opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1 group-hover:translate-x-1 transition-transform duration-300">
                                    <p className="text-lg font-medium text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed mb-1 group-hover:text-[#5ab8b4] transition-colors">
                                        {point.text}
                                    </p>
                                </div>

                                {/* Metric */}
                                <div className="flex-shrink-0 px-3 py-1 bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                                    <span className="text-sm font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                        {point.metric}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Premium Glass Card with Video Background */}
                    <div className="relative lg:sticky lg:top-24">
                        {/* Spotlight Effect */}
                        <div className="absolute -inset-20 bg-gradient-radial from-[#5ab8b4]/10 via-transparent to-transparent blur-3xl opacity-50"></div>

                        {/* Video Background Container */}
                        <div className="relative rounded-2xl overflow-hidden">
                            {/* Placeholder for video - you can replace with actual video */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-40">
                                {/* Animated warehouse chaos simulation */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10 animate-pulse"></div>
                            </div>

                            {/* Glass Card */}
                            <div className="relative backdrop-blur-xl bg-white/90 border border-white/60 rounded-2xl p-10 md:p-12 shadow-2xl transform hover:scale-[1.01] transition-all duration-500 hover:shadow-[#5ab8b4]/10">
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#5ab8b4]/5 rounded-2xl pointer-events-none"></div>

                                <div className="relative space-y-8">
                                    {/* Statement 1 */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#5ab8b4] rounded-full mt-3 animate-pulse shadow-lg shadow-[#5ab8b4]/50"></div>
                                        <p className="text-4xl md:text-5xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-[1.2]">
                                            You are paying{" "}
                                            <span className="text-[#5ab8b4] relative">
                                                too much
                                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#5ab8b4] opacity-30"></span>
                                            </span>
                                            .
                                        </p>
                                    </div>

                                    {/* Statement 2 */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#5ab8b4] rounded-full mt-3 animate-pulse shadow-lg shadow-[#5ab8b4]/50" style={{ animationDelay: "0.5s" }}></div>
                                        <p className="text-4xl md:text-5xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-[1.2]">
                                            You are moving{" "}
                                            <span className="text-[#5ab8b4] relative">
                                                too slow
                                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#5ab8b4] opacity-30"></span>
                                            </span>
                                            .
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent my-8"></div>

                                    {/* Conclusion */}
                                    <p className="text-2xl md:text-3xl font-medium text-gray-700 font-[family-name:var(--font-poppins)] leading-relaxed">
                                        And it's limiting your entire factory's output.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
        </section>
    );
};
