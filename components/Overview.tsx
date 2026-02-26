import type { Current } from '@/types/WeatherType';
import { FaClock, FaThermometerHalf } from 'react-icons/fa';
import type { City } from '@/types/CityType';
import { MdLocationPin } from 'react-icons/md';
import LocalDate from './LocalDate';

const OverView = ({ data, city }: { data: Current; city: City }) => {
    return (
        <section className="card relative overflow-hidden bg-primary-500 text-white border-none shadow-xl" aria-label="Current Weather Overview">
            {/* Design Accents */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

            <div className="flex justify-between items-start font-bold">
                <h2 className="text-base md:text-lg flex flex-col gap-1">
                    <span className="flex items-center gap-1 opacity-80 text-xs uppercase tracking-widest"><MdLocationPin /> Current Location</span>
                    {city.name}, {city.country}
                </h2>
                <div className="text-right">
                    <p className="text-xs uppercase tracking-widest opacity-80 mb-1 flex items-center justify-end gap-1"><FaClock /> Local Time</p>
                    <p className="text-sm"><LocalDate date={data.dt * 1000} /></p>
                </div>
            </div>
            
            <div className="my-10 flex items-center justify-between">
                <div>
                    {/* Changed from H2 to P to maintain correct SEO hierarchy (H1 is the site title) */}
                    <p className="text-8xl font-black tracking-tighter drop-shadow-lg">
                        {data.temp.toFixed(0)}°
                    </p>
                    <p className="mt-3 text-sm md:text-base font-bold bg-white/20 inline-flex items-center gap-2 px-4 py-2 rounded-full">
                        <FaThermometerHalf /> Feels like {data.feels_like.toFixed(1)}°
                    </p>
                </div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    className="size-36 md:size-48 drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]"
                    alt={`Current weather in ${city.name} is ${data.weather[0].description}`}
                    fetchPriority="high" // SEO: prioritize above-the-fold image
                />
            </div>
            
            <div className="mt-4 flex items-end gap-4 font-bold border-t border-white/20 pt-5">
                <p className="mr-auto capitalize text-xl md:text-2xl tracking-tight">
                    {data.weather[0].description}
                </p>
                <div className="text-right text-xs opacity-80 flex flex-col gap-1">
                    <p>Lat: {city.lat.toFixed(2)}°</p>
                    <p>Lon: {city.lon.toFixed(2)}°</p>
                </div>
            </div>
        </section>
    );
};

export default OverView;