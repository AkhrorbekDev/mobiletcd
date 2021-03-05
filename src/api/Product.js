import request from "../utils/request";

class Product {
  static async getProductByCode(data) {
    try {
      return await request
        .get("/products/get/byProductCode", { params: data })
        .then(res => {
          return res;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default Product;
