<script setup lang="ts">
import ButtonGroup from "./button_group.vue";
import IconButton from "./buttons/icon_button.vue";
import { useMarkdown, useTheme } from "../store";

const uiStore = useTheme();
const markdownStore = useMarkdown();
</script>

<template>
  <div class="appbar">
    <ButtonGroup></ButtonGroup>

    <input @click="uiStore.toggleTheme" type="checkbox" />
    <IconButton @click="markdownStore.toggleView">visibility</IconButton>
  </div>
</template>

<style scoped>
.appbar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
</style>
