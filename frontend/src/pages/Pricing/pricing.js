import './pricing.css'
import Btn_black from '../../components/button';

export function Pricing() {
    return (
        <div class='container'>
            <div class='title'>
                <h1 class='title_txt'>내게 맞는 Face Manager  선택하기</h1>
            </div>
            <div class='title'>
                <div class='radio'>
                    <div class='std'>
                        <div class='box' style={{backgroundColor:'#EBD4D4'}}></div>
                    </div>
                    <div class='exp'>
                        <div class='box' style={{backgroundColor:'#EDC3C3'}}></div>
                    </div>
                    <div class='prm'>
                        <div class='box' style={{backgroundColor:'#E9ABAB'}}></div>
                    </div>
                </div>
            </div>
            <div class='title'>
                <Btn_black text={'Pay'} style={{width:'157px', height:'43px', fontSize:'12px', backgroundColor:'#3A3A3A'}}></Btn_black>
            </div>
        </div>
    );
}


export default Pricing;
