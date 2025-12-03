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

    // Step 2: Lead Capture
    name: string;
    email: string;
    phone: string;
    company: string;
}

export default function ROICalculatorPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<ROIData>({
        workers: "",
        hourlyWage: "",
        shiftsPerDay: "",
        workingDays: "",
        name: "",
        email: "",
        phone: "",
        company: ""
    });

    const totalSteps = 2;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                // Navigate to results page with query params
                const queryParams = new URLSearchParams({
                    workers: formData.workers,
                    hourlyWage: formData.hourlyWage,
                    shiftsPerDay: formData.shiftsPerDay,
                    workingDays: formData.workingDays
                }).toString();

                router.push(`/roi-results?${queryParams}`);
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

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4">
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#5ab8b4] mb-6 font-[family-name:var(--font-poppins)] transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5ab8b4]/10 rounded-full mb-4">
                        <Calculator className="w-8 h-8 text-[#5ab8b4]" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                        ROI Calculator
                    </h1>
                    <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
                        Calculate your potential savings with GOAT AMRs
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {[1, 2].map((step) => (
                            <div
                                key={step}
                                className={`flex-1 h-2 mx-1 rounded-full transition-all duration-300 ${step <= currentStep ? 'bg-[#5ab8b4]' : 'bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 text-center font-[family-name:var(--font-poppins)]">
                        Step {currentStep} of {totalSteps}
                    </p>
                </div>

                {/* Form */}
                <div className="bg-[#1c1c1c] rounded-2xl p-8 shadow-lg border border-white/10">
                    {/* Step 1: Current Operations */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Current Operations
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Number of workers per shift
                                </label>
                                <input
                                    type="number"
                                    name="workers"
                                    value={formData.workers}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="e.g., 10"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Average hourly wage (₹)
                                </label>
                                <input
                                    type="number"
                                    name="hourlyWage"
                                    value={formData.hourlyWage}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="e.g., 150"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Shifts per day
                                </label>
                                <select
                                    name="shiftsPerDay"
                                    value={formData.shiftsPerDay}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)]"
                                >
                                    <option value="">Select shifts</option>
                                    <option value="1">1 Shift</option>
                                    <option value="2">2 Shifts</option>
                                    <option value="3">3 Shifts</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Working days per year
                                </label>
                                <input
                                    type="number"
                                    name="workingDays"
                                    value={formData.workingDays}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="e.g., 250"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Lead Capture */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                    Almost There!
                                </h2>
                                <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
                                    Enter your details to see your personalized ROI analysis
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 font-[family-name:var(--font-poppins)]">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#5ab8b4] font-[family-name:var(--font-poppins)] placeholder-gray-600"
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)] ${currentStep === 1
                                ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                                : 'bg-white/10 text-white hover:bg-white/20'
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
                                className="flex items-center gap-2 px-6 py-3 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed font-[family-name:var(--font-plus-jakarta-sans)]"
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
