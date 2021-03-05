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
          v-model="discount"
          :min="0"
          :max="100"
        ></el-input-number>

        <tcd-footer @back="$emit('close:drawer', false)" @save="emitDiscount" />

        <!-- end footerBlocks -->
      </div>
    </div>
  </el-drawer>
</template>

<script>
import VueTypes from "vue-types";
import TcdFooter from "./TcdFooter.vue";

export default {
  components: { TcdFooter },
  name: "TcdDiscountDrawer",
  props: {
    open: VueTypes.bool,
    product: VueTypes.object
  },
  data() {
    return {
      form: {},
      qty: "",
      remainder: "",
      discount: 0
    };
  },
  watch: {
    product: {
      immediate: true,
      handler() {
        this.discount = this.product.discount;
      }
    }
  },
  methods: {
    handleClose(done) {
      done();
      this.selected = [];
      return this.$emit("close:drawer", false);
    },
    emitDiscount() {
      const data = {
        id: this.product.product.id,
        discount: this.discount
      };
      this.$emit("change:discount", data);
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
