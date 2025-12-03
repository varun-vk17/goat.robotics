"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

import { Toast } from "@/components/ui/Toast";

export const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                showToast('Message sent successfully!', 'success');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: ""
                });
            } else {
                showToast('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showToast('An error occurred. Please try again.', 'error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left Side - Company Info */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center mb-6">
                            <Image src="/logo.png" alt="GOAT Robotics" width={60} height={30} className="object-contain" />
                            <span className="ml-2 text-xl font-bold text-[#5ab8b4] font-[family-name:var(--font-titillium-web)]">Robotics</span>
                        </div>

                        <p className="text-gray-400 mb-8 max-w-md font-[family-name:var(--font-poppins)] leading-relaxed">
                            India's leading AMR manufacturer. Automate your material handling, cut costs by 60%, and deploy in just 6 weeks.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#5ab8b4] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-500 font-[family-name:var(--font-poppins)]">Email</p>
                                    <a href="mailto:contact@goatrobotics.in" className="text-white hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]">
                                        contact@goatrobotics.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#5ab8b4] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-500 font-[family-name:var(--font-poppins)]">Phone</p>
                                    <a href="tel:+919876543210" className="text-white hover:text-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#5ab8b4] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-500 font-[family-name:var(--font-poppins)]">Location</p>
                                    <p className="text-white font-[family-name:var(--font-poppins)]">
                                        Coimbatore, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5ab8b4] hover:border-[#5ab8b4] transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5ab8b4] hover:border-[#5ab8b4] transition-all duration-300 group">
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5ab8b4] hover:border-[#5ab8b4] transition-all duration-300 group">
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Get Your Free Factory Assessment
                        </h3>
                        <p className="text-gray-400 mb-6 font-[family-name:var(--font-poppins)]">
                            Let's discuss how AMRs can transform your operations
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5ab8b4] transition-colors font-[family-name:var(--font-poppins)]"
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Tell us about your requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5ab8b4] transition-colors resize-none font-[family-name:var(--font-poppins)]"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-[#5ab8b4] text-white rounded-lg font-semibold hover:bg-[#4a9fa0] transition-all duration-300 flex items-center justify-center gap-2 group font-[family-name:var(--font-plus-jakarta-sans)]"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm font-[family-name:var(--font-poppins)]">
                            © 2024 GOAT Robotics. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-[#5ab8b4] text-sm transition-colors font-[family-name:var(--font-poppins)]">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#5ab8b4] text-sm transition-colors font-[family-name:var(--font-poppins)]">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
