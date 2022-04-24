<script setup lang="ts">
import { computed } from '@vue/reactivity';


const props = defineProps<{
  disabledButton?:boolean
}>();


const disabled = computed(()=>{

  return props.disabledButton; 
})

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
  color: #bb86fc;
}
</style>
