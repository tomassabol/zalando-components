import { html } from "../common/html";
import { FavoriteIcon } from "./icons/favorite-icon";
import { ProductTag } from "./ProductTag";

export function ProductImage(product) {
  return html` <div class="relative">
    <img
      src="${product.image}"
      alt="Zalando"
      class="w-full h-[500px] object-cover"
    />
    ${FavoriteIcon()}
    <div class="absolute bottom-2 flex gap-x-2">
      ${product.tags?.map((tag) => ProductTag(tag)).join("")}
    </div>
  </div>`;
}
