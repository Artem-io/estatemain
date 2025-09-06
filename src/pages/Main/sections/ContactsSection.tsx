import { useState } from "react";

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    setFormData({
        name: "",
        email: "",
        phone: "",
        telegram: "",
        topic: "",
        message: ""
    });
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto mb-[50px] small:mb-[100px]" id="contactform">
      <h2 className="font-bold text-3xl sm:text-4xl text-center mb-5">
        Готовы обсудить вашу ситуацию?
      </h2>
      <h3 className="font-semibold text-lg phone:text-xl text-center mb-8">
        Опишите кратко, с чем вы пришли — и я свяжусь с вами в течение 24 часов.
      </h3>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-5 mb-4"
      >
        <div>
          <label className="block font-medium mb-2">Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Номер телефона</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Telegram (по желанию)</label>
          <input
            type="text"
            name="telegram"
            value={formData.telegram}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Что вы хотите?</label>
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
            <option>Задать вопрос</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Сообщение</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full text-2xl font-bold active-btn rounded-2xl h-[50px] cursor-pointer"
        >
          Отправить запрос
        </button>
      </form>

      <h4 className="text-center font-semibold text-2xl mb-4 phone:mb-0">
        Для быстрой связи:
      </h4>
      <div className="flex flex-col phone:flex-row justify-center gap-x-8 items-center phone:items-baseline text-xl">
        <p className="mb-2 phone:mb-0">E-mail: osfinanzen@gmail.com</p>
        <div className="flex items-center gap-3">
          <p>Telegram: </p>
          <a href="https://t.me/step_fin" target="_blank">
            <img
              src="icons/ContactsSection/telegram.svg"
              alt="telegram"
              className="w-[32px] h-auto cursor-pointer"
            />
          </a>
        </div>
      </div>

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
