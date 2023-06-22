import React,{ useEffect, useState } from 'react';
import './makeupmethod.css'
import styled, { keyframes }  from 'styled-components';


function Makeup({text_1, text_2}) {

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

const AdditionalTextContainer = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 1s ease-in 0.5s forwards;
  
`;

const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2]= useState(false);

  useEffect(() => {
    setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    setTimeout(() => {
        setIsVisible2(true);
      }, 500);
  }, []);

  return (
    <div>
    <div className="makeup-method-01">
        <span class="makeup-method-01_sub1">
          현업 메이크업 전문가의 조언을 받아 화장법을 제안합니다.

          <br />
        </span>
        <span class="makeup-method-01_sub2">Makeup Method</span>
      </div>
    <div className = "makeup-forme">
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
    <MainTextContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <img className='userimage'  src='img/image 16.png' />
    </MainTextContainer>
    </div>
    <div className='makeup-img-features'>
    {isVisible2 && (
      <AdditionalTextContainer>
      <span className='makeup-img-features-brow'>
        {text_1}<br></br>{text_2} 
      </span>
      <span className='makeup-img-features-eye'>
        {text_1}<br></br>{text_2} 
      </span>
      <span className='makeup-img-features-nose'>
        {text_1}<br></br>{text_2} 
      </span>
      <span className='makeup-img-features-clown'>
        {text_1}<br></br>{text_2} 
      </span>
      <span className='makeup-img-features-lip'>
        {text_1}<br></br>{text_2} 
      </span>
      <span className='makeup-img-features-face'>
        {text_1}<br></br>{text_2} 
      </span>
      </AdditionalTextContainer>)}
    </div>
  </div>
  );
}
  return <Animation />;
}

Makeup.defaultProps = {
  text_1: '뭐뭐한',
  text_2: '뭐뭐'
}

export default Makeup;