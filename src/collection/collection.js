import Filter from './filter.js';

export default class Collection {
  constructor(array) {
    this.data = array;
  }

  addNewest(obj) {
    const check = this.check('code', obj);

    if (!check) {
      this.data.push(obj);
    }

    return this.data;
  }

  combine(name, array) {
    const res = [];
    array.forEach((item) => {
      const check = this.check(name, item);

      if (!check) {
        res.push(item);
      }

      if (check) {
        this.data.forEach((index) => {
          if (index[name] == item[name]) {
            index.new_quantity = item.new_quantity;
          }
        });
      }
    });

    res.forEach((item) => {
      this.data.push(item);
    });

    return this.data;
  }

  check(name, obj) {
    let status = false;
    if (this.data.length) {
      this.data.forEach((index) => {
        if (index[name] === obj[name]) {
          status = true;
        }
      });
    }

    return status;
  }

  sum(name) {
    let total = 0;
    this.data.forEach((index) => {
      total = parseFloat(total) + parseFloat(index[name]);
    });

    return total;
  }

  where(name, obj) {
    const products = [];

    this.data.forEach((index) => {
      if (index.product[name] == obj.product[name]) {
        index.quantity = obj.quantity;
        index.items = obj.items;
        products.push(index);
      } else {
        products.push(index);
      }
    });

    return products;
  }

  refresh(obj) {
    const products = [];

    this.data.forEach((index) => {
      if (index.product.code == obj.product.code) {
        index.quantity = 0;
        index.items = [];
        products.push(index);
      } else {
        products.push(index);
      }
    });

    return products;
  }

  filter(name) {
    const form = { check: { status: false } };
    const items = [];
    for (let i = 0; i < this.data.length; i++) {
      const filter = new Filter(items);
      const check = filter.where(name, this.data[i]);

      if (!check.status) {
        items.push(this.data[i]);
      }

      if (check.status) {
        form.check = check;
        break;
      }
    }

    form.items = items;

    return form;
  }

  sum(name = '') {
    let quantity = 0;
    this.data.forEach((item) => {
      quantity += parseFloat(item[name]);
    });

    return quantity;
  }

  sort(array, name) {
    console.log(array, name);
    const data = [];
    let status = true;
    array.forEach((index) => {
      this.data.forEach((item) => {
        console.log(item, index);
        if (index[name] == item[name]) {
          status = false;
        }
      });
      if (status) {
        data.push(index);
      }
    });

    data.forEach((items) => {
      this.data.push(items);
    });

    return this.data;
  }
}
