<template>
  <el-drawer
    :visible="open"
    :with-header="false"
    size="100%"
    :before-close="handleClose"
    @open="getWarehouses"
    @opened="selectDefaults"
    class="warehouses-drawer"
    v-loading="is_loading"
  >
    <div class="clents-blocks">
      <div class="title-modal">
        <div class="ml-20 flex1">
          Склады
        </div>
      </div>
      <div>
        <div v-if="!warehouses.length">
          <p class="notify_title">
            Доступныей склады не найдена
          </p>
        </div>
        <table v-else class="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <label class="form-checkbox">
                  <input v-model="selectAll" type="checkbox" @click="select" />
                  <i class="form-icon"></i>
                </label>
              </th>
              <th>Склад</th>
              <th>Остаток</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="warehouse in warehouses" :key="warehouse.id">
              <td>
                <label class="form-checkbox">
                  <input
                    v-model="selected"
                    type="checkbox"
                    :value="warehouse.id"
                    :disabled="warehouse.total_remainder === 0"
                  />
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{ warehouse.name }}</td>
              <td>{{ warehouse.total_remainder }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <tcd-footer @back="$emit('close:drawer', false)" @save="emitWarehouse" />
  </el-drawer>
</template>

<script>
import VueTypes from "vue-types";
import { filter, flatMap, includes } from "lodash";
import Warehouse from "../api/Warehouse";
import { getShopID } from "../utils/auth";
import TcdFooter from "./TcdFooter.vue";

export default {
  components: { TcdFooter },
  name: "TcdWarehousesDrawer",
  props: {
    open: VueTypes.bool,
    product: VueTypes.object
  },
  data() {
    return {
      selectedWarehouses: [],
      is_loading: false,
      selected: [],
      selectAll: false,
      warehouses: []
    };
  },
  watch: {
    product: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.is_loading = true;
        }
      }
    },
    selected: {
      deep: true,
      handler(newVal, oldVal) {
        this.selectAll = this.warehouses.length > 0 && this.warehouses.length === newVal.length;
      }
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.warehouses) {
          if (this.warehouses[i].total_remainder > 0) {
            this.selected.push(this.warehouses[i].id);
          }
        }
      }
    },
    selectable(row, index) {
      if (row.total_remainder !== 0 || row.is_true === true) {
        return true;
      } else {
        return false;
      }
    },
    getWarehouses() {
      const clientShop = getShopID();
      Warehouse.getWarehouses({
        product_id: this.product.product.id,
        shop_id: clientShop
      })
        .then(res => {
          const { result } = res.data;
          this.warehouses = result.data.warehouses;
          this.is_loading = false;
          return result.data.warehouses;
        })
        .catch(err => {
          this.is_loading = false;
        });
    },
    selectDefaults() {
      this.selected = [];
      const warehouseIds = flatMap(this.product.warehouses, "id");
      this.selected = warehouseIds;
    },
    emitWarehouse() {
      if (this.selected.length) {
        const warehouses = filter(this.warehouses, warehouse =>
            includes(this.selected, warehouse.id)
          ),
          id = this.product.product.id;
        const data = {
          warehouses,
          id
        };
        this.$emit("change:warehouse", data);
        return this.$emit("close:drawer", false);
      } else {
        return this.$emit("close:drawer", false);
      }
    },
    handleClose(done) {
      done();
      this.selected = [];
      return this.$emit("close:drawer", false);
    },
    selectWarehouses(val) {
      this.selectedWarehouses = val;
    }
  }
};
</script>

<style scoped>
.title-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 0 3vw 7vw;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
  color: black;
}

.table th {
  border-bottom-width: 0.1rem;
}

.table td,
.table th {
  border-bottom: 0.05rem solid #dadee4;
  padding: 0.6rem 0.4rem;
  color: white;
}

.form-checkbox,
.form-radio,
.form-switch {
  display: block;
  line-height: 1.2rem;
  margin: 0.2rem 0;
  min-height: 1.4rem;
  padding: 0.1rem 0.4rem 0.1rem 1.2rem;
  position: relative;
}
</style>
