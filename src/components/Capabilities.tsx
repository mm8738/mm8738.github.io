import "../assets/styles/Capabilities.scss";

const capabilities = [
  {
    title: "Data preparation",
    items: [
      "Excel / CSV",
      "Cleaning & validation",
      "Restructuring",
      "Data modelling"
    ]
  },
  {
    title: "Analysis",
    items: [
      "Descriptive statistics",
      "Trend analysis",
      "Comparative analysis",
      "Exploratory analysis"
    ]
  },
  {
    title: "Reporting & visualization",
    items: [
      "Dashboards",
      "Data visualization",
      "KPI development",
      "Recurring reports"
    ]
  },
  {
    title: "Technical & scientific",
    items: [
      "Python",
      "Scientific / technical data",
      "Signal / time-series data",
      "Statistical workflows"
    ]
  }
];

function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">

      <span className="section-label">
        CAPABILITIES
      </span>

      <div className="capabilities-grid">

        {capabilities.map((capability) => (
          <article
            className="capability-card"
            key={capability.title}
          >

            <h3>{capability.title}</h3>

            <ul>
              {capability.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Capabilities;
