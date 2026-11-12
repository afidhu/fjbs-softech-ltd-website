import { useSyncExternalStore } from "react";

// The site is one page. A product page lives at  #/products/<slug>.
// Any other hash, such as #services, is a section of the home page.
const subscribe = (onChange) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};

export function useHash() {
  return useSyncExternalStore(subscribe, () => window.location.hash);
}

export function parseRoute(hash) {
  const match = hash.match(/^#\/products\/([\w-]+)\/?$/);
  if (match) return { page: "product", slug: match[1] };
  return { page: "home", anchor: decodeURIComponent(hash.slice(1)) };
}

export const productHref = (slug) => `#/products/${slug}`;
