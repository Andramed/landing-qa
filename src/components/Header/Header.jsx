import React, { useState, useEffect } from "react";
import Burger from "../Burger";
import Navbar from "../Navbar";

const Header = ({ openBurgerState, toggleBurger }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`py-10  sticky top-0 lg:px-20 sm:px-10  ${isScrolled ? "bg-black text-white z-50 w-full" : ""}`}>
            <div className="flex items-center justify-between">
                <img
                    className="w-24 h-14"
                    src={isScrolled ? "/logo-white.png" : "/logo.png"}
                    alt="logo"
                />
                <Navbar />
                <Burger isScrolled={isScrolled} openBurgerState={openBurgerState} toggleBurger={toggleBurger} />
                <div className="lg:flex sm:hidden">
                    <button className="text-white bg-purple-400 rounded-2xl px-4 py-2">
                        Консултация
                    </button>
                </div>
            </div>
            {openBurgerState ? 
                <div className="flex flex-col w-auto items-center gap-10 mt-10">
                    <Navbar openBurgerState={openBurgerState} />
                    <div>
                        <button className="text-white bg-purple-400 rounded-2xl px-4 py-2">
                            Консултация
                        </button>
                    </div>
                </div>
            : null}
        </header>
    );
};

export default Header;
