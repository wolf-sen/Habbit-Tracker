<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { LanguageIcon, TagIcon, ClockIcon } from '@heroicons/vue/24/solid';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { useHabitsStore } from '@/stores/habits';
import { useUserStore } from '@/stores/user';
import iconSelector from '../components/iconSelector.vue';

const selectedIcon = ref(1);
const dialogVisible = ref(false);
const nameSelected = ref();
const tagSelected = ref();
const dateRangeSelected = ref();
const frequencyCustom = ref();
const frequencySelected = ref({name: 'Never', code: 'none'});
const frequencyOptions = ref([
    { name: 'Every Day', code: '00-01-00' },
    { name: 'Every 3 days', code: '00-03-00' },
    { name: 'Every Week', code: '00-07-00' },
    { name: 'Every 2 weeks', code: '00-14-00' },
    { name: 'Every Month', code: '01-00-00' },
    { name: 'Custom', code: 'customFrequency' },
]);

function handleIconClick() {
  dialogVisible.value = true;
}

function changeIcon(newIcon) {
  selectedIcon.value = newIcon
  dialogVisible.value = false
}

const router = useRouter();
const userStore = useUserStore();
const habitsStore = useHabitsStore();
const confirmCreate= () => {
  if(!nameSelected.value || !dateRangeSelected.value || !frequencySelected.value) {
    alert('Please fill out all required fields')
    return
  }
  if(frequencySelected.value.code === 'customFrequency') {
    habitsStore.createHabit({
      userid: userStore.id,
      name: nameSelected.value,
      tag: tagSelected.value,
      startdate: dateRangeSelected.value[0],
      enddate: dateRangeSelected.value[1],
      frequency: frequencyCustom.value,
      icon: selectedIcon.value,
      habitstatus: 'active'
    })
    router.push({ name: 'home' });
  } else {
    habitsStore.createHabit({
      userid: userStore.id,
      name: nameSelected.value,
      tag: tagSelected.value,
      startdate: dateRangeSelected.value[0],
      enddate: dateRangeSelected.value[1],
      frequency: frequencySelected.value.code,
      icon: selectedIcon.value,
      habitstatus: 'active'
    })
    router.push({ name: 'home' });
  }
  
  dialogVisible.value = false
}

</script>

<template>
  <div class="mx-4 mt-16 h-full">
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Create New Habit</h1>
      <RouterLink
        to="/"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <XMarkIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>

    <div class="mt-40 flex flex-col gap-4 max-w-full">
      <iconSelector :variant="selectedIcon" @click="handleIconClick()" />
      <Dialog v-model:visible="dialogVisible" modal header="Select Icon" :style="{ width: '90%', maxWidth: '35rem' }">
            <div class="flex gap-4 flex-wrap justify-center pt-2">
              <iconSelector v-for="i in 5" :key="i" :variant="i" @click="changeIcon(i)" />
            </div>
        </Dialog>
      <IconField>
        <InputIcon>
          <LanguageIcon class="size-4 text-surface-contrast" />
        </InputIcon>
        <InputText v-model="nameSelected" placeholder="Habit Name" />
      </IconField>
      <IconField>
      <InputIcon>
          <TagIcon class="size-4 text-surface-contrast" />
        </InputIcon>
        <InputText v-model="tagSelected" placeholder="Habit Tag" />
      </IconField>
      <Calendar dateFormat="dd.mm.yy" inputClass="w-full" placeholder="Start/End date" v-model="dateRangeSelected" selectionMode="range" :manualInput="false" class="w-full" iconDisplay="input" showIcon touchUI/>
      <Dropdown v-model="frequencySelected" :options="frequencyOptions" optionLabel="name" placeholder="Repeat Frequency"/>
      <InputMask v-if="frequencySelected.code === 'customFrequency'" id="basic" v-model="frequencyCustom" mask="99-99-99" placeholder="Custom Frequency (mm-dd-hh)">
        <InputIcon>
          <ClockIcon class="size-4 text-surface-contrast" />
        </InputIcon>
      </InputMask>
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

