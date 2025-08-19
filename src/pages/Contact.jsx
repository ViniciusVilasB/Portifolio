import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {

  const imgChatting = 'chatting.svg';

  const whatsappNumber = "5535988255977";
  const emailAddress = "vilas.vinicius@hotmail.com";

<<<<<<< HEAD
    return (
        <div className="main justify-evenly">

            <div>
                <h1 className='text-4xl'>Entre em contato comigo</h1>
                {/* <h2 className='text-xl px-1 text-minha-cor-1'>Você pode me enviar um email apenas preenchendo os campos abaixo</h2> */}
                <h2 className='text-xl px-1 text-minha-cor-1-light'>Você pode me enviar uma mensagem no Email ou Whatsapp</h2>
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

                {/* <div className="w-96 border border-minha-cor-1 rounded-lg">
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

                </div> */}

                <div className="w-96 border-2 border-minha-cor-1 rounded-lg">
                    <div className="py-8 text-center space-y-4">
                        <div>
                            <h1 className="text-2xl">Email:</h1>
                            <p>vilas.vinicius@hotmail.com</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">WhatsApp:</h1>
                            <p>35 98825-5977</p>
                        </div>
                    </div>
                </div>

            </div>
=======
  return (
    <main className="min-h-screen bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Entre em Contato</h1>
          <p className='text-lg max-w-2xl mx-auto'>
            Sinta-se à vontade para me enviar uma mensagem.
          </p>
>>>>>>> trabalhando-geral
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 bg-white p-8 md:p-12 rounded-2xl shadow-lg">

          <div className="w-full md:w-5/12">
            <img
              src={imgChatting}
              alt="Ilustração de pessoas conversando"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          <div className="w-full md:w-6/12 space-y-6">
            
            <a 
              href={`mailto:${emailAddress}`}
              className="group flex items-center gap-5 p-5 rounded-xl border border-minha-cor-1 hover:bg-minha-cor-1 hover:text-white transition-all duration-300"
            >
              <FaEnvelope className="text-minha-cor-1 text-4xl group-hover:text-white transition-colors duration-300" />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="transition-colors duration-300">{emailAddress}</p>
              </div>
            </a>

            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-xl border border-minha-cor-1 hover:bg-minha-cor-1 hover:text-white transition-all duration-300"
            >
              <FaWhatsapp className="text-minha-cor-1 text-4xl group-hover:text-white transition-colors duration-300" />
              <div>
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="transition-colors duration-300">(35) 98825-5977</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}