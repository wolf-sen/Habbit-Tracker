<script>
export default {
  name: "HabitCarousel",
  data() {
    return {
      habits: [
        { name: "Exercise", description: "Go for a jog or hit the gym." },
        { name: "Reading", description: "Read a book for at least 30 minutes." },
        { name: "Meditation", description: "Take 10 minutes to meditate." }
      ],
      activeIndex: 1 // Aktiver Index des Karussells
    };
  },
  methods: {
    removeHabit(index) {
      this.habits.splice(index, 1);
      if (index === this.activeIndex && this.habits.length > 0) {
        if (this.activeIndex === this.habits.length) {
          this.activeIndex--;
        }
      }
    },
    goTo(index) {
      if (index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
          <div class="carousel" ref="carousel">
            <div v-for="(habit, index) in habits" :key="index" class="habit-wrapper" :class="{ 'active': index === activeIndex, 'inactive': index !== activeIndex }" @click="goTo(index)">
              <div class="habit rounded p-4 mb-4 position-relative">
                <div class="habit-content d-flex align-items-center">
                  <div class="circle-abhacken" @click.stop="removeHabit(index)"></div>
                  <h2 class="habit-name">{{ habit.name }}</h2>
                </div>
                <p class="habit-description">{{ habit.description }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  width: 100%;
}
.habit-wrapper {
  flex: 0 0 auto; 
  margin-right: 10px; 
}
.habit {
  position: relative;
  border: 2px solid purple;
  background-color: purple;
  cursor: pointer;
  transition: opacity 0.3s; 
  height: 240px;
}
.habit.active {
  background-color: purple;
  color: white;
  z-index: 2;
}
.inactive {
  opacity: 0.6;
}
.circle-abhacken {
  width: 30px;
  height: 30px;
  background-color: rgb(198, 83, 233);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  margin-right: 10px; 
}
.habit-content {
  position: relative;
}
.habit-name {
  margin: 0; 
}
.habit-description {
  margin-top: 5px; 
}
</style>
