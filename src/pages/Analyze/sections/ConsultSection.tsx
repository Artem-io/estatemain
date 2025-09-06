import { motion } from "framer-motion";

export default function ConsultSection() {
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
            Что даёт моя консультация
          </h1>
          <div className="font-semibold text-gray-700">
            <ul className="text-lg sm:text-xl list-disc pl-5 mb-4 space-y-2">
              <li>Полный анализ вашей ситуации: доходы, резервы, обязательства</li>
              <li>Портрет инвестора: характер, цели, рископрофиль</li>
              <li>Подбор инструментов: от золота и недвижимости до приватных сделок</li>
              <li>Расчёты: прогнозируемые сценарии, модели, доходность и риски</li>
              <li>Обучение: вы не просто слушаете — вы понимаете, что делаете и зачем</li>
              <li>Осознание: решения принимаете вы — я лишь даю вам карту</li>
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
            src="images/AnalyzePage/ConsultSection/consult.png"
            alt="consult"
            className="w-[250px] sm:w-[350px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>
    </section>
  );
}