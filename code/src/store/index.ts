import { createStore } from "vuex";
import home from "./modules/home";

export default createStore({
  state: {
    someValue: 1,
  },
  modules: {
    home: home,
  },
});
