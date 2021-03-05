export default class Filter {
  constructor(array) {
    this.data = array;
  }

  where(name, obj) {
    let res = { status: false };
    if (this.data.length == 0) {
      res = { status: false };
    }
    this.data.forEach((item) => {
      if (item[name] == obj[name]) {
        res = { status: true, info: `${obj.product.name} || ${item.packaging_position} ` };
      }
    });

    return res;
  }
}
