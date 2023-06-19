import React from "react";
import styled from "styled-components";
import { Btn_home } from "../components/button.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-shrink: 0;
  margin: 0rem 10.2rem 24rem 10.2rem;
  width: ${props => props.width};
`;

const ImageWrapper = styled.img`
  flex-shrink: 0;
  height: ${props => props.height};
  margin-right: ${props => props.marginRight};
  object-fit: contain;
  vertical-align: top;
  width: ${props => props.width};
`;

const TextWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const TitleText = styled.div`
  font-family: 'Noto Serif KR', serif;
  align-items: center;
  text-decoration: underline;
  text-underline-position: under;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  font-size: 2.2rem;
  font-weight: 700;
  height: 3rem;
  justify-content: center;
  line-height: 1.325;
  margin-bottom: 18.9rem;
  white-space: nowrap;
  width: 17.2rem;
  font-family: 'PT Serif';
`;

const Text1 = styled.div`
  font-family: 'Noto Serif KR', serif;
  flex-shrink: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.435;
  white-space: nowrap;
  margin: 1.6rem 0rem;
`;

const Text2 = styled.div`
  font-family: 'Noto Serif KR', serif;
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.435;
  margin-bottom: 23.6rem;
  text-align: right;
  white-space: nowrap;
`;

const TextBox = ({ containerWidth, imageUrl, marginRight, imageWidth, imageHeight, title, text1, text2}) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/detect");
  };

  return (
    <Container width={containerWidth}>
      <ImageWrapper img src={imageUrl} marginRight={marginRight} width={imageWidth} height={imageHeight}></ImageWrapper>
      <TextWrapper>
        <TitleText>{title}</TitleText>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
        <Btn_home text="화장품 추천받기" onClick={handleBtnClick}/>
      </TextWrapper>
    </Container>
  );
};

export default TextBox;