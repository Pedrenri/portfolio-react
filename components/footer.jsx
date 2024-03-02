import Link from "next/link";
import Socials from "./ui/socials";
/* import Curriculo from "@/public/Currículo - Pedro Henri.pdf"
 */import { FaDownload } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="h-40 flex items-center justify-around">
      <h1 className="text-2xl">
        PEDRO<span className="text-purple-600">|</span><span className="font-bold">HENRI</span>
      </h1>
      {/* <Link href={Curriculo} download="Curriculo">
        Meu Currículo <FaDownload />
      </Link> */}
      <Socials />
    </div>
  );
};

export default Footer;
