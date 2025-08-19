import { Link } from 'react-router-dom';

export default function ProjectCard({ id, titulo, descricao, ano, imagem_destaque }) {
  return (
    <div className='h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300'>
      
      <div className='overflow-hidden'>
        <img
          src={`/${imagem_destaque}`}
          alt={`Imagem do projeto ${titulo}`}
          className='w-full h-48 object-cover transition-transform duration-500'
        />
      </div>

<<<<<<< HEAD
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
=======
      <div className='p-5 flex flex-col flex-grow'>
        {/* <p className='text-sm mb-1'>{ano}</p> */}
        <h3 className='text-xl font-bold mb-2'>{titulo}</h3>
        
        <p className='text-minha-cor-1 text-sm flex-grow line-clamp-3'>
          {descricao}
        </p>
      </div>
>>>>>>> trabalhando-geral

      <div className='p-5 border-t border-minha-cor-2'>
        <Link
          to={`/projects/${id}`}
          className='text-minha-cor-1 font-semibold hover:underline'
          onClick={() => window.scrollTo(0, 0)}
        >
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}