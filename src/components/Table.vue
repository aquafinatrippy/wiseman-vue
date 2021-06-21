<template>
  <div v-if="loadingStatus">
    <LoadingSpinner></LoadingSpinner>
  </div>
  <div v-else>
    <h2>NIMEKIRI</h2>
    <table>
      <thead>
        <th>EESNIMI</th>
        <th>PEREKONNANIMI</th>
        <th>SUGU</th>
        <th>SÜNNIKUUPÄEV</th>
        <th>TELEFON</th>
      </thead>
      <tbody>
        <tr
          v-for="(list, index) in getList.slice(pagStart, pagEnd)"
          :key="index"
        >
          <td>{{ list.firstname }}</td>
          <td>{{ list.surname }}</td>
          <td>{{ list.sex }}</td>
          <td>{{ list.date }}</td>
          <td>{{ list.phone }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="PaginationNavigation('')">right</button>
      <button @click="PaginationNavigation('forward')">left</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  name: "Table",
  data() {
    return {
      pagStart: 0,
      pagEnd: 10,
      active: 1,
    };
  },
  computed: { ...mapGetters(["getList", "loadingStatus"]) },
  components: { LoadingSpinner },
  methods: {
    PaginationNavigation(where) {
      if (where === "forward") {
        if (this.pagStart >= 0 && this.pagEnd > 0) {
          this.pagStart += 10;
          this.pagEnd += 10;
        }
      } else {
        if (this.pagStart >= 0) {
          this.pagStart -= 10;
          this.pagEnd -= 10;
        } else {
          this.pagStart = 0;
          this.pagEnd = 10;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 700;
  font-size: 48px;
  color: #14cc76;
  text-align: center;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  tr {
    &:hover {
      color: #ff57a2;
    }
  }
  td {
    cursor: pointer;
  }
}
table td,
table th {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

table th {
  font-family: Booster;
  color: #ff57a2;
  text-transform: uppercase;
  font-weight: 900;
  text-align: left;
  cursor: pointer;
}
</style>
