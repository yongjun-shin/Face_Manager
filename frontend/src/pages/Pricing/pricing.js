import './pricing.css'
import Btn_black from '../../components/button';
import React, { useState } from 'react';

export function Pricing() {
    const [selectedBox, setSelectedBox] = useState('');

    const handleRadioChange = (boxId) => {
        setSelectedBox(boxId);
    };

    return (
        <div class='container'>
            <div class='title'>
                <h1 class='title_txt'>내게 맞는 Face Manager  선택하기</h1>
            </div>
            <div class='title'>
                <div class='radio'>
                    <div class={`box ${selectedBox === 'std' ? 'checked' : ''}`} style={{backgroundColor:'#EBD4D4'}}>
                        <div class='box_in'>
                            <input type='radio' id='std' name='radio_group' checked={selectedBox==='std'} onChange={() => handleRadioChange('std')}/>
                            <div>
                                <div class='radio_label'>
                                    <span style={{fontWeight:'900', fontSize:'20px'}}>
                                        Standard
                                    </span>
                                    $1.00/per
                                </div>
                                나에게 맞는 화장법을 기반으로한 이미지 제공 및 화장법 소개
                                <br />
                                24시간 이내 제공
                            </div>
                        </div>
                    </div>
                    <div class={`box ${selectedBox === 'exp' ? 'checked' : ''}`} style={{backgroundColor:'#EDC3C3'}}>
                        <div class='box_in'>
                            <input type='radio' id='exp' name='radio_group' checked={selectedBox==='exp'} onChange={() => handleRadioChange('exp')}/>
                            <div>
                                <div class='radio_label'>
                                    <span style={{fontWeight:'900', fontSize:'20px'}}>
                                        Express
                                    </span>
                                    $2.00/per
                                </div>
                                Standard + 화장품 추천 및 관상 소개
                                <br />
                                12시간 이내 제공
                            </div>
                        </div>
                    </div>
                    <div class={`box ${selectedBox === 'pre' ? 'checked' : ''}`} style={{backgroundColor:'#E9ABAB'}}>
                        <div class='box_in'>
                            <input type='radio' id='pre' name='radio_group' checked={selectedBox==='pre'} onChange={() => handleRadioChange('pre')}/>
                            <div>
                                <div class='radio_label'>
                                    <span style={{fontWeight:'900', fontSize:'20px'}}>
                                        Premium
                                    </span>
                                    $3.00/per
                                </div>
                                Standard + 화장품 추천 및 관상 소개
                                <br />
                                1시간 이내 제공
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='title_btn'>
                <Btn_black text={'Pay'} style={{width:'157px', height:'43px', fontSize:'12px', backgroundColor:'#3A3A3A'}}></Btn_black>
            </div>
        </div>
    );
}


export default Pricing;
