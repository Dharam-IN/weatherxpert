import { Air } from '@/types/AirType';

const airTable = [
    { name: 'Excellent', color: '#10b981', description: 'Air quality is considered satisfactory.' },
    { name: 'Fair', color: '#f59e0b', description: 'Air quality is acceptable; moderate concern.' },
    { name: 'Poor', color: '#f97316', description: 'Members of sensitive groups may experience health effects.' },
    { name: 'Unhealthy', color: '#ef4444', description: 'Everyone may begin to experience health effects.' },
    { name: 'Dangerous', color: '#8b5cf6', description: 'Health alert: everyone may experience serious effects.' },
];

const AirQuality = ({ data }: { data: Air }) => {
    const currentAir = airTable[data.main.aqi - 1];

    const components = [
        { name: 'PM2.5', value: data.components.pm2_5 }, { name: 'PM10', value: data.components.pm10 },
        { name: 'CO2', value: data.components.co }, { name: 'NH3', value: data.components.nh3 },
        { name: 'NO', value: data.components.no }, { name: 'NO2', value: data.components.no2 },
        { name: 'O3', value: data.components.o3 }, { name: 'SO2', value: data.components.so2 },
    ];

    return (
        <section aria-labelledby="aqi-heading">
            <h2 id="aqi-heading" className="section-title">Air Quality Index</h2>
            <div className="card">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-3xl font-black uppercase tracking-tight" style={{ color: currentAir.color }}>
                            {currentAir.name}
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 max-w-sm">{currentAir.description}</p>
                    </div>
                    <div className="text-6xl font-black opacity-10" style={{ color: currentAir.color }} aria-hidden="true">{data.main.aqi}</div>
                </div>

                <div className="relative mt-8 grid h-3 w-full grid-cols-5 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800" aria-hidden="true">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${airTable.map(i => i.color).join(',')})` }}></div>
                    <div className="absolute top-0 bottom-0 bg-white dark:bg-black w-2 -ml-1 border-2 border-gray-900 rounded-full z-10" style={{ left: `${(data.main.aqi / 5) * 100 - 10}%` }}></div>
                </div>

                <div className="mt-8 grid grid-cols-4 md:grid-cols-8 gap-2 border-t-2 border-gray-100 dark:border-gray-800 pt-6">
                    {components.map(component => (
                        <div className="flex flex-col items-center justify-center text-center" key={component.name}>
                            <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">{component.name}</p>
                            <p className="my-1 font-bold text-gray-900 dark:text-white text-lg">{component.value.toFixed(0)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirQuality;