import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section className="container mx-auto min-h-[calc(100vh-350px)]">
        <Outlet />
      </section>
      <section>
        <h3>I am a footer</h3>
      </section>
    </div>
  );
};

export default MainLayout;
