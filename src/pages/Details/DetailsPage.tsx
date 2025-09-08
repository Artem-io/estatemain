import SliderProjects from "./sections/SliderProjects";
import Parametrs from "./sections/Parametrs";
import Description from "./sections/Description";
import ContactForm from "./sections/ContactForm";
import { useEffect, useState } from "react";
import type { Property } from "./interfaces/interfaces.tsx";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../constants/constants.tsx";

export default function DetailsPage() {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get("id");

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [property, setProperty] = useState<Property | null>(null);
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`${API_URL}?id=${id}`); 
        const data: Property[] = await response.json();
        setProperty(data[0]);
        };

        fetchData();
    }, []);

    if (!property) {
        return <p>Загрузка...</p>;
    }

    console.log(property);

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">
                {property.title}
            </h1>
            <SliderProjects />
            <Parametrs setIsOpen={setIsOpen} location={property.location} type={property.type} priceEUR={property.priceEUR} priceUSD={property.priceUSD} priceGBP={property.priceGBP} profitMin={property.profitMin} profitMax={property.profitMax} timeMin={property.timeMin} timeMax={property.timeMax} risk={property.risk} />
            <Description setIsOpen={setIsOpen} fullDescription={property.fullDescription} />
            {isOpen && <ContactForm setIsOpen={setIsOpen}/>}
        </div>
    );
}