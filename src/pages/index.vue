<template>
  <div class="main-page">
    <div class="top flex">
      <clock/>
      <progressbar :text="'CPU'" :percentage="piData.cpu_usage"/>
      <progressbar :text="'RAM'" :percentage="ramUsage"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Client} from "../utils/socket";
import {piData} from "../utils/store";
import Clock from "../components/clock.vue";
import Progressbar from "../components/progressbar.vue";

export default defineComponent({
  name: "index",
  components: {Progressbar, Clock},
  data() {
    return {
      client: new Client(),
      piData
    }
  },
  computed: {
    ramUsage(): number {
      return Math.round(this.piData.ram_usage[1] * 100 / this.piData.ram_usage[0])
    }
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
