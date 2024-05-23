<script>
import habitCard from "/src/components/habitCard.vue";
export default {
  name: "habitGrid",
  components: {
    habitCard,
  },
};
</script>

<template>
  <div class="mt-3 grid grid-cols-2 gap-3">
    <habitCard title="Workout" />
    <habitCard title="Reading" />
    <habitCard title="Study" />
    <habitCard title="Sleep" />
  </div>
</template>

<style scoped></style>
