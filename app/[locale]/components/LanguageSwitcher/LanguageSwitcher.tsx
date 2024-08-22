"use client";
import style from "./switcher.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const newPathname = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPathname);
  };

  return (
    <button
      className={style.button}
      onClick={() => changeLanguage(locale === "it" ? "en" : "it")}
    >
      {locale === "it" ? "Italiano" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
