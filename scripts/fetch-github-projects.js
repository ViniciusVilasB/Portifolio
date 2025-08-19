import 'dotenv/config';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = 'ViniciusVilasB';

const customData = [
    {
        repoName: 'Portifolio',
        imagem_destaque: 'images/portifolio/destaque.png',
        conteudo: 'Este próprio site de portfólio. Desenvolvido com React, Vite e Tailwind CSS para apresentar meus projetos de forma moderna e responsiva. Os dados dos projetos são buscados automaticamente da API do GitHub durante o processo de build para garantir a performance.',
        galeria_imagens: [],
    },
    {
        repoName: 'GS-Web',
        imagem_destaque: 'images/gs-web/destaque.jpg',
        conteudo: 'Este é um projeto detalhado sobre a Global Solution de Web. Focado em desenvolver uma solução inovadora para problemas de saúde, utilizando tecnologias web modernas como React e Node.js.',
        galeria_imagens: [
            'images/gs-web/galeria1.jpg',
        ],
    },
    {
        repoName: 'CinePortal',
        imagem_destaque: 'images/cineportal/destaque.jpg',
        conteudo: 'CinePortal é uma plataforma para entusiastas de cinema. Permite buscar filmes, ver detalhes, avaliações e criar listas personalizadas. Construído com a API do The Movie Database (TMDB).',
        galeria_imagens: [
            'images/cineportal/galeria1.jpg',
            'images/cineportal/galeria2.jpg',
            'images/cineportal/galeria3.jpg',
        ],
    },
    // {
    //     repoName: 'Pokedex',
    //     imagem_destaque: '',
    //     conteudo: 'Uma Pokedex clássica desenvolvida em React, consumindo a PokeAPI. Apresenta uma interface limpa para explorar os diferentes Pokémon, suas habilidades e estatísticas.',
    //     galeria_imagens: [],
    // },
];

const fetchOptions = {
    headers: {
        'User-Agent': 'Portfolio-Builder-Script',
        ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
    }
};

function fetchRepos() {
    return new Promise((resolve, reject) => {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`;
        https.get(url, fetchOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Erro ao buscar repositórios: ${res.statusCode}. Resposta: ${data}`));
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function buildProjectsData() {
    try {
        console.log('Buscando repositórios do GitHub...');
        const repos = await fetchRepos();
        console.log(`${repos.length} repositórios encontrados.`);

        const projects = customData.map((custom) => {
            const repo = repos.find(r => r.name === custom.repoName);
            if (!repo) {
                console.warn(`Aviso: Repositório '${custom.repoName}' não encontrado.`);
                return null;
            }
            return {
                id: repo.id,
                titulo: repo.name,
                descricao: repo.description,
                conteudo: custom.conteudo,
                ano: new Date(repo.updated_at).getFullYear(),
                link: repo.homepage || repo.html_url,
                imagem_destaque: custom.imagem_destaque,
                galeria_imagens: custom.galeria_imagens,
            };
        }).filter(p => p !== null);

        const outputPath = path.join(__dirname, '..', 'src', 'data', 'projects.json');
        fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));

        console.log(`✅ Arquivo 'projects.json' gerado com sucesso com ${projects.length} projetos!`);

    } catch (error) {
        console.error('❌ Erro ao gerar dados dos projetos:', error);
    }
}

buildProjectsData();