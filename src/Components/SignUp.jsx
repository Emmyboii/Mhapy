import { useEffect, useState } from 'react';
import Logo from '../Images/Logo.svg';
import google from '../Images/google.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [signUpData, setSignUpDate] = useState({
        full_name: '',
        email: '',
        password: ''
    })
    const [allInputBoxFilled, setAllInputBoxFilled] = useState(false)
    // const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (signUpData.full_name && signUpData.email && signUpData.password) {
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
                    <img src={Logo} alt="" />
                    <h1 className='sp:text-[40px] text-[32px] font-medium text-[#252525]'>Welcome to Mhapy</h1>
                    <p className='text-[#25252580] text-[15px] mt-[-10px] font-normal'>Already have an account?
                        <Link to='/login'>
                            <span className='text-[16px] ml-2 underline cursor-pointer text-[#4285F4]'>Log in</span>
                        </Link>
                    </p>
                    <div className='flex w-full rounded cursor-pointer items-center justify-center border-[1.38px] border-[#4285F4] py-3 px-[22px] gap-3'>
                        <img src={google} alt="" />
                        <p className='text-[#4285F4] font-medium text-[16px]'>Sign up with Google</p>
                    </div>
                    <div className='text-[#55555580] flex gap-4 items-center'>
                        <hr className='w-[130px] border-[1.33px] border-[#55555580] mt-1' /><span className='text-[16px] font-medium'>or</span> <hr className='w-[130px] mt-1 border-[#55555580] border-[1.33px]' />
                    </div>
                    <form className='w-full gap-6 flex flex-col'>
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="text"
                            name="full_name"
                            value={signUpData.full_name}
                            onChange={handleInputChange}
                            id=""
                            placeholder='Full name'
                        />
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
                            className={`text-white rounded-md p-3 gap-2 outline-none w-full ${allInputBoxFilled ? 'bg-[#441890]' : 'bg-[#4418904D]'}`}
                            type='submit'
                            disabled={!allInputBoxFilled}
                        >
                            Continue
                        </button>
                        <p className='sp:text-[14px] text-[12px] font-medium w-full text-[#25252580]'>
                            By signing up, you agree to our <span className='underline cursor-pointer text-[#4285F4]'>Terms & Conditions, Terms of Service</span> and acknowledge
                            that you’ve read our <span className='underline cursor-pointer text-[#4285F4]'>Privacy Policy.</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp