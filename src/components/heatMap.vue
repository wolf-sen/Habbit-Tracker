<script>
export default {
  name: 'heatMap',
  computed: {
  }
}
</script>

<template>
  <section class="flex w-full flex-col gap-2 rounded-card bg-orange-500 p-card">
    <div class="flex flex-col gap-2">
      <h1 class="font-soft text-xl font-bold text-surface">Heat Map</h1>
      <div class="mx-auto grid grid-cols-7 grid-rows-4 gap-4">
        <div v-for="i in 28" class="size-8 rounded-input bg-surface"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
