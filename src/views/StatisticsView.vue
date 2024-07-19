<script setup>
import NavigationBar from '@/components/navigationBar.vue'
import heatMap from '@/components/heatMap.vue'
</script>

<template>
  <div class="mx-4 mt-16">
    <NavigationBar />
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Statistics</h1>
    </div>
    <div class="mt-10">
      <heatMap />
    </div>
  </div>
</template>

<style></style>
