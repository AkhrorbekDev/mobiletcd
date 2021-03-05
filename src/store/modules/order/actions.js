export function create({ commit }, payload) {
  commit("CREATE_ORDER", payload);
}

export function clear({ commit }) {
  commit("CLEAR");
}
