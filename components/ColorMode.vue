<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const switchColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly v-if="!colorMode.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="switchColorMode"
    >
      <template #fallback>
        <div class="size-8" />
      </template>
    </UButton>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
