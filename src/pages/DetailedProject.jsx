import { useParams, Link } from "react-router-dom";
import { useState } from "react"; 
import data from '../data/projects.json';
import PageNotFound from "./PageNotFound";
import { FaGithub, FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";


export default function DetailedProject() {
    const { id } = useParams();
    const project = data.find((project) => project.id == id);
    
    if (!project) {
        return <PageNotFound />;
    }

    const images = project.galeria_imagens;
    const isGitHubLink = project.link && project.link.includes('github.com');

    const [modalAberto, setModalAberto] = useState(false); 
    const [imagemAtual, setImagemAtual] = useState(0);

    const abrirModal = (index) => {
        setImagemAtual(index);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };
    
    const proximaImagem = () => {
        setImagemAtual((imagemAnterior) => (imagemAnterior === images.length - 1 ? 0 : imagemAnterior + 1));
    };

    const imagemAnterior = () => {
        setImagemAtual((imagemAnterior) => (imagemAnterior === 0 ? images.length - 1 : imagemAnterior - 1));
    };


    return (
        <main className="bg-gray-100 text-minha-cor-1 relative">
            
            <div
                style={{ backgroundImage: `url(/${project.imagem_destaque})` }}
                className="relative h-80 w-full bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.titulo}</h1>
                    {/* <p className="text-xl text-white mt-2">Ano: {project.ano}</p> */}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
                    <p className="text-lg leading-relaxed">{project.conteudo}</p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-5 bg-minha-cor-1 text-white font-semibold rounded-lg shadow-md hover:bg-minha-cor-1-light transition-transform transform">
                        {isGitHubLink ? <FaGithub size={20} /> : <FiExternalLink size={20} />}
                        Ver Projeto
                    </a>
                    <Link to="/projects" className="flex items-center gap-2 py-2 px-5 bg-gray-200  font-semibold rounded-lg hover:bg-gray-300 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                        <FaArrowLeft />
                        Voltar para Projetos
                    </Link>
                </div>

                {images && images.length > 0 && (
                    <>
                        <hr className="border-minha-cor-1 mb-12" />
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Galeria</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                                        onClick={() => abrirModal(index)}
                                    >
                                        <img
                                            src={`/${image}`}
                                            alt={`Imagem da galeria ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </>
                )}
            </div>

            {modalAberto && (
                <div 
                    className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
                    onClick={fecharModal}
                >
                    <button className="absolute top-5 right-5 text-white text-3xl z-50" onClick={fecharModal}>
                        <FaTimes />
                    </button>

                    <button 
                        className="absolute left-5 text-white text-4xl z-50"
                        onClick={(e) => { e.stopPropagation(); imagemAnterior(); }}
                    >
                        <FaChevronLeft />
                    </button>

                    <div className="relative w-full max-w-4xl h-full max-h-[85vh] flex items-center justify-center"
                         onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`/${images[imagemAtual]}`}
                            alt={`Imagem da galeria ${imagemAtual + 1}`}
                            className="object-contain max-h-full max-w-full rounded-lg"
                        />
                    </div>
                    
                    <button 
                        className="absolute right-5 text-white text-4xl z-50"
                        onClick={(e) => { e.stopPropagation(); proximaImagem(); }}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </main>
    );
}
