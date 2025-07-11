import { useEffect, useState } from 'react';
import Logo from '../Images/Logo.svg';
import google from '../Images/google.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()

    const [signUpData, setSignUpDate] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const [allInputBoxFilled, setAllInputBoxFilled] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState({ message: '', type: '' })
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (signUpData.first_name && signUpData.last_name && signUpData.email && signUpData.password) {
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

    const signUp = async (e) => {
        e.preventDefault()

        setSubmitting(true)

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData)
            })

            const data = await res.json()

            if (!res.ok) {
                setModal(true)
                if (data.email) {
                    setStatus({ message: data.email, type: 'error' })
                } else if (data.password) {
                    setStatus({ message: data.password, type: 'error' })
                }
            } else {
                console.log('Signup successful:', data);
                setModal(true)
                setStatus({ message: 'Signup Successful', type: 'success' })

                setTimeout(() => {
                    navigate('/auth/login');
                }, 1850);
            }
        } catch (error) {
            console.error('Sign Up error:', error);
        } finally {
            setSubmitting(false)
        }
    }

    useEffect(() => {
        if (modal) {
            const timer = setTimeout(() => {
                setModal(false);
                setStatus({ message: '', type: '' });
            }, 3500);

            return () => clearTimeout(timer);
        }
    }, [modal]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="mx-auto my-20 relative text-center flex flex-col items-center justify-center">
                <div className='sp:w-[441px] w-[353px] gap-5 flex flex-col items-center justify-center'>
                    <img src={Logo} alt="" />
                    <h1 className='sp:text-[40px] text-[32px] font-medium text-[#252525]'>Welcome to Mhapy</h1>
                    <p className='text-[#25252580] text-[15px] mt-[-10px] font-normal'>Already have an account?
                        <Link to='/auth/login'>
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
                    <form onSubmit={signUp} className='w-full gap-6 flex flex-col'>
                        {modal && (
                            <div className={`${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white absolute top-[270px] z-50 right-0 p-3 rounded-md flex items-center text-center justify-between`}>
                                <p className='text-[16px] 3xl:text-[22px] font-bold'>
                                    {status.message}
                                </p>
                            </div>
                        )}
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="text"
                            name="first_name"
                            value={signUpData.first_name}
                            onChange={handleInputChange}
                            id=""
                            required
                            placeholder='First name'
                        />
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="text"
                            name="last_name"
                            value={signUpData.last_name}
                            onChange={handleInputChange}
                            id=""
                            required
                            placeholder='Last name'
                        />
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="email"
                            name="email"
                            value={signUpData.email}
                            onChange={handleInputChange}
                            id=""
                            required
                            placeholder='Email'
                        />
                        <input
                            className='border-[1.1px] text-[#252525] text-[16px] placeholder:text-[#25252580] font-medium outline-none border-[#25252580] p-3 gap-2 rounded-[2px] w-full'
                            type="password"
                            name="password"
                            value={signUpData.password}
                            onChange={handleInputChange}
                            id=""
                            required
                            minLength={8}
                            placeholder='Enter your password'
                        />
                        <p className='text-start mt-[-20px] text-black/60'>8+ characters</p>
                        <button
                            className={`text-white rounded-md p-3 gap-2 outline-none w-full ${allInputBoxFilled && !submitting ? 'bg-[#441890] hover:bg-[#441890CC] cursor-pointer' : allInputBoxFilled && submitting ? 'bg-[#4418904D] cursor-not-allowed' : 'bg-[#4418904D] cursor-not-allowed'}`}
                            type='submit'
                            disabled={!allInputBoxFilled || submitting}
                        >
                            {submitting ? 'Loading...' : 'Continue'}
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