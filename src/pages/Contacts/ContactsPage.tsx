import { useState } from "react";

export default function ContactsPage() {
    return (
        <div className="container mx-auto mb-[50px]">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Контакты</h1>
            <div className="text-lg font-semibold text-center mb-10 
            max-w-[90%] phone:max-w-3xl mx-auto">
                <p>
                    Если вы хотите задать вопрос, обсудить вашу ситуацию или предложить проект —
                    просто заполните форму ниже или свяжитесь со мной напрямую.
                    Я отвечаю лично и без посредников.
                    Обычно в течение 24 часов, иногда быстрее.
                </p>
            </div>
            <div className="grid grid-cols-1 large:grid-cols-6 gap-6">
                <FeedbackForm />
                <ContactsInfo />
            </div>
        </div>
    );
}

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telegram: "",
        topic: "",
        message: ""
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
        
        // Create a single string from form values
        const formString = `Имя: ${formData.name}\nEmail: ${formData.email}\nTelegram: ${formData.telegram}\nТема: ${formData.topic}\nСообщение: ${formData.message}`;
        
        fetch("http://localhost:8080/email", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: formString,
      });
        
        // Reset form data
        setFormData({
            name: "",
            email: "",
            telegram: "",
            topic: "",
            message: ""
        });
        setIsModalOpen(true);
    };

    return (
        <div className="large:col-span-4">
            <form onSubmit={handleSubmit} 
            className="bg-white shadow-xl rounded-xl p-6 space-y-5">
                <h2 className="text-2xl font-bold">Форма обратной связи</h2>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
                <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Telegram (опционально)"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                >
                    <option value="">Выберите...</option>
                    <option>Разобрать мою ситуацию</option>
                    <option>Предложить инвестиционный проект</option>
                    <option>Получить консультацию</option>
                </select>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Краткое сообщение / комментарий"
                rows={4}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                type="submit"
                className="w-full text-2xl font-bold active-btn rounded-2xl h-[50px] cursor-pointer"
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
                        Скоро мы с вами свяжемся.
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

function ContactsInfo() {
    return (
        <div className="bg-white shadow-xl rounded-xl p-6 large:col-span-2">
            <h2 className="text-2xl font-bold mb-10 text-start bigphone:text-center large:text-start">Прямые контакты</h2>
            <div className="flex flex-col gap-y-4 w-full mx-0 bigphone:w-[315px] bigphone:mx-auto large:mx-0 large:w-full">
                <div className="flex gap-x-6 items-center">
                    <div className="flex gap-1 items-center w-[123px]">
                        <img src="icons/ContactsPage/email.png" alt="email" className="w-[32px] h-auto" />
                        <h3 className="text-lg font-semibold">Email:</h3>
                    </div>
                    <a href="mailto:osfinanzen@gmail.com">osfinanzen@gmail.com</a>
                </div>
                <div className="flex gap-x-6 items-center">
                    <div className="flex gap-1 items-center w-[123px]">
                        <img src="icons/ContactsPage/telegram.png" alt="telegram" className="w-[32px] h-auto" />
                        <h3 className="text-lg font-semibold">Telegram:</h3>
                    </div>
                    <a href="https://t.me/step_fin" target="_blank">@step_fin</a>
                </div>
                <div className="flex gap-x-6 items-center">
                    <div className="flex gap-1 items-center w-[123px]">
                        <img src="icons/ContactsPage/instagram.png" alt="instagram" className="w-[32px] h-auto" />
                        <h3 className="text-lg font-semibold">Instagram:</h3>
                    </div>
                    <a href="https://www.instagram.com/stepaniuk_finanzen" target="_blank" rel="noopener noreferrer">stepaniuk_finanzen</a>
                </div>
            </div>
        </div>
    );
}