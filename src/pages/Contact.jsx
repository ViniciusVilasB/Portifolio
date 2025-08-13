import React, { useState } from 'react';
import imgChatting from '../assets/chatting.svg';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="min-h-screen flex items-center flex-col justify-evenly">

            <div>
                <h1 className='text-4xl'>Entre em contato comigo</h1>
                <h2 className='text-xl px-1 text-minha-cor-1-light'>Você pode me enviar um email apenas preenchendo os campos abaixo</h2>
            </div>

            <div className='flex justify-evenly w-full items-center flex-col-reverse md:flex-row gap-3 m-10'>
                <img
                    src={imgChatting}
                    alt="Imagem de pessoas conversando por texto"
                    className="w-96 "
                />
                <div className="justify-center items-center h-64 bg-minha-cor-2 border rounded-lg hidden md:flex">
                    <div className="w-1 h-1/2 bg-minha-cor-2"></div>
                </div>

                <div className="w-96 border border-minha-cor-1 rounded-lg">
                    <form
                    className="flex flex-col p-4 gap-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log('Dados enviados:', formData);
                        alert('Email enviado.');

                        setFormData({ name: '', email: '', message: '' });
                    }}
                    >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 resize-none"
                        rows={4}
                        required
                    />

                    <button
                        type="submit"
                        className="bg-minha-cor-1 text-white rounded py-2 hover:bg-minha-cor-1-light transition"
                    >
                        Enviar
                    </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
