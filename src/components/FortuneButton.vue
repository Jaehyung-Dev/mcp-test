<template>
  <button @click="$emit('generate')" class="generate-btn" :disabled="isAnimating">
    {{ isAnimating ? '생성 중...' : '새로운 행운 지수 생성하기' }}
  </button>
</template>

<script setup>
defineProps({
  isAnimating: {
    type: Boolean,
    default: false
  }
})

defineEmits(['generate'])
</script>

<style scoped>
.generate-btn {
  background: linear-gradient(45deg, #42b883, #35495e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.generate-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.4);
}

.generate-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .generate-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    max-width: 250px;
  }
}
</style> 