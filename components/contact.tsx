"use client";
import React, { useState, memo, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";
interface ToSend {
  firstName: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}
export const Contact = memo(() => {
  const t = useTranslations("Contact");
  const [buttonText, setButtonText] = useState(t("ButtonDefault"));
  const [toSend, setToSend] = useState<ToSend>({
    firstName: "",
    email: "",
    message: "",
    recaptchaToken: "",
  });
  const [result, setResult] = useState("");
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResult("");
    setButtonText(t("ButtonSending"));
    if (!toSend.recaptchaToken) {
      setResult(t("MessageRecaptcha"));
      setButtonText(t("ButtonDefault"));
      return;
    }
    try {
      await emailjs.send(
        "service_h3l8ux1",
        "template_xlxhazk",
        toSend as any,
        "ysp9nvzNcXa5v9dqh",
      );
      setResult(t("MessageSucess"));
      setToSend({ firstName: "", email: "", message: "", recaptchaToken: "" });
    } catch {
      setResult(t("MessageError"));
    } finally {
      setButtonText(t("ButtonDefault"));
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const handleRecaptchaChange = (value: string | null) => {
    setToSend({ ...toSend, recaptchaToken: value || "" });
  };
  return (
    <section
      id="contact"
      className=" border-t border-white/10 bg-[#3f3f3f] py-28 "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[240px_1fr]">
          <div>
            <p className=" text-sm font-medium uppercase tracking-[0.25em]  bg-white/80 text-black/80 p-2 text-center ">
              {t("Title")}
            </p>
            <p className=" mt-6 text-sm leading-6 text-neutral-200/80 ">
              {t("Description")}
            </p>
          </div>
          <form onSubmit={formSubmit} className="space-y-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <label className=" text-sm uppercase tracking-[0.2em] text-neutral-300 ">
                  {t("Name")}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={toSend.firstName}
                  onChange={handleChange}
                  required
                  className=" mt-4 w-full border-b border-white/20 bg-transparent pb-3 text-white placeholder:text-neutral-300/40 outline-none transition-colors focus:border-white/50 "
                />
              </div>
              <div>
                <label className=" text-sm uppercase tracking-[0.2em] text-neutral-300 ">
                  {t("Email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                  required
                  className=" mt-4 w-full border-b border-white/20 bg-transparent pb-3 text-white placeholder:text-neutral-300/40 outline-none transition-colors focus:border-white/50 "
                />
              </div>
            </div>
            <div>
              <label className=" text-sm uppercase tracking-[0.2em] text-neutral-300 ">
                {t("Message")}
              </label>
              <textarea
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
                rows={5}
                className=" mt-4 w-full resize-none border-b border-white/20 bg-transparent pb-3 text-white placeholder:text-neutral-300/40 outline-none transition-colors focus:border-white/50 "
              />
            </div>
            <div className="pt-2">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={handleRecaptchaChange}
              />
            </div>
            <div className=" flex items-center justify-between gap-4 pt-4 ">
              <button
                type="submit"
                className="
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-white
    px-5
    py-2.5
    text-sm
    font-medium
    text-black
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:bg-neutral-200
    active:scale-[0.98]
  "
              >
                {buttonText}
                <span>→</span>
              </button>
              <p className=" text-sm text-neutral-200/70 "> {result} </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";
