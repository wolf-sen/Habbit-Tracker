<script setup>
import greetingTitle from "../components/greetingTitle.vue";
import habitGrid from "../components/habitGrid.vue";
import progressCard from "../components/progressCard.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <main class="mx-4">
    <div class="mt-10 grid grid-cols-2">
      <greetingTitle />
      <button
        type="button"
        class="place-self-end rounded-full bg-indigo-900 p-1"
      >
        <PlusIcon class="size-8 text-neutral-50 [&>path]:stroke-[3]" />
      </button>
    </div>
    <progressCard />
    <section class="mt-10">
      <span class="text-lg font-bold text-gray-500">For Today</span>
      <habitGrid />
    </section>
  </main>
</template>
