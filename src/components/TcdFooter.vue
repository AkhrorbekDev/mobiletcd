<template>
  <div class="botton-style-com">
    <div class="com-botton">
      <el-button size="small" @click="back" type="primary">
        {{ labels.back ? labels.back : "Назад" }}
      </el-button>
      <el-button size="small" type="success" @click="save">
        {{ labels.save ? labels.save : "Сохранить" }}
      </el-button>
    </div>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "TcdFooter",
  props: {
    labels: VueTypes.object
  },
  methods: {
    back() {
      return this.$emit("back");
    },
    save() {
      return this.$emit("save");
    }
  }
};
</script>

<style scoped>
.botton-style-com {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #10163a;
}
.com-botton {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
