import { FiSearch } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import Bell from '../Images/bell.svg';
const Dashboard = () => {
    return (
        <div className='py-6 px-[27px]'>
            <div className="flex justify-between">
                <p className='text-[#252525] text-[24px] font-medium'>Hello John, welcome back!</p>
                <div className="flex items-center gap-[21px]">
                    <div className="relative flex items-center justify-end">
                        <input
                            className='bg-[#F6F6F6] placeholder:text-[#23235F] text-[#23235F] py-3 px-9 rounded-lg w-[429px]'
                            type="text"
                            name=""
                            id=""
                            placeholder="Search anything"
                        />
                        <FiSearch className="absolute right-9 text-[#94A2BC] size-5 font-bold" />
                    </div>
                    <div className="bg-[#F6F6F6] rounded-[84px]">
                        <AiOutlineMessage className="size-10 p-[10px]" />
                    </div>
                    <div className="bg-[#F6F6F6] rounded-[84px]">
                        <img src={Bell} className="size-10 p-[10px]" alt="" />
                    </div>
                    <div className="bg-[#441890] text-white py-[11px] px-4 rounded-md">
                        Add team member
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard