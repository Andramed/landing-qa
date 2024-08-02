import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
    const canvasRef = useRef(null);
    const blobTimeoutsRef = useRef([]);
    const mousePositionsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Configurația bloburilor
        const blobConfig = {
            width: 50, // lățimea bloburilor
            height: 50, // înălțimea bloburilor
            radius: 0, // raza colțurilor rotunjite
            spacing: 1 // spațierea între bloburi
        };

        const blobConfigSquare = {
            width: 50, // lățimea bloburilor
            height: 50, // înălțimea bloburilor
            radius: 5, // raza colțurilor rotunjite
            spacing: 1 // spațierea între bloburi
        };

        // Funcție pentru desenarea unui blob pătrat
        const drawBlob = (x, y, width, height, radius, color = '#000000') => {
            context.fillStyle = color;
            context.beginPath();
            context.moveTo(x + radius, y);
            context.lineTo(x + width - radius, y);
            context.quadraticCurveTo(x + width, y, x + width, y + radius);
            context.lineTo(x + width, y + height - radius);
            context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            context.lineTo(x + radius, y + height);
            context.quadraticCurveTo(x, y + height, x, y + height - radius);
            context.lineTo(x, y + radius);
            context.quadraticCurveTo(x, y, x + radius, y);
            context.closePath();
            context.fill();
        };

        // Poziții inițiale pentru bloburi
        let initialBlobs = [];

        // Funcție pentru generarea pozițiilor aleatorii pentru bloburi
        const generateRandomPositions = (maxBlobs, canvasWidth, blobWidth) => {
            const positions = [];
            while (positions.length < maxBlobs) {
                const x = Math.random() * (canvasWidth - blobWidth);
                positions.push({ x: Math.floor(x), y: 470 });
            }
            return positions;
        };

        // Funcție pentru generarea pozițiilor bloburilor pe linia de jos
        const generateBlobPositions = (canvasWidth, blobWidth, spacing) => {
            const positions = [];
            let x = 0;
            const y = 520; // coordonata y pentru linia de jos
            while (x + blobWidth <= canvasWidth) {
                positions.push({ x, y });
                x += blobWidth + spacing;
            }
            return positions;
        };

        // Funcție pentru generarea pozițiilor aleatorii în cadrul unui pătrat
        const generateRandomPositionsInSquare = (maxBlobs, squareX, squareY, squareWidth, squareHeight, blobWidth) => {
            const positions = [];
            while (positions.length < maxBlobs) {
                const x = Math.random() * (squareWidth - blobWidth) + squareX;
                const y = Math.random() * (squareHeight - blobWidth) + squareY;
                positions.push({ x: Math.floor(x), y: Math.floor(y) });
            }
            return positions;
        };

        // Funcție pentru desenarea tuturor bloburilor
        const drawBlobs = () => {
            context.fillStyle = '#000000';
            const canvasWidth = canvas.width;

            // Generarea pozițiilor aleatorii
            const randomPositions = generateRandomPositions(10, canvasWidth, blobConfig.width);

            // Generarea pozițiilor pe linia de jos
            const bottomPositions = generateBlobPositions(canvasWidth + 200, blobConfig.width, blobConfig.spacing);

            // Generarea pozițiilor aleatorii în pătratele specificate
            const square1Positions = generateRandomPositionsInSquare(20, 800, 250, 620, 250, blobConfigSquare.width); // număr mai mare de bloburi
            const square2Positions = generateRandomPositionsInSquare(20, 1420, 250, 620, 250, blobConfigSquare.width); // număr mai mare de bloburi
            const square3Positions = generateRandomPositionsInSquare(20, 700, 250, 620, 150, blobConfigSquare.width); // număr mai mare de bloburi

            // Stocarea pozițiilor inițiale
            initialBlobs = [
                ...randomPositions,
                ...bottomPositions,
                ...square1Positions,
                ...square2Positions,
                ...square3Positions
            ];

            // Desenarea bloburilor la pozițiile inițiale
            initialBlobs.forEach(position => {
                drawBlob(position.x, position.y, blobConfig.width, blobConfig.height, blobConfig.radius);
            });
        };

        // Funcție pentru desenarea unui blob sub cursor
        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left - blobConfig.width / 2;
            const y = event.clientY - rect.top - blobConfig.height / 2;

            drawBlob(x, y, blobConfig.width, blobConfig.height, blobConfig.radius, 'black'); // Schimbarea culorii pentru identificare

            mousePositionsRef.current.push({ x, y });

            // Ștergerea blobului după 3 secunde
            const timeoutId = setTimeout(() => {
                context.clearRect(x, y, blobConfig.width, blobConfig.height);
                // Redesenarea bloburilor inițiale
                initialBlobs.forEach(position => {
                    drawBlob(position.x, position.y, blobConfig.width, blobConfig.height, blobConfig.radius);
                });
                // Ștergerea poziției din array-ul de poziții ale mouse-ului
                mousePositionsRef.current = mousePositionsRef.current.filter(pos => pos.x !== x || pos.y !== y);
            }, 1500);

            // Salvarea timeoutId pentru a-l putea șterge ulterior dacă este necesar
            blobTimeoutsRef.current.push(timeoutId);
        };

        // Setarea dimensiunii canvasului pentru a se potrivi containerului său
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;

            // Curățarea canvasului
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Desenarea bloburilor pătrate
            drawBlobs();
        };

        resizeCanvas();

        // Adăugarea event listener-ului pentru mousemove
        canvas.addEventListener('mousemove', handleMouseMove);

        // Redesenarea canvasului la redimensionarea ferestrei
        window.addEventListener('resize', resizeCanvas);

        return () => {
            // Eliminarea event listener-ului la demontarea componentului
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);

            // Curățarea timeout-urilor
            blobTimeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, []);

    return (
        <section className="relative flex  h-[35rem]  bg-gray-300 lg:flex-row lg:justify-between sm:gap-16  lg:items-center  sm:flex-col ">
            <div className=" flex flex-col items-start gap-4  lg:w-[70%] sm:w-full sm:px-10">
                <h1 className=" font-semibold lg:w-fit  lg:text-[4.5rem] sm:text-[3rem]  ">
                    Manual QA engineer
                </h1>
                <p className="bg-blue-500 text-white w-fit px-4 py-1 rounded-[2rem]">
                    development
                </p>
            </div>
            <a 
                href="/ru/vacancy/qa-engineer#r-form" 
                className="z-10 text-sm text-white bg-purple-400 rounded-[50px] rotate-[25deg] duration-200 w-40 h-36 flex items-center justify-center hover:opacity-100 hover:shadow-inner "
            >
                <p className="rotate-[-25deg] text-base">ОТКЛИКНУТЬСЯ</p>
            </a>
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full " style={{ filter: 'url(#canvasFilter)' }}></canvas>
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="canvasFilter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                        <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10" result="filter" />
                    </filter>
                </defs>
            </svg>
        </section>
    );
};

export default HeroSection;
