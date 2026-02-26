import OverView from '@/components/Overview';
import fetchWeather from '@/utils/fetchWeather';
import WeatherInfo from '@/components/WeatherInfo';
import TodayForecast from '@/components/TodayForecast';
import DailyForecast from '@/components/DailyForecast';
import Map from '@/components/Map';
import fetchGeo, { fetchReverseGeo } from '@/utils/fetchGeo';
import fetchAir from '@/utils/fetchAir';
import AirQuality from '@/components/AirQuality';
import SunPosition from '@/components/SunPosition';
import LocationFetcher from '@/components/LocationFetcher';

interface SearchParams {
    q?: string;
    lat?: string;
    lon?: string;
}

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
    const { q = '', lat, lon } = searchParams;
    let city = null;

    // 1. Fetch by Live Location if coordinates exist
    if (lat && lon) {
        city = await fetchReverseGeo(Number(lat), Number(lon));
    } 
    // 2. Fetch by manual search or fallback to IP if 'q' is empty
    else {
        city = await fetchGeo(q);
    }

    if (!city) {
        return (
            <section className="mt-32 flex flex-col items-center justify-center text-center">
                <LocationFetcher />
                {/* Changed from H3 to H2 for correct SEO semantic structure */}
                <h2 className="text-4xl font-black md:text-5xl text-gray-800 dark:text-gray-100">Location Not Found</h2>
                <p className="mt-4 text-sm md:text-lg text-gray-500 max-w-lg font-medium">
                    We couldn't determine your location. Please ensure location services are enabled, or try searching manually.
                </p>
            </section>
        );
    }

    const weather = await fetchWeather({ lat: city.lat, lon: city.lon });
    const air = await fetchAir({ lat: city.lat, lon: city.lon });

    return (
        <div className="w-full animate-in fade-in duration-700">
            <LocationFetcher />
            
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
                
                {/* LEFT COLUMN: Overview & Today */}
                <div className="xl:col-span-4 space-y-6 md:space-y-8 flex flex-col">
                    <OverView data={weather.current} city={city} />
                    <TodayForecast data={weather.hourly} />
                </div>

                {/* MIDDLE COLUMN: Weather Info & Air Quality */}
                <div className="xl:col-span-5 space-y-6 md:space-y-8 flex flex-col">
                    <WeatherInfo data={weather.current} />
                    <AirQuality data={air} />
                    <SunPosition sunrise={weather.current.sunrise} sunset={weather.current.sunset} />
                </div>

                {/* RIGHT COLUMN: 7-Day & Map */}
                <div className="xl:col-span-3 space-y-6 md:space-y-8 flex flex-col">
                    <DailyForecast data={weather.daily} />
                    <Map lat={city.lat} lon={city.lon} />
                </div>

            </div>
        </div>
    );
};

export default Page;