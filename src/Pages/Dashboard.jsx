import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import AC from '../Images/AC.svg';
import PC from '../Images/PC.svg';
import TC from '../Images/TC.svg';
import session from '../Images/sessions.svg';
import clientoverview from '../Images/clientoverview.svg';
import increase from '../Images/increase.svg';
import decrease from '../Images/decrease.svg';
import avatar from '../Images/avatar.svg';
import appointment from '../Images/appointment.svg';
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import MyBarChart from "../Components/MyBarChart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ClientDashboard from "../Components/ClientDashboard";
import HealthProfile from "../Components/HealthProfile";



const Dashboard = ({ dashboardFrame, setDashboardFrame }) => {

    const [date, setDate] = useState(new Date());

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
            // paddingTop: '5px',
            // paddingBottom: '5px',            paddingRight: '5px',
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
        <>
            <div className=' overflow-x-hidden'>
                <div>
                    {dashboardFrame === 'portal' ? (
                        <h1 className="text-[24px] text-[#252525] font-medium mb-4">Dashboard</h1>
                    ) : dashboardFrame === 'client' ? (
                        <h1 className="text-[24px] text-[#252525] font-medium mb-4">Client</h1>
                    ) : (
                        <h1 className="text-[24px] text-[#252525] font-medium mb-4">Health Profile</h1>
                    )}
                    <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] sm:w-[240px] w-full justify-between">
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
                        {/* <p
                         className={`cursor-pointer py-2 px-5 ${dashboardFrame === 'healthProfile' ? 'bg-white rounded-lg' : ''}`}
                            onClick={() => {
                                localStorage.setItem('dashboardFrame', 'healthProfile')
                                setDashboardFrame('healthProfile')
                            }}
                        >
                            Health Profile
                        </p> */}
                    </div>
                </div>
                {dashboardFrame === 'portal' ? (
                    <div className="font-medium flex flex-col gap-6">

                        <div className="grid mc:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center gap-5 items-center">
                            <div className="text-white w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#441890] border border-[#4418904D]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img src={TC} className="sm:size-8 size-6" alt="" />
                                        <p className="sm:text-[16px] text-[13px]">Total Client</p>
                                    </div>
                                    <div className="bg-[#ffffff4d] rounded-lg text-white sm:p-2 p-1">
                                        <BsThreeDots className='cursor-pointer' />
                                    </div>
                                </div>
                                <div className="flex gap-[9px] items-center">
                                    <p className="sm:text-4xl text-[22px] font-[450]">448</p>
                                    <div className="bg-white text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                        <img className="size-4" src={increase} alt="" />
                                        <p className="text-[15px]">+1.74%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                            <img src={AC} className="sm:size-6 size-3" alt="" />
                                        </div>
                                        <p className="sm:text-[16px] text-[13px]">Active Client</p>
                                    </div>
                                    <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] sm:p-2 p-1">
                                        <BsThreeDots className='cursor-pointer' />
                                    </div>
                                </div>
                                <div className="flex gap-[9px] items-center">
                                    <p className="sm:text-4xl text-[22px] font-[450]">223</p>
                                    <div className="bg-[#FF00001A] text-[#FF0000] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                        <img className="size-4" src={decrease} alt="" />
                                        <p className="text-[15px]">-0.32%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                            <img src={PC} className="sm:size-6 size-3" alt="" />
                                        </div>
                                        <p className="sm:text-[16px] text-[13px]">Prospective clients</p>
                                    </div>
                                    <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] sm:p-2 p-1">
                                        <BsThreeDots className='cursor-pointer' />
                                    </div>
                                </div>
                                <div className="flex gap-[9px] items-center">
                                    <p className="sm:text-4xl text-[22px] font-[450]">1523</p>
                                    <div className="bg-[#0FA7261A] text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                        <img className="size-4" src={increase} alt="" />
                                        <p className="text-[15px]">+1.74%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                            <img src={session} className="sm:size-6 size-3" alt="" />
                                        </div>
                                        <p className="sm:text-[16px] text-[13px]">Sessions</p>
                                    </div>
                                    <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] sm:p-2 p-1">
                                        <BsThreeDots className='cursor-pointer' />
                                    </div>
                                </div>
                                <div className="flex gap-[9px] items-center">
                                    <p className="sm:text-4xl text-[22px] font-[450]">223</p>
                                    <div className="bg-[#0FA7261A] text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                        <img className="size-4" src={increase} alt="" />
                                        <p className="text-[15px]">+1.74%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 justify-between">
                            <div className="border border-[#25252533] rounded-[7px] w-full sm:p-4 p-3">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <img className="size-[23px]" src={clientoverview} alt="" />
                                            <p className="text-[#252525] text-xl">Client Overview</p>
                                        </div>
                                        <div>
                                            <Select
                                                styles={customStyle}
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center sm:gap-6 gap-2">
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#441890]" />
                                            <p className="sm:text-[16px] text-[14px]">Total Clients</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#8467B6]" />
                                            <p className="sm:text-[16px] text-[14px]">Active Clients</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#C3B5DB]" />
                                            <p className="sm:text-[16px] text-[14px]">Prospective Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <MyBarChart />
                            </div>
                            <div className="border border-[#25252533] md:block hidden w-[35%] rounded-[7px] p-4">
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
                        <div className="grid mf:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between w-full items-center gap-[18px] mb-5">

                            <div className="border border-[#25252533] py-5 px-[15px] w-full flex flex-col gap-8 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p className="text-[#252525] font-medium text-[20px]">Prospective Clients</p>
                                    <BsThreeDots className='cursor-pointer' />
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <p className="text-[16px] text-[#25252580]">Assessment</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <p className="text-[16px] text-[#25252580]">Assessment</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <p className="text-[16px] text-[#25252580]">Assessment</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <p className="text-[16px] text-[#25252580]">Assessment</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <p className="text-[16px] text-[#25252580]">Assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#25252533] py-5 px-[15px] w-full flex flex-col gap-5 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p className="text-[#252525] font-medium text-[20px]">Therapist’s schedule</p>
                                    <BsThreeDots className='cursor-pointer' />
                                </div>
                                <div className="flex justify-between border border-[#00000033] rounded-md p-[18px]">
                                    <div className="text-[#252525] text-[16px] flex flex-col gap-[15px]">
                                        <p>Available</p>
                                        <p>62 <span className="text-[#25252580]">Total</span></p>
                                    </div>
                                    <div className="text-[#252525] text-[16px] flex flex-col gap-[15px]">
                                        <p>Unavailable</p>
                                        <p>47 <span className="text-[#25252580]">Total</span></p>
                                    </div>
                                    <div className="text-[#252525] text-[16px] flex flex-col gap-[15px]">
                                        <p>Leave</p>
                                        <p>08 <span className="text-[#25252580]">Total</span></p>
                                    </div>
                                </div>
                                <p className="text-[#25252580] text-[14px]">List of Therapist</p>
                                <div>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex gap-[14px] items-center">
                                            <img className="size-[50px]" src={avatar} alt="" />
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                    <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                                </div>
                                                <p className="text-[12px] font-normal py-[1px] px-[6px] rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Available</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[14px] items-center">
                                            <img className="size-[50px]" src={avatar} alt="" />
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                    <p className="text-[16px] text-[#25252580] font-[450]">Therapist</p>
                                                </div>
                                                <p className="text-[12px] font-normal py-[1px] px-[6px] rounded-xl text-[#FF0000] bg-[#FF00001A] border-[0.8px] border-[#FF0000]">Unavailable</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[14px] items-center">
                                            <img className="size-[50px]" src={avatar} alt="" />
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                    <p className="text-[16px] text-[#25252580] font-[450]">Unavailable</p>
                                                </div>
                                                <p className="text-[12px] font-normal py-[1px] px-[6px] rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Available</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#25252533] py-5 px-[15px] w-full flex flex-col gap-8 rounded-md">
                                <div className="flex items-center justify-between">
                                    <div className="text-[#252525] font-medium text-[20px] flex items-center gap-[6px]">
                                        <img src={appointment} className="size-[21px]" alt="" />
                                        <p>Appointment</p>
                                    </div>
                                    <BsThreeDots className='cursor-pointer' />
                                </div>
                                <div className="flex flex-col gap-[18px]">
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-[16px] text-[#25252580]">Today</p>
                                                <p className="text-[#252525] text-[16px]">11:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-[16px] text-[#25252580]">Today</p>
                                                <p className="text-[#252525] text-[16px]">11:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-[16px] text-[#25252580]">Today</p>
                                                <p className="text-[#252525] text-[16px]">11:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-[16px] text-[#25252580]">Today</p>
                                                <p className="text-[#252525] text-[16px]">11:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[14px] items-center">
                                        <img className="size-[50px]" src={avatar} alt="" />
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                                <p className="text-[16px] text-[#25252580] font-[450]">Accountant</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-[16px] text-[#25252580]">Today</p>
                                                <p className="text-[#252525] text-[16px]">11:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : dashboardFrame === 'client' ? (
                    <ClientDashboard dashboardFrame={dashboardFrame} />
                ) : (
                    <HealthProfile dashboardFrame={dashboardFrame} />
                )}
            </div>
        </>
    )
}

export default Dashboard