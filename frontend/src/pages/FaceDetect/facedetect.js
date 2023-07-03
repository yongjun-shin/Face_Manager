import { Radio } from 'antd';
import './facedetect.css';
import Btn_black from '../../components/button.js';
import React, { useContext, useState } from "react";
import { RadioProvider } from './RadioContext';
import { RadioContext } from './RadioContext';
import { useNavigate } from "react-router-dom";

import Axios from 'axios';

function FaceDetect() {
    return (
        <RadioProvider>
            <div>
                <Text></Text>
                <Body></Body>
            </div>
        </RadioProvider>
    );
}

function Text() {
    return (
        <div class="text">
            <h1 class="h1">얼굴 사진을 등록하고</h1>
            <h5 class="h5">화장법 추천을 받아보세요.</h5>
        </div>
    );
}

function RadioTitle(props) {
    return (
        <p class="RadioTitle" style={{ color: props.text_color }}>{props.content}</p>
    )
}


function NewRadio(props) {
    const [selectedValue, setSelectedValue] = useState(""); // 선택된 값을 저장할 상태

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value); // 선택된 값 업데이트
        console.log("selected Value:", event.target.value);
        document.getElementById(props.id).setAttribute('value', event.target.value);
        console.log(document.getElementById(props.id).getAttribute("value"));
    };

    return (
        <div class="NewRadioset" value="" id={props.id}>
            <div class="Radio-container">
                <label class='label_content1'>
                    <div class="radio-content1" style={{ backgroundColor: props.bg_color1 }}>
                        <input class="RadioBtn_content1" type='radio' name={props.name} value={props.value1} checked={selectedValue === props.value1}
                            onChange={handleRadioChange} style={{ accentColor: props.accentColor }}></input>
                        <div class="content1">
                            <p class="text_top1">{props.text_top1}</p>
                            <p class="text_center1">{props.text_center1}</p>
                            <p class="text_bottom1">{props.text_bottom1}</p>
                        </div>
                        <p class="text_description1">{props.description1}</p>
                    </div>
                </label>

                <label class="label_content2">
                    <div class="radio-content2" style={{ backgroundColor: props.bg_color2 }}>
                        <p class="text_description2">{props.description2}</p>
                        <div class="content2">
                            <p class="text_top2">{props.text_top2}</p>
                            <p class="text_center2">{props.text_center2}</p>
                            <p class="text_bottom2">{props.text_bottom2}</p>
                        </div>
                        <input class="RadioBtn_content2" type='radio' name={props.name} value={props.value2} checked={selectedValue === props.value2}
                            onChange={handleRadioChange} style={{ accentColor: props.accentColor }}></input>
                    </div>
                </label>
            </div>
        </div>
    )
}

