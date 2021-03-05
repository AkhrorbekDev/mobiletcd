export const getters = {
  token: (state) => state.token,
  permissions: (state) => ((state.role) ? state.role.permissions : []),
};
