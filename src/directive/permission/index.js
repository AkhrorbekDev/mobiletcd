import Vue from 'vue';
import store from '@/store';

Vue.directive('can-or', {
  bind(el, binding, vnode) {
    console.log(binding);
    const { value } = binding;
    let hasPermission = false;
    const { role } = store.getters;
    console.log(role);
    if (role && role != null && role != undefined && role.permissions) {
      if (value && value instanceof Array && value.length > 0) {
        value.forEach((element) => {
          hasPermission = hasPermission || role.permissions.some((perm) => perm.slug === element);
        });
      } else {
        hasPermission = hasPermission || role.permissions.some((perm) => perm.slug === value);
      }
    }
    if (!hasPermission) {
      // el.parentNode && el.parentNode.removeChild(el)

      el.style.display = 'none';
    }
  },
});

Vue.directive('can', {
  bind(el, binding, vnode) {
    const { value } = binding;
    let hasPermission = false;
    const { role } = store.getters;
    if (role && role != null && role != undefined && role.permissions) {
      if (value && value instanceof Array && value.length > 0) {
        hasPermission = true;
        value.forEach((element) => {
          hasPermission *= role.permissions.some((perm) => perm.slug === element);
        });
      } else {
        hasPermission = role.permissions.some((perm) => perm.slug === value);
      }
    }
    if (!hasPermission) {
      // el.parentNode && el.parentNode.removeChild(el)

      el.style.display = 'none';
    }
  },
});
