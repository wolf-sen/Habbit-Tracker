<script>
export default {
  name: "habitCard",
  props: ["title"],
  setup(props) {
    let title = props.title;
  },
};
</script>

<template>
  <div
    class="min-h-24 rounded-lg bg-gray-300 p-2 text-xl font-semibold text-gray-800"
  >
    {{ title }}
  </div>
</template>

<style scoped></style>
