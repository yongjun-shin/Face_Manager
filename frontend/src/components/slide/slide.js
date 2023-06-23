import React from "react";
import "../slide/slide.css"

const Slide = () => {
    return (
        <>
        <div className="slide-container">
            <span id="slider1"></span>
            <span id="slider2"></span>
            <span id="slider3"></span>
            <span id="slider4"></span>
            <span id="slider5"></span>
            <div className="image-container">
                <img src="https://images.unsplash.com/photo-1602312771175-0a4f1f0f6214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDIyfHxjb3NtZXRpYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className="slider-image one"/>
                <img src="https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvc21ldGljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className="slider-image two"/>
                <img src="https://images.unsplash.com/photo-1642505172816-5c897043ce99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODY3fHxjb3NtZXRpYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className="slider-image three"/>
                <img src="https://images.unsplash.com/photo-1661346377812-c7671e09f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjU0fHxjb3NtZXRpYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className="slider-image four"/>
                <img src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTkxfHxjb3NtZXRpYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className="slider-image five"/>
            </div>
            <div className="button-container">
                <a href="#slider1" className="slider-button"></a>
                <a href="#slider2" className="slider-button"></a>
                <a href="#slider3" className="slider-button"></a>
                <a href="#slider4" className="slider-button"></a>
                <a href="#slider5" className="slider-button"></a>
            </div>
        </div>
        </>
    );
};

export default Slide;