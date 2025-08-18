import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function NewProjects() {

  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const username = 'ViniciusVilasB';
  const repoNames = [
    'GS-Web',
    'CinePortal',
    'Pokedex',
  ];

  useEffect(() => {
    setLoading(true);

    Promise.all(
      repoNames.map(name =>
        fetch(`https://api.github.com/repos/${username}/${name}`)
          .then(res => {
            if (!res.ok) throw new Error('Repo não encontrado');
            return res.json();
          })
          .catch(() => null)
      )
    ).then(results => {
      setRepos(results.filter(r => r !== null));
      setLoading(false);
    });
  }, []);

  const projetosFiltrados = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

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

      {loading && <p>Carregando projetos do GitHub...</p>}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        gap-10 md:gap-5 m-5 w-full justify-items-center items-center'>

        {projetosFiltrados.length > 0 ? projetosFiltrados.map(repo => (
          <ProjectCard
            key={repo.id}
            titulo={repo.name}
            descricao={repo.description}
            ano={new Date(repo.updated_at).getFullYear()}
            imagem_destaque={"imgTesteRede1.jpg"}
            link={repo.homepage || repo.html_url}
          />
        )) : (
          !loading && <p className='text-xl'> Projeto não encontrado</p>
        )}

        {/* {projetosFiltrados.length > 0 ? projetosFiltrados.map((repo, index) => (
          <ProjectCard
            key={repo.id}
            titulo={repo.name}
            descricao={repo.description}
            ano={new Date(repo.updated_at).getFullYear()}
            imagem_destaque={`imgTesteRede${index + 1}.jpg`} // índice + 1 para começar em 1
            link={repo.homepage || repo.html_url}
          />
        )) : (
          !loading && <p className='text-xl'> Projeto não encontrado</p>
        )} */}

      </div>

    </main>
  );
}
