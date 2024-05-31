<script setup>
import navigationBar from '@/components/navigationBar.vue'
import greetingTitle from '@/components/greetingTitle.vue';
import progressCard from '@/components/progressCard.vue';
</script>

<template>
  <div class="mx-4 mt-16">
    <navigationBar />
    <section class="flex flex-col gap-4">
      <greetingTitle />
      <progressCard progress="50"/>
    </section>
  </div>
</template>

<style></style>
