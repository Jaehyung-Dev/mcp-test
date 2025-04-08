<template>
  <div class="category-view">
    <div class="category-header">
      <h1>연애운</h1>
      <p>당신의 연애운을 확인해보세요 💕</p>
    </div>

    <div class="fortune-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="fortune-content">
      <div class="fortune-numbers" :class="{ 'is-animating': isAnimating }">
        <div v-for="(number, index) in luckyNumbers" :key="index" class="number">
          {{ number }}
        </div>
      </div>

      <div class="fortune-score">
        <div class="score-circle">
          <span class="score">{{ categoryScore }}</span>
          <span class="score-label">점</span>
        </div>
        <div class="score-message">{{ categoryMessage }}</div>
        <div class="score-details">{{ categoryDetails }}</div>
      </div>

      <button 
        class="generate-btn" 
        @click="generateNumbers"
        :disabled="hasGenerated"
      >
        {{ hasGenerated ? '이미 생성되었습니다' : '연애운 확인하기' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFortune } from '@/composables/useFortune'

const tabs = [
  { id: 'today', label: '오늘의 연애운' },
  { id: 'week', label: '이번 주 연애운' },
  { id: 'month', label: '이번 달 연애운' },
  { id: 'year', label: '올해 연애운' }
]

const {
  currentTab,
  fortuneData,
  isAnimating,
  hasGenerated,
  luckyNumbers,
  generateNumbers
} = useFortune(tabs)

const categoryScore = computed(() => {
  return fortuneData.value[currentTab.value]?.categories?.love?.score || 0
})

const categoryMessage = computed(() => {
  return fortuneData.value[currentTab.value]?.categories?.love?.message || ''
})

const categoryDetails = computed(() => {
  return fortuneData.value[currentTab.value]?.categories?.love?.details || ''
})
</script>

<style scoped>
.category-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.category-header {
  margin-bottom: 2rem;
}

.category-header h1 {
  font-size: 2.5rem;
  color: #e91e63;
  margin-bottom: 0.5rem;
}

.category-header p {
  font-size: 1.2rem;
  color: #666;
}

.fortune-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.fortune-tabs button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fortune-tabs button.active {
  background-color: #e91e63;
  color: white;
}

.fortune-content {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.fortune-numbers {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.number {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e91e63;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.is-animating .number {
  animation: bounce 0.5s ease infinite;
}

.fortune-score {
  margin-bottom: 2rem;
}

.score-circle {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background-color: #e91e63;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.score {
  font-size: 2.5rem;
  font-weight: bold;
}

.score-label {
  font-size: 1rem;
}

.score-message {
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0;
}

.score-details {
  color: #666;
  line-height: 1.5;
}

.generate-btn {
  padding: 1rem 2rem;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.generate-btn:hover:not(:disabled) {
  background-color: #c2185b;
  transform: translateY(-2px);
}

.generate-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .category-view {
    padding: 1rem;
  }

  .fortune-tabs {
    flex-wrap: wrap;
  }

  .fortune-tabs button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style> 