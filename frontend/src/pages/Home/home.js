import React from "react";
import TextBox from "../../components/textbox.js"

function Main(){
    return(
    <div className="wrapper">
        <TextBox
        imageUrl="https://media1.popsugar-assets.com/files/thumbor/7MDRnJvNXKszKV5tadaInw69VBA/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/12/695/n/1922153/3fd80f315b47769b5568e5.71527235_.jpg"
        title="Makeup Method"
        text1="내게 맞는 화장법"
        text2="자신의 얼굴형, 눈, 코, 입 특징에 맞는 화장법을 추천받아보세요."
        containerWidth="calc(100% - 20.4rem)"
        marginRight="24.8rem"
        imageWidth="45.4rem"
        imageHeight="68rem"
        />
        <TextBox
        imageUrl="https://vrthumb.imagetoday.co.kr/2023/02/16/ta0180t000056.jpg"
        title="Cosmetics"
        text1="내게 맞는 화장품"
        text2="피부타입을 입력하고 나에게 맞는 화장품을 만나보세요."
        containerWidth="133.7rem"
        marginRight="14.1rem"
        imageHeight="68rem"
        />
        
        <TextBox
        imageUrl="https://cdn.thinkdoctor.co.kr/news/photo/202010/6571_11816_741.jpg"
        title="Physiognomy"
        text1="나는 어떤 사람일까?"
        text2="AI 로 얼굴 특징을 파악해 관상을 봐드립니다. 당신의 성격과 기질을 알아보세요."
        containerWidth="calc(100% - 10.3rem)"
        marginRight="23.7rem"
        imageWidth="56.3rem"
        imageHeight="50rem"
        />
    </div>)
}

export default Main;
