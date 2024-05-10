<script>
  export default {
  name: "habitCard",
  props: ['title'],
  setup(props) {
      let title = props.title;
    }
  };
</script>

<template>
  <div class="bg-gray-300 rounded-lg  min-h-24 p-2 font-semibold text-xl text-gray-800">{{ title }}</div>
</template>

<style scoped>
</style>
