export default function ServicesSection() {
  return (
    <div className="container mx-auto mb-[50px]">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Мои услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <ServiceCard
          image="images/ServicesSection/private.png"
          title="Для частных клиентов"
          items={[
            "Разбор вашей финансовой ситуации и целей",
            "Построение инвестиционной стратегии под вашу страну, статус, риски",
            "Подбор инструментов: золото, недвижимость, страхование, крипта",
            "Оптимизация движения средств",
            "Консультация: как выгодно и легально купить/продать криптовалюту",
            "Вывод средств на счёт с учётом рисков и налогов",
            "Конфиденциальное сопровождение и проверенные решения"
          ]}
        />
        <ServiceCard
          image="images/ServicesSection/business.png"
          title="Для бизнеса"
          items={[
            "Разработка инвестиционного предложения (презентация + расчёты)",
            "Финансовое моделирование и структура сделки",
            "Бюджетирование, оптимизация расходов",
            "Подготовка проекта к встрече с инвестором",
            "Размещение в моей Invest-витрине"
          ]}
        />
      </div>
    </div>
  );
}

interface ServiceCardProps {
  image: string;
  title: string;
  items: string[];
}

function ServiceCard({ image, title, items }: ServiceCardProps) {
  return (
    <div className="w-full max-w-[500px] bg-white shadow-xl rounded-3xl p-6 md:p-8
    flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img src={image} alt={title}
        className="w-24 h-[114px] mx-auto mb-4" />
      <h2 className="mb-4 text-2xl font-bold text-center">{title}</h2>
      <ul className="space-y-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-darkblue text-lg leading-6">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-3">
        <a href="tel:+380664060778">
          <button className="w-full h-[56px] rounded-2xl disabled-btn cursor-pointer font-bold  hover:brightness-110 transition mb-3">
            Подробнее
          </button>
        </a>
        <a href="#contactform">
          <button className="w-full h-[56px] rounded-2xl active-btn font-bold
          hover:brightness-110 transition cursor-pointer">
            Записаться на консультацию
          </button>
        </a>
      </div>
    </div>
  );
}
