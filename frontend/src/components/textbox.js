import React from "react";
import styled from "styled-components";

const WholeContainer = styled.div`
  flex-shrink: 0;
  height: 59.7rem;
  margin: 0rem 10.3rem 24rem 0rem;
  position: relative;
  width: 133.7rem;
`;

const LineStyle = styled.div`
  background-color: #000000;
  height: 0.1rem;
  left: 122.9rem;
  position: absolute;
  top: 2.9rem;
  width: 10rem;
`;

const TitleText = styled.p`
  color: #000000;
  font-family: PT Serif, 'Source Sans Pro';
  font-size: 2.2rem;
  font-weight: 700;
  height: 3rem;
  left: 122.5rem;
  line-height: 1.325;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 10.6rem;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 59.7rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 133.7rem;
`;

const ImageWrapper = styled.div`
  background-position: -15.2581rem -2.8252rem;
  background-size: 136.582% 109.465%;
  flex-shrink: 0;
  height: ${props => props.height};
  margin-right: 14.1rem;
  position: relative;
  width: ${props => props.width};
`;

const TextWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: calc(100% - 23.9rem);
  margin: 17.2rem 0rem 6.7rem 0rem;
`;

const TextBox1 = styled.p`
  color: #000000;
  flex-shrink: 0;
  font-family: Noto Serif KR, 'Source Sans Pro';
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.435;
  margin: 0rem 7.1rem 1.4rem 0rem;
  white-space: nowrap;
`;

const TextBox2 = styled.p`
  color: #000000;
  flex-shrink: 0;
  font-family: Noto Serif KR, 'Source Sans Pro';
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.435;
  margin-bottom: 17.1rem;
  max-width: 20.7rem;
  text-align: right;
`;

const TextBox = ({ imageUrl, text1, text2, title, imageWidth, imageHeight}) => {
  return (
    <WholeContainer>
        <LineStyle></LineStyle>
        <TitleText>{title}</TitleText>
        <Container>
          <ImageWrapper ><img src={imageUrl} style={{ width: imageWidth, height: imageHeight }}/></ImageWrapper>
          <TextWrapper>
            <TextBox1>{text1}</TextBox1>
            <TextBox2>{text2}</TextBox2>
          </TextWrapper>
        </Container>
    </WholeContainer>
  );
};


export default TextBox;

// const Container = styled.div`
//   align-items: flex-start;
//   display: flex;
//   flex-shrink: 0;
//   margin: ${props => props.margin};
//   width: ${props => props.width};
// `;

// const ImageWrapper = styled.div`
//   background-position: -15.2581rem -2.8252rem;
//   flex-shrink: 0;
//   height: ${props => props.height};
//   margin-right: ${props => props.marginRight};
//   position: relative;
//   width: ${props => props.width};
//   object-fit: cover;
//   vertical-align: top;
// `;


// const TextWrapper = styled.div`
//     align-items: flex-end;
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;
// `;

// const TitleWrapper = styled.div`
//     align-items: center;
//     border-bottom: solid 0.1rem #000000;
//     box-sizing: border-box;
//     color: #000000;
//     display: flex;
//     flex-shrink: 0;
//     font-family: PT Serif, 'Source Sans Pro';
//     font-size: 2.2rem;
//     font-weight: 700;
//     height: 3rem;
//     justify-content: center;
//     line-height: 1.325;
//     margin: 0rem 0.6rem 14.2rem 0rem;
//     white-space: nowrap;
//     width: 10.6rem;
// `;

// const TextBox1 = styled.p`
//     color: #000000;
//     flex-shrink: 0;
//     font-family: Noto Serif KR, 'Source Sans Pro';
//     font-size: 3rem;
//     font-weight: 600;
//     line-height: 1.435;
//     margin: 0rem 7.1rem 1.4rem 0rem;
//     white-space: nowrap;
// `;

// const TextBox2 = styled.p`
//     color: #000000;
//     flex-shrink: 0;
//     font-family: Noto Serif KR, 'Source Sans Pro';
//     font-size: 2rem;
//     font-weight: 400;
//     line-height: 1.435;
//     margin-bottom: 17.1rem;
//     max-width: 20.7rem;
//     text-align: right;
// `;

// const TextBox = ({ imageUrl, title, text1, text2, buttonText, imageHeight, imageWidth, containerMargin, containerWidth, marginRight}) => {
//   return (
//     <Container margin={containerMargin} width={containerWidth}>
//         <ImageWrapper margin-right={marginRight}><img src={imageUrl} style={{ width: imageWidth, height: imageHeight }}/></ImageWrapper>
//       <TextWrapper>
//         <TitleWrapper>{title}</TitleWrapper>
//         <TextBox1>{text1}</TextBox1>
//         <TextBox2>{text2}</TextBox2>

//       </TextWrapper>
//     </Container>
//   );
// };

// export default TextBox;