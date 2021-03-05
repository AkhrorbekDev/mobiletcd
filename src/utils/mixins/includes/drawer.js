export default {
  props: ['drawer'],
  data() {
    return {

    };
  },
  methods: {
    close() {
      this.parent().closeDrawer(this.drawer);
    },
    parent() {
      return this.$parent.$parent;
    },
    closed() {
      if (_.isFunction(this.afterLeave)) {
        this.afterLeave();
      }
    },
    opened() {
      if (_.isFunction(this.afterOpen)) {
        this.afterOpen();
      }
    },
  },
};
