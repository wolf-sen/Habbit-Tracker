<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { LanguageIcon } from '@heroicons/vue/24/solid';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { useHabitsStore } from '@/stores/habits';
import { useUserStore } from '@/stores/user';
import { useRoutinesStore } from '@/stores/routines';
import MultiSelect from 'primevue/multiselect';

const nameSelected = ref();
const habitsSelected = ref([]);
const scheduleSelected = ref({name: 'Never', code: 'none'});
const scheduleOptions = ref([
    { name: 'Daily', code: '00-01-00' },
    { name: 'Every 3 days', code: '00-03-00' },
    { name: 'Every Week', code: '00-07-00' },
    { name: 'Every 2 weeks', code: '00-14-00' },
    { name: 'Every Month', code: '01-00-00' },
    { name: 'Custom', code: 'customFrequency' },
]);
const habitOptions = ref([]);

const router = useRouter();
const userStore = useUserStore();
const habitsStore = useHabitsStore();
const routinesStore = useRoutinesStore();

habitOptions.value = habitsStore.habits;

const confirmCreate= () => {
   if(!nameSelected.value || !scheduleSelected.value) {
    alert('Please fill out all required fields')
    return
  }
  routinesStore.createRoutine({
    userid: userStore.id,
    name: nameSelected.value,
    schedule: scheduleSelected.value.code
  },
  habitsSelected.value)
  router.push({ name: 'home' });
}

</script>

<template>
  <div class="mx-4 mt-16 h-full">
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Create New Routine</h1>
      <RouterLink
        to="/"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <XMarkIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>

    <div class="mt-40 flex flex-col gap-4 max-w-full">
      <IconField>
        <InputIcon>
          <LanguageIcon class="size-4 text-surface-contrast" />
        </InputIcon>
        <InputText v-model="nameSelected" placeholder="Routine Name" />
      </IconField>
      <Dropdown v-model="scheduleSelected" :options="scheduleOptions" optionLabel="name" placeholder="Repeat Frequency"/>
      <MultiSelect v-model="habitsSelected" :options="habitOptions" optionLabel="name" placeholder="Select Habits"
            :maxSelectedLabels="10" />
    </div>
    
    <div class="flex justify-end">
      <button
          class="mt-32 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
          @click="confirmCreate"
        >
          <span class="font-bold font-soft text-lg">Create</span>
      </button>
    </div>
  </div>
</template>

<style>
</style>

