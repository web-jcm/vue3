import { get } from "../../request/http";

const state = {
	title: '',
	subtitle: ''
};

const getters = {};

const mutations = {
  setText(
    state: { title: string; subtitle: string },
    payload: { title: string; subtitle: string }
  ) {
    state.title = payload.title;
    state.subtitle = payload.subtitle;
  },
};

const actions = {
  getText({ commit, state }: any, payload: any) {
    get("sentences").then((res: any) => {
      if (res.code === 200) {
        commit("setText", {
          title: res.result.name,
          subtitle: res.result.from,
        });
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
