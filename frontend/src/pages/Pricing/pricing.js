import { ReactComponent as Human } from '../svgs/about_human.svg';
import { ReactComponent as Logos } from '../svgs/logos.svg';
import { useEffect, useRef } from 'react';
import './pricing.css'

export function Pricing() {
    

    return (
        <div class='total'>
            <div class='first'>
                <div class='imgs'>
                    <Logos style={{width:'365px', height:'205px'}}></Logos>
                </div>
                <div class='texts'>
                    <h1 style={{fontSize:'24px', textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>Who we are</h1>
                    <p style={{fontSize:'20px'}}>Our service uses facial recognition AI to identify the features of your face and suggest makeup style and cosmetics to match. The suggested makeup style can be applied to our user's face according to the mood and atmosphere they want to create. As an additional element, we provide a physiognomy service based on the identified facial features.</p>
                </div>
            </div>
            <div class='second'>
                <div class='title'>
                    <h1 style={{fontSize:'24px', textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>Our Awesome Team</h1>
                </div>
                <div class='line1-top'>
                    <div class='line1'>
                        <canvas class='myCanvas' style={{backgroundColor:'#FAE1DD'}}></canvas>
                        <canvas class='myCanvas' style={{backgroundColor:'#F8EDEB'}}></canvas>
                        <canvas class='myCanvas' style={{backgroundColor:'#E8E8E4'}}></canvas>
                        <canvas class='myCanvas' style={{backgroundColor:'#D8E2DC'}}></canvas>
                    </div>
                </div>
                <div class='line2-top'>
                    <div class='line2'>
                        <canvas class='myCanvas' style={{backgroundColor:'#ECE4DB'}}></canvas>
                        <canvas class='myCanvas' style={{backgroundColor:'#FFE5D9'}}></canvas>
                        <canvas class='myCanvas' style={{backgroundColor:'#FFD7BA'}}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pricing;
