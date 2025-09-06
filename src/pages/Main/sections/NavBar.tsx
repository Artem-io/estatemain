import { useState } from "react";

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
        <li><a href="">Главное</a></li>
        <li><a href="">Мои услуги</a></li>
        <li><a href="">Анализ и создание инвест-портфеля</a></li>
        <li><a href="">Invest-витрина</a></li>
        <li><a href="">Разместить проект</a></li>
        <li><a href="">Контакты</a></li>
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
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center
      transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {[
        "Главное",
        "Мои услуги",
        "Анализ и создание инвест-портфеля",
        "Invest-витрина",
        "Разместить проект",
        "Контакты",
      ].map((item) => (
        <BurgerItem key={item} label={item} onClick={onClose} />
      ))}
      <BurgerItem label="+49 (1511) 60-42-108" phone onClick={onClose} />
      <BurgerLanguageItem onClick={onClose} />
    </div>
  );
}

function BurgerItem({ label, phone, onClick }: { label: string; phone?: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[60px] flex items-center justify-center text-xl font-bold cursor-pointer
      hover:text-zinc-200 hover:bg-darkblue/10 transition-colors"
    >
      {!phone && label}
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
