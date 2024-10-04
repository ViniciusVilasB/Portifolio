import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID') // ATERAR PARA sistema DE EMAIL FUNCIONAR
            .then((response) => {
                alert('Email enviado com sucesso!');
            }, (err) => {
                // alert('Falha ao enviar o email. Tente novamente.');
                alert('Essa função está em manutenção, utilize outrtos meios de comunicação.');
            });
    };

    return (
        <div className="min-h-screen flex items-center flex-col justify-evenly">

            <div>
                <h1 className='text-4xl text-minha-cor-1'>Entre em contato comigo</h1>
                <h2 className='text-xl px-1 text-minha-cor-1-light'>Você pode me enviar um email apenas preenchendo os campos abaixo</h2>
            </div>

            <div className='flex justify-evenly w-full items-center flex-col-reverse md:flex-row gap-3'>
                <div className=''>
                    <img
                        src={imgChatting}
                        alt="Imagem de pessoas conversando por texto"
                        className="w-96 "
                    />
                </div>

                <div className="justify-center items-center h-64 bg-minha-cor-2 border rounded-lg hidden md:flex">
                    <div className="w-1 h-1/2 bg-minha-cor-2"></div>
                </div>

                <form onSubmit={sendEmail} className="w-96 border border-minha-cor-1 rounded-lg">
                    <div className="flex justify-center my-4 gap-6 w-full">
                        <textarea
                            name="name"
                            rows="1"
                            className="p-3 w-3/12 text-sm text-gray-900 border border-minha-cor-1 rounded-md"
                            placeholder="Nome"
                            required
                            onChange={handleChange}
                        ></textarea>

                        <textarea
                            name="email"
                            rows="1"
                            className="p-3 w-7/12 text-sm text-gray-900 border border-minha-cor-1 rounded-md"
                            placeholder="Endereço de email"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="px-4 my-2 rounded-t-lg">
                        <textarea
                            name="message"
                            rows="5"
                            className="w-full px-2 text-sm border border-minha-cor-1 focus:ring-0 rounded-md"
                            placeholder="Conteúdo"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-center px-3 py-2 border-t-2">
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-minha-cor-1 rounded-lg hover:bg-minha-cor-1-light">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
