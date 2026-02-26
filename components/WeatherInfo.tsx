import type { Current } from '@/types/WeatherType';
import { FaCloud, FaWater, FaWind } from 'react-icons/fa';
import { LuSunrise, LuSunset } from 'react-icons/lu';
import { MdDewPoint, MdOutlineVisibility } from 'react-icons/md';
import { MdSunnySnowing } from 'react-icons/md';

interface Props {
    data: Current;
}

const WeatherInfo = ({ data }: Props) => {
    const cardData = [
        { title: 'Wind Speed', value: `${data.wind_speed.toFixed(1)}`, unit: 'm/s', icon: <FaWind /> },
        { title: 'Humidity', value: `${data.humidity}`, unit: '%', icon: <MdDewPoint /> },
        { title: 'UV Index', value: `${data.uvi}`, unit: '', icon: <MdSunnySnowing /> },
        { title: 'Pressure', value: `${data.pressure}`, unit: 'hPa', icon: <FaWater /> },
        { title: 'Cloud Cover', value: `${data.clouds}`, unit: '%', icon: <FaCloud /> },
        { title: 'Visibility', value: `${(data.visibility / 1000).toFixed(1)}`, unit: 'km', icon: <MdOutlineVisibility /> },
        { 
            title: 'Sunrise', 
            value: `${new Date(data.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}`, 
            unit: '', icon: <LuSunrise /> 
        },
        { 
            title: 'Sunset', 
            value: `${new Date(data.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}`, 
            unit: '', icon: <LuSunset /> 
        },
    ];

    return (
        <section aria-labelledby="current-metrics-heading">
            <h2 id="current-metrics-heading" className="section-title">Current Metrics</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4">
                {cardData.map((item, i) => (
                    <div key={i} className="card !p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-default bg-gray-50 dark:bg-[#1a1a1d]">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-wide">{item.title}</p>
                            <div className="text-xl text-primary-500" aria-hidden="true">{item.icon}</div>
                        </div>
                        <p className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100 font-black tracking-tighter">
                            {item.value} <span className="text-sm font-bold text-gray-400 tracking-normal">{item.unit}</span>
                        </p> 
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeatherInfo;