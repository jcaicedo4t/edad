"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ShareButtons from "./components/ShareButtons";

export default function Home() {
  const [edad, setEdad] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
  const [tipoMensaje, setTipoMensaje] = useState<string>("");
  const [confetti, setConfetti] = useState<boolean>(false);
  const [animacionEntrada, setAnimacionEntrada] = useState<boolean>(false);

  useEffect(() => {
    setAnimacionEntrada(true);
  }, []);

  const verificarEdad = () => {
    const edadNum = parseInt(edad);
    
    if (isNaN(edadNum)) {
      setMensaje("¡Oops! ¿Eso es un número? ¡Inténtalo de nuevo! ⚠️");
      setTipoMensaje("error");
      setMostrarResultado(true);
      return;
    }
    
    if (edadNum === 18) {
      setMensaje(`¡FELICIDADES! 🎉 ¡Con ${edadNum} años ya puedes hacer TOOOODO lo legal! 🥳`);
      setTipoMensaje("mayor");
      setConfetti(true);
    } else if (edadNum < 18) {
      setMensaje(`¡Aún eres pequeñ@! 👶 Te faltan ${18 - edadNum} años para la libertad total 🧒`);
      setTipoMensaje("menor");
    } else if (edadNum > 100) {
      setMensaje(`¡WOW! ¿${edadNum} AÑOS? ¡Eres una leyenda viviente! 🧙‍♂️✨`);
      setTipoMensaje("viejo");
    } else if (edadNum > 50) {
      setMensaje(`¡${edadNum} años! Ya estás en modo sabiduría máxima 👴👵 ¡Cuéntanos tus secretos!`);
      setTipoMensaje("viejo");
    } else {
      setMensaje(`¡Con ${edadNum} años ya no engañas a nadie! ¡Estás en tu mejor momento! 🕺💃`);
      setTipoMensaje("viejo");
    }
    
    setMostrarResultado(true);
  };

  const reiniciar = () => {
    setEdad("");
    setMensaje("");
    setTipoMensaje("");
    setMostrarResultado(false);
    setConfetti(false);
  };
  
  // Función para generar confeti
  const renderConfetti = () => {
    if (!confetti) return null;
    
    const confettiElements = [];
    const colors = ['#FF5252', '#FF9800', '#FFEB3B', '#66BB6A', '#42A5F5', '#7E57C2', '#EC407A'];
    
    for (let i = 0; i < 50; i++) {
      const left = `${Math.random() * 100}vw`;
      const animationDuration = `${Math.random() * 3 + 2}s`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      confettiElements.push(
        <div 
          key={i}
          className="confetti"
          style={{
            left,
            animationDuration,
            backgroundColor: color,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      );
    }
    
    return confettiElements;
  };
  
  const renderIcono = () => {
    switch (tipoMensaje) {
      case "mayor":
        return (
          <div className="flex justify-center my-4">
            <div className="flex space-x-4">
              <span className="text-6xl animate-bounce">🎊</span>
              <span className="text-6xl float">🥳</span>
              <span className="text-6xl animate-bounce">🎊</span>
            </div>
          </div>
        );
      case "menor":
        return (
          <div className="flex justify-center my-4">
            <div className="flex space-x-4">
              <span className="text-6xl float">👶</span>
              <span className="text-6xl animate-bounce">🧒</span>
              <span className="text-6xl float">👧</span>
            </div>
          </div>
        );
      case "viejo":
        return (
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center">
              <Image src="/abuelo.svg" width={150} height={150} alt="Abuelo" className="shake" />
              <div className="flex space-x-4 mt-2">
                <span className="text-4xl">👴</span>
                <span className="text-4xl">👵</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {renderConfetti()}
      <div className={`bg-white p-8 rounded-lg shadow-lg max-w-md w-full card-3d ${animacionEntrada ? 'animate-fadeIn' : ''} relative`} style={{opacity: 1}}>
        <div className="viral-tag">¡VIRAL! 🔥</div>
        <h1 className="text-4xl font-bold text-center mb-6 rainbow-text shine">🎮 ¿CUÁNTOS AÑOS TIENES? 🎮</h1>
        <h2 className="text-xl font-medium text-center mb-8 bounce">¡Descubre si eres joven o sabio! 🧙‍♂️</h2>
        
        {!mostrarResultado ? (
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="edad" className="text-lg font-medium mb-2">Edad:</label>
              <input
                type="number"
                id="edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold text-center"
                placeholder="¿Cuántos añitos? 🤔"
              />
            </div>
            
            <button
                onClick={verificarEdad}
                className="w-full btn-fun py-3 px-4 rounded-full font-bold text-lg hover:shake"
              >
                ¡REVELAR MI DESTINO! 🔮
              </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`p-4 rounded-md ${tipoMensaje === "error" ? "bg-red-100" : tipoMensaje === "mayor" ? "bg-green-100" : tipoMensaje === "menor" ? "bg-blue-100" : "bg-orange-100"}`}>
              <h3 className="text-2xl font-bold text-center mb-2 rainbow-text">¡RESULTADO REVELADO! 🎯</h3>
              <p className="text-xl font-medium text-center">{mensaje}</p>
              {renderIcono()}
            </div>
            
            <button
              onClick={reiniciar}
              className="w-full btn-fun py-3 px-4 rounded-full font-bold text-lg mt-4"
            >
              ¡INTENTAR DE NUEVO! 🎲
            </button>
            
            <ShareButtons mensaje={mensaje} />
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-center text-gray-800 float">
        <p className="text-xl font-bold rainbow-text">✨ ¡Comparte con tus amigos y descubre quién es más joven! ✨</p>
        <p className="mt-2 text-lg">🚀 Hecho con Next.js y mucha diversión 🚀</p>
        <p className="mt-4 text-sm font-bold">👉 ¡Más de 1 millón de personas ya lo han probado! 👈</p>
      </footer>
    </div>
  );
}
