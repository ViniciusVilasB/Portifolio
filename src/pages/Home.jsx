import { Link } from "react-router-dom";
import data from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {

  const imgPicProfile = 'picProfile.png';

  const projetosDestaque = data.slice(0, 1);

  return (
    <main className="bg-gray-100">

      <section className="min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Vinicius Vilas Boas</h1>
            <p className="text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Técnico em Desenvolvimento de Sistemas e estudante de Engenharia de Software.
            </p>
            <Link
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-3 py-3 px-8 bg-minha-cor-1 text-white font-bold rounded-lg shadow-lg hover:bg-minha-cor-1-light transition-transform transform"
            >
              Ver meus projetos
              <FaArrowRight />
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center md:ml-32">
            <img
              src={imgPicProfile}
              alt="Foto de perfil de Vinicius Vilas Boas"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-2 border-minha-cor-1-light"
            />
          </div>

        </div>
      </section>

      <section className="bg-minha-cor-1 text-white py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className='text-lg md:text-xl leading-relaxed'>
            Formado como Técnico em Desenvolvimento de Sistemas e atualmente cursando Engenharia de Software na FIAP. Tenho um forte interesse em análise de dados, segurança da informação e redes. Meu objetivo é aplicar minha experiência para construir soluções eficientes e seguras.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Projeto em Destaque</h2>
            <p className="text-lg mt-2">Uma amostra do meu trabalho recente.</p>
          </div>

          <div className="max-w-md mx-auto">
            {projetosDestaque.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="font-bold text-minha-cor-1 hover:underline text-lg"
            >
              Ver todos os projetos →
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}