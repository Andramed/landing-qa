import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
    const canvasRef = useRef(null);
    const blobTimeoutsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Configurația bloburilor
        const blobConfig = {
            width: 50, // lățimea bloburilor
            height: 50, // înălțimea bloburilor
            radius: 2, // raza colțurilor rotunjite
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

        // Funcție pentru generarea pozițiilor aleatorii pentru bloburi
        const generateRandomPositions = (maxBlobs, canvasWidth, blobWidth) => {
            const positions = [];
            while (positions.length < maxBlobs) {
                const x = Math.random() * (canvasWidth - blobWidth);
                positions.push({ x: Math.floor(x), y: 450 });
            }
            return positions;
        };

        // Funcție pentru generarea pozițiilor bloburilor pe linia de jos
        const generateBlobPositions = (canvasWidth, blobWidth, spacing) => {
            const positions = [];
            let x = 0;
            const y = 500; // coordonata y pentru linia de jos
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

        // Poziții suplimentare pentru bloburi specificate manual
        const manualPositions = [];

        // Funcție pentru desenarea tuturor bloburilor
        const drawBlobs = () => {
            context.fillStyle = '#000000';
            const canvasWidth = canvas.width;

            // Generarea pozițiilor aleatorii
            const randomPositions = generateRandomPositions(7, canvasWidth, blobConfig.width);

            // Generarea pozițiilor pe linia de jos
            const bottomPositions = generateBlobPositions(canvasWidth + 100, blobConfig.width, blobConfig.spacing);

            // Generarea pozițiilor aleatorii în pătratele specificate
            const square1Positions = generateRandomPositionsInSquare(20, 800, 250, 620, 250, blobConfigSquare.width); // număr mai mare de bloburi
            const square2Positions = generateRandomPositionsInSquare(20, 1420, 250, 620, 250, blobConfigSquare.width); // număr mai mare de bloburi
            const square3Positions = generateRandomPositionsInSquare(20, 700, 250, 620, 150, blobConfigSquare.width); // număr mai mare de bloburi

            // Desenarea bloburilor specificate manual
            manualPositions.forEach(position => {
                drawBlob(position.x, position.y, blobConfig.width, blobConfig.height, blobConfig.radius);
            });

            // Desenarea bloburilor la pozițiile aleatorii
            randomPositions.forEach(position => {
                drawBlob(position.x, position.y, blobConfig.width, blobConfig.height, blobConfig.radius);
            });

            // Desenarea bloburilor pe linia de jos
            bottomPositions.forEach(position => {
                drawBlob(position.x, position.y, blobConfig.width, blobConfig.height, blobConfig.radius);
            });

            // Desenarea bloburilor în pătratele specificate
            square1Positions.forEach(position => {
                drawBlob(position.x, position.y, blobConfigSquare.width, blobConfigSquare.height, blobConfigSquare.radius);
            });

            square2Positions.forEach(position => {
                drawBlob(position.x, position.y, blobConfigSquare.width, blobConfigSquare.height, blobConfigSquare.radius);
            });

            square3Positions.forEach(position => {
                drawBlob(position.x, position.y, blobConfigSquare.width, blobConfigSquare.height, blobConfigSquare.radius);
            });
        };

        // Funcție pentru desenarea unui blob sub cursor
        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left - blobConfig.width / 2;
            const y = event.clientY - rect.top - blobConfig.height / 2;

            drawBlob(x, y, blobConfig.width, blobConfig.height, blobConfig.radius, 'blob'); // Schimbarea culorii pentru identificare

            // Ștergerea blobului după 3 secunde
            const timeoutId = setTimeout(() => {
                context.clearRect(x, y, blobConfig.width, blobConfig.height);
            }, 2500);

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
        <section className="relative flex items-center justify-between h-screen bg-gray-300">
            <div className="z-10 w-[70%] flex flex-col gap-4 pl-20">
                <h1 className="text-[4.5rem] font-semibold">
                    Manual QA engineer
                </h1>
                <p className="bg-blue-500 text-white w-fit px-4 py-1 rounded-[2rem]">
                    development
                </p>
            </div>
            <a 
                href="/ru/vacancy/qa-engineer#r-form" 
                className="z-10 text-sm text-white bg-purple-400 rounded-[50px] rotate-[25deg] duration-200 w-40 h-36 flex items-center justify-center hover:opacity-100 hover:shadow-inner absolute right-20 top-20"
            >
                <p className="rotate-[-25deg] text-base">ОТКЛИКНУТЬСЯ</p>
            </a>
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" style={{ filter: 'url(#canvasFilter)' }}></canvas>
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
