import React from "react";
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {

    return (
        <form
      action="https://formsubmit.co/officegenisson@gmail.com"
      method="POST"
      className={styles.form}
      >

        <div>
            <label htmlFor="name">Nome</label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
            />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            required
            />
        </div>

        <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
                required
            />
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://genissondev.vercel.app/" />

        <button
            type="submit"
            style={{
            padding: "12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: '100px'
            }}
        >
            Enviar
        </button>
    </form>
    )
}

export default ContactForm;