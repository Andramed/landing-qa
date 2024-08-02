import React from "react";

const Navbar = ({openBurgerState}) => {
    const showNavbar = openBurgerState ? 'sm:flex sm:flex-col': "sm:hidden"
    return(

        <nav className=" lg:w-[75%]  ">
                <ul className={`${showNavbar} flex lg:justify-between lg:flex sm:gap-2 sm:mt-2 `}>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Програма</a>
                    </li>
                    <li>
                        <a href="#">Об авторе</a>
                    </li>
                    <li>
                        <a href="#">Вопрос ответ</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Стоимость</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar