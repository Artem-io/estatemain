import { motion } from "framer-motion";

export default function WorkProcess() {
    return (
        <div className="container mx-auto mb-[50px]">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-[30px] px-4">
                Как это работает
            </h1>
            <div className="grid grid-cols-1 big:grid-cols-3 gap-6">
                <WorkCard title="Отбор проектов" idx={0}
                desc="Анализирую идеи и готовые кейсы." img="Casting" />
                <WorkCard title="Упаковка оффера" idx={1}
                desc="Помогаю доработать предложение для инвесторов." img="Pack" />
                <WorkCard title="Доступ к витрине" idx={2}
                desc="Ваш проект видят реальные инвесторы." img="Access" />
            </div>
        </div>
    );
}

interface WorkCardProps {
    title: string;
    img: string;
    desc: string;
    idx: number;
}

function WorkCard({title, desc, img, idx}: WorkCardProps) {
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
        className={`bg-white shadow-xl rounded-2xl flex flex-col 
        overflow-hidden hover:shadow-2xl transition-shadow`}>
            <div className="flex flex-col flex-grow p-6 text-center">
                <img src={`icons/PlacementPage/WorkProcess/${img}.png`} alt={img} 
                className="w-[200px] small:w-[300px] h-auto mx-auto" />
                <h4 className="text-2xl font-bold mb-3">{title}</h4>
                <p className="text-xl font-semibold mb-6 flex-grow">{desc}</p>
            </div>
        </motion.div>
    );
}