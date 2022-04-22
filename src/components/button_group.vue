<script setup lang="ts">
import { ref } from "vue";
import IconButton from "./buttons/icon_button.vue";

const icons = ref([
  "settings",
  "code",
  "image",
  "format_list_bulleted",
  "checklist",
  "table_chart",
  "calendar_today",
  "visibility",
]);
</script>

<template>
  <div class="button-group">
    <IconButton v-for="icon in icons"> {{ icon }} </IconButton>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 1rem;
}
</style>
