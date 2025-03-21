<script setup lang="ts">
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
const { changeTheme, changeRaduis } = themeStore
const { themeColor, themeRadius } = storeToRefs(themeStore)

const colorMode = useColorMode()
const { date, day, time } = useDateTime()

const isDark = computed(() => colorMode.value === 'dark')
const switchColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly v-if="!colorMode.forced">
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center">
        <div>{{ date }}</div>
        <div class="text-right text-xs">
          {{ day }}
          {{ time }}
        </div>
      </div>

      <UPopover arrow :content="{ sideOffset: 1 }">
        <UButton
          icon="i-lucide:swatch-book"
          color="neutral"
          variant="ghost"
          :ui="{ leadingIcon: `text-(--ui-primary)` }"
        />

        <template #content>
          <div class="w-72 p-4">
            <div class="text-sm mb-2">
              Primary
            </div>
            <div class="grid grid-cols-3 gap-1 -mx-2">
              <UButton
                v-for="(item, index) in UIPrimaryColorList"
                :key="index"
                size="sm"
                color="neutral"
                variant="outline"
                class="flex items-center"
                :class="[themeColor === item.color ? 'bg-[var(--ui-bg-elevated)]' : '']"
                @click="changeTheme(item.color, item.color === 'black')"
              >
                <div
                  class="rounded-full size-2 mr-1 bg-(--color-light) dark:bg-(--color-dark)"
                  :class="[item.color === 'black' ? 'bg-black dark:bg-white' : '']"
                  :style="{
                    '--color-light': `var(--color-${item.color}-500)`,
                    '--color-dark': `var(--color-${item.color}-400)`,
                  }"
                ></div>
                <div class="text-xs truncate">
                  {{ item.label }}
                </div>
              </UButton>
            </div>
            <div class="my-2">
              Radius
            </div>
            <div class="grid grid-cols-5 gap-1 -mx-2">
              <UButton
                v-for="(radius, index) in UIRadiusList"
                :key="index"
                size="xs"
                color="neutral"
                variant="outline"
                class="flex-center"
                :class="[themeRadius === radius ? 'bg-[var(--ui-bg-elevated)]' : '']"
                @click="changeRaduis(radius)"
              >
                {{ radius }}
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>
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
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
