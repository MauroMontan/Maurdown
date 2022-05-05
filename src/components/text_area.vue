<script setup lang="ts">
import { onMounted, ref, Ref, computed } from "vue";
import { useMarkdown, useTheme } from "../store";

const markdownStore = useMarkdown();
const uiStore = useTheme();

const textArea: Ref<HTMLTextAreaElement | null> = ref(null);

const currentTheme = computed(() => {
    return uiStore.themeMode;
});

onMounted(() => {
    markdownStore.setTextArea(textArea.value);
});
</script>

<template>
    <textarea
        ref="textArea"
        placeholder="Editor for your amazing ideas :D"
        v-model="markdownStore.rawText"
    ></textarea>
</template>

<style scoped>
textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-family: "Space Mono", monospace;
    caret-color: #bb86fc;
    resize: none;
    padding: 0.5rem;

    background-color: v-bind("currentTheme.background");
    color: v-bind("currentTheme.color");
}

/*
SELECTION SETTINGS
*/

textarea::-moz-selection {
    /* Code for Firefox */
    color: v-bind("uiStore.themeMode.selectionTheme.color");
    background: v-bind("uiStore.themeMode.selectionTheme.background");
}

textarea::selection {
    color: v-bind("uiStore.themeMode.selectionTheme.color");
    background: v-bind("uiStore.themeMode.selectionTheme.background");
}

/*
  
  SCROLLBAR SETTINGS

*/

textarea::-webkit-scrollbar {
    width: 0.5rem;
}

textarea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
}

textarea::-webkit-scrollbar-thumb {
    background-color: v-bind("uiStore.themeMode.accentColor");
    border-radius: 0.5rem;
    outline: none;
}

textarea::-webkit-scrollbar-corner {
    outline: none;
    border: none;
    background-color: transparent;
}
</style>
