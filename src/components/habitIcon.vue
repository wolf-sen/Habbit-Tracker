<script setup>
import { defineProps, computed } from 'vue';
import { HeartIcon, FireIcon, MusicalNoteIcon, LightBulbIcon, BookOpenIcon } from '@heroicons/vue/24/solid'
import { stringify } from 'postcss';

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

const sizeIcon = computed(() => {
  if (props.size === 'sm') {
    return 'size-6'
  } else if (props.size === 'md') {
    return 'size-8'
  } else if (props.size === 'lg') {
    return 'size-12'
  } else { return 'size-8'}

});

const sizeContainer = computed(() => {
  if (props.size === 'sm') {
    return 'size-10'
  } else if (props.size === 'md') {
    return 'size-12'
  } else if (props.size === 'lg') {
    return 'size-16'
  } else { return 'size-8'}

})

</script>

<template>
    <div>
        <button v-if="props.variant === 1" :class="sizeContainer" class="flex justify-center items-center bg-pink-200 dark:bg-pink-800 rounded-full" @click="visible = true">
            <HeartIcon :class="sizeIcon" class="size-8 text-pink-500 dark:text-pink-400" />
        </button>
        <button v-if="props.variant === 2" :class="sizeContainer" class="flex justify-center items-center bg-green-200 dark:bg-green-800 rounded-full" @click="visible = true">
            <LightBulbIcon :class="sizeIcon" class="size-8 text-green-500 dark:text-green-400" />
        </button>
        <button v-if="props.variant === 3" :class="sizeContainer" class="flex justify-center items-center bg-blue-200 dark:bg-blue-800 rounded-full" @click="visible = true">
            <MusicalNoteIcon :class="sizeIcon" class="size-8 text-blue-500 dark:text-blue-400" />
        </button>
        <button v-if="props.variant === 4" :class="sizeContainer" class="flex justify-center items-center bg-orange-200 dark:bg-orange-800 rounded-full" @click="visible = true">
            <FireIcon :class="sizeIcon" class="size-8 text-orange-500 dark:text-orange-400" />
        </button>
        <button v-if="props.variant >= 5" :class="sizeContainer" class="flex justify-center items-center bg-purple-200 dark:bg-purple-800 rounded-full" @click="visible = true">
            <BookOpenIcon :class="sizeIcon" class="size-8 text-purple-500 dark:text-purple-400" />
        </button>
    </div>
</template>

<style scoped></style>
