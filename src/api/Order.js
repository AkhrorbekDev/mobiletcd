import request from "../utils/request";

class Order {
  static params;

  static async createOrder(order) {
    try {
      return request.post("/retailOrders", order);
    } catch (err) {
      return err;
    }
  }
}

export default Order;
