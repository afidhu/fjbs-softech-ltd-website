import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";
import Services from "./components/Services";
import { parseRoute, useHash } from "./lib/route";

export default function App() {
  const hash = useHash();
  const route = parseRoute(hash);

  // Moving between the home page and a product page swaps the content,
  // so scroll to the right place once it has rendered.
  useEffect(() => {
    if (route.page === "product") {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (route.anchor) {
      document.getElementById(route.anchor)?.scrollIntoView();
    }
  }, [hash]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {route.page === "product" ? (
          <ProductPage slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Services />
            <Products />
            <Process />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
