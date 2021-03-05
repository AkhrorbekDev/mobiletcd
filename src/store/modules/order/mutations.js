export function CREATE_ORDER(state, payload) {
  state.order = payload;
}

export function CLEAR(state) {
  state.order = {};
}
