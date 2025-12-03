"use client";

import React, { useState } from "react";
import { CheckCircle2, Search, Settings, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Stepper, { Step } from "./Stepper";

export const ProcessSection = () => {
    const [isCompleted, setIsCompleted] = useState(false);

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
                    {!isCompleted ? (
                        <Stepper
                            initialStep={1}
                            onFinalStepCompleted={() => setIsCompleted(true)}
                            stepCircleContainerClassName="!bg-white !border-gray-200 !max-w-full !shadow-xl !rounded-3xl"
                            contentClassName="!px-0"
                            footerClassName="!px-8 !pb-8"
                            nextButtonProps={{
                                className: "!bg-[#5ab8b4] hover:!bg-[#4a9fa0] !text-white !font-bold !py-4 !px-10 !rounded-full !transition-all !shadow-lg hover:!shadow-xl font-[family-name:var(--font-plus-jakarta-sans)] !text-base"
                            }}
                            backButtonProps={{
                                className: "!text-gray-600 hover:!text-black !font-semibold font-[family-name:var(--font-plus-jakarta-sans)] !text-base"
                            }}
                            nextButtonText="Next Step"
                            backButtonText="Previous"
                            // 👇 FIXED: Correctly destructured the props object
                            renderStepIndicator={({ step, currentStep }: { step: number; currentStep: number }) => {
                                // Calculate active state (Active OR Completed)
                                const isActive = step <= currentStep;
                                const isCompleted = step < currentStep;

                                return (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className={`
                                            w-12 h-12 rounded-full flex items-center justify-center 
                                            font-bold text-base transition-all duration-300
                                            ${isActive
                                                ? 'bg-[#5ab8b4] text-white shadow-lg ring-4 ring-[#5ab8b4]/20'
                                                : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                                            }
                                        `}>
                                            {isCompleted ? (
                                                <CheckCircle2 className="w-6 h-6" />
                                            ) : (
                                                step
                                            )}
                                        </div>
                                    </div>
                                );
                            }}
                        >
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <div className="p-8">
                                        {/* Step Header */}
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 transform hover:scale-105 transition-transform duration-300`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <div className="inline-block bg-[#5ab8b4]/10 text-[#5ab8b4] text-sm font-bold px-4 py-2 rounded-full mb-3 font-[family-name:var(--font-plus-jakarta-sans)] border border-[#5ab8b4]/20">
                                                    {step.week}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <ul className="space-y-3">
                                                {step.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-gray-700 font-[family-name:var(--font-poppins)] text-base leading-relaxed group">
                                                        <span className={`w-2 h-2 ${step.color} rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></span>
                                                        <span className="group-hover:text-black transition-colors duration-300">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Step>
                            ))}
                        </Stepper>
                    ) : (
                        <div className="bg-white rounded-3xl p-12 border border-gray-200 text-center shadow-xl">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-black mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Ready to Get Started?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-poppins)]">
                                Now that you understand our 6-week deployment process, let's schedule your free factory assessment and begin your automation journey.
                            </p>
                            <Link href="/schedule-assessment">
                                <button className="group bg-[#5ab8b4] hover:bg-[#4a9fa0] text-white font-bold py-4 px-8 rounded-full inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Schedule Free Assessment
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Custom Styles for Stepper Colors */}
                <style jsx global>{`
    .step - indicator - inner {
    transition: all 0.3s ease;
}

                    /* Override default colors with teal */
                    .step - indicator - inner[style *= "background-color: rgb(82, 39, 255)"] {
    background - color: #5ab8b4!important;
}
                    
                    .step - connector - inner[style *= "background-color: rgb(82, 39, 255)"] {
    background - color: #5ab8b4!important;
}
                    
                    .next - button {
    background - color: #5ab8b4!important;
}
                    
                    .next - button:hover {
    background - color: #4a9fa0!important;
}
`}</style>
            </div>
        </section>
    );
};