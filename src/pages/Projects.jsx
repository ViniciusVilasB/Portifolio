import { useState } from 'react';
import MovieCard from '../components/ProjectCard';
import movies from '../data/projects.json';

export default function projects() {

  const [search, setSearch] = useState('');

  const filmesFiltrados = movies.filter(movie => (movie.titulo.toLowerCase().includes(search.toLowerCase())));

  return (
    <>
      <main className='grid grid-cols-4 justify-items-center gap-5'>
        <h2 className='col-span-4 text-2xl font-bold text-center mb-5'>Veja todos os projetos</h2>
        <form className='col-span-4 w-2/4 flex flex-col justify-center gap-2 mb-5'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquise um projeto'
            className=' text-black p-2 mb-5 border border-gray-300 rounded-md' />
        </form>
        {
          filmesFiltrados.length > 0 ?
          filmesFiltrados.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
          :
          <p> Projeto não encontrado</p>
        }
      </main>
    </>
  )
}