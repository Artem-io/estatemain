import { useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function PrivateSection() {
    return (
        <div className="px-4">
            <h2 className="text-2xl font-bold text-center mb-6">
                Инвестор приходит на цифры — остаётся на структуру.
            </h2>
            <div className="text-lg font-semibold text-center mb-10 max-w-3xl mx-auto">
                <p>
                    Я работаю не как «финансист по документам».
                    Я вникаю в суть бизнеса, разбираю структуру, собираю воедино оффер, финмодель и стратегию, чтобы ваш проект вызывал доверие, интерес — и конкретные сделки.
                    Если у вас хаос в учёте, неясный план или срываются инвесторы — вам сюда.
                </p>
            </div>

            <div className="grid grid-cols-1 big:grid-cols-2 large:grid-cols-6 gap-8 items-start">
                {/* Первая карточка с кнопкой внизу и раскрывающимся текстом */}
                <ServiceCard
                    title="Разработка инвестиционного предложения"
                    description="Создаю оффер от идеи до финмодели. Учитываю доли, риски, формат сделки, стратегию выхода.
                    Всё — на языке инвестора, с расчётами, визуалами и смыслом."
                    image="images/ServicesPage/BusinessSection/invest.png"
                    className="large:col-span-3 big:min-h-[539px] large:min-h-[483px]"
                    extraText={`Что делаем: Создаю сильное инвестиционное предложение — от идеи до презентации:\n
• формулируем инвестиционную гипотезу,
• рассчитываем привлекательный оффер,
• упаковываем всё на языке инвестора.\n
Включено:\n
• Финансовая модель: сценарии, сроки, ROI, IRR, риски
• Расчёт долей, структура сделки, формат входа и выхода
• Упаковка: визуальная презентация + стратегическая логика
• Аргументация — что важно именно для инвестора: возврат, контроль, безопасность\n
Кому это нужно:
Проектам, застройщикам и бизнесам, которые хотят грамотно привлечь деньги и выглядеть профессионально на любой встрече.`}
                />

                {/* Остальные карточки */}
                <ServiceCard
                    title="Финансовое моделирование и структура учёта"
                    description="Убираю хаос. Выстраиваю денежные потоки, определяю метрики, ROI, точки роста и контроля."
                    image="images/ServicesPage/BusinessSection/financemodel.png"
                    className="large:col-span-3 big:min-h-[539px] large:min-h-[483px]"
                    extraText={`Что делаем: убираю хаос и выстраиваю финансовую основу проекта:\n
• создаю стратегию движения денег,
• считаю ключевые метрики и точки окупаемости,
• показываю реальную картину бизнеса.\n
Внедряю:\n
• Прогноз доходов и расходов
• Распределение долей и обязательств
• Управление рисками и cash flow
• Гибкую, но понятную систему учёта
Кому это нужно:
Тем, у кого есть деньги, но нет структуры.
Тем, кто не видит, сколько зарабатывает, и хочет подготовить **прозрачную модель для инвестора.**`}
                />
                <ServiceCard
                    title="Бюджетирование и финансовый контроль"
                    description="Простая и точная система: бюджет, движение, резервы, отчётность."
                    className="large:col-span-2 large:min-h-[539px]"
                    extraText={`Что делаем: разрабатываю рабочий бюджет и систему контроля:\n
• прогнозы, контрольные точки, отклонения,
• аналитика на базе реальных данных.\n
Результат — вы перестаёте «реагировать» и начинаете **управлять** финансами.\n
Кому это нужно:\n
• Компаниям с регулярными операциями
• Проектам, которые хотят расти, а не тушить пожары
• Собственникам, которые хотят «снимать прибыль», а не «закрывать дыры»`}
                    image="images/ServicesPage/BusinessSection/budget.png"
                />

                <ServiceCard
                    title="Подготовка к переговорам с инвестором"
                    description="Дорабатываем питч, отрабатываем вопросы, усиливаем аргументы — от входа до выхода."
                    className="large:col-span-2 large:min-h-[539px]"
                    image="images/ServicesPage/BusinessSection/negotiation.png"
                    extraText={`Что делаем: готовлю проект и команду к встречам:\n
• усиливаю сильные стороны оффера,
• дорабатываю питч,
• репетируем критические вопросы.\n
Цель — чтобы вы звучали как партнёр, а не как проситель.\n
Кому это нужно:
Тем, кто выходит на инвесторов, фонд или family office, и хочет выглядеть уверенно и профессионально.`}
                />
                <ServiceCard
                    title="Если ваш проект проходит проверку — он попадает в мою закрытую витрину, куда я лично веду инвесторов."
                    description="Убираем лишние звенья, находим законные и выгодные маршруты."
                    className="large:col-span-2 large:min-h-[539px]"
                    image="images/ServicesPage/BusinessSection/placement.png"
                    extraText={`Что делаем: если проект проходит отбор, я размещаю его в своей закрытой Invest-витрине.\n
Контакты не раскрываются. Все заявки проходят через фильтр. Только реальные инвесторы — только проверенный интерес.\n
Кому это нужно:
Тем, кто не хочет открытого доступа, но хочет выйти на качественную и платёжеспособную аудиторию.`}
                />
            </div>
        </div>
    );
}

function ServiceCard({
    title,
    description,
    image,
    className = '',
    extraText
}: {
    title: string;
    description: string;
    image: string;
    className?: string;
    extraText: string;
}) {
    const [showExtra, setShowExtra] = useState(false);

    return (
        <div
            className={`bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col ${className}`}
        >
            <div
                className="h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex flex-col flex-1 p-6">
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-lg font-semibold mb-4">{description}</p>

                <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        showExtra ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="text-lg font-normal mt-2 mb-4 whitespace-pre-line">
                        <ReactMarkdown>{extraText}</ReactMarkdown>
                    </div>
                </div>

                <button
                    onClick={() => setShowExtra(!showExtra)}
                    className="gradient-btn w-full h-[45px] text-lg font-bold rounded-xl cursor-pointer mt-auto"
                >
                    {showExtra ? 'Скрыть' : 'Подробнее'}
                </button>
            </div>
        </div>
    );
}