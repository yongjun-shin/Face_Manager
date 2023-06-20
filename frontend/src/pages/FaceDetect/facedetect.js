import React from "react";
import './facedetect.css';
import Btn_black from '/Users/jyp/Desktop/KT_BigProject_07/frontend/src/components/button.js';

function FaceDetect() {
    return(
        <div>
            <Text></Text>
            <Body></Body>
        </div>
    );
}

function Text(){
    return(
        <div class="text">
            <h1 class="h1">얼굴 분석 결과를 등록하고</h1>
            <h5 class="h5">화장법 추천을 받아보세요.</h5>
        </div>
    );
}

function Body(){
    return(
        <div class="html-Bpo">
            <div class="auto-group-qevz-p75">
                <div class="upload_form">
                    <input type="file" class="upload_photoform" accept="image/*" id="userPhoto" name="userPhoto"/>
                </div>
                <p class="text1">당신의 피부타입을 알려주세요.</p>

                <p class="text_oil_dry_balance">유수분 밸런스</p>

                <div class="radioset1">
                    <div class="radio-container">
                        <label class="label_dry">
                        <div class="radio-content">
                            <input class="radio_btn_dry" type="radio" name="D_or_O" value="dry"/>
                            <p class="text_dry">D : 건성</p>
                        </div>
                        </label>

                        <label class="label_oily">
                        <div class="radio-content">
                            <input class="radio_btn_oily" type="radio" name="D_or_O" value="oily" />
                            <p class="text_oily">O : 지성</p>
                        </div>
                        </label>
                    </div>
                </div>

                <p class="text_sensitivity">피부 민감도</p>

                <div class="radioset2">
                    <div class="radio-container2">
                        <label class="label_sensitive">
                        <div class="radio-content">
                            <input class="radio_btn_sensitive" type="radio" name="S_or_R" value="sensitive" />
                            <p class="text_sensitive">S : 민감성</p>
                        </div>
                        </label>

                        <label class="label_resistance">
                        <div class="radio-content">
                            <input class="radio_btn_resistance" type="radio" name="S_or_R" value="resistance" />
                            <p class="text_resistance">R : 저항성</p>
                        </div>
                        </label>
                    </div>
                </div>
                

                <p class="text_melanin">멜라닌 색소 활성도</p>

                <div class="radioset3">
                    <div class="radio-container3">
                        <label class="label_pigment">
                        <div class="radio-content">
                            <input class="radio_btn_pigment" type="radio" name="P_or_N" value="pigment" />
                            <p class="text_pigment">P : 민감성</p>
                        </div>
                        </label>

                        <label class="label_nonpigment">
                        <div class="radio-content">
                            <input class="radio_btn_nonpigment" type="radio" name="P_or_N" value="nonpigment" />
                            <p class="text_nonpigment">N : 비색소성</p>
                        </div>
                        </label>
                    </div>
                </div>

                <p class="text_tension">피부 탄력도 및 주름</p>

                <div class="radioset4">
                    <div class="radio-container4">
                        <label class="label_wrinkle">
                        <div class="radio-content">
                            <input class="radio_btn_wrinkle" type="radio" name="W_or_T" value="wrinkle" />
                            <p class="text_wrinkle">W : 주름</p>
                        </div>
                        </label>

                        <label class="label_tight">
                        <div class="radio-content">
                            <input class="radio_btn_tight" type="radio" name="W_or_T" value="Tight" />
                            <p class="text_tight">T : 탱탱함</p>
                        </div>
                        </label>
                    </div>
                </div>
                <Btn_black class="btn_StartAnalysis" text={'분석시작'} style={{width:'237px', height:'46px', fontSize:'20px', marginBottom:'100px'}}></Btn_black>
            </div>
        </div>
    );
}
export default FaceDetect;
