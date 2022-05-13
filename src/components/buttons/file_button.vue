<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { useTheme } from "../../store";
import { useFile } from "../../store/file_store";

const fileInput: Ref<HTMLInputElement | null> = ref(null);

const uiStore = useTheme();
const fileStore = useFile();

const setFile = () => {
    fileStore.uploadFile(fileInput.value!.files![0]!);
}

const currentTheme = computed(() => {
    return uiStore.themeMode;
});
</script>

<template>
    <label class="button material-symbols-outlined">
        <input ref="fileInput" @change="setFile" type="file" />

        <slot />
    </label>
</template>

<style scoped>
input[type="file"] {
    display: none;
}

.button {
    width: fit-content;
    color: v-bind("currentTheme.color");
    border: solid 0.1px;
    border-radius: 0.3rem;
    padding: 0.3rem;
    cursor: pointer;
    overflow: hidden;
}

label {
    display: flex;
    outline: none;
    border: none;
    color: v-bind("currentTheme.color");
    background: transparent;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

label:hover {
    color: #bb86fc;
}
</style>
