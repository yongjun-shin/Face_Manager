import React,{ useEffect, useState, useRef, useCallback} from 'react';
import './makeupmethod.css'
import styled, { keyframes }  from 'styled-components';
import {MakeUpCard_Eye, MakeUpCard_Lip, MakeUpCard_Nose, MakeUpCard_Face}  from '../../components/makeupcard.js';
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
  const [lidshadow, setlidShadow] = useState(null);

  const [eye_len, setEyelen] = useState(null);
  const [lenshadow, setlenShadow] = useState(null);
  const [leneyeline, setlenEyeline] = useState(null);
  const [lenmascara, setlenMascara] = useState(null);

  const [eye_angle, setEyeangle] = useState(null);
  const [angleshadow, setangleShadow] = useState(null);
  const [angleeyeline, setangleEyeline] = useState(null);
  const [anglemascara, setangleMascara] = useState(null);

  const [lip_len, setLiplen] = useState(null);
  const [lenlip, setlenLip] = useState(null);

  const [lip_thick, setLipthick] = useState(null);
  const [thicklip, setthickLip] = useState(null);

  const [nostril, setNostril] = useState(null);
  const [widnose, setwidNose] = useState(null);

  const [nose_len, setNoselen] = useState(null);
  const [lennose, setlenNose] = useState(null);

  const [face_shape, setFaceshape] = useState(null);
  const [shapeeyebrow, setshapeEyebrow] = useState(null);
  const [shapeblusher, setshapeBlusher] = useState(null);
  const [shapeshading, setshapeShading] = useState(null);

  const pk = localStorage.getItem('pk')

  useEffect(() => {
    getDataByUserId()
  }, []);

  const getDataByUserId = () => {
    axios.put("http://localhost:8000/ai/getdata/", {
      user_id: pk
    }).then((response) => {
      console.log(pk);
      console.log(response)
      const data = response.data;

    
    setEyelid(data['eye_lid']['eyelid']);
    setlidShadow(data['eye_lid']['shadow']);

    setEyelen(data['eye_len']['leng']);
    setlenShadow(data['eye_len']['shadow']);
    setlenEyeline(data['eye_len']['eyeline']);
    setlenMascara(data['eye_len']['mascara']);

    setEyeangle(data['eye_angle']['angle']);
    setangleShadow(data['eye_angle']['shadow']);
    setangleEyeline(data['eye_angle']['eyeline']);
    setangleMascara(data['eye_angle']['mascara']);

    setLiplen(data['lip_len']['leng']);
    setlenLip(data['lip_len']['lip']);

    setLipthick(data['lip_thick']['thickness']);
    setthickLip(data['lip-thick']['lip']);

    setNostril(data['nostril']['wideness']);
    setwidNose(data['nostril']['nose']);

    setNoselen(data['nose_len']['leng']);
    setlenNose(data['nose_len']['nose']);

    setFaceshape(data['face_shape']['shape']);
    setshapeEyebrow(data['face_shape']['eyebrow']);
    setshapeBlusher(data['face_shape']['blusher']);
    setshapeShading(data['face_shape']['shading']);

    console.log("eye_lid:", data['eye_lid'])
    console.log("eye_len:", data['eye_len'])
    console.log("eye_angle:", data['eye_angle'])
    console.log("lip_thick:", data['lip_thick'])

  })
    .catch((error) => {
      console.log("error!")
      console.log(error)
    });
  }

  
  return (
    <div> 
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
      <MakeUpCard_Eye
        title="eye."
        obj1={eye_lid === 'yes' ? '쌍꺼풀 있음' : '쌍꺼풀 없음'}
        text1={lidshadow}
        obj2={
          eye_len === 'short' ? '짧은 눈' :
          eye_len === 'long' ? '긴 눈' :
          eye_len === 'golden' ? '황금비율 눈 길이' :
          'None'
        }
        text2={lenshadow}
        text3={leneyeline}
        text4={lenmascara}
        obj3={
          eye_angle === 'up' ? '올라간 눈매' :
          eye_angle === 'down' ? '내려간 눈매' :
          eye_angle === 'golden' ? '황금비율 눈매' :
          'None'
        }
        text5={angleshadow}
        text6={angleeyeline}
        text7={anglemascara}
      />

      <MakeUpCard_Lip
        title="lip."
        obj1={      
        lip_len === 'short' ? '짧은 입술' :
        lip_len === 'long' ? '긴 입술' :
        lip_len === 'golden' ? '황금비율 입술 길이' :
        'None'}
        text1={lenlip}
        obj2={
          lip_thick === 'thick' ? '두꺼운 입술' :
          lip_thick === 'thin' ? '얇은 입술' :
          lip_thick === 'golden' ? '황금비율 입술 두께' :
          'None'}
        text2={thicklip}
      />

      <MakeUpCard_Nose
        title="Nose."
        obj1={      
        nostril === 'wide' ? '넓은 콧볼' :
        nostril === 'narrow' ? '좁은 콧볼' :
        nostril === 'golden' ? '황금비율 콧볼 넓이' :
        'None'}
        text1={widnose}
        obj2={
          nose_len === 'long' ? '긴 코' :
          nose_len === 'short' ? '짧은 코' :
          nose_len === 'golden' ? '황금비율 코 길이' :
          'None'}
        text2={lennose}
      />

      <MakeUpCard_Face
        title="Face."
        obj1={face_shape}
        text1={shapeeyebrow}
        text2={shapeblusher}
        text3={shapeshading}

      />      
    </div>
    <div style={{display:'flex', justifyContent:'center', marginBottom:'300px'}}>
      <Btn_black text={"PDF로 저장하기"} onClick={downloadPDF} style={{backgroundColor: "#3A3A3A", width: "180px", fontSize: "20px", fontFamily: "Noto Serif KR", borderRadius: "4.185303688049316px"}}/>
    </div>
  </div>
  );
};

export default React.memo(Makeup);