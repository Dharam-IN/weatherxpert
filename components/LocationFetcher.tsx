'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function LocationFetcher() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const q = searchParams.get('q');
        const lat = searchParams.get('lat');
        const lon = searchParams.get('lon');

        // Only ask for location if there is no search query and no coordinates in URL
        if (!q && !lat && !lon) {
            if ("geolocation" in navigator) {
                setLoading(true);
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        router.replace(`/?lat=${latitude}&lon=${longitude}`);
                    },
                    (error) => {
                        console.error("Location access denied or failed:", error);
                        setLoading(false);
                    }
                );
            }
        }
    }, [searchParams, router]);

    if (loading) {
        return (
            <div className="fixed top-6 right-6 bg-primary-500 text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-bold animate-pulse z-50 flex items-center gap-2 border-2 border-primary-400">
                <FaMapMarkerAlt /> Fetching Live Location...
            </div>
        );
    }

    return null;
}