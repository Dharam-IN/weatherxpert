import { HourlyEntity } from '@/types/WeatherType';
import BarChart from './BarChart';

interface Props {
    data: HourlyEntity[];
}

const TodayForecast = ({ data }: Props) => {
    return (
        <section aria-labelledby="today-forecast-heading">
            <h2 id="today-forecast-heading" className="section-title">24H Forecast</h2>

            <div className="card !p-4 mb-4">
                <BarChart
                    labels={data.slice(0, 24).map(hour => new Date(hour.dt * 1000).toLocaleString('en-US', { hour: 'numeric', hour12: true, weekday: "short" }))}
                    values={data.slice(0, 24).map(hour => hour.temp)}
                    label="Temperature (°C)"
                />
            </div>

            <div className="grid grid-cols-4 gap-3 text-center md:grid-cols-6">
                {data.filter((_, index) => index % 2 === 0).slice(0, 12).map((hour, index) => (
                    <article key={hour.dt} className="card !p-3 flex flex-col items-center bg-gray-50 dark:bg-[#1a1a1d]">
                        <p className="text-[10px] font-black uppercase text-gray-500 md:text-xs tracking-widest">
                            {new Date(hour.dt * 1000).toLocaleString('en-IN', { hour: '2-digit', hour12: true })}
                        </p>
                        <img
                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon.replace('n', 'd')}@2x.png`}
                            className="mx-auto size-16 drop-shadow-sm my-1"
                            alt={`Hourly forecast showing ${hour.weather[0].main}`}
                            loading="lazy"
                        />
                        {/* Changed from h3 to p for semantic correctness */}
                        <p className="font-black text-gray-900 dark:text-gray-100 text-lg">{hour.temp.toFixed(0)}°</p>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">{hour.weather[0].main}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default TodayForecast;