import a from '../Images/1.svg';
import b from '../Images/2.svg';
import c from '../Images/3.svg';
import d from '../Images/4.svg';
import e from '../Images/5.svg';
import back from '../Images/back.svg';
import front from '../Images/front.svg';
import bold from '../Images/bold.svg';
import italic from '../Images/italic.svg';
import underline from '../Images/underline.svg';
import Star from '../Images/Star.svg';
import { FaCircle } from "react-icons/fa6";
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
// import { useEffect, useState, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigationType } from 'react-router-dom';

const AddNote = ({ setAddNotes }) => {

    // const location = useLocation();
    // const navigationType = useNavigationType();
    // const isReload = useMemo(() => {
    //     return performance.getEntriesByType("navigation")[0]?.type === "reload";
    // }, []);
    const [bg, setBg] = useState('#ffffff')

    // useEffect(() => {

    //     // Handle physical/browser back button (mobile and desktop)
    //     if (!isReload && location.pathname === '/notes' && navigationType === 'POP') {
    //         setAddNotes(false)
    //         localStorage.setItem('addOrEditNote', JSON.stringify(false))
    //         window.scrollTo(0, 0);
    //     }

    //     // Handle Backspace key manually (desktop)
    //     const handleBackspace = (e) => {
    //         if (e.key === 'Backspace' && location.pathname === '/notes') {
    //             setAddNotes(false)
    //             localStorage.setItem('addOrEditNote', JSON.stringify(false))
    //             window.scrollTo(0, 0);
    //         }
    //     };

    //     window.addEventListener('keydown', handleBackspace);

    //     return () => {
    //         window.removeEventListener('keydown', handleBackspace);
    //     };
    // }, [location, navigationType, isReload]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            const newValue = value.substring(0, start) + '\n\n' + value.substring(end);
            textarea.value = newValue;

            // Move cursor to after the double break
            textarea.selectionStart = textarea.selectionEnd = start + 2;
        }
    };


    return (
        <div className='bg-[#2525250D] rounded-[10px] p-[13px] flex flex-col gap-[14px]'>
            <div
                className="flex md:items-center items-start justify-between rounded-[10px] py-[10px] px-[17px]"
                style={{ backgroundColor: bg }}
            >
                <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-3">
                    <div className="flex items-center sm:gap-10 sa:gap-5 gap-3">
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={bold} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={italic} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={underline} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={a} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={b} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={c} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={d} alt="" />
                        <img className="cursor-pointer sm:size-[18px] size-[15px]" src={e} alt="" />
                    </div>
                    <div className="flex gap-[14px]">
                        <FaCircle onClick={() => setBg('#ffffff')} className="text-[18px] text-white cursor-pointer border-[#00000033] border rounded-full" />
                        <FaCircle onClick={() => setBg('#FFEC9E')} className="text-[18px] text-[#FFEC9E] cursor-pointer border-[#00000033] border rounded-full" />
                        <FaCircle onClick={() => setBg('#A1D9F1')} className="text-[18px] text-[#A1D9F1] cursor-pointer border-[#00000033] border rounded-full" />
                        <FaCircle onClick={() => setBg('#FFB7B8')} className="text-[18px] text-[#FFB7B8] cursor-pointer border-[#00000033] border rounded-full" />
                    </div>
                </div>
                <div className="flex items-center gap-[6px]">
                    <img className="cursor-pointer sm:size-[18px] size-[15px]" src={back} alt="" />
                    <img className="cursor-pointer sm:size-[18px] size-[15px]" src={front} alt="" />
                </div>
            </div>
            <div
                className="rounded-[10px] p-6 flex flex-col gap-2"
                style={{ backgroundColor: bg }}
            >
                <div className="flex items-center justify-between">
                    <p className="text-[20px] text-[#25252580] font-[450]">Title</p>
                    <div className="flex items-center gap-4">
                        <img className="cursor-pointer sh:size-[23px] size-[19px]" src={Star} alt="" />
                        <BsThreeDots className="cursor-pointer" />
                    </div>
                </div>
                <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025. 12:30 PM, Monday</p>
                <hr className='border border-[#25252533] mt-1' />
                <textarea
                    onKeyDown={handleKeyDown}
                    className="min-h-[500px]  w-full p-4 resize-none focus:outline-none"
                    style={{ backgroundColor: bg }}
                />
            </div>
        </div>
    )
}

export default AddNote