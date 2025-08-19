import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-minha-cor-1-light text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
        
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {currentYear} &bull; Desenvolvido por Vinicius Vilas Boas
          </p>
          <p className="text-xs opacity-75">
            Versão 1.0.0
          </p>
        </div>

        <div className="flex gap-4">
            <a
                href="https://github.com/ViniciusVilasB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no GitHub"
                className="rounded-full p-2 transition-all duration-300 hover:bg-minha-cor-2 hover:scale-110"
            >
                <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-vilas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            className="rounded-full p-2 transition-all duration-300 hover:bg-minha-cor-2 hover:scale-110"
          >
            <BsLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}