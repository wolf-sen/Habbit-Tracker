<script>
export default {
  name: 'ProgressCard',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0,
      validator: value => value >= 0 && value <= 100
    }
  },
  computed: {
    limitedProgress() {
      return Math.min(this.progress, 100);
    }
  }
};
</script>

<template>
  <section class="flex flex-col w-full bg-indigo-500 rounded-card p-card gap-2 dark:bg-indigo-600">
    <div class="flex flex-row items-end gap-2">
        <h1 class="font-bold text-2xl font-soft">{{ progress }}%</h1>
        <p>You're Doing Great!</p>
    </div>
    <div class="bg-neutral-50 h-3 w-full rounded-full dark:bg-neutral-900">
        <div class="bg-neutral-950 h-full rounded-full dark:bg-indigo-100" :style="{ width: limitedProgress + '%' }"></div>
    </div>
  </section>
</template>

<style scoped></style>
