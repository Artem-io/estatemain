import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ProjectName = {
  ru: string;
  en: string;
  uk: string;
  de: string;
};

type Range = {
  from: string;
  to: string;
};

type CurrencyRange = {
  from: string;
  to: string;
};

type Investment = {
  eur: CurrencyRange;
  usd: CurrencyRange;
};

type Project = {
  name: ProjectName;
  type: string;
  location: string;
  investment: Investment;
  profitability: Range;
  duration: Range;
  riskLevel: string;
  images: File[];
  youtubeLinks: string[];
  description: string;
};

const types = ["Недвижимость", "Строительные объекты", "Бизнес", "Стартапы", "Другие предложения", "Эксклюзивы"];
const locations = ["Германия", "Испания", "Турция", "Черногория", "Кипр", "Мальдивы", "ОАЭ", "Другие страны"];
const riskLevels = ["низкая", "средняя", "высокая"];

export default function AddForm() {
  const [project, setProject] = useState<Project>({
    name: { ru: "", en: "", uk: "", de: "" },
    type: "",
    location: "",
    investment: { 
      eur: { from: "", to: "" },
      usd: { from: "", to: "" },
    },
    profitability: { from: "", to: "" },
    duration: { from: "", to: "" },
    riskLevel: "",
    images: [],
    youtubeLinks: [""],
    description: "",
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Создание и очистка URL для миниатюр
  useEffect(() => {
    const newPreviews = project.images.map(file => URL.createObjectURL(file));
    setImagePreviews(newPreviews);

    return () => {
      newPreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [project.images]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    field: keyof Project | string,
    lang?: keyof ProjectName
  ) => {
    if (lang) {
      setProject(prev => ({
        ...prev,
        name: { ...prev.name, [lang]: e.target.value }
      }));
    } else if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setProject(prev => ({
        ...prev,
        [parent]: { ...prev[parent as keyof Project] as Range, [child]: e.target.value }
      }));
    } else {
      setProject(prev => ({ ...prev, [field as keyof Project]: e.target.value }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setProject(prev => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
  };

  const removeImage = (index: number) => {
    setProject(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleYouTubeLinkChange = (index: number, value: string) => {
    const newLinks = [...project.youtubeLinks];
    newLinks[index] = value;
    setProject(prev => ({ ...prev, youtubeLinks: newLinks }));
  };

  const addYouTubeLinkField = () => {
    setProject(prev => ({ ...prev, youtubeLinks: [...prev.youtubeLinks, ""] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Проект:", project);
    // Отправка на сервер
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Добавить проект</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Название проекта на разных языках */}
        {(["ru", "en", "uk", "de"] as (keyof ProjectName)[]).map(lang => (
          <div key={lang}>
            <label className="block font-medium mb-1">
              Название проекта ({lang.toUpperCase()})
            </label>
            <input
              type="text"
              value={project.name[lang]}
              onChange={(e) => handleChange(e, "name", lang)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        ))}

        {/* Тип объекта */}
        <div>
          <label className="block font-medium mb-1">Тип объекта</label>
          <select
            value={project.type}
            onChange={(e) => handleChange(e, "type")}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Выберите тип</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        {/* Локация */}
        <div>
          <label className="block font-medium mb-1">Локация</label>
          <select
            value={project.location}
            onChange={(e) => handleChange(e, "location")}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Выберите локацию</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        {/* Объём инвестиций (EUR и USD) */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block font-medium mb-1">Объём инвестиций от (EUR)</label>
            <input
              type="number"
              value={project.investment.eur.from}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, eur: { ...prev.investment.eur, from: e.target.value } }
                }))
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">до (EUR)</label>
            <input
              type="number"
              value={project.investment.eur.to}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, eur: { ...prev.investment.eur, to: e.target.value } }
                }))
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block font-medium mb-1">Объём инвестиций от (USD)</label>
            <input
              type="number"
              value={project.investment.usd.from}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, usd: { ...prev.investment.usd, from: e.target.value } }
                }))
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">до (USD)</label>
            <input
              type="number"
              value={project.investment.usd.to}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, usd: { ...prev.investment.usd, to: e.target.value } }
                }))
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Доходность */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block font-medium mb-1">Доходность от (%)</label>
            <input
              type="number"
              value={project.profitability.from}
              onChange={(e) => handleChange(e, "profitability.from")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">до (%)</label>
            <input
              type="number"
              value={project.profitability.to}
              onChange={(e) => handleChange(e, "profitability.to")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Срок */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block font-medium mb-1">Срок от (мес.)</label>
            <input
              type="number"
              value={project.duration.from}
              onChange={(e) => handleChange(e, "duration.from")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">до (мес.)</label>
            <input
              type="number"
              value={project.duration.to}
              onChange={(e) => handleChange(e, "duration.to")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Уровень риска */}
        <div>
          <label className="block font-medium mb-1">Уровень риска</label>
          <select
            value={project.riskLevel}
            onChange={(e) => handleChange(e, "riskLevel")}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Выберите уровень риска</option>
            {riskLevels.map(risk => <option key={risk} value={risk}>{risk}</option>)}
          </select>
        </div>

        {/* Полное описание */}
        <div>
          <label className="block font-medium mb-1">Полное описание проекта</label>
          <textarea
            value={project.description}
            onChange={(e) => handleChange(e, "description")}
            className="w-full border border-gray-300 p-2 rounded h-32 resize-none"
            placeholder="Введите полное описание проекта..."
          />
        </div>

        {/* Загрузка картинок с миниатюрами */}
        <div>
          <label className="block font-medium mb-2">Загрузить картинки</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full mb-4"
          />
          <div className="flex flex-wrap gap-2">
            {project.images.map((_, index) => (
              <div key={index} className="relative w-24 h-24 border rounded overflow-hidden">
                <img
                  src={imagePreviews[index]}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ссылки на YouTube */}
        <div>
          <label className="block font-medium mb-1">Ссылки на YouTube</label>
          {project.youtubeLinks.map((link, index) => (
            <input
              key={index}
              type="text"
              value={link}
              onChange={(e) => handleYouTubeLinkChange(index, e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-2"
              placeholder="https://youtube.com/..."
            />
          ))}
          <button
            type="button"
            onClick={addYouTubeLinkField}
            className="text-blue-600 hover:underline"
          >
            Добавить ссылку
          </button>
        </div>

        {/* Кнопка отправки */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Добавить проект
          </button>
        </div>
      </form>
    </div>
  );
}
