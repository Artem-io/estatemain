import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useTranslation } from "react-i18next";

import invest from '/images/ServicesPage/BusinessSection/invest.png';
import financemodel from '/images/ServicesPage/BusinessSection/financemodel.png';
import budget from '/images/ServicesPage/BusinessSection/budget.png';
import negotiation from '/images/ServicesPage/BusinessSection/negotiation.png';
import placement from '/images/ServicesPage/BusinessSection/placement.png';

export default function PrivateSection() {
    const { t } = useTranslation();

    return (
        <div className="px-4">
            <h2 className="text-2xl font-bold text-center mb-6">
                {t("servicesbussectitle")}
            </h2>
            <div className="text-lg font-semibold text-center mb-10 max-w-3xl mx-auto">
                <p>
                    {t("servicesbussecdesc")}
                </p>
            </div>

            <div className="grid grid-cols-1 big:grid-cols-2 large:grid-cols-6 gap-8 items-start">
                {/* Первая карточка с кнопкой внизу и раскрывающимся текстом */}
                <ServiceCard
                    title={t("servicesbuscardinvesttitle")}
                    description={t("servicesbuscardinvestdesc")}
                    image={invest}
                    className="large:col-span-3 big:min-h-[539px] large:min-h-[483px]"
                    extraText={t("servicesbuscardinvestextra")}
                />

                {/* Остальные карточки */}
                <ServiceCard
                    title={t("servicesbuscardmodeltitle")}
                    description={t("servicesbuscardmodeldesc")}
                    image={financemodel}
                    className="large:col-span-3 big:min-h-[539px] large:min-h-[483px]"
                    extraText={t("servicesbuscardmodelextra")}
                />
                <ServiceCard
                    title={t("servicesbuscardbudgettitle")}
                    description={t("servicesbuscardbudgetdesc")}
                    className="large:col-span-2 large:min-h-[539px]"
                    extraText={t("servicesbuscardbudgetextra")}
                    image={budget}
                />

                <ServiceCard
                    title={t("servicesbuscardreadytitle")}
                    description={t("servicesbuscardreadydesc")}
                    className="large:col-span-2 large:min-h-[539px]"
                    image={negotiation}
                    extraText={t("servicesbuscardreadyextra")}
                />
                <ServiceCard
                    title={t("servicesbuscardplacetitle")}
                    description={t("servicesbuscardplacedesc")}
                    className="large:col-span-2 large:min-h-[539px]"
                    image={placement}
                    extraText={t("servicesbuscardplaceextra")}
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

    const { t } = useTranslation();

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
                    {showExtra ? t("servicesbuscardbtnclose") : t("servicesbuscardbtnmore")}
                </button>
            </div>
        </div>
    );
}