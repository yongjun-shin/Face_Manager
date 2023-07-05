import './pricing.css'
import Btn_black from '../../components/button';
import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import Modal from '../../components/modal';
import { useNavigate } from "react-router-dom";

export function Pricing() {
    const [selectedBox, setSelectedBox] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [buy, setBuy] = useState('');
    const [price, setPrice] = useState('');
    const [flg, setFlg] = useState(0);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      }

    useEffect(() => {
        const boxElement = document.querySelector('.box.checked');
        if (boxElement) {
            const pElements = boxElement.querySelectorAll('p');
            const buyValue = pElements[0].textContent;
            const priceValue = pElements[1].textContent;

            setBuy(buyValue);
            setPrice(priceValue);
        }
    }, [selectedBox]);

    const handleRadioChange = (boxId) => {
        setSelectedBox(boxId);
    };
    const openModal = () => {
        if(selectedBox){
            setModalOpen(true);
        }
        else {
            Swal.fire({
                icon: "warning",
                title: "결제 에러",
                text: '결제를 원하는 상품을 선택해주세요.',
                confirmButtonText: "확인",
            })
        }
    }
    const closeModal = (val) => {
        setModalOpen(false);
        if(val === 1){
            setFlg(1);
        }
    }

    if(flg === 1){
        scrollToTop();
        navigate('/member');
    }

    return (
        <div class='container'>
            <div class='title'>
                <h1 class='title_txt'>내게 맞는 Face Manager  선택하기</h1>
            </div>
            <div class='title'>
                <div class='radio'>
                    <div class={`box ${selectedBox === 'std' ? 'checked' : ''}`} style={{backgroundColor:'#EBD4D4'}} onClick={() => handleRadioChange('std')}>
                        <div class='box_in'>
                            <input type='radio' id='std' name='radio_group' checked={selectedBox==='std'} onChange={() => handleRadioChange('std')}/>
                            <div>
                                <div class='radio_label'>
                                    <p style={{fontWeight:'900', fontSize:'20px'}}>Standard</p>
                                    <p>$1.00/per</p>
                                </div>
                                나에게 맞는 화장법을 기반으로한 이미지 제공 및 화장법 소개
                                <br />
                                24시간 이내 제공
                            </div>
                        </div>
                    </div>
                    <div class={`box ${selectedBox === 'exp' ? 'checked' : ''}`} style={{backgroundColor:'#EDC3C3'}} onClick={() => handleRadioChange('exp')}>
                        <div class='box_in'>
                            <input type='radio' id='exp' name='radio_group' checked={selectedBox==='exp'} onChange={() => handleRadioChange('exp')}/>
                            <div>
                                <div class='radio_label'>
                                    <p style={{fontWeight:'900', fontSize:'20px'}}>Express</p>
                                    <p>$2.00/per</p>
                                </div>
                                Standard + 화장품 추천 및 관상 소개
                                <br />
                                12시간 이내 제공
                            </div>
                        </div>
                    </div>
                    <div class={`box ${selectedBox === 'pre' ? 'checked' : ''}`} style={{backgroundColor:'#E9ABAB'}} onClick={() => handleRadioChange('pre')}>
                        <div class='box_in'>
                            <input type='radio' id='pre' name='radio_group' checked={selectedBox==='pre'} onChange={() => handleRadioChange('pre')}/>
                            <div>
                                <div class='radio_label'>
                                    <p style={{fontWeight:'900', fontSize:'20px'}}>Premium</p>
                                    <p>$3.00/per</p>
                                </div>
                                Standard + 화장품 추천 및 관상 소개
                                <br />
                                1시간 이내 제공
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='title_btn'>
                <Btn_black text={'Pay'} style={{width:'157px', height:'43px', fontSize:'12px', backgroundColor:'#3A3A3A'}} onClick={openModal} />
            </div>
            <Modal open={modalOpen} close={closeModal} header='결제방식' buy={buy} price={price}>
            </Modal>
        </div>
    );
}


export default Pricing;
