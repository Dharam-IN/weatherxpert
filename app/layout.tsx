import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ChartInit from '@/utils/ChartInit';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

export const revalidate = 0;

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

// Use an environment variable for the base URL in AWS, fallback to localhost for dev
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://weatherxpert.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'WeatherXpert - Live Location Weather Dashboard',
        template: '%s | WeatherXpert',
    },
    description: 'Get real-time, highly accurate weather forecasts, air quality indices, sun tracking, and live wind maps based on your exact location with WeatherXpert.',
    keywords: ['WeatherXpert', 'live weather', 'local weather forecast', 'air quality index', 'wind map', 'AWS hosted weather app', 'real-time weather tracking'],
    authors: [{ name: 'Dharam-IN' }],
    creator: 'Dharam-IN',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        siteName: 'WeatherXpert',
        title: 'WeatherXpert - Precision Live Weather Dashboard',
        description: 'Track real-time weather, 7-day forecasts, air quality, and live radar maps effortlessly based on your exact location.',
        images: [
            {
                url: '/banner.png', // Ensure you upload a banner.png to your public folder
                width: 1200,
                height: 630,
                alt: 'WeatherXpert Dashboard Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'WeatherXpert - Precision Live Weather Dashboard',
        description: 'Track real-time weather, 7-day forecasts, air quality, and live radar maps effortlessly.',
        images: ['/banner.png'],
        creator: '@devxprite',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Ensures accessibility zooming is allowed
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
                <ThemeProvider>
                    <ChartInit />
                    <div className="mx-auto w-full max-w-[96rem] p-4 md:p-8 flex-1">
                        
                        {/* SEO Semantic Header */}
                        <header className="flex flex-col md:flex-row w-full items-center justify-between gap-4 mb-10 border-b-2 border-gray-200 dark:border-[#27272a] pb-6">
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg" aria-hidden="true">
                                    W
                                </div>
                                {/* H1 is perfect here for the main site title */}
                                <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
                                    Weather<span className="text-primary-500">Xpert</span>
                                </h1>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="flex-1 md:w-[24rem]">
                                    <SearchBar />
                                </div>
                                <ThemeToggle />
                            </div>
                        </header>
                        
                        {/* SEO Semantic Main */}
                        <main>{children}</main>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}