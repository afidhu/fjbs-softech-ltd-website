import { values } from "../data";

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <p className="eyebrow eyebrow-light">About us</p>
        <h2>We make tech solutions that are clear and easy to trust.</h2>
        <div className="values">
          {values.map((value) => (
            <div key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
