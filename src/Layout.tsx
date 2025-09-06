import { Outlet } from "react-router-dom";
import NavBar from "./blocks/NavBar";
import Footer from "./blocks/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

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