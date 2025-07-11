import mastercard from '../Images/mastercard.svg';
import { IoMdCheckmark } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { RiVisaLine } from "react-icons/ri";
import { FaArrowLeft, FaStripe } from 'react-icons/fa6';

const PaymentMethod = ({ paymentPlan, continueClicked, setContinueClicked }) => {
    const [freq, setFreq] = useState('monthly')
    const [LgScreens, setLgScreens] = useState(window.innerWidth > 900)

    useEffect(() => {
        const handleResize = () => {
            setLgScreens(window.innerWidth > 900)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [LgScreens])

    return (
        <div className='flex justify-between 3xl:justify-center gap-5'>
            <>
                {(!continueClicked || LgScreens) && (
                    <div className='bg-white pt-[60px] pb-[66px] px-[30px] w-full 3xl:w-[20%] rounded-[10px] flex flex-col gap-[55px] shadow-custom-sm'>
                        <div className='flex flex-col gap-[50px] rounded-[10px] py-[22px] px-4 bg-[#F2EAFF]'>
                            <p className='text-[24px] font-[450] text-[#252525]'>Payment Method</p>
                            <hr className='border border-[#25252533] w-full' />
                            <div className='flex justify-between gap-2 items-center w-full'>
                                <div>
                                    <label className='flex items-center gap-2 cursor-pointer' htmlFor="mastercard">
                                        <input type="radio" name="cardType" id="mastercard" />
                                        <div id='mastercard' className='bg-white sd:py-[21px] py-1 sd:px-[29px] px-4 rounded border border-[#25252533]'>
                                            <img className='size-' src={mastercard} alt="" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex items-center gap-2 cursor-pointer' htmlFor="visa">
                                        <input type="radio" name="cardType" id="visa" />
                                        <div id='mastercard' className='bg-white sd:py-[21px] py-1 sd:px-[41px] px-4 rounded border border-[#25252533]'>
                                            <RiVisaLine className='size-7' />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex items-center gap-2 cursor-pointer' htmlFor="stripe">
                                        <input type="radio" name="cardType" id="stripe" />
                                        <div id='mastercard' className='bg-white sd:py-[21px] py-1 sd:px-[40px] px-4 rounded border border-[#25252533]'>
                                            <FaStripe className='size-7' />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='text-[16px] font-[450]'>Card Holder</p>
                            <input
                                className='border-[#25252533] border rounded w-full py-2'
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='text-[16px] font-[450]'>Card Number</p>
                            <input
                                className='border-[#25252533] border rounded w-full py-2'
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4 w-full'>
                            <div className='flex items-center gap-[13px]'>
                                <p className='sd:text-[16px] text-[12px] font-[450]'>Expiry Date</p>
                                <input
                                    className='border-[#25252533] max-w-[123px] w-1/2 border rounded py-2'
                                    type="text"
                                    name=""
                                    id=""
                                />
                            </div>
                            <div className='flex items-center gap-[13px]'>
                                <p className='sd:text-[16px] text-[12px] font-[450]'>CVC</p>
                                <input
                                    className='border-[#25252533] max-w-[123px] w-[100%] border rounded py-2'
                                    type="text"
                                    name=""
                                    id=""
                                />
                            </div>
                        </div>
                        <div>
                            <label className='flex gap-2 cursor-pointer' htmlFor="save">
                                <input type="checkbox" name="" id="save" />
                                <p id='save' className='text-[16px] font-[450]'>Save my details for future purpose</p>
                            </label>
                        </div>
                        <button onClick={() => {
                            setContinueClicked(true)
                            window.scrollTo(0, 0)
                        }}
                            className='bg-[#441890] hover:bg-[#441890CC] text-white py-[10px] px-[27px] mc:hidden block rounded-[6px]'>Continue</button>
                    </div>
                )}
                {(continueClicked || LgScreens) && (
                    <>
                        {paymentPlan === 'basic' ? (
                            <div className='w-full flex flex-col items-start'>
                                <p
                                    onClick={() => {
                                        setContinueClicked(false)
                                        window.scrollTo(0, 0)
                                    }}
                                    className='cursor-pointer mc:hidden flex items-center gap-2 font-medium pb-2 text-lg'>
                                    <FaArrowLeft />
                                    Go back
                                </p>
                                <div className='bg-white pt-[60px] w-full 3xl:w-[20%] pb-[66px] px-[30px] rounded-[10px] flex flex-col gap-[55px] shadow-custom-sm'>
                                    <div className='flex flex-col gap-[50px] rounded-[10px] py-[22px] pb-[52px] px-4 bg-[#EBF3FF]'>
                                        <p className='text-[24px] font-[450] text-[#252525]'>Basic Plan</p>
                                        <hr className='border border-[#25252533] w-full' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className='text-[#252525] font-[450] text-base'>$19/<span className='text-black font-normal'>Monthly or</span>  $199/<span className='text-black font-normal'>Yearly</span></p>
                                        </div>
                                    </div>
                                    <div className="py-[7px] px-[9px] flex flex-col gap-[14px]">
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <hr className='border border-[#25252533] w-full' />
                                    <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] w-full justify-between">
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'monthly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('monthly')
                                            }}
                                        >
                                            Monthly / $19
                                        </p>
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'yearly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('yearly')
                                            }}
                                        >
                                            Yealy / $199
                                        </p>
                                    </div>
                                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[10px] px-[27px] rounded-[6px]'>Confirm Payment</button>
                                </div>
                            </div>
                        ) : paymentPlan === 'business' ? (
                            <div className='w-full flex flex-col items-start'>
                                <p
                                    onClick={() => {
                                        setContinueClicked(false)
                                        window.scrollTo(0, 0)
                                    }}
                                    className='cursor-pointer mc:hidden flex items-center gap-2 font-medium pb-2 text-lg'>
                                    <FaArrowLeft />
                                    Go back
                                </p>
                                <div className='bg-white pt-[60px] w-full 3xl:w-[20%] pb-[66px] px-[30px] rounded-[10px] flex flex-col gap-[55px] shadow-custom-sm'>
                                    <div className='flex flex-col gap-[50px] rounded-[10px] py-[22px] pb-[52px] px-4 bg-[#FFF7E9]'>
                                        <p className='text-[24px] font-[450] text-[#252525]'>Business Plan</p>
                                        <hr className='border border-[#25252533] w-full' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className='text-[#252525] font-[450] text-base'>$29/<span className='text-black font-normal'>Monthly or</span>  $199/<span className='text-black font-normal'>Yearly</span></p>
                                        </div>
                                    </div>
                                    <div className="py-[7px] px-[9px] flex flex-col gap-[14px]">
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <hr className='border border-[#25252533] w-full' />
                                    <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] w-full justify-between">
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'monthly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('monthly')
                                            }}
                                        >
                                            Monthly / $29
                                        </p>
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'yearly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('yearly')
                                            }}
                                        >
                                            Yealy / $199
                                        </p>
                                    </div>
                                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[10px] px-[27px] rounded-[6px]'>Confirm Payment</button>
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex flex-col items-start'>
                                <p
                                    onClick={() => {
                                        setContinueClicked(false)
                                        window.scrollTo(0, 0)
                                    }}
                                    className='cursor-pointer mc:hidden flex items-center gap-2 font-medium pb-2 text-lg'>
                                    <FaArrowLeft />
                                    Go back
                                </p>
                                <div className='bg-white pt-[60px] w-full 3xl:w-[20%] pb-[66px] px-[30px] rounded-[10px] flex flex-col gap-[55px] shadow-custom-sm'>
                                    <div className='flex flex-col gap-[50px] rounded-[10px] py-[22px] pb-[52px] px-4 bg-[#EDFFEF]'>
                                        <p className='text-[24px] font-[450] text-[#252525]'>Enterprise Plan</p>
                                        <hr className='border border-[#25252533] w-full' />
                                        <div className='flex justify-between items-center w-full'>
                                            <p className='text-[#252525] font-[450] text-base'>$49/<span className='text-black font-normal'>Monthly or</span>  $199/<span className='text-black font-normal'>Yearly</span></p>
                                        </div>
                                    </div>
                                    <div className="py-[7px] px-[9px] flex flex-col gap-[14px]">
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div className="flex items-center gap-[14.23px] text-[16px] font-normal">
                                            <IoMdCheckmark className="text-[#25252533]" />
                                            <p className="text-[#25252599]">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <hr className='border border-[#25252533] w-full' />
                                    <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] w-full justify-between">
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'monthly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('monthly')
                                            }}
                                        >
                                            Monthly / $49
                                        </p>
                                        <p
                                            className={`cursor-pointer text-[13px] sm:text-[15px] py-2 px-5 ${freq === 'yearly' ? 'bg-white rounded-lg' : ''}`}
                                            onClick={() => {
                                                setFreq('yearly')
                                            }}
                                        >
                                            Yealy / $199
                                        </p>
                                    </div>
                                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[10px] px-[27px] rounded-[6px]'>Confirm Payment</button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </>
        </div >
    )
}

export default PaymentMethod