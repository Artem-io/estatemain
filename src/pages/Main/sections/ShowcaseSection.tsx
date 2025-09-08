// Импорты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Flipping-проект: апарт-отель у моря, полная реконструкция",
    description: "Инвестиции в реконструкцию недвижимости с прогнозируемой доходностью.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Германия, Берлин",
    type: "Реконструкция недвижимости",
    entry: "€ 75 000",
    profit: "13–16% годовых",
    term: "12–18 мес",
    risk: "Средние",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
];

export default function ShowcaseSection() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mb-[70px] px-4">
      <h1 className="font-bold text-2xl phone:text-3xl sm:text-4xl text-center mb-[30px]">
        {t("mainshowcasetitle")}
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '', prevEl: '' }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="mb-5"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-[95%] min-h-[665px] phone:w-[90%] max-w-[500px] mx-auto bg-white shadow-xl rounded-2xl overflow-hidden pb-3 flex flex-col">
              {/* Фото */}
              <div
                className="h-[180px] sm:h-[220px] lg:h-[240px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
              </div>

              {/* Контент */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                {/* Сетка параметров */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/location.png" alt="location" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Локация:</span>
                  </div>
                  <div className="text-gray-900 font-semibold">{project.location}</div>

                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/office.png" alt="office" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Тип объекта:</span>
                  </div>
                  <div className="text-gray-900 font-semibold">{project.type}</div>

                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/salary.png" alt="salary" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Инвестиционный вход:</span>
                  </div>
                  <div className="text-gray-900 font-semibold flex items-end phone:block">{project.entry}</div>

                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/growth.png" alt="growth" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Доходность:</span>
                  </div>
                  <div className="text-blue-600 font-semibold">{project.profit}</div>

                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/term-loan.png" alt="term" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Срок:</span>
                  </div>
                  <div className="text-gray-900 font-semibold">{project.term}</div>

                  <div className="flex items-center gap-2">
                    <img src="icons/ShowcaseSection/warning.png" alt="risk" className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Риски:</span>
                  </div>
                  <div className="text-yellow-600 font-semibold">{project.risk}</div>
                </div>

                {/* Кнопка + прижатие вниз */}
                <div className="mt-auto">
                  <button
                    className="w-full py-2 active-btn font-semibold rounded-lg shadow text-sm cursor-pointer"
                  >
                    {t("mainshowcasebuttondetails")}
                  </button>
                  <div className="swiper-pagination !static flex justify-center mt-3"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="tel:+380664060778" className="block w-[300px] big:w-[400px] mx-auto">
        <button className="w-full py-3 rounded-xl big:rounded-2xl cursor-pointer
        gradient-btn
        flex items-center justify-center font-bold
        small:text-lg big:text-lg">
          {t("mainshowcasebuttonmore")}
        </button>
      </a>
    </div>
  );
}

