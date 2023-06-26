import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import { ReactComponent as MemberImg } from '../svgs/member_info.svg';
import './member.css';

function Boxes() {
    const data = [
      {
        date: '2023-05-08 09:35',
        payment: 'Express',
        method: '신용카드',
        amount: '$2.00/per',
      },
      {
        date: '2023-06-08 14:35',
        payment: 'Premium',
        method: '계좌이체',
        amount: '$3.00/per',
      },
      
    ];
  
    return (
      <div className="box_con">
        <div className="box">
            <div className="box_in">
                <p>날짜</p>
            </div>
            <div className="box_in">
                <p>결제내역</p>
            </div>
            <div className="box_in">
                <p>결제방식</p>
            </div>
            <div className="box_in">
                <p>결제금액</p>
            </div>
        </div>
        <hr style={{width: '780px', float:'left', marginTop:'0px', marginBottom:'0px'}}/>
        {data.map((item, index) => (
          <div className="box" key={index}>
            <div className="box_in">
              <p>{item.date}</p>
            </div>
            <div className="box_in">
              <p>{item.payment}</p>
            </div>
            <div className="box_in">
              <p>{item.method}</p>
            </div>
            <div className="box_in">
              <p>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

function Skin() {
  let type = null;
  type = 'DSNT';
  let color = ['#537AA5', '#7E7F83', '#288E9A', '#515FA8'];
  let content = [];

  if(type[0] === 'D'){
    content.push('피지 분비량과 수분 보유량 모두 적어 거칠고 각질과 주름이 잘 생기는 타입');
  }
  else if(type[0] === 'O'){
    content.push('피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입');
  }

  if(type[1] === 'S'){
    content.push('피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입');
  }
  else if(type[1] === 'R'){
    content.push('피부 장벽이 견고해 외부적인 스트레스에 대해 견디는 힘이 강한 타입');
  }

  if(type[2] === 'N'){
    content.push('멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입');
  }
  else if(type[2] === 'P'){
    content.push('멜라닌 활성도가 높아 기미, 주근깨 혹은 잡티 등 눈에 보이는 색소가 많은 타입');
  }

  if(type[3] === 'T'){
    content.push('피부 결이 고르고 주름이 적어 탄력이 있는 타입');
  }
  else if(type[3] === 'W'){
    content.push('피부 결이 고르지 않고 주름이 많은 타입');
  }

  return (
    <div className="skin">
      <div className="skin_con">
      {
        content.map((item, index) => (
          <div key={index} className='line'>
            <div className="circle" style={{backgroundColor: color[index%color.length]}}>
              <p>{type[index]}</p>
            </div>
            <p>{item}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

const P = styled.p`
  font-size:24px; 
  margin-left:20px; 
  margin-bottom:15px;
`;

export function MemberInfo() {
    // 추후 데이터베이스에서 image 받아오면 img변수에 데이터 삽입
    let img = null;
    if (img === null){
        img = (<MemberImg style={{width:'150px', height:'150px'}}/>)
    }
    // 이름, email, 회원등급도 데이터베이스에 받아오면 대체
    let name = localStorage.getItem('username');
    if (name === null){
        name = '홍길동';
    }
    let email = localStorage.getItem('email');
    if (email === null){
        email = 'popobaboya@gmail.com';
    }
    let rank = null;
    if (rank === null){
        rank = 'Premium';
    }

    return (
        <div class='member'>
            <div class='member_con'>
                <Nav_my/>
                <div style={{marginLeft:'166px'}}>
                    <div class='first'>
                        {img}
                        <div class='texts'>
                            <p style={{fontSize:'18px'}}><span style={{fontSize:'24px', marginBottom:'12px'}}>{name}</span><br/><br/>{email}<br/><span style={{fontWeight:'bold'}}>{rank}</span></p>
                        </div>
                    </div>
                    <div class='second'>
                        <P>결제내역</P>
                        <Boxes />
                    </div>
                    <div class='third'>
                        <P>피부타입</P>
                        <Skin />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MemberInfo;
