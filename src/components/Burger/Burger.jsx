'use client'
import React, { useState } from "react";
import { BurgerImage, CloseImage } from "../svgs/SVGS";

const Burger = ({openBurgerState, toggleBurger, isScrolled}) => {
    

    return (
        <div onClick={toggleBurger}>
            {openBurgerState ? <CloseImage isScrolled={isScrolled} /> : <BurgerImage isScrolled={isScrolled} />}
        </div>
    );
};

export default Burger;
