import "./RecentlyAdded.css";
import Styleimage from "../assets/Mainimage/image.png";
import Villa1 from "../assets/Mainimage/villa1.jpg";
import Villa2 from "../assets/Mainimage/villa2.jpg";
import Villa3 from "../assets/Mainimage/villa3.avif";
import Villa4 from "../assets/Mainimage/villa4.jpg";
import Villa5 from "../assets/Mainimage/villa5.jpg";

const properties = [
  {
    img: Villa1,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom 3-bathroom coastal suburban neighborhood.",
    features: ["4 Bedroom", "3 Bathroom", "1 Kitchen"]
  },
  {
    img: Villa2,
    title: "Metropolitan Haven",
    desc: "A sleek and fully furnished 2-bedroom apartment with modern design.",
    features: ["2 Bedroom", "2 Bathroom", "1 Kitchen"]
  },
  {
    img: Villa3,
    title: "Rustic Retreat Cottage",
    desc: "Charming countryside 3-bedroom cottage with lush greenery.",
    features: ["3 Bedroom", "2 Bathroom", "1 Kitchen"]
  },  {
    img: Villa4,
    title: "Rustic Retreat Cottage",
    desc: "Charming countryside 3-bedroom cottage with lush greenery.",
    features: ["3 Bedroom", "2 Bathroom", "1 Kitchen"]
  },  {
    img: Villa5,
    title: "Rustic Retreat Cottage",
    desc: "Charming countryside 3-bedroom cottage with lush greenery.",
    features: ["3 Bedroom", "2 Bathroom", "1 Kitchen"]
  }
];

const RecentlyAdded = () => {
  const scrollLeft = () => {
    document.querySelector(".cards-wrapper").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".cards-wrapper").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="recently-added">
      {/* Style image on the left */}
       <div className="style-image">
    <img src={Styleimage} alt="style" />

    {/* 🔹 Put the heading here */}
    <h2 className="section-title">RECENTLY <br /> ADDED</h2>
  </div>

      {/* Cards and nav on the right */}
      <div className="right-section">
        <div className="cards-wrapper">
          {properties.map((p, i) => (
            <div className="property-card" key={i}>
              <img src={p.img} alt={p.title} />
              <h3 style={{color:'black'}}>{p.title}</h3>
              <p style={{color:'gray'}}>{p.desc}</p>
              <div className="features">
                {p.features.map((f, idx) => (
                  <span key={idx} className="feature-badge">{f}</span>
                ))}
              </div>
              <button className="details-btn">View Property Details</button>
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button className="nav-btn" onClick={scrollLeft}>‹</button>
          <button className="nav-btn" onClick={scrollRight}>›</button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
