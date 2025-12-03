"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
    logo: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "The AMRs reduced our material handling costs by 60% in the first year. ROI achieved in just 9 months.",
        author: "Rajesh Kumar",
        role: "Operations Director",
        company: "Bosch",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        logo: "/brands/bosch.png"
    },
    {
        quote: "Seamless integration with our existing systems. The automation has transformed our factory floor efficiency.",
        author: "Priya Sharma",
        role: "Plant Manager",
        company: "Blue Star",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        logo: "/brands/bluestar.png"
    },
    {
        quote: "Impressive technology at a fraction of the cost of global brands. Our throughput increased by 40%.",
        author: "Arun Patel",
        role: "Manufacturing Head",
        company: "e-con Systems",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        logo: "/brands/econ.png"
    },
    {
        quote: "Game-changer for our production line. The robots work 24/7 without errors, saving us ₹18L annually.",
        author: "Meera Reddy",
        role: "COO",
        company: "Yantra",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        logo: "/brands/yantra.png"
    },
];

export const TestimonialSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const panels = gsap.utils.toArray(".testimonial-panel") as HTMLElement[];

        if (!container || panels.length === 0) return;

        // Initial state: All panels opaque
        gsap.set(panels, { opacity: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => "+=" + panels[0].offsetWidth * panels.length,
            }
        });

        panels.forEach((panel, i) => {
            if (i === panels.length - 1) return;

            // Move all panels to the left
            tl.to(panels, {
                xPercent: -(100 * (i + 1)),
                duration: 1,
                ease: "none",
            }, i)
                // Fade out current panel as it leaves
                .to(panel, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.inOut"
                }, i);
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex flex-col bg-gray-50 overflow-x-hidden overflow-y-hidden"
        >
            {/* Header - Fixed at top */}
            <div className="flex-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5ab8b4]/10 rounded-full mb-6 border border-[#5ab8b4]/20">
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Client Success Stories
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-[family-name:var(--font-plus-jakarta-sans)] text-gray-900">
                        Trusted by Industry Leaders
                    </h2>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={panelsRef}
                className="flex-1 flex w-[400vw]"
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-panel w-screen h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-24"
                    >
                        <div className="max-w-5xl w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-[450px]">
                                {/* Left: Large Quote Card */}
                                <div className="lg:col-span-3 bg-[#000000] rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute top-8 left-8 text-white/10">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                        </svg>
                                    </div>
                                    <blockquote className="relative z-10">
                                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight font-[family-name:var(--font-plus-jakarta-sans)]">
                                            "{testimonial.quote}"
                                        </p>
                                    </blockquote>
                                </div>

                                {/* Right Column */}
                                <div className="lg:col-span-2 flex flex-col gap-4">
                                    {/* Top Row */}
                                    <div className="grid grid-cols-2 gap-4 h-1/2">
                                        {/* Photo */}
                                        <div className="relative rounded-[32px] overflow-hidden bg-gray-200">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        {/* Logo */}
                                        <div className="bg-white rounded-[32px] flex items-center justify-center p-6 border border-gray-100">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={testimonial.logo}
                                                    alt={testimonial.company}
                                                    fill
                                                    className="object-contain"
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Row: Info */}
                                    <div className="h-1/2 bg-[#000000] rounded-[32px] flex flex-col justify-center items-center p-6 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-1 font-[family-name:var(--font-plus-jakarta-sans)]">
                                            {testimonial.author}
                                        </h3>
                                        <p className="text-gray-400 text-base font-[family-name:var(--font-poppins)]">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className="w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                    />
                ))}
            </div>
        </section>
    );
};
