import { useState } from "react";
import type { FormEvent } from "react";
import "../assets/styles/PasswordGate.scss";

type PasswordGateProps = {
  children: React.ReactNode;
};

function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("portfolio-unlocked") === "true"
  );
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (password === "WADE") {
      sessionStorage.setItem("portfolio-unlocked", "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <main className="password-page">

      <div className="password-card">

        <span className="password-eyebrow">
          MONICA MENDOZA
        </span>

        <h1>
          Something good
          <br />
          is taking shape.
        </h1>

        <p>
          My new website is currently a work
          in progress. Enter the password to preview it.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="password-input-row">

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(false);
              }}
              aria-label="Password"
            />

            <button type="submit" aria-label="Enter">
              →
            </button>

          </div>

          {error && (
            <span className="password-error">
              That password doesn't look right.
            </span>
          )}
        </form>

        <span className="password-url">
          monicamendoza.ca
        </span>

      </div>

      <div className="password-decoration">
        <div className="password-decoration" aria-hidden="true">
  <svg
    className="password-chart"
    viewBox="0 0 220 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* faint baseline */}
    <path
      className="password-chart-guide"
      d="M10 72 H210"
    />

    {/* animated data line */}
    <path
      className="password-chart-line"
      d="
        M10 70
        C25 70, 30 60, 42 62
        S58 78, 72 58
        S90 42, 104 55
        S122 76, 138 48
        S158 58, 172 38
        S192 40, 210 20
      "
    />

    {/* data points */}
    <circle className="chart-point point-1" cx="42" cy="62" r="3" />
    <circle className="chart-point point-2" cx="72" cy="58" r="3" />
    <circle className="chart-point point-3" cx="104" cy="55" r="3" />
    <circle className="chart-point chart-point-warm point-4" cx="138" cy="48" r="3" />
    <circle className="chart-point point-5" cx="172" cy="38" r="3" />
    <circle className="chart-point point-6" cx="210" cy="20" r="3" />
  </svg>
</div>
      </div>

    </main>
  );
}

export default PasswordGate;