import { useEffect, useState } from "react";
import "../assets/styles/Services.scss";

type Service = {
  id: string;
  icon: string;
  title: string;
  price: string;
  description: string;
  goodFor: string;
  youSend: string;
  youGet: string[];
};

const services: Service[] = [
  {
    id: "spreadsheet-rescue",
    icon: "▦",
    title: "Spreadsheet Rescue",
    price: "FROM $150",
    description:
      "Clean up a messy Excel or CSV file and turn it into something structured, consistent and usable.",
    goodFor:
      "Messy workbooks, software exports, duplicate records, inconsistent categories, formatting problems and datasets that need organizing.",
    youSend:
      "An Excel or CSV file plus a short explanation of what you're trying to accomplish.",
    youGet: [
      "Cleaned and organized data",
      "Improved structure and consistency",
      "Data-quality review",
      "Short summary of changes"
    ]
  },
  {
    id: "data-dashboard",
    icon: "▥",
    title: "Data → Dashboard",
    price: "FROM $300",
    description:
      "Turn an existing spreadsheet or data export into a clear dashboard or visual report.",
    goodFor:
      "Sales, operations, inventory, surveys, recurring reporting and other data that would be easier to understand visually.",
    youSend:
      "Your spreadsheet or data export and some context about the questions or metrics that matter.",
    youGet: [
      "Prepared data",
      "Custom dashboard or visual report",
      "Relevant metrics and visualizations",
      "Finished files and handoff"
    ]
  },
  {
    id: "data-direction",
    icon: "◇",
    title: "Data Direction Session",
    price: "$75",
    description:
      "Have data but aren't sure what to analyze? Let's figure out what would actually be useful.",
    goodFor:
      "Projects where you have data but aren't sure what to measure, analyze, visualize or do next.",
    youSend:
      "A small sample of your data and some context about the problem you're trying to solve.",
    youGet: [
      "30-minute consultation",
      "Review of your data and goals",
      "Written recommendations",
      "Suggested next steps"
    ]
  }
];

function Services() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  useEffect(() => {
    if (!selectedService) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedService]);

  return (
    <>
      <section className="services" id="services">
        <div className="section-heading-row">
          <span className="section-label">SERVICES</span>

          <p>
            Have something different in mind?
            <br />
            I also take on custom analysis and technical projects.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-heading">
                <span className="service-icon">
                  {service.icon}
                </span>

                <div>
                  <h3>{service.title}</h3>
                  <span className="service-price">
                    {service.price}
                  </span>
                </div>
              </div>

              <p>{service.description}</p>

              <button
                className="service-link"
                type="button"
                onClick={() => setSelectedService(service)}
              >
                Learn more <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedService && (
        <div
          className="service-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>

            <span className="modal-eyebrow">
              {selectedService.price}
            </span>

            <h2 id="service-modal-title">
              {selectedService.title}
            </h2>

            <p className="modal-intro">
              {selectedService.description}
            </p>

            <div className="modal-details">
              <div>
                <span className="detail-label">GOOD FOR</span>
                <p>{selectedService.goodFor}</p>
              </div>

              <div>
                <span className="detail-label">YOU SEND</span>
                <p>{selectedService.youSend}</p>
              </div>

              <div>
                <span className="detail-label">YOU GET</span>

                <ul>
                  {selectedService.youGet.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              className="modal-cta"
              href={`mailto:info@monicamendoza.ca?subject=${encodeURIComponent(
                selectedService.title + " inquiry"
              )}`}
            >
              Ask about this service <span>→</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
