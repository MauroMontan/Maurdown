<script setup lang="ts">
import Layout from "./components/layout.vue";
import Appbar from "./components/appbar.vue";
import { useTheme } from "./store";
import { computed } from "vue";
import MarkdownArea from "./components/markdown_area.vue";
import TextArea from "./components/text_area.vue";

const uiStore = useTheme();

const currentTheme = computed(() => {
    return uiStore.themeMode;
});

</script>

<template>
    <Layout>
        <template v-slot:appbar>
            <Appbar></Appbar>
        </template>
        <TextArea />
        <MarkdownArea />
    </Layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Mono", monospace;
}

#app {
    height: 100vh;
    width: 100%;
    background-color: v-bind("currentTheme.background");
    color: v-bind("currentTheme.color");
}
</style>
