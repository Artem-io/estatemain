import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import footer from '/images/AnalyzePage/MainSection/footer.png'
import water from '/images/AnalyzePage/MainSection/water.png'

export default function MainSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-gray-50">
      {/* Фоновое изображение */}
      <div
        className="h-[250px] bg-cover bg-center"
        style={{ backgroundImage: `url(${footer})` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-10 leading-tight">
            {t("analyzemaintitle")}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed">
            {t("analyzemaindesc")}
          </p>
        </motion.div>

        {/* Картинка */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img 
            src={water}
            alt="water"
            className="w-[250px] sm:w-[300px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>

      <Link to={`/${i18n.language}#contactform1`} className="block w-[300px] big:w-[400px] mx-auto">
        <button className="w-full py-3 rounded-xl big:rounded-2xl cursor-pointer
        gradient-btn
        flex items-center justify-center font-bold
        small:text-lg big:text-lg">
          {t("analyzemainbtn")}
        </button>
      </Link>
    </section>
  );
}
