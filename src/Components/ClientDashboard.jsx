import Select from 'react-select';
import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import avatar from '../Images/avatar.svg';
import { Link, useNavigate } from 'react-router-dom';

const ClientDashboard = ({ dashboardFrame }) => {

    const navigate = useNavigate()

    const [smScreens, setSmScreens] = useState(window.innerWidth < 550)

    useEffect(() => {
        const handleResize = () => {
            if (smScreens) {
                setSmScreens(window.innerWidth < 550)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [smScreens])

    const options = [
        { value: '', label: 'Filter' }
    ]

    const [filter, setFilter] = useState(options[0])

    const customStyle = {
        indicatorSeparator: () => ({
            display: 'none'
        }),
        control: (base) => ({
            ...base,
            borderColor: '#25252526',
            borderWidth: '1px',
            width: '136px',
            borderRadius: '6px',
            // paddingTop: '5px',
            // paddingBottom: '5px',            paddingRight: '30px',
            paddingLeft: '30px',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#252525A6',
            fontweight: '400'
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
            {dashboardFrame === 'client' && (
                <div className="font-medium flex flex-col gap-6">

                    <div className='border border-[#00000033] pt-9 pb-[50px] flex flex-col gap-8 px-[23px] rounded-[10px]'>
                        <div className='flex md:flex-row w-full gap-4 md:gap-0 flex-col items-center justify-between'>
                            <div className='flex justify-between items-center w-full'>
                                <p className='text-[#252525] text-[20px] font-medium'>All clients</p>
                                <div className="text-[#25252580] cursor-pointer md:hidden block py-2 px-5">
                                    <BsThreeDots className='cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex items-center w-full md:gap-4'>
                                <div className="relative flex items-center w-full justify-end">
                                    <input
                                        className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg md:w-[300px] w-full'
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Search client"
                                    />
                                    <FiSearch className="absolute right-9 text-[#94A2BC] size-5 font-bold" />
                                </div>
                                <div className='relative md:flex hidden items-center'>
                                    <Select
                                        styles={customStyle}
                                        options={options}
                                        value={filter}
                                    />
                                    <IoFilter className='absolute left-3 text-[#00000080] size-6' />
                                </div>
                            </div>
                        </div>
                        <div className="sd:flex hidden items-center sm:text-[16px] text-[14px] bg-[#F6F6F6] gap-28 sd:gap-0 text-[#25252580] sm:p-[9px] p-[7px] rounded-[10px] w-full justify-between">
                            <p className='py-2 sm:px-5 px-2 w-full'>Name</p>
                            <p className='py-2 sm:px-5 px-2 w-full sm:block hidden'>E-mail</p>
                            <div className='mq:flex hidden items-center justify-center w-full'>
                                <p className='py-2 sm:px-5 px-2'>Status</p>
                            </div>
                            <p className='py-2 sm:px-5 px-2 w-full'>Last seen</p>
                            <div className='py-2 px-5 sd:block hidden'>
                                <BsThreeDots className="text-[#25252580]" />
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                if (smScreens) {
                                    navigate('/clients/1')
                                }
                            }}
                            className='flex w-full sd:cursor-auto cursor-pointer items-center justify-between sk:gap-[100px] sd:gap-0 p-[9px]'>
                            <div className="flex gap-[14px] items-center py-2 sd:w-full w-auto truncate">
                                <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">Accountant</p>
                                </div>
                            </div>
                            <div className='w-full truncate sm:block hidden'>
                                <p className='py-2 px-5 truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                            </div>
                            <div className='w-full truncate mq:flex hidden items-center justify-center'>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                            </div>
                            <div className="flex flex-col truncate gap-2 py-2 px-5 sd:w-full w-auto">
                                <p className="text-[16px] text-[#252525]">Today</p>
                                <p className="text-[#25252580] text-[16px]">11:00pm</p>
                            </div>
                            <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                                <Link to='/clients/1'>
                                    <BsThreeDots className='cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between sk:gap-[100px] sd:gap-0 p-[9px]'>
                            <div className="flex gap-[14px] items-center py-2 sd:w-full w-auto truncate">
                                <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">Accountant</p>
                                </div>
                            </div>
                            <div className='w-full sm:block truncate hidden'>
                                <p className='py-2 px-5 truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                            </div>
                            <div className='w-full mq:flex hidden truncate items-center justify-center'>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2 truncate px-5 sd:w-full w-auto">
                                <p className="text-[16px] text-[#252525]">Today</p>
                                <p className="text-[#25252580] text-[16px]">11:00pm</p>
                            </div>
                            <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between sk:gap-[100px] sd:gap-0 p-[9px]'>
                            <div className="flex gap-[14px] items-center py-2 sd:w-full w-auto truncate">
                                <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">Accountant</p>
                                </div>
                            </div>
                            <div className='w-full sm:block truncate hidden'>
                                <p className='py-2 px-5 truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                            </div>
                            <div className='w-full mq:flex truncate hidden items-center justify-center'>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                            </div>
                            <div className="flex flex-col truncate gap-2 py-2 px-5 sd:w-full w-auto">
                                <p className="text-[16px] text-[#252525]">Today</p>
                                <p className="text-[#25252580] text-[16px]">11:00pm</p>
                            </div>
                            <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between sk:gap-[100px] sd:gap-0 p-[9px]'>
                            <div className="flex gap-[14px] items-center py-2 sd:w-full w-auto truncate">
                                <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">Accountant</p>
                                </div>
                            </div>
                            <div className='w-full sm:block truncate hidden'>
                                <p className='py-2 px-5 truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                            </div>
                            <div className='w-full mq:flex truncate hidden items-center justify-center'>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                            </div>
                            <div className="flex flex-col truncate gap-2 py-2 px-5 sd:w-full w-auto">
                                <p className="text-[16px] text-[#252525]">Today</p>
                                <p className="text-[#25252580] text-[16px]">11:00pm</p>
                            </div>
                            <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between sk:gap-[100px] sd:gap-0 p-[9px]'>
                            <div className="flex gap-[14px] items-center py-2 sd:w-full w-auto truncate">
                                <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                                    <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">Accountant</p>
                                </div>
                            </div>
                            <div className='w-full sm:block truncate hidden'>
                                <p className='py-2 px-5 truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                            </div>
                            <div className='w-full mq:flex truncate hidden items-center justify-center'>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                            </div>
                            <div className="flex flex-col truncate gap-2 py-2 px-5 sd:w-full w-auto">
                                <p className="text-[16px] text-[#252525]">Today</p>
                                <p className="text-[#25252580] text-[16px]">11:00pm</p>
                            </div>
                            <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientDashboard