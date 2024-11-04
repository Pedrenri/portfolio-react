import { FloatingNav } from "./ui/floating-navbar";

import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import {useTranslations} from 'next-intl';



const NavBar = () => {
  const t = useTranslations('Navbar');
  const navItems = [
    {
      name: t('Home'),
      link: "#home",
      icon: <FaHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('Skills'),
      link: "#skills",
      icon: <GiSkills className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('Projects'),
      link: "#projects",
      icon: <GrProjects className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('Contact'),
      link: "#contact",
      icon: <GrProjects className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default NavBar;
