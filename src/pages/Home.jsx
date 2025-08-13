import { Link } from "react-router-dom";
import imgPicProfile from '../assets/picProfile.png';
import imgWebsite from '../assets/website.svg';

export default function Home(){

    return(
        <div className="min-h-screen flex items-center flex-col justify-evenly">
            <div className='flex flex-col justify-center h-96'>
                <h1 className='text-4xl'>Bem-vindo ao meu portfólio!</h1>
                <h2 className="text-xl px-1 text-minha-cor-1-light">Aqui você encontrará mais sobre mim e meus projetos. Sinta-se à vontade para explorar!</h2>
            </div>

            <div className="flex flex-col justify-around bg-minha-cor-1 items-center h-96 w-full p-4
            md:flex-row">
                <p className='md:w-1/2 text-xl text-white'>Sou estudante de Engenharia de Software na FIAP e formado como Técnico em Desenvolvimento de Sistemas na ETE FMC. Tenho um forte interesse em análise de dados, segurança da informação e redes. Meu objetivo é contribuir para equipes onde possa aplicar minha experiência e atingir meus objetivos.</p>

                <img
                    src={imgPicProfile}
                    alt="Imagem de uma foto de perfil"
                    className="hidden md:block md:w-80 rounded-full"
                />

            </div>

            <div className='flex flex-col justify-around items-center h-96 w-full p-4
            md:flex-row-reverse'>

                <div className='flex flex-col justify-center items-center h-96'>
                    <h1 className='text-3xl m-6'>Projetos Relevantes</h1>
                    <p className="text-xl">Você pode conferir todos os meus projetos clicando <Link 
                        to="/projects" 
                        onClick={() => window.scrollTo(0, 0)} 
                        style={{ textDecoration: 'underline' }}>
                        aqui
                    </Link>
                    .</p>
                </div>

                <img
                    src={imgWebsite}
                    alt="Imagem de um site"
                    className="md:w-80 w-40"
                />

            </div>
        </div>
    )

}
