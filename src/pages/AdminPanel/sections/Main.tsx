import { useState } from "react";
import AddForm from "./AddForm";

export default function Main() {
    type BenefitType = "add" | "edit";
    const [benefitType, setBenefitType] = useState<BenefitType>("add");

    return (
        <div>
            <h1 className="font-bold text-3xl sm:text-4xl text-center mt-4 mb-10">Админ панель</h1>
            <div className="flex flex-col phone:flex-row gap-4 justify-center mb-[20px]">
                <button
                    onClick={() => setBenefitType("add")}
                    className={`px-6 py-3 rounded-xl w-full phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "add" ? "active-btn" : "disabled-btn"}`}
                >
                    Добавить проект
                </button>
                <button
                    onClick={() => setBenefitType("edit")}
                    className={`px-6 py-3 rounded-xl w-full phone:w-[300px] cursor-pointer transition font-semibold
                    hover:brightness-110
                    ${benefitType === "edit" ? "active-btn" : "disabled-btn"}`}
                >
                    Редактировать проект
                </button>
            </div>
            {benefitType === "add" && <AddForm />}
        </div>
    );
}