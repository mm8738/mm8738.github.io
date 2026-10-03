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
  href={`mailto:info@monicamendoza.ca?subject=${encodeURIComponent(
    "Data sample"
  )}&body=${encodeURIComponent(
    `Hi Monica,

I have attached a sample of the data I would like help with.

What I am looking for help with:


Important: Please do not attach files containing sensitive or regulated personal information. If you are unsure, send this email without the attachment and we can figure out the best next step.`
  )}`}
>
  Send me a sample →
</a>

<a
  className="cta-secondary"
  href={`mailto:info@monicamendoza.ca?subject=${encodeURIComponent(
    "Estimate request"
  )}&body=${encodeURIComponent(
    `Hi Monica,

I would like an estimate for:

Approximate number of files:
Approximate number of rows:
What I would like to accomplish:
Preferred timeline:


Important: Please do not attach files containing sensitive or regulated personal information. If you are unsure, send this email without the attachment and we can figure out the best next step.`
  )}`}
>
  Request an estimate
</a>

      </div>

    </section>
  );
}

export default ContactCTA;
