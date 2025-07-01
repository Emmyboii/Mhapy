import { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const NotificationSettings = () => {

    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)
    const [toggle6, setToggle6] = useState(false)

    const handleGeneral = () => {

        const newToggle1 = !toggle1;
        setToggle1(newToggle1);

        if (!newToggle1) {
            setToggle2(false);
            setToggle3(false);
            setToggle4(false);
            setToggle5(false);
            setToggle6(false);
        }
    }
    const handleGeneral2 = () => {


        if (toggle1) {
            setToggle2(!toggle2)
        } else {
            return null
        }
    }
    const handleGeneral3 = () => {

        if (toggle1) {
            setToggle3(!toggle3)
        } else {
            return null
        }
    }
    const handleGeneral4 = () => {

        if (toggle1) {
            setToggle4(!toggle4)
        } else {
            return null
        }
    }
    const handleGeneral5 = () => {

        if (toggle1) {
            setToggle5(!toggle5)
        } else {
            return null
        }
    }
    const handleGeneral6 = () => {

        if (toggle1) {
            setToggle6(!toggle6)
        } else {
            return null
        }
    }

    return (
        <div className='border w-full border-[#25252533] bg-white flex-col flex gap-10 rounded-[10px] lg:py-[38px] py-5 lg:px-16 sd:px-10 px-[17px]'>
            <p className='text-[#252525] text-[20px] font-medium'>Notification Settings</p>
            <div className="flex flex-col w-full gap-[33px]">
                <div className="flex justify-between items-center">
                    <p className="font-[450] text-[#252525]">General email notification</p>
                    {toggle1 ? (
                        <BsToggleOn onClick={handleGeneral} className="text-[#9F88C6] text-[30px] cursor-pointer" />
                    ) : (
                        <BsToggleOff onClick={handleGeneral} className="text-[#9F88C6] text-[30px] cursor-pointer" />

                    )}
                </div>
                <hr className='border border-[#25252533]' />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-[450] text-[#252525]">Email for any new therapist that adds you</p>
                        <p className="font-[400] text-[#25252580]">You will get notified, when a new therapist adds you</p>
                    </div>
                    {toggle2 ? (
                        <BsToggleOn onClick={handleGeneral2} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                    ) : (
                        <BsToggleOff onClick={handleGeneral2} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />

                    )}
                </div>
                <hr className='border border-[#25252533]' />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-[450] text-[#252525]">Email for every Therapist Schedule</p>
                        <p className="font-[400] text-[#25252580]">You will get notified, when there’s a therapist schedule</p>
                    </div>
                    {toggle3 ? (
                        <BsToggleOn onClick={handleGeneral3} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                    ) : (
                        <BsToggleOff onClick={handleGeneral3} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />

                    )}
                </div>
                <hr className='border border-[#25252533]' />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-[450] text-[#252525]">Email for every new appointment</p>
                        <p className="font-[400] text-[#25252580]">You will get notified, when a new task is assigned</p>
                    </div>
                    {toggle4 ? (
                        <BsToggleOn onClick={handleGeneral4} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                    ) : (
                        <BsToggleOff onClick={handleGeneral4} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />

                    )}
                </div>
                <hr className='border border-[#25252533]' />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-[450] text-[#252525]">Email for every new message</p>
                        <p className="font-[400] text-[#25252580]">You will get notified, when someone sends a new message</p>
                    </div>
                    {toggle5 ? (
                        <BsToggleOn onClick={handleGeneral5} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                    ) : (
                        <BsToggleOff onClick={handleGeneral5} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />

                    )}
                </div>
                <hr className='border border-[#25252533]' />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-[450] text-[#252525]">Email for every new meetings</p>
                        <p className="font-[400] text-[#25252580]">You will get notified, when a new meeting is scheduled</p>
                    </div>
                    {toggle6 ? (
                        <BsToggleOn onClick={handleGeneral6} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                    ) : (
                        <BsToggleOff onClick={handleGeneral6} className={`text-[#9F88C6] text-[30px] ${toggle1 ? 'cursor-pointer' : 'cursor-not-allowed'}`} />

                    )}
                </div>
                <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-3 sd:rounded-md rounded sd:w-[200px] w-full'>Save Changes</button>
            </div>
        </div>
    )
}

export default NotificationSettings