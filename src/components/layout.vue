<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../store";

const uiStore = useTheme();

const currentTheme = computed(() => {
    return uiStore.themeMode;
});
</script>

<template>
    <!-- code... -->

    <div class="layout">
        <div class="body">
            <header>
                <slot name="appbar"></slot>
            </header>

            <main>
                <slot></slot>
            </main>
        </div>

        <footer name="footer"></footer>
    </div>
</template>

<style scoped>
/* code... */

.layout {
    height: 100%;
    width: 100%;
    display: flex;

    background-color: v-bind("currentTheme.background");
    color: v-bind("currentTheme.color");
}

header {
    height: 3rem;
    width: 100%;
}

main {
    width: 100%;
    height: 100%;
    padding: 2rem;
    overflow: scroll;
    display: flex;
    gap: 0.9rem;
}

main::-webkit-scrollbar {
    display: none;
}

.body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    aside {
        display: none;
    }

    main {
        padding: 0.5rem;
    }
}
</style>
