import { useEffect, useState } from 'react';
import google from '../Images/google.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signUpData, setSignUpDate] = useState({
        email: '',
        password: ''
    })
    const [allInputBoxFilled, setAllInputBoxFilled] = useState(false)
    // const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (signUpData.email && signUpData.password) {
            setAllInputBoxFilled(true)
        } else {
            setAllInputBoxFilled(false)
        }
    }, [signUpData])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSignUpDate(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="mx-auto my-20 relative text-center flex flex-col items-center justify-center">
                <div className='sp:w-[441px] w-[353px] gap-5 flex flex-col items-center justify-center'>
                    <h1 className='sp:text-[40px] text-[32px] font-medium text-[#252525]'>Log in</h1>
                    <p className='text-[#25252580] text-[15px] mt-[-10px] font-normal'>Already have an account?
                        <Link to='/signup'>
                            <span className='text-[16px] ml-2 underline cursor-pointer text-[#4285F4]'>Create account</span>
                        </Link>
                    </p>
                    <div className='flex w-full rounded cursor-pointer items-center justify-center border-[1.38px] border-[#4285F4] py-3 px-[22px] gap-3'>
                        <img src={google} alt="" />
                        <p className='text-[#4285F4] font-medium text-[16px]'>Log in with Google</p>
                    </div>
                    <div className='text-[#55555580] flex gap-4 items-center'>
                        <hr className='w-[130px] border-[1.33px] border-[#55555580] mt-1' /><span className='text-[16px] font-medium'>or</span> <hr className='w-[130px] mt-1 border-[#55555580] border-[1.33px]' />
                    </div>
                    <form className='w-full gap-6 flex flex-col'>
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="text"
                            name="email"
                            value={signUpData.email}
                            onChange={handleInputChange}
                            id=""
                            placeholder='Email'
                        />
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="text"
                            name="password"
                            value={signUpData.password}
                            onChange={handleInputChange}
                            id=""
                            placeholder='Enter your password'
                        />
                        <button
                            className={`text-white rounded-md p-3 gap-2 outline-none w-full ${allInputBoxFilled ? 'bg-[#441890] hover:bg-[#441890CC]' : 'bg-[#4418904D]'}`}
                            type='submit'
                            disabled={!allInputBoxFilled}
                        >
                            Continue
                        </button>
                        <p className='sp:text-[16px] underline text-[14px] font-medium w-full text-[#4285F4]'>Forgot your password?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login