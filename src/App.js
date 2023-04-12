//import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignUp/>} />
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
