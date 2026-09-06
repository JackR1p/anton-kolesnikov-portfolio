<script setup lang="ts">
defineProps<{
  technologies: string[]
}>()
</script>

<template>
  <ul class="technology-list">
    <li
      v-for="technology in technologies"
      :key="technology"
      class="technology-list__item"
    >
      {{ technology }}
    </li>
  </ul>
</template>