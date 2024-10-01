import { html } from "../common/html";

export function ProductDetails(product) {
  return html`
    <div class="p-6">
      <h3 class="font-medium text-gray-800 text-sm">${product.brand}</h3>
      <h4 class="text-gray-600 text-sm mt-1">${product.name}</h4>
      <p class="text-lg font-bold text-gray-900 mt-4">${product.price}</p>
    </div>
  `;
}
