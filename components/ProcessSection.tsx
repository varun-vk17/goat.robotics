import React from "react";
import { CheckCircle2, Search, Settings, Rocket } from "lucide-react";

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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-4 border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#5ab8b4]" />
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Transparency Builds Trust
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                        We Automate Your Factory in <span className="text-[#5ab8b4]">Just 6 Weeks</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0">
                        <div className="h-full w-full bg-[#5ab8b4] opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative">
                                <div className={`w-24 h-24 mx-auto ${step.color} rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white relative z-10`}>
                                    {step.icon}
                                </div>

                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group-hover:-translate-y-2">
                                    <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>

                                    <div className="inline-block bg-gray-100 text-black text-sm font-bold px-4 py-1.5 rounded-full mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                        {step.week}
                                    </div>

                                    <h4 className="text-xl font-bold text-black mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                        {step.title}
                                    </h4>

                                    <ul className="space-y-3">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600 font-[family-name:var(--font-poppins)] text-sm leading-relaxed">
                                                <span className={`w-1.5 h-1.5 ${step.color} rounded-full mt-2 flex-shrink-0`}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
