import avatar from '../Images/avatar3.svg';
import avata2 from '../Images/avatar4.svg';
import avata3 from '../Images/avatar5.svg';
import doubleMark from '../Images/doubleMark.svg';
import { FiSearch } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go';

const MessageSideBar = ({ setMessageClicked }) => {
    return (
        <div className='mq:max-w-[384px] sm:max-w-[290px] w-full sm:border-r sm:pr-5 pb-10 overflow-y-auto scrollbar-thin border-[#0000000D]'>
            <h1 className="text-[24px] text-[#252525] mk:hidden mx-4 block font-medium mb-4">Message</h1>
            <div className='px-3 flex flex-col gap-10'>
                <div className="relative flex items-center w-full">
                    <input
                        className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg w-full'
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Name"
                    />
                    <FiSearch className="absolute right-5 text-[#141522] size-5 font-bold" />
                </div>
                <div className='flex flex-col gap-[18px]'>
                    <div onClick={() => setMessageClicked(true)} className="flex gap-[14px] items-center py-[9.25px] px-[18.5px] rounded-[9px] cursor-pointer bg-[#FAFAFA] w-full truncate">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col gap-1 w-full truncate">
                            <div className='flex justify-between items-center'>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">1m Ago</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] w-[181px] font-[450]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fugiat dolor quae, eos laborum voluptates necessitatib
                                </p>
                                <GoDotFill className='text-[#DB5962]' />
                            </div>
                        </div>
                    </div>
                    <hr className='text-[#F5F5F7] border-[.93px] w-[288px] mx-auto' />
                    <div onClick={() => setMessageClicked(true)} className="flex gap-[14px] items-center py-[9.25px] px-[18.5px] rounded-[9px] cursor-pointer hover:bg-[#FAFAFA] w-full truncate">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col gap-1 w-full truncate">
                            <div className='flex justify-between items-center'>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">1m Ago</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] w-[181px] font-[450]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fugiat dolor quae, eos laborum voluptates necessitatib
                                </p>
                                <img src={doubleMark} alt="" />
                            </div>

                        </div>
                    </div>
                    <hr className='text-[#F5F5F7] border-[.93px] w-[288px] mx-auto' />
                    <div onClick={() => setMessageClicked(true)} className="flex gap-[14px] items-center py-[9.25px] px-[18.5px] rounded-[9px] cursor-pointer hover:bg-[#FAFAFA] w-full truncate">
                        <img className="size-[50px]" src={avata2} alt="" />
                        <div className="flex flex-col gap-1 w-full truncate">
                            <div className='flex justify-between items-center'>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">1m Ago</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] w-[181px] font-[450]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fugiat dolor quae, eos laborum voluptates necessitatib
                                </p>
                                <GoDotFill className='text-[#DB5962]' />
                            </div>

                        </div>
                    </div>
                    <hr className='text-[#F5F5F7] border-[.93px] w-[288px] mx-auto' />
                    <div onClick={() => setMessageClicked(true)} className="flex gap-[14px] items-center py-[9.25px] px-[18.5px] rounded-[9px] cursor-pointer hover:bg-[#FAFAFA] w-full truncate">
                        <img className="size-[50px]" src={avata3} alt="" />
                        <div className="flex flex-col gap-1 w-full truncate">
                            <div className='flex justify-between items-center'>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">1m Ago</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] w-[181px] font-[450]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fugiat dolor quae, eos laborum voluptates necessitatib
                                </p>
                                <img src={doubleMark} alt="" />
                            </div>

                        </div>
                    </div>
                    <hr className='text-[#F5F5F7] border-[.93px] w-[288px] mx-auto' />
                    <div onClick={() => setMessageClicked(true)} className="flex gap-[14px] items-center py-[9.25px] px-[18.5px] rounded-[9px] cursor-pointer hover:bg-[#FAFAFA] w-full truncate">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex flex-col gap-1 w-full truncate">
                            <div className='flex justify-between items-center'>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#25252580] font-[450]">1m Ago</p>
                            </div>
                            <div className='flex justify-between items-center '>
                                <p className="sd:text-[16px] text-[14px] truncate text-[#141522] w-[181px] font-[450]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fugiat dolor quae, eos laborum voluptates necessitatib
                                </p>
                                <img src={doubleMark} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSideBar