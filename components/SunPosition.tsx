'use client';

import { LuSunrise, LuSunset } from 'react-icons/lu';

interface Props { sunrise: number; sunset: number; }

const calculateSunPosition = (sunrise: number, sunset: number) => {
    const sunriseTimestamp = new Date(sunrise * 1000).getTime();
    const sunsetTimestamp = new Date(sunset * 1000).getTime();
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp < sunriseTimestamp) return 0;
    if (currentTimestamp > sunsetTimestamp) return 100;

    return (((currentTimestamp - sunriseTimestamp) / (sunsetTimestamp - sunriseTimestamp)) * 100).toFixed(2);
};

const SunPosition = ({ sunrise, sunset }: Props) => {
    const dayProgress = calculateSunPosition(sunrise, sunset);

    return (
        <section aria-labelledby="sun-tracker-heading">
            <h2 id="sun-tracker-heading" className="section-title">Sun Tracker</h2>
            <div className="card">
                <div className="flex justify-between items-center font-black uppercase text-gray-400 text-xs tracking-widest mb-6">
                    <span className="flex items-center gap-2"><LuSunrise className="text-xl text-primary-500" aria-hidden="true"/> Sunrise</span>
                    <span className="flex items-center gap-2">Sunset <LuSunset className="text-xl text-primary-500" aria-hidden="true"/></span>
                </div>

                <div className="relative h-4 w-full rounded-full bg-gray-100 dark:bg-[#1e1e20] border-2 border-gray-200 dark:border-[#27272a] overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-y-0 left-0 bg-primary-500" style={{ width: `${dayProgress}%` }}></div>
                </div>

                <div className="flex justify-between font-bold text-gray-900 dark:text-white mt-4 text-lg">
                    <p>{new Date(sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>{new Date(sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
        </section>
    );
};

export default SunPosition;