import MarioAdrian1 from "../assets/MarioAdrian1.jpg";
import MarioAdrian2 from "../assets/MarioAdrian2.jpg";

const Chicago = () => {
  return (
    <section className="chicago">
      <div>
        <h2>Little Lemon</h2>
        <p className="subtitle">Chicago</p>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails.
        </p>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails.
        </p>
      </div>
      <div>
        <div className="images-overlay">
          <div className="image-wrapper">
            <img src={MarioAdrian1} alt="Mario and Adrian" />
          </div>
          <div className="image-wrapper">
            <img src={MarioAdrian2} alt="Mario and Adrian" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chicago;
