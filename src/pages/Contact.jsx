import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {

  const imgChatting = 'chatting.svg';

  const whatsappNumber = "5535988255977";
  const emailAddress = "vilas.vinicius@hotmail.com";

  return (
    <main className="min-h-screen bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Entre em Contato</h1>
          <p className='text-lg max-w-2xl mx-auto'>
            Sinta-se à vontade para me enviar uma mensagem.
          </p>
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