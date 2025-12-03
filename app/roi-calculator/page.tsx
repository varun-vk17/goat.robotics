"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/ui/Toast";

interface ROIData {
    // Step 1: Current Operations
    workers: string;
    hourlyWage: string;
    shiftsPerDay: string;
    workingDays: string;

    // Step 2: Facility Information
    factorySize: string;
    handlingDistance: string;
    materialTypes: string;
    currentEquipment: string;

    // Step 3: Pain Points
    injuryIncidents: string;
    downtimeHours: string;
    errorRate: string;

    // Step 4: Lead Capture
    name: string;
    email: string;
    phone: string;
    company: string;
}

interface ROIResults {
    annualLaborCost: number;
    annualSavings: number;
    roiPercentage: number;
    paybackMonths: number;
    injuryCostSavings: number;
    downtimeSavings: number;
}

export default function ROICalculatorPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState<ROIResults | null>(null);

    const [formData, setFormData] = useState<ROIData>({
        workers: "",
        hourlyWage: "",
        shiftsPerDay: "",
        workingDays: "",
        factorySize: "",
        handlingDistance: "",
        materialTypes: "",
        currentEquipment: "",
        injuryIncidents: "",
        downtimeHours: "",
        errorRate: "",
        name: "",
        email: "",
        phone: "",
        company: ""
    });

    const totalSteps = 4;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const calculateROI = (): ROIResults => {
        const workers = parseInt(formData.workers) || 0;
        const hourlyWage = parseFloat(formData.hourlyWage) || 0;
        const shiftsPerDay = parseInt(formData.shiftsPerDay) || 1;
        const workingDays = parseInt(formData.workingDays) || 250;
        const injuryIncidents = parseInt(formData.injuryIncidents) || 0;
        const downtimeHours = parseInt(formData.downtimeHours) || 0;

        // Calculate annual labor cost
        const hoursPerShift = 8;
        const annualLaborCost = workers * hourlyWage * hoursPerShift * shiftsPerDay * workingDays;

        // AMR can replace 60% of manual labor
        const laborSavings = annualLaborCost * 0.6;

        // Injury cost savings (average ₹5L per incident)
        const injuryCostSavings = injuryIncidents * 500000;

        // Downtime savings (₹10,000 per hour)
        const downtimeSavings = downtimeHours * 12 * 10000; // Monthly to annual

        // Total annual savings
        const annualSavings = laborSavings + injuryCostSavings + downtimeSavings;

        // AMR cost (average ₹12L)
        const amrCost = 1200000;

        // ROI calculation
        const roiPercentage = ((annualSavings - amrCost) / amrCost) * 100;
        const paybackMonths = (amrCost / (annualSavings / 12));

        return {
            annualLaborCost,
            annualSavings,
            roiPercentage,
            paybackMonths,
            injuryCostSavings,
            downtimeSavings
        };
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const [toast, setToast] = useState<{ message: string; type: "success" | "error"; isVisible: boolean }>({
        message: "",
        type: "success",
        isVisible: false
    });

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type, isVisible: true });
    };

    const hideToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // Send lead to backend
            const response = await fetch('/api/roi-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Calculate and show results
                const calculatedResults = calculateROI();
                setResults(calculatedResults);
                setShowResults(true);
            } else {
                showToast('Failed to submit. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showToast('An error occurred. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    if (showResults && results) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Your ROI Analysis
                        </h1>
                        <p className="text-gray-600 font-[family-name:var(--font-poppins)]">
                            Based on your inputs, here's how GOAT AMRs can transform your operations
                        </p>
                    </div>

                    {/* Results Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <p className="text-gray-600 text-sm mb-2 font-[family-name:var(--font-poppins)]">Annual Savings</p>
                            <p className="text-4xl font-bold text-[#5ab8b4] font-[family-name:var(--font-plus-jakarta-sans)]">
                                {formatCurrency(results.annualSavings)}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <p className="text-gray-600 text-sm mb-2 font-[family-name:var(--font-poppins)]">Payback Period</p>
                            <p className="text-4xl font-bold text-[#5ab8b4] font-[family-name:var(--font-plus-jakarta-sans)]">
                                {results.paybackMonths.toFixed(1)} months
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <p className="text-gray-600 text-sm mb-2 font-[family-name:var(--font-poppins)]">ROI Percentage</p>
                            <p className="text-4xl font-bold text-[#5ab8b4] font-[family-name:var(--font-plus-jakarta-sans)]">
                                {results.roiPercentage.toFixed(0)}%
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <p className="text-gray-600 text-sm mb-2 font-[family-name:var(--font-poppins)]">Current Labor Cost</p>
                            <p className="text-4xl font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta-sans)]">
                                {formatCurrency(results.annualLaborCost)}
                            </p>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                        <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">Savings Breakdown</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                <span className="text-gray-600 font-[family-name:var(--font-poppins)]">Labor Cost Reduction (60%)</span>
                                <span className="font-bold text-gray-900 font-[family-name:var(--font-poppins)]">
                                    {formatCurrency(results.annualLaborCost * 0.6)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                <span className="text-gray-600 font-[family-name:var(--font-poppins)]">Injury Cost Savings</span>
                                <span className="font-bold text-gray-900 font-[family-name:var(--font-poppins)]">
                                    {formatCurrency(results.injuryCostSavings)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-[family-name:var(--font-poppins)]">Downtime Reduction</span>
                                <span className="font-bold text-gray-900 font-[family-name:var(--font-poppins)]">
                                    {formatCurrency(results.downtimeSavings)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-gray-600 mb-6 font-[family-name:var(--font-poppins)]">
                            Ready to transform your operations?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/schedule-assessment"
                                className="px-8 py-4 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                Schedule Factory Assessment
                            </Link>
                            <Link
                                href="/"
                                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold hover:border-[#5ab8b4] transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#5ab8b4] mb-6 font-[family-name:var(--font-poppins)]">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5ab8b4]/10 rounded-full mb-4">
                        <Calculator className="w-8 h-8 text-[#5ab8b4]" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                        ROI Calculator
                    </h1>
                    <p className="text-gray-600 font-[family-name:var(--font-poppins)]">
                        Calculate your potential savings with GOAT AMRs
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {[1, 2, 3, 4].map((step) => (
                            <div
                                key={step}
                                className={`flex-1 h-2 mx-1 rounded-full transition-all duration-300 ${step <= currentStep ? 'bg-[#5ab8b4]' : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 text-center font-[family-name:var(--font-poppins)]">
                        Step {currentStep} of {totalSteps}
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    {/* Step 1: Current Operations */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Current Operations
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Number of workers in material handling
                                </label>
                                <input
                                    type="number"
                                    name="workers"
                                    value={formData.workers}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 10"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Average hourly wage (₹)
                                </label>
                                <input
                                    type="number"
                                    name="hourlyWage"
                                    value={formData.hourlyWage}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 150"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Shifts per day
                                </label>
                                <select
                                    name="shiftsPerDay"
                                    value={formData.shiftsPerDay}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                >
                                    <option value="">Select shifts</option>
                                    <option value="1">1 Shift</option>
                                    <option value="2">2 Shifts</option>
                                    <option value="3">3 Shifts</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Working days per year
                                </label>
                                <input
                                    type="number"
                                    name="workingDays"
                                    value={formData.workingDays}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 250"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Facility Information */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Facility Information
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Factory size (sq ft)
                                </label>
                                <input
                                    type="number"
                                    name="factorySize"
                                    value={formData.factorySize}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 50000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Average material handling distance (meters)
                                </label>
                                <input
                                    type="number"
                                    name="handlingDistance"
                                    value={formData.handlingDistance}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Types of materials moved
                                </label>
                                <input
                                    type="text"
                                    name="materialTypes"
                                    value={formData.materialTypes}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., Pallets, boxes, raw materials"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Current equipment used
                                </label>
                                <input
                                    type="text"
                                    name="currentEquipment"
                                    value={formData.currentEquipment}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., Manual carts, forklifts"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3: Pain Points */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Current Challenges
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Injury incidents per year
                                </label>
                                <input
                                    type="number"
                                    name="injuryIncidents"
                                    value={formData.injuryIncidents}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Downtime hours per month
                                </label>
                                <input
                                    type="number"
                                    name="downtimeHours"
                                    value={formData.downtimeHours}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 20"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Error rate percentage
                                </label>
                                <input
                                    type="number"
                                    name="errorRate"
                                    value={formData.errorRate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="e.g., 5"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 4: Lead Capture */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Almost There!
                                </h2>
                                <p className="text-gray-600 font-[family-name:var(--font-poppins)]">
                                    Enter your details to see your personalized ROI analysis
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] ${currentStep === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        {currentStep < totalSteps ? (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-6 py-3 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-6 py-3 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                {isSubmitting ? 'Calculating...' : 'Calculate ROI'}
                                <Calculator className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
