import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}){

    return(
        <>
        <div key={id} className="flex flex-col text-center justify-center items-center">
            <h2 className="font-semibold">{titulo}</h2>
              <img src={`/${imagem_destaque}`} alt={titulo} className="w-28 h-44 mt-3"/>
              <Link className="py-2 px-3 transition ease-in-out duration-300 bg-minha-cor-1 hover:bg-minha-cor-1-light m-4 text-white rounded-xl" to={`/movies/${id}`}>Ver detalhes</Link>
        </div>
        </>
    )

}