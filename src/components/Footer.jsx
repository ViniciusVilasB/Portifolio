import { BsInstagram, BsLinkedin, BsGithub  } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="flex w-full bg-black text-white items-center justify-center flex-col p-2 gap-2">
            <h6>Desenvolvido por Vinicius Vilas Boas</h6>
            <div className="flex gap-4">
                <a
                    href="https://www.instagram.com/vinicius_vilasb/"
                    type="button"
                    target="blank">
                    <BsInstagram size={24}/>
                </a>
                <a
                    href="https://github.com/ViniciusVilasB"
                    type="button"
                    target="blank">
                    <BsGithub size={24}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/vinicius-vilas/"
                    type="button"
                    target="blank">
                    <BsLinkedin size={24}/>
                </a>
            </div>
        </footer>
    )
}