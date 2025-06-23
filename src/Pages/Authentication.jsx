import { Routes, Route } from 'react-router-dom';
import SignUp from '../Components/SignUp';
import VerifyEmail from '../Components/VerifyEmail';
import Login from '../Components/Login';

const Authentication = () => {
    return (
        <div>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/verifyemail' element={<VerifyEmail />} />
            </Routes>
        </div>
    )
}

export default Authentication