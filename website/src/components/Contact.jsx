import { useState } from "react";
import { company, services } from "../data";
import { buildMailto } from "../lib/mailto";
import Icon from "./Icon";

const serviceOptions = [...services.map((service) => service.title), "Not sure yet"];
const emptyForm = { name: "", contact: "", service: serviceOptions[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [opened, setOpened] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(
      {
        subject: `Website enquiry: ${form.service}`,
        fields: [
          ["Name", form.name],
          ["Phone or email", form.contact],
          ["Service", form.service],
        ],
        message: form.message,
      },
      company.emails,
    );
    setOpened(true);
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow eyebrow-text">Contact us</p>
          <h2>Tell us what you need</h2>
          <p className="lead-dark">Call us, email us or send the form.</p>
          <ul className="contact-list">
            <li>
              <Icon name="phone" />
              <a href={company.phoneLink}>{company.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <span className="stack">
                {company.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </span>
            </li>
            <li>
              <Icon name="pin" />
              <span className="stack">
                {company.location}
                <a href={company.mapUrl} target="_blank" rel="noopener">
                  Open map
                </a>
              </span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />
          </div>
          <div className="field">
            <label htmlFor="contact-way">Phone or email</label>
            <input id="contact-way" name="contact" type="text" autoComplete="tel" required value={form.contact} onChange={update} />
          </div>
          <div className="field">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={form.service} onChange={update}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">What do you need?</label>
            <textarea id="message" name="message" rows="4" required value={form.message} onChange={update} />
          </div>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          <p className="form-note" role="status">
            {opened
              ? `Your email app should open now. If it does not, email us at ${company.emails[0]}.`
              : "This opens your email app with your message ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}
