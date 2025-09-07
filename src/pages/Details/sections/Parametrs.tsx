export default function Parametrs({setIsOpen}: {setIsOpen: (state: boolean) => void}) {
    return (
        <div className="mb-8">
            <div className="grid grid-cols-2 mb-4 text-lg w-[750px]">
                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/location.png" alt="location" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Локация:</span>
                </div>
                <div className="text-gray-900 font-semibold">
                    Германия, Гамбург (район Niendorf Markt)
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/office.png" alt="office" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Тип объекта:</span>
                </div>
                <div className="text-gray-900 font-semibold">Действующий бизнес (HoReCa)</div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/salary.png" alt="salary" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Инвестиционный вход:</span>
                </div>
                <div className="text-gray-900 font-semibold flex items-end phone:block">
                    € 250 000 (100% доля GmbH)
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/growth.png" alt="growth" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Доходность:</span>
                </div>
                <div className="text-blue-600 font-semibold">
                    20–25% годовых
                </div>

                <div className="flex items-center gap-2">
                <img src="icons/ShowcaseSection/term-loan.png" alt="term" className="w-4 h-4" />
                <span className="text-gray-700 font-medium">Срок:</span>
                </div>
                <div className="text-gray-900 font-semibold">
                    2,5–3 года (окупаемость)
                </div>

                <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/warning.png" alt="risk" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Риски:</span>
                </div>
                <div className="text-yellow-600 font-semibold">Средние</div>
            </div>
            <button
            onClick={() => setIsOpen(true)}
            className="w-[300px] big:w-[350px] mb-4 py-3 rounded-xl big:rounded-2xl cursor-pointer
            active-btn hover:brightness-80
            flex items-center justify-center font-bold
            small:text-lg big:text-lg">
                Узнать подробности
            </button>
        </div>
    );
}