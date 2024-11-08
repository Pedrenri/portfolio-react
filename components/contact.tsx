"use client";
import React, { useState, memo } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import emailjs from "emailjs-com";
import {useTranslations} from 'next-intl';

export const Contact = memo(() => {
  const t = useTranslations('Contact');
  const [buttonText, setButtonText] = useState(t('ButtonDefault'));
  const [toReset] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [toSend, setToSend] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const formSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonText(t('ButtonSending'));

    try {
      const response = await emailjs.send(
        "service_h3l8ux1",
        "template_xlxhazk",
        toSend,
        "ysp9nvzNcXa5v9dqh"
      );

      setResult(t('MessageSucess'));
      setToSend(toReset);
    } catch (err) {
      setResult(t('MessageError'));
    } finally {
      setButtonText(t('ButtonDefault'));
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4" >
        <h1  className="relative pb-4 z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-white text-center font-bold">
          {t('Title')}
        </h1>
        
        <form className="fade-down mt-10" onSubmit={formSubmit}>
          <div className="flex flex-col gap-4">
            <div className="z-50 text-sm">
            <p className="tracking-widest pb-2 pl-2">{t('Name')}</p>
              <input
                type="text"
                name="firstName"
                value={toSend.firstName}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-zinc-900 rounded-md focus:outline-none focus:border-orange-500 border-2 bg-zinc-800 placeholder-gray-500"
              />
            </div>
            <div className="z-50 text-sm">
              <p className="tracking-widest pb-2 pl-2">{t('Email')}</p>
              <input
                type="email"
                name="email"
                value={toSend.email}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-zinc-900 rounded-md focus:outline-none focus:border-orange-500 border-2 bg-zinc-800 placeholder-gray-500"
              />
            </div>
            
            <div className="col-span-2  z-50 text-sm">
            <p className="tracking-widest pb-2 pl-2">{t('Message')}</p>
              <textarea
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
                className="transition-all w-full p-2 border-zinc-900 rounded-md focus:outline-none focus:border-orange-500 border-2 bg-zinc-800 placeholder-gray-500 h-[8rem]"
              ></textarea>
            </div>
            <div className="col-span-2  z-50">
              <div id="status" className="flex items-center justify-between">
                <button
                id="projects"
                  type="submit"
                  className="py-2 px-4 border-gray-500 text-gray-500 hover:border-orange-500 hover:text-gray-300 border-2 transition-all"
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
