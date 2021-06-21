<template>
  <div class="home">
    <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import Table from "@/components/Table";

export default {
  name: "Home",
  methods: { ...mapActions(["getTableData"]) },
  created() {
    this.getTableData();
  },
  components: { Table },
};
</script>
