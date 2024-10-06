import { BsInstagram, BsLinkedin, BsGithub  } from "react-icons/bs";

export default function Footer(){
    return(
<<<<<<< HEAD
        <footer className="flex w-full bg-black text-white items-center justify-center flex-col p-2 gap-2">
            <h6>Desenvolvido por Vinicius Vilas Boas</h6>
=======
        <footer className="flex w-full bg-minha-cor-1 text-white items-center justify-center flex-col p-3 gap-2 mt-2">
            <h1>Desenvolvido por Vinicius Vilas Boas</h1>
>>>>>>> trabalhando-geral
            <div className="flex gap-4">
                <a
                    href="https://www.instagram.com/vinicius_vilasb/"
                    type="button"
<<<<<<< HEAD
                    target="blank">
=======
                    target="blank"
                    className="rounded-full p-2 transition duration-150 ease-in-out hover:bg-minha-cor-2">
>>>>>>> trabalhando-geral
                    <BsInstagram size={24}/>
                </a>
                <a
                    href="https://github.com/ViniciusVilasB"
                    type="button"
<<<<<<< HEAD
                    target="blank">
=======
                    target="blank"
                    className="rounded-full p-2 transition duration-150 ease-in-out hover:bg-minha-cor-2">
>>>>>>> trabalhando-geral
                    <BsGithub size={24}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/vinicius-vilas/"
                    type="button"
<<<<<<< HEAD
                    target="blank">
=======
                    target="blank"
                    className="rounded-full p-2 transition duration-150 ease-in-out hover:bg-minha-cor-2">
>>>>>>> trabalhando-geral
                    <BsLinkedin size={24}/>
                </a>
            </div>
        </footer>
    )
}