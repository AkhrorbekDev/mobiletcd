import store from '@/store/index';

/**
 * Created by Sardor on 15/07/2020.
 */

export function notify(res) {
  try {
    if (res.success) {
      this.$notify({
        title: 'Успешно ',
        type: 'success',
        message: res.message,
        offset: 100,
      });
    } else {
      if (res.error && res.error.code == 422) {
        let ms = '';
        for (const key in res.validation_errors) {
          if (res.validation_errors.hasOwnProperty(key)) {
            const element = res.validation_errors[key];
            ms += (`${element.join('<br>')}<br>`);
          }
        }
        this.$message({
          dangerouslyUseHTMLString: true,
          title: 'Предупреждение',
          message: ms,
          type: 'warning',
          duration: 15000,
          showClose: true,
        });
      } if (res.error && res.error.code == 423) {
        this.$message({
          dangerouslyUseHTMLString: true,
          title: 'Предупреждение',
          message: (res.error) ? (`${res.error.message} Код: ${res.error.code}`) : res.message,
          type: 'warning',
          duration: 15000,
          showClose: true,
        });
      } else if (res.error && res.error.code == 404) {
        this.$message({
          dangerouslyUseHTMLString: true,
          title: 'Предупреждение',
          message: (res.error) ? (`${res.error.message} Код: ${res.error.code}`) : res.message,
          type: 'warning',
          duration: 15000,
          showClose: true,
        });
      } else {
        this.$notify({
          title: 'Ошибка ',
          type: 'error',
          message: (res.error) ? (`${res.error.message} Код: ${res.error.code}`) : res.message,
        });
      }
    }
  } catch (error) {
    alert(error);
  }
}

export function parseValidationErrorToStr(messages) {
  return messages.join(', ');
}

export function objectToQuery(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join('&');
}

export function permission(permission) {
  return store.getters.role.permissions.some((perm) => perm.slug == permission);
}
