import React from "react";

export const Hero = () => {
    return (
        <div className="frame">
            <p className="automate-your">
                Automate Your Factory Floor. <br />
                At 5X Cheaper.
            </p>
            <p className="text-wrapper">
                Autonomous Mobile Robots (AMRs) that replace forklifts, reduce material handling costs by 60%, and deliver full
                ROI in 8 months.
            </p>
            <div className="navbar">
                <div className="div">Home</div>
                <div className="text-wrapper-2">Products</div>
                <div className="text-wrapper-2">Industries</div>
                <div className="text-wrapper-2">About</div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Book a demo</div>
                </div>
            </div>
            <div className="logo-group">
                <img className="untitled" src="/logo.png" alt="Logo" />
                <div className="text-wrapper-4">Robotics</div>
            </div>
        </div>
    );
};
