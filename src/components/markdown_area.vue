<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { useMarkdown, useTheme } from "../store";

const uiStore = useTheme();
const markdownStore = useMarkdown();

const richText = computed(() => {
    return markdownStore.markdownText;
});

const markdownArea: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
    markdownStore.bindScroll(markdownArea.value);
});
</script>

<template>
    <div ref="markdownArea" v-html="richText" class="markdown-area"></div>
</template>

<style>
.markdown-area {
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    font-family: "Source Code Pro", monospace;
    word-wrap: break-word;
    overflow: auto;
    scroll-behavior: smooth;
}

.markdown-area h1 {
    color: v-bind("uiStore.themeMode.accentColor");
    margin-bottom: 1rem;
}

.markdown-area h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.markdown-area h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.markdown-area p {
    line-height: 1.5;
}

.markdown-area pre {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: v-bind("uiStore.themeMode.codeTheme.background");
    padding: 1rem;
    border-radius: 0.5rem;
    overflow: auto;
}
.markdown-area code {
    font-size: 0.9rem;
    word-wrap: break-word;
    color: v-bind("uiStore.themeMode.codeTheme.color");
    background: transparent;
}

.markdown-area a {
    color: #4477b7;
    font-weight: bold;
}

.markdown-area ol,
ul {
    margin-left: 2rem;
}

summary {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.markdown-area ul li {
    list-style: unset;
    padding: 0.5rem 0 0.5rem 0;
}

.markdown-area table,
th,
td {
    border-collapse: collapse;
    padding: 0.5rem;
    border: 1px solid;
}

.markdown-area table {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.markdown-area img {
    width: 90%;
    height: 90%;
}

.markdown-area blockquote {
    border-left: solid 0.3rem #bb86fc;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0.7rem 0 0.7rem 0;
    background-color: v-bind("uiStore.themeMode.codeTheme.background");
}
.markdown-area blockquote p {
    background-color: transparent;
}

/*
scrollbar settings
*/

.markdown-area::-moz-selection {
    /* Code for Firefox */
    color: v-bind("uiStore.themeMode.selectionTheme.color");
    background: v-bind("uiStore.themeMode.selectionTheme.background");
}

.markdown-area::selection {
    color: v-bind("uiStore.themeMode.selectionTheme.color");
    background: v-bind("uiStore.themeMode.selectionTheme.background");
}

.markdown-area::-webkit-scrollbar {
    width: 0.5rem;
}

.markdown-area::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
}

.markdown-area::-webkit-scrollbar-thumb {
    background: v-bind("uiStore.themeMode.accentColor");
    border-radius: 0.5rem;
    outline: none;
    cursor: grab;
}

.markdown-area::-webkit-scrollbar-corner {
    outline: none;
    border: none;
    background-color: transparent;
}

.markdown-area pre::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}

.markdown-area pre::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
}

.markdown-area pre::-webkit-scrollbar-thumb {
    background-color: #bb86fc;
    border-radius: 0.5rem;
    outline: none;
    cursor: grab;
}

.markdown-area pre::-webkit-scrollbar-corner {
    outline: none;
    border: none;
    background-color: transparent;
}
</style>
