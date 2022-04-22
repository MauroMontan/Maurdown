<script setup lang="ts">
import { computed } from "vue";
import { useMarkdown, useTheme } from "../store";

const uiStore = useTheme();
const markdownStore = useMarkdown();

const richText = computed(() => {
  return markdownStore.markdownText;
});
</script>

<template>
  <div v-html="richText" class="markdown-area"></div>
</template>

<style>
.markdown-area {
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  font-family: "Source Code Pro", monospace;
  word-wrap: break-word;
  font-size: 1.3rem;
  overflow: auto;
  align-items: center;
  line-height: 1.5;
}

.markdown-area pre {
  margin: 0.5rem;
  background-color: v-bind("uiStore.themeMode.codeTheme.background");
  padding: 0.5rem;
  border-radius: 0.5rem;
  overflow: auto;
}
.markdown-area code {
  font-size: 0.9rem;
  word-wrap: break-word;
  color: v-bind("uiStore.themeMode.codeTheme.color");
  background: transparent;
}

.markdown-area a {
  color: #4477b7;
}

.markdown-area ul li {
  list-style: unset;
}

.markdown-area table,
th,
td {
  border-collapse: collapse;
  padding: 0.5rem;
  border: 1px solid;
}

.markdown-area table {
  margin: 1rem;
}

.markdown-area img {
  width: 90%;
  height: 90%;
}

.markdown-area::-webkit-scrollbar {
  width: 0.5rem;
}

.markdown-area pre::-webkit-scrollbar {
  height: 0.5rem;
}

.markdown-area::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.1rem;
}

.markdown-area::-webkit-scrollbar-thumb {
  background-color: #bb86fc;
  border-radius: 0.5rem;
  outline: none;
  cursor: grab;
}

.markdown-area::-webkit-scrollbar-corner {
  outline: none;
  border: none;
  background-color: transparent;
}
</style>
