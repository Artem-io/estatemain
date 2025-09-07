export default function FilterSection() {
  return (
    <div className="w-full p-4 shadow-md bg-white rounded-2xl mb-[50px]">
      <form className="grid gap-4 md:grid-cols-3">
        {/* Основные фильтры */}
        <select className="border rounded-xl p-2 w-full">
          <option value="">Тип проекта</option>
          <option>Недвижимость</option>
          <option>Строительные объекты</option>
          <option>Бизнес</option>
          <option>Стартапы</option>
          <option>Другие предложения</option>
          <option>Эксклюзивы</option>
        </select>

        <select className="border rounded-xl p-2 w-full">
          <option value="">Регион</option>
          <option>Германия</option>
          <option>Испания</option>
          <option>Турция</option>
          <option>Черногория</option>
          <option>Кипр</option>
          <option>Мальдивы</option>
          <option>ОАЭ</option>
          <option>Другие страны</option>
        </select>

        <div className="flex items-center gap-2">
          <select className="border rounded-xl p-2">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="number"
            placeholder="Цена от"
            className="border rounded-xl p-2 w-full"
          />
          <input
            type="number"
            placeholder="Цена до"
            className="border rounded-xl p-2 w-full"
          />
        </div>

        {/* Кнопки действия */}
        <div className="col-span-full flex justify-end gap-4 mt-4">
          <button
            type="reset"
            className="px-6 py-2 border rounded-xl disabled-btn hover:brightness-110 transition cursor-pointer"
          >
            Сбросить
          </button>
          <button
            type="submit"
            className="px-6 py-2 active-btn text-white rounded-xl hover:brightness-110 transition cursor-pointer"
          >
            Применить
          </button>
        </div>
      </form>
    </div>
  );
}
