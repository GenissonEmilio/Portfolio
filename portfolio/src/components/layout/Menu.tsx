import React from "react";
import Mobile from "./Mobile";

const Menu: React.FC = () => {
    const myName: string = "<Genisson Emilio/>";

    return (
        <nav className="flex items-center justify-between h-[60px] px-8 w-full max-w-7xl mx-auto">
            <div className="flex items-center">
                <a href="#home" className="text-blue-600 font-sans whitespace-nowrap text-lg font-bold no-underline">
                    {myName}
                </a>
            </div>

            {/* Menu Desktop - escondido em telas pequenas */}
            <ul className="hidden md:flex list-none gap-6 items-center">
                {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className="text-black font-bold px-2 py-1 hover:bg-blue-500 hover:text-white hover:rounded transition-colors duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <Mobile />
        </nav>
    )
}

export default Menu;