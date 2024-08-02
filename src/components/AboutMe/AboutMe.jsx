import React from "react";
import { Sharp } from "../svgs/SVGS";

const AboutMe = () => {
    return (
        <section id="About Me" className="  py-20  gap-4 text-white items-center flex lg:flex-row sm:flex-col -mt-10 z-20 ">
                <div className="flex text-center items-center gap-4 flex-col w-full">
                    <h2 className=" text-4xl">
                        Привет, меня зовут Фёдоров Станислав!
                    </h2>
                    <p className=" text-lg">
                        Обучаю и устраиваю тестировщиков как с полного нуля, так и с опытом. К каждому ученику индивидуальный подход. 
                    </p>
                    <a className=" lg:w-fit w-56 px-4 py-2 bg-purple-400 rounded-3xl"  href="https://t.me/prihodi_suda_tyt_qa/7" target="_blank" rel="noopener">Связаться со мной</a>
                </div>
                <div>
                        <ul className=" flex gap-4 lg:flex-row sm:flex-col">
                            <li className=" flex w-full gap-2">
                                <Sharp width={"w-[2rem]"} height={"h-[2rem]"}/>
                                <p>Средняя зарплата учеников — 150 тысяч</p>
                            </li>
                            <li className=" flex w-full gap-2">
                                <Sharp width={"w-[2.6rem]"} height={"h-[2rem]"}/>
                                <p>Реальный проект, на котором ты отработаешь  теоретические знания.</p>
                            </li >
                            <li className=" flex w-full gap-2">
                                <Sharp width={"w-[2rem]"} height={"h-[2rem]"}/>
                                <p>широкий спектр услуг для достижения вашей цели</p>
                            </li>
                        </ul>
                </div>
       
        </section>
    )
}

export default AboutMe