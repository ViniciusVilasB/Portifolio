import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header(){

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        setIsScrolling(true);
        
        if (window.scrollTimeout) {
            clearTimeout(window.scrollTimeout);
        }

        window.scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
        }, 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(window.scrollTimeout);
        };
    }, []);

    return(
        <>
            <header className={`flex w-full bg-minha-cor-1 text-white justify-between items-center h-16 p-4 fixed shadow-lg
                transition-all duration-200 ease-in-out
                ${isScrolling ? "backdrop-blur-sm bg-minha-cor-1 bg-opacity-80" : "bg-minha-cor-1"}`}>
                <div>
                    <h1>Vinicius Vilas Boas</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li className="button-nav"><NavLink to="/">Home</NavLink></li>
                        <li className="button-nav"><NavLink to="/about">Sobre mim</NavLink></li>
                        <li className="button-nav"><NavLink to="/projects">Projetos</NavLink></li>
                        <li className="button-nav"><NavLink to="/contact">Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
