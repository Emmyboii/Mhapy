import { useEffect, useRef, useState } from 'react';
import Logo from '../Images/Logo.svg';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    const [verificationCode, setVerificationCode] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: ''
    });
    const [allInputBoxFilled, setAllInputBoxFilled] = useState(false);
    const [verified, setVerified] = useState(false);

    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    useEffect(() => {
        const allFilled = Object.values(verificationCode).every(val => val !== '');
        setAllInputBoxFilled(allFilled);
    }, [verificationCode]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;

        // Only allow digits
        if (!/^\d?$/.test(value)) return;

        setVerificationCode(prev => ({
            ...prev,
            [name]: value
        }));

        // Move forward if value entered
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }

        // Move backward on backspace
        if (value === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const { key } = e;

        if (key === 'Backspace') {
            if (verificationCode[`code${index + 1}`] === '' && index > 0) {
                const prev = `code${index}`;
                inputRefs[index - 1].current.focus();
                setVerificationCode(prevState => ({
                    ...prevState,
                    [prev]: ''
                }));
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-[25px] bg-white">
            <Link className="sp:flex hidden absolute top-5 left-10 items-center gap-1" to='/'>
                <img className="size-[30px]" src={Logo} alt="Logo" />
                <p className="text-[#441890] font-bold text-[27px]">mhapy</p>
            </Link>

            <div className="sp:w-[490px] w-[357px] gap-7 text-center flex flex-col items-center justify-center">
                <h1 className="text-[#252525] sp:text-[40px] text-[25px] font-medium">
                    {verified ? 'Verification successful' : 'Verify your Email address'}
                </h1>

                {!verified ? (
                    <>
                        <div>
                            <p className="text-[#25252580] text-[15px] mt-[-10px] font-normal">
                                We have sent a verification code to
                            </p>
                            <p className="text-[#25252580] text-[15px] font-normal">
                                optimusprime@gmail.com
                            </p>
                        </div>

                        <form
                            className="w-full gap-6 flex flex-col"
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (allInputBoxFilled) setVerified(true);
                            }}
                        >
                            <div className="flex mx-auto gap-5">
                                {['code1', 'code2', 'code3', 'code4'].map((code, index) => (
                                    <input
                                        key={code}
                                        className="w-[70px] text-[50px] caret-transparent text-center h-[66px] text-[#252525] border-[1.54px] border-[#25252580] rounded-[5px]"
                                        type="password"
                                        maxLength={1}
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        autoComplete="one-time-code"
                                        value={verificationCode[code]}
                                        ref={inputRefs[index]}
                                        onChange={(e) => handleInputChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        name={code}

                                    />
                                ))}
                            </div>

                            <p className="text-[#25252580] text-[14px] font-medium w-[320px] mx-auto">
                                Didn’t receive the verification code? It might take a bit of time,
                                request a new code in <span className="text-[#4285F4]">00:11</span>
                            </p>

                            <button
                                className={`text-white mt-14 rounded-md p-3 gap-2 outline-none w-full ${allInputBoxFilled ? 'bg-[#441890] cursor-pointer' : 'bg-[#4418904D] cursor-not-allowed'}`}
                                type="submit"
                                disabled={!allInputBoxFilled}
                            >
                                Continue
                            </button>
                        </form>
                    </>
                ) : (
                    <div className='w-full'>
                        <p className="text-[#25252580] text-[15px] mt-[-10px] font-normal">
                            Your Email has been successfully verified.
                        </p>
                        <p className="text-[#25252580] text-[15px] font-normal">
                            Click the button below to continue
                        </p>
                        <button
                            className={`text-white mt-14 rounded-md p-3 gap-2 outline-none w-full bg-[#441890] cursor-pointer'`}
                            type="submit"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
