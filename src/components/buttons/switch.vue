<script setup lang="ts">
defineProps<{
  active?: boolean;
}>();

defineEmits<{
  (event: "toggle"): void;
}>();
</script>
<template>
  <label>
    <input :checked="active" @click="$emit('toggle')" v-model="active" type="checkbox" />
    <span class="slider class material-symbols-outlined" />
  </label>
</template>
<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.slider {
  border: solid 0.3px;
  position: relative;
  display: block;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 0.9rem;
  overflow: hidden;
  transition: ease-in 0.5s;
}

.slider:before {
  content: "dark_mode";
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  top: 0.1rem;
  left: 0.2rem;
  border: solid 0.3px;
  width: 1.5rem;
  height: 1.5rem;
  color: #bb86fc;
  border-radius: 50%;
  transition: ease-in 0.2s;
}

input[type="checkbox"]:checked~.slider:before {
  transform: translateX(2rem);
  content: "light_mode";
}

@media (max-width:768px) {

  .slider:before{
    top:0.1rem;
  }
  input[type="checkbox"]:checked~.slider:before {
    transform: translateX(1rem);

  }

  .slider {
    width: 3rem;
    height:1.8rem;
}
}
</style>
