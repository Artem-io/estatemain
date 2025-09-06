import { useState } from "react";
import PrivateSection from "./sections/PrivateSection";
import BusinessSection from "./sections/BusinessSection";

export default function ServicesPage() {
    type BenefitType = "private" | "business";
    const [benefitType, setBenefitType] = useState<BenefitType>("private");

    return (
        <div className="container mx-auto mb-[50px]">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Мои услуги</h1>
            <div className="flex flex-col phone:flex-row gap-4 justify-center mb-[20px]">
                <button
                    onClick={() => setBenefitType("private")}
                    className={`px-6 py-3 rounded-xl w-[80%] mx-auto phone:mx-0 phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "private" ? "active-btn" : "disabled-btn"}`}
                >
                    Я — частное лицо
                </button>
                <button
                    onClick={() => setBenefitType("business")}
                    className={`px-6 py-3 rounded-xl w-[80%] mx-auto phone:mx-0 phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "business" ? "active-btn" : "disabled-btn"}`}
                >
                    Я — бизнес
                </button>
            </div>
            {benefitType == 'private' ? <PrivateSection /> : <BusinessSection />}
        </div>
    )
}