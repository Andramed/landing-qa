'use client'

import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import IndividualLearning from "@/components/IndividualLearning";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [openBurgerState, setOpenBurgerState] = useState(false);

  const toggleBurger = () => {
    setOpenBurgerState(prevState => !prevState);
  };

  return (
    <main className=" bg-pageColor max-w-[1440px] m-auto font-roboto">
          <Header openBurgerState={openBurgerState} toggleBurger={toggleBurger} />
          <Hero/>
          <div className=" bg-black text-white px-10">
            <AboutMe/>
            <IndividualLearning/>
          </div>
          
    </main>
  );
}
