import SliderProjects from "./sections/SliderProjects";
import Parametrs from "./sections/Parametrs";
import Description from "./sections/Description";
import ContactForm from "./sections/ContactForm";
import { useState } from "react";

export default function DetailsPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Flipping-проект: апарт-отель у моря, полная реконструкция</h1>
            <SliderProjects />
            <Parametrs setIsOpen={setIsOpen} />
            <Description setIsOpen={setIsOpen} />
            {isOpen && <ContactForm setIsOpen={setIsOpen}/>}
        </div>
    );
}