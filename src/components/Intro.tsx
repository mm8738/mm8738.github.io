import "../assets/styles/Intro.scss";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-copy">

        <div className="intro-line-chart" aria-hidden="true">
  <svg viewBox="0 0 420 80">
    <defs>
      <linearGradient
        id="chartGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#8fb7d8" />
        <stop offset="58%" stopColor="#8fb7d8" />
        <stop offset="78%" stopColor="#d5967e" />
        <stop offset="100%" stopColor="#b9657a" />
      </linearGradient>

      <clipPath id="chartReveal">
        <rect
          className="chart-reveal"
          x="0"
          y="0"
          width="420"
          height="80"
        />
      </clipPath>
    </defs>

    <g clipPath="url(#chartReveal)">
      <polyline
        className="chart-line"
        points="
          10,60
          55,45
          95,53
          135,28
          175,49
          215,25
          255,42
          295,20
          335,31
          375,14
          410,8
        "
      />

      <circle className="chart-dot" cx="10" cy="60" r="4" />
      <circle className="chart-dot" cx="55" cy="45" r="4" />
      <circle className="chart-dot" cx="95" cy="53" r="4" />
      <circle className="chart-dot" cx="135" cy="28" r="4" />
      <circle className="chart-dot" cx="175" cy="49" r="4" />
      <circle className="chart-dot" cx="215" cy="25" r="4" />
      <circle className="chart-dot" cx="255" cy="42" r="4" />
      <circle className="chart-dot" cx="295" cy="20" r="4" />
      <circle className="chart-dot" cx="335" cy="31" r="4" />
      <circle className="chart-dot" cx="375" cy="14" r="4" />
      <circle className="chart-dot" cx="410" cy="8" r="4" />
    </g>
  </svg>
</div>

        <span className="eyebrow">
          LESS CHAOS · MORE CLARITY
        </span>

        <h1>
          From data disaster
          <br />
          to data that delivers
        </h1>

        <p className="intro-subtitle">
          I offer practical business intelligence support to growing startups,
          research projects and specialized teams.
        </p>

        <div className="intro-tags">
          <span>Dashboards</span>
          <span>Excel / CSV cleanup</span>
          <span>Reporting</span>
          <span>Data visualization</span>
          <span>Analysis</span>
        </div>

        <div className="intro-action-row">
<a
  className="sample-link"
  href={`mailto:info@monicamendoza.ca?subject=${encodeURIComponent(
    "Data project inquiry"
  )}&body=${encodeURIComponent(
    `Hi Monica,

I have attached a sample of the data I would like help with.

What I am looking for help with:


Important: Please do not attach files containing sensitive or regulated personal information. If you are unsure, send this email without the attachment and we can figure out the best next step.`
  )}`}
>
  Send me a sample
  <span>→</span>
</a>
        </div>

        <a
          className="estimate-text-link"
          href="#services"
        >
          View services & pricing →
        </a>

      </div>
    </section>
  );
}

export default Intro;
