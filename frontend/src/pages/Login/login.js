import styled from 'styled-components';
import {Btn_black} from '../../components/button.js';


export function Login() {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{marginTop:'58px', fontFamily:'Noto Serif KR', fontWeight:'bold', fontSize:'30px'}}>
                <a>로그인</a>
                <hr style={{marginTop:'-1px' ,border:'1px solid #3A3A3A'}}/>
            </div>
        </div>
    );
}


export default Login;
