"use client";
import React, { useState, memo } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import emailjs from "emailjs-com";

export const Contact = memo(() => {
  const [buttonText, setButtonText] = useState("Enviar");
  const [toReset] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const formSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonText("Enviando...");

    try {
      const response = await emailjs.send(
        "service_8jxbx9x",
        "template_xlxhazk",
        toSend,
        "ysp9nvzNcXa5v9dqh"
      );

      console.log("SUCCESS!", response.status, response.text);
      setResult("Mensagem enviada!");
    } catch (err) {
      console.log("FAILED...", err);
      setResult("Algo deu errado. Tente novamente mais tarde.");
    } finally {
      setButtonText("Enviar");
      setToSend(toReset);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 id="contact" className="relative pb-4 z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Fale Comigo
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 pb-4">
          Precisa de um serviço? Quer me contratar? Ou apenas bater um papo?
          Preencha o formulário abaixo e me envie uma mensagem!
        </p>
        <form className="fade-down" onSubmit={formSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="z-50 text-sm">
              <input
                type="text"
                placeholder="Nome"
                name="firstName"
                value={toSend.firstName}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-gray-800 rounded-md focus:outline-none focus:border-purple-500 border-2 bg-gray-950 placeholder-gray-500"
              />
            </div>
            <div className="z-50 text-sm">
              <input
                type="text"
                placeholder="Sobrenome"
                name="lastName"
                value={toSend.lastName}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-gray-800 rounded-md focus:outline-none focus:border-purple-500 border-2 bg-gray-950 placeholder-gray-500"
              />
            </div>
            <div className="z-50 text-sm">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={toSend.email}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-gray-800 rounded-md focus:outline-none focus:border-purple-500 border-2 bg-gray-950 placeholder-gray-500"
              />
            </div>
            <div className="z-50 text-sm">
              <input
                type="tel"
                placeholder="No. de Telefone (Opcional)"
                name="phone"
                value={toSend.phone}
                onChange={handleChange}
                className="transition-all w-full p-2 border-gray-800 rounded-md focus:outline-none focus:border-purple-500 border-2 bg-gray-950 placeholder-gray-500"
              />
            </div>
            <div className="col-span-2  z-50 text-sm">
              <textarea
                placeholder="Mensagem"
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-gray-800 rounded-md focus:outline-none focus:border-purple-500 border-2 bg-gray-950 placeholder-gray-500 h-[8rem]"
              ></textarea>
            </div>
            <div className="col-span-2  z-50">
              <div id="status" className="flex items-center justify-between">
                <button
                  type="submit"
                  className="py-2 px-4 border-gray-500 text-gray-500 hover:border-purple-500 hover:text-gray-300 border-2 transition-all"
                >
                  <span>{buttonText}</span>
                </button>
                <p className="ml-2">{result}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
});

Contact.displayName = 'Contact';
