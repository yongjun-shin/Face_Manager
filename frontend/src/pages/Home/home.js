import React from "react";
import TextBox from "../../components/textbox.js"

function Main(){
    return(
    <div className='wrapper'>
        <TextBox
        imageUrl="https://vrthumb.imagetoday.co.kr/2023/02/16/ta0180t000056.jpg"
        imageWidth="76.7rem"
        imageHeight="59.7rem"
        title="Cosmetics"
        text1="내게 맞는 화장품"
        text2="피부타입을 입력하고 나에게 맞는 화장품을 만나보세요."
        />
    </div>)
}

export default Main;
