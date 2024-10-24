import { Link } from "react-router-dom";

export default function ProjectCard({id, titulo, imagem_destaque, descricao}){

    return(
        <div key={id} className="flex flex-col text-center justify-center items-center border border-minha-cor-1 rounded-xl min-h-80 w-64">
            <h2 className="font-semibold p-2 my-3 text-xl">{titulo}</h2>
                <img src={`/${imagem_destaque}`} alt={titulo} className="w-9/12 h-28 rounded-lg"/>
                <p className="p-2 my-3">{descricao}</p>

                <Link
                className="py-2 px-3 bg-minha-cor-1 hover:bg-minha-cor-1 m-4 text-white rounded-xl"
                to={`/projects/${id}`}
                onClick={() => window.scrollTo(0, 0)}>
                Ver detalhes
                </Link>
        </div>
    )

}