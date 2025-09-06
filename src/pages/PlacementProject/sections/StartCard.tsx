export default function StartCard() {
    return (
        <div className="maincontainer mx-auto mb-[30px] bigphone:mb-[50px]">
            <div className="h-[700px] small:h-[500px] relative bg-gradient-to-r 
            bg-[#031633] bigphone:rounded-4xl 
            pt-[33px] pl-[20px] bigphone:pl-[68px] mb-[50px] flex flex-col 
            pb-[50px] bigphone:pb-[100px] small:pb-[50px]">
                <img src="images/PlacementPage/StartCard/elena.png" alt="elena"
                className="absolute bottom-0 right-0
                w-[370px] xsphone:w-[380px] bigphone:w-[370px] 
                small:w-[350px] big:w-[350px] large:w-[370px] h-auto"/>
                <div className="text-white font-bold 
                max-w-[730px] leading-tight mb-[20px] bigphone:mb-[40px] large:mb-[50px]">
                    <h2 className="text-2xl bigphone:text-xl 
                    small:text-2xl big:text-3xl large:text-4xl mb-2 phone:mb-0">
                        Хотите, чтобы ваш проект увидели инвесторы?
                    </h2>
                </div>
                <h3 className="max-w-[90%] small:max-w-[60%] text-[#c0c7d1] 
                text-[16px] bigphone:text-xl small:text-xl big:text-2xl
                mb-[30px] bigphone:mb-[90px] small:mb-[50px]">
                Я размещаю на витрине только те кейсы, которые проходят мой личный отбор —
                и действительно могут заинтересовать мою аудиторию.
                Если ваш проект готов или почти готов к инвестициям —
                оставьте информацию ниже, и я свяжусь с вами лично.
                </h3>
                <div className="flex flex-col mt-auto small:mt-0 gap-y-3">
                    <a href="#placeform" className="block w-[300px] big:w-[370px]">
                        <button className="w-full h-[50px] big:h-[60px] rounded-xl big:rounded-2xl cursor-pointer
                        gradient-btn
                        flex items-center justify-center font-bold
                        small:text-lg big:text-xl">
                        Разместить проект
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}