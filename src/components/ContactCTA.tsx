import "../assets/styles/ContactCTA.scss";

function ContactCTA() {
  return (
    <section className="contact-cta">

      <div>
        <strong>Ready to get started?</strong>

        <p>
          Send a sample or tell me about your project
          and I'll suggest a scope.
        </p>
      </div>

      <div className="contact-buttons">

        <a
          className="cta-primary"
          href="mailto:info@monicamendoza.ca?subject=Data sample"
        >
          Send me a sample →
        </a>

        <a
          className="cta-secondary"
          href="mailto:info@monicamendoza.ca?subject=Estimate request"
        >
          Request an estimate
        </a>

      </div>

    </section>
  );
}

export default ContactCTA;
