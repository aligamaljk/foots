
import { Link } from "react-router-dom";
import logo from "../../assets/images/meal_khuj_logo.png";
import { Image } from "antd";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
          <Image preview={false} src={logo} alt="meal-khuj logo" className="logo" />
      </Link>
      <ul className="navLinks">
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/savedMeals">Saved List</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
