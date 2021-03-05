<template>
  <el-drawer
    :visible="open"
    :with-header="false"
    size="100%"
    :before-close="handleClose"
    class="warehouses-drawer"
  >
    <div>
      <div class="search-block pad10">
        <el-input-number
          class="nomer-style"
          v-model="quantity"
          :min="0"
          :max="parseFloat(product.totalRemainder)"
          @keydown.enter.native="onEnter"
        ></el-input-number>

        <tcd-footer @back="$emit('close:drawer', false)" @save="emitQuantity" />

        <!-- end footerBlocks -->
      </div>
    </div>
  </el-drawer>
</template>

<script>
import VueTypes from "vue-types";
import TcdFooter from "./TcdFooter";

export default {
  name: "TcdQuantityDrawer",
  props: {
    open: VueTypes.bool,
    product: VueTypes.object,
    mode: VueTypes.string
  },
  components: {
    TcdFooter
  },
  data() {
    return {
      form: {},
      qty: "",
      remainder: "",
      quantity: 0
    };
  },
  watch: {
    product: {
      immediate: true,
      handler() {
        this.quantity = this.product.quantity;
      }
    }
  },
  methods: {
    handleClose(done) {
      done();
      this.selected = [];
      return this.$emit("close:drawer", false);
    },
    onEnter(event) {
      event.preventDefault();
      this.emitQuantity();
    },
    emitQuantity() {
      const data = {
        id: this.product.product.id,
        quantity: this.quantity,
        mode: this.mode
      };
      this.$emit("change:quantity", data);
      return this.$emit("close:drawer", false);
    }
  }
};
</script>

<style scoped>
.botton-style-com {
  position: absolute;
  bottom: 0;
}
</style>
