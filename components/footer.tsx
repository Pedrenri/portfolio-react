'use client';

import Link from "next/link";
import Socials from "./ui/socials";
import { FaDownload } from "react-icons/fa6";
import Curriculum from "./curriculum";


const Footer = () => {
  return (
    <div className="h-40 flex items-center justify-evenly">
      <h1 className="text-2xl">
        PEDRO<span className="text-purple-600">|</span><span className="font-bold">HENRI</span>
      </h1>
      <Curriculum />
      <Socials email={false} />
    </div>
  );
};

export default Footer;
