export default function MainInfo() {
  return (
    <div className="maincontainer mx-auto mb-[30px] bigphone:mb-[50px]">
      <div className="h-[670px] bigphone:h-[500px] relative bg-gradient-to-r 
    bg-[#031633] bigphone:rounded-4xl 
      pt-[33px] pl-[20px] bigphone:pl-[68px] mb-[50px] flex flex-col pb-[50px]">
        <img src="images/MainInfo/elena3.png" alt="elena"
        className="absolute bottom-0 right-0
        w-[290px] xsphone:w-[300px] bigphone:w-[230px] small:w-[300px] big:w-[350px] large:w-[370px] h-auto"/>
        <div className="text-white font-bold 
        max-w-[730px] leading-tight mb-[40px] large:mb-[25px]">
          <h2 className="text-4xl bigphone:text-xl 
          small:text-[22px] big:text-2xl large:text-[30px] mb-2 phone:mb-0">
            Елена Степанюк
          </h2>
          <p className="text-[13px] xsphone:text-lg bigphone:text-xl small:text-[22px] big:text-2xl large:text-[30px]">
            Финансовый советник · Инвестиционный стратег
          </p>
        </div>
        <h3 className="max-w-[90%] small:max-w-[60%] text-[#c0c7d1] 
        text-xl bigphone:text-lg big:text-xl
        mb-[30px] bigphone:mb-[90px] small:mb-[50px]">
          Оптимизация денежных потоков, инвестиционные решения и сопровождение капитала.
          12+ лет помогаю управлять деньгами осознанно.
        </h3>
        <div className="flex flex-col mt-auto bigphone:mt-0 gap-y-3">
          <a href="#contactform" className="block w-[300px] big:w-[370px]">
            <button className="w-full h-[50px] big:h-[60px] rounded-xl big:rounded-2xl cursor-pointer
            gradient-btn
            flex items-center justify-center font-bold
            small:text-lg big:text-xl">
              Записаться на разбор
            </button>
          </a>
          <a href="tel:+380664060778" className="block w-[300px] big:w-[370px]">
            <button className="w-full h-[50px] big:h-[60px] rounded-xl big:rounded-2xl cursor-pointer
            gradient-btn
            flex items-center justify-center font-bold
            small:text-lg big:text-xl">
              Смотреть Invest-витрину
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}