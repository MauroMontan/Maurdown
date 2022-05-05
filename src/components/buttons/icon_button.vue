<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useTheme } from "../../store";

const uiStore = useTheme();

const props = defineProps<{
    disabledButton?: boolean;
}>();

const disabled = computed(() => {
    return props.disabledButton;
});

const currentTheme = computed(() => {
    return uiStore.themeMode;
});
</script>

<template>
    <div class="icon-button">
        <button :disabled="disabled" class="material-symbols-outlined">
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>
.icon-button {
    width: fit-content;
    color: v-bind("currentTheme.color");
    border: solid 0.1px;
    border-radius: 0.3rem;
    padding: 0.3rem;
    cursor: pointer;
    overflow: hidden;
}

button {
    display: flex;
    outline: none;
    border: none;
    color: v-bind("currentTheme.color");
    background: transparent;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

button:hover {
    color: #bb86fc;
}

@media (max-width: 768px) {
    .icon-button {
        padding: 0.3rem;
    }
    button {
        font-size: 1rem;
    }
}
</style>