function Body() {

    const uploadModule = async (e) => {
        var eye_val = document.getElementById("ox").getAttribute("value");
        var do_val = document.getElementById("do").getAttribute("value");
        var sr_val = document.getElementById("sr").getAttribute("value");
        var pn_val = document.getElementById("pn").getAttribute("value");
        var wt_val = document.getElementById("wt").getAttribute("value");
        var type_val = do_val[0] + sr_val[0] + pn_val[0] + wt_val[0]
        var image_val = document.getElementById("userPhoto").files[0];
        var pk_val = getpk();
        console.log(eye_val, do_val, sr_val, pn_val, wt_val);
        console.log(type_val)
        console.log(image_val);


        let form_data = new FormData();
        form_data.append('eyelid', eye_val);
        form_data.append('do', do_val);
        form_data.append('sr', sr_val);
        form_data.append('pn', pn_val);
        form_data.append('wt', wt_val);
        form_data.append('type_list', type_val);
        form_data.append('image', image_val);
        form_data.append('user_id', pk_val);
        console.log(pk_val)
        Axios.post("http://127.0.0.1:8000/api/faceinput/", form_data, {
        headers: {
            'content-type' : 'multipart/from-data'
        }
        })
        .then(function (response) {
            console.log('database part well done');
            Axios.post("http://127.0.0.1:8000/ai/", form_data, {
                headers: {
                    'content-type' : 'multipart/from-data'
                }
                })
                .then(function (response) {
                    console.log('ai part well done');
                    window.location = "http://localhost:3000/makeup/";
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    function getpk(){
        if (localStorage.getItem('token') !== null) {
          console.log(localStorage);
          return localStorage.getItem('pk');
        }
        else{
            console.log('token is null');
            return null;
        }
    }

    return (

        <div class="html-Bpo">
            <div class="auto-group-qevz-p75">
                <div class="upload_form">
                    <input type="file" class="upload_photoform" accept="image/*" id="userPhoto" name="userPhoto" />
                </div>

                <p class="text1">당신은 쌍커풀을 가지고 있나요?</p>
                <NewRadio id="ox" name="O_or_X" accentColor="#000000"
                    value1="yes" text_top1="O" text_center1="있음" text_bottom1="Yes"
                    description1="쌍커풀을 가지고 있습니다." bg_color1="#D3CFC8"
                    value2="no" text_top2="X" text_center2="없음" text_bottom2="No"
                    description2="쌍커풀을 가지고 있지 않습니다." bg_color2="#D3CFC8" ></NewRadio>

                <p class="text1">당신의 피부타입을 알려주세요.</p>

                <RadioTitle text_color="#537aa5" content="유수분 밸런스"></RadioTitle>
                <NewRadio id="do" name="D_or_O" accentColor="#537aa5"
                    value1="dry" text_top1="D" text_center1="건성" text_bottom1="Dry"
                    description1="피지 분비량과 수분 보유량 모두 적어 거칠고 각질과 주름이 잘 생기는 타입" bg_color1="#E9EEF4"
                    value2="oily" text_top2="O" text_center2="지성" text_bottom2="Oily"
                    description2="피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입" bg_color2="#D5DBE9"></NewRadio>

                <RadioTitle text_color="#7E7F83" content="피부 민감도"></RadioTitle>
                <NewRadio id="sr" name="S_or_R" accentColor="#7E7F83"
                    value1="sensitive" text_top1="S" text_center1="민감성" text_bottom1="Sensitive"
                    description1="피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입" bg_color1="#EEEEF0"
                    value2="resistant" text_top2="R" text_center2="저항성" text_bottom2="Resistant"
                    description2="피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입" bg_color2="#DDDDDD"></NewRadio>


                <RadioTitle text_color="#288E9A" content="멜라닌 색소 활성도"></RadioTitle>
                <NewRadio id="pn" name="P_or_N" accentColor="#288E9A"
                    value1="pigment" text_top1="P" text_center1="민감성" text_bottom1="Pigment"
                    description1="멜라닌 활성도가 높아 기미, 주근깨 혹은 잡티 등 눈에 보이는 색소가 많은 타입" bg_color1="#EAEFF3"
                    value2="non-pigment" text_top2="N" text_center2="비색소성" text_bottom2="Non-Pigment"
                    description2="멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입" bg_color2="#D3E0E6"></NewRadio>

                <RadioTitle text_color="#515FA8" content="피부 탄력도 및 주름"></RadioTitle>
                <NewRadio id="wt" name="W_or_T" accentColor="#515FA8"
                    value1="wrinkle" text_top1="W" text_center1="주름" text_bottom1="Wrinkle"
                    description1="피부 결이 고르지 않고 주름이 많은 타입" bg_color1="#E8E8F4"
                    value2="tight" text_top2="T" text_center2="탱탱함" text_bottom2="Tight"
                    description2="피부 결이 고르고 주름이 적어 탄력이 있는 타입" bg_color2="#D2D3E8"></NewRadio>

                <Btn_black onClick={uploadModule} type="submit" class="btn_StartAnalysis" text={'분석시작'} style={{
                    width: '237px', height: '46px', fontSize: '20px', marginBottom: '100px', marginTop: '20px'
                }}></Btn_black>
            </div>
        </div>

    );
}
export default FaceDetect;