
import monica from "../assets/images/monica.jpg";
import "../assets/styles/Sidebar.scss";
import Typewriter from "./Typewriter";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={monica}
        className="profile-photo"
        alt="Monica Mendoza"
      />

      <h1>Monica Mendoza</h1>
	  <Typewriter />
	  {
/*       <p className="role">
        Data analysis · visualization · strategy
</p> */}

      <p className="location">Ottawa, ON</p>

<div className="links">

  <a href="#services" className="services-link">Services</a>
  <a href="#data-types" className="services-link">What you can send me</a>
  <a href="#capabilities" className="services-link">Capabilities</a>


  <a
    className="email"
    href="mailto:info@monicamendoza.ca"
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
