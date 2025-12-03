"use client";

import React, { useEffect } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
    message: string;
    type?: "success" | "error";
    isVisible: boolean;
    onClose: () => void;
}

export const Toast = ({ message, type = "success", isVisible, onClose }: ToastProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-2xl border border-gray-100 min-w-[300px]"
                >
                    {type === "success" ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <p className="flex-1 text-gray-800 font-medium font-[family-name:var(--font-poppins)]">
                        {message}
                    </p>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
