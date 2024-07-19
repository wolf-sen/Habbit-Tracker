<script>
export default {
  name: 'ProgressCard',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value >= 0 && value <= 100
    }
  },
  computed: {
    limitedProgress() {
      return Math.min(this.progress, 100)
    }
  }
}
</script>

<template>
  <section class="flex w-full flex-col gap-2 rounded-card bg-primary p-card">
    <div class="flex flex-row items-end gap-2">
      <h1 class="font-soft text-2xl font-bold">{{ progress }}%</h1>
      <p>You're Doing Great!</p>
    </div>
    <div class="h-3 w-full rounded-full bg-neutral-50 dark:bg-neutral-900">
      <div
        class="h-full rounded-full bg-neutral-950 dark:bg-indigo-100"
        :style="{ width: limitedProgress + '%' }"
      ></div>
    </div>
  </section>
</template>

<style scoped></style>
