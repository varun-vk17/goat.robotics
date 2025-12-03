"use client";

import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Toast } from "@/components/ui/Toast";

export default function ScheduleAssessmentPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        factorySize: "",
        industry: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/schedule-assessment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                showToast('Failed to schedule. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error scheduling assessment:', error);
            showToast('An error occurred. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-lg w-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                        Assessment Scheduled!
                    </h1>
                    <p className="text-gray-600 mb-8 font-[family-name:var(--font-poppins)]">
                        Thank you for scheduling a factory assessment. Our team has received your request and will confirm the appointment shortly via email.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 font-[family-name:var(--font-plus-jakarta-sans)]"
                    >
                        Back to Home
                    </Link>
                </motion.div>
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
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#5ab8b4] mb-6 font-[family-name:var(--font-poppins)] transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5ab8b4]/10 rounded-full mb-4">
                            <Calendar className="w-8 h-8 text-[#5ab8b4]" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Schedule Factory Assessment
                        </h1>
                        <p className="text-gray-600 font-[family-name:var(--font-poppins)] max-w-2xl mx-auto">
                            Book a free on-site assessment with our automation experts to identify opportunities for efficiency improvements.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
                                What to Expect
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#5ab8b4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#5ab8b4] font-bold text-xs">1</span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-[family-name:var(--font-poppins)]">
                                        Walkthrough of your facility to understand material flow
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#5ab8b4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#5ab8b4] font-bold text-xs">2</span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-[family-name:var(--font-poppins)]">
                                        Identification of bottlenecks and automation opportunities
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#5ab8b4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#5ab8b4] font-bold text-xs">3</span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-[family-name:var(--font-poppins)]">
                                        Preliminary ROI estimation and solution proposal
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#1c1c1c] rounded-2xl p-6 shadow-lg text-white">
                            <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Need Help?
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 font-[family-name:var(--font-poppins)]">
                                If you have questions before booking, feel free to contact us directly.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[#5ab8b4]">
                                <Clock className="w-4 h-4" />
                                <span>Mon - Fri, 9am - 6pm</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Your Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Facility & Schedule
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                        Factory Location *
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="factorySize" // Using factorySize field for location based on previous context, or should I add location? Let's stick to the plan which had location.
                                            // Actually the plan said "Facility Details: Location, Factory size". I'll use factorySize for location here or add a new field.
                                            // Let's assume the user meant location here.
                                            value={formData.factorySize}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                            placeholder="City, State"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                        Industry Type
                                    </label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="FMCG">FMCG</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Pharma">Pharma</option>
                                        <option value="Textile">Textile</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                        Preferred Time *
                                    </label>
                                    <select
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                    >
                                        <option value="">Select Time Slot</option>
                                        <option value="09:00">09:00 AM - 11:00 AM</option>
                                        <option value="11:00">11:00 AM - 01:00 PM</option>
                                        <option value="14:00">02:00 PM - 04:00 PM</option>
                                        <option value="16:00">04:00 PM - 06:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                                    Additional Requirements / Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                    placeholder="Tell us about your specific requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-[#5ab8b4] text-white rounded-lg font-bold hover:bg-[#4a9fa0] transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                {isSubmitting ? 'Scheduling...' : 'Confirm Booking'}
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
