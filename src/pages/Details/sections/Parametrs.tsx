import type { ParametrsProps } from "../interfaces/interfaces.tsx";

export default function Parametrs({setIsOpen, location, type, priceEUR, priceUSD, priceGBP, profitMin, profitMax, timeMin, timeMax, risk}: ParametrsProps) {
    return (
        <div className="pl-2 phone:pl-0 mb-8">
            <div className="grid grid-cols-2 mb-8 small:mb-4 gap-3 phone:gap-0 text-sm bigphone:text-[16px] 
            w-full phone:w-[400px] bigphone:w-[600px] small:w-[750px] mx-auto small:mx-0">
                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/location.png" alt="location" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Локация:</span>
                </div>
                <div className="text-gray-900 font-semibold">
                    {location}
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/office.png" alt="office" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Тип объекта:</span>
                </div>
                <div className="text-gray-900 font-semibold">{type}</div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/salary.png" alt="salary" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Инвестиционный вход:</span>
                </div>
                <div className="text-gray-900 font-semibold flex items-end phone:block">
                    € {priceEUR}
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/growth.png" alt="growth" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Доходность:</span>
                </div>
                <div className="text-blue-600 font-semibold">
                    {profitMin}%–{profitMax}% годовых
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/term-loan.png" alt="term" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Срок:</span>
                </div>
                <div className="text-gray-900 font-semibold">
                    {timeMin}–{timeMax} года (окупаемость)
                </div>

                <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/warning.png" alt="risk" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Риски:</span>
                </div>
                <div className="text-yellow-600 font-semibold">{risk}</div>
            </div>
            <button
            onClick={() => setIsOpen(true)}
            className="w-[300px] big:w-[350px] mb-4 py-3 rounded-xl big:rounded-2xl cursor-pointer
            active-btn hover:brightness-80
            flex items-center justify-center font-bold
            small:text-lg big:text-lg mx-auto small:mx-0">
                Узнать подробности
            </button>
        </div>
    );
}