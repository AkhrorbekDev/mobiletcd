<template>
  <el-drawer
    class="moddal-stylel search-block"
    size="100%"
    :visible="open"
    direction="rtl"
    :with-header="false"
  >
    <div class="style-form card-my pad10">
      <el-form ref="form">
        <el-row :gutter="5">
          <el-col :span="20">
            <el-form-item class="input-text-color">
              <el-input id="input" v-model="barcode" @keydown.enter.native="onEnter"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-button
                class="w100"
                type="success"
                icon="el-icon-search"
                @click="onEnter">
                </el-button>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div v-if="items.length > 0" class="pad10">
      <el-card
        v-for="(product, index) in items"
        :key="index"
        shadow="never"
        class="card"
        :body-style="{
          padding: '10px'
        }"
      >
        <tcd-product-card-drawer
          :order-item="product"
          @change:quantity="changeQuantity"
          @remove="removeProduct(index)"
        />
      </el-card>
    </div>
    <tcd-quantity-drawer
      :open="quantityDrawer.open"
      :product="quantityDrawer.product"
      mode="change"
      @change:quantity="saveQuantity"
      @close:drawer="quantityDrawer.open = $event"
    />
    <tcd-footer
      :labels="{
        save: 'В корзину'
      }"
      @back="back"
      @save="save"
    />
  </el-drawer>
</template>

<script>
import ProductApi from "../api/Product";
import { mapGetters } from "vuex";
import VueTypes from "vue-types";
import OrderItem from "../models/OrderItem";
import TcdProductCardDrawer from "./TcdProductCardDrawer";
import TcdQuantityDrawer from "./TcdQuantityDrawer";
import TcdFooter from "./TcdFooter";
import { sumBy, find } from "lodash";

export default {
  name: "TcdCartDrawer",
  props: {
    open: VueTypes.bool
  },
  components: {
    TcdQuantityDrawer,  TcdProductCardDrawer, TcdFooter
  },
  data() {
    return {
      searchProductByCode: "",
      searchDrawer: false,
      barcode: null,
      items: [],
      quantityDrawer: {
        open: false,
        product: {}
      }
    };
  },
  methods: {
    changeQuantity(e) {
      this.quantityDrawer.open = e.open;
      this.quantityDrawer.product = e.product;
    },
    removeProduct(index) {
      this.items.splice(index, 1);
    },

    saveQuantity(e) {
      const item = find(this.items, ["product.id", e.id]);
      item.quantity = e.quantity;
    },
    async loadModel() {
      if (this.barcode) {
        const loading = this.$loading({
            customClass: "login-loading",
            lock: true,
            text: "Загрузка",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          let is_loading = true;
        await ProductApi.getProductByCode({
          code: this.barcode
        })
          .then(async response => {
             loading.close();
                is_loading = false;
            if (response.status === 200) {
              this.barcode = null;
              const item = OrderItem.reverseProduct(response.data.result.data.product);
              item.totalRemainder = sumBy(item.warehouses, "total_remainder");
              const product = find(this.items, ["product.id", item.product.id]);
              if (!product) {
                this.items.push({
                  ...item
                });
              } else {
                const totalRemainderAll = sumBy(product.warehouses, "total_remainder");
                if (product.quantity < totalRemainderAll) {
                  product.quantity += 1;
                }
              }
            }
          })
          .catch(err => {
             loading.close();
                is_loading = false;
            this.barcode = null;
            return this.$notify({
              type: "error",
              message: err.data.error.message,
              showClose: true
            });
          });
      }
    },
    onEnter(event) {
      event.preventDefault();
      this.loadModel();
    },
    save() {
      this.$emit("save:products", this.items);
      this.items = [];
      this.back();
    },
    back() {
      this.searchDrawer = false;
      return this.$emit("close:drawer", !this.open);
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 3vw;
  background: #10163a;
  border: none;
  color: white;
  border-radius: 2vw;
}
.input-text-color {
  margin-bottom: 0;
}
</style>
