<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  variant: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: "md"
  }
});

const emit = defineEmits(['click']);

function handleClick() {
  emit('click');
}

</script>

<template>
    <div v-if="props.size === 'lg'" @click="handleClick">
        <img src="../assets/profiles/Pink.png" v-if="props.variant === 1" class="flex justify-center items-center bg-pink-200 dark:bg-pink-800 size-24 rounded-full outline outline-pink-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Green.png" v-if="props.variant === 2" class="flex justify-center items-center bg-green-200 dark:bg-green-800 size-24 rounded-full outline outline-green-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Blue.png" v-if="props.variant === 3" class="flex justify-center items-center bg-blue-200 dark:bg-blue-800 size-24 rounded-full outline outline-blue-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Red.png" v-if="props.variant === 4" class="flex justify-center items-center bg-red-200 dark:bg-red-800 size-24 rounded-full outline outline-red-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Purple.png" v-if="props.variant >= 5" class="flex justify-center items-center bg-purple-200 dark:bg-purple-800 size-24 rounded-full outline outline-purple-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
    </div>
    <div v-else @click="handleClick">
        <img src="../assets/profiles/Pink.png" v-if="props.variant === 1" class="flex justify-center items-center bg-pink-200 dark:bg-pink-800 size-20 rounded-full outline outline-pink-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Green.png" v-if="props.variant === 2" class="flex justify-center items-center bg-green-200 dark:bg-green-800 size-20 rounded-full outline outline-green-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Blue.png" v-if="props.variant === 3" class="flex justify-center items-center bg-blue-200 dark:bg-blue-800 size-20 rounded-full outline outline-blue-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Red.png" v-if="props.variant === 4" class="flex justify-center items-center bg-red-200 dark:bg-red-800 size-20 rounded-full outline outline-red-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
        <img src="../assets/profiles/Purple.png" v-if="props.variant >= 5" class="flex justify-center items-center bg-purple-200 dark:bg-purple-800 size-20 rounded-full outline outline-purple-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true" />
    </div>
</template>

<style scoped></style>
