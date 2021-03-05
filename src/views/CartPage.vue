<template>
  <div class="wrapper">
    <div class="relative height15">
      <div class="haeder-content">
        <el-row :gutter="10" class="header-flex">
          <el-col :span="5">
            <router-link class="none-a-href" :to="{ name: 'Home' }">
              <div class="my-icon-home-block">
                <svg
                  height="511pt"
                  viewBox="0 1 511 511.999"
                  width="511pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"
                  />
                </svg>
              </div>
            </router-link>
          </el-col>
          <el-col :span="14">
            <div class="logo-info-text">
              <!-- <img src="../../public/img/logo.png" alt="" /> -->
              <div class="info-name-block">Корзинка</div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="my-icon-home-block" @click="cartDrawer = true">
              <svg
                id="Capa_1"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m456.66 0h-71.66c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c13.972 0 25.34 11.368 25.34 25.341v71.659c0 8.284 6.716 15 15 15s15-6.716 15-15v-71.659c0-30.515-24.826-55.341-55.34-55.341z"
                  />
                  <path
                    d="m15 142c8.284 0 15-6.716 15-15v-71.659c0-13.973 11.368-25.341 25.34-25.341h71.66c8.284 0 15-6.716 15-15s-6.716-15-15-15h-71.66c-30.514 0-55.34 24.826-55.34 55.341v71.659c0 8.284 6.716 15 15 15z"
                  />
                  <path
                    d="m127 482h-71.66c-13.972 0-25.34-11.368-25.34-25.341v-71.659c0-8.284-6.716-15-15-15s-15 6.716-15 15v71.659c0 30.515 24.826 55.341 55.34 55.341h71.66c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  />
                  <path
                    d="m497 370c-8.284 0-15 6.716-15 15v71.659c0 13.973-11.368 25.341-25.34 25.341h-71.66c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c30.515 0 55.34-24.826 55.34-55.341v-71.659c0-8.284-6.716-15-15-15z"
                  />
                  <path
                    d="m341.643 110h47.575c6.497 0 11.782 5.285 11.782 11.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-23.039-18.744-41.782-41.782-41.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                  />
                  <path
                    d="m81 121.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-6.497 5.286-11.782 11.782-11.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15h-47.575c-23.038 0-41.782 18.743-41.782 41.782z"
                  />
                  <path
                    d="m170.357 400h-47.575c-6.497 0-11.782-5.285-11.782-11.782v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 23.039 18.744 41.782 41.782 41.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  />
                  <path
                    d="m431 388.218v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 6.497-5.286 11.782-11.782 11.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15h47.575c23.038 0 41.782-18.743 41.782-41.782z"
                  />
                  <path
                    d="m1 256c0 8.284 6.716 15 15 15h480c8.284 0 15-6.716 15-15s-6.716-15-15-15h-480c-8.284 0-15 6.716-15 15z"
                  />
                </g>
              </svg>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pad10">
      <el-card
        v-for="(product, index) in products"
        :key="index"
        shadow="never"
        class="card"
        :body-style="{
          padding: '10px'
        }"
      >
        <tcd-product-card
          :order-item="product"
          @change:quantity="changeQuantity"
          @change:discount="changeDiscount"
          @change:warehouses="changeWarehouses"
          @remove="removeProduct(index)"
        />
      </el-card>
    </div>
    <tcd-cart-drawer
      :open="cartDrawer"
      @close:drawer="cartDrawer = $event"
      @save:products="saveProducts"
    />
    <tcd-warehouses-drawer
      :open="warehousesDrawer.open"
      :product="warehousesDrawer.product"
      @close:drawer="warehousesDrawer.open = $event"
      @change:warehouse="saveWarehouses"
    />
    <tcd-quantity-drawer
      :open="quantityDrawer.open"
      :product="quantityDrawer.product"
      mode="change"
      @change:quantity="saveQuantity"
      @close:drawer="quantityDrawer.open = $event"
    />
    <tcd-discount-drawer
      :open="discountDrawer.open"
      :product="discountDrawer.product"
      @change:discount="saveDiscount"
      @close:drawer="discountDrawer.open = $event"
    />
    <tcd-footer
      :labels="{
        save: 'Отсрочка'
      }"
      @back="back"
      @save="save"
    />
  </div>
