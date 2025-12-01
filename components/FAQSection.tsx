import React from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FAQSection = () => {
    const faqs = [
        {
            question: "Will this work in our factory?",
            answer: "Yes. We've deployed in textiles, automotive, pharma, logistics, and heavy manufacturing. We do a free site assessment to confirm exact suitability.",
        },
        {
            question: "What if the robot breaks down?",
            answer: "98% uptime. Coimbatore support team. Parts available within 48 hours.",
        },
        {
            question: "How do we justify the cost to management?",
            answer: "Our ROI calculator shows labor savings of ₹15–20L per year. Payback in 8–12 months.",
        },
        {
            question: "Is it safe around workers?",
            answer: "Zero accidents across 120,000+ km. Advanced sensors, safety certifications, and auto-stop.",
        },
        {
            question: "Do you handle integration with existing systems?",
            answer: "Yes. We integrate with your ERP, WMS, MES, and custom software.",
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-4 border border-gray-200">
                        <HelpCircle className="w-4 h-4 text-[#5ab8b4]" />
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Remove All Final Objections
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)] group-hover:text-[#5ab8b4] transition-colors">
                                    {faq.question}
                                </span>
                                <span className="relative flex-shrink-0 ml-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-open:bg-[#5ab8b4] transition-colors duration-300">
                                        <Plus className="w-5 h-5 text-black absolute transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                                        <Minus className="w-5 h-5 text-white absolute transition-transform duration-300 rotate-90 opacity-0 group-open:rotate-0 group-open:opacity-100" />
                                    </div>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 font-[family-name:var(--font-poppins)] leading-relaxed border-t border-gray-50 pt-4 mx-6 mt-0">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
