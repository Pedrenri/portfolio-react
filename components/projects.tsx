import { ProjectCard } from "./ui/projectcard";
import { Meteors } from "@/components/ui/meteors";

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

const Projects = () => {
  return (
    <div className="pb-8">
    <h1 className="text-center text-3xl font-bold " id="projects">PROJETOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 xl:px-[300px] pt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            hrefURL={project.hrefURL}
            githubURL={project.githubURL}
          />
        ))}
      </div>
    </div>
  );
};

export const projects = [
  {
    title: "Henri's",
    description:
      "Um dos primeiros projetos por mim desenvolvidos, com técnicas iniciantes. O trabalho deveria ser uma loja, contendo página de login, carrinho e suporte.",
    images: [webd21, webd22, webd23],
    hrefURL: "https://henrisgym.netlify.app",
  },
  {
    title: "Sigma",
    description:
      "Projeto de escola em que precisávamos desenvolver um site contendo carrosséis, modo escuro e diversas páginas. Deveria ser uma simulação de uma loja ou fabricantes de peças de computadores. Foi meu primeiro projeto em React",
    images: [webd11, webd12, webd13],
    hrefURL: "https://sigmahardware.netlify.app",
    githubURL: "https://github.com/Pedrenri/sigma-hardware-site"
  },
  {
    title: "Primeiro Portfólio Pessoal",
    description:
      "Iniciado como um projeto de escola, o meu primeiro portfólio evoluiu para a página de profissional em que você se encontra agora! Foi meu segundo projeto em React e é um projeto que é aprimorado continuamente.",
    images: [port1, port2, port3],
    githubURL: "https://github.com/Pedrenri/portfolio-react",
  },
  {
    title: "PetMatch",
    description:
      "Projeto de conclusão, feito com ReactJS e NodeJS, utilizando o banco de dados MongoDB, o PetMatch é essencialmente um Tinder feito para cachorros. Foi realizado em grupo no meu último ano de curso.",
    images: [petmatch1, petmatch2, petmatch3],
    githubURL: "https://github.com/Pedrenri/pit-projeto"
  },
  {
    title: "Ecommerce - Loja",
    description:
      "Projeto FullStack feito com NextJS com TypeScript, incorporando Tailwind, ShadCN e Stripe, com banco de dados MySQL.",
    images: [loja1, loja2, loja3, loja4],
    githubURL: "https://github.com/Pedrenri/ecommerce-store",
  },
  {
    title: "Ecommerce - Admin",
    description:
      "ERP feito em NextJS com TypeScript do projeto de Ecommerce, oferecendo a gestão completa da loja. Foram utilizadas bibliotecas como Clerk, Cloudinary e ShadCN.",
    images: [adm1, adm2, adm3],
    githubURL: "https://github.com/Pedrenri/ecommerce-admin",
  },
];

export default Projects;
