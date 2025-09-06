import { motion } from "framer-motion";

export default function RequirementsSection() {
    return (
        <div className="container mx-auto mb-[50px]">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-[20px]">
                Что важно указать
            </h1>
            <p className="text-lg font-semibold text-center mx-auto mb-[30px]">
                Заполните ключевую информацию — это поможет попасть на витрину инвесторов
            </p>
            <div className="grid grid-cols-1 bigphone:grid-cols-2 small:grid-cols-3 gap-6 mb-4 px-4">
                <RequirementCard title="Что за проект?" desc="Опишите проект и его локацию" image="about" idx={0}/>
                <RequirementCard title="Стадия проекта" desc="Идея, земля, стройка или готовый" image="stage" idx={1}/>
                <RequirementCard idx={2} title="Что уже сделано" desc="Расчёты, вложения, команда, документы" image="attachments"/>
                <RequirementCard title="Тип актива" desc="Недвижимость, земля, бизнес, отель" image="type" idx={3}/>
                <RequirementCard title="Инвестиции" desc="Какую сумму вы ищете" 
                image="invest" idx={4}/>
                <RequirementCard title="Вовлечённость" desc="Насколько вы вовлечены лично" image="involvement" idx={5}/>
            </div>
            <p className="text-lg font-semibold text-center max-w-[80%] mx-auto 
            phone:max-w-full phone:mx-0">
                Я помогаю только тем, в чьи проекты могу поверить сама.<br/>
                Поэтому буду рада видеть у себя на витрине сильные и прозрачные предложения.
            </p>
        </div>
    )
}

function RequirementCard({title, desc, image, idx}: 
    {title: string; desc: string; image: string; idx: number;}) {
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
            <div className="h-[200px] bg-cover bg-center" style={{ 
                backgroundImage: `url(images/PlacementPage/RequirementsSection/${image}.png)` }} />
            <div className="flex flex-col flex-grow p-6 text-center">
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-lg font-semibold flex-grow">{desc}</p>
            </div>
        </motion.div>
    );
}