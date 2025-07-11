import { GoDotFill } from 'react-icons/go';
import avatar from '../Images/avatar3.svg';
import send from '../Images/send2.svg';
import link from '../Images/attach-circle.svg';
import video from '../Images/video.svg';
import voice from '../Images/voice call.svg';
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { useRef } from 'react';

const MessageBox = ({ setMessageClicked }) => {

    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // reset height
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'; // cap at 200px
    };

    return (
        <div className='w-full bg-[#F6F6F6]'>
            <nav className='pr-3 sm:pl-10 pl-3 w-full sticky top-0 z-30 shadow-sm shadow-black/10 flex justify-between bg-white items-center'>
                <div className="flex gap-[14px] items-center py-2">
                    <HiMiniArrowLongLeft onClick={() => setMessageClicked(false)} className='size-5 sm:hidden block cursor-pointer' />
                    <img className="size-[50px]" src={avatar} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="sd:text-[16px] text-[14px] truncate text-[#141522] font-medium">Elijah Adeyemi</p>
                        <div className="sd:text-[16px] text-[14px] truncate flex items-center gap-2 text-[#141522] font-[450]">
                            <GoDotFill className='text-[#25C78B]' />
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[23px] items-center'>
                    <div className="border border-[#0000000A] rounded-full p-[7px] cursor-pointer">
                        <img className='size-[23px]' src={video} alt="" />
                    </div>
                    <div className="border border-[#0000000A] rounded-full p-[7px] cursor-pointer">
                        <img className='size-[23px]' src={voice} alt="" />
                    </div>
                </div>
            </nav>
            <section className='py-5 pr-3 sm:pl-10 pl-3 w-full flex flex-col gap-4 h-[65vh] overflow-auto scrollbar-thin '>
                <p className='text-white text-center mx-auto w-[65px] bg-black text-[13px] py-[7.7px] px-[11.5px] rounded-[9px]'>Today</p>
                <div className='flex flex-col gap-6'>
                    <p className='flex flex-row-reverse bg-[#441890] text-white py-[7.7px] px-[11.54px] rounded-br-[10px] rounded-tl-[10px] rounded-bl-[10px] self-end sm:max-w-[65%] max-w-[80%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, pariatur error fuga aliquid ducimus placeat.
                    </p>
                    <p className='flex flex-row-reverse bg-[#ffffff] text-[#141522] py-[7.7px] px-[11.54px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] self-start sm:max-w-[65%] max-w-[80%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, pariatur error fuga aliquid ducimus placeat.
                    </p>
                    <p className='flex flex-row-reverse bg-[#441890] text-white py-[7.7px] px-[11.54px] rounded-br-[10px] rounded-tl-[10px] rounded-bl-[10px] self-end sm:max-w-[65%] max-w-[80%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, pariatur error fuga aliquid ducimus placeat.
                    </p>
                    <p className='flex flex-row-reverse bg-[#ffffff] text-[#141522] py-[7.7px] px-[11.54px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] self-start sm:max-w-[65%] max-w-[80%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, pariatur error fuga aliquid ducimus placeat.
                    </p>
                    <p className='flex flex-row-reverse bg-[#441890] text-white py-[7.7px] px-[11.54px] rounded-br-[10px] rounded-tl-[10px] rounded-bl-[10px] self-end sm:max-w-[65%] max-w-[80%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, pariatur error fuga aliquid ducimus placeat.
                    </p>
                </div>
            </section>
            <footer className='flex sticky w-full sm:w-auto bottom-0 bg-white'>
                <textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    className="w-full p-3 rounded-lg h-[50px] text-[#23235F] placeholder:text-[#8E92BC] placeholder:text-[14px] text-[15px] focus:outline-none resize-none"
                    rows="1"
                    placeholder="Send your message..."
                ></textarea>
                <div className='flex gap-[21px] px-10 items-center'>
                    <img src={link} className='cursor-pointer size-[23px6' alt="" />
                    <img className='size-[42px] cursor-pointer' src={send} alt="" />
                </div>
            </footer>
        </div>
    )
}

export default MessageBox