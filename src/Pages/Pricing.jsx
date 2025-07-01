import { useEffect, useState, useMemo } from "react";
import { IoMdCheckmark } from "react-icons/io";
import PaymentMethod from "../Components/PaymentMethod";
import { useLocation } from "react-router-dom";
import { useNavigationType } from "react-router-dom";

const Pricing = () => {

    const location = useLocation();
    const navigationType = useNavigationType();
const isReload = useMemo(() => {
        return performance.getEntriesByType("navigation")[0]?.type === "reload";
    }, []);
    const [paymentPlan, setPaymentPlan] = useState(() => {
        return localStorage.getItem('paymentPlan') || 'basic'
    })

    const [paymentMethod, setPaymentMethod] = useState(() => {
        const stored = localStorage.getItem('paymentMethod');
        return stored ? JSON.parse(stored) : false;
    })
    const [continueClicked, setContinueClicked] = useState(false)


    useEffect(() => {

        if (!isReload && location.pathname === '/pricing' && navigationType === 'POP') {
            localStorage.setItem('paymentMethod', JSON.stringify(false));
            setPaymentMethod(false)
            window.scrollTo(0, 0)
        }

        const handleBackspace = (e) => {
            if (e.key === 'Backspace' && location.pathname === '/pricing' && !continueClicked) {
                localStorage.setItem('paymentMethod', JSON.stringify(false));
                setPaymentMethod(false)
                window.scrollTo(0, 0)
            }
        };

        window.addEventListener('keydown', handleBackspace);

        return () => {
            window.removeEventListener('keydown', handleBackspace);
        };
    }, [location.pathname, continueClicked]);


    const onClickContinue1 = () => {
        localStorage.setItem('paymentPlan', 'basic')
        setPaymentPlan('basic')
        localStorage.setItem('paymentMethod', JSON.stringify(true))
        setPaymentMethod(true)
    }
    const onClickContinue2 = () => {
        localStorage.setItem('paymentPlan', 'business')
        setPaymentPlan('business')
        localStorage.setItem('paymentMethod', JSON.stringify(true))
        setPaymentMethod(true)
    }
    const onClickContinue3 = () => {
        localStorage.setItem('paymentPlan', 'enterprise')
        setPaymentPlan('enterprise')
        localStorage.setItem('paymentMethod', JSON.stringify(true))
        setPaymentMethod(true)
    }

    return (
        <div>
            <h1 className="text-[18px] text-[#252525] mk:hidden block font-medium mb-5">Pricing</h1>
            {!paymentMethod && (
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='text-[32px] font-[450px] text-[#252525]'>Pricing Plans</p>
                        <p className='text-[20px] font-[400px] text-[#25252580]'>Pricing Plans</p>
                    </div>
                    <div className="grid md:grid-cols-3 sd:grid-cols-2 grid-cols-1 items-center gap-[18px] w-full">
                        <div className='flex flex-col pb-[61px] w-full gap-[31px] shadow-custom-md shadow-[#00000014] rounded-[36px] p-'>
                            <div className='flex flex-col gap-[22px] shadow-md shadow-[#0000000F] rounded-[36px] p-[13px]'>
                                <div className='bg-[#EBF3FF] p-5 rounded-3xl flex flex-col gap-[32px]'>
                                    <p className='py-[1px] px-5 bg-white w-fit text-start text-black rounded-[20px]'>Basic plan</p>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[24px] font-[450]'>$ 19/ <span className='text-[16px] font-normal'>month</span></p>
                                        <p className='text-[16px] text-[#25252580]'>or $199 yearly</p>
                                    </div>
                                </div>
                                <p className='text-[16px] text-[#25252580]'>Lorem ipsum dolor sit amet</p>
                                <button onClick={onClickContinue1} className='py-[10px] w-full bg-[#441890] hover:bg-[#441890CC] text-white rounded-[39px] text-[16px] font-[400]'>Get started</button>
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
                        </div>
                        <div className='flex flex-col pb-[61px] w-full gap-[31px] shadow-custom-md shadow-[#00000014] rounded-[36px] p-'>
                            <div className='flex flex-col gap-[22px] shadow-md shadow-[#0000000F] rounded-[36px] p-[13px]'>
                                <div className='bg-[#FFF7E9] p-5 rounded-3xl flex flex-col gap-[32px]'>
                                    <p className='py-[1px] px-5 bg-white w-fit text-start text-black rounded-[20px]'>Business plan</p>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[24px] font-[450]'>$ 29/ <span className='text-[16px] font-normal'>month</span></p>
                                        <p className='text-[16px] text-[#25252580]'>or $199 yearly</p>
                                    </div>
                                </div>
                                <p className='text-[16px] text-[#25252580]'>Lorem ipsum dolor sit amet</p>
                                <button onClick={onClickContinue2} className='py-[10px] w-full bg-[#441890] hover:bg-[#441890CC] text-white rounded-[39px] text-[16px] font-[400]'>Get started</button>
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
                        </div>
                        <div className='flex flex-col pb-[61px] w-full gap-[31px] shadow-custom-md shadow-[#00000014] rounded-[36px] p-'>
                            <div className='flex flex-col gap-[22px] shadow-md shadow-[#0000000F] rounded-[36px] p-[13px]'>
                                <div className='bg-[#EDFFEF] p-5 rounded-3xl flex flex-col gap-[32px]'>
                                    <p className='py-[1px] px-5 bg-white w-fit text-start text-black rounded-[20px]'>Enterprise plan</p>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[24px] font-[450]'>$ 49/ <span className='text-[16px] font-normal'>month</span></p>
                                        <p className='text-[16px] text-[#25252580]'>or $199 yearly</p>
                                    </div>
                                </div>
                                <p className='text-[16px] text-[#25252580]'>Lorem ipsum dolor sit amet</p>
                                <button onClick={onClickContinue3} className='py-[10px] w-full bg-[#441890] hover:bg-[#441890CC] text-white rounded-[39px] text-[16px] font-[400]'>Get started</button>
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
                        </div>
                    </div>
                </div>
            )}
            <PaymentMethod paymentPlan={paymentPlan} setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod} continueClicked={continueClicked} setContinueClicked={setContinueClicked} />
        </div>
    )
}

export default Pricing