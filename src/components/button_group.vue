<script setup lang="ts">
import { ref } from "vue";
import IconButton from "./buttons/icon_button.vue";

const icons = ref([
  { icon: "settings", snippet: "" },
  { icon: "code", snippet: "" },
  { icon: "image", snippet: "![name](image url)}" },
  { icon: "format_list_bulleted", snippet: "- item \n - item \n - item" },
  { icon: "checklist", snippet: "" },
  { icon: "table_chart", snippet: "" },
  { icon: "calendar_today", snippet: "" },
]);
</script>

<template>
  <div class="button-group">
    <IconButton v-for="icon in icons"> {{ icon.icon }} </IconButton>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 1rem;
}
</style>
