"use client";
import React, { useEffect, useState } from "react";

const Mobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button 
                className="block ml-auto border-none bg-transparent cursor-pointer w-10 h-10 z-[1001] relative" 
                onClick={handleClick}
                aria-label="Menu Mobile"
            >
                <span className={`block w-[30px] h-[3px] bg-black my-[5px] mx-auto rounded-sm transition-all duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}></span>
                <span className={`block w-[30px] h-[3px] bg-black my-[5px] mx-auto rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-[30px] h-[3px] bg-black my-[5px] mx-auto rounded-sm transition-all duration-300 ${isOpen ? "translate-y-[-8px] -rotate-45" : ""}`}></span>
            </button>

            {shouldRender && (
                <div className={`absolute top-[75px] right-0 w-[200px] bg-white shadow-lg p-4 rounded-lg z-[1000] transition-transform duration-500 ${isOpen ? "animate-slideInRight" : "animate-slideOutRight opacity-0"}`}>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                           <li key={item}>
                               <a 
                                   href={`#${item.toLowerCase()}`} 
                                   onClick={() => setOpen(false)}
                                   className="text-black no-underline block px-2 py-1 hover:bg-blue-500 hover:text-white rounded"
                               >
                                   {item}
                               </a>
                           </li> 
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Mobile;