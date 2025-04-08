<template>
  <div class="lucky-numbers">
    <template v-if="numbers.length > 0">
      <div v-for="(number, index) in numbers" 
           :key="index" 
           class="number"
           :class="{ 'animate': isAnimating }">
        {{ number }}
      </div>
    </template>
    <div v-else class="welcome-message">
      <p>행운의 숫자를 생성해보세요!</p>
      <div class="sparkle">✨</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  numbers: {
    type: Array,
    required: true
  },
  isAnimating: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.lucky-numbers {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  min-height: 120px;
}

.number {
  background: linear-gradient(45deg, #42b883, #35495e);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  font-size: 2rem;
  font-weight: bold;
  min-width: 100px;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
  transition: transform 0.3s ease;
}

.number.animate {
  animation: bounce 0.5s ease;
}

.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: fadeIn 1s ease;
}

.welcome-message p {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
}

.sparkle {
  font-size: 2rem;
  animation: sparkle 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@media (max-width: 768px) {
  .lucky-numbers {
    gap: 1rem;
    margin-bottom: 1.5rem;
    min-height: 100px;
  }

  .number {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    min-width: 80px;
  }

  .welcome-message p {
    font-size: 1.1rem;
  }

  .sparkle {
    font-size: 1.5rem;
  }
}
</style> 