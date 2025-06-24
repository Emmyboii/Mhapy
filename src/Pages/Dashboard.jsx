import { FiSearch } from "react-icons/fi";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { AiOutlineMessage } from "react-icons/ai";
import Bell from '../Images/bell.svg';
import AC from '../Images/AC.svg';
import PC from '../Images/PC.svg';
import TC from '../Images/TC.svg';
import session from '../Images/sessions.svg';
import clientoverview from '../Images/clientoverview.svg';
import increase from '../Images/increase.svg';
import decrease from '../Images/decrease.svg';
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import MyBarChart from "../Components/MyBarChart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Dashboard = () => {

    const [date, setDate] = useState(new Date());

    const [dashboardFrame, setDashboardFrame] = useState(() => {
        return localStorage.getItem('dashboardFrame') || 'portal'
    })

    useEffect(() => {
        localStorage.setItem('dashboardFrame', dashboardFrame);
    }, [dashboardFrame]);

    const options = [
        { value: '', label: 'This year' }
    ]

    const customStyle = {
        indicatorSeparator: () => ({
            display: 'none'
        }),
        control: (base) => ({
            ...base,
            borderColor: '#25252526',
            borderWidth: '1px',
            borderRadius: '6px',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingRight: '5px',
            paddingLeft: '5px',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0 0px',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base) => ({
            ...base,
            color: '#252525A6',
            cursor: 'pointer'
        })
    }

    return (
        <div className='py-6 px-[27px]'>
            <div className="flex justify-between">
                <p className='text-[#252525] text-[22px] font-medium'>Hello John, welcome back!</p>
                <div className="flex items-center gap-[21px]">
                    <div className="relative flex items-center justify-end">
                        <input
                            className='bg-[#F6F6F6] placeholder:text-[#23235F] text-[#23235F] py-3 px-9 rounded-lg w-[300px]'
                            type="text"
                            name=""
                            id=""
                            placeholder="Search anything"
                        />
                        <FiSearch className="absolute right-9 text-[#94A2BC] size-5 font-bold" />
                    </div>
                    <div className="bg-[#F6F6F6] rounded-[84px]">
                        <AiOutlineMessage className="size-10 p-[10px]" />
                    </div>
                    <div className="bg-[#F6F6F6] rounded-[84px]">
                        <img src={Bell} className="size-10 p-[10px]" alt="" />
                    </div>
                    <div className="bg-[#441890] text-white py-[11px] px-4 rounded-md">
                        Add team member
                    </div>
                </div>
            </div>
            <div className="font-medium flex flex-col gap-6">
                <h1 className="text-[24px] text-[#252525]">Dashboard</h1>
                <div className="flex items-center gap-10 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] w-[419px] justify-between">
                    <p
                        className={`cursor-pointer py-2 px-5 ${dashboardFrame === 'portal' ? 'bg-white rounded-lg' : ''}`}
                        onClick={() => {
                            localStorage.setItem('dashboardFrame', 'portal')
                            setDashboardFrame('portal')
                        }}
                    >
                        Portal
                    </p>
                    <p
                        className={`cursor-pointer py-2 px-5 ${dashboardFrame === 'client' ? 'bg-white rounded-lg' : ''}`}
                        onClick={() => {
                            localStorage.setItem('dashboardFrame', 'client')
                            setDashboardFrame('client')
                        }}
                    >
                        Client
                    </p>
                    <p
                        className={`cursor-pointer py-2 px-5 ${dashboardFrame === 'healthProfile' ? 'bg-white rounded-lg' : ''}`}
                        onClick={() => {
                            localStorage.setItem('dashboardFrame', 'healthProfile')
                            setDashboardFrame('healthProfile')
                        }}
                    >
                        Health Profile
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="text-white w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#441890] border border-[#4418904D]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src={TC} className="size-8" alt="" />
                                <p className="text-[16px]">Total Client</p>
                            </div>
                            <div className="bg-[#ffffff4d] rounded-lg text-white p-2">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-4xl font-[450]">448</p>
                            <div className="bg-white text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[15px]">
                                <img className="size-4" src={increase} alt="" />
                                <p className="text-[15px]">+1.74%</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                    <img src={AC} className="size-6" alt="" />
                                </div>
                                <p className="text-[16px]">Active Client</p>
                            </div>
                            <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] p-2">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-4xl font-[450]">223</p>
                            <div className="bg-[#FF00001A] text-[#FF0000] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[15px]">
                                <img className="size-4" src={decrease} alt="" />
                                <p className="text-[15px]">-0.32%</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                    <img src={PC} className="size-6" alt="" />
                                </div>
                                <p className="text-[16px]">Prospective clients</p>
                            </div>
                            <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] p-2">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-4xl font-[450]">1523</p>
                            <div className="bg-[#0FA7261A] text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[15px]">
                                <img className="size-4" src={increase} alt="" />
                                <p className="text-[15px]">+1.74%</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                    <img src={session} className="size-6" alt="" />
                                </div>
                                <p className="text-[16px]">Sessions</p>
                            </div>
                            <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] p-2">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-4xl font-[450]">223</p>
                            <div className="bg-[#0FA7261A] text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[15px]">
                                <img className="size-4" src={increase} alt="" />
                                <p className="text-[15px]">+1.74%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-between">
                    <div className="border border-[#25252533] rounded-[7px] w-full p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-1 items-center">
                                    <img className="size-[23px]" src={clientoverview} alt="" />
                                    <p className="text-[#252525] text-xl">Client Overview</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1 text-[#25252580]">
                                        <GoDotFill className="text-[#441890]" />
                                        <p>Total Clients</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#25252580]">
                                        <GoDotFill className="text-[#8467B6]" />
                                        <p>Active Clients</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#25252580]">
                                        <GoDotFill className="text-[#C3B5DB]" />
                                        <p>Prospective Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Select
                                    styles={customStyle}
                                    options={options}
                                />
                            </div>
                        </div>
                        <MyBarChart />
                    </div>
                    <div className="border border-[#25252533] w-[35%] rounded-[7px] p-4">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            prevLabel={<IoIosArrowBack />}
                            nextLabel={<IoIosArrowForward />}
                            next2Label={null}
                            prev2Label={null}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard