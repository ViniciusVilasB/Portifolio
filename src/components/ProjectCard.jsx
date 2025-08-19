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

      <div className='p-5 flex flex-col flex-grow'>
        {/* <p className='text-sm mb-1'>{ano}</p> */}
        <h3 className='text-xl font-bold mb-2'>{titulo}</h3>
        
        <p className='text-minha-cor-1 text-sm flex-grow line-clamp-3'>
          {descricao}
        </p>
      </div>

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