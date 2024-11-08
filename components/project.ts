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

// 3D

import bunny from "../assets/img/3d/baby_bunny.jpg"
import cat from "../assets/img/3d/baby_cat.png"
import bear from "../assets/img/3d/baby_bear.png"
import trike from "../assets/img/3d/baby_trike.png"
import gecko from "../assets/img/3d/baby_gecko.jpg"
import dolphin from "../assets/img/3d/baby_dolphin.png"
import horse from "../assets/img/3d/baby_horse.jpg"
import seal from "../assets/img/3d/baby_seal.png"
import shark from "../assets/img/3d/baby_shark.png"
import spider from "../assets/img/3d/baby_spider.jpg"
import chameleon from "../assets/img/3d/baby_chameleon.png"
import octopus from "../assets/img/3d/baby_octopus.png"

export const GetProjects = (tab: any) => {
  const t = useTranslations(`Projects.web`);


  const cards = [
    {
      title: t("Title1"),
      description: t("Language1"),
      src: webd21, // Assumindo que "src" deve ser uma imagem
      ctaText: "Visitar",
      ctaLink: "https://henrisgym.netlify.app",
      fullDesc: t("Description1"),
    }, 
    {
      title: t("Title2"),
      description: t("Language2"),
      src: webd11, // Escolhendo uma imagem como principal
      ctaText: "Visitar",
      ctaLink: "https://sigmahardware.netlify.app",
      fullDesc: t("Description2"),

    },
    {
      title: t("Title3"),
      description: t("Language3"),
      src: port1, // Escolhendo uma imagem como principal
      ctaText: "Visitar",
      ctaLink: "https://github.com/Pedrenri/portfolio-react",
      fullDesc: t("Description3"),
    },
    {
      title: t("Title4"),
      description: t("Language4"),
      src: petmatch1, // Escolhendo uma imagem como principal
      ctaText: "Visitar",
      ctaLink: "https://github.com/Pedrenri/pit-projeto",
      fullDesc: t("Description4"),
    },
    {
      title: t("Title5"),
      description: t("Language5"),
      src: loja1, // Escolhendo uma imagem como principal
      ctaText: "Visitar",
      ctaLink: "https://github.com/Pedrenri/ecommerce-store",
      fullDesc: t("Description5"),
    },
    {
      title: t("Title6"),
      description: t("Language6"),
      src: adm1, // Escolhendo uma imagem como principal
      ctaText: "Visitar",
      ctaLink: "https://github.com/Pedrenri/ecommerce-admin",
      fullDesc: t("Description6"),
    },
  ];

  return cards
};
