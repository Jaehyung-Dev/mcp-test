<template>
  <div class="feedback-container">
    <div class="feedback-header">
      <h1>피드백</h1>
      <p>서비스 개선을 위한 의견을 남겨주세요</p>
    </div>

    <div class="feedback-form">
      <div class="form-group">
        <label for="message">의견</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="개선하고 싶은 점이나 의견을 자유롭게 남겨주세요"
          rows="5"
        ></textarea>
      </div>

      <button 
        class="submit-btn" 
        @click="submitFeedback"
        :disabled="!message.trim()"
      >
        제출하기
      </button>
    </div>

    <div v-if="showSuccess" class="success-message">
      피드백이 성공적으로 제출되었습니다! 감사합니다 😊
    </div>

    <div class="feedback-list" v-if="feedbacks.length > 0">
      <h2>제출된 피드백</h2>
      <div class="feedback-items">
        <div v-for="(feedback, index) in feedbacks" :key="index" class="feedback-item">
          <div class="feedback-content">{{ feedback.message }}</div>
          <div class="feedback-date">{{ feedback.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('')
const showSuccess = ref(false)
const feedbacks = ref([])

// 로컬 스토리지에서 피드백 불러오기
const loadFeedbacks = () => {
  const savedFeedbacks = localStorage.getItem('feedbacks')
  if (savedFeedbacks) {
    feedbacks.value = JSON.parse(savedFeedbacks)
  }
}

// 피드백 저장하기
const saveFeedbacks = () => {
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks.value))
}

// 컴포넌트가 마운트될 때 피드백 불러오기
onMounted(() => {
  loadFeedbacks()
})

const submitFeedback = async () => {
  if (!message.value.trim()) return

  try {
    // 피드백 저장
    feedbacks.value.unshift({
      message: message.value,
      date: new Date().toLocaleString()
    })
    
    // 로컬 스토리지에 저장
    saveFeedbacks()
    
    showSuccess.value = true
    message.value = ''
    
    setTimeout(() => {
      showSuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('피드백 제출 실패:', error)
  }
}
</script>

<style scoped>
.feedback-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.feedback-header {
  text-align: center;
  margin-bottom: 2rem;
}

.feedback-header h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.feedback-header p {
  color: #666;
  font-size: 1.1rem;
}

.feedback-form {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
}

textarea:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #dff0d8;
  color: #3c763d;
  border-radius: 5px;
  text-align: center;
  animation: fadeIn 0.5s ease;
}

.feedback-list {
  margin-top: 2rem;
}

.feedback-list h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.feedback-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feedback-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.feedback-content {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
}

.feedback-date {
  font-size: 0.8rem;
  color: #666;
  text-align: right;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 