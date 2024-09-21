import "./Hero.css";

const Hero = () => {
  return (
    <div className="menu">
      <div className="hero">
        <h1>
          <strong className="font-xlarge roboto-bold ml-20">Nature Care</strong>
        </h1>
        <p className="roboto-bold ml-20 hero-para">
          Embrace the Power of Herbal Medicine for a Healthier You!
        </p>
        <div>
          <a href="/" className="discover-btn roboto-black ml-34">
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
