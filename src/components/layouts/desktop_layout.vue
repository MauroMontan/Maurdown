<script setup lang="ts">
import { ref } from "vue";
const size = ref("20%");
</script>

<template>
  <!-- code... -->

  <div class="layout">
    <aside name="sidebar"></aside>

    <div class="body">
      <header>
        <slot name="appbar"></slot>
      </header>

      <main>
        <h3>MAURDOWN.md</h3>
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
}

header {
  border-bottom: solid 0.3px darkgray;
  height: 3rem;
  width: 100%;
}

main {
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: scroll;
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

main::-webkit-scrollbar {
  display: none;
}

aside {
  width: v-bind("size");
  resize: horizontal;
  border-right: solid 0.1px darkgray;
  overflow: auto;
}
.body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
