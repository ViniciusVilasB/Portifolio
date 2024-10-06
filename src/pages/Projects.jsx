import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import data from '../data/projects.json';

export default function Projects() {

  const [search, setSearch] = useState('');

  const projetosFiltrados = data.filter(project => (project.titulo.toLowerCase().includes(search.toLowerCase())));

  return (
    <main className='min-h-screen flex items-center flex-col justify-evenly m-10'>

        <h1 className='text-4xl'>Veja meus projetos</h1>

        <form className='col-span-4 w-2/4 flex flex-col justify-center gap-2 mb-5'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquise um projeto'
            className=' text-black p-2 mb-5 border border-gray-300 rounded-md' />
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        gap-10 md:gap-5 m-5 w-full justify-items-center items-center'>
          {
            projetosFiltrados.length > 0 ?
            projetosFiltrados.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
            :
            <p className='text-xl'> Projeto não encontrado</p>
          }
        </div>
    </main>
  )
  
}