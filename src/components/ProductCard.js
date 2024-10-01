import { html } from "../common/html";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

export function ProductCard(product) {
  return html`
    <a href="#" class="block bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Product Image -->
      ${ProductImage(product)}
      <!-- Product Details -->
      ${ProductDetails(product)}
    </a>
  `;
}
