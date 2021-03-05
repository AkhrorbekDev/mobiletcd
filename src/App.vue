<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout';
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'App',
  computed: {
    layout() {
      // console.log(this.$route.meta);
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>
<style lang="scss">

.el-notification.right,
.el-message.el-message--warning,
.el-message.el-message--info,
.login-loading,
.el-message-box__wrapper {
  z-index: 99999 !important;
}

.login-loading .el-icon-loading {
  font-size: 4em;
}

.el-message.el-message--warning,
.el-message-box__wrapper .el-message-box {
  width: 90% !important;
  max-width: 90% !important;
  min-width: 90% !important;
}
</style>
