import React from "react";

const ContactForm: React.FC = () => {
    return (
        <form
            action="https://formsubmit.co/officegenisson@gmail.com"
            method="POST"
            className="flex flex-col justify-between w-full gap-4"
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-bold">Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="p-2 border-none rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-bold">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu email"
                    required
                    className="p-2 border-none rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-bold">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Sua mensagem"
                    required
                    className="p-2 h-[120px] border-none rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://genissondev.vercel.app/" />

            <button
                type="submit"
                className="p-3 bg-blue-600 text-white border-none rounded cursor-pointer w-[100px] hover:bg-blue-700 transition-colors self-start"
            >
                Enviar
            </button>
        </form>
    )
}

export default ContactForm;