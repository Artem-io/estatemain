import { useTranslation } from "react-i18next";

import elena from '/images/PlacementPage/StartCard/elena.png'

export default function StartCard() {
    const { t } = useTranslation();

    return (
        <div className="maincontainer mx-auto mb-[30px] bigphone:mb-[50px]">
            <div className="h-[700px] small:h-[500px] relative bg-gradient-to-r 
            bg-[#031633] bigphone:rounded-4xl 
            pt-[33px] pl-[20px] bigphone:pl-[68px] mb-[50px] flex flex-col 
            pb-[50px] bigphone:pb-[100px] small:pb-[50px]">
                <img src={elena} alt="elena"
                className="absolute bottom-0 right-0
                w-[320px] xsphone:w-[350px] bigphone:w-[330px] 
                small:w-[300px] big:w-[320px] large:w-[350px] h-auto"/>
                <div className="text-white font-bold 
                max-w-[730px] leading-tight mb-[20px] bigphone:mb-[40px] large:mb-[50px]">
                    <h2 className="text-2xl bigphone:text-xl 
                    small:text-2xl big:text-3xl large:text-4xl mb-2 phone:mb-0">
                        {t("placestarttitle")}
                    </h2>
                </div>
                <h3 className="max-w-[90%] small:max-w-[60%] text-[#c0c7d1] 
                text-[16px] bigphone:text-xl small:text-xl big:text-2xl
                mb-[30px] bigphone:mb-[90px] small:mb-[50px]">
                {t("placestartdesc")}
                </h3>
                <div className="flex flex-col mt-auto small:mt-0 gap-y-3">
                    <a href="#placeform" className="block w-[300px] big:w-[370px]">
                        <button className="w-full h-[50px] big:h-[60px] rounded-xl big:rounded-2xl cursor-pointer
                        gradient-btn
                        flex items-center justify-center font-bold
                        small:text-lg big:text-xl">
                        {t("placestartbtn")}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}