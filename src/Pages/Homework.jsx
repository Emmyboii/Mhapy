import { useEffect, useState } from 'react';
import avatar from '../Images/avatar.svg';
import { BsThreeDots } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Homework = () => {

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

    return (
        <div>
            <h1 className="text-[18px] text-[#252525] mk:hidden block font-medium mb-4">Homework</h1>
            <div className='border border-[#00000033] pt-9 pb-[50px] flex flex-col gap-8 mf:px-[23px] px-4 rounded-[10px]'>
                <div className='flex md:flex-row w-full gap-4 md:gap-0 flex-col items-center justify-between'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#252525] mf:text-[20px] font-medium'>Client’s Homework</p>
                        <div className="bg-[#441890] hover:bg-[#441890CC] flex items-center text-[12px] mf:text-[16px] gap-2 mf:hidden mf:w-full cursor-pointer text-white py-[11px] mf:px-4 px-2 rounded-md">
                            <IoMdAdd className='mf:text-[30px] sm:hidden block' />
                            Create Homework
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
                            <FiSearch className="absolute sm:right-9 right-5 text-[#94A2BC] size-5 font-bold" />
                        </div>
                        <Link to='createhomework' className='w-full'>
                            <div className="bg-[#441890] hover:bg-[#441890CC] mf:flex items-center gap-2 hidden w-full cursor-pointer text-white py-[11px] px-4 rounded-md">
                                <IoMdAdd className='text-[30px] sm:hidden block' />
                                Create Homework
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="sd:flex hidden items-center sm:text-[16px] text-[14px] bg-[#F6F6F6] gap-28 sd:gap-0 text-[#25252580] sm:p-[9px] p-[5px] rounded-[10px] w-full justify-between">
                    <p className='py-2 sm:px-5 px-2 w-full'>Name</p>
                    <p className='py-2 sm:px-5 px-2 w-full mq:block hidden'>E-mail</p>
                    <div className='flex items-center justify-center w-full'>
                        <p className='py-2 sm:px-5 px-2'>Status</p>
                    </div>
                    <p className='py-2 sm:px-5 sm:block hidden px-2 w-full'>Last seen</p>
                    <div className='py-2 px-5'>
                        <BsThreeDots className="text-[#25252580]" />
                    </div>
                </div>
                <div
                    onClick={() => {
                        if (smScreens) {
                            navigate('/clientHomework/1')
                        }
                    }}
                    className='flex w-full items-center justify-between gap-24 sd:gap-0 sm:p-[9px] p-1'>
                    <div className="flex gap-[14px] items-center w-full">
                        <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="sd:text-[16px] text-[14px] text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="sd:text-[16px] text-[14px] text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full mq:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='sd:w-full flex sd:truncate items-center justify-center'>
                        <p className="text-[16px] font-[450] text-[#8467B6]">Submitted</p>
                    </div>
                    <div className="sm:flex hidden truncate flex-col gap-2  sd:w-full w-auto">
                        <p className="text-[16px] text-[#252525] font-medium">20 Feb 2025</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                        <Link to='/clientHomework/1'>
                            <BsThreeDots className='cursor-pointer' />
                        </Link>
                    </div>

                </div>
                <div className='flex w-full items-center justify-between gap-24 sd:gap-0 sm:p-[9px] p-1'>
                    <div className="flex gap-[14px] items-center w-full">
                        <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="sd:text-[16px] text-[14px] text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="sd:text-[16px] text-[14px] text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full mq:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='sd:w-full flex sd:truncate items-center justify-center'>
                        <p className="text-[16px] font-[450] text-[#8467B6]">Submitted</p>
                    </div>
                    <div className="sm:flex hidden truncate flex-col gap-2  sd:w-full w-auto">
                        <p className="text-[16px] text-[#252525] font-medium">20 Feb 2025</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                        <BsThreeDots className='cursor-pointer' />
                    </div>

                </div>
                <div className='flex w-full items-center justify-between gap-24 sd:gap-0 sm:p-[9px] p-1'>
                    <div className="flex gap-[14px] items-center w-full">
                        <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="sd:text-[16px] text-[14px] text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="sd:text-[16px] text-[14px] text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full mq:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='sd:w-full flex sd:truncate items-center justify-center'>
                        <p className="text-[16px] font-[450] text-[#8467B6]">Submitted</p>
                    </div>
                    <div className="sm:flex hidden truncate flex-col gap-2  sd:w-full w-auto">
                        <p className="text-[16px] text-[#252525] font-medium">20 Feb 2025</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                        <BsThreeDots className='cursor-pointer' />
                    </div>

                </div>
                <div className='flex w-full items-center justify-between gap-24 sd:gap-0 sm:p-[9px] p-1'>
                    <div className="flex gap-[14px] items-center w-full">
                        <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="sd:text-[16px] text-[14px] text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="sd:text-[16px] text-[14px] text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full mq:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='sd:w-full flex sd:truncate items-center justify-center'>
                        <p className="text-[16px] font-[450] text-[#8467B6]">Submitted</p>
                    </div>
                    <div className="sm:flex hidden truncate flex-col gap-2  sd:w-full w-auto">
                        <p className="text-[16px] text-[#252525] font-medium">20 Feb 2025</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                        <BsThreeDots className='cursor-pointer' />
                    </div>

                </div>
                <div className='flex w-full items-center justify-between gap-24 sd:gap-0 sm:p-[9px] p-1'>
                    <div className="flex gap-[14px] items-center w-full">
                        <img className="sd:size-[50px] size-[25px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="sd:text-[16px] text-[14px] text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="sd:text-[16px] text-[14px] text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full mq:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='sd:w-full flex sd:truncate items-center justify-center'>
                        <p className="text-[16px] font-[450] text-[#8467B6]">Submitted</p>
                    </div>
                    <div className="sm:flex hidden truncate flex-col gap-2  sd:w-full w-auto">
                        <p className="text-[16px] text-[#252525] font-medium">20 Feb 2025</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <div className="text-[#25252580] py-2 px-5 sd:block hidden">
                        <BsThreeDots className='cursor-pointer' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homework