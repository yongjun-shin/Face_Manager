import React from "react";
import TextBox from "../../components/textbox.js"
import TextBox2 from "../../components/textbox2.js"
import Ani1 from "../../components/animation1.js";

function Main(){
    return(
    <div className="homewrapper" style={{marginTop: "100px", display:'flex', justifyContent:'center', paddingBottom: "0"}}>
        <div>
            <Ani1 />
            <TextBox2
            imageUrl="https://i.pinimg.com/474x/45/26/ac/4526ac70ec7c25ae7962a7da072e32f2.jpg"
            title="Face Detect"
            text1="얼굴 특징 추출"
            text2="얼굴 인식 AI 를 활용해 황금 비율의 마스크와 비교하여"
            text3="눈, 코, 입, 얼굴형 등의 얼굴 특징을 추출합니다."
            imageWidth="26.6rem"
            imageHeight="24.8rem"
            objectFit="cover"
            buttonText="내 얼굴 인식하기"
            imageMarginLeft="3.3rem"
            textMarginLeft="3rem"
            path="/detect"
            />
            <TextBox
            imageUrl="https://media1.popsugar-assets.com/files/thumbor/7MDRnJvNXKszKV5tadaInw69VBA/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/12/695/n/1922153/3fd80f315b47769b5568e5.71527235_.jpg"
            title="Makeup Method"
            text1="내게 맞는 화장법"
            text2="자신의 얼굴형, 눈, 코, 입 특징에 맞는 화장법을 추천받아보세요."
            imageWidth="23.4rem"
            imageHeight="37rem"
            objectFit="contain"
            buttonText="화장법 추천받기"
            titleMarginBottom="6.9rem"
            textMarginBottom="10.6rem"
            marginRight="2rem"
            path="/makeup"
            />
            <TextBox
            imageUrl="https://vrthumb.imagetoday.co.kr/2023/02/16/ta0180t000056.jpg"
            title="Cosmetics"
            text1="내게 맞는 화장품"
            text2="피부타입을 입력하고 나에게 맞는 화장품을 만나보세요."
            imageHeight="18rem"
            objectFit="contain"
            buttonText="화장품 추천받기"
            textMarginBottom="37px"
            marginRight="2rem"
            path="/history"
            />
            <TextBox2
            imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREtLYrSZEViY1BHfepYIrf6Z3cxQUsL9huSOthG0uuKq15DD3J"
            title="Image Generation"
            text1="이 화장 괜찮을까?"
            text2="추천 받은 화장법이 자신의 얼굴에 어울리는지"
            text3="마이페이지에서 확인할 수 있습니다."
            imageWidth="30.4rem"
            imageHeight="27rem"
            objectFit="contain"
            buttonText="화장 확인해보기"
            imageMarginLeft="5.3rem"
            textMarginLeft="3rem"
            path="/history"
            />
            <TextBox
            imageUrl="https://cdn.thinkdoctor.co.kr/news/photo/202010/6571_11816_741.jpg"
            title="Physiognomy"
            text1="나는 어떤 사람일까?"
            text2="AI 로 얼굴 특징을 파악해 관상을 봐드립니다."
            text3="당신의 성격과 기질을 알아보세요."
            imageWidth="28.3rem"
            imageHeight="21rem"
            objectFit="contain"
            buttonText="화장 확인해보기"
            textMarginBottom="2rem"
            marginRight="8rem"
            path="/physiognomy"
            />
        </div>
    </div>)
}

export default Main;