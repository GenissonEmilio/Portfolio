import React from "react";

type MenuOptionsProps = {
    name: string
}

const MenuOptions: React.FC<MenuOptionsProps> = ({ name }) => {
    return (
        <div className="flex items-center flex-row gap-4 pt-4 mb-4">
            <h2 className="whitespace-nowrap text-xl font-bold">{name}</h2>
            <div className="bg-blue-600 w-full h-[2px]"></div>
        </div>
    )
}

export default MenuOptions;