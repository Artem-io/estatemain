import MainSection from "./sections/MainSection";
import PortretSection from "./sections/PortretSection";
import PhilosophySection from "./sections/PhilosophySection";
import ConsultSection from "./sections/ConsultSection";
import WhySection from "./sections/WhySection";

export default function AnalyzePage() {
    return (
        <div className="container mx-auto">
            <MainSection />
            <PortretSection />
            <PhilosophySection />
            <ConsultSection />
            <WhySection />
        </div>
    );
}