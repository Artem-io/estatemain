import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import consult from '/images/AnalyzePage/ConsultSection/consult.png'

export default function ConsultSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-12">

        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-10 leading-tight">
            {t("analyzeconsulttitle")}
          </h1>
          <div className="font-semibold text-gray-700">
            <ul className="text-lg sm:text-xl list-disc pl-5 mb-4 space-y-2">
              <li>{t("analyzeconsultli1")}</li>
              <li>{t("analyzeconsultli2")}</li>
              <li>{t("analyzeconsultli3")}</li>
              <li>{t("analyzeconsultli4")}</li>
              <li>{t("analyzeconsultli5")}</li>
              <li>{t("analyzeconsultli6")}</li>
            </ul>
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
            src={consult}
            alt="consult"
            className="w-[250px] sm:w-[350px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>
    </section>
  );
}