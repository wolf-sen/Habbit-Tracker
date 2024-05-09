<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressPercent: 50 // Beispiel
    };
  }
};
</script>

<template>
    <div class="container mt-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{ progressPercent }}%</div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{ progressPercent }}%</div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{ progressPercent }}%</div>
      </div>
    </div>
</template>
  
<style scoped>
  .progress {
    height: 55px; 
    margin-bottom: 0;
  }
  
  .progress-bar {
    background-color: rgb(102, 104, 188); 
    color: white; 
    text-align: center; 
  }
</style>
  