import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mb-[50px]">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">{t("mainservicestitle")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <ServiceCard
          image="images/ServicesSection/private.png"
          title={t("mainservicesprivatetitle")}
          items={[
            t("mainservicesprivate1"),
            t("mainservicesprivate2"),
            t("mainservicesprivate3"),
            t("mainservicesprivate4"),
            t("mainservicesprivate5"),
            t("mainservicesprivate6"),
            t("mainservicesprivate7")
          ]}
        />
        <ServiceCard
          image="images/ServicesSection/business.png"
          title={t("mainservicesbusinesstitle")}
          items={[
            t("mainservicesbusiness1"),
            t("mainservicesbusiness2"),
            t("mainservicesbusiness3"),
            t("mainservicesbusiness4"),
            t("mainservicesbusiness5")
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
  const { t } = useTranslation();

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
            {t("mainservicesbuttonmore")}
          </button>
        </a>
        <a href="#contactform">
          <button className="w-full h-[56px] rounded-2xl active-btn font-bold
          hover:brightness-110 transition cursor-pointer">
            {t("mainservicesbuttonconsult")}
          </button>
        </a>
      </div>
    </div>
  );
}
