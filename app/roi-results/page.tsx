"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Lightbulb, Bot, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ROIResults {
    annualLaborCost: number;
    annualSavings: number;
    roiPercentage: number;
    paybackMonths: number;
    injuryCostSavings: number;
    downtimeSavings: number;
}

function ROIResultsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [results, setResults] = useState<ROIResults | null>(null);

    useEffect(() => {
        const workers = parseInt(searchParams.get("workers") || "0");
        const hourlyWage = parseFloat(searchParams.get("hourlyWage") || "0");
        const shiftsPerDay = parseInt(searchParams.get("shiftsPerDay") || "1");
        const workingDays = parseInt(searchParams.get("workingDays") || "250");

        if (workers === 0 || hourlyWage === 0) {
            // Redirect back if data is missing
            // router.push("/roi-calculator");
            // For now, let's just show zeros or mock data if testing
        }

        // Calculate annual labor cost
        // Calculate annual labor cost
        const hoursPerShift = 8;
        const annualLaborCost = workers * hourlyWage * hoursPerShift * shiftsPerDay * workingDays;

        // AMR can replace 60% of manual labor
        const laborSavings = annualLaborCost * 0.6;

        // Estimated other savings (simplified estimation)
        const injuryCostSavings = annualLaborCost * 0.02;
        const downtimeSavings = annualLaborCost * 0.03;

        // Total annual savings
        const annualSavings = laborSavings + injuryCostSavings + downtimeSavings;

        // Estimate number of AMRs needed
        // Assumption: 1 AMR can replace ~3 workers per shift. We target 60% replacement.
        // If multiple shifts, the same AMR works across shifts (efficiency gain).
        // Logic: (Workers Per Shift * 0.6) / 3 = AMRs needed.
        // We take Math.ceil to be conservative (need whole robots).
        const workersToReplacePerShift = workers * 0.6;
        const amrsNeeded = Math.max(1, Math.ceil(workersToReplacePerShift / 3));

        // Total Investment (Hardware + Deployment)
        // Assuming ₹12L per AMR unit
        const amrCost = amrsNeeded * 1200000;

        // ROI calculation
        const roiPercentage = ((annualSavings - amrCost) / amrCost) * 100;
        const paybackMonths = (amrCost / (annualSavings / 12));

        setResults({
            annualLaborCost,
            annualSavings,
            roiPercentage,
            paybackMonths,
            injuryCostSavings,
            downtimeSavings
        });
    }, [searchParams, router]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    if (!results) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#5ab8b4] mb-4 font-[family-name:var(--font-poppins)] transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold text-white mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Your ROI Analysis
                        </h1>
                        <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
                            Here is the potential impact of automating your facility with GOAT Robotics.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all font-[family-name:var(--font-plus-jakarta-sans)]">
                        <Download className="w-4 h-4" />
                        Download Report
                    </button>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5ab8b4]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-[#5ab8b4]/20"></div>
                        <p className="text-gray-400 text-sm mb-2 font-[family-name:var(--font-poppins)]">Potential Annual Savings</p>
                        <p className="text-5xl font-bold text-[#5ab8b4] font-[family-name:var(--font-plus-jakarta-sans)]">
                            {formatCurrency(results.annualSavings)}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>+60% efficiency boost</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
                        <p className="text-gray-400 text-sm mb-2 font-[family-name:var(--font-poppins)]">Payback Period</p>
                        <p className="text-5xl font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                            {results.paybackMonths.toFixed(1)} <span className="text-2xl text-gray-500">months</span>
                        </p>
                        <div className="mt-4 text-gray-400 text-sm">
                            Industry avg: 24 months
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>
                        <p className="text-gray-400 text-sm mb-2 font-[family-name:var(--font-poppins)]">ROI Year 1</p>
                        <p className="text-5xl font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                            {results.roiPercentage.toFixed(0)}%
                        </p>
                        <div className="mt-4 text-gray-400 text-sm">
                            Based on current labor costs
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Tips Section */}
                    <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Lightbulb className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                                Tips to Increase ROI
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#5ab8b4]">1</div>
                                <p className="text-gray-300 text-sm font-[family-name:var(--font-poppins)]">
                                    <strong className="text-white">Optimize Routes:</strong> Ensure clear paths and minimize intersections to allow AMRs to move at maximum speed.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#5ab8b4]">2</div>
                                <p className="text-gray-300 text-sm font-[family-name:var(--font-poppins)]">
                                    <strong className="text-white">Multi-Shift Operations:</strong> Run AMRs 24/7. The more shifts you run, the faster your payback period.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#5ab8b4]">3</div>
                                <p className="text-gray-300 text-sm font-[family-name:var(--font-poppins)]">
                                    <strong className="text-white">Integrate with WMS:</strong> Connect AMRs to your Warehouse Management System for seamless task assignment.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Recommended AMRs */}
                    <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Bot className="w-6 h-6 text-[#5ab8b4]" />
                            <h3 className="text-xl font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                                Recommended for You
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#5ab8b4]/50 transition-colors cursor-pointer">
                                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                                    {/* Placeholder for AMR Image */}
                                    <Bot className="w-8 h-8 text-gray-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">GT-1000 Heavy Duty</h4>
                                    <p className="text-xs text-gray-400 font-[family-name:var(--font-poppins)]">For pallet transport up to 1000kg</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-[#5ab8b4] ml-auto" />
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#5ab8b4]/50 transition-colors cursor-pointer">
                                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                                    {/* Placeholder for AMR Image */}
                                    <Bot className="w-8 h-8 text-gray-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">GT-100 Agile</h4>
                                    <p className="text-xs text-gray-400 font-[family-name:var(--font-poppins)]">For bin picking and light loads</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-[#5ab8b4] ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-[#5ab8b4]/20 to-transparent p-12 rounded-3xl border border-[#5ab8b4]/20">
                    <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                        Ready to realize these savings?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-poppins)]">
                        Schedule a detailed on-site assessment with our engineers to validate these numbers and design your custom solution.
                    </p>
                    <Link
                        href="/schedule-assessment"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#5ab8b4] text-white rounded-lg font-bold hover:bg-[#4a9fa0] transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] shadow-[0_0_20px_rgba(90,184,180,0.3)] hover:shadow-[0_0_30px_rgba(90,184,180,0.5)]"
                    >
                        Schedule Factory Assessment
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ROIResultsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
            <ROIResultsContent />
        </Suspense>
    );
}
