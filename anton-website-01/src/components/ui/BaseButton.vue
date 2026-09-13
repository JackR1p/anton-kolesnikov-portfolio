<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

type Variant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: Variant
    type?: 'button' | 'submit' | 'reset'
    download?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    download: false,
  },
)
const componentType = computed(() => {
  if (props.to) {
    return RouterLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const componentProperties = computed(() => {
  if (props.to) {
    return {
      to: props.to,
    }
  }

  if (props.href) {
    return {
      href: props.href,
      download: props.download || undefined,
      target: props.download ? undefined : '_blank',
      rel: props.download ? undefined : 'noopener noreferrer',
    }
  }

  return {
    type: props.type,
  }
})
</script>

<template>
  <component
    :is="componentType"
    v-bind="componentProperties"
    class="base-button"
    :class="`base-button--${variant}`"
  >
    <slot />
  </component>
</template>
