import "bootstrap/dist/css/bootstrap.min.css";
import shop1 from "./julien-orliac-gzobGDzh4ww-unsplash.jpg"
import shop2 from "./arthur-humeau-Twd3yaqA2NM-unsplash.jpg";
import shop3 from "./istockphoto-1310756143-1024x1024.jpg";
import bb from "./istockphoto-1973193559-1024x1024.jpg"
import rr from "./agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg"

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={shop1} className="carousel" alt="Slide 1" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={shop2} className="carousel" alt="Slide 2" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={rr} className="carousel" alt="Slide 2" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={bb} className="carousel" alt="Slide 4" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={shop3} className="carousel" alt="Slide 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
