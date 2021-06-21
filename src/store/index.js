import { createStore } from "vuex";
import axios from "axios";

const url = "http://proovitoo.twn.ee/api/";

export default createStore({
  state: {
    articleData: [],
    listData: [],
    loading: false,
  },
  mutations: {
    SET_ARTICLE(state, article) {
      state.articleData = article;
    },
    SET_LOADING(state) {
      state.loading = true;
    },
    SET_LOADED(state) {
      state.loading = false;
    },
    SET_LIST(state, list) {
      state.listData = list;
    },
  },
  actions: {
    async getTableData({ commit }) {
      try {
        commit("SET_LOADING");
        const { data } = await axios.get(url + "/list.json");
        commit("SET_LIST", data);
        commit("SET_LOADED");
      } catch (error) {
        console.log(error);
      }
    },
    async getArticle({ commit }) {
      try {
        commit("SET_LOADING");
        const { data } = await axios.get(url + "/article.json");
        commit("SET_ARTICLE", data);
        commit("SET_LOADED");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getArticleInfo: (state) => {
      return state.articleData;
    },
    getList: (state) => {
      return state.listData.list;
    },
    loadingStatus: (state) => {
      return state.loading;
    },
  },
  modules: {},
});
