import Link from "next/link";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Tooltip, Button } from "@nextui-org/react";

interface Props {}

function Curriculum(props: Props) {
  const {} = props;

  return (
    <div className="fixed bottom-0 left-0 mb-4 ml-4 z-[51]">
      <Tooltip
        content="Baixe meu currículo!"
        placement="right-start"
        showArrow
        classNames={{
          base: ["before:bg-violet-950 fixed bottom-0 left-0 mb-7 ml-[4.5rem] z-[5000]"],
          content: [
            "py-2 px-4 shadow-xl",
            "text-white bg-violet-950/[0.7] rounded",
          ],
        }}
        closeDelay={0}
      >
        <Button className=" rounded-full bg-slate-800 p-0">
          <Link
            href="/pdf/Curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <IoMdDownload className="rounded-full bg-slate-800 h-8 w-8 m-2" />
          </Link>
        </Button>
      </Tooltip>
    </div>
  );
}

export default Curriculum;
