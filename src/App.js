/*eslint-disable*/
//import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/main'

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>                  
                <Route path="/" element={<SignUp/>} />
                <Route path="/main" element={<Main/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
