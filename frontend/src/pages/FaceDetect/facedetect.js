import './facedetect.css';
import Btn_black from '/Users/jyp/Desktop/KT_BigProject_07/frontend/src/components/button.js';
import React, { useState } from "react";

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
function RadioSet(props){
    const [selectedValue, setSelectedValue] = useState(""); // 선택된 값을 저장할 상태

    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value); // 선택된 값 업데이트
      console.log("selected Value:", event.target.value);
    };

    return(
        <div class="radioset1">
            <div class="radio-container">
                <label class="label_content1">
                <div class="radio-content">
                    <input class="radio_btn_content1" type="radio" name={props.name} value={props.value1} checked={selectedValue === props.value1} // 선택된 값과 비교하여 체크 여부 결정
                        onChange={handleRadioChange}/>
                    <p class="text_content1">{props.content1}</p>
                </div>
                </label>

                <label class="label_content2">
                <div class="radio-content">
                    <input class="radio_btn_content2" type="radio" name={props.name} value={props.value2} checked={selectedValue === props.value2} // 선택된 값과 비교하여 체크 여부 결정
                        onChange={handleRadioChange}/>
                    <p class="text_content2">{props.content2}</p>
                </div>
                </label>
            </div>
        </div>
    )
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
                <RadioSet content1="D : 건성" content2="O : 지성" name="D_or_O" value1="Dry" value2="Oily"></RadioSet>

                <p class="text_sensitivity">피부 민감도</p>
                <RadioSet content1="S: 민감성" content2="R : 저항성" name="S_or_R" value1="Sensitive" value2="Resistant"></RadioSet>

                <p class="text_melanin">멜라닌 색소 활성도</p>
                <RadioSet content1="P : 민감성" content2="N : 비색소성" name="P_or_N" value1="Pigment" value2="Non_pigment"></RadioSet>

                <p class="text_tension">피부 탄력도 및 주름</p>
                <RadioSet content1="W : 주름" content2="T : 탱탱함" name="W_or_T" value1="Wrinkle" value2="Tight"></RadioSet>
                
                <Btn_black class="btn_StartAnalysis" text={'분석시작'} style={{width:'237px', height:'46px', fontSize:'20px', marginBottom:'100px'}}></Btn_black>
            </div>
        </div>
    );
}
export default FaceDetect;
