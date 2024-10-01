import { html } from "../common/html";

export function ProductTag(tag) {
  return html`
    <span class="bg-white text-gray-600 text-xs font-semibold px-2 py-1"
      >${tag}
    </span>
  `;
}
