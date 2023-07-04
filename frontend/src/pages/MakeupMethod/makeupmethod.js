import React,{ useEffect, useState, useRef, useCallback} from 'react';
import './makeupmethod.css'
import styled, { keyframes }  from 'styled-components';
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

useEffect(() => {
  // Call your API to get the image data
  axios.get('http://127.0.0.1:8000/api/faceinput/')
    .then((response) => {
      const length = response.data.length;
      const image = response.data[length - 1].image;
      const url = `http://127.0.0.1:8000${image}`; // You might need to replace with your server's URL
      setImgSrc(url);
    })
    .catch((error) => {
      console.log(error);
    });

  setTimeout(() => {
    setIsVisible(true);
  }, 1000);

}, []); // The empty array makes sure the effect only runs once on mount


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

    
    setEyelid(data['eye_lid']);
    setEyelen(data['eye_len']);
    setEyeangle(data['eye_angle']);
    setLiplen(data['lip_len']);
    setLipthick(data['lip_thick']);
    setNostril(data['nostril']);
    setNoselen(data['nose_len']);
    setFaceshape(data['face_shape']);

    console.log("eye_lid:", data['eye_lid'])
    console.log("face shape:", data['face_shape'])

    // console.log("eye_lid:", eye_lid)
    // console.log("face shape:", face_shape)
  })
    .catch((error) => {
      console.log(error)
    });
}

  
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
    <MakeUpCard
    title="eye."
    //text={eye_lid}
    text={eye_len}
    text0={eye_len[7]}
    text1={eye_angle ? eye_angle.eyeangle : ''}
    text2=""
    text3=""
    />
    <MakeUpCard
    title="lip."
    text="입술"
    text0="두툼입술"
    text1="뭐시기입술"
    text2="- 짙은색을 피하고 밝은톤의 립제품을 사용해보세요"
    text3="- 입술 라인을 스머지해 자연스로운 분위기를 연출해보세요"
    />
    <Btn_black text={"PDF로 저장하기"} onClick={downloadPDF} style={{backgroundColor: "#3A3A3A", width: "180px", fontSize: "20px", fontFamily: "Noto Serif KR", borderRadius: "4.185303688049316px"}}/>
  </div>
  );
};

export default React.memo(Makeup);