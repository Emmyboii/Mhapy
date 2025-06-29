import { useRef, useState } from 'react'
import { FaCircle, FaFolder } from 'react-icons/fa';

const CategoryModal = ({ categoryModal, setCategoryModal }) => {

    const modalRef = useRef()

    const handleClose = (e) => {
        if (modalRef.current === e.target) {
            setCategoryModal(false)
        }
    }

    const [bg, setBg] = useState('#ffffff')


    return (
        <div onClick={handleClose} ref={modalRef} className='fixed z-50 inset-0 flex items-center justify-center bg-opacity-30 bg-black'>
            <div className='bg-white md:w-[680px] sd:w-[500px] rounded-xl sm:py-[60px] py-10 sm:px-[80px] px-[30px] sm:mx-0 mx-5 flex flex-col gap-10'>
                <p className='text-[#252525] text-[24px] font-[450]'>New Category</p>
                <div className='flex gap-3 items-center w-full'>
                    <FaFolder className='size-8 text-[#7970FF]' />
                    <input
                        className='bg-[#F6F6F6] w-full placeholder:text-[#25252580] text-[#25252580] py-3 px-9 rounded-lg'
                        type="text"
                        name=""
                        id=""
                        placeholder="Name Category"
                    />
                </div>
                <div className="flex gap-[14px]">
                    <FaCircle onClick={() => setBg('#ffffff')} className="text-[18px] text-white cursor-pointer border-[#00000033] border rounded-full" />
                    <FaCircle onClick={() => setBg('#FFEC9E')} className="text-[18px] text-[#FFEC9E] cursor-pointer border-[#00000033] border rounded-full" />
                    <FaCircle onClick={() => setBg('#A1D9F1')} className="text-[18px] text-[#A1D9F1] cursor-pointer border-[#00000033] border rounded-full" />
                    <FaCircle onClick={() => setBg('#FFB7B8')} className="text-[18px] text-[#FFB7B8] cursor-pointer border-[#00000033] border rounded-full" />
                </div>
                <div className='flex items-center gap-[15px] w-full'>
                    <button onClick={() => setCategoryModal(false)} className='py-[10px] px-10 border border-[#441890] w-full text-[#441890] rounded-md'>Cancel</button>
                    <button onClick={() => setCategoryModal(false)} className='py-[10px] px-10 border bg-[#441890] hover:bg-[#441890CC] w-full text-white border-[#441890] rounded-md'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal