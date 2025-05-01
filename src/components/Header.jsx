/**
 * @copyright 2025 JuanMartinez
 * @license apache-2.0
*/

/**
 * Componentes
*/
import { useState } from "react";

/**
 * Componentes
*/
import Navbar from "./Navbar"


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screem-2xl mx-auto w-full px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="" className="logo">
                        <img src="../portafolio_juan/images/logo.svg" width={40} height={40} alt="Juan Martinez"/>
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={()=> setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen}/>
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contacta me</a>
            </div>
        </header>
    )
}

export default Header