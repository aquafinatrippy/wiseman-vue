<template>
  <div class="about">
    <div class="loading" v-if="loadingStatus">
      <LoadingSpinner></LoadingSpinner>
    </div>
    <div v-else>
      <h2>{{ getArticleInfo?.title }}</h2>
      <div class="intro">
        <p>{{ remHtml(getArticleInfo?.intro) }}</p>
      </div>
      <div class="imgCont">
        <img
          :src="getArticleInfo.images ? getArticleInfo?.images[0]?.medium : ''"
          alt=""
        />
      </div>
      <div class="bodytext">
        <p>
          {{ remHtml(getArticleInfo?.body) }}
        </p>
      </div>

      <div class="tags">
        <div
          class="tag"
          v-for="(tag, index) in getArticleInfo.tags"
          :key="index"
        >
          {{ tag }}
        </div>
        {{ getPara() }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "Article",
  computed: { ...mapGetters(["getArticleInfo", "loadingStatus"]) },
  components: {
    LoadingSpinner,
  },
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
    getPara() {
      if (this.getArticleInfo.body) {
        const test = this.getArticleInfo.body;
        let x = test.split(/<\s*div[^>]*>(.*?)<\s*\/\s*div\s*>/);
        console.log(x);
      }

      return "";
    },
  },
  beforeMount() {
    this.getArticle();
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  .tag {
    margin: 0 10px;
  }
}
img {
  width: 100%;
}
h2 {
  font-weight: 700;
  font-size: 48px;
  color: #14cc76;
  text-align: center;
}
p {
  margin: 40px 0;
}
.intro {
  p {
    font-weight: 900;
  }
}
.bodyText {
  white-space: pre-line;
  display: block;
}
</style>
