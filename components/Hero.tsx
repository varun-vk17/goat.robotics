import React from "react";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className="frame">
            <div className="navbar">
                <div className="logo-group">
                    <img className="untitled" src="/logo.png" alt="Logo" />
                    <div className="text-wrapper-4">Robotics</div>
                </div>
                <div className="nav-items">
                    <div className="div">Home</div>
                    <div className="text-wrapper-2">Products</div>
                    <div className="text-wrapper-2">Industries</div>
                    <div className="text-wrapper-2">About</div>
                    <Link href="/schedule-assessment">
                        <div className="div-wrapper">
                            <div className="text-wrapper-3">Get Your Free Factory Assessment</div>
                        </div>
                    </Link>
                </div>
            </div>

            <p className="automate-your">
                Automate Material Handling
                <br />
                Cut Costs by 60%.
            </p>

            <p className="text-wrapper">
                Deploy in 6 weeks. Cut material handling costs by 60%. Keep your floor running the same day.
            </p>

            {/* CTA Buttons */}


            {/* Trust Indicators */}
            <div className="trust-indicators">
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>60+ Deployments</span>
                </div>
                <div className="trust-separator"></div>
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>98% Uptime Guarantee</span>
                </div>
                <div className="trust-separator"></div>
                <div className="trust-item">
                    <CheckCircle2 className="check-icon" />
                    <span>12-Month ROI</span>
                </div>
            </div>
        </div>
    );
};
