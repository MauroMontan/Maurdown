<script setup lang="ts">
import DesktopLayout from "./components/layouts/desktop_layout.vue";
import TextArea from "./components/text_area.vue";
import Appbar from "./components/appbar.vue";
import MarkdownArea from "./components/markdown_area.vue";
import { useMarkdown, useTheme } from "./store";
import { computed } from "vue";

const markdownStore = useMarkdown();

const uiStore = useTheme();

const currentTheme = computed(() => {
    return uiStore.themeMode;
});
</script>

<template>
    <DesktopLayout>
        <template v-slot:appbar>
            <Appbar></Appbar>
        </template>

        <TextArea v-if="markdownStore.editorMode" ></TextArea>
        <MarkdownArea v-else ></MarkdownArea>
    </DesktopLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*color: #adbac7;*/
    color: v-bind("currentTheme.color");
    background-color: v-bind("currentTheme.background");
    font-family: "Source Code Pro", monospace;
    /*background-color: #22272e;*/
}


#app {
    height: 100vh;
    width: 100%;
}
</style>
