<template>
  <div class="luck-score" :class="{ 'animate': isAnimating }" v-if="numbers.length > 0">
    <h2>{{ title }} 행운 지수: {{ score }}%</h2>
    <div class="progress-bar">
      <div class="progress" :style="{ width: score + '%' }"></div>
    </div>
    <p class="luck-message">{{ message }}</p>
    <p class="luck-details">{{ details }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  isAnimating: {
    type: Boolean,
    default: false
  },
  numbers: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.luck-score {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease;
}

.luck-score.animate {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  margin: 1rem 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #35495e);
  transition: width 1s ease;
}

.luck-message {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 1rem 0;
  font-weight: bold;
}

.luck-details {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .luck-score {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .progress-bar {
    margin: 0.8rem 0;
  }

  .luck-message {
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }

  .luck-details {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}
</style> 