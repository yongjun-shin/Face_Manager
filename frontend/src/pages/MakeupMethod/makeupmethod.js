import React,{ useEffect, useState, useRef, useCallback} from 'react';
import React,{ useEffect, useState, useRef, useCallback} from 'react';
import './makeupmethod.css'
import styled, { keyframes }  from 'styled-components';
import {MakeUpCard_Eye, MakeUpCard_Lip, MakeUpCard_Nose, MakeUpCard_Face}  from '../../components/makeupcard.js';
import {MakeUpCard_Eye, MakeUpCard_Lip, MakeUpCard_Nose, MakeUpCard_Face}  from '../../components/makeupcard.js';
import { Btn_black } from "../../components/button.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';

function saveAsPdf() {
  const element = document.getElementById('wrap');
  const pdf = new jsPDF();
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  
  html2canvas(element, { useCORS: true }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pdfWidth * 0.5; // 이미지를 원하는 크기로 조정합니다.
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', (pdfWidth - imgWidth) / 2, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);
    console.log(pdf);
    pdf.save('makeup_method.pdf');
  });
}

function Makeup() {

  const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

  const MainTextContainer = styled.div`
    opacity: 1;
    animation: ${fadeInAnimation} 1s ease-in forwards;
  `;
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
    setthickLip(data['lip_thick']['lip']);
    console.log(data['lip_thick']['lip']);
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
    <div className='wrapper' id='wrap'>
      <div className='container'>
      <div className="makeup-method-01">
          <span class="makeup-method-01_sub1">
            현업 메이크업 전문가의 조언을 받아 화장법을 제안합니다.
            <br />
          </span>
          <span class="makeup-method-01_sub2">Makeup Method</span>
      </div>
      <MainTextContainer >
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
  );
};

export default React.memo(Makeup);