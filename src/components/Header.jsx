import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="flex w-full bg-black text-white justify-between items-center h-16 p-4">
                <div>
                    <h1 className="">Vinicius Vilas Boas</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">Sobre mim</NavLink></li>
                        <li><NavLink to="/projects">Projetos</NavLink></li>
                        <li><NavLink to="/contact">Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
