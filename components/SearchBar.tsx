'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        const defaultValue = searchParams.get('q') || '';
        setQuery(defaultValue);
    }, [searchParams]);

    return (
        <form
            action={'/'}
            method="get"
            className="group flex w-full items-center rounded-2xl bg-gray-100 dark:bg-[#1e1e20] border-2 border-transparent focus-within:border-primary-500 focus-within:bg-white dark:focus-within:bg-[#121212] transition-all px-4 py-3"
        >
            <input
                name="q"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search city..."
                className="w-full bg-transparent px-2 outline-none font-bold text-gray-800 dark:text-gray-100 placeholder:text-gray-400 placeholder:font-semibold"
                required
            />
            <button type="submit" className="text-gray-400 hover:text-primary-500 transition-colors p-2 bg-white dark:bg-[#2a2a2d] rounded-xl shadow-sm">
                <FaSearch className="text-sm" />
            </button>
        </form>
    );
};

const SearchBar = () => {
    return (
        <Suspense>
            <Search />
        </Suspense>
    );
};

export default SearchBar;