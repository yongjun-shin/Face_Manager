import styled,{keyframes} from 'styled-components';
import {ReactComponent as Face} from './svgs/face.svg';

const P = styled.p`
    font-size: 18px;
    width: 487px;
    margin-bottom: 30px;
`;

const boxFade = keyframes`
0 {
    opacity: 0;
    transform: translateY(0);    
}
50% {
    opacity: 1;
    transform: translateY(-30px);
}
100% {
    opacity: 0;
    transform: translateY(0);
}
`;

const Box = styled(Face)`
  width: 400px;
  height: 400px;
  background: none;
  animation: ${boxFade} 2s 1s infinite linear alternate;
`;

export function Ani1() {

    return (
        <div style={{display:'flex', justifyContent:'center' }}>
         
            <Box></Box>
           
            <div style={{marginLeft:'162px', display:'flex', alignItems:'center'}}>
                <div>
                    <P>AI 기술을 활용한 얼굴 특징 추출 기법으로 <br/> 얼굴 특징에 맞는 화장법, 화장품을 추천합니다. </P>
                    <P>Face Manager와 함께 <br/>고유의 방법으로 당신의 얼굴을 가꿔보세요.  </P>
                </div>
            </div>
        </div>
    );
}

export default Ani1;