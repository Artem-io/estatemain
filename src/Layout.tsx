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
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  console.log(lng);

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  useEffect(() => {
    if(!hash.includes("#")) {
      window.scrollTo(0, 0);
    }
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