
import React from 'react';
import { useState } from 'react';
import Navi from '../src/components/nav.js';
import Footer from '../src/components/footer.js';
import Nav_my from './components/nav_mypage.js';
import {Btn_black, Btn_beige, Btn_home} from './components/button.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.js';
import FaceDetect from './pages/FaceDetect/facedetect.js';
import Makeup from './pages/MakeupMethod/makeupmethod.js';
import Pricing from './pages/Pricing/pricing.js';
import QnA from './pages/QnA/qna.js';

//import Login from './pages/Login/login.js';
import Login from './pages/Login/login2.js';
//import Join from './pages/Join/join.js';
import Join from './pages/Join/join2.js';
import About from './pages/About/about.js';

import MemberInfo from './pages/MemberInfo/member.js';
import CreateImage from './pages/CreateImage/createimage.js';
import CreateImageResult from './pages/CreateImage/createimage_res.js';
import History from './pages/History/history.js';
import './App.css';

import Exer from './pages/Exer/exer.js';
import BoardCreate from './components/boardcreate.js';
import BoardEdit from './components/boardedit.js';

function App() {
    const btn_click = (event) => {
        event.preventDefault();
    };
    const [content, setContent] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [username, setUsername] = useState();

    return (

        <BrowserRouter>
            <div>
                <Navi/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/detect" element={<FaceDetect/>} />
                    <Route path="/makeup" element={<Makeup />} />
                    <Route path="/pricing" element={<Pricing/>} />
                    <Route path="/qna" element={<QnA setId={setId} id={id} setContent={setContent} setTitle={setTitle} setUsername={setUsername} title={title} username={username}/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/join" element={<Join/>} />
                    <Route path="/about" element={<About/>} />

                    <Route path="/exer" element={<Exer/>} />

                    <Route path="/member" element={<MemberInfo/>} />
                    <Route path="/createimage" element={<CreateImage/>} />
                    <Route path="/createimage_res" element={<CreateImageResult/>} />
                    <Route path="/history" element={<History/>} />
                    <Route path="/createboard" element={<BoardCreate setTitle={setTitle} setUsername={setUsername} setId={setId} setContent={setContent}/>} />
                    <Route path="/editboard" element={<BoardEdit id={id} content={content} title={title} username={username} setId={setId} setContent={setContent} setTitle={setTitle} setUsername={setUsername} />} />
                </Routes>
                <Footer></Footer>
            </div>
            </BrowserRouter>
    );
  }
  

export default App;
