import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Home/home.js'
function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Main/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;