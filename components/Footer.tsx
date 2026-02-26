import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-16 w-full border-t-2 border-gray-200 dark:border-[#27272a] bg-white dark:bg-[#121212] py-8 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
            <div className="mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 dark:text-gray-400">
                <div className="text-center md:text-left">
                    <h3 className="text-sm font-black tracking-[0.2em] uppercase text-gray-900 dark:text-gray-100">
                        Developed by Dharam-IN
                    </h3>
                    <p className="text-xs mt-2 font-medium opacity-70">© {new Date().getFullYear()} All rights reserved. Built with Next.js.</p>
                </div>
                <div className="flex items-center gap-5">
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-100 dark:bg-[#1e1e20] hover:bg-primary-500 hover:text-white transition-all duration-300" 
                        href="https://github.com/Dharam-IN"
                        title="GitHub"
                    >
                        <FaGithub className="text-xl" />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-100 dark:bg-[#1e1e20] hover:bg-primary-500 hover:text-white transition-all duration-300" 
                        href="https://linkedin.com/in/dharam-in"
                        title="LinkedIn"
                    >
                        <FaLinkedin className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;