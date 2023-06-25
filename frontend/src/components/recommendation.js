import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const Nswiper = styled(Swiper)`
    width: 250px;
    height: 400px;
    background-color: #ECE9E3;

    .swiper-button-prev, .swiper-button-next {
        color: rgba(95, 90, 81, 0.80); 
        top: 320px;
        width: 10px; /* 원하는 크기로 설정하세요 */
        height: 30px; /* 원하는 크기로 설정하세요 */
        border-width: 1px; /* 원하는 두께로 설정하세요 */   
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 1.3rem ;
        font-weight: 600 ;
    }

    .swiper-pagination {
        top: 354px !important ;
        left: -90px !important ;
    }
    .swiper-pagination-bullet-active {
        background-color: #3A3A3A;
    }
`;
const Nslide = styled(SwiperSlide)`

`;
const Img = styled.img`
    width:250px;
    height:250px;
`;
const Btn = styled.button`
    color: white;
    font-size: 10px;
    font-family: Noto Serif KR;

    width: 80px;
    height: 25px;
    background-color: #3A3A3A;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:active {
        background: rgba(0, 0, 0, 0.5);
    }
    float: right;
`;
const Div = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    justify-content: center;
`;
const P = styled.p`
    width: 230px;
    height: 44px;
    font-size: 15px;
    color: rgba(95, 90, 81, 0.80);
`;

export function CustomSwiper(props) {
    const goWeb = (url) => {
        window.open(url, "_blank","noopener")
    };
    return (
        <div>
            <Nswiper slidesPerView={1} navigation pagination={{clickable:true}}>
            {props.url.map((item, index) => (
                <Nslide key={index}>
                    <Img src={item} />
                    <Div>
                        <div style={{width:'230px', height:'380px'}}>
                            <P>{props.title[index]}</P>
                            <div style={{marginTop:'55px'}}>
                                <Btn onClick={() => goWeb(props.path[index])}>판매 사이트</Btn>
                            </div>
                        </div>
                    </Div>
                </Nslide>
            ))}
            </Nswiper>
        </div>
    );
}


export function Recommend(props) {

    return (
        <div>
            <CustomSwiper url={props.url} title={props.title} path={props.path}/>
        </div>
    );
}

export default Recommend;