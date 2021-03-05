import { last, find, sumBy } from "lodash";

export function ADD_PRODUCT(state, item) {
  const product = find(state.products, ["product.id", item.product.id]);
  if (!product) {
    state.products.push({
      ...item
    });
  } else {
    const totalRemainderAll = sumBy(product.warehouses, "total_remainder");
    if (product.quantity < totalRemainderAll) {
      product.quantity += 1;
    }
  }
}

export function REMOVE_PRODUCT(state, index) {
  state.products.splice(index, 1);
}

export function CLEAR_PRODUCTS(state) {
  state.products = [];
}

export function CHANGE_DISCOUNT(state, payload) {
  const item = find(state.products, ["product.id", payload.id]);
  item.discount = payload.discount;
}

export function CHANGE_QUANTITY(state, payload) {
  const item = find(state.products, ["product.id", payload.id]);
  if (payload.mode === "add") {
    item.quantity += payload.quantity;
  } else {
    item.quantity = payload.quantity;
  }
}

export function CHANGE_WAREHOUSE(state, payload) {
  const item = find(state.products, ["product.id", payload.id]);
  item.warehouses = payload.warehouses;
  item.totalRemainder = sumBy(item.warehouses, "total_remainder");
}
