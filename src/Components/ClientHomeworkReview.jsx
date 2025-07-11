import React from 'react'

const ClientHomeworkReview = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='bg-[#2525250D] p-[14px] gap-[14px] rounded-[10px] flex flex-col'>
                <p className='text-[#252525] sm:text-[20px] text-base font-[450] py-[14px] sm:px-6 px-3 bg-white rounded-[10px]'>Self rating assessment homework</p>
                <div className='text-[#25252580] sm:text-[20px] text-base flex flex-col gap-6 font-[450] sm:p-6 p-3 bg-white rounded-[10px]'>
                    <p>Question 1</p>
                    <hr className='border-[#25252580]' />
                    <p className='sm:text-base text-sm font-normal'>How often do you feel depressed?</p>
                </div>
                <div className='text-[#25252580] sm:text-[20px] text-base flex flex-col gap-6 font-[450] sm:p-6 p-3 bg-white rounded-[10px]'>
                    <p>Options</p>
                    <hr className='border-[#25252580]' />
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="radio" name="radio" id="radio" checked />
                            <p>Frequently</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="radio" name="radio" id="radio" disabled />
                            <p>Weekly</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="radio" name="radio" id="radio" disabled />
                            <p>Monthly</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="radio" name="radio" id="radio" disabled />
                            <p>Once in a while</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#2525250D] p-[14px] gap-[14px] rounded-[10px] flex flex-col'>
                <div className='text-[#25252580] sm:text-[20px] text-base flex flex-col gap-6 font-[450] sm:p-6 p-3 bg-white rounded-[10px]'>
                    <p>Question 2</p>
                    <hr className='border-[#25252580]' />
                    <p className='sm:text-base text-sm font-normal'>Which social media platform do you spend more time on?</p>
                </div>
                <div className='text-[#25252580] text-[20px] flex flex-col gap-6 font-[450] sm:p-6 p-3 bg-white rounded-[10px]'>
                    <p>Options</p>
                    <hr className='border-[#25252580]' />
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="checkbox" name="" id="" checked />
                            <p>Facebook</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="checkbox" name="" id="" checked />
                            <p>Whatsapp</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="checkbox" name="" id="" checked />
                            <p>X</p>
                        </div>
                        <div className='flex gap-3 sm:text-base text-sm items-center'>
                            <input type="checkbox" name="" id="" disabled />
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientHomeworkReview