<script setup lang="ts">
import ButtonGroup from "./button_group.vue";
import IconButton from "./buttons/icon_button.vue";
import FileButton from "./buttons/file_button.vue";
import Switch from "./buttons/switch.vue";
import { useMarkdown, useTheme } from "../store";
import { useFile } from "../store/file_store";

const fileStore = useFile();
const uiStore = useTheme();
const markdownStore = useMarkdown();
</script>

<template>
    <div class="appbar">
        <ButtonGroup />
        <div class="actions">
            <FileButton> upload_file </FileButton>
            <IconButton @click="fileStore.fileSave('current')">
                save_as
            </IconButton>
            <IconButton @click="markdownStore.toggleView">
                visibility
            </IconButton>
            <Switch @toggle="uiStore.toggleTheme"></Switch>
        </div>
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

.actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

@media (max-width: 768px) {
    .actions {
        gap: 0.5rem;
    }
}
</style>
