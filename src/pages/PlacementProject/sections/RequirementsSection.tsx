import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import about from '/images/PlacementPage/RequirementsSection/about.png';
import stage from '/images/PlacementPage/RequirementsSection/stage.png';
import attachments from '/images/PlacementPage/RequirementsSection/attachments.png';
import typeImg from '/images/PlacementPage/RequirementsSection/type.png';
import invest from '/images/PlacementPage/RequirementsSection/invest.png';
import involvement from '/images/PlacementPage/RequirementsSection/involvement.png';

export default function RequirementsSection() {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto mb-[50px]">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-[20px]">
                {t("placerequiretitle")}
            </h1>
            <p className="text-lg font-semibold text-center mx-auto mb-[30px]">
                {t("placerequiredesc")}
            </p>
            <div className="grid grid-cols-1 bigphone:grid-cols-2 small:grid-cols-3 gap-6 mb-4 px-4">
                <RequirementCard title={t("placerequirewhattitle")} desc={t("placerequirewhatdesc")} image={about} idx={0}/>
                <RequirementCard title={t("placerequirestadytitle")} desc={t("placerequirestadydesc")} image={stage} idx={1}/>
                <RequirementCard idx={2} title={t("placerequireattachtitle")} desc={t("placerequireattachdesc")} image={attachments}/>
                <RequirementCard title={t("placerequiretypetitle")} desc={t("placerequiretypedesc")} image={typeImg} idx={3}/>
                <RequirementCard title={t("placerequireinvesttitle")} desc={t("placerequireinvestdesc")}
                image={invest} idx={4}/>
                <RequirementCard title={t("placerequireinvolvtitle")} desc={t("placerequireinvolvdesc")} image={involvement} idx={5}/>
            </div>
            <p className="text-lg font-semibold text-center max-w-[80%] mx-auto 
            phone:max-w-full phone:mx-0">
                {t("placerequireundesc1")}<br/>
                {t("placerequireundesc2")}
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
                backgroundImage: `url(${image})` }} />
            <div className="flex flex-col flex-grow p-6 text-center">
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-lg font-semibold flex-grow">{desc}</p>
            </div>
        </motion.div>
    );
}