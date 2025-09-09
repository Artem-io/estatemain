// Импорты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {API_URL} from "../../../constants/constants.tsx";
import type {Investment} from "../interfaces/interfaces.tsx";
import Card from "../blocks/Card.tsx";

type Investments = Investment[];

export default function ShowcaseSection() {
  const { t } = useTranslation();

  const [investments, setInvestments] = useState<Investments>([]);
  
  useEffect(() => {
  const fetchInvestments = async () => {
    try {
      const res = await fetch(`${API_URL}?lan=RU&actural=true`);
      if (!res.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data: Investments = await res.json();
      setInvestments(data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchInvestments();
}, []);

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
        {investments.map((project, index) => (
          <SwiperSlide key={index}>
            <Card key={index} id={project.id} title={project.title} description={project.description} location={project.location} type={project.type} 
            priceEUR={project.priceEUR} priceUSD={project.priceUSD} priceGBP={project.priceGBP} profitMin={project.profitMin} profitMax={project.profitMax} timeMin={project.timeMin} timeMax={project.timeMax} risk={project.risk}
            imageUrls={project.imageUrls}/>
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

