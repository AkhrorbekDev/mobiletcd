const TokenKey = 'auth_access_token';
const UserName = 'auth_name';
const ShopId = 'shop_id';

// set data
export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function setShopID(data) {
  return localStorage.setItem(ShopId, data.id);
}

export function setName(name) {
  return localStorage.setItem(UserName, name);
}

// get data
export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function getShopID() {
  return localStorage.getItem(ShopId);
}

export function getName() {
  return localStorage.getItem(UserName);
}

// remove data
export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function removeName() {
  return localStorage.removeItem(UserName);
}

export function clearStorage() {
  return localStorage.clear();
}
