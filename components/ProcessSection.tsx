"use client";

import React from "react";
import { CheckCircle2, Search, Settings, Rocket } from "lucide-react";
import Stepper, { Step } from "./Stepper";

export const ProcessSection = () => {
    const steps = [
        {
            week: "Week 1–2",
            title: "Free Factory Assessment",
            items: ["Site visit", "Factory mapping", "Automation opportunities", "Custom ROI calculation"],
            icon: <Search className="w-6 h-6 text-white" />,
            color: "bg-[#5ab8b4]",
        },
        {
            week: "Week 3–4",
            title: "Build & Integration",
            items: ["Select AMR model", "Configure payload & sensors", "Software & ERP/MES integration", "Route design"],
            icon: <Settings className="w-6 h-6 text-white" />,
            color: "bg-black",
        },
        {
            week: "Week 5–6",
            title: "Deployment & Training",
            items: ["Robot installation", "On-floor testing", "Staff training", "Performance monitoring", "Ongoing local support"],
            icon: <Rocket className="w-6 h-6 text-white" />,
            color: "bg-[#5ab8b4]",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#5ab8b4]" />
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Transparency Builds Trust
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight tracking-tight">
                        We Automate Your Factory in <span className="text-[#5ab8b4]">Just 6 Weeks</span>
                    </h2>
                </div>

                {/* Stepper Component */}
                <div className="max-w-5xl mx-auto">
                    <Stepper
                        initialStep={1}
                        stepCircleContainerClassName="!bg-white !border-gray-200 !max-w-full"
                        contentClassName="!px-0"
                        footerClassName="!px-8"
                        nextButtonProps={{
                            className: "!bg-[#5ab8b4] hover:!bg-[#4a9fa0] !text-white !font-bold !py-3 !px-8 !rounded-full !transition-all !shadow-lg hover:!shadow-xl font-[family-name:var(--font-plus-jakarta-sans)]"
                        }}
                        backButtonProps={{
                            className: "!text-gray-600 hover:!text-black !font-medium font-[family-name:var(--font-plus-jakarta-sans)]"
                        }}
                        nextButtonText="Next Step"
                        backButtonText="Previous"
                        renderStepIndicator={(step: number, isActive: boolean) => (
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${isActive ? 'bg-[#5ab8b4] text-white shadow-lg' : 'bg-gray-200 text-gray-600'
                                }`}>
                                {step}
                            </div>
                        )}
                    >
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <div className="p-8">
                                    {/* Step Header */}
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="inline-block bg-gray-100 text-black text-sm font-bold px-4 py-2 rounded-full mb-3 font-[family-name:var(--font-plus-jakarta-sans)]">
                                                {step.week}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                        <ul className="space-y-3">
                                            {step.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700 font-[family-name:var(--font-poppins)] text-base leading-relaxed">
                                                    <span className={`w-2 h-2 ${step.color} rounded-full mt-2 flex-shrink-0`}></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Step>
                        ))}
                    </Stepper>
                </div>

                {/* Custom Styles for Stepper Colors */}
                <style jsx global>{`
                    .step-indicator-inner {
                        transition: all 0.3s ease;
                    }
                    
                    /* Override default colors with teal */
                    .step-indicator-inner[style*="background-color: rgb(82, 39, 255)"] {
                        background-color: #5ab8b4 !important;
                    }
                    
                    .step-connector-inner[style*="background-color: rgb(82, 39, 255)"] {
                        background-color: #5ab8b4 !important;
                    }
                    
                    .next-button {
                        background-color: #5ab8b4 !important;
                    }
                    
                    .next-button:hover {
                        background-color: #4a9fa0 !important;
                    }
                `}</style>
            </div>
        </section>
    );
};