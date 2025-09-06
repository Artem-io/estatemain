import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6 leading-tight">
            Почему это важно?
          </h1>
          <div className="font-semibold text-gray-700 space-y-4">
            <p className="text-lg sm:text-xl">
              Потому что в мире неопределённости выиграет не тот, у кого самый прибыльный актив, а тот, у кого есть гибкая, стратегическая структура, адаптированная под законы, налоги и рынок.
            </p>
            <p className="text-lg sm:text-xl">
              Потому что риски есть всегда — но можно ими управлять. Потому что возможностей больше, чем вам кажется — но их надо понимать, а не бояться.
            </p>
            <p className="text-lg sm:text-xl">
              Это не консультация на час.
            </p>
            <p className="text-lg sm:text-xl">
              Это — точка входа в новую финансовую осознанность. После которой вы видите карту, а не угадываете направление.
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
            src="images/AnalyzePage/WhySection/arrow.png"
            alt="arrow"
            className="w-[250px] sm:w-[300px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>

      {/* Фоновое изображение */}
      <div
        className="h-[250px] bg-cover bg-bottom"
        style={{ backgroundImage: `url('images/AnalyzePage/MainSection/footer.png')` }}
      />
    </section>
  );
}