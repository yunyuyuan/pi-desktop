<template>
  <div class="todo" @click="mouseDown">
    <ul>
      <li v-for="item in todo">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getFileContent} from "../utils/github";

export default defineComponent({
  name: "todo",
  data() {
    return {
      todo: [],
      clientHeight: 0
    }
  },
  created() {
    this.getTodo();
    setInterval(() => {
      this.getTodo()
    }, 60000);
  },
  mounted() {
    this.clientHeight = this.$el.clientHeight;
  },
  methods: {
    async getTodo() {
      const content = await getFileContent('files/todo.json');
      if (typeof content === 'string' && content.startsWith('[')) {
        this.todo = JSON.parse(content);
      }
    },
    mouseDown(event: PointerEvent) {
      this.$el.scrollTo(0, this.$el.scrollTop + ((event.clientY - this.clientHeight) < 91 ? -28 : 28));
    },
  }
})
</script>

<style lang="scss" scoped>
.todo {
  overflow-y: auto;
  flex-grow: 1;
  ul {
    list-style: none;
    padding: 10px;
    li {
      margin-top: 5px;
      padding-bottom: 5px;
      border-bottom: 1px dashed #d0d0d0;
      text-align: center;
      font-weight: bold;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
      }
    }
  }
}
</style>
