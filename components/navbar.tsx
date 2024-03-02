import { FloatingNav } from "./ui/floating-navbar";

import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";


const NavBar = () => {
  const navItems = [
    {
      name: "Início",
      link: "#home",
      icon: <FaHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Habilidades",
      link: "#skills",
      icon: <GiSkills className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projetos",
      link: "#projects",
      icon: <GrProjects className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default NavBar;
