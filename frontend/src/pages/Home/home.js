import React from "react";
import TextBox from "../../components/textbox.js"

function Main(){
    return(
    <div className='wrapper'>
        {/* <TextBox
        imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyzBoaUq1AW1k3si-3Ajp26Cq7cNZSN7g-h6B6UaCNSF9TaJQN"
        imageWidth="45.4rem"
        imageHeight="68rem"
        title="Makeup Method"
        text1="내게 맞는 화장법"
        text2="자신의 얼굴형, 눈, 코, 입 특징에 맞는 화장법을 추천받아보세요."
        containerMargin="0rem 10.2rem 24rem 10.2rem"
        containerWidth="calc(100% - 20.4rem)"
        marginRight="24.8rem"
        /> */}
        <TextBox
        imageUrl="https://vrthumb.imagetoday.co.kr/2023/02/16/ta0180t000056.jpg"
        imageWidth="76.7rem"
        imageHeight="59.7rem"
        title="Cosmetics"
        text1="내게 맞는 화장품"
        text2="피부타입을 입력하고 나에게 맞는 화장품을 만나보세요."
        // containerMargin="0rem 10.2rem 24rem 10.2rem"
        // containerWidth="100%"
        // marginRight="14.1rem"
        />
        {/* <TextBox
        imageUrl="https://cdn.thinkdoctor.co.kr/news/photo/202010/6571_11816_741.jpg"
        imageWidth="56.3rem"
        imageHeight="50rem"
        title="Physiognomy"
        text1="나는 어떤 사람일까?"
        text2="AI로 얼굴 특징을 파악해 관상을 봐드립니다. 당신의 성격과 기질을 알아보세요."
        containerMargin="0rem 10.3rem 24rem 0rem"
        containerWidth="calc(100% - 10.3rem)"
        marginRight="23.7rem"
        /> */}

    </div>)
}

export default Main;