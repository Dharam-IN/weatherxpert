interface Props { lat: number; lon: number; }

const Map = ({ lat, lon }: Props) => {
    return (
        <section className="h-full flex flex-col" aria-labelledby="live-radar-heading">
            <h2 id="live-radar-heading" className="section-title">Live Radar</h2>
            <div className="card !p-2 flex-1 min-h-[300px]">
                <iframe
                    className="w-full h-full min-h-[300px] rounded-2xl filter grayscale-[0.5] contrast-125 hover:grayscale-0 transition-all duration-500"
                    src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=wind&product=ecmwf&level=surface&lat=${lat}&lon=${lon}&message=true`}
                    title="Live interactive weather and wind radar map"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Map;