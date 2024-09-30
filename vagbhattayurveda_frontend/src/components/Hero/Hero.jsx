import "./Hero.css";

const Hero = () => {
  return (
    <div className="menu">
      <div className="hero">
        <h1>
          <strong className="font-xlarge roboto-bold ml-60">Nature Care</strong>
        </h1>
        <p className="roboto-bold ml-44 hero-para">
          Embrace the Power of Herbal Medicine for a Healthier You!
        </p>
        <div>
          <a href="/" className="discover-btn roboto-black ml-80">
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
