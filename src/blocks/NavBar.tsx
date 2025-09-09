import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import call from '/icons/NavBar/call.png';
import language from '/icons/NavBar/language.png';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { lng } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    const newPath = location.pathname.replace(`/${lng}`, `/${lang}`);
    navigate(newPath);
  };

  return (
    <nav className="container mx-auto pt-4 pb-4 bigphone:pb-0 phone:py-2 bigphone:mb-[30px] relative">
      <div className="flex justify-center bigphone:justify-between gap-x-16 phone:gap-0 items-center mb-2">
        <div>
          <div className="hidden bigphone:flex text-xl font-bold text-darkblue">
            <p>{t("navtitle")}</p>
          </div>
          <h1 className="text-gradient text-3xl phone:text-4xl font-bold text-center bigphone:text-start">OS Finanzen</h1>
        </div>
        <div className="flex bigphone:gap-x-8 text-xl font-semibold items-center text-darkblue">
          <div className="hidden big:flex gap-2 items-center">
            <img src={call} alt="call" />
            <a href="tel:+4915116042108">+49 (1511) 60-42-108</a>
          </div>
          <div className="hidden big:flex gap-2 items-center">
            <img src={language} alt="language" />
            <select value={lng}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
              changeLang(e.target.value)
            }
            className="cursor-pointer" name="" id="">
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="ua">UA</option>
              <option value="de">DE</option>
            </select>
          </div>
          <BurgerButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <ul className="hidden big:flex justify-between text-lg font-semibold text-darkblue">
        <li><Link to={`/${i18n.language}`}>{t("linkmain")}</Link></li>
        <li><Link to={`/${i18n.language}/services`}>{t("linkservices")}</Link></li>
        <li><Link to={`/${i18n.language}/analyze`}>{t("linkanalyze")}</Link></li>
        <li><Link to={`/${i18n.language}/investmarket`}>{t("linkmarket")}</Link></li>
        <li><Link to={`/${i18n.language}/placement`}>{t("linkplace")}</Link></li>
        <li><Link to={`/${i18n.language}/contacts`}>{t("linkcontact")}</Link></li>
      </ul>

      <BurgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

function BurgerButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 big:hidden flex flex-col justify-center items-center cursor-pointer"
    >
      <div className={`w-8 h-1 bg-darkblue rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
      <div className={`w-8 h-1 bg-darkblue rounded-full my-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`w-8 h-1 bg-darkblue rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
    </button>
  );
}

function BurgerMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, i18n } = useTranslation();

  const links = [
    {label: t("linkmain"), link: `/${i18n.language}`},
    {label: t("linkservices"), link: `/${i18n.language}/services`},
    {label: t("linkanalyze"), link: `/${i18n.language}/analyze`},
    {label: t("linkmarket"), link: `/${i18n.language}/investmarket`},
    {label: t("linkplace"), link: `/${i18n.language}/placement`},
    {label: t("linkcontact"), link: `/${i18n.language}contacts`},
  ];
  type LinkItem = { label: string; link: string };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center
      transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {links.map((item: LinkItem, index: number) => (
        <BurgerItem key={index} label={item.label} link={item.link} onClick={onClose} />
      ))}
      <BurgerItem label="+49 (1511) 60-42-108" phone onClick={onClose} />
      <BurgerLanguageItem />
    </div>
  );
}

function BurgerItem({ label, phone, onClick, link }: { label: string; phone?: boolean; onClick: () => void; link?: string; }) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[60px] flex items-center justify-center text-xl font-bold cursor-pointer
      hover:text-zinc-200 hover:bg-darkblue/10 transition-colors"
    >
      {!phone && <Link className="w-full text-center" to={{pathname: link}}>{label}</Link>}
      {phone && (
        <div className="flex gap-2 items-center">
          <img src="icons/NavBar/call.png" alt="call" />
          <a href="tel:+4915116042108">+49 (1511) 60-42-108</a>
        </div>
      )}
    </div>
  );
}

function BurgerLanguageItem() {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  return (
    <div
      className="w-full h-[50px] flex items-center justify-center text-xl font-bold cursor-pointer
    hover:bg-darkblue/10 transition-colors gap-2"
    >
      <img src="icons/NavBar/language.png" alt="language" />
      <select value={lng}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
        i18n.changeLanguage(e.target.value)
      }
      className="cursor-pointer" name="" id="">
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}
