import Navi from '../src/components/nav.js';
import Footer from '../src/components/footer.js';
import Nav_my from './components/nav_mypage.js';
import {Btn_black, Btn_beige, Btn_home} from './components/button.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.js';
import FaceDetect from './pages/FaceDetect/facedetect.js';
import Pricing from './pages/Pricing/pricing.js';
import QnA from './pages/QnA/qna.js';
import Login from './pages/Login/login.js';
import Join from './pages/Join/join.js';
import About from './pages/About/about.js';

import MemberInfo from './pages/MemberInfo/member.js';
import Physiognomy from './pages/Physiognomy/physiognomy.js';
import CreateImage from './pages/CreateImage/createimage.js';
import History from './pages/History/history.js';
import './App.css';

function App() {
    const btn_click = (event) => {
        event.preventDefault();
    };

    return (
        <BrowserRouter>
            <div>
                <Navi/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/detect" element={<FaceDetect/>} />
                    <Route path="/pricing" element={<Pricing/>} />
                    <Route path="/qna" element={<QnA/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/join" element={<Join/>} />
                    <Route path="/about" element={<About/>} />

                    <Route path="/member" element={<MemberInfo/>} />
                    <Route path="/physiognomy" element={<Physiognomy/>} />
                    <Route path="/createimage" element={<CreateImage/>} />
                    <Route path="/history" element={<History/>} />
                </Routes>
                <Footer></Footer>
            </div>

            {/* <div>
                <Navi/>
                <Nav_my/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/detect" element={<FaceDetect/>} />
                    <Route path="/pricing" element={<Pricing/>} />
                    <Route path="/qna" element={<QnA/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/join" element={<Join/>} />

                    <Route path="/member" element={<MemberInfo/>} />
                    <Route path="/physiognomy" element={<Physiognomy/>} />
                    <Route path="/createimage" element={<CreateImage/>} />
                    <Route path="/history" element={<History/>} />
                </Routes>
                <div>
                    <img src={process.env.PUBLIC_URL + '/test.jpg'}></img>
                </div>
                <div style={{marginBottom:'15px', display:'flex', alignContent:'center', justifyContent:'space-between'}}>
                    <Btn_black text='Click' onClick={btn_click}></Btn_black>
                    <Btn_beige text={'얼굴분석\n바로가기'} onClick={btn_click}></Btn_beige>
                    <Btn_home text={'내 얼굴 인식하기'} onClick={btn_click}></Btn_home>
                </div>
                <Footer></Footer>
            </div> */}
        </BrowserRouter>
    );
}

export default App;