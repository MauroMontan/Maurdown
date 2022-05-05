<script setup lang="ts">
import IconButton from "./buttons/icon_button.vue";
</script>

<template>
    <div class="sidebar">
        <IconButton> note_add </IconButton>
    </div>
</template>

<style scoped>
.sidebar {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
}
</style>
