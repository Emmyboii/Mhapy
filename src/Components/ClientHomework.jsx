import { useState } from 'react';
import avatar from '../Images/avatar.svg';
import homeworkFile from '../Images/homeworkFile.svg';
import ClientHomeworkReview from './ClientHomeworkReview';
import { IoMdArrowRoundBack } from "react-icons/io";

const ClientHomework = () => {

    const [homeworkReview, setHomeworkReview] = useState(() => {
        const storedValue = localStorage.getItem('homeworkReview')
        return storedValue ? JSON.parse(storedValue) : false
    })

    return (
        <div className='pb-10 sd:px-[27px] px-3 flex flex-col gap-5'>
            <p className='text-[16px] mk:hidden block text-[#252525] font-[450]'>Client Homework</p>
            <div className='sm:py-[59px] py-5 sm:px-[50px] relative px-3 border border-[#25252533] sm:rounded-[20px] rounded-[6px] flex-col gap-[60px]'>
                <div className='mk:flex hidden items-center justify-between mb-5'>
                    <p className='text-2xl flex gap-2 items-center font-medium text-[#252525]'>
                        <IoMdArrowRoundBack
                            onClick={() => {
                                localStorage.setItem('homeworkReview', false)
                                setHomeworkReview(false)
                            }}
                            className='cursor-pointer absolute left-5' />
                        Client Homework
                    </p>
                    <p className="text-[16px] font-normal text-[#1637E8]">See full Profile</p>
                </div>
                <div className='flex mk:flex-row flex-col mk:gap-0 gap-10 justify-between w-full'>
                    <div className='flex flex-col gap-4'>
                        <div className=' flex gap-2 justify-between'>
                            <img className='sm:size-[118px] sa:size-[90px] size-[70px]' src={avatar} alt="" />
                            <div className='flex mk:hidden flex-col gap-5'>
                                <p className='sm:text-lg text-sm font-medium text-[#252525]'>Sandra Future</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='sm:text-base text-xs font-medium text-[#25252580]'>Phone Number</p>
                                    <p className='sm:text-lg text-sm font-medium text-[#252525]'>+2348123456788</p>
                                </div>
                                <p className='text-sm font-medium text-[#8467B6]'>Submitted</p>
                            </div>
                            <p className="sm:text-[16px] text-sm mk:hidden block font-normal text-[#1637E8]">See full Profile</p>
                        </div>
                        <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[5px] px-2 rounded-[4.5px]'>Message</button>
                    </div>
                    <hr className='w-full border mk:hidden block border-[#25252533]' />
                    <div className='mk:flex hidden mk:flex-col justify-between gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Full Name</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>Sandra Future</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Email</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>sandrafuture@gmail.com</p>
                        </div>
                    </div>
                    <div className='grid mk:hidden grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Full Name</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>Sandra Future</p>
                        </div>
                        <div className='flex flex-col  gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Email</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>sandrafuture@gmail.com</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Date Submitted</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>11:00 am, 20 Feb 2025</p>
                        </div>
                        <div className='flex mk:hidden flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Gender</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>Female</p>
                        </div>
                    </div>
                    <div className='mk:flex hidden mk:flex-col justify-between gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Date Submitted</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>11:00 am, 20 Feb 2025</p>
                        </div>
                        <div className='mk:flex hidden flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Phone Number</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>+2348123456788</p>
                        </div>
                        <div className='flex mk:hidden flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Gender</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>Female</p>
                        </div>
                    </div>
                    <div className='mk:flex hidden flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Status</p>
                            <p className='sm:text-base text-xs font-medium text-[#8467B6]'>Submitted</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='sm:text-base text-xs font-medium text-[#25252580]'>Gender</p>
                            <p className='sm:text-base text-xs font-medium text-[#252525]'>Female</p>
                        </div>
                    </div>
                </div>
            </div>
            {homeworkReview ? (
                <ClientHomeworkReview />
            ) : (
                <div className='sm:py-[59px] py-5 sm:px-[50px] px-3 border border-[#25252533] sm:rounded-[20px] rounded-[6px] flex flex-col gap-[30px]'>
                    <p className='sm:text-2xl text-base font-medium text-[#252525]'>Recent Homework</p>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-base font-medium text-[#25252580]'>01 Feb 2025</p>
                            <div
                                onClick={() => {
                                    localStorage.setItem('homeworkReview', true)
                                    setHomeworkReview(true)
                                    window.scrollTo(0, 0)
                                }}
                                className='flex items-center cursor-pointer justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-base font-medium text-[#25252580]'>30 Jan 2025</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-base font-medium text-[#25252580]'>29 Jan 2025</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <img src={homeworkFile} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='sm:text-base text-xs font-medium text-[#252525]'>Self rating assessment homework</p>
                                        <p className='sm:text-base text-xs font-medium text-[#25252580]'>9 days ago</p>
                                    </div>
                                </div>
                                <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ClientHomework