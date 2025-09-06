import { useState } from "react";

export default function RecievedSection() {
    const benefits = {
        private: [
            { emoji: "undestanding", text: "Понимание, как сохранить и приумножить капитал без риска обжечься" },
            { emoji: "strategy", text: "Чёткая стратегия — без «хайпов» и случайных вложений" },
            { emoji: "tools", text: "Инструменты, которые подходят лично вам: по стране, статусу, налогам" },
            { emoji: "decisions", text: "Решения, которые учитывают законы и не вызовут блокировок" },
            { emoji: "control", text: "Контроль и осознанность: вы понимаете, куда и зачем идут ваши деньги" },
        ],
        business: [
            { emoji: "offer", text: "Инвестиционное предложение, которому доверяют инвесторы" },
            { emoji: "structure", text: "Финансовая структура без хаоса: метрики, стратегия, точки контроля" },
            { emoji: "preparation", text: "Подготовка к переговорам: вы знаете, что сказать и как подать себя" },
            { emoji: "calculation", text: "Профессиональный расчёт рисков, формата сделки и структуры оффера" },
            { emoji: "network", text: "Выход к инвесторам через мою закрытую сеть — если проект готов" },
        ]
    };

    type BenefitItem = { emoji: string; text: string };
    type BenefitType = "private" | "business";

    const [benefitType, setBenefitType] = useState<BenefitType>("private");

    return (
        <div className="maincontainer mx-auto mb-[80px] phone:mb-[50px] px-4">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-[30px]">
                Что даёт работа со мной?
            </h1>

            {/* переключатели */}
            <div className="flex flex-col phone:flex-row gap-4 justify-center mb-[20px]">
                <button
                    onClick={() => setBenefitType("private")}
                    className={`px-6 py-3 rounded-xl w-full phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "private" ? "active-btn" : "disabled-btn"}`}
                >
                    Я — частное лицо
                </button>
                <button
                    onClick={() => setBenefitType("business")}
                    className={`px-6 py-3 rounded-xl w-full phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "business" ? "active-btn" : "disabled-btn"}`}
                >
                    Я — бизнес
                </button>
            </div>

            {/* карточки */}
            <div className="grid grid-cols-1 justify-items-center gap-y-3">
                {benefits[benefitType].map((item: BenefitItem, index: number) => (
                    <RecievedCard type={benefitType} key={index} 
                    text={item.text} emoji={item.emoji} />
                ))}
            </div>
        </div>
    );
}

interface RecievedCardProps {
    text: string;
    emoji: string;
    type: string;
}

function RecievedCard({ text, emoji, type }: RecievedCardProps) {
    return (
        <div
            className="w-full max-w-[550px] min-h-[90px] px-[20px] py-[15px]
            bg-white shadow-xl rounded-2xl font-semibold flex gap-3 items-center"
        >
            {/* <div className="text-xl">{emoji}</div> */}
            <img src={`icons/MainPage/RecievedSection/${type}/${emoji}.png`} alt={emoji} className="w-[28px] h-auto" />
            <p>{text}</p>
        </div>
    );
}
