import FilterSection from "./sections/FilterSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function InvestPage() {
    const [request, setRequest] = useState<string>("&currency=USD");
    const { t } = useTranslation();

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">
                {t("investtitle")}
            </h1>
            <FilterSection request={request} setRequest={setRequest} />
            <ShowcaseSection request={request} />
        </div>
    );
}