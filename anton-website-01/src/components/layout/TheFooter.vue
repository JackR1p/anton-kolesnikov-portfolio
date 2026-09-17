<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <p>© {{ currentYear }} Anton Kolesnikov</p>

      <p>
        {{ t('footer.builtWith') }}
      </p>
    </div>
  </footer>
</template>
