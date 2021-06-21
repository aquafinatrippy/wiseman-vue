<template>
  <div class="about">
    <div class="loading" v-if="loading === true">
      <p>loading...</p>
    </div>
    <div class="loaded" v-else>
      <h1>{{ getArticleInfo?.title }}</h1>
      <div class="intro">
        {{ remHtml(getArticleInfo?.intro) }}
      </div>
      <div class="imgCont">
        <img
          :src="getArticleInfo.images ? getArticleInfo?.images[0]?.medium : ''"
          alt=""
        />
      </div>
      <p>
        {{ remHtml(getArticleInfo?.body) }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Article",
  computed: { ...mapGetters(["getArticleInfo"]) },
  methods: {
    ...mapActions(["getArticle", "loading"]),
    remHtml(str) {
      if (str !== undefined) {
        return str
          .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "")
          .replace(/&#[0-9]+;t/gi, "")
          .replace(/\[/g, "")
          .replace(/\]/g, "");
      }
    },
  },
  beforeMount() {
    this.getArticle();
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
