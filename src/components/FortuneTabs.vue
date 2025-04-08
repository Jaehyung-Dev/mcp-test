<template>
  <div class="tabs">
    <button 
      v-for="tab in tabs" 
      :key="tab.id"
      @click="$emit('update:modelValue', tab.id)"
      :class="{ active: modelValue === tab.id }"
      class="tab-btn"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-btn {
  background: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #666;
}

.tab-btn.active {
  background: linear-gradient(45deg, #42b883, #35495e);
  color: white;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.tab-btn:hover:not(.active) {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .tabs {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tab-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style> 