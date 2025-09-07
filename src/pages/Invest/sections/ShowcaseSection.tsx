import { useEffect, useState } from "react";
import Card from "../blocks/Card.tsx";
import ConsultCard from "../blocks/ConsultCard.tsx"
import {API_URL} from "../../../constants/constants.tsx";

const projects = [
  {
    title: "Flipping-проект: апарт-отель у моря, полная реконструкция",
    description: "Инвестиции в реконструкцию недвижимости с прогнозируемой доходностью.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Германия, Берлин",
    type: "Реконструкция недвижимости",
    entry: "€ 75 000",
    profit: "13–16% годовых",
    term: "12–18 мес",
    risk: "Средние",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
  {
    title: "Flipping-проект: городская квартира, модернизация под аренду",
    description: "Умная инвестиция в популярный район с высоким спросом.",
    image: "images/ShowcaseSection/house-example.jpg",
    location: "Франция, Париж",
    type: "Модернизация квартиры",
    entry: "€ 60 000",
    profit: "10–14% годовых",
    term: "10–14 мес",
    risk: "Низкие",
  },
];

interface Investment {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  price: number;
  currency: string;
  profitMin: number;
  profitMax: number;
  timeMin: number;
  timeMax: number;
  risk: string;
}

type Investments = Investment[];

const maxCardsOnPage = 6;
const totalPages = Math.ceil(projects.length / maxCardsOnPage);

export default function ShowcaseSection() {
    const [investments, setInvestments] = useState<Investments>([]);

    useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const res = await fetch(`${API_URL}?lan=RU`); // твой API
        if (!res.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data: Investments = await res.json(); // 👈 типизация
        setInvestments(data);
        console.log(investments);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInvestments();
  }, []);

    const [currentPage, setCurrectPage] = useState<number>(0);
    const startCardIdx = (currentPage * maxCardsOnPage) - 1;

    return (
        <div className="mb-5">
            {currentPage === 0 ? <FirstPage /> : <MorePage startCardIdx={startCardIdx}/>}
            <Pagination currentPage={currentPage} totalPages={totalPages} 
            onChange={setCurrectPage} />
        </div>
    );
}

function FirstPage() {
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            {projects.slice(0, 2).map((project, index) => (
                <Card key={index} title={project.title} description={project.description} image={project.image} location={project.location} type={project.type} entry={project.entry} profit={project.profit} term={project.term} risk={project.risk}/>
            ))}
            <ConsultCard />
            {projects.slice(2, 5).map((project, index) => (
                <Card key={index + 2} title={project.title} description={project.description} image={project.image} location={project.location} type={project.type} entry={project.entry} profit={project.profit} term={project.term} risk={project.risk}/>
            ))}
        </div>
    );
}

function MorePage({startCardIdx}: {startCardIdx: number}) {
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            {projects.slice(startCardIdx, startCardIdx + 5).map((project, index) => (
                <Card key={index} title={project.title} description={project.description} image={project.image} location={project.location} type={project.type} entry={project.entry} profit={project.profit} term={project.term} risk={project.risk}/>
            ))}
        </div>
    );
}

interface PaginationProps {
  currentPage: number; // текущая страница (0-based)
  totalPages: number;  // общее количество страниц
  onChange: (page: number) => void;
  siblingCount?: number; // сколько соседних страниц показывать слева и справа
}

function Pagination({
  currentPage,
  totalPages,
  onChange,
  siblingCount = 1,
}: PaginationProps) {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const paginationRange = () => {
    const totalPageNumbers = siblingCount * 2 + 5; // 1 + last + current + siblings + 2 точки

    if (totalPages <= totalPageNumbers) {
      return range(0, totalPages - 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 2);

    const showLeftDots = leftSiblingIndex > 1;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    const pages: (number | string)[] = [];

    pages.push(0); // первая страница

    if (showLeftDots) pages.push("...");

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    pages.push(...middleRange);

    if (showRightDots) pages.push("...");

    pages.push(totalPages - 1); // последняя страница

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page < 0 || page >= totalPages) return;
    onChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-3 py-1 rounded-lg border 
        disabled:opacity-50 hover:bg-gray-200 cursor-pointer"
      >
        ←
      </button>

      {paginationRange().map((page, idx) =>
        typeof page === "string" ? (
          <span key={idx} className="px-3 py-1">
            {page}
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              page === currentPage
                ? "bg-darkblue text-white"
                : "hover:bg-gray-200 border"
            }`}
          >
            {page + 1}
          </button>
        )
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="px-3 py-1 rounded-lg border disabled:opacity-50 
        hover:bg-gray-200 cursor-pointer"
      >
        →
      </button>
    </div>
  );
}