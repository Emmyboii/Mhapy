import eyeOpen from '../Images/eyeOpen.svg';
import eyeClose from '../Images/eyeClose.svg';
import { useState } from 'react';

const PasswordSettings = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <div className='border w-full border-[#25252533] bg-white flex-col flex gap-10 rounded-[10px] lg:py-[38px] py-5 lg:px-16 sd:px-10 px-[17px]'>
            <p className='text-[#252525] text-[20px] font-medium'>Password Settings</p>
            <div className='flex flex-col items-start gap-[25px] sd:w-[450px]'>
                <div className='w-full flex flex-col relative gap-3'>
                    <p className='text-[#252525] text-[16px] font-[450]'>Current Password</p>
                    <div className='flex items-center gap-1'>
                        <input
                            className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                            type={visibility ? 'text' : 'password'}
                            name=""
                            id=""
                            placeholder="Enter Password"
                        />
                        <img
                            onClick={() => setVisibility(!visibility)}
                            className='absolute right-4 cursor-pointer' src={visibility ? eyeClose : eyeOpen} alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col relative gap-3'>
                    <p className='text-[#252525] text-[16px] font-[450]'>New Password</p>
                    <div className='flex items-center gap-1'>
                        <input
                            className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                            type={visibility ? 'text' : 'password'}
                            name=""
                            id=""
                            placeholder="Enter Password"
                        />
                        <img
                            onClick={() => setVisibility(!visibility)}
                            className='absolute right-4 cursor-pointer' src={visibility ? eyeClose : eyeOpen} alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col relative gap-3'>
                    <p className='text-[#252525] text-[16px] font-[450]'>Confirm Password</p>
                    <div className='flex items-center gap-1'>
                        <input
                            className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                            type={visibility ? 'text' : 'password'}
                            name=""
                            id=""
                            placeholder="Enter Password"
                        />
                        <img
                            onClick={() => setVisibility(!visibility)}
                            className='absolute right-4 cursor-pointer' src={visibility ? eyeClose : eyeOpen} alt="" />
                    </div>
                </div>
                <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-3 px-[60px] sd:rounded-md rounded sd:w-auto w-full'>Change Password</button>
            </div>
        </div>
    )
}

export default PasswordSettings