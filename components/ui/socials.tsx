import Link from "next/link";

import Image from "next/image";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

interface SocialProps {
  email: boolean;
}

const Socials = (props: SocialProps) => {
  const email = props.email;

  return (
    <div className="flex items-center gap-2 text-xl md:gap-4 md:text-2xl">
      <Link
        href="https://github.com/Pedrenri"
        className="text-gray-600 hover:text-gray-300 transition-all"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/pedro-henri-de-assis-50b612231/"
        className="text-gray-600 hover:text-gray-300 transition-all"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://chatwith.io/s/pedro-henri"
        className="text-gray-600 hover:text-gray-300 transition-all"
        target="_blank"
      >
        <FaWhatsapp />
      </Link>
      {email && (
        <Link
          href="#contact"
          className="text-gray-600 hover:text-gray-300 transition-all text-3xl"
        >
          <IoIosMail />
        </Link>
      )}
    </div>
  );
};

export default Socials;
