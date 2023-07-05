import React from "react";
import styled from "styled-components";

const TitleText = styled.div`
  color:#3A3A3A;
  font-weight: bold;
  width:250px;
  height:70px;
  font-family:PT Serif;
  font-size:40px;
  letter-spacing:0;
`;

const MethodBox_Eye = styled.div`
  border: 1px solid #3A3A3A;
  font-family:Noto Serif KR;
  color:#3A3A3A;
  font-weight: regular;
  box-sizing: border-box;
  overflow: visible;
  width: 600px;
  height: 800px;
  padding: 25px;
  margin-bottom: 50px;
`;

const MethodBox_Lip = styled.div`
  border: 1px solid #3A3A3A;
  font-family:Noto Serif KR;
  color:#3A3A3A;
  font-weight: regular;
  box-sizing: border-box;
  overflow: visible;
  width: 600px;
  height: 400px;
  padding: 25px;
  margin-bottom: 50px;
`;

const MethodBox_Nose = styled.div`
  border: 1px solid #3A3A3A;
  font-family:Noto Serif KR;
  color:#3A3A3A;
  font-weight: regular;
  box-sizing: border-box;
  overflow: visible;
  width: 600px;
  height: 250px;
  padding: 25px;
  margin-bottom: 50px;
`;

const MethodBox_Face = styled.div`
  border: 1px solid #3A3A3A;
  font-family:Noto Serif KR;
  color:#3A3A3A;
  font-weight: regular;
  box-sizing: border-box;
  overflow: visible;
  width: 600px;
  height: 400px;
  padding: 25px;
  margin-bottom: 50px;
`;

const MethodBoxText = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const MethodBoxText2 = styled.div`
`;


const MakeUpCard_Eye = ({title, obj1, obj2, obj3, text1, text2, text3, text4, text5, text6, text7}) => {
  return (
    <div>
    <TitleText>{title}</TitleText>
    <MethodBox_Eye>
      <MethodBoxText>{obj1}</MethodBoxText>
      <MethodBoxText2>- 섀도우 : {text1}</MethodBoxText2>
      <br></br>
      <MethodBoxText>{obj2}</MethodBoxText>
      <MethodBoxText2>- 섀도우 : {text2}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 아이라인 : {text3}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 마스카라 : {text4}</MethodBoxText2>
      <br></br>
      <MethodBoxText>{obj3}</MethodBoxText>
      <MethodBoxText2>- 섀도우 : {text5}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 아이라인 : {text6}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 마스카라 : {text7}</MethodBoxText2>
    </MethodBox_Eye>
    </div>
  );
};

const MakeUpCard_Lip = ({title, obj1, obj2, text1, text2}) => {
    return (
      <div>
      <TitleText>{title}</TitleText>
      <MethodBox_Lip>
        <MethodBoxText>{obj1}</MethodBoxText>
        <MethodBoxText2>- {text1}</MethodBoxText2>
        <br></br>
        <MethodBoxText>{obj2}</MethodBoxText>
        <MethodBoxText2>- {text2}</MethodBoxText2>
      </MethodBox_Lip>
      </div>
    );

};

const MakeUpCard_Nose = ({title, obj1, obj2, text1, text2}) => {
  return (
    <div>
    <TitleText>{title}</TitleText>
    <MethodBox_Nose>
      <MethodBoxText>{obj1}</MethodBoxText>
      <MethodBoxText2>- {text1}</MethodBoxText2>
      <br></br>
      <MethodBoxText>{obj2}</MethodBoxText>
      <MethodBoxText2>- {text2}</MethodBoxText2>
    </MethodBox_Nose>
    </div>
  );

};

const MakeUpCard_Face = ({title, obj1, text1, text2, text3}) => {
  return (
    <div>
    <TitleText>{title}</TitleText>
    <MethodBox_Face>
      <MethodBoxText>{obj1}</MethodBoxText>
      <MethodBoxText2>- 아이브로우 : {text1}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 블러셔 : {text2}</MethodBoxText2>
      <br></br>
      <MethodBoxText2>- 섀딩 : {text3}</MethodBoxText2>
    </MethodBox_Face>
    </div>
  );

};

export {MakeUpCard_Eye,MakeUpCard_Lip, MakeUpCard_Nose, MakeUpCard_Face };