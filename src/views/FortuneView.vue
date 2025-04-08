<template>
  <div class="fortune-container">
    <div class="fortune-header">
      <h1>행운의 숫자</h1>
      <p>당신의 운세를 확인해보세요!</p>
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
          <span class="score">{{ luckScore }}</span>
          <span class="score-label">점</span>
        </div>
        <div class="score-message">{{ getLuckMessage }}</div>
        <div class="score-details">{{ getLuckDetails }}</div>
      </div>

      <div class="fortune-categories">
        <div v-for="(category, key) in categoryScores" :key="key" class="category-card">
          <div class="category-header">
            <h3>{{ getCategoryLabel(key) }}</h3>
            <div class="category-score">{{ category.score }}점</div>
          </div>
          <div class="category-message">{{ category.message }}</div>
          <div class="category-details">{{ category.details }}</div>
        </div>
      </div>

      <button 
        class="generate-btn" 
        @click="generateNumbers"
        :disabled="hasGenerated"
      >
        {{ hasGenerated ? '이미 생성되었습니다' : '행운의 숫자 생성하기' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFortune } from '@/composables/useFortune'

const tabs = [
  { id: 'today', label: '오늘의 운세' },
  { id: 'week', label: '이번 주 운세' },
  { id: 'month', label: '이번 달 운세' },
  { id: 'year', label: '올해 운세' }
]

const {
  currentTab,
  fortuneData,
  isAnimating,
  hasGenerated,
  getTabTitle,
  luckyNumbers,
  luckScore,
  categoryScores,
  getLuckMessage,
  getLuckDetails,
  generateNumbers
} = useFortune(tabs)

const getCategoryLabel = (key) => {
  const labels = {
    love: '연애운',
    study: '학업운',
    work: '직장운',
    health: '건강운'
  }
  return labels[key] || key
}
</script>

<style scoped>
.fortune-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.fortune-header {
  margin-bottom: 2rem;
}

.fortune-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.fortune-header p {
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
  background-color: #4CAF50;
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
  background-color: #4CAF50;
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
  background-color: #4CAF50;
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

.fortune-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  text-align: left;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-header h3 {
  margin: 0;
  color: #333;
}

.category-score {
  font-weight: bold;
  color: #4CAF50;
}

.category-message {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.category-details {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.generate-btn {
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.generate-btn:hover:not(:disabled) {
  background-color: #45a049;
  transform: translateY(-2px);
}

.generate-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style> 