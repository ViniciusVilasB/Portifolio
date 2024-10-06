import imgVideoGames from '../assets/videoGames.svg';
import imgMap from '../assets/map.svg';

export default function About(){
    return(

        <div className="min-h-screen flex items-center flex-col justify-evenly"> 

            <div className="flex flex-col justify-evenly items-center h-96">
                <h1 className='text-4xl'>Quem sou eu?</h1>

                <p className="text-xl text-minha-cor-1-light md:mx-52">Sou apaixonado por tecnologia e adoro explorar novas ideias e desafios. Aqui você vai conhecer um pouco mais sobre mim: de onde venho, minhas paixões e o que me inspira no dia a dia. Quando não estou estudando ou trabalhando, você pode me encontrar escutando musicas, jogando videogame, futebol ou volei.</p>
            </div>

            <div className="flex flex-col justify-around bg-minha-cor-1 items-center h- w-full p-4
            md:flex-row-reverse">
                <div className='md:w-1/2'>
                    <h1 className='flex flex-col items-center text-3xl text-white mb-5'>Passatempos</h1>
                    <p className='text-xl text-white'>Sou um grande fã de videogames, tenho um Nintendo Switch, onde me aventuro em diferentes mundos. Também gosto de desafios mentais, como jogar xadrez. Nos momentos de lazer, gosto de jogar futebol ou vôlei com os amigos. Essas atividades me mantêm ativo e são uma ótima maneira de relaxar e me divertir.</p>
                </div>

                <img
                    src={imgVideoGames}
                    alt="Imagem de um video game"
                    className="hidden md:block md:w-72"
                />

            </div>

            <div className='flex flex-col justify-around items-center h-96 w-full p-4
            md:flex-row'>

                <div className='flex flex-col justify-around items-center md:w-1/2'>
                    <h1 className='text-3xl m-6'>De onde venho</h1>
                    <p className="text-xl">Nasci em Itajubá, um lugar que sempre terá um espaço especial no meu coração. Depois, me mudei para Santa Rita do Sapucaí, que me proporcionou novas experiências e muitas histórias para contar. Ambas as cidades têm um papel importante na minha trajetória e me moldaram como pessoa.</p>
                </div>

                <img
                    src={imgMap}
                    alt="Imagem de um mapa"
                    className="hidden md:block md:w-80"
                />

            </div>

        </div>

    )
}
