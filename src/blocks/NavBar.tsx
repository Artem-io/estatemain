import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto pt-4 pb-4 bigphone:pb-0 phone:py-2 bigphone:mb-[30px] relative">
      <div className="flex justify-center bigphone:justify-between gap-x-16 phone:gap-0 items-center mb-2">
        <div>
          <div className="hidden bigphone:flex text-xl font-bold text-darkblue">
            <p>Ваш надежный проводник в мир финансов</p>
          </div>
          <h1 className="text-gradient text-3xl phone:text-4xl font-bold text-center bigphone:text-start">OS Finanzen</h1>
        </div>
        <div className="flex bigphone:gap-x-8 text-xl font-semibold items-center text-darkblue">
          <div className="hidden big:flex gap-2 items-center">
            <img src="icons/NavBar/call.png" alt="call" />
            <a href="tel:+4915116042108">+49 (1511) 60-42-108</a>
          </div>
          <div className="hidden big:flex gap-2 items-center">
            <img src="icons/NavBar/language.png" alt="language" />
            <p>RU</p>
          </div>
          <BurgerButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <ul className="hidden big:flex justify-between text-lg font-semibold text-darkblue">
        <li><Link to="/home">Главное</Link></li>
        <li><Link to="/services">Мои услуги</Link></li>
        <li><Link to="/analyze">Анализ и создание инвест-портфеля</Link></li>
        <li><Link to="">Invest-витрина</Link></li>
        <li><Link to="/placement">Разместить проект</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
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
  const links = [
    {label: "Главное", link: "/home"},
    {label: "Мои услуги", link: "/services"},
    {label: "Анализ и создание инвест-портфеля", link: "/analyze"},
    {label: "Invest-витрина", link: ""},
    {label: "Разместить проект", link: "/placement"},
    {label: "Контакты", link: "/contacts"},
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
      <BurgerLanguageItem onClick={onClose} />
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

function BurgerLanguageItem({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[50px] flex items-center justify-center text-xl font-bold cursor-pointer
      hover:text-zinc-200 hover:bg-darkblue/10 transition-colors gap-2"
    >
      <img src="icons/NavBar/language.png" alt="language" />
      <p>RU</p>
    </div>
  );
}
