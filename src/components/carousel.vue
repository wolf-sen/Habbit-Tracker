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
      <div class="col-lg-8">
        <div class="mb-5"></div> <!-- Leere Zeile hinzugefügt -->
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
        <div class="mb-5"></div> <!-- Zusätzliche leere Zeile hinzugefügt -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your custom CSS styles for rounded squares here */
.carousel {
  display: flex;
  justify-content: center;
  width: 100%;
}
.habit-wrapper {
  flex: 0 0 auto; /* Habits sollen nicht vergrößert werden */
  margin-right: 10px; /* Abstand zwischen den Habits */
}
.habit {
  position: relative;
  border: 2px solid purple;
  cursor: pointer;
  transition: opacity 0.3s; /* Transition für die Opazität hinzugefügt */
}
.habit.active {
  background-color: purple;
  color: white;
  z-index: 2;
}
.inactive {
  opacity: 0.5;
}
.circle-abhacken {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  margin-right: 10px; /* Abstand zwischen Kreis und Habit-Name */
}
.habit-content {
  position: relative;
}
.habit-name {
  margin: 0; /* Kein zusätzlicher Abstand für den Habit-Namen */
}
.habit-description {
  margin-top: 5px; /* Abstand zwischen Habit-Namen und Beschreibung */
}
</style>
