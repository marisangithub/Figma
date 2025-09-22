import image1 from "../assets/Mainimage/building1.png";
import image2 from "../assets/Mainimage/building2.jpg";
import image3 from "../assets/Mainimage/building3.png";
import "./Explore.css";

const ExploreSection = () => {
  return (
    <div className="py-5">
      <div className="explore-container">
        <h2 className="explore-heading">READY TO</h2>

        <div className="explore-images d-flex mt-2">
          <img src={image1} alt="building1" className="img-s" />
          <img src={image2} alt="building2" className="img-s" />
          <img src={image3} alt="building3" className="img-s" />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
