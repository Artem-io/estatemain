import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import arrow from '/images/AnalyzePage/WhySection/arrow.png'
import footer from '/images/AnalyzePage/MainSection/footer.png'
import { Link } from "react-router-dom";

export default function WhySection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6 leading-tight">
            {t("analyzewhytitle")}
          </h1>
          <div className="font-semibold text-gray-700 space-y-4">
            <p className="text-lg sm:text-xl">
              {t("analyzewhyp1")}
            </p>
            <p className="text-lg sm:text-xl">
              {t("analyzewhyp2")}
            </p>
            <p className="text-lg sm:text-xl">
              {t("analyzewhyp3")}
            </p>
            <p className="text-lg sm:text-xl">
              {t("analyzewhyp4")}
            </p>
          </div>
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
            src={arrow}
            alt="arrow"
            className="w-[250px] sm:w-[300px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>

      <Link to={`/${i18n.language}#contactform1`} className="block w-[300px] big:w-[400px] mx-auto mb-5">
        <button className="w-full py-3 rounded-xl big:rounded-2xl cursor-pointer
        gradient-btn
        flex items-center justify-center font-bold
        small:text-lg big:text-lg">
          {t("analyzebtn")}
        </button>
      </Link>

      {/* Фоновое изображение */}
      <div
        className="h-[250px] bg-cover bg-bottom"
        style={{ backgroundImage: `url('${footer}')` }}
      />
    </section>
  );
}