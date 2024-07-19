<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { HeartIcon, FireIcon, MusicalNoteIcon, LightBulbIcon, BookOpenIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  variant: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['click']);

function handleClick() {
  emit('click');
}

</script>

<template>
    <div @click="handleClick">
        <button v-if="props.variant === 1" class="flex justify-center items-center bg-pink-200 dark:bg-pink-800 size-20 rounded-full outline outline-pink-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true">
            <HeartIcon class="size-11 text-pink-500 dark:text-pink-400" />
        </button>
        <button v-if="props.variant === 2" class="flex justify-center items-center bg-green-200 dark:bg-green-800 size-20 rounded-full outline outline-green-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true">
            <LightBulbIcon class="size-11 text-green-500 dark:text-green-400" />
        </button>
        <button v-if="props.variant === 3" class="flex justify-center items-center bg-blue-200 dark:bg-blue-800 size-20 rounded-full outline outline-blue-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true">
            <MusicalNoteIcon class="size-11 text-blue-500 dark:text-blue-400" />
        </button>
        <button v-if="props.variant === 4" class="flex justify-center items-center bg-orange-200 dark:bg-orange-800 size-20 rounded-full outline outline-orange-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true">
            <FireIcon class="size-11 text-orange-500 dark:text-orange-400" />
        </button>
        <button v-if="props.variant >= 5" class="flex justify-center items-center bg-purple-200 dark:bg-purple-800 size-20 rounded-full outline outline-purple-900 outline-0 transition-all duration-75 hover:outline-1 hover:outline-offset-2" @click="visible = true">
            <BookOpenIcon class="size-11 text-purple-500 dark:text-purple-400" />
        </button>
    </div>
</template>

<style scoped></style>
