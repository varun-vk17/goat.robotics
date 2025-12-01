import React from "react";
import { IndianRupee, Clock, MapPin, Settings, Truck, ShieldCheck, Star } from "lucide-react";

export const WhyUsSection = () => {
    const features = [
        {
            icon: <IndianRupee className="w-8 h-8 text-white" />,
            title: "5X Cheaper Than Imports",
            description: "₹8–18L vs. ₹40–90L for MiR / OTTO / KUKA",
            color: "bg-[#5ab8b4]",
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            title: "8-Month ROI",
            description: "Recover full cost from labor savings alone",
            color: "bg-black",
        },
        {
            icon: <MapPin className="w-8 h-8 text-white" />,
            title: "Built for Indian Manufacturing",
            description: "Works on dust, slopes, narrow aisles, rough floors",
            color: "bg-[#5ab8b4]",
        },
        {
            icon: <Settings className="w-8 h-8 text-white" />,
            title: "Full Customization",
            description: "Payload, sensors, software, routes — tailored to your plant",
            color: "bg-[#5ab8b4]",
        },
        {
            icon: <Truck className="w-8 h-8 text-white" />,
            title: "Faster Delivery",
            description: "4–6 weeks vs. 12–16 weeks for imported robots",
            color: "bg-[#5ab8b4]",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            title: "Local Coimbatore Support",
            description: "98% uptime, 48-hour parts availability",
            color: "bg-black",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-4 border border-gray-200">
                        <Star className="w-4 h-4 text-[#5ab8b4]" />
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Why Choose GOAT Robotics
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                        The Most Cost-Effective AMR <br className="hidden md:block" /> Manufacturer in India
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 ${feature.color} opacity-5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150`}></div>

                            <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3 font-[family-name:var(--font-plus-jakarta-sans)] group-hover:text-[#5ab8b4] transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 font-[family-name:var(--font-poppins)] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-black rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">Proven Track Record</h4>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-extrabold text-[#5ab8b4]">60+</span>
                                <span className="text-sm opacity-80 uppercase tracking-wider mt-1">Deployments</span>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-extrabold text-[#5ab8b4]">120,000+</span>
                                <span className="text-sm opacity-80 uppercase tracking-wider mt-1">Kilometers</span>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-extrabold text-[#5ab8b4]">0</span>
                                <span className="text-sm opacity-80 uppercase tracking-wider mt-1">Accidents</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
