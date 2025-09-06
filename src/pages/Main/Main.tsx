import MainInfo from './sections/MainInfo.tsx';
import BenefitsSection from './sections/BenefitsSection.tsx';
import RecievedSection from './sections/RecievedSection.tsx';
import ServicesSection from './sections/ServicesSection.tsx';
import ContactsSection from './sections/ContactsSection.tsx';
import ShowcaseSection from './sections/ShowcaseSection.tsx';

export default function Main() {
  return (
    <div>
      <MainInfo />
      <BenefitsSection />
      <RecievedSection />
      <ServicesSection />
      <ShowcaseSection />
      <ContactsSection />
    </div>
  );
}