export default {
  data() {
    return {
      loading: {},
      selectedItem: {},
    };
  },
  methods: {
    closeDrawer(drawer) {
      if (this.$refs[drawer] && _.isFunction(this.$refs[drawer].closeDrawer)) {
        this.$refs[drawer].closeDrawer();
      }
    },
    drawerClosed(ref) {
      if (this.$refs[ref]) {
        this.$refs[ref].closed();
      }
    },
    drawerOpened(ref) {
      if (this.$refs[ref]) {
        if (_.isFunction(this.$refs[ref].opened)) {
          this.$refs[ref].opened();
        }
      }
    },
    changeLoading() {
      this.loading = this.$loading({
        customClass: 'login-loading',
        lock: true,
        text: 'Загрузка',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
    },
    open() {
      this.$confirm(`${this.$t('message.you may lose some unsaved data')}. ${this.$t('message.continue')}?`, this.$t('message.warning'), {
        confirmButtonText: this.$t('message.yes'),
        cancelButtonText: this.$t('message.cancel'),
        type: 'warning',
      }).then(() => {
        this.$router.push({ name: 'Home' });
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'info',
          message: this.$t('message.canceled'),
        });
      });
    },
  },
};
