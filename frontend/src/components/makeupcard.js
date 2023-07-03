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

const MethodBox = styled.div`
  border: 1px solid #3A3A3A;
  font-family:Noto Serif KR;
  color:#3A3A3A;
  font-weight: bold;
  box-sizing: border-box;
  overflow: visible;
  width: 600px;
  height: 130px;
  padding: 25px;
  margin-bottom: 50px;
`;

const MethodBoxText = styled.div`
  margin-bottom: 10px;
`;

const MethodBoxText2 = styled.div`
`;

const MethodBoxText3 = styled.div`
`;

const MakeUpCard = ({title, text,text0, text1, text2, text3}) => {
  return (
    <div>
    <TitleText>{title}</TitleText>
    <MethodBox>
      <MethodBoxText>{text}, {text0}, {text1}</MethodBoxText>
      <MethodBoxText2>{text2}</MethodBoxText2>
      <MethodBoxText3>{text3}</MethodBoxText3>
    </MethodBox>
    </div>
  );
};

export default MakeUpCard;