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
  getText({ commit, state }: any, payload?: any) {
    get("", payload).then((res: any) => {
      if (res) {
        commit("setText", {
          title: res.hitokoto,
          subtitle: res.creator,
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
