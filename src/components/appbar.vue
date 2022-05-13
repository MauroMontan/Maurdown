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

        <div>
            <input class="filename" v-model="fileStore.filename" placeholder="filename.md" type="text" />
        </div>

        <div class="actions">
            <FileButton> upload_file </FileButton>
            <IconButton tooltip="Save as" @click="fileStore.fileSave"> save_as </IconButton>
            <IconButton tooltip="Toggle preview" @click="markdownStore.toggleView">
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

.filename {
    outline: none;
    width: fit-content;
    font-size: 1.2rem;
    background-color: transparent;
    font-weight: bold;
    text-align: center;
    color: #6d5492;
    border: none;
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
