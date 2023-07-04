import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ReactComponent as MemberImg } from '../svgs/member_info.svg';
import { Btn_home } from "../../components/button.js";
import './member.css';



function Boxes(props) {
    let pay_history = null;
    const pk = localStorage.getItem('pk')

    const getDataByUserId = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8000/pricing/`);
        const d = response.data;
        const filteredData = d.filter(item => item.user_id === userId);
    
        return filteredData;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const filteredData = await getDataByUserId(pk);
          const selectedData = filteredData.map(item => {
            const { date, method, pay_type, price } = item;
            return { date, method, pay_type, price };
          });
          setData(selectedData);
        } catch (error) {
          // 에러 처리
        }
      };

      fetchData();
    }, [pk]);

    useEffect(() => {
      if (data.length > 0) {
        props.setRank(data[data.length - 1].pay_type);
      } else {
        props.setRank('None');
      }
    }, [data, props.setRank]);

    if(data.length === 0){
      pay_history = (<div className="box">
        <div className="box_in">
            <p>None</p>
        </div>
        <div className="box_in">
            <p>None</p>
        </div>
        <div className="box_in">
            <p>None</p>
        </div>
        <div className="box_in">
            <p>None</p>
        </div>
      </div>);
    } else {
      pay_history = (data.map((item, index) => (
        <div className="box" key={index}>
          <div className="box_in">
            <p>{item.date}</p>
          </div>
          <div className="box_in">
            <p>{item.pay_type}</p>
          </div>
          <div className="box_in">
            <p>{item.method}</p>
          </div>
          <div className="box_in">
            <p>{item.price}</p>
          </div>
        </div>
      )));
    }

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
        {pay_history}
      </div>
    );
  }

const P_skin = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 12px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
`
function Skin(props) {
  let type2 = 'dsnt';
  let color = ['#537AA5', '#7E7F83', '#288E9A', '#515FA8'];
  let content = [];
  let content2 = ['피지 분비량과 수분 보유량 모두 적어 거칠고 각질과 주름이 잘 생기는 타입', '피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입', '멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입', '피부 결이 고르고 주름이 적어 탄력이 있는 타입']
  let skin_history = null;

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  const btn_click = () => {
    scrollToTop();
    navigate('/detect');
  }

  const [data, setData] = useState([]);
  const pk = localStorage.getItem('pk')

  const getDataByUserId = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/faceinput/`);
      const d = response.data;
      const filteredData = d.filter(item => item.user_id === userId);
      return filteredData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredData = await getDataByUserId(pk);
        const selectedData = filteredData.map(item => {
          let { image, type_list } = item;
          return { image, type_list };
        });
        
        setData(selectedData);
      } catch (error) {
        // 에러 처리
      }
    };

    fetchData();
  }, [pk, setData]);

  useEffect(() => {
    if (data.length > 0) {
      props.setType(data[data.length - 1].type_list);
      localStorage.setItem('type', data[data.length - 1].type_list);
      props.setImg(<img src={`http://127.0.0.1:8000${data[data.length-1].image}`} alt="이미지" style={{width:'150px', height:'150px'}}/>);
    }
  }, [data, props.setType, props.setImg]);

  if(props.type === null){
    skin_history = (
      <div>
        <div style={{display:'flex', alignItems:'center', marginBottom:'20px', width:'680px'}}>
          <div>
            <P_skin>Face Detect 페이지에서 피부타입을 선택해주세요</P_skin>
            <P_skin>선택한 피부타입 정보를 보여드립니다</P_skin>
          </div>  
          <Btn_home text='Face Detect 바로가기' style={{fontSize:'15px', width:'250px', height:'40px',marginLeft:'25px'}} onClick={btn_click}/>
        </div>
        <Div>
          <div>
            <p style={{marginBottom:'10px'}}>예시)</p>
            <div style={{marginLeft:'25px', height:'170px', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
              {content2.map((item, index) => (
                <div key={index} className='line'>
                  <div className="circle" style={{backgroundColor: color[index%color.length], fontSize:'20px', width:'30px', height:'30px'}}>
                    <p>{type2[index].toUpperCase()}</p>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Div>
      </div>
    );
  } else {
      if(props.type[0] === 'd'){
        content.push('피지 분비량과 수분 보유량 모두 적어 거칠고 각질과 주름이 잘 생기는 타입');
      }
      else if(props.type[0] === 'o'){
        content.push('피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입');
      }
    
      if(props.type[1] === 's'){
        content.push('피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입');
      }
      else if(props.type[1] === 'r'){
        content.push('피부 장벽이 견고해 외부적인 스트레스에 대해 견디는 힘이 강한 타입');
      }
    
      if(props.type[2] === 'n'){
        content.push('멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입');
      }
      else if(props.type[2] === 'p'){
        content.push('멜라닌 활성도가 높아 기미, 주근깨 혹은 잡티 등 눈에 보이는 색소가 많은 타입');
      }
    
      if(props.type[3] === 't'){
        content.push('피부 결이 고르고 주름이 적어 탄력이 있는 타입');
      }
      else if(props.type[3] === 'w'){
        content.push('피부 결이 고르지 않고 주름이 많은 타입');
      }

    skin_history = (
      content.map((item, index) => (
        <div key={index} className='line'>
          <div className="circle" style={{backgroundColor: color[index%color.length]}}>
            <p>{props.type[index].toUpperCase()}</p>
          </div>
          <p>{item}</p>
        </div>
      ))
    );
  }

  return (
    <div className="skin">
      <div className="skin_con">
        {skin_history}
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
    const [img, setImg] = useState(localStorage.getItem('img'));
    const [type, setType] = useState(localStorage.getItem('type'));
    
    if (img === null){
      setImg(<MemberImg style={{width:'150px', height:'150px'}}/>);
    }

    let name = localStorage.getItem('username');
    if (name === null){
        name = '홍길동';
    }

    let email = localStorage.getItem('email');
    if (email === null){
        email = 'popobaboya@gmail.com';
    }

    let [rank, setRank] = useState('None');

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
                        <Boxes setRank={setRank}/>
                    </div>
                    <div class='third'>
                        <P>피부타입</P>
                        <Skin setImg={setImg} setType={setType} type={type}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MemberInfo;
