<template>
  <el-row :gutter="10" class="margin-none">
    <el-col :span="24">
      <div class="itme-block-cart-style">
        <span class="itme-block-cart-style-title">Наименования:</span>
        <span class="itme-block-cart-style-rez">
          {{ orderItem.product.name }}
        </span>
        <!-- <span v-if="item.material.measurement">{{ item.material.measurement.name }}</span> -->
      </div>
    </el-col>
    <!-- el-col end -->
    <el-col :span="12">
      <div class="itme-block-cart-style">
        <span class="itme-block-cart-style-title">Цена:</span>
        <span class="itme-block-cart-style-rez">
          {{ orderItem.price }}
          UZS
        </span>
        <!-- <span v-if="item.material.measurement">{{ item.material.measurement.name }}</span> -->
      </div>
    </el-col>
    <el-col :span="12">
      <div class="itme-block-cart-style">
        <span class="itme-block-cart-style-title">Общая сумма:</span>
        <span class="itme-block-cart-style-rez">
          {{
            orderItem.discount !== 0
              ? (orderItem.price - (orderItem.price / 100) * orderItem.discount) *
                orderItem.quantity
              : orderItem.price * orderItem.quantity
          }}
          UZS
        </span>
        <!-- <span v-if="item.material.measurement">{{ item.material.measurement.name }}</span> -->
      </div>
    </el-col>
    <el-col :span="12">
      <div class="itme-block-cart-style">
        <span class="itme-block-cart-style-title">Код:</span>
        <span class="itme-block-cart-style-rez">
          {{ orderItem.product.code }}
        </span>
      </div>
    </el-col>
    <!-- el-col end -->

    <el-col :span="12">
      <div class="itme-block-cart-style ">
        <span class="itme-block-cart-style-title">Доступно:</span>
        <span
          class="itme-block-cart-style-rez"
          :class="
            orderItem.product.total_remainder == 0
              ? 'N_danger'
              : orderItem.product.total_remainder < 10
              ? 'N_warning'
              : ''
          "
        >
          {{ orderItem.product.total_remainder }}
          {{ orderItem.product.measurement.name ? orderItem.product.measurement.name : "" }}
        </span>
      </div>
    </el-col>
    <el-col v-if="orderItem.warehouses.length > 0" :span="24" class="discount_tip">
      {{
        orderItem.warehouses.length > 1
          ? orderItem.warehouses[0].name + ` +${orderItem.warehouses.length - 1}`
          : orderItem.warehouses[0].name
      }}
      {{ orderItem.totalRemainder }}
      <b>{{ orderItem.product.measurement ? orderItem.product.measurement.name : "" }}</b>
    </el-col>
    <el-col v-else :span="24" class="discount_tip">
      Нет товаров.
    </el-col>

    <!-- el-col end -->

    <el-col :span="3">
      <el-badge v-if="orderItem.discount > 0" :value="orderItem.discount" class="badge">
        <el-button
          class="button-discount"
          type="success"
          icon="el-icon-discount"
          circle
          size="mini"
          :disabled="orderItem.product.total_remainder === 0"
          @click="changeDiscount"
        ></el-button>
      </el-badge>
      <el-button
        v-else
        class="button-discount"
        type="success"
        icon="el-icon-discount"
        circle
        size="mini"
        :disabled="orderItem.product.total_remainder === 0"
        @click="changeDiscount"
      ></el-button>
    </el-col>
    <el-col :span="3">
      <el-button
        class="button-warehouse"
        type="primary"
        icon="el-icon-box"
        circle
        size="mini"
        :disabled="orderItem.product.total_remainder === 0"
        @click="changeWarehouse"
      ></el-button>
    </el-col>
    <el-col :span="15">
      <div @click="changeQuantity" class="itme-block-cart-style border-style">
        <span class="itme-block-cart-style-title">Кол-во:</span>
        <span class="itme-block-cart-style-rez">
          {{ orderItem.quantity }}
        </span>
      </div>
    </el-col>
    <!-- el-col end -->

    <el-col :span="3">
      <el-button
        class="button-minus"
        type="danger"
        icon="el-icon-minus"
        circle
        size="mini"
        @click="removeProduct"
      ></el-button>
    </el-col>
    <!-- el-col end -->
  </el-row>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "TcdProductCard",
  props: {
    orderItem: VueTypes.object
  },
  methods: {
    changeWarehouse() {
      const data = {
        open: true,
        product: this.orderItem
      };
      return this.$emit("change:warehouses", data);
    },
    changeQuantity() {
      const data = {
        open: true,
        product: this.orderItem
      };
      return this.$emit("change:quantity", data);
    },
    changeDiscount() {
      const data = {
        open: true,
        product: this.orderItem
      };
      return this.$emit("change:discount", data);
    },
    removeProduct() {
      this.$emit("remove");
    }
  }
};
</script>

<style scoped lang="scss">
.button-warehouse {
  margin-top: 7px;
}

.button-discount {
  margin-top: 7px;
}
.d-none {
  display: none;
}
.d-block {
  display: block;
}
</style>
