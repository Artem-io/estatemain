import { motion } from "framer-motion";

export default function PortretSection() {
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
            Портрет инвестора — как основа стратегии
          </h1>
          <div className="font-semibold text-gray-700">
            <p className="text-lg sm:text-xl mb-4">
              Перед тем как говорить о том, «куда вложить», я задаю вам десятки вопросов:
            </p>
            <ul className="text-lg sm:text-xl list-disc pl-5 mb-4 space-y-2">
              <li>Где вы находитесь — физически, юридически, эмоционально?</li>
              <li>Что для вас важнее — безопасность или рост?</li>
              <li>Вы готовы к колебаниям? Или важно видеть результат ежемесячно?</li>
              <li>Есть ли у вас подушка? Что будет, если завтра — минус?</li>
              <li>Куда вы хотите прийти — через 2, 5, 10 лет?</li>
            </ul>
            <p className="text-lg sm:text-xl">
              Только поняв ваш <span className="font-bold">инвестпортрет</span>, я могу показать вам карту, а не просто бросить вас в лес с компасом.
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
            src="images/AnalyzePage/PortretSection/mask.png" 
            alt="mask" 
            className="w-[250px] sm:w-[300px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>
    </section>
  );
}
