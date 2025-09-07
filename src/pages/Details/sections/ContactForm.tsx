export default function ContactForm({setIsOpen}: {setIsOpen: (state: boolean) => void}) {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно обработать отправку формы
    setIsOpen(false);
  };

  return (
    // Затемнённый фон
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Форма */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#172554] text-white rounded-2xl p-8 w-full max-w-md shadow-lg relative"
      >
        {/* Заголовок */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Уточнить детали по проекту
        </h2>

        {/* Ваше имя */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Введите ваше имя"
            className="w-full p-2 rounded-md text-black"
            required
          />
        </div>

        {/* E-mail */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Введите ваш e-mail"
            className="w-full p-2 rounded-md text-black"
            required
          />
        </div>

        {/* Большое текстовое поле */}
        <div className="mb-6">
          <label className="block mb-1" htmlFor="message">
            Если нужно, прокомментируйте заявку
          </label>
          <textarea
            id="message"
            placeholder="Ваш комментарий"
            className="w-full p-2 rounded-md text-black h-32 resize-none"
          />
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-md font-semibold"
        >
          Отправить
        </button>

        {/* Кнопка закрытия формы */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-white 
          text-xl font-bold hover:text-gray-300 cursor-pointer"
        >
          &times;
        </button>
      </form>
    </div>
  );
}