<script setup lang="ts"></script>

<template>
  <div class="icon-button">
    <button class="material-symbols-outlined">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.icon-button {
  width: fit-content;
  border: solid 0.1px;
  background-color: transparent;
  border-radius: 0.3rem;
  padding: 0.3rem;
  cursor: pointer;
  overflow: hidden;
}
button {
  display: flex;
  outline: none;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  color: #29366f;
}
</style>
