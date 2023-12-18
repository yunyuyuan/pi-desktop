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
import CryptoJS from 'crypto-js';
import config from '../../config.json'

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
      if (typeof content === 'string') {
        this.todo = JSON.parse(this.decrypt(content));
      }
    },
    mouseDown(event: PointerEvent) {
      this.$el.scrollTo(0, this.$el.scrollTop + ((event.clientY - this.clientHeight) < 91 ? -28 : 28));
    },
    decrypt(text: string): string {
      try {
        return CryptoJS.AES.decrypt(text, config["todo-pwd"]).toString(CryptoJS.enc.Utf8) || text;
      } catch (e) {
        return '[]'
      }
    }
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
