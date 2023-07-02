import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Btn_black from './button';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;
const OpenModal = styled.div`
    width: 450px;
    height: 450px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.3rem;
    background-color: #ECE4DB;
    animation: modal-show 0.3s;

    @keyframes modal-show {
        from {
          opacity: 0;
          margin-top: -50px;
        }
        to {
          opacity: 1;
          margin-top: 0;
        }
      }
`;

const Header = styled.header`
    padding: 16px 64px 16px 16px;
    background-color: #A08A6A;
    font-weight: bold;
`;
const Div = styled.div`
    background-color: #B1A99E;
    width: 150px;
    height: 50px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    input[type='radio'] {
        display: none;
    }

    ${props => props.isSelected && `
        border: 4px solid #A0988E;
    `}
`;


export function Modal(props) {
    const { open, close, header, buy, price } = props;
    const [selectedBox, setSelectedBox] = useState('');
    const [pay, setPay] = useState('');
    let content = null;

    const handleRadioChange = (boxId) => {
        setSelectedBox(boxId);
    };
    const handleDivClick = (boxId) => {
        setSelectedBox(boxId);
    };

    useEffect(() => {
        if(selectedBox === 'card'){
            setPay('신용카드'); 
        }
        else if(selectedBox === 'account'){
            setPay('계좌이체');
        }
    }, [selectedBox]);

    const handleSubmit = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해준 후, 두 자리 숫자로 만듦
        const day = String(now.getDate()).padStart(2, '0'); // 일도 두 자리 숫자로 만듦
        const hours = String(now.getHours()).padStart(2, '0'); // 시간도 두 자리 숫자로 만듦
        const minutes = String(now.getMinutes()).padStart(2, '0'); // 분도 두 자리 숫자로 만듦
        const time = `${year}-${month}-${day} ${hours}:${minutes}`;

        const pk = localStorage.getItem('pk')
        const name = localStorage.getItem('username')
        const data = {
            date: time,
            pay_type: buy,
            method: pay,
            price: price,
            user_name: name,
            user_id: pk
        }
        console.log(data);
        
        axios.post('http://127.0.0.1:8000/pricing/', data)
            .then(response => {
                console.log('Data submitted successfully');
                localStorage.setItem('rank', data.pay_type);
                close();
            })
            .catch(error => {
                console.error('Failed to submit data:', error);
            });

        close();
    };

    if(open === true){
        document.body.style.overflowY = 'hidden';
        content = (
            <ModalContainer>
            <OpenModal>
                <Header>
                    {header}
                </Header>
                <div >
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'350px', height:'250px'}}>
                            <Div isSelected={selectedBox==='card'} onClick={() => handleDivClick('card')}>
                                <input type='radio' id='card' name='radio_modal' checked={selectedBox==='card'} onChange={() => handleRadioChange('card')}/>
                                <p>신용카드</p>
                            </Div>
                            <Div isSelected={selectedBox==='account'} onClick={() => handleDivClick('account')}>
                                <input type='radio' id='account' name='radio_modal' checked={selectedBox==='account'} onChange={() => handleRadioChange('account')}/>
                                <p>계좌이체</p>
                            </Div>
                        </div>
                    </div>
                </div>
                <footer style={{display:'flex', justifyContent:'center'}}>
                    <div style={{display:'flex', justifyContent:'space-between', width:'250px'}}>
                        <Btn_black text='Pay' style={{width:'100px', height:'30px', fontSize:'10px', backgroundColor:'#3A3A3A'}}onClick={handleSubmit}/>
                        <Btn_black text='Cancel' style={{width:'100px', height:'30px', fontSize:'10px', backgroundColor:'#3A3A3A'}}onClick={close}/>
                    </div>
                </footer>
            </OpenModal>
            </ModalContainer>
        );
    }
    else{
        document.body.style.overflowY = 'auto';
    }
    return (
        <div>
            {content}
        </div>
    );
}

export default Modal;