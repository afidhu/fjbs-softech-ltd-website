import { steps } from "../data";

export default function Process() {
  return (
    <section className="section section-tint" id="process">
      <div className="wrap">
        <p className="eyebrow eyebrow-text">How we work</p>
        <h2>Four simple steps</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
