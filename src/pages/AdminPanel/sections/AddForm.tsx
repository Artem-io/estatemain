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

type Investment = {
  currency: string;
  amount: string;
};

type Project = {
  name: ProjectName;
  shortDescription: ProjectName;
  description: ProjectName;
  type: string;
  location: string;
  investment: Investment;
  profitability: Range;
  duration: Range;
  riskLevel: string;
  images: File[];
  youtubeLinks: string[];
  isActual: boolean;
};

const types = ["Недвижимость", "Строительные объекты", "Бизнес", "Стартапы", "Другие предложения", "Эксклюзивы"];
const riskLevels = ["LOW", "MEDIUM", "HIGH"];
const currencies = ["EUR", "USD", "GBP"];
const languages: (keyof ProjectName)[] = ["ru", "en", "uk", "de"];

export default function AddForm() {
  const [project, setProject] = useState<Project>({
    name: { ru: "", en: "", uk: "", de: "" },
    shortDescription: { ru: "", en: "", uk: "", de: "" },
    description: { ru: "", en: "", uk: "", de: "" },
    type: "",
    location: "",
    investment: { currency: "EUR", amount: "" },
    profitability: { from: "", to: "" },
    duration: { from: "", to: "" },
    riskLevel: "",
    images: [],
    youtubeLinks: [""],
    isActual: false,
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

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
        [field as keyof Project]: {
          ...(prev[field as keyof Project] as ProjectName),
          [lang]: e.target.value
        }
      }));
    } else if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setProject(prev => ({
        ...prev,
        [parent]: { ...(prev[parent as keyof Project] as Range), [child]: e.target.value }
      }));
    } else {
      setProject(prev => ({ ...prev, [field as keyof Project]: e.target.value }));
    }

    console.log(project);
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

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    // 1. Преобразуем данные проекта под API
    const body = {
      nameRU: project.name.ru,
      nameUA: project.name.uk,
      nameEN: project.name.en,
      nameDE: project.name.de,
      descriptionRU: project.shortDescription.ru,
      descriptionUA: project.shortDescription.uk,
      descriptionEN: project.shortDescription.en,
      descriptionDE: project.shortDescription.de,
      fullDescriptionRU: project.description.ru,
      fullDescriptionUA: project.description.uk,
      fullDescriptionEN: project.description.en,
      fullDescriptionDE: project.description.de,
      locationRU: project.location, // Если нужно по языкам, можно тоже разделить
      locationUA: project.location,
      locationEN: project.location,
      locationDE: project.location,
      type: project.type,
      baseCurrency: project.investment.currency,
      price: Number(project.investment.amount),
      profitMin: Number(project.profitability.from),
      profitMax: Number(project.profitability.to),
      timeMin: Number(project.duration.from),
      timeMax: Number(project.duration.to),
      risk: project.riskLevel,
      actual: project.isActual,
      videoUrls: project.youtubeLinks.filter(Boolean),
    };

      // 2. Отправляем первый POST-запрос
      const createResponse = await fetch("http://localhost:8080/houses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!createResponse.ok) {
        throw new Error("Ошибка при создании проекта");
      }

      const createdProject = await createResponse.json();
      const projectId = createdProject; // Предположим, сервер возвращает id
      console.log(createdProject);

      // 3. Отправляем картинки, если они есть
      if (project.images.length > 0) {
        const formData = new FormData();
        project.images.forEach((file) => {
          formData.append("images", file);
        });

        const imagesResponse = await fetch(`http://localhost:8080/images/${projectId}`, {
          method: "POST",
          body: formData,
        });

        if (!imagesResponse.ok) {
          throw new Error("Ошибка при загрузке изображений");
        }
      }

      alert("Проект был успешно добавлен");
      setProject({
        name: { ru: "", en: "", uk: "", de: "" },
        shortDescription: { ru: "", en: "", uk: "", de: "" },
        description: { ru: "", en: "", uk: "", de: "" },
        type: "",
        location: "",
        investment: { currency: "EUR", amount: "" },
        profitability: { from: "", to: "" },
        duration: { from: "", to: "" },
        riskLevel: "",
        images: [],
        youtubeLinks: [""],
        isActual: false,
      });
    } catch (error) {
      alert(`Ошибка: ${error}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Добавить проект</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Название проекта */}
        {languages.map(lang => (
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

        {/* Короткое описание */}
        {languages.map(lang => (
          <div key={lang}>
            <label className="block font-medium mb-1">
              Короткое описание ({lang.toUpperCase()})
            </label>
            <textarea
              value={project.shortDescription[lang]}
              onChange={(e) => handleChange(e, "shortDescription", lang)}
              className="w-full border border-gray-300 p-2 rounded h-16 resize-none"
              placeholder="Введите короткое описание..."
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
          <input
            type="text"
            value={project.location}
            onChange={(e) => handleChange(e, "location")}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Инвестиционный вход */}
        <div>
          <label className="block font-medium mb-1">Инвестиционный вход</label>
          <div className="flex gap-2">
            <select
              value={project.investment.currency}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, currency: e.target.value }
                }))
              }
              className="border border-gray-300 p-2 rounded"
            >
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
            <input
              type="number"
              value={project.investment.amount}
              onChange={(e) =>
                setProject(prev => ({
                  ...prev,
                  investment: { ...prev.investment, amount: e.target.value }
                }))
              }
              className="flex-1 border border-gray-300 p-2 rounded"
              placeholder="Введите сумму"
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
        {languages.map(lang => (
          <div key={lang}>
            <label className="block font-medium mb-1">
              Полное описание ({lang.toUpperCase()})
            </label>
            <textarea
              value={project.description[lang]}
              onChange={(e) => handleChange(e, "description", lang)}
              className="w-full border border-gray-300 p-2 rounded h-32 resize-none"
              placeholder="Введите полное описание проекта..."
            />
          </div>
        ))}

        {/* Загрузка картинок */}
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

        {/* Актуально */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={project.isActual}
            onChange={(e) =>
              setProject(prev => ({ ...prev, isActual: e.target.checked }))
            }
          />
          <label className="font-medium">Актуально</label>
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
