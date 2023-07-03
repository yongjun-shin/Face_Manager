import React,{ useEffect, useState, useRef} from 'react';
import './makeupmethod.css'
import styled, { keyframes }  from 'styled-components';
import MakeUpCard from '../../components/makeupcard.js';
import { Btn_black } from "../../components/button.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Axios from 'axios';
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

  const Animation = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
          setIsVisible(true);
        }, 1000);
    }, []);

  const pdfRef = useRef();
  const downloadPDF = () => {
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
  };
  
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
      <img className='userimage' src='img/image 16.png' />
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
    text="둥근 눈매에 속쌍꺼풀이 매력적인 당신에게 추천드려요!"
    text2="- 아이라인 대신 진한색의 섀도우를 사용해 눈매를 강조해보세요"
    text3="- 속눈썹 뿌리를 강하게 올려 바짝 올려보세요"
    />
    <MakeUpCard
    title="lip."
    text="도톰한 보통크기의 입술이 매력적인 당신에게 추천드려요!"
    text2="- 짙은색을 피하고 밝은톤의 립제품을 사용해보세요"
    text3="- 입술 라인을 스머지해 자연스로운 분위기를 연출해보세요"
    />
    <Btn_black text={"PDF로 저장하기"} onClick={downloadPDF} style={{backgroundColor: "#3A3A3A", width: "180px", fontSize: "20px", fontFamily: "Noto Serif KR", borderRadius: "4.185303688049316px"}}/>
  </div>
  );
};
  return <Animation />;
};

export default Makeup;