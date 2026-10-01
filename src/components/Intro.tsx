import "../assets/styles/Intro.scss";

function Intro() {
  return (
    <section className="intro">

      <div className="intro-copy">
        <span className="eyebrow">
          FREELANCE DATA ANALYSIS
        </span>

        <h1>
          I help small teams
          <br />
          make sense of messy data.
        </h1>

        <p className="intro-subtitle">
          Practical data help for small businesses, research projects
          and growing teams.
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
    href="mailto:YOUR_EMAIL?subject=Data project inquiry"
  >
    Send me a sample
    <span>→</span>
  </a>
  <a className="estimate-text-link" href="#services">
  View services & pricing →
</a>

</div>
      </div>


      <div className="intro-visual" aria-hidden="true">

        <div className="visual-window visual-bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

       <div className="visual-window visual-chart">

  <svg
    viewBox="0 0 150 70"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient
        id="chartGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#5683ad" />
        <stop offset="45%" stopColor="#8fb4d2" />
        <stop offset="70%" stopColor="#c8796f" />
        <stop offset="100%" stopColor="#c9a15c" />
      </linearGradient>
    </defs>

    <path
      className="animated-chart-line"
      d="
        M 5 55
        C 15 55, 20 48, 30 48
        S 43 58, 52 45
        S 65 25, 75 38
        S 88 53, 98 35
        S 110 42, 120 27
        S 135 25, 145 10
      "
    />

    <circle className="chart-point point-1" cx="30" cy="48" r="2.8" />
    <circle className="chart-point point-2" cx="52" cy="45" r="2.8" />
    <circle className="chart-point point-3" cx="75" cy="38" r="2.8" />
    <circle className="chart-point point-4" cx="98" cy="35" r="2.8" />
    <circle className="chart-point point-5" cx="120" cy="27" r="2.8" />
    <circle className="chart-point point-6" cx="145" cy="10" r="2.8" />

  </svg>

</div>

        <div className="visual-window visual-table">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

<div className="visual-circle">
  <svg viewBox="0 0 42 42" aria-hidden="true">

    <circle
      className="donut-base"
      cx="21"
      cy="21"
      r="15.9155"
    />

    <circle
      className="donut-segment donut-blue"
      cx="21"
      cy="21"
      r="15.9155"
      pathLength="100"
    />

    <circle
      className="donut-segment donut-rose"
      cx="21"
      cy="21"
      r="15.9155"
      pathLength="100"
    />

    <circle
      className="donut-segment donut-gold"
      cx="21"
      cy="21"
      r="15.9155"
      pathLength="100"
    />

  </svg>
</div>

      </div>

    </section>
  );
}

export default Intro;