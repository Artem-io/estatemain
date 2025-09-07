import Main from './pages/Main/Main.tsx'
import ServicesPage from './pages/Services/ServicesPage.tsx'
import СontactsPage from './pages/Contacts/ContactsPage.tsx'
import PlacementProject from './pages/PlacementProject/PlacementProject.tsx'
import AnalyzePage from './pages/Analyze/AnalyzePage.tsx'
import InvestPage from './pages/Invest/InvestPage.tsx'
import DetailsPage from './pages/Details/DetailsPage.tsx'
import AdminPanel from './pages/AdminPanel/AdminPanel.tsx'
import Layout from './Layout.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/estatemain'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<СontactsPage />} />
          <Route path="/placement" element={<PlacementProject />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/investmarket" element={<InvestPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Route>
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App