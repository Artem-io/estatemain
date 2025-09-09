import { useTranslation } from "react-i18next";

import elena from '/images/InvestPage/ShowcaseSection/elena.png'
import email from '/icons/InvestPage/ShowcaseSection/email.png'
import telegram from '/icons/InvestPage/ShowcaseSection/telegram.png'
import instagram from '/icons/InvestPage/ShowcaseSection/instagram.png'

export default function ConsultCard() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col p-12 bg-darkblue text-center text-white rounded-2xl">
            <h2 className="text-4xl mb-8">{t("investconsultcardtitle")}</h2>
            <img src={elena} alt="elena" className="w-[200px] h-auto mx-auto mb-2" />
            <p className="text-2xl font-bold">{t("investconsultcardname")}</p>
            <p className="text-lg font-bold mb-8">{t("investconsultcarddesc")}</p>
            <button className="h-[50px] bg-[#ebb40e] hover:bg-[#ffe97f] transition-colors 
            text-white flex items-center justify-center rounded-xl text-2xl font-bold cursor-pointer mb-4">{t("investconsultcardbtn")}</button>
            <a className="text-xl font-bold mb-4" href="">+49 1511 6042108</a>
            <div className="flex gap-4 items-center justify-center">
                <a href="">
                    <img src={email} alt="email" 
                    className="w-[32px] h-auto" />
                </a>
                <a href="">
                    <img src={telegram} alt="telegram" 
                    className="w-[32px] h-auto" />
                </a>
                <a href="">
                    <img src={instagram} alt="instagram" 
                    className="w-[32px] h-auto" />
                </a>
            </div>
        </div>
    )
}