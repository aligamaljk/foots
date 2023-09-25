import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
const Layouts = () => {
  return (
    <>

      <div className="container Layout_container__hieOS">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
