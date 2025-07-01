import avatar from '../Images/avatar.svg';
import upload from '../Images/upload.svg';

const GeneralSettings = () => {
    return (
        <div className='w-full flex flex-col gap-[18px]'>
            <div className='border border-[#25252533] bg-white flex-col flex gap-10 rounded-[10px] lg:py-[38px] py-5 lg:px-16 sd:px-10 px-[17px]'>
                <p className='text-[#252525] text-[20px] font-medium'>Personal Details</p>
                <div className='flex items-end gap-[11px]'>
                    <img className='sd:size-[120px] size-[90px]' src={avatar} alt="" />
                    <button className='bg-[#441890] flex items-center gap-[10px] hover:bg-[#441890CC] text-white py-[5px] px-4 rounded-md'>
                        <img src={upload} alt="" />
                        <p className='text-[13px] text-white font-[450]'>Upload profile picture</p>
                    </button>
                </div>
                <div className='flex flex-col items-start gap-[25px]'>
                    <div className='flex sd:flex-row flex-col items-center w-full gap-6'>
                        <div className='w-full flex flex-col gap-3'>
                            <p className='text-[#252525] text-[16px] font-[450]'>Full name</p>
                            <input
                                className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter Full name"
                            />
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <p className='text-[#252525] text-[16px] font-[450]'>Username</p>
                            <input
                                className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter Username"
                            />
                        </div>
                    </div>
                    <p
                        className='border-[#D0D5DD] border-[1.2px] text-[15px] bg-[#F4F4F4] text-[#25252580] py-3 px-[16px] rounded-lg w-full'>
                        <strong>Note:</strong> You can change username 27 days once, so check the  username before the process.
                    </p>
                    <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-3 px-[60px] sd:rounded-md rounded sd:w-auto w-full'>Save Changes</button>
                </div>
            </div>

            <div className='border border-[#25252533] bg-white flex-col flex gap-10 rounded-[10px] lg:py-[38px] py-5 lg:px-16 sd:px-10 px-[17px]'>
                <p className='text-[#252525] text-[20px] font-medium'>Email and Phone number Details</p>

                <div className='flex flex-col gap-[30px] sd:w-[450px]'>
                    <div className='w-full flex flex-col gap-3'>
                        <p className='text-[#252525] text-[16px] font-[450]'>Email</p>
                        <div className='flex items-center gap-1'>
                            <input
                                className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter Email"
                            />
                            <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-3 px-[30px] rounded-md w-auto'>Update</button>
                        </div>
                    </div>
                    <p
                        className='border-[#D0D5DD] border-[1.2px] text-[15px] bg-[#F4F4F4] text-[#25252580] py-3 px-[16px] rounded-lg w-full'>
                        <strong>Note:</strong> You will get a confirmation email within 30mins
                    </p>
                    <div className='w-full flex flex-col gap-3'>
                        <p className='text-[#252525] text-[16px] font-[450]'>Phone number</p>
                        <div className='flex items-center gap-1'>
                            <input
                                className='border-[#D0D5DD] border-[1.2px] shadow-custom-input outline-none placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[16px] rounded-lg w-full'
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter Phone number"
                            />
                            <button className='bg-[#441890] hover:bg-[#441890CC] text-white py-3 px-[30px] rounded-md w-auto'>Update</button>
                        </div>
                    </div>
                    <p
                        className='border-[#D0D5DD] border-[1.2px] text-[15px] bg-[#F4F4F4] text-[#25252580] py-3 px-[16px] rounded-lg w-full'>
                        <strong>Note:</strong> You will get an OTP for confirmation within 30mins
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings