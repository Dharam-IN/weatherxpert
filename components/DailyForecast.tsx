import type { DailyEntity } from '@/types/WeatherType';
import { FaTemperatureArrowDown, FaTemperatureArrowUp, FaWind } from 'react-icons/fa6';

interface Props {
    data: DailyEntity[];
}

const DailyForecast = ({ data }: Props) => {
    return (
        <section aria-labelledby="daily-forecast-heading">
            <h2 id="daily-forecast-heading" className="section-title">7-Day Outlook</h2>
            <div className="flex flex-col gap-3">
                {data.map((day, index) => (
                    <article key={day.dt} className="card !p-4 flex items-center justify-between hover:border-primary-500 transition-colors">
                        <div className="flex items-center gap-4 w-1/3">
                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon.replace('n', 'd')}.png`}
                                className="size-10 bg-gray-100 dark:bg-[#1e1e20] rounded-full p-1"
                                alt={`Weather condition: ${day.weather[0].description}`}
                                loading="lazy"
                            />
                            <p className="text-sm font-black text-gray-800 dark:text-gray-100 uppercase tracking-wide">
                                {new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' })}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-bold text-gray-600 dark:text-gray-300">
                            <p className="flex items-center gap-1" aria-label={`Maximum temperature ${day.temp.max.toFixed(0)} degrees`}>
                                <FaTemperatureArrowUp className="text-gray-400" aria-hidden="true" /> {day.temp.max.toFixed(0)}°
                            </p>
                            <p className="flex items-center gap-1" aria-label={`Minimum temperature ${day.temp.min.toFixed(0)} degrees`}>
                                <FaTemperatureArrowDown className="text-gray-400" aria-hidden="true" /> {day.temp.min.toFixed(0)}°
                            </p>
                        </div>

                        <div className="hidden md:flex items-center text-xs font-bold text-gray-400 uppercase gap-1 w-1/4 justify-end" aria-label={`Wind speed ${day.wind_speed.toFixed(0)} meters per second`}>
                            <FaWind aria-hidden="true" /> {day.wind_speed.toFixed(0)} m/s
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default DailyForecast;