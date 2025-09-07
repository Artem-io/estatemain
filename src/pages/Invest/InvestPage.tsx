import FilterSection from "./sections/FilterSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import { useState } from "react";

export default function InvestPage() {
    const [request, setRequest] = useState<string>("&currency=USD");

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Invest-витрина</h1>
            <FilterSection request={request} setRequest={setRequest} />
            <ShowcaseSection request={request} />
        </div>
    );
}