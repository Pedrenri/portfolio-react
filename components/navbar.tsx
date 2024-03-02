import { FloatingNav } from "./ui/floating-navbar";

import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";

const NavBar = () => {
  const navItems = [
    {
      name: "Início",
      link: "#home",
      icon: <CiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Habilidades",
      link: "#skills",
      icon: (
        <CiCircleInfo className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IoIosContact className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default NavBar;
