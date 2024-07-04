<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Stepper from 'primevue/stepper'
import StepperPanel from 'primevue/stepperpanel'
import Button from 'primevue/button'
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Create New Habit</h1>
      <RouterLink
        to="/"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <XMarkIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>

    <Stepper orientation="vertical" class="mt-40">
      <StepperPanel header="What are you going to do?">
        <template #content="{ nextCallback }">
          <div class="flex-column flex bg-indigo-500"></div>
          <div class="justify-content-end flex pt-4">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="When do you want to do it?">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex-column h-12rem flex">
            <div
              class="surface-border border-round surface-ground justify-content-center align-items-center flex flex-auto border-2 border-dashed font-medium"
            >
              Content II
            </div>
          </div>
          <div class="justify-content-between flex pt-4">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="prevCallback"
            />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="How often do you want to do it?">
        <template #content="{ prevCallback }">
          <div class="flex-column h-12rem flex">
            <div
              class="surface-border border-round surface-ground justify-content-center align-items-center flex flex-auto border-2 border-dashed font-medium"
            >
              Content III
            </div>
          </div>
          <div class="justify-content-start flex pt-4">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="prevCallback"
            />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<style></style>
