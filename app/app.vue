<script setup lang="ts">
import { useThemeStore } from '@/store'

const appConfig = useAppConfig()

const { initTheme } = useThemeStore()

initTheme()

useHead({
  title: appConfig.title,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
