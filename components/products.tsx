"use client";

import { useState, useEffect, useRef, useId } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useTranslations } from "next-intl";

import _84_Baby_Capybara from "../assets/img/3d/84_Baby_Capybara.jpg";
import _61_Tiny_Penguin from "../assets/img/3d/61_Tiny_Penguin.png";
import _13_Baby_Crocodile from "../assets/img/3d/13_Baby_Crocodile.png";
import _41_Baby_Octopus from "../assets/img/3d/41_Baby_Octopus.png";
import _42_Baby_Bear from "../assets/img/3d/42_Baby_Bear.png";
import auth from "../assets/img/3d/2.png";

import { useRouter } from "next/navigation";

export const GetProducts = () => {
  return [
    { title: "Baby Octopus", src: _41_Baby_Octopus },
    { title: "Baby Bear", src: _42_Baby_Bear },
    { title: "Tiny Penguin", src: _61_Tiny_Penguin },
    { title: "Baby Crocodile", src: _13_Baby_Crocodile },
    { title: "Baby Capybara", src: _84_Baby_Capybara },
  ];
};

type Product = {
  title: string;
  src: string;
};

export function ExpandableProductCard() {
  const products = GetProducts();
  const [active, setActive] = useState<Product | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.div
                layoutId={`product-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-2/4 md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    src={active.src}
                    alt={active.title}
                    className="w-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    width={500}
                    height={500}
                  />
                </motion.div>
                {/* <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <motion.div
            layoutId={`product-${product.title}-${id}`}
            key={`product-${product.title}-${id}`}
            //@ts-ignore

            onClick={() => setActive(product)}
            className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <motion.div
              layoutId={`image-${product.title}-${id}`}
              className="flex justify-center"
            >
              <Image
                src={product.src}
                alt={product.title}
                className="h-40 w-40 rounded-lg object-cover object-top"
                width={160}
                height={160}
              />
            </motion.div>
            <div className="mt-2">
              <motion.h3
                layoutId={`title-${product.title}-${id}`}
                className="font-medium text-neutral-800 text-center"
              >
                {product.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const Products = () => {
  const t = useTranslations("Projects.3D");
  return (
    <div className="pb-8 bg-gradient-to-br from-neutral-300 to-gray-300 p-10 xl:px-72">
      <div className="flex justify-center gap-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-slate-950">{t("Title")}</h1>
          <p className="text-neutral-800 max-w-lg my-2 text-sm relative z-10">
            {t("Description")}{" "}
          </p>
        </div>
        <Image
                src={auth}
                alt={'auth'}
                className="h-20 w-20 rounded-lg object-cover object-top"
                width={160}
                height={160}
              />
      </div>
      <ExpandableProductCard />
    </div>
  );
};

export default Products;
