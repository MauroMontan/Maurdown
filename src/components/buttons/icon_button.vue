<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { useTheme } from "../../store";

const uiStore = useTheme();

const props = defineProps<{
    disabledButton?: boolean;
    tooltip?: string;
}>();

const isTooltipOpen = ref(false);
const openTooltip = () => {
    isTooltipOpen.value = !isTooltipOpen.value;

}
const disabled = computed(() => {
    return props.disabledButton;
});


const currentTheme = computed(() => {
    return uiStore.themeMode;
});
</script>

<template>
    <div class="icon-button">
        <button @mouseover="openTooltip" @mouseleave="isTooltipOpen = false" :disabled="disabled"
            class="material-symbols-outlined">
            <slot></slot>
            <i v-show="isTooltipOpen"> {{ props.tooltip }} </i>
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
    position: relative;
}

button:hover {
    color: #bb86fc;
}


i {
    background-color:rgb(0,0,0,0.7);
    backdrop-filter: blur(1rem);
    padding: 0.3rem;
    border-radius: 0.2rem;
    font-size:0.9rem;
    position: absolute;
    bottom: -2rem;
    left: -1rem;
}
</style>
