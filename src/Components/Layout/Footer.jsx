import { Image } from "antd";
import Logo from "../../assets/images/meal_khuj_logo_primary.png";

function Footer() {
  return (
    <footer className="footer">
      <Image preview={false} src={Logo} alt="meal-khuj logo" />
      <p>Find the perfect meal recipe for you</p>
      <p className="copyright">© “My-Meals” 2023 All right reserved.</p>
    </footer>
  );
}

export default Footer;
