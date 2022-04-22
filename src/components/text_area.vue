<script setup lang="ts">
import { ref, Ref } from "vue";
import { useMarkdown } from "../store";

const markdownStore = useMarkdown();

const textArea: Ref<HTMLTextAreaElement | null> = ref(null);
</script>

<template>
  <textarea
    ref="textArea"
    placeholder="Editor for your amazing ideas :D"
    v-model="markdownStore.rawText"
  ></textarea>
</template>

<style scoped>
textarea {
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Source Code Pro", monospace;
  caret-color: #bb86fc;
  font-size: 1.2rem;
  resize: none;
  line-height: 2rem;
  text-align: justify;
}

textarea::-webkit-scrollbar {
  width: 0.5rem;
}

textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.1rem;
}

textarea::-webkit-scrollbar-thumb {
  background-color: #bb86fc;
  border-radius: 0.5rem;
  outline: none;
}
textarea::-webkit-scrollbar-corner {
  outline: none;
  border: none;
  background-color: transparent;
}
</style>
