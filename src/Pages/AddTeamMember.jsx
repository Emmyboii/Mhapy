import { FiSearch } from 'react-icons/fi'
import { BsThreeDots } from "react-icons/bs";
import avatar from '../Images/avatar.svg';

const AddTeamMember = () => {
    return (
        <div>
            <h1 className="text-[20px] text-[#252525] mk:hidden block font-medium mb-4">Add Team members</h1>
            <div className='border border-[#00000033] pt-9 pb-[50px] flex flex-col gap-8 px-[23px] rounded-[10px]'>
                <div className='flex md:flex-row w-full gap-4 md:gap-0 flex-col items-center justify-between'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#252525] text-[22px] font-medium'>All teams members</p>
                    </div>
                    <div className='flex items-center w-full md:gap-4'>
                        <div className="relative flex items-center w-full justify-end">
                            <input
                                className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg md:w-[300px] w-full'
                                type="text"
                                name=""
                                id=""
                                placeholder="Search therapist"
                            />
                            <FiSearch className="absolute sm:right-9 right-5 text-[#94A2BC] size-5 font-bold" />
                        </div>
                    </div>
                </div>
                <div className="sd:flex hidden items-center sm:text-[16px] text-[14px] bg-[#F6F6F6] gap-28 sd:gap-0 text-[#25252580] sm:p-[9px] p-[7px] rounded-[10px] w-full justify-between">
                    <p className='py-2 sm:px-5 px-2 w-full'>Name</p>
                    <p className='py-2 sm:px-5 px-2 w-full sm:block hidden'>E-mail</p>
                    <div className='mq:flex hidden items-center justify-center w-full'>
                        <p className='py-2 sm:px-5 px-2'>Status</p>
                    </div>
                    <p className='py-2 sm:px-5 sd:block hidden px-2 w-full'>Last seen</p>
                    <div className='py-2 px-5 invisible w-[60%]'>
                        <BsThreeDots className="text-[#25252580]" />
                    </div>
                </div>
                <div className='flex w-full items-center justify-between gap-10 sd:gap-0 p-[9px]'>
                    <div className="flex gap-[14px] items-center  w-full">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="text-[16px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="text-[16px] truncate text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full sm:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='w-full mq:flex truncate hidden items-center justify-center'>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <div className="sd:flex hidden truncate flex-col gap-2  w-full">
                        <p className="text-[16px] text-[#252525]">Today</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[7px] px-[10px] rounded-[4.5px] w-[54%] sd:text-[12px] text-[10px]'>Add member</button>

                </div>
                <div className='flex w-full items-center justify-between gap-10 sd:gap-0 p-[9px]'>
                    <div className="flex gap-[14px] items-center  w-full">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="text-[16px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="text-[16px] truncate text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full sm:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='w-full mq:flex truncate hidden items-center justify-center'>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <div className="sd:flex hidden truncate flex-col gap-2  w-full">
                        <p className="text-[16px] text-[#252525]">Today</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[7px] px-[10px] rounded-[4.5px] w-[54%] sd:text-[12px] text-[10px]'>Add member</button>

                </div>
                <div className='flex w-full items-center justify-between gap-10 sd:gap-0 p-[9px]'>
                    <div className="flex gap-[14px] items-center  w-full">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="text-[16px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="text-[16px] truncate text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full sm:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='w-full mq:flex truncate hidden items-center justify-center'>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <div className="sd:flex hidden truncate flex-col gap-2  w-full">
                        <p className="text-[16px] text-[#252525]">Today</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[7px] px-[10px] rounded-[4.5px] w-[54%] sd:text-[12px] text-[10px]'>Add member</button>

                </div>
                <div className='flex w-full items-center justify-between gap-10 sd:gap-0 p-[9px]'>
                    <div className="flex gap-[14px] items-center  w-full">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="text-[16px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="text-[16px] truncate text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full sm:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='w-full mq:flex truncate hidden items-center justify-center'>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <div className="sd:flex hidden truncate flex-col gap-2  w-full">
                        <p className="text-[16px] text-[#252525]">Today</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[7px] px-[10px] rounded-[4.5px] w-[54%] sd:text-[12px] text-[10px]'>Add member</button>

                </div>
                <div className='flex w-full items-center justify-between gap-10 sd:gap-0 p-[9px]'>
                    <div className="flex gap-[14px] items-center  w-full">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col truncate gap-1">
                            <p className="text-[16px] truncate text-[#000000] font-medium">Elijah Adeyemi</p>
                            <p className="text-[16px] truncate text-[#25252580] font-[450]">Accountant</p>
                        </div>
                    </div>
                    <div className='w-full sm:block truncate hidden'>
                        <p className=' truncate text-[#25252580]'>elijahadeyemi@gmail.com</p>
                    </div>
                    <div className='w-full mq:flex truncate hidden items-center justify-center'>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <div className="sd:flex hidden truncate flex-col gap-2  w-full">
                        <p className="text-[16px] text-[#252525]">Today</p>
                        <p className="text-[#25252580] text-[16px]">11:00pm</p>
                    </div>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-[7px] px-[10px] rounded-[4.5px] w-[54%] sd:text-[12px] text-[10px]'>Add member</button>

                </div>
            </div>
        </div>
    )
}

export default AddTeamMember