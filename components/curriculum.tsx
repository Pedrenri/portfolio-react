"use client";

import Link from "next/link";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Tooltip, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
interface Props {}

function Curriculum(props: Props) {
  const {} = props;
  const t = useTranslations(`CV`);
  const path = usePathname();

  const getPdfPath = () => {
    switch (path) {
      case '/en':
        return '/pdf/en/Resume - Pedro Henri.pdf';
      case '/pt':
        return '/pdf/pt/Currículo - Pedro Henri.pdf';
      case '/fr':
        return '/pdf/fr/CV - Pedro Henri.pdf';
      default:
        return '/pdf/pt/Curriculum.pdf';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 mb-4 ml-4 z-[51]">
      <Tooltip
        content={t('Download')}
        placement="right-start"
        showArrow
        classNames={{
          base: ["before:bg-orange-950 fixed bottom-0 left-0 mb-7 ml-[4.5rem] z-[5000]"],
          content: [
            "py-2 px-4 shadow-xl",
            "text-white bg-orange-950/[0.7] rounded",
          ],
        }}
        closeDelay={0}
      >
        <Button className=" rounded-full bg-neutral-800 p-0">
          <Link
            href={getPdfPath()}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <IoMdDownload className="rounded-full bg-neutral-800 h-8 w-8 m-2" />
          </Link>
        </Button>
      </Tooltip>
    </div>
  );
}

export default Curriculum;
