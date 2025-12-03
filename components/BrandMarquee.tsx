import React from "react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const brands = [
    { name: "Bosch", logo: "/brands/bosch.png" },
    { name: "TIEI India", logo: "/brands/tiei.png" },
    { name: "Blue Star", logo: "/brands/bluestar.png" },
    { name: "e-con Systems", logo: "/brands/econ.png" },
    { name: "YAFE", logo: "/brands/yafe.png" },
    { name: "Ramraj", logo: "/brands/ramraj.png" },
    { name: "Yantra", logo: "/brands/yantra.png" },
];

export const BrandMarquee = () => {
    return (
        <section className="relative py-16 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Simple centered text */}
                <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-10 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Trusted by Industry Leaders
                </p>

                {/* Clean marquee with gradient fades */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <Marquee pauseOnHover className="[--duration:30s]">
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className="mx-6 md:mx-12 flex items-center justify-center"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    width={140}
                                    height={70}
                                    className="object-contain h-10 md:h-14 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};
