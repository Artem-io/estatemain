import { useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function PrivateSection() {
    return (
        <div className="px-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Финансовые решения — это не просто цифры. Это стратегия, доверие и ответственность.
            </h2>
            <div className="text-lg font-semibold text-center mb-10 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-3">
                    Меня зовут Елена Степанюк. Я — финансовый советник и инвестиционный стратег с 12+ годами опыта.
                </h3>
                <p>
                    Я не продаю информацию. Я даю стратегии, адаптированные под реальность конкретного человека или бизнеса.
                </p>
            </div>

            <div className="grid grid-cols-1 big:grid-cols-2 large:grid-cols-4 gap-8 items-start">
                {/* Первая карточка с кнопкой внизу и раскрывающимся текстом */}
                <FirstCard
                    title="Анализ финансовой ситуации и целей"
                    description="Понимаем, где вы находитесь, формулируем цель, просчитываем путь."
                    extraText="Разбор ваших активов, текущих финансов, планов и уровня риска. На основе этого — построение персональной стратегии управления деньгами.
                    Подходит тем, кто не знает, с чего начать, и боится «зайти не туда»."
                    image="images/ServicesPage/PrivateSection/financeanalyze.png"
                    className="lg:col-span-2"
                />

                {/* Остальные карточки */}
                <ServiceCard
                    title="Структурирование инвестиционного портфеля"
                    description="Формируем сбалансированную структуру: подушка, база, рост. Учитываем статус, риски, горизонт."
                    extraText="Создание или переупаковка вашего инвестиционного портфеля под цели, статус, страну проживания и налоговые реалии.
                    Разберём, где утекают деньги, где зарыты риски, и как собрать сбалансированный капитал."
                    className="big:min-h-[511px] large:min-h-[611px]"
                    image="images/ServicesPage/PrivateSection/structure.png"
                />
                <ServiceCard
                    title="Подбор инвестиционных инструментов"
                    description="Золото, недвижимость, страхование, крипта — объясню, что, где, и для чего"
                    extraText={`Провожу персональный анализ и помогаю выбрать инвестиционные инструменты под вашу ситуацию: цели, страну, налоги и горизонт вложений. Без шаблонов — только то, что действительно работает.

**Золото и металлы**
Разбираем варианты хранения, покупки и вывода.
Хедж от кризисов и защита капитала.

**Недвижимость**
Подбираем активы по локации, доходности и рискам.
Расчёты: кэшфлоу, ROI, срок окупаемости.

**Страхование и пенсия**
Решения с накоплением и налоговой выгодой.
Долгосрочная финансовая защита семьи.

**Криптовалюта**
Показываю, как легально купить, продать и вывести.
Сценарии, которые не блокируют счета и не нарушают закон.

**Приватные проекты**
Доступ к закрытым предложениям.
Анализ, расчёты и защита интересов на входе.`}
                    className="big:min-h-[511px] large:min-h-[611px]"
                    image="images/ServicesPage/PrivateSection/tools.png"
                />
                <ServiceCard
                    title="Консультация по криптовалюте и выводу средств"
                    description="Как легально купить, продать, вывести деньги без блокировок и рисков."
                    image="images/ServicesPage/PrivateSection/consult.png"
                    className="big:min-h-[511px] large:min-h-[611px]"
                    extraText={`Я помогаю разобраться, как **легально работать с криптовалютой**: купить, продать, перевести, вывести средства на банковский счёт — без блокировок, санкций и нарушений закона.\n
За плечами — **реальный опыт сопровождения клиентов в разных юрисдикциях**, в том числе с большими суммами.
Я знаю, где и как могут возникнуть проблемы, и заранее проектирую для вас **безопасный маршрут**:\n
• с учётом рисков
• с выбором бирж и кошельков
• с пониманием налоговых последствий\n
Объясню, где и как лучше купить криптовалюту
Подскажу, как правильно хранить (холодные / горячие кошельки, мультисиг)
 Покажу, как **законно вывести средства**, если вы инвестировали через крипту
Все решения — только те, за которые я могу отвечать\n
Мои клиенты выбирают меня за то, что я не «играю в крипту» —
а **строю понятную и легальную стратегию**, где деньги не исчезают и не блокируются.`}
                />
                <ServiceCard
                    title="Оптимизация денежных потоков и движение средств"
                    description="Убираем лишние звенья, находим законные и выгодные маршруты."
                    image="images/ServicesPage/PrivateSection/optimisation.png"
                    className="big:min-h-[511px] large:min-h-[611px]"
                    extraText={`Вы удивитесь, сколько легальных возможностей у вас есть —
если выстроить движение денег правильно.\n
Я помогаю **оптимизировать ваши денежные потоки** с учётом:\n
• юрисдикции (где вы находитесь и где зарегистрированы счета)
• налоговой нагрузки
• валютного контроля
• личного или бизнес-статуса
• целей (сохранение, покупка, инвестиции, передача средств)\n
Разбираем вашу текущую финансовую систему:
доходы, расходы, переводы, накопления, инвестиции.
Показываю, **где можно платить меньше, не терять на комиссиях,
и где есть законные лазейки**, которые работают — просто вы о них не знали.
Это может быть:\n
• использование правильных платёжных систем
• маршруты перевода средств между странами
• конвертация через выгодные источники
• структура счетов и расчётов, не вызывающая блокировок
• минимизация налога при выводе прибыли или продажи актива\n
Всё — **в рамках закона**, но не «по шаблону», а **под вашу ситуацию**.
Я не просто советую — я **объясняю каждую схему её последствия**.
Это экономит вам **большие деньги и время**`}
                />
                <ServiceCard
                    title="Персональное сопровождение"
                    description="Закрытая работа — когда нужен советник, а не инструкция"
                    image="images/ServicesPage/PrivateSection/accompany.png"
                    className="lg:col-span-2"
                    extraText={`Эта услуга для тех, кто хочет чтобы всё было **сделано правильно, быстро и в его интересах.**\n
Я работаю лично.
Конфиденциально.
Без лишних посредников.\n
Вы получаете **пошаговое сопровождение по каждому действию**: от выбора инструмента и расчёта до перевода, оформления и контроля результата.
Все решения принимаются только **в рамках закона** — но с учётом нюансов, о которых знают единицы.\n
Моя задача — **обезопасить ваши деньги**,
сэкономить время и провести вас туда, где капитал работает, а не «лежит».\n
Мне доверяют те, кто боится потерять.
Именно поэтому я не навязываю — я отвечаю.`}
                />
            </div>
        </div>
    );
}

function FirstCard({
    title,
    description,
    extraText,
    image,
    className = ''
}: {
    title: string;
    description: string;
    extraText: string;
    image: string;
    className?: string;
}) {
    const [showExtra, setShowExtra] = useState(false);

    return (
        <div
            className={`bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden hover:shadow-2xl transition-shadow ${className}`}
        >
            <div className="flex flex-col p-6 flex-grow">
                <h4 className="text-2xl font-bold mb-3">{title}</h4>
                <p className="text-lg font-semibold mb-4">{description}</p>
                {showExtra && (
                    <p className="text-lg font-normal mb-4">{extraText}</p>
                )}
                <div className="h-[250px] bg-cover bg-center mb-4" style={{ backgroundImage: `url(${image})` }} />
                <button
                    className="gradient-btn w-full h-[45px] text-lg font-bold rounded-xl mt-auto cursor-pointer"
                    onClick={() => setShowExtra(!showExtra)}
                >
                    {showExtra ? "Скрыть" : "Подробнее"}
                </button>
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
            className={`bg-white shadow-xl rounded-2xl overflow-hidden 
            hover:shadow-2xl transition-all duration-300 flex flex-col ${className}`}
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
