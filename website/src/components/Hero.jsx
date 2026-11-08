import globe from "../assets/fjbs-mark-on-dark.svg";
import { company } from "../data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-globe" src={globe} alt="" aria-hidden="true" />
      <div className="wrap hero-body">
        <p className="eyebrow">Technology solutions</p>
        <h1>Websites, apps and AI for your business.</h1>
        <p className="lead">
          We build the tools your business needs, and we explain every step in simple words.
        </p>
        <div className="actions">
          <a className="btn btn-accent" href="#contact">
            Request a quote <Icon name="arrow" small />
          </a>
          <a className="btn btn-ghost" href="#services">
            View services
          </a>
        </div>
        <p className="hero-place">
          <Icon name="pin" small /> {company.location}
        </p>
      </div>
    </section>
  );
}
