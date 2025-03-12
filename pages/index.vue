<script setup lang="ts">
const count = ref(0)

const handleCount = () => {
  count.value++
}
</script>

<template>
  <div class="p-4 flex">
    <div>
      <div class="w-80">
        <UCard>
          <div class="h-40">
            <Icon class="text-blue-500" name="material-symbols:add-location-rounded" size="2rem" />
            数量: {{ count }}
          </div>
        </UCard>
      </div>
      <UButton class="mt-4" @click="handleCount">
        修改count
      </UButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>
