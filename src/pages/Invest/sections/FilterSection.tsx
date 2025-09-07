import { useState, useEffect } from "react";
import type {ChangeEvent, FormEvent} from "react";

interface Filters {
  type: string;
  region: string;
  currency: string;
  price_min: string;
  price_max: string;
}

interface FilterProps {
  request: string;
  setRequest: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterSection({request, setRequest}: FilterProps) {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    region: "",
    currency: "USD",
    price_min: "",
    price_max: "",
  });

  // Строка запроса

  // Обновляем filters при изменении select/input
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Сбрасываем фильтры
  const handleReset = () => {
    setFilters({
      type: "",
      region: "",
      currency: "USD",
      price_min: "",
      price_max: "",
    });
  };

  // Формируем строку запроса каждый раз, когда меняются filters
  useEffect(() => {
    let query = "";
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        query += `&${key}=${encodeURIComponent(value)}`;
      }
    });
    setRequest(query);
  }, [filters]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Фильтры:", filters);
    console.log("Строка запроса:", request);
    // Здесь можно вызвать API с request
  };

  console.log(request);

  return (
    <div className="w-full p-4 shadow-md bg-white rounded-2xl mb-[50px]">
      <form
        className="grid gap-4 md:grid-cols-3"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {/* Основные фильтры */}
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border rounded-xl p-2 w-full"
        >
          <option value="">Тип проекта</option>
          <option>Недвижимость</option>
          <option>Строительные объекты</option>
          <option>Бизнес</option>
          <option>Стартапы</option>
          <option>Другие предложения</option>
          <option>Эксклюзивы</option>
        </select>

        <select
          name="region"
          value={filters.region}
          onChange={handleChange}
          className="border rounded-xl p-2 w-full"
        >
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
          <select
            name="currency"
            value={filters.currency}
            onChange={handleChange}
            className="border rounded-xl p-2"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="number"
            name="price_min"
            value={filters.price_min}
            onChange={handleChange}
            placeholder="Цена от"
            className="border rounded-xl p-2 w-full"
          />
          <input
            type="number"
            name="price_max"
            value={filters.price_max}
            onChange={handleChange}
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
