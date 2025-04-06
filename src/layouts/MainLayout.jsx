import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section className="container mx-auto min-h-[calc(100vh-365px)]">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;
