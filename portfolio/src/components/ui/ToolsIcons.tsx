"use client";
import React from "react";
import { motion } from "framer-motion";
import { any } from "three/tsl";

type ToolsIconsProps = {
    name: string,
    color: string,
    icon: React.ElementType<React.SVGProps<SVGSVGElement>>
}

const ToolsIcons: React.FC<ToolsIconsProps> = ({ name, color, icon: Icon}) => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center p-2 mx-auto rounded-lg shadow-lg w-[100px] bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Icon style={{ color: `${color}`, fontSize: '2.5rem' }} />
            <p className="whitespace-nowrap mt-2 text-sm font-medium">{name}</p>
        </motion.div>
    )
}

export default ToolsIcons;