<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  name: { type: String, required: true }
})
</script>

<template>
  <Icon
    :icon="name"
    class="inline-block"
  />
</template>