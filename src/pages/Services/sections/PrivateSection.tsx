import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useTranslation } from "react-i18next";
import { t } from "i18next";

import financeanalyze from '/images/ServicesPage/PrivateSection/financeanalyze.png';
import structure from '/images/ServicesPage/PrivateSection/structure.png';
import tools from '/images/ServicesPage/PrivateSection/tools.png';
import consult from '/images/ServicesPage/PrivateSection/consult.png';
import optimisation from '/images/ServicesPage/PrivateSection/optimisation.png';
import accompany from '/images/ServicesPage/PrivateSection/accompany.png';

export default function PrivateSection() {
    const { t } = useTranslation();

    return (
        <div className="px-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {t("servicesprivsectitle")}
            </h2>
            <div className="text-lg font-semibold text-center mb-10 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-3">
                    {t("servicesprivsecdesc")}
                </h3>
                <p>
                    {t("servicesprivsecundesc")}
                </p>
            </div>

            <div className="grid grid-cols-1 big:grid-cols-2 large:grid-cols-4 gap-8 items-start">
                {/* Первая карточка с кнопкой внизу и раскрывающимся текстом */}
                <FirstCard
                    title={t("servicesprivcardanalyzetitle")}
                    description={t("servicesprivcardanalyzedesc")}
                    extraText={t("servicesprivcardanalyzeextra")}
                    image={financeanalyze}
                    className="lg:col-span-2"
                />

                {/* Остальные карточки */}
                <ServiceCard
                    title={t("servicesprivcardstructuretitle")}
                    description={t("servicesprivcardstructuredesc")}
                    extraText={t("servicesprivcardstructureextra")}
                    className="big:min-h-[511px] large:min-h-[611px]"
                    image={structure}
                />
                <ServiceCard
                    title={t("servicesprivcardinvesttitle")}
                    description={t("servicesprivcardinvestdesc")}
                    extraText={t("servicesprivcardinvestextra")}
                    className="big:min-h-[511px] large:min-h-[611px]"
                    image={tools}
                />
                <ServiceCard
                    title={t("servicesprivcardconsulttitle")}
                    description={t("servicesprivcardconsultdesc")}
                    image={consult}
                    className="big:min-h-[511px] large:min-h-[611px]"
                    extraText={t("servicesprivcardconsultextra")}
                />
                <ServiceCard
                    title={t("servicesprivcardoptimizetitle")}
                    description={t("servicesprivcardoptimizedesc")}
                    image={optimisation}
                    className="big:min-h-[511px] large:min-h-[611px]"
                    extraText={t("servicesprivcardoptimizeextra")}
                />
                <ServiceCard
                    title={t("servicesprivcardaccompanytitle")}
                    description={t("servicesprivcardaccompanydesc")}
                    image={accompany}
                    className="lg:col-span-2"
                    extraText={t("servicesprivcardaccompanyextra")}
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
                    {showExtra ? t("servicesprivcardbtnclose") : t("servicesprivcardbtnmore")}
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
                    {showExtra ? t("servicesprivcardbtnclose") : t("servicesprivcardbtnmore")}
                </button>
            </div>
        </div>
    );
}
