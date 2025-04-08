<template>
  <div class="feedback-button" @click="openFeedbackModal">
    <div class="button-content">
      <font-awesome-icon icon="comment-dots" class="icon" width="16" height="16" />
      <span class="text">피드백</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const openFeedbackModal = () => {
  router.push('/feedback')
}
</script>

<style scoped>
.feedback-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #4CAF50;
  color: white;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow: hidden;
}

.button-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.feedback-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.icon {
  width: 16px !important;
  height: 16px !important;
  font-size: 16px;
  display: block;
}

.text {
  font-size: 0.55rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .feedback-button {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
  
  .icon {
    width: 14px !important;
    height: 14px !important;
    font-size: 14px;
  }
  
  .text {
    font-size: 0.5rem;
    margin-top: 1px;
  }
}
</style> 