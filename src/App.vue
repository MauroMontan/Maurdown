<script setup lang="ts">
import DesktopLayout from "./components/layouts/desktop_layout.vue";
import TextArea from "./components/text_area.vue";
import Appbar from "./components/appbar.vue";
</script>

<template>
  <DesktopLayout>
    <template v-slot:appbar>
      <Appbar></Appbar>
    </template>

    <TextArea></TextArea>
  </DesktopLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  font-family: "Source Code Pro", monospace;
  background-color: white;
  /*background-color: #191919;*/
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
