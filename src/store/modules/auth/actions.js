import { login, logout, getAuth } from "../../../api/auth";
import { getToken, setToken, setShopID, removeToken } from "../../../utils/auth";

export const actions = {
  login({ commit }, loginData) {
    return new Promise((resolve, reject) => {
      login(loginData)
        .then(response => {
          const { data } = response.data.result;
          if (data.token) {
            commit("SET_TOKEN", data.token);
            commit("SET_NAME", data.name);
            if (data.role) {
              commit("SET_ROLE", data.role);
            }
            setShopID(data.shop);
            setToken(data.token);
            resolve();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  getAuth({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      getAuth(`Bearer ${state.token}`)
        .then(res => {
          const { data } = res.data.result;

          if (!data) {
            reject("Проверка не удалась, пожалуйста, войдите снова.");
          }

          const { role, name } = data;

          if (!role) {
            reject("Роль не может быть пустой");
          }

          commit("SET_ROLE", role);
          commit("SET_NAME", name);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken();
          commit("REMOVE_TOKEN");
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken();
      commit("REMOVE_TOKEN");
      resolve();
    });
  }
};
