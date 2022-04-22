<script setup lang="ts">
import { ref, Ref } from "vue";
const text = ref("");

const textArea: Ref<HTMLTextAreaElement | null> = ref(null);

const insertion = ref(":)");

const insert = (): void => {
  const cursorPosition = textArea.value!.selectionStart;

  const output = [
    text.value.slice(0, cursorPosition),
    insertion.value,
    text.value.slice(cursorPosition),
  ].join("");

  text.value = output;

  alert(cursorPosition);
  textArea.value!.selectionStart = 4;
};
</script>

<template>
  <button @click="insert">add</button>
  <textarea ref="textArea" v-model.trim="text"></textarea>
</template>

<style scoped>
textarea {
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Source Code Pro", monospace;
  caret-color: green;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: justify;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
