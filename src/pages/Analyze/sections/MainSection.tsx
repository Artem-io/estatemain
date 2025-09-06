import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className="w-full bg-gray-50">
      {/* Фоновое изображение */}
      <div
        className="h-[250px] bg-cover bg-center"
        style={{ backgroundImage: `url('images/AnalyzePage/MainSection/footer.png')` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Текст */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-10 leading-tight">
            Анализ и создание инвестиционного портфеля: стратегия, структура и смысл
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed">
            Инвестором нельзя просто стать — нужно научиться быть им. Большинство людей думают, что «инвестиции» — это таблица с цифрами, сложный график и пара советов из YouTube. 
            Но по-настоящему эффективный портфель начинается не с покупки актива — а с понимания самого себя. 
            Именно так я подхожу к работе с каждым клиентом. 
            Я не продаю инструменты. Я строю мышление инвестора, опираясь на ваш ритм жизни, цели, страхи, возможности и границы.
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
            src="images/AnalyzePage/MainSection/water.png" 
            alt="water" 
            className="w-[250px] sm:w-[300px] h-auto mx-auto lg:mx-0"
          />
        </motion.div>

      </div>
    </section>
  );
}
