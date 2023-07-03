import React, { useEffect, useState, useRef, useCallback } from 'react';
import './makeupmethod.css'
import styled, { keyframes } from 'styled-components';
import MakeUpCard from '../../components/makeupcard.js';
import { Btn_black } from "../../components/button.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';

function Makeup() {

  const fadeInAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
}
  to {
    opacity: 1;
    transform: translateZ(0);
}
`;

  const MainTextContainer = styled.div`
  opacity: 0;
  animation: ${fadeInAnimation} 1s ease-in forwards;
`;

  const [isVisible, setIsVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [d, setData] = useState(null);
  const [eye_lid, setEyelid] = useState(null);
  const [eye_len, setEyelen] = useState(null);
  const [eye_angle, setEyeangle] = useState(null);
  const [lip_len, setLiplen] = useState(null);
  const [lip_thick, setLipthick] = useState(null);
  const [nostril, setNostril] = useState(null);
  const [nose_len, setNoselen] = useState(null);
  const [face_shape, setFaceshape] = useState(null);

  const pk = localStorage.getItem('pk')

  useEffect(() => {

    getDataByUserId()
  }, []);

  const getDataByUserId = () => {
    axios.put("http://localhost:8000/ai/getdata/", {
      user_id: pk
    }).then((response) => {
      console.log(response)
      const data = response.data;
      const eye_lid = data['eye_lid']
      console.log(eye_lid)
      
      console.log(document.getElementById("eye").getAttribute("value"));
      //document.getElementById("eye").setAttribute("text", eye_lid['eyelid']);
      // setData(response.data);
      // console.log("d", d);
      // console.log("d", d['eye_lid']);
      // setEyelid(d['eye_lid']);
      // setEyelen(d['eye_len']);
      // setEyeangle(d['eye_angle']);
      // setLiplen(d['lip_len']);
      // setLipthick(d['lip_thick']);
      // setNostril(d['nose_len']);
      // setNoselen(d['nostril']);
      // setFaceshape(d['face_shape']);

      // console.log("eye_lid:", eye_lid)
      // console.log("face shape:", face_shape)
      // console.log("face shape:", face_shape)
    })
      .catch((error) => {
        console.log(error)
      });

  }

  const pdfRef = useRef();
  const downloadPDF = useCallback(() => {
    const input = pdfRef.current;
    const { offsetHeight, scrollHeight } = input;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('makeupmethod.pdf');
    });
  }, [pdfRef]);
  return (



    <div className='wrapper' ref={pdfRef}>
      <div className='container'>
        <div className="makeup-method-01">
          <span class="makeup-method-01_sub1">
            현업 메이크업 전문가의 조언을 받아 화장법을 제안합니다.
            <br />
          </span>
          <span class="makeup-method-01_sub2">Makeup Method</span>
        </div>
        <MainTextContainer style={{ opacity: isVisible ? 1 : 0 }}>
          <img className='userimage' src={imgSrc} />
        </MainTextContainer>
        <div className='makeup-forme'>
          <span className="makeup-forme-01">
            ma propre façon de me maquiller.

            <br />
          </span>
          <span className="makeup-forme-02">
            나를 위한 화장

            <br />
          </span>
          <span className="makeup-forme-03">
            <br />
          </span>
          <span className="makeup-forme-04">
            스스로의 가꿈을 위한 기술을 위해

            <br />
            저희는 끊임없이 나아가고자 합니다.
          </span>
        </div>
        <div className='makeup-img-user'>
        </div>
      </div>
      <MakeUpCard id = "face"
        title="face shape."
        text=""
        text2="- 아이라인 대신 진한색의 섀도우를 사용해 눈매를 강조해보세요"
        text3="- 속눈썹 뿌리를 강하게 올려 바짝 올려보세요"
      />
      <MakeUpCard id = "eye" value = "1"
        title="eye."
        text="쌍꺼풀"
        text0="긴눈"
        text1="올라간눈"
        text2="- 아이라인 대신 진한색의 섀도우를 사용해 눈매를 강조해보세요"
        text3="- 속눈썹 뿌리를 강하게 올려 바짝 올려보세요"
      />
      <MakeUpCard id = "nose"
        title="nose."
        text="코"
        text0="두툼입술"
        text1="뭐시기입술"
        text2="- 짙은색을 피하고 밝은톤의 립제품을 사용해보세요"
        text3="- 입술 라인을 스머지해 자연스로운 분위기를 연출해보세요"
      />
      <MakeUpCard id="lip"
        title="lip."
        text="입술"
        text0="두툼입술"
        text1="뭐시기입술"
        text2="- 짙은색을 피하고 밝은톤의 립제품을 사용해보세요"
        text3="- 입술 라인을 스머지해 자연스로운 분위기를 연출해보세요"
      />
      <Btn_black text={"PDF로 저장하기"} onClick={downloadPDF} style={{ backgroundColor: "#3A3A3A", width: "180px", fontSize: "20px", fontFamily: "Noto Serif KR", borderRadius: "4.185303688049316px" }} />
    </div>
  );
};

export default React.memo(Makeup);