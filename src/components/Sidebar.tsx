
import monica from "../assets/images/monica.jpg";
import "../assets/styles/Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={monica}
        className="profile-photo"
        alt="Monica Mendoza"
      />

      <h1>Monica Mendoza</h1>

      <p className="role">
        Data analysis · visualization · strategy
      </p>

      <p className="location">Ottawa, ON</p>

<div className="links">
  <a href="#services">Services</a>
  <a href="#capabilities">Capabilities</a>
  <a href="#about">About</a>

  <a
    className="email"
    href="mailto:YOUR_EMAIL"
  >
    email me →
  </a>
</div>

      <section>
        <span className="section-title">About</span>

        <p>
          I work with complex and messy data to find patterns,
          answer questions, create useful visualizations and turn
          analysis into something people can actually use.
        </p>
      </section>

      <section>
        <span className="section-title">Skills</span>

        <p>
          Python · Power BI · Excel · Statistics ·
          Data modelling · Visualization
        </p>
      </section>
    </aside>
  );
}

export default Sidebar;