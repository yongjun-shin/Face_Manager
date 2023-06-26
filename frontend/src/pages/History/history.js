import styled from "styled-components";
import Nav_my from "../../components/nav_mypage";
import Recommend from "../../components/recommendation";
import './history.css';

const P = styled.p`
    color: rgba(95, 90, 81, 0.80);
    font-size: 20px;
    text-align: center;
`;

export function History() {
    let name = localStorage.getItem('username');
    if (name === null){
        name = '홍길동';
    }

    return (
        <div className='history'>
            <div className='history_con'>
                <Nav_my/>
                <div style={{marginLeft:'166px'}}>
                    <div className="recommend">
                        <p className="title">화장품 추천</p>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <div className='fadein'>
                                <P><span style={{color:'black'}}>{name}</span>님의 피부타입을 분석하여<br/>기초 화장품을 추천드립니다.</P>
                                <P style={{marginTop:'70px'}}>Face Manager를 통해<br/><span style={{color:'black'}}>{name}</span>님의<br/>피부타입에 맞는 화장품을 사용해보세요.</P>
                            </div>
                            <Recommend url={['https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015608136ko.jpg?l=ko','https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016723604ko.jpg?l=ko', 'https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017345501ko.jpg?l=ko']}
                            title={['페리페라 잉크무드 매트스틱', '페리페라 스피디 스키니 브로우 마스카라', '[대용량] 스킨푸드 피치뽀송 멀티 피니시 파우더 15g']}
                            path={['https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000156081&dispCatNo=100000100020006&trackingCd=Cat100000100020006_Small', 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000167236&dispCatNo=1000001000200070004&trackingCd=Cat1000001000200070004_Small', 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000173455&dispCatNo=1000001000200010004&trackingCd=Cat1000001000200010004_Small']}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default History;
