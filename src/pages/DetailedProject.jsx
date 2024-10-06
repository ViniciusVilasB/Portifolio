import { useParams } from "react-router-dom";
import data from '../data/projects.json';
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function DetailedProject() {
    const { id } = useParams();
    const project = data.find((project) => project.id == id);
    
    if (!project) {
        return <PageNotFound />;
    }

    const images = project.galeria_imagens;

    return (
        <main className="min-h-screen">
            <div style={{
                backgroundImage: `url(/${project.imagem_destaque})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
            }}
            alt={project.titulo}
            className="flex flex-col justify-center items-center w-full">
                <h2 className="text-4xl font-semibold text-white bg-minha-cor-2 px-4 py-2 rounded-full">{project.titulo}</h2>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <p className="px-8 mt-10 text-xl">{project.conteudo}</p>

                <div className="flex flex-col justify-center p-4">
                    {images.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">Galeria:</h2>
                            <div className={`grid grid-cols-1 lg:grid-cols-${Math.min(images.length, 4)} gap-4`}>
                                {images.map((image, index) => (
                                    <div key={index} className="flex justify-center">
                                        <img
                                            src={`/${image}`}
                                            alt={`Imagem ${index + 1}`}
                                            className="object-cover max-h-64 rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <Link
                    className="py-2 px-3 bg-minha-cor-1 hover:bg-minha-cor-1-light m-4 text-white rounded-xl"
                    to={`/projects/`}
                    onClick={() => window.scrollTo(0, 0)}>
                    Voltar
                </Link>
            </div>
        </main>
    );
}
