import webd11 from "../assets/img/webdev1-1.png";
import webd12 from "../assets/img/webdev1-2.png";
import webd13 from "../assets/img/webdev1-3.png";
import CoverW2 from "../assets/img/coverW2.png";
import webd21 from "../assets/img/webdev2-1.png";
import webd22 from "../assets/img/webdev2-2.png";
import webd23 from "../assets/img/webdev2-3.png";
import port1 from "../assets/img/port1.png";
import port2 from "../assets/img/port2.png";
import port3 from "../assets/img/port3.png";
import petmatch1 from "../assets/img/petmatch1.png";
import petmatch2 from "../assets/img/petmatch2.png";
import petmatch3 from "../assets/img/petmatch3.png";
import adm1 from "../assets/img/admecommerce-1.png";
import adm2 from "../assets/img/admecommerce-2.png";
import adm3 from "../assets/img/admecommerce-3.png";
import loja1 from "../assets/img/lojaecommerce-1.png";
import loja2 from "../assets/img/lojaecommerce-2.png";
import loja3 from "../assets/img/lojaecommerce-3.png";
import loja4 from "../assets/img/lojaecommerce-4.png";
import { useTranslations } from "next-intl";

export const GetProjects = () => {
  const t = useTranslations("Projects");

  return [
    {
      title: t("Title1"),
      description: t("Description1"),
      images: [webd21, webd22, webd23],
      hrefURL: "https://henrisgym.netlify.app",
    },
    {
      title: t("Title2"),
      description: t("Description2"),
      images: [webd11, webd12, webd13],
      hrefURL: "https://sigmahardware.netlify.app",
      githubURL: "https://github.com/Pedrenri/sigma-hardware-site",
    },
    {
      title: t("Title3"),
      description: t("Description3"),
      images: [port1, port2, port3],
      githubURL: "https://github.com/Pedrenri/portfolio-react",
    },
    {
      title: t("Title4"),
      description: t("Description4"),
      images: [petmatch1, petmatch2, petmatch3],
      githubURL: "https://github.com/Pedrenri/pit-projeto",
    },
    {
      title: t("Title5"),
      description: t("Description5"),
      images: [loja1, loja2, loja3, loja4],
      githubURL: "https://github.com/Pedrenri/ecommerce-store",
    },
    {
      title: t("Title6"),
      description: t("Description6"),
      images: [adm1, adm2, adm3],
      githubURL: "https://github.com/Pedrenri/ecommerce-admin",
    },
  ];
};
