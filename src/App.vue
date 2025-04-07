<template>
  <div class="container">
    <h1>오늘의 행운 지수</h1>
    <div class="lucky-numbers">
      <div v-for="(number, index) in luckyNumbers" :key="index" class="number">
        {{ number }}
      </div>
    </div>
    <div class="luck-score">
      <h2>행운 지수: {{ luckScore }}%</h2>
      <p>{{ getLuckMessage }}</p>
    </div>
    <button @click="generateNumbers" class="generate-btn">
      새로운 행운 지수 생성하기
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const luckyNumbers = ref([])
const luckScore = ref(0)

const generateNumbers = () => {
  const numbers = []
  while (numbers.length < 3) {
    const num = Math.floor(Math.random() * 1000) + 1
    if (!numbers.includes(num)) {
      numbers.push(num)
    }
  }
  luckyNumbers.value = numbers.sort((a, b) => a - b)
  // 행운 지수 계산 (세 숫자의 평균을 백분율로 변환)
  luckScore.value = Math.round((numbers.reduce((a, b) => a + b, 0) / 3000) * 100)
}

const getLuckMessage = computed(() => {
  if (luckScore.value >= 80) return '대박! 오늘은 매우 행운의 날입니다! 🌟'
  if (luckScore.value >= 60) return '좋은 일이 생길 것 같네요! ✨'
  if (luckScore.value >= 40) return '평범한 하루가 될 것 같습니다. 😊'
  if (luckScore.value >= 20) return '조금 조심스러운 하루네요. 🍀'
  return '오늘은 실수하지 않도록 주의하세요! 💫'
})

// 초기 숫자 생성
generateNumbers()
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.lucky-numbers {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.number {
  background-color: #42b883;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 80px;
}

.luck-score {
  margin-bottom: 2rem;
}

.luck-score h2 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.generate-btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.generate-btn:hover {
  background-color: #3aa876;
}
</style>
