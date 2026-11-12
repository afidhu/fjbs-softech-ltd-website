import { products, productStatus } from "../data";
import { productHref } from "../lib/route";
import Icon from "./Icon";
import Illustration from "./Illustration";

export function StatusBadge({ status }) {
  return <span className={`badge badge-${status}`}>{productStatus[status].label}</span>;
}

export default function Products() {
  return (
    <section className="section section-tint" id="products">
      <div className="wrap">
        <p className="eyebrow eyebrow-text">Our products</p>
        <h2>Ready-made tools for your business</h2>
        <p className="lead-dark section-lead">
          Products we have built and keep improving. Open one to see what it does and to register.
        </p>
        <div className="cards">
          {products.map((product) => (
            <a className="card card-pic product-card" key={product.slug} href={productHref(product.slug)}>
              <Illustration art={product.art} image={product.image} alt={product.image ? product.name : ""} />
              <div className="card-body">
                <div className="product-meta">
                  <span className="category">{product.category}</span>
                  <StatusBadge status={product.status} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>
                <span className="more">
                  See details <Icon name="arrow" small />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
