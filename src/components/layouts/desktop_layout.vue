<script setup lang="ts"></script>

<template>
  <!-- code... -->

  <div class="layout">
    <aside name="sidebar"></aside>

    <div class="body">
      <header>
        <slot name="appbar"></slot>
      </header>

      <main>
        <div class="filename"><input placeholder="filename" type="text" /></div>

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
  height: 3rem;
  width: 100%;
}

main {
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.filename input::placeholder {
  color: grey;
}

.filename input {
  border: none;
  outline: none;
  font-weight: bold;
  color: #bb86fc;
}

::placeholder {
  color: #bb86fc;
}

main::-webkit-scrollbar {
  display: none;
}

aside {
  width: 20%;
  overflow: auto;
  background-color: #bb86fc;
}
.body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
