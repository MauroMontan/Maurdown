<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useMarkdown } from "../store";
import IconButton from "./buttons/icon_button.vue";

const markdownStore = useMarkdown();

const buttonData = computed(() => {
    return markdownStore.markdownSnippets;
});
</script>

<template>
    <div class="button-group">
        <IconButton v-for="icon in buttonData" :tooltip="icon.tooltip" :disabledButton="!markdownStore.editorMode"
            @click="markdownStore.insertSnippet(icon.snippet)">
            {{ icon.icon }}
        </IconButton>
    </div>
</template>

<style scoped>
.button-group {
    display: flex;
    gap: 1rem;
}
</style>
