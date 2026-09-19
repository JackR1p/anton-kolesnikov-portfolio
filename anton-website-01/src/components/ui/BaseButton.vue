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
    const isExternalLink = props.href.startsWith('http://') || props.href.startsWith('https://')

    return {
      href: props.href,
      download: props.download ? '' : undefined,
      target: !props.download && isExternalLink ? '_blank' : undefined,
      rel: !props.download && isExternalLink ? 'noopener noreferrer' : undefined,
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
