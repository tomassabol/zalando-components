import "../../../tailwind.css";
import { html } from "../../common/html.js";
import { ProductCard } from "../../components/ProductCard.js";
import { products } from "../../data/mock-products.js";

document.querySelector("#app").innerHTML = html`
  ${products.map(ProductCard).join("")}
`;
