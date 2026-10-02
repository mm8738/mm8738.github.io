import "../assets/styles/DataTypes.scss";

const dataTypes = [
  {
    icon: "▤",
    title: "A spreadsheet that's gotten out of control",
    text: "Multiple tabs, inconsistent categories, formulas, duplicates or missing values."
  },
  {
    icon: "◉",
    title: "An export from software you use",
    text: "Sales, inventory, survey, operational, customer or other exported data."
  },
  {
    icon: "△",
    title: "Research or project data",
    text: "CSV/Excel datasets, measurements, observations, experimental results or other structured data."
  },
  {
    icon: "○",
    title: "A question and some data",
    text: "You don't need to know what analysis you need. Tell me what you're trying to figure out."
  }
];

function DataTypes() {
  return (
    <section className="data-types" id="data-types">

      <div className="data-types-heading">
        <span className="section-label">
          WHAT YOU CAN SEND ME
        </span>

        <span className="data-reassurance">
          You don't need a perfect file — if it's messy, that's okay.
        </span>
      </div>

      <div className="data-types-grid">

        {dataTypes.map((item) => (
          <article className="data-type" key={item.title}>

            <span className="data-type-icon">
              {item.icon}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default DataTypes;
