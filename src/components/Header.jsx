import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineCode,
    AiOutlineMessage,
    AiOutlineMenu,
    AiOutlineClose,
} from "react-icons/ai";

export default function Header(){ 

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerText, setHeaderText] = useState("Vinicius Vilas Boas");

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

    useEffect(() => {
        setHeaderText(isMenuOpen ? 'VB' : 'Vinicius Vilas Boas');
    }, [isMenuOpen]);

    const navItems = [
        { to: '/', label: 'Home', icon: <AiOutlineHome /> },
        { to: '/about', label: 'Sobre mim', icon: <AiOutlineUser /> },
        { to: '/projects', label: 'Projetos', icon: <AiOutlineCode /> },
        { to: '/contact', label: 'Contato', icon: <AiOutlineMessage /> },
      ];

    return(
        <header className={`flex w-full bg-minha-cor-1 text-white justify-between items-center h-16 p-6 fixed shadow-lg
            transition-all duration-200 ease-in-out
            ${isScrolling & !isMenuOpen ? "backdrop-blur-sm bg-minha-cor-1 bg-opacity-80" : "bg-minha-cor-1"}`}>

            <div>
                <h1>{headerText}</h1>
            </div>

            <div className="md:hidden hover:cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <AiOutlineClose size = {24} /> : <AiOutlineMenu size = {24} />}
            </div>

            <nav className={`absolute top-16 left-0 p-4 transition-all duration-200 ease-in-out md:static md:flex md:gap-6
                ${isMenuOpen ? 'block w-full bg-minha-cor-1': 'hidden'}`}>

                <ul className="flex flex-col md:flex-row gap-6">
                    {navItems.map(({ to, label, icon }) => (
                        <li key={to} className="button-nav">
                            <NavLink 
                                to={to}
                                className={'flex items-center gap-1'}>
                                {icon}
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    )
}
