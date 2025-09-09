import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import tree from '/images/AnalyzePage/PhilosophySection/tree.png'

export default function PhilosophySection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-10 leading-tight">
            {t("analyzephylotitle")}
          </h1>
          <div className="font-semibold text-gray-700">
            <p className="text-lg sm:text-xl mb-4">
              {t("analyzephylodesc")}
            </p>
            <ul className="text-lg sm:text-xl list-disc pl-5 mb-4 space-y-2">
              <li>{t("analyzephyloli1")}</li>
              <li>{t("analyzephyloli2")}</li>
              <li>{t("analyzephyloli3")}</li>
            </ul>
            <div className="text-lg sm:text-xl mb-5 space-y-1">
              <p>{t("analyzephylop1")}</p>
              <p>{t("analyzephylop2")}</p>
              <p>{t("analyzephylop3")}</p>
            </div>
            <p className="text-lg sm:text-xl">
              {t("analyzephylounderdesc")}
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
            src={tree}
            alt="tree" 
            className="w-[250px] sm:w-[400px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>
    </section>
  );
}