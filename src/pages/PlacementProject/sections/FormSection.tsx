import { useState } from "react";

export default function FormSection() {
    return (
        <div className="container mx-auto" id="placeform">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-2">
                Заполните форму
            </h1>
            <p className="text-lg font-semibold text-center mx-auto mb-[30px]">
                Я свяжусь с вами в течение 48 часов
            </p>
            <Form />
        </div>
    )
}

function Form() {
    const [formData, setFormData] = useState({
        about: "",
        stage: "",
        attachment: "",
        type: "",
        amount: "",
        involvement: "",
        contacts: ""
      });
    
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            about: "",
            stage: "",
            attachment: "",
            type: "",
            amount: "",
            involvement: "",
            contacts: ""
        });
        setIsModalOpen(true);
      };

    return (
        <div className="w-[100vw] phone:w-full">
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white shadow-lg 
                rounded-2xl p-6 space-y-5 mb-4"
            >
                <div>
                    <label className="block font-medium mb-2">Что за проект?</label>
                    <textarea
                        name="about"
                        rows={4}
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium mb-2">Стадия проекта</label>
                    <input
                        type="message"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Что уже сделано</label>
                    <input
                        type="tel"
                        name="attachment"
                        value={formData.attachment}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Тип актива</label>
                    <input
                        type="tel"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Какую сумму вы ищете</label>
                    <input
                        type="tel"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Ваша вовлечённость проектом</label>
                    <textarea
                        name="involvement"
                        rows={4}
                        value={formData.involvement}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium mb-2">Ваши контакты</label>
                    <input
                        type="message"
                        name="contacts"
                        value={formData.contacts}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                type="submit"
                className="w-full text-xl phone:text-2xl font-bold active-btn rounded-2xl h-[50px] cursor-pointer"
                >
                Отправить запрос
                </button>
            </form>
            {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">
                    Спасибо за вашу заявку!
                    </h2>
                    <p className="mb-6">
                    В случае если ваша заявка будет одобрена, мы с вами свяжемся.
                    </p>
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full active-btn text-white font-semibold py-2 
                    rounded-xl transition cursor-pointer"
                    >
                    Закрыть
                    </button>
                </div>
            </div>
        )}
        </div>
    );
}