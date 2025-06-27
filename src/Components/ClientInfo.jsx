import avatar from '../Images/avatar.svg';

const ClientInfo = () => {

    return (
        <div className='py-6 pb-10 px-[27px] flex flex-col gap-10'>
            <div className='py-[59px] px-[54px] border border-[#25252533] rounded-[20px] md:flex hidden flex-col gap-[60px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-medium text-[#252525]'>Client Infomation</p>
                    <p className="text-[12px] font-normal py-[1px] w-[50px] px-[6px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col gap-4'>
                        <img className='size-[118px]' src={avatar} alt="" />
                        <button className='bg-[#441890] text-white py-[5px] px-2 rounded-[4.5px]'>Message</button>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Frist Name</p>
                            <p className='text-lg font-medium text-[#252525]'>Sandra</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Date of Birth</p>
                            <p className='text-lg font-medium text-[#252525]'>24th January 2001</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Last Name</p>
                            <p className='text-lg font-medium text-[#252525]'>Future</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Registered Date</p>
                            <p className='text-lg font-medium text-[#252525]'>24th April 2025</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Gender</p>
                            <p className='text-lg font-medium text-[#252525]'>Female</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Last Seen</p>
                            <p className='text-lg font-medium text-[#252525]'>Yesterday</p>
                        </div>
                    </div>
                </div>
                <hr className='w-full border border-[#25252533]' />
                <div className='flex gap-[120px] w-full'>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Email</p>
                            <p className='text-lg font-medium text-[#252525]'>sandrafuture@gmail.com</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Phone Number</p>
                            <p className='text-lg font-medium text-[#252525]'>+2341234567890</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>City</p>
                            <p className='text-lg font-medium text-[#252525]'>Toronto</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Client ID Number</p>
                            <p className='text-lg font-medium text-[#252525]'>1234567</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Country</p>
                            <p className='text-lg font-medium text-[#252525]'>Canada</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base font-medium text-[#25252580]'>Postal Code</p>
                            <p className='text-lg font-medium text-[#252525]'>#123456</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex flex-col gap-2'>
                <p className='text-[16px] text-[#252525] font-[450]'>Client Information</p>
                <div className='border border-[#25252533] rounded-[6px] flex flex-col gap-4 py-[14px] px-5'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-4 items-center'>
                            <img className='size-[99px]' src={avatar} alt="" />
                            <div className='flex flex-col gap-1'>
                                <p className='text-xs md:text-[14px] font-medium text-[#252525]'>Sandra Future</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#25252580]'>Client</p>
                            </div>
                        </div>
                        <p className="text-[12px] font-normal py-[1px] w-[50px] px-[18px] flex items-center justify-center rounded-xl text-[#0FA726] bg-[#0FA7261A] border-[0.8px] border-[#0FA726]">Active</p>
                    </div>
                    <button className='bg-[#441890] text-white py-[8px] px-[27px] rounded-[4.5px]'>Message</button>
                </div>
                <div className='border border-[#25252533] rounded-[6px] py-[14px] px-5 flex justify-between items-center w-full'>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Frist Name</p>
                            <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Sandra</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Email</p>
                            <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>sandrafuture@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Last Name</p>
                            <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Future</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Phone Number</p>
                            <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>09098776654</p>
                        </div>
                    </div>
                </div>
                <div className='border border-[#25252533] rounded-[6px] py-[14px] px-5 flex justify-between items-center w-full'>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Date of Birth</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>24th January 2001</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Client ID Number</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>1234567</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Country</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Canada</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Postal Code</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>#123456</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[33px]'>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Gender</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Female</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Registered Date</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>24th April 2025</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>City</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Toronto</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Last Seen</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientInfo