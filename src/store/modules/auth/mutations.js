export const mutations = {
  SET_TOKEN: (state, token) => state.token = token,
  SET_NAME: (state, name) => state.name = name,
  SET_ROLE: (state, role) => state.role = role,

  REMOVE_TOKEN: (state, token) => state.token = null,
};
