import React from "react";

type ProjectBoxProps = {
    name: string,
    description: string,
    link: string
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ name, description, link }) => {
    return (
        <div className="bg-[#212020] text-white rounded-md w-full max-w-[350px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            {/* Nota: Adicione a imagem project.png na pasta public/images/ */}
            <img src="/images/project.png" alt="project image" className="w-full h-[250px] object-cover" />
            <div className="p-5">
                <h4 className="text-lg font-bold mb-2">{name}</h4>
                <p className="text-gray-400 pb-4 text-sm leading-relaxed">{description}</p>
                <a 
                    href={link} 
                    target="_blank" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm transition-colors"
                >
                    Ver mais &rarr;
                </a>
            </div>
        </div>
    )
}

export default ProjectBox;