import { useState } from "react";
import "./Home.css";
import Service from "./Service/Service";
import { Achivment } from "./Achivment/Achivment";
import { Portfoilo } from "./Portfoilo/Portfoilo";
import { Blog } from "./Blog/Blog";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [
    {
      id: 1,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider2.jpg",
    },

    {
      id: 2,
      image: "https://html.dreamitsolution.net/multilen/industrial/image/slider1.jpg",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Home">
      <div
        className="Hero-Part"
        style={{
          backgroundImage: `url(${images[currentImageIndex].image})`,

        }}
      >
        <div className="Hero-Partwrapper">
          <div className="Hero-PartCaroselleft">
            <div className="Caroselleftblock" onClick={prevImage}>
              {"<"}
            </div>
          </div>
          <div className="Hero-PartContent">
            <span className="Quanlity">
              <h4>Our Features is Ours</h4>
            </span>
            <span className="Streight">
              <h1>Effective, Reliable, Quality.</h1>
            </span>
            <span className="standpoint">
              <p>
                RMC is Committed to deploying
                Quality, Reliable and Effective
                Services Leveraging on Technology
                and Innovations in Conformity with
                the Requirements of ISO 9001:2015
                and Other Best Practices..
              </p>
            </span>
            <div className="btn">
              <div className="btn1" ><NavLink to="/About" className="nav-active"> CONTACT US</NavLink>

              </div>
              <div className="btn2" ><NavLink to="/contact" className="nav-active">
                LEARN MORE</NavLink>
              </div>
            </div>
          </div>
          <div className="Hero-PartCaroselright">
            <div className="Caroselleftblock" onClick={nextImage}>
              {">"}
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Achivment />
      <Portfoilo />
      <Blog />
    </div>
  );
};

export default Home;
