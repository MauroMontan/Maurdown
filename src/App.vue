<script setup lang="ts">
import DesktopLayout from "./components/layouts/desktop_layout.vue";
import TextArea from "./components/text_area.vue";
import Appbar from "./components/appbar.vue";
import MarkdownArea from "./components/markdown_area.vue";
import { useMarkdown } from "./store";
const markdownStore = useMarkdown();
</script>

<template>
  <DesktopLayout>
    <template v-slot:appbar>
      <Appbar></Appbar>
    </template>

    <MarkdownArea v-if="markdownStore.editorMode"></MarkdownArea>
    <TextArea v-else></TextArea>
  </DesktopLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*color: #adbac7;*/
  background-color: #e2e4e9;
  font-family: "Source Code Pro", monospace;
  /*background-color: #22272e;*/
}

textarea::-moz-selection {
  /* Code for Firefox */
  color: black;
  background: white;
}

textarea::selection {
  color: white;
  background: #29366f;
}

#app {
  height: 100vh;
  width: 100%;
}
</style>
