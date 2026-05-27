const STORAGE_KEY = "loot_cart";

function isWeb() {
  return typeof window !== "undefined" && !!window.localStorage;
}

function readStorage() {
  try {
    if (isWeb()) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    }
  } catch (e) {
    console.log("cart read error", e);
  }
  // fallback in-memory
  if (!global.__loot_cart) global.__loot_cart = [];
  return global.__loot_cart;
}

function writeStorage(data) {
  try {
    if (isWeb()) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      console.log("cartService.writeStorage", data);
      return;
    }
  } catch (e) {
    console.log("cart write error", e);
  }
  global.__loot_cart = data;
}

export function getCart() {
  return readStorage();
}

export function addToCart(item) {
  console.log("cartService.addToCart", item);
  const cart = readStorage();
  // if item with same id_producto exists, increment quantity
  const existing = cart.find((c) => c.id_producto === item.id_producto);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
  } else {
    cart.push({ ...item, quantity: item.quantity || 1 });
  }
  writeStorage(cart);
  console.log("cartService.newCart", cart);
  return cart;
}

export function removeFromCart(id_producto) {
  const cart = readStorage().filter((c) => c.id_producto !== id_producto);
  writeStorage(cart);
  return cart;
}

export function clearCart() {
  writeStorage([]);
}

export function updateQuantity(id_producto, quantity) {
  const cart = readStorage();
  const item = cart.find((c) => c.id_producto === id_producto);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      return removeFromCart(id_producto);
    }
    writeStorage(cart);
  }
  return cart;
}

export default {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
};
