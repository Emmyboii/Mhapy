import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { BsThreeDots } from 'react-icons/bs';
import increase from '../Images/increase.svg';
import decrease from '../Images/decrease.svg';
import AC from '../Images/AC.svg';
import PC from '../Images/PC.svg';
import TC from '../Images/TC.svg';
import MyBarChart from "../Components/MyBarChart";
import MyPieChart from "../Components/MyPieChart";
import { GoDotFill } from 'react-icons/go';
import clientoverview from '../Images/clientoverview.svg';
import BarChart2 from './BarChart2';
import MyLineChart from './MyLIneChart';

const HealthProfile = ({ dashboardFrame, setDashboardFrame }) => {

    const options = [
        { value: '', label: 'This year' }
    ]

    const options2 = [
        { value: '', label: 'Today' }
    ]

    const customStyle = {
        indicatorSeparator: () => ({
            display: 'none'
        }),
        control: (base) => ({
            ...base,
            borderColor: '#25252526',
            borderWidth: '1px',
            borderRadius: '6px',
            // paddingTop: '5px',
            // paddingBottom: '5px',
            paddingRight: '5px',
            paddingLeft: '5px',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0 0px',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base) => ({
            ...base,
            color: '#252525A6',
            cursor: 'pointer'
        })
    }

    return (
        <>
            {dashboardFrame === 'healthProfile' && (
                <div className="font-medium flex flex-col gap-6">
                    
                    <div className="grid mc:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 items-center">
                        <div className="text-white sm:col-span-1 col-span-2 w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#441890] border border-[#4418904D]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img src={TC} className="sm:size-8 size-6" alt="" />
                                    <p className="sm:text-[16px] text-[13px]">Total Client</p>
                                </div>
                                <div className="bg-[#ffffff4d] rounded-lg text-white p-2">
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className="flex gap-[9px] items-center">
                                <p className="sm:text-4xl text-[22px] font-[450]">448</p>
                                <div className="bg-white text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                    <img className="size-4" src={increase} alt="" />
                                    <p className="text-[15px]">+1.74%</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                        <img src={AC} className="sm:size-6 size-3" alt="" />
                                    </div>
                                    <p className="sm:text-[16px] text-[13px]">Active Client</p>
                                </div>
                                <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] p-2">
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className="flex gap-[9px] items-center">
                                <p className="sm:text-4xl text-[22px] font-[450]">223</p>
                                <div className="bg-[#FF00001A] text-[#FF0000] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                    <img className="size-4" src={decrease} alt="" />
                                    <p className="text-[15px]">-0.32%</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#25252580] w-full py-5 px-[12px] rounded-lg flex flex-col justify-between gap-[33px] bg-[#ffffff] border border-[#25252533]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="bg-[#4418904D] p-[6px] rounded-[4.53px]">
                                        <img src={PC} className="sm:size-6 size-3" alt="" />
                                    </div>
                                    <p className="sm:text-[16px] text-[13px]">Inacive clients</p>
                                </div>
                                <div className="bg-[#EBEBEB] rounded-lg text-[#292D32] p-2">
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className="flex gap-[9px] items-center">
                                <p className="sm:text-4xl text-[22px] font-[450]">126</p>
                                <div className="bg-[#0FA7261A] text-[#0FA726] flex items-center rounded-[20px] font-normal gap-3 py-[-60px] px-[6px]">
                                    <img className="size-4" src={increase} alt="" />
                                    <p className="text-[15px]">+1.74%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mq:flex-row flex-col items-center gap-5 justify-between">
                        <div className="border border-[#25252533] rounded-[7px] w-full p-4">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-1 items-center">
                                        <img className="size-[23px]" src={clientoverview} alt="" />
                                        <p className="text-[#252525] text-xl">Client Overview</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#441890]" />
                                            <p>Total Clients</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#8467B6]" />
                                            <p>Active Clients</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#C3B5DB]" />
                                            <p>Prospective Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Select
                                        styles={customStyle}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <MyBarChart />
                        </div>

                        <div className="border border-[#25252533] mq:w-[35%] w-full rounded-[8px]">
                            <div className="flex flex-col gap-3 border-b border-[#E1E7EC] p-4">
                                <div className="flex gap-1 items-center">
                                    <img className="size-[23px]" src={clientoverview} alt="" />
                                    <p className="text-[#252525] text-xl">Mood Report</p>
                                </div>
                                <div>
                                    <Select
                                        styles={customStyle}
                                        options={options2}
                                        className='max-w-[95px]'
                                    />
                                </div>
                            </div>
                            <div className='p-4'>
                                <MyPieChart />
                            </div>
                        </div>
                    </div>

                    <div className="flex mq:flex-row flex-col items-center gap-5 justify-between">
                        <div className="border border-[#25252533] rounded-[7px] w-full p-4">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#252525] text-xl">Substance use report</p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#441890]" />
                                            <p>Cannabis</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#8467B6]" />
                                            <p>Alcohol</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#C3B5DB]" />
                                            <p>Cigarettes</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Select
                                        styles={customStyle}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <BarChart2 />
                        </div>

                        <div className="border border-[#25252533] rounded-[7px] mq:w-[70%] w-full p-4">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#252525] text-lg">Sleep quality & efficiency report</p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#441890]" />
                                            <p>Quality</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#25252580]">
                                            <GoDotFill className="text-[#C3B5DB]" />
                                            <p>Efficiency</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Select
                                        styles={customStyle}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <MyLineChart />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HealthProfile