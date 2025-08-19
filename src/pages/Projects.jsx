import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import data from '../data/projects.json';
import { FiSearch } from 'react-icons/fi';

export default function Projects() {

  const [search, setSearch] = useState('');

  const projetosFiltrados = data.filter(project => (project.titulo.toLowerCase().includes(search.toLowerCase())));

  return (
    <main className='min-h-screen bg-gray-100 py-16 px-4'>
      <div className='max-w-7xl mx-auto'>

        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Meus Projetos</h1>
          <p className='text-xl px-1 text-minha-cor-1-light'>Explore uma seleção dos trabalhos que desenvolvi.</p>
        </div>

        <form className='w-full max-w-lg mx-auto mb-12 relative'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquisar por nome...'
            className='w-full p-3 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-minha-cor-1'
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
        </form>

        {projetosFiltrados.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {projetosFiltrados.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className='text-center py-16'>
            <p className='text-xl'>Nenhum projeto encontrado com esse nome.</p>
          </div>
        )}
      </div>
    </main>
  )
}