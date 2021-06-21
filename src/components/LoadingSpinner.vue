<template>
  <div class="spinner">
    <img
      src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      alt="loading"
    />
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>
<style lang="scss" scoped>
img {
  width: 150px;
  height: auto;
}
.spinner {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
