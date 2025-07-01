import { useState } from 'react';
import deactivateAccount from '../Images/deactivateAccount.svg';
import deleteAccount from '../Images/deleteAccount.svg';

const Deactivation = () => {

    const [agreed, setAgreed] = useState(false)

    return (
        <div className='border w-full border-[#25252533] bg-white flex-col flex gap-10 rounded-[10px] lg:py-[38px] py-5 lg:px-16 sd:px-10 px-[17px]'>
            <p className='text-[#252525] text-[20px] font-medium'>Deactivate Account</p>
            <div className="flex gap-[14px] items-center  w-full">
                <img className="size-[50px]" src={deactivateAccount} alt="" />
                <div className="flex flex-col truncate gap-1">
                    <p className="text-[16px] truncate text-[#000000] font-medium">Deactivate Account</p>
                    <p className="text-[16px] truncate text-[#25252580] font-[450]">You can activate your account within 30 days using your existing login credentials</p>
                </div>
            </div>
            <div className="flex gap-[14px] items-center  w-full">
                <img className="size-[50px]" src={deleteAccount} alt="" />
                <div className="flex flex-col truncate gap-1">
                    <p className="text-[16px] truncate text-[#000000] font-medium">Delete Account</p>
                    <p className="text-[16px] truncate text-[#25252580] font-[450]">You can’t re-activate your account again, your account will be deleted permanently</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-3'>
                <p className='text-[#25252580] text-[16px] font-[450]'>What are your reasons? (optional)</p>
                <textarea
                    className='border-[#D0D5DD] h-[140px] resize-none border-[1.2px] shadow-custom-input outline-none placeholder:text-[#25252580] text-[#25252580] py-3 px-[16px] rounded-lg w-full'
                    name=""
                    id=""
                    placeholder="Enter a description..."
                />
            </div>
            <hr className='border border-[#25252533] sm:hidden block' />
            <div className='flex flex-col gap-[6px]'>
                <p className="text-[16px] truncate text-[#000000] font-medium">Account Deactivate or Delete Terms</p>
                <label className='flex items-center gap-[10px]' htmlFor="agree">
                    <input
                        type="checkbox"
                        name=""
                        id="agree"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                    />
                    <p id='agree' className='text-[#25252580] text-[16px] font-[400]'>I agree with your <span className='text-[#546FFF] cursor-pointer'> Terms and conditions</span> to Delete or deactivate my account</p>
                </label>
            </div>
            <div className='flex items-center gap-[14px]'>
                <button className={`text-white py-3 px-[20px] sd:rounded-md rounded sd:w-auto w-full ${agreed ? 'bg-[#441890] hover:bg-[#441890CC] cursor-pointer' : 'bg-[#441890CC] cursor-not-allowed'}`}>Deactivate Account</button>
                <button className={`text-[#DA0303] py-3 px-[20px] sd:rounded-md rounded sd:w-auto w-full ${agreed ? 'bg-[#E1021847] hover:bg-[#e102183e] cursor-pointer' : 'bg-[#e102183e] cursor-not-allowed'}`}>Delete Account</button>
            </div>
        </div>
    )
}

export default Deactivation