<script setup lang="ts">
import ButtonGroup from "./button_group.vue";
</script>

<template>
  <div class="appbar">
    <ButtonGroup></ButtonGroup>
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
