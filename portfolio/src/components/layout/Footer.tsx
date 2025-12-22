import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center border-t-2 border-blue-600 py-6 mt-10 bg-white">
            <div className="flex gap-4 pt-2 mb-4">
                <a href="https://www.linkedin.com/in/genisson-emilio" target="_blank" className="text-2xl hover:text-blue-600 hover:scale-125 transition-transform duration-200"><FaLinkedinIn /></a>
                <a href="https://github.com/GenissonEmilio" target="_blank" className="text-2xl hover:text-blue-600 hover:scale-125 transition-transform duration-200"><FaGithub /></a>
                <a href="https://www.instagram.com/genisson.emilio" target="_blank" className="text-2xl hover:text-blue-600 hover:scale-125 transition-transform duration-200"><FaInstagram /></a>
            </div>
            <div>
                <p className="text-gray-700">&copy; 2025 genissondev. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;