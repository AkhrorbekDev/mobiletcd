export default {
  data() {
    return {
      quantity: false,
      selected_item: '',
    };
  },
  methods: {
    afterOpened() {
      this.$refs.quantity.quantity(this.selected_item);
    },
    changeQuantity(item) {
      this.quantity = true;
      this.selected_item = item;
    },
    saveClose(qty) {
      this.quantity = false;
    },
    close() {
      this.quantity = false;
    },
    handleClose() {
      this.$refs.quantity.cancel();
    },
  },
};
