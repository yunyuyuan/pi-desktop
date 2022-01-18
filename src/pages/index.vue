<template>
  <div class="main-page">
    {{ piData }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Client} from "../utils/socket";
import {piData} from "../utils/store";

export default defineComponent({
  name: "index",
  data() {
    return {
      client: new Client(),
      piData
    }
  },
  computed: {
  },
  mounted() {
    setInterval(() => {
      this.client?.getData();
    }, 1000);
  }
})
</script>

<style lang="scss" scoped>
.main-page {
  
}
</style>
