import { motion } from "framer-motion";

export default function BenefitsSection() {
  return (
    <div className="maincontainer mx-auto mb-[50px] px-4">
      <div className="grid grid-cols-1 bigphone:grid-cols-2 justify-items-center gap-x-10 gap-y-7">
        <BenefitsCard
          label={`Я не просто считаю — я чувствую потоки денег.`}
          image="budget"
          idx={0}
        />
        <BenefitsCard
          label={`Покажу вам, где вы теряете, и где ваш рост`}
          image="growth"
          idx={1}
        />
        <BenefitsCard
          label={`Конфиденциально. Надёжно. Системно.`}
          image="folder"
          idx={2}
        />
        <BenefitsCard
          label={`Отвечаю деньгами за результат.`}
          image="guarantee"
          idx={3}
        />
      </div>
    </div>
  );
}

interface BenefitsCardProps {
  label: string;
  image: string;
  idx: number
}

function BenefitsCard({ label, image, idx }: BenefitsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }} 
      transition={{
        duration: 0.5,
        delay: idx * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="w-full max-w-[545px] h-[140px]
      bg-white shadow-xl hover:shadow-2xl rounded-3xl
      flex gap-[20px] items-center
      px-[25px] py-[30px]"
    >
      <img
        src={`icons/BenefitsSection/${image}.png`}
        alt={image}
        className="w-[60px] bigphone:w-[70px] h-auto"
      />
      <p className="text-[16px] xsphone:text-lg font-semibold whitespace-pre-line">
        {label}
      </p>
    </motion.div>
  );
}
