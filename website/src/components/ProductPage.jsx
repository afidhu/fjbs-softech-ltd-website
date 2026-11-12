import { useEffect, useRef, useState } from "react";
import { company, products, productStatus } from "../data";
import { buildMailto } from "../lib/mailto";
import { productHref } from "../lib/route";
import Icon from "./Icon";
import Illustration from "./Illustration";
import { StatusBadge } from "./Products";

const emptyForm = { name: "", contact: "", business: "", message: "" };

function RegisterForm({ product }) {
  const [form, setForm] = useState(emptyForm);
  const [opened, setOpened] = useState(false);
  const status = productStatus[product.status];

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(
      {
        subject: `${status.action}: ${product.name}`,
        fields: [
          ["Product", product.name],
          ["Name", form.name],
          ["Phone or email", form.contact],
          ["Business", form.business],
        ],
        message: form.message,
      },
      company.emails,
    );
    setOpened(true);
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="reg-name">Your name</label>
        <input id="reg-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />
      </div>
      <div className="field">
        <label htmlFor="reg-contact">Phone or email</label>
        <input id="reg-contact" name="contact" type="text" autoComplete="tel" required value={form.contact} onChange={update} />
      </div>
      <div className="field">
        <label htmlFor="reg-business">Business name (optional)</label>
        <input id="reg-business" name="business" type="text" autoComplete="organization" value={form.business} onChange={update} />
      </div>
      <div className="field">
        <label htmlFor="reg-message">Anything we should know? (optional)</label>
        <textarea id="reg-message" name="message" rows="3" value={form.message} onChange={update} />
      </div>
      <button className="btn btn-primary" type="submit">
        {status.action}
      </button>
      <p className="form-note" role="status">
        {opened
          ? `Your email app should open now. If it does not, email us at ${company.emails[0]}.`
          : "This opens your email app with your details ready to send. We will reply to set up your account."}
      </p>
    </form>
  );
}

export default function ProductPage({ slug }) {
  const product = products.find((item) => item.slug === slug);
  const registerRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;
    const previous = document.title;
    document.title = `${product.name} | ${company.name}`;
    return () => {
      document.title = previous;
    };
  }, [product]);

  if (!product) {
    return (
      <section className="section">
        <div className="wrap">
          <h1 className="h2">We could not find that product</h1>
          <p className="lead-dark">It may have moved or the link may be wrong.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#products">
              See all products
            </a>
          </div>
        </div>
      </section>
    );
  }

  const status = productStatus[product.status];
  const others = products.filter((item) => item.slug !== product.slug);
  const goToRegister = () => {
    registerRef.current?.scrollIntoView();
    registerRef.current?.querySelector("input, a")?.focus({ preventScroll: true });
  };

  return (
    <>
      <section className="hero product-hero">
        <div className="wrap product-hero-grid">
          <div>
            <a className="back" href="#products">
              <Icon name="arrowLeft" small /> All products
            </a>
            <div className="product-meta">
              <span className="category category-light">{product.category}</span>
              <StatusBadge status={product.status} />
            </div>
            <h1>{product.name}</h1>
            <p className="lead">{product.tagline}</p>
            <div className="actions">
              <button className="btn btn-accent" type="button" onClick={goToRegister}>
                {status.action} <Icon name="arrow" small />
              </button>
              <a className="btn btn-ghost" href={company.phoneLink}>
                Call {company.phone}
              </a>
            </div>
          </div>
          <Illustration art={product.art} image={product.image} alt={product.image ? product.name : ""} className="art-hero" />
        </div>
      </section>

      <section className="section">
        <div className="wrap product-body">
          <div>
            <p className="eyebrow eyebrow-text">About {product.name}</p>
            <h2>{product.summary}</h2>
            <div className="prose">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="panel">
            <h3>Made for</h3>
            <ul className="chips">
              {product.audience.map((who) => (
                <li key={who}>{who}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <p className="eyebrow eyebrow-text">Features</p>
          <h2>What you get</h2>
          <ul className="features">
            {product.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" small /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section register" id="register" ref={registerRef} tabIndex={-1}>
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow eyebrow-text">{status.action}</p>
            <h2>
              {status.formTitle} {product.name}
            </h2>
            <p className="lead-dark">
              {product.status === "soon"
                ? "Leave your details and we will tell you as soon as it is ready."
                : "Fill in your details to get started. Questions first? Call or email us."}
            </p>
            <ul className="contact-list">
              <li>
                <Icon name="phone" />
                <a href={company.phoneLink}>{company.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>
              </li>
            </ul>
          </div>
          {product.registerUrl ? (
            <div className="form">
              <h3>Create your account</h3>
              <p className="form-note">Registration happens on the {product.name} site. It opens in a new tab.</p>
              <a className="btn btn-primary" href={product.registerUrl} target="_blank" rel="noopener">
                {status.action} on {product.name} <Icon name="arrow" small />
              </a>
            </div>
          ) : (
            <RegisterForm key={product.slug} product={product} />
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section-tint">
          <div className="wrap">
            <h2>More products</h2>
            <ul className="other-products">
              {others.map((item) => (
                <li key={item.slug}>
                  <a href={productHref(item.slug)}>
                    <span>
                      <strong>{item.name}</strong>
                      <span>{item.tagline}</span>
                    </span>
                    <Icon name="arrow" small />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
