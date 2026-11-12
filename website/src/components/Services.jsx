import { services } from "../data";
import Icon from "./Icon";
import Illustration from "./Illustration";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <p className="eyebrow eyebrow-text">What we do</p>
        <h2>Our services</h2>
        <div className="cards">
          {services.map((service) => (
            <article className="card card-pic" key={service.title}>
              <Illustration art={service.art} image={service.image} alt={service.image ? service.title : ""} />
              <div className="card-body">
                <div className="card-head">
                  <div className="card-icon">
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
                <ul className="ticks">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" small /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
