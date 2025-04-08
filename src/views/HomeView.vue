<template>
  <div class="home">
    <div class="hero">
      <h1>행운의 숫자</h1>
      <p>당신의 운세를 확인해보세요 ✨</p>
    </div>

    <div class="categories">
      <router-link to="/love" class="category-card">
        <div class="category-icon">💕</div>
        <h2>연애운</h2>
        <p>사랑과 관계에 대한 운세를 확인하세요</p>
      </router-link>

      <router-link to="/study" class="category-card">
        <div class="category-icon">📚</div>
        <h2>학업운</h2>
        <p>공부와 시험에 대한 운세를 확인하세요</p>
      </router-link>

      <router-link to="/work" class="category-card">
        <div class="category-icon">💼</div>
        <h2>직장운</h2>
        <p>직장과 일에 대한 운세를 확인하세요</p>
      </router-link>

      <router-link to="/health" class="category-card">
        <div class="category-icon">💪</div>
        <h2>건강운</h2>
        <p>건강과 웰빙에 대한 운세를 확인하세요</p>
      </router-link>
    </div>

    <div class="instructions">
      <h2>사용 방법</h2>
      <ol>
        <li>원하는 카테고리를 선택하세요</li>
        <li>기간을 선택하세요 (오늘, 이번 주, 이번 달, 올해)</li>
        <li>행운의 숫자를 생성하세요</li>
        <li>운세를 확인하세요</li>
      </ol>
      <p class="note">* 각 카테고리별로 한 번만 운세를 생성할 수 있습니다</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  color: #666;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.category-card {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.category-card p {
  color: #666;
  line-height: 1.5;
}

.instructions {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.instructions h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.instructions ol {
  list-style-position: inside;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.instructions li {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
}

.instructions .note {
  font-size: 1rem;
  color: #999;
  text-align: center;
  font-style: italic;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  .categories {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 1.5rem;
  }
}
</style> 