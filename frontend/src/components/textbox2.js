import React from "react";
import styled from "styled-components";
import { Btn_home } from "../components/button.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-shrink: 0;
  margin: 0rem 10.2rem 24rem 10.2rem;
`;

const ImageWrapper = styled.img`
  flex-shrink: 0;
  height: ${props => props.height};
  margin-left: ${props => props.imageMarginLeft};
  object-fit: ${props => props.objectFit};
  vertical-align: top;
  width: ${props => props.width};
  margin-top: 11rem;
`;

const TextWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 11rem;
  vertical-align: text-top;
  margin-left: ${props => props.textMarginLeft};
`;

const TitleText = styled.div`
  font-family: 'Noto Serif KR', serif;
  align-items: center;
  text-decoration: underline;
  text-underline-position: under;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 700;
  height: 3rem;
  line-height: 1.325;
  margin-bottom: 2.9rem;
  white-space: nowrap;
  width: 17.2rem;
  font-family: 'PT Serif';
`;

const Text1 = styled.div`
  font-family: 'Noto Serif KR', serif;
  flex-shrink: 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.435;
  white-space: nowrap;
  margin: 1.6rem 0rem;
`;

const Text2 = styled.div`
  font-family: 'Noto Serif KR', serif;
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.435;
  text-align: right;
  white-space: pre-wrap;
`;

const Text3 = styled.div`
  font-family: 'Noto Serif KR', serif;
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.435;
  margin-bottom: 5.6rem;
  text-align: right;
  white-space: pre-wrap;
`;

const TextBox2 = ({ textMarginLeft, objectFit, containerWidth, imageMarginLeft, imageUrl, imageWidth, imageHeight, title, text1, text2, text3, buttonText, path}) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const handleBtnClick = () => {
    scrollToTop();
    navigate(path);
  };

  return (
    <Container width={containerWidth}>
      <TextWrapper textMarginLeft={textMarginLeft}>
        <TitleText>{title}</TitleText>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
        <Text3>{text3}</Text3>
        <Btn_home text={buttonText} onClick={handleBtnClick} style={{width: "235px", height: "52px", fontSize: "19px"}}/>
      </TextWrapper>
      <ImageWrapper img src={imageUrl} width={imageWidth} height={imageHeight} objectFit={objectFit} imageMarginLeft={imageMarginLeft}></ImageWrapper>
    </Container>
  );
};

export default TextBox2;
