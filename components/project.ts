import { useTranslations } from "next-intl";

export const GetProjects = (tab: any) => {
  const t = useTranslations(`Projects.web`);

  const cards = [
    {
      title: t("Title1"),
      description: t("Language1"),
      ctaLink: "https://lp.aglets.com.br/",
      fullDesc: t("Description1"),
    },
    {
      title: t("Title2"),
      description: t("Language2"),
      ctaLink: "https://b2b.drlmg.com.br/",
      fullDesc: t("Description2"),
    },
    {
      title: t("Title3"),
      description: t("Language3"),
      ctaLink: "https://somos.us/pt/",
      fullDesc: t("Description3"),
    },
    {
      title: t("Title4"),
      description: t("Language4"),
      ctaLink: "https://casomegavazamento.com",
      fullDesc: t("Description4"),
    },
    {
      title: t("Title5"),
      description: t("Language5"),
      ctaLink: "https://casosantoamaro.com",
      fullDesc: t("Description5"),
    },
    {
      title: t("Title6"),
      description: t("Language6"),
      ctaLink: "https://dataannotation.tech/",
      fullDesc: t("Description6"),
    },
  ];

  return cards;
};
