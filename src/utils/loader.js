import Vue from 'vue';

/**
 * Element UI
 */
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
/**
 * end element ui
 */

/**
 * For alert
 */
import { mapGetters } from 'vuex';
import { notify } from './index';

/**
 * Gloabl mixin
 */

Vue.use(ElementUI, { locale });
Vue.prototype.$alert = notify;

Vue.mixin({
  data() {
    return {
      date_format: 'yyyy-MM-dd',
      date_time_format: 'yyyy-MM-dd HH:mm',
    };
  },

  methods: {},
});
