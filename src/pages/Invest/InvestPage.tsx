import FilterSection from "./sections/FilterSection";
import ShowcaseSection from "./sections/ShowcaseSection";

export default function InvestPage() {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">Invest-витрина</h1>
            <FilterSection />
            <ShowcaseSection />
        </div>
    );
}