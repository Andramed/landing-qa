import React from "react";


const BurgerImage = ({isScrolled}) => {
    return (
        <svg className="  lg:hidden md:w-10 sm:w-12 h-auto" viewBox="0 0 12 12" enableBackground="new 0 0 12 12" >
            <g>
            <rect fill={`${isScrolled ? "#FFFFFF" : "#000000"}`} height="1" width="11" x="0.5" y="5.5"/>
            <rect fill={`${isScrolled ? "#FFFFFF" : "#000000"}`} height="1" width="11" x="0.5" y="2.5"/>
            <rect fill={`${isScrolled ? "#FFFFFF" : "#000000"}`} height="1" width="11" x="0.5" y="8.5"/>
            </g>
        </svg>
    )
}

const CloseImage = ({isScrolled}) => {
    return (
        <svg className="  lg:hidden md:w-10 sm:w-12 h-auto" viewBox="0 0 24 24" fill="none" >
        <path d="M6 6L18 18M18 6L6 18" stroke={`${isScrolled ? "#FFFFFF" : "#000000"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const Sharp = ({width, height}) => {
    return (
        <svg className={`${width} ${height}` } version="1.1" id="_x32_"  viewBox="0 0 512 512"  fill="#FFF" stroke="#FFF">

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" />

            <g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path className="st0" d="M418.562,173.34c5.999-1.291,10.281-6.582,10.281-12.724V103.86c0-3.927-1.775-7.649-4.834-10.124 c-3.058-2.466-7.07-3.425-10.912-2.6l-51.621,11.093V30.884c0-3.856-1.713-7.515-4.672-9.99c-2.964-2.475-6.869-3.507-10.662-2.816 l-38.686,7.013c-6.192,1.121-10.694,6.51-10.694,12.805v78.242l-80.658,17.333V64.117c0-3.856-1.713-7.514-4.672-9.99 c-2.958-2.475-6.864-3.506-10.662-2.816l-38.69,7.004c-6.192,1.12-10.693,6.511-10.693,12.806v76.25l-57.948,12.456 c-5.999,1.282-10.281,6.59-10.281,12.724v56.756c0,3.927,1.776,7.649,4.834,10.124c3.062,2.466,7.07,3.426,10.917,2.601 l52.478-11.281v108.39l-57.948,12.456c-5.999,1.282-10.281,6.582-10.281,12.715v56.737c0,3.928,1.776,7.649,4.834,10.125 c3.062,2.466,7.07,3.425,10.917,2.6l52.478-11.281v76.492c0,3.856,1.712,7.515,4.672,9.99c2.959,2.476,6.864,3.507,10.662,2.816 l38.686-6.995c6.192-1.12,10.698-6.51,10.698-12.805v-83.397l80.658-17.334v74.502c0,3.865,1.712,7.524,4.672,9.99 c2.96,2.475,6.865,3.506,10.662,2.815l38.686-7.004c6.192-1.121,10.694-6.51,10.694-12.805V377.35l57.087-12.267 c5.999-1.291,10.281-6.582,10.281-12.724v-56.729c0-3.927-1.775-7.649-4.834-10.124c-3.058-2.466-7.07-3.426-10.912-2.6 l-51.621,11.093v-108.39L418.562,173.34z M296.761,307.906l-80.658,17.326V216.85l80.658-17.334V307.906z"/> <path className="st0" d="M364.421,0.036c0.022,0,0.04,0,0.062-0.009L364.65,0L364.421,0.036z"/> </g> </g>

        </svg>
    )
}

const Tick = ({width, height}) => {
    return(
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

            <g id="SVGRepo_iconCarrier"> <path d="M7.29417 12.9577L10.5048 16.1681L17.6729 9" stroke="#C084FC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="12" cy="12" r="10" stroke="#C084FC" stroke-width="2"/> </g>

        </svg>
    )
}

export {
    BurgerImage,
    CloseImage,
    Sharp,
    Tick
}