</template>
<script>
import TcdCartDrawer from "../components/TcdCartDrawer";
import TcdProductCard from "../components/TcdProductCard";
import TcdFooter from "../components/TcdFooter.vue";
import TcdWarehousesDrawer from "../components/TcdWarehousesDrawer";
import TcdQuantityDrawer from "../components/TcdQuantityDrawer";
import TcdDiscountDrawer from "../components/TcdDiscountDrawer";
import OrderModel from "../models/Order";
import OrderApi from "../api/Order";
import { mapGetters } from "vuex";
import { find } from "lodash";
import OrderItem from "../models/OrderItem";

export default {
  name: "CartPage",
  components: {
    TcdCartDrawer,
    TcdDiscountDrawer,
    TcdQuantityDrawer,
    TcdWarehousesDrawer,
    TcdFooter,
    TcdProductCard
  },
  data() {
    return {
      searchProductByCode: "",
      cartDrawer: false,
      warehousesDrawer: {
        open: false,
        product: {}
      },
      quantityDrawer: {
        open: false,
        product: {}
      },
      discountDrawer: {
        open: false,
        product: {}
      }
    };
  },
  computed: {
    ...mapGetters({
      // order: 'order/getOrder',
      products: "cart/getProducts"
    })
  },
  methods: {
    changeWarehouses(e) {
      this.warehousesDrawer.open = e.open;
      this.warehousesDrawer.product = e.product;
    },
    changeDiscount(e) {
      this.discountDrawer.open = e.open;
      this.discountDrawer.product = e.product;
    },
    changeQuantity(e) {
      this.quantityDrawer.open = e.open;
      this.quantityDrawer.product = e.product;
    },
    saveProducts(e) {
      e.forEach(item => {
        const existsProduct = find(this.products, ["product.id", item.product.id]);
        if (existsProduct) {
          const data = {
            id: item.product.id,
            quantity: item.quantity,
            mode: "add"
          };
          this.$store.dispatch("cart/changeQuantity", data);
        } else {
          this.$store.dispatch("cart/add", item);
        }
      });
    },
    saveWarehouses(e) {
      this.$store.dispatch("cart/changeWarehouse", e);
    },
    saveDiscount(e) {
      this.$store.dispatch("cart/changeDiscount", e);
    },
    saveQuantity(e) {
      this.$store.dispatch("cart/changeQuantity", e);
    },
    removeProduct(index) {
      this.$store.dispatch("cart/remove", index);
    },
    back() {
      if (this.products.length > 0) {
        return this.$confirm("Очистить корзину.", {
          confirmButtonText: "Да",
          confirmButtonClass: "success",
          cancelButtonText: "Нет",
          center: true
        })
          .then(async () => {
            await this.$store.dispatch("cart/clear");
            await this.$store.dispatch("order/clear");
            this.$router.push("/");
          })
          .catch(() => {
            this.$router.push("/");
          });
      } else {
        this.$router.push("/");
      }
    },
    async save() {
      if (this.products.length > 0) {
        this.$confirm("Сохранить заявку.", {
          confirmButtonText: "Сохранить",
          confirmButtonClass: "success",
          cancelButtonText: "Отменить",
          center: true
        })
          .then(async () => {
            const loading = this.$loading({
              customClass: "login-loading",
              lock: true,
              text: "Загрузка",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            let is_loading = true;
            const order = await OrderModel.newOrder();
            order.items = await OrderItem.rawResources(this.products);
            await OrderApi.createOrder(order)
              .then(async response => {
                if (response.data.result.success) {
                  loading.close();
                  is_loading = false;
                  await this.$store.dispatch("cart/clear");
                  await this.$store.dispatch("order/clear");
                  this.$message({
                    type: "success",
                    customClass: "customClass",
                    message:
                      response.data.result.message +
                      " " +
                      `ID ${response.data.result.data.retailOrder.id}`,
                    showClose: true,
                    duration: 15000
                  });
                }
              })
              .catch(err => {
                loading.close();
                is_loading = false;
                if (err && err.status === 422) {
                  let ms = "";
                  for (const key in err.data.validation_errors) {
                    if (err.data.validation_errors.hasOwnProperty(key)) {
                      const element = err.data.validation_errors[key];
                      ms += element.join("<br>") + "<br>";
                    }
                  }
                  this.$message({
                    dangerouslyUseHTMLString: true,
                    type: "warning",
                    title: "Предупреждение",
                    message: ms,
                    duration: 15000,
                    showClose: true
                  });
                } else {
                  this.$message({
                    dangerouslyUseHTMLString: true,
                    type: "warning",
                    title: "Предупреждение",
                    message: err.message,
                    showClose: true,
                    duration: 15000
                  });
                }
              });
          })
          .catch(err => {});
      }
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
</style>
