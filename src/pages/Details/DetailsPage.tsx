import SliderProjects from "./sections/SliderProjects";
import Parametrs from "./sections/Parametrs";
import Description from "./sections/Description";
import ContactForm from "./sections/ContactForm";
import { useEffect, useState } from "react";
import type { Property } from "./interfaces/interfaces.tsx";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../constants/constants.tsx";
import { useParams } from "react-router-dom";


export default function DetailsPage() {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get("id");

    const { lng } = useParams();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [property, setProperty] = useState<Property | null>(null);
    useEffect(() => {
        if (!id || !lng) return; // ждём, пока параметры появятся

        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}/${lng.toUpperCase()}`);
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const data: Property = await response.json();
                setProperty(data);
            } catch (err) {
                console.error(err);
                setProperty(null); // или ввести состояние error
            }
        };

        fetchData();
    }, [id, lng]);

    if (!property) {
        return <span className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></span>;
    }

    console.log(property.videoUrls);

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">
                {property.title}
            </h1>
            <SliderProjects imageUrls={property.imageUrls} videoUrls={property.videoUrls} />
            <Parametrs setIsOpen={setIsOpen} location={property.location} type={property.type} priceEUR={property.priceEUR} priceUSD={property.priceUSD} priceGBP={property.priceGBP} profitMin={property.profitMin} profitMax={property.profitMax} timeMin={property.timeMin} timeMax={property.timeMax} risk={property.risk} />
            <Description setIsOpen={setIsOpen} fullDescription={property.fullDescription} />
            {isOpen && <ContactForm setIsOpen={setIsOpen} title={property.title}/>}
        </div>
    );
}