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
      <div>
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

export function MemberInfo() {
    // 추후 데이터베이스에서 image 받아오면 img변수에 데이터 삽입
    let img = null;
    if (img === null){
        img = (<MemberImg style={{width:'150px', height:'150px'}}/>)
    }
    // 이름, email, 회원등급도 데이터베이스에 받아오면 대체
    let name = null;
    if (name === null){
        name = '홍길동';
    }
    let email = null;
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
                        <p style={{fontSize:'24px', marginLeft:'20px'}}>결제내역</p>
                        <Boxes />
                    </div>
                    <div class='third'>
                        <p style={{fontSize:'24px', marginLeft:'20px'}}>피부타입</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MemberInfo;
