<script setup lang="ts">
import Layout from "./components/layout.vue";
import TextArea from "./components/text_area.vue";
import Appbar from "./components/appbar.vue";
import MarkdownArea from "./components/markdown_area.vue";
import { useMarkdown, useTheme } from "./store";
import { computed} from "vue";

const markdownStore = useMarkdown();

const uiStore = useTheme();

const currentTheme = computed(() => {
  return uiStore.themeMode;
});

const deviceType = computed(() => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  return "desktop";
})



</script>

<template>
  <Layout v-if="deviceType === 'mobile' ">
    <template v-slot:appbar>
      <Appbar></Appbar>
    </template>
    <TextArea v-if="markdownStore.editorMode"></TextArea>
    <MarkdownArea v-else></MarkdownArea>
  </Layout>

  <Layout v-else>
    <template v-slot:appbar>
      <Appbar></Appbar>
    </template>
    <TextArea v-show="markdownStore.editorMode"></TextArea>
    <MarkdownArea></MarkdownArea>
  </Layout>

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: v-bind("currentTheme.color");
  background-color: v-bind("currentTheme.background");
  font-family: "Source Code Pro", monospace;
}


#app {
  height: 100vh;
  width: 100%;
}
</style>
