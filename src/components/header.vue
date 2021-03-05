<template>
  <div class="relative height15">
    <div class="haeder-content">
      <el-row :gutter="10" class="header-flex">
        <el-col :span="5">
          <div class="my-icon-home-block">
            <i class="my-icon-home qr-code-scan" @click="drawer = true"></i>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="logo-info-text">
            <img src="../../public/img/logo.png" alt="" />
            <div class="info-name-block">Text-block</div>
          </div>
        </el-col>
        <el-col :span="5" style="margin-top:5px;">
          <el-button
            style="color: #ffffff; background-color: transparent; border: none; font-size: 2.0rem;"
            icon="el-icon-lock"
            circle
            @click="logout()"
          ></el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    logout() {
      this.$confirm("Вы уверены, что хотите выйти?", "Подтверждение", {
        confirmButtonText: "Да",
        cancelButtonText: "Нет",
        type: "warning"
      })
        .then(async () => {
          await this.$store.dispatch("auth/logout");
          this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="scss">
.header-flex {
  display: flex;
  justify-content: center;
}
</style>
