import StartCard from './sections/StartCard.tsx'
import WorkProcess from './sections/WorkProcess.tsx'
import RequirementsSection from './sections/RequirementsSection.tsx'
import FormSection from './sections/FormSection.tsx'

export default function PlacementProject() {
    return (
        <div className="mb-[50px]">
            <StartCard />
            <WorkProcess />
            <RequirementsSection />
            <FormSection />
        </div>
    );
}