import { FiSearch } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs';
import { FaFolder } from 'react-icons/fa';
import { useState } from 'react';
import CategoryModal from './CategoryModal';

const NoteCategory = () => {

    const [categoryModal, setCategoryModal] = useState(false)

    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='flex sm:flex-row flex-col mq:gap-3 sm:gap-2 gap-1 sm:items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <p className='text-[24px] text-[#252525] font-[450]'>Categories</p>
                        <p className='text-[16px] text-[#25252580] font-[450]'>10 Categories</p>
                    </div>
                    <div className="relative flex items-center">
                        <input
                            className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg w-full'
                            type="text"
                            name=""
                            id=""
                            placeholder="Search Categories"
                        />
                        <FiSearch className="absolute right-5 text-[#94A2BC] size-5 font-bold" />
                    </div>
                </div>
                <div className='grid mq:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start sm:gap-[18px] gap-2'>
                    <div
                        onClick={() => {
                            setCategoryModal(true)
                        }}
                        className='border-dashed self-center mx-auto sm:py-[43px] cursor-pointer py-[28px] sm:w-[150px] w-[103px] sm:px-5 px-[10px] flex flex-col text-center items-center justify-center gap-2 rounded-2xl border-[#2525254D] border-[1.4px]'>
                        <FaFolder className='size-8 text-[#252525CC]' />
                        <p className='text-[#252525CC] sm:text-[16px] text-[12px] font-[450]'>New Category</p>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#D7F0FF] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#7970FF]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#FDD9DF] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#CC6576]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#FBEEB9] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#915F03]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#D7F0FF] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#7970FF]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#FDD9DF] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#CC6576]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#ffffff] shadow-custom-sp rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#252525]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#C7F0CD] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#06BA22]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#ffffff] shadow-custom-sp rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#252525]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#FBEEB9] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#915F03]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                    <div className='py-4 px-[23px] flex flex-col gap-[45px] bg-[#C7F0CD] rounded-[10px]'>
                        <div className='flex justify-between w-full items-center'>
                            <FaFolder className='size-8 text-[#06BA22]' />
                            <BsThreeDots className='cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-[#252525] sm:text-[21px] text-[18px] font-medium'>
                                Client Review
                            </p>
                            <p className='sm:text-[14px] text-[11px] text-[#25252580] font-normal'>14/04/2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {categoryModal && (
                <CategoryModal categoryModal={categoryModal} setCategoryModal={setCategoryModal} />
            )}
        </>
    )
}

export default NoteCategory