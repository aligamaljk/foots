import {  Image } from 'antd';
import HeroImg from '../../assets/images/hero_img.jpg';
import "./HeroSection.scss"
import { Link } from 'react-router-dom';
import About from './About';

function HeroSection() {
  return (
    <>
  <div className="Layout_container__hieOS">
    <section className="hero__section">
      <div className="hero__container">
        <div className="hero__info">
          <h1 className="hero__title">
            Find the perfect
            <span>meal recipe</span>
            for you
          </h1>
          <br />
          <p className='texttext'>a listing website of meal recipe</p>
          <div className="hero__buttons">
            <Link to="/meals">
            <button className='button buttonvariant' >Explore Meals</button>
            </Link>
            <Link to="/savedMeals">
            <button className='button '>Saved Meals</button>
            </Link>
          </div>
        </div>
        <div className="hero__img">
          <Image preview={false} src={HeroImg} />
        </div>
      </div>
    </section>
        <About/>
  </div>
    </>

  );
}

export default HeroSection;