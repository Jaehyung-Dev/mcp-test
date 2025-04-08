import { ref, computed } from 'vue'

export function useFortune(tabs) {
  const currentTab = ref('today')
  const fortuneData = ref({
    today: { 
      numbers: [], 
      score: 0,
      hasGenerated: false,
      categories: {
        love: { score: 0, message: '', details: '' },
        study: { score: 0, message: '', details: '' },
        work: { score: 0, message: '', details: '' },
        health: { score: 0, message: '', details: '' }
      }
    },
    week: { 
      numbers: [], 
      score: 0,
      hasGenerated: false,
      categories: {
        love: { score: 0, message: '', details: '' },
        study: { score: 0, message: '', details: '' },
        work: { score: 0, message: '', details: '' },
        health: { score: 0, message: '', details: '' }
      }
    },
    month: { 
      numbers: [], 
      score: 0,
      hasGenerated: false,
      categories: {
        love: { score: 0, message: '', details: '' },
        study: { score: 0, message: '', details: '' },
        work: { score: 0, message: '', details: '' },
        health: { score: 0, message: '', details: '' }
      }
    },
    year: { 
      numbers: [], 
      score: 0,
      hasGenerated: false,
      categories: {
        love: { score: 0, message: '', details: '' },
        study: { score: 0, message: '', details: '' },
        work: { score: 0, message: '', details: '' },
        health: { score: 0, message: '', details: '' }
      }
    }
  })
  const isAnimating = ref(false)

  const getTabTitle = computed(() => {
    const tab = tabs.find(t => t.id === currentTab.value)
    return tab ? tab.label : ''
  })

  const luckyNumbers = computed(() => fortuneData.value[currentTab.value].numbers)
  const luckScore = computed(() => fortuneData.value[currentTab.value].score)
  const categoryScores = computed(() => fortuneData.value[currentTab.value].categories)
  const hasGenerated = computed(() => fortuneData.value[currentTab.value].hasGenerated)

  const generateNumbers = async () => {
    if (fortuneData.value[currentTab.value].hasGenerated) return
    
    isAnimating.value = true
    let maxNumber = 1000
    
    switch(currentTab.value) {
      case 'week':
        maxNumber = 2000
        break
      case 'month':
        maxNumber = 3000
        break
      case 'year':
        maxNumber = 5000
        break
    }
    
    // 각 카테고리별로 독립적인 운세 생성
    const generateCategoryScore = () => {
      // 1부터 100까지의 균등한 확률로 점수 생성
      return Math.floor(Math.random() * 100) + 1
    }

    // 각 카테고리별 독립적인 점수 생성
    const categories = {
      love: generateCategoryScore(),
      study: generateCategoryScore(),
      work: generateCategoryScore(),
      health: generateCategoryScore()
    }

    // 행운의 숫자는 3개만 생성 (표시용)
    const numbers = []
    while (numbers.length < 3) {
      const num = Math.floor(Math.random() * maxNumber) + 1
      if (!numbers.includes(num)) {
        numbers.push(num)
      }
    }
    const sortedNumbers = numbers.sort((a, b) => a - b)

    // 각 카테고리별 메시지 설정
    const categoryMessages = {
      love: {
        90: '사랑운이 매우 좋습니다! 새로운 인연이 찾아올 수 있습니다 💕',
        80: '연애운이 좋습니다. 현재 관계가 더 발전할 수 있습니다 💑',
        70: '괜찮은 연애운입니다. 마음을 열어보세요 💘',
        60: '평범한 연애운입니다. 조금 더 적극적으로 나가보세요 💝',
        50: '연애운이 보통입니다. 현재 상태를 유지하세요 💗',
        40: '연애운이 조금 낮습니다. 신중하게 행동하세요 💔',
        30: '연애운이 낮습니다. 새로운 관계는 조금 더 기다려보세요 💔',
        20: '연애운이 매우 낮습니다. 혼자만의 시간을 가져보세요 💔',
        0: '연애운이 최악입니다. 잠시 연애는 미뤄두세요 💔'
      },
      study: {
        90: '학업운이 매우 좋습니다! 시험과 과제에서 좋은 결과를 얻을 수 있습니다 📚',
        80: '학업운이 좋습니다. 집중력이 높아지는 시기입니다 ✏️',
        70: '괜찮은 학업운입니다. 노력하면 좋은 결과가 있을 것입니다 📝',
        60: '평범한 학업운입니다. 꾸준한 노력이 필요합니다 📖',
        50: '학업운이 보통입니다. 현재 페이스를 유지하세요 📔',
        40: '학업운이 조금 낮습니다. 더 많은 노력이 필요합니다 📕',
        30: '학업운이 낮습니다. 집중이 잘 안될 수 있습니다 📘',
        20: '학업운이 매우 낮습니다. 쉬는 시간을 충분히 가지세요 📙',
        0: '학업운이 최악입니다. 잠시 휴식을 취하세요 📚'
      },
      work: {
        90: '직장운이 매우 좋습니다! 승진이나 좋은 기회가 찾아올 수 있습니다 💼',
        80: '직장운이 좋습니다. 프로젝트가 순조롭게 진행될 것입니다 📈',
        70: '괜찮은 직장운입니다. 노력한 만큼의 결과가 있을 것입니다 📊',
        60: '평범한 직장운입니다. 꾸준한 노력이 필요합니다 📑',
        50: '직장운이 보통입니다. 현재 페이스를 유지하세요 📋',
        40: '직장운이 조금 낮습니다. 더 많은 노력이 필요합니다 📉',
        30: '직장운이 낮습니다. 실수하지 않도록 주의하세요 📉',
        20: '직장운이 매우 낮습니다. 조심스럽게 행동하세요 📉',
        0: '직장운이 최악입니다. 잠시 휴식을 취하세요 💼'
      },
      health: {
        90: '건강운이 매우 좋습니다! 활력이 넘치는 시기입니다 💪',
        80: '건강운이 좋습니다. 운동이나 새로운 취미를 시작하기 좋은 시기입니다 🏃‍♂️',
        70: '괜찮은 건강운입니다. 평소보다 더 활기찬 하루가 될 것입니다 🏋️‍♂️',
        60: '평범한 건강운입니다. 규칙적인 생활을 유지하세요 🧘‍♂️',
        50: '건강운이 보통입니다. 현재 상태를 유지하세요 🚶‍♂️',
        40: '건강운이 조금 낮습니다. 충분한 휴식이 필요합니다 😴',
        30: '건강운이 낮습니다. 무리하지 않도록 주의하세요 🤒',
        20: '건강운이 매우 낮습니다. 충분한 휴식을 취세요 🤕',
        0: '건강운이 최악입니다. 병원을 방문하는 것이 좋을 수 있습니다 🏥'
      }
    }

    // 각 카테고리별 상세 설명
    const categoryDetails = {
      love: {
        90: '새로운 만남이 있을 가능성이 높습니다. 마음을 열고 기다려보세요.',
        80: '현재 관계가 더 발전할 수 있는 시기입니다. 솔직한 대화를 나눠보세요.',
        70: '작은 기회가 찾아올 수 있습니다. 주변을 둘러보세요.',
        60: '조금 더 적극적인 태도가 필요합니다. 용기를 내보세요.',
        50: '현재 상태를 유지하는 것이 좋습니다. 서두르지 마세요.',
        40: '신중한 판단이 필요한 시기입니다. 서두르지 마세요.',
        30: '새로운 관계는 잠시 미뤄두는 것이 좋습니다.',
        20: '혼자만의 시간을 가지며 마음을 정리해보세요.',
        0: '연애는 잠시 미뤄두고 자신에게 집중하세요.'
      },
      study: {
        90: '집중력이 매우 높은 시기입니다. 중요한 시험을 치르기에 좋습니다.',
        80: '학습 능력이 좋은 시기입니다. 새로운 것을 배우기에 적합합니다.',
        70: '꾸준한 노력이 좋은 결과를 가져올 것입니다.',
        60: '조금 더 집중이 필요합니다. 계획을 세워보세요.',
        50: '현재 페이스를 유지하며 꾸준히 공부하세요.',
        40: '더 많은 노력이 필요합니다. 시간을 잘 관리하세요.',
        30: '집중이 잘 안될 수 있습니다. 쉬는 시간을 충분히 가지세요.',
        20: '학습 능력이 떨어질 수 있습니다. 휴식을 취하세요.',
        0: '잠시 휴식을 취하며 마음을 정리해보세요.'
      },
      work: {
        90: '새로운 기회가 찾아올 수 있습니다. 적극적으로 도전해보세요.',
        80: '프로젝트가 순조롭게 진행될 것입니다. 자신감을 가지세요.',
        70: '노력한 만큼의 결과가 있을 것입니다. 꾸준히 하세요.',
        60: '조금 더 집중이 필요합니다. 계획을 세워보세요.',
        50: '현재 페이스를 유지하며 꾸준히 하세요.',
        40: '더 많은 노력이 필요합니다. 시간을 잘 관리하세요.',
        30: '실수하지 않도록 주의가 필요합니다.',
        20: '조심스럽게 행동하세요. 중요한 결정은 미루세요.',
        0: '잠시 휴식을 취하며 마음을 정리해보세요.'
      },
      health: {
        90: '활력이 넘치는 시기입니다. 새로운 운동을 시작해보세요.',
        80: '건강 상태가 매우 좋습니다. 규칙적인 운동을 시작하세요.',
        70: '평소보다 더 활기찬 하루가 될 것입니다.',
        60: '규칙적인 생활을 유지하세요. 충분한 수면을 취하세요.',
        50: '현재 상태를 유지하세요. 무리하지 마세요.',
        40: '충분한 휴식이 필요합니다. 스트레스를 줄이세요.',
        30: '무리하지 않도록 주의하세요. 휴식을 취하세요.',
        20: '충분한 휴식을 취하세요. 병원을 방문하는 것을 고려해보세요.',
        0: '건강에 주의가 필요합니다. 병원을 방문하세요.'
      }
    }

    // 각 카테고리별 점수와 메시지 설정
    const updatedCategories = {}
    for (const [category, score] of Object.entries(categories)) {
      const messages = categoryMessages[category]
      const details = categoryDetails[category]
      let message = ''
      let detail = ''

      if (score >= 90) { message = messages[90]; detail = details[90] }
      else if (score >= 80) { message = messages[80]; detail = details[80] }
      else if (score >= 70) { message = messages[70]; detail = details[70] }
      else if (score >= 60) { message = messages[60]; detail = details[60] }
      else if (score >= 50) { message = messages[50]; detail = details[50] }
      else if (score >= 40) { message = messages[40]; detail = details[40] }
      else if (score >= 30) { message = messages[30]; detail = details[30] }
      else if (score >= 20) { message = messages[20]; detail = details[20] }
      else { message = messages[0]; detail = details[0] }

      updatedCategories[category] = {
        score,
        message,
        details: detail
      }
    }

    // 현재 탭의 운세 데이터 업데이트
    fortuneData.value[currentTab.value] = {
      ...fortuneData.value[currentTab.value],
      numbers: sortedNumbers,
      hasGenerated: true,
      categories: updatedCategories
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    isAnimating.value = false
  }

  const getLuckMessage = computed(() => {
    if (!fortuneData.value[currentTab.value].hasGenerated) {
      return ''
    }

    const messages = {
      today: {
        90: '대박! 오늘은 전설적인 행운의 날입니다! 🌟',
        80: '놀라운 행운이 당신을 기다립니다! ✨',
        70: '매우 좋은 하루가 될 것 같네요! 🌈',
        60: '좋은 일이 생길 것 같습니다! 🍀',
        50: '평범한 하루가 될 것 같습니다. 😊',
        40: '조금 조심스러운 하루네요. ⚡',
        30: '주의가 필요한 하루입니다. 🌧️',
        20: '실수하지 않도록 주의하세요! ⚠️',
        0: '오늘은 신중하게 행동하세요! 💫'
      },
      week: {
        90: '이번 주는 전설적인 행운이 당신을 찾아옵니다! 🌟',
        80: '이번 주는 놀라운 기회가 찾아올 것입니다! ✨',
        70: '이번 주는 매우 좋은 일들이 많을 것 같네요! 🌈',
        60: '이번 주는 작은 행운이 계속될 것입니다! 🍀',
        50: '이번 주는 평소와 같은 일상이 이어질 것입니다. 😊',
        40: '이번 주는 조금 조심스럽게 보내야 할 것 같네요. ⚡',
        30: '이번 주는 주의가 필요한 일들이 많을 수 있습니다. 🌧️',
        20: '이번 주는 실수하지 않도록 주의가 필요합니다. ⚠️',
        0: '이번 주는 신중하게 행동하는 것이 좋을 것 같습니다. 💫'
      },
      month: {
        90: '이번 달은 전설적인 행운이 당신을 찾아옵니다! 🌟',
        80: '이번 달은 놀라운 기회가 찾아올 것입니다! ✨',
        70: '이번 달은 매우 좋은 일들이 많을 것 같네요! 🌈',
        60: '이번 달은 작은 행운이 계속될 것입니다! ��',
        50: '이번 달은 평소와 같은 일상이 이어질 것입니다. 😊',
        40: '이번 달은 조금 조심스럽게 보내야 할 것 같네요. ⚡',
        30: '이번 달은 주의가 필요한 일들이 많을 수 있습니다. 🌧️',
        20: '이번 달은 실수하지 않도록 주의가 필요합니다. ⚠️',
        0: '이번 달은 신중하게 행동하는 것이 좋을 것 같습니다. 💫'
      },
      year: {
        90: '올해는 전설적인 행운이 당신을 찾아옵니다! 🌟',
        80: '올해는 놀라운 기회가 찾아올 것입니다! ✨',
        70: '올해는 매우 좋은 일들이 많을 것 같네요! 🌈',
        60: '올해는 작은 행운이 계속될 것입니다! 🍀',
        50: '올해는 평소와 같은 일상이 이어질 것입니다. 😊',
        40: '올해는 조금 조심스럽게 보내야 할 것 같네요. ⚡',
        30: '올해는 주의가 필요한 일들이 많을 수 있습니다. 🌧️',
        20: '올해는 실수하지 않도록 주의가 필요합니다. ⚠️',
        0: '올해는 신중하게 행동하는 것이 좋을 것 같습니다. 💫'
      }
    }

    const tabMessages = messages[currentTab.value]
    if (luckScore.value >= 90) return tabMessages[90]
    if (luckScore.value >= 80) return tabMessages[80]
    if (luckScore.value >= 70) return tabMessages[70]
    if (luckScore.value >= 60) return tabMessages[60]
    if (luckScore.value >= 50) return tabMessages[50]
    if (luckScore.value >= 40) return tabMessages[40]
    if (luckScore.value >= 30) return tabMessages[30]
    if (luckScore.value >= 20) return tabMessages[20]
    return tabMessages[0]
  })

  const getLuckDetails = computed(() => {
    if (!fortuneData.value[currentTab.value].hasGenerated) {
      return ''
    }

    const details = {
      today: {
        90: '새로운 기회가 찾아올 가능성이 매우 높습니다. 용기있게 도전해보세요!',
        80: '오늘은 중요한 결정을 내리기에 좋은 날입니다.',
        70: '예상치 못한 좋은 소식이 있을 수 있습니다.',
        60: '작은 행운이 당신을 찾아올 것입니다.',
        50: '평소와 같은 일상이 이어질 것입니다.',
        40: '계획을 세밀하게 세우고 행동하세요.',
        30: '중요한 결정은 미루는 것이 좋을 수 있습니다.',
        20: '실수할 가능성이 높으니 주의가 필요합니다.',
        0: '오늘은 휴식을 취하는 것이 좋을 것 같습니다.'
      },
      week: {
        90: '이번 주는 새로운 도전과 기회가 많이 찾아올 것입니다. 적극적으로 도전해보세요!',
        80: '이번 주는 중요한 결정을 내리기에 좋은 시기입니다.',
        70: '이번 주는 예상치 못한 좋은 소식이 있을 수 있습니다.',
        60: '이번 주는 작은 행운이 계속될 것입니다.',
        50: '이번 주는 평소와 같은 일상이 이어질 것입니다.',
        40: '이번 주는 계획을 세밀하게 세우고 행동하세요.',
        30: '이번 주는 중요한 결정은 미루는 것이 좋을 수 있습니다.',
        20: '이번 주는 실수할 가능성이 높으니 주의가 필요합니다.',
        0: '이번 주는 휴식을 취하는 것이 좋을 것 같습니다.'
      },
      month: {
        90: '이번 달은 새로운 도전과 기회가 많이 찾아올 것입니다. 적극적으로 도전해보세요!',
        80: '이번 달은 중요한 결정을 내리기에 좋은 시기입니다.',
        70: '이번 달은 예상치 못한 좋은 소식이 있을 수 있습니다.',
        60: '이번 달은 작은 행운이 계속될 것입니다.',
        50: '이번 달은 평소와 같은 일상이 이어질 것입니다.',
        40: '이번 달은 계획을 세밀하게 세우고 행동하세요.',
        30: '이번 달은 중요한 결정은 미루는 것이 좋을 수 있습니다.',
        20: '이번 달은 실수할 가능성이 높으니 주의가 필요합니다.',
        0: '이번 달은 휴식을 취하는 것이 좋을 것 같습니다.'
      },
      year: {
        90: '올해는 새로운 도전과 기회가 많이 찾아올 것입니다. 적극적으로 도전해보세요!',
        80: '올해는 중요한 결정을 내리기에 좋은 시기입니다.',
        70: '올해는 예상치 못한 좋은 소식이 있을 수 있습니다.',
        60: '올해는 작은 행운이 계속될 것입니다.',
        50: '올해는 평소와 같은 일상이 이어질 것입니다.',
        40: '올해는 계획을 세밀하게 세우고 행동하세요.',
        30: '올해는 중요한 결정은 미루는 것이 좋을 수 있습니다.',
        20: '올해는 실수할 가능성이 높으니 주의가 필요합니다.',
        0: '올해는 휴식을 취하는 것이 좋을 것 같습니다.'
      }
    }

    const tabDetails = details[currentTab.value]
    if (luckScore.value >= 90) return tabDetails[90]
    if (luckScore.value >= 80) return tabDetails[80]
    if (luckScore.value >= 70) return tabDetails[70]
    if (luckScore.value >= 60) return tabDetails[60]
    if (luckScore.value >= 50) return tabDetails[50]
    if (luckScore.value >= 40) return tabDetails[40]
    if (luckScore.value >= 30) return tabDetails[30]
    if (luckScore.value >= 20) return tabDetails[20]
    return tabDetails[0]
  })

  return {
    currentTab,
    fortuneData,
    isAnimating,
    hasGenerated,
    getTabTitle,
    luckyNumbers,
    categoryScores,
    getLuckMessage,
    getLuckDetails,
    generateNumbers
  }
} 