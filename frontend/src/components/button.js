import styled from "styled-components";
import { ReactComponent as Arrow } from "./svgs/Arrow_right.svg";

const Black = styled.button`
    width: 313px;
    height: 106px;
    background: #000000;
    border-radius: 10px;
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;
    cursor: pointer;

    &:active {
        background: #333333;
    }
`;

const Beige = styled.button`
    width: 264px;
    height: 94px;
    background: rgba(222, 216, 204, 0.6);
    border: 1px solid #DCD5C6;
    box-shadow: 5px 7px 4px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    font-family: 'Noto Serif KR';
    font-weight: 600;
    font-size: 32px;
    color: #6F685A;
    white-space: pre-wrap;
    cursor: pointer;

    &:active {
        transform: translateY(1px);
    }
`;

const Home = styled.button`
    width: 380px;
    height: 71px;
    background: #E8E5DF;
    border: 1px solid #62615F;
    font-family: 'Noto Serif KR';
    font-weight: 400;
    font-size: 26px;
    color: #62615F;
    cursor: pointer;

    &:active {
        background: #D8D5CF;
    }
`;

export function Btn_black({text, onClick}) {
    return (
        <Black onClick={onClick}>{text}</Black>
    );
}
export function Btn_beige({text, onClick}) {
    return (
        <Beige onClick={onClick}>{text}</Beige>
    );
}
export function Btn_home({text, onClick}) {
    return (
        <Home onClick={onClick}>
            <div>
                {text}
                <Arrow style={{marginLeft:'13px'}}/>
            </div>
        </Home>
    );
}

export default Btn_black;