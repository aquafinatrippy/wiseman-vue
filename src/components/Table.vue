<template>
  <div v-if="loadingStatus">
    <LoadingSpinner></LoadingSpinner>
  </div>
  <table v-else>
    <thead>
      <th>EESNIMI</th>
      <th>PEREKONNANIMI</th>
      <th>SUGU</th>
      <th>SÜNNIKUUPÄEV</th>
      <th>TELEFON</th>
    </thead>
    <tbody>
      <tr v-for="(list, index) in getList.slice(1, 3)" :key="index">
        <td>{{ list.firstname }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  name: "Table",
  computed: { ...mapGetters(["getList", "loadingStatus"]) },
  components: { LoadingSpinner },
};
</script>
