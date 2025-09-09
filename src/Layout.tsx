import { Outlet } from "react-router-dom";
import NavBar from "./blocks/NavBar";
import Footer from "./blocks/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import i18n from "./i18n/i18n";

function Layout() {
  const { pathname } = useLocation();
  const { lng } = useParams();

  console.log(lng);

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;