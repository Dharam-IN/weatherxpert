'use client';

import { useTheme } from './ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-4 shadow-sm transition-all hover:scale-105 hover:text-primary-500 text-slate-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
    );
};

export default ThemeToggle;