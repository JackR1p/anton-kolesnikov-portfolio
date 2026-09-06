<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <p>
        © {{ currentYear }} Anton Kolesnikov
      </p>

      <p>
        Built with Vue 3 & TypeScript
      </p>
    </div>
  </footer>
</template